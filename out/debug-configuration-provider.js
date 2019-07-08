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
exports.PIG_DEBUG = 'pig-debug';
class DebugConfigurationProvider {
    resolveDebugConfiguration(folder, debugConfiguration, token) {
        return __awaiter(this, void 0, void 0, function* () {
            // overrides configuration property to be sure that debuggers stops at the very fist line
            debugConfiguration.request = 'launch';
            debugConfiguration.stopOnEntry = true;
            return debugConfiguration;
        });
    }
}
exports.DebugConfigurationProvider = DebugConfigurationProvider;
//# sourceMappingURL=debug-configuration-provider.js.map