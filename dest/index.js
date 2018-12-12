"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const orga = require("orga");
const fs = require("fs");
const util = require("util");
const Test_1 = require("./haxe/haxeintegration/Test");
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        const content = yield util.promisify(fs.readFile)('/home/fullofcaffeine/caffeine/org/focus.org');
        const ast = orga.parse(content.toString());
        const foo = new Test_1.default();
        debugger;
    });
}
main();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLDZCQUE2QjtBQUM3Qix5QkFBeUI7QUFJekIsNkJBQTZCO0FBRTdCLHNEQUErQztBQU0vQyxTQUFlLElBQUk7O1FBQ2pCLE1BQU0sT0FBTyxHQUFHLE1BQU0sSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLENBQy9DLDZDQUE2QyxDQUM5QyxDQUFDO1FBQ0YsTUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztRQUUzQyxNQUFNLEdBQUcsR0FBRyxJQUFJLGNBQUksRUFBRSxDQUFDO1FBRXZCLFFBQVEsQ0FBQztJQUNYLENBQUM7Q0FBQTtBQUVELElBQUksRUFBRSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgb3JnYSBmcm9tICdvcmdhJztcbmltcG9ydCAqIGFzIGZzIGZyb20gJ2ZzJztcbmltcG9ydCAqIGFzIHVuaWZpZWQgZnJvbSAndW5pZmllZCc7XG5pbXBvcnQgKiBhcyBwYXJzZSBmcm9tICdvcmdhLXVuaWZpZWQnO1xuaW1wb3J0ICogYXMgbWFya2Rvd24gZnJvbSAncmVtYXJrLXBhcnNlJztcbmltcG9ydCAqIGFzIHV0aWwgZnJvbSAndXRpbCc7XG5pbXBvcnQgKiBhcyAkIGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgVGVzdCBmcm9tICcuL2hheGUvaGF4ZWludGVncmF0aW9uL1Rlc3QnO1xuXG4vL1BPQyBlXG4vLyBvcmcgLT4gbWFya2Rvd25cbi8vIHdvcmRwcmVzcyBhcGkgLT5cblxuYXN5bmMgZnVuY3Rpb24gbWFpbigpIHtcbiAgY29uc3QgY29udGVudCA9IGF3YWl0IHV0aWwucHJvbWlzaWZ5KGZzLnJlYWRGaWxlKShcbiAgICAnL2hvbWUvZnVsbG9mY2FmZmVpbmUvY2FmZmVpbmUvb3JnL2ZvY3VzLm9yZydcbiAgKTtcbiAgY29uc3QgYXN0ID0gb3JnYS5wYXJzZShjb250ZW50LnRvU3RyaW5nKCkpO1xuXG4gIGNvbnN0IGZvbyA9IG5ldyBUZXN0KCk7XG5cbiAgZGVidWdnZXI7XG59XG5cbm1haW4oKTtcbiJdfQ==