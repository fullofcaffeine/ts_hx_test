package genjs.processor;

typedef ProcessedMain = {	
	code:String,
	template:haxe.Template,
	dependencies:Array<Dependency>,
	exposes:Map<String, Expose>,
}
