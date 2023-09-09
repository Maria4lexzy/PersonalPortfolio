/* empty css                             */import { c as createAstro, a as createComponent, r as renderTemplate, d as renderComponent$1 } from '../astro.713e64d5.mjs';
import { a as $$Subtitle, b as $$BaseLayout } from './angularProject.md.53c16156.mjs';
import { Observable, merge, Subject, Subscription, of, BehaviorSubject } from 'rxjs';
import { share, switchMap, distinctUntilChanged } from 'rxjs/operators';

/**
 * @license Angular v16.2.2
 * (c) 2010-2022 Google LLC. https://angular.io/
 * License: MIT
 */

function getClosureSafeProperty(objWithPropertyToExtract) {
  for (let key in objWithPropertyToExtract) {
    if (objWithPropertyToExtract[key] === getClosureSafeProperty) {
      return key;
    }
  }
  throw Error('Could not find renamed property on target object.');
}
function stringify(token) {
  if (typeof token === 'string') {
    return token;
  }
  if (Array.isArray(token)) {
    return '[' + token.map(stringify).join(', ') + ']';
  }
  if (token == null) {
    return '' + token;
  }
  if (token.overriddenName) {
    return `${token.overriddenName}`;
  }
  if (token.name) {
    return `${token.name}`;
  }
  const res = token.toString();
  if (res == null) {
    return '' + res;
  }
  const newLineIndex = res.indexOf('\n');
  return newLineIndex === -1 ? res : res.substring(0, newLineIndex);
}
/**
 * Concatenates two strings with separator, allocating new strings only when necessary.
 *
 * @param before before string.
 * @param separator separator string.
 * @param after after string.
 * @returns concatenated string.
 */
function concatStringsWithSpace(before, after) {
  return before == null || before === '' ? after === null ? '' : after : after == null || after === '' ? before : before + ' ' + after;
}
const __forward_ref__ = /*#__PURE__*/getClosureSafeProperty({
  __forward_ref__: getClosureSafeProperty
});
/**
 * Allows to refer to references which are not yet defined.
 *
 * For instance, `forwardRef` is used when the `token` which we need to refer to for the purposes of
 * DI is declared, but not yet defined. It is also used when the `token` which we use when creating
 * a query is not yet defined.
 *
 * `forwardRef` is also used to break circularities in standalone components imports.
 *
 * @usageNotes
 * ### Circular dependency example
 * {@example core/di/ts/forward_ref/forward_ref_spec.ts region='forward_ref'}
 *
 * ### Circular standalone reference import example
 * ```ts
 * @Component({
 *   standalone: true,
 *   imports: [ChildComponent],
 *   selector: 'app-parent',
 *   template: `<app-child [hideParent]="hideParent"></app-child>`,
 * })
 * export class ParentComponent {
 *   @Input() hideParent: boolean;
 * }
 *
 *
 * @Component({
 *   standalone: true,
 *   imports: [CommonModule, forwardRef(() => ParentComponent)],
 *   selector: 'app-child',
 *   template: `<app-parent *ngIf="!hideParent"></app-parent>`,
 * })
 * export class ChildComponent {
 *   @Input() hideParent: boolean;
 * }
 * ```
 *
 * @publicApi
 */
function forwardRef(forwardRefFn) {
  forwardRefFn.__forward_ref__ = forwardRef;
  forwardRefFn.toString = function () {
    return stringify(this());
  };
  return forwardRefFn;
}
/**
 * Lazily retrieves the reference value from a forwardRef.
 *
 * Acts as the identity function when given a non-forward-ref value.
 *
 * @usageNotes
 * ### Example
 *
 * {@example core/di/ts/forward_ref/forward_ref_spec.ts region='resolve_forward_ref'}
 *
 * @see {@link forwardRef}
 * @publicApi
 */
function resolveForwardRef(type) {
  return isForwardRef(type) ? type() : type;
}
/** Checks whether a function is wrapped by a `forwardRef`. */
function isForwardRef(fn) {
  return typeof fn === 'function' && fn.hasOwnProperty(__forward_ref__) && fn.__forward_ref__ === forwardRef;
}
function isEnvironmentProviders(value) {
  return value && !!value.ɵproviders;
}

/**
 * Base URL for the error details page.
 *
 * Keep this constant in sync across:
 *  - packages/compiler-cli/src/ngtsc/diagnostics/src/error_details_base_url.ts
 *  - packages/core/src/error_details_base_url.ts
 */
const ERROR_DETAILS_PAGE_BASE_URL = 'https://angular.io/errors';

/**
 * Class that represents a runtime error.
 * Formats and outputs the error message in a consistent way.
 *
 * Example:
 * ```
 *  throw new RuntimeError(
 *    RuntimeErrorCode.INJECTOR_ALREADY_DESTROYED,
 *    ngDevMode && 'Injector has already been destroyed.');
 * ```
 *
 * Note: the `message` argument contains a descriptive error message as a string in development
 * mode (when the `ngDevMode` is defined). In production mode (after tree-shaking pass), the
 * `message` argument becomes `false`, thus we account for it in the typings and the runtime
 * logic.
 */
class RuntimeError extends Error {
  constructor(code, message) {
    super(formatRuntimeError(code, message));
    this.code = code;
  }
}
/**
 * Called to format a runtime error.
 * See additional info on the `message` argument type in the `RuntimeError` class description.
 */
function formatRuntimeError(code, message) {
  // Error code might be a negative number, which is a special marker that instructs the logic to
  // generate a link to the error details page on angular.io.
  // We also prepend `0` to non-compile-time errors.
  const fullCode = `NG0${Math.abs(code)}`;
  let errorMessage = `${fullCode}${message ? ': ' + message : ''}`;
  if (ngDevMode && code < 0) {
    const addPeriodSeparator = !errorMessage.match(/[.,;!?\n]$/);
    const separator = addPeriodSeparator ? '.' : '';
    errorMessage = `${errorMessage}${separator} Find more at ${ERROR_DETAILS_PAGE_BASE_URL}/${fullCode}`;
  }
  return errorMessage;
}

/**
 * Used for stringify render output in Ivy.
 * Important! This function is very performance-sensitive and we should
 * be extra careful not to introduce megamorphic reads in it.
 * Check `core/test/render3/perf/render_stringify` for benchmarks and alternate implementations.
 */
function renderStringify(value) {
  if (typeof value === 'string') return value;
  if (value == null) return '';
  // Use `String` so that it invokes the `toString` method of the value. Note that this
  // appears to be faster than calling `value.toString` (see `render_stringify` benchmark).
  return String(value);
}
/**
 * Used to stringify a value so that it can be displayed in an error message.
 * Important! This function contains a megamorphic read and should only be
 * used for error messages.
 */
function stringifyForError(value) {
  if (typeof value === 'function') return value.name || value.toString();
  if (typeof value === 'object' && value != null && typeof value.type === 'function') {
    return value.type.name || value.type.toString();
  }
  return renderStringify(value);
}

/** Called when directives inject each other (creating a circular dependency) */
function throwCyclicDependencyError(token, path) {
  const depPath = path ? `. Dependency path: ${path.join(' > ')} > ${token}` : '';
  throw new RuntimeError(-200 /* RuntimeErrorCode.CYCLIC_DI_DEPENDENCY */, `Circular dependency in DI detected for ${token}${depPath}`);
}
function throwMixedMultiProviderError() {
  throw new Error(`Cannot mix multi providers and regular providers`);
}
function throwInvalidProviderError(ngModuleType, providers, provider) {
  if (ngModuleType && providers) {
    const providerDetail = providers.map(v => v == provider ? '?' + provider + '?' : '...');
    throw new Error(`Invalid provider for the NgModule '${stringify(ngModuleType)}' - only instances of Provider and Type are allowed, got: [${providerDetail.join(', ')}]`);
  } else if (isEnvironmentProviders(provider)) {
    if (provider.ɵfromNgModule) {
      throw new RuntimeError(207 /* RuntimeErrorCode.PROVIDER_IN_WRONG_CONTEXT */, `Invalid providers from 'importProvidersFrom' present in a non-environment injector. 'importProvidersFrom' can't be used for component providers.`);
    } else {
      throw new RuntimeError(207 /* RuntimeErrorCode.PROVIDER_IN_WRONG_CONTEXT */, `Invalid providers present in a non-environment injector. 'EnvironmentProviders' can't be used for component providers.`);
    }
  } else {
    throw new Error('Invalid provider');
  }
}
/** Throws an error when a token is not found in DI. */
function throwProviderNotFoundError(token, injectorName) {
  const injectorDetails = injectorName ? ` in ${injectorName}` : '';
  throw new RuntimeError(-201 /* RuntimeErrorCode.PROVIDER_NOT_FOUND */, ngDevMode && `No provider for ${stringifyForError(token)} found${injectorDetails}`);
}

// The functions in this file verify that the assumptions we are making
function assertNumber(actual, msg) {
  if (!(typeof actual === 'number')) {
    throwError(msg, typeof actual, 'number', '===');
  }
}
function assertString(actual, msg) {
  if (!(typeof actual === 'string')) {
    throwError(msg, actual === null ? 'null' : typeof actual, 'string', '===');
  }
}
function assertFunction(actual, msg) {
  if (!(typeof actual === 'function')) {
    throwError(msg, actual === null ? 'null' : typeof actual, 'function', '===');
  }
}
function assertEqual(actual, expected, msg) {
  if (!(actual == expected)) {
    throwError(msg, actual, expected, '==');
  }
}
function assertNotEqual(actual, expected, msg) {
  if (!(actual != expected)) {
    throwError(msg, actual, expected, '!=');
  }
}
function assertSame(actual, expected, msg) {
  if (!(actual === expected)) {
    throwError(msg, actual, expected, '===');
  }
}
function assertNotSame(actual, expected, msg) {
  if (!(actual !== expected)) {
    throwError(msg, actual, expected, '!==');
  }
}
function assertLessThan(actual, expected, msg) {
  if (!(actual < expected)) {
    throwError(msg, actual, expected, '<');
  }
}
function assertGreaterThan(actual, expected, msg) {
  if (!(actual > expected)) {
    throwError(msg, actual, expected, '>');
  }
}
function assertGreaterThanOrEqual(actual, expected, msg) {
  if (!(actual >= expected)) {
    throwError(msg, actual, expected, '>=');
  }
}
function assertDefined(actual, msg) {
  if (actual == null) {
    throwError(msg, actual, null, '!=');
  }
}
function throwError(msg, actual, expected, comparison) {
  throw new Error(`ASSERTION ERROR: ${msg}` + (comparison == null ? '' : ` [Expected=> ${expected} ${comparison} ${actual} <=Actual]`));
}
function assertDomNode(node) {
  if (!(node instanceof Node)) {
    throwError(`The provided value must be an instance of a DOM Node but got ${stringify(node)}`);
  }
}
function assertIndexInRange(arr, index) {
  assertDefined(arr, 'Array must be defined.');
  const maxLen = arr.length;
  if (index < 0 || index >= maxLen) {
    throwError(`Index expected to be less than ${maxLen} but got ${index}`);
  }
}

/**
 * Construct an injectable definition which defines how a token will be constructed by the DI
 * system, and in which injectors (if any) it will be available.
 *
 * This should be assigned to a static `ɵprov` field on a type, which will then be an
 * `InjectableType`.
 *
 * Options:
 * * `providedIn` determines which injectors will include the injectable, by either associating it
 *   with an `@NgModule` or other `InjectorType`, or by specifying that this injectable should be
 *   provided in the `'root'` injector, which will be the application-level injector in most apps.
 * * `factory` gives the zero argument function which will create an instance of the injectable.
 *   The factory can call [`inject`](api/core/inject) to access the `Injector` and request injection
 * of dependencies.
 *
 * @codeGenApi
 * @publicApi This instruction has been emitted by ViewEngine for some time and is deployed to npm.
 */
function ɵɵdefineInjectable(opts) {
  return {
    token: opts.token,
    providedIn: opts.providedIn || null,
    factory: opts.factory,
    value: undefined
  };
}
/**
 * Read the injectable def (`ɵprov`) for `type` in a way which is immune to accidentally reading
 * inherited value.
 *
 * @param type A type which may have its own (non-inherited) `ɵprov`.
 */
function getInjectableDef(type) {
  return getOwnDefinition(type, NG_PROV_DEF) || getOwnDefinition(type, NG_INJECTABLE_DEF);
}
/**
 * Return definition only if it is defined directly on `type` and is not inherited from a base
 * class of `type`.
 */
function getOwnDefinition(type, field) {
  return type.hasOwnProperty(field) ? type[field] : null;
}
/**
 * Read the injectable def (`ɵprov`) for `type` or read the `ɵprov` from one of its ancestors.
 *
 * @param type A type which may have `ɵprov`, via inheritance.
 *
 * @deprecated Will be removed in a future version of Angular, where an error will occur in the
 *     scenario if we find the `ɵprov` on an ancestor only.
 */
function getInheritedInjectableDef(type) {
  const def = type && (type[NG_PROV_DEF] || type[NG_INJECTABLE_DEF]);
  if (def) {
    ngDevMode && console.warn(`DEPRECATED: DI is instantiating a token "${type.name}" that inherits its @Injectable decorator but does not provide one itself.\n` + `This will become an error in a future version of Angular. Please add @Injectable() to the "${type.name}" class.`);
    return def;
  } else {
    return null;
  }
}
/**
 * Read the injector def type in a way which is immune to accidentally reading inherited value.
 *
 * @param type type which may have an injector def (`ɵinj`)
 */
function getInjectorDef(type) {
  return type && (type.hasOwnProperty(NG_INJ_DEF) || type.hasOwnProperty(NG_INJECTOR_DEF)) ? type[NG_INJ_DEF] : null;
}
const NG_PROV_DEF = /*#__PURE__*/getClosureSafeProperty({
  ɵprov: getClosureSafeProperty
});
const NG_INJ_DEF = /*#__PURE__*/getClosureSafeProperty({
  ɵinj: getClosureSafeProperty
});
// We need to keep these around so we can read off old defs if new defs are unavailable
const NG_INJECTABLE_DEF = /*#__PURE__*/getClosureSafeProperty({
  ngInjectableDef: getClosureSafeProperty
});
const NG_INJECTOR_DEF = /*#__PURE__*/getClosureSafeProperty({
  ngInjectorDef: getClosureSafeProperty
});

/**
 * Injection flags for DI.
 *
 * @publicApi
 * @deprecated use an options object for [`inject`](api/core/inject) instead.
 */
var InjectFlags = /*#__PURE__*/function (InjectFlags) {
  // TODO(alxhub): make this 'const' (and remove `InternalInjectFlags` enum) when ngc no longer
  // writes exports of it into ngfactory files.
  /** Check self and check parent injector if needed */
  InjectFlags[InjectFlags["Default"] = 0] = "Default";
  /**
   * Specifies that an injector should retrieve a dependency from any injector until reaching the
   * host element of the current component. (Only used with Element Injector)
   */
  InjectFlags[InjectFlags["Host"] = 1] = "Host";
  /** Don't ascend to ancestors of the node requesting injection. */
  InjectFlags[InjectFlags["Self"] = 2] = "Self";
  /** Skip the node that is requesting injection. */
  InjectFlags[InjectFlags["SkipSelf"] = 4] = "SkipSelf";
  /** Inject `defaultValue` instead if token not found. */
  InjectFlags[InjectFlags["Optional"] = 8] = "Optional";
  return InjectFlags;
}(InjectFlags || {});
/**
 * Current implementation of inject.
 *
 * By default, it is `injectInjectorOnly`, which makes it `Injector`-only aware. It can be changed
 * to `directiveInject`, which brings in the `NodeInjector` system of ivy. It is designed this
 * way for two reasons:
 *  1. `Injector` should not depend on ivy logic.
 *  2. To maintain tree shake-ability we don't want to bring in unnecessary code.
 */
let _injectImplementation;
function getInjectImplementation() {
  return _injectImplementation;
}
/**
 * Sets the current inject implementation.
 */
function setInjectImplementation(impl) {
  const previous = _injectImplementation;
  _injectImplementation = impl;
  return previous;
}
/**
 * Injects `root` tokens in limp mode.
 *
 * If no injector exists, we can still inject tree-shakable providers which have `providedIn` set to
 * `"root"`. This is known as the limp mode injection. In such case the value is stored in the
 * injectable definition.
 */
function injectRootLimpMode(token, notFoundValue, flags) {
  const injectableDef = getInjectableDef(token);
  if (injectableDef && injectableDef.providedIn == 'root') {
    return injectableDef.value === undefined ? injectableDef.value = injectableDef.factory() : injectableDef.value;
  }
  if (flags & InjectFlags.Optional) return null;
  if (notFoundValue !== undefined) return notFoundValue;
  throwProviderNotFoundError(stringify(token), 'Injector');
}
/**
 * Assert that `_injectImplementation` is not `fn`.
 *
 * This is useful, to prevent infinite recursion.
 *
 * @param fn Function which it should not equal to
 */
function assertInjectImplementationNotEqual(fn) {
  ngDevMode && assertNotEqual(_injectImplementation, fn, 'Calling ɵɵinject would cause infinite recursion');
}
const _global = globalThis;
function ngDevModeResetPerfCounters() {
  const locationString = typeof location !== 'undefined' ? location.toString() : '';
  const newCounters = {
    namedConstructors: locationString.indexOf('ngDevMode=namedConstructors') != -1,
    firstCreatePass: 0,
    tNode: 0,
    tView: 0,
    rendererCreateTextNode: 0,
    rendererSetText: 0,
    rendererCreateElement: 0,
    rendererAddEventListener: 0,
    rendererSetAttribute: 0,
    rendererRemoveAttribute: 0,
    rendererSetProperty: 0,
    rendererSetClassName: 0,
    rendererAddClass: 0,
    rendererRemoveClass: 0,
    rendererSetStyle: 0,
    rendererRemoveStyle: 0,
    rendererDestroy: 0,
    rendererDestroyNode: 0,
    rendererMoveNode: 0,
    rendererRemoveNode: 0,
    rendererAppendChild: 0,
    rendererInsertBefore: 0,
    rendererCreateComment: 0,
    hydratedNodes: 0,
    hydratedComponents: 0,
    dehydratedViewsRemoved: 0,
    dehydratedViewsCleanupRuns: 0,
    componentsSkippedHydration: 0
  };
  // Make sure to refer to ngDevMode as ['ngDevMode'] for closure.
  const allowNgDevModeTrue = locationString.indexOf('ngDevMode=false') === -1;
  _global['ngDevMode'] = allowNgDevModeTrue && newCounters;
  return newCounters;
}
/**
 * This function checks to see if the `ngDevMode` has been set. If yes,
 * then we honor it, otherwise we default to dev mode with additional checks.
 *
 * The idea is that unless we are doing production build where we explicitly
 * set `ngDevMode == false` we should be helping the developer by providing
 * as much early warning and errors as possible.
 *
 * `ɵɵdefineComponent` is guaranteed to have been called before any component template functions
 * (and thus Ivy instructions), so a single initialization there is sufficient to ensure ngDevMode
 * is defined for the entire instruction set.
 *
 * When checking `ngDevMode` on toplevel, always init it before referencing it
 * (e.g. `((typeof ngDevMode === 'undefined' || ngDevMode) && initNgDevMode())`), otherwise you can
 *  get a `ReferenceError` like in https://github.com/angular/angular/issues/31595.
 *
 * Details on possible values for `ngDevMode` can be found on its docstring.
 *
 * NOTE:
 * - changes to the `ngDevMode` name must be synced with `compiler-cli/src/tooling.ts`.
 */
function initNgDevMode() {
  // The below checks are to ensure that calling `initNgDevMode` multiple times does not
  // reset the counters.
  // If the `ngDevMode` is not an object, then it means we have not created the perf counters
  // yet.
  if (typeof ngDevMode === 'undefined' || ngDevMode) {
    if (typeof ngDevMode !== 'object') {
      ngDevModeResetPerfCounters();
    }
    return typeof ngDevMode !== 'undefined' && !!ngDevMode;
  }
  return false;
}
let _injectorProfilerContext;
function getInjectorProfilerContext() {
  !ngDevMode && throwError('getInjectorProfilerContext should never be called in production mode');
  return _injectorProfilerContext;
}
function setInjectorProfilerContext(context) {
  !ngDevMode && throwError('setInjectorProfilerContext should never be called in production mode');
  const previous = _injectorProfilerContext;
  _injectorProfilerContext = context;
  return previous;
}
let injectorProfilerCallback = null;
/**
 * Sets the callback function which will be invoked during certain DI events within the
 * runtime (for example: injecting services, creating injectable instances, configuring providers)
 *
 * Warning: this function is *INTERNAL* and should not be relied upon in application's code.
 * The contract of the function might be changed in any release and/or the function can be removed
 * completely.
 *
 * @param profiler function provided by the caller or null value to disable profiling.
 */
const setInjectorProfiler = injectorProfiler => {
  !ngDevMode && throwError('setInjectorProfiler should never be called in production mode');
  injectorProfilerCallback = injectorProfiler;
};
/**
 * Injector profiler function which emits on DI events executed by the runtime.
 *
 * @param event InjectorProfilerEvent corresponding to the DI event being emitted
 */
function injectorProfiler(event) {
  !ngDevMode && throwError('Injector profiler should never be called in production mode');
  if (injectorProfilerCallback != null /* both `null` and `undefined` */) {
    injectorProfilerCallback(event);
  }
}
/**
 * Emits an InjectorProfilerEventType.ProviderConfigured to the injector profiler. The data in the
 * emitted event includes the raw provider, as well as the token that provider is providing.
 *
 * @param provider A provider object
 */
function emitProviderConfiguredEvent(provider, isViewProvider = false) {
  !ngDevMode && throwError('Injector profiler should never be called in production mode');
  injectorProfiler({
    type: 2 /* InjectorProfilerEventType.ProviderConfigured */,
    context: getInjectorProfilerContext(),
    providerRecord: {
      token: typeof provider === 'function' ? provider : resolveForwardRef(provider.provide),
      provider,
      isViewProvider
    }
  });
}
/**
 * Emits an event to the injector profiler with the instance that was created. Note that
 * the injector associated with this emission can be accessed by using getDebugInjectContext()
 *
 * @param instance an object created by an injector
 */
function emitInstanceCreatedByInjectorEvent(instance) {
  !ngDevMode && throwError('Injector profiler should never be called in production mode');
  injectorProfiler({
    type: 1 /* InjectorProfilerEventType.InstanceCreatedByInjector */,
    context: getInjectorProfilerContext(),
    instance: {
      value: instance
    }
  });
}
/**
 * @param token DI token associated with injected service
 * @param value the instance of the injected service (i.e the result of `inject(token)`)
 * @param flags the flags that the token was injected with
 */
function emitInjectEvent(token, value, flags) {
  !ngDevMode && throwError('Injector profiler should never be called in production mode');
  injectorProfiler({
    type: 0 /* InjectorProfilerEventType.Inject */,
    context: getInjectorProfilerContext(),
    service: {
      token,
      value,
      flags
    }
  });
}
function runInInjectorProfilerContext(injector, token, callback) {
  !ngDevMode && throwError('runInInjectorProfilerContext should never be called in production mode');
  const prevInjectContext = setInjectorProfilerContext({
    injector,
    token
  });
  try {
    callback();
  } finally {
    setInjectorProfilerContext(prevInjectContext);
  }
}
const _THROW_IF_NOT_FOUND = {};
const THROW_IF_NOT_FOUND = _THROW_IF_NOT_FOUND;
/*
 * Name of a property (that we patch onto DI decorator), which is used as an annotation of which
 * InjectFlag this decorator represents. This allows to avoid direct references to the DI decorators
 * in the code, thus making them tree-shakable.
 */
const DI_DECORATOR_FLAG = '__NG_DI_FLAG__';
const NG_TEMP_TOKEN_PATH = 'ngTempTokenPath';
const NG_TOKEN_PATH = 'ngTokenPath';
const NEW_LINE = /\n/gm;
const NO_NEW_LINE = 'ɵ';
const SOURCE = '__source';
/**
 * Current injector value used by `inject`.
 * - `undefined`: it is an error to call `inject`
 * - `null`: `inject` can be called but there is no injector (limp-mode).
 * - Injector instance: Use the injector for resolution.
 */
let _currentInjector = undefined;
function setCurrentInjector(injector) {
  const former = _currentInjector;
  _currentInjector = injector;
  return former;
}
function injectInjectorOnly(token, flags = InjectFlags.Default) {
  if (_currentInjector === undefined) {
    throw new RuntimeError(-203 /* RuntimeErrorCode.MISSING_INJECTION_CONTEXT */, ngDevMode && `inject() must be called from an injection context such as a constructor, a factory function, a field initializer, or a function used with \`runInInjectionContext\`.`);
  } else if (_currentInjector === null) {
    return injectRootLimpMode(token, undefined, flags);
  } else {
    const value = _currentInjector.get(token, flags & InjectFlags.Optional ? null : undefined, flags);
    ngDevMode && emitInjectEvent(token, value, flags);
    return value;
  }
}
function ɵɵinject(token, flags = InjectFlags.Default) {
  return (getInjectImplementation() || injectInjectorOnly)(resolveForwardRef(token), flags);
}
/**
 * Injects a token from the currently active injector.
 * `inject` is only supported in an [injection context](/guide/dependency-injection-context). It can
 * be used during:
 * - Construction (via the `constructor`) of a class being instantiated by the DI system, such
 * as an `@Injectable` or `@Component`.
 * - In the initializer for fields of such classes.
 * - In the factory function specified for `useFactory` of a `Provider` or an `@Injectable`.
 * - In the `factory` function specified for an `InjectionToken`.
 * - In a stackframe of a function call in a DI context
 *
 * @param token A token that represents a dependency that should be injected.
 * @param flags Optional flags that control how injection is executed.
 * The flags correspond to injection strategies that can be specified with
 * parameter decorators `@Host`, `@Self`, `@SkipSelf`, and `@Optional`.
 * @returns the injected value if operation is successful, `null` otherwise.
 * @throws if called outside of a supported context.
 *
 * @usageNotes
 * In practice the `inject()` calls are allowed in a constructor, a constructor parameter and a
 * field initializer:
 *
 * ```typescript
 * @Injectable({providedIn: 'root'})
 * export class Car {
 *   radio: Radio|undefined;
 *   // OK: field initializer
 *   spareTyre = inject(Tyre);
 *
 *   constructor() {
 *     // OK: constructor body
 *     this.radio = inject(Radio);
 *   }
 * }
 * ```
 *
 * It is also legal to call `inject` from a provider's factory:
 *
 * ```typescript
 * providers: [
 *   {provide: Car, useFactory: () => {
 *     // OK: a class factory
 *     const engine = inject(Engine);
 *     return new Car(engine);
 *   }}
 * ]
 * ```
 *
 * Calls to the `inject()` function outside of the class creation context will result in error. Most
 * notably, calls to `inject()` are disallowed after a class instance was created, in methods
 * (including lifecycle hooks):
 *
 * ```typescript
 * @Component({ ... })
 * export class CarComponent {
 *   ngOnInit() {
 *     // ERROR: too late, the component instance was already created
 *     const engine = inject(Engine);
 *     engine.start();
 *   }
 * }
 * ```
 *
 * @publicApi
 */
function inject(token, flags = InjectFlags.Default) {
  return ɵɵinject(token, convertToBitFlags(flags));
}
// Converts object-based DI flags (`InjectOptions`) to bit flags (`InjectFlags`).
function convertToBitFlags(flags) {
  if (typeof flags === 'undefined' || typeof flags === 'number') {
    return flags;
  }
  // While TypeScript doesn't accept it without a cast, bitwise OR with false-y values in
  // JavaScript is a no-op. We can use that for a very codesize-efficient conversion from
  // `InjectOptions` to `InjectFlags`.
  return 0 /* InternalInjectFlags.Default */ | (
  // comment to force a line break in the formatter
  flags.optional && 8 /* InternalInjectFlags.Optional */) | (flags.host && 1 /* InternalInjectFlags.Host */) | (flags.self && 2 /* InternalInjectFlags.Self */) | (flags.skipSelf && 4 /* InternalInjectFlags.SkipSelf */);
}

function injectArgs(types) {
  const args = [];
  for (let i = 0; i < types.length; i++) {
    const arg = resolveForwardRef(types[i]);
    if (Array.isArray(arg)) {
      if (arg.length === 0) {
        throw new RuntimeError(900 /* RuntimeErrorCode.INVALID_DIFFER_INPUT */, ngDevMode && 'Arguments array must have arguments.');
      }
      let type = undefined;
      let flags = InjectFlags.Default;
      for (let j = 0; j < arg.length; j++) {
        const meta = arg[j];
        const flag = getInjectFlag(meta);
        if (typeof flag === 'number') {
          // Special case when we handle @Inject decorator.
          if (flag === -1 /* DecoratorFlags.Inject */) {
            type = meta.token;
          } else {
            flags |= flag;
          }
        } else {
          type = meta;
        }
      }
      args.push(ɵɵinject(type, flags));
    } else {
      args.push(ɵɵinject(arg));
    }
  }
  return args;
}
/**
 * Attaches a given InjectFlag to a given decorator using monkey-patching.
 * Since DI decorators can be used in providers `deps` array (when provider is configured using
 * `useFactory`) without initialization (e.g. `Host`) and as an instance (e.g. `new Host()`), we
 * attach the flag to make it available both as a static property and as a field on decorator
 * instance.
 *
 * @param decorator Provided DI decorator.
 * @param flag InjectFlag that should be applied.
 */
function attachInjectFlag(decorator, flag) {
  decorator[DI_DECORATOR_FLAG] = flag;
  decorator.prototype[DI_DECORATOR_FLAG] = flag;
  return decorator;
}
/**
 * Reads monkey-patched property that contains InjectFlag attached to a decorator.
 *
 * @param token Token that may contain monkey-patched DI flags property.
 */
function getInjectFlag(token) {
  return token[DI_DECORATOR_FLAG];
}
function catchInjectorError(e, token, injectorErrorName, source) {
  const tokenPath = e[NG_TEMP_TOKEN_PATH];
  if (token[SOURCE]) {
    tokenPath.unshift(token[SOURCE]);
  }
  e.message = formatError('\n' + e.message, tokenPath, injectorErrorName, source);
  e[NG_TOKEN_PATH] = tokenPath;
  e[NG_TEMP_TOKEN_PATH] = null;
  throw e;
}
function formatError(text, obj, injectorErrorName, source = null) {
  text = text && text.charAt(0) === '\n' && text.charAt(1) == NO_NEW_LINE ? text.slice(2) : text;
  let context = stringify(obj);
  if (Array.isArray(obj)) {
    context = obj.map(stringify).join(' -> ');
  } else if (typeof obj === 'object') {
    let parts = [];
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        let value = obj[key];
        parts.push(key + ':' + (typeof value === 'string' ? JSON.stringify(value) : stringify(value)));
      }
    }
    context = `{${parts.join(', ')}}`;
  }
  return `${injectorErrorName}${source ? '(' + source + ')' : ''}[${context}]: ${text.replace(NEW_LINE, '\n  ')}`;
}

/**
 * Convince closure compiler that the wrapped function has no side-effects.
 *
 * Closure compiler always assumes that `toString` has no side-effects. We use this quirk to
 * allow us to execute a function but have closure compiler mark the call as no-side-effects.
 * It is important that the return value for the `noSideEffects` function be assigned
 * to something which is retained otherwise the call to `noSideEffects` will be removed by closure
 * compiler.
 */
function noSideEffects(fn) {
  return {
    toString: fn
  }.toString();
}

/**
 * The strategy that the default change detector uses to detect changes.
 * When set, takes effect the next time change detection is triggered.
 *
 * @see {@link ChangeDetectorRef#usage-notes Change detection usage}
 *
 * @publicApi
 */
var ChangeDetectionStrategy = /*#__PURE__*/function (ChangeDetectionStrategy) {
  /**
   * Use the `CheckOnce` strategy, meaning that automatic change detection is deactivated
   * until reactivated by setting the strategy to `Default` (`CheckAlways`).
   * Change detection can still be explicitly invoked.
   * This strategy applies to all child directives and cannot be overridden.
   */
  ChangeDetectionStrategy[ChangeDetectionStrategy["OnPush"] = 0] = "OnPush";
  /**
   * Use the default `CheckAlways` strategy, in which change detection is automatic until
   * explicitly deactivated.
   */
  ChangeDetectionStrategy[ChangeDetectionStrategy["Default"] = 1] = "Default";
  return ChangeDetectionStrategy;
}(ChangeDetectionStrategy || {});
/**
 * Defines the CSS styles encapsulation policies for the {@link Component} decorator's
 * `encapsulation` option.
 *
 * See {@link Component#encapsulation encapsulation}.
 *
 * @usageNotes
 * ### Example
 *
 * {@example core/ts/metadata/encapsulation.ts region='longform'}
 *
 * @publicApi
 */
var ViewEncapsulation$1 = /*#__PURE__*/function (ViewEncapsulation) {
  // TODO: consider making `ViewEncapsulation` a `const enum` instead. See
  // https://github.com/angular/angular/issues/44119 for additional information.
  /**
   * Emulates a native Shadow DOM encapsulation behavior by adding a specific attribute to the
   * component's host element and applying the same attribute to all the CSS selectors provided
   * via {@link Component#styles styles} or {@link Component#styleUrls styleUrls}.
   *
   * This is the default option.
   */
  ViewEncapsulation[ViewEncapsulation["Emulated"] = 0] = "Emulated";
  // Historically the 1 value was for `Native` encapsulation which has been removed as of v11.
  /**
   * Doesn't provide any sort of CSS style encapsulation, meaning that all the styles provided
   * via {@link Component#styles styles} or {@link Component#styleUrls styleUrls} are applicable
   * to any HTML element of the application regardless of their host Component.
   */
  ViewEncapsulation[ViewEncapsulation["None"] = 2] = "None";
  /**
   * Uses the browser's native Shadow DOM API to encapsulate CSS styles, meaning that it creates
   * a ShadowRoot for the component's host element which is then used to encapsulate
   * all the Component's styling.
   */
  ViewEncapsulation[ViewEncapsulation["ShadowDom"] = 3] = "ShadowDom";
  return ViewEncapsulation;
}(ViewEncapsulation$1 || {});
/**
 * This file contains reuseable "empty" symbols that can be used as default return values
 * in different parts of the rendering code. Because the same symbols are returned, this
 * allows for identity checks against these values to be consistently used by the framework
 * code.
 */
const EMPTY_OBJ = {};
const EMPTY_ARRAY = [];
// freezing the values prevents any code from accidentally inserting new values in
if ((typeof ngDevMode === 'undefined' || ngDevMode) && /*#__PURE__*/initNgDevMode()) ;
const NG_COMP_DEF = /*#__PURE__*/getClosureSafeProperty({
  ɵcmp: getClosureSafeProperty
});
const NG_DIR_DEF = /*#__PURE__*/getClosureSafeProperty({
  ɵdir: getClosureSafeProperty
});
const NG_PIPE_DEF = /*#__PURE__*/getClosureSafeProperty({
  ɵpipe: getClosureSafeProperty
});
const NG_MOD_DEF = /*#__PURE__*/getClosureSafeProperty({
  ɵmod: getClosureSafeProperty
});
const NG_FACTORY_DEF = /*#__PURE__*/getClosureSafeProperty({
  ɵfac: getClosureSafeProperty
});
/**
 * If a directive is diPublic, bloomAdd sets a property on the type with this constant as
 * the key and the directive's unique ID as the value. This allows us to map directives to their
 * bloom filter bit for DI.
 */
// TODO(misko): This is wrong. The NG_ELEMENT_ID should never be minified.
const NG_ELEMENT_ID = /*#__PURE__*/getClosureSafeProperty({
  __NG_ELEMENT_ID__: getClosureSafeProperty
});
/**
 * The `NG_ENV_ID` field on a DI token indicates special processing in the `EnvironmentInjector`:
 * getting such tokens from the `EnvironmentInjector` will bypass the standard DI resolution
 * strategy and instead will return implementation produced by the `NG_ENV_ID` factory function.
 *
 * This particular retrieval of DI tokens is mostly done to eliminate circular dependencies and
 * improve tree-shaking.
 */
const NG_ENV_ID = /*#__PURE__*/getClosureSafeProperty({
  __NG_ENV_ID__: getClosureSafeProperty
});

/**
 * Returns an index of `classToSearch` in `className` taking token boundaries into account.
 *
 * `classIndexOf('AB A', 'A', 0)` will be 3 (not 0 since `AB!==A`)
 *
 * @param className A string containing classes (whitespace separated)
 * @param classToSearch A class name to locate
 * @param startingIndex Starting location of search
 * @returns an index of the located class (or -1 if not found)
 */
function classIndexOf(className, classToSearch, startingIndex) {
  ngDevMode && assertNotEqual(classToSearch, '', 'can not look for "" string.');
  let end = className.length;
  while (true) {
    const foundIndex = className.indexOf(classToSearch, startingIndex);
    if (foundIndex === -1) return foundIndex;
    if (foundIndex === 0 || className.charCodeAt(foundIndex - 1) <= 32 /* CharCode.SPACE */) {
      // Ensure that it has leading whitespace
      const length = classToSearch.length;
      if (foundIndex + length === end || className.charCodeAt(foundIndex + length) <= 32 /* CharCode.SPACE */) {
        // Ensure that it has trailing whitespace
        return foundIndex;
      }
    }
    // False positive, keep searching from where we left off.
    startingIndex = foundIndex + 1;
  }
}

/**
 * Assigns all attribute values to the provided element via the inferred renderer.
 *
 * This function accepts two forms of attribute entries:
 *
 * default: (key, value):
 *  attrs = [key1, value1, key2, value2]
 *
 * namespaced: (NAMESPACE_MARKER, uri, name, value)
 *  attrs = [NAMESPACE_MARKER, uri, name, value, NAMESPACE_MARKER, uri, name, value]
 *
 * The `attrs` array can contain a mix of both the default and namespaced entries.
 * The "default" values are set without a marker, but if the function comes across
 * a marker value then it will attempt to set a namespaced value. If the marker is
 * not of a namespaced value then the function will quit and return the index value
 * where it stopped during the iteration of the attrs array.
 *
 * See [AttributeMarker] to understand what the namespace marker value is.
 *
 * Note that this instruction does not support assigning style and class values to
 * an element. See `elementStart` and `elementHostAttrs` to learn how styling values
 * are applied to an element.
 * @param renderer The renderer to be used
 * @param native The element that the attributes will be assigned to
 * @param attrs The attribute array of values that will be assigned to the element
 * @returns the index value that was last accessed in the attributes array
 */
function setUpAttributes(renderer, native, attrs) {
  let i = 0;
  while (i < attrs.length) {
    const value = attrs[i];
    if (typeof value === 'number') {
      // only namespaces are supported. Other value types (such as style/class
      // entries) are not supported in this function.
      if (value !== 0 /* AttributeMarker.NamespaceURI */) {
        break;
      }
      // we just landed on the marker value ... therefore
      // we should skip to the next entry
      i++;
      const namespaceURI = attrs[i++];
      const attrName = attrs[i++];
      const attrVal = attrs[i++];
      ngDevMode && ngDevMode.rendererSetAttribute++;
      renderer.setAttribute(native, attrName, attrVal, namespaceURI);
    } else {
      // attrName is string;
      const attrName = value;
      const attrVal = attrs[++i];
      // Standard attributes
      ngDevMode && ngDevMode.rendererSetAttribute++;
      if (isAnimationProp(attrName)) {
        renderer.setProperty(native, attrName, attrVal);
      } else {
        renderer.setAttribute(native, attrName, attrVal);
      }
      i++;
    }
  }
  // another piece of code may iterate over the same attributes array. Therefore
  // it may be helpful to return the exact spot where the attributes array exited
  // whether by running into an unsupported marker or if all the static values were
  // iterated over.
  return i;
}
/**
 * Test whether the given value is a marker that indicates that the following
 * attribute values in a `TAttributes` array are only the names of attributes,
 * and not name-value pairs.
 * @param marker The attribute marker to test.
 * @returns true if the marker is a "name-only" marker (e.g. `Bindings`, `Template` or `I18n`).
 */
function isNameOnlyAttributeMarker(marker) {
  return marker === 3 /* AttributeMarker.Bindings */ || marker === 4 /* AttributeMarker.Template */ || marker === 6 /* AttributeMarker.I18n */;
}

function isAnimationProp(name) {
  // Perf note: accessing charCodeAt to check for the first character of a string is faster as
  // compared to accessing a character at index 0 (ex. name[0]). The main reason for this is that
  // charCodeAt doesn't allocate memory to return a substring.
  return name.charCodeAt(0) === 64 /* CharCode.AT_SIGN */;
}
/**
 * Merges `src` `TAttributes` into `dst` `TAttributes` removing any duplicates in the process.
 *
 * This merge function keeps the order of attrs same.
 *
 * @param dst Location of where the merged `TAttributes` should end up.
 * @param src `TAttributes` which should be appended to `dst`
 */
function mergeHostAttrs(dst, src) {
  if (src === null || src.length === 0) ; else if (dst === null || dst.length === 0) {
    // We have source, but dst is empty, just make a copy.
    dst = src.slice();
  } else {
    let srcMarker = -1 /* AttributeMarker.ImplicitAttributes */;
    for (let i = 0; i < src.length; i++) {
      const item = src[i];
      if (typeof item === 'number') {
        srcMarker = item;
      } else {
        if (srcMarker === 0 /* AttributeMarker.NamespaceURI */) ; else if (srcMarker === -1 /* AttributeMarker.ImplicitAttributes */ || srcMarker === 2 /* AttributeMarker.Styles */) {
          // Case where we have to consume `key1` and `value` only.
          mergeHostAttribute(dst, srcMarker, item, null, src[++i]);
        } else {
          // Case where we have to consume `key1` only.
          mergeHostAttribute(dst, srcMarker, item, null, null);
        }
      }
    }
  }
  return dst;
}
/**
 * Append `key`/`value` to existing `TAttributes` taking region marker and duplicates into account.
 *
 * @param dst `TAttributes` to append to.
 * @param marker Region where the `key`/`value` should be added.
 * @param key1 Key to add to `TAttributes`
 * @param key2 Key to add to `TAttributes` (in case of `AttributeMarker.NamespaceURI`)
 * @param value Value to add or to overwrite to `TAttributes` Only used if `marker` is not Class.
 */
function mergeHostAttribute(dst, marker, key1, key2, value) {
  let i = 0;
  // Assume that new markers will be inserted at the end.
  let markerInsertPosition = dst.length;
  // scan until correct type.
  if (marker === -1 /* AttributeMarker.ImplicitAttributes */) {
    markerInsertPosition = -1;
  } else {
    while (i < dst.length) {
      const dstValue = dst[i++];
      if (typeof dstValue === 'number') {
        if (dstValue === marker) {
          markerInsertPosition = -1;
          break;
        } else if (dstValue > marker) {
          // We need to save this as we want the markers to be inserted in specific order.
          markerInsertPosition = i - 1;
          break;
        }
      }
    }
  }
  // search until you find place of insertion
  while (i < dst.length) {
    const item = dst[i];
    if (typeof item === 'number') {
      // since `i` started as the index after the marker, we did not find it if we are at the next
      // marker
      break;
    } else if (item === key1) {
      // We already have same token
      if (key2 === null) {
        if (value !== null) {
          dst[i + 1] = value;
        }
        return;
      } else if (key2 === dst[i + 1]) {
        dst[i + 2] = value;
        return;
      }
    }
    // Increment counter.
    i++;
    if (key2 !== null) i++;
    if (value !== null) i++;
  }
  // insert at location.
  if (markerInsertPosition !== -1) {
    dst.splice(markerInsertPosition, 0, marker);
    i = markerInsertPosition + 1;
  }
  dst.splice(i++, 0, key1);
  if (key2 !== null) {
    dst.splice(i++, 0, key2);
  }
  if (value !== null) {
    dst.splice(i++, 0, value);
  }
}
const NG_TEMPLATE_SELECTOR = 'ng-template';
/**
 * Search the `TAttributes` to see if it contains `cssClassToMatch` (case insensitive)
 *
 * @param attrs `TAttributes` to search through.
 * @param cssClassToMatch class to match (lowercase)
 * @param isProjectionMode Whether or not class matching should look into the attribute `class` in
 *    addition to the `AttributeMarker.Classes`.
 */
function isCssClassMatching(attrs, cssClassToMatch, isProjectionMode) {
  // TODO(misko): The fact that this function needs to know about `isProjectionMode` seems suspect.
  // It is strange to me that sometimes the class information comes in form of `class` attribute
  // and sometimes in form of `AttributeMarker.Classes`. Some investigation is needed to determine
  // if that is the right behavior.
  ngDevMode && assertEqual(cssClassToMatch, cssClassToMatch.toLowerCase(), 'Class name expected to be lowercase.');
  let i = 0;
  // Indicates whether we are processing value from the implicit
  // attribute section (i.e. before the first marker in the array).
  let isImplicitAttrsSection = true;
  while (i < attrs.length) {
    let item = attrs[i++];
    if (typeof item === 'string' && isImplicitAttrsSection) {
      const value = attrs[i++];
      if (isProjectionMode && item === 'class') {
        // We found a `class` attribute in the implicit attribute section,
        // check if it matches the value of the `cssClassToMatch` argument.
        if (classIndexOf(value.toLowerCase(), cssClassToMatch, 0) !== -1) {
          return true;
        }
      }
    } else if (item === 1 /* AttributeMarker.Classes */) {
      // We found the classes section. Start searching for the class.
      while (i < attrs.length && typeof (item = attrs[i++]) == 'string') {
        // while we have strings
        if (item.toLowerCase() === cssClassToMatch) return true;
      }
      return false;
    } else if (typeof item === 'number') {
      // We've came across a first marker, which indicates
      // that the implicit attribute section is over.
      isImplicitAttrsSection = false;
    }
  }
  return false;
}
/**
 * Checks whether the `tNode` represents an inline template (e.g. `*ngFor`).
 *
 * @param tNode current TNode
 */
function isInlineTemplate(tNode) {
  return tNode.type === 4 /* TNodeType.Container */ && tNode.value !== NG_TEMPLATE_SELECTOR;
}
/**
 * Function that checks whether a given tNode matches tag-based selector and has a valid type.
 *
 * Matching can be performed in 2 modes: projection mode (when we project nodes) and regular
 * directive matching mode:
 * - in the "directive matching" mode we do _not_ take TContainer's tagName into account if it is
 * different from NG_TEMPLATE_SELECTOR (value different from NG_TEMPLATE_SELECTOR indicates that a
 * tag name was extracted from * syntax so we would match the same directive twice);
 * - in the "projection" mode, we use a tag name potentially extracted from the * syntax processing
 * (applicable to TNodeType.Container only).
 */
function hasTagAndTypeMatch(tNode, currentSelector, isProjectionMode) {
  const tagNameToCompare = tNode.type === 4 /* TNodeType.Container */ && !isProjectionMode ? NG_TEMPLATE_SELECTOR : tNode.value;
  return currentSelector === tagNameToCompare;
}
/**
 * A utility function to match an Ivy node static data against a simple CSS selector
 *
 * @param node static data of the node to match
 * @param selector The selector to try matching against the node.
 * @param isProjectionMode if `true` we are matching for content projection, otherwise we are doing
 * directive matching.
 * @returns true if node matches the selector.
 */
function isNodeMatchingSelector(tNode, selector, isProjectionMode) {
  ngDevMode && assertDefined(selector[0], 'Selector should have a tag name');
  let mode = 4 /* SelectorFlags.ELEMENT */;
  const nodeAttrs = tNode.attrs || [];
  // Find the index of first attribute that has no value, only a name.
  const nameOnlyMarkerIdx = getNameOnlyMarkerIndex(nodeAttrs);
  // When processing ":not" selectors, we skip to the next ":not" if the
  // current one doesn't match
  let skipToNextSelector = false;
  for (let i = 0; i < selector.length; i++) {
    const current = selector[i];
    if (typeof current === 'number') {
      // If we finish processing a :not selector and it hasn't failed, return false
      if (!skipToNextSelector && !isPositive(mode) && !isPositive(current)) {
        return false;
      }
      // If we are skipping to the next :not() and this mode flag is positive,
      // it's a part of the current :not() selector, and we should keep skipping
      if (skipToNextSelector && isPositive(current)) continue;
      skipToNextSelector = false;
      mode = current | mode & 1 /* SelectorFlags.NOT */;
      continue;
    }
    if (skipToNextSelector) continue;
    if (mode & 4 /* SelectorFlags.ELEMENT */) {
      mode = 2 /* SelectorFlags.ATTRIBUTE */ | mode & 1 /* SelectorFlags.NOT */;
      if (current !== '' && !hasTagAndTypeMatch(tNode, current, isProjectionMode) || current === '' && selector.length === 1) {
        if (isPositive(mode)) return false;
        skipToNextSelector = true;
      }
    } else {
      const selectorAttrValue = mode & 8 /* SelectorFlags.CLASS */ ? current : selector[++i];
      // special case for matching against classes when a tNode has been instantiated with
      // class and style values as separate attribute values (e.g. ['title', CLASS, 'foo'])
      if (mode & 8 /* SelectorFlags.CLASS */ && tNode.attrs !== null) {
        if (!isCssClassMatching(tNode.attrs, selectorAttrValue, isProjectionMode)) {
          if (isPositive(mode)) return false;
          skipToNextSelector = true;
        }
        continue;
      }
      const attrName = mode & 8 /* SelectorFlags.CLASS */ ? 'class' : current;
      const attrIndexInNode = findAttrIndexInNode(attrName, nodeAttrs, isInlineTemplate(tNode), isProjectionMode);
      if (attrIndexInNode === -1) {
        if (isPositive(mode)) return false;
        skipToNextSelector = true;
        continue;
      }
      if (selectorAttrValue !== '') {
        let nodeAttrValue;
        if (attrIndexInNode > nameOnlyMarkerIdx) {
          nodeAttrValue = '';
        } else {
          ngDevMode && assertNotEqual(nodeAttrs[attrIndexInNode], 0 /* AttributeMarker.NamespaceURI */, 'We do not match directives on namespaced attributes');
          // we lowercase the attribute value to be able to match
          // selectors without case-sensitivity
          // (selectors are already in lowercase when generated)
          nodeAttrValue = nodeAttrs[attrIndexInNode + 1].toLowerCase();
        }
        const compareAgainstClassName = mode & 8 /* SelectorFlags.CLASS */ ? nodeAttrValue : null;
        if (compareAgainstClassName && classIndexOf(compareAgainstClassName, selectorAttrValue, 0) !== -1 || mode & 2 /* SelectorFlags.ATTRIBUTE */ && selectorAttrValue !== nodeAttrValue) {
          if (isPositive(mode)) return false;
          skipToNextSelector = true;
        }
      }
    }
  }
  return isPositive(mode) || skipToNextSelector;
}
function isPositive(mode) {
  return (mode & 1 /* SelectorFlags.NOT */) === 0;
}
/**
 * Examines the attribute's definition array for a node to find the index of the
 * attribute that matches the given `name`.
 *
 * NOTE: This will not match namespaced attributes.
 *
 * Attribute matching depends upon `isInlineTemplate` and `isProjectionMode`.
 * The following table summarizes which types of attributes we attempt to match:
 *
 * ===========================================================================================================
 * Modes                   | Normal Attributes | Bindings Attributes | Template Attributes | I18n
 * Attributes
 * ===========================================================================================================
 * Inline + Projection     | YES               | YES                 | NO                  | YES
 * -----------------------------------------------------------------------------------------------------------
 * Inline + Directive      | NO                | NO                  | YES                 | NO
 * -----------------------------------------------------------------------------------------------------------
 * Non-inline + Projection | YES               | YES                 | NO                  | YES
 * -----------------------------------------------------------------------------------------------------------
 * Non-inline + Directive  | YES               | YES                 | NO                  | YES
 * ===========================================================================================================
 *
 * @param name the name of the attribute to find
 * @param attrs the attribute array to examine
 * @param isInlineTemplate true if the node being matched is an inline template (e.g. `*ngFor`)
 * rather than a manually expanded template node (e.g `<ng-template>`).
 * @param isProjectionMode true if we are matching against content projection otherwise we are
 * matching against directives.
 */
function findAttrIndexInNode(name, attrs, isInlineTemplate, isProjectionMode) {
  if (attrs === null) return -1;
  let i = 0;
  if (isProjectionMode || !isInlineTemplate) {
    let bindingsMode = false;
    while (i < attrs.length) {
      const maybeAttrName = attrs[i];
      if (maybeAttrName === name) {
        return i;
      } else if (maybeAttrName === 3 /* AttributeMarker.Bindings */ || maybeAttrName === 6 /* AttributeMarker.I18n */) {
        bindingsMode = true;
      } else if (maybeAttrName === 1 /* AttributeMarker.Classes */ || maybeAttrName === 2 /* AttributeMarker.Styles */) {
        let value = attrs[++i];
        // We should skip classes here because we have a separate mechanism for
        // matching classes in projection mode.
        while (typeof value === 'string') {
          value = attrs[++i];
        }
        continue;
      } else if (maybeAttrName === 4 /* AttributeMarker.Template */) {
        // We do not care about Template attributes in this scenario.
        break;
      } else if (maybeAttrName === 0 /* AttributeMarker.NamespaceURI */) {
        // Skip the whole namespaced attribute and value. This is by design.
        i += 4;
        continue;
      }
      // In binding mode there are only names, rather than name-value pairs.
      i += bindingsMode ? 1 : 2;
    }
    // We did not match the attribute
    return -1;
  } else {
    return matchTemplateAttribute(attrs, name);
  }
}
function isNodeMatchingSelectorList(tNode, selector, isProjectionMode = false) {
  for (let i = 0; i < selector.length; i++) {
    if (isNodeMatchingSelector(tNode, selector[i], isProjectionMode)) {
      return true;
    }
  }
  return false;
}
function getNameOnlyMarkerIndex(nodeAttrs) {
  for (let i = 0; i < nodeAttrs.length; i++) {
    const nodeAttr = nodeAttrs[i];
    if (isNameOnlyAttributeMarker(nodeAttr)) {
      return i;
    }
  }
  return nodeAttrs.length;
}
function matchTemplateAttribute(attrs, name) {
  let i = attrs.indexOf(4 /* AttributeMarker.Template */);
  if (i > -1) {
    i++;
    while (i < attrs.length) {
      const attr = attrs[i];
      // Return in case we checked all template attrs and are switching to the next section in the
      // attrs array (that starts with a number that represents an attribute marker).
      if (typeof attr === 'number') return -1;
      if (attr === name) return i;
      i++;
    }
  }
  return -1;
}
function maybeWrapInNotSelector(isNegativeMode, chunk) {
  return isNegativeMode ? ':not(' + chunk.trim() + ')' : chunk;
}
function stringifyCSSSelector(selector) {
  let result = selector[0];
  let i = 1;
  let mode = 2 /* SelectorFlags.ATTRIBUTE */;
  let currentChunk = '';
  let isNegativeMode = false;
  while (i < selector.length) {
    let valueOrMarker = selector[i];
    if (typeof valueOrMarker === 'string') {
      if (mode & 2 /* SelectorFlags.ATTRIBUTE */) {
        const attrValue = selector[++i];
        currentChunk += '[' + valueOrMarker + (attrValue.length > 0 ? '="' + attrValue + '"' : '') + ']';
      } else if (mode & 8 /* SelectorFlags.CLASS */) {
        currentChunk += '.' + valueOrMarker;
      } else if (mode & 4 /* SelectorFlags.ELEMENT */) {
        currentChunk += ' ' + valueOrMarker;
      }
    } else {
      //
      // Append current chunk to the final result in case we come across SelectorFlag, which
      // indicates that the previous section of a selector is over. We need to accumulate content
      // between flags to make sure we wrap the chunk later in :not() selector if needed, e.g.
      // ```
      //  ['', Flags.CLASS, '.classA', Flags.CLASS | Flags.NOT, '.classB', '.classC']
      // ```
      // should be transformed to `.classA :not(.classB .classC)`.
      //
      // Note: for negative selector part, we accumulate content between flags until we find the
      // next negative flag. This is needed to support a case where `:not()` rule contains more than
      // one chunk, e.g. the following selector:
      // ```
      //  ['', Flags.ELEMENT | Flags.NOT, 'p', Flags.CLASS, 'foo', Flags.CLASS | Flags.NOT, 'bar']
      // ```
      // should be stringified to `:not(p.foo) :not(.bar)`
      //
      if (currentChunk !== '' && !isPositive(valueOrMarker)) {
        result += maybeWrapInNotSelector(isNegativeMode, currentChunk);
        currentChunk = '';
      }
      mode = valueOrMarker;
      // According to CssSelector spec, once we come across `SelectorFlags.NOT` flag, the negative
      // mode is maintained for remaining chunks of a selector.
      isNegativeMode = isNegativeMode || !isPositive(mode);
    }
    i++;
  }
  if (currentChunk !== '') {
    result += maybeWrapInNotSelector(isNegativeMode, currentChunk);
  }
  return result;
}
/**
 * Generates string representation of CSS selector in parsed form.
 *
 * ComponentDef and DirectiveDef are generated with the selector in parsed form to avoid doing
 * additional parsing at runtime (for example, for directive matching). However in some cases (for
 * example, while bootstrapping a component), a string version of the selector is required to query
 * for the host element on the page. This function takes the parsed form of a selector and returns
 * its string representation.
 *
 * @param selectorList selector in parsed form
 * @returns string representation of a given selector
 */
function stringifyCSSSelectorList(selectorList) {
  return selectorList.map(stringifyCSSSelector).join(',');
}
/**
 * Extracts attributes and classes information from a given CSS selector.
 *
 * This function is used while creating a component dynamically. In this case, the host element
 * (that is created dynamically) should contain attributes and classes specified in component's CSS
 * selector.
 *
 * @param selector CSS selector in parsed form (in a form of array)
 * @returns object with `attrs` and `classes` fields that contain extracted information
 */
function extractAttrsAndClassesFromSelector(selector) {
  const attrs = [];
  const classes = [];
  let i = 1;
  let mode = 2 /* SelectorFlags.ATTRIBUTE */;
  while (i < selector.length) {
    let valueOrMarker = selector[i];
    if (typeof valueOrMarker === 'string') {
      if (mode === 2 /* SelectorFlags.ATTRIBUTE */) {
        if (valueOrMarker !== '') {
          attrs.push(valueOrMarker, selector[++i]);
        }
      } else if (mode === 8 /* SelectorFlags.CLASS */) {
        classes.push(valueOrMarker);
      }
    } else {
      // According to CssSelector spec, once we come across `SelectorFlags.NOT` flag, the negative
      // mode is maintained for remaining chunks of a selector. Since attributes and classes are
      // extracted only for "positive" part of the selector, we can stop here.
      if (!isPositive(mode)) break;
      mode = valueOrMarker;
    }
    i++;
  }
  return {
    attrs,
    classes
  };
}

/**
 * Create a component definition object.
 *
 *
 * # Example
 * ```
 * class MyComponent {
 *   // Generated by Angular Template Compiler
 *   // [Symbol] syntax will not be supported by TypeScript until v2.7
 *   static ɵcmp = defineComponent({
 *     ...
 *   });
 * }
 * ```
 * @codeGenApi
 */
function ɵɵdefineComponent(componentDefinition) {
  return noSideEffects(() => {
    // Initialize ngDevMode. This must be the first statement in ɵɵdefineComponent.
    // See the `initNgDevMode` docstring for more information.
    (typeof ngDevMode === 'undefined' || ngDevMode) && initNgDevMode();
    const baseDef = getNgDirectiveDef(componentDefinition);
    const def = {
      ...baseDef,
      decls: componentDefinition.decls,
      vars: componentDefinition.vars,
      template: componentDefinition.template,
      consts: componentDefinition.consts || null,
      ngContentSelectors: componentDefinition.ngContentSelectors,
      onPush: componentDefinition.changeDetection === ChangeDetectionStrategy.OnPush,
      directiveDefs: null,
      pipeDefs: null,
      dependencies: baseDef.standalone && componentDefinition.dependencies || null,
      getStandaloneInjector: null,
      signals: componentDefinition.signals ?? false,
      data: componentDefinition.data || {},
      encapsulation: componentDefinition.encapsulation || ViewEncapsulation$1.Emulated,
      styles: componentDefinition.styles || EMPTY_ARRAY,
      _: null,
      schemas: componentDefinition.schemas || null,
      tView: null,
      id: ''
    };
    initFeatures(def);
    const dependencies = componentDefinition.dependencies;
    def.directiveDefs = extractDefListOrFactory(dependencies, /* pipeDef */false);
    def.pipeDefs = extractDefListOrFactory(dependencies, /* pipeDef */true);
    def.id = getComponentId(def);
    return def;
  });
}
function extractDirectiveDef(type) {
  return getComponentDef(type) || getDirectiveDef(type);
}
function nonNull(value) {
  return value !== null;
}
/**
 * Inverts an inputs or outputs lookup such that the keys, which were the
 * minified keys, are part of the values, and the values are parsed so that
 * the publicName of the property is the new key
 *
 * e.g. for
 *
 * ```
 * class Comp {
 *   @Input()
 *   propName1: string;
 *
 *   @Input('publicName2')
 *   declaredPropName2: number;
 * }
 * ```
 *
 * will be serialized as
 *
 * ```
 * {
 *   propName1: 'propName1',
 *   declaredPropName2: ['publicName2', 'declaredPropName2'],
 * }
 * ```
 *
 * which is than translated by the minifier as:
 *
 * ```
 * {
 *   minifiedPropName1: 'propName1',
 *   minifiedPropName2: ['publicName2', 'declaredPropName2'],
 * }
 * ```
 *
 * becomes: (public name => minifiedName)
 *
 * ```
 * {
 *  'propName1': 'minifiedPropName1',
 *  'publicName2': 'minifiedPropName2',
 * }
 * ```
 *
 * Optionally the function can take `secondary` which will result in: (public name => declared name)
 *
 * ```
 * {
 *  'propName1': 'propName1',
 *  'publicName2': 'declaredPropName2',
 * }
 * ```
 *

 */
function invertObject(obj, secondary) {
  if (obj == null) return EMPTY_OBJ;
  const newLookup = {};
  for (const minifiedKey in obj) {
    if (obj.hasOwnProperty(minifiedKey)) {
      let publicName = obj[minifiedKey];
      let declaredName = publicName;
      if (Array.isArray(publicName)) {
        declaredName = publicName[1];
        publicName = publicName[0];
      }
      newLookup[publicName] = minifiedKey;
      if (secondary) {
        secondary[publicName] = declaredName;
      }
    }
  }
  return newLookup;
}
/**
 * Create a directive definition object.
 *
 * # Example
 * ```ts
 * class MyDirective {
 *   // Generated by Angular Template Compiler
 *   // [Symbol] syntax will not be supported by TypeScript until v2.7
 *   static ɵdir = ɵɵdefineDirective({
 *     ...
 *   });
 * }
 * ```
 *
 * @codeGenApi
 */
function ɵɵdefineDirective(directiveDefinition) {
  return noSideEffects(() => {
    const def = getNgDirectiveDef(directiveDefinition);
    initFeatures(def);
    return def;
  });
}
/**
 * The following getter methods retrieve the definition from the type. Currently the retrieval
 * honors inheritance, but in the future we may change the rule to require that definitions are
 * explicit. This would require some sort of migration strategy.
 */
function getComponentDef(type) {
  return type[NG_COMP_DEF] || null;
}
function getDirectiveDef(type) {
  return type[NG_DIR_DEF] || null;
}
function getPipeDef$1(type) {
  return type[NG_PIPE_DEF] || null;
}
/**
 * Checks whether a given Component, Directive or Pipe is marked as standalone.
 * This will return false if passed anything other than a Component, Directive, or Pipe class
 * See [this guide](/guide/standalone-components) for additional information:
 *
 * @param type A reference to a Component, Directive or Pipe.
 * @publicApi
 */
function isStandalone(type) {
  const def = getComponentDef(type) || getDirectiveDef(type) || getPipeDef$1(type);
  return def !== null ? def.standalone : false;
}
function getNgModuleDef(type, throwNotFound) {
  const ngModuleDef = type[NG_MOD_DEF] || null;
  if (!ngModuleDef && throwNotFound === true) {
    throw new Error(`Type ${stringify(type)} does not have 'ɵmod' property.`);
  }
  return ngModuleDef;
}
function getNgDirectiveDef(directiveDefinition) {
  const declaredInputs = {};
  return {
    type: directiveDefinition.type,
    providersResolver: null,
    factory: null,
    hostBindings: directiveDefinition.hostBindings || null,
    hostVars: directiveDefinition.hostVars || 0,
    hostAttrs: directiveDefinition.hostAttrs || null,
    contentQueries: directiveDefinition.contentQueries || null,
    declaredInputs,
    inputTransforms: null,
    inputConfig: directiveDefinition.inputs || EMPTY_OBJ,
    exportAs: directiveDefinition.exportAs || null,
    standalone: directiveDefinition.standalone === true,
    signals: directiveDefinition.signals === true,
    selectors: directiveDefinition.selectors || EMPTY_ARRAY,
    viewQuery: directiveDefinition.viewQuery || null,
    features: directiveDefinition.features || null,
    setInput: null,
    findHostDirectiveDefs: null,
    hostDirectives: null,
    inputs: invertObject(directiveDefinition.inputs, declaredInputs),
    outputs: invertObject(directiveDefinition.outputs)
  };
}
function initFeatures(definition) {
  definition.features?.forEach(fn => fn(definition));
}
function extractDefListOrFactory(dependencies, pipeDef) {
  if (!dependencies) {
    return null;
  }
  const defExtractor = pipeDef ? getPipeDef$1 : extractDirectiveDef;
  return () => (typeof dependencies === 'function' ? dependencies() : dependencies).map(dep => defExtractor(dep)).filter(nonNull);
}
/**
 * A map that contains the generated component IDs and type.
 */
const GENERATED_COMP_IDS = /*#__PURE__*/new Map();
/**
 * A method can returns a component ID from the component definition using a variant of DJB2 hash
 * algorithm.
 */
function getComponentId(componentDef) {
  let hash = 0;
  // We cannot rely solely on the component selector as the same selector can be used in different
  // modules.
  //
  // `componentDef.style` is not used, due to it causing inconsistencies. Ex: when server
  // component styles has no sourcemaps and browsers do.
  //
  // Example:
  // https://github.com/angular/components/blob/d9f82c8f95309e77a6d82fd574c65871e91354c2/src/material/core/option/option.ts#L248
  // https://github.com/angular/components/blob/285f46dc2b4c5b127d356cb7c4714b221f03ce50/src/material/legacy-core/option/option.ts#L32
  const hashSelectors = [componentDef.selectors, componentDef.ngContentSelectors, componentDef.hostVars, componentDef.hostAttrs, componentDef.consts, componentDef.vars, componentDef.decls, componentDef.encapsulation, componentDef.standalone, componentDef.signals, componentDef.exportAs, JSON.stringify(componentDef.inputs), JSON.stringify(componentDef.outputs),
  // We cannot use 'componentDef.type.name' as the name of the symbol will change and will not
  // match in the server and browser bundles.
  Object.getOwnPropertyNames(componentDef.type.prototype), !!componentDef.contentQueries, !!componentDef.viewQuery].join('|');
  for (const char of hashSelectors) {
    hash = Math.imul(31, hash) + char.charCodeAt(0) << 0;
  }
  // Force positive number hash.
  // 2147483647 = equivalent of Integer.MAX_VALUE.
  hash += 2147483647 + 1;
  const compId = 'c' + hash;
  if (typeof ngDevMode === 'undefined' || ngDevMode) {
    if (GENERATED_COMP_IDS.has(compId)) {
      const previousCompDefType = GENERATED_COMP_IDS.get(compId);
      if (previousCompDefType !== componentDef.type) {
        console.warn(formatRuntimeError(-912 /* RuntimeErrorCode.COMPONENT_ID_COLLISION */, `Component ID generation collision detected. Components '${previousCompDefType.name}' and '${componentDef.type.name}' with selector '${stringifyCSSSelectorList(componentDef.selectors)}' generated the same component ID. To fix this, you can change the selector of one of those components or add an extra host attribute to force a different ID.`));
      }
    } else {
      GENERATED_COMP_IDS.set(compId, componentDef.type);
    }
  }
  return compId;
}

// Below are constants for LView indices to help us look up LView members
// without having to remember the specific indices.
// Uglify will inline these when minifying so there shouldn't be a cost.
const HOST = 0;
const TVIEW = 1;
const FLAGS = 2;
const PARENT = 3;
const NEXT = 4;
const DESCENDANT_VIEWS_TO_REFRESH = 5;
const T_HOST = 6;
const CLEANUP = 7;
const CONTEXT = 8;
const INJECTOR$1 = 9;
const ENVIRONMENT = 10;
const RENDERER = 11;
const CHILD_HEAD = 12;
const CHILD_TAIL = 13;
// FIXME(misko): Investigate if the three declarations aren't all same thing.
const DECLARATION_VIEW = 14;
const DECLARATION_COMPONENT_VIEW = 15;
const DECLARATION_LCONTAINER = 16;
const PREORDER_HOOK_FLAGS = 17;
const QUERIES = 18;
const ID = 19;
const EMBEDDED_VIEW_INJECTOR = 20;
const ON_DESTROY_HOOKS = 21;
const HYDRATION = 22;
const REACTIVE_TEMPLATE_CONSUMER = 23;
const REACTIVE_HOST_BINDING_CONSUMER = 24;
/**
 * Size of LView's header. Necessary to adjust for it when setting slots.
 *
 * IMPORTANT: `HEADER_OFFSET` should only be referred to the in the `ɵɵ*` instructions to translate
 * instruction index into `LView` index. All other indexes should be in the `LView` index space and
 * there should be no need to refer to `HEADER_OFFSET` anywhere else.
 */
const HEADER_OFFSET = 25;

/**
 * Special location which allows easy identification of type. If we have an array which was
 * retrieved from the `LView` and that array has `true` at `TYPE` location, we know it is
 * `LContainer`.
 */
const TYPE = 1;
/**
 * Below are constants for LContainer indices to help us look up LContainer members
 * without having to remember the specific indices.
 * Uglify will inline these when minifying so there shouldn't be a cost.
 */
/**
 * Flag to signify that this `LContainer` may have transplanted views which need to be change
 * detected. (see: `LView[DECLARATION_COMPONENT_VIEW])`.
 *
 * This flag, once set, is never unset for the `LContainer`. This means that when unset we can skip
 * a lot of work in `refreshEmbeddedViews`. But when set we still need to verify
 * that the `MOVED_VIEWS` are transplanted and on-push.
 */
const HAS_TRANSPLANTED_VIEWS = 2;
// PARENT, NEXT, DESCENDANT_VIEWS_TO_REFRESH are indices 3, 4, and 5
// As we already have these constants in LView, we don't need to re-create them.
// T_HOST is index 6
// We already have this constants in LView, we don't need to re-create it.
const NATIVE = 7;
const VIEW_REFS = 8;
const MOVED_VIEWS = 9;
/**
 * Size of LContainer's header. Represents the index after which all views in the
 * container will be inserted. We need to keep a record of current views so we know
 * which views are already in the DOM (and don't need to be re-added) and so we can
 * remove views from the DOM when they are no longer required.
 */
const CONTAINER_HEADER_OFFSET = 11;

/**
 * True if `value` is `LView`.
 * @param value wrapped value of `RNode`, `LView`, `LContainer`
 */
function isLView(value) {
  return Array.isArray(value) && typeof value[TYPE] === 'object';
}
/**
 * True if `value` is `LContainer`.
 * @param value wrapped value of `RNode`, `LView`, `LContainer`
 */
function isLContainer(value) {
  return Array.isArray(value) && value[TYPE] === true;
}
function isContentQueryHost(tNode) {
  return (tNode.flags & 4 /* TNodeFlags.hasContentQuery */) !== 0;
}
function isComponentHost(tNode) {
  return tNode.componentOffset > -1;
}
function isDirectiveHost(tNode) {
  return (tNode.flags & 1 /* TNodeFlags.isDirectiveHost */) === 1 /* TNodeFlags.isDirectiveHost */;
}

function isComponentDef(def) {
  return !!def.template;
}
function isRootView(target) {
  return (target[FLAGS] & 512 /* LViewFlags.IsRoot */) !== 0;
}
function isProjectionTNode(tNode) {
  return (tNode.type & 16 /* TNodeType.Projection */) === 16 /* TNodeType.Projection */;
}

function hasI18n(lView) {
  return (lView[FLAGS] & 32 /* LViewFlags.HasI18n */) === 32 /* LViewFlags.HasI18n */;
}

// [Assert functions do not constraint type when they are guarded by a truthy
// expression.](https://github.com/microsoft/TypeScript/issues/37295)
function assertTNodeForLView(tNode, lView) {
  assertTNodeForTView(tNode, lView[TVIEW]);
}
function assertTNodeForTView(tNode, tView) {
  assertTNode(tNode);
  const tData = tView.data;
  for (let i = HEADER_OFFSET; i < tData.length; i++) {
    if (tData[i] === tNode) {
      return;
    }
  }
  throwError('This TNode does not belong to this TView.');
}
function assertTNode(tNode) {
  assertDefined(tNode, 'TNode must be defined');
  if (!(tNode && typeof tNode === 'object' && tNode.hasOwnProperty('directiveStylingLast'))) {
    throwError('Not of type TNode, got: ' + tNode);
  }
}
function assertComponentType(actual, msg = 'Type passed in is not ComponentType, it does not have \'ɵcmp\' property.') {
  if (!getComponentDef(actual)) {
    throwError(msg);
  }
}
function assertNgModuleType(actual, msg = 'Type passed in is not NgModuleType, it does not have \'ɵmod\' property.') {
  if (!getNgModuleDef(actual)) {
    throwError(msg);
  }
}
function assertHasParent(tNode) {
  assertDefined(tNode, 'currentTNode should exist!');
  assertDefined(tNode.parent, 'currentTNode should have a parent');
}
function assertLContainer(value) {
  assertDefined(value, 'LContainer must be defined');
  assertEqual(isLContainer(value), true, 'Expecting LContainer');
}
function assertLViewOrUndefined(value) {
  value && assertEqual(isLView(value), true, 'Expecting LView or undefined or null');
}
function assertLView(value) {
  assertDefined(value, 'LView must be defined');
  assertEqual(isLView(value), true, 'Expecting LView');
}
function assertFirstCreatePass(tView, errMessage) {
  assertEqual(tView.firstCreatePass, true, errMessage || 'Should only be called in first create pass.');
}
function assertFirstUpdatePass(tView, errMessage) {
  assertEqual(tView.firstUpdatePass, true, errMessage || 'Should only be called in first update pass.');
}
/**
 * This is a basic sanity check that an object is probably a directive def. DirectiveDef is
 * an interface, so we can't do a direct instanceof check.
 */
function assertDirectiveDef(obj) {
  if (obj.type === undefined || obj.selectors == undefined || obj.inputs === undefined) {
    throwError(`Expected a DirectiveDef/ComponentDef and this object does not seem to have the expected shape.`);
  }
}
function assertIndexInDeclRange(lView, index) {
  const tView = lView[1];
  assertBetween(HEADER_OFFSET, tView.bindingStartIndex, index);
}
function assertIndexInExpandoRange(lView, index) {
  const tView = lView[1];
  assertBetween(tView.expandoStartIndex, lView.length, index);
}
function assertBetween(lower, upper, index) {
  if (!(lower <= index && index < upper)) {
    throwError(`Index out of range (expecting ${lower} <= ${index} < ${upper})`);
  }
}
function assertProjectionSlots(lView, errMessage) {
  assertDefined(lView[DECLARATION_COMPONENT_VIEW], 'Component views should exist.');
  assertDefined(lView[DECLARATION_COMPONENT_VIEW][T_HOST].projection, errMessage || 'Components with projection nodes (<ng-content>) must have projection slots defined.');
}
function assertParentView(lView, errMessage) {
  assertDefined(lView, errMessage || 'Component views should always have a parent view (component\'s host view)');
}
/**
 * This is a basic sanity check that the `injectorIndex` seems to point to what looks like a
 * NodeInjector data structure.
 *
 * @param lView `LView` which should be checked.
 * @param injectorIndex index into the `LView` where the `NodeInjector` is expected.
 */
function assertNodeInjector(lView, injectorIndex) {
  assertIndexInExpandoRange(lView, injectorIndex);
  assertIndexInExpandoRange(lView, injectorIndex + 8 /* NodeInjectorOffset.PARENT */);
  assertNumber(lView[injectorIndex + 0], 'injectorIndex should point to a bloom filter');
  assertNumber(lView[injectorIndex + 1], 'injectorIndex should point to a bloom filter');
  assertNumber(lView[injectorIndex + 2], 'injectorIndex should point to a bloom filter');
  assertNumber(lView[injectorIndex + 3], 'injectorIndex should point to a bloom filter');
  assertNumber(lView[injectorIndex + 4], 'injectorIndex should point to a bloom filter');
  assertNumber(lView[injectorIndex + 5], 'injectorIndex should point to a bloom filter');
  assertNumber(lView[injectorIndex + 6], 'injectorIndex should point to a bloom filter');
  assertNumber(lView[injectorIndex + 7], 'injectorIndex should point to a bloom filter');
  assertNumber(lView[injectorIndex + 8 /* NodeInjectorOffset.PARENT */], 'injectorIndex should point to parent injector');
}
function getFactoryDef(type, throwNotFound) {
  const hasFactoryDef = type.hasOwnProperty(NG_FACTORY_DEF);
  if (!hasFactoryDef && throwNotFound === true && ngDevMode) {
    throw new Error(`Type ${stringify(type)} does not have 'ɵfac' property.`);
  }
  return hasFactoryDef ? type[NG_FACTORY_DEF] : null;
}

// Required as the signals library is in a separate package, so we need to explicitly ensure the
/**
 * A `WeakRef`-compatible reference that fakes the API with a strong reference
 * internally.
 */
class LeakyRef {
  constructor(ref) {
    this.ref = ref;
  }
  deref() {
    return this.ref;
  }
}
// `WeakRef` is not always defined in every TS environment where Angular is compiled. Instead,
// read it off of the global context if available.
// tslint:disable-next-line: no-toplevel-property-access
let WeakRefImpl = _global['WeakRef'] ?? LeakyRef;
function newWeakRef(value) {
  if (typeof ngDevMode !== 'undefined' && ngDevMode && WeakRefImpl === undefined) {
    throw new Error(`Angular requires a browser which supports the 'WeakRef' API`);
  }
  return new WeakRefImpl(value);
}

// Required as the signals library is in a separate package, so we need to explicitly ensure the
/**
 * Counter tracking the next `ProducerId` or `ConsumerId`.
 */
let _nextReactiveId = 0;
/**
 * Tracks the currently active reactive consumer (or `null` if there is no active
 * consumer).
 */
let activeConsumer = null;
/**
 * Whether the graph is currently propagating change notifications.
 */
let inNotificationPhase = false;
function setActiveConsumer(consumer) {
  const prev = activeConsumer;
  activeConsumer = consumer;
  return prev;
}
/**
 * A node in the reactive graph.
 *
 * Nodes can be producers of reactive values, consumers of other reactive values, or both.
 *
 * Producers are nodes that produce values, and can be depended upon by consumer nodes.
 *
 * Producers expose a monotonic `valueVersion` counter, and are responsible for incrementing this
 * version when their value semantically changes. Some producers may produce their values lazily and
 * thus at times need to be polled for potential updates to their value (and by extension their
 * `valueVersion`). This is accomplished via the `onProducerUpdateValueVersion` method for
 * implemented by producers, which should perform whatever calculations are necessary to ensure
 * `valueVersion` is up to date.
 *
 * Consumers are nodes that depend on the values of producers and are notified when those values
 * might have changed.
 *
 * Consumers do not wrap the reads they consume themselves, but rather can be set as the active
 * reader via `setActiveConsumer`. Reads of producers that happen while a consumer is active will
 * result in those producers being added as dependencies of that consumer node.
 *
 * The set of dependencies of a consumer is dynamic. Implementers expose a monotonically increasing
 * `trackingVersion` counter, which increments whenever the consumer is about to re-run any reactive
 * reads it needs and establish a new set of dependencies as a result.
 *
 * Producers store the last `trackingVersion` they've seen from `Consumer`s which have read them.
 * This allows a producer to identify whether its record of the dependency is current or stale, by
 * comparing the consumer's `trackingVersion` to the version at which the dependency was
 * last observed.
 */
class ReactiveNode {
  constructor() {
    this.id = _nextReactiveId++;
    /**
     * A cached weak reference to this node, which will be used in `ReactiveEdge`s.
     */
    this.ref = newWeakRef(this);
    /**
     * Edges to producers on which this node depends (in its consumer capacity).
     */
    this.producers = new Map();
    /**
     * Edges to consumers on which this node depends (in its producer capacity).
     */
    this.consumers = new Map();
    /**
     * Monotonically increasing counter representing a version of this `Consumer`'s
     * dependencies.
     */
    this.trackingVersion = 0;
    /**
     * Monotonically increasing counter which increases when the value of this `Producer`
     * semantically changes.
     */
    this.valueVersion = 0;
  }
  /**
   * Polls dependencies of a consumer to determine if they have actually changed.
   *
   * If this returns `false`, then even though the consumer may have previously been notified of a
   * change, the values of its dependencies have not actually changed and the consumer should not
   * rerun any reactions.
   */
  consumerPollProducersForChange() {
    for (const [producerId, edge] of this.producers) {
      const producer = edge.producerNode.deref();
      // On Safari < 16.1 deref can return null, we need to check for null also.
      // See https://github.com/WebKit/WebKit/commit/44c15ba58912faab38b534fef909dd9e13e095e0
      if (producer == null || edge.atTrackingVersion !== this.trackingVersion) {
        // This dependency edge is stale, so remove it.
        this.producers.delete(producerId);
        producer?.consumers.delete(this.id);
        continue;
      }
      if (producer.producerPollStatus(edge.seenValueVersion)) {
        // One of the dependencies reports a real value change.
        return true;
      }
    }
    // No dependency reported a real value change, so the `Consumer` has also not been
    // impacted.
    return false;
  }
  /**
   * Notify all consumers of this producer that its value may have changed.
   */
  producerMayHaveChanged() {
    // Prevent signal reads when we're updating the graph
    const prev = inNotificationPhase;
    inNotificationPhase = true;
    try {
      for (const [consumerId, edge] of this.consumers) {
        const consumer = edge.consumerNode.deref();
        // On Safari < 16.1 deref can return null, we need to check for null also.
        // See https://github.com/WebKit/WebKit/commit/44c15ba58912faab38b534fef909dd9e13e095e0
        if (consumer == null || consumer.trackingVersion !== edge.atTrackingVersion) {
          this.consumers.delete(consumerId);
          consumer?.producers.delete(this.id);
          continue;
        }
        consumer.onConsumerDependencyMayHaveChanged();
      }
    } finally {
      inNotificationPhase = prev;
    }
  }
  /**
   * Mark that this producer node has been accessed in the current reactive context.
   */
  producerAccessed() {
    if (inNotificationPhase) {
      throw new Error(typeof ngDevMode !== 'undefined' && ngDevMode ? `Assertion error: signal read during notification phase` : '');
    }
    if (activeConsumer === null) {
      return;
    }
    // Either create or update the dependency `Edge` in both directions.
    let edge = activeConsumer.producers.get(this.id);
    if (edge === undefined) {
      edge = {
        consumerNode: activeConsumer.ref,
        producerNode: this.ref,
        seenValueVersion: this.valueVersion,
        atTrackingVersion: activeConsumer.trackingVersion
      };
      activeConsumer.producers.set(this.id, edge);
      this.consumers.set(activeConsumer.id, edge);
    } else {
      edge.seenValueVersion = this.valueVersion;
      edge.atTrackingVersion = activeConsumer.trackingVersion;
    }
  }
  /**
   * Whether this consumer currently has any producers registered.
   */
  get hasProducers() {
    return this.producers.size > 0;
  }
  /**
   * Whether this `ReactiveNode` in its producer capacity is currently allowed to initiate updates,
   * based on the current consumer context.
   */
  get producerUpdatesAllowed() {
    return activeConsumer?.consumerAllowSignalWrites !== false;
  }
  /**
   * Checks if a `Producer` has a current value which is different than the value
   * last seen at a specific version by a `Consumer` which recorded a dependency on
   * this `Producer`.
   */
  producerPollStatus(lastSeenValueVersion) {
    // `producer.valueVersion` may be stale, but a mismatch still means that the value
    // last seen by the `Consumer` is also stale.
    if (this.valueVersion !== lastSeenValueVersion) {
      return true;
    }
    // Trigger the `Producer` to update its `valueVersion` if necessary.
    this.onProducerUpdateValueVersion();
    // At this point, we can trust `producer.valueVersion`.
    return this.valueVersion !== lastSeenValueVersion;
  }
}
const NOOP_CLEANUP_FN = () => {};
/**
 * Watches a reactive expression and allows it to be scheduled to re-run
 * when any dependencies notify of a change.
 *
 * `Watch` doesn't run reactive expressions itself, but relies on a consumer-
 * provided scheduling operation to coordinate calling `Watch.run()`.
 */
class Watch extends ReactiveNode {
  constructor(watch, schedule, allowSignalWrites) {
    super();
    this.watch = watch;
    this.schedule = schedule;
    this.dirty = false;
    this.cleanupFn = NOOP_CLEANUP_FN;
    this.registerOnCleanup = cleanupFn => {
      this.cleanupFn = cleanupFn;
    };
    this.consumerAllowSignalWrites = allowSignalWrites;
  }
  notify() {
    if (!this.dirty) {
      this.schedule(this);
    }
    this.dirty = true;
  }
  onConsumerDependencyMayHaveChanged() {
    this.notify();
  }
  onProducerUpdateValueVersion() {
    // Watches are not producers.
  }
  /**
   * Execute the reactive expression in the context of this `Watch` consumer.
   *
   * Should be called by the user scheduling algorithm when the provided
   * `schedule` hook is called by `Watch`.
   */
  run() {
    this.dirty = false;
    if (this.trackingVersion !== 0 && !this.consumerPollProducersForChange()) {
      return;
    }
    const prevConsumer = setActiveConsumer(this);
    this.trackingVersion++;
    try {
      this.cleanupFn();
      this.cleanupFn = NOOP_CLEANUP_FN;
      this.watch(this.registerOnCleanup);
    } finally {
      setActiveConsumer(prevConsumer);
    }
  }
  cleanup() {
    this.cleanupFn();
  }
}

/**
 * Represents a basic change from a previous to a new value for a single
 * property on a directive instance. Passed as a value in a
 * {@link SimpleChanges} object to the `ngOnChanges` hook.
 *
 * @see {@link OnChanges}
 *
 * @publicApi
 */
class SimpleChange {
  constructor(previousValue, currentValue, firstChange) {
    this.previousValue = previousValue;
    this.currentValue = currentValue;
    this.firstChange = firstChange;
  }
  /**
   * Check whether the new value is the first value assigned.
   */
  isFirstChange() {
    return this.firstChange;
  }
}
function NgOnChangesFeatureImpl(definition) {
  if (definition.type.prototype.ngOnChanges) {
    definition.setInput = ngOnChangesSetInput;
  }
  return rememberChangeHistoryAndInvokeOnChangesHook;
}
/**
 * This is a synthetic lifecycle hook which gets inserted into `TView.preOrderHooks` to simulate
 * `ngOnChanges`.
 *
 * The hook reads the `NgSimpleChangesStore` data from the component instance and if changes are
 * found it invokes `ngOnChanges` on the component instance.
 *
 * @param this Component instance. Because this function gets inserted into `TView.preOrderHooks`,
 *     it is guaranteed to be called with component instance.
 */
function rememberChangeHistoryAndInvokeOnChangesHook() {
  const simpleChangesStore = getSimpleChangesStore(this);
  const current = simpleChangesStore?.current;
  if (current) {
    const previous = simpleChangesStore.previous;
    if (previous === EMPTY_OBJ) {
      simpleChangesStore.previous = current;
    } else {
      // New changes are copied to the previous store, so that we don't lose history for inputs
      // which were not changed this time
      for (let key in current) {
        previous[key] = current[key];
      }
    }
    simpleChangesStore.current = null;
    this.ngOnChanges(current);
  }
}
function ngOnChangesSetInput(instance, value, publicName, privateName) {
  const declaredName = this.declaredInputs[publicName];
  ngDevMode && assertString(declaredName, 'Name of input in ngOnChanges has to be a string');
  const simpleChangesStore = getSimpleChangesStore(instance) || setSimpleChangesStore(instance, {
    previous: EMPTY_OBJ,
    current: null
  });
  const current = simpleChangesStore.current || (simpleChangesStore.current = {});
  const previous = simpleChangesStore.previous;
  const previousChange = previous[declaredName];
  current[declaredName] = new SimpleChange(previousChange && previousChange.currentValue, value, previous === EMPTY_OBJ);
  instance[privateName] = value;
}
const SIMPLE_CHANGES_STORE = '__ngSimpleChanges__';
function getSimpleChangesStore(instance) {
  return instance[SIMPLE_CHANGES_STORE] || null;
}
function setSimpleChangesStore(instance, store) {
  return instance[SIMPLE_CHANGES_STORE] = store;
}
let profilerCallback = null;
/**
 * Sets the callback function which will be invoked before and after performing certain actions at
 * runtime (for example, before and after running change detection).
 *
 * Warning: this function is *INTERNAL* and should not be relied upon in application's code.
 * The contract of the function might be changed in any release and/or the function can be removed
 * completely.
 *
 * @param profiler function provided by the caller or null value to disable profiling.
 */
const setProfiler = profiler => {
  profilerCallback = profiler;
};
/**
 * Profiler function which wraps user code executed by the runtime.
 *
 * @param event ProfilerEvent corresponding to the execution context
 * @param instance component instance
 * @param hookOrListener lifecycle hook function or output listener. The value depends on the
 *  execution context
 * @returns
 */
const profiler = function (event, instance, hookOrListener) {
  if (profilerCallback != null /* both `null` and `undefined` */) {
    profilerCallback(event, instance, hookOrListener);
  }
};
const SVG_NAMESPACE = 'svg';
const MATH_ML_NAMESPACE = 'math';

/**
 * For efficiency reasons we often put several different data types (`RNode`, `LView`, `LContainer`)
 * in same location in `LView`. This is because we don't want to pre-allocate space for it
 * because the storage is sparse. This file contains utilities for dealing with such data types.
 *
 * How do we know what is stored at a given location in `LView`.
 * - `Array.isArray(value) === false` => `RNode` (The normal storage value)
 * - `Array.isArray(value) === true` => then the `value[0]` represents the wrapped value.
 *   - `typeof value[TYPE] === 'object'` => `LView`
 *      - This happens when we have a component at a given location
 *   - `typeof value[TYPE] === true` => `LContainer`
 *      - This happens when we have `LContainer` binding at a given location.
 *
 *
 * NOTE: it is assumed that `Array.isArray` and `typeof` operations are very efficient.
 */
/**
 * Returns `RNode`.
 * @param value wrapped value of `RNode`, `LView`, `LContainer`
 */
function unwrapRNode(value) {
  while (Array.isArray(value)) {
    value = value[HOST];
  }
  return value;
}
/**
 * Retrieves an element value from the provided `viewData`, by unwrapping
 * from any containers, component views, or style contexts.
 */
function getNativeByIndex(index, lView) {
  ngDevMode && assertIndexInRange(lView, index);
  ngDevMode && assertGreaterThanOrEqual(index, HEADER_OFFSET, 'Expected to be past HEADER_OFFSET');
  return unwrapRNode(lView[index]);
}
/**
 * Retrieve an `RNode` for a given `TNode` and `LView`.
 *
 * This function guarantees in dev mode to retrieve a non-null `RNode`.
 *
 * @param tNode
 * @param lView
 */
function getNativeByTNode(tNode, lView) {
  ngDevMode && assertTNodeForLView(tNode, lView);
  ngDevMode && assertIndexInRange(lView, tNode.index);
  const node = unwrapRNode(lView[tNode.index]);
  return node;
}
// fixme(misko): The return Type should be `TNode|null`
function getTNode(tView, index) {
  ngDevMode && assertGreaterThan(index, -1, 'wrong index for TNode');
  ngDevMode && assertLessThan(index, tView.data.length, 'wrong index for TNode');
  const tNode = tView.data[index];
  ngDevMode && tNode !== null && assertTNode(tNode);
  return tNode;
}
function getComponentLViewByIndex(nodeIndex, hostView) {
  // Could be an LView or an LContainer. If LContainer, unwrap to find LView.
  ngDevMode && assertIndexInRange(hostView, nodeIndex);
  const slotValue = hostView[nodeIndex];
  const lView = isLView(slotValue) ? slotValue : slotValue[HOST];
  return lView;
}
/** Checks whether a given view is in creation mode */
function isCreationMode(view) {
  return (view[FLAGS] & 4 /* LViewFlags.CreationMode */) === 4 /* LViewFlags.CreationMode */;
}
/**
 * Returns a boolean for whether the view is attached to the change detection tree.
 *
 * Note: This determines whether a view should be checked, not whether it's inserted
 * into a container. For that, you'll want `viewAttachedToContainer` below.
 */
function viewAttachedToChangeDetector(view) {
  return (view[FLAGS] & 128 /* LViewFlags.Attached */) === 128 /* LViewFlags.Attached */;
}
/** Returns a boolean for whether the view is attached to a container. */
function viewAttachedToContainer(view) {
  return isLContainer(view[PARENT]);
}
function getConstant(consts, index) {
  if (index === null || index === undefined) return null;
  ngDevMode && assertIndexInRange(consts, index);
  return consts[index];
}
/**
 * Resets the pre-order hook flags of the view.
 * @param lView the LView on which the flags are reset
 */
function resetPreOrderHookFlags(lView) {
  lView[PREORDER_HOOK_FLAGS] = 0;
}
/**
 * Adds the `RefreshView` flag from the lView and updates DESCENDANT_VIEWS_TO_REFRESH counters of
 * parents.
 */
function markViewForRefresh(lView) {
  if ((lView[FLAGS] & 1024 /* LViewFlags.RefreshView */) === 0) {
    lView[FLAGS] |= 1024 /* LViewFlags.RefreshView */;
    updateViewsToRefresh(lView, 1);
  }
}
/**
 * Removes the `RefreshView` flag from the lView and updates DESCENDANT_VIEWS_TO_REFRESH counters of
 * parents.
 */
function clearViewRefreshFlag(lView) {
  if (lView[FLAGS] & 1024 /* LViewFlags.RefreshView */) {
    lView[FLAGS] &= ~1024 /* LViewFlags.RefreshView */;
    updateViewsToRefresh(lView, -1);
  }
}
/**
 * Updates the `DESCENDANT_VIEWS_TO_REFRESH` counter on the parents of the `LView` as well as the
 * parents above that whose
 *  1. counter goes from 0 to 1, indicating that there is a new child that has a view to refresh
 *  or
 *  2. counter goes from 1 to 0, indicating there are no more descendant views to refresh
 */
function updateViewsToRefresh(lView, amount) {
  let parent = lView[PARENT];
  if (parent === null) {
    return;
  }
  parent[DESCENDANT_VIEWS_TO_REFRESH] += amount;
  let viewOrContainer = parent;
  parent = parent[PARENT];
  while (parent !== null && (amount === 1 && viewOrContainer[DESCENDANT_VIEWS_TO_REFRESH] === 1 || amount === -1 && viewOrContainer[DESCENDANT_VIEWS_TO_REFRESH] === 0)) {
    parent[DESCENDANT_VIEWS_TO_REFRESH] += amount;
    viewOrContainer = parent;
    parent = parent[PARENT];
  }
}
/**
 * Stores a LView-specific destroy callback.
 */
function storeLViewOnDestroy(lView, onDestroyCallback) {
  if ((lView[FLAGS] & 256 /* LViewFlags.Destroyed */) === 256 /* LViewFlags.Destroyed */) {
    throw new RuntimeError(911 /* RuntimeErrorCode.VIEW_ALREADY_DESTROYED */, ngDevMode && 'View has already been destroyed.');
  }
  if (lView[ON_DESTROY_HOOKS] === null) {
    lView[ON_DESTROY_HOOKS] = [];
  }
  lView[ON_DESTROY_HOOKS].push(onDestroyCallback);
}
const instructionState = {
  lFrame: /*#__PURE__*/createLFrame(null),
  bindingsEnabled: true,
  skipHydrationRootTNode: null
};
/**
 * In this mode, any changes in bindings will throw an ExpressionChangedAfterChecked error.
 *
 * Necessary to support ChangeDetectorRef.checkNoChanges().
 *
 * The `checkNoChanges` function is invoked only in ngDevMode=true and verifies that no unintended
 * changes exist in the change detector or its children.
 */
let _isInCheckNoChangesMode = false;
function getElementDepthCount() {
  return instructionState.lFrame.elementDepthCount;
}
function increaseElementDepthCount() {
  instructionState.lFrame.elementDepthCount++;
}
function decreaseElementDepthCount() {
  instructionState.lFrame.elementDepthCount--;
}
/**
 * Returns true if currently inside a skip hydration block.
 * @returns boolean
 */
function isInSkipHydrationBlock$1() {
  return instructionState.skipHydrationRootTNode !== null;
}
/**
 * Returns true if this is the root TNode of the skip hydration block.
 * @param tNode the current TNode
 * @returns boolean
 */
function isSkipHydrationRootTNode(tNode) {
  return instructionState.skipHydrationRootTNode === tNode;
}
/**
 * Clears the root skip hydration node when leaving a skip hydration block.
 */
function leaveSkipHydrationBlock() {
  instructionState.skipHydrationRootTNode = null;
}
/**
 * Return the current `LView`.
 */
function getLView() {
  return instructionState.lFrame.lView;
}
/**
 * Return the current `TView`.
 */
function getTView() {
  return instructionState.lFrame.tView;
}
function getCurrentTNode() {
  let currentTNode = getCurrentTNodePlaceholderOk();
  while (currentTNode !== null && currentTNode.type === 64 /* TNodeType.Placeholder */) {
    currentTNode = currentTNode.parent;
  }
  return currentTNode;
}
function getCurrentTNodePlaceholderOk() {
  return instructionState.lFrame.currentTNode;
}
function getCurrentParentTNode() {
  const lFrame = instructionState.lFrame;
  const currentTNode = lFrame.currentTNode;
  return lFrame.isParent ? currentTNode : currentTNode.parent;
}
function setCurrentTNode(tNode, isParent) {
  ngDevMode && tNode && assertTNodeForTView(tNode, instructionState.lFrame.tView);
  const lFrame = instructionState.lFrame;
  lFrame.currentTNode = tNode;
  lFrame.isParent = isParent;
}
function isCurrentTNodeParent() {
  return instructionState.lFrame.isParent;
}
function setCurrentTNodeAsNotParent() {
  instructionState.lFrame.isParent = false;
}
function isInCheckNoChangesMode() {
  !ngDevMode && throwError('Must never be called in production mode');
  return _isInCheckNoChangesMode;
}
function setIsInCheckNoChangesMode(mode) {
  !ngDevMode && throwError('Must never be called in production mode');
  _isInCheckNoChangesMode = mode;
}
function getBindingIndex() {
  return instructionState.lFrame.bindingIndex;
}
function setBindingIndex(value) {
  return instructionState.lFrame.bindingIndex = value;
}
function nextBindingIndex() {
  return instructionState.lFrame.bindingIndex++;
}
function isInI18nBlock() {
  return instructionState.lFrame.inI18n;
}
/**
 * Set a new binding root index so that host template functions can execute.
 *
 * Bindings inside the host template are 0 index. But because we don't know ahead of time
 * how many host bindings we have we can't pre-compute them. For this reason they are all
 * 0 index and we just shift the root so that they match next available location in the LView.
 *
 * @param bindingRootIndex Root index for `hostBindings`
 * @param currentDirectiveIndex `TData[currentDirectiveIndex]` will point to the current directive
 *        whose `hostBindings` are being processed.
 */
function setBindingRootForHostBindings(bindingRootIndex, currentDirectiveIndex) {
  const lFrame = instructionState.lFrame;
  lFrame.bindingIndex = lFrame.bindingRootIndex = bindingRootIndex;
  setCurrentDirectiveIndex(currentDirectiveIndex);
}
/**
 * When host binding is executing this points to the directive index.
 * `TView.data[getCurrentDirectiveIndex()]` is `DirectiveDef`
 * `LView[getCurrentDirectiveIndex()]` is directive instance.
 */
function getCurrentDirectiveIndex() {
  return instructionState.lFrame.currentDirectiveIndex;
}
/**
 * Sets an index of a directive whose `hostBindings` are being processed.
 *
 * @param currentDirectiveIndex `TData` index where current directive instance can be found.
 */
function setCurrentDirectiveIndex(currentDirectiveIndex) {
  instructionState.lFrame.currentDirectiveIndex = currentDirectiveIndex;
}
function setCurrentQueryIndex(value) {
  instructionState.lFrame.currentQueryIndex = value;
}
/**
 * Returns a `TNode` of the location where the current `LView` is declared at.
 *
 * @param lView an `LView` that we want to find parent `TNode` for.
 */
function getDeclarationTNode(lView) {
  const tView = lView[TVIEW];
  // Return the declaration parent for embedded views
  if (tView.type === 2 /* TViewType.Embedded */) {
    ngDevMode && assertDefined(tView.declTNode, 'Embedded TNodes should have declaration parents.');
    return tView.declTNode;
  }
  // Components don't have `TView.declTNode` because each instance of component could be
  // inserted in different location, hence `TView.declTNode` is meaningless.
  // Falling back to `T_HOST` in case we cross component boundary.
  if (tView.type === 1 /* TViewType.Component */) {
    return lView[T_HOST];
  }
  // Remaining TNode type is `TViewType.Root` which doesn't have a parent TNode.
  return null;
}
/**
 * This is a light weight version of the `enterView` which is needed by the DI system.
 *
 * @param lView `LView` location of the DI context.
 * @param tNode `TNode` for DI context
 * @param flags DI context flags. if `SkipSelf` flag is set than we walk up the declaration
 *     tree from `tNode`  until we find parent declared `TElementNode`.
 * @returns `true` if we have successfully entered DI associated with `tNode` (or with declared
 *     `TNode` if `flags` has  `SkipSelf`). Failing to enter DI implies that no associated
 *     `NodeInjector` can be found and we should instead use `ModuleInjector`.
 *     - If `true` than this call must be fallowed by `leaveDI`
 *     - If `false` than this call failed and we should NOT call `leaveDI`
 */
function enterDI(lView, tNode, flags) {
  ngDevMode && assertLViewOrUndefined(lView);
  if (flags & InjectFlags.SkipSelf) {
    ngDevMode && assertTNodeForTView(tNode, lView[TVIEW]);
    let parentTNode = tNode;
    let parentLView = lView;
    while (true) {
      ngDevMode && assertDefined(parentTNode, 'Parent TNode should be defined');
      parentTNode = parentTNode.parent;
      if (parentTNode === null && !(flags & InjectFlags.Host)) {
        parentTNode = getDeclarationTNode(parentLView);
        if (parentTNode === null) break;
        // In this case, a parent exists and is definitely an element. So it will definitely
        // have an existing lView as the declaration view, which is why we can assume it's defined.
        ngDevMode && assertDefined(parentLView, 'Parent LView should be defined');
        parentLView = parentLView[DECLARATION_VIEW];
        // In Ivy there are Comment nodes that correspond to ngIf and NgFor embedded directives
        // We want to skip those and look only at Elements and ElementContainers to ensure
        // we're looking at true parent nodes, and not content or other types.
        if (parentTNode.type & (2 /* TNodeType.Element */ | 8 /* TNodeType.ElementContainer */)) {
          break;
        }
      } else {
        break;
      }
    }
    if (parentTNode === null) {
      // If we failed to find a parent TNode this means that we should use module injector.
      return false;
    } else {
      tNode = parentTNode;
      lView = parentLView;
    }
  }
  ngDevMode && assertTNodeForLView(tNode, lView);
  const lFrame = instructionState.lFrame = allocLFrame();
  lFrame.currentTNode = tNode;
  lFrame.lView = lView;
  return true;
}
/**
 * Swap the current lView with a new lView.
 *
 * For performance reasons we store the lView in the top level of the module.
 * This way we minimize the number of properties to read. Whenever a new view
 * is entered we have to store the lView for later, and when the view is
 * exited the state has to be restored
 *
 * @param newView New lView to become active
 * @returns the previously active lView;
 */
function enterView(newView) {
  ngDevMode && assertNotEqual(newView[0], newView[1], '????');
  ngDevMode && assertLViewOrUndefined(newView);
  const newLFrame = allocLFrame();
  if (ngDevMode) {
    assertEqual(newLFrame.isParent, true, 'Expected clean LFrame');
    assertEqual(newLFrame.lView, null, 'Expected clean LFrame');
    assertEqual(newLFrame.tView, null, 'Expected clean LFrame');
    assertEqual(newLFrame.selectedIndex, -1, 'Expected clean LFrame');
    assertEqual(newLFrame.elementDepthCount, 0, 'Expected clean LFrame');
    assertEqual(newLFrame.currentDirectiveIndex, -1, 'Expected clean LFrame');
    assertEqual(newLFrame.currentNamespace, null, 'Expected clean LFrame');
    assertEqual(newLFrame.bindingRootIndex, -1, 'Expected clean LFrame');
    assertEqual(newLFrame.currentQueryIndex, 0, 'Expected clean LFrame');
  }
  const tView = newView[TVIEW];
  instructionState.lFrame = newLFrame;
  ngDevMode && tView.firstChild && assertTNodeForTView(tView.firstChild, tView);
  newLFrame.currentTNode = tView.firstChild;
  newLFrame.lView = newView;
  newLFrame.tView = tView;
  newLFrame.contextLView = newView;
  newLFrame.bindingIndex = tView.bindingStartIndex;
  newLFrame.inI18n = false;
}
/**
 * Allocates next free LFrame. This function tries to reuse the `LFrame`s to lower memory pressure.
 */
function allocLFrame() {
  const currentLFrame = instructionState.lFrame;
  const childLFrame = currentLFrame === null ? null : currentLFrame.child;
  const newLFrame = childLFrame === null ? createLFrame(currentLFrame) : childLFrame;
  return newLFrame;
}
function createLFrame(parent) {
  const lFrame = {
    currentTNode: null,
    isParent: true,
    lView: null,
    tView: null,
    selectedIndex: -1,
    contextLView: null,
    elementDepthCount: 0,
    currentNamespace: null,
    currentDirectiveIndex: -1,
    bindingRootIndex: -1,
    bindingIndex: -1,
    currentQueryIndex: 0,
    parent: parent,
    child: null,
    inI18n: false
  };
  parent !== null && (parent.child = lFrame); // link the new LFrame for reuse.
  return lFrame;
}
/**
 * A lightweight version of leave which is used with DI.
 *
 * This function only resets `currentTNode` and `LView` as those are the only properties
 * used with DI (`enterDI()`).
 *
 * NOTE: This function is reexported as `leaveDI`. However `leaveDI` has return type of `void` where
 * as `leaveViewLight` has `LFrame`. This is so that `leaveViewLight` can be used in `leaveView`.
 */
function leaveViewLight() {
  const oldLFrame = instructionState.lFrame;
  instructionState.lFrame = oldLFrame.parent;
  oldLFrame.currentTNode = null;
  oldLFrame.lView = null;
  return oldLFrame;
}
/**
 * This is a lightweight version of the `leaveView` which is needed by the DI system.
 *
 * NOTE: this function is an alias so that we can change the type of the function to have `void`
 * return type.
 */
const leaveDI = leaveViewLight;
/**
 * Leave the current `LView`
 *
 * This pops the `LFrame` with the associated `LView` from the stack.
 *
 * IMPORTANT: We must zero out the `LFrame` values here otherwise they will be retained. This is
 * because for performance reasons we don't release `LFrame` but rather keep it for next use.
 */
function leaveView() {
  const oldLFrame = leaveViewLight();
  oldLFrame.isParent = true;
  oldLFrame.tView = null;
  oldLFrame.selectedIndex = -1;
  oldLFrame.contextLView = null;
  oldLFrame.elementDepthCount = 0;
  oldLFrame.currentDirectiveIndex = -1;
  oldLFrame.currentNamespace = null;
  oldLFrame.bindingRootIndex = -1;
  oldLFrame.bindingIndex = -1;
  oldLFrame.currentQueryIndex = 0;
}
function nextContextImpl(level) {
  const contextLView = instructionState.lFrame.contextLView = walkUpViews(level, instructionState.lFrame.contextLView);
  return contextLView[CONTEXT];
}
function walkUpViews(nestingLevel, currentView) {
  while (nestingLevel > 0) {
    ngDevMode && assertDefined(currentView[DECLARATION_VIEW], 'Declaration view should be defined if nesting level is greater than 0.');
    currentView = currentView[DECLARATION_VIEW];
    nestingLevel--;
  }
  return currentView;
}
/**
 * Gets the currently selected element index.
 *
 * Used with {@link property} instruction (and more in the future) to identify the index in the
 * current `LView` to act on.
 */
function getSelectedIndex() {
  return instructionState.lFrame.selectedIndex;
}
/**
 * Sets the most recent index passed to {@link select}
 *
 * Used with {@link property} instruction (and more in the future) to identify the index in the
 * current `LView` to act on.
 *
 * (Note that if an "exit function" was set earlier (via `setElementExitFn()`) then that will be
 * run if and when the provided `index` value is different from the current selected index value.)
 */
function setSelectedIndex(index) {
  ngDevMode && index !== -1 && assertGreaterThanOrEqual(index, HEADER_OFFSET, 'Index must be past HEADER_OFFSET (or -1).');
  ngDevMode && assertLessThan(index, instructionState.lFrame.lView.length, 'Can\'t set index passed end of LView');
  instructionState.lFrame.selectedIndex = index;
}
/**
 * Gets the `tNode` that represents currently selected element.
 */
function getSelectedTNode() {
  const lFrame = instructionState.lFrame;
  return getTNode(lFrame.tView, lFrame.selectedIndex);
}
function getNamespace$1() {
  return instructionState.lFrame.currentNamespace;
}
let _wasLastNodeCreated = true;
/**
 * Retrieves a global flag that indicates whether the most recent DOM node
 * was created or hydrated.
 */
function wasLastNodeCreated() {
  return _wasLastNodeCreated;
}
/**
 * Sets a global flag to indicate whether the most recent DOM node
 * was created or hydrated.
 */
function lastNodeWasCreated(flag) {
  _wasLastNodeCreated = flag;
}

/**
 * Adds all directive lifecycle hooks from the given `DirectiveDef` to the given `TView`.
 *
 * Must be run *only* on the first template pass.
 *
 * Sets up the pre-order hooks on the provided `tView`,
 * see {@link HookData} for details about the data structure.
 *
 * @param directiveIndex The index of the directive in LView
 * @param directiveDef The definition containing the hooks to setup in tView
 * @param tView The current TView
 */
function registerPreOrderHooks(directiveIndex, directiveDef, tView) {
  ngDevMode && assertFirstCreatePass(tView);
  const {
    ngOnChanges,
    ngOnInit,
    ngDoCheck
  } = directiveDef.type.prototype;
  if (ngOnChanges) {
    const wrappedOnChanges = NgOnChangesFeatureImpl(directiveDef);
    (tView.preOrderHooks ??= []).push(directiveIndex, wrappedOnChanges);
    (tView.preOrderCheckHooks ??= []).push(directiveIndex, wrappedOnChanges);
  }
  if (ngOnInit) {
    (tView.preOrderHooks ??= []).push(0 - directiveIndex, ngOnInit);
  }
  if (ngDoCheck) {
    (tView.preOrderHooks ??= []).push(directiveIndex, ngDoCheck);
    (tView.preOrderCheckHooks ??= []).push(directiveIndex, ngDoCheck);
  }
}
/**
 *
 * Loops through the directives on the provided `tNode` and queues hooks to be
 * run that are not initialization hooks.
 *
 * Should be executed during `elementEnd()` and similar to
 * preserve hook execution order. Content, view, and destroy hooks for projected
 * components and directives must be called *before* their hosts.
 *
 * Sets up the content, view, and destroy hooks on the provided `tView`,
 * see {@link HookData} for details about the data structure.
 *
 * NOTE: This does not set up `onChanges`, `onInit` or `doCheck`, those are set up
 * separately at `elementStart`.
 *
 * @param tView The current TView
 * @param tNode The TNode whose directives are to be searched for hooks to queue
 */
function registerPostOrderHooks(tView, tNode) {
  ngDevMode && assertFirstCreatePass(tView);
  // It's necessary to loop through the directives at elementEnd() (rather than processing in
  // directiveCreate) so we can preserve the current hook order. Content, view, and destroy
  // hooks for projected components and directives must be called *before* their hosts.
  for (let i = tNode.directiveStart, end = tNode.directiveEnd; i < end; i++) {
    const directiveDef = tView.data[i];
    ngDevMode && assertDefined(directiveDef, 'Expecting DirectiveDef');
    const lifecycleHooks = directiveDef.type.prototype;
    const {
      ngAfterContentInit,
      ngAfterContentChecked,
      ngAfterViewInit,
      ngAfterViewChecked,
      ngOnDestroy
    } = lifecycleHooks;
    if (ngAfterContentInit) {
      (tView.contentHooks ??= []).push(-i, ngAfterContentInit);
    }
    if (ngAfterContentChecked) {
      (tView.contentHooks ??= []).push(i, ngAfterContentChecked);
      (tView.contentCheckHooks ??= []).push(i, ngAfterContentChecked);
    }
    if (ngAfterViewInit) {
      (tView.viewHooks ??= []).push(-i, ngAfterViewInit);
    }
    if (ngAfterViewChecked) {
      (tView.viewHooks ??= []).push(i, ngAfterViewChecked);
      (tView.viewCheckHooks ??= []).push(i, ngAfterViewChecked);
    }
    if (ngOnDestroy != null) {
      (tView.destroyHooks ??= []).push(i, ngOnDestroy);
    }
  }
}
/**
 * Executing hooks requires complex logic as we need to deal with 2 constraints.
 *
 * 1. Init hooks (ngOnInit, ngAfterContentInit, ngAfterViewInit) must all be executed once and only
 * once, across many change detection cycles. This must be true even if some hooks throw, or if
 * some recursively trigger a change detection cycle.
 * To solve that, it is required to track the state of the execution of these init hooks.
 * This is done by storing and maintaining flags in the view: the {@link InitPhaseState},
 * and the index within that phase. They can be seen as a cursor in the following structure:
 * [[onInit1, onInit2], [afterContentInit1], [afterViewInit1, afterViewInit2, afterViewInit3]]
 * They are stored as flags in LView[FLAGS].
 *
 * 2. Pre-order hooks can be executed in batches, because of the select instruction.
 * To be able to pause and resume their execution, we also need some state about the hook's array
 * that is being processed:
 * - the index of the next hook to be executed
 * - the number of init hooks already found in the processed part of the  array
 * They are stored as flags in LView[PREORDER_HOOK_FLAGS].
 */
/**
 * Executes pre-order check hooks ( OnChanges, DoChanges) given a view where all the init hooks were
 * executed once. This is a light version of executeInitAndCheckPreOrderHooks where we can skip read
 * / write of the init-hooks related flags.
 * @param lView The LView where hooks are defined
 * @param hooks Hooks to be run
 * @param nodeIndex 3 cases depending on the value:
 * - undefined: all hooks from the array should be executed (post-order case)
 * - null: execute hooks only from the saved index until the end of the array (pre-order case, when
 * flushing the remaining hooks)
 * - number: execute hooks only from the saved index until that node index exclusive (pre-order
 * case, when executing select(number))
 */
function executeCheckHooks(lView, hooks, nodeIndex) {
  callHooks(lView, hooks, 3 /* InitPhaseState.InitPhaseCompleted */, nodeIndex);
}
/**
 * Executes post-order init and check hooks (one of AfterContentInit, AfterContentChecked,
 * AfterViewInit, AfterViewChecked) given a view where there are pending init hooks to be executed.
 * @param lView The LView where hooks are defined
 * @param hooks Hooks to be run
 * @param initPhase A phase for which hooks should be run
 * @param nodeIndex 3 cases depending on the value:
 * - undefined: all hooks from the array should be executed (post-order case)
 * - null: execute hooks only from the saved index until the end of the array (pre-order case, when
 * flushing the remaining hooks)
 * - number: execute hooks only from the saved index until that node index exclusive (pre-order
 * case, when executing select(number))
 */
function executeInitAndCheckHooks(lView, hooks, initPhase, nodeIndex) {
  ngDevMode && assertNotEqual(initPhase, 3 /* InitPhaseState.InitPhaseCompleted */, 'Init pre-order hooks should not be called more than once');
  if ((lView[FLAGS] & 3 /* LViewFlags.InitPhaseStateMask */) === initPhase) {
    callHooks(lView, hooks, initPhase, nodeIndex);
  }
}
function incrementInitPhaseFlags(lView, initPhase) {
  ngDevMode && assertNotEqual(initPhase, 3 /* InitPhaseState.InitPhaseCompleted */, 'Init hooks phase should not be incremented after all init hooks have been run.');
  let flags = lView[FLAGS];
  if ((flags & 3 /* LViewFlags.InitPhaseStateMask */) === initPhase) {
    flags &= 8191 /* LViewFlags.IndexWithinInitPhaseReset */;
    flags += 1 /* LViewFlags.InitPhaseStateIncrementer */;
    lView[FLAGS] = flags;
  }
}
/**
 * Calls lifecycle hooks with their contexts, skipping init hooks if it's not
 * the first LView pass
 *
 * @param currentView The current view
 * @param arr The array in which the hooks are found
 * @param initPhaseState the current state of the init phase
 * @param currentNodeIndex 3 cases depending on the value:
 * - undefined: all hooks from the array should be executed (post-order case)
 * - null: execute hooks only from the saved index until the end of the array (pre-order case, when
 * flushing the remaining hooks)
 * - number: execute hooks only from the saved index until that node index exclusive (pre-order
 * case, when executing select(number))
 */
function callHooks(currentView, arr, initPhase, currentNodeIndex) {
  ngDevMode && assertEqual(isInCheckNoChangesMode(), false, 'Hooks should never be run when in check no changes mode.');
  const startIndex = currentNodeIndex !== undefined ? currentView[PREORDER_HOOK_FLAGS] & 65535 /* PreOrderHookFlags.IndexOfTheNextPreOrderHookMaskMask */ : 0;
  const nodeIndexLimit = currentNodeIndex != null ? currentNodeIndex : -1;
  const max = arr.length - 1; // Stop the loop at length - 1, because we look for the hook at i + 1
  let lastNodeIndexFound = 0;
  for (let i = startIndex; i < max; i++) {
    const hook = arr[i + 1];
    if (typeof hook === 'number') {
      lastNodeIndexFound = arr[i];
      if (currentNodeIndex != null && lastNodeIndexFound >= currentNodeIndex) {
        break;
      }
    } else {
      const isInitHook = arr[i] < 0;
      if (isInitHook) {
        currentView[PREORDER_HOOK_FLAGS] += 65536 /* PreOrderHookFlags.NumberOfInitHooksCalledIncrementer */;
      }

      if (lastNodeIndexFound < nodeIndexLimit || nodeIndexLimit == -1) {
        callHook(currentView, initPhase, arr, i);
        currentView[PREORDER_HOOK_FLAGS] = (currentView[PREORDER_HOOK_FLAGS] & 4294901760 /* PreOrderHookFlags.NumberOfInitHooksCalledMask */) + i + 2;
      }
      i++;
    }
  }
}
/**
 * Executes a single lifecycle hook, making sure that:
 * - it is called in the non-reactive context;
 * - profiling data are registered.
 */
function callHookInternal(directive, hook) {
  profiler(4 /* ProfilerEvent.LifecycleHookStart */, directive, hook);
  const prevConsumer = setActiveConsumer(null);
  try {
    hook.call(directive);
  } finally {
    setActiveConsumer(prevConsumer);
    profiler(5 /* ProfilerEvent.LifecycleHookEnd */, directive, hook);
  }
}
/**
 * Execute one hook against the current `LView`.
 *
 * @param currentView The current view
 * @param initPhaseState the current state of the init phase
 * @param arr The array in which the hooks are found
 * @param i The current index within the hook data array
 */
function callHook(currentView, initPhase, arr, i) {
  const isInitHook = arr[i] < 0;
  const hook = arr[i + 1];
  const directiveIndex = isInitHook ? -arr[i] : arr[i];
  const directive = currentView[directiveIndex];
  if (isInitHook) {
    const indexWithintInitPhase = currentView[FLAGS] >> 13 /* LViewFlags.IndexWithinInitPhaseShift */;
    // The init phase state must be always checked here as it may have been recursively updated.
    if (indexWithintInitPhase < currentView[PREORDER_HOOK_FLAGS] >> 16 /* PreOrderHookFlags.NumberOfInitHooksCalledShift */ && (currentView[FLAGS] & 3 /* LViewFlags.InitPhaseStateMask */) === initPhase) {
      currentView[FLAGS] += 8192 /* LViewFlags.IndexWithinInitPhaseIncrementer */;
      callHookInternal(directive, hook);
    }
  } else {
    callHookInternal(directive, hook);
  }
}
const NO_PARENT_INJECTOR = -1;
/**
 * Each injector is saved in 9 contiguous slots in `LView` and 9 contiguous slots in
 * `TView.data`. This allows us to store information about the current node's tokens (which
 * can be shared in `TView`) as well as the tokens of its ancestor nodes (which cannot be
 * shared, so they live in `LView`).
 *
 * Each of these slots (aside from the last slot) contains a bloom filter. This bloom filter
 * determines whether a directive is available on the associated node or not. This prevents us
 * from searching the directives array at this level unless it's probable the directive is in it.
 *
 * See: https://en.wikipedia.org/wiki/Bloom_filter for more about bloom filters.
 *
 * Because all injectors have been flattened into `LView` and `TViewData`, they cannot typed
 * using interfaces as they were previously. The start index of each `LInjector` and `TInjector`
 * will differ based on where it is flattened into the main array, so it's not possible to know
 * the indices ahead of time and save their types here. The interfaces are still included here
 * for documentation purposes.
 *
 * export interface LInjector extends Array<any> {
 *
 *    // Cumulative bloom for directive IDs 0-31  (IDs are % BLOOM_SIZE)
 *    [0]: number;
 *
 *    // Cumulative bloom for directive IDs 32-63
 *    [1]: number;
 *
 *    // Cumulative bloom for directive IDs 64-95
 *    [2]: number;
 *
 *    // Cumulative bloom for directive IDs 96-127
 *    [3]: number;
 *
 *    // Cumulative bloom for directive IDs 128-159
 *    [4]: number;
 *
 *    // Cumulative bloom for directive IDs 160 - 191
 *    [5]: number;
 *
 *    // Cumulative bloom for directive IDs 192 - 223
 *    [6]: number;
 *
 *    // Cumulative bloom for directive IDs 224 - 255
 *    [7]: number;
 *
 *    // We need to store a reference to the injector's parent so DI can keep looking up
 *    // the injector tree until it finds the dependency it's looking for.
 *    [PARENT_INJECTOR]: number;
 * }
 *
 * export interface TInjector extends Array<any> {
 *
 *    // Shared node bloom for directive IDs 0-31  (IDs are % BLOOM_SIZE)
 *    [0]: number;
 *
 *    // Shared node bloom for directive IDs 32-63
 *    [1]: number;
 *
 *    // Shared node bloom for directive IDs 64-95
 *    [2]: number;
 *
 *    // Shared node bloom for directive IDs 96-127
 *    [3]: number;
 *
 *    // Shared node bloom for directive IDs 128-159
 *    [4]: number;
 *
 *    // Shared node bloom for directive IDs 160 - 191
 *    [5]: number;
 *
 *    // Shared node bloom for directive IDs 192 - 223
 *    [6]: number;
 *
 *    // Shared node bloom for directive IDs 224 - 255
 *    [7]: number;
 *
 *    // Necessary to find directive indices for a particular node.
 *    [TNODE]: TElementNode|TElementContainerNode|TContainerNode;
 *  }
 */
/**
 * Factory for creating instances of injectors in the NodeInjector.
 *
 * This factory is complicated by the fact that it can resolve `multi` factories as well.
 *
 * NOTE: Some of the fields are optional which means that this class has two hidden classes.
 * - One without `multi` support (most common)
 * - One with `multi` values, (rare).
 *
 * Since VMs can cache up to 4 inline hidden classes this is OK.
 *
 * - Single factory: Only `resolving` and `factory` is defined.
 * - `providers` factory: `componentProviders` is a number and `index = -1`.
 * - `viewProviders` factory: `componentProviders` is a number and `index` points to `providers`.
 */
class NodeInjectorFactory {
  constructor(
  /**
   * Factory to invoke in order to create a new instance.
   */
  factory,
  /**
   * Set to `true` if the token is declared in `viewProviders` (or if it is component).
   */
  isViewProvider, injectImplementation) {
    this.factory = factory;
    /**
     * Marker set to true during factory invocation to see if we get into recursive loop.
     * Recursive loop causes an error to be displayed.
     */
    this.resolving = false;
    ngDevMode && assertDefined(factory, 'Factory not specified');
    ngDevMode && assertEqual(typeof factory, 'function', 'Expected factory function.');
    this.canSeeViewProviders = isViewProvider;
    this.injectImpl = injectImplementation;
  }
}
function isFactory(obj) {
  return obj instanceof NodeInjectorFactory;
}

/**
 * Converts `TNodeType` into human readable text.
 * Make sure this matches with `TNodeType`
 */
function toTNodeTypeAsString(tNodeType) {
  let text = '';
  tNodeType & 1 /* TNodeType.Text */ && (text += '|Text');
  tNodeType & 2 /* TNodeType.Element */ && (text += '|Element');
  tNodeType & 4 /* TNodeType.Container */ && (text += '|Container');
  tNodeType & 8 /* TNodeType.ElementContainer */ && (text += '|ElementContainer');
  tNodeType & 16 /* TNodeType.Projection */ && (text += '|Projection');
  tNodeType & 32 /* TNodeType.Icu */ && (text += '|IcuContainer');
  tNodeType & 64 /* TNodeType.Placeholder */ && (text += '|Placeholder');
  return text.length > 0 ? text.substring(1) : text;
}
/**
 * Returns `true` if the `TNode` has a directive which has `@Input()` for `class` binding.
 *
 * ```
 * <div my-dir [class]="exp"></div>
 * ```
 * and
 * ```
 * @Directive({
 * })
 * class MyDirective {
 *   @Input()
 *   class: string;
 * }
 * ```
 *
 * In the above case it is necessary to write the reconciled styling information into the
 * directive's input.
 *
 * @param tNode
 */
function hasClassInput(tNode) {
  return (tNode.flags & 8 /* TNodeFlags.hasClassInput */) !== 0;
}
/**
 * Returns `true` if the `TNode` has a directive which has `@Input()` for `style` binding.
 *
 * ```
 * <div my-dir [style]="exp"></div>
 * ```
 * and
 * ```
 * @Directive({
 * })
 * class MyDirective {
 *   @Input()
 *   class: string;
 * }
 * ```
 *
 * In the above case it is necessary to write the reconciled styling information into the
 * directive's input.
 *
 * @param tNode
 */
function hasStyleInput(tNode) {
  return (tNode.flags & 16 /* TNodeFlags.hasStyleInput */) !== 0;
}
function assertTNodeType(tNode, expectedTypes, message) {
  assertDefined(tNode, 'should be called with a TNode');
  if ((tNode.type & expectedTypes) === 0) {
    throwError(message || `Expected [${toTNodeTypeAsString(expectedTypes)}] but got ${toTNodeTypeAsString(tNode.type)}.`);
  }
}
function assertPureTNodeType(type) {
  if (!(type === 2 /* TNodeType.Element */ ||
  //
  type === 1 /* TNodeType.Text */ ||
  //
  type === 4 /* TNodeType.Container */ ||
  //
  type === 8 /* TNodeType.ElementContainer */ ||
  //
  type === 32 /* TNodeType.Icu */ ||
  //
  type === 16 /* TNodeType.Projection */ ||
  //
  type === 64 /* TNodeType.Placeholder */)) {
    throwError(`Expected TNodeType to have only a single type selected, but got ${toTNodeTypeAsString(type)}.`);
  }
}

/// Parent Injector Utils ///////////////////////////////////////////////////////////////
function hasParentInjector(parentLocation) {
  return parentLocation !== NO_PARENT_INJECTOR;
}
function getParentInjectorIndex(parentLocation) {
  ngDevMode && assertNumber(parentLocation, 'Number expected');
  ngDevMode && assertNotEqual(parentLocation, -1, 'Not a valid state.');
  const parentInjectorIndex = parentLocation & 32767 /* RelativeInjectorLocationFlags.InjectorIndexMask */;
  ngDevMode && assertGreaterThan(parentInjectorIndex, HEADER_OFFSET, 'Parent injector must be pointing past HEADER_OFFSET.');
  return parentLocation & 32767 /* RelativeInjectorLocationFlags.InjectorIndexMask */;
}

function getParentInjectorViewOffset(parentLocation) {
  return parentLocation >> 16 /* RelativeInjectorLocationFlags.ViewOffsetShift */;
}
/**
 * Unwraps a parent injector location number to find the view offset from the current injector,
 * then walks up the declaration view tree until the view is found that contains the parent
 * injector.
 *
 * @param location The location of the parent injector, which contains the view offset
 * @param startView The LView instance from which to start walking up the view tree
 * @returns The LView instance that contains the parent injector
 */
function getParentInjectorView(location, startView) {
  let viewOffset = getParentInjectorViewOffset(location);
  let parentView = startView;
  // For most cases, the parent injector can be found on the host node (e.g. for component
  // or container), but we must keep the loop here to support the rarer case of deeply nested
  // <ng-template> tags or inline views, where the parent injector might live many views
  // above the child injector.
  while (viewOffset > 0) {
    parentView = parentView[DECLARATION_VIEW];
    viewOffset--;
  }
  return parentView;
}

/**
 * Defines if the call to `inject` should include `viewProviders` in its resolution.
 *
 * This is set to true when we try to instantiate a component. This value is reset in
 * `getNodeInjectable` to a value which matches the declaration location of the token about to be
 * instantiated. This is done so that if we are injecting a token which was declared outside of
 * `viewProviders` we don't accidentally pull `viewProviders` in.
 *
 * Example:
 *
 * ```
 * @Injectable()
 * class MyService {
 *   constructor(public value: String) {}
 * }
 *
 * @Component({
 *   providers: [
 *     MyService,
 *     {provide: String, value: 'providers' }
 *   ]
 *   viewProviders: [
 *     {provide: String, value: 'viewProviders'}
 *   ]
 * })
 * class MyComponent {
 *   constructor(myService: MyService, value: String) {
 *     // We expect that Component can see into `viewProviders`.
 *     expect(value).toEqual('viewProviders');
 *     // `MyService` was not declared in `viewProviders` hence it can't see it.
 *     expect(myService.value).toEqual('providers');
 *   }
 * }
 *
 * ```
 */
let includeViewProviders = true;
function setIncludeViewProviders(v) {
  const oldValue = includeViewProviders;
  includeViewProviders = v;
  return oldValue;
}
/**
 * The number of slots in each bloom filter (used by DI). The larger this number, the fewer
 * directives that will share slots, and thus, the fewer false positives when checking for
 * the existence of a directive.
 */
const BLOOM_SIZE = 256;
const BLOOM_MASK = BLOOM_SIZE - 1;
/**
 * The number of bits that is represented by a single bloom bucket. JS bit operations are 32 bits,
 * so each bucket represents 32 distinct tokens which accounts for log2(32) = 5 bits of a bloom hash
 * number.
 */
const BLOOM_BUCKET_BITS = 5;
/** Counter used to generate unique IDs for directives. */
let nextNgElementId = 0;
/** Value used when something wasn't found by an injector. */
const NOT_FOUND = {};
/**
 * Registers this directive as present in its node's injector by flipping the directive's
 * corresponding bit in the injector's bloom filter.
 *
 * @param injectorIndex The index of the node injector where this token should be registered
 * @param tView The TView for the injector's bloom filters
 * @param type The directive token to register
 */
function bloomAdd(injectorIndex, tView, type) {
  ngDevMode && assertEqual(tView.firstCreatePass, true, 'expected firstCreatePass to be true');
  let id;
  if (typeof type === 'string') {
    id = type.charCodeAt(0) || 0;
  } else if (type.hasOwnProperty(NG_ELEMENT_ID)) {
    id = type[NG_ELEMENT_ID];
  }
  // Set a unique ID on the directive type, so if something tries to inject the directive,
  // we can easily retrieve the ID and hash it into the bloom bit that should be checked.
  if (id == null) {
    id = type[NG_ELEMENT_ID] = nextNgElementId++;
  }
  // We only have BLOOM_SIZE (256) slots in our bloom filter (8 buckets * 32 bits each),
  // so all unique IDs must be modulo-ed into a number from 0 - 255 to fit into the filter.
  const bloomHash = id & BLOOM_MASK;
  // Create a mask that targets the specific bit associated with the directive.
  // JS bit operations are 32 bits, so this will be a number between 2^0 and 2^31, corresponding
  // to bit positions 0 - 31 in a 32 bit integer.
  const mask = 1 << bloomHash;
  // Each bloom bucket in `tData` represents `BLOOM_BUCKET_BITS` number of bits of `bloomHash`.
  // Any bits in `bloomHash` beyond `BLOOM_BUCKET_BITS` indicate the bucket offset that the mask
  // should be written to.
  tView.data[injectorIndex + (bloomHash >> BLOOM_BUCKET_BITS)] |= mask;
}
/**
 * Creates (or gets an existing) injector for a given element or container.
 *
 * @param tNode for which an injector should be retrieved / created.
 * @param lView View where the node is stored
 * @returns Node injector
 */
function getOrCreateNodeInjectorForNode(tNode, lView) {
  const existingInjectorIndex = getInjectorIndex(tNode, lView);
  if (existingInjectorIndex !== -1) {
    return existingInjectorIndex;
  }
  const tView = lView[TVIEW];
  if (tView.firstCreatePass) {
    tNode.injectorIndex = lView.length;
    insertBloom(tView.data, tNode); // foundation for node bloom
    insertBloom(lView, null); // foundation for cumulative bloom
    insertBloom(tView.blueprint, null);
  }
  const parentLoc = getParentInjectorLocation(tNode, lView);
  const injectorIndex = tNode.injectorIndex;
  // If a parent injector can't be found, its location is set to -1.
  // In that case, we don't need to set up a cumulative bloom
  if (hasParentInjector(parentLoc)) {
    const parentIndex = getParentInjectorIndex(parentLoc);
    const parentLView = getParentInjectorView(parentLoc, lView);
    const parentData = parentLView[TVIEW].data;
    // Creates a cumulative bloom filter that merges the parent's bloom filter
    // and its own cumulative bloom (which contains tokens for all ancestors)
    for (let i = 0; i < 8 /* NodeInjectorOffset.BLOOM_SIZE */; i++) {
      lView[injectorIndex + i] = parentLView[parentIndex + i] | parentData[parentIndex + i];
    }
  }
  lView[injectorIndex + 8 /* NodeInjectorOffset.PARENT */] = parentLoc;
  return injectorIndex;
}
function insertBloom(arr, footer) {
  arr.push(0, 0, 0, 0, 0, 0, 0, 0, footer);
}
function getInjectorIndex(tNode, lView) {
  if (tNode.injectorIndex === -1 ||
  // If the injector index is the same as its parent's injector index, then the index has been
  // copied down from the parent node. No injector has been created yet on this node.
  tNode.parent && tNode.parent.injectorIndex === tNode.injectorIndex ||
  // After the first template pass, the injector index might exist but the parent values
  // might not have been calculated yet for this instance
  lView[tNode.injectorIndex + 8 /* NodeInjectorOffset.PARENT */] === null) {
    return -1;
  } else {
    ngDevMode && assertIndexInRange(lView, tNode.injectorIndex);
    return tNode.injectorIndex;
  }
}
/**
 * Finds the index of the parent injector, with a view offset if applicable. Used to set the
 * parent injector initially.
 *
 * @returns Returns a number that is the combination of the number of LViews that we have to go up
 * to find the LView containing the parent inject AND the index of the injector within that LView.
 */
function getParentInjectorLocation(tNode, lView) {
  if (tNode.parent && tNode.parent.injectorIndex !== -1) {
    // If we have a parent `TNode` and there is an injector associated with it we are done, because
    // the parent injector is within the current `LView`.
    return tNode.parent.injectorIndex; // ViewOffset is 0
  }
  // When parent injector location is computed it may be outside of the current view. (ie it could
  // be pointing to a declared parent location). This variable stores number of declaration parents
  // we need to walk up in order to find the parent injector location.
  let declarationViewOffset = 0;
  let parentTNode = null;
  let lViewCursor = lView;
  // The parent injector is not in the current `LView`. We will have to walk the declared parent
  // `LView` hierarchy and look for it. If we walk of the top, that means that there is no parent
  // `NodeInjector`.
  while (lViewCursor !== null) {
    parentTNode = getTNodeFromLView(lViewCursor);
    if (parentTNode === null) {
      // If we have no parent, than we are done.
      return NO_PARENT_INJECTOR;
    }
    ngDevMode && parentTNode && assertTNodeForLView(parentTNode, lViewCursor[DECLARATION_VIEW]);
    // Every iteration of the loop requires that we go to the declared parent.
    declarationViewOffset++;
    lViewCursor = lViewCursor[DECLARATION_VIEW];
    if (parentTNode.injectorIndex !== -1) {
      // We found a NodeInjector which points to something.
      return parentTNode.injectorIndex | declarationViewOffset << 16 /* RelativeInjectorLocationFlags.ViewOffsetShift */;
    }
  }

  return NO_PARENT_INJECTOR;
}
/**
 * Makes a type or an injection token public to the DI system by adding it to an
 * injector's bloom filter.
 *
 * @param di The node injector in which a directive will be added
 * @param token The type or the injection token to be made public
 */
function diPublicInInjector(injectorIndex, tView, token) {
  bloomAdd(injectorIndex, tView, token);
}
function notFoundValueOrThrow(notFoundValue, token, flags) {
  if (flags & InjectFlags.Optional || notFoundValue !== undefined) {
    return notFoundValue;
  } else {
    throwProviderNotFoundError(token, 'NodeInjector');
  }
}
/**
 * Returns the value associated to the given token from the ModuleInjector or throws exception
 *
 * @param lView The `LView` that contains the `tNode`
 * @param token The token to look for
 * @param flags Injection flags
 * @param notFoundValue The value to return when the injection flags is `InjectFlags.Optional`
 * @returns the value from the injector or throws an exception
 */
function lookupTokenUsingModuleInjector(lView, token, flags, notFoundValue) {
  if (flags & InjectFlags.Optional && notFoundValue === undefined) {
    // This must be set or the NullInjector will throw for optional deps
    notFoundValue = null;
  }
  if ((flags & (InjectFlags.Self | InjectFlags.Host)) === 0) {
    const moduleInjector = lView[INJECTOR$1];
    // switch to `injectInjectorOnly` implementation for module injector, since module injector
    // should not have access to Component/Directive DI scope (that may happen through
    // `directiveInject` implementation)
    const previousInjectImplementation = setInjectImplementation(undefined);
    try {
      if (moduleInjector) {
        return moduleInjector.get(token, notFoundValue, flags & InjectFlags.Optional);
      } else {
        return injectRootLimpMode(token, notFoundValue, flags & InjectFlags.Optional);
      }
    } finally {
      setInjectImplementation(previousInjectImplementation);
    }
  }
  return notFoundValueOrThrow(notFoundValue, token, flags);
}
/**
 * Returns the value associated to the given token from the NodeInjectors => ModuleInjector.
 *
 * Look for the injector providing the token by walking up the node injector tree and then
 * the module injector tree.
 *
 * This function patches `token` with `__NG_ELEMENT_ID__` which contains the id for the bloom
 * filter. `-1` is reserved for injecting `Injector` (implemented by `NodeInjector`)
 *
 * @param tNode The Node where the search for the injector should start
 * @param lView The `LView` that contains the `tNode`
 * @param token The token to look for
 * @param flags Injection flags
 * @param notFoundValue The value to return when the injection flags is `InjectFlags.Optional`
 * @returns the value from the injector, `null` when not found, or `notFoundValue` if provided
 */
function getOrCreateInjectable(tNode, lView, token, flags = InjectFlags.Default, notFoundValue) {
  if (tNode !== null) {
    // If the view or any of its ancestors have an embedded
    // view injector, we have to look it up there first.
    if (lView[FLAGS] & 2048 /* LViewFlags.HasEmbeddedViewInjector */ &&
    // The token must be present on the current node injector when the `Self`
    // flag is set, so the lookup on embedded view injector(s) can be skipped.
    !(flags & InjectFlags.Self)) {
      const embeddedInjectorValue = lookupTokenUsingEmbeddedInjector(tNode, lView, token, flags, NOT_FOUND);
      if (embeddedInjectorValue !== NOT_FOUND) {
        return embeddedInjectorValue;
      }
    }
    // Otherwise try the node injector.
    const value = lookupTokenUsingNodeInjector(tNode, lView, token, flags, NOT_FOUND);
    if (value !== NOT_FOUND) {
      return value;
    }
  }
  // Finally, fall back to the module injector.
  return lookupTokenUsingModuleInjector(lView, token, flags, notFoundValue);
}
/**
 * Returns the value associated to the given token from the node injector.
 *
 * @param tNode The Node where the search for the injector should start
 * @param lView The `LView` that contains the `tNode`
 * @param token The token to look for
 * @param flags Injection flags
 * @param notFoundValue The value to return when the injection flags is `InjectFlags.Optional`
 * @returns the value from the injector, `null` when not found, or `notFoundValue` if provided
 */
function lookupTokenUsingNodeInjector(tNode, lView, token, flags, notFoundValue) {
  const bloomHash = bloomHashBitOrFactory(token);
  // If the ID stored here is a function, this is a special object like ElementRef or TemplateRef
  // so just call the factory function to create it.
  if (typeof bloomHash === 'function') {
    if (!enterDI(lView, tNode, flags)) {
      // Failed to enter DI, try module injector instead. If a token is injected with the @Host
      // flag, the module injector is not searched for that token in Ivy.
      return flags & InjectFlags.Host ? notFoundValueOrThrow(notFoundValue, token, flags) : lookupTokenUsingModuleInjector(lView, token, flags, notFoundValue);
    }
    try {
      let value;
      if (ngDevMode) {
        runInInjectorProfilerContext(new NodeInjector(getCurrentTNode(), getLView()), token, () => {
          value = bloomHash(flags);
          if (value != null) {
            emitInstanceCreatedByInjectorEvent(value);
          }
        });
      } else {
        value = bloomHash(flags);
      }
      if (value == null && !(flags & InjectFlags.Optional)) {
        throwProviderNotFoundError(token);
      } else {
        return value;
      }
    } finally {
      leaveDI();
    }
  } else if (typeof bloomHash === 'number') {
    // A reference to the previous injector TView that was found while climbing the element
    // injector tree. This is used to know if viewProviders can be accessed on the current
    // injector.
    let previousTView = null;
    let injectorIndex = getInjectorIndex(tNode, lView);
    let parentLocation = NO_PARENT_INJECTOR;
    let hostTElementNode = flags & InjectFlags.Host ? lView[DECLARATION_COMPONENT_VIEW][T_HOST] : null;
    // If we should skip this injector, or if there is no injector on this node, start by
    // searching the parent injector.
    if (injectorIndex === -1 || flags & InjectFlags.SkipSelf) {
      parentLocation = injectorIndex === -1 ? getParentInjectorLocation(tNode, lView) : lView[injectorIndex + 8 /* NodeInjectorOffset.PARENT */];
      if (parentLocation === NO_PARENT_INJECTOR || !shouldSearchParent(flags, false)) {
        injectorIndex = -1;
      } else {
        previousTView = lView[TVIEW];
        injectorIndex = getParentInjectorIndex(parentLocation);
        lView = getParentInjectorView(parentLocation, lView);
      }
    }
    // Traverse up the injector tree until we find a potential match or until we know there
    // *isn't* a match.
    while (injectorIndex !== -1) {
      ngDevMode && assertNodeInjector(lView, injectorIndex);
      // Check the current injector. If it matches, see if it contains token.
      const tView = lView[TVIEW];
      ngDevMode && assertTNodeForLView(tView.data[injectorIndex + 8 /* NodeInjectorOffset.TNODE */], lView);
      if (bloomHasToken(bloomHash, injectorIndex, tView.data)) {
        // At this point, we have an injector which *may* contain the token, so we step through
        // the providers and directives associated with the injector's corresponding node to get
        // the instance.
        const instance = searchTokensOnInjector(injectorIndex, lView, token, previousTView, flags, hostTElementNode);
        if (instance !== NOT_FOUND) {
          return instance;
        }
      }
      parentLocation = lView[injectorIndex + 8 /* NodeInjectorOffset.PARENT */];
      if (parentLocation !== NO_PARENT_INJECTOR && shouldSearchParent(flags, lView[TVIEW].data[injectorIndex + 8 /* NodeInjectorOffset.TNODE */] === hostTElementNode) && bloomHasToken(bloomHash, injectorIndex, lView)) {
        // The def wasn't found anywhere on this node, so it was a false positive.
        // Traverse up the tree and continue searching.
        previousTView = tView;
        injectorIndex = getParentInjectorIndex(parentLocation);
        lView = getParentInjectorView(parentLocation, lView);
      } else {
        // If we should not search parent OR If the ancestor bloom filter value does not have the
        // bit corresponding to the directive we can give up on traversing up to find the specific
        // injector.
        injectorIndex = -1;
      }
    }
  }
  return notFoundValue;
}
function searchTokensOnInjector(injectorIndex, lView, token, previousTView, flags, hostTElementNode) {
  const currentTView = lView[TVIEW];
  const tNode = currentTView.data[injectorIndex + 8 /* NodeInjectorOffset.TNODE */];
  // First, we need to determine if view providers can be accessed by the starting element.
  // There are two possibilities
  const canAccessViewProviders = previousTView == null ?
  // 1) This is the first invocation `previousTView == null` which means that we are at the
  // `TNode` of where injector is starting to look. In such a case the only time we are allowed
  // to look into the ViewProviders is if:
  // - we are on a component
  // - AND the injector set `includeViewProviders` to true (implying that the token can see
  // ViewProviders because it is the Component or a Service which itself was declared in
  // ViewProviders)
  isComponentHost(tNode) && includeViewProviders :
  // 2) `previousTView != null` which means that we are now walking across the parent nodes.
  // In such a case we are only allowed to look into the ViewProviders if:
  // - We just crossed from child View to Parent View `previousTView != currentTView`
  // - AND the parent TNode is an Element.
  // This means that we just came from the Component's View and therefore are allowed to see
  // into the ViewProviders.
  previousTView != currentTView && (tNode.type & 3 /* TNodeType.AnyRNode */) !== 0;
  // This special case happens when there is a @host on the inject and when we are searching
  // on the host element node.
  const isHostSpecialCase = flags & InjectFlags.Host && hostTElementNode === tNode;
  const injectableIdx = locateDirectiveOrProvider(tNode, currentTView, token, canAccessViewProviders, isHostSpecialCase);
  if (injectableIdx !== null) {
    return getNodeInjectable(lView, currentTView, injectableIdx, tNode);
  } else {
    return NOT_FOUND;
  }
}
/**
 * Searches for the given token among the node's directives and providers.
 *
 * @param tNode TNode on which directives are present.
 * @param tView The tView we are currently processing
 * @param token Provider token or type of a directive to look for.
 * @param canAccessViewProviders Whether view providers should be considered.
 * @param isHostSpecialCase Whether the host special case applies.
 * @returns Index of a found directive or provider, or null when none found.
 */
function locateDirectiveOrProvider(tNode, tView, token, canAccessViewProviders, isHostSpecialCase) {
  const nodeProviderIndexes = tNode.providerIndexes;
  const tInjectables = tView.data;
  const injectablesStart = nodeProviderIndexes & 1048575 /* TNodeProviderIndexes.ProvidersStartIndexMask */;
  const directivesStart = tNode.directiveStart;
  const directiveEnd = tNode.directiveEnd;
  const cptViewProvidersCount = nodeProviderIndexes >> 20 /* TNodeProviderIndexes.CptViewProvidersCountShift */;
  const startingIndex = canAccessViewProviders ? injectablesStart : injectablesStart + cptViewProvidersCount;
  // When the host special case applies, only the viewProviders and the component are visible
  const endIndex = isHostSpecialCase ? injectablesStart + cptViewProvidersCount : directiveEnd;
  for (let i = startingIndex; i < endIndex; i++) {
    const providerTokenOrDef = tInjectables[i];
    if (i < directivesStart && token === providerTokenOrDef || i >= directivesStart && providerTokenOrDef.type === token) {
      return i;
    }
  }
  if (isHostSpecialCase) {
    const dirDef = tInjectables[directivesStart];
    if (dirDef && isComponentDef(dirDef) && dirDef.type === token) {
      return directivesStart;
    }
  }
  return null;
}
/**
 * Retrieve or instantiate the injectable from the `LView` at particular `index`.
 *
 * This function checks to see if the value has already been instantiated and if so returns the
 * cached `injectable`. Otherwise if it detects that the value is still a factory it
 * instantiates the `injectable` and caches the value.
 */
function getNodeInjectable(lView, tView, index, tNode) {
  let value = lView[index];
  const tData = tView.data;
  if (isFactory(value)) {
    const factory = value;
    if (factory.resolving) {
      throwCyclicDependencyError(stringifyForError(tData[index]));
    }
    const previousIncludeViewProviders = setIncludeViewProviders(factory.canSeeViewProviders);
    factory.resolving = true;
    let prevInjectContext;
    if (ngDevMode) {
      // tData indexes mirror the concrete instances in its corresponding LView.
      // lView[index] here is either the injectable instace itself or a factory,
      // therefore tData[index] is the constructor of that injectable or a
      // definition object that contains the constructor in a `.type` field.
      const token = tData[index].type || tData[index];
      const injector = new NodeInjector(tNode, lView);
      prevInjectContext = setInjectorProfilerContext({
        injector,
        token
      });
    }
    const previousInjectImplementation = factory.injectImpl ? setInjectImplementation(factory.injectImpl) : null;
    const success = enterDI(lView, tNode, InjectFlags.Default);
    ngDevMode && assertEqual(success, true, 'Because flags do not contain \`SkipSelf\' we expect this to always succeed.');
    try {
      value = lView[index] = factory.factory(undefined, tData, lView, tNode);
      ngDevMode && emitInstanceCreatedByInjectorEvent(value);
      // This code path is hit for both directives and providers.
      // For perf reasons, we want to avoid searching for hooks on providers.
      // It does no harm to try (the hooks just won't exist), but the extra
      // checks are unnecessary and this is a hot path. So we check to see
      // if the index of the dependency is in the directive range for this
      // tNode. If it's not, we know it's a provider and skip hook registration.
      if (tView.firstCreatePass && index >= tNode.directiveStart) {
        ngDevMode && assertDirectiveDef(tData[index]);
        registerPreOrderHooks(index, tData[index], tView);
      }
    } finally {
      ngDevMode && setInjectorProfilerContext(prevInjectContext);
      previousInjectImplementation !== null && setInjectImplementation(previousInjectImplementation);
      setIncludeViewProviders(previousIncludeViewProviders);
      factory.resolving = false;
      leaveDI();
    }
  }
  return value;
}
/**
 * Returns the bit in an injector's bloom filter that should be used to determine whether or not
 * the directive might be provided by the injector.
 *
 * When a directive is public, it is added to the bloom filter and given a unique ID that can be
 * retrieved on the Type. When the directive isn't public or the token is not a directive `null`
 * is returned as the node injector can not possibly provide that token.
 *
 * @param token the injection token
 * @returns the matching bit to check in the bloom filter or `null` if the token is not known.
 *   When the returned value is negative then it represents special values such as `Injector`.
 */
function bloomHashBitOrFactory(token) {
  ngDevMode && assertDefined(token, 'token must be defined');
  if (typeof token === 'string') {
    return token.charCodeAt(0) || 0;
  }
  const tokenId =
  // First check with `hasOwnProperty` so we don't get an inherited ID.
  token.hasOwnProperty(NG_ELEMENT_ID) ? token[NG_ELEMENT_ID] : undefined;
  // Negative token IDs are used for special objects such as `Injector`
  if (typeof tokenId === 'number') {
    if (tokenId >= 0) {
      return tokenId & BLOOM_MASK;
    } else {
      ngDevMode && assertEqual(tokenId, -1 /* InjectorMarkers.Injector */, 'Expecting to get Special Injector Id');
      return createNodeInjector;
    }
  } else {
    return tokenId;
  }
}
function bloomHasToken(bloomHash, injectorIndex, injectorView) {
  // Create a mask that targets the specific bit associated with the directive we're looking for.
  // JS bit operations are 32 bits, so this will be a number between 2^0 and 2^31, corresponding
  // to bit positions 0 - 31 in a 32 bit integer.
  const mask = 1 << bloomHash;
  // Each bloom bucket in `injectorView` represents `BLOOM_BUCKET_BITS` number of bits of
  // `bloomHash`. Any bits in `bloomHash` beyond `BLOOM_BUCKET_BITS` indicate the bucket offset
  // that should be used.
  const value = injectorView[injectorIndex + (bloomHash >> BLOOM_BUCKET_BITS)];
  // If the bloom filter value has the bit corresponding to the directive's bloomBit flipped on,
  // this injector is a potential match.
  return !!(value & mask);
}
/** Returns true if flags prevent parent injector from being searched for tokens */
function shouldSearchParent(flags, isFirstHostTNode) {
  return !(flags & InjectFlags.Self) && !(flags & InjectFlags.Host && isFirstHostTNode);
}
function getNodeInjectorLView(nodeInjector) {
  return nodeInjector._lView;
}
function getNodeInjectorTNode(nodeInjector) {
  return nodeInjector._tNode;
}
class NodeInjector {
  constructor(_tNode, _lView) {
    this._tNode = _tNode;
    this._lView = _lView;
  }
  get(token, notFoundValue, flags) {
    return getOrCreateInjectable(this._tNode, this._lView, token, convertToBitFlags(flags), notFoundValue);
  }
}
/** Creates a `NodeInjector` for the current node. */
function createNodeInjector() {
  return new NodeInjector(getCurrentTNode(), getLView());
}
/**
 * Returns a value from the closest embedded or node injector.
 *
 * @param tNode The Node where the search for the injector should start
 * @param lView The `LView` that contains the `tNode`
 * @param token The token to look for
 * @param flags Injection flags
 * @param notFoundValue The value to return when the injection flags is `InjectFlags.Optional`
 * @returns the value from the injector, `null` when not found, or `notFoundValue` if provided
 */
function lookupTokenUsingEmbeddedInjector(tNode, lView, token, flags, notFoundValue) {
  let currentTNode = tNode;
  let currentLView = lView;
  // When an LView with an embedded view injector is inserted, it'll likely be interlaced with
  // nodes who may have injectors (e.g. node injector -> embedded view injector -> node injector).
  // Since the bloom filters for the node injectors have already been constructed and we don't
  // have a way of extracting the records from an injector, the only way to maintain the correct
  // hierarchy when resolving the value is to walk it node-by-node while attempting to resolve
  // the token at each level.
  while (currentTNode !== null && currentLView !== null && currentLView[FLAGS] & 2048 /* LViewFlags.HasEmbeddedViewInjector */ && !(currentLView[FLAGS] & 512 /* LViewFlags.IsRoot */)) {
    ngDevMode && assertTNodeForLView(currentTNode, currentLView);
    // Note that this lookup on the node injector is using the `Self` flag, because
    // we don't want the node injector to look at any parent injectors since we
    // may hit the embedded view injector first.
    const nodeInjectorValue = lookupTokenUsingNodeInjector(currentTNode, currentLView, token, flags | InjectFlags.Self, NOT_FOUND);
    if (nodeInjectorValue !== NOT_FOUND) {
      return nodeInjectorValue;
    }
    // Has an explicit type due to a TS bug: https://github.com/microsoft/TypeScript/issues/33191
    let parentTNode = currentTNode.parent;
    // `TNode.parent` includes the parent within the current view only. If it doesn't exist,
    // it means that we've hit the view boundary and we need to go up to the next view.
    if (!parentTNode) {
      // Before we go to the next LView, check if the token exists on the current embedded injector.
      const embeddedViewInjector = currentLView[EMBEDDED_VIEW_INJECTOR];
      if (embeddedViewInjector) {
        const embeddedViewInjectorValue = embeddedViewInjector.get(token, NOT_FOUND, flags);
        if (embeddedViewInjectorValue !== NOT_FOUND) {
          return embeddedViewInjectorValue;
        }
      }
      // Otherwise keep going up the tree.
      parentTNode = getTNodeFromLView(currentLView);
      currentLView = currentLView[DECLARATION_VIEW];
    }
    currentTNode = parentTNode;
  }
  return notFoundValue;
}
/** Gets the TNode associated with an LView inside of the declaration view. */
function getTNodeFromLView(lView) {
  const tView = lView[TVIEW];
  const tViewType = tView.type;
  // The parent pointer differs based on `TView.type`.
  if (tViewType === 2 /* TViewType.Embedded */) {
    ngDevMode && assertDefined(tView.declTNode, 'Embedded TNodes should have declaration parents.');
    return tView.declTNode;
  } else if (tViewType === 1 /* TViewType.Component */) {
    // Components don't have `TView.declTNode` because each instance of component could be
    // inserted in different location, hence `TView.declTNode` is meaningless.
    return lView[T_HOST];
  }
  return null;
}
const PARAMETERS = '__parameters__';
function makeMetadataCtor(props) {
  return function ctor(...args) {
    if (props) {
      const values = props(...args);
      for (const propName in values) {
        this[propName] = values[propName];
      }
    }
  };
}
function makeParamDecorator(name, props, parentClass) {
  return noSideEffects(() => {
    const metaCtor = makeMetadataCtor(props);
    function ParamDecoratorFactory(...args) {
      if (this instanceof ParamDecoratorFactory) {
        metaCtor.apply(this, args);
        return this;
      }
      const annotationInstance = new ParamDecoratorFactory(...args);
      ParamDecorator.annotation = annotationInstance;
      return ParamDecorator;
      function ParamDecorator(cls, unusedKey, index) {
        // Use of Object.defineProperty is important since it creates non-enumerable property which
        // prevents the property is copied during subclassing.
        const parameters = cls.hasOwnProperty(PARAMETERS) ? cls[PARAMETERS] : Object.defineProperty(cls, PARAMETERS, {
          value: []
        })[PARAMETERS];
        // there might be gaps if some in between parameters do not have annotations.
        // we pad with nulls.
        while (parameters.length <= index) {
          parameters.push(null);
        }
        (parameters[index] = parameters[index] || []).push(annotationInstance);
        return cls;
      }
    }
    if (parentClass) {
      ParamDecoratorFactory.prototype = Object.create(parentClass.prototype);
    }
    ParamDecoratorFactory.prototype.ngMetadataName = name;
    ParamDecoratorFactory.annotationCls = ParamDecoratorFactory;
    return ParamDecoratorFactory;
  });
}
function getCompilerFacade(request) {
  const globalNg = _global['ng'];
  if (globalNg && globalNg.ɵcompilerFacade) {
    return globalNg.ɵcompilerFacade;
  }
  if (typeof ngDevMode === 'undefined' || ngDevMode) {
    // Log the type as an error so that a developer can easily navigate to the type from the
    // console.
    console.error(`JIT compilation failed for ${request.kind}`, request.type);
    let message = `The ${request.kind} '${request.type.name}' needs to be compiled using the JIT compiler, but '@angular/compiler' is not available.\n\n`;
    if (request.usage === 1 /* JitCompilerUsage.PartialDeclaration */) {
      message += `The ${request.kind} is part of a library that has been partially compiled.\n`;
      message += `However, the Angular Linker has not processed the library such that JIT compilation is used as fallback.\n`;
      message += '\n';
      message += `Ideally, the library is processed using the Angular Linker to become fully AOT compiled.\n`;
    } else {
      message += `JIT compilation is discouraged for production use-cases! Consider using AOT mode instead.\n`;
    }
    message += `Alternatively, the JIT compiler should be loaded by bootstrapping using '@angular/platform-browser-dynamic' or '@angular/platform-server',\n`;
    message += `or manually provide the compiler with 'import "@angular/compiler";' before bootstrapping.`;
    throw new Error(message);
  } else {
    throw new Error('JIT compiler unavailable');
  }
}
function isType(v) {
  return typeof v === 'function';
}
function deepForEach(input, fn) {
  input.forEach(value => Array.isArray(value) ? deepForEach(value, fn) : fn(value));
}
function addToArray(arr, index, value) {
  // perf: array.push is faster than array.splice!
  if (index >= arr.length) {
    arr.push(value);
  } else {
    arr.splice(index, 0, value);
  }
}
function removeFromArray(arr, index) {
  // perf: array.pop is faster than array.splice!
  if (index >= arr.length - 1) {
    return arr.pop();
  } else {
    return arr.splice(index, 1)[0];
  }
}
function newArray(size, value) {
  const list = [];
  for (let i = 0; i < size; i++) {
    list.push(value);
  }
  return list;
}
/**
 * Optional decorator and metadata.
 *
 * @Annotation
 * @publicApi
 */
const Optional = /*#__PURE__*/
// Disable tslint because `InternalInjectFlags` is a const enum which gets inlined.
// tslint:disable-next-line: no-toplevel-property-access
attachInjectFlag( /*#__PURE__*/makeParamDecorator('Optional'), 8 /* InternalInjectFlags.Optional */);

/**
 * Used to resolve resource URLs on `@Component` when used with JIT compilation.
 *
 * Example:
 * ```
 * @Component({
 *   selector: 'my-comp',
 *   templateUrl: 'my-comp.html', // This requires asynchronous resolution
 * })
 * class MyComponent{
 * }
 *
 * // Calling `renderComponent` will fail because `renderComponent` is a synchronous process
 * // and `MyComponent`'s `@Component.templateUrl` needs to be resolved asynchronously.
 *
 * // Calling `resolveComponentResources()` will resolve `@Component.templateUrl` into
 * // `@Component.template`, which allows `renderComponent` to proceed in a synchronous manner.
 *
 * // Use browser's `fetch()` function as the default resource resolution strategy.
 * resolveComponentResources(fetch).then(() => {
 *   // After resolution all URLs have been converted into `template` strings.
 *   renderComponent(MyComponent);
 * });
 *
 * ```
 *
 * NOTE: In AOT the resolution happens during compilation, and so there should be no need
 * to call this method outside JIT mode.
 *
 * @param resourceResolver a function which is responsible for returning a `Promise` to the
 * contents of the resolved URL. Browser's `fetch()` method is a good default implementation.
 */
function resolveComponentResources(resourceResolver) {
  // Store all promises which are fetching the resources.
  const componentResolved = [];
  // Cache so that we don't fetch the same resource more than once.
  const urlMap = new Map();
  function cachedResourceResolve(url) {
    let promise = urlMap.get(url);
    if (!promise) {
      const resp = resourceResolver(url);
      urlMap.set(url, promise = resp.then(unwrapResponse));
    }
    return promise;
  }
  componentResourceResolutionQueue.forEach((component, type) => {
    const promises = [];
    if (component.templateUrl) {
      promises.push(cachedResourceResolve(component.templateUrl).then(template => {
        component.template = template;
      }));
    }
    const styleUrls = component.styleUrls;
    const styles = component.styles || (component.styles = []);
    const styleOffset = component.styles.length;
    styleUrls && styleUrls.forEach((styleUrl, index) => {
      styles.push(''); // pre-allocate array.
      promises.push(cachedResourceResolve(styleUrl).then(style => {
        styles[styleOffset + index] = style;
        styleUrls.splice(styleUrls.indexOf(styleUrl), 1);
        if (styleUrls.length == 0) {
          component.styleUrls = undefined;
        }
      }));
    });
    const fullyResolved = Promise.all(promises).then(() => componentDefResolved(type));
    componentResolved.push(fullyResolved);
  });
  clearResolutionOfComponentResourcesQueue();
  return Promise.all(componentResolved).then(() => undefined);
}
let componentResourceResolutionQueue = /*#__PURE__*/new Map();
// Track when existing ɵcmp for a Type is waiting on resources.
const componentDefPendingResolution = /*#__PURE__*/new Set();
function clearResolutionOfComponentResourcesQueue() {
  const old = componentResourceResolutionQueue;
  componentResourceResolutionQueue = new Map();
  return old;
}
function isComponentResourceResolutionQueueEmpty() {
  return componentResourceResolutionQueue.size === 0;
}
function unwrapResponse(response) {
  return typeof response == 'string' ? response : response.text();
}
function componentDefResolved(type) {
  componentDefPendingResolution.delete(type);
}

/**
 * Defines a schema that allows an NgModule to contain the following:
 * - Non-Angular elements named with dash case (`-`).
 * - Element properties named with dash case (`-`).
 * Dash case is the naming convention for custom elements.
 *
 * @publicApi
 */
const CUSTOM_ELEMENTS_SCHEMA = {
  name: 'custom-elements'
};
/**
 * Defines a schema that allows any property on any element.
 *
 * This schema allows you to ignore the errors related to any unknown elements or properties in a
 * template. The usage of this schema is generally discouraged because it prevents useful validation
 * and may hide real errors in your template. Consider using the `CUSTOM_ELEMENTS_SCHEMA` instead.
 *
 * @publicApi
 */
const NO_ERRORS_SCHEMA = {
  name: 'no-errors-schema'
};
/**
 * Validates that the element is known at runtime and produces
 * an error if it's not the case.
 * This check is relevant for JIT-compiled components (for AOT-compiled
 * ones this check happens at build time).
 *
 * The element is considered known if either:
 * - it's a known HTML element
 * - it's a known custom element
 * - the element matches any directive
 * - the element is allowed by one of the schemas
 *
 * @param element Element to validate
 * @param lView An `LView` that represents a current component that is being rendered
 * @param tagName Name of the tag to check
 * @param schemas Array of schemas
 * @param hasDirectives Boolean indicating that the element matches any directive
 */
function validateElementIsKnown(element, lView, tagName, schemas, hasDirectives) {
  // If `schemas` is set to `null`, that's an indication that this Component was compiled in AOT
  // mode where this check happens at compile time. In JIT mode, `schemas` is always present and
  // defined as an array (as an empty array in case `schemas` field is not defined) and we should
  // execute the check below.
  if (schemas === null) return;
  // If the element matches any directive, it's considered as valid.
  if (!hasDirectives && tagName !== null) {
    // The element is unknown if it's an instance of HTMLUnknownElement, or it isn't registered
    // as a custom element. Note that unknown elements with a dash in their name won't be instances
    // of HTMLUnknownElement in browsers that support web components.
    const isUnknown =
    // Note that we can't check for `typeof HTMLUnknownElement === 'function'` because
    // Domino doesn't expose HTMLUnknownElement globally.
    typeof HTMLUnknownElement !== 'undefined' && HTMLUnknownElement && element instanceof HTMLUnknownElement || typeof customElements !== 'undefined' && tagName.indexOf('-') > -1 && !customElements.get(tagName);
    if (isUnknown && !matchingSchemas(schemas, tagName)) {
      const isHostStandalone = isHostComponentStandalone(lView);
      const templateLocation = getTemplateLocationDetails(lView);
      const schemas = `'${isHostStandalone ? '@Component' : '@NgModule'}.schemas'`;
      let message = `'${tagName}' is not a known element${templateLocation}:\n`;
      message += `1. If '${tagName}' is an Angular component, then verify that it is ${isHostStandalone ? 'included in the \'@Component.imports\' of this component' : 'a part of an @NgModule where this component is declared'}.\n`;
      if (tagName && tagName.indexOf('-') > -1) {
        message += `2. If '${tagName}' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the ${schemas} of this component to suppress this message.`;
      } else {
        message += `2. To allow any element add 'NO_ERRORS_SCHEMA' to the ${schemas} of this component.`;
      }
      {
        console.error(formatRuntimeError(304 /* RuntimeErrorCode.UNKNOWN_ELEMENT */, message));
      }
    }
  }
}
/**
 * Validates that the property of the element is known at runtime and returns
 * false if it's not the case.
 * This check is relevant for JIT-compiled components (for AOT-compiled
 * ones this check happens at build time).
 *
 * The property is considered known if either:
 * - it's a known property of the element
 * - the element is allowed by one of the schemas
 * - the property is used for animations
 *
 * @param element Element to validate
 * @param propName Name of the property to check
 * @param tagName Name of the tag hosting the property
 * @param schemas Array of schemas
 */
function isPropertyValid(element, propName, tagName, schemas) {
  // If `schemas` is set to `null`, that's an indication that this Component was compiled in AOT
  // mode where this check happens at compile time. In JIT mode, `schemas` is always present and
  // defined as an array (as an empty array in case `schemas` field is not defined) and we should
  // execute the check below.
  if (schemas === null) return true;
  // The property is considered valid if the element matches the schema, it exists on the element,
  // or it is synthetic.
  if (matchingSchemas(schemas, tagName) || propName in element || isAnimationProp(propName)) {
    return true;
  }
  // Note: `typeof Node` returns 'function' in most browsers, but is undefined with domino.
  return typeof Node === 'undefined' || Node === null || !(element instanceof Node);
}
/**
 * Logs or throws an error that a property is not supported on an element.
 *
 * @param propName Name of the invalid property
 * @param tagName Name of the tag hosting the property
 * @param nodeType Type of the node hosting the property
 * @param lView An `LView` that represents a current component
 */
function handleUnknownPropertyError(propName, tagName, nodeType, lView) {
  // Special-case a situation when a structural directive is applied to
  // an `<ng-template>` element, for example: `<ng-template *ngIf="true">`.
  // In this case the compiler generates the `ɵɵtemplate` instruction with
  // the `null` as the tagName. The directive matching logic at runtime relies
  // on this effect (see `isInlineTemplate`), thus using the 'ng-template' as
  // a default value of the `tNode.value` is not feasible at this moment.
  if (!tagName && nodeType === 4 /* TNodeType.Container */) {
    tagName = 'ng-template';
  }
  const isHostStandalone = isHostComponentStandalone(lView);
  const templateLocation = getTemplateLocationDetails(lView);
  let message = `Can't bind to '${propName}' since it isn't a known property of '${tagName}'${templateLocation}.`;
  const schemas = `'${isHostStandalone ? '@Component' : '@NgModule'}.schemas'`;
  const importLocation = isHostStandalone ? 'included in the \'@Component.imports\' of this component' : 'a part of an @NgModule where this component is declared';
  if (KNOWN_CONTROL_FLOW_DIRECTIVES.has(propName)) {
    // Most likely this is a control flow directive (such as `*ngIf`) used in
    // a template, but the directive or the `CommonModule` is not imported.
    const correspondingImport = KNOWN_CONTROL_FLOW_DIRECTIVES.get(propName);
    message += `\nIf the '${propName}' is an Angular control flow directive, ` + `please make sure that either the '${correspondingImport}' directive or the 'CommonModule' is ${importLocation}.`;
  } else {
    // May be an Angular component, which is not imported/declared?
    message += `\n1. If '${tagName}' is an Angular component and it has the ` + `'${propName}' input, then verify that it is ${importLocation}.`;
    // May be a Web Component?
    if (tagName && tagName.indexOf('-') > -1) {
      message += `\n2. If '${tagName}' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' ` + `to the ${schemas} of this component to suppress this message.`;
      message += `\n3. To allow any property add 'NO_ERRORS_SCHEMA' to ` + `the ${schemas} of this component.`;
    } else {
      // If it's expected, the error can be suppressed by the `NO_ERRORS_SCHEMA` schema.
      message += `\n2. To allow any property add 'NO_ERRORS_SCHEMA' to ` + `the ${schemas} of this component.`;
    }
  }
  reportUnknownPropertyError(message);
}
function reportUnknownPropertyError(message) {
  {
    console.error(formatRuntimeError(303 /* RuntimeErrorCode.UNKNOWN_BINDING */, message));
  }
}
/**
 * WARNING: this is a **dev-mode only** function (thus should always be guarded by the `ngDevMode`)
 * and must **not** be used in production bundles. The function makes megamorphic reads, which might
 * be too slow for production mode and also it relies on the constructor function being available.
 *
 * Gets a reference to the host component def (where a current component is declared).
 *
 * @param lView An `LView` that represents a current component that is being rendered.
 */
function getDeclarationComponentDef(lView) {
  !ngDevMode && throwError('Must never be called in production mode');
  const declarationLView = lView[DECLARATION_COMPONENT_VIEW];
  const context = declarationLView[CONTEXT];
  // Unable to obtain a context.
  if (!context) return null;
  return context.constructor ? getComponentDef(context.constructor) : null;
}
/**
 * WARNING: this is a **dev-mode only** function (thus should always be guarded by the `ngDevMode`)
 * and must **not** be used in production bundles. The function makes megamorphic reads, which might
 * be too slow for production mode.
 *
 * Checks if the current component is declared inside of a standalone component template.
 *
 * @param lView An `LView` that represents a current component that is being rendered.
 */
function isHostComponentStandalone(lView) {
  !ngDevMode && throwError('Must never be called in production mode');
  const componentDef = getDeclarationComponentDef(lView);
  // Treat host component as non-standalone if we can't obtain the def.
  return !!componentDef?.standalone;
}
/**
 * WARNING: this is a **dev-mode only** function (thus should always be guarded by the `ngDevMode`)
 * and must **not** be used in production bundles. The function makes megamorphic reads, which might
 * be too slow for production mode.
 *
 * Constructs a string describing the location of the host component template. The function is used
 * in dev mode to produce error messages.
 *
 * @param lView An `LView` that represents a current component that is being rendered.
 */
function getTemplateLocationDetails(lView) {
  !ngDevMode && throwError('Must never be called in production mode');
  const hostComponentDef = getDeclarationComponentDef(lView);
  const componentClassName = hostComponentDef?.type?.name;
  return componentClassName ? ` (used in the '${componentClassName}' component template)` : '';
}
/**
 * The set of known control flow directives and their corresponding imports.
 * We use this set to produce a more precises error message with a note
 * that the `CommonModule` should also be included.
 */
const KNOWN_CONTROL_FLOW_DIRECTIVES = /*#__PURE__*/new Map([['ngIf', 'NgIf'], ['ngFor', 'NgFor'], ['ngSwitchCase', 'NgSwitchCase'], ['ngSwitchDefault', 'NgSwitchDefault']]);
/**
 * Returns true if the tag name is allowed by specified schemas.
 * @param schemas Array of schemas
 * @param tagName Name of the tag
 */
function matchingSchemas(schemas, tagName) {
  if (schemas !== null) {
    for (let i = 0; i < schemas.length; i++) {
      const schema = schemas[i];
      if (schema === NO_ERRORS_SCHEMA || schema === CUSTOM_ELEMENTS_SCHEMA && tagName && tagName.indexOf('-') > -1) {
        return true;
      }
    }
  }
  return false;
}

/**
 * The name of an attribute that can be added to the hydration boundary node
 * (component host node) to disable hydration for the content within that boundary.
 */
const SKIP_HYDRATION_ATTR_NAME = 'ngSkipHydration';
/**
 * Helper function to check if a given TNode has the 'ngSkipHydration' attribute.
 */
function hasSkipHydrationAttrOnTNode(tNode) {
  const SKIP_HYDRATION_ATTR_NAME_LOWER_CASE = SKIP_HYDRATION_ATTR_NAME.toLowerCase();
  const attrs = tNode.mergedAttrs;
  if (attrs === null) return false;
  // only ever look at the attribute name and skip the values
  for (let i = 0; i < attrs.length; i += 2) {
    const value = attrs[i];
    // This is a marker, which means that the static attributes section is over,
    // so we can exit early.
    if (typeof value === 'number') return false;
    if (typeof value === 'string' && value.toLowerCase() === SKIP_HYDRATION_ATTR_NAME_LOWER_CASE) {
      return true;
    }
  }
  return false;
}
/**
 * Checks whether a TNode has a flag to indicate that it's a part of
 * a skip hydration block.
 */
function hasInSkipHydrationBlockFlag(tNode) {
  return (tNode.flags & 128 /* TNodeFlags.inSkipHydrationBlock */) === 128 /* TNodeFlags.inSkipHydrationBlock */;
}
/**
 * Helper function that determines if a given node is within a skip hydration block
 * by navigating up the TNode tree to see if any parent nodes have skip hydration
 * attribute.
 *
 * TODO(akushnir): this function should contain the logic of `hasInSkipHydrationBlockFlag`,
 * there is no need to traverse parent nodes when we have a TNode flag (which would also
 * make this lookup O(1)).
 */
function isInSkipHydrationBlock(tNode) {
  let currentTNode = tNode.parent;
  while (currentTNode) {
    if (hasSkipHydrationAttrOnTNode(currentTNode)) {
      return true;
    }
    currentTNode = currentTNode.parent;
  }
  return false;
}

/**
 * Flags for renderer-specific style modifiers.
 * @publicApi
 */
var RendererStyleFlags2 = /*#__PURE__*/function (RendererStyleFlags2) {
  // TODO(misko): This needs to be refactored into a separate file so that it can be imported from
  // `node_manipulation.ts` Currently doing the import cause resolution order to change and fails
  // the tests. The work around is to have hard coded value in `node_manipulation.ts` for now.
  /**
   * Marks a style as important.
   */
  RendererStyleFlags2[RendererStyleFlags2["Important"] = 1] = "Important";
  /**
   * Marks a style as using dash case naming (this-is-dash-case).
   */
  RendererStyleFlags2[RendererStyleFlags2["DashCase"] = 2] = "DashCase";
  return RendererStyleFlags2;
}(RendererStyleFlags2 || {});
/**
 * Disallowed strings in the comment.
 *
 * see: https://html.spec.whatwg.org/multipage/syntax.html#comments
 */
const COMMENT_DISALLOWED = /^>|^->|<!--|-->|--!>|<!-$/g;
/**
 * Delimiter in the disallowed strings which needs to be wrapped with zero with character.
 */
const COMMENT_DELIMITER = /(<|>)/;
const COMMENT_DELIMITER_ESCAPED = '\u200B$1\u200B';
/**
 * Escape the content of comment strings so that it can be safely inserted into a comment node.
 *
 * The issue is that HTML does not specify any way to escape comment end text inside the comment.
 * Consider: `<!-- The way you close a comment is with ">", and "->" at the beginning or by "-->" or
 * "--!>" at the end. -->`. Above the `"-->"` is meant to be text not an end to the comment. This
 * can be created programmatically through DOM APIs. (`<!--` are also disallowed.)
 *
 * see: https://html.spec.whatwg.org/multipage/syntax.html#comments
 *
 * ```
 * div.innerHTML = div.innerHTML
 * ```
 *
 * One would expect that the above code would be safe to do, but it turns out that because comment
 * text is not escaped, the comment may contain text which will prematurely close the comment
 * opening up the application for XSS attack. (In SSR we programmatically create comment nodes which
 * may contain such text and expect them to be safe.)
 *
 * This function escapes the comment text by looking for comment delimiters (`<` and `>`) and
 * surrounding them with `_>_` where the `_` is a zero width space `\u200B`. The result is that if a
 * comment contains any of the comment start/end delimiters (such as `<!--`, `-->` or `--!>`) the
 * text it will render normally but it will not cause the HTML parser to close/open the comment.
 *
 * @param value text to make safe for comment node by escaping the comment open/close character
 *     sequence.
 */
function escapeCommentText(value) {
  return value.replace(COMMENT_DISALLOWED, text => text.replace(COMMENT_DELIMITER, COMMENT_DELIMITER_ESCAPED));
}

// Keeps track of the currently-active LViews.
const TRACKED_LVIEWS = /*#__PURE__*/new Map();
// Used for generating unique IDs for LViews.
let uniqueIdCounter = 0;
/** Gets a unique ID that can be assigned to an LView. */
function getUniqueLViewId() {
  return uniqueIdCounter++;
}
/** Starts tracking an LView. */
function registerLView(lView) {
  ngDevMode && assertNumber(lView[ID], 'LView must have an ID in order to be registered');
  TRACKED_LVIEWS.set(lView[ID], lView);
}
/** Gets an LView by its unique ID. */
function getLViewById(id) {
  ngDevMode && assertNumber(id, 'ID used for LView lookup must be a number');
  return TRACKED_LVIEWS.get(id) || null;
}
/** Stops tracking an LView. */
function unregisterLView(lView) {
  ngDevMode && assertNumber(lView[ID], 'Cannot stop tracking an LView that does not have an ID');
  TRACKED_LVIEWS.delete(lView[ID]);
}

/**
 * The internal view context which is specific to a given DOM element, directive or
 * component instance. Each value in here (besides the LView and element node details)
 * can be present, null or undefined. If undefined then it implies the value has not been
 * looked up yet, otherwise, if null, then a lookup was executed and nothing was found.
 *
 * Each value will get filled when the respective value is examined within the getContext
 * function. The component, element and each directive instance will share the same instance
 * of the context.
 */
class LContext {
  /** Component's parent view data. */
  get lView() {
    return getLViewById(this.lViewId);
  }
  constructor(
  /**
   * ID of the component's parent view data.
   */
  lViewId,
  /**
   * The index instance of the node.
   */
  nodeIndex,
  /**
   * The instance of the DOM node that is attached to the lNode.
   */
  native) {
    this.lViewId = lViewId;
    this.nodeIndex = nodeIndex;
    this.native = native;
  }
}

/**
 * Returns the matching `LContext` data for a given DOM node, directive or component instance.
 *
 * This function will examine the provided DOM element, component, or directive instance\'s
 * monkey-patched property to derive the `LContext` data. Once called then the monkey-patched
 * value will be that of the newly created `LContext`.
 *
 * If the monkey-patched value is the `LView` instance then the context value for that
 * target will be created and the monkey-patch reference will be updated. Therefore when this
 * function is called it may mutate the provided element\'s, component\'s or any of the associated
 * directive\'s monkey-patch values.
 *
 * If the monkey-patch value is not detected then the code will walk up the DOM until an element
 * is found which contains a monkey-patch reference. When that occurs then the provided element
 * will be updated with a new context (which is then returned). If the monkey-patch value is not
 * detected for a component/directive instance then it will throw an error (all components and
 * directives should be automatically monkey-patched by ivy).
 *
 * @param target Component, Directive or DOM Node.
 */
function getLContext(target) {
  let mpValue = readPatchedData(target);
  if (mpValue) {
    // only when it's an array is it considered an LView instance
    // ... otherwise it's an already constructed LContext instance
    if (isLView(mpValue)) {
      const lView = mpValue;
      let nodeIndex;
      let component = undefined;
      let directives = undefined;
      if (isComponentInstance(target)) {
        nodeIndex = findViaComponent(lView, target);
        if (nodeIndex == -1) {
          throw new Error('The provided component was not found in the application');
        }
        component = target;
      } else if (isDirectiveInstance(target)) {
        nodeIndex = findViaDirective(lView, target);
        if (nodeIndex == -1) {
          throw new Error('The provided directive was not found in the application');
        }
        directives = getDirectivesAtNodeIndex(nodeIndex, lView);
      } else {
        nodeIndex = findViaNativeElement(lView, target);
        if (nodeIndex == -1) {
          return null;
        }
      }
      // the goal is not to fill the entire context full of data because the lookups
      // are expensive. Instead, only the target data (the element, component, container, ICU
      // expression or directive details) are filled into the context. If called multiple times
      // with different target values then the missing target data will be filled in.
      const native = unwrapRNode(lView[nodeIndex]);
      const existingCtx = readPatchedData(native);
      const context = existingCtx && !Array.isArray(existingCtx) ? existingCtx : createLContext(lView, nodeIndex, native);
      // only when the component has been discovered then update the monkey-patch
      if (component && context.component === undefined) {
        context.component = component;
        attachPatchData(context.component, context);
      }
      // only when the directives have been discovered then update the monkey-patch
      if (directives && context.directives === undefined) {
        context.directives = directives;
        for (let i = 0; i < directives.length; i++) {
          attachPatchData(directives[i], context);
        }
      }
      attachPatchData(context.native, context);
      mpValue = context;
    }
  } else {
    const rElement = target;
    ngDevMode && assertDomNode(rElement);
    // if the context is not found then we need to traverse upwards up the DOM
    // to find the nearest element that has already been monkey patched with data
    let parent = rElement;
    while (parent = parent.parentNode) {
      const parentContext = readPatchedData(parent);
      if (parentContext) {
        const lView = Array.isArray(parentContext) ? parentContext : parentContext.lView;
        // the edge of the app was also reached here through another means
        // (maybe because the DOM was changed manually).
        if (!lView) {
          return null;
        }
        const index = findViaNativeElement(lView, rElement);
        if (index >= 0) {
          const native = unwrapRNode(lView[index]);
          const context = createLContext(lView, index, native);
          attachPatchData(native, context);
          mpValue = context;
          break;
        }
      }
    }
  }
  return mpValue || null;
}
/**
 * Creates an empty instance of a `LContext` context
 */
function createLContext(lView, nodeIndex, native) {
  return new LContext(lView[ID], nodeIndex, native);
}
/**
 * Takes a component instance and returns the view for that component.
 *
 * @param componentInstance
 * @returns The component's view
 */
function getComponentViewByInstance(componentInstance) {
  let patchedData = readPatchedData(componentInstance);
  let lView;
  if (isLView(patchedData)) {
    const contextLView = patchedData;
    const nodeIndex = findViaComponent(contextLView, componentInstance);
    lView = getComponentLViewByIndex(nodeIndex, contextLView);
    const context = createLContext(contextLView, nodeIndex, lView[HOST]);
    context.component = componentInstance;
    attachPatchData(componentInstance, context);
    attachPatchData(context.native, context);
  } else {
    const context = patchedData;
    const contextLView = context.lView;
    ngDevMode && assertLView(contextLView);
    lView = getComponentLViewByIndex(context.nodeIndex, contextLView);
  }
  return lView;
}
/**
 * This property will be monkey-patched on elements, components and directives.
 */
const MONKEY_PATCH_KEY_NAME = '__ngContext__';
/**
 * Assigns the given data to the given target (which could be a component,
 * directive or DOM node instance) using monkey-patching.
 */
function attachPatchData(target, data) {
  ngDevMode && assertDefined(target, 'Target expected');
  // Only attach the ID of the view in order to avoid memory leaks (see #41047). We only do this
  // for `LView`, because we have control over when an `LView` is created and destroyed, whereas
  // we can't know when to remove an `LContext`.
  if (isLView(data)) {
    target[MONKEY_PATCH_KEY_NAME] = data[ID];
    registerLView(data);
  } else {
    target[MONKEY_PATCH_KEY_NAME] = data;
  }
}
/**
 * Returns the monkey-patch value data present on the target (which could be
 * a component, directive or a DOM node).
 */
function readPatchedData(target) {
  ngDevMode && assertDefined(target, 'Target expected');
  const data = target[MONKEY_PATCH_KEY_NAME];
  return typeof data === 'number' ? getLViewById(data) : data || null;
}
function readPatchedLView(target) {
  const value = readPatchedData(target);
  if (value) {
    return isLView(value) ? value : value.lView;
  }
  return null;
}
function isComponentInstance(instance) {
  return instance && instance.constructor && instance.constructor.ɵcmp;
}
function isDirectiveInstance(instance) {
  return instance && instance.constructor && instance.constructor.ɵdir;
}
/**
 * Locates the element within the given LView and returns the matching index
 */
function findViaNativeElement(lView, target) {
  const tView = lView[TVIEW];
  for (let i = HEADER_OFFSET; i < tView.bindingStartIndex; i++) {
    if (unwrapRNode(lView[i]) === target) {
      return i;
    }
  }
  return -1;
}
/**
 * Locates the next tNode (child, sibling or parent).
 */
function traverseNextElement(tNode) {
  if (tNode.child) {
    return tNode.child;
  } else if (tNode.next) {
    return tNode.next;
  } else {
    // Let's take the following template: <div><span>text</span></div><component/>
    // After checking the text node, we need to find the next parent that has a "next" TNode,
    // in this case the parent `div`, so that we can find the component.
    while (tNode.parent && !tNode.parent.next) {
      tNode = tNode.parent;
    }
    return tNode.parent && tNode.parent.next;
  }
}
/**
 * Locates the component within the given LView and returns the matching index
 */
function findViaComponent(lView, componentInstance) {
  const componentIndices = lView[TVIEW].components;
  if (componentIndices) {
    for (let i = 0; i < componentIndices.length; i++) {
      const elementComponentIndex = componentIndices[i];
      const componentView = getComponentLViewByIndex(elementComponentIndex, lView);
      if (componentView[CONTEXT] === componentInstance) {
        return elementComponentIndex;
      }
    }
  } else {
    const rootComponentView = getComponentLViewByIndex(HEADER_OFFSET, lView);
    const rootComponent = rootComponentView[CONTEXT];
    if (rootComponent === componentInstance) {
      // we are dealing with the root element here therefore we know that the
      // element is the very first element after the HEADER data in the lView
      return HEADER_OFFSET;
    }
  }
  return -1;
}
/**
 * Locates the directive within the given LView and returns the matching index
 */
function findViaDirective(lView, directiveInstance) {
  // if a directive is monkey patched then it will (by default)
  // have a reference to the LView of the current view. The
  // element bound to the directive being search lives somewhere
  // in the view data. We loop through the nodes and check their
  // list of directives for the instance.
  let tNode = lView[TVIEW].firstChild;
  while (tNode) {
    const directiveIndexStart = tNode.directiveStart;
    const directiveIndexEnd = tNode.directiveEnd;
    for (let i = directiveIndexStart; i < directiveIndexEnd; i++) {
      if (lView[i] === directiveInstance) {
        return tNode.index;
      }
    }
    tNode = traverseNextElement(tNode);
  }
  return -1;
}
/**
 * Returns a list of directives applied to a node at a specific index. The list includes
 * directives matched by selector and any host directives, but it excludes components.
 * Use `getComponentAtNodeIndex` to find the component applied to a node.
 *
 * @param nodeIndex The node index
 * @param lView The target view data
 */
function getDirectivesAtNodeIndex(nodeIndex, lView) {
  const tNode = lView[TVIEW].data[nodeIndex];
  if (tNode.directiveStart === 0) return EMPTY_ARRAY;
  const results = [];
  for (let i = tNode.directiveStart; i < tNode.directiveEnd; i++) {
    const directiveInstance = lView[i];
    if (!isComponentInstance(directiveInstance)) {
      results.push(directiveInstance);
    }
  }
  return results;
}
function getComponentAtNodeIndex(nodeIndex, lView) {
  const tNode = lView[TVIEW].data[nodeIndex];
  const {
    directiveStart,
    componentOffset
  } = tNode;
  return componentOffset > -1 ? lView[directiveStart + componentOffset] : null;
}
let _icuContainerIterate;
/**
 * Iterator which provides ability to visit all of the `TIcuContainerNode` root `RNode`s.
 */
function icuContainerIterate(tIcuContainerNode, lView) {
  return _icuContainerIterate(tIcuContainerNode, lView);
}

/**
 * Gets the parent LView of the passed LView, if the PARENT is an LContainer, will get the parent of
 * that LContainer, which is an LView
 * @param lView the lView whose parent to get
 */
function getLViewParent(lView) {
  ngDevMode && assertLView(lView);
  const parent = lView[PARENT];
  return isLContainer(parent) ? parent[PARENT] : parent;
}
/**
 * Retrieve the root view from any component or `LView` by walking the parent `LView` until
 * reaching the root `LView`.
 *
 * @param componentOrLView any component or `LView`
 */
function getRootView(componentOrLView) {
  ngDevMode && assertDefined(componentOrLView, 'component');
  let lView = isLView(componentOrLView) ? componentOrLView : readPatchedLView(componentOrLView);
  while (lView && !(lView[FLAGS] & 512 /* LViewFlags.IsRoot */)) {
    lView = getLViewParent(lView);
  }
  ngDevMode && assertLView(lView);
  return lView;
}
/**
 * Returns the context information associated with the application where the target is situated. It
 * does this by walking the parent views until it gets to the root view, then getting the context
 * off of that.
 *
 * @param viewOrComponent the `LView` or component to get the root context for.
 */
function getRootContext(viewOrComponent) {
  const rootView = getRootView(viewOrComponent);
  ngDevMode && assertDefined(rootView[CONTEXT], 'Root view has no context. Perhaps it is disconnected?');
  return rootView[CONTEXT];
}
/**
 * Gets the first `LContainer` in the LView or `null` if none exists.
 */
function getFirstLContainer(lView) {
  return getNearestLContainer(lView[CHILD_HEAD]);
}
/**
 * Gets the next `LContainer` that is a sibling of the given container.
 */
function getNextLContainer(container) {
  return getNearestLContainer(container[NEXT]);
}
function getNearestLContainer(viewOrContainer) {
  while (viewOrContainer !== null && !isLContainer(viewOrContainer)) {
    viewOrContainer = viewOrContainer[NEXT];
  }
  return viewOrContainer;
}

/**
 * NOTE: for performance reasons, the possible actions are inlined within the function instead of
 * being passed as an argument.
 */
function applyToElementOrContainer(action, renderer, parent, lNodeToHandle, beforeNode) {
  // If this slot was allocated for a text node dynamically created by i18n, the text node itself
  // won't be created until i18nApply() in the update block, so this node should be skipped.
  // For more info, see "ICU expressions should work inside an ngTemplateOutlet inside an ngFor"
  // in `i18n_spec.ts`.
  if (lNodeToHandle != null) {
    let lContainer;
    let isComponent = false;
    // We are expecting an RNode, but in the case of a component or LContainer the `RNode` is
    // wrapped in an array which needs to be unwrapped. We need to know if it is a component and if
    // it has LContainer so that we can process all of those cases appropriately.
    if (isLContainer(lNodeToHandle)) {
      lContainer = lNodeToHandle;
    } else if (isLView(lNodeToHandle)) {
      isComponent = true;
      ngDevMode && assertDefined(lNodeToHandle[HOST], 'HOST must be defined for a component LView');
      lNodeToHandle = lNodeToHandle[HOST];
    }
    const rNode = unwrapRNode(lNodeToHandle);
    if (action === 0 /* WalkTNodeTreeAction.Create */ && parent !== null) {
      if (beforeNode == null) {
        nativeAppendChild(renderer, parent, rNode);
      } else {
        nativeInsertBefore(renderer, parent, rNode, beforeNode || null, true);
      }
    } else if (action === 1 /* WalkTNodeTreeAction.Insert */ && parent !== null) {
      nativeInsertBefore(renderer, parent, rNode, beforeNode || null, true);
    } else if (action === 2 /* WalkTNodeTreeAction.Detach */) {
      nativeRemoveNode(renderer, rNode, isComponent);
    } else if (action === 3 /* WalkTNodeTreeAction.Destroy */) {
      ngDevMode && ngDevMode.rendererDestroyNode++;
      renderer.destroyNode(rNode);
    }
    if (lContainer != null) {
      applyContainer(renderer, action, lContainer, parent, beforeNode);
    }
  }
}
function createTextNode(renderer, value) {
  ngDevMode && ngDevMode.rendererCreateTextNode++;
  ngDevMode && ngDevMode.rendererSetText++;
  return renderer.createText(value);
}
function updateTextNode(renderer, rNode, value) {
  ngDevMode && ngDevMode.rendererSetText++;
  renderer.setValue(rNode, value);
}
/**
 * Creates a native element from a tag name, using a renderer.
 * @param renderer A renderer to use
 * @param name the tag name
 * @param namespace Optional namespace for element.
 * @returns the element created
 */
function createElementNode(renderer, name, namespace) {
  ngDevMode && ngDevMode.rendererCreateElement++;
  return renderer.createElement(name, namespace);
}
/**
 * Removes all DOM elements associated with a view.
 *
 * Because some root nodes of the view may be containers, we sometimes need
 * to propagate deeply into the nested containers to remove all elements in the
 * views beneath it.
 *
 * @param tView The `TView' of the `LView` from which elements should be added or removed
 * @param lView The view from which elements should be added or removed
 */
function removeViewFromDOM(tView, lView) {
  const renderer = lView[RENDERER];
  applyView(tView, lView, renderer, 2 /* WalkTNodeTreeAction.Detach */, null, null);
  lView[HOST] = null;
  lView[T_HOST] = null;
}
/**
 * Adds all DOM elements associated with a view.
 *
 * Because some root nodes of the view may be containers, we sometimes need
 * to propagate deeply into the nested containers to add all elements in the
 * views beneath it.
 *
 * @param tView The `TView' of the `LView` from which elements should be added or removed
 * @param parentTNode The `TNode` where the `LView` should be attached to.
 * @param renderer Current renderer to use for DOM manipulations.
 * @param lView The view from which elements should be added or removed
 * @param parentNativeNode The parent `RElement` where it should be inserted into.
 * @param beforeNode The node before which elements should be added, if insert mode
 */
function addViewToDOM(tView, parentTNode, renderer, lView, parentNativeNode, beforeNode) {
  lView[HOST] = parentNativeNode;
  lView[T_HOST] = parentTNode;
  applyView(tView, lView, renderer, 1 /* WalkTNodeTreeAction.Insert */, parentNativeNode, beforeNode);
}
/**
 * Detach a `LView` from the DOM by detaching its nodes.
 *
 * @param tView The `TView' of the `LView` to be detached
 * @param lView the `LView` to be detached.
 */
function detachViewFromDOM(tView, lView) {
  applyView(tView, lView, lView[RENDERER], 2 /* WalkTNodeTreeAction.Detach */, null, null);
}
/**
 * Traverses down and up the tree of views and containers to remove listeners and
 * call onDestroy callbacks.
 *
 * Notes:
 *  - Because it's used for onDestroy calls, it needs to be bottom-up.
 *  - Must process containers instead of their views to avoid splicing
 *  when views are destroyed and re-added.
 *  - Using a while loop because it's faster than recursion
 *  - Destroy only called on movement to sibling or movement to parent (laterally or up)
 *
 *  @param rootView The view to destroy
 */
function destroyViewTree(rootView) {
  // If the view has no children, we can clean it up and return early.
  let lViewOrLContainer = rootView[CHILD_HEAD];
  if (!lViewOrLContainer) {
    return cleanUpView(rootView[TVIEW], rootView);
  }
  while (lViewOrLContainer) {
    let next = null;
    if (isLView(lViewOrLContainer)) {
      // If LView, traverse down to child.
      next = lViewOrLContainer[CHILD_HEAD];
    } else {
      ngDevMode && assertLContainer(lViewOrLContainer);
      // If container, traverse down to its first LView.
      const firstView = lViewOrLContainer[CONTAINER_HEADER_OFFSET];
      if (firstView) next = firstView;
    }
    if (!next) {
      // Only clean up view when moving to the side or up, as destroy hooks
      // should be called in order from the bottom up.
      while (lViewOrLContainer && !lViewOrLContainer[NEXT] && lViewOrLContainer !== rootView) {
        if (isLView(lViewOrLContainer)) {
          cleanUpView(lViewOrLContainer[TVIEW], lViewOrLContainer);
        }
        lViewOrLContainer = lViewOrLContainer[PARENT];
      }
      if (lViewOrLContainer === null) lViewOrLContainer = rootView;
      if (isLView(lViewOrLContainer)) {
        cleanUpView(lViewOrLContainer[TVIEW], lViewOrLContainer);
      }
      next = lViewOrLContainer && lViewOrLContainer[NEXT];
    }
    lViewOrLContainer = next;
  }
}
/**
 * Inserts a view into a container.
 *
 * This adds the view to the container's array of active views in the correct
 * position. It also adds the view's elements to the DOM if the container isn't a
 * root node of another view (in that case, the view's elements will be added when
 * the container's parent view is added later).
 *
 * @param tView The `TView' of the `LView` to insert
 * @param lView The view to insert
 * @param lContainer The container into which the view should be inserted
 * @param index Which index in the container to insert the child view into
 */
function insertView(tView, lView, lContainer, index) {
  ngDevMode && assertLView(lView);
  ngDevMode && assertLContainer(lContainer);
  const indexInContainer = CONTAINER_HEADER_OFFSET + index;
  const containerLength = lContainer.length;
  if (index > 0) {
    // This is a new view, we need to add it to the children.
    lContainer[indexInContainer - 1][NEXT] = lView;
  }
  if (index < containerLength - CONTAINER_HEADER_OFFSET) {
    lView[NEXT] = lContainer[indexInContainer];
    addToArray(lContainer, CONTAINER_HEADER_OFFSET + index, lView);
  } else {
    lContainer.push(lView);
    lView[NEXT] = null;
  }
  lView[PARENT] = lContainer;
  // track views where declaration and insertion points are different
  const declarationLContainer = lView[DECLARATION_LCONTAINER];
  if (declarationLContainer !== null && lContainer !== declarationLContainer) {
    trackMovedView(declarationLContainer, lView);
  }
  // notify query that a new view has been added
  const lQueries = lView[QUERIES];
  if (lQueries !== null) {
    lQueries.insertView(tView);
  }
  // Sets the attached flag
  lView[FLAGS] |= 128 /* LViewFlags.Attached */;
}
/**
 * Track views created from the declaration container (TemplateRef) and inserted into a
 * different LContainer.
 */
function trackMovedView(declarationContainer, lView) {
  ngDevMode && assertDefined(lView, 'LView required');
  ngDevMode && assertLContainer(declarationContainer);
  const movedViews = declarationContainer[MOVED_VIEWS];
  const insertedLContainer = lView[PARENT];
  ngDevMode && assertLContainer(insertedLContainer);
  const insertedComponentLView = insertedLContainer[PARENT][DECLARATION_COMPONENT_VIEW];
  ngDevMode && assertDefined(insertedComponentLView, 'Missing insertedComponentLView');
  const declaredComponentLView = lView[DECLARATION_COMPONENT_VIEW];
  ngDevMode && assertDefined(declaredComponentLView, 'Missing declaredComponentLView');
  if (declaredComponentLView !== insertedComponentLView) {
    // At this point the declaration-component is not same as insertion-component; this means that
    // this is a transplanted view. Mark the declared lView as having transplanted views so that
    // those views can participate in CD.
    declarationContainer[HAS_TRANSPLANTED_VIEWS] = true;
  }
  if (movedViews === null) {
    declarationContainer[MOVED_VIEWS] = [lView];
  } else {
    movedViews.push(lView);
  }
}
function detachMovedView(declarationContainer, lView) {
  ngDevMode && assertLContainer(declarationContainer);
  ngDevMode && assertDefined(declarationContainer[MOVED_VIEWS], 'A projected view should belong to a non-empty projected views collection');
  const movedViews = declarationContainer[MOVED_VIEWS];
  const declarationViewIndex = movedViews.indexOf(lView);
  const insertionLContainer = lView[PARENT];
  ngDevMode && assertLContainer(insertionLContainer);
  // If the view was marked for refresh but then detached before it was checked (where the flag
  // would be cleared and the counter decremented), we need to update the status here.
  clearViewRefreshFlag(lView);
  movedViews.splice(declarationViewIndex, 1);
}
/**
 * Detaches a view from a container.
 *
 * This method removes the view from the container's array of active views. It also
 * removes the view's elements from the DOM.
 *
 * @param lContainer The container from which to detach a view
 * @param removeIndex The index of the view to detach
 * @returns Detached LView instance.
 */
function detachView(lContainer, removeIndex) {
  if (lContainer.length <= CONTAINER_HEADER_OFFSET) return;
  const indexInContainer = CONTAINER_HEADER_OFFSET + removeIndex;
  const viewToDetach = lContainer[indexInContainer];
  if (viewToDetach) {
    const declarationLContainer = viewToDetach[DECLARATION_LCONTAINER];
    if (declarationLContainer !== null && declarationLContainer !== lContainer) {
      detachMovedView(declarationLContainer, viewToDetach);
    }
    if (removeIndex > 0) {
      lContainer[indexInContainer - 1][NEXT] = viewToDetach[NEXT];
    }
    const removedLView = removeFromArray(lContainer, CONTAINER_HEADER_OFFSET + removeIndex);
    removeViewFromDOM(viewToDetach[TVIEW], viewToDetach);
    // notify query that a view has been removed
    const lQueries = removedLView[QUERIES];
    if (lQueries !== null) {
      lQueries.detachView(removedLView[TVIEW]);
    }
    viewToDetach[PARENT] = null;
    viewToDetach[NEXT] = null;
    // Unsets the attached flag
    viewToDetach[FLAGS] &= ~128 /* LViewFlags.Attached */;
  }

  return viewToDetach;
}
/**
 * A standalone function which destroys an LView,
 * conducting clean up (e.g. removing listeners, calling onDestroys).
 *
 * @param tView The `TView' of the `LView` to be destroyed
 * @param lView The view to be destroyed.
 */
function destroyLView(tView, lView) {
  if (!(lView[FLAGS] & 256 /* LViewFlags.Destroyed */)) {
    const renderer = lView[RENDERER];
    lView[REACTIVE_TEMPLATE_CONSUMER]?.destroy();
    lView[REACTIVE_HOST_BINDING_CONSUMER]?.destroy();
    if (renderer.destroyNode) {
      applyView(tView, lView, renderer, 3 /* WalkTNodeTreeAction.Destroy */, null, null);
    }
    destroyViewTree(lView);
  }
}
/**
 * Calls onDestroys hooks for all directives and pipes in a given view and then removes all
 * listeners. Listeners are removed as the last step so events delivered in the onDestroys hooks
 * can be propagated to @Output listeners.
 *
 * @param tView `TView` for the `LView` to clean up.
 * @param lView The LView to clean up
 */
function cleanUpView(tView, lView) {
  if (!(lView[FLAGS] & 256 /* LViewFlags.Destroyed */)) {
    // Usually the Attached flag is removed when the view is detached from its parent, however
    // if it's a root view, the flag won't be unset hence why we're also removing on destroy.
    lView[FLAGS] &= ~128 /* LViewFlags.Attached */;
    // Mark the LView as destroyed *before* executing the onDestroy hooks. An onDestroy hook
    // runs arbitrary user code, which could include its own `viewRef.destroy()` (or similar). If
    // We don't flag the view as destroyed before the hooks, this could lead to an infinite loop.
    // This also aligns with the ViewEngine behavior. It also means that the onDestroy hook is
    // really more of an "afterDestroy" hook if you think about it.
    lView[FLAGS] |= 256 /* LViewFlags.Destroyed */;
    executeOnDestroys(tView, lView);
    processCleanups(tView, lView);
    // For component views only, the local renderer is destroyed at clean up time.
    if (lView[TVIEW].type === 1 /* TViewType.Component */) {
      ngDevMode && ngDevMode.rendererDestroy++;
      lView[RENDERER].destroy();
    }
    const declarationContainer = lView[DECLARATION_LCONTAINER];
    // we are dealing with an embedded view that is still inserted into a container
    if (declarationContainer !== null && isLContainer(lView[PARENT])) {
      // and this is a projected view
      if (declarationContainer !== lView[PARENT]) {
        detachMovedView(declarationContainer, lView);
      }
      // For embedded views still attached to a container: remove query result from this view.
      const lQueries = lView[QUERIES];
      if (lQueries !== null) {
        lQueries.detachView(tView);
      }
    }
    // Unregister the view once everything else has been cleaned up.
    unregisterLView(lView);
  }
}
/** Removes listeners and unsubscribes from output subscriptions */
function processCleanups(tView, lView) {
  const tCleanup = tView.cleanup;
  const lCleanup = lView[CLEANUP];
  if (tCleanup !== null) {
    for (let i = 0; i < tCleanup.length - 1; i += 2) {
      if (typeof tCleanup[i] === 'string') {
        // This is a native DOM listener. It will occupy 4 entries in the TCleanup array (hence i +=
        // 2 at the end of this block).
        const targetIdx = tCleanup[i + 3];
        ngDevMode && assertNumber(targetIdx, 'cleanup target must be a number');
        if (targetIdx >= 0) {
          // unregister
          lCleanup[targetIdx]();
        } else {
          // Subscription
          lCleanup[-targetIdx].unsubscribe();
        }
        i += 2;
      } else {
        // This is a cleanup function that is grouped with the index of its context
        const context = lCleanup[tCleanup[i + 1]];
        tCleanup[i].call(context);
      }
    }
  }
  if (lCleanup !== null) {
    lView[CLEANUP] = null;
  }
  const destroyHooks = lView[ON_DESTROY_HOOKS];
  if (destroyHooks !== null) {
    // Reset the ON_DESTROY_HOOKS array before iterating over it to prevent hooks that unregister
    // themselves from mutating the array during iteration.
    lView[ON_DESTROY_HOOKS] = null;
    for (let i = 0; i < destroyHooks.length; i++) {
      const destroyHooksFn = destroyHooks[i];
      ngDevMode && assertFunction(destroyHooksFn, 'Expecting destroy hook to be a function.');
      destroyHooksFn();
    }
  }
}
/** Calls onDestroy hooks for this view */
function executeOnDestroys(tView, lView) {
  let destroyHooks;
  if (tView != null && (destroyHooks = tView.destroyHooks) != null) {
    for (let i = 0; i < destroyHooks.length; i += 2) {
      const context = lView[destroyHooks[i]];
      // Only call the destroy hook if the context has been requested.
      if (!(context instanceof NodeInjectorFactory)) {
        const toCall = destroyHooks[i + 1];
        if (Array.isArray(toCall)) {
          for (let j = 0; j < toCall.length; j += 2) {
            const callContext = context[toCall[j]];
            const hook = toCall[j + 1];
            profiler(4 /* ProfilerEvent.LifecycleHookStart */, callContext, hook);
            try {
              hook.call(callContext);
            } finally {
              profiler(5 /* ProfilerEvent.LifecycleHookEnd */, callContext, hook);
            }
          }
        } else {
          profiler(4 /* ProfilerEvent.LifecycleHookStart */, context, toCall);
          try {
            toCall.call(context);
          } finally {
            profiler(5 /* ProfilerEvent.LifecycleHookEnd */, context, toCall);
          }
        }
      }
    }
  }
}
/**
 * Returns a native element if a node can be inserted into the given parent.
 *
 * There are two reasons why we may not be able to insert a element immediately.
 * - Projection: When creating a child content element of a component, we have to skip the
 *   insertion because the content of a component will be projected.
 *   `<component><content>delayed due to projection</content></component>`
 * - Parent container is disconnected: This can happen when we are inserting a view into
 *   parent container, which itself is disconnected. For example the parent container is part
 *   of a View which has not be inserted or is made for projection but has not been inserted
 *   into destination.
 *
 * @param tView: Current `TView`.
 * @param tNode: `TNode` for which we wish to retrieve render parent.
 * @param lView: Current `LView`.
 */
function getParentRElement(tView, tNode, lView) {
  return getClosestRElement(tView, tNode.parent, lView);
}
/**
 * Get closest `RElement` or `null` if it can't be found.
 *
 * If `TNode` is `TNodeType.Element` => return `RElement` at `LView[tNode.index]` location.
 * If `TNode` is `TNodeType.ElementContainer|IcuContain` => return the parent (recursively).
 * If `TNode` is `null` then return host `RElement`:
 *   - return `null` if projection
 *   - return `null` if parent container is disconnected (we have no parent.)
 *
 * @param tView: Current `TView`.
 * @param tNode: `TNode` for which we wish to retrieve `RElement` (or `null` if host element is
 *     needed).
 * @param lView: Current `LView`.
 * @returns `null` if the `RElement` can't be determined at this time (no parent / projection)
 */
function getClosestRElement(tView, tNode, lView) {
  let parentTNode = tNode;
  // Skip over element and ICU containers as those are represented by a comment node and
  // can't be used as a render parent.
  while (parentTNode !== null && parentTNode.type & (8 /* TNodeType.ElementContainer */ | 32 /* TNodeType.Icu */)) {
    tNode = parentTNode;
    parentTNode = tNode.parent;
  }
  // If the parent tNode is null, then we are inserting across views: either into an embedded view
  // or a component view.
  if (parentTNode === null) {
    // We are inserting a root element of the component view into the component host element and
    // it should always be eager.
    return lView[HOST];
  } else {
    ngDevMode && assertTNodeType(parentTNode, 3 /* TNodeType.AnyRNode */ | 4 /* TNodeType.Container */);
    const {
      componentOffset
    } = parentTNode;
    if (componentOffset > -1) {
      ngDevMode && assertTNodeForLView(parentTNode, lView);
      const {
        encapsulation
      } = tView.data[parentTNode.directiveStart + componentOffset];
      // We've got a parent which is an element in the current view. We just need to verify if the
      // parent element is not a component. Component's content nodes are not inserted immediately
      // because they will be projected, and so doing insert at this point would be wasteful.
      // Since the projection would then move it to its final destination. Note that we can't
      // make this assumption when using the Shadow DOM, because the native projection placeholders
      // (<content> or <slot>) have to be in place as elements are being inserted.
      if (encapsulation === ViewEncapsulation$1.None || encapsulation === ViewEncapsulation$1.Emulated) {
        return null;
      }
    }
    return getNativeByTNode(parentTNode, lView);
  }
}
/**
 * Inserts a native node before another native node for a given parent.
 * This is a utility function that can be used when native nodes were determined.
 */
function nativeInsertBefore(renderer, parent, child, beforeNode, isMove) {
  ngDevMode && ngDevMode.rendererInsertBefore++;
  renderer.insertBefore(parent, child, beforeNode, isMove);
}
function nativeAppendChild(renderer, parent, child) {
  ngDevMode && ngDevMode.rendererAppendChild++;
  ngDevMode && assertDefined(parent, 'parent node must be defined');
  renderer.appendChild(parent, child);
}
function nativeAppendOrInsertBefore(renderer, parent, child, beforeNode, isMove) {
  if (beforeNode !== null) {
    nativeInsertBefore(renderer, parent, child, beforeNode, isMove);
  } else {
    nativeAppendChild(renderer, parent, child);
  }
}
/** Removes a node from the DOM given its native parent. */
function nativeRemoveChild(renderer, parent, child, isHostElement) {
  renderer.removeChild(parent, child, isHostElement);
}
/**
 * Returns a native parent of a given native node.
 */
function nativeParentNode(renderer, node) {
  return renderer.parentNode(node);
}
/**
 * Returns a native sibling of a given native node.
 */
function nativeNextSibling(renderer, node) {
  return renderer.nextSibling(node);
}
/**
 * Find a node in front of which `currentTNode` should be inserted.
 *
 * This method determines the `RNode` in front of which we should insert the `currentRNode`. This
 * takes `TNode.insertBeforeIndex` into account if i18n code has been invoked.
 *
 * @param parentTNode parent `TNode`
 * @param currentTNode current `TNode` (The node which we would like to insert into the DOM)
 * @param lView current `LView`
 */
function getInsertInFrontOfRNode(parentTNode, currentTNode, lView) {
  return _getInsertInFrontOfRNodeWithI18n(parentTNode, currentTNode, lView);
}
/**
 * Find a node in front of which `currentTNode` should be inserted. (Does not take i18n into
 * account)
 *
 * This method determines the `RNode` in front of which we should insert the `currentRNode`. This
 * does not take `TNode.insertBeforeIndex` into account.
 *
 * @param parentTNode parent `TNode`
 * @param currentTNode current `TNode` (The node which we would like to insert into the DOM)
 * @param lView current `LView`
 */
function getInsertInFrontOfRNodeWithNoI18n(parentTNode, currentTNode, lView) {
  if (parentTNode.type & (8 /* TNodeType.ElementContainer */ | 32 /* TNodeType.Icu */)) {
    return getNativeByTNode(parentTNode, lView);
  }
  return null;
}
/**
 * Tree shakable boundary for `getInsertInFrontOfRNodeWithI18n` function.
 *
 * This function will only be set if i18n code runs.
 */
let _getInsertInFrontOfRNodeWithI18n = getInsertInFrontOfRNodeWithNoI18n;
/**
 * Appends the `child` native node (or a collection of nodes) to the `parent`.
 *
 * @param tView The `TView' to be appended
 * @param lView The current LView
 * @param childRNode The native child (or children) that should be appended
 * @param childTNode The TNode of the child element
 */
function appendChild(tView, lView, childRNode, childTNode) {
  const parentRNode = getParentRElement(tView, childTNode, lView);
  const renderer = lView[RENDERER];
  const parentTNode = childTNode.parent || lView[T_HOST];
  const anchorNode = getInsertInFrontOfRNode(parentTNode, childTNode, lView);
  if (parentRNode != null) {
    if (Array.isArray(childRNode)) {
      for (let i = 0; i < childRNode.length; i++) {
        nativeAppendOrInsertBefore(renderer, parentRNode, childRNode[i], anchorNode, false);
      }
    } else {
      nativeAppendOrInsertBefore(renderer, parentRNode, childRNode, anchorNode, false);
    }
  }
}
/**
 * Returns the first native node for a given LView, starting from the provided TNode.
 *
 * Native nodes are returned in the order in which those appear in the native tree (DOM).
 */
function getFirstNativeNode(lView, tNode) {
  if (tNode !== null) {
    ngDevMode && assertTNodeType(tNode, 3 /* TNodeType.AnyRNode */ | 12 /* TNodeType.AnyContainer */ | 32 /* TNodeType.Icu */ | 16 /* TNodeType.Projection */);
    const tNodeType = tNode.type;
    if (tNodeType & 3 /* TNodeType.AnyRNode */) {
      return getNativeByTNode(tNode, lView);
    } else if (tNodeType & 4 /* TNodeType.Container */) {
      return getBeforeNodeForView(-1, lView[tNode.index]);
    } else if (tNodeType & 8 /* TNodeType.ElementContainer */) {
      const elIcuContainerChild = tNode.child;
      if (elIcuContainerChild !== null) {
        return getFirstNativeNode(lView, elIcuContainerChild);
      } else {
        const rNodeOrLContainer = lView[tNode.index];
        if (isLContainer(rNodeOrLContainer)) {
          return getBeforeNodeForView(-1, rNodeOrLContainer);
        } else {
          return unwrapRNode(rNodeOrLContainer);
        }
      }
    } else if (tNodeType & 32 /* TNodeType.Icu */) {
      let nextRNode = icuContainerIterate(tNode, lView);
      let rNode = nextRNode();
      // If the ICU container has no nodes, than we use the ICU anchor as the node.
      return rNode || unwrapRNode(lView[tNode.index]);
    } else {
      const projectionNodes = getProjectionNodes(lView, tNode);
      if (projectionNodes !== null) {
        if (Array.isArray(projectionNodes)) {
          return projectionNodes[0];
        }
        const parentView = getLViewParent(lView[DECLARATION_COMPONENT_VIEW]);
        ngDevMode && assertParentView(parentView);
        return getFirstNativeNode(parentView, projectionNodes);
      } else {
        return getFirstNativeNode(lView, tNode.next);
      }
    }
  }
  return null;
}
function getProjectionNodes(lView, tNode) {
  if (tNode !== null) {
    const componentView = lView[DECLARATION_COMPONENT_VIEW];
    const componentHost = componentView[T_HOST];
    const slotIdx = tNode.projection;
    ngDevMode && assertProjectionSlots(lView);
    return componentHost.projection[slotIdx];
  }
  return null;
}
function getBeforeNodeForView(viewIndexInContainer, lContainer) {
  const nextViewIndex = CONTAINER_HEADER_OFFSET + viewIndexInContainer + 1;
  if (nextViewIndex < lContainer.length) {
    const lView = lContainer[nextViewIndex];
    const firstTNodeOfView = lView[TVIEW].firstChild;
    if (firstTNodeOfView !== null) {
      return getFirstNativeNode(lView, firstTNodeOfView);
    }
  }
  return lContainer[NATIVE];
}
/**
 * Removes a native node itself using a given renderer. To remove the node we are looking up its
 * parent from the native tree as not all platforms / browsers support the equivalent of
 * node.remove().
 *
 * @param renderer A renderer to be used
 * @param rNode The native node that should be removed
 * @param isHostElement A flag indicating if a node to be removed is a host of a component.
 */
function nativeRemoveNode(renderer, rNode, isHostElement) {
  ngDevMode && ngDevMode.rendererRemoveNode++;
  const nativeParent = nativeParentNode(renderer, rNode);
  if (nativeParent) {
    nativeRemoveChild(renderer, nativeParent, rNode, isHostElement);
  }
}
/**
 * Performs the operation of `action` on the node. Typically this involves inserting or removing
 * nodes on the LView or projection boundary.
 */
function applyNodes(renderer, action, tNode, lView, parentRElement, beforeNode, isProjection) {
  while (tNode != null) {
    ngDevMode && assertTNodeForLView(tNode, lView);
    ngDevMode && assertTNodeType(tNode, 3 /* TNodeType.AnyRNode */ | 12 /* TNodeType.AnyContainer */ | 16 /* TNodeType.Projection */ | 32 /* TNodeType.Icu */);
    const rawSlotValue = lView[tNode.index];
    const tNodeType = tNode.type;
    if (isProjection) {
      if (action === 0 /* WalkTNodeTreeAction.Create */) {
        rawSlotValue && attachPatchData(unwrapRNode(rawSlotValue), lView);
        tNode.flags |= 2 /* TNodeFlags.isProjected */;
      }
    }

    if ((tNode.flags & 32 /* TNodeFlags.isDetached */) !== 32 /* TNodeFlags.isDetached */) {
      if (tNodeType & 8 /* TNodeType.ElementContainer */) {
        applyNodes(renderer, action, tNode.child, lView, parentRElement, beforeNode, false);
        applyToElementOrContainer(action, renderer, parentRElement, rawSlotValue, beforeNode);
      } else if (tNodeType & 32 /* TNodeType.Icu */) {
        const nextRNode = icuContainerIterate(tNode, lView);
        let rNode;
        while (rNode = nextRNode()) {
          applyToElementOrContainer(action, renderer, parentRElement, rNode, beforeNode);
        }
        applyToElementOrContainer(action, renderer, parentRElement, rawSlotValue, beforeNode);
      } else if (tNodeType & 16 /* TNodeType.Projection */) {
        applyProjectionRecursive(renderer, action, lView, tNode, parentRElement, beforeNode);
      } else {
        ngDevMode && assertTNodeType(tNode, 3 /* TNodeType.AnyRNode */ | 4 /* TNodeType.Container */);
        applyToElementOrContainer(action, renderer, parentRElement, rawSlotValue, beforeNode);
      }
    }
    tNode = isProjection ? tNode.projectionNext : tNode.next;
  }
}
function applyView(tView, lView, renderer, action, parentRElement, beforeNode) {
  applyNodes(renderer, action, tView.firstChild, lView, parentRElement, beforeNode, false);
}
/**
 * `applyProjectionRecursive` performs operation on the projection specified by `action` (insert,
 * detach, destroy)
 *
 * Inserting a projection requires us to locate the projected nodes from the parent component. The
 * complication is that those nodes themselves could be re-projected from their parent component.
 *
 * @param renderer Render to use
 * @param action action to perform (insert, detach, destroy)
 * @param lView The LView which needs to be inserted, detached, destroyed.
 * @param tProjectionNode node to project
 * @param parentRElement parent DOM element for insertion/removal.
 * @param beforeNode Before which node the insertions should happen.
 */
function applyProjectionRecursive(renderer, action, lView, tProjectionNode, parentRElement, beforeNode) {
  const componentLView = lView[DECLARATION_COMPONENT_VIEW];
  const componentNode = componentLView[T_HOST];
  ngDevMode && assertEqual(typeof tProjectionNode.projection, 'number', 'expecting projection index');
  const nodeToProjectOrRNodes = componentNode.projection[tProjectionNode.projection];
  if (Array.isArray(nodeToProjectOrRNodes)) {
    // This should not exist, it is a bit of a hack. When we bootstrap a top level node and we
    // need to support passing projectable nodes, so we cheat and put them in the TNode
    // of the Host TView. (Yes we put instance info at the T Level). We can get away with it
    // because we know that that TView is not shared and therefore it will not be a problem.
    // This should be refactored and cleaned up.
    for (let i = 0; i < nodeToProjectOrRNodes.length; i++) {
      const rNode = nodeToProjectOrRNodes[i];
      applyToElementOrContainer(action, renderer, parentRElement, rNode, beforeNode);
    }
  } else {
    let nodeToProject = nodeToProjectOrRNodes;
    const projectedComponentLView = componentLView[PARENT];
    // If a parent <ng-content> is located within a skip hydration block,
    // annotate an actual node that is being projected with the same flag too.
    if (hasInSkipHydrationBlockFlag(tProjectionNode)) {
      nodeToProject.flags |= 128 /* TNodeFlags.inSkipHydrationBlock */;
    }

    applyNodes(renderer, action, nodeToProject, projectedComponentLView, parentRElement, beforeNode, true);
  }
}
/**
 * `applyContainer` performs an operation on the container and its views as specified by
 * `action` (insert, detach, destroy)
 *
 * Inserting a Container is complicated by the fact that the container may have Views which
 * themselves have containers or projections.
 *
 * @param renderer Renderer to use
 * @param action action to perform (insert, detach, destroy)
 * @param lContainer The LContainer which needs to be inserted, detached, destroyed.
 * @param parentRElement parent DOM element for insertion/removal.
 * @param beforeNode Before which node the insertions should happen.
 */
function applyContainer(renderer, action, lContainer, parentRElement, beforeNode) {
  ngDevMode && assertLContainer(lContainer);
  const anchor = lContainer[NATIVE]; // LContainer has its own before node.
  const native = unwrapRNode(lContainer);
  // An LContainer can be created dynamically on any node by injecting ViewContainerRef.
  // Asking for a ViewContainerRef on an element will result in a creation of a separate anchor
  // node (comment in the DOM) that will be different from the LContainer's host node. In this
  // particular case we need to execute action on 2 nodes:
  // - container's host node (this is done in the executeActionOnElementOrContainer)
  // - container's host node (this is done here)
  if (anchor !== native) {
    // This is very strange to me (Misko). I would expect that the native is same as anchor. I
    // don't see a reason why they should be different, but they are.
    //
    // If they are we need to process the second anchor as well.
    applyToElementOrContainer(action, renderer, parentRElement, anchor, beforeNode);
  }
  for (let i = CONTAINER_HEADER_OFFSET; i < lContainer.length; i++) {
    const lView = lContainer[i];
    applyView(lView[TVIEW], lView, renderer, action, parentRElement, anchor);
  }
}
/**
 * Write `cssText` to `RElement`.
 *
 * This function does direct write without any reconciliation. Used for writing initial values, so
 * that static styling values do not pull in the style parser.
 *
 * @param renderer Renderer to use
 * @param element The element which needs to be updated.
 * @param newValue The new class list to write.
 */
function writeDirectStyle(renderer, element, newValue) {
  ngDevMode && assertString(newValue, '\'newValue\' should be a string');
  renderer.setAttribute(element, 'style', newValue);
  ngDevMode && ngDevMode.rendererSetStyle++;
}
/**
 * Write `className` to `RElement`.
 *
 * This function does direct write without any reconciliation. Used for writing initial values, so
 * that static styling values do not pull in the style parser.
 *
 * @param renderer Renderer to use
 * @param element The element which needs to be updated.
 * @param newValue The new class list to write.
 */
function writeDirectClass(renderer, element, newValue) {
  ngDevMode && assertString(newValue, '\'newValue\' should be a string');
  if (newValue === '') {
    // There are tests in `google3` which expect `element.getAttribute('class')` to be `null`.
    renderer.removeAttribute(element, 'class');
  } else {
    renderer.setAttribute(element, 'class', newValue);
  }
  ngDevMode && ngDevMode.rendererSetClassName++;
}
/** Sets up the static DOM attributes on an `RNode`. */
function setupStaticAttributes(renderer, element, tNode) {
  const {
    mergedAttrs,
    classes,
    styles
  } = tNode;
  if (mergedAttrs !== null) {
    setUpAttributes(renderer, element, mergedAttrs);
  }
  if (classes !== null) {
    writeDirectClass(renderer, element, classes);
  }
  if (styles !== null) {
    writeDirectStyle(renderer, element, styles);
  }
}

/**
 * Most of the use of `document` in Angular is from within the DI system so it is possible to simply
 * inject the `DOCUMENT` token and are done.
 *
 * Ivy is special because it does not rely upon the DI and must get hold of the document some other
 * way.
 *
 * The solution is to define `getDocument()` and `setDocument()` top-level functions for ivy.
 * Wherever ivy needs the global document, it calls `getDocument()` instead.
 *
 * When running ivy outside of a browser environment, it is necessary to call `setDocument()` to
 * tell ivy what the global `document` is.
 *
 * Angular does this for us in each of the standard platforms (`Browser` and `Server`)
 * by calling `setDocument()` when providing the `DOCUMENT` token.
 */
let DOCUMENT$1 = undefined;
/**
 * Tell ivy what the `document` is for this platform.
 *
 * It is only necessary to call this if the current platform is not a browser.
 *
 * @param document The object representing the global `document` in this environment.
 */
function setDocument(document) {
  DOCUMENT$1 = document;
}
/**
 * Access the object that represents the `document` for this platform.
 *
 * Ivy calls this whenever it needs to access the `document` object.
 * For example to create the renderer or to do sanitization.
 */
function getDocument() {
  if (DOCUMENT$1 !== undefined) {
    return DOCUMENT$1;
  } else if (typeof document !== 'undefined') {
    return document;
  }
  throw new RuntimeError(210 /* RuntimeErrorCode.MISSING_DOCUMENT */, (typeof ngDevMode === 'undefined' || ngDevMode) && `The document object is not available in this context. Make sure the DOCUMENT injection token is provided.`);
  // No "document" can be found. This should only happen if we are running ivy outside Angular and
  // the current platform is not a browser. Since this is not a supported scenario at the moment
  // this should not happen in Angular apps.
  // Once we support running ivy outside of Angular we will need to publish `setDocument()` as a
  // public API.
}
function validateAgainstEventProperties(name) {
  if (name.toLowerCase().startsWith('on')) {
    const errorMessage = `Binding to event property '${name}' is disallowed for security reasons, ` + `please use (${name.slice(2)})=...` + `\nIf '${name}' is a directive input, make sure the directive is imported by the` + ` current module.`;
    throw new RuntimeError(306 /* RuntimeErrorCode.INVALID_EVENT_BINDING */, errorMessage);
  }
}

/**
 * Creates a token that can be used in a DI Provider.
 *
 * Use an `InjectionToken` whenever the type you are injecting is not reified (does not have a
 * runtime representation) such as when injecting an interface, callable type, array or
 * parameterized type.
 *
 * `InjectionToken` is parameterized on `T` which is the type of object which will be returned by
 * the `Injector`. This provides an additional level of type safety.
 *
 * ```
 * interface MyInterface {...}
 * const myInterface = injector.get(new InjectionToken<MyInterface>('SomeToken'));
 * // myInterface is inferred to be MyInterface.
 * ```
 *
 * When creating an `InjectionToken`, you can optionally specify a factory function which returns
 * (possibly by creating) a default value of the parameterized type `T`. This sets up the
 * `InjectionToken` using this factory as a provider as if it was defined explicitly in the
 * application's root injector. If the factory function, which takes zero arguments, needs to inject
 * dependencies, it can do so using the [`inject`](api/core/inject) function.
 * As you can see in the Tree-shakable InjectionToken example below.
 *
 * Additionally, if a `factory` is specified you can also specify the `providedIn` option, which
 * overrides the above behavior and marks the token as belonging to a particular `@NgModule` (note:
 * this option is now deprecated). As mentioned above, `'root'` is the default value for
 * `providedIn`.
 *
 * The `providedIn: NgModule` and `providedIn: 'any'` options are deprecated.
 *
 * @usageNotes
 * ### Basic Examples
 *
 * ### Plain InjectionToken
 *
 * {@example core/di/ts/injector_spec.ts region='InjectionToken'}
 *
 * ### Tree-shakable InjectionToken
 *
 * {@example core/di/ts/injector_spec.ts region='ShakableInjectionToken'}
 *
 *
 * @publicApi
 */
class InjectionToken {
  /**
   * @param _desc   Description for the token,
   *                used only for debugging purposes,
   *                it should but does not need to be unique
   * @param options Options for the token's usage, as described above
   */
  constructor(_desc, options) {
    this._desc = _desc;
    /** @internal */
    this.ngMetadataName = 'InjectionToken';
    this.ɵprov = undefined;
    if (typeof options == 'number') {
      (typeof ngDevMode === 'undefined' || ngDevMode) && assertLessThan(options, 0, 'Only negative numbers are supported here');
      // This is a special hack to assign __NG_ELEMENT_ID__ to this instance.
      // See `InjectorMarkers`
      this.__NG_ELEMENT_ID__ = options;
    } else if (options !== undefined) {
      this.ɵprov = ɵɵdefineInjectable({
        token: this,
        providedIn: options.providedIn || 'root',
        factory: options.factory
      });
    }
  }
  /**
   * @internal
   */
  get multi() {
    return this;
  }
  toString() {
    return `InjectionToken ${this._desc}`;
  }
}

/**
 * A multi-provider token for initialization functions that will run upon construction of an
 * environment injector.
 *
 * @publicApi
 */
const ENVIRONMENT_INITIALIZER = /*#__PURE__*/new InjectionToken('ENVIRONMENT_INITIALIZER');

/**
 * An InjectionToken that gets the current `Injector` for `createInjector()`-style injectors.
 *
 * Requesting this token instead of `Injector` allows `StaticInjector` to be tree-shaken from a
 * project.
 *
 * @publicApi
 */
const INJECTOR = /*#__PURE__*/new InjectionToken('INJECTOR',
// Disable tslint because this is const enum which gets inlined not top level prop access.
// tslint:disable-next-line: no-toplevel-property-access
-1 /* InjectorMarkers.Injector */);

const INJECTOR_DEF_TYPES = /*#__PURE__*/new InjectionToken('INJECTOR_DEF_TYPES');
class NullInjector {
  get(token, notFoundValue = THROW_IF_NOT_FOUND) {
    if (notFoundValue === THROW_IF_NOT_FOUND) {
      const error = new Error(`NullInjectorError: No provider for ${stringify(token)}!`);
      error.name = 'NullInjectorError';
      throw error;
    }
    return notFoundValue;
  }
}

/**
 * Wrap an array of `Provider`s into `EnvironmentProviders`, preventing them from being accidentally
 * referenced in `@Component` in a component injector.
 */
function makeEnvironmentProviders(providers) {
  return {
    ɵproviders: providers
  };
}
/**
 * Collects providers from all NgModules and standalone components, including transitively imported
 * ones.
 *
 * Providers extracted via `importProvidersFrom` are only usable in an application injector or
 * another environment injector (such as a route injector). They should not be used in component
 * providers.
 *
 * More information about standalone components can be found in [this
 * guide](guide/standalone-components).
 *
 * @usageNotes
 * The results of the `importProvidersFrom` call can be used in the `bootstrapApplication` call:
 *
 * ```typescript
 * await bootstrapApplication(RootComponent, {
 *   providers: [
 *     importProvidersFrom(NgModuleOne, NgModuleTwo)
 *   ]
 * });
 * ```
 *
 * You can also use the `importProvidersFrom` results in the `providers` field of a route, when a
 * standalone component is used:
 *
 * ```typescript
 * export const ROUTES: Route[] = [
 *   {
 *     path: 'foo',
 *     providers: [
 *       importProvidersFrom(NgModuleOne, NgModuleTwo)
 *     ],
 *     component: YourStandaloneComponent
 *   }
 * ];
 * ```
 *
 * @returns Collected providers from the specified list of types.
 * @publicApi
 */
function importProvidersFrom(...sources) {
  return {
    ɵproviders: internalImportProvidersFrom(true, sources),
    ɵfromNgModule: true
  };
}
function internalImportProvidersFrom(checkForStandaloneCmp, ...sources) {
  const providersOut = [];
  const dedup = new Set(); // already seen types
  let injectorTypesWithProviders;
  const collectProviders = provider => {
    providersOut.push(provider);
  };
  deepForEach(sources, source => {
    if ((typeof ngDevMode === 'undefined' || ngDevMode) && checkForStandaloneCmp) {
      const cmpDef = getComponentDef(source);
      if (cmpDef?.standalone) {
        throw new RuntimeError(800 /* RuntimeErrorCode.IMPORT_PROVIDERS_FROM_STANDALONE */, `Importing providers supports NgModule or ModuleWithProviders but got a standalone component "${stringifyForError(source)}"`);
      }
    }
    // Narrow `source` to access the internal type analogue for `ModuleWithProviders`.
    const internalSource = source;
    if (walkProviderTree(internalSource, collectProviders, [], dedup)) {
      injectorTypesWithProviders ||= [];
      injectorTypesWithProviders.push(internalSource);
    }
  });
  // Collect all providers from `ModuleWithProviders` types.
  if (injectorTypesWithProviders !== undefined) {
    processInjectorTypesWithProviders(injectorTypesWithProviders, collectProviders);
  }
  return providersOut;
}
/**
 * Collects all providers from the list of `ModuleWithProviders` and appends them to the provided
 * array.
 */
function processInjectorTypesWithProviders(typesWithProviders, visitor) {
  for (let i = 0; i < typesWithProviders.length; i++) {
    const {
      ngModule,
      providers
    } = typesWithProviders[i];
    deepForEachProvider(providers, provider => {
      ngDevMode && validateProvider(provider, providers || EMPTY_ARRAY, ngModule);
      visitor(provider, ngModule);
    });
  }
}
/**
 * The logic visits an `InjectorType`, an `InjectorTypeWithProviders`, or a standalone
 * `ComponentType`, and all of its transitive providers and collects providers.
 *
 * If an `InjectorTypeWithProviders` that declares providers besides the type is specified,
 * the function will return "true" to indicate that the providers of the type definition need
 * to be processed. This allows us to process providers of injector types after all imports of
 * an injector definition are processed. (following View Engine semantics: see FW-1349)
 */
function walkProviderTree(container, visitor, parents, dedup) {
  container = resolveForwardRef(container);
  if (!container) return false;
  // The actual type which had the definition. Usually `container`, but may be an unwrapped type
  // from `InjectorTypeWithProviders`.
  let defType = null;
  let injDef = getInjectorDef(container);
  const cmpDef = !injDef && getComponentDef(container);
  if (!injDef && !cmpDef) {
    // `container` is not an injector type or a component type. It might be:
    //  * An `InjectorTypeWithProviders` that wraps an injector type.
    //  * A standalone directive or pipe that got pulled in from a standalone component's
    //    dependencies.
    // Try to unwrap it as an `InjectorTypeWithProviders` first.
    const ngModule = container.ngModule;
    injDef = getInjectorDef(ngModule);
    if (injDef) {
      defType = ngModule;
    } else {
      // Not a component or injector type, so ignore it.
      return false;
    }
  } else if (cmpDef && !cmpDef.standalone) {
    return false;
  } else {
    defType = container;
  }
  // Check for circular dependencies.
  if (ngDevMode && parents.indexOf(defType) !== -1) {
    const defName = stringify(defType);
    const path = parents.map(stringify);
    throwCyclicDependencyError(defName, path);
  }
  // Check for multiple imports of the same module
  const isDuplicate = dedup.has(defType);
  if (cmpDef) {
    if (isDuplicate) {
      // This component definition has already been processed.
      return false;
    }
    dedup.add(defType);
    if (cmpDef.dependencies) {
      const deps = typeof cmpDef.dependencies === 'function' ? cmpDef.dependencies() : cmpDef.dependencies;
      for (const dep of deps) {
        walkProviderTree(dep, visitor, parents, dedup);
      }
    }
  } else if (injDef) {
    // First, include providers from any imports.
    if (injDef.imports != null && !isDuplicate) {
      // Before processing defType's imports, add it to the set of parents. This way, if it ends
      // up deeply importing itself, this can be detected.
      ngDevMode && parents.push(defType);
      // Add it to the set of dedups. This way we can detect multiple imports of the same module
      dedup.add(defType);
      let importTypesWithProviders;
      try {
        deepForEach(injDef.imports, imported => {
          if (walkProviderTree(imported, visitor, parents, dedup)) {
            importTypesWithProviders ||= [];
            // If the processed import is an injector type with providers, we store it in the
            // list of import types with providers, so that we can process those afterwards.
            importTypesWithProviders.push(imported);
          }
        });
      } finally {
        // Remove it from the parents set when finished.
        ngDevMode && parents.pop();
      }
      // Imports which are declared with providers (TypeWithProviders) need to be processed
      // after all imported modules are processed. This is similar to how View Engine
      // processes/merges module imports in the metadata resolver. See: FW-1349.
      if (importTypesWithProviders !== undefined) {
        processInjectorTypesWithProviders(importTypesWithProviders, visitor);
      }
    }
    if (!isDuplicate) {
      // Track the InjectorType and add a provider for it.
      // It's important that this is done after the def's imports.
      const factory = getFactoryDef(defType) || (() => new defType());
      // Append extra providers to make more info available for consumers (to retrieve an injector
      // type), as well as internally (to calculate an injection scope correctly and eagerly
      // instantiate a `defType` when an injector is created).
      // Provider to create `defType` using its factory.
      visitor({
        provide: defType,
        useFactory: factory,
        deps: EMPTY_ARRAY
      }, defType);
      // Make this `defType` available to an internal logic that calculates injector scope.
      visitor({
        provide: INJECTOR_DEF_TYPES,
        useValue: defType,
        multi: true
      }, defType);
      // Provider to eagerly instantiate `defType` via `INJECTOR_INITIALIZER`.
      visitor({
        provide: ENVIRONMENT_INITIALIZER,
        useValue: () => ɵɵinject(defType),
        multi: true
      }, defType);
    }
    // Next, include providers listed on the definition itself.
    const defProviders = injDef.providers;
    if (defProviders != null && !isDuplicate) {
      const injectorType = container;
      deepForEachProvider(defProviders, provider => {
        ngDevMode && validateProvider(provider, defProviders, injectorType);
        visitor(provider, injectorType);
      });
    }
  } else {
    // Should not happen, but just in case.
    return false;
  }
  return defType !== container && container.providers !== undefined;
}
function validateProvider(provider, providers, containerType) {
  if (isTypeProvider(provider) || isValueProvider(provider) || isFactoryProvider(provider) || isExistingProvider(provider)) {
    return;
  }
  // Here we expect the provider to be a `useClass` provider (by elimination).
  const classRef = resolveForwardRef(provider && (provider.useClass || provider.provide));
  if (!classRef) {
    throwInvalidProviderError(containerType, providers, provider);
  }
}
function deepForEachProvider(providers, fn) {
  for (let provider of providers) {
    if (isEnvironmentProviders(provider)) {
      provider = provider.ɵproviders;
    }
    if (Array.isArray(provider)) {
      deepForEachProvider(provider, fn);
    } else {
      fn(provider);
    }
  }
}
const USE_VALUE$1 = /*#__PURE__*/getClosureSafeProperty({
  provide: String,
  useValue: getClosureSafeProperty
});
function isValueProvider(value) {
  return value !== null && typeof value == 'object' && USE_VALUE$1 in value;
}
function isExistingProvider(value) {
  return !!(value && value.useExisting);
}
function isFactoryProvider(value) {
  return !!(value && value.useFactory);
}
function isTypeProvider(value) {
  return typeof value === 'function';
}

/**
 * An internal token whose presence in an injector indicates that the injector should treat itself
 * as a root scoped injector when processing requests for unknown tokens which may indicate
 * they are provided in the root scope.
 */
const INJECTOR_SCOPE = /*#__PURE__*/new InjectionToken('Set Injector scope.');

/**
 * Marker which indicates that a value has not yet been created from the factory function.
 */
const NOT_YET = {};
/**
 * Marker which indicates that the factory function for a token is in the process of being called.
 *
 * If the injector is asked to inject a token with its value set to CIRCULAR, that indicates
 * injection of a dependency has recursively attempted to inject the original token, and there is
 * a circular dependency among the providers.
 */
const CIRCULAR = {};
/**
 * A lazily initialized NullInjector.
 */
let NULL_INJECTOR = undefined;
function getNullInjector() {
  if (NULL_INJECTOR === undefined) {
    NULL_INJECTOR = new NullInjector();
  }
  return NULL_INJECTOR;
}
/**
 * An `Injector` that's part of the environment injector hierarchy, which exists outside of the
 * component tree.
 */
class EnvironmentInjector {}
class R3Injector extends EnvironmentInjector {
  /**
   * Flag indicating that this injector was previously destroyed.
   */
  get destroyed() {
    return this._destroyed;
  }
  constructor(providers, parent, source, scopes) {
    super();
    this.parent = parent;
    this.source = source;
    this.scopes = scopes;
    /**
     * Map of tokens to records which contain the instances of those tokens.
     * - `null` value implies that we don't have the record. Used by tree-shakable injectors
     * to prevent further searches.
     */
    this.records = new Map();
    /**
     * Set of values instantiated by this injector which contain `ngOnDestroy` lifecycle hooks.
     */
    this._ngOnDestroyHooks = new Set();
    this._onDestroyHooks = [];
    this._destroyed = false;
    // Start off by creating Records for every provider.
    forEachSingleProvider(providers, provider => this.processProvider(provider));
    // Make sure the INJECTOR token provides this injector.
    this.records.set(INJECTOR, makeRecord(undefined, this));
    // And `EnvironmentInjector` if the current injector is supposed to be env-scoped.
    if (scopes.has('environment')) {
      this.records.set(EnvironmentInjector, makeRecord(undefined, this));
    }
    // Detect whether this injector has the APP_ROOT_SCOPE token and thus should provide
    // any injectable scoped to APP_ROOT_SCOPE.
    const record = this.records.get(INJECTOR_SCOPE);
    if (record != null && typeof record.value === 'string') {
      this.scopes.add(record.value);
    }
    this.injectorDefTypes = new Set(this.get(INJECTOR_DEF_TYPES.multi, EMPTY_ARRAY, InjectFlags.Self));
  }
  /**
   * Destroy the injector and release references to every instance or provider associated with it.
   *
   * Also calls the `OnDestroy` lifecycle hooks of every instance that was created for which a
   * hook was found.
   */
  destroy() {
    this.assertNotDestroyed();
    // Set destroyed = true first, in case lifecycle hooks re-enter destroy().
    this._destroyed = true;
    try {
      // Call all the lifecycle hooks.
      for (const service of this._ngOnDestroyHooks) {
        service.ngOnDestroy();
      }
      const onDestroyHooks = this._onDestroyHooks;
      // Reset the _onDestroyHooks array before iterating over it to prevent hooks that unregister
      // themselves from mutating the array during iteration.
      this._onDestroyHooks = [];
      for (const hook of onDestroyHooks) {
        hook();
      }
    } finally {
      // Release all references.
      this.records.clear();
      this._ngOnDestroyHooks.clear();
      this.injectorDefTypes.clear();
    }
  }
  onDestroy(callback) {
    this.assertNotDestroyed();
    this._onDestroyHooks.push(callback);
    return () => this.removeOnDestroy(callback);
  }
  runInContext(fn) {
    this.assertNotDestroyed();
    const previousInjector = setCurrentInjector(this);
    const previousInjectImplementation = setInjectImplementation(undefined);
    let prevInjectContext;
    if (ngDevMode) {
      prevInjectContext = setInjectorProfilerContext({
        injector: this,
        token: null
      });
    }
    try {
      return fn();
    } finally {
      setCurrentInjector(previousInjector);
      setInjectImplementation(previousInjectImplementation);
      ngDevMode && setInjectorProfilerContext(prevInjectContext);
    }
  }
  get(token, notFoundValue = THROW_IF_NOT_FOUND, flags = InjectFlags.Default) {
    this.assertNotDestroyed();
    if (token.hasOwnProperty(NG_ENV_ID)) {
      return token[NG_ENV_ID](this);
    }
    flags = convertToBitFlags(flags);
    // Set the injection context.
    let prevInjectContext;
    if (ngDevMode) {
      prevInjectContext = setInjectorProfilerContext({
        injector: this,
        token: token
      });
    }
    const previousInjector = setCurrentInjector(this);
    const previousInjectImplementation = setInjectImplementation(undefined);
    try {
      // Check for the SkipSelf flag.
      if (!(flags & InjectFlags.SkipSelf)) {
        // SkipSelf isn't set, check if the record belongs to this injector.
        let record = this.records.get(token);
        if (record === undefined) {
          // No record, but maybe the token is scoped to this injector. Look for an injectable
          // def with a scope matching this injector.
          const def = couldBeInjectableType(token) && getInjectableDef(token);
          if (def && this.injectableDefInScope(def)) {
            // Found an injectable def and it's scoped to this injector. Pretend as if it was here
            // all along.
            record = makeRecord(injectableDefOrInjectorDefFactory(token), NOT_YET);
          } else {
            record = null;
          }
          this.records.set(token, record);
        }
        // If a record was found, get the instance for it and return it.
        if (record != null /* NOT null || undefined */) {
          return this.hydrate(token, record);
        }
      }
      // Select the next injector based on the Self flag - if self is set, the next injector is
      // the NullInjector, otherwise it's the parent.
      const nextInjector = !(flags & InjectFlags.Self) ? this.parent : getNullInjector();
      // Set the notFoundValue based on the Optional flag - if optional is set and notFoundValue
      // is undefined, the value is null, otherwise it's the notFoundValue.
      notFoundValue = flags & InjectFlags.Optional && notFoundValue === THROW_IF_NOT_FOUND ? null : notFoundValue;
      return nextInjector.get(token, notFoundValue);
    } catch (e) {
      if (e.name === 'NullInjectorError') {
        const path = e[NG_TEMP_TOKEN_PATH] = e[NG_TEMP_TOKEN_PATH] || [];
        path.unshift(stringify(token));
        if (previousInjector) {
          // We still have a parent injector, keep throwing
          throw e;
        } else {
          // Format & throw the final error message when we don't have any previous injector
          return catchInjectorError(e, token, 'R3InjectorError', this.source);
        }
      } else {
        throw e;
      }
    } finally {
      // Lastly, restore the previous injection context.
      setInjectImplementation(previousInjectImplementation);
      setCurrentInjector(previousInjector);
      ngDevMode && setInjectorProfilerContext(prevInjectContext);
    }
  }
  /** @internal */
  resolveInjectorInitializers() {
    const previousInjector = setCurrentInjector(this);
    const previousInjectImplementation = setInjectImplementation(undefined);
    let prevInjectContext;
    if (ngDevMode) {
      prevInjectContext = setInjectorProfilerContext({
        injector: this,
        token: null
      });
    }
    try {
      const initializers = this.get(ENVIRONMENT_INITIALIZER.multi, EMPTY_ARRAY, InjectFlags.Self);
      if (ngDevMode && !Array.isArray(initializers)) {
        throw new RuntimeError(-209 /* RuntimeErrorCode.INVALID_MULTI_PROVIDER */, 'Unexpected type of the `ENVIRONMENT_INITIALIZER` token value ' + `(expected an array, but got ${typeof initializers}). ` + 'Please check that the `ENVIRONMENT_INITIALIZER` token is configured as a ' + '`multi: true` provider.');
      }
      for (const initializer of initializers) {
        initializer();
      }
    } finally {
      setCurrentInjector(previousInjector);
      setInjectImplementation(previousInjectImplementation);
      ngDevMode && setInjectorProfilerContext(prevInjectContext);
    }
  }
  toString() {
    const tokens = [];
    const records = this.records;
    for (const token of records.keys()) {
      tokens.push(stringify(token));
    }
    return `R3Injector[${tokens.join(', ')}]`;
  }
  assertNotDestroyed() {
    if (this._destroyed) {
      throw new RuntimeError(205 /* RuntimeErrorCode.INJECTOR_ALREADY_DESTROYED */, ngDevMode && 'Injector has already been destroyed.');
    }
  }
  /**
   * Process a `SingleProvider` and add it.
   */
  processProvider(provider) {
    // Determine the token from the provider. Either it's its own token, or has a {provide: ...}
    // property.
    provider = resolveForwardRef(provider);
    let token = isTypeProvider(provider) ? provider : resolveForwardRef(provider && provider.provide);
    // Construct a `Record` for the provider.
    const record = providerToRecord(provider);
    if (ngDevMode) {
      runInInjectorProfilerContext(this, token, () => {
        // Emit InjectorProfilerEventType.Create if provider is a value provider because
        // these are the only providers that do not go through the value hydration logic
        // where this event would normally be emitted from.
        if (isValueProvider(provider)) {
          emitInstanceCreatedByInjectorEvent(provider.useValue);
        }
        emitProviderConfiguredEvent(provider);
      });
    }
    if (!isTypeProvider(provider) && provider.multi === true) {
      // If the provider indicates that it's a multi-provider, process it specially.
      // First check whether it's been defined already.
      let multiRecord = this.records.get(token);
      if (multiRecord) {
        // It has. Throw a nice error if
        if (ngDevMode && multiRecord.multi === undefined) {
          throwMixedMultiProviderError();
        }
      } else {
        multiRecord = makeRecord(undefined, NOT_YET, true);
        multiRecord.factory = () => injectArgs(multiRecord.multi);
        this.records.set(token, multiRecord);
      }
      token = provider;
      multiRecord.multi.push(provider);
    } else {
      const existing = this.records.get(token);
      if (ngDevMode && existing && existing.multi !== undefined) {
        throwMixedMultiProviderError();
      }
    }
    this.records.set(token, record);
  }
  hydrate(token, record) {
    if (ngDevMode && record.value === CIRCULAR) {
      throwCyclicDependencyError(stringify(token));
    } else if (record.value === NOT_YET) {
      record.value = CIRCULAR;
      if (ngDevMode) {
        runInInjectorProfilerContext(this, token, () => {
          record.value = record.factory();
          emitInstanceCreatedByInjectorEvent(record.value);
        });
      } else {
        record.value = record.factory();
      }
    }
    if (typeof record.value === 'object' && record.value && hasOnDestroy(record.value)) {
      this._ngOnDestroyHooks.add(record.value);
    }
    return record.value;
  }
  injectableDefInScope(def) {
    if (!def.providedIn) {
      return false;
    }
    const providedIn = resolveForwardRef(def.providedIn);
    if (typeof providedIn === 'string') {
      return providedIn === 'any' || this.scopes.has(providedIn);
    } else {
      return this.injectorDefTypes.has(providedIn);
    }
  }
  removeOnDestroy(callback) {
    const destroyCBIdx = this._onDestroyHooks.indexOf(callback);
    if (destroyCBIdx !== -1) {
      this._onDestroyHooks.splice(destroyCBIdx, 1);
    }
  }
}
function injectableDefOrInjectorDefFactory(token) {
  // Most tokens will have an injectable def directly on them, which specifies a factory directly.
  const injectableDef = getInjectableDef(token);
  const factory = injectableDef !== null ? injectableDef.factory : getFactoryDef(token);
  if (factory !== null) {
    return factory;
  }
  // InjectionTokens should have an injectable def (ɵprov) and thus should be handled above.
  // If it's missing that, it's an error.
  if (token instanceof InjectionToken) {
    throw new RuntimeError(204 /* RuntimeErrorCode.INVALID_INJECTION_TOKEN */, ngDevMode && `Token ${stringify(token)} is missing a ɵprov definition.`);
  }
  // Undecorated types can sometimes be created if they have no constructor arguments.
  if (token instanceof Function) {
    return getUndecoratedInjectableFactory(token);
  }
  // There was no way to resolve a factory for this token.
  throw new RuntimeError(204 /* RuntimeErrorCode.INVALID_INJECTION_TOKEN */, ngDevMode && 'unreachable');
}
function getUndecoratedInjectableFactory(token) {
  // If the token has parameters then it has dependencies that we cannot resolve implicitly.
  const paramLength = token.length;
  if (paramLength > 0) {
    const args = newArray(paramLength, '?');
    throw new RuntimeError(204 /* RuntimeErrorCode.INVALID_INJECTION_TOKEN */, ngDevMode && `Can't resolve all parameters for ${stringify(token)}: (${args.join(', ')}).`);
  }
  // The constructor function appears to have no parameters.
  // This might be because it inherits from a super-class. In which case, use an injectable
  // def from an ancestor if there is one.
  // Otherwise this really is a simple class with no dependencies, so return a factory that
  // just instantiates the zero-arg constructor.
  const inheritedInjectableDef = getInheritedInjectableDef(token);
  if (inheritedInjectableDef !== null) {
    return () => inheritedInjectableDef.factory(token);
  } else {
    return () => new token();
  }
}
function providerToRecord(provider) {
  if (isValueProvider(provider)) {
    return makeRecord(undefined, provider.useValue);
  } else {
    const factory = providerToFactory(provider);
    return makeRecord(factory, NOT_YET);
  }
}
/**
 * Converts a `SingleProvider` into a factory function.
 *
 * @param provider provider to convert to factory
 */
function providerToFactory(provider, ngModuleType, providers) {
  let factory = undefined;
  if (ngDevMode && isEnvironmentProviders(provider)) {
    throwInvalidProviderError(undefined, providers, provider);
  }
  if (isTypeProvider(provider)) {
    const unwrappedProvider = resolveForwardRef(provider);
    return getFactoryDef(unwrappedProvider) || injectableDefOrInjectorDefFactory(unwrappedProvider);
  } else {
    if (isValueProvider(provider)) {
      factory = () => resolveForwardRef(provider.useValue);
    } else if (isFactoryProvider(provider)) {
      factory = () => provider.useFactory(...injectArgs(provider.deps || []));
    } else if (isExistingProvider(provider)) {
      factory = () => ɵɵinject(resolveForwardRef(provider.useExisting));
    } else {
      const classRef = resolveForwardRef(provider && (provider.useClass || provider.provide));
      if (ngDevMode && !classRef) {
        throwInvalidProviderError(ngModuleType, providers, provider);
      }
      if (hasDeps(provider)) {
        factory = () => new classRef(...injectArgs(provider.deps));
      } else {
        return getFactoryDef(classRef) || injectableDefOrInjectorDefFactory(classRef);
      }
    }
  }
  return factory;
}
function makeRecord(factory, value, multi = false) {
  return {
    factory: factory,
    value: value,
    multi: multi ? [] : undefined
  };
}
function hasDeps(value) {
  return !!value.deps;
}
function hasOnDestroy(value) {
  return value !== null && typeof value === 'object' && typeof value.ngOnDestroy === 'function';
}
function couldBeInjectableType(value) {
  return typeof value === 'function' || typeof value === 'object' && value instanceof InjectionToken;
}
function forEachSingleProvider(providers, fn) {
  for (const provider of providers) {
    if (Array.isArray(provider)) {
      forEachSingleProvider(provider, fn);
    } else if (provider && isEnvironmentProviders(provider)) {
      forEachSingleProvider(provider.ɵproviders, fn);
    } else {
      fn(provider);
    }
  }
}

/**
 * A [DI token](guide/glossary#di-token "DI token definition") representing a string ID, used
 * primarily for prefixing application attributes and CSS styles when
 * {@link ViewEncapsulation#Emulated} is being used.
 *
 * The token is needed in cases when multiple applications are bootstrapped on a page
 * (for example, using `bootstrapApplication` calls). In this case, ensure that those applications
 * have different `APP_ID` value setup. For example:
 *
 * ```
 * bootstrapApplication(ComponentA, {
 *   providers: [
 *     { provide: APP_ID, useValue: 'app-a' },
 *     // ... other providers ...
 *   ]
 * });
 *
 * bootstrapApplication(ComponentB, {
 *   providers: [
 *     { provide: APP_ID, useValue: 'app-b' },
 *     // ... other providers ...
 *   ]
 * });
 * ```
 *
 * By default, when there is only one application bootstrapped, you don't need to provide the
 * `APP_ID` token (the `ng` will be used as an app ID).
 *
 * @publicApi
 */
const APP_ID = /*#__PURE__*/new InjectionToken('AppId', {
  providedIn: 'root',
  factory: () => DEFAULT_APP_ID
});
/** Default value of the `APP_ID` token. */
const DEFAULT_APP_ID = 'ng';
/**
 * A function that is executed when a platform is initialized.
 * @publicApi
 */
const PLATFORM_INITIALIZER = /*#__PURE__*/new InjectionToken('Platform Initializer');
/**
 * A token that indicates an opaque platform ID.
 * @publicApi
 */
const PLATFORM_ID = /*#__PURE__*/new InjectionToken('Platform ID', {
  providedIn: 'platform',
  factory: () => 'unknown' // set a default platform name, when none set explicitly
});
// We keep this token here, rather than the animations package, so that modules that only care
// about which animations module is loaded (e.g. the CDK) can retrieve it without having to
// include extra dependencies. See #44970 for more context.
/**
 * A [DI token](guide/glossary#di-token "DI token definition") that indicates which animations
 * module has been loaded.
 * @publicApi
 */
const ANIMATION_MODULE_TYPE = /*#__PURE__*/new InjectionToken('AnimationModuleType');
// TODO(crisbeto): link to CSP guide here.
/**
 * Token used to configure the [Content Security Policy](https://web.dev/strict-csp/) nonce that
 * Angular will apply when inserting inline styles. If not provided, Angular will look up its value
 * from the `ngCspNonce` attribute of the application root node.
 *
 * @publicApi
 */
const CSP_NONCE = /*#__PURE__*/new InjectionToken('CSP nonce', {
  providedIn: 'root',
  factory: () => {
    // Ideally we wouldn't have to use `querySelector` here since we know that the nonce will be on
    // the root node, but because the token value is used in renderers, it has to be available
    // *very* early in the bootstrapping process. This should be a fairly shallow search, because
    // the app won't have been added to the DOM yet. Some approaches that were considered:
    // 1. Find the root node through `ApplicationRef.components[i].location` - normally this would
    // be enough for our purposes, but the token is injected very early so the `components` array
    // isn't populated yet.
    // 2. Find the root `LView` through the current `LView` - renderers are a prerequisite to
    // creating the `LView`. This means that no `LView` will have been entered when this factory is
    // invoked for the root component.
    // 3. Have the token factory return `() => string` which is invoked when a nonce is requested -
    // the slightly later execution does allow us to get an `LView` reference, but the fact that
    // it is a function means that it could be executed at *any* time (including immediately) which
    // may lead to weird bugs.
    // 4. Have the `ComponentFactory` read the attribute and provide it to the injector under the
    // hood - has the same problem as #1 and #2 in that the renderer is used to query for the root
    // node and the nonce value needs to be available when the renderer is created.
    return getDocument().body?.querySelector('[ngCspNonce]')?.getAttribute('ngCspNonce') || null;
  }
});
/**
 * Internal token to collect all SSR-related features enabled for this application.
 *
 * Note: the token is in `core` to let other packages register features (the `core`
 * package is imported in other packages).
 */
const ENABLED_SSR_FEATURES = /*#__PURE__*/new InjectionToken(typeof ngDevMode === 'undefined' || ngDevMode ? 'ENABLED_SSR_FEATURES' : '', {
  providedIn: 'root',
  factory: () => new Set()
});

/**
 * Create a `StateKey<T>` that can be used to store value of type T with `TransferState`.
 *
 * Example:
 *
 * ```
 * const COUNTER_KEY = makeStateKey<number>('counter');
 * let value = 10;
 *
 * transferState.set(COUNTER_KEY, value);
 * ```
 *
 * @publicApi
 */
function makeStateKey(key) {
  return key;
}
function initTransferState() {
  const transferState = new TransferState();
  if (inject(PLATFORM_ID) === 'browser') {
    transferState.store = retrieveTransferredState(getDocument(), inject(APP_ID));
  }
  return transferState;
}
/**
 * A key value store that is transferred from the application on the server side to the application
 * on the client side.
 *
 * The `TransferState` is available as an injectable token.
 * On the client, just inject this token using DI and use it, it will be lazily initialized.
 * On the server it's already included if `renderApplication` function is used. Otherwise, import
 * the `ServerTransferStateModule` module to make the `TransferState` available.
 *
 * The values in the store are serialized/deserialized using JSON.stringify/JSON.parse. So only
 * boolean, number, string, null and non-class objects will be serialized and deserialized in a
 * non-lossy manner.
 *
 * @publicApi
 */
let TransferState = /*#__PURE__*/(() => {
  var _class;
  class TransferState {
    constructor() {
      /** @internal */
      this.store = {};
      this.onSerializeCallbacks = {};
    }
    /** @nocollapse */

    /**
     * Get the value corresponding to a key. Return `defaultValue` if key is not found.
     */
    get(key, defaultValue) {
      return this.store[key] !== undefined ? this.store[key] : defaultValue;
    }
    /**
     * Set the value corresponding to a key.
     */
    set(key, value) {
      this.store[key] = value;
    }
    /**
     * Remove a key from the store.
     */
    remove(key) {
      delete this.store[key];
    }
    /**
     * Test whether a key exists in the store.
     */
    hasKey(key) {
      return this.store.hasOwnProperty(key);
    }
    /**
     * Indicates whether the state is empty.
     */
    get isEmpty() {
      return Object.keys(this.store).length === 0;
    }
    /**
     * Register a callback to provide the value for a key when `toJson` is called.
     */
    onSerialize(key, callback) {
      this.onSerializeCallbacks[key] = callback;
    }
    /**
     * Serialize the current state of the store to JSON.
     */
    toJson() {
      // Call the onSerialize callbacks and put those values into the store.
      for (const key in this.onSerializeCallbacks) {
        if (this.onSerializeCallbacks.hasOwnProperty(key)) {
          try {
            this.store[key] = this.onSerializeCallbacks[key]();
          } catch (e) {
            console.warn('Exception in onSerialize callback: ', e);
          }
        }
      }
      // Escape script tag to avoid break out of <script> tag in serialized output.
      // Encoding of `<` is the same behaviour as G3 script_builders.
      return JSON.stringify(this.store).replace(/</g, '\\u003C');
    }
  }
  _class = TransferState;
  _class.ɵprov = /** @pureOrBreakMyCode */ɵɵdefineInjectable({
    token: _class,
    providedIn: 'root',
    factory: initTransferState
  });
  return TransferState;
})();
function retrieveTransferredState(doc, appId) {
  // Locate the script tag with the JSON data transferred from the server.
  // The id of the script tag is set to the Angular appId + 'state'.
  const script = doc.getElementById(appId + '-state');
  if (script?.textContent) {
    try {
      // Avoid using any here as it triggers lint errors in google3 (any is not allowed).
      // Decoding of `<` is done of the box by browsers and node.js, same behaviour as G3
      // script_builders.
      return JSON.parse(script.textContent);
    } catch (e) {
      console.warn('Exception while restoring TransferState for app ' + appId, e);
    }
  }
  return {};
}

/** Encodes that the node lookup should start from the host node of this component. */
const REFERENCE_NODE_HOST = 'h';
/** Encodes that the node lookup should start from the document body node. */
const REFERENCE_NODE_BODY = 'b';
/**
 * Describes navigation steps that the runtime logic need to perform,
 * starting from a given (known) element.
 */
var NodeNavigationStep = /*#__PURE__*/function (NodeNavigationStep) {
  NodeNavigationStep["FirstChild"] = "f";
  NodeNavigationStep["NextSibling"] = "n";
  return NodeNavigationStep;
}(NodeNavigationStep || {});
/**
 * Keys within serialized view data structure to represent various
 * parts. See the `SerializedView` interface below for additional information.
 */
const ELEMENT_CONTAINERS = 'e';
const TEMPLATES = 't';
const CONTAINERS = 'c';
const MULTIPLIER = 'x';
const NUM_ROOT_NODES = 'r';
const TEMPLATE_ID = 'i'; // as it's also an "id"
const NODES = 'n';
const DISCONNECTED_NODES = 'd';

/**
 * The name of the key used in the TransferState collection,
 * where hydration information is located.
 */
const TRANSFER_STATE_TOKEN_ID = '__ɵnghData__';
/**
 * Lookup key used to reference DOM hydration data (ngh) in `TransferState`.
 */
const NGH_DATA_KEY = /*#__PURE__*/makeStateKey(TRANSFER_STATE_TOKEN_ID);
/**
 * The name of the attribute that would be added to host component
 * nodes and contain a reference to a particular slot in transferred
 * state that contains the necessary hydration info for this component.
 */
const NGH_ATTR_NAME = 'ngh';
/**
 * Marker used in a comment node to ensure hydration content integrity
 */
const SSR_CONTENT_INTEGRITY_MARKER = 'nghm';
/**
 * Reference to a function that reads `ngh` attribute value from a given RNode
 * and retrieves hydration information from the TransferState using that value
 * as an index. Returns `null` by default, when hydration is not enabled.
 *
 * @param rNode Component's host element.
 * @param injector Injector that this component has access to.
 * @param isRootView Specifies whether we trying to read hydration info for the root view.
 */
let _retrieveHydrationInfoImpl = (rNode, injector, isRootView) => null;
/**
 * Retrieves hydration info by reading the value from the `ngh` attribute
 * and accessing a corresponding slot in TransferState storage.
 */
function retrieveHydrationInfo(rNode, injector, isRootView = false) {
  return _retrieveHydrationInfoImpl();
}
/**
 * Retrieves the necessary object from a given ViewRef to serialize:
 *  - an LView for component views
 *  - an LContainer for cases when component acts as a ViewContainerRef anchor
 *  - `null` in case of an embedded view
 */
function getLNodeForHydration(viewRef) {
  // Reading an internal field from `ViewRef` instance.
  let lView = viewRef._lView;
  const tView = lView[TVIEW];
  // A registered ViewRef might represent an instance of an
  // embedded view, in which case we do not need to annotate it.
  if (tView.type === 2 /* TViewType.Embedded */) {
    return null;
  }
  // Check if it's a root view and if so, retrieve component's
  // LView from the first slot after the header.
  if (isRootView(lView)) {
    lView = lView[HEADER_OFFSET];
  }
  return lView;
}

/**
 * Represents a component created by a `ComponentFactory`.
 * Provides access to the component instance and related objects,
 * and provides the means of destroying the instance.
 *
 * @publicApi
 */
class ComponentRef$1 {}
/**
 * Base class for a factory that can create a component dynamically.
 * Instantiate a factory for a given type of component with `resolveComponentFactory()`.
 * Use the resulting `ComponentFactory.create()` method to create a component of that type.
 *
 * @see [Dynamic Components](guide/dynamic-component-loader)
 *
 * @publicApi
 *
 * @deprecated Angular no longer requires Component factories. Please use other APIs where
 *     Component class can be used directly.
 */
class ComponentFactory$1 {}
function noComponentFactoryError(component) {
  const error = Error(`No component factory found for ${stringify(component)}.`);
  error[ERROR_COMPONENT] = component;
  return error;
}
const ERROR_COMPONENT = 'ngComponent';
class _NullComponentFactoryResolver {
  resolveComponentFactory(component) {
    throw noComponentFactoryError(component);
  }
}
/**
 * A simple registry that maps `Components` to generated `ComponentFactory` classes
 * that can be used to create instances of components.
 * Use to obtain the factory for a given component type,
 * then use the factory's `create()` method to create a component of that type.
 *
 * Note: since v13, dynamic component creation via
 * [`ViewContainerRef.createComponent`](api/core/ViewContainerRef#createComponent)
 * does **not** require resolving component factory: component class can be used directly.
 *
 * @publicApi
 *
 * @deprecated Angular no longer requires Component factories. Please use other APIs where
 *     Component class can be used directly.
 */
let ComponentFactoryResolver$1 = /*#__PURE__*/(() => {
  var _class2;
  class ComponentFactoryResolver$1 {}
  _class2 = ComponentFactoryResolver$1;
  _class2.NULL = /* @__PURE__ */new _NullComponentFactoryResolver();
  return ComponentFactoryResolver$1;
})();
/**
 * Creates an ElementRef from the most recent node.
 *
 * @returns The ElementRef instance to use
 */
function injectElementRef() {
  return createElementRef(getCurrentTNode(), getLView());
}
/**
 * Creates an ElementRef given a node.
 *
 * @param tNode The node for which you'd like an ElementRef
 * @param lView The view to which the node belongs
 * @returns The ElementRef instance to use
 */
function createElementRef(tNode, lView) {
  return new ElementRef(getNativeByTNode(tNode, lView));
}
/**
 * A wrapper around a native element inside of a View.
 *
 * An `ElementRef` is backed by a render-specific element. In the browser, this is usually a DOM
 * element.
 *
 * @security Permitting direct access to the DOM can make your application more vulnerable to
 * XSS attacks. Carefully review any use of `ElementRef` in your code. For more detail, see the
 * [Security Guide](https://g.co/ng/security).
 *
 * @publicApi
 */
// Note: We don't expose things like `Injector`, `ViewContainer`, ... here,
// i.e. users have to ask for what they need. With that, we can build better analysis tools
// and could do better codegen in the future.
let ElementRef = /*#__PURE__*/(() => {
  var _class3;
  class ElementRef {
    constructor(nativeElement) {
      this.nativeElement = nativeElement;
    }
    /**
     * @internal
     * @nocollapse
     */
  }

  _class3 = ElementRef;
  _class3.__NG_ELEMENT_ID__ = injectElementRef;
  return ElementRef;
})();

/**
 * Creates and initializes a custom renderer that implements the `Renderer2` base class.
 *
 * @publicApi
 */
class RendererFactory2 {}
/**
 * Extend this base class to implement custom rendering. By default, Angular
 * renders a template into DOM. You can use custom rendering to intercept
 * rendering calls, or to render to something other than DOM.
 *
 * Create your custom renderer using `RendererFactory2`.
 *
 * Use a custom renderer to bypass Angular's templating and
 * make custom UI changes that can't be expressed declaratively.
 * For example if you need to set a property or an attribute whose name is
 * not statically known, use the `setProperty()` or
 * `setAttribute()` method.
 *
 * @publicApi
 */
let Renderer2 = /*#__PURE__*/(() => {
  var _class4;
  class Renderer2 {
    constructor() {
      /**
       * If null or undefined, the view engine won't call it.
       * This is used as a performance optimization for production mode.
       */
      this.destroyNode = null;
    }
    /**
     * @internal
     * @nocollapse
     */
  }

  _class4 = Renderer2;
  _class4.__NG_ELEMENT_ID__ = () => injectRenderer2();
  return Renderer2;
})();
/** Injects a Renderer2 for the current component. */
function injectRenderer2() {
  // We need the Renderer to be based on the component that it's being injected into, however since
  // DI happens before we've entered its view, `getLView` will return the parent view instead.
  const lView = getLView();
  const tNode = getCurrentTNode();
  const nodeAtIndex = getComponentLViewByIndex(tNode.index, lView);
  return (isLView(nodeAtIndex) ? nodeAtIndex : lView)[RENDERER];
}

/**
 * Sanitizer is used by the views to sanitize potentially dangerous values.
 *
 * @publicApi
 */
let Sanitizer = /*#__PURE__*/(() => {
  var _class5;
  class Sanitizer {}
  _class5 = Sanitizer;
  /** @nocollapse */
  _class5.ɵprov = ɵɵdefineInjectable({
    token: _class5,
    providedIn: 'root',
    factory: () => null
  });
  return Sanitizer;
})();
/**
 * @description Represents the version of Angular
 *
 * @publicApi
 */
class Version {
  constructor(full) {
    this.full = full;
    this.major = full.split('.')[0];
    this.minor = full.split('.')[1];
    this.patch = full.split('.').slice(2).join('.');
  }
}
/**
 * @publicApi
 */
const VERSION = /*#__PURE__*/new Version('16.2.2');

// This default value is when checking the hierarchy for a token.
//
// It means both:
// - the token is not provided by the current injector,
// - only the element injectors should be checked (ie do not check module injectors
//
//          mod1
//         /
//       el1   mod2
//         \  /
//         el2
//
// When requesting el2.injector.get(token), we should check in the following order and return the
// first found value:
// - el2.injector.get(token, default)
// - el1.injector.get(token, NOT_FOUND_CHECK_ONLY_ELEMENT_INJECTOR) -> do not check the module
// - mod2.injector.get(token, default)
const NOT_FOUND_CHECK_ONLY_ELEMENT_INJECTOR = {};

/**
 * Create a new `Injector` which is configured using a `defType` of `InjectorType<any>`s.
 */
function createInjector(defType, parent = null, additionalProviders = null, name) {
  const injector = createInjectorWithoutInjectorInstances(defType, parent, additionalProviders, name);
  injector.resolveInjectorInitializers();
  return injector;
}
/**
 * Creates a new injector without eagerly resolving its injector types. Can be used in places
 * where resolving the injector types immediately can lead to an infinite loop. The injector types
 * should be resolved at a later point by calling `_resolveInjectorDefTypes`.
 */
function createInjectorWithoutInjectorInstances(defType, parent = null, additionalProviders = null, name, scopes = new Set()) {
  const providers = [additionalProviders || EMPTY_ARRAY, importProvidersFrom(defType)];
  name = name || (typeof defType === 'object' ? undefined : stringify(defType));
  return new R3Injector(providers, parent || getNullInjector(), name || null, scopes);
}

/**
 * Concrete injectors implement this interface. Injectors are configured
 * with [providers](guide/glossary#provider) that associate
 * dependencies of various types with [injection tokens](guide/glossary#di-token).
 *
 * @see ["DI Providers"](guide/dependency-injection-providers).
 * @see {@link StaticProvider}
 *
 * @usageNotes
 *
 *  The following example creates a service injector instance.
 *
 * {@example core/di/ts/provider_spec.ts region='ConstructorProvider'}
 *
 * ### Usage example
 *
 * {@example core/di/ts/injector_spec.ts region='Injector'}
 *
 * `Injector` returns itself when given `Injector` as a token:
 *
 * {@example core/di/ts/injector_spec.ts region='injectInjector'}
 *
 * @publicApi
 */
let Injector = /*#__PURE__*/(() => {
  var _class6;
  class Injector {
    static create(options, parent) {
      if (Array.isArray(options)) {
        return createInjector({
          name: ''
        }, parent, options, '');
      } else {
        const name = options.name ?? '';
        return createInjector({
          name
        }, options.parent, options.providers, name);
      }
    }
    /** @nocollapse */
  }

  _class6 = Injector;
  _class6.THROW_IF_NOT_FOUND = THROW_IF_NOT_FOUND;
  _class6.NULL = /* @__PURE__ */new NullInjector();
  _class6.ɵprov = ɵɵdefineInjectable({
    token: _class6,
    providedIn: 'any',
    factory: () => ɵɵinject(INJECTOR)
  });
  /**
   * @internal
   * @nocollapse
   */
  _class6.__NG_ELEMENT_ID__ = -1 /* InjectorMarkers.Injector */;
  return Injector;
})();
/**
 * The special delimiter we use to separate property names, prefixes, and suffixes
 * in property binding metadata. See storeBindingMetadata().
 *
 * We intentionally use the Unicode "REPLACEMENT CHARACTER" (U+FFFD) as a delimiter
 * because it is a very uncommon character that is unlikely to be part of a user's
 * property names or interpolation strings. If it is in fact used in a property
 * binding, DebugElement.properties will not return the correct value for that
 * binding. However, there should be no runtime effect for real applications.
 *
 * This character is typically rendered as a question mark inside of a diamond.
 * See https://en.wikipedia.org/wiki/Specials_(Unicode_block)
 *
 */
const INTERPOLATION_DELIMITER = `�`;
/**
 * Unwrap a value which might be behind a closure (for forward declaration reasons).
 */
function maybeUnwrapFn(value) {
  if (value instanceof Function) {
    return value();
  } else {
    return value;
  }
}
/**
 * Implements `afterRender` and `afterNextRender` callback manager logic.
 */
let AfterRenderEventManager = /*#__PURE__*/(() => {
  var _class8;
  class AfterRenderEventManager {
    constructor() {
      this.callbacks = new Set();
      this.deferredCallbacks = new Set();
      this.renderDepth = 0;
      this.runningCallbacks = false;
    }
    /**
     * Mark the beginning of a render operation (i.e. CD cycle).
     * Throws if called from an `afterRender` callback.
     */
    begin() {
      if (this.runningCallbacks) {
        throw new RuntimeError(102 /* RuntimeErrorCode.RECURSIVE_APPLICATION_RENDER */, ngDevMode && 'A new render operation began before the previous operation ended. ' + 'Did you trigger change detection from afterRender or afterNextRender?');
      }
      this.renderDepth++;
    }
    /**
     * Mark the end of a render operation. Registered callbacks
     * are invoked if there are no more pending operations.
     */
    end() {
      this.renderDepth--;
      if (this.renderDepth === 0) {
        try {
          this.runningCallbacks = true;
          for (const callback of this.callbacks) {
            callback.invoke();
          }
        } finally {
          this.runningCallbacks = false;
          for (const callback of this.deferredCallbacks) {
            this.callbacks.add(callback);
          }
          this.deferredCallbacks.clear();
        }
      }
    }
    register(callback) {
      // If we're currently running callbacks, new callbacks should be deferred
      // until the next render operation.
      const target = this.runningCallbacks ? this.deferredCallbacks : this.callbacks;
      target.add(callback);
    }
    unregister(callback) {
      this.callbacks.delete(callback);
      this.deferredCallbacks.delete(callback);
    }
    ngOnDestroy() {
      this.callbacks.clear();
      this.deferredCallbacks.clear();
    }
    /** @nocollapse */
  }

  _class8 = AfterRenderEventManager;
  _class8.ɵprov = ɵɵdefineInjectable({
    token: _class8,
    providedIn: 'root',
    factory: () => new _class8()
  });
  return AfterRenderEventManager;
})();
/**
 * Marks current view and all ancestors dirty.
 *
 * Returns the root view because it is found as a byproduct of marking the view tree
 * dirty, and can be used by methods that consume markViewDirty() to easily schedule
 * change detection. Otherwise, such methods would need to traverse up the view tree
 * an additional time to get the root view and schedule a tick on it.
 *
 * @param lView The starting LView to mark dirty
 * @returns the root LView
 */
function markViewDirty(lView) {
  while (lView) {
    lView[FLAGS] |= 64 /* LViewFlags.Dirty */;
    const parent = getLViewParent(lView);
    // Stop traversing up as soon as you find a root view that wasn't attached to any container
    if (isRootView(lView) && !parent) {
      return lView;
    }
    // continue otherwise
    lView = parent;
  }
  return null;
}
const ERROR_ORIGINAL_ERROR = 'ngOriginalError';
function getOriginalError(error) {
  return error[ERROR_ORIGINAL_ERROR];
}

/**
 * Provides a hook for centralized exception handling.
 *
 * The default implementation of `ErrorHandler` prints error messages to the `console`. To
 * intercept error handling, write a custom exception handler that replaces this default as
 * appropriate for your app.
 *
 * @usageNotes
 * ### Example
 *
 * ```
 * class MyErrorHandler implements ErrorHandler {
 *   handleError(error) {
 *     // do something with the exception
 *   }
 * }
 *
 * @NgModule({
 *   providers: [{provide: ErrorHandler, useClass: MyErrorHandler}]
 * })
 * class MyModule {}
 * ```
 *
 * @publicApi
 */
class ErrorHandler {
  constructor() {
    /**
     * @internal
     */
    this._console = console;
  }
  handleError(error) {
    const originalError = this._findOriginalError(error);
    this._console.error('ERROR', error);
    if (originalError) {
      this._console.error('ORIGINAL ERROR', originalError);
    }
  }
  /** @internal */
  _findOriginalError(error) {
    let e = error && getOriginalError(error);
    while (e && getOriginalError(e)) {
      e = getOriginalError(e);
    }
    return e || null;
  }
}

/**
 * Internal token that specifies whether DOM reuse logic
 * during hydration is enabled.
 */
const IS_HYDRATION_DOM_REUSE_ENABLED = /*#__PURE__*/new InjectionToken(typeof ngDevMode === 'undefined' || !!ngDevMode ? 'IS_HYDRATION_DOM_REUSE_ENABLED' : '');
// By default (in client rendering mode), we remove all the contents
// of the host element and render an application after that.
const PRESERVE_HOST_CONTENT_DEFAULT = false;
/**
 * Internal token that indicates whether host element content should be
 * retained during the bootstrap.
 */
const PRESERVE_HOST_CONTENT = /*#__PURE__*/new InjectionToken(typeof ngDevMode === 'undefined' || !!ngDevMode ? 'PRESERVE_HOST_CONTENT' : '', {
  providedIn: 'root',
  factory: () => PRESERVE_HOST_CONTENT_DEFAULT
});
function normalizeDebugBindingName(name) {
  // Attribute names with `$` (eg `x-y$`) are valid per spec, but unsupported by some browsers
  name = camelCaseToDashCase(name.replace(/[$@]/g, '_'));
  return `ng-reflect-${name}`;
}
const CAMEL_CASE_REGEXP = /([A-Z])/g;
function camelCaseToDashCase(input) {
  return input.replace(CAMEL_CASE_REGEXP, (...m) => '-' + m[1].toLowerCase());
}
function normalizeDebugBindingValue(value) {
  try {
    // Limit the size of the value as otherwise the DOM just gets polluted.
    return value != null ? value.toString().slice(0, 30) : value;
  } catch (e) {
    return '[ERROR] Exception while trying to serialize the value';
  }
}

/**
 * The max length of the string representation of a value in an error message
 */
const VALUE_STRING_LENGTH_LIMIT = 200;
/** Verifies that a given type is a Standalone Component. */
function assertStandaloneComponentType(type) {
  assertComponentDef(type);
  const componentDef = getComponentDef(type);
  if (!componentDef.standalone) {
    throw new RuntimeError(907 /* RuntimeErrorCode.TYPE_IS_NOT_STANDALONE */, `The ${stringifyForError(type)} component is not marked as standalone, ` + `but Angular expects to have a standalone component here. ` + `Please make sure the ${stringifyForError(type)} component has ` + `the \`standalone: true\` flag in the decorator.`);
  }
}
/** Verifies whether a given type is a component */
function assertComponentDef(type) {
  if (!getComponentDef(type)) {
    throw new RuntimeError(906 /* RuntimeErrorCode.MISSING_GENERATED_DEF */, `The ${stringifyForError(type)} is not an Angular component, ` + `make sure it has the \`@Component\` decorator.`);
  }
}
/** Called when there are multiple component selectors that match a given node */
function throwMultipleComponentError(tNode, first, second) {
  throw new RuntimeError(-300 /* RuntimeErrorCode.MULTIPLE_COMPONENTS_MATCH */, `Multiple components match node with tagname ${tNode.value}: ` + `${stringifyForError(first)} and ` + `${stringifyForError(second)}`);
}
/** Throws an ExpressionChangedAfterChecked error if checkNoChanges mode is on. */
function throwErrorIfNoChangesMode(creationMode, oldValue, currValue, propName, lView) {
  const hostComponentDef = getDeclarationComponentDef(lView);
  const componentClassName = hostComponentDef?.type?.name;
  const field = propName ? ` for '${propName}'` : '';
  let msg = `ExpressionChangedAfterItHasBeenCheckedError: Expression has changed after it was checked. Previous value${field}: '${formatValue(oldValue)}'. Current value: '${formatValue(currValue)}'.${componentClassName ? ` Expression location: ${componentClassName} component` : ''}`;
  if (creationMode) {
    msg += ` It seems like the view has been created after its parent and its children have been dirty checked.` + ` Has it been created in a change detection hook?`;
  }
  throw new RuntimeError(-100 /* RuntimeErrorCode.EXPRESSION_CHANGED_AFTER_CHECKED */, msg);
}
function formatValue(value) {
  let strValue = String(value);
  // JSON.stringify will throw on circular references
  try {
    if (Array.isArray(value) || strValue === '[object Object]') {
      strValue = JSON.stringify(value);
    }
  } catch (error) {}
  return strValue.length > VALUE_STRING_LENGTH_LIMIT ? strValue.substring(0, VALUE_STRING_LENGTH_LIMIT) + '…' : strValue;
}
function constructDetailsForInterpolation(lView, rootIndex, expressionIndex, meta, changedValue) {
  const [propName, prefix, ...chunks] = meta.split(INTERPOLATION_DELIMITER);
  let oldValue = prefix,
    newValue = prefix;
  for (let i = 0; i < chunks.length; i++) {
    const slotIdx = rootIndex + i;
    oldValue += `${lView[slotIdx]}${chunks[i]}`;
    newValue += `${slotIdx === expressionIndex ? changedValue : lView[slotIdx]}${chunks[i]}`;
  }
  return {
    propName,
    oldValue,
    newValue
  };
}
/**
 * Constructs an object that contains details for the ExpressionChangedAfterItHasBeenCheckedError:
 * - property name (for property bindings or interpolations)
 * - old and new values, enriched using information from metadata
 *
 * More information on the metadata storage format can be found in `storePropertyBindingMetadata`
 * function description.
 */
function getExpressionChangedErrorDetails(lView, bindingIndex, oldValue, newValue) {
  const tData = lView[TVIEW].data;
  const metadata = tData[bindingIndex];
  if (typeof metadata === 'string') {
    // metadata for property interpolation
    if (metadata.indexOf(INTERPOLATION_DELIMITER) > -1) {
      return constructDetailsForInterpolation(lView, bindingIndex, bindingIndex, metadata, newValue);
    }
    // metadata for property binding
    return {
      propName: metadata,
      oldValue,
      newValue
    };
  }
  // metadata is not available for this expression, check if this expression is a part of the
  // property interpolation by going from the current binding index left and look for a string that
  // contains INTERPOLATION_DELIMITER, the layout in tView.data for this case will look like this:
  // [..., 'id�Prefix � and � suffix', null, null, null, ...]
  if (metadata === null) {
    let idx = bindingIndex - 1;
    while (typeof tData[idx] !== 'string' && tData[idx + 1] === null) {
      idx--;
    }
    const meta = tData[idx];
    if (typeof meta === 'string') {
      const matches = meta.match(new RegExp(INTERPOLATION_DELIMITER, 'g'));
      // first interpolation delimiter separates property name from interpolation parts (in case of
      // property interpolations), so we subtract one from total number of found delimiters
      if (matches && matches.length - 1 > bindingIndex - idx) {
        return constructDetailsForInterpolation(lView, idx, bindingIndex, meta, newValue);
      }
    }
  }
  return {
    propName: undefined,
    oldValue,
    newValue
  };
}
class ReactiveLViewConsumer extends ReactiveNode {
  constructor() {
    super(...arguments);
    this.consumerAllowSignalWrites = false;
    this._lView = null;
  }
  set lView(lView) {
    (typeof ngDevMode === 'undefined' || ngDevMode) && assertEqual(this._lView, null, 'Consumer already associated with a view.');
    this._lView = lView;
  }
  onConsumerDependencyMayHaveChanged() {
    (typeof ngDevMode === 'undefined' || ngDevMode) && assertDefined(this._lView, 'Updating a signal during template or host binding execution is not allowed.');
    markViewDirty(this._lView);
  }
  onProducerUpdateValueVersion() {
    // This type doesn't implement the producer side of a `ReactiveNode`.
  }
  get hasReadASignal() {
    return this.hasProducers;
  }
  runInContext(fn, rf, ctx) {
    const prevConsumer = setActiveConsumer(this);
    this.trackingVersion++;
    try {
      fn(rf, ctx);
    } finally {
      setActiveConsumer(prevConsumer);
    }
  }
  destroy() {
    // Incrementing the version means that every producer which tries to update this consumer will
    // consider its record stale, and not notify.
    this.trackingVersion++;
  }
}
let currentConsumer = null;
function getOrCreateCurrentLViewConsumer() {
  currentConsumer ??= new ReactiveLViewConsumer();
  return currentConsumer;
}
/**
 * Create a new template consumer pointing at the specified LView.
 * Sometimes, a previously created consumer may be reused, in order to save on allocations. In that
 * case, the LView will be updated.
 */
function getReactiveLViewConsumer(lView, slot) {
  return lView[slot] ?? getOrCreateCurrentLViewConsumer();
}
/**
 * Assigns the `currentTemplateContext` to its LView's `REACTIVE_CONSUMER` slot if there are tracked
 * producers.
 *
 * The presence of producers means that a signal was read while the consumer was the active
 * consumer.
 *
 * If no producers are present, we do not assign the current template context. This also means we
 * can just reuse the template context for the next LView.
 */
function commitLViewConsumerIfHasProducers(lView, slot) {
  const consumer = getOrCreateCurrentLViewConsumer();
  if (!consumer.hasReadASignal) {
    return;
  }
  lView[slot] = currentConsumer;
  consumer.lView = lView;
  currentConsumer = new ReactiveLViewConsumer();
}

/** A special value which designates that a value has not changed. */
const NO_CHANGE = typeof ngDevMode === 'undefined' || ngDevMode ? {
  __brand__: 'NO_CHANGE'
} : {};

/**
 * Advances to an element for later binding instructions.
 *
 * Used in conjunction with instructions like {@link property} to act on elements with specified
 * indices, for example those created with {@link element} or {@link elementStart}.
 *
 * ```ts
 * (rf: RenderFlags, ctx: any) => {
 *   if (rf & 1) {
 *     text(0, 'Hello');
 *     text(1, 'Goodbye')
 *     element(2, 'div');
 *   }
 *   if (rf & 2) {
 *     advance(2); // Advance twice to the <div>.
 *     property('title', 'test');
 *   }
 *  }
 * ```
 * @param delta Number of elements to advance forwards by.
 *
 * @codeGenApi
 */
function ɵɵadvance(delta) {
  ngDevMode && assertGreaterThan(delta, 0, 'Can only advance forward');
  selectIndexInternal(getTView(), getLView(), getSelectedIndex() + delta, !!ngDevMode && isInCheckNoChangesMode());
}
function selectIndexInternal(tView, lView, index, checkNoChangesMode) {
  ngDevMode && assertIndexInDeclRange(lView, index);
  // Flush the initial hooks for elements in the view that have been added up to this point.
  // PERF WARNING: do NOT extract this to a separate function without running benchmarks
  if (!checkNoChangesMode) {
    const hooksInitPhaseCompleted = (lView[FLAGS] & 3 /* LViewFlags.InitPhaseStateMask */) === 3 /* InitPhaseState.InitPhaseCompleted */;
    if (hooksInitPhaseCompleted) {
      const preOrderCheckHooks = tView.preOrderCheckHooks;
      if (preOrderCheckHooks !== null) {
        executeCheckHooks(lView, preOrderCheckHooks, index);
      }
    } else {
      const preOrderHooks = tView.preOrderHooks;
      if (preOrderHooks !== null) {
        executeInitAndCheckHooks(lView, preOrderHooks, 0 /* InitPhaseState.OnInitHooksToBeRun */, index);
      }
    }
  }
  // We must set the selected index *after* running the hooks, because hooks may have side-effects
  // that cause other template functions to run, thus updating the selected index, which is global
  // state. If we run `setSelectedIndex` *before* we run the hooks, in some cases the selected index
  // will be altered by the time we leave the `ɵɵadvance` instruction.
  setSelectedIndex(index);
}
function ɵɵdirectiveInject(token, flags = InjectFlags.Default) {
  const lView = getLView();
  // Fall back to inject() if view hasn't been created. This situation can happen in tests
  // if inject utilities are used before bootstrapping.
  if (lView === null) {
    // Verify that we will not get into infinite loop.
    ngDevMode && assertInjectImplementationNotEqual(ɵɵdirectiveInject);
    return ɵɵinject(token, flags);
  }
  const tNode = getCurrentTNode();
  const value = getOrCreateInjectable(tNode, lView, resolveForwardRef(token), flags);
  ngDevMode && emitInjectEvent(token, value, flags);
  return value;
}

/**
 * Invoke `HostBindingsFunction`s for view.
 *
 * This methods executes `TView.hostBindingOpCodes`. It is used to execute the
 * `HostBindingsFunction`s associated with the current `LView`.
 *
 * @param tView Current `TView`.
 * @param lView Current `LView`.
 */
function processHostBindingOpCodes(tView, lView) {
  const hostBindingOpCodes = tView.hostBindingOpCodes;
  if (hostBindingOpCodes === null) return;
  const consumer = getReactiveLViewConsumer(lView, REACTIVE_HOST_BINDING_CONSUMER);
  try {
    for (let i = 0; i < hostBindingOpCodes.length; i++) {
      const opCode = hostBindingOpCodes[i];
      if (opCode < 0) {
        // Negative numbers are element indexes.
        setSelectedIndex(~opCode);
      } else {
        // Positive numbers are NumberTuple which store bindingRootIndex and directiveIndex.
        const directiveIdx = opCode;
        const bindingRootIndx = hostBindingOpCodes[++i];
        const hostBindingFn = hostBindingOpCodes[++i];
        setBindingRootForHostBindings(bindingRootIndx, directiveIdx);
        const context = lView[directiveIdx];
        consumer.runInContext(hostBindingFn, 2 /* RenderFlags.Update */, context);
      }
    }
  } finally {
    if (lView[REACTIVE_HOST_BINDING_CONSUMER] === null) {
      commitLViewConsumerIfHasProducers(lView, REACTIVE_HOST_BINDING_CONSUMER);
    }
    setSelectedIndex(-1);
  }
}
function createLView(parentLView, tView, context, flags, host, tHostNode, environment, renderer, injector, embeddedViewInjector, hydrationInfo) {
  const lView = tView.blueprint.slice();
  lView[HOST] = host;
  lView[FLAGS] = flags | 4 /* LViewFlags.CreationMode */ | 128 /* LViewFlags.Attached */ | 8 /* LViewFlags.FirstLViewPass */;
  if (embeddedViewInjector !== null || parentLView && parentLView[FLAGS] & 2048 /* LViewFlags.HasEmbeddedViewInjector */) {
    lView[FLAGS] |= 2048 /* LViewFlags.HasEmbeddedViewInjector */;
  }

  resetPreOrderHookFlags(lView);
  ngDevMode && tView.declTNode && parentLView && assertTNodeForLView(tView.declTNode, parentLView);
  lView[PARENT] = lView[DECLARATION_VIEW] = parentLView;
  lView[CONTEXT] = context;
  lView[ENVIRONMENT] = environment || parentLView && parentLView[ENVIRONMENT];
  ngDevMode && assertDefined(lView[ENVIRONMENT], 'LViewEnvironment is required');
  lView[RENDERER] = renderer || parentLView && parentLView[RENDERER];
  ngDevMode && assertDefined(lView[RENDERER], 'Renderer is required');
  lView[INJECTOR$1] = injector || parentLView && parentLView[INJECTOR$1] || null;
  lView[T_HOST] = tHostNode;
  lView[ID] = getUniqueLViewId();
  lView[HYDRATION] = hydrationInfo;
  lView[EMBEDDED_VIEW_INJECTOR] = embeddedViewInjector;
  ngDevMode && assertEqual(tView.type == 2 /* TViewType.Embedded */ ? parentLView !== null : true, true, 'Embedded views must have parentLView');
  lView[DECLARATION_COMPONENT_VIEW] = tView.type == 2 /* TViewType.Embedded */ ? parentLView[DECLARATION_COMPONENT_VIEW] : lView;
  return lView;
}
function getOrCreateTNode(tView, index, type, name, attrs) {
  ngDevMode && index !== 0 &&
  // 0 are bogus nodes and they are OK. See `createContainerRef` in
  // `view_engine_compatibility` for additional context.
  assertGreaterThanOrEqual(index, HEADER_OFFSET, 'TNodes can\'t be in the LView header.');
  // Keep this function short, so that the VM will inline it.
  ngDevMode && assertPureTNodeType(type);
  let tNode = tView.data[index];
  if (tNode === null) {
    tNode = createTNodeAtIndex(tView, index, type, name, attrs);
    if (isInI18nBlock()) {
      // If we are in i18n block then all elements should be pre declared through `Placeholder`
      // See `TNodeType.Placeholder` and `LFrame.inI18n` for more context.
      // If the `TNode` was not pre-declared than it means it was not mentioned which means it was
      // removed, so we mark it as detached.
      tNode.flags |= 32 /* TNodeFlags.isDetached */;
    }
  } else if (tNode.type & 64 /* TNodeType.Placeholder */) {
    tNode.type = type;
    tNode.value = name;
    tNode.attrs = attrs;
    const parent = getCurrentParentTNode();
    tNode.injectorIndex = parent === null ? -1 : parent.injectorIndex;
    ngDevMode && assertTNodeForTView(tNode, tView);
    ngDevMode && assertEqual(index, tNode.index, 'Expecting same index');
  }
  setCurrentTNode(tNode, true);
  return tNode;
}
function createTNodeAtIndex(tView, index, type, name, attrs) {
  const currentTNode = getCurrentTNodePlaceholderOk();
  const isParent = isCurrentTNodeParent();
  const parent = isParent ? currentTNode : currentTNode && currentTNode.parent;
  // Parents cannot cross component boundaries because components will be used in multiple places.
  const tNode = tView.data[index] = createTNode(tView, parent, type, index, name, attrs);
  // Assign a pointer to the first child node of a given view. The first node is not always the one
  // at index 0, in case of i18n, index 0 can be the instruction `i18nStart` and the first node has
  // the index 1 or more, so we can't just check node index.
  if (tView.firstChild === null) {
    tView.firstChild = tNode;
  }
  if (currentTNode !== null) {
    if (isParent) {
      // FIXME(misko): This logic looks unnecessarily complicated. Could we simplify?
      if (currentTNode.child == null && tNode.parent !== null) {
        // We are in the same view, which means we are adding content node to the parent view.
        currentTNode.child = tNode;
      }
    } else {
      if (currentTNode.next === null) {
        // In the case of i18n the `currentTNode` may already be linked, in which case we don't want
        // to break the links which i18n created.
        currentTNode.next = tNode;
        tNode.prev = currentTNode;
      }
    }
  }
  return tNode;
}
/**
 * When elements are created dynamically after a view blueprint is created (e.g. through
 * i18nApply()), we need to adjust the blueprint for future
 * template passes.
 *
 * @param tView `TView` associated with `LView`
 * @param lView The `LView` containing the blueprint to adjust
 * @param numSlotsToAlloc The number of slots to alloc in the LView, should be >0
 * @param initialValue Initial value to store in blueprint
 */
function allocExpando(tView, lView, numSlotsToAlloc, initialValue) {
  if (numSlotsToAlloc === 0) return -1;
  if (ngDevMode) {
    assertFirstCreatePass(tView);
    assertSame(tView, lView[TVIEW], '`LView` must be associated with `TView`!');
    assertEqual(tView.data.length, lView.length, 'Expecting LView to be same size as TView');
    assertEqual(tView.data.length, tView.blueprint.length, 'Expecting Blueprint to be same size as TView');
    assertFirstUpdatePass(tView);
  }
  const allocIdx = lView.length;
  for (let i = 0; i < numSlotsToAlloc; i++) {
    lView.push(initialValue);
    tView.blueprint.push(initialValue);
    tView.data.push(null);
  }
  return allocIdx;
}
function executeTemplate(tView, lView, templateFn, rf, context) {
  const consumer = getReactiveLViewConsumer(lView, REACTIVE_TEMPLATE_CONSUMER);
  const prevSelectedIndex = getSelectedIndex();
  const isUpdatePhase = rf & 2 /* RenderFlags.Update */;
  try {
    setSelectedIndex(-1);
    if (isUpdatePhase && lView.length > HEADER_OFFSET) {
      // When we're updating, inherently select 0 so we don't
      // have to generate that instruction for most update blocks.
      selectIndexInternal(tView, lView, HEADER_OFFSET, !!ngDevMode && isInCheckNoChangesMode());
    }
    const preHookType = isUpdatePhase ? 2 /* ProfilerEvent.TemplateUpdateStart */ : 0 /* ProfilerEvent.TemplateCreateStart */;
    profiler(preHookType, context);
    if (isUpdatePhase) {
      consumer.runInContext(templateFn, rf, context);
    } else {
      const prevConsumer = setActiveConsumer(null);
      try {
        templateFn(rf, context);
      } finally {
        setActiveConsumer(prevConsumer);
      }
    }
  } finally {
    if (isUpdatePhase && lView[REACTIVE_TEMPLATE_CONSUMER] === null) {
      commitLViewConsumerIfHasProducers(lView, REACTIVE_TEMPLATE_CONSUMER);
    }
    setSelectedIndex(prevSelectedIndex);
    const postHookType = isUpdatePhase ? 3 /* ProfilerEvent.TemplateUpdateEnd */ : 1 /* ProfilerEvent.TemplateCreateEnd */;
    profiler(postHookType, context);
  }
}
//////////////////////////
//// Element
//////////////////////////
function executeContentQueries(tView, tNode, lView) {
  if (isContentQueryHost(tNode)) {
    const prevConsumer = setActiveConsumer(null);
    try {
      const start = tNode.directiveStart;
      const end = tNode.directiveEnd;
      for (let directiveIndex = start; directiveIndex < end; directiveIndex++) {
        const def = tView.data[directiveIndex];
        if (def.contentQueries) {
          def.contentQueries(1 /* RenderFlags.Create */, lView[directiveIndex], directiveIndex);
        }
      }
    } finally {
      setActiveConsumer(prevConsumer);
    }
  }
}
/**
 * Creates directive instances.
 */
function createDirectivesInstances(tView, lView, tNode) {
  instantiateAllDirectives(tView, lView, tNode, getNativeByTNode(tNode, lView));
  if ((tNode.flags & 64 /* TNodeFlags.hasHostBindings */) === 64 /* TNodeFlags.hasHostBindings */) {
    invokeDirectivesHostBindings(tView, lView, tNode);
  }
}
/**
 * Takes a list of local names and indices and pushes the resolved local variable values
 * to LView in the same order as they are loaded in the template with load().
 */
function saveResolvedLocalsInData(viewData, tNode, localRefExtractor = getNativeByTNode) {
  const localNames = tNode.localNames;
  if (localNames !== null) {
    let localIndex = tNode.index + 1;
    for (let i = 0; i < localNames.length; i += 2) {
      const index = localNames[i + 1];
      const value = index === -1 ? localRefExtractor(tNode, viewData) : viewData[index];
      viewData[localIndex++] = value;
    }
  }
}
/**
 * Gets TView from a template function or creates a new TView
 * if it doesn't already exist.
 *
 * @param def ComponentDef
 * @returns TView
 */
function getOrCreateComponentTView(def) {
  const tView = def.tView;
  // Create a TView if there isn't one, or recreate it if the first create pass didn't
  // complete successfully since we can't know for sure whether it's in a usable shape.
  if (tView === null || tView.incompleteFirstPass) {
    // Declaration node here is null since this function is called when we dynamically create a
    // component and hence there is no declaration.
    const declTNode = null;
    return def.tView = createTView(1 /* TViewType.Component */, declTNode, def.template, def.decls, def.vars, def.directiveDefs, def.pipeDefs, def.viewQuery, def.schemas, def.consts, def.id);
  }
  return tView;
}
/**
 * Creates a TView instance
 *
 * @param type Type of `TView`.
 * @param declTNode Declaration location of this `TView`.
 * @param templateFn Template function
 * @param decls The number of nodes, local refs, and pipes in this template
 * @param directives Registry of directives for this view
 * @param pipes Registry of pipes for this view
 * @param viewQuery View queries for this view
 * @param schemas Schemas for this view
 * @param consts Constants for this view
 */
function createTView(type, declTNode, templateFn, decls, vars, directives, pipes, viewQuery, schemas, constsOrFactory, ssrId) {
  ngDevMode && ngDevMode.tView++;
  const bindingStartIndex = HEADER_OFFSET + decls;
  // This length does not yet contain host bindings from child directives because at this point,
  // we don't know which directives are active on this template. As soon as a directive is matched
  // that has a host binding, we will update the blueprint with that def's hostVars count.
  const initialViewLength = bindingStartIndex + vars;
  const blueprint = createViewBlueprint(bindingStartIndex, initialViewLength);
  const consts = typeof constsOrFactory === 'function' ? constsOrFactory() : constsOrFactory;
  const tView = blueprint[TVIEW] = {
    type: type,
    blueprint: blueprint,
    template: templateFn,
    queries: null,
    viewQuery: viewQuery,
    declTNode: declTNode,
    data: blueprint.slice().fill(null, bindingStartIndex),
    bindingStartIndex: bindingStartIndex,
    expandoStartIndex: initialViewLength,
    hostBindingOpCodes: null,
    firstCreatePass: true,
    firstUpdatePass: true,
    staticViewQueries: false,
    staticContentQueries: false,
    preOrderHooks: null,
    preOrderCheckHooks: null,
    contentHooks: null,
    contentCheckHooks: null,
    viewHooks: null,
    viewCheckHooks: null,
    destroyHooks: null,
    cleanup: null,
    contentQueries: null,
    components: null,
    directiveRegistry: typeof directives === 'function' ? directives() : directives,
    pipeRegistry: typeof pipes === 'function' ? pipes() : pipes,
    firstChild: null,
    schemas: schemas,
    consts: consts,
    incompleteFirstPass: false,
    ssrId
  };
  if (ngDevMode) {
    // For performance reasons it is important that the tView retains the same shape during runtime.
    // (To make sure that all of the code is monomorphic.) For this reason we seal the object to
    // prevent class transitions.
    Object.seal(tView);
  }
  return tView;
}
function createViewBlueprint(bindingStartIndex, initialViewLength) {
  const blueprint = [];
  for (let i = 0; i < initialViewLength; i++) {
    blueprint.push(i < bindingStartIndex ? null : NO_CHANGE);
  }
  return blueprint;
}
/**
 * Locates the host native element, used for bootstrapping existing nodes into rendering pipeline.
 *
 * @param renderer the renderer used to locate the element.
 * @param elementOrSelector Render element or CSS selector to locate the element.
 * @param encapsulation View Encapsulation defined for component that requests host element.
 * @param injector Root view injector instance.
 */
function locateHostElement(renderer, elementOrSelector, encapsulation, injector) {
  // Note: we use default value for the `PRESERVE_HOST_CONTENT` here even though it's a
  // tree-shakable one (providedIn:'root'). This code path can be triggered during dynamic
  // component creation (after calling ViewContainerRef.createComponent) when an injector
  // instance can be provided. The injector instance might be disconnected from the main DI
  // tree, thus the `PRESERVE_HOST_CONTENT` would not be able to instantiate. In this case, the
  // default value will be used.
  const preserveHostContent = injector.get(PRESERVE_HOST_CONTENT, PRESERVE_HOST_CONTENT_DEFAULT);
  // When using native Shadow DOM, do not clear host element to allow native slot
  // projection.
  const preserveContent = preserveHostContent || encapsulation === ViewEncapsulation$1.ShadowDom;
  const rootElement = renderer.selectRootElement(elementOrSelector, preserveContent);
  return rootElement;
}
function createTNode(tView, tParent, type, index, value, attrs) {
  ngDevMode && index !== 0 &&
  // 0 are bogus nodes and they are OK. See `createContainerRef` in
  // `view_engine_compatibility` for additional context.
  assertGreaterThanOrEqual(index, HEADER_OFFSET, 'TNodes can\'t be in the LView header.');
  ngDevMode && assertNotSame(attrs, undefined, '\'undefined\' is not valid value for \'attrs\'');
  ngDevMode && ngDevMode.tNode++;
  ngDevMode && tParent && assertTNodeForTView(tParent, tView);
  let injectorIndex = tParent ? tParent.injectorIndex : -1;
  let flags = 0;
  if (isInSkipHydrationBlock$1()) {
    flags |= 128 /* TNodeFlags.inSkipHydrationBlock */;
  }

  const tNode = {
    type,
    index,
    insertBeforeIndex: null,
    injectorIndex,
    directiveStart: -1,
    directiveEnd: -1,
    directiveStylingLast: -1,
    componentOffset: -1,
    propertyBindings: null,
    flags,
    providerIndexes: 0,
    value: value,
    attrs: attrs,
    mergedAttrs: null,
    localNames: null,
    initialInputs: undefined,
    inputs: null,
    outputs: null,
    tView: null,
    next: null,
    prev: null,
    projectionNext: null,
    child: null,
    parent: tParent,
    projection: null,
    styles: null,
    stylesWithoutHost: null,
    residualStyles: undefined,
    classes: null,
    classesWithoutHost: null,
    residualClasses: undefined,
    classBindings: 0,
    styleBindings: 0
  };
  if (ngDevMode) {
    // For performance reasons it is important that the tNode retains the same shape during runtime.
    // (To make sure that all of the code is monomorphic.) For this reason we seal the object to
    // prevent class transitions.
    Object.seal(tNode);
  }
  return tNode;
}
/**
 * Generates the `PropertyAliases` data structure from the provided input/output mapping.
 * @param aliasMap Input/output mapping from the directive definition.
 * @param directiveIndex Index of the directive.
 * @param propertyAliases Object in which to store the results.
 * @param hostDirectiveAliasMap Object used to alias or filter out properties for host directives.
 * If the mapping is provided, it'll act as an allowlist, as well as a mapping of what public
 * name inputs/outputs should be exposed under.
 */
function generatePropertyAliases(aliasMap, directiveIndex, propertyAliases, hostDirectiveAliasMap) {
  for (let publicName in aliasMap) {
    if (aliasMap.hasOwnProperty(publicName)) {
      propertyAliases = propertyAliases === null ? {} : propertyAliases;
      const internalName = aliasMap[publicName];
      // If there are no host directive mappings, we want to remap using the alias map from the
      // definition itself. If there is an alias map, it has two functions:
      // 1. It serves as an allowlist of bindings that are exposed by the host directives. Only the
      // ones inside the host directive map will be exposed on the host.
      // 2. The public name of the property is aliased using the host directive alias map, rather
      // than the alias map from the definition.
      if (hostDirectiveAliasMap === null) {
        addPropertyAlias(propertyAliases, directiveIndex, publicName, internalName);
      } else if (hostDirectiveAliasMap.hasOwnProperty(publicName)) {
        addPropertyAlias(propertyAliases, directiveIndex, hostDirectiveAliasMap[publicName], internalName);
      }
    }
  }
  return propertyAliases;
}
function addPropertyAlias(propertyAliases, directiveIndex, publicName, internalName) {
  if (propertyAliases.hasOwnProperty(publicName)) {
    propertyAliases[publicName].push(directiveIndex, internalName);
  } else {
    propertyAliases[publicName] = [directiveIndex, internalName];
  }
}
/**
 * Initializes data structures required to work with directive inputs and outputs.
 * Initialization is done for all directives matched on a given TNode.
 */
function initializeInputAndOutputAliases(tView, tNode, hostDirectiveDefinitionMap) {
  ngDevMode && assertFirstCreatePass(tView);
  const start = tNode.directiveStart;
  const end = tNode.directiveEnd;
  const tViewData = tView.data;
  const tNodeAttrs = tNode.attrs;
  const inputsFromAttrs = [];
  let inputsStore = null;
  let outputsStore = null;
  for (let directiveIndex = start; directiveIndex < end; directiveIndex++) {
    const directiveDef = tViewData[directiveIndex];
    const aliasData = hostDirectiveDefinitionMap ? hostDirectiveDefinitionMap.get(directiveDef) : null;
    const aliasedInputs = aliasData ? aliasData.inputs : null;
    const aliasedOutputs = aliasData ? aliasData.outputs : null;
    inputsStore = generatePropertyAliases(directiveDef.inputs, directiveIndex, inputsStore, aliasedInputs);
    outputsStore = generatePropertyAliases(directiveDef.outputs, directiveIndex, outputsStore, aliasedOutputs);
    // Do not use unbound attributes as inputs to structural directives, since structural
    // directive inputs can only be set using microsyntax (e.g. `<div *dir="exp">`).
    // TODO(FW-1930): microsyntax expressions may also contain unbound/static attributes, which
    // should be set for inline templates.
    const initialInputs = inputsStore !== null && tNodeAttrs !== null && !isInlineTemplate(tNode) ? generateInitialInputs(inputsStore, directiveIndex, tNodeAttrs) : null;
    inputsFromAttrs.push(initialInputs);
  }
  if (inputsStore !== null) {
    if (inputsStore.hasOwnProperty('class')) {
      tNode.flags |= 8 /* TNodeFlags.hasClassInput */;
    }

    if (inputsStore.hasOwnProperty('style')) {
      tNode.flags |= 16 /* TNodeFlags.hasStyleInput */;
    }
  }

  tNode.initialInputs = inputsFromAttrs;
  tNode.inputs = inputsStore;
  tNode.outputs = outputsStore;
}
/**
 * Mapping between attributes names that don't correspond to their element property names.
 *
 * Performance note: this function is written as a series of if checks (instead of, say, a property
 * object lookup) for performance reasons - the series of `if` checks seems to be the fastest way of
 * mapping property names. Do NOT change without benchmarking.
 *
 * Note: this mapping has to be kept in sync with the equally named mapping in the template
 * type-checking machinery of ngtsc.
 */
function mapPropName(name) {
  if (name === 'class') return 'className';
  if (name === 'for') return 'htmlFor';
  if (name === 'formaction') return 'formAction';
  if (name === 'innerHtml') return 'innerHTML';
  if (name === 'readonly') return 'readOnly';
  if (name === 'tabindex') return 'tabIndex';
  return name;
}
function elementPropertyInternal(tView, tNode, lView, propName, value, renderer, sanitizer, nativeOnly) {
  ngDevMode && assertNotSame(value, NO_CHANGE, 'Incoming value should never be NO_CHANGE.');
  const element = getNativeByTNode(tNode, lView);
  let inputData = tNode.inputs;
  let dataValue;
  if (!nativeOnly && inputData != null && (dataValue = inputData[propName])) {
    setInputsForProperty(tView, lView, dataValue, propName, value);
    if (isComponentHost(tNode)) markDirtyIfOnPush(lView, tNode.index);
    if (ngDevMode) {
      setNgReflectProperties(lView, element, tNode.type, dataValue, value);
    }
  } else if (tNode.type & 3 /* TNodeType.AnyRNode */) {
    propName = mapPropName(propName);
    if (ngDevMode) {
      validateAgainstEventProperties(propName);
      if (!isPropertyValid(element, propName, tNode.value, tView.schemas)) {
        handleUnknownPropertyError(propName, tNode.value, tNode.type, lView);
      }
      ngDevMode.rendererSetProperty++;
    }
    // It is assumed that the sanitizer is only added when the compiler determines that the
    // property is risky, so sanitization can be done without further checks.
    value = sanitizer != null ? sanitizer(value, tNode.value || '', propName) : value;
    renderer.setProperty(element, propName, value);
  } else if (tNode.type & 12 /* TNodeType.AnyContainer */) {
    // If the node is a container and the property didn't
    // match any of the inputs or schemas we should throw.
    if (ngDevMode && !matchingSchemas(tView.schemas, tNode.value)) {
      handleUnknownPropertyError(propName, tNode.value, tNode.type, lView);
    }
  }
}
/** If node is an OnPush component, marks its LView dirty. */
function markDirtyIfOnPush(lView, viewIndex) {
  ngDevMode && assertLView(lView);
  const childComponentLView = getComponentLViewByIndex(viewIndex, lView);
  if (!(childComponentLView[FLAGS] & 16 /* LViewFlags.CheckAlways */)) {
    childComponentLView[FLAGS] |= 64 /* LViewFlags.Dirty */;
  }
}

function setNgReflectProperty(lView, element, type, attrName, value) {
  const renderer = lView[RENDERER];
  attrName = normalizeDebugBindingName(attrName);
  const debugValue = normalizeDebugBindingValue(value);
  if (type & 3 /* TNodeType.AnyRNode */) {
    if (value == null) {
      renderer.removeAttribute(element, attrName);
    } else {
      renderer.setAttribute(element, attrName, debugValue);
    }
  } else {
    const textContent = escapeCommentText(`bindings=${JSON.stringify({
      [attrName]: debugValue
    }, null, 2)}`);
    renderer.setValue(element, textContent);
  }
}
function setNgReflectProperties(lView, element, type, dataValue, value) {
  if (type & (3 /* TNodeType.AnyRNode */ | 4 /* TNodeType.Container */)) {
    /**
     * dataValue is an array containing runtime input or output names for the directives:
     * i+0: directive instance index
     * i+1: privateName
     *
     * e.g. [0, 'change', 'change-minified']
     * we want to set the reflected property with the privateName: dataValue[i+1]
     */
    for (let i = 0; i < dataValue.length; i += 2) {
      setNgReflectProperty(lView, element, type, dataValue[i + 1], value);
    }
  }
}
/**
 * Resolve the matched directives on a node.
 */
function resolveDirectives(tView, lView, tNode, localRefs) {
  // Please make sure to have explicit type for `exportsMap`. Inferred type triggers bug in
  // tsickle.
  ngDevMode && assertFirstCreatePass(tView);
  {
    const exportsMap = localRefs === null ? null : {
      '': -1
    };
    const matchResult = findDirectiveDefMatches(tView, tNode);
    let directiveDefs;
    let hostDirectiveDefs;
    if (matchResult === null) {
      directiveDefs = hostDirectiveDefs = null;
    } else {
      [directiveDefs, hostDirectiveDefs] = matchResult;
    }
    if (directiveDefs !== null) {
      initializeDirectives(tView, lView, tNode, directiveDefs, exportsMap, hostDirectiveDefs);
    }
    if (exportsMap) cacheMatchingLocalNames(tNode, localRefs, exportsMap);
  }
  // Merge the template attrs last so that they have the highest priority.
  tNode.mergedAttrs = mergeHostAttrs(tNode.mergedAttrs, tNode.attrs);
}
/** Initializes the data structures necessary for a list of directives to be instantiated. */
function initializeDirectives(tView, lView, tNode, directives, exportsMap, hostDirectiveDefs) {
  ngDevMode && assertFirstCreatePass(tView);
  // Publishes the directive types to DI so they can be injected. Needs to
  // happen in a separate pass before the TNode flags have been initialized.
  for (let i = 0; i < directives.length; i++) {
    diPublicInInjector(getOrCreateNodeInjectorForNode(tNode, lView), tView, directives[i].type);
  }
  initTNodeFlags(tNode, tView.data.length, directives.length);
  // When the same token is provided by several directives on the same node, some rules apply in
  // the viewEngine:
  // - viewProviders have priority over providers
  // - the last directive in NgModule.declarations has priority over the previous one
  // So to match these rules, the order in which providers are added in the arrays is very
  // important.
  for (let i = 0; i < directives.length; i++) {
    const def = directives[i];
    if (def.providersResolver) def.providersResolver(def);
  }
  let preOrderHooksFound = false;
  let preOrderCheckHooksFound = false;
  let directiveIdx = allocExpando(tView, lView, directives.length, null);
  ngDevMode && assertSame(directiveIdx, tNode.directiveStart, 'TNode.directiveStart should point to just allocated space');
  for (let i = 0; i < directives.length; i++) {
    const def = directives[i];
    // Merge the attrs in the order of matches. This assumes that the first directive is the
    // component itself, so that the component has the least priority.
    tNode.mergedAttrs = mergeHostAttrs(tNode.mergedAttrs, def.hostAttrs);
    configureViewWithDirective(tView, tNode, lView, directiveIdx, def);
    saveNameToExportMap(directiveIdx, def, exportsMap);
    if (def.contentQueries !== null) tNode.flags |= 4 /* TNodeFlags.hasContentQuery */;
    if (def.hostBindings !== null || def.hostAttrs !== null || def.hostVars !== 0) tNode.flags |= 64 /* TNodeFlags.hasHostBindings */;
    const lifeCycleHooks = def.type.prototype;
    // Only push a node index into the preOrderHooks array if this is the first
    // pre-order hook found on this node.
    if (!preOrderHooksFound && (lifeCycleHooks.ngOnChanges || lifeCycleHooks.ngOnInit || lifeCycleHooks.ngDoCheck)) {
      // We will push the actual hook function into this array later during dir instantiation.
      // We cannot do it now because we must ensure hooks are registered in the same
      // order that directives are created (i.e. injection order).
      (tView.preOrderHooks ??= []).push(tNode.index);
      preOrderHooksFound = true;
    }
    if (!preOrderCheckHooksFound && (lifeCycleHooks.ngOnChanges || lifeCycleHooks.ngDoCheck)) {
      (tView.preOrderCheckHooks ??= []).push(tNode.index);
      preOrderCheckHooksFound = true;
    }
    directiveIdx++;
  }
  initializeInputAndOutputAliases(tView, tNode, hostDirectiveDefs);
}
/**
 * Add `hostBindings` to the `TView.hostBindingOpCodes`.
 *
 * @param tView `TView` to which the `hostBindings` should be added.
 * @param tNode `TNode` the element which contains the directive
 * @param directiveIdx Directive index in view.
 * @param directiveVarsIdx Where will the directive's vars be stored
 * @param def `ComponentDef`/`DirectiveDef`, which contains the `hostVars`/`hostBindings` to add.
 */
function registerHostBindingOpCodes(tView, tNode, directiveIdx, directiveVarsIdx, def) {
  ngDevMode && assertFirstCreatePass(tView);
  const hostBindings = def.hostBindings;
  if (hostBindings) {
    let hostBindingOpCodes = tView.hostBindingOpCodes;
    if (hostBindingOpCodes === null) {
      hostBindingOpCodes = tView.hostBindingOpCodes = [];
    }
    const elementIndx = ~tNode.index;
    if (lastSelectedElementIdx(hostBindingOpCodes) != elementIndx) {
      // Conditionally add select element so that we are more efficient in execution.
      // NOTE: this is strictly not necessary and it trades code size for runtime perf.
      // (We could just always add it.)
      hostBindingOpCodes.push(elementIndx);
    }
    hostBindingOpCodes.push(directiveIdx, directiveVarsIdx, hostBindings);
  }
}
/**
 * Returns the last selected element index in the `HostBindingOpCodes`
 *
 * For perf reasons we don't need to update the selected element index in `HostBindingOpCodes` only
 * if it changes. This method returns the last index (or '0' if not found.)
 *
 * Selected element index are only the ones which are negative.
 */
function lastSelectedElementIdx(hostBindingOpCodes) {
  let i = hostBindingOpCodes.length;
  while (i > 0) {
    const value = hostBindingOpCodes[--i];
    if (typeof value === 'number' && value < 0) {
      return value;
    }
  }
  return 0;
}
/**
 * Instantiate all the directives that were previously resolved on the current node.
 */
function instantiateAllDirectives(tView, lView, tNode, native) {
  const start = tNode.directiveStart;
  const end = tNode.directiveEnd;
  // The component view needs to be created before creating the node injector
  // since it is used to inject some special symbols like `ChangeDetectorRef`.
  if (isComponentHost(tNode)) {
    ngDevMode && assertTNodeType(tNode, 3 /* TNodeType.AnyRNode */);
    addComponentLogic(lView, tNode, tView.data[start + tNode.componentOffset]);
  }
  if (!tView.firstCreatePass) {
    getOrCreateNodeInjectorForNode(tNode, lView);
  }
  attachPatchData(native, lView);
  const initialInputs = tNode.initialInputs;
  for (let i = start; i < end; i++) {
    const def = tView.data[i];
    const directive = getNodeInjectable(lView, tView, i, tNode);
    attachPatchData(directive, lView);
    if (initialInputs !== null) {
      setInputsFromAttrs(lView, i - start, directive, def, tNode, initialInputs);
    }
    if (isComponentDef(def)) {
      const componentView = getComponentLViewByIndex(tNode.index, lView);
      componentView[CONTEXT] = getNodeInjectable(lView, tView, i, tNode);
    }
  }
}
function invokeDirectivesHostBindings(tView, lView, tNode) {
  const start = tNode.directiveStart;
  const end = tNode.directiveEnd;
  const elementIndex = tNode.index;
  const currentDirectiveIndex = getCurrentDirectiveIndex();
  try {
    setSelectedIndex(elementIndex);
    for (let dirIndex = start; dirIndex < end; dirIndex++) {
      const def = tView.data[dirIndex];
      const directive = lView[dirIndex];
      setCurrentDirectiveIndex(dirIndex);
      if (def.hostBindings !== null || def.hostVars !== 0 || def.hostAttrs !== null) {
        invokeHostBindingsInCreationMode(def, directive);
      }
    }
  } finally {
    setSelectedIndex(-1);
    setCurrentDirectiveIndex(currentDirectiveIndex);
  }
}
/**
 * Invoke the host bindings in creation mode.
 *
 * @param def `DirectiveDef` which may contain the `hostBindings` function.
 * @param directive Instance of directive.
 */
function invokeHostBindingsInCreationMode(def, directive) {
  if (def.hostBindings !== null) {
    def.hostBindings(1 /* RenderFlags.Create */, directive);
  }
}
/**
 * Matches the current node against all available selectors.
 * If a component is matched (at most one), it is returned in first position in the array.
 */
function findDirectiveDefMatches(tView, tNode) {
  ngDevMode && assertFirstCreatePass(tView);
  ngDevMode && assertTNodeType(tNode, 3 /* TNodeType.AnyRNode */ | 12 /* TNodeType.AnyContainer */);
  const registry = tView.directiveRegistry;
  let matches = null;
  let hostDirectiveDefs = null;
  if (registry) {
    for (let i = 0; i < registry.length; i++) {
      const def = registry[i];
      if (isNodeMatchingSelectorList(tNode, def.selectors, /* isProjectionMode */false)) {
        matches || (matches = []);
        if (isComponentDef(def)) {
          if (ngDevMode) {
            assertTNodeType(tNode, 2 /* TNodeType.Element */, `"${tNode.value}" tags cannot be used as component hosts. ` + `Please use a different tag to activate the ${stringify(def.type)} component.`);
            if (isComponentHost(tNode)) {
              throwMultipleComponentError(tNode, matches.find(isComponentDef).type, def.type);
            }
          }
          // Components are inserted at the front of the matches array so that their lifecycle
          // hooks run before any directive lifecycle hooks. This appears to be for ViewEngine
          // compatibility. This logic doesn't make sense with host directives, because it
          // would allow the host directives to undo any overrides the host may have made.
          // To handle this case, the host directives of components are inserted at the beginning
          // of the array, followed by the component. As such, the insertion order is as follows:
          // 1. Host directives belonging to the selector-matched component.
          // 2. Selector-matched component.
          // 3. Host directives belonging to selector-matched directives.
          // 4. Selector-matched directives.
          if (def.findHostDirectiveDefs !== null) {
            const hostDirectiveMatches = [];
            hostDirectiveDefs = hostDirectiveDefs || new Map();
            def.findHostDirectiveDefs(def, hostDirectiveMatches, hostDirectiveDefs);
            // Add all host directives declared on this component, followed by the component itself.
            // Host directives should execute first so the host has a chance to override changes
            // to the DOM made by them.
            matches.unshift(...hostDirectiveMatches, def);
            // Component is offset starting from the beginning of the host directives array.
            const componentOffset = hostDirectiveMatches.length;
            markAsComponentHost(tView, tNode, componentOffset);
          } else {
            // No host directives on this component, just add the
            // component def to the beginning of the matches.
            matches.unshift(def);
            markAsComponentHost(tView, tNode, 0);
          }
        } else {
          // Append any host directives to the matches first.
          hostDirectiveDefs = hostDirectiveDefs || new Map();
          def.findHostDirectiveDefs?.(def, matches, hostDirectiveDefs);
          matches.push(def);
        }
      }
    }
  }
  return matches === null ? null : [matches, hostDirectiveDefs];
}
/**
 * Marks a given TNode as a component's host. This consists of:
 * - setting the component offset on the TNode.
 * - storing index of component's host element so it will be queued for view refresh during CD.
 */
function markAsComponentHost(tView, hostTNode, componentOffset) {
  ngDevMode && assertFirstCreatePass(tView);
  ngDevMode && assertGreaterThan(componentOffset, -1, 'componentOffset must be great than -1');
  hostTNode.componentOffset = componentOffset;
  (tView.components ??= []).push(hostTNode.index);
}
/** Caches local names and their matching directive indices for query and template lookups. */
function cacheMatchingLocalNames(tNode, localRefs, exportsMap) {
  if (localRefs) {
    const localNames = tNode.localNames = [];
    // Local names must be stored in tNode in the same order that localRefs are defined
    // in the template to ensure the data is loaded in the same slots as their refs
    // in the template (for template queries).
    for (let i = 0; i < localRefs.length; i += 2) {
      const index = exportsMap[localRefs[i + 1]];
      if (index == null) throw new RuntimeError(-301 /* RuntimeErrorCode.EXPORT_NOT_FOUND */, ngDevMode && `Export of name '${localRefs[i + 1]}' not found!`);
      localNames.push(localRefs[i], index);
    }
  }
}
/**
 * Builds up an export map as directives are created, so local refs can be quickly mapped
 * to their directive instances.
 */
function saveNameToExportMap(directiveIdx, def, exportsMap) {
  if (exportsMap) {
    if (def.exportAs) {
      for (let i = 0; i < def.exportAs.length; i++) {
        exportsMap[def.exportAs[i]] = directiveIdx;
      }
    }
    if (isComponentDef(def)) exportsMap[''] = directiveIdx;
  }
}
/**
 * Initializes the flags on the current node, setting all indices to the initial index,
 * the directive count to 0, and adding the isComponent flag.
 * @param index the initial index
 */
function initTNodeFlags(tNode, index, numberOfDirectives) {
  ngDevMode && assertNotEqual(numberOfDirectives, tNode.directiveEnd - tNode.directiveStart, 'Reached the max number of directives');
  tNode.flags |= 1 /* TNodeFlags.isDirectiveHost */;
  // When the first directive is created on a node, save the index
  tNode.directiveStart = index;
  tNode.directiveEnd = index + numberOfDirectives;
  tNode.providerIndexes = index;
}
/**
 * Setup directive for instantiation.
 *
 * We need to create a `NodeInjectorFactory` which is then inserted in both the `Blueprint` as well
 * as `LView`. `TView` gets the `DirectiveDef`.
 *
 * @param tView `TView`
 * @param tNode `TNode`
 * @param lView `LView`
 * @param directiveIndex Index where the directive will be stored in the Expando.
 * @param def `DirectiveDef`
 */
function configureViewWithDirective(tView, tNode, lView, directiveIndex, def) {
  ngDevMode && assertGreaterThanOrEqual(directiveIndex, HEADER_OFFSET, 'Must be in Expando section');
  tView.data[directiveIndex] = def;
  const directiveFactory = def.factory || (def.factory = getFactoryDef(def.type, true));
  // Even though `directiveFactory` will already be using `ɵɵdirectiveInject` in its generated code,
  // we also want to support `inject()` directly from the directive constructor context so we set
  // `ɵɵdirectiveInject` as the inject implementation here too.
  const nodeInjectorFactory = new NodeInjectorFactory(directiveFactory, isComponentDef(def), ɵɵdirectiveInject);
  tView.blueprint[directiveIndex] = nodeInjectorFactory;
  lView[directiveIndex] = nodeInjectorFactory;
  registerHostBindingOpCodes(tView, tNode, directiveIndex, allocExpando(tView, lView, def.hostVars, NO_CHANGE), def);
}
function addComponentLogic(lView, hostTNode, def) {
  const native = getNativeByTNode(hostTNode, lView);
  const tView = getOrCreateComponentTView(def);
  // Only component views should be added to the view tree directly. Embedded views are
  // accessed through their containers because they may be removed / re-added later.
  const rendererFactory = lView[ENVIRONMENT].rendererFactory;
  let lViewFlags = 16 /* LViewFlags.CheckAlways */;
  if (def.signals) {
    lViewFlags = 4096 /* LViewFlags.SignalView */;
  } else if (def.onPush) {
    lViewFlags = 64 /* LViewFlags.Dirty */;
  }

  const componentView = addToViewTree(lView, createLView(lView, tView, null, lViewFlags, native, hostTNode, null, rendererFactory.createRenderer(native, def), null, null, null));
  // Component view will always be created before any injected LContainers,
  // so this is a regular element, wrap it with the component view
  lView[hostTNode.index] = componentView;
}
/**
 * Sets initial input properties on directive instances from attribute data
 *
 * @param lView Current LView that is being processed.
 * @param directiveIndex Index of the directive in directives array
 * @param instance Instance of the directive on which to set the initial inputs
 * @param def The directive def that contains the list of inputs
 * @param tNode The static data for this node
 */
function setInputsFromAttrs(lView, directiveIndex, instance, def, tNode, initialInputData) {
  const initialInputs = initialInputData[directiveIndex];
  if (initialInputs !== null) {
    for (let i = 0; i < initialInputs.length;) {
      const publicName = initialInputs[i++];
      const privateName = initialInputs[i++];
      const value = initialInputs[i++];
      writeToDirectiveInput(def, instance, publicName, privateName, value);
      if (ngDevMode) {
        const nativeElement = getNativeByTNode(tNode, lView);
        setNgReflectProperty(lView, nativeElement, tNode.type, privateName, value);
      }
    }
  }
}
function writeToDirectiveInput(def, instance, publicName, privateName, value) {
  const prevConsumer = setActiveConsumer(null);
  try {
    const inputTransforms = def.inputTransforms;
    if (inputTransforms !== null && inputTransforms.hasOwnProperty(privateName)) {
      value = inputTransforms[privateName].call(instance, value);
    }
    if (def.setInput !== null) {
      def.setInput(instance, value, publicName, privateName);
    } else {
      instance[privateName] = value;
    }
  } finally {
    setActiveConsumer(prevConsumer);
  }
}
/**
 * Generates initialInputData for a node and stores it in the template's static storage
 * so subsequent template invocations don't have to recalculate it.
 *
 * initialInputData is an array containing values that need to be set as input properties
 * for directives on this node, but only once on creation. We need this array to support
 * the case where you set an @Input property of a directive using attribute-like syntax.
 * e.g. if you have a `name` @Input, you can set it once like this:
 *
 * <my-component name="Bess"></my-component>
 *
 * @param inputs Input alias map that was generated from the directive def inputs.
 * @param directiveIndex Index of the directive that is currently being processed.
 * @param attrs Static attrs on this node.
 */
function generateInitialInputs(inputs, directiveIndex, attrs) {
  let inputsToStore = null;
  let i = 0;
  while (i < attrs.length) {
    const attrName = attrs[i];
    if (attrName === 0 /* AttributeMarker.NamespaceURI */) {
      // We do not allow inputs on namespaced attributes.
      i += 4;
      continue;
    } else if (attrName === 5 /* AttributeMarker.ProjectAs */) {
      // Skip over the `ngProjectAs` value.
      i += 2;
      continue;
    }
    // If we hit any other attribute markers, we're done anyway. None of those are valid inputs.
    if (typeof attrName === 'number') break;
    if (inputs.hasOwnProperty(attrName)) {
      if (inputsToStore === null) inputsToStore = [];
      // Find the input's public name from the input store. Note that we can be found easier
      // through the directive def, but we want to do it using the inputs store so that it can
      // account for host directive aliases.
      const inputConfig = inputs[attrName];
      for (let j = 0; j < inputConfig.length; j += 2) {
        if (inputConfig[j] === directiveIndex) {
          inputsToStore.push(attrName, inputConfig[j + 1], attrs[i + 1]);
          // A directive can't have multiple inputs with the same name so we can break here.
          break;
        }
      }
    }
    i += 2;
  }
  return inputsToStore;
}
//////////////////////////
//// ViewContainer & View
//////////////////////////
/**
 * Creates a LContainer, either from a container instruction, or for a ViewContainerRef.
 *
 * @param hostNative The host element for the LContainer
 * @param hostTNode The host TNode for the LContainer
 * @param currentView The parent view of the LContainer
 * @param native The native comment element
 * @param isForViewContainerRef Optional a flag indicating the ViewContainerRef case
 * @returns LContainer
 */
function createLContainer(hostNative, currentView, native, tNode) {
  ngDevMode && assertLView(currentView);
  const lContainer = [hostNative, true, false, currentView, null, 0, tNode, native, null, null, null // dehydrated views
  ];

  ngDevMode && assertEqual(lContainer.length, CONTAINER_HEADER_OFFSET, 'Should allocate correct number of slots for LContainer header.');
  return lContainer;
}
/** Refreshes all content queries declared by directives in a given view */
function refreshContentQueries(tView, lView) {
  const contentQueries = tView.contentQueries;
  if (contentQueries !== null) {
    for (let i = 0; i < contentQueries.length; i += 2) {
      const queryStartIdx = contentQueries[i];
      const directiveDefIdx = contentQueries[i + 1];
      if (directiveDefIdx !== -1) {
        const directiveDef = tView.data[directiveDefIdx];
        ngDevMode && assertDefined(directiveDef, 'DirectiveDef not found.');
        ngDevMode && assertDefined(directiveDef.contentQueries, 'contentQueries function should be defined');
        setCurrentQueryIndex(queryStartIdx);
        directiveDef.contentQueries(2 /* RenderFlags.Update */, lView[directiveDefIdx], directiveDefIdx);
      }
    }
  }
}
/**
 * Adds LView or LContainer to the end of the current view tree.
 *
 * This structure will be used to traverse through nested views to remove listeners
 * and call onDestroy callbacks.
 *
 * @param lView The view where LView or LContainer should be added
 * @param adjustedHostIndex Index of the view's host node in LView[], adjusted for header
 * @param lViewOrLContainer The LView or LContainer to add to the view tree
 * @returns The state passed in
 */
function addToViewTree(lView, lViewOrLContainer) {
  // TODO(benlesh/misko): This implementation is incorrect, because it always adds the LContainer
  // to the end of the queue, which means if the developer retrieves the LContainers from RNodes out
  // of order, the change detection will run out of order, as the act of retrieving the the
  // LContainer from the RNode is what adds it to the queue.
  if (lView[CHILD_HEAD]) {
    lView[CHILD_TAIL][NEXT] = lViewOrLContainer;
  } else {
    lView[CHILD_HEAD] = lViewOrLContainer;
  }
  lView[CHILD_TAIL] = lViewOrLContainer;
  return lViewOrLContainer;
}
///////////////////////////////
//// Change detection
///////////////////////////////
function executeViewQueryFn(flags, viewQueryFn, component) {
  ngDevMode && assertDefined(viewQueryFn, 'View queries function to execute must be defined.');
  setCurrentQueryIndex(0);
  const prevConsumer = setActiveConsumer(null);
  try {
    viewQueryFn(flags, component);
  } finally {
    setActiveConsumer(prevConsumer);
  }
}
///////////////////////////////
//// Bindings & interpolations
///////////////////////////////
/**
 * Stores meta-data for a property binding to be used by TestBed's `DebugElement.properties`.
 *
 * In order to support TestBed's `DebugElement.properties` we need to save, for each binding:
 * - a bound property name;
 * - a static parts of interpolated strings;
 *
 * A given property metadata is saved at the binding's index in the `TView.data` (in other words, a
 * property binding metadata will be stored in `TView.data` at the same index as a bound value in
 * `LView`). Metadata are represented as `INTERPOLATION_DELIMITER`-delimited string with the
 * following format:
 * - `propertyName` for bound properties;
 * - `propertyName�prefix�interpolation_static_part1�..interpolation_static_partN�suffix` for
 * interpolated properties.
 *
 * @param tData `TData` where meta-data will be saved;
 * @param tNode `TNode` that is a target of the binding;
 * @param propertyName bound property name;
 * @param bindingIndex binding index in `LView`
 * @param interpolationParts static interpolation parts (for property interpolations)
 */
function storePropertyBindingMetadata(tData, tNode, propertyName, bindingIndex, ...interpolationParts) {
  // Binding meta-data are stored only the first time a given property instruction is processed.
  // Since we don't have a concept of the "first update pass" we need to check for presence of the
  // binding meta-data to decide if one should be stored (or if was stored already).
  if (tData[bindingIndex] === null) {
    if (tNode.inputs == null || !tNode.inputs[propertyName]) {
      const propBindingIdxs = tNode.propertyBindings || (tNode.propertyBindings = []);
      propBindingIdxs.push(bindingIndex);
      let bindingMetadata = propertyName;
      if (interpolationParts.length > 0) {
        bindingMetadata += INTERPOLATION_DELIMITER + interpolationParts.join(INTERPOLATION_DELIMITER);
      }
      tData[bindingIndex] = bindingMetadata;
    }
  }
}
function getOrCreateLViewCleanup(view) {
  // top level variables should not be exported for performance reasons (PERF_NOTES.md)
  return view[CLEANUP] || (view[CLEANUP] = []);
}
function getOrCreateTViewCleanup(tView) {
  return tView.cleanup || (tView.cleanup = []);
}
/** Handles an error thrown in an LView. */
function handleError(lView, error) {
  const injector = lView[INJECTOR$1];
  const errorHandler = injector ? injector.get(ErrorHandler, null) : null;
  errorHandler && errorHandler.handleError(error);
}
/**
 * Set the inputs of directives at the current node to corresponding value.
 *
 * @param tView The current TView
 * @param lView the `LView` which contains the directives.
 * @param inputs mapping between the public "input" name and privately-known,
 *        possibly minified, property names to write to.
 * @param value Value to set.
 */
function setInputsForProperty(tView, lView, inputs, publicName, value) {
  for (let i = 0; i < inputs.length;) {
    const index = inputs[i++];
    const privateName = inputs[i++];
    const instance = lView[index];
    ngDevMode && assertIndexInRange(lView, index);
    const def = tView.data[index];
    writeToDirectiveInput(def, instance, publicName, privateName, value);
  }
}
/**
 * Updates a text binding at a given index in a given LView.
 */
function textBindingInternal(lView, index, value) {
  ngDevMode && assertString(value, 'Value should be a string');
  ngDevMode && assertNotSame(value, NO_CHANGE, 'value should not be NO_CHANGE');
  ngDevMode && assertIndexInRange(lView, index);
  const element = getNativeByIndex(index, lView);
  ngDevMode && assertDefined(element, 'native element should exist');
  updateTextNode(lView[RENDERER], element, value);
}
function renderComponent(hostLView, componentHostIdx) {
  ngDevMode && assertEqual(isCreationMode(hostLView), true, 'Should be run in creation mode');
  const componentView = getComponentLViewByIndex(componentHostIdx, hostLView);
  const componentTView = componentView[TVIEW];
  syncViewWithBlueprint(componentTView, componentView);
  const hostRNode = componentView[HOST];
  // Populate an LView with hydration info retrieved from the DOM via TransferState.
  if (hostRNode !== null && componentView[HYDRATION] === null) {
    componentView[HYDRATION] = retrieveHydrationInfo(hostRNode, componentView[INJECTOR$1]);
  }
  renderView(componentTView, componentView, componentView[CONTEXT]);
}
/**
 * Syncs an LView instance with its blueprint if they have gotten out of sync.
 *
 * Typically, blueprints and their view instances should always be in sync, so the loop here
 * will be skipped. However, consider this case of two components side-by-side:
 *
 * App template:
 * ```
 * <comp></comp>
 * <comp></comp>
 * ```
 *
 * The following will happen:
 * 1. App template begins processing.
 * 2. First <comp> is matched as a component and its LView is created.
 * 3. Second <comp> is matched as a component and its LView is created.
 * 4. App template completes processing, so it's time to check child templates.
 * 5. First <comp> template is checked. It has a directive, so its def is pushed to blueprint.
 * 6. Second <comp> template is checked. Its blueprint has been updated by the first
 * <comp> template, but its LView was created before this update, so it is out of sync.
 *
 * Note that embedded views inside ngFor loops will never be out of sync because these views
 * are processed as soon as they are created.
 *
 * @param tView The `TView` that contains the blueprint for syncing
 * @param lView The view to sync
 */
function syncViewWithBlueprint(tView, lView) {
  for (let i = lView.length; i < tView.blueprint.length; i++) {
    lView.push(tView.blueprint[i]);
  }
}
/**
 * Processes a view in the creation mode. This includes a number of steps in a specific order:
 * - creating view query functions (if any);
 * - executing a template function in the creation mode;
 * - updating static queries (if any);
 * - creating child components defined in a given view.
 */
function renderView(tView, lView, context) {
  ngDevMode && assertEqual(isCreationMode(lView), true, 'Should be run in creation mode');
  enterView(lView);
  try {
    const viewQuery = tView.viewQuery;
    if (viewQuery !== null) {
      executeViewQueryFn(1 /* RenderFlags.Create */, viewQuery, context);
    }
    // Execute a template associated with this view, if it exists. A template function might not be
    // defined for the root component views.
    const templateFn = tView.template;
    if (templateFn !== null) {
      executeTemplate(tView, lView, templateFn, 1 /* RenderFlags.Create */, context);
    }
    // This needs to be set before children are processed to support recursive components.
    // This must be set to false immediately after the first creation run because in an
    // ngFor loop, all the views will be created together before update mode runs and turns
    // off firstCreatePass. If we don't set it here, instances will perform directive
    // matching, etc again and again.
    if (tView.firstCreatePass) {
      tView.firstCreatePass = false;
    }
    // We resolve content queries specifically marked as `static` in creation mode. Dynamic
    // content queries are resolved during change detection (i.e. update mode), after embedded
    // views are refreshed (see block above).
    if (tView.staticContentQueries) {
      refreshContentQueries(tView, lView);
    }
    // We must materialize query results before child components are processed
    // in case a child component has projected a container. The LContainer needs
    // to exist so the embedded views are properly attached by the container.
    if (tView.staticViewQueries) {
      executeViewQueryFn(2 /* RenderFlags.Update */, tView.viewQuery, context);
    }
    // Render child component views.
    const components = tView.components;
    if (components !== null) {
      renderChildComponents(lView, components);
    }
  } catch (error) {
    // If we didn't manage to get past the first template pass due to
    // an error, mark the view as corrupted so we can try to recover.
    if (tView.firstCreatePass) {
      tView.incompleteFirstPass = true;
      tView.firstCreatePass = false;
    }
    throw error;
  } finally {
    lView[FLAGS] &= ~4 /* LViewFlags.CreationMode */;
    leaveView();
  }
}
/** Renders child components in the current view (creation mode). */
function renderChildComponents(hostLView, components) {
  for (let i = 0; i < components.length; i++) {
    renderComponent(hostLView, components[i]);
  }
}

/**
 * Tracks all effects registered within a given application and runs them via `flush`.
 */
let EffectManager = /*#__PURE__*/(() => {
  var _class9;
  class EffectManager {
    constructor() {
      this.all = new Set();
      this.queue = new Map();
    }
    create(effectFn, destroyRef, allowSignalWrites) {
      const zone = typeof Zone === 'undefined' ? null : Zone.current;
      const watch = new Watch(effectFn, watch => {
        if (!this.all.has(watch)) {
          return;
        }
        this.queue.set(watch, zone);
      }, allowSignalWrites);
      this.all.add(watch);
      // Effects start dirty.
      watch.notify();
      let unregisterOnDestroy;
      const destroy = () => {
        watch.cleanup();
        unregisterOnDestroy?.();
        this.all.delete(watch);
        this.queue.delete(watch);
      };
      unregisterOnDestroy = destroyRef?.onDestroy(destroy);
      return {
        destroy
      };
    }
    flush() {
      if (this.queue.size === 0) {
        return;
      }
      for (const [watch, zone] of this.queue) {
        this.queue.delete(watch);
        if (zone) {
          zone.run(() => watch.run());
        } else {
          watch.run();
        }
      }
    }
    get isQueueEmpty() {
      return this.queue.size === 0;
    }
    /** @nocollapse */
  }

  _class9 = EffectManager;
  _class9.ɵprov = ɵɵdefineInjectable({
    token: _class9,
    providedIn: 'root',
    factory: () => new _class9()
  });
  return EffectManager;
})();

/**
 * Compute the static styling (class/style) from `TAttributes`.
 *
 * This function should be called during `firstCreatePass` only.
 *
 * @param tNode The `TNode` into which the styling information should be loaded.
 * @param attrs `TAttributes` containing the styling information.
 * @param writeToHost Where should the resulting static styles be written?
 *   - `false` Write to `TNode.stylesWithoutHost` / `TNode.classesWithoutHost`
 *   - `true` Write to `TNode.styles` / `TNode.classes`
 */
function computeStaticStyling(tNode, attrs, writeToHost) {
  ngDevMode && assertFirstCreatePass(getTView(), 'Expecting to be called in first template pass only');
  let styles = writeToHost ? tNode.styles : null;
  let classes = writeToHost ? tNode.classes : null;
  let mode = 0;
  if (attrs !== null) {
    for (let i = 0; i < attrs.length; i++) {
      const value = attrs[i];
      if (typeof value === 'number') {
        mode = value;
      } else if (mode == 1 /* AttributeMarker.Classes */) {
        classes = concatStringsWithSpace(classes, value);
      } else if (mode == 2 /* AttributeMarker.Styles */) {
        const style = value;
        const styleValue = attrs[++i];
        styles = concatStringsWithSpace(styles, style + ': ' + styleValue + ';');
      }
    }
  }
  writeToHost ? tNode.styles = styles : tNode.stylesWithoutHost = styles;
  writeToHost ? tNode.classes = classes : tNode.classesWithoutHost = classes;
}
function collectNativeNodes(tView, lView, tNode, result, isProjection = false) {
  while (tNode !== null) {
    ngDevMode && assertTNodeType(tNode, 3 /* TNodeType.AnyRNode */ | 12 /* TNodeType.AnyContainer */ | 16 /* TNodeType.Projection */ | 32 /* TNodeType.Icu */);
    const lNode = lView[tNode.index];
    if (lNode !== null) {
      result.push(unwrapRNode(lNode));
    }
    // A given lNode can represent either a native node or a LContainer (when it is a host of a
    // ViewContainerRef). When we find a LContainer we need to descend into it to collect root nodes
    // from the views in this container.
    if (isLContainer(lNode)) {
      for (let i = CONTAINER_HEADER_OFFSET; i < lNode.length; i++) {
        const lViewInAContainer = lNode[i];
        const lViewFirstChildTNode = lViewInAContainer[TVIEW].firstChild;
        if (lViewFirstChildTNode !== null) {
          collectNativeNodes(lViewInAContainer[TVIEW], lViewInAContainer, lViewFirstChildTNode, result);
        }
      }
      // When an LContainer is created, the anchor (comment) node is:
      // - (1) either reused in case of an ElementContainer (<ng-container>)
      // - (2) or a new comment node is created
      // In the first case, the anchor comment node would be added to the final
      // list by the code above (`result.push(unwrapRNode(lNode))`), but the second
      // case requires extra handling: the anchor node needs to be added to the
      // final list manually. See additional information in the `createAnchorNode`
      // function in the `view_container_ref.ts`.
      //
      // In the first case, the same reference would be stored in the `NATIVE`
      // and `HOST` slots in an LContainer. Otherwise, this is the second case and
      // we should add an element to the final list.
      if (lNode[NATIVE] !== lNode[HOST]) {
        result.push(lNode[NATIVE]);
      }
    }
    const tNodeType = tNode.type;
    if (tNodeType & 8 /* TNodeType.ElementContainer */) {
      collectNativeNodes(tView, lView, tNode.child, result);
    } else if (tNodeType & 32 /* TNodeType.Icu */) {
      const nextRNode = icuContainerIterate(tNode, lView);
      let rNode;
      while (rNode = nextRNode()) {
        result.push(rNode);
      }
    } else if (tNodeType & 16 /* TNodeType.Projection */) {
      const nodesInSlot = getProjectionNodes(lView, tNode);
      if (Array.isArray(nodesInSlot)) {
        result.push(...nodesInSlot);
      } else {
        const parentView = getLViewParent(lView[DECLARATION_COMPONENT_VIEW]);
        ngDevMode && assertParentView(parentView);
        collectNativeNodes(parentView[TVIEW], parentView, nodesInSlot, result, true);
      }
    }
    tNode = isProjection ? tNode.projectionNext : tNode.next;
  }
  return result;
}
function detectChangesInternal(tView, lView, context, notifyErrorHandler = true) {
  const environment = lView[ENVIRONMENT];
  const rendererFactory = environment.rendererFactory;
  const afterRenderEventManager = environment.afterRenderEventManager;
  // Check no changes mode is a dev only mode used to verify that bindings have not changed
  // since they were assigned. We do not want to invoke renderer factory functions in that mode
  // to avoid any possible side-effects.
  const checkNoChangesMode = !!ngDevMode && isInCheckNoChangesMode();
  if (!checkNoChangesMode) {
    rendererFactory.begin?.();
    afterRenderEventManager?.begin();
  }
  try {
    refreshView(tView, lView, tView.template, context);
  } catch (error) {
    if (notifyErrorHandler) {
      handleError(lView, error);
    }
    throw error;
  } finally {
    if (!checkNoChangesMode) {
      rendererFactory.end?.();
      // One final flush of the effects queue to catch any effects created in `ngAfterViewInit` or
      // other post-order hooks.
      environment.effectManager?.flush();
      // Invoke all callbacks registered via `after*Render`, if needed.
      afterRenderEventManager?.end();
    }
  }
}
function checkNoChangesInternal(tView, lView, context, notifyErrorHandler = true) {
  setIsInCheckNoChangesMode(true);
  try {
    detectChangesInternal(tView, lView, context, notifyErrorHandler);
  } finally {
    setIsInCheckNoChangesMode(false);
  }
}
/**
 * Synchronously perform change detection on a component (and possibly its sub-components).
 *
 * This function triggers change detection in a synchronous way on a component.
 *
 * @param component The component which the change detection should be performed on.
 */
function detectChanges(component) {
  const view = getComponentViewByInstance(component);
  detectChangesInternal(view[TVIEW], view, component);
}
/**
 * Processes a view in update mode. This includes a number of steps in a specific order:
 * - executing a template function in update mode;
 * - executing hooks;
 * - refreshing queries;
 * - setting host bindings;
 * - refreshing child (embedded and component) views.
 */
function refreshView(tView, lView, templateFn, context) {
  ngDevMode && assertEqual(isCreationMode(lView), false, 'Should be run in update mode');
  const flags = lView[FLAGS];
  if ((flags & 256 /* LViewFlags.Destroyed */) === 256 /* LViewFlags.Destroyed */) return;
  // Check no changes mode is a dev only mode used to verify that bindings have not changed
  // since they were assigned. We do not want to execute lifecycle hooks in that mode.
  const isInCheckNoChangesPass = ngDevMode && isInCheckNoChangesMode();
  !isInCheckNoChangesPass && lView[ENVIRONMENT].effectManager?.flush();
  enterView(lView);
  try {
    resetPreOrderHookFlags(lView);
    setBindingIndex(tView.bindingStartIndex);
    if (templateFn !== null) {
      executeTemplate(tView, lView, templateFn, 2 /* RenderFlags.Update */, context);
    }
    const hooksInitPhaseCompleted = (flags & 3 /* LViewFlags.InitPhaseStateMask */) === 3 /* InitPhaseState.InitPhaseCompleted */;
    // execute pre-order hooks (OnInit, OnChanges, DoCheck)
    // PERF WARNING: do NOT extract this to a separate function without running benchmarks
    if (!isInCheckNoChangesPass) {
      if (hooksInitPhaseCompleted) {
        const preOrderCheckHooks = tView.preOrderCheckHooks;
        if (preOrderCheckHooks !== null) {
          executeCheckHooks(lView, preOrderCheckHooks, null);
        }
      } else {
        const preOrderHooks = tView.preOrderHooks;
        if (preOrderHooks !== null) {
          executeInitAndCheckHooks(lView, preOrderHooks, 0 /* InitPhaseState.OnInitHooksToBeRun */, null);
        }
        incrementInitPhaseFlags(lView, 0 /* InitPhaseState.OnInitHooksToBeRun */);
      }
    }
    // First mark transplanted views that are declared in this lView as needing a refresh at their
    // insertion points. This is needed to avoid the situation where the template is defined in this
    // `LView` but its declaration appears after the insertion component.
    markTransplantedViewsForRefresh(lView);
    detectChangesInEmbeddedViews(lView, 2 /* ChangeDetectionMode.BugToForceRefreshAndIgnoreViewFlags */);
    // Content query results must be refreshed before content hooks are called.
    if (tView.contentQueries !== null) {
      refreshContentQueries(tView, lView);
    }
    // execute content hooks (AfterContentInit, AfterContentChecked)
    // PERF WARNING: do NOT extract this to a separate function without running benchmarks
    if (!isInCheckNoChangesPass) {
      if (hooksInitPhaseCompleted) {
        const contentCheckHooks = tView.contentCheckHooks;
        if (contentCheckHooks !== null) {
          executeCheckHooks(lView, contentCheckHooks);
        }
      } else {
        const contentHooks = tView.contentHooks;
        if (contentHooks !== null) {
          executeInitAndCheckHooks(lView, contentHooks, 1 /* InitPhaseState.AfterContentInitHooksToBeRun */);
        }

        incrementInitPhaseFlags(lView, 1 /* InitPhaseState.AfterContentInitHooksToBeRun */);
      }
    }

    processHostBindingOpCodes(tView, lView);
    // Refresh child component views.
    const components = tView.components;
    if (components !== null) {
      detectChangesInChildComponents(lView, components, 0 /* ChangeDetectionMode.Global */);
    }
    // View queries must execute after refreshing child components because a template in this view
    // could be inserted in a child component. If the view query executes before child component
    // refresh, the template might not yet be inserted.
    const viewQuery = tView.viewQuery;
    if (viewQuery !== null) {
      executeViewQueryFn(2 /* RenderFlags.Update */, viewQuery, context);
    }
    // execute view hooks (AfterViewInit, AfterViewChecked)
    // PERF WARNING: do NOT extract this to a separate function without running benchmarks
    if (!isInCheckNoChangesPass) {
      if (hooksInitPhaseCompleted) {
        const viewCheckHooks = tView.viewCheckHooks;
        if (viewCheckHooks !== null) {
          executeCheckHooks(lView, viewCheckHooks);
        }
      } else {
        const viewHooks = tView.viewHooks;
        if (viewHooks !== null) {
          executeInitAndCheckHooks(lView, viewHooks, 2 /* InitPhaseState.AfterViewInitHooksToBeRun */);
        }

        incrementInitPhaseFlags(lView, 2 /* InitPhaseState.AfterViewInitHooksToBeRun */);
      }
    }

    if (tView.firstUpdatePass === true) {
      // We need to make sure that we only flip the flag on successful `refreshView` only
      // Don't do this in `finally` block.
      // If we did this in `finally` block then an exception could block the execution of styling
      // instructions which in turn would be unable to insert themselves into the styling linked
      // list. The result of this would be that if the exception would not be throw on subsequent CD
      // the styling would be unable to process it data and reflect to the DOM.
      tView.firstUpdatePass = false;
    }
    // Do not reset the dirty state when running in check no changes mode. We don't want components
    // to behave differently depending on whether check no changes is enabled or not. For example:
    // Marking an OnPush component as dirty from within the `ngAfterViewInit` hook in order to
    // refresh a `NgClass` binding should work. If we would reset the dirty state in the check
    // no changes cycle, the component would be not be dirty for the next update pass. This would
    // be different in production mode where the component dirty state is not reset.
    if (!isInCheckNoChangesPass) {
      lView[FLAGS] &= ~(64 /* LViewFlags.Dirty */ | 8 /* LViewFlags.FirstLViewPass */);
    }

    clearViewRefreshFlag(lView);
  } finally {
    leaveView();
  }
}
/**
 * Goes over embedded views (ones created through ViewContainerRef APIs) and refreshes
 * them by executing an associated template function.
 */
function detectChangesInEmbeddedViews(lView, mode) {
  for (let lContainer = getFirstLContainer(lView); lContainer !== null; lContainer = getNextLContainer(lContainer)) {
    for (let i = CONTAINER_HEADER_OFFSET; i < lContainer.length; i++) {
      const embeddedLView = lContainer[i];
      detectChangesInView(embeddedLView, mode);
    }
  }
}
/**
 * Mark transplanted views as needing to be refreshed at their insertion points.
 *
 * @param lView The `LView` that may have transplanted views.
 */
function markTransplantedViewsForRefresh(lView) {
  for (let lContainer = getFirstLContainer(lView); lContainer !== null; lContainer = getNextLContainer(lContainer)) {
    if (!lContainer[HAS_TRANSPLANTED_VIEWS]) continue;
    const movedViews = lContainer[MOVED_VIEWS];
    ngDevMode && assertDefined(movedViews, 'Transplanted View flags set but missing MOVED_VIEWS');
    for (let i = 0; i < movedViews.length; i++) {
      const movedLView = movedViews[i];
      const insertionLContainer = movedLView[PARENT];
      ngDevMode && assertLContainer(insertionLContainer);
      markViewForRefresh(movedLView);
    }
  }
}
/**
 * Detects changes in a component by entering the component view and processing its bindings,
 * queries, etc. if it is CheckAlways, OnPush and Dirty, etc.
 *
 * @param componentHostIdx  Element index in LView[] (adjusted for HEADER_OFFSET)
 */
function detectChangesInComponent(hostLView, componentHostIdx, mode) {
  ngDevMode && assertEqual(isCreationMode(hostLView), false, 'Should be run in update mode');
  const componentView = getComponentLViewByIndex(componentHostIdx, hostLView);
  detectChangesInView(componentView, mode);
}
/**
 * Visits a view as part of change detection traversal.
 *
 * - If the view is detached, no additional traversal happens.
 *
 * The view is refreshed if:
 * - If the view is CheckAlways or Dirty and ChangeDetectionMode is `Global`
 * - If the view has the `RefreshTransplantedView` flag
 *
 * The view is not refreshed, but descendants are traversed in `ChangeDetectionMode.Targeted` if the
 * view has a non-zero TRANSPLANTED_VIEWS_TO_REFRESH counter.
 *
 */
function detectChangesInView(lView, mode) {
  if (!viewAttachedToChangeDetector(lView)) {
    return;
  }
  const tView = lView[TVIEW];
  if (lView[FLAGS] & (16 /* LViewFlags.CheckAlways */ | 64 /* LViewFlags.Dirty */) && mode === 0 /* ChangeDetectionMode.Global */ || lView[FLAGS] & 1024 /* LViewFlags.RefreshView */ || mode === 2 /* ChangeDetectionMode.BugToForceRefreshAndIgnoreViewFlags */) {
    refreshView(tView, lView, tView.template, lView[CONTEXT]);
  } else if (lView[DESCENDANT_VIEWS_TO_REFRESH] > 0) {
    detectChangesInEmbeddedViews(lView, 1 /* ChangeDetectionMode.Targeted */);
    const tView = lView[TVIEW];
    const components = tView.components;
    if (components !== null) {
      detectChangesInChildComponents(lView, components, 1 /* ChangeDetectionMode.Targeted */);
    }
  }
}
/** Refreshes child components in the current view (update mode). */
function detectChangesInChildComponents(hostLView, components, mode) {
  for (let i = 0; i < components.length; i++) {
    detectChangesInComponent(hostLView, components[i], mode);
  }
}
class ViewRef$1 {
  get rootNodes() {
    const lView = this._lView;
    const tView = lView[TVIEW];
    return collectNativeNodes(tView, lView, tView.firstChild, []);
  }
  constructor(
  /**
   * This represents `LView` associated with the component when ViewRef is a ChangeDetectorRef.
   *
   * When ViewRef is created for a dynamic component, this also represents the `LView` for the
   * component.
   *
   * For a "regular" ViewRef created for an embedded view, this is the `LView` for the embedded
   * view.
   *
   * @internal
   */
  _lView,
  /**
   * This represents the `LView` associated with the point where `ChangeDetectorRef` was
   * requested.
   *
   * This may be different from `_lView` if the `_cdRefInjectingView` is an embedded view.
   */
  _cdRefInjectingView) {
    this._lView = _lView;
    this._cdRefInjectingView = _cdRefInjectingView;
    this._appRef = null;
    this._attachedToViewContainer = false;
  }
  get context() {
    return this._lView[CONTEXT];
  }
  set context(value) {
    this._lView[CONTEXT] = value;
  }
  get destroyed() {
    return (this._lView[FLAGS] & 256 /* LViewFlags.Destroyed */) === 256 /* LViewFlags.Destroyed */;
  }

  destroy() {
    if (this._appRef) {
      this._appRef.detachView(this);
    } else if (this._attachedToViewContainer) {
      const parent = this._lView[PARENT];
      if (isLContainer(parent)) {
        const viewRefs = parent[VIEW_REFS];
        const index = viewRefs ? viewRefs.indexOf(this) : -1;
        if (index > -1) {
          ngDevMode && assertEqual(index, parent.indexOf(this._lView) - CONTAINER_HEADER_OFFSET, 'An attached view should be in the same position within its container as its ViewRef in the VIEW_REFS array.');
          detachView(parent, index);
          removeFromArray(viewRefs, index);
        }
      }
      this._attachedToViewContainer = false;
    }
    destroyLView(this._lView[TVIEW], this._lView);
  }
  onDestroy(callback) {
    storeLViewOnDestroy(this._lView, callback);
  }
  /**
   * Marks a view and all of its ancestors dirty.
   *
   * This can be used to ensure an {@link ChangeDetectionStrategy#OnPush} component is
   * checked when it needs to be re-rendered but the two normal triggers haven't marked it
   * dirty (i.e. inputs haven't changed and events haven't fired in the view).
   *
   * <!-- TODO: Add a link to a chapter on OnPush components -->
   *
   * @usageNotes
   * ### Example
   *
   * ```typescript
   * @Component({
   *   selector: 'app-root',
   *   template: `Number of ticks: {{numberOfTicks}}`
   *   changeDetection: ChangeDetectionStrategy.OnPush,
   * })
   * class AppComponent {
   *   numberOfTicks = 0;
   *
   *   constructor(private ref: ChangeDetectorRef) {
   *     setInterval(() => {
   *       this.numberOfTicks++;
   *       // the following is required, otherwise the view will not be updated
   *       this.ref.markForCheck();
   *     }, 1000);
   *   }
   * }
   * ```
   */
  markForCheck() {
    markViewDirty(this._cdRefInjectingView || this._lView);
  }
  /**
   * Detaches the view from the change detection tree.
   *
   * Detached views will not be checked during change detection runs until they are
   * re-attached, even if they are dirty. `detach` can be used in combination with
   * {@link ChangeDetectorRef#detectChanges} to implement local change
   * detection checks.
   *
   * <!-- TODO: Add a link to a chapter on detach/reattach/local digest -->
   * <!-- TODO: Add a live demo once ref.detectChanges is merged into master -->
   *
   * @usageNotes
   * ### Example
   *
   * The following example defines a component with a large list of readonly data.
   * Imagine the data changes constantly, many times per second. For performance reasons,
   * we want to check and update the list every five seconds. We can do that by detaching
   * the component's change detector and doing a local check every five seconds.
   *
   * ```typescript
   * class DataProvider {
   *   // in a real application the returned data will be different every time
   *   get data() {
   *     return [1,2,3,4,5];
   *   }
   * }
   *
   * @Component({
   *   selector: 'giant-list',
   *   template: `
   *     <li *ngFor="let d of dataProvider.data">Data {{d}}</li>
   *   `,
   * })
   * class GiantList {
   *   constructor(private ref: ChangeDetectorRef, private dataProvider: DataProvider) {
   *     ref.detach();
   *     setInterval(() => {
   *       this.ref.detectChanges();
   *     }, 5000);
   *   }
   * }
   *
   * @Component({
   *   selector: 'app',
   *   providers: [DataProvider],
   *   template: `
   *     <giant-list><giant-list>
   *   `,
   * })
   * class App {
   * }
   * ```
   */
  detach() {
    this._lView[FLAGS] &= ~128 /* LViewFlags.Attached */;
  }
  /**
   * Re-attaches a view to the change detection tree.
   *
   * This can be used to re-attach views that were previously detached from the tree
   * using {@link ChangeDetectorRef#detach}. Views are attached to the tree by default.
   *
   * <!-- TODO: Add a link to a chapter on detach/reattach/local digest -->
   *
   * @usageNotes
   * ### Example
   *
   * The following example creates a component displaying `live` data. The component will detach
   * its change detector from the main change detector tree when the component's live property
   * is set to false.
   *
   * ```typescript
   * class DataProvider {
   *   data = 1;
   *
   *   constructor() {
   *     setInterval(() => {
   *       this.data = this.data * 2;
   *     }, 500);
   *   }
   * }
   *
   * @Component({
   *   selector: 'live-data',
   *   inputs: ['live'],
   *   template: 'Data: {{dataProvider.data}}'
   * })
   * class LiveData {
   *   constructor(private ref: ChangeDetectorRef, private dataProvider: DataProvider) {}
   *
   *   set live(value) {
   *     if (value) {
   *       this.ref.reattach();
   *     } else {
   *       this.ref.detach();
   *     }
   *   }
   * }
   *
   * @Component({
   *   selector: 'app-root',
   *   providers: [DataProvider],
   *   template: `
   *     Live Update: <input type="checkbox" [(ngModel)]="live">
   *     <live-data [live]="live"><live-data>
   *   `,
   * })
   * class AppComponent {
   *   live = true;
   * }
   * ```
   */
  reattach() {
    this._lView[FLAGS] |= 128 /* LViewFlags.Attached */;
  }
  /**
   * Checks the view and its children.
   *
   * This can also be used in combination with {@link ChangeDetectorRef#detach} to implement
   * local change detection checks.
   *
   * <!-- TODO: Add a link to a chapter on detach/reattach/local digest -->
   * <!-- TODO: Add a live demo once ref.detectChanges is merged into master -->
   *
   * @usageNotes
   * ### Example
   *
   * The following example defines a component with a large list of readonly data.
   * Imagine, the data changes constantly, many times per second. For performance reasons,
   * we want to check and update the list every five seconds.
   *
   * We can do that by detaching the component's change detector and doing a local change detection
   * check every five seconds.
   *
   * See {@link ChangeDetectorRef#detach} for more information.
   */
  detectChanges() {
    detectChangesInternal(this._lView[TVIEW], this._lView, this.context);
  }
  /**
   * Checks the change detector and its children, and throws if any changes are detected.
   *
   * This is used in development mode to verify that running change detection doesn't
   * introduce other changes.
   */
  checkNoChanges() {
    if (ngDevMode) {
      checkNoChangesInternal(this._lView[TVIEW], this._lView, this.context);
    }
  }
  attachToViewContainerRef() {
    if (this._appRef) {
      throw new RuntimeError(902 /* RuntimeErrorCode.VIEW_ALREADY_ATTACHED */, ngDevMode && 'This view is already attached directly to the ApplicationRef!');
    }
    this._attachedToViewContainer = true;
  }
  detachFromAppRef() {
    this._appRef = null;
    detachViewFromDOM(this._lView[TVIEW], this._lView);
  }
  attachToAppRef(appRef) {
    if (this._attachedToViewContainer) {
      throw new RuntimeError(902 /* RuntimeErrorCode.VIEW_ALREADY_ATTACHED */, ngDevMode && 'This view is already attached to a ViewContainer!');
    }
    this._appRef = appRef;
  }
}
/** @internal */
class RootViewRef extends ViewRef$1 {
  constructor(_view) {
    super(_view);
    this._view = _view;
  }
  detectChanges() {
    const lView = this._view;
    const tView = lView[TVIEW];
    const context = lView[CONTEXT];
    detectChangesInternal(tView, lView, context, false);
  }
  checkNoChanges() {
    if (ngDevMode) {
      const lView = this._view;
      const tView = lView[TVIEW];
      const context = lView[CONTEXT];
      checkNoChangesInternal(tView, lView, context, false);
    }
  }
  get context() {
    return null;
  }
}
class ComponentFactoryResolver extends ComponentFactoryResolver$1 {
  /**
   * @param ngModule The NgModuleRef to which all resolved factories are bound.
   */
  constructor(ngModule) {
    super();
    this.ngModule = ngModule;
  }
  resolveComponentFactory(component) {
    ngDevMode && assertComponentType(component);
    const componentDef = getComponentDef(component);
    return new ComponentFactory(componentDef, this.ngModule);
  }
}
function toRefArray(map) {
  const array = [];
  for (let nonMinified in map) {
    if (map.hasOwnProperty(nonMinified)) {
      const minified = map[nonMinified];
      array.push({
        propName: minified,
        templateName: nonMinified
      });
    }
  }
  return array;
}
function getNamespace(elementName) {
  const name = elementName.toLowerCase();
  return name === 'svg' ? SVG_NAMESPACE : name === 'math' ? MATH_ML_NAMESPACE : null;
}
/**
 * Injector that looks up a value using a specific injector, before falling back to the module
 * injector. Used primarily when creating components or embedded views dynamically.
 */
class ChainedInjector {
  constructor(injector, parentInjector) {
    this.injector = injector;
    this.parentInjector = parentInjector;
  }
  get(token, notFoundValue, flags) {
    flags = convertToBitFlags(flags);
    const value = this.injector.get(token, NOT_FOUND_CHECK_ONLY_ELEMENT_INJECTOR, flags);
    if (value !== NOT_FOUND_CHECK_ONLY_ELEMENT_INJECTOR || notFoundValue === NOT_FOUND_CHECK_ONLY_ELEMENT_INJECTOR) {
      // Return the value from the root element injector when
      // - it provides it
      //   (value !== NOT_FOUND_CHECK_ONLY_ELEMENT_INJECTOR)
      // - the module injector should not be checked
      //   (notFoundValue === NOT_FOUND_CHECK_ONLY_ELEMENT_INJECTOR)
      return value;
    }
    return this.parentInjector.get(token, notFoundValue, flags);
  }
}
/**
 * ComponentFactory interface implementation.
 */
class ComponentFactory extends ComponentFactory$1 {
  get inputs() {
    const componentDef = this.componentDef;
    const inputTransforms = componentDef.inputTransforms;
    const refArray = toRefArray(componentDef.inputs);
    if (inputTransforms !== null) {
      for (const input of refArray) {
        if (inputTransforms.hasOwnProperty(input.propName)) {
          input.transform = inputTransforms[input.propName];
        }
      }
    }
    return refArray;
  }
  get outputs() {
    return toRefArray(this.componentDef.outputs);
  }
  /**
   * @param componentDef The component definition.
   * @param ngModule The NgModuleRef to which the factory is bound.
   */
  constructor(componentDef, ngModule) {
    super();
    this.componentDef = componentDef;
    this.ngModule = ngModule;
    this.componentType = componentDef.type;
    this.selector = stringifyCSSSelectorList(componentDef.selectors);
    this.ngContentSelectors = componentDef.ngContentSelectors ? componentDef.ngContentSelectors : [];
    this.isBoundToModule = !!ngModule;
  }
  create(injector, projectableNodes, rootSelectorOrNode, environmentInjector) {
    environmentInjector = environmentInjector || this.ngModule;
    let realEnvironmentInjector = environmentInjector instanceof EnvironmentInjector ? environmentInjector : environmentInjector?.injector;
    if (realEnvironmentInjector && this.componentDef.getStandaloneInjector !== null) {
      realEnvironmentInjector = this.componentDef.getStandaloneInjector(realEnvironmentInjector) || realEnvironmentInjector;
    }
    const rootViewInjector = realEnvironmentInjector ? new ChainedInjector(injector, realEnvironmentInjector) : injector;
    const rendererFactory = rootViewInjector.get(RendererFactory2, null);
    if (rendererFactory === null) {
      throw new RuntimeError(407 /* RuntimeErrorCode.RENDERER_NOT_FOUND */, ngDevMode && 'Angular was not able to inject a renderer (RendererFactory2). ' + 'Likely this is due to a broken DI hierarchy. ' + 'Make sure that any injector used to create this component has a correct parent.');
    }
    const sanitizer = rootViewInjector.get(Sanitizer, null);
    const effectManager = rootViewInjector.get(EffectManager, null);
    const afterRenderEventManager = rootViewInjector.get(AfterRenderEventManager, null);
    const environment = {
      rendererFactory,
      sanitizer,
      effectManager,
      afterRenderEventManager
    };
    const hostRenderer = rendererFactory.createRenderer(null, this.componentDef);
    // Determine a tag name used for creating host elements when this component is created
    // dynamically. Default to 'div' if this component did not specify any tag name in its selector.
    const elementName = this.componentDef.selectors[0][0] || 'div';
    const hostRNode = rootSelectorOrNode ? locateHostElement(hostRenderer, rootSelectorOrNode, this.componentDef.encapsulation, rootViewInjector) : createElementNode(hostRenderer, elementName, getNamespace(elementName));
    // Signal components use the granular "RefreshView"  for change detection
    const signalFlags = 4096 /* LViewFlags.SignalView */ | 512 /* LViewFlags.IsRoot */;
    // Non-signal components use the traditional "CheckAlways or OnPush/Dirty" change detection
    const nonSignalFlags = this.componentDef.onPush ? 64 /* LViewFlags.Dirty */ | 512 /* LViewFlags.IsRoot */ : 16 /* LViewFlags.CheckAlways */ | 512 /* LViewFlags.IsRoot */;
    const rootFlags = this.componentDef.signals ? signalFlags : nonSignalFlags;
    let hydrationInfo = null;
    if (hostRNode !== null) {
      hydrationInfo = retrieveHydrationInfo(hostRNode, rootViewInjector, true /* isRootView */);
    }
    // Create the root view. Uses empty TView and ContentTemplate.
    const rootTView = createTView(0 /* TViewType.Root */, null, null, 1, 0, null, null, null, null, null, null);
    const rootLView = createLView(null, rootTView, null, rootFlags, null, null, environment, hostRenderer, rootViewInjector, null, hydrationInfo);
    // rootView is the parent when bootstrapping
    // TODO(misko): it looks like we are entering view here but we don't really need to as
    // `renderView` does that. However as the code is written it is needed because
    // `createRootComponentView` and `createRootComponent` both read global state. Fixing those
    // issues would allow us to drop this.
    enterView(rootLView);
    let component;
    let tElementNode;
    try {
      const rootComponentDef = this.componentDef;
      let rootDirectives;
      let hostDirectiveDefs = null;
      if (rootComponentDef.findHostDirectiveDefs) {
        rootDirectives = [];
        hostDirectiveDefs = new Map();
        rootComponentDef.findHostDirectiveDefs(rootComponentDef, rootDirectives, hostDirectiveDefs);
        rootDirectives.push(rootComponentDef);
      } else {
        rootDirectives = [rootComponentDef];
      }
      const hostTNode = createRootComponentTNode(rootLView, hostRNode);
      const componentView = createRootComponentView(hostTNode, hostRNode, rootComponentDef, rootDirectives, rootLView, environment, hostRenderer);
      tElementNode = getTNode(rootTView, HEADER_OFFSET);
      // TODO(crisbeto): in practice `hostRNode` should always be defined, but there are some tests
      // where the renderer is mocked out and `undefined` is returned. We should update the tests so
      // that this check can be removed.
      if (hostRNode) {
        setRootNodeAttributes(hostRenderer, rootComponentDef, hostRNode, rootSelectorOrNode);
      }
      if (projectableNodes !== undefined) {
        projectNodes(tElementNode, this.ngContentSelectors, projectableNodes);
      }
      // TODO: should LifecycleHooksFeature and other host features be generated by the compiler and
      // executed here?
      // Angular 5 reference: https://stackblitz.com/edit/lifecycle-hooks-vcref
      component = createRootComponent(componentView, rootComponentDef, rootDirectives, hostDirectiveDefs, rootLView, [LifecycleHooksFeature]);
      renderView(rootTView, rootLView, null);
    } finally {
      leaveView();
    }
    return new ComponentRef(this.componentType, component, createElementRef(tElementNode, rootLView), rootLView, tElementNode);
  }
}
/**
 * Represents an instance of a Component created via a {@link ComponentFactory}.
 *
 * `ComponentRef` provides access to the Component Instance as well other objects related to this
 * Component Instance and allows you to destroy the Component Instance via the {@link #destroy}
 * method.
 *
 */
class ComponentRef extends ComponentRef$1 {
  constructor(componentType, instance, location, _rootLView, _tNode) {
    super();
    this.location = location;
    this._rootLView = _rootLView;
    this._tNode = _tNode;
    this.previousInputValues = null;
    this.instance = instance;
    this.hostView = this.changeDetectorRef = new RootViewRef(_rootLView);
    this.componentType = componentType;
  }
  setInput(name, value) {
    const inputData = this._tNode.inputs;
    let dataValue;
    if (inputData !== null && (dataValue = inputData[name])) {
      this.previousInputValues ??= new Map();
      // Do not set the input if it is the same as the last value
      // This behavior matches `bindingUpdated` when binding inputs in templates.
      if (this.previousInputValues.has(name) && Object.is(this.previousInputValues.get(name), value)) {
        return;
      }
      const lView = this._rootLView;
      setInputsForProperty(lView[TVIEW], lView, dataValue, name, value);
      this.previousInputValues.set(name, value);
      const childComponentLView = getComponentLViewByIndex(this._tNode.index, lView);
      markViewDirty(childComponentLView);
    } else {
      if (ngDevMode) {
        const cmpNameForError = stringifyForError(this.componentType);
        let message = `Can't set value of the '${name}' input on the '${cmpNameForError}' component. `;
        message += `Make sure that the '${name}' property is annotated with @Input() or a mapped @Input('${name}') exists.`;
        reportUnknownPropertyError(message);
      }
    }
  }
  get injector() {
    return new NodeInjector(this._tNode, this._rootLView);
  }
  destroy() {
    this.hostView.destroy();
  }
  onDestroy(callback) {
    this.hostView.onDestroy(callback);
  }
}
/** Creates a TNode that can be used to instantiate a root component. */
function createRootComponentTNode(lView, rNode) {
  const tView = lView[TVIEW];
  const index = HEADER_OFFSET;
  ngDevMode && assertIndexInRange(lView, index);
  lView[index] = rNode;
  // '#host' is added here as we don't know the real host DOM name (we don't want to read it) and at
  // the same time we want to communicate the debug `TNode` that this is a special `TNode`
  // representing a host element.
  return getOrCreateTNode(tView, index, 2 /* TNodeType.Element */, '#host', null);
}
/**
 * Creates the root component view and the root component node.
 *
 * @param hostRNode Render host element.
 * @param rootComponentDef ComponentDef
 * @param rootView The parent view where the host node is stored
 * @param rendererFactory Factory to be used for creating child renderers.
 * @param hostRenderer The current renderer
 * @param sanitizer The sanitizer, if provided
 *
 * @returns Component view created
 */
function createRootComponentView(tNode, hostRNode, rootComponentDef, rootDirectives, rootView, environment, hostRenderer) {
  const tView = rootView[TVIEW];
  applyRootComponentStyling(rootDirectives, tNode, hostRNode, hostRenderer);
  // Hydration info is on the host element and needs to be retrieved
  // and passed to the component LView.
  let hydrationInfo = null;
  if (hostRNode !== null) {
    hydrationInfo = retrieveHydrationInfo(hostRNode, rootView[INJECTOR$1]);
  }
  const viewRenderer = environment.rendererFactory.createRenderer(hostRNode, rootComponentDef);
  let lViewFlags = 16 /* LViewFlags.CheckAlways */;
  if (rootComponentDef.signals) {
    lViewFlags = 4096 /* LViewFlags.SignalView */;
  } else if (rootComponentDef.onPush) {
    lViewFlags = 64 /* LViewFlags.Dirty */;
  }

  const componentView = createLView(rootView, getOrCreateComponentTView(rootComponentDef), null, lViewFlags, rootView[tNode.index], tNode, environment, viewRenderer, null, null, hydrationInfo);
  if (tView.firstCreatePass) {
    markAsComponentHost(tView, tNode, rootDirectives.length - 1);
  }
  addToViewTree(rootView, componentView);
  // Store component view at node index, with node as the HOST
  return rootView[tNode.index] = componentView;
}
/** Sets up the styling information on a root component. */
function applyRootComponentStyling(rootDirectives, tNode, rNode, hostRenderer) {
  for (const def of rootDirectives) {
    tNode.mergedAttrs = mergeHostAttrs(tNode.mergedAttrs, def.hostAttrs);
  }
  if (tNode.mergedAttrs !== null) {
    computeStaticStyling(tNode, tNode.mergedAttrs, true);
    if (rNode !== null) {
      setupStaticAttributes(hostRenderer, rNode, tNode);
    }
  }
}
/**
 * Creates a root component and sets it up with features and host bindings.Shared by
 * renderComponent() and ViewContainerRef.createComponent().
 */
function createRootComponent(componentView, rootComponentDef, rootDirectives, hostDirectiveDefs, rootLView, hostFeatures) {
  const rootTNode = getCurrentTNode();
  ngDevMode && assertDefined(rootTNode, 'tNode should have been already created');
  const tView = rootLView[TVIEW];
  const native = getNativeByTNode(rootTNode, rootLView);
  initializeDirectives(tView, rootLView, rootTNode, rootDirectives, null, hostDirectiveDefs);
  for (let i = 0; i < rootDirectives.length; i++) {
    const directiveIndex = rootTNode.directiveStart + i;
    const directiveInstance = getNodeInjectable(rootLView, tView, directiveIndex, rootTNode);
    attachPatchData(directiveInstance, rootLView);
  }
  invokeDirectivesHostBindings(tView, rootLView, rootTNode);
  if (native) {
    attachPatchData(native, rootLView);
  }
  // We're guaranteed for the `componentOffset` to be positive here
  // since a root component always matches a component def.
  ngDevMode && assertGreaterThan(rootTNode.componentOffset, -1, 'componentOffset must be great than -1');
  const component = getNodeInjectable(rootLView, tView, rootTNode.directiveStart + rootTNode.componentOffset, rootTNode);
  componentView[CONTEXT] = rootLView[CONTEXT] = component;
  if (hostFeatures !== null) {
    for (const feature of hostFeatures) {
      feature(component, rootComponentDef);
    }
  }
  // We want to generate an empty QueryList for root content queries for backwards
  // compatibility with ViewEngine.
  executeContentQueries(tView, rootTNode, componentView);
  return component;
}
/** Sets the static attributes on a root component. */
function setRootNodeAttributes(hostRenderer, componentDef, hostRNode, rootSelectorOrNode) {
  if (rootSelectorOrNode) {
    setUpAttributes(hostRenderer, hostRNode, ['ng-version', VERSION.full]);
  } else {
    // If host element is created as a part of this function call (i.e. `rootSelectorOrNode`
    // is not defined), also apply attributes and classes extracted from component selector.
    // Extract attributes and classes from the first selector only to match VE behavior.
    const {
      attrs,
      classes
    } = extractAttrsAndClassesFromSelector(componentDef.selectors[0]);
    if (attrs) {
      setUpAttributes(hostRenderer, hostRNode, attrs);
    }
    if (classes && classes.length > 0) {
      writeDirectClass(hostRenderer, hostRNode, classes.join(' '));
    }
  }
}
/** Projects the `projectableNodes` that were specified when creating a root component. */
function projectNodes(tNode, ngContentSelectors, projectableNodes) {
  const projection = tNode.projection = [];
  for (let i = 0; i < ngContentSelectors.length; i++) {
    const nodesforSlot = projectableNodes[i];
    // Projectable nodes can be passed as array of arrays or an array of iterables (ngUpgrade
    // case). Here we do normalize passed data structure to be an array of arrays to avoid
    // complex checks down the line.
    // We also normalize the length of the passed in projectable nodes (to match the number of
    // <ng-container> slots defined by a component).
    projection.push(nodesforSlot != null ? Array.from(nodesforSlot) : null);
  }
}
/**
 * Used to enable lifecycle hooks on the root component.
 *
 * Include this feature when calling `renderComponent` if the root component
 * you are rendering has lifecycle hooks defined. Otherwise, the hooks won't
 * be called properly.
 *
 * Example:
 *
 * ```
 * renderComponent(AppComponent, {hostFeatures: [LifecycleHooksFeature]});
 * ```
 */
function LifecycleHooksFeature() {
  const tNode = getCurrentTNode();
  ngDevMode && assertDefined(tNode, 'TNode is required');
  registerPostOrderHooks(getLView()[TVIEW], tNode);
}
function isListLikeIterable(obj) {
  if (!isJsObject(obj)) return false;
  return Array.isArray(obj) || !(obj instanceof Map) &&
  // JS Map are iterables but return entries as [k, v]
  Symbol.iterator in obj; // JS Iterable have a Symbol.iterator prop
}

function areIterablesEqual(a, b, comparator) {
  const iterator1 = a[Symbol.iterator]();
  const iterator2 = b[Symbol.iterator]();
  while (true) {
    const item1 = iterator1.next();
    const item2 = iterator2.next();
    if (item1.done && item2.done) return true;
    if (item1.done || item2.done) return false;
    if (!comparator(item1.value, item2.value)) return false;
  }
}
function isJsObject(o) {
  return o !== null && (typeof o === 'function' || typeof o === 'object');
}
function devModeEqual(a, b) {
  const isListLikeIterableA = isListLikeIterable(a);
  const isListLikeIterableB = isListLikeIterable(b);
  if (isListLikeIterableA && isListLikeIterableB) {
    return areIterablesEqual(a, b, devModeEqual);
  } else {
    const isAObject = a && (typeof a === 'object' || typeof a === 'function');
    const isBObject = b && (typeof b === 'object' || typeof b === 'function');
    if (!isListLikeIterableA && isAObject && !isListLikeIterableB && isBObject) {
      return true;
    } else {
      return Object.is(a, b);
    }
  }
}
/**
 * Updates binding if changed, then returns whether it was updated.
 *
 * This function also checks the `CheckNoChangesMode` and throws if changes are made.
 * Some changes (Objects/iterables) during `CheckNoChangesMode` are exempt to comply with VE
 * behavior.
 *
 * @param lView current `LView`
 * @param bindingIndex The binding in the `LView` to check
 * @param value New value to check against `lView[bindingIndex]`
 * @returns `true` if the bindings has changed. (Throws if binding has changed during
 *          `CheckNoChangesMode`)
 */
function bindingUpdated(lView, bindingIndex, value) {
  ngDevMode && assertNotSame(value, NO_CHANGE, 'Incoming value should never be NO_CHANGE.');
  ngDevMode && assertLessThan(bindingIndex, lView.length, `Slot should have been initialized to NO_CHANGE`);
  const oldValue = lView[bindingIndex];
  if (Object.is(oldValue, value)) {
    return false;
  } else {
    if (ngDevMode && isInCheckNoChangesMode()) {
      // View engine didn't report undefined values as changed on the first checkNoChanges pass
      // (before the change detection was run).
      const oldValueToCompare = oldValue !== NO_CHANGE ? oldValue : undefined;
      if (!devModeEqual(oldValueToCompare, value)) {
        const details = getExpressionChangedErrorDetails(lView, bindingIndex, oldValueToCompare, value);
        throwErrorIfNoChangesMode(oldValue === NO_CHANGE, details.oldValue, details.newValue, details.propName, lView);
      }
      // There was a change, but the `devModeEqual` decided that the change is exempt from an error.
      // For this reason we exit as if no change. The early exit is needed to prevent the changed
      // value to be written into `LView` (If we would write the new value that we would not see it
      // as change on next CD.)
      return false;
    }
    lView[bindingIndex] = value;
    return true;
  }
}
/**
 * Creates an interpolation binding with 1 expression.
 *
 * @param prefix static value used for concatenation only.
 * @param v0 value checked for change.
 * @param suffix static value used for concatenation only.
 */
function interpolation1(lView, prefix, v0, suffix) {
  const different = bindingUpdated(lView, nextBindingIndex(), v0);
  return different ? prefix + renderStringify(v0) + suffix : NO_CHANGE;
}
const AT_THIS_LOCATION = '<-- AT THIS LOCATION';
/**
 * Retrieves a user friendly string for a given TNodeType for use in
 * friendly error messages
 *
 * @param tNodeType
 * @returns
 */
function getFriendlyStringFromTNodeType(tNodeType) {
  switch (tNodeType) {
    case 4 /* TNodeType.Container */:
      return 'view container';
    case 2 /* TNodeType.Element */:
      return 'element';
    case 8 /* TNodeType.ElementContainer */:
      return 'ng-container';
    case 32 /* TNodeType.Icu */:
      return 'icu';
    case 64 /* TNodeType.Placeholder */:
      return 'i18n';
    case 16 /* TNodeType.Projection */:
      return 'projection';
    case 1 /* TNodeType.Text */:
      return 'text';
    default:
      // This should not happen as we cover all possible TNode types above.
      return '<unknown>';
  }
}
/**
 * Builds the hydration error message when a node is not found
 *
 * @param lView the LView where the node exists
 * @param tNode the TNode
 */
function nodeNotFoundError(lView, tNode) {
  const header = 'During serialization, Angular was unable to find an element in the DOM:\n\n';
  const expected = `${describeExpectedDom(lView, tNode, false)}\n\n`;
  const footer = getHydrationErrorFooter();
  throw new RuntimeError(-502 /* RuntimeErrorCode.HYDRATION_MISSING_NODE */, header + expected + footer);
}
/**
 * Builds the hydration error message in the case that dom nodes are created outside of
 * the Angular context and are being used as projected nodes
 *
 * @param lView the LView
 * @param tNode the TNode
 * @returns an error
 */
function unsupportedProjectionOfDomNodes(rNode) {
  const header = 'During serialization, Angular detected DOM nodes ' + 'that were created outside of Angular context and provided as projectable nodes ' + '(likely via `ViewContainerRef.createComponent` or `createComponent` APIs). ' + 'Hydration is not supported for such cases, consider refactoring the code to avoid ' + 'this pattern or using `ngSkipHydration` on the host element of the component.\n\n';
  const actual = `${describeDomFromNode(rNode)}\n\n`;
  const message = header + actual + getHydrationAttributeNote();
  return new RuntimeError(-503 /* RuntimeErrorCode.UNSUPPORTED_PROJECTION_DOM_NODES */, message);
}
// Stringification methods
/**
 * Stringifies a given TNode's attributes
 *
 * @param tNode a provided TNode
 * @returns string
 */
function stringifyTNodeAttrs(tNode) {
  const results = [];
  if (tNode.attrs) {
    for (let i = 0; i < tNode.attrs.length;) {
      const attrName = tNode.attrs[i++];
      // Once we reach the first flag, we know that the list of
      // attributes is over.
      if (typeof attrName == 'number') {
        break;
      }
      const attrValue = tNode.attrs[i++];
      results.push(`${attrName}="${shorten(attrValue)}"`);
    }
  }
  return results.join(' ');
}
/**
 * The list of internal attributes that should be filtered out while
 * producing an error message.
 */
const internalAttrs = /*#__PURE__*/new Set(['ngh', 'ng-version', 'ng-server-context']);
/**
 * Stringifies an HTML Element's attributes
 *
 * @param rNode an HTML Element
 * @returns string
 */
function stringifyRNodeAttrs(rNode) {
  const results = [];
  for (let i = 0; i < rNode.attributes.length; i++) {
    const attr = rNode.attributes[i];
    if (internalAttrs.has(attr.name)) continue;
    results.push(`${attr.name}="${shorten(attr.value)}"`);
  }
  return results.join(' ');
}
// Methods for Describing the DOM
/**
 * Converts a tNode to a helpful readable string value for use in error messages
 *
 * @param tNode a given TNode
 * @param innerContent the content of the node
 * @returns string
 */
function describeTNode(tNode, innerContent = '…') {
  switch (tNode.type) {
    case 1 /* TNodeType.Text */:
      const content = tNode.value ? `(${tNode.value})` : '';
      return `#text${content}`;
    case 2 /* TNodeType.Element */:
      const attrs = stringifyTNodeAttrs(tNode);
      const tag = tNode.value.toLowerCase();
      return `<${tag}${attrs ? ' ' + attrs : ''}>${innerContent}</${tag}>`;
    case 8 /* TNodeType.ElementContainer */:
      return '<!-- ng-container -->';
    case 4 /* TNodeType.Container */:
      return '<!-- container -->';
    default:
      const typeAsString = getFriendlyStringFromTNodeType(tNode.type);
      return `#node(${typeAsString})`;
  }
}
/**
 * Converts an RNode to a helpful readable string value for use in error messages
 *
 * @param rNode a given RNode
 * @param innerContent the content of the node
 * @returns string
 */
function describeRNode(rNode, innerContent = '…') {
  const node = rNode;
  switch (node.nodeType) {
    case Node.ELEMENT_NODE:
      const tag = node.tagName.toLowerCase();
      const attrs = stringifyRNodeAttrs(node);
      return `<${tag}${attrs ? ' ' + attrs : ''}>${innerContent}</${tag}>`;
    case Node.TEXT_NODE:
      const content = node.textContent ? shorten(node.textContent) : '';
      return `#text${content ? `(${content})` : ''}`;
    case Node.COMMENT_NODE:
      return `<!-- ${shorten(node.textContent ?? '')} -->`;
    default:
      return `#node(${node.nodeType})`;
  }
}
/**
 * Builds the string containing the expected DOM present given the LView and TNode
 * values for a readable error message
 *
 * @param lView the lView containing the DOM
 * @param tNode the tNode
 * @param isViewContainerAnchor boolean
 * @returns string
 */
function describeExpectedDom(lView, tNode, isViewContainerAnchor) {
  const spacer = '  ';
  let content = '';
  if (tNode.prev) {
    content += spacer + '…\n';
    content += spacer + describeTNode(tNode.prev) + '\n';
  } else if (tNode.type && tNode.type & 12 /* TNodeType.AnyContainer */) {
    content += spacer + '…\n';
  }
  if (isViewContainerAnchor) {
    content += spacer + describeTNode(tNode) + '\n';
    content += spacer + `<!-- container -->  ${AT_THIS_LOCATION}\n`;
  } else {
    content += spacer + describeTNode(tNode) + `  ${AT_THIS_LOCATION}\n`;
  }
  content += spacer + '…\n';
  const parentRNode = tNode.type ? getParentRElement(lView[TVIEW], tNode, lView) : null;
  if (parentRNode) {
    content = describeRNode(parentRNode, '\n' + content);
  }
  return content;
}
/**
 * Builds the string containing the DOM present around a given RNode for a
 * readable error message
 *
 * @param node the RNode
 * @returns string
 */
function describeDomFromNode(node) {
  const spacer = '  ';
  let content = '';
  const currentNode = node;
  if (currentNode.previousSibling) {
    content += spacer + '…\n';
    content += spacer + describeRNode(currentNode.previousSibling) + '\n';
  }
  content += spacer + describeRNode(currentNode) + `  ${AT_THIS_LOCATION}\n`;
  if (node.nextSibling) {
    content += spacer + '…\n';
  }
  if (node.parentNode) {
    content = describeRNode(currentNode.parentNode, '\n' + content);
  }
  return content;
}
/**
 * Builds the footer hydration error message
 *
 * @param componentClassName the name of the component class
 * @returns string
 */
function getHydrationErrorFooter(componentClassName) {
  const componentInfo = componentClassName ? `the "${componentClassName}"` : 'corresponding';
  return `To fix this problem:\n` + `  * check ${componentInfo} component for hydration-related issues\n` + `  * check to see if your template has valid HTML structure\n` + `  * or skip hydration by adding the \`ngSkipHydration\` attribute ` + `to its host node in a template\n\n`;
}
/**
 * An attribute related note for hydration errors
 */
function getHydrationAttributeNote() {
  return 'Note: attributes are only displayed to better represent the DOM' + ' but have no effect on hydration mismatches.\n\n';
}
// Node string utility functions
/**
 * Strips all newlines out of a given string
 *
 * @param input a string to be cleared of new line characters
 * @returns
 */
function stripNewlines(input) {
  return input.replace(/\s+/gm, '');
}
/**
 * Reduces a string down to a maximum length of characters with ellipsis for readability
 *
 * @param input a string input
 * @param maxLength a maximum length in characters
 * @returns string
 */
function shorten(input, maxLength = 50) {
  if (!input) {
    return '';
  }
  input = stripNewlines(input);
  return input.length > maxLength ? `${input.substring(0, maxLength - 1)}…` : input;
}
/**
 * Helper function that takes a reference node location and a set of navigation steps
 * (from the reference node) to a target node and outputs a string that represents
 * a location.
 *
 * For example, given: referenceNode = 'b' (body) and path = ['firstChild', 'firstChild',
 * 'nextSibling'], the function returns: `bf2n`.
 */
function compressNodeLocation(referenceNode, path) {
  const result = [referenceNode];
  for (const segment of path) {
    const lastIdx = result.length - 1;
    if (lastIdx > 0 && result[lastIdx - 1] === segment) {
      // An empty string in a count slot represents 1 occurrence of an instruction.
      const value = result[lastIdx] || 1;
      result[lastIdx] = value + 1;
    } else {
      // Adding a new segment to the path.
      // Using an empty string in a counter field to avoid encoding `1`s
      // into the path, since they are implicit (e.g. `f1n1` vs `fn`), so
      // it's enough to have a single char in this case.
      result.push(segment, '');
    }
  }
  return result.join('');
}
/**
 * Generate a list of DOM navigation operations to get from node `start` to node `finish`.
 *
 * Note: assumes that node `start` occurs before node `finish` in an in-order traversal of the DOM
 * tree. That is, we should be able to get from `start` to `finish` purely by using `.firstChild`
 * and `.nextSibling` operations.
 */
function navigateBetween(start, finish) {
  if (start === finish) {
    return [];
  } else if (start.parentElement == null || finish.parentElement == null) {
    return null;
  } else if (start.parentElement === finish.parentElement) {
    return navigateBetweenSiblings(start, finish);
  } else {
    // `finish` is a child of its parent, so the parent will always have a child.
    const parent = finish.parentElement;
    const parentPath = navigateBetween(start, parent);
    const childPath = navigateBetween(parent.firstChild, finish);
    if (!parentPath || !childPath) return null;
    return [
    // First navigate to `finish`'s parent
    ...parentPath,
    // Then to its first child.
    NodeNavigationStep.FirstChild,
    // And finally from that node to `finish` (maybe a no-op if we're already there).
    ...childPath];
  }
}
/**
 * Calculates a path between 2 sibling nodes (generates a number of `NextSibling` navigations).
 * Returns `null` if no such path exists between the given nodes.
 */
function navigateBetweenSiblings(start, finish) {
  const nav = [];
  let node = null;
  for (node = start; node != null && node !== finish; node = node.nextSibling) {
    nav.push(NodeNavigationStep.NextSibling);
  }
  // If the `node` becomes `null` or `undefined` at the end, that means that we
  // didn't find the `end` node, thus return `null` (which would trigger serialization
  // error to be produced).
  return node == null ? null : nav;
}
/**
 * Calculates a path between 2 nodes in terms of `nextSibling` and `firstChild`
 * navigations:
 * - the `from` node is a known node, used as an starting point for the lookup
 *   (the `fromNodeName` argument is a string representation of the node).
 * - the `to` node is a node that the runtime logic would be looking up,
 *   using the path generated by this function.
 */
function calcPathBetween(from, to, fromNodeName) {
  const path = navigateBetween(from, to);
  return path === null ? null : compressNodeLocation(fromNodeName, path);
}
/**
 * Invoked at serialization time (on the server) when a set of navigation
 * instructions needs to be generated for a TNode.
 */
function calcPathForNode(tNode, lView) {
  const parentTNode = tNode.parent;
  let parentIndex;
  let parentRNode;
  let referenceNodeName;
  if (parentTNode === null || !(parentTNode.type & 3 /* TNodeType.AnyRNode */)) {
    // If there is no parent TNode or a parent TNode does not represent an RNode
    // (i.e. not a DOM node), use component host element as a reference node.
    parentIndex = referenceNodeName = REFERENCE_NODE_HOST;
    parentRNode = lView[DECLARATION_COMPONENT_VIEW][HOST];
  } else {
    // Use parent TNode as a reference node.
    parentIndex = parentTNode.index;
    parentRNode = unwrapRNode(lView[parentIndex]);
    referenceNodeName = renderStringify(parentIndex - HEADER_OFFSET);
  }
  let rNode = unwrapRNode(lView[tNode.index]);
  if (tNode.type & 12 /* TNodeType.AnyContainer */) {
    // For <ng-container> nodes, instead of serializing a reference
    // to the anchor comment node, serialize a location of the first
    // DOM element. Paired with the container size (serialized as a part
    // of `ngh.containers`), it should give enough information for runtime
    // to hydrate nodes in this container.
    const firstRNode = getFirstNativeNode(lView, tNode);
    // If container is not empty, use a reference to the first element,
    // otherwise, rNode would point to an anchor comment node.
    if (firstRNode) {
      rNode = firstRNode;
    }
  }
  let path = calcPathBetween(parentRNode, rNode, referenceNodeName);
  if (path === null && parentRNode !== rNode) {
    // Searching for a path between elements within a host node failed.
    // Trying to find a path to an element starting from the `document.body` instead.
    //
    // Important note: this type of reference is relatively unstable, since Angular
    // may not be able to control parts of the page that the runtime logic navigates
    // through. This is mostly needed to cover "portals" use-case (like menus, dialog boxes,
    // etc), where nodes are content-projected (including direct DOM manipulations) outside
    // of the host node. The better solution is to provide APIs to work with "portals",
    // at which point this code path would not be needed.
    const body = parentRNode.ownerDocument.body;
    path = calcPathBetween(body, rNode, REFERENCE_NODE_BODY);
    if (path === null) {
      // If the path is still empty, it's likely that this node is detached and
      // won't be found during hydration.
      throw nodeNotFoundError(lView, tNode);
    }
  }
  return path;
}
function templateFirstCreatePass(index, tView, lView, templateFn, decls, vars, tagName, attrsIndex, localRefsIndex) {
  ngDevMode && assertFirstCreatePass(tView);
  ngDevMode && ngDevMode.firstCreatePass++;
  const tViewConsts = tView.consts;
  // TODO(pk): refactor getOrCreateTNode to have the "create" only version
  const tNode = getOrCreateTNode(tView, index, 4 /* TNodeType.Container */, tagName || null, getConstant(tViewConsts, attrsIndex));
  resolveDirectives(tView, lView, tNode, getConstant(tViewConsts, localRefsIndex));
  registerPostOrderHooks(tView, tNode);
  const embeddedTView = tNode.tView = createTView(2 /* TViewType.Embedded */, tNode, templateFn, decls, vars, tView.directiveRegistry, tView.pipeRegistry, null, tView.schemas, tViewConsts, null /* ssrId */);
  if (tView.queries !== null) {
    tView.queries.template(tView, tNode);
    embeddedTView.queries = tView.queries.embeddedTView(tNode);
  }
  return tNode;
}
/**
 * Creates an LContainer for an ng-template (dynamically-inserted view), e.g.
 *
 * <ng-template #foo>
 *    <div></div>
 * </ng-template>
 *
 * @param index The index of the container in the data array
 * @param templateFn Inline template
 * @param decls The number of nodes, local refs, and pipes for this template
 * @param vars The number of bindings for this template
 * @param tagName The name of the container element, if applicable
 * @param attrsIndex Index of template attributes in the `consts` array.
 * @param localRefs Index of the local references in the `consts` array.
 * @param localRefExtractor A function which extracts local-refs values from the template.
 *        Defaults to the current element associated with the local-ref.
 *
 * @codeGenApi
 */
function ɵɵtemplate(index, templateFn, decls, vars, tagName, attrsIndex, localRefsIndex, localRefExtractor) {
  const lView = getLView();
  const tView = getTView();
  const adjustedIndex = index + HEADER_OFFSET;
  const tNode = tView.firstCreatePass ? templateFirstCreatePass(adjustedIndex, tView, lView, templateFn, decls, vars, tagName, attrsIndex, localRefsIndex) : tView.data[adjustedIndex];
  setCurrentTNode(tNode, false);
  const comment = _locateOrCreateContainerAnchor(tView, lView);
  if (wasLastNodeCreated()) {
    appendChild(tView, lView, comment, tNode);
  }
  attachPatchData(comment, lView);
  addToViewTree(lView, lView[adjustedIndex] = createLContainer(comment, lView, comment, tNode));
  if (isDirectiveHost(tNode)) {
    createDirectivesInstances(tView, lView, tNode);
  }
  if (localRefsIndex != null) {
    saveResolvedLocalsInData(lView, tNode, localRefExtractor);
  }
}
let _locateOrCreateContainerAnchor = createContainerAnchorImpl;
/**
 * Regular creation mode for LContainers and their anchor (comment) nodes.
 */
function createContainerAnchorImpl(tView, lView, tNode, index) {
  lastNodeWasCreated(true);
  return lView[RENDERER].createComment(ngDevMode ? 'container' : '');
}

/**
 * Update a property on a selected element.
 *
 * Operates on the element selected by index via the {@link select} instruction.
 *
 * If the property name also exists as an input property on one of the element's directives,
 * the component property will be set instead of the element property. This check must
 * be conducted at runtime so child components that add new `@Inputs` don't have to be re-compiled
 *
 * @param propName Name of property. Because it is going to DOM, this is not subject to
 *        renaming as part of minification.
 * @param value New value to write.
 * @param sanitizer An optional function used to sanitize the value.
 * @returns This function returns itself so that it may be chained
 * (e.g. `property('name', ctx.name)('title', ctx.title)`)
 *
 * @codeGenApi
 */
function ɵɵproperty(propName, value, sanitizer) {
  const lView = getLView();
  const bindingIndex = nextBindingIndex();
  if (bindingUpdated(lView, bindingIndex, value)) {
    const tView = getTView();
    const tNode = getSelectedTNode();
    elementPropertyInternal(tView, tNode, lView, propName, value, lView[RENDERER], sanitizer, false);
    ngDevMode && storePropertyBindingMetadata(tView.data, tNode, propName, bindingIndex);
  }
  return ɵɵproperty;
}
/**
 * Given `<div style="..." my-dir>` and `MyDir` with `@Input('style')` we need to write to
 * directive input.
 */
function setDirectiveInputsWhichShadowsStyling(tView, tNode, lView, value, isClassBased) {
  const inputs = tNode.inputs;
  const property = isClassBased ? 'class' : 'style';
  // We support both 'class' and `className` hence the fallback.
  setInputsForProperty(tView, lView, inputs[property], property, value);
}
function elementStartFirstCreatePass(index, tView, lView, name, attrsIndex, localRefsIndex) {
  ngDevMode && assertFirstCreatePass(tView);
  ngDevMode && ngDevMode.firstCreatePass++;
  const tViewConsts = tView.consts;
  const attrs = getConstant(tViewConsts, attrsIndex);
  const tNode = getOrCreateTNode(tView, index, 2 /* TNodeType.Element */, name, attrs);
  resolveDirectives(tView, lView, tNode, getConstant(tViewConsts, localRefsIndex));
  if (tNode.attrs !== null) {
    computeStaticStyling(tNode, tNode.attrs, false);
  }
  if (tNode.mergedAttrs !== null) {
    computeStaticStyling(tNode, tNode.mergedAttrs, true);
  }
  if (tView.queries !== null) {
    tView.queries.elementStart(tView, tNode);
  }
  return tNode;
}
/**
 * Create DOM element. The instruction must later be followed by `elementEnd()` call.
 *
 * @param index Index of the element in the LView array
 * @param name Name of the DOM Node
 * @param attrsIndex Index of the element's attributes in the `consts` array.
 * @param localRefsIndex Index of the element's local references in the `consts` array.
 * @returns This function returns itself so that it may be chained.
 *
 * Attributes and localRefs are passed as an array of strings where elements with an even index
 * hold an attribute name and elements with an odd index hold an attribute value, ex.:
 * ['id', 'warning5', 'class', 'alert']
 *
 * @codeGenApi
 */
function ɵɵelementStart(index, name, attrsIndex, localRefsIndex) {
  const lView = getLView();
  const tView = getTView();
  const adjustedIndex = HEADER_OFFSET + index;
  ngDevMode && assertEqual(getBindingIndex(), tView.bindingStartIndex, 'elements should be created before any bindings');
  ngDevMode && assertIndexInRange(lView, adjustedIndex);
  const renderer = lView[RENDERER];
  const tNode = tView.firstCreatePass ? elementStartFirstCreatePass(adjustedIndex, tView, lView, name, attrsIndex, localRefsIndex) : tView.data[adjustedIndex];
  const native = _locateOrCreateElementNode(tView, lView, tNode, renderer, name);
  lView[adjustedIndex] = native;
  const hasDirectives = isDirectiveHost(tNode);
  if (ngDevMode && tView.firstCreatePass) {
    validateElementIsKnown(native, lView, tNode.value, tView.schemas, hasDirectives);
  }
  setCurrentTNode(tNode, true);
  setupStaticAttributes(renderer, native, tNode);
  if ((tNode.flags & 32 /* TNodeFlags.isDetached */) !== 32 /* TNodeFlags.isDetached */ && wasLastNodeCreated()) {
    // In the i18n case, the translation may have removed this element, so only add it if it is not
    // detached. See `TNodeType.Placeholder` and `LFrame.inI18n` for more context.
    appendChild(tView, lView, native, tNode);
  }
  // any immediate children of a component or template container must be pre-emptively
  // monkey-patched with the component view data so that the element can be inspected
  // later on using any element discovery utility methods (see `element_discovery.ts`)
  if (getElementDepthCount() === 0) {
    attachPatchData(native, lView);
  }
  increaseElementDepthCount();
  if (hasDirectives) {
    createDirectivesInstances(tView, lView, tNode);
    executeContentQueries(tView, tNode, lView);
  }
  if (localRefsIndex !== null) {
    saveResolvedLocalsInData(lView, tNode);
  }
  return ɵɵelementStart;
}
/**
 * Mark the end of the element.
 * @returns This function returns itself so that it may be chained.
 *
 * @codeGenApi
 */
function ɵɵelementEnd() {
  let currentTNode = getCurrentTNode();
  ngDevMode && assertDefined(currentTNode, 'No parent node to close.');
  if (isCurrentTNodeParent()) {
    setCurrentTNodeAsNotParent();
  } else {
    ngDevMode && assertHasParent(getCurrentTNode());
    currentTNode = currentTNode.parent;
    setCurrentTNode(currentTNode, false);
  }
  const tNode = currentTNode;
  ngDevMode && assertTNodeType(tNode, 3 /* TNodeType.AnyRNode */);
  if (isSkipHydrationRootTNode(tNode)) {
    leaveSkipHydrationBlock();
  }
  decreaseElementDepthCount();
  const tView = getTView();
  if (tView.firstCreatePass) {
    registerPostOrderHooks(tView, currentTNode);
    if (isContentQueryHost(currentTNode)) {
      tView.queries.elementEnd(currentTNode);
    }
  }
  if (tNode.classesWithoutHost != null && hasClassInput(tNode)) {
    setDirectiveInputsWhichShadowsStyling(tView, tNode, getLView(), tNode.classesWithoutHost, true);
  }
  if (tNode.stylesWithoutHost != null && hasStyleInput(tNode)) {
    setDirectiveInputsWhichShadowsStyling(tView, tNode, getLView(), tNode.stylesWithoutHost, false);
  }
  return ɵɵelementEnd;
}
let _locateOrCreateElementNode = (tView, lView, tNode, renderer, name, index) => {
  lastNodeWasCreated(true);
  return createElementNode(renderer, name, getNamespace$1());
};

/**
 * Determine if the argument is shaped like a Promise
 */
function isPromise(obj) {
  // allow any Promise/A+ compliant thenable.
  // It's up to the caller to ensure that obj.then conforms to the spec
  return !!obj && typeof obj.then === 'function';
}
/**
 * Determine if the argument is a Subscribable
 */
function isSubscribable(obj) {
  return !!obj && typeof obj.subscribe === 'function';
}

/**
 * Adds an event listener to the current node.
 *
 * If an output exists on one of the node's directives, it also subscribes to the output
 * and saves the subscription for later cleanup.
 *
 * @param eventName Name of the event
 * @param listenerFn The function to be called when event emits
 * @param useCapture Whether or not to use capture in event listener - this argument is a reminder
 *     from the Renderer3 infrastructure and should be removed from the instruction arguments
 * @param eventTargetResolver Function that returns global target information in case this listener
 * should be attached to a global object like window, document or body
 *
 * @codeGenApi
 */
function ɵɵlistener(eventName, listenerFn, useCapture, eventTargetResolver) {
  const lView = getLView();
  const tView = getTView();
  const tNode = getCurrentTNode();
  listenerInternal(tView, lView, lView[RENDERER], tNode, eventName, listenerFn, eventTargetResolver);
  return ɵɵlistener;
}
/**
 * A utility function that checks if a given element has already an event handler registered for an
 * event with a specified name. The TView.cleanup data structure is used to find out which events
 * are registered for a given element.
 */
function findExistingListener(tView, lView, eventName, tNodeIdx) {
  const tCleanup = tView.cleanup;
  if (tCleanup != null) {
    for (let i = 0; i < tCleanup.length - 1; i += 2) {
      const cleanupEventName = tCleanup[i];
      if (cleanupEventName === eventName && tCleanup[i + 1] === tNodeIdx) {
        // We have found a matching event name on the same node but it might not have been
        // registered yet, so we must explicitly verify entries in the LView cleanup data
        // structures.
        const lCleanup = lView[CLEANUP];
        const listenerIdxInLCleanup = tCleanup[i + 2];
        return lCleanup.length > listenerIdxInLCleanup ? lCleanup[listenerIdxInLCleanup] : null;
      }
      // TView.cleanup can have a mix of 4-elements entries (for event handler cleanups) or
      // 2-element entries (for directive and queries destroy hooks). As such we can encounter
      // blocks of 4 or 2 items in the tView.cleanup and this is why we iterate over 2 elements
      // first and jump another 2 elements if we detect listeners cleanup (4 elements). Also check
      // documentation of TView.cleanup for more details of this data structure layout.
      if (typeof cleanupEventName === 'string') {
        i += 2;
      }
    }
  }
  return null;
}
function listenerInternal(tView, lView, renderer, tNode, eventName, listenerFn, eventTargetResolver) {
  const isTNodeDirectiveHost = isDirectiveHost(tNode);
  const firstCreatePass = tView.firstCreatePass;
  const tCleanup = firstCreatePass && getOrCreateTViewCleanup(tView);
  const context = lView[CONTEXT];
  // When the ɵɵlistener instruction was generated and is executed we know that there is either a
  // native listener or a directive output on this element. As such we we know that we will have to
  // register a listener and store its cleanup function on LView.
  const lCleanup = getOrCreateLViewCleanup(lView);
  ngDevMode && assertTNodeType(tNode, 3 /* TNodeType.AnyRNode */ | 12 /* TNodeType.AnyContainer */);
  let processOutputs = true;
  // Adding a native event listener is applicable when:
  // - The corresponding TNode represents a DOM element.
  // - The event target has a resolver (usually resulting in a global object,
  //   such as `window` or `document`).
  if (tNode.type & 3 /* TNodeType.AnyRNode */ || eventTargetResolver) {
    const native = getNativeByTNode(tNode, lView);
    const target = eventTargetResolver ? eventTargetResolver(native) : native;
    const lCleanupIndex = lCleanup.length;
    const idxOrTargetGetter = eventTargetResolver ? _lView => eventTargetResolver(unwrapRNode(_lView[tNode.index])) : tNode.index;
    // In order to match current behavior, native DOM event listeners must be added for all
    // events (including outputs).
    // There might be cases where multiple directives on the same element try to register an event
    // handler function for the same event. In this situation we want to avoid registration of
    // several native listeners as each registration would be intercepted by NgZone and
    // trigger change detection. This would mean that a single user action would result in several
    // change detections being invoked. To avoid this situation we want to have only one call to
    // native handler registration (for the same element and same type of event).
    //
    // In order to have just one native event handler in presence of multiple handler functions,
    // we just register a first handler function as a native event listener and then chain
    // (coalesce) other handler functions on top of the first native handler function.
    let existingListener = null;
    // Please note that the coalescing described here doesn't happen for events specifying an
    // alternative target (ex. (document:click)) - this is to keep backward compatibility with the
    // view engine.
    // Also, we don't have to search for existing listeners is there are no directives
    // matching on a given node as we can't register multiple event handlers for the same event in
    // a template (this would mean having duplicate attributes).
    if (!eventTargetResolver && isTNodeDirectiveHost) {
      existingListener = findExistingListener(tView, lView, eventName, tNode.index);
    }
    if (existingListener !== null) {
      // Attach a new listener to coalesced listeners list, maintaining the order in which
      // listeners are registered. For performance reasons, we keep a reference to the last
      // listener in that list (in `__ngLastListenerFn__` field), so we can avoid going through
      // the entire set each time we need to add a new listener.
      const lastListenerFn = existingListener.__ngLastListenerFn__ || existingListener;
      lastListenerFn.__ngNextListenerFn__ = listenerFn;
      existingListener.__ngLastListenerFn__ = listenerFn;
      processOutputs = false;
    } else {
      listenerFn = wrapListener(tNode, lView, context, listenerFn, false /** preventDefault */);
      const cleanupFn = renderer.listen(target, eventName, listenerFn);
      ngDevMode && ngDevMode.rendererAddEventListener++;
      lCleanup.push(listenerFn, cleanupFn);
      tCleanup && tCleanup.push(eventName, idxOrTargetGetter, lCleanupIndex, lCleanupIndex + 1);
    }
  } else {
    // Even if there is no native listener to add, we still need to wrap the listener so that OnPush
    // ancestors are marked dirty when an event occurs.
    listenerFn = wrapListener(tNode, lView, context, listenerFn, false /** preventDefault */);
  }
  // subscribe to directive outputs
  const outputs = tNode.outputs;
  let props;
  if (processOutputs && outputs !== null && (props = outputs[eventName])) {
    const propsLength = props.length;
    if (propsLength) {
      for (let i = 0; i < propsLength; i += 2) {
        const index = props[i];
        ngDevMode && assertIndexInRange(lView, index);
        const minifiedName = props[i + 1];
        const directiveInstance = lView[index];
        const output = directiveInstance[minifiedName];
        if (ngDevMode && !isSubscribable(output)) {
          throw new Error(`@Output ${minifiedName} not initialized in '${directiveInstance.constructor.name}'.`);
        }
        const subscription = output.subscribe(listenerFn);
        const idx = lCleanup.length;
        lCleanup.push(listenerFn, subscription);
        tCleanup && tCleanup.push(eventName, tNode.index, idx, -(idx + 1));
      }
    }
  }
}
function executeListenerWithErrorHandling(lView, context, listenerFn, e) {
  try {
    profiler(6 /* ProfilerEvent.OutputStart */, context, listenerFn);
    // Only explicitly returning false from a listener should preventDefault
    return listenerFn(e) !== false;
  } catch (error) {
    handleError(lView, error);
    return false;
  } finally {
    profiler(7 /* ProfilerEvent.OutputEnd */, context, listenerFn);
  }
}
/**
 * Wraps an event listener with a function that marks ancestors dirty and prevents default behavior,
 * if applicable.
 *
 * @param tNode The TNode associated with this listener
 * @param lView The LView that contains this listener
 * @param listenerFn The listener function to call
 * @param wrapWithPreventDefault Whether or not to prevent default behavior
 * (the procedural renderer does this already, so in those cases, we should skip)
 */
function wrapListener(tNode, lView, context, listenerFn, wrapWithPreventDefault) {
  // Note: we are performing most of the work in the listener function itself
  // to optimize listener registration.
  return function wrapListenerIn_markDirtyAndPreventDefault(e) {
    // Ivy uses `Function` as a special token that allows us to unwrap the function
    // so that it can be invoked programmatically by `DebugNode.triggerEventHandler`.
    if (e === Function) {
      return listenerFn;
    }
    // In order to be backwards compatible with View Engine, events on component host nodes
    // must also mark the component view itself dirty (i.e. the view that it owns).
    const startView = tNode.componentOffset > -1 ? getComponentLViewByIndex(tNode.index, lView) : lView;
    markViewDirty(startView);
    let result = executeListenerWithErrorHandling(lView, context, listenerFn, e);
    // A just-invoked listener function might have coalesced listeners so we need to check for
    // their presence and invoke as needed.
    let nextListenerFn = wrapListenerIn_markDirtyAndPreventDefault.__ngNextListenerFn__;
    while (nextListenerFn) {
      // We should prevent default if any of the listeners explicitly return false
      result = executeListenerWithErrorHandling(lView, context, nextListenerFn, e) && result;
      nextListenerFn = nextListenerFn.__ngNextListenerFn__;
    }
    if (wrapWithPreventDefault && result === false) {
      e.preventDefault();
    }
    return result;
  };
}

/**
 * Retrieves a context at the level specified and saves it as the global, contextViewData.
 * Will get the next level up if level is not specified.
 *
 * This is used to save contexts of parent views so they can be bound in embedded views, or
 * in conjunction with reference() to bind a ref from a parent view.
 *
 * @param level The relative level of the view from which to grab context compared to contextVewData
 * @returns context
 *
 * @codeGenApi
 */
function ɵɵnextContext(level = 1) {
  return nextContextImpl(level);
}

/**
 * Create static text node
 *
 * @param index Index of the node in the data array
 * @param value Static string value to write.
 *
 * @codeGenApi
 */
function ɵɵtext(index, value = '') {
  const lView = getLView();
  const tView = getTView();
  const adjustedIndex = index + HEADER_OFFSET;
  ngDevMode && assertEqual(getBindingIndex(), tView.bindingStartIndex, 'text nodes should be created before any bindings');
  ngDevMode && assertIndexInRange(lView, adjustedIndex);
  const tNode = tView.firstCreatePass ? getOrCreateTNode(tView, adjustedIndex, 1 /* TNodeType.Text */, value, null) : tView.data[adjustedIndex];
  const textNative = _locateOrCreateTextNode(tView, lView, tNode, value);
  lView[adjustedIndex] = textNative;
  if (wasLastNodeCreated()) {
    appendChild(tView, lView, textNative, tNode);
  }
  // Text nodes are self closing.
  setCurrentTNode(tNode, false);
}
let _locateOrCreateTextNode = (tView, lView, tNode, value, index) => {
  lastNodeWasCreated(true);
  return createTextNode(lView[RENDERER], value);
};

/**
 *
 * Update text content with a lone bound value
 *
 * Used when a text node has 1 interpolated value in it, an no additional text
 * surrounds that interpolated value:
 *
 * ```html
 * <div>{{v0}}</div>
 * ```
 *
 * Its compiled representation is:
 *
 * ```ts
 * ɵɵtextInterpolate(v0);
 * ```
 * @returns itself, so that it may be chained.
 * @see textInterpolateV
 * @codeGenApi
 */
function ɵɵtextInterpolate(v0) {
  ɵɵtextInterpolate1('', v0, '');
  return ɵɵtextInterpolate;
}
/**
 *
 * Update text content with single bound value surrounded by other text.
 *
 * Used when a text node has 1 interpolated value in it:
 *
 * ```html
 * <div>prefix{{v0}}suffix</div>
 * ```
 *
 * Its compiled representation is:
 *
 * ```ts
 * ɵɵtextInterpolate1('prefix', v0, 'suffix');
 * ```
 * @returns itself, so that it may be chained.
 * @see textInterpolateV
 * @codeGenApi
 */
function ɵɵtextInterpolate1(prefix, v0, suffix) {
  const lView = getLView();
  const interpolated = interpolation1(lView, prefix, v0, suffix);
  if (interpolated !== NO_CHANGE) {
    textBindingInternal(lView, getSelectedIndex(), interpolated);
  }
  return ɵɵtextInterpolate1;
}
/**
 * The locale id that the application is using by default (for translations and ICU expressions).
 */
const DEFAULT_LOCALE_ID = 'en-US';
/**
 * Sets the locale id that will be used for translations and ICU expressions.
 * This is the ivy version of `LOCALE_ID` that was defined as an injection token for the view engine
 * but is now defined as a global value.
 *
 * @param localeId
 */
function setLocaleId(localeId) {
  assertDefined(localeId, `Expected localeId to be defined`);
  if (typeof localeId === 'string') {
    localeId.toLowerCase().replace(/_/g, '-');
  }
}

/**
 * Represents an instance of an `NgModule` created by an `NgModuleFactory`.
 * Provides access to the `NgModule` instance and related objects.
 *
 * @publicApi
 */
class NgModuleRef$1 {}
/**
 * @publicApi
 *
 * @deprecated
 * This class was mostly used as a part of ViewEngine-based JIT API and is no longer needed in Ivy
 * JIT mode. See [JIT API changes due to ViewEngine deprecation](guide/deprecations#jit-api-changes)
 * for additional context. Angular provides APIs that accept NgModule classes directly (such as
 * [PlatformRef.bootstrapModule](api/core/PlatformRef#bootstrapModule) and
 * [createNgModule](api/core/createNgModule)), consider switching to those APIs instead of
 * using factory-based ones.
 */
class NgModuleFactory$1 {}
class NgModuleRef extends NgModuleRef$1 {
  constructor(ngModuleType, _parent, additionalProviders) {
    super();
    this._parent = _parent;
    // tslint:disable-next-line:require-internal-with-underscore
    this._bootstrapComponents = [];
    this.destroyCbs = [];
    // When bootstrapping a module we have a dependency graph that looks like this:
    // ApplicationRef -> ComponentFactoryResolver -> NgModuleRef. The problem is that if the
    // module being resolved tries to inject the ComponentFactoryResolver, it'll create a
    // circular dependency which will result in a runtime error, because the injector doesn't
    // exist yet. We work around the issue by creating the ComponentFactoryResolver ourselves
    // and providing it, rather than letting the injector resolve it.
    this.componentFactoryResolver = new ComponentFactoryResolver(this);
    const ngModuleDef = getNgModuleDef(ngModuleType);
    ngDevMode && assertDefined(ngModuleDef, `NgModule '${stringify(ngModuleType)}' is not a subtype of 'NgModuleType'.`);
    this._bootstrapComponents = maybeUnwrapFn(ngModuleDef.bootstrap);
    this._r3Injector = createInjectorWithoutInjectorInstances(ngModuleType, _parent, [{
      provide: NgModuleRef$1,
      useValue: this
    }, {
      provide: ComponentFactoryResolver$1,
      useValue: this.componentFactoryResolver
    }, ...additionalProviders], stringify(ngModuleType), new Set(['environment']));
    // We need to resolve the injector types separately from the injector creation, because
    // the module might be trying to use this ref in its constructor for DI which will cause a
    // circular error that will eventually error out, because the injector isn't created yet.
    this._r3Injector.resolveInjectorInitializers();
    this.instance = this._r3Injector.get(ngModuleType);
  }
  get injector() {
    return this._r3Injector;
  }
  destroy() {
    ngDevMode && assertDefined(this.destroyCbs, 'NgModule already destroyed');
    const injector = this._r3Injector;
    !injector.destroyed && injector.destroy();
    this.destroyCbs.forEach(fn => fn());
    this.destroyCbs = null;
  }
  onDestroy(callback) {
    ngDevMode && assertDefined(this.destroyCbs, 'NgModule already destroyed');
    this.destroyCbs.push(callback);
  }
}
class NgModuleFactory extends NgModuleFactory$1 {
  constructor(moduleType) {
    super();
    this.moduleType = moduleType;
  }
  create(parentInjector) {
    return new NgModuleRef(this.moduleType, parentInjector, []);
  }
}
function createNgModuleRefWithProviders(moduleType, parentInjector, additionalProviders) {
  return new NgModuleRef(moduleType, parentInjector, additionalProviders);
}
class EnvironmentNgModuleRefAdapter extends NgModuleRef$1 {
  constructor(config) {
    super();
    this.componentFactoryResolver = new ComponentFactoryResolver(this);
    this.instance = null;
    const injector = new R3Injector([...config.providers, {
      provide: NgModuleRef$1,
      useValue: this
    }, {
      provide: ComponentFactoryResolver$1,
      useValue: this.componentFactoryResolver
    }], config.parent || getNullInjector(), config.debugName, new Set(['environment']));
    this.injector = injector;
    if (config.runEnvironmentInitializers) {
      injector.resolveInjectorInitializers();
    }
  }
  destroy() {
    this.injector.destroy();
  }
  onDestroy(callback) {
    this.injector.onDestroy(callback);
  }
}
/**
 * Create a new environment injector.
 *
 * Learn more about environment injectors in
 * [this guide](guide/standalone-components#environment-injectors).
 *
 * @param providers An array of providers.
 * @param parent A parent environment injector.
 * @param debugName An optional name for this injector instance, which will be used in error
 *     messages.
 *
 * @publicApi
 */
function createEnvironmentInjector(providers, parent, debugName = null) {
  const adapter = new EnvironmentNgModuleRefAdapter({
    providers,
    parent,
    debugName,
    runEnvironmentInitializers: true
  });
  return adapter.injector;
}

/**
 * A service used by the framework to create instances of standalone injectors. Those injectors are
 * created on demand in case of dynamic component instantiation and contain ambient providers
 * collected from the imports graph rooted at a given standalone component.
 */
let StandaloneService = /*#__PURE__*/(() => {
  var _class10;
  class StandaloneService {
    constructor(_injector) {
      this._injector = _injector;
      this.cachedInjectors = new Map();
    }
    getOrCreateStandaloneInjector(componentDef) {
      if (!componentDef.standalone) {
        return null;
      }
      if (!this.cachedInjectors.has(componentDef)) {
        const providers = internalImportProvidersFrom(false, componentDef.type);
        const standaloneInjector = providers.length > 0 ? createEnvironmentInjector([providers], this._injector, `Standalone[${componentDef.type.name}]`) : null;
        this.cachedInjectors.set(componentDef, standaloneInjector);
      }
      return this.cachedInjectors.get(componentDef);
    }
    ngOnDestroy() {
      try {
        for (const injector of this.cachedInjectors.values()) {
          if (injector !== null) {
            injector.destroy();
          }
        }
      } finally {
        this.cachedInjectors.clear();
      }
    }
    /** @nocollapse */
  }

  _class10 = StandaloneService;
  _class10.ɵprov = ɵɵdefineInjectable({
    token: _class10,
    providedIn: 'environment',
    factory: () => new _class10(ɵɵinject(EnvironmentInjector))
  });
  return StandaloneService;
})();
/**
 * A feature that acts as a setup code for the {@link StandaloneService}.
 *
 * The most important responsibility of this feature is to expose the "getStandaloneInjector"
 * function (an entry points to a standalone injector creation) on a component definition object. We
 * go through the features infrastructure to make sure that the standalone injector creation logic
 * is tree-shakable and not included in applications that don't use standalone components.
 *
 * @codeGenApi
 */
function ɵɵStandaloneFeature(definition) {
  definition.getStandaloneInjector = parentInjector => {
    return parentInjector.get(StandaloneService).getOrCreateStandaloneInjector(definition);
  };
}

/**
 * Retrieves the component instance associated with a given DOM element.
 *
 * @usageNotes
 * Given the following DOM structure:
 *
 * ```html
 * <app-root>
 *   <div>
 *     <child-comp></child-comp>
 *   </div>
 * </app-root>
 * ```
 *
 * Calling `getComponent` on `<child-comp>` will return the instance of `ChildComponent`
 * associated with this DOM element.
 *
 * Calling the function on `<app-root>` will return the `MyApp` instance.
 *
 *
 * @param element DOM element from which the component should be retrieved.
 * @returns Component instance associated with the element or `null` if there
 *    is no component associated with it.
 *
 * @publicApi
 * @globalApi ng
 */
function getComponent(element) {
  ngDevMode && assertDomElement(element);
  const context = getLContext(element);
  if (context === null) return null;
  if (context.component === undefined) {
    const lView = context.lView;
    if (lView === null) {
      return null;
    }
    context.component = getComponentAtNodeIndex(context.nodeIndex, lView);
  }
  return context.component;
}
/**
 * If inside an embedded view (e.g. `*ngIf` or `*ngFor`), retrieves the context of the embedded
 * view that the element is part of. Otherwise retrieves the instance of the component whose view
 * owns the element (in this case, the result is the same as calling `getOwningComponent`).
 *
 * @param element Element for which to get the surrounding component instance.
 * @returns Instance of the component that is around the element or null if the element isn't
 *    inside any component.
 *
 * @publicApi
 * @globalApi ng
 */
function getContext(element) {
  assertDomElement(element);
  const context = getLContext(element);
  const lView = context ? context.lView : null;
  return lView === null ? null : lView[CONTEXT];
}
/**
 * Retrieves the component instance whose view contains the DOM element.
 *
 * For example, if `<child-comp>` is used in the template of `<app-comp>`
 * (i.e. a `ViewChild` of `<app-comp>`), calling `getOwningComponent` on `<child-comp>`
 * would return `<app-comp>`.
 *
 * @param elementOrDir DOM element, component or directive instance
 *    for which to retrieve the root components.
 * @returns Component instance whose view owns the DOM element or null if the element is not
 *    part of a component view.
 *
 * @publicApi
 * @globalApi ng
 */
function getOwningComponent(elementOrDir) {
  const context = getLContext(elementOrDir);
  let lView = context ? context.lView : null;
  if (lView === null) return null;
  let parent;
  while (lView[TVIEW].type === 2 /* TViewType.Embedded */ && (parent = getLViewParent(lView))) {
    lView = parent;
  }
  return lView[FLAGS] & 512 /* LViewFlags.IsRoot */ ? null : lView[CONTEXT];
}
/**
 * Retrieves all root components associated with a DOM element, directive or component instance.
 * Root components are those which have been bootstrapped by Angular.
 *
 * @param elementOrDir DOM element, component or directive instance
 *    for which to retrieve the root components.
 * @returns Root components associated with the target object.
 *
 * @publicApi
 * @globalApi ng
 */
function getRootComponents(elementOrDir) {
  const lView = readPatchedLView(elementOrDir);
  return lView !== null ? [getRootContext(lView)] : [];
}
/**
 * Retrieves an `Injector` associated with an element, component or directive instance.
 *
 * @param elementOrDir DOM element, component or directive instance for which to
 *    retrieve the injector.
 * @returns Injector associated with the element, component or directive instance.
 *
 * @publicApi
 * @globalApi ng
 */
function getInjector(elementOrDir) {
  const context = getLContext(elementOrDir);
  const lView = context ? context.lView : null;
  if (lView === null) return Injector.NULL;
  const tNode = lView[TVIEW].data[context.nodeIndex];
  return new NodeInjector(tNode, lView);
}
/**
 * Retrieves directive instances associated with a given DOM node. Does not include
 * component instances.
 *
 * @usageNotes
 * Given the following DOM structure:
 *
 * ```html
 * <app-root>
 *   <button my-button></button>
 *   <my-comp></my-comp>
 * </app-root>
 * ```
 *
 * Calling `getDirectives` on `<button>` will return an array with an instance of the `MyButton`
 * directive that is associated with the DOM node.
 *
 * Calling `getDirectives` on `<my-comp>` will return an empty array.
 *
 * @param node DOM node for which to get the directives.
 * @returns Array of directives associated with the node.
 *
 * @publicApi
 * @globalApi ng
 */
function getDirectives(node) {
  // Skip text nodes because we can't have directives associated with them.
  if (node instanceof Text) {
    return [];
  }
  const context = getLContext(node);
  const lView = context ? context.lView : null;
  if (lView === null) {
    return [];
  }
  const tView = lView[TVIEW];
  const nodeIndex = context.nodeIndex;
  if (!tView?.data[nodeIndex]) {
    return [];
  }
  if (context.directives === undefined) {
    context.directives = getDirectivesAtNodeIndex(nodeIndex, lView);
  }
  // The `directives` in this case are a named array called `LComponentView`. Clone the
  // result so we don't expose an internal data structure in the user's console.
  return context.directives === null ? [] : [...context.directives];
}
/**
 * Returns the debug (partial) metadata for a particular directive or component instance.
 * The function accepts an instance of a directive or component and returns the corresponding
 * metadata.
 *
 * @param directiveOrComponentInstance Instance of a directive or component
 * @returns metadata of the passed directive or component
 *
 * @publicApi
 * @globalApi ng
 */
function getDirectiveMetadata$1(directiveOrComponentInstance) {
  const {
    constructor
  } = directiveOrComponentInstance;
  if (!constructor) {
    throw new Error('Unable to find the instance constructor');
  }
  // In case a component inherits from a directive, we may have component and directive metadata
  // To ensure we don't get the metadata of the directive, we want to call `getComponentDef` first.
  const componentDef = getComponentDef(constructor);
  if (componentDef) {
    return {
      inputs: componentDef.inputs,
      outputs: componentDef.outputs,
      encapsulation: componentDef.encapsulation,
      changeDetection: componentDef.onPush ? ChangeDetectionStrategy.OnPush : ChangeDetectionStrategy.Default
    };
  }
  const directiveDef = getDirectiveDef(constructor);
  if (directiveDef) {
    return {
      inputs: directiveDef.inputs,
      outputs: directiveDef.outputs
    };
  }
  return null;
}
/**
 * Retrieves the host element of a component or directive instance.
 * The host element is the DOM element that matched the selector of the directive.
 *
 * @param componentOrDirective Component or directive instance for which the host
 *     element should be retrieved.
 * @returns Host element of the target.
 *
 * @publicApi
 * @globalApi ng
 */
function getHostElement(componentOrDirective) {
  return getLContext(componentOrDirective).native;
}
/**
 * Retrieves a list of event listeners associated with a DOM element. The list does include host
 * listeners, but it does not include event listeners defined outside of the Angular context
 * (e.g. through `addEventListener`).
 *
 * @usageNotes
 * Given the following DOM structure:
 *
 * ```html
 * <app-root>
 *   <div (click)="doSomething()"></div>
 * </app-root>
 * ```
 *
 * Calling `getListeners` on `<div>` will return an object that looks as follows:
 *
 * ```ts
 * {
 *   name: 'click',
 *   element: <div>,
 *   callback: () => doSomething(),
 *   useCapture: false
 * }
 * ```
 *
 * @param element Element for which the DOM listeners should be retrieved.
 * @returns Array of event listeners on the DOM element.
 *
 * @publicApi
 * @globalApi ng
 */
function getListeners(element) {
  ngDevMode && assertDomElement(element);
  const lContext = getLContext(element);
  const lView = lContext === null ? null : lContext.lView;
  if (lView === null) return [];
  const tView = lView[TVIEW];
  const lCleanup = lView[CLEANUP];
  const tCleanup = tView.cleanup;
  const listeners = [];
  if (tCleanup && lCleanup) {
    for (let i = 0; i < tCleanup.length;) {
      const firstParam = tCleanup[i++];
      const secondParam = tCleanup[i++];
      if (typeof firstParam === 'string') {
        const name = firstParam;
        const listenerElement = unwrapRNode(lView[secondParam]);
        const callback = lCleanup[tCleanup[i++]];
        const useCaptureOrIndx = tCleanup[i++];
        // if useCaptureOrIndx is boolean then report it as is.
        // if useCaptureOrIndx is positive number then it in unsubscribe method
        // if useCaptureOrIndx is negative number then it is a Subscription
        const type = typeof useCaptureOrIndx === 'boolean' || useCaptureOrIndx >= 0 ? 'dom' : 'output';
        const useCapture = typeof useCaptureOrIndx === 'boolean' ? useCaptureOrIndx : false;
        if (element == listenerElement) {
          listeners.push({
            element,
            name,
            callback,
            useCapture,
            type
          });
        }
      }
    }
  }
  listeners.sort(sortListeners);
  return listeners;
}
function sortListeners(a, b) {
  if (a.name == b.name) return 0;
  return a.name < b.name ? -1 : 1;
}
/** Asserts that a value is a DOM Element. */
function assertDomElement(value) {
  if (typeof Element !== 'undefined' && !(value instanceof Element)) {
    throw new Error('Expecting instance of DOM Element');
  }
}

/// <reference types="rxjs" />
class EventEmitter_ extends Subject {
  constructor(isAsync = false) {
    super();
    this.__isAsync = isAsync;
  }
  emit(value) {
    super.next(value);
  }
  subscribe(observerOrNext, error, complete) {
    let nextFn = observerOrNext;
    let errorFn = error || (() => null);
    let completeFn = complete;
    if (observerOrNext && typeof observerOrNext === 'object') {
      const observer = observerOrNext;
      nextFn = observer.next?.bind(observer);
      errorFn = observer.error?.bind(observer);
      completeFn = observer.complete?.bind(observer);
    }
    if (this.__isAsync) {
      errorFn = _wrapInTimeout(errorFn);
      if (nextFn) {
        nextFn = _wrapInTimeout(nextFn);
      }
      if (completeFn) {
        completeFn = _wrapInTimeout(completeFn);
      }
    }
    const sink = super.subscribe({
      next: nextFn,
      error: errorFn,
      complete: completeFn
    });
    if (observerOrNext instanceof Subscription) {
      observerOrNext.add(sink);
    }
    return sink;
  }
}
function _wrapInTimeout(fn) {
  return value => {
    setTimeout(fn, undefined, value);
  };
}
/**
 * @publicApi
 */
const EventEmitter = EventEmitter_;
function createAndRenderEmbeddedLView(declarationLView, templateTNode, context, options) {
  const embeddedTView = templateTNode.tView;
  ngDevMode && assertDefined(embeddedTView, 'TView must be defined for a template node.');
  ngDevMode && assertTNodeForLView(templateTNode, declarationLView);
  // Embedded views follow the change detection strategy of the view they're declared in.
  const isSignalView = declarationLView[FLAGS] & 4096 /* LViewFlags.SignalView */;
  const viewFlags = isSignalView ? 4096 /* LViewFlags.SignalView */ : 16 /* LViewFlags.CheckAlways */;
  const embeddedLView = createLView(declarationLView, embeddedTView, context, viewFlags, null, templateTNode, null, null, null, options?.injector ?? null, options?.hydrationInfo ?? null);
  const declarationLContainer = declarationLView[templateTNode.index];
  ngDevMode && assertLContainer(declarationLContainer);
  embeddedLView[DECLARATION_LCONTAINER] = declarationLContainer;
  const declarationViewLQueries = declarationLView[QUERIES];
  if (declarationViewLQueries !== null) {
    embeddedLView[QUERIES] = declarationViewLQueries.createEmbeddedView(embeddedTView);
  }
  // execute creation mode of a view
  renderView(embeddedTView, embeddedLView, context);
  return embeddedLView;
}
function addLViewToLContainer(lContainer, lView, index, addToDOM = true) {
  const tView = lView[TVIEW];
  // insert to the view tree so the new view can be change-detected
  insertView(tView, lView, lContainer, index);
  // insert to the view to the DOM tree
  if (addToDOM) {
    const beforeNode = getBeforeNodeForView(index, lContainer);
    const renderer = lView[RENDERER];
    const parentRNode = nativeParentNode(renderer, lContainer[NATIVE]);
    if (parentRNode !== null) {
      addViewToDOM(tView, lContainer[T_HOST], renderer, lView, parentRNode, beforeNode);
    }
  }
}

/**
 * Represents an embedded template that can be used to instantiate embedded views.
 * To instantiate embedded views based on a template, use the `ViewContainerRef`
 * method `createEmbeddedView()`.
 *
 * Access a `TemplateRef` instance by placing a directive on an `<ng-template>`
 * element (or directive prefixed with `*`). The `TemplateRef` for the embedded view
 * is injected into the constructor of the directive,
 * using the `TemplateRef` token.
 *
 * You can also use a `Query` to find a `TemplateRef` associated with
 * a component or a directive.
 *
 * @see {@link ViewContainerRef}
 * @see [Navigate the Component Tree with DI](guide/dependency-injection-navtree)
 *
 * @publicApi
 */
let TemplateRef = /*#__PURE__*/(() => {
  var _class12;
  class TemplateRef {}
  _class12 = TemplateRef;
  /**
   * @internal
   * @nocollapse
   */
  _class12.__NG_ELEMENT_ID__ = injectTemplateRef;
  return TemplateRef;
})();
const ViewEngineTemplateRef = TemplateRef;
// TODO(alxhub): combine interface and implementation. Currently this is challenging since something
// in g3 depends on them being separate.
const R3TemplateRef = class TemplateRef extends ViewEngineTemplateRef {
  constructor(_declarationLView, _declarationTContainer, elementRef) {
    super();
    this._declarationLView = _declarationLView;
    this._declarationTContainer = _declarationTContainer;
    this.elementRef = elementRef;
  }
  /**
   * Returns an `ssrId` associated with a TView, which was used to
   * create this instance of the `TemplateRef`.
   *
   * @internal
   */
  get ssrId() {
    return this._declarationTContainer.tView?.ssrId || null;
  }
  createEmbeddedView(context, injector) {
    return this.createEmbeddedViewImpl(context, injector);
  }
  /**
   * @internal
   */
  createEmbeddedViewImpl(context, injector, hydrationInfo) {
    const embeddedLView = createAndRenderEmbeddedLView(this._declarationLView, this._declarationTContainer, context, {
      injector,
      hydrationInfo
    });
    return new ViewRef$1(embeddedLView);
  }
};
/**
 * Creates a TemplateRef given a node.
 *
 * @returns The TemplateRef instance to use
 */
function injectTemplateRef() {
  return createTemplateRef(getCurrentTNode(), getLView());
}
/**
 * Creates a TemplateRef and stores it on the injector.
 *
 * @param hostTNode The node on which a TemplateRef is requested
 * @param hostLView The `LView` to which the node belongs
 * @returns The TemplateRef instance or null if we can't create a TemplateRef on a given node type
 */
function createTemplateRef(hostTNode, hostLView) {
  if (hostTNode.type & 4 /* TNodeType.Container */) {
    ngDevMode && assertDefined(hostTNode.tView, 'TView must be allocated');
    return new R3TemplateRef(hostLView, hostTNode, createElementRef(hostTNode, hostLView));
  }
  return null;
}
/**
 * Reference to a function that searches for a matching dehydrated views
 * stored on a given lContainer.
 * Returns `null` by default, when hydration is not enabled.
 */
let _findMatchingDehydratedViewImpl = (lContainer, template) => null;
function findMatchingDehydratedView(lContainer, template) {
  return _findMatchingDehydratedViewImpl();
}

/**
 * Represents a container where one or more views can be attached to a component.
 *
 * Can contain *host views* (created by instantiating a
 * component with the `createComponent()` method), and *embedded views*
 * (created by instantiating a `TemplateRef` with the `createEmbeddedView()` method).
 *
 * A view container instance can contain other view containers,
 * creating a [view hierarchy](guide/glossary#view-hierarchy).
 *
 * @see {@link ComponentRef}
 * @see {@link EmbeddedViewRef}
 *
 * @publicApi
 */
let ViewContainerRef = /*#__PURE__*/(() => {
  var _class13;
  class ViewContainerRef {}
  _class13 = ViewContainerRef;
  /**
   * @internal
   * @nocollapse
   */
  _class13.__NG_ELEMENT_ID__ = injectViewContainerRef;
  return ViewContainerRef;
})();
/**
 * Creates a ViewContainerRef and stores it on the injector. Or, if the ViewContainerRef
 * already exists, retrieves the existing ViewContainerRef.
 *
 * @returns The ViewContainerRef instance to use
 */
function injectViewContainerRef() {
  const previousTNode = getCurrentTNode();
  return createContainerRef(previousTNode, getLView());
}
const VE_ViewContainerRef = ViewContainerRef;
// TODO(alxhub): cleaning up this indirection triggers a subtle bug in Closure in g3. Once the fix
// for that lands, this can be cleaned up.
const R3ViewContainerRef = class ViewContainerRef extends VE_ViewContainerRef {
  constructor(_lContainer, _hostTNode, _hostLView) {
    super();
    this._lContainer = _lContainer;
    this._hostTNode = _hostTNode;
    this._hostLView = _hostLView;
  }
  get element() {
    return createElementRef(this._hostTNode, this._hostLView);
  }
  get injector() {
    return new NodeInjector(this._hostTNode, this._hostLView);
  }
  /** @deprecated No replacement */
  get parentInjector() {
    const parentLocation = getParentInjectorLocation(this._hostTNode, this._hostLView);
    if (hasParentInjector(parentLocation)) {
      const parentView = getParentInjectorView(parentLocation, this._hostLView);
      const injectorIndex = getParentInjectorIndex(parentLocation);
      ngDevMode && assertNodeInjector(parentView, injectorIndex);
      const parentTNode = parentView[TVIEW].data[injectorIndex + 8 /* NodeInjectorOffset.TNODE */];
      return new NodeInjector(parentTNode, parentView);
    } else {
      return new NodeInjector(null, this._hostLView);
    }
  }
  clear() {
    while (this.length > 0) {
      this.remove(this.length - 1);
    }
  }
  get(index) {
    const viewRefs = getViewRefs(this._lContainer);
    return viewRefs !== null && viewRefs[index] || null;
  }
  get length() {
    return this._lContainer.length - CONTAINER_HEADER_OFFSET;
  }
  createEmbeddedView(templateRef, context, indexOrOptions) {
    let index;
    let injector;
    if (typeof indexOrOptions === 'number') {
      index = indexOrOptions;
    } else if (indexOrOptions != null) {
      index = indexOrOptions.index;
      injector = indexOrOptions.injector;
    }
    const hydrationInfo = findMatchingDehydratedView(this._lContainer, templateRef.ssrId);
    const viewRef = templateRef.createEmbeddedViewImpl(context || {}, injector, hydrationInfo);
    // If there is a matching dehydrated view, but the host TNode is located in the skip
    // hydration block, this means that the content was detached (as a part of the skip
    // hydration logic) and it needs to be appended into the DOM.
    const skipDomInsertion = !!hydrationInfo ;
    this.insertImpl(viewRef, index, skipDomInsertion);
    return viewRef;
  }
  createComponent(componentFactoryOrType, indexOrOptions, injector, projectableNodes, environmentInjector) {
    const isComponentFactory = componentFactoryOrType && !isType(componentFactoryOrType);
    let index;
    // This function supports 2 signatures and we need to handle options correctly for both:
    //   1. When first argument is a Component type. This signature also requires extra
    //      options to be provided as object (more ergonomic option).
    //   2. First argument is a Component factory. In this case extra options are represented as
    //      positional arguments. This signature is less ergonomic and will be deprecated.
    if (isComponentFactory) {
      if (ngDevMode) {
        assertEqual(typeof indexOrOptions !== 'object', true, 'It looks like Component factory was provided as the first argument ' + 'and an options object as the second argument. This combination of arguments ' + 'is incompatible. You can either change the first argument to provide Component ' + 'type or change the second argument to be a number (representing an index at ' + 'which to insert the new component\'s host view into this container)');
      }
      index = indexOrOptions;
    } else {
      if (ngDevMode) {
        assertDefined(getComponentDef(componentFactoryOrType), `Provided Component class doesn't contain Component definition. ` + `Please check whether provided class has @Component decorator.`);
        assertEqual(typeof indexOrOptions !== 'number', true, 'It looks like Component type was provided as the first argument ' + 'and a number (representing an index at which to insert the new component\'s ' + 'host view into this container as the second argument. This combination of arguments ' + 'is incompatible. Please use an object as the second argument instead.');
      }
      const options = indexOrOptions || {};
      if (ngDevMode && options.environmentInjector && options.ngModuleRef) {
        throwError(`Cannot pass both environmentInjector and ngModuleRef options to createComponent().`);
      }
      index = options.index;
      injector = options.injector;
      projectableNodes = options.projectableNodes;
      environmentInjector = options.environmentInjector || options.ngModuleRef;
    }
    const componentFactory = isComponentFactory ? componentFactoryOrType : new ComponentFactory(getComponentDef(componentFactoryOrType));
    const contextInjector = injector || this.parentInjector;
    // If an `NgModuleRef` is not provided explicitly, try retrieving it from the DI tree.
    if (!environmentInjector && componentFactory.ngModule == null) {
      // For the `ComponentFactory` case, entering this logic is very unlikely, since we expect that
      // an instance of a `ComponentFactory`, resolved via `ComponentFactoryResolver` would have an
      // `ngModule` field. This is possible in some test scenarios and potentially in some JIT-based
      // use-cases. For the `ComponentFactory` case we preserve backwards-compatibility and try
      // using a provided injector first, then fall back to the parent injector of this
      // `ViewContainerRef` instance.
      //
      // For the factory-less case, it's critical to establish a connection with the module
      // injector tree (by retrieving an instance of an `NgModuleRef` and accessing its injector),
      // so that a component can use DI tokens provided in MgModules. For this reason, we can not
      // rely on the provided injector, since it might be detached from the DI tree (for example, if
      // it was created via `Injector.create` without specifying a parent injector, or if an
      // injector is retrieved from an `NgModuleRef` created via `createNgModule` using an
      // NgModule outside of a module tree). Instead, we always use `ViewContainerRef`'s parent
      // injector, which is normally connected to the DI tree, which includes module injector
      // subtree.
      const _injector = isComponentFactory ? contextInjector : this.parentInjector;
      // DO NOT REFACTOR. The code here used to have a `injector.get(NgModuleRef, null) ||
      // undefined` expression which seems to cause internal google apps to fail. This is documented
      // in the following internal bug issue: go/b/142967802
      const result = _injector.get(EnvironmentInjector, null);
      if (result) {
        environmentInjector = result;
      }
    }
    const componentDef = getComponentDef(componentFactory.componentType ?? {});
    const dehydratedView = findMatchingDehydratedView(this._lContainer, componentDef?.id ?? null);
    const rNode = null;
    const componentRef = componentFactory.create(contextInjector, projectableNodes, rNode, environmentInjector);
    // If there is a matching dehydrated view, but the host TNode is located in the skip
    // hydration block, this means that the content was detached (as a part of the skip
    // hydration logic) and it needs to be appended into the DOM.
    const skipDomInsertion = !!dehydratedView ;
    this.insertImpl(componentRef.hostView, index, skipDomInsertion);
    return componentRef;
  }
  insert(viewRef, index) {
    return this.insertImpl(viewRef, index, false);
  }
  insertImpl(viewRef, index, skipDomInsertion) {
    const lView = viewRef._lView;
    lView[TVIEW];
    if (ngDevMode && viewRef.destroyed) {
      throw new Error('Cannot insert a destroyed View in a ViewContainer!');
    }
    if (viewAttachedToContainer(lView)) {
      // If view is already attached, detach it first so we clean up references appropriately.
      const prevIdx = this.indexOf(viewRef);
      // A view might be attached either to this or a different container. The `prevIdx` for
      // those cases will be:
      // equal to -1 for views attached to this ViewContainerRef
      // >= 0 for views attached to a different ViewContainerRef
      if (prevIdx !== -1) {
        this.detach(prevIdx);
      } else {
        const prevLContainer = lView[PARENT];
        ngDevMode && assertEqual(isLContainer(prevLContainer), true, 'An attached view should have its PARENT point to a container.');
        // We need to re-create a R3ViewContainerRef instance since those are not stored on
        // LView (nor anywhere else).
        const prevVCRef = new R3ViewContainerRef(prevLContainer, prevLContainer[T_HOST], prevLContainer[PARENT]);
        prevVCRef.detach(prevVCRef.indexOf(viewRef));
      }
    }
    // Logical operation of adding `LView` to `LContainer`
    const adjustedIdx = this._adjustIndex(index);
    const lContainer = this._lContainer;
    addLViewToLContainer(lContainer, lView, adjustedIdx, !skipDomInsertion);
    viewRef.attachToViewContainerRef();
    addToArray(getOrCreateViewRefs(lContainer), adjustedIdx, viewRef);
    return viewRef;
  }
  move(viewRef, newIndex) {
    if (ngDevMode && viewRef.destroyed) {
      throw new Error('Cannot move a destroyed View in a ViewContainer!');
    }
    return this.insert(viewRef, newIndex);
  }
  indexOf(viewRef) {
    const viewRefsArr = getViewRefs(this._lContainer);
    return viewRefsArr !== null ? viewRefsArr.indexOf(viewRef) : -1;
  }
  remove(index) {
    const adjustedIdx = this._adjustIndex(index, -1);
    const detachedView = detachView(this._lContainer, adjustedIdx);
    if (detachedView) {
      // Before destroying the view, remove it from the container's array of `ViewRef`s.
      // This ensures the view container length is updated before calling
      // `destroyLView`, which could recursively call view container methods that
      // rely on an accurate container length.
      // (e.g. a method on this view container being called by a child directive's OnDestroy
      // lifecycle hook)
      removeFromArray(getOrCreateViewRefs(this._lContainer), adjustedIdx);
      destroyLView(detachedView[TVIEW], detachedView);
    }
  }
  detach(index) {
    const adjustedIdx = this._adjustIndex(index, -1);
    const view = detachView(this._lContainer, adjustedIdx);
    const wasDetached = view && removeFromArray(getOrCreateViewRefs(this._lContainer), adjustedIdx) != null;
    return wasDetached ? new ViewRef$1(view) : null;
  }
  _adjustIndex(index, shift = 0) {
    if (index == null) {
      return this.length + shift;
    }
    if (ngDevMode) {
      assertGreaterThan(index, -1, `ViewRef index must be positive, got ${index}`);
      // +1 because it's legal to insert at the end.
      assertLessThan(index, this.length + 1 + shift, 'index');
    }
    return index;
  }
};
function getViewRefs(lContainer) {
  return lContainer[VIEW_REFS];
}
function getOrCreateViewRefs(lContainer) {
  return lContainer[VIEW_REFS] || (lContainer[VIEW_REFS] = []);
}
/**
 * Creates a ViewContainerRef and stores it on the injector.
 *
 * @param hostTNode The node that is requesting a ViewContainerRef
 * @param hostLView The view to which the node belongs
 * @returns The ViewContainerRef instance to use
 */
function createContainerRef(hostTNode, hostLView) {
  ngDevMode && assertTNodeType(hostTNode, 12 /* TNodeType.AnyContainer */ | 3 /* TNodeType.AnyRNode */);
  let lContainer;
  const slotValue = hostLView[hostTNode.index];
  if (isLContainer(slotValue)) {
    // If the host is a container, we don't need to create a new LContainer
    lContainer = slotValue;
  } else {
    // An LContainer anchor can not be `null`, but we set it here temporarily
    // and update to the actual value later in this function (see
    // `_locateOrCreateAnchorNode`).
    lContainer = createLContainer(slotValue, hostLView, null, hostTNode);
    hostLView[hostTNode.index] = lContainer;
    addToViewTree(hostLView, lContainer);
  }
  _locateOrCreateAnchorNode(lContainer, hostLView, hostTNode, slotValue);
  return new R3ViewContainerRef(lContainer, hostTNode, hostLView);
}
/**
 * Creates and inserts a comment node that acts as an anchor for a view container.
 *
 * If the host is a regular element, we have to insert a comment node manually which will
 * be used as an anchor when inserting elements. In this specific case we use low-level DOM
 * manipulation to insert it.
 */
function insertAnchorNode(hostLView, hostTNode) {
  const renderer = hostLView[RENDERER];
  ngDevMode && ngDevMode.rendererCreateComment++;
  const commentNode = renderer.createComment(ngDevMode ? 'container' : '');
  const hostNative = getNativeByTNode(hostTNode, hostLView);
  const parentOfHostNative = nativeParentNode(renderer, hostNative);
  nativeInsertBefore(renderer, parentOfHostNative, commentNode, nativeNextSibling(renderer, hostNative), false);
  return commentNode;
}
let _locateOrCreateAnchorNode = createAnchorNode;
/**
 * Regular creation mode: an anchor is created and
 * assigned to the `lContainer[NATIVE]` slot.
 */
function createAnchorNode(lContainer, hostLView, hostTNode, slotValue) {
  // We already have a native element (anchor) set, return.
  if (lContainer[NATIVE]) return;
  let commentNode;
  // If the host is an element container, the native host element is guaranteed to be a
  // comment and we can reuse that comment as anchor element for the new LContainer.
  // The comment node in question is already part of the DOM structure so we don't need to append
  // it again.
  if (hostTNode.type & 8 /* TNodeType.ElementContainer */) {
    commentNode = unwrapRNode(slotValue);
  } else {
    commentNode = insertAnchorNode(hostLView, hostTNode);
  }
  lContainer[NATIVE] = commentNode;
}
let jitOptions = null;
function setJitOptions(options) {
  if (jitOptions !== null) {
    if (options.defaultEncapsulation !== jitOptions.defaultEncapsulation) {
      ngDevMode && console.error('Provided value for `defaultEncapsulation` can not be changed once it has been set.');
      return;
    }
    if (options.preserveWhitespaces !== jitOptions.preserveWhitespaces) {
      ngDevMode && console.error('Provided value for `preserveWhitespaces` can not be changed once it has been set.');
      return;
    }
  }
  jitOptions = options;
}

/**
 * A [DI token](guide/glossary#di-token "DI token definition") that you can use to provide
 * one or more initialization functions.
 *
 * The provided functions are injected at application startup and executed during
 * app initialization. If any of these functions returns a Promise or an Observable, initialization
 * does not complete until the Promise is resolved or the Observable is completed.
 *
 * You can, for example, create a factory function that loads language data
 * or an external configuration, and provide that function to the `APP_INITIALIZER` token.
 * The function is executed during the application bootstrap process,
 * and the needed data is available on startup.
 *
 * @see {@link ApplicationInitStatus}
 *
 * @usageNotes
 *
 * The following example illustrates how to configure a multi-provider using `APP_INITIALIZER` token
 * and a function returning a promise.
 *
 * ```
 *  function initializeApp(): Promise<any> {
 *    return new Promise((resolve, reject) => {
 *      // Do some asynchronous stuff
 *      resolve();
 *    });
 *  }
 *
 *  @NgModule({
 *   imports: [BrowserModule],
 *   declarations: [AppComponent],
 *   bootstrap: [AppComponent],
 *   providers: [{
 *     provide: APP_INITIALIZER,
 *     useFactory: () => initializeApp,
 *     multi: true
 *    }]
 *   })
 *  export class AppModule {}
 * ```
 *
 * It's also possible to configure a multi-provider using `APP_INITIALIZER` token and a function
 * returning an observable, see an example below. Note: the `HttpClient` in this example is used for
 * demo purposes to illustrate how the factory function can work with other providers available
 * through DI.
 *
 * ```
 *  function initializeAppFactory(httpClient: HttpClient): () => Observable<any> {
 *   return () => httpClient.get("https://someUrl.com/api/user")
 *     .pipe(
 *        tap(user => { ... })
 *     );
 *  }
 *
 *  @NgModule({
 *    imports: [BrowserModule, HttpClientModule],
 *    declarations: [AppComponent],
 *    bootstrap: [AppComponent],
 *    providers: [{
 *      provide: APP_INITIALIZER,
 *      useFactory: initializeAppFactory,
 *      deps: [HttpClient],
 *      multi: true
 *    }]
 *  })
 *  export class AppModule {}
 * ```
 *
 * @publicApi
 */
const APP_INITIALIZER = /*#__PURE__*/new InjectionToken('Application Initializer');
/**
 * A class that reflects the state of running {@link APP_INITIALIZER} functions.
 *
 * @publicApi
 */
let ApplicationInitStatus = /*#__PURE__*/(() => {
  var _class14;
  class ApplicationInitStatus {
    constructor() {
      this.initialized = false;
      this.done = false;
      this.donePromise = new Promise((res, rej) => {
        this.resolve = res;
        this.reject = rej;
      });
      this.appInits = inject(APP_INITIALIZER, {
        optional: true
      }) ?? [];
      if ((typeof ngDevMode === 'undefined' || ngDevMode) && !Array.isArray(this.appInits)) {
        throw new RuntimeError(-209 /* RuntimeErrorCode.INVALID_MULTI_PROVIDER */, 'Unexpected type of the `APP_INITIALIZER` token value ' + `(expected an array, but got ${typeof this.appInits}). ` + 'Please check that the `APP_INITIALIZER` token is configured as a ' + '`multi: true` provider.');
      }
    }
    /** @internal */
    runInitializers() {
      if (this.initialized) {
        return;
      }
      const asyncInitPromises = [];
      for (const appInits of this.appInits) {
        const initResult = appInits();
        if (isPromise(initResult)) {
          asyncInitPromises.push(initResult);
        } else if (isSubscribable(initResult)) {
          const observableAsPromise = new Promise((resolve, reject) => {
            initResult.subscribe({
              complete: resolve,
              error: reject
            });
          });
          asyncInitPromises.push(observableAsPromise);
        }
      }
      const complete = () => {
        // @ts-expect-error overwriting a readonly
        this.done = true;
        this.resolve();
      };
      Promise.all(asyncInitPromises).then(() => {
        complete();
      }).catch(e => {
        this.reject(e);
      });
      if (asyncInitPromises.length === 0) {
        complete();
      }
      this.initialized = true;
    }
  }
  _class14 = ApplicationInitStatus;
  _class14.ɵfac = function ApplicationInitStatus_Factory(t) {
    return new (t || _class14)();
  };
  _class14.ɵprov = /*@__PURE__*/ɵɵdefineInjectable({
    token: _class14,
    factory: _class14.ɵfac,
    providedIn: 'root'
  });
  return ApplicationInitStatus;
})();
let Console = /*#__PURE__*/(() => {
  var _class15;
  class Console {
    log(message) {
      // tslint:disable-next-line:no-console
      console.log(message);
    }
    // Note: for reporting errors use `DOM.logError()` as it is platform specific
    warn(message) {
      // tslint:disable-next-line:no-console
      console.warn(message);
    }
  }
  _class15 = Console;
  _class15.ɵfac = function Console_Factory(t) {
    return new (t || _class15)();
  };
  _class15.ɵprov = /*@__PURE__*/ɵɵdefineInjectable({
    token: _class15,
    factory: _class15.ɵfac,
    providedIn: 'platform'
  });
  return Console;
})();

/**
 * Work out the locale from the potential global properties.
 *
 * * Closure Compiler: use `goog.LOCALE`.
 * * Ivy enabled: use `$localize.locale`
 */
function getGlobalLocale() {
  if (typeof ngI18nClosureMode !== 'undefined' && ngI18nClosureMode && typeof goog !== 'undefined' && goog.LOCALE !== 'en') {
    // * The default `goog.LOCALE` value is `en`, while Angular used `en-US`.
    // * In order to preserve backwards compatibility, we use Angular default value over
    //   Closure Compiler's one.
    return goog.LOCALE;
  } else {
    // KEEP `typeof $localize !== 'undefined' && $localize.locale` IN SYNC WITH THE LOCALIZE
    // COMPILE-TIME INLINER.
    //
    // * During compile time inlining of translations the expression will be replaced
    //   with a string literal that is the current locale. Other forms of this expression are not
    //   guaranteed to be replaced.
    //
    // * During runtime translation evaluation, the developer is required to set `$localize.locale`
    //   if required, or just to provide their own `LOCALE_ID` provider.
    return typeof $localize !== 'undefined' && $localize.locale || DEFAULT_LOCALE_ID;
  }
}
/**
 * Provide this token to set the locale of your application.
 * It is used for i18n extraction, by i18n pipes (DatePipe, I18nPluralPipe, CurrencyPipe,
 * DecimalPipe and PercentPipe) and by ICU expressions.
 *
 * See the [i18n guide](guide/i18n-common-locale-id) for more information.
 *
 * @usageNotes
 * ### Example
 *
 * ```typescript
 * import { LOCALE_ID } from '@angular/core';
 * import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
 * import { AppModule } from './app/app.module';
 *
 * platformBrowserDynamic().bootstrapModule(AppModule, {
 *   providers: [{provide: LOCALE_ID, useValue: 'en-US' }]
 * });
 * ```
 *
 * @publicApi
 */
const LOCALE_ID = /*#__PURE__*/new InjectionToken('LocaleId', {
  providedIn: 'root',
  factory: () => inject(LOCALE_ID, InjectFlags.Optional | InjectFlags.SkipSelf) || getGlobalLocale()
});
/**
 * *Internal* service that keeps track of pending tasks happening in the system
 * during the initial rendering. No tasks are tracked after an initial
 * rendering.
 *
 * This information is needed to make sure that the serialization on the server
 * is delayed until all tasks in the queue (such as an initial navigation or a
 * pending HTTP request) are completed.
 */
let InitialRenderPendingTasks = /*#__PURE__*/(() => {
  var _class16;
  class InitialRenderPendingTasks {
    constructor() {
      this.taskId = 0;
      this.pendingTasks = new Set();
      this.hasPendingTasks = new BehaviorSubject(false);
    }
    add() {
      this.hasPendingTasks.next(true);
      const taskId = this.taskId++;
      this.pendingTasks.add(taskId);
      return taskId;
    }
    remove(taskId) {
      this.pendingTasks.delete(taskId);
      if (this.pendingTasks.size === 0) {
        this.hasPendingTasks.next(false);
      }
    }
    ngOnDestroy() {
      this.pendingTasks.clear();
      this.hasPendingTasks.next(false);
    }
  }
  _class16 = InitialRenderPendingTasks;
  _class16.ɵfac = function InitialRenderPendingTasks_Factory(t) {
    return new (t || _class16)();
  };
  _class16.ɵprov = /*@__PURE__*/ɵɵdefineInjectable({
    token: _class16,
    factory: _class16.ɵfac,
    providedIn: 'root'
  });
  return InitialRenderPendingTasks;
})();
/**
 * Token to provide CompilerOptions in the platform injector.
 *
 * @publicApi
 */
const COMPILER_OPTIONS = /*#__PURE__*/new InjectionToken('compilerOptions');

/**
 * These are the data structures that our framework injector profiler will fill with data in order
 * to support DI debugging APIs.
 *
 * resolverToTokenToDependencies: Maps an injector to a Map of tokens to an Array of
 * dependencies. Injector -> Token -> Dependencies This is used to support the
 * getDependenciesFromInjectable API, which takes in an injector and a token and returns it's
 * dependencies.
 *
 * resolverToProviders: Maps a DI resolver (an Injector or an LView) to the providers configured
 * within it This is used to support the getInjectorProviders API, which takes in an injector and
 * returns the providers that it was configured with.
 *
 * standaloneInjectorToComponent: Maps the injector of a standalone component to the standalone
 * component that it is associated with. Used in the getInjectorProviders API, specificially in the
 * discovery of import paths for each provider. This is necessary because the imports array of a
 * standalone component is processed and configured in its standalone injector, but exists within
 * the component's definition. Because getInjectorProviders takes in an injector, if that injector
 * is the injector of a standalone component, we need to be able to discover the place where the
 * imports array is located (the component) in order to flatten the imports array within it to
 * discover all of it's providers.
 *
 *
 * All of these data structures are instantiated with WeakMaps. This will ensure that the presence
 * of any object in the keys of these maps does not prevent the garbage collector from collecting
 * those objects. Because of this property of WeakMaps, these data structures will never be the
 * source of a memory leak.
 *
 * An example of this advantage: When components are destroyed, we don't need to do
 * any additional work to remove that component from our mappings.
 *
 */
class DIDebugData {
  constructor() {
    this.resolverToTokenToDependencies = new WeakMap();
    this.resolverToProviders = new WeakMap();
    this.standaloneInjectorToComponent = new WeakMap();
  }
  reset() {
    this.resolverToTokenToDependencies = new WeakMap();
    this.resolverToProviders = new WeakMap();
    this.standaloneInjectorToComponent = new WeakMap();
  }
}
let frameworkDIDebugData = /*#__PURE__*/new DIDebugData();
function getFrameworkDIDebugData() {
  return frameworkDIDebugData;
}
/**
 * Initalize default handling of injector events. This handling parses events
 * as they are emitted and constructs the data structures necessary to support
 * some of debug APIs.
 *
 * See handleInjectEvent, handleCreateEvent and handleProviderConfiguredEvent
 * for descriptions of each handler
 *
 * Supported APIs:
 *               - getDependenciesFromInjectable
 *               - getInjectorProviders
 */
function setupFrameworkInjectorProfiler() {
  frameworkDIDebugData.reset();
  setInjectorProfiler(injectorProfilerEvent => handleInjectorProfilerEvent(injectorProfilerEvent));
}
function handleInjectorProfilerEvent(injectorProfilerEvent) {
  const {
    context,
    type
  } = injectorProfilerEvent;
  if (type === 0 /* InjectorProfilerEventType.Inject */) {
    handleInjectEvent(context, injectorProfilerEvent.service);
  } else if (type === 1 /* InjectorProfilerEventType.InstanceCreatedByInjector */) {
    handleInstanceCreatedByInjectorEvent(context, injectorProfilerEvent.instance);
  } else if (type === 2 /* InjectorProfilerEventType.ProviderConfigured */) {
    handleProviderConfiguredEvent(context, injectorProfilerEvent.providerRecord);
  }
}
/**
 *
 * Stores the injected service in frameworkDIDebugData.resolverToTokenToDependencies
 * based on it's injector and token.
 *
 * @param context InjectorProfilerContext the injection context that this event occurred in.
 * @param data InjectedService the service associated with this inject event.
 *
 */
function handleInjectEvent(context, data) {
  const diResolver = getDIResolver(context.injector);
  if (diResolver === null) {
    throwError('An Inject event must be run within an injection context.');
  }
  const diResolverToInstantiatedToken = frameworkDIDebugData.resolverToTokenToDependencies;
  if (!diResolverToInstantiatedToken.has(diResolver)) {
    diResolverToInstantiatedToken.set(diResolver, new WeakMap());
  }
  // if token is a primitive type, ignore this event. We do this because we cannot keep track of
  // non-primitive tokens in WeakMaps since they are not garbage collectable.
  if (!canBeHeldWeakly(context.token)) {
    return;
  }
  const instantiatedTokenToDependencies = diResolverToInstantiatedToken.get(diResolver);
  if (!instantiatedTokenToDependencies.has(context.token)) {
    instantiatedTokenToDependencies.set(context.token, []);
  }
  const {
    token,
    value,
    flags
  } = data;
  instantiatedTokenToDependencies.get(context.token).push({
    token,
    value,
    flags
  });
}
/**
 *
 * If the created instance is an instance of a standalone component, maps the injector to that
 * standalone component in frameworkDIDebugData.standaloneInjectorToComponent
 *
 * @param context InjectorProfilerContext the injection context that this event occurred in.
 * @param data InjectorCreatedInstance an object containing the instance that was just created
 *
 */
function handleInstanceCreatedByInjectorEvent(context, data) {
  const {
    value
  } = data;
  if (getDIResolver(context.injector) === null) {
    throwError('An InjectorCreatedInstance event must be run within an injection context.');
  }
  // if our value is an instance of a standalone component, map the injector of that standalone
  // component to the component class. Otherwise, this event is a noop.
  let standaloneComponent = undefined;
  if (typeof value === 'object') {
    standaloneComponent = value?.constructor;
  }
  if (standaloneComponent === undefined || !isStandaloneComponent(standaloneComponent)) {
    return;
  }
  const environmentInjector = context.injector.get(EnvironmentInjector, null, {
    optional: true
  });
  // Standalone components should have an environment injector. If one cannot be
  // found we may be in a test case for low level functionality that did not explictly
  // setup this injector. In those cases, we simply ignore this event.
  if (environmentInjector === null) {
    return;
  }
  const {
    standaloneInjectorToComponent
  } = frameworkDIDebugData;
  // If our injector has already been mapped, as is the case
  // when a standalone component imports another standalone component,
  // we consider the original component (the component doing the importing)
  // as the component connected to our injector.
  if (standaloneInjectorToComponent.has(environmentInjector)) {
    return;
  }
  // If our injector hasn't been mapped, then we map it to the standalone component
  standaloneInjectorToComponent.set(environmentInjector, standaloneComponent);
}
function isStandaloneComponent(value) {
  const def = getComponentDef(value);
  return !!def?.standalone;
}
/**
 *
 * Stores the emitted ProviderRecords from the InjectorProfilerEventType.ProviderConfigured
 * event in frameworkDIDebugData.resolverToProviders
 *
 * @param context InjectorProfilerContext the injection context that this event occurred in.
 * @param data ProviderRecord an object containing the instance that was just created
 *
 */
function handleProviderConfiguredEvent(context, data) {
  const {
    resolverToProviders
  } = frameworkDIDebugData;
  const diResolver = getDIResolver(context?.injector);
  if (diResolver === null) {
    throwError('A ProviderConfigured event must be run within an injection context.');
  }
  if (!resolverToProviders.has(diResolver)) {
    resolverToProviders.set(diResolver, []);
  }
  resolverToProviders.get(diResolver).push(data);
}
function getDIResolver(injector) {
  let diResolver = null;
  if (injector === undefined) {
    return diResolver;
  }
  // We use the LView as the diResolver for NodeInjectors because they
  // do not persist anywhere in the framework. They are simply wrappers around an LView and a TNode
  // that do persist. Because of this, we rely on the LView of the NodeInjector in order to use
  // as a concrete key to represent this injector. If we get the same LView back later, we know
  // we're looking at the same injector.
  if (injector instanceof NodeInjector) {
    diResolver = getNodeInjectorLView(injector);
  }
  // Other injectors can be used a keys for a map because their instances
  // persist
  else {
    diResolver = injector;
  }
  return diResolver;
}
// inspired by
// https://tc39.es/ecma262/multipage/executable-code-and-execution-contexts.html#sec-canbeheldweakly
function canBeHeldWeakly(value) {
  // we check for value !== null here because typeof null === 'object
  return value !== null && (typeof value === 'object' || typeof value === 'function' || typeof value === 'symbol');
}

/**
 * Marks a component for check (in case of OnPush components) and synchronously
 * performs change detection on the application this component belongs to.
 *
 * @param component Component to {@link ChangeDetectorRef#markForCheck mark for check}.
 *
 * @publicApi
 * @globalApi ng
 */
function applyChanges(component) {
  ngDevMode && assertDefined(component, 'component');
  markViewDirty(getComponentViewByInstance(component));
  getRootComponents(component).forEach(rootComponent => detectChanges(rootComponent));
}

/**
 * Discovers the dependencies of an injectable instance. Provides DI information about each
 * dependency that the injectable was instantiated with, including where they were provided from.
 *
 * @param injector An injector instance
 * @param token a DI token that was constructed by the given injector instance
 * @returns an object that contains the created instance of token as well as all of the dependencies
 * that it was instantiated with OR undefined if the token was not created within the given
 * injector.
 */
function getDependenciesFromInjectable(injector, token) {
  // First we check to see if the token given maps to an actual instance in the injector given.
  // We use `self: true` because we only want to look at the injector we were given.
  // We use `optional: true` because it's possible that the token we were given was never
  // constructed by the injector we were given.
  const instance = injector.get(token, null, {
    self: true,
    optional: true
  });
  if (instance === null) {
    throw new Error(`Unable to determine instance of ${token} in given injector`);
  }
  let diResolver = injector;
  if (injector instanceof NodeInjector) {
    diResolver = getNodeInjectorLView(injector);
  }
  const {
    resolverToTokenToDependencies
  } = getFrameworkDIDebugData();
  let dependencies = resolverToTokenToDependencies.get(diResolver)?.get?.(token) ?? [];
  const resolutionPath = getInjectorResolutionPath(injector);
  dependencies = dependencies.map(dep => {
    const flags = dep.flags;
    dep.flags = {
      optional: (8 /* InternalInjectFlags.Optional */ & flags) === 8 /* InternalInjectFlags.Optional */,
      host: (1 /* InternalInjectFlags.Host */ & flags) === 1 /* InternalInjectFlags.Host */,
      self: (2 /* InternalInjectFlags.Self */ & flags) === 2 /* InternalInjectFlags.Self */,
      skipSelf: (4 /* InternalInjectFlags.SkipSelf */ & flags) === 4 /* InternalInjectFlags.SkipSelf */
    };

    for (let i = 0; i < resolutionPath.length; i++) {
      const injectorToCheck = resolutionPath[i];
      // if skipSelf is true we skip the first injector
      if (i === 0 && dep.flags.skipSelf) {
        continue;
      }
      // host only applies to NodeInjectors
      if (dep.flags.host && injectorToCheck instanceof EnvironmentInjector) {
        break;
      }
      const instance = injectorToCheck.get(dep.token, null, {
        self: true,
        optional: true
      });
      if (instance !== null) {
        // if host flag is true we double check that we can get the service from the first element
        // in the resolution path by using the host flag. This is done to make sure that we've found
        // the correct providing injector, and not a node injector that is connected to our path via
        // a router outlet.
        if (dep.flags.host) {
          const firstInjector = resolutionPath[0];
          const lookupFromFirstInjector = firstInjector.get(dep.token, null, {
            ...dep.flags,
            optional: true
          });
          if (lookupFromFirstInjector !== null) {
            dep.providedIn = injectorToCheck;
          }
          break;
        }
        dep.providedIn = injectorToCheck;
        break;
      }
      // if self is true we stop after the first injector
      if (i === 0 && dep.flags.self) {
        break;
      }
    }
    return dep;
  });
  return {
    instance,
    dependencies
  };
}
/**
 * Gets the class associated with an injector that contains a provider `imports` array in it's
 * definition
 *
 * For Module Injectors this returns the NgModule constructor.
 *
 * For Standalone injectors this returns the standalone component constructor.
 *
 * @param injector Injector an injector instance
 * @returns the constructor where the `imports` array that configures this injector is located
 */
function getProviderImportsContainer(injector) {
  const {
    standaloneInjectorToComponent
  } = getFrameworkDIDebugData();
  // standalone components configure providers through a component def, so we have to
  // use the standalone component associated with this injector if Injector represents
  // a standalone components EnvironmentInjector
  if (standaloneInjectorToComponent.has(injector)) {
    return standaloneInjectorToComponent.get(injector);
  }
  // Module injectors configure providers through their NgModule def, so we use the
  // injector to lookup its NgModuleRef and through that grab its instance
  const defTypeRef = injector.get(NgModuleRef$1, null, {
    self: true,
    optional: true
  });
  // If we can't find an associated imports container, return null.
  // This could be the case if this function is called with an R3Injector that does not represent
  // a standalone component or NgModule.
  if (defTypeRef === null) {
    return null;
  }
  return defTypeRef.instance.constructor;
}
/**
 * Gets the providers configured on a NodeInjector
 *
 * @param injector A NodeInjector instance
 * @returns ProviderRecord[] an array of objects representing the providers configured on this
 *     injector
 */
function getNodeInjectorProviders(injector) {
  const diResolver = getNodeInjectorLView(injector);
  const {
    resolverToProviders
  } = getFrameworkDIDebugData();
  return resolverToProviders.get(diResolver) ?? [];
}
/**
 * Gets a mapping of providers configured on an injector to their import paths
 *
 * ModuleA -> imports ModuleB
 * ModuleB -> imports ModuleC
 * ModuleB -> provides MyServiceA
 * ModuleC -> provides MyServiceB
 *
 * getProviderImportPaths(ModuleA)
 * > Map(2) {
 *   MyServiceA => [ModuleA, ModuleB]
 *   MyServiceB => [ModuleA, ModuleB, ModuleC]
 *  }
 *
 * @param providerImportsContainer constructor of class that contains an `imports` array in it's
 *     definition
 * @returns A Map object that maps providers to an array of constructors representing it's import
 *     path
 *
 */
function getProviderImportPaths(providerImportsContainer) {
  const providerToPath = new Map();
  const visitedContainers = new Set();
  const visitor = walkProviderTreeToDiscoverImportPaths(providerToPath, visitedContainers);
  walkProviderTree(providerImportsContainer, visitor, [], new Set());
  return providerToPath;
}
/**
 *
 * Higher order function that returns a visitor for WalkProviderTree
 *
 * Takes in a Map and Set to keep track of the providers and containers
 * visited, so that we can discover the import paths of these providers
 * during the traversal.
 *
 * This visitor takes advantage of the fact that walkProviderTree performs a
 * postorder traversal of the provider tree for the passed in container. Because postorder
 * traversal recursively processes subtrees from leaf nodes until the traversal reaches the root,
 * we write a visitor that constructs provider import paths in reverse.
 *
 *
 * We use the visitedContainers set defined outside this visitor
 * because we want to run some logic only once for
 * each container in the tree. That logic can be described as:
 *
 *
 * 1. for each discovered_provider and discovered_path in the incomplete provider paths we've
 * already discovered
 * 2. get the first container in discovered_path
 * 3. if that first container is in the imports array of the container we're visiting
 *    Then the container we're visiting is also in the import path of discovered_provider, so we
 *    unshift discovered_path with the container we're currently visiting
 *
 *
 * Example Run:
 * ```
 *                 ┌──────────┐
 *                 │containerA│
 *      ┌─imports-─┤          ├──imports─┐
 *      │          │  provA   │          │
 *      │          │  provB   │          │
 *      │          └──────────┘          │
 *      │                                │
 *     ┌▼─────────┐             ┌────────▼─┐
 *     │containerB│             │containerC│
 *     │          │             │          │
 *     │  provD   │             │  provF   │
 *     │  provE   │             │  provG   │
 *     └──────────┘             └──────────┘
 * ```
 *
 * Each step of the traversal,
 *
 * ```
 * visitor(provD, containerB)
 * providerToPath === Map { provD => [containerB] }
 * visitedContainers === Set { containerB }
 *
 * visitor(provE, containerB)
 * providerToPath === Map { provD => [containerB], provE => [containerB] }
 * visitedContainers === Set { containerB }
 *
 * visitor(provF, containerC)
 * providerToPath === Map { provD => [containerB], provE => [containerB], provF => [containerC] }
 * visitedContainers === Set { containerB, containerC }
 *
 * visitor(provG, containerC)
 * providerToPath === Map {
 *   provD => [containerB], provE => [containerB], provF => [containerC], provG => [containerC]
 * }
 * visitedContainers === Set { containerB, containerC }
 *
 * visitor(provA, containerA)
 * providerToPath === Map {
 *   provD => [containerA, containerB],
 *   provE => [containerA, containerB],
 *   provF => [containerA, containerC],
 *   provG => [containerA, containerC],
 *   provA => [containerA]
 * }
 * visitedContainers === Set { containerB, containerC, containerA }
 *
 * visitor(provB, containerA)
 * providerToPath === Map {
 *   provD => [containerA, containerB],
 *   provE => [containerA, containerB],
 *   provF => [containerA, containerC],
 *   provG => [containerA, containerC],
 *   provA => [containerA]
 *   provB => [containerA]
 * }
 * visitedContainers === Set { containerB, containerC, containerA }
 * ```
 *
 * @param providerToPath Map map of providers to paths that this function fills
 * @param visitedContainers Set a set to keep track of the containers we've already visited
 * @return function(provider SingleProvider, container: Type<unknown> | InjectorType<unknown>) =>
 *     void
 */
function walkProviderTreeToDiscoverImportPaths(providerToPath, visitedContainers) {
  return (provider, container) => {
    // If the provider is not already in the providerToPath map,
    // add an entry with the provider as the key and an array containing the current container as
    // the value
    if (!providerToPath.has(provider)) {
      providerToPath.set(provider, [container]);
    }
    // This block will run exactly once for each container in the import tree.
    // This is where we run the logic to check the imports array of the current
    // container to see if it's the next container in the path for our currently
    // discovered providers.
    if (!visitedContainers.has(container)) {
      // Iterate through the providers we've already seen
      for (const prov of providerToPath.keys()) {
        const existingImportPath = providerToPath.get(prov);
        let containerDef = getInjectorDef(container);
        if (!containerDef) {
          const ngModule = container.ngModule;
          containerDef = getInjectorDef(ngModule);
        }
        if (!containerDef) {
          return;
        }
        const lastContainerAddedToPath = existingImportPath[0];
        let isNextStepInPath = false;
        deepForEach(containerDef.imports, moduleImport => {
          if (isNextStepInPath) {
            return;
          }
          isNextStepInPath = moduleImport.ngModule === lastContainerAddedToPath || moduleImport === lastContainerAddedToPath;
          if (isNextStepInPath) {
            providerToPath.get(prov)?.unshift(container);
          }
        });
      }
    }
    visitedContainers.add(container);
  };
}
/**
 * Gets the providers configured on an EnvironmentInjector
 *
 * @param injector EnvironmentInjector
 * @returns an array of objects representing the providers of the given injector
 */
function getEnvironmentInjectorProviders(injector) {
  const providerImportsContainer = getProviderImportsContainer(injector);
  if (providerImportsContainer === null) {
    throwError('Could not determine where injector providers were configured.');
  }
  const providerToPath = getProviderImportPaths(providerImportsContainer);
  const providerRecords = getFrameworkDIDebugData().resolverToProviders.get(injector) ?? [];
  return providerRecords.map(providerRecord => {
    let importPath = providerToPath.get(providerRecord.provider) ?? [providerImportsContainer];
    const def = getComponentDef(providerImportsContainer);
    const isStandaloneComponent = !!def?.standalone;
    // We prepend the component constructor in the standalone case
    // because walkProviderTree does not visit this constructor during it's traversal
    if (isStandaloneComponent) {
      importPath = [providerImportsContainer, ...(providerToPath.get(providerRecord.provider) ?? [])];
    }
    return {
      ...providerRecord,
      importPath
    };
  });
}
/**
 * Gets the providers configured on an injector.
 *
 * @param injector the injector to lookup the providers of
 * @returns ProviderRecord[] an array of objects representing the providers of the given injector
 */
function getInjectorProviders(injector) {
  if (injector instanceof NodeInjector) {
    return getNodeInjectorProviders(injector);
  } else if (injector instanceof EnvironmentInjector) {
    return getEnvironmentInjectorProviders(injector);
  }
  throwError('getInjectorProviders only supports NodeInjector and EnvironmentInjector');
}
function getInjectorResolutionPath(injector) {
  const resolutionPath = [injector];
  getInjectorResolutionPathHelper(injector, resolutionPath);
  return resolutionPath;
}
function getInjectorResolutionPathHelper(injector, resolutionPath) {
  const parent = getInjectorParent(injector);
  // if getInjectorParent can't find a parent, then we've either reached the end
  // of the path, or we need to move from the Element Injector tree to the
  // module injector tree using the first injector in our path as the connection point.
  if (parent === null) {
    if (injector instanceof NodeInjector) {
      const firstInjector = resolutionPath[0];
      if (firstInjector instanceof NodeInjector) {
        const moduleInjector = getModuleInjectorOfNodeInjector(firstInjector);
        if (moduleInjector === null) {
          throwError('NodeInjector must have some connection to the module injector tree');
        }
        resolutionPath.push(moduleInjector);
        getInjectorResolutionPathHelper(moduleInjector, resolutionPath);
      }
      return resolutionPath;
    }
  } else {
    resolutionPath.push(parent);
    getInjectorResolutionPathHelper(parent, resolutionPath);
  }
  return resolutionPath;
}
/**
 * Gets the parent of an injector.
 *
 * This function is not able to make the jump from the Element Injector Tree to the Module
 * injector tree. This is because the "parent" (the next step in the reoslution path)
 * of a root NodeInjector is dependent on which NodeInjector ancestor initiated
 * the DI lookup. See getInjectorResolutionPath for a function that can make this jump.
 *
 * In the below diagram:
 * ```ts
 * getInjectorParent(NodeInjectorB)
 *  > NodeInjectorA
 * getInjectorParent(NodeInjectorA) // or getInjectorParent(getInjectorParent(NodeInjectorB))
 *  > null // cannot jump to ModuleInjector tree
 * ```
 *
 * ```
 *                ┌───────┐                ┌───────────────────┐
 *    ┌───────────┤ModuleA├───Injector────►│EnvironmentInjector│
 *    │           └───┬───┘                └───────────────────┘
 *    │               │
 *    │           bootstraps
 *    │               │
 *    │               │
 *    │          ┌────▼─────┐                 ┌─────────────┐
 * declares      │ComponentA├────Injector────►│NodeInjectorA│
 *    │          └────┬─────┘                 └─────▲───────┘
 *    │               │                             │
 *    │            renders                        parent
 *    │               │                             │
 *    │          ┌────▼─────┐                 ┌─────┴───────┐
 *    └─────────►│ComponentB├────Injector────►│NodeInjectorB│
 *               └──────────┘                 └─────────────┘
 *```
 *
 * @param injector an Injector to get the parent of
 * @returns Injector the parent of the given injector
 */
function getInjectorParent(injector) {
  if (injector instanceof R3Injector) {
    return injector.parent;
  }
  let tNode;
  let lView;
  if (injector instanceof NodeInjector) {
    tNode = getNodeInjectorTNode(injector);
    lView = getNodeInjectorLView(injector);
  } else if (injector instanceof NullInjector) {
    return null;
  } else {
    throwError('getInjectorParent only support injectors of type R3Injector, NodeInjector, NullInjector');
  }
  const parentLocation = getParentInjectorLocation(tNode, lView);
  if (hasParentInjector(parentLocation)) {
    const parentInjectorIndex = getParentInjectorIndex(parentLocation);
    const parentLView = getParentInjectorView(parentLocation, lView);
    const parentTView = parentLView[TVIEW];
    const parentTNode = parentTView.data[parentInjectorIndex + 8 /* NodeInjectorOffset.TNODE */];
    return new NodeInjector(parentTNode, parentLView);
  } else {
    const chainedInjector = lView[INJECTOR$1];
    // Case where chainedInjector.injector is an OutletInjector and chainedInjector.injector.parent
    // is a NodeInjector.
    // todo(aleksanderbodurri): ideally nothing in packages/core should deal
    // directly with router concerns. Refactor this so that we can make the jump from
    // NodeInjector -> OutletInjector -> NodeInjector
    // without explictly relying on types contracts from packages/router
    const injectorParent = chainedInjector.injector?.parent;
    if (injectorParent instanceof NodeInjector) {
      return injectorParent;
    }
  }
  return null;
}
/**
 * Gets the module injector of a NodeInjector.
 *
 * @param injector NodeInjector to get module injector of
 * @returns Injector representing module injector of the given NodeInjector
 */
function getModuleInjectorOfNodeInjector(injector) {
  let lView;
  if (injector instanceof NodeInjector) {
    lView = getNodeInjectorLView(injector);
  } else {
    throwError('getModuleInjectorOfNodeInjector must be called with a NodeInjector');
  }
  const chainedInjector = lView[INJECTOR$1];
  const moduleInjector = chainedInjector.parentInjector;
  if (!moduleInjector) {
    throwError('NodeInjector must have some connection to the module injector tree');
  }
  return moduleInjector;
}

/**
 * This file introduces series of globally accessible debug tools
 * to allow for the Angular debugging story to function.
 *
 * To see this in action run the following command:
 *
 *   bazel run //packages/core/test/bundling/todo:devserver
 *
 *  Then load `localhost:5432` and start using the console tools.
 */
/**
 * This value reflects the property on the window where the dev
 * tools are patched (window.ng).
 * */
const GLOBAL_PUBLISH_EXPANDO_KEY = 'ng';
let _published = false;
/**
 * Publishes a collection of default debug tools onto`window.ng`.
 *
 * These functions are available globally when Angular is in development
 * mode and are automatically stripped away from prod mode is on.
 */
function publishDefaultGlobalUtils$1() {
  if (!_published) {
    _published = true;
    setupFrameworkInjectorProfiler();
    publishGlobalUtil('ɵgetDependenciesFromInjectable', getDependenciesFromInjectable);
    publishGlobalUtil('ɵgetInjectorProviders', getInjectorProviders);
    publishGlobalUtil('ɵgetInjectorResolutionPath', getInjectorResolutionPath);
    /**
     * Warning: this function is *INTERNAL* and should not be relied upon in application's code.
     * The contract of the function might be changed in any release and/or the function can be
     * removed completely.
     */
    publishGlobalUtil('ɵsetProfiler', setProfiler);
    publishGlobalUtil('getDirectiveMetadata', getDirectiveMetadata$1);
    publishGlobalUtil('getComponent', getComponent);
    publishGlobalUtil('getContext', getContext);
    publishGlobalUtil('getListeners', getListeners);
    publishGlobalUtil('getOwningComponent', getOwningComponent);
    publishGlobalUtil('getHostElement', getHostElement);
    publishGlobalUtil('getInjector', getInjector);
    publishGlobalUtil('getRootComponents', getRootComponents);
    publishGlobalUtil('getDirectives', getDirectives);
    publishGlobalUtil('applyChanges', applyChanges);
  }
}
/**
 * Publishes the given function to `window.ng` so that it can be
 * used from the browser console when an application is not in production.
 */
function publishGlobalUtil(name, fn) {
  if (typeof COMPILED === 'undefined' || !COMPILED) {
    // Note: we can't export `ng` when using closure enhanced optimization as:
    // - closure declares globals itself for minified names, which sometimes clobber our `ng` global
    // - we can't declare a closure extern as the namespace `ng` is already used within Google
    //   for typings for AngularJS (via `goog.provide('ng....')`).
    const w = _global;
    ngDevMode && assertDefined(fn, 'function not defined');
    if (w) {
      let container = w[GLOBAL_PUBLISH_EXPANDO_KEY];
      if (!container) {
        container = w[GLOBAL_PUBLISH_EXPANDO_KEY] = {};
      }
      container[name] = fn;
    }
  }
}
function noop(...args) {
  // Do nothing.
}
function getNativeRequestAnimationFrame() {
  // Note: the `getNativeRequestAnimationFrame` is used in the `NgZone` class, but we cannot use the
  // `inject` function. The `NgZone` instance may be created manually, and thus the injection
  // context will be unavailable. This might be enough to check whether `requestAnimationFrame` is
  // available because otherwise, we'll fall back to `setTimeout`.
  const isBrowser = typeof _global['requestAnimationFrame'] === 'function';
  // Note: `requestAnimationFrame` is unavailable when the code runs in the Node.js environment. We
  // use `setTimeout` because no changes are required other than checking if the current platform is
  // the browser. `setTimeout` is a well-established API that is available in both environments.
  // `requestAnimationFrame` is used in the browser to coalesce event tasks since event tasks are
  // usually executed within the same rendering frame (but this is more implementation details of
  // browsers).
  let nativeRequestAnimationFrame = _global[isBrowser ? 'requestAnimationFrame' : 'setTimeout'];
  let nativeCancelAnimationFrame = _global[isBrowser ? 'cancelAnimationFrame' : 'clearTimeout'];
  if (typeof Zone !== 'undefined' && nativeRequestAnimationFrame && nativeCancelAnimationFrame) {
    // Note: zone.js sets original implementations on patched APIs behind the
    // `__zone_symbol__OriginalDelegate` key (see `attachOriginToPatched`). Given the following
    // example: `window.requestAnimationFrame.__zone_symbol__OriginalDelegate`; this would return an
    // unpatched implementation of the `requestAnimationFrame`, which isn't intercepted by the
    // Angular zone. We use the unpatched implementation to avoid another change detection when
    // coalescing tasks.
    const unpatchedRequestAnimationFrame = nativeRequestAnimationFrame[Zone.__symbol__('OriginalDelegate')];
    if (unpatchedRequestAnimationFrame) {
      nativeRequestAnimationFrame = unpatchedRequestAnimationFrame;
    }
    const unpatchedCancelAnimationFrame = nativeCancelAnimationFrame[Zone.__symbol__('OriginalDelegate')];
    if (unpatchedCancelAnimationFrame) {
      nativeCancelAnimationFrame = unpatchedCancelAnimationFrame;
    }
  }
  return {
    nativeRequestAnimationFrame,
    nativeCancelAnimationFrame
  };
}
class AsyncStackTaggingZoneSpec {
  constructor(namePrefix, consoleAsyncStackTaggingImpl = console) {
    this.name = 'asyncStackTagging for ' + namePrefix;
    this.createTask = consoleAsyncStackTaggingImpl?.createTask ?? (() => null);
  }
  onScheduleTask(delegate, _current, target, task) {
    task.consoleTask = this.createTask(`Zone - ${task.source || task.type}`);
    return delegate.scheduleTask(target, task);
  }
  onInvokeTask(delegate, _currentZone, targetZone, task, applyThis, applyArgs) {
    let ret;
    if (task.consoleTask) {
      ret = task.consoleTask.run(() => delegate.invokeTask(targetZone, task, applyThis, applyArgs));
    } else {
      ret = delegate.invokeTask(targetZone, task, applyThis, applyArgs);
    }
    return ret;
  }
}

/**
 * An injectable service for executing work inside or outside of the Angular zone.
 *
 * The most common use of this service is to optimize performance when starting a work consisting of
 * one or more asynchronous tasks that don't require UI updates or error handling to be handled by
 * Angular. Such tasks can be kicked off via {@link #runOutsideAngular} and if needed, these tasks
 * can reenter the Angular zone via {@link #run}.
 *
 * <!-- TODO: add/fix links to:
 *   - docs explaining zones and the use of zones in Angular and change-detection
 *   - link to runOutsideAngular/run (throughout this file!)
 *   -->
 *
 * @usageNotes
 * ### Example
 *
 * ```
 * import {Component, NgZone} from '@angular/core';
 * import {NgIf} from '@angular/common';
 *
 * @Component({
 *   selector: 'ng-zone-demo',
 *   template: `
 *     <h2>Demo: NgZone</h2>
 *
 *     <p>Progress: {{progress}}%</p>
 *     <p *ngIf="progress >= 100">Done processing {{label}} of Angular zone!</p>
 *
 *     <button (click)="processWithinAngularZone()">Process within Angular zone</button>
 *     <button (click)="processOutsideOfAngularZone()">Process outside of Angular zone</button>
 *   `,
 * })
 * export class NgZoneDemo {
 *   progress: number = 0;
 *   label: string;
 *
 *   constructor(private _ngZone: NgZone) {}
 *
 *   // Loop inside the Angular zone
 *   // so the UI DOES refresh after each setTimeout cycle
 *   processWithinAngularZone() {
 *     this.label = 'inside';
 *     this.progress = 0;
 *     this._increaseProgress(() => console.log('Inside Done!'));
 *   }
 *
 *   // Loop outside of the Angular zone
 *   // so the UI DOES NOT refresh after each setTimeout cycle
 *   processOutsideOfAngularZone() {
 *     this.label = 'outside';
 *     this.progress = 0;
 *     this._ngZone.runOutsideAngular(() => {
 *       this._increaseProgress(() => {
 *         // reenter the Angular zone and display done
 *         this._ngZone.run(() => { console.log('Outside Done!'); });
 *       });
 *     });
 *   }
 *
 *   _increaseProgress(doneCallback: () => void) {
 *     this.progress += 1;
 *     console.log(`Current progress: ${this.progress}%`);
 *
 *     if (this.progress < 100) {
 *       window.setTimeout(() => this._increaseProgress(doneCallback), 10);
 *     } else {
 *       doneCallback();
 *     }
 *   }
 * }
 * ```
 *
 * @publicApi
 */
class NgZone {
  constructor({
    enableLongStackTrace = false,
    shouldCoalesceEventChangeDetection = false,
    shouldCoalesceRunChangeDetection = false
  }) {
    this.hasPendingMacrotasks = false;
    this.hasPendingMicrotasks = false;
    /**
     * Whether there are no outstanding microtasks or macrotasks.
     */
    this.isStable = true;
    /**
     * Notifies when code enters Angular Zone. This gets fired first on VM Turn.
     */
    this.onUnstable = new EventEmitter(false);
    /**
     * Notifies when there is no more microtasks enqueued in the current VM Turn.
     * This is a hint for Angular to do change detection, which may enqueue more microtasks.
     * For this reason this event can fire multiple times per VM Turn.
     */
    this.onMicrotaskEmpty = new EventEmitter(false);
    /**
     * Notifies when the last `onMicrotaskEmpty` has run and there are no more microtasks, which
     * implies we are about to relinquish VM turn.
     * This event gets called just once.
     */
    this.onStable = new EventEmitter(false);
    /**
     * Notifies that an error has been delivered.
     */
    this.onError = new EventEmitter(false);
    if (typeof Zone == 'undefined') {
      throw new RuntimeError(908 /* RuntimeErrorCode.MISSING_ZONEJS */, ngDevMode && `In this configuration Angular requires Zone.js`);
    }
    Zone.assertZonePatched();
    const self = this;
    self._nesting = 0;
    self._outer = self._inner = Zone.current;
    // AsyncStackTaggingZoneSpec provides `linked stack traces` to show
    // where the async operation is scheduled. For more details, refer
    // to this article, https://developer.chrome.com/blog/devtools-better-angular-debugging/
    // And we only import this AsyncStackTaggingZoneSpec in development mode,
    // in the production mode, the AsyncStackTaggingZoneSpec will be tree shaken away.
    if (ngDevMode) {
      self._inner = self._inner.fork(new AsyncStackTaggingZoneSpec('Angular'));
    }
    if (Zone['TaskTrackingZoneSpec']) {
      self._inner = self._inner.fork(new Zone['TaskTrackingZoneSpec']());
    }
    if (enableLongStackTrace && Zone['longStackTraceZoneSpec']) {
      self._inner = self._inner.fork(Zone['longStackTraceZoneSpec']);
    }
    // if shouldCoalesceRunChangeDetection is true, all tasks including event tasks will be
    // coalesced, so shouldCoalesceEventChangeDetection option is not necessary and can be skipped.
    self.shouldCoalesceEventChangeDetection = !shouldCoalesceRunChangeDetection && shouldCoalesceEventChangeDetection;
    self.shouldCoalesceRunChangeDetection = shouldCoalesceRunChangeDetection;
    self.lastRequestAnimationFrameId = -1;
    self.nativeRequestAnimationFrame = getNativeRequestAnimationFrame().nativeRequestAnimationFrame;
    forkInnerZoneWithAngularBehavior(self);
  }
  /**
    This method checks whether the method call happens within an Angular Zone instance.
  */
  static isInAngularZone() {
    // Zone needs to be checked, because this method might be called even when NoopNgZone is used.
    return typeof Zone !== 'undefined' && Zone.current.get('isAngularZone') === true;
  }
  /**
    Assures that the method is called within the Angular Zone, otherwise throws an error.
  */
  static assertInAngularZone() {
    if (!NgZone.isInAngularZone()) {
      throw new RuntimeError(909 /* RuntimeErrorCode.UNEXPECTED_ZONE_STATE */, ngDevMode && 'Expected to be in Angular Zone, but it is not!');
    }
  }
  /**
    Assures that the method is called outside of the Angular Zone, otherwise throws an error.
  */
  static assertNotInAngularZone() {
    if (NgZone.isInAngularZone()) {
      throw new RuntimeError(909 /* RuntimeErrorCode.UNEXPECTED_ZONE_STATE */, ngDevMode && 'Expected to not be in Angular Zone, but it is!');
    }
  }
  /**
   * Executes the `fn` function synchronously within the Angular zone and returns value returned by
   * the function.
   *
   * Running functions via `run` allows you to reenter Angular zone from a task that was executed
   * outside of the Angular zone (typically started via {@link #runOutsideAngular}).
   *
   * Any future tasks or microtasks scheduled from within this function will continue executing from
   * within the Angular zone.
   *
   * If a synchronous error happens it will be rethrown and not reported via `onError`.
   */
  run(fn, applyThis, applyArgs) {
    return this._inner.run(fn, applyThis, applyArgs);
  }
  /**
   * Executes the `fn` function synchronously within the Angular zone as a task and returns value
   * returned by the function.
   *
   * Running functions via `run` allows you to reenter Angular zone from a task that was executed
   * outside of the Angular zone (typically started via {@link #runOutsideAngular}).
   *
   * Any future tasks or microtasks scheduled from within this function will continue executing from
   * within the Angular zone.
   *
   * If a synchronous error happens it will be rethrown and not reported via `onError`.
   */
  runTask(fn, applyThis, applyArgs, name) {
    const zone = this._inner;
    const task = zone.scheduleEventTask('NgZoneEvent: ' + name, fn, EMPTY_PAYLOAD, noop, noop);
    try {
      return zone.runTask(task, applyThis, applyArgs);
    } finally {
      zone.cancelTask(task);
    }
  }
  /**
   * Same as `run`, except that synchronous errors are caught and forwarded via `onError` and not
   * rethrown.
   */
  runGuarded(fn, applyThis, applyArgs) {
    return this._inner.runGuarded(fn, applyThis, applyArgs);
  }
  /**
   * Executes the `fn` function synchronously in Angular's parent zone and returns value returned by
   * the function.
   *
   * Running functions via {@link #runOutsideAngular} allows you to escape Angular's zone and do
   * work that
   * doesn't trigger Angular change-detection or is subject to Angular's error handling.
   *
   * Any future tasks or microtasks scheduled from within this function will continue executing from
   * outside of the Angular zone.
   *
   * Use {@link #run} to reenter the Angular zone and do work that updates the application model.
   */
  runOutsideAngular(fn) {
    return this._outer.run(fn);
  }
}
const EMPTY_PAYLOAD = {};
function checkStable(zone) {
  // TODO: @JiaLiPassion, should check zone.isCheckStableRunning to prevent
  // re-entry. The case is:
  //
  // @Component({...})
  // export class AppComponent {
  // constructor(private ngZone: NgZone) {
  //   this.ngZone.onStable.subscribe(() => {
  //     this.ngZone.run(() => console.log('stable'););
  //   });
  // }
  //
  // The onStable subscriber run another function inside ngZone
  // which causes `checkStable()` re-entry.
  // But this fix causes some issues in g3, so this fix will be
  // launched in another PR.
  if (zone._nesting == 0 && !zone.hasPendingMicrotasks && !zone.isStable) {
    try {
      zone._nesting++;
      zone.onMicrotaskEmpty.emit(null);
    } finally {
      zone._nesting--;
      if (!zone.hasPendingMicrotasks) {
        try {
          zone.runOutsideAngular(() => zone.onStable.emit(null));
        } finally {
          zone.isStable = true;
        }
      }
    }
  }
}
function delayChangeDetectionForEvents(zone) {
  /**
   * We also need to check _nesting here
   * Consider the following case with shouldCoalesceRunChangeDetection = true
   *
   * ngZone.run(() => {});
   * ngZone.run(() => {});
   *
   * We want the two `ngZone.run()` only trigger one change detection
   * when shouldCoalesceRunChangeDetection is true.
   * And because in this case, change detection run in async way(requestAnimationFrame),
   * so we also need to check the _nesting here to prevent multiple
   * change detections.
   */
  if (zone.isCheckStableRunning || zone.lastRequestAnimationFrameId !== -1) {
    return;
  }
  zone.lastRequestAnimationFrameId = zone.nativeRequestAnimationFrame.call(_global, () => {
    // This is a work around for https://github.com/angular/angular/issues/36839.
    // The core issue is that when event coalescing is enabled it is possible for microtasks
    // to get flushed too early (As is the case with `Promise.then`) between the
    // coalescing eventTasks.
    //
    // To workaround this we schedule a "fake" eventTask before we process the
    // coalescing eventTasks. The benefit of this is that the "fake" container eventTask
    //  will prevent the microtasks queue from getting drained in between the coalescing
    // eventTask execution.
    if (!zone.fakeTopEventTask) {
      zone.fakeTopEventTask = Zone.root.scheduleEventTask('fakeTopEventTask', () => {
        zone.lastRequestAnimationFrameId = -1;
        updateMicroTaskStatus(zone);
        zone.isCheckStableRunning = true;
        checkStable(zone);
        zone.isCheckStableRunning = false;
      }, undefined, () => {}, () => {});
    }
    zone.fakeTopEventTask.invoke();
  });
  updateMicroTaskStatus(zone);
}
function forkInnerZoneWithAngularBehavior(zone) {
  const delayChangeDetectionForEventsDelegate = () => {
    delayChangeDetectionForEvents(zone);
  };
  zone._inner = zone._inner.fork({
    name: 'angular',
    properties: {
      'isAngularZone': true
    },
    onInvokeTask: (delegate, current, target, task, applyThis, applyArgs) => {
      try {
        onEnter(zone);
        return delegate.invokeTask(target, task, applyThis, applyArgs);
      } finally {
        if (zone.shouldCoalesceEventChangeDetection && task.type === 'eventTask' || zone.shouldCoalesceRunChangeDetection) {
          delayChangeDetectionForEventsDelegate();
        }
        onLeave(zone);
      }
    },
    onInvoke: (delegate, current, target, callback, applyThis, applyArgs, source) => {
      try {
        onEnter(zone);
        return delegate.invoke(target, callback, applyThis, applyArgs, source);
      } finally {
        if (zone.shouldCoalesceRunChangeDetection) {
          delayChangeDetectionForEventsDelegate();
        }
        onLeave(zone);
      }
    },
    onHasTask: (delegate, current, target, hasTaskState) => {
      delegate.hasTask(target, hasTaskState);
      if (current === target) {
        // We are only interested in hasTask events which originate from our zone
        // (A child hasTask event is not interesting to us)
        if (hasTaskState.change == 'microTask') {
          zone._hasPendingMicrotasks = hasTaskState.microTask;
          updateMicroTaskStatus(zone);
          checkStable(zone);
        } else if (hasTaskState.change == 'macroTask') {
          zone.hasPendingMacrotasks = hasTaskState.macroTask;
        }
      }
    },
    onHandleError: (delegate, current, target, error) => {
      delegate.handleError(target, error);
      zone.runOutsideAngular(() => zone.onError.emit(error));
      return false;
    }
  });
}
function updateMicroTaskStatus(zone) {
  if (zone._hasPendingMicrotasks || (zone.shouldCoalesceEventChangeDetection || zone.shouldCoalesceRunChangeDetection) && zone.lastRequestAnimationFrameId !== -1) {
    zone.hasPendingMicrotasks = true;
  } else {
    zone.hasPendingMicrotasks = false;
  }
}
function onEnter(zone) {
  zone._nesting++;
  if (zone.isStable) {
    zone.isStable = false;
    zone.onUnstable.emit(null);
  }
}
function onLeave(zone) {
  zone._nesting--;
  checkStable(zone);
}
/**
 * Provides a noop implementation of `NgZone` which does nothing. This zone requires explicit calls
 * to framework to perform rendering.
 */
class NoopNgZone {
  constructor() {
    this.hasPendingMicrotasks = false;
    this.hasPendingMacrotasks = false;
    this.isStable = true;
    this.onUnstable = new EventEmitter();
    this.onMicrotaskEmpty = new EventEmitter();
    this.onStable = new EventEmitter();
    this.onError = new EventEmitter();
  }
  run(fn, applyThis, applyArgs) {
    return fn.apply(applyThis, applyArgs);
  }
  runGuarded(fn, applyThis, applyArgs) {
    return fn.apply(applyThis, applyArgs);
  }
  runOutsideAngular(fn) {
    return fn();
  }
  runTask(fn, applyThis, applyArgs, name) {
    return fn.apply(applyThis, applyArgs);
  }
}
/**
 * Token used to drive ApplicationRef.isStable
 *
 * TODO: This should be moved entirely to NgZone (as a breaking change) so it can be tree-shakeable
 * for `NoopNgZone` which is always just an `Observable` of `true`. Additionally, we should consider
 * whether the property on `NgZone` should be `Observable` or `Signal`.
 */
const ZONE_IS_STABLE_OBSERVABLE = /*#__PURE__*/new InjectionToken(ngDevMode ? 'isStable Observable' : '', {
  providedIn: 'root',
  // TODO(atscott): Replace this with a suitable default like `new
  // BehaviorSubject(true).asObservable`. Again, long term this won't exist on ApplicationRef at
  // all but until we can remove it, we need a default value zoneless.
  factory: isStableFactory
});
function isStableFactory() {
  const zone = inject(NgZone);
  let _stable = true;
  const isCurrentlyStable = new Observable(observer => {
    _stable = zone.isStable && !zone.hasPendingMacrotasks && !zone.hasPendingMicrotasks;
    zone.runOutsideAngular(() => {
      observer.next(_stable);
      observer.complete();
    });
  });
  const isStable = new Observable(observer => {
    // Create the subscription to onStable outside the Angular Zone so that
    // the callback is run outside the Angular Zone.
    let stableSub;
    zone.runOutsideAngular(() => {
      stableSub = zone.onStable.subscribe(() => {
        NgZone.assertNotInAngularZone();
        // Check whether there are no pending macro/micro tasks in the next tick
        // to allow for NgZone to update the state.
        queueMicrotask(() => {
          if (!_stable && !zone.hasPendingMacrotasks && !zone.hasPendingMicrotasks) {
            _stable = true;
            observer.next(true);
          }
        });
      });
    });
    const unstableSub = zone.onUnstable.subscribe(() => {
      NgZone.assertInAngularZone();
      if (_stable) {
        _stable = false;
        zone.runOutsideAngular(() => {
          observer.next(false);
        });
      }
    });
    return () => {
      stableSub.unsubscribe();
      unstableSub.unsubscribe();
    };
  });
  return merge(isCurrentlyStable, isStable.pipe(share()));
}

/**
 * Internal injection token that can used to access an instance of a Testability class.
 *
 * This token acts as a bridge between the core bootstrap code and the `Testability` class. This is
 * needed to ensure that there are no direct references to the `Testability` class, so it can be
 * tree-shaken away (if not referenced). For the environments/setups when the `Testability` class
 * should be available, this token is used to add a provider that references the `Testability`
 * class. Otherwise, only this token is retained in a bundle, but the `Testability` class is not.
 */
const TESTABILITY = /*#__PURE__*/new InjectionToken('');
/**
 * Internal injection token to retrieve Testability getter class instance.
 */
const TESTABILITY_GETTER = /*#__PURE__*/new InjectionToken('');
/**
 * The Testability service provides testing hooks that can be accessed from
 * the browser.
 *
 * Angular applications bootstrapped using an NgModule (via `@NgModule.bootstrap` field) will also
 * instantiate Testability by default (in both development and production modes).
 *
 * For applications bootstrapped using the `bootstrapApplication` function, Testability is not
 * included by default. You can include it into your applications by getting the list of necessary
 * providers using the `provideProtractorTestingSupport()` function and adding them into the
 * `options.providers` array. Example:
 *
 * ```typescript
 * import {provideProtractorTestingSupport} from '@angular/platform-browser';
 *
 * await bootstrapApplication(RootComponent, providers: [provideProtractorTestingSupport()]);
 * ```
 *
 * @publicApi
 */
let Testability = /*#__PURE__*/(() => {
  var _class18;
  class Testability {
    constructor(_ngZone, registry, testabilityGetter) {
      this._ngZone = _ngZone;
      this.registry = registry;
      this._pendingCount = 0;
      this._isZoneStable = true;
      /**
       * Whether any work was done since the last 'whenStable' callback. This is
       * useful to detect if this could have potentially destabilized another
       * component while it is stabilizing.
       * @internal
       */
      this._didWork = false;
      this._callbacks = [];
      this.taskTrackingZone = null;
      // If there was no Testability logic registered in the global scope
      // before, register the current testability getter as a global one.
      if (!_testabilityGetter) {
        setTestabilityGetter(testabilityGetter);
        testabilityGetter.addToWindow(registry);
      }
      this._watchAngularEvents();
      _ngZone.run(() => {
        this.taskTrackingZone = typeof Zone == 'undefined' ? null : Zone.current.get('TaskTrackingZone');
      });
    }
    _watchAngularEvents() {
      this._ngZone.onUnstable.subscribe({
        next: () => {
          this._didWork = true;
          this._isZoneStable = false;
        }
      });
      this._ngZone.runOutsideAngular(() => {
        this._ngZone.onStable.subscribe({
          next: () => {
            NgZone.assertNotInAngularZone();
            queueMicrotask(() => {
              this._isZoneStable = true;
              this._runCallbacksIfReady();
            });
          }
        });
      });
    }
    /**
     * Increases the number of pending request
     * @deprecated pending requests are now tracked with zones.
     */
    increasePendingRequestCount() {
      this._pendingCount += 1;
      this._didWork = true;
      return this._pendingCount;
    }
    /**
     * Decreases the number of pending request
     * @deprecated pending requests are now tracked with zones
     */
    decreasePendingRequestCount() {
      this._pendingCount -= 1;
      if (this._pendingCount < 0) {
        throw new Error('pending async requests below zero');
      }
      this._runCallbacksIfReady();
      return this._pendingCount;
    }
    /**
     * Whether an associated application is stable
     */
    isStable() {
      return this._isZoneStable && this._pendingCount === 0 && !this._ngZone.hasPendingMacrotasks;
    }
    _runCallbacksIfReady() {
      if (this.isStable()) {
        // Schedules the call backs in a new frame so that it is always async.
        queueMicrotask(() => {
          while (this._callbacks.length !== 0) {
            let cb = this._callbacks.pop();
            clearTimeout(cb.timeoutId);
            cb.doneCb(this._didWork);
          }
          this._didWork = false;
        });
      } else {
        // Still not stable, send updates.
        let pending = this.getPendingTasks();
        this._callbacks = this._callbacks.filter(cb => {
          if (cb.updateCb && cb.updateCb(pending)) {
            clearTimeout(cb.timeoutId);
            return false;
          }
          return true;
        });
        this._didWork = true;
      }
    }
    getPendingTasks() {
      if (!this.taskTrackingZone) {
        return [];
      }
      // Copy the tasks data so that we don't leak tasks.
      return this.taskTrackingZone.macroTasks.map(t => {
        return {
          source: t.source,
          // From TaskTrackingZone:
          // https://github.com/angular/zone.js/blob/master/lib/zone-spec/task-tracking.ts#L40
          creationLocation: t.creationLocation,
          data: t.data
        };
      });
    }
    addCallback(cb, timeout, updateCb) {
      let timeoutId = -1;
      if (timeout && timeout > 0) {
        timeoutId = setTimeout(() => {
          this._callbacks = this._callbacks.filter(cb => cb.timeoutId !== timeoutId);
          cb(this._didWork, this.getPendingTasks());
        }, timeout);
      }
      this._callbacks.push({
        doneCb: cb,
        timeoutId: timeoutId,
        updateCb: updateCb
      });
    }
    /**
     * Wait for the application to be stable with a timeout. If the timeout is reached before that
     * happens, the callback receives a list of the macro tasks that were pending, otherwise null.
     *
     * @param doneCb The callback to invoke when Angular is stable or the timeout expires
     *    whichever comes first.
     * @param timeout Optional. The maximum time to wait for Angular to become stable. If not
     *    specified, whenStable() will wait forever.
     * @param updateCb Optional. If specified, this callback will be invoked whenever the set of
     *    pending macrotasks changes. If this callback returns true doneCb will not be invoked
     *    and no further updates will be issued.
     */
    whenStable(doneCb, timeout, updateCb) {
      if (updateCb && !this.taskTrackingZone) {
        throw new Error('Task tracking zone is required when passing an update callback to ' + 'whenStable(). Is "zone.js/plugins/task-tracking" loaded?');
      }
      // These arguments are 'Function' above to keep the public API simple.
      this.addCallback(doneCb, timeout, updateCb);
      this._runCallbacksIfReady();
    }
    /**
     * Get the number of pending requests
     * @deprecated pending requests are now tracked with zones
     */
    getPendingRequestCount() {
      return this._pendingCount;
    }
    /**
     * Registers an application with a testability hook so that it can be tracked.
     * @param token token of application, root element
     *
     * @internal
     */
    registerApplication(token) {
      this.registry.registerApplication(token, this);
    }
    /**
     * Unregisters an application.
     * @param token token of application, root element
     *
     * @internal
     */
    unregisterApplication(token) {
      this.registry.unregisterApplication(token);
    }
    /**
     * Find providers by name
     * @param using The root element to search from
     * @param provider The name of binding variable
     * @param exactMatch Whether using exactMatch
     */
    findProviders(using, provider, exactMatch) {
      // TODO(juliemr): implement.
      return [];
    }
  }
  _class18 = Testability;
  _class18.ɵfac = function Testability_Factory(t) {
    return new (t || _class18)(ɵɵinject(NgZone), ɵɵinject(TestabilityRegistry), ɵɵinject(TESTABILITY_GETTER));
  };
  _class18.ɵprov = /*@__PURE__*/ɵɵdefineInjectable({
    token: _class18,
    factory: _class18.ɵfac
  });
  return Testability;
})();
/**
 * A global registry of {@link Testability} instances for specific elements.
 * @publicApi
 */
let TestabilityRegistry = /*#__PURE__*/(() => {
  var _class19;
  class TestabilityRegistry {
    constructor() {
      /** @internal */
      this._applications = new Map();
    }
    /**
     * Registers an application with a testability hook so that it can be tracked
     * @param token token of application, root element
     * @param testability Testability hook
     */
    registerApplication(token, testability) {
      this._applications.set(token, testability);
    }
    /**
     * Unregisters an application.
     * @param token token of application, root element
     */
    unregisterApplication(token) {
      this._applications.delete(token);
    }
    /**
     * Unregisters all applications
     */
    unregisterAllApplications() {
      this._applications.clear();
    }
    /**
     * Get a testability hook associated with the application
     * @param elem root element
     */
    getTestability(elem) {
      return this._applications.get(elem) || null;
    }
    /**
     * Get all registered testabilities
     */
    getAllTestabilities() {
      return Array.from(this._applications.values());
    }
    /**
     * Get all registered applications(root elements)
     */
    getAllRootElements() {
      return Array.from(this._applications.keys());
    }
    /**
     * Find testability of a node in the Tree
     * @param elem node
     * @param findInAncestors whether finding testability in ancestors if testability was not found in
     * current node
     */
    findTestabilityInTree(elem, findInAncestors = true) {
      return _testabilityGetter?.findTestabilityInTree(this, elem, findInAncestors) ?? null;
    }
  }
  _class19 = TestabilityRegistry;
  _class19.ɵfac = function TestabilityRegistry_Factory(t) {
    return new (t || _class19)();
  };
  _class19.ɵprov = /*@__PURE__*/ɵɵdefineInjectable({
    token: _class19,
    factory: _class19.ɵfac,
    providedIn: 'platform'
  });
  return TestabilityRegistry;
})();
/**
 * Set the {@link GetTestability} implementation used by the Angular testing framework.
 * @publicApi
 */
function setTestabilityGetter(getter) {
  _testabilityGetter = getter;
}
let _testabilityGetter;
let _platformInjector = null;
/**
 * Internal token to indicate whether having multiple bootstrapped platform should be allowed (only
 * one bootstrapped platform is allowed by default). This token helps to support SSR scenarios.
 */
const ALLOW_MULTIPLE_PLATFORMS = /*#__PURE__*/new InjectionToken('AllowMultipleToken');
/**
 * Internal token that allows to register extra callbacks that should be invoked during the
 * `PlatformRef.destroy` operation. This token is needed to avoid a direct reference to the
 * `PlatformRef` class (i.e. register the callback via `PlatformRef.onDestroy`), thus making the
 * entire class tree-shakeable.
 */
const PLATFORM_DESTROY_LISTENERS = /*#__PURE__*/new InjectionToken('PlatformDestroyListeners');
/**
 * A [DI token](guide/glossary#di-token "DI token definition") that provides a set of callbacks to
 * be called for every component that is bootstrapped.
 *
 * Each callback must take a `ComponentRef` instance and return nothing.
 *
 * `(componentRef: ComponentRef) => void`
 *
 * @publicApi
 */
const APP_BOOTSTRAP_LISTENER = /*#__PURE__*/new InjectionToken('appBootstrapListener');
function compileNgModuleFactory(injector, options, moduleType) {
  ngDevMode && assertNgModuleType(moduleType);
  const moduleFactory = new NgModuleFactory(moduleType);
  // All of the logic below is irrelevant for AOT-compiled code.
  if (typeof ngJitMode !== 'undefined' && !ngJitMode) {
    return Promise.resolve(moduleFactory);
  }
  const compilerOptions = injector.get(COMPILER_OPTIONS, []).concat(options);
  // Configure the compiler to use the provided options. This call may fail when multiple modules
  // are bootstrapped with incompatible options, as a component can only be compiled according to
  // a single set of options.
  setJitOptions({
    defaultEncapsulation: _lastDefined(compilerOptions.map(opts => opts.defaultEncapsulation)),
    preserveWhitespaces: _lastDefined(compilerOptions.map(opts => opts.preserveWhitespaces))
  });
  if (isComponentResourceResolutionQueueEmpty()) {
    return Promise.resolve(moduleFactory);
  }
  const compilerProviders = compilerOptions.flatMap(option => option.providers ?? []);
  // In case there are no compiler providers, we just return the module factory as
  // there won't be any resource loader. This can happen with Ivy, because AOT compiled
  // modules can be still passed through "bootstrapModule". In that case we shouldn't
  // unnecessarily require the JIT compiler.
  if (compilerProviders.length === 0) {
    return Promise.resolve(moduleFactory);
  }
  const compiler = getCompilerFacade({
    usage: 0 /* JitCompilerUsage.Decorator */,
    kind: 'NgModule',
    type: moduleType
  });
  const compilerInjector = Injector.create({
    providers: compilerProviders
  });
  const resourceLoader = compilerInjector.get(compiler.ResourceLoader);
  // The resource loader can also return a string while the "resolveComponentResources"
  // always expects a promise. Therefore we need to wrap the returned value in a promise.
  return resolveComponentResources(url => Promise.resolve(resourceLoader.get(url))).then(() => moduleFactory);
}
function publishDefaultGlobalUtils() {
  ngDevMode && publishDefaultGlobalUtils$1();
}
function isBoundToModule(cf) {
  return cf.isBoundToModule;
}
/**
 * Creates a platform.
 * Platforms must be created on launch using this function.
 *
 * @publicApi
 */
function createPlatform(injector) {
  if (_platformInjector && !_platformInjector.get(ALLOW_MULTIPLE_PLATFORMS, false)) {
    throw new RuntimeError(400 /* RuntimeErrorCode.MULTIPLE_PLATFORMS */, ngDevMode && 'There can be only one platform. Destroy the previous one to create a new one.');
  }
  publishDefaultGlobalUtils();
  _platformInjector = injector;
  const platform = injector.get(PlatformRef);
  runPlatformInitializers(injector);
  return platform;
}
/**
 * The goal of this function is to bootstrap a platform injector,
 * but avoid referencing `PlatformRef` class.
 * This function is needed for bootstrapping a Standalone Component.
 */
function createOrReusePlatformInjector(providers = []) {
  // If a platform injector already exists, it means that the platform
  // is already bootstrapped and no additional actions are required.
  if (_platformInjector) return _platformInjector;
  // Otherwise, setup a new platform injector and run platform initializers.
  const injector = createPlatformInjector(providers);
  _platformInjector = injector;
  publishDefaultGlobalUtils();
  runPlatformInitializers(injector);
  return injector;
}
function runPlatformInitializers(injector) {
  const inits = injector.get(PLATFORM_INITIALIZER, null);
  inits?.forEach(init => init());
}
/**
 * Internal create application API that implements the core application creation logic and optional
 * bootstrap logic.
 *
 * Platforms (such as `platform-browser`) may require different set of application and platform
 * providers for an application to function correctly. As a result, platforms may use this function
 * internally and supply the necessary providers during the bootstrap, while exposing
 * platform-specific APIs as a part of their public API.
 *
 * @returns A promise that returns an `ApplicationRef` instance once resolved.
 */
function internalCreateApplication(config) {
  try {
    const {
      rootComponent,
      appProviders,
      platformProviders
    } = config;
    if ((typeof ngDevMode === 'undefined' || ngDevMode) && rootComponent !== undefined) {
      assertStandaloneComponentType(rootComponent);
    }
    const platformInjector = createOrReusePlatformInjector(platformProviders);
    // Create root application injector based on a set of providers configured at the platform
    // bootstrap level as well as providers passed to the bootstrap call by a user.
    const allAppProviders = [provideZoneChangeDetection(), ...(appProviders || [])];
    const adapter = new EnvironmentNgModuleRefAdapter({
      providers: allAppProviders,
      parent: platformInjector,
      debugName: typeof ngDevMode === 'undefined' || ngDevMode ? 'Environment Injector' : '',
      // We skip environment initializers because we need to run them inside the NgZone, which
      // happens after we get the NgZone instance from the Injector.
      runEnvironmentInitializers: false
    });
    const envInjector = adapter.injector;
    const ngZone = envInjector.get(NgZone);
    return ngZone.run(() => {
      envInjector.resolveInjectorInitializers();
      const exceptionHandler = envInjector.get(ErrorHandler, null);
      if ((typeof ngDevMode === 'undefined' || ngDevMode) && !exceptionHandler) {
        throw new RuntimeError(402 /* RuntimeErrorCode.MISSING_REQUIRED_INJECTABLE_IN_BOOTSTRAP */, 'No `ErrorHandler` found in the Dependency Injection tree.');
      }
      let onErrorSubscription;
      ngZone.runOutsideAngular(() => {
        onErrorSubscription = ngZone.onError.subscribe({
          next: error => {
            exceptionHandler.handleError(error);
          }
        });
      });
      // If the whole platform is destroyed, invoke the `destroy` method
      // for all bootstrapped applications as well.
      const destroyListener = () => envInjector.destroy();
      const onPlatformDestroyListeners = platformInjector.get(PLATFORM_DESTROY_LISTENERS);
      onPlatformDestroyListeners.add(destroyListener);
      envInjector.onDestroy(() => {
        onErrorSubscription.unsubscribe();
        onPlatformDestroyListeners.delete(destroyListener);
      });
      return _callAndReportToErrorHandler(exceptionHandler, ngZone, () => {
        const initStatus = envInjector.get(ApplicationInitStatus);
        initStatus.runInitializers();
        return initStatus.donePromise.then(() => {
          const localeId = envInjector.get(LOCALE_ID, DEFAULT_LOCALE_ID);
          setLocaleId(localeId || DEFAULT_LOCALE_ID);
          const appRef = envInjector.get(ApplicationRef);
          if (rootComponent !== undefined) {
            appRef.bootstrap(rootComponent);
          }
          return appRef;
        });
      });
    });
  } catch (e) {
    return Promise.reject(e);
  }
}
/**
 * Creates a factory for a platform. Can be used to provide or override `Providers` specific to
 * your application's runtime needs, such as `PLATFORM_INITIALIZER` and `PLATFORM_ID`.
 * @param parentPlatformFactory Another platform factory to modify. Allows you to compose factories
 * to build up configurations that might be required by different libraries or parts of the
 * application.
 * @param name Identifies the new platform factory.
 * @param providers A set of dependency providers for platforms created with the new factory.
 *
 * @publicApi
 */
function createPlatformFactory(parentPlatformFactory, name, providers = []) {
  const desc = `Platform: ${name}`;
  const marker = new InjectionToken(desc);
  return (extraProviders = []) => {
    let platform = getPlatform();
    if (!platform || platform.injector.get(ALLOW_MULTIPLE_PLATFORMS, false)) {
      const platformProviders = [...providers, ...extraProviders, {
        provide: marker,
        useValue: true
      }];
      if (parentPlatformFactory) {
        parentPlatformFactory(platformProviders);
      } else {
        createPlatform(createPlatformInjector(platformProviders, desc));
      }
    }
    return assertPlatform(marker);
  };
}
/**
 * Checks that there is currently a platform that contains the given token as a provider.
 *
 * @publicApi
 */
function assertPlatform(requiredToken) {
  const platform = getPlatform();
  if (!platform) {
    throw new RuntimeError(401 /* RuntimeErrorCode.PLATFORM_NOT_FOUND */, ngDevMode && 'No platform exists!');
  }
  if ((typeof ngDevMode === 'undefined' || ngDevMode) && !platform.injector.get(requiredToken, null)) {
    throw new RuntimeError(400 /* RuntimeErrorCode.MULTIPLE_PLATFORMS */, 'A platform with a different configuration has been created. Please destroy it first.');
  }
  return platform;
}
/**
 * Helper function to create an instance of a platform injector (that maintains the 'platform'
 * scope).
 */
function createPlatformInjector(providers = [], name) {
  return Injector.create({
    name,
    providers: [{
      provide: INJECTOR_SCOPE,
      useValue: 'platform'
    }, {
      provide: PLATFORM_DESTROY_LISTENERS,
      useValue: new Set([() => _platformInjector = null])
    }, ...providers]
  });
}
/**
 * Returns the current platform.
 *
 * @publicApi
 */
function getPlatform() {
  return _platformInjector?.get(PlatformRef) ?? null;
}
/**
 * The Angular platform is the entry point for Angular on a web page.
 * Each page has exactly one platform. Services (such as reflection) which are common
 * to every Angular application running on the page are bound in its scope.
 * A page's platform is initialized implicitly when a platform is created using a platform
 * factory such as `PlatformBrowser`, or explicitly by calling the `createPlatform()` function.
 *
 * @publicApi
 */
let PlatformRef = /*#__PURE__*/(() => {
  var _class20;
  class PlatformRef {
    /** @internal */
    constructor(_injector) {
      this._injector = _injector;
      this._modules = [];
      this._destroyListeners = [];
      this._destroyed = false;
    }
    /**
     * Creates an instance of an `@NgModule` for the given platform.
     *
     * @deprecated Passing NgModule factories as the `PlatformRef.bootstrapModuleFactory` function
     *     argument is deprecated. Use the `PlatformRef.bootstrapModule` API instead.
     */
    bootstrapModuleFactory(moduleFactory, options) {
      // Note: We need to create the NgZone _before_ we instantiate the module,
      // as instantiating the module creates some providers eagerly.
      // So we create a mini parent injector that just contains the new NgZone and
      // pass that as parent to the NgModuleFactory.
      const ngZone = getNgZone(options?.ngZone, getNgZoneOptions({
        eventCoalescing: options?.ngZoneEventCoalescing,
        runCoalescing: options?.ngZoneRunCoalescing
      }));
      // Note: Create ngZoneInjector within ngZone.run so that all of the instantiated services are
      // created within the Angular zone
      // Do not try to replace ngZone.run with ApplicationRef#run because ApplicationRef would then be
      // created outside of the Angular zone.
      return ngZone.run(() => {
        const moduleRef = createNgModuleRefWithProviders(moduleFactory.moduleType, this.injector, internalProvideZoneChangeDetection(() => ngZone));
        if ((typeof ngDevMode === 'undefined' || ngDevMode) && moduleRef.injector.get(PROVIDED_NG_ZONE, null) !== null) {
          throw new RuntimeError(207 /* RuntimeErrorCode.PROVIDER_IN_WRONG_CONTEXT */, '`bootstrapModule` does not support `provideZoneChangeDetection`. Use `BootstrapOptions` instead.');
        }
        const exceptionHandler = moduleRef.injector.get(ErrorHandler, null);
        if ((typeof ngDevMode === 'undefined' || ngDevMode) && exceptionHandler === null) {
          throw new RuntimeError(402 /* RuntimeErrorCode.MISSING_REQUIRED_INJECTABLE_IN_BOOTSTRAP */, 'No ErrorHandler. Is platform module (BrowserModule) included?');
        }
        ngZone.runOutsideAngular(() => {
          const subscription = ngZone.onError.subscribe({
            next: error => {
              exceptionHandler.handleError(error);
            }
          });
          moduleRef.onDestroy(() => {
            remove(this._modules, moduleRef);
            subscription.unsubscribe();
          });
        });
        return _callAndReportToErrorHandler(exceptionHandler, ngZone, () => {
          const initStatus = moduleRef.injector.get(ApplicationInitStatus);
          initStatus.runInitializers();
          return initStatus.donePromise.then(() => {
            // If the `LOCALE_ID` provider is defined at bootstrap then we set the value for ivy
            const localeId = moduleRef.injector.get(LOCALE_ID, DEFAULT_LOCALE_ID);
            setLocaleId(localeId || DEFAULT_LOCALE_ID);
            this._moduleDoBootstrap(moduleRef);
            return moduleRef;
          });
        });
      });
    }
    /**
     * Creates an instance of an `@NgModule` for a given platform.
     *
     * @usageNotes
     * ### Simple Example
     *
     * ```typescript
     * @NgModule({
     *   imports: [BrowserModule]
     * })
     * class MyModule {}
     *
     * let moduleRef = platformBrowser().bootstrapModule(MyModule);
     * ```
     *
     */
    bootstrapModule(moduleType, compilerOptions = []) {
      const options = optionsReducer({}, compilerOptions);
      return compileNgModuleFactory(this.injector, options, moduleType).then(moduleFactory => this.bootstrapModuleFactory(moduleFactory, options));
    }
    _moduleDoBootstrap(moduleRef) {
      const appRef = moduleRef.injector.get(ApplicationRef);
      if (moduleRef._bootstrapComponents.length > 0) {
        moduleRef._bootstrapComponents.forEach(f => appRef.bootstrap(f));
      } else if (moduleRef.instance.ngDoBootstrap) {
        moduleRef.instance.ngDoBootstrap(appRef);
      } else {
        throw new RuntimeError(-403 /* RuntimeErrorCode.BOOTSTRAP_COMPONENTS_NOT_FOUND */, ngDevMode && `The module ${stringify(moduleRef.instance.constructor)} was bootstrapped, ` + `but it does not declare "@NgModule.bootstrap" components nor a "ngDoBootstrap" method. ` + `Please define one of these.`);
      }
      this._modules.push(moduleRef);
    }
    /**
     * Registers a listener to be called when the platform is destroyed.
     */
    onDestroy(callback) {
      this._destroyListeners.push(callback);
    }
    /**
     * Retrieves the platform {@link Injector}, which is the parent injector for
     * every Angular application on the page and provides singleton providers.
     */
    get injector() {
      return this._injector;
    }
    /**
     * Destroys the current Angular platform and all Angular applications on the page.
     * Destroys all modules and listeners registered with the platform.
     */
    destroy() {
      if (this._destroyed) {
        throw new RuntimeError(404 /* RuntimeErrorCode.PLATFORM_ALREADY_DESTROYED */, ngDevMode && 'The platform has already been destroyed!');
      }
      this._modules.slice().forEach(module => module.destroy());
      this._destroyListeners.forEach(listener => listener());
      const destroyListeners = this._injector.get(PLATFORM_DESTROY_LISTENERS, null);
      if (destroyListeners) {
        destroyListeners.forEach(listener => listener());
        destroyListeners.clear();
      }
      this._destroyed = true;
    }
    /**
     * Indicates whether this instance was destroyed.
     */
    get destroyed() {
      return this._destroyed;
    }
  }
  _class20 = PlatformRef;
  _class20.ɵfac = function PlatformRef_Factory(t) {
    return new (t || _class20)(ɵɵinject(Injector));
  };
  _class20.ɵprov = /*@__PURE__*/ɵɵdefineInjectable({
    token: _class20,
    factory: _class20.ɵfac,
    providedIn: 'platform'
  });
  return PlatformRef;
})();
// Transforms a set of `BootstrapOptions` (supported by the NgModule-based bootstrap APIs) ->
// `NgZoneOptions` that are recognized by the NgZone constructor. Passing no options will result in
// a set of default options returned.
function getNgZoneOptions(options) {
  return {
    enableLongStackTrace: typeof ngDevMode === 'undefined' ? false : !!ngDevMode,
    shouldCoalesceEventChangeDetection: options?.eventCoalescing ?? false,
    shouldCoalesceRunChangeDetection: options?.runCoalescing ?? false
  };
}
function getNgZone(ngZoneToUse = 'zone.js', options) {
  if (ngZoneToUse === 'noop') {
    return new NoopNgZone();
  }
  if (ngZoneToUse === 'zone.js') {
    return new NgZone(options);
  }
  return ngZoneToUse;
}
function _callAndReportToErrorHandler(errorHandler, ngZone, callback) {
  try {
    const result = callback();
    if (isPromise(result)) {
      return result.catch(e => {
        ngZone.runOutsideAngular(() => errorHandler.handleError(e));
        // rethrow as the exception handler might not do it
        throw e;
      });
    }
    return result;
  } catch (e) {
    ngZone.runOutsideAngular(() => errorHandler.handleError(e));
    // rethrow as the exception handler might not do it
    throw e;
  }
}
function optionsReducer(dst, objs) {
  if (Array.isArray(objs)) {
    return objs.reduce(optionsReducer, dst);
  }
  return {
    ...dst,
    ...objs
  };
}
/**
 * A reference to an Angular application running on a page.
 *
 * @usageNotes
 * {@a is-stable-examples}
 * ### isStable examples and caveats
 *
 * Note two important points about `isStable`, demonstrated in the examples below:
 * - the application will never be stable if you start any kind
 * of recurrent asynchronous task when the application starts
 * (for example for a polling process, started with a `setInterval`, a `setTimeout`
 * or using RxJS operators like `interval`);
 * - the `isStable` Observable runs outside of the Angular zone.
 *
 * Let's imagine that you start a recurrent task
 * (here incrementing a counter, using RxJS `interval`),
 * and at the same time subscribe to `isStable`.
 *
 * ```
 * constructor(appRef: ApplicationRef) {
 *   appRef.isStable.pipe(
 *      filter(stable => stable)
 *   ).subscribe(() => console.log('App is stable now');
 *   interval(1000).subscribe(counter => console.log(counter));
 * }
 * ```
 * In this example, `isStable` will never emit `true`,
 * and the trace "App is stable now" will never get logged.
 *
 * If you want to execute something when the app is stable,
 * you have to wait for the application to be stable
 * before starting your polling process.
 *
 * ```
 * constructor(appRef: ApplicationRef) {
 *   appRef.isStable.pipe(
 *     first(stable => stable),
 *     tap(stable => console.log('App is stable now')),
 *     switchMap(() => interval(1000))
 *   ).subscribe(counter => console.log(counter));
 * }
 * ```
 * In this example, the trace "App is stable now" will be logged
 * and then the counter starts incrementing every second.
 *
 * Note also that this Observable runs outside of the Angular zone,
 * which means that the code in the subscription
 * to this Observable will not trigger the change detection.
 *
 * Let's imagine that instead of logging the counter value,
 * you update a field of your component
 * and display it in its template.
 *
 * ```
 * constructor(appRef: ApplicationRef) {
 *   appRef.isStable.pipe(
 *     first(stable => stable),
 *     switchMap(() => interval(1000))
 *   ).subscribe(counter => this.value = counter);
 * }
 * ```
 * As the `isStable` Observable runs outside the zone,
 * the `value` field will be updated properly,
 * but the template will not be refreshed!
 *
 * You'll have to manually trigger the change detection to update the template.
 *
 * ```
 * constructor(appRef: ApplicationRef, cd: ChangeDetectorRef) {
 *   appRef.isStable.pipe(
 *     first(stable => stable),
 *     switchMap(() => interval(1000))
 *   ).subscribe(counter => {
 *     this.value = counter;
 *     cd.detectChanges();
 *   });
 * }
 * ```
 *
 * Or make the subscription callback run inside the zone.
 *
 * ```
 * constructor(appRef: ApplicationRef, zone: NgZone) {
 *   appRef.isStable.pipe(
 *     first(stable => stable),
 *     switchMap(() => interval(1000))
 *   ).subscribe(counter => zone.run(() => this.value = counter));
 * }
 * ```
 *
 * @publicApi
 */
let ApplicationRef = /*#__PURE__*/(() => {
  var _class21;
  class ApplicationRef {
    constructor() {
      /** @internal */
      this._bootstrapListeners = [];
      this._runningTick = false;
      this._destroyed = false;
      this._destroyListeners = [];
      /** @internal */
      this._views = [];
      this.internalErrorHandler = inject(INTERNAL_APPLICATION_ERROR_HANDLER);
      this.zoneIsStable = inject(ZONE_IS_STABLE_OBSERVABLE);
      /**
       * Get a list of component types registered to this application.
       * This list is populated even before the component is created.
       */
      this.componentTypes = [];
      /**
       * Get a list of components registered to this application.
       */
      this.components = [];
      /**
       * Returns an Observable that indicates when the application is stable or unstable.
       */
      this.isStable = inject(InitialRenderPendingTasks).hasPendingTasks.pipe(switchMap(hasPendingTasks => hasPendingTasks ? of(false) : this.zoneIsStable), distinctUntilChanged(), share());
      this._injector = inject(EnvironmentInjector);
    }
    /**
     * Indicates whether this instance was destroyed.
     */
    get destroyed() {
      return this._destroyed;
    }
    /**
     * The `EnvironmentInjector` used to create this application.
     */
    get injector() {
      return this._injector;
    }
    /**
     * Bootstrap a component onto the element identified by its selector or, optionally, to a
     * specified element.
     *
     * @usageNotes
     * ### Bootstrap process
     *
     * When bootstrapping a component, Angular mounts it onto a target DOM element
     * and kicks off automatic change detection. The target DOM element can be
     * provided using the `rootSelectorOrNode` argument.
     *
     * If the target DOM element is not provided, Angular tries to find one on a page
     * using the `selector` of the component that is being bootstrapped
     * (first matched element is used).
     *
     * ### Example
     *
     * Generally, we define the component to bootstrap in the `bootstrap` array of `NgModule`,
     * but it requires us to know the component while writing the application code.
     *
     * Imagine a situation where we have to wait for an API call to decide about the component to
     * bootstrap. We can use the `ngDoBootstrap` hook of the `NgModule` and call this method to
     * dynamically bootstrap a component.
     *
     * {@example core/ts/platform/platform.ts region='componentSelector'}
     *
     * Optionally, a component can be mounted onto a DOM element that does not match the
     * selector of the bootstrapped component.
     *
     * In the following example, we are providing a CSS selector to match the target element.
     *
     * {@example core/ts/platform/platform.ts region='cssSelector'}
     *
     * While in this example, we are providing reference to a DOM node.
     *
     * {@example core/ts/platform/platform.ts region='domNode'}
     */
    bootstrap(componentOrFactory, rootSelectorOrNode) {
      (typeof ngDevMode === 'undefined' || ngDevMode) && this.warnIfDestroyed();
      const isComponentFactory = componentOrFactory instanceof ComponentFactory$1;
      const initStatus = this._injector.get(ApplicationInitStatus);
      if (!initStatus.done) {
        const standalone = !isComponentFactory && isStandalone(componentOrFactory);
        const errorMessage = 'Cannot bootstrap as there are still asynchronous initializers running.' + (standalone ? '' : ' Bootstrap components in the `ngDoBootstrap` method of the root module.');
        throw new RuntimeError(405 /* RuntimeErrorCode.ASYNC_INITIALIZERS_STILL_RUNNING */, (typeof ngDevMode === 'undefined' || ngDevMode) && errorMessage);
      }
      let componentFactory;
      if (isComponentFactory) {
        componentFactory = componentOrFactory;
      } else {
        const resolver = this._injector.get(ComponentFactoryResolver$1);
        componentFactory = resolver.resolveComponentFactory(componentOrFactory);
      }
      this.componentTypes.push(componentFactory.componentType);
      // Create a factory associated with the current module if it's not bound to some other
      const ngModule = isBoundToModule(componentFactory) ? undefined : this._injector.get(NgModuleRef$1);
      const selectorOrNode = rootSelectorOrNode || componentFactory.selector;
      const compRef = componentFactory.create(Injector.NULL, [], selectorOrNode, ngModule);
      const nativeElement = compRef.location.nativeElement;
      const testability = compRef.injector.get(TESTABILITY, null);
      testability?.registerApplication(nativeElement);
      compRef.onDestroy(() => {
        this.detachView(compRef.hostView);
        remove(this.components, compRef);
        testability?.unregisterApplication(nativeElement);
      });
      this._loadComponent(compRef);
      if (typeof ngDevMode === 'undefined' || ngDevMode) {
        const _console = this._injector.get(Console);
        _console.log(`Angular is running in development mode.`);
      }
      return compRef;
    }
    /**
     * Invoke this method to explicitly process change detection and its side-effects.
     *
     * In development mode, `tick()` also performs a second change detection cycle to ensure that no
     * further changes are detected. If additional changes are picked up during this second cycle,
     * bindings in the app have side-effects that cannot be resolved in a single change detection
     * pass.
     * In this case, Angular throws an error, since an Angular application can only have one change
     * detection pass during which all change detection must complete.
     */
    tick() {
      (typeof ngDevMode === 'undefined' || ngDevMode) && this.warnIfDestroyed();
      if (this._runningTick) {
        throw new RuntimeError(101 /* RuntimeErrorCode.RECURSIVE_APPLICATION_REF_TICK */, ngDevMode && 'ApplicationRef.tick is called recursively');
      }
      try {
        this._runningTick = true;
        for (let view of this._views) {
          view.detectChanges();
        }
        if (typeof ngDevMode === 'undefined' || ngDevMode) {
          for (let view of this._views) {
            view.checkNoChanges();
          }
        }
      } catch (e) {
        // Attention: Don't rethrow as it could cancel subscriptions to Observables!
        this.internalErrorHandler(e);
      } finally {
        this._runningTick = false;
      }
    }
    /**
     * Attaches a view so that it will be dirty checked.
     * The view will be automatically detached when it is destroyed.
     * This will throw if the view is already attached to a ViewContainer.
     */
    attachView(viewRef) {
      (typeof ngDevMode === 'undefined' || ngDevMode) && this.warnIfDestroyed();
      const view = viewRef;
      this._views.push(view);
      view.attachToAppRef(this);
    }
    /**
     * Detaches a view from dirty checking again.
     */
    detachView(viewRef) {
      (typeof ngDevMode === 'undefined' || ngDevMode) && this.warnIfDestroyed();
      const view = viewRef;
      remove(this._views, view);
      view.detachFromAppRef();
    }
    _loadComponent(componentRef) {
      this.attachView(componentRef.hostView);
      this.tick();
      this.components.push(componentRef);
      // Get the listeners lazily to prevent DI cycles.
      const listeners = this._injector.get(APP_BOOTSTRAP_LISTENER, []);
      if (ngDevMode && !Array.isArray(listeners)) {
        throw new RuntimeError(-209 /* RuntimeErrorCode.INVALID_MULTI_PROVIDER */, 'Unexpected type of the `APP_BOOTSTRAP_LISTENER` token value ' + `(expected an array, but got ${typeof listeners}). ` + 'Please check that the `APP_BOOTSTRAP_LISTENER` token is configured as a ' + '`multi: true` provider.');
      }
      listeners.push(...this._bootstrapListeners);
      listeners.forEach(listener => listener(componentRef));
    }
    /** @internal */
    ngOnDestroy() {
      if (this._destroyed) return;
      try {
        // Call all the lifecycle hooks.
        this._destroyListeners.forEach(listener => listener());
        // Destroy all registered views.
        this._views.slice().forEach(view => view.destroy());
      } finally {
        // Indicate that this instance is destroyed.
        this._destroyed = true;
        // Release all references.
        this._views = [];
        this._bootstrapListeners = [];
        this._destroyListeners = [];
      }
    }
    /**
     * Registers a listener to be called when an instance is destroyed.
     *
     * @param callback A callback function to add as a listener.
     * @returns A function which unregisters a listener.
     */
    onDestroy(callback) {
      (typeof ngDevMode === 'undefined' || ngDevMode) && this.warnIfDestroyed();
      this._destroyListeners.push(callback);
      return () => remove(this._destroyListeners, callback);
    }
    /**
     * Destroys an Angular application represented by this `ApplicationRef`. Calling this function
     * will destroy the associated environment injectors as well as all the bootstrapped components
     * with their views.
     */
    destroy() {
      if (this._destroyed) {
        throw new RuntimeError(406 /* RuntimeErrorCode.APPLICATION_REF_ALREADY_DESTROYED */, ngDevMode && 'This instance of the `ApplicationRef` has already been destroyed.');
      }
      const injector = this._injector;
      // Check that this injector instance supports destroy operation.
      if (injector.destroy && !injector.destroyed) {
        // Destroying an underlying injector will trigger the `ngOnDestroy` lifecycle
        // hook, which invokes the remaining cleanup actions.
        injector.destroy();
      }
    }
    /**
     * Returns the number of attached views.
     */
    get viewCount() {
      return this._views.length;
    }
    warnIfDestroyed() {
      if ((typeof ngDevMode === 'undefined' || ngDevMode) && this._destroyed) {
        console.warn(formatRuntimeError(406 /* RuntimeErrorCode.APPLICATION_REF_ALREADY_DESTROYED */, 'This instance of the `ApplicationRef` has already been destroyed.'));
      }
    }
  }
  _class21 = ApplicationRef;
  _class21.ɵfac = function ApplicationRef_Factory(t) {
    return new (t || _class21)();
  };
  _class21.ɵprov = /*@__PURE__*/ɵɵdefineInjectable({
    token: _class21,
    factory: _class21.ɵfac,
    providedIn: 'root'
  });
  return ApplicationRef;
})();
function remove(list, el) {
  const index = list.indexOf(el);
  if (index > -1) {
    list.splice(index, 1);
  }
}
function _lastDefined(args) {
  for (let i = args.length - 1; i >= 0; i--) {
    if (args[i] !== undefined) {
      return args[i];
    }
  }
  return undefined;
}
/**
 * `InjectionToken` used to configure how to call the `ErrorHandler`.
 *
 * `NgZone` is provided by default today so the default (and only) implementation for this
 * is calling `ErrorHandler.handleError` outside of the Angular zone.
 */
const INTERNAL_APPLICATION_ERROR_HANDLER = /*#__PURE__*/new InjectionToken(typeof ngDevMode === 'undefined' || ngDevMode ? 'internal error handler' : '', {
  providedIn: 'root',
  factory: () => {
    const userErrorHandler = inject(ErrorHandler);
    return userErrorHandler.handleError.bind(undefined);
  }
});
function ngZoneApplicationErrorHandlerFactory() {
  const zone = inject(NgZone);
  const userErrorHandler = inject(ErrorHandler);
  return e => zone.runOutsideAngular(() => userErrorHandler.handleError(e));
}
let NgZoneChangeDetectionScheduler = /*#__PURE__*/(() => {
  var _class22;
  class NgZoneChangeDetectionScheduler {
    constructor() {
      this.zone = inject(NgZone);
      this.applicationRef = inject(ApplicationRef);
    }
    initialize() {
      if (this._onMicrotaskEmptySubscription) {
        return;
      }
      this._onMicrotaskEmptySubscription = this.zone.onMicrotaskEmpty.subscribe({
        next: () => {
          this.zone.run(() => {
            this.applicationRef.tick();
          });
        }
      });
    }
    ngOnDestroy() {
      this._onMicrotaskEmptySubscription?.unsubscribe();
    }
  }
  _class22 = NgZoneChangeDetectionScheduler;
  _class22.ɵfac = function NgZoneChangeDetectionScheduler_Factory(t) {
    return new (t || _class22)();
  };
  _class22.ɵprov = /*@__PURE__*/ɵɵdefineInjectable({
    token: _class22,
    factory: _class22.ɵfac,
    providedIn: 'root'
  });
  return NgZoneChangeDetectionScheduler;
})();
/**
 * Internal token used to verify that `provideZoneChangeDetection` is not used
 * with the bootstrapModule API.
 */
const PROVIDED_NG_ZONE = /*#__PURE__*/new InjectionToken(typeof ngDevMode === 'undefined' || ngDevMode ? 'provideZoneChangeDetection token' : '');
function internalProvideZoneChangeDetection(ngZoneFactory) {
  return [{
    provide: NgZone,
    useFactory: ngZoneFactory
  }, {
    provide: ENVIRONMENT_INITIALIZER,
    multi: true,
    useFactory: () => {
      const ngZoneChangeDetectionScheduler = inject(NgZoneChangeDetectionScheduler, {
        optional: true
      });
      if ((typeof ngDevMode === 'undefined' || ngDevMode) && ngZoneChangeDetectionScheduler === null) {
        throw new RuntimeError(402 /* RuntimeErrorCode.MISSING_REQUIRED_INJECTABLE_IN_BOOTSTRAP */, `A required Injectable was not found in the dependency injection tree. ` + 'If you are bootstrapping an NgModule, make sure that the `BrowserModule` is imported.');
      }
      return () => ngZoneChangeDetectionScheduler.initialize();
    }
  }, {
    provide: INTERNAL_APPLICATION_ERROR_HANDLER,
    useFactory: ngZoneApplicationErrorHandlerFactory
  }, {
    provide: ZONE_IS_STABLE_OBSERVABLE,
    useFactory: isStableFactory
  }];
}
/**
 * Provides `NgZone`-based change detection for the application bootstrapped using
 * `bootstrapApplication`.
 *
 * `NgZone` is already provided in applications by default. This provider allows you to configure
 * options like `eventCoalescing` in the `NgZone`.
 * This provider is not available for `platformBrowser().bootstrapModule`, which uses
 * `BootstrapOptions` instead.
 *
 * @usageNotes
 * ```typescript=
 * bootstrapApplication(MyApp, {providers: [
 *   provideZoneChangeDetection({eventCoalescing: true}),
 * ]});
 * ```
 *
 * @publicApi
 * @see {@link bootstrapApplication}
 * @see {@link NgZoneOptions}
 */
function provideZoneChangeDetection(options) {
  const zoneProviders = internalProvideZoneChangeDetection(() => new NgZone(getNgZoneOptions(options)));
  return makeEnvironmentProviders([typeof ngDevMode === 'undefined' || ngDevMode ? {
    provide: PROVIDED_NG_ZONE,
    useValue: true
  } : [], zoneProviders]);
}

/**
 * @module
 * @description
 * Change detection enables data binding in Angular.
 */

/**
 * This platform has to be included in any other platform
 *
 * @publicApi
 */
const platformCore = /*#__PURE__*/createPlatformFactory(null, 'core', []);

/**
 * A collection that tracks all serialized views (`ngh` DOM annotations)
 * to avoid duplication. An attempt to add a duplicate view results in the
 * collection returning the index of the previously collected serialized view.
 * This reduces the number of annotations needed for a given page.
 */
class SerializedViewCollection {
  constructor() {
    this.views = [];
    this.indexByContent = new Map();
  }
  add(serializedView) {
    const viewAsString = JSON.stringify(serializedView);
    if (!this.indexByContent.has(viewAsString)) {
      const index = this.views.length;
      this.views.push(serializedView);
      this.indexByContent.set(viewAsString, index);
      return index;
    }
    return this.indexByContent.get(viewAsString);
  }
  getAll() {
    return this.views;
  }
}
/**
 * Global counter that is used to generate a unique id for TViews
 * during the serialization process.
 */
let tViewSsrId = 0;
/**
 * Generates a unique id for a given TView and returns this id.
 * The id is also stored on this instance of a TView and reused in
 * subsequent calls.
 *
 * This id is needed to uniquely identify and pick up dehydrated views
 * at runtime.
 */
function getSsrId(tView) {
  if (!tView.ssrId) {
    tView.ssrId = `t${tViewSsrId++}`;
  }
  return tView.ssrId;
}
/**
 * Computes the number of root nodes in a given view
 * (or child nodes in a given container if a tNode is provided).
 */
function calcNumRootNodes(tView, lView, tNode) {
  const rootNodes = [];
  collectNativeNodes(tView, lView, tNode, rootNodes);
  return rootNodes.length;
}
/**
 * Annotates root level component's LView for hydration,
 * see `annotateHostElementForHydration` for additional information.
 */
function annotateComponentLViewForHydration(lView, context) {
  const hostElement = lView[HOST];
  // Root elements might also be annotated with the `ngSkipHydration` attribute,
  // check if it's present before starting the serialization process.
  if (hostElement && !hostElement.hasAttribute(SKIP_HYDRATION_ATTR_NAME)) {
    return annotateHostElementForHydration(hostElement, lView, context);
  }
  return null;
}
/**
 * Annotates root level LContainer for hydration. This happens when a root component
 * injects ViewContainerRef, thus making the component an anchor for a view container.
 * This function serializes the component itself as well as all views from the view
 * container.
 */
function annotateLContainerForHydration(lContainer, context) {
  const componentLView = lContainer[HOST];
  // Serialize the root component itself.
  const componentLViewNghIndex = annotateComponentLViewForHydration(componentLView, context);
  const hostElement = unwrapRNode(componentLView[HOST]);
  // Serialize all views within this view container.
  const rootLView = lContainer[PARENT];
  const rootLViewNghIndex = annotateHostElementForHydration(hostElement, rootLView, context);
  const renderer = componentLView[RENDERER];
  // For cases when a root component also acts as an anchor node for a ViewContainerRef
  // (for example, when ViewContainerRef is injected in a root component), there is a need
  // to serialize information about the component itself, as well as an LContainer that
  // represents this ViewContainerRef. Effectively, we need to serialize 2 pieces of info:
  // (1) hydration info for the root component itself and (2) hydration info for the
  // ViewContainerRef instance (an LContainer). Each piece of information is included into
  // the hydration data (in the TransferState object) separately, thus we end up with 2 ids.
  // Since we only have 1 root element, we encode both bits of info into a single string:
  // ids are separated by the `|` char (e.g. `10|25`, where `10` is the ngh for a component view
  // and 25 is the `ngh` for a root view which holds LContainer).
  const finalIndex = `${componentLViewNghIndex}|${rootLViewNghIndex}`;
  renderer.setAttribute(hostElement, NGH_ATTR_NAME, finalIndex);
}
/**
 * Annotates all components bootstrapped in a given ApplicationRef
 * with info needed for hydration.
 *
 * @param appRef An instance of an ApplicationRef.
 * @param doc A reference to the current Document instance.
 */
function annotateForHydration(appRef, doc) {
  const serializedViewCollection = new SerializedViewCollection();
  const corruptedTextNodes = new Map();
  const viewRefs = appRef._views;
  for (const viewRef of viewRefs) {
    const lNode = getLNodeForHydration(viewRef);
    // An `lView` might be `null` if a `ViewRef` represents
    // an embedded view (not a component view).
    if (lNode !== null) {
      const context = {
        serializedViewCollection,
        corruptedTextNodes
      };
      if (isLContainer(lNode)) {
        annotateLContainerForHydration(lNode, context);
      } else {
        annotateComponentLViewForHydration(lNode, context);
      }
      insertCorruptedTextNodeMarkers(corruptedTextNodes, doc);
    }
  }
  // Note: we *always* include hydration info key and a corresponding value
  // into the TransferState, even if the list of serialized views is empty.
  // This is needed as a signal to the client that the server part of the
  // hydration logic was setup and enabled correctly. Otherwise, if a client
  // hydration doesn't find a key in the transfer state - an error is produced.
  const serializedViews = serializedViewCollection.getAll();
  const transferState = appRef.injector.get(TransferState);
  transferState.set(NGH_DATA_KEY, serializedViews);
}
/**
 * Serializes the lContainer data into a list of SerializedView objects,
 * that represent views within this lContainer.
 *
 * @param lContainer the lContainer we are serializing
 * @param context the hydration context
 * @returns an array of the `SerializedView` objects
 */
function serializeLContainer(lContainer, context) {
  const views = [];
  let lastViewAsString = '';
  for (let i = CONTAINER_HEADER_OFFSET; i < lContainer.length; i++) {
    let childLView = lContainer[i];
    // If this is a root view, get an LView for the underlying component,
    // because it contains information about the view to serialize.
    if (isRootView(childLView)) {
      childLView = childLView[HEADER_OFFSET];
    }
    const childTView = childLView[TVIEW];
    let template;
    let numRootNodes = 0;
    if (childTView.type === 1 /* TViewType.Component */) {
      template = childTView.ssrId;
      // This is a component view, thus it has only 1 root node: the component
      // host node itself (other nodes would be inside that host node).
      numRootNodes = 1;
    } else {
      template = getSsrId(childTView);
      numRootNodes = calcNumRootNodes(childTView, childLView, childTView.firstChild);
    }
    const view = {
      [TEMPLATE_ID]: template,
      [NUM_ROOT_NODES]: numRootNodes,
      ...serializeLView(lContainer[i], context)
    };
    // Check if the previous view has the same shape (for example, it was
    // produced by the *ngFor), in which case bump the counter on the previous
    // view instead of including the same information again.
    const currentViewAsString = JSON.stringify(view);
    if (views.length > 0 && currentViewAsString === lastViewAsString) {
      const previousView = views[views.length - 1];
      previousView[MULTIPLIER] ??= 1;
      previousView[MULTIPLIER]++;
    } else {
      // Record this view as most recently added.
      lastViewAsString = currentViewAsString;
      views.push(view);
    }
  }
  return views;
}
/**
 * Helper function to produce a node path (which navigation steps runtime logic
 * needs to take to locate a node) and stores it in the `NODES` section of the
 * current serialized view.
 */
function appendSerializedNodePath(ngh, tNode, lView) {
  const noOffsetIndex = tNode.index - HEADER_OFFSET;
  ngh[NODES] ??= {};
  ngh[NODES][noOffsetIndex] = calcPathForNode(tNode, lView);
}
/**
 * Helper function to append information about a disconnected node.
 * This info is needed at runtime to avoid DOM lookups for this element
 * and instead, the element would be created from scratch.
 */
function appendDisconnectedNodeIndex(ngh, tNode) {
  const noOffsetIndex = tNode.index - HEADER_OFFSET;
  ngh[DISCONNECTED_NODES] ??= [];
  if (!ngh[DISCONNECTED_NODES].includes(noOffsetIndex)) {
    ngh[DISCONNECTED_NODES].push(noOffsetIndex);
  }
}
/**
 * Serializes the lView data into a SerializedView object that will later be added
 * to the TransferState storage and referenced using the `ngh` attribute on a host
 * element.
 *
 * @param lView the lView we are serializing
 * @param context the hydration context
 * @returns the `SerializedView` object containing the data to be added to the host node
 */
function serializeLView(lView, context) {
  const ngh = {};
  const tView = lView[TVIEW];
  // Iterate over DOM element references in an LView.
  for (let i = HEADER_OFFSET; i < tView.bindingStartIndex; i++) {
    const tNode = tView.data[i];
    const noOffsetIndex = i - HEADER_OFFSET;
    // Local refs (e.g. <div #localRef>) take up an extra slot in LViews
    // to store the same element. In this case, there is no information in
    // a corresponding slot in TNode data structure. If that's the case, just
    // skip this slot and move to the next one.
    if (!tNode) {
      continue;
    }
    // Check if a native node that represents a given TNode is disconnected from the DOM tree.
    // Such nodes must be excluded from the hydration (since the hydration won't be able to
    // find them), so the TNode ids are collected and used at runtime to skip the hydration.
    //
    // This situation may happen during the content projection, when some nodes don't make it
    // into one of the content projection slots (for example, when there is no default
    // <ng-content /> slot in projector component's template).
    if (isDisconnectedNode(tNode, lView) && isContentProjectedNode(tNode)) {
      appendDisconnectedNodeIndex(ngh, tNode);
      continue;
    }
    if (Array.isArray(tNode.projection)) {
      for (const projectionHeadTNode of tNode.projection) {
        // We may have `null`s in slots with no projected content.
        if (!projectionHeadTNode) continue;
        if (!Array.isArray(projectionHeadTNode)) {
          // If we process re-projected content (i.e. `<ng-content>`
          // appears at projection location), skip annotations for this content
          // since all DOM nodes in this projection were handled while processing
          // a parent lView, which contains those nodes.
          if (!isProjectionTNode(projectionHeadTNode) && !isInSkipHydrationBlock(projectionHeadTNode)) {
            if (isDisconnectedNode(projectionHeadTNode, lView)) {
              // Check whether this node is connected, since we may have a TNode
              // in the data structure as a projection segment head, but the
              // content projection slot might be disabled (e.g.
              // <ng-content *ngIf="false" />).
              appendDisconnectedNodeIndex(ngh, projectionHeadTNode);
            } else {
              appendSerializedNodePath(ngh, projectionHeadTNode, lView);
            }
          }
        } else {
          // If a value is an array, it means that we are processing a projection
          // where projectable nodes were passed in as DOM nodes (for example, when
          // calling `ViewContainerRef.createComponent(CmpA, {projectableNodes: [...]})`).
          //
          // In this scenario, nodes can come from anywhere (either created manually,
          // accessed via `document.querySelector`, etc) and may be in any state
          // (attached or detached from the DOM tree). As a result, we can not reliably
          // restore the state for such cases during hydration.
          throw unsupportedProjectionOfDomNodes(unwrapRNode(lView[i]));
        }
      }
    }
    if (isLContainer(lView[i])) {
      // Serialize information about a template.
      const embeddedTView = tNode.tView;
      if (embeddedTView !== null) {
        ngh[TEMPLATES] ??= {};
        ngh[TEMPLATES][noOffsetIndex] = getSsrId(embeddedTView);
      }
      // Serialize views within this LContainer.
      const hostNode = lView[i][HOST]; // host node of this container
      // LView[i][HOST] can be of 2 different types:
      // - either a DOM node
      // - or an array that represents an LView of a component
      if (Array.isArray(hostNode)) {
        // This is a component, serialize info about it.
        const targetNode = unwrapRNode(hostNode);
        if (!targetNode.hasAttribute(SKIP_HYDRATION_ATTR_NAME)) {
          annotateHostElementForHydration(targetNode, hostNode, context);
        }
      }
      ngh[CONTAINERS] ??= {};
      ngh[CONTAINERS][noOffsetIndex] = serializeLContainer(lView[i], context);
    } else if (Array.isArray(lView[i])) {
      // This is a component, annotate the host node with an `ngh` attribute.
      const targetNode = unwrapRNode(lView[i][HOST]);
      if (!targetNode.hasAttribute(SKIP_HYDRATION_ATTR_NAME)) {
        annotateHostElementForHydration(targetNode, lView[i], context);
      }
    } else {
      // <ng-container> case
      if (tNode.type & 8 /* TNodeType.ElementContainer */) {
        // An <ng-container> is represented by the number of
        // top-level nodes. This information is needed to skip over
        // those nodes to reach a corresponding anchor node (comment node).
        ngh[ELEMENT_CONTAINERS] ??= {};
        ngh[ELEMENT_CONTAINERS][noOffsetIndex] = calcNumRootNodes(tView, lView, tNode.child);
      } else if (tNode.type & 16 /* TNodeType.Projection */) {
        // Current TNode represents an `<ng-content>` slot, thus it has no
        // DOM elements associated with it, so the **next sibling** node would
        // not be able to find an anchor. In this case, use full path instead.
        let nextTNode = tNode.next;
        // Skip over all `<ng-content>` slots in a row.
        while (nextTNode !== null && nextTNode.type & 16 /* TNodeType.Projection */) {
          nextTNode = nextTNode.next;
        }
        if (nextTNode && !isInSkipHydrationBlock(nextTNode)) {
          // Handle a tNode after the `<ng-content>` slot.
          appendSerializedNodePath(ngh, nextTNode, lView);
        }
      } else {
        // Handle cases where text nodes can be lost after DOM serialization:
        //  1. When there is an *empty text node* in DOM: in this case, this
        //     node would not make it into the serialized string and as a result,
        //     this node wouldn't be created in a browser. This would result in
        //     a mismatch during the hydration, where the runtime logic would expect
        //     a text node to be present in live DOM, but no text node would exist.
        //     Example: `<span>{{ name }}</span>` when the `name` is an empty string.
        //     This would result in `<span></span>` string after serialization and
        //     in a browser only the `span` element would be created. To resolve that,
        //     an extra comment node is appended in place of an empty text node and
        //     that special comment node is replaced with an empty text node *before*
        //     hydration.
        //  2. When there are 2 consecutive text nodes present in the DOM.
        //     Example: `<div>Hello <ng-container *ngIf="true">world</ng-container></div>`.
        //     In this scenario, the live DOM would look like this:
        //       <div>#text('Hello ') #text('world') #comment('container')</div>
        //     Serialized string would look like this: `<div>Hello world<!--container--></div>`.
        //     The live DOM in a browser after that would be:
        //       <div>#text('Hello world') #comment('container')</div>
        //     Notice how 2 text nodes are now "merged" into one. This would cause hydration
        //     logic to fail, since it'd expect 2 text nodes being present, not one.
        //     To fix this, we insert a special comment node in between those text nodes, so
        //     serialized representation is: `<div>Hello <!--ngtns-->world<!--container--></div>`.
        //     This forces browser to create 2 text nodes separated by a comment node.
        //     Before running a hydration process, this special comment node is removed, so the
        //     live DOM has exactly the same state as it was before serialization.
        if (tNode.type & 1 /* TNodeType.Text */) {
          const rNode = unwrapRNode(lView[i]);
          // Collect this node as required special annotation only when its
          // contents is empty. Otherwise, such text node would be present on
          // the client after server-side rendering and no special handling needed.
          if (rNode.textContent === '') {
            context.corruptedTextNodes.set(rNode, "ngetn" /* TextNodeMarker.EmptyNode */);
          } else if (rNode.nextSibling?.nodeType === Node.TEXT_NODE) {
            context.corruptedTextNodes.set(rNode, "ngtns" /* TextNodeMarker.Separator */);
          }
        }

        if (tNode.projectionNext && tNode.projectionNext !== tNode.next && !isInSkipHydrationBlock(tNode.projectionNext)) {
          // Check if projection next is not the same as next, in which case
          // the node would not be found at creation time at runtime and we
          // need to provide a location for that node.
          appendSerializedNodePath(ngh, tNode.projectionNext, lView);
        }
      }
    }
  }
  return ngh;
}
/**
 * Determines whether a component instance that is represented
 * by a given LView uses `ViewEncapsulation.ShadowDom`.
 */
function componentUsesShadowDomEncapsulation(lView) {
  const instance = lView[CONTEXT];
  return instance?.constructor ? getComponentDef(instance.constructor)?.encapsulation === ViewEncapsulation$1.ShadowDom : false;
}
/**
 * Annotates component host element for hydration:
 * - by either adding the `ngh` attribute and collecting hydration-related info
 *   for the serialization and transferring to the client
 * - or by adding the `ngSkipHydration` attribute in case Angular detects that
 *   component contents is not compatible with hydration.
 *
 * @param element The Host element to be annotated
 * @param lView The associated LView
 * @param context The hydration context
 * @returns An index of serialized view from the transfer state object
 *          or `null` when a given component can not be serialized.
 */
function annotateHostElementForHydration(element, lView, context) {
  const renderer = lView[RENDERER];
  if (hasI18n(lView) || componentUsesShadowDomEncapsulation(lView)) {
    // Attach the skip hydration attribute if this component:
    // - either has i18n blocks, since hydrating such blocks is not yet supported
    // - or uses ShadowDom view encapsulation, since Domino doesn't support
    //   shadow DOM, so we can not guarantee that client and server representations
    //   would exactly match
    renderer.setAttribute(element, SKIP_HYDRATION_ATTR_NAME, '');
    return null;
  } else {
    const ngh = serializeLView(lView, context);
    const index = context.serializedViewCollection.add(ngh);
    renderer.setAttribute(element, NGH_ATTR_NAME, index.toString());
    return index;
  }
}
/**
 * Physically inserts the comment nodes to ensure empty text nodes and adjacent
 * text node separators are preserved after server serialization of the DOM.
 * These get swapped back for empty text nodes or separators once hydration happens
 * on the client.
 *
 * @param corruptedTextNodes The Map of text nodes to be replaced with comments
 * @param doc The document
 */
function insertCorruptedTextNodeMarkers(corruptedTextNodes, doc) {
  for (const [textNode, marker] of corruptedTextNodes) {
    textNode.after(doc.createComment(marker));
  }
}
/**
 * Detects whether a given TNode represents a node that
 * is being content projected.
 */
function isContentProjectedNode(tNode) {
  let currentTNode = tNode;
  while (currentTNode != null) {
    // If we come across a component host node in parent nodes -
    // this TNode is in the content projection section.
    if (isComponentHost(currentTNode)) {
      return true;
    }
    currentTNode = currentTNode.parent;
  }
  return false;
}
/**
 * Check whether a given node exists, but is disconnected from the DOM.
 *
 * Note: we leverage the fact that we have this information available in the DOM emulation
 * layer (in Domino) for now. Longer-term solution should not rely on the DOM emulation and
 * only use internal data structures and state to compute this information.
 */
function isDisconnectedNode(tNode, lView) {
  return !(tNode.type & 16 /* TNodeType.Projection */) && !!lView[tNode.index] && !unwrapRNode(lView[tNode.index]).isConnected;
}
/**
 * Creates an object that allows to retrieve component metadata.
 *
 * @usageNotes
 *
 * The example below demonstrates how to use the function and how the fields
 * of the returned object map to the component metadata.
 *
 * ```typescript
 * @Component({
 *   standalone: true,
 *   selector: 'foo-component',
 *   template: `
 *     <ng-content></ng-content>
 *     <ng-content select="content-selector-a"></ng-content>
 *   `,
 * })
 * class FooComponent {
 *   @Input('inputName') inputPropName: string;
 *   @Output('outputName') outputPropName = new EventEmitter<void>();
 * }
 *
 * const mirror = reflectComponentType(FooComponent);
 * expect(mirror.type).toBe(FooComponent);
 * expect(mirror.selector).toBe('foo-component');
 * expect(mirror.isStandalone).toBe(true);
 * expect(mirror.inputs).toEqual([{propName: 'inputName', templateName: 'inputPropName'}]);
 * expect(mirror.outputs).toEqual([{propName: 'outputName', templateName: 'outputPropName'}]);
 * expect(mirror.ngContentSelectors).toEqual([
 *   '*',                 // first `<ng-content>` in a template, the selector defaults to `*`
 *   'content-selector-a' // second `<ng-content>` in a template
 * ]);
 * ```
 *
 * @param component Component class reference.
 * @returns An object that allows to retrieve component metadata.
 *
 * @publicApi
 */
function reflectComponentType(component) {
  const componentDef = getComponentDef(component);
  if (!componentDef) return null;
  const factory = new ComponentFactory(componentDef);
  return {
    get selector() {
      return factory.selector;
    },
    get type() {
      return factory.componentType;
    },
    get inputs() {
      return factory.inputs;
    },
    get outputs() {
      return factory.outputs;
    },
    get ngContentSelectors() {
      return factory.ngContentSelectors;
    },
    get isStandalone() {
      return componentDef.standalone;
    },
    get isSignal() {
      return componentDef.signals;
    }
  };
}

/**
 * @module
 * @description
 * Entry point from which you should import all public core APIs.
 */
if (typeof ngDevMode !== 'undefined' && ngDevMode) {
  // This helper is to give a reasonable error message to people upgrading to v9 that have not yet
  // installed `@angular/localize` in their app.
  // tslint:disable-next-line: no-toplevel-property-access
  _global.$localize = _global.$localize || function () {
    throw new Error('It looks like your application or one of its dependencies is using i18n.\n' + 'Angular 9 introduced a global `$localize()` function that needs to be loaded.\n' + 'Please run `ng add @angular/localize` from the Angular CLI.\n' + '(For non-CLI projects, add `import \'@angular/localize/init\';` to your `polyfills.ts` file.\n' + 'For server-side rendering applications add the import to your `main.server.ts` file.)');
  };
}

/**
 * @license Angular v16.2.2
 * (c) 2010-2022 Google LLC. https://angular.io/
 * License: MIT
 */

let _DOM = null;
function getDOM() {
  return _DOM;
}
function setRootDomAdapter(adapter) {
  if (!_DOM) {
    _DOM = adapter;
  }
}
/* tslint:disable:requireParameterType */
/**
 * Provides DOM operations in an environment-agnostic way.
 *
 * @security Tread carefully! Interacting with the DOM directly is dangerous and
 * can introduce XSS risks.
 */
class DomAdapter {}

/**
 * A DI Token representing the main rendering context.
 * In a browser and SSR this is the DOM Document.
 * When using SSR, that document is created by [Domino](https://github.com/angular/domino).
 *
 * @publicApi
 */
const DOCUMENT = /*#__PURE__*/new InjectionToken('DocumentToken');

/**
 * This class should not be used directly by an application developer. Instead, use
 * {@link Location}.
 *
 * `PlatformLocation` encapsulates all calls to DOM APIs, which allows the Router to be
 * platform-agnostic.
 * This means that we can have different implementation of `PlatformLocation` for the different
 * platforms that Angular supports. For example, `@angular/platform-browser` provides an
 * implementation specific to the browser environment, while `@angular/platform-server` provides
 * one suitable for use with server-side rendering.
 *
 * The `PlatformLocation` class is used directly by all implementations of {@link LocationStrategy}
 * when they need to interact with the DOM APIs like pushState, popState, etc.
 *
 * {@link LocationStrategy} in turn is used by the {@link Location} service which is used directly
 * by the {@link Router} in order to navigate between routes. Since all interactions between {@link
 * Router} /
 * {@link Location} / {@link LocationStrategy} and DOM APIs flow through the `PlatformLocation`
 * class, they are all platform-agnostic.
 *
 * @publicApi
 */
let PlatformLocation = /*#__PURE__*/(() => {
  var _class;
  class PlatformLocation {
    historyGo(relativePosition) {
      throw new Error('Not implemented');
    }
  }
  _class = PlatformLocation;
  _class.ɵfac = function _class_Factory(t) {
    return new (t || _class)();
  };
  _class.ɵprov = /* @__PURE__ */ɵɵdefineInjectable({
    token: _class,
    factory: function () {
      return (() => inject(BrowserPlatformLocation))();
    },
    providedIn: 'platform'
  });
  return PlatformLocation;
})();
/**
 * `PlatformLocation` encapsulates all of the direct calls to platform APIs.
 * This class should not be used directly by an application developer. Instead, use
 * {@link Location}.
 *
 * @publicApi
 */
let BrowserPlatformLocation = /*#__PURE__*/(() => {
  var _class2;
  class BrowserPlatformLocation extends PlatformLocation {
    constructor() {
      super();
      this._doc = inject(DOCUMENT);
      this._location = window.location;
      this._history = window.history;
    }
    getBaseHrefFromDOM() {
      return getDOM().getBaseHref(this._doc);
    }
    onPopState(fn) {
      const window = getDOM().getGlobalEventTarget(this._doc, 'window');
      window.addEventListener('popstate', fn, false);
      return () => window.removeEventListener('popstate', fn);
    }
    onHashChange(fn) {
      const window = getDOM().getGlobalEventTarget(this._doc, 'window');
      window.addEventListener('hashchange', fn, false);
      return () => window.removeEventListener('hashchange', fn);
    }
    get href() {
      return this._location.href;
    }
    get protocol() {
      return this._location.protocol;
    }
    get hostname() {
      return this._location.hostname;
    }
    get port() {
      return this._location.port;
    }
    get pathname() {
      return this._location.pathname;
    }
    get search() {
      return this._location.search;
    }
    get hash() {
      return this._location.hash;
    }
    set pathname(newPath) {
      this._location.pathname = newPath;
    }
    pushState(state, title, url) {
      this._history.pushState(state, title, url);
    }
    replaceState(state, title, url) {
      this._history.replaceState(state, title, url);
    }
    forward() {
      this._history.forward();
    }
    back() {
      this._history.back();
    }
    historyGo(relativePosition = 0) {
      this._history.go(relativePosition);
    }
    getState() {
      return this._history.state;
    }
  }
  _class2 = BrowserPlatformLocation;
  _class2.ɵfac = function _class2_Factory(t) {
    return new (t || _class2)();
  };
  _class2.ɵprov = /* @__PURE__ */ɵɵdefineInjectable({
    token: _class2,
    factory: function () {
      return (() => new _class2())();
    },
    providedIn: 'platform'
  });
  return BrowserPlatformLocation;
})();
function parseCookieValue(cookieStr, name) {
  name = encodeURIComponent(name);
  for (const cookie of cookieStr.split(';')) {
    const eqIndex = cookie.indexOf('=');
    const [cookieName, cookieValue] = eqIndex == -1 ? [cookie, ''] : [cookie.slice(0, eqIndex), cookie.slice(eqIndex + 1)];
    if (cookieName.trim() === name) {
      return decodeURIComponent(cookieValue);
    }
  }
  return null;
}

/**
 * A structural directive that conditionally includes a template based on the value of
 * an expression coerced to Boolean.
 * When the expression evaluates to true, Angular renders the template
 * provided in a `then` clause, and when  false or null,
 * Angular renders the template provided in an optional `else` clause. The default
 * template for the `else` clause is blank.
 *
 * A [shorthand form](guide/structural-directives#asterisk) of the directive,
 * `*ngIf="condition"`, is generally used, provided
 * as an attribute of the anchor element for the inserted template.
 * Angular expands this into a more explicit version, in which the anchor element
 * is contained in an `<ng-template>` element.
 *
 * Simple form with shorthand syntax:
 *
 * ```
 * <div *ngIf="condition">Content to render when condition is true.</div>
 * ```
 *
 * Simple form with expanded syntax:
 *
 * ```
 * <ng-template [ngIf]="condition"><div>Content to render when condition is
 * true.</div></ng-template>
 * ```
 *
 * Form with an "else" block:
 *
 * ```
 * <div *ngIf="condition; else elseBlock">Content to render when condition is true.</div>
 * <ng-template #elseBlock>Content to render when condition is false.</ng-template>
 * ```
 *
 * Shorthand form with "then" and "else" blocks:
 *
 * ```
 * <div *ngIf="condition; then thenBlock else elseBlock"></div>
 * <ng-template #thenBlock>Content to render when condition is true.</ng-template>
 * <ng-template #elseBlock>Content to render when condition is false.</ng-template>
 * ```
 *
 * Form with storing the value locally:
 *
 * ```
 * <div *ngIf="condition as value; else elseBlock">{{value}}</div>
 * <ng-template #elseBlock>Content to render when value is null.</ng-template>
 * ```
 *
 * @usageNotes
 *
 * The `*ngIf` directive is most commonly used to conditionally show an inline template,
 * as seen in the following  example.
 * The default `else` template is blank.
 *
 * {@example common/ngIf/ts/module.ts region='NgIfSimple'}
 *
 * ### Showing an alternative template using `else`
 *
 * To display a template when `expression` evaluates to false, use an `else` template
 * binding as shown in the following example.
 * The `else` binding points to an `<ng-template>`  element labeled `#elseBlock`.
 * The template can be defined anywhere in the component view, but is typically placed right after
 * `ngIf` for readability.
 *
 * {@example common/ngIf/ts/module.ts region='NgIfElse'}
 *
 * ### Using an external `then` template
 *
 * In the previous example, the then-clause template is specified inline, as the content of the
 * tag that contains the `ngIf` directive. You can also specify a template that is defined
 * externally, by referencing a labeled `<ng-template>` element. When you do this, you can
 * change which template to use at runtime, as shown in the following example.
 *
 * {@example common/ngIf/ts/module.ts region='NgIfThenElse'}
 *
 * ### Storing a conditional result in a variable
 *
 * You might want to show a set of properties from the same object. If you are waiting
 * for asynchronous data, the object can be undefined.
 * In this case, you can use `ngIf` and store the result of the condition in a local
 * variable as shown in the following example.
 *
 * {@example common/ngIf/ts/module.ts region='NgIfAs'}
 *
 * This code uses only one `AsyncPipe`, so only one subscription is created.
 * The conditional statement stores the result of `userStream|async` in the local variable `user`.
 * You can then bind the local `user` repeatedly.
 *
 * The conditional displays the data only if `userStream` returns a value,
 * so you don't need to use the
 * safe-navigation-operator (`?.`)
 * to guard against null values when accessing properties.
 * You can display an alternative template while waiting for the data.
 *
 * ### Shorthand syntax
 *
 * The shorthand syntax `*ngIf` expands into two separate template specifications
 * for the "then" and "else" clauses. For example, consider the following shorthand statement,
 * that is meant to show a loading page while waiting for data to be loaded.
 *
 * ```
 * <div class="hero-list" *ngIf="heroes else loading">
 *  ...
 * </div>
 *
 * <ng-template #loading>
 *  <div>Loading...</div>
 * </ng-template>
 * ```
 *
 * You can see that the "else" clause references the `<ng-template>`
 * with the `#loading` label, and the template for the "then" clause
 * is provided as the content of the anchor element.
 *
 * However, when Angular expands the shorthand syntax, it creates
 * another `<ng-template>` tag, with `ngIf` and `ngIfElse` directives.
 * The anchor element containing the template for the "then" clause becomes
 * the content of this unlabeled `<ng-template>` tag.
 *
 * ```
 * <ng-template [ngIf]="heroes" [ngIfElse]="loading">
 *  <div class="hero-list">
 *   ...
 *  </div>
 * </ng-template>
 *
 * <ng-template #loading>
 *  <div>Loading...</div>
 * </ng-template>
 * ```
 *
 * The presence of the implicit template object has implications for the nesting of
 * structural directives. For more on this subject, see
 * [Structural Directives](guide/structural-directives#one-per-element).
 *
 * @ngModule CommonModule
 * @publicApi
 */
let NgIf = /*#__PURE__*/(() => {
  var _class12;
  class NgIf {
    constructor(_viewContainer, templateRef) {
      this._viewContainer = _viewContainer;
      this._context = new NgIfContext();
      this._thenTemplateRef = null;
      this._elseTemplateRef = null;
      this._thenViewRef = null;
      this._elseViewRef = null;
      this._thenTemplateRef = templateRef;
    }
    /**
     * The Boolean expression to evaluate as the condition for showing a template.
     */
    set ngIf(condition) {
      this._context.$implicit = this._context.ngIf = condition;
      this._updateView();
    }
    /**
     * A template to show if the condition expression evaluates to true.
     */
    set ngIfThen(templateRef) {
      assertTemplate('ngIfThen', templateRef);
      this._thenTemplateRef = templateRef;
      this._thenViewRef = null; // clear previous view if any.
      this._updateView();
    }
    /**
     * A template to show if the condition expression evaluates to false.
     */
    set ngIfElse(templateRef) {
      assertTemplate('ngIfElse', templateRef);
      this._elseTemplateRef = templateRef;
      this._elseViewRef = null; // clear previous view if any.
      this._updateView();
    }
    _updateView() {
      if (this._context.$implicit) {
        if (!this._thenViewRef) {
          this._viewContainer.clear();
          this._elseViewRef = null;
          if (this._thenTemplateRef) {
            this._thenViewRef = this._viewContainer.createEmbeddedView(this._thenTemplateRef, this._context);
          }
        }
      } else {
        if (!this._elseViewRef) {
          this._viewContainer.clear();
          this._thenViewRef = null;
          if (this._elseTemplateRef) {
            this._elseViewRef = this._viewContainer.createEmbeddedView(this._elseTemplateRef, this._context);
          }
        }
      }
    }
    /**
     * Asserts the correct type of the context for the template that `NgIf` will render.
     *
     * The presence of this method is a signal to the Ivy template type-check compiler that the
     * `NgIf` structural directive renders its template with a specific context type.
     */
    static ngTemplateContextGuard(dir, ctx) {
      return true;
    }
  }
  _class12 = NgIf;
  _class12.ɵfac = function _class12_Factory(t) {
    return new (t || _class12)(ɵɵdirectiveInject(ViewContainerRef), ɵɵdirectiveInject(TemplateRef));
  };
  _class12.ɵdir = /* @__PURE__ */ɵɵdefineDirective({
    type: _class12,
    selectors: [["", "ngIf", ""]],
    inputs: {
      ngIf: "ngIf",
      ngIfThen: "ngIfThen",
      ngIfElse: "ngIfElse"
    },
    standalone: true
  });
  return NgIf;
})();
/**
 * @publicApi
 */
class NgIfContext {
  constructor() {
    this.$implicit = null;
    this.ngIf = null;
  }
}
function assertTemplate(property, templateRef) {
  const isTemplateRefOrNull = !!(!templateRef || templateRef.createEmbeddedView);
  if (!isTemplateRefOrNull) {
    throw new Error(`${property} must be a TemplateRef, but received '${stringify(templateRef)}'.`);
  }
}
const PLATFORM_BROWSER_ID = 'browser';
const PLATFORM_SERVER_ID = 'server';
/**
 * Returns whether a platform id represents a server platform.
 * @publicApi
 */
function isPlatformServer(platformId) {
  return platformId === PLATFORM_SERVER_ID;
}

/**
 * Defines a scroll position manager. Implemented by `BrowserViewportScroller`.
 *
 * @publicApi
 */
let ViewportScroller = /*#__PURE__*/(() => {
  var _class34;
  class ViewportScroller {}
  _class34 = ViewportScroller;
  // De-sugared tree-shakable injection
  // See #23917
  /** @nocollapse */
  _class34.ɵprov = ɵɵdefineInjectable({
    token: _class34,
    providedIn: 'root',
    factory: () => new BrowserViewportScroller(ɵɵinject(DOCUMENT), window)
  });
  return ViewportScroller;
})();
/**
 * Manages the scroll position for a browser window.
 */
class BrowserViewportScroller {
  constructor(document, window) {
    this.document = document;
    this.window = window;
    this.offset = () => [0, 0];
  }
  /**
   * Configures the top offset used when scrolling to an anchor.
   * @param offset A position in screen coordinates (a tuple with x and y values)
   * or a function that returns the top offset position.
   *
   */
  setOffset(offset) {
    if (Array.isArray(offset)) {
      this.offset = () => offset;
    } else {
      this.offset = offset;
    }
  }
  /**
   * Retrieves the current scroll position.
   * @returns The position in screen coordinates.
   */
  getScrollPosition() {
    if (this.supportsScrolling()) {
      return [this.window.pageXOffset, this.window.pageYOffset];
    } else {
      return [0, 0];
    }
  }
  /**
   * Sets the scroll position.
   * @param position The new position in screen coordinates.
   */
  scrollToPosition(position) {
    if (this.supportsScrolling()) {
      this.window.scrollTo(position[0], position[1]);
    }
  }
  /**
   * Scrolls to an element and attempts to focus the element.
   *
   * Note that the function name here is misleading in that the target string may be an ID for a
   * non-anchor element.
   *
   * @param target The ID of an element or name of the anchor.
   *
   * @see https://html.spec.whatwg.org/#the-indicated-part-of-the-document
   * @see https://html.spec.whatwg.org/#scroll-to-fragid
   */
  scrollToAnchor(target) {
    if (!this.supportsScrolling()) {
      return;
    }
    const elSelected = findAnchorFromDocument(this.document, target);
    if (elSelected) {
      this.scrollToElement(elSelected);
      // After scrolling to the element, the spec dictates that we follow the focus steps for the
      // target. Rather than following the robust steps, simply attempt focus.
      //
      // @see https://html.spec.whatwg.org/#get-the-focusable-area
      // @see https://developer.mozilla.org/en-US/docs/Web/API/HTMLOrForeignElement/focus
      // @see https://html.spec.whatwg.org/#focusable-area
      elSelected.focus();
    }
  }
  /**
   * Disables automatic scroll restoration provided by the browser.
   */
  setHistoryScrollRestoration(scrollRestoration) {
    if (this.supportsScrolling()) {
      this.window.history.scrollRestoration = scrollRestoration;
    }
  }
  /**
   * Scrolls to an element using the native offset and the specified offset set on this scroller.
   *
   * The offset can be used when we know that there is a floating header and scrolling naively to an
   * element (ex: `scrollIntoView`) leaves the element hidden behind the floating header.
   */
  scrollToElement(el) {
    const rect = el.getBoundingClientRect();
    const left = rect.left + this.window.pageXOffset;
    const top = rect.top + this.window.pageYOffset;
    const offset = this.offset();
    this.window.scrollTo(left - offset[0], top - offset[1]);
  }
  supportsScrolling() {
    try {
      return !!this.window && !!this.window.scrollTo && 'pageXOffset' in this.window;
    } catch {
      return false;
    }
  }
}
function findAnchorFromDocument(document, target) {
  const documentResult = document.getElementById(target) || document.getElementsByName(target)[0];
  if (documentResult) {
    return documentResult;
  }
  // `getElementById` and `getElementsByName` won't pierce through the shadow DOM so we
  // have to traverse the DOM manually and do the lookup through the shadow roots.
  if (typeof document.createTreeWalker === 'function' && document.body && typeof document.body.attachShadow === 'function') {
    const treeWalker = document.createTreeWalker(document.body, NodeFilter.SHOW_ELEMENT);
    let currentNode = treeWalker.currentNode;
    while (currentNode) {
      const shadowRoot = currentNode.shadowRoot;
      if (shadowRoot) {
        // Note that `ShadowRoot` doesn't support `getElementsByName`
        // so we have to fall back to `querySelector`.
        const result = shadowRoot.getElementById(target) || shadowRoot.querySelector(`[name="${target}"]`);
        if (result) {
          return result;
        }
      }
      currentNode = treeWalker.nextNode();
    }
  }
  return null;
}
/**
 * Provides an empty implementation of the viewport scroller.
 */
class NullViewportScroller {
  /**
   * Empty implementation
   */
  setOffset(offset) {}
  /**
   * Empty implementation
   */
  getScrollPosition() {
    return [0, 0];
  }
  /**
   * Empty implementation
   */
  scrollToPosition(position) {}
  /**
   * Empty implementation
   */
  scrollToAnchor(anchor) {}
  /**
   * Empty implementation
   */
  setHistoryScrollRestoration(scrollRestoration) {}
}

/**
 * A wrapper around the `XMLHttpRequest` constructor.
 *
 * @publicApi
 */
class XhrFactory {}
// Checks whether a URL is absolute (i.e. starts with `http://` or `https://`).
function isAbsoluteUrl(src) {
  return /^https?:\/\//.test(src);
}
function isValidPath(path) {
  const isString = typeof path === 'string';
  if (!isString || path.trim() === '') {
    return false;
  }
  // Calling new URL() will throw if the path string is malformed
  try {
    const url = new URL(path);
    return true;
  } catch {
    return false;
  }
}
function normalizePath(path) {
  return path.endsWith('/') ? path.slice(0, -1) : path;
}
function normalizeSrc(src) {
  return src.startsWith('/') ? src.slice(1) : src;
}

/**
 * Noop image loader that does no transformation to the original src and just returns it as is.
 * This loader is used as a default one if more specific logic is not provided in an app config.
 *
 * @see {@link ImageLoader}
 * @see {@link NgOptimizedImage}
 */
const noopImageLoader = config => config.src;
/**
 * Injection token that configures the image loader function.
 *
 * @see {@link ImageLoader}
 * @see {@link NgOptimizedImage}
 * @publicApi
 */
const IMAGE_LOADER = /*#__PURE__*/new InjectionToken('ImageLoader', {
  providedIn: 'root',
  factory: () => noopImageLoader
});
/**
 * Internal helper function that makes it easier to introduce custom image loaders for the
 * `NgOptimizedImage` directive. It is enough to specify a URL builder function to obtain full DI
 * configuration for a given loader: a DI token corresponding to the actual loader function, plus DI
 * tokens managing preconnect check functionality.
 * @param buildUrlFn a function returning a full URL based on loader's configuration
 * @param exampleUrls example of full URLs for a given loader (used in error messages)
 * @returns a set of DI providers corresponding to the configured image loader
 */
function createImageLoader(buildUrlFn, exampleUrls) {
  return function provideImageLoader(path) {
    if (!isValidPath(path)) {
      throwInvalidPathError(path, exampleUrls || []);
    }
    // The trailing / is stripped (if provided) to make URL construction (concatenation) easier in
    // the individual loader functions.
    path = normalizePath(path);
    const loaderFn = config => {
      if (isAbsoluteUrl(config.src)) {
        // Image loader functions expect an image file name (e.g. `my-image.png`)
        // or a relative path + a file name (e.g. `/a/b/c/my-image.png`) as an input,
        // so the final absolute URL can be constructed.
        // When an absolute URL is provided instead - the loader can not
        // build a final URL, thus the error is thrown to indicate that.
        throwUnexpectedAbsoluteUrlError(path, config.src);
      }
      return buildUrlFn(path, {
        ...config,
        src: normalizeSrc(config.src)
      });
    };
    const providers = [{
      provide: IMAGE_LOADER,
      useValue: loaderFn
    }];
    return providers;
  };
}
function throwInvalidPathError(path, exampleUrls) {
  throw new RuntimeError(2959 /* RuntimeErrorCode.INVALID_LOADER_ARGUMENTS */, ngDevMode && `Image loader has detected an invalid path (\`${path}\`). ` + `To fix this, supply a path using one of the following formats: ${exampleUrls.join(' or ')}`);
}
function throwUnexpectedAbsoluteUrlError(path, url) {
  throw new RuntimeError(2959 /* RuntimeErrorCode.INVALID_LOADER_ARGUMENTS */, ngDevMode && `Image loader has detected a \`<img>\` tag with an invalid \`ngSrc\` attribute: ${url}. ` + `This image loader expects \`ngSrc\` to be a relative URL - ` + `however the provided value is an absolute URL. ` + `To fix this, provide \`ngSrc\` as a path relative to the base URL ` + `configured for this loader (\`${path}\`).`);
}

/**
 * Function that generates an ImageLoader for [Cloudflare Image
 * Resizing](https://developers.cloudflare.com/images/image-resizing/) and turns it into an Angular
 * provider. Note: Cloudflare has multiple image products - this provider is specifically for
 * Cloudflare Image Resizing; it will not work with Cloudflare Images or Cloudflare Polish.
 *
 * @param path Your domain name, e.g. https://mysite.com
 * @returns Provider that provides an ImageLoader function
 *
 * @publicApi
 */
/*#__PURE__*/createImageLoader(createCloudflareUrl, ngDevMode ? ['https://<ZONE>/cdn-cgi/image/<OPTIONS>/<SOURCE-IMAGE>'] : undefined);
function createCloudflareUrl(path, config) {
  let params = `format=auto`;
  if (config.width) {
    params += `,width=${config.width}`;
  }
  // Cloudflare image URLs format:
  // https://developers.cloudflare.com/images/image-resizing/url-format/
  return `${path}/cdn-cgi/image/${params}/${config.src}`;
}
/**
 * Function that generates an ImageLoader for Cloudinary and turns it into an Angular provider.
 *
 * @param path Base URL of your Cloudinary images
 * This URL should match one of the following formats:
 * https://res.cloudinary.com/mysite
 * https://mysite.cloudinary.com
 * https://subdomain.mysite.com
 * @returns Set of providers to configure the Cloudinary loader.
 *
 * @publicApi
 */
/*#__PURE__*/createImageLoader(createCloudinaryUrl, ngDevMode ? ['https://res.cloudinary.com/mysite', 'https://mysite.cloudinary.com', 'https://subdomain.mysite.com'] : undefined);
function createCloudinaryUrl(path, config) {
  // Cloudinary image URLformat:
  // https://cloudinary.com/documentation/image_transformations#transformation_url_structure
  // Example of a Cloudinary image URL:
  // https://res.cloudinary.com/mysite/image/upload/c_scale,f_auto,q_auto,w_600/marketing/tile-topics-m.png
  let params = `f_auto,q_auto`; // sets image format and quality to "auto"
  if (config.width) {
    params += `,w_${config.width}`;
  }
  return `${path}/image/upload/${params}/${config.src}`;
}
/**
 * Function that generates an ImageLoader for ImageKit and turns it into an Angular provider.
 *
 * @param path Base URL of your ImageKit images
 * This URL should match one of the following formats:
 * https://ik.imagekit.io/myaccount
 * https://subdomain.mysite.com
 * @returns Set of providers to configure the ImageKit loader.
 *
 * @publicApi
 */
/*#__PURE__*/createImageLoader(createImagekitUrl, ngDevMode ? ['https://ik.imagekit.io/mysite', 'https://subdomain.mysite.com'] : undefined);
function createImagekitUrl(path, config) {
  // Example of an ImageKit image URL:
  // https://ik.imagekit.io/demo/tr:w-300,h-300/medium_cafe_B1iTdD0C.jpg
  const {
    src,
    width
  } = config;
  let urlSegments;
  if (width) {
    const params = `tr:w-${width}`;
    urlSegments = [path, params, src];
  } else {
    urlSegments = [path, src];
  }
  return urlSegments.join('/');
}
/**
 * Function that generates an ImageLoader for Imgix and turns it into an Angular provider.
 *
 * @param path path to the desired Imgix origin,
 * e.g. https://somepath.imgix.net or https://images.mysite.com
 * @returns Set of providers to configure the Imgix loader.
 *
 * @publicApi
 */
/*#__PURE__*/createImageLoader(createImgixUrl, ngDevMode ? ['https://somepath.imgix.net/'] : undefined);
function createImgixUrl(path, config) {
  const url = new URL(`${path}/${config.src}`);
  // This setting ensures the smallest allowable format is set.
  url.searchParams.set('auto', 'format');
  if (config.width) {
    url.searchParams.set('w', config.width.toString());
  }
  return url.href;
}

function HelloComponent_p_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "p");
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵtextInterpolate(ctx_r0.helpText);
  }
}
let HelloComponent = /*#__PURE__*/(() => {
  class HelloComponent {
    constructor() {
      this.helpText = 'help';
      this.show = false;
    }
    toggle() {
      this.show = !this.show;
    }
  }
  HelloComponent.ɵfac = function HelloComponent_Factory(t) {
    return new (t || HelloComponent)();
  };
  HelloComponent.ɵcmp = /*@__PURE__*/ɵɵdefineComponent({
    type: HelloComponent,
    selectors: [["app-hello"]],
    inputs: {
      helpText: "helpText"
    },
    standalone: true,
    features: [ɵɵStandaloneFeature],
    decls: 5,
    vars: 1,
    consts: [[4, "ngIf"], [3, "click"]],
    template: function HelloComponent_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵelementStart(0, "p");
        ɵɵtext(1, "Hello from Angular!!");
        ɵɵelementEnd();
        ɵɵtemplate(2, HelloComponent_p_2_Template, 2, 1, "p", 0);
        ɵɵelementStart(3, "button", 1);
        ɵɵlistener("click", function HelloComponent_Template_button_click_3_listener() {
          return ctx.toggle();
        });
        ɵɵtext(4, "Toggle");
        ɵɵelementEnd();
      }
      if (rf & 2) {
        ɵɵadvance(2);
        ɵɵproperty("ngIf", ctx.show);
      }
    },
    dependencies: [NgIf],
    encapsulation: 2
  });
  return HelloComponent;
})();
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

const $$Astro = createAstro("https://maria-louisa.com/");
const $$Housing = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Housing;
  const pageTitle = "Housing";
  const seoTitle = "Maria's Angular Project";
  const seoDescription = "My first Angular project";
  return renderTemplate`${renderComponent$1($$result, "BaseLayout", $$BaseLayout, { "pageTitle": pageTitle, "seoTitle": seoTitle, "seoDescription": seoDescription }, { "default": ($$result2) => renderTemplate`
  ${renderComponent$1($$result2, "Subtitle", $$Subtitle, { "subTitle": "coming soon" })}

  ${renderComponent$1($$result2, "HelloComponent", HelloComponent, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "@components/hello.component", "client:component-export": "HelloComponent" })}
` })}`;
}, "C:/Users/maria/Documents/GitHub/MyPortfolio/maria/src/pages/housing.astro", void 0);

const $$file = "C:/Users/maria/Documents/GitHub/MyPortfolio/maria/src/pages/housing.astro";
const $$url = "/housing";

const housing = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Housing,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { APP_ID as A, Injector as B, CSP_NONCE as C, DOCUMENT as D, ErrorHandler as E, PLATFORM_SERVER_ID as F, PlatformLocation as G, ALLOW_MULTIPLE_PLATFORMS as H, InjectionToken as I, reflectComponentType as J, housing as K, NgZone as N, Optional as O, PLATFORM_ID as P, RendererFactory2 as R, SSR_CONTENT_INTEGRITY_MARKER as S, Testability as T, ViewEncapsulation$1 as V, XhrFactory as X, PLATFORM_BROWSER_ID as a, PLATFORM_INITIALIZER as b, INJECTOR_SCOPE as c, ɵɵinject as d, RuntimeError as e, isPlatformServer as f, RendererStyleFlags2 as g, getDOM as h, internalCreateApplication as i, DomAdapter as j, setDocument as k, ANIMATION_MODULE_TYPE as l, ApplicationRef as m, IS_HYDRATION_DOM_REUSE_ENABLED as n, annotateForHydration as o, parseCookieValue as p, createPlatformFactory as q, makeEnvironmentProviders as r, setRootDomAdapter as s, ENABLED_SSR_FEATURES as t, Renderer2 as u, TESTABILITY as v, ViewportScroller as w, NullViewportScroller as x, platformCore as y, TransferState as z, ɵɵdefineInjectable as ɵ };
