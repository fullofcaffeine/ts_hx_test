package genjs.processor;

import haxe.ds.Option;
import haxe.Template;
import haxe.macro.Type;
import haxe.macro.JSGenApi;
import genjs.template.*;

using StringTools;
#if tink_macro
using tink.MacroApi;
#end

class TypeProcessor {
	static var cache = new Map();
	
	public static function get(id:String) {
		return cache[id];
	}
	
	public static function process(api:JSGenApi, type:Type) {
		return switch flatten(type) {
			case Some(FClass(id, cls)):
				if(cache[id] == null) cache[id] = PClass(ClassProcessor.process(api, id, cls, type));
				Some(cache[id]);
			case Some(FEnum(id, enm)):
				if(cache[id] == null) cache[id] = PEnum(EnumProcessor.process(api, id, enm, type));
				Some(cache[id]);
			default:
				None;
		}
	}

	static function shouldGenerateAbstract(cls) {
		return cls.get().statics.get().filter(function (field)
			return switch field.expr() {
				case null: false;
				case e: true;
			}
		).length > 0;
	}
	
	public static function flatten(type:Type) {
		return switch type {
			case TAbstract(_.get() => abs, _) if(abs.meta.has(':coreType')):
				None;
			case TAbstract(_.get().impl => null, _):
				None;
			case TAbstract(_.get().impl => cls, _) if(!shouldGenerateAbstract(cls)):
				None;
			case TInst(cls, _) | TAbstract(_.get().impl => cls, _):
				Some(FClass(cls.toString(), cls.get()));
			case TEnum(enm, _):
				Some(FEnum(enm.toString(), enm.get()));
			default:
				None;
		}
	}
}

enum FlattenedType {
	FClass(id:TypeID, cls:ClassType);
	FEnum(id:TypeID, enm:EnumType);
}

enum ProcessResult {
	PClass(c:ProcessedClass);
	PEnum(e:ProcessedEnum);
}

