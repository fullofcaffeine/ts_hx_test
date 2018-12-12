package genjs.generator;

import haxe.ds.Option;
import haxe.macro.JSGenApi;
import genjs.processor.*;

#if tink_macro
using tink.MacroApi;
#else
using genjs._util.MacroUtil;
#end
using haxe.io.Path;
using StringTools;
using genjs.template.CodeTools;

class EnumGenerator implements IEnumGenerator {
	public function new() {}
	public function generate(api:JSGenApi, e:ProcessedEnum) {
		
		var filepath = e.id.asFilePath() + '.js';
		var name = e.type.name;
		
		var data = {};
		Reflect.setField(data, 'enumName', name);
		Reflect.setField(data, name, name);
		for(dependency in e.dependencies) switch dependency {
			case DType(type): 
				var id:TypeID = type.getID();
				Reflect.setField(data, id.asTemplateHolder(), id.asVarSafeName() + '.default');
			default:
		}
		var requireStatements = new RequireGenerator().generate(api, filepath.directory(), e.dependencies);
		
		var ename = e.id.split('.').map(api.quoteString).join(',');
		var constructs = e.type.names.map(api.quoteString).join(',');
		var ctor = 'var $name = $$hxClasses["${e.id}"] = { __ename__: [$ename], __constructs__: [$constructs] }';
		var fields = [for(c in e.constructors) c.template.execute(name)];
		
		return Some([
			'// Enum: ${e.id}',
			'var $$global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this',
			'$$global.Object.defineProperty(exports, "__esModule", {value: true});',
			'// Imports',
			requireStatements,
			'// Definition',
			ctor,
			fields.join('\n'),
			'exports.default = $name;',
		].join('\n\n'));
	}
}