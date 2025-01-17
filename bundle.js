import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { client } from "@/lib/api";

//#region rolldown:runtime
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function() {
	return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __copyProps = (to, from, except, desc) => {
	if (from && typeof from === "object" || typeof from === "function") for (var keys = __getOwnPropNames(from), i$1 = 0, n = keys.length, key; i$1 < n; i$1++) {
		key = keys[i$1];
		if (!__hasOwnProp.call(to, key) && key !== except) __defProp(to, key, {
			get: ((k) => from[k]).bind(null, key),
			enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
		});
	}
	return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", {
	value: mod,
	enumerable: true
}) : target, mod));

//#endregion
//#region node_modules/react/cjs/react.development.js
var require_react_development = __commonJS({ "node_modules/react/cjs/react.development.js"(exports, module) {
	(function() {
		"use strict";
		if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== "undefined" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart === "function") __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
		var ReactVersion = "18.3.1";
		var REACT_ELEMENT_TYPE = Symbol.for("react.element");
		var REACT_PORTAL_TYPE = Symbol.for("react.portal");
		var REACT_FRAGMENT_TYPE = Symbol.for("react.fragment");
		var REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode");
		var REACT_PROFILER_TYPE = Symbol.for("react.profiler");
		var REACT_PROVIDER_TYPE = Symbol.for("react.provider");
		var REACT_CONTEXT_TYPE = Symbol.for("react.context");
		var REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref");
		var REACT_SUSPENSE_TYPE = Symbol.for("react.suspense");
		var REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list");
		var REACT_MEMO_TYPE = Symbol.for("react.memo");
		var REACT_LAZY_TYPE = Symbol.for("react.lazy");
		var REACT_OFFSCREEN_TYPE = Symbol.for("react.offscreen");
		var MAYBE_ITERATOR_SYMBOL = Symbol.iterator;
		var FAUX_ITERATOR_SYMBOL = "@@iterator";
		function getIteratorFn(maybeIterable) {
			if (maybeIterable === null || typeof maybeIterable !== "object") return null;
			var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];
			if (typeof maybeIterator === "function") return maybeIterator;
			return null;
		}
		/**
		* Keeps track of the current dispatcher.
		*/
		var ReactCurrentDispatcher = { current: null };
		/**
		* Keeps track of the current batch's configuration such as how long an update
		* should suspend for if it needs to.
		*/
		var ReactCurrentBatchConfig = { transition: null };
		var ReactCurrentActQueue = {
			current: null,
			isBatchingLegacy: false,
			didScheduleLegacyUpdate: false
		};
		/**
		* Keeps track of the current owner.
		*
		* The current owner is the component who should own any components that are
		* currently being constructed.
		*/
		var ReactCurrentOwner = { current: null };
		var ReactDebugCurrentFrame = {};
		var currentExtraStackFrame = null;
		function setExtraStackFrame(stack) {
			currentExtraStackFrame = stack;
		}
		{
			ReactDebugCurrentFrame.setExtraStackFrame = function(stack) {
				currentExtraStackFrame = stack;
			};
			ReactDebugCurrentFrame.getCurrentStack = null;
			ReactDebugCurrentFrame.getStackAddendum = function() {
				var stack = "";
				if (currentExtraStackFrame) stack += currentExtraStackFrame;
				var impl = ReactDebugCurrentFrame.getCurrentStack;
				if (impl) stack += impl() || "";
				return stack;
			};
		}
		var enableScopeAPI = false;
		var enableCacheElement = false;
		var enableTransitionTracing = false;
		var enableLegacyHidden = false;
		var enableDebugTracing = false;
		var ReactSharedInternals = {
			ReactCurrentDispatcher,
			ReactCurrentBatchConfig,
			ReactCurrentOwner
		};
		{
			ReactSharedInternals.ReactDebugCurrentFrame = ReactDebugCurrentFrame;
			ReactSharedInternals.ReactCurrentActQueue = ReactCurrentActQueue;
		}
		function warn(format) {
			{
				for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) args[_key - 1] = arguments[_key];
				printWarning("warn", format, args);
			}
		}
		function error(format) {
			{
				for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) args[_key2 - 1] = arguments[_key2];
				printWarning("error", format, args);
			}
		}
		function printWarning(level, format, args) {
			{
				var ReactDebugCurrentFrame$2 = ReactSharedInternals.ReactDebugCurrentFrame;
				var stack = ReactDebugCurrentFrame$2.getStackAddendum();
				if (stack !== "") {
					format += "%s";
					args = args.concat([stack]);
				}
				var argsWithFormat = args.map(function(item) {
					return String(item);
				});
				argsWithFormat.unshift("Warning: " + format);
				Function.prototype.apply.call(console[level], console, argsWithFormat);
			}
		}
		var didWarnStateUpdateForUnmountedComponent = {};
		function warnNoop(publicInstance, callerName) {
			{
				var _constructor = publicInstance.constructor;
				var componentName = _constructor && (_constructor.displayName || _constructor.name) || "ReactClass";
				var warningKey = componentName + "." + callerName;
				if (didWarnStateUpdateForUnmountedComponent[warningKey]) return;
				error("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.", callerName, componentName);
				didWarnStateUpdateForUnmountedComponent[warningKey] = true;
			}
		}
		/**
		* This is the abstract API for an update queue.
		*/
		var ReactNoopUpdateQueue = {
			isMounted: function(publicInstance) {
				return false;
			},
			enqueueForceUpdate: function(publicInstance, callback, callerName) {
				warnNoop(publicInstance, "forceUpdate");
			},
			enqueueReplaceState: function(publicInstance, completeState, callback, callerName) {
				warnNoop(publicInstance, "replaceState");
			},
			enqueueSetState: function(publicInstance, partialState, callback, callerName) {
				warnNoop(publicInstance, "setState");
			}
		};
		var assign = Object.assign;
		var emptyObject = {};
		Object.freeze(emptyObject);
		/**
		* Base class helpers for the updating state of a component.
		*/
		function Component(props, context, updater) {
			this.props = props;
			this.context = context;
			this.refs = emptyObject;
			this.updater = updater || ReactNoopUpdateQueue;
		}
		Component.prototype.isReactComponent = {};
		/**
		* Sets a subset of the state. Always use this to mutate
		* state. You should treat `this.state` as immutable.
		*
		* There is no guarantee that `this.state` will be immediately updated, so
		* accessing `this.state` after calling this method may return the old value.
		*
		* There is no guarantee that calls to `setState` will run synchronously,
		* as they may eventually be batched together.  You can provide an optional
		* callback that will be executed when the call to setState is actually
		* completed.
		*
		* When a function is provided to setState, it will be called at some point in
		* the future (not synchronously). It will be called with the up to date
		* component arguments (state, props, context). These values can be different
		* from this.* because your function may be called after receiveProps but before
		* shouldComponentUpdate, and this new state, props, and context will not yet be
		* assigned to this.
		*
		* @param {object|function} partialState Next partial state or function to
		*        produce next partial state to be merged with current state.
		* @param {?function} callback Called after state is updated.
		* @final
		* @protected
		*/
		Component.prototype.setState = function(partialState, callback) {
			if (typeof partialState !== "object" && typeof partialState !== "function" && partialState != null) throw new Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
			this.updater.enqueueSetState(this, partialState, callback, "setState");
		};
		/**
		* Forces an update. This should only be invoked when it is known with
		* certainty that we are **not** in a DOM transaction.
		*
		* You may want to call this when you know that some deeper aspect of the
		* component's state has changed but `setState` was not called.
		*
		* This will not invoke `shouldComponentUpdate`, but it will invoke
		* `componentWillUpdate` and `componentDidUpdate`.
		*
		* @param {?function} callback Called after update is complete.
		* @final
		* @protected
		*/
		Component.prototype.forceUpdate = function(callback) {
			this.updater.enqueueForceUpdate(this, callback, "forceUpdate");
		};
		/**
		* Deprecated APIs. These APIs used to exist on classic React classes but since
		* we would like to deprecate them, we're not going to move them over to this
		* modern base class. Instead, we define a getter that warns if it's accessed.
		*/
		{
			var deprecatedAPIs = {
				isMounted: ["isMounted", "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],
				replaceState: ["replaceState", "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]
			};
			var defineDeprecationWarning = function(methodName, info) {
				Object.defineProperty(Component.prototype, methodName, { get: function() {
					warn("%s(...) is deprecated in plain JavaScript React classes. %s", info[0], info[1]);
					return undefined;
				} });
			};
			for (var fnName in deprecatedAPIs) if (deprecatedAPIs.hasOwnProperty(fnName)) defineDeprecationWarning(fnName, deprecatedAPIs[fnName]);
		}
		function ComponentDummy() {}
		ComponentDummy.prototype = Component.prototype;
		/**
		* Convenience component with default shallow equality check for sCU.
		*/
		function PureComponent(props, context, updater) {
			this.props = props;
			this.context = context;
			this.refs = emptyObject;
			this.updater = updater || ReactNoopUpdateQueue;
		}
		var pureComponentPrototype = PureComponent.prototype = new ComponentDummy();
		pureComponentPrototype.constructor = PureComponent;
		assign(pureComponentPrototype, Component.prototype);
		pureComponentPrototype.isPureReactComponent = true;
		function createRef() {
			var refObject = { current: null };
			Object.seal(refObject);
			return refObject;
		}
		var isArrayImpl = Array.isArray;
		function isArray(a) {
			return isArrayImpl(a);
		}
		function typeName(value) {
			{
				var hasToStringTag = typeof Symbol === "function" && Symbol.toStringTag;
				var type = hasToStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
				return type;
			}
		}
		function willCoercionThrow(value) {
			try {
				testStringCoercion(value);
				return false;
			} catch (e) {
				return true;
			}
		}
		function testStringCoercion(value) {
			return "" + value;
		}
		function checkKeyStringCoercion(value) {
			if (willCoercionThrow(value)) {
				error("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", typeName(value));
				return testStringCoercion(value);
			}
		}
		function getWrappedName(outerType, innerType, wrapperName) {
			var displayName = outerType.displayName;
			if (displayName) return displayName;
			var functionName = innerType.displayName || innerType.name || "";
			return functionName !== "" ? wrapperName + "(" + functionName + ")" : wrapperName;
		}
		function getContextName(type) {
			return type.displayName || "Context";
		}
		function getComponentNameFromType(type) {
			if (type == null) return null;
			if (typeof type.tag === "number") error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue.");
			if (typeof type === "function") return type.displayName || type.name || null;
			if (typeof type === "string") return type;
			switch (type) {
				case REACT_FRAGMENT_TYPE: return "Fragment";
				case REACT_PORTAL_TYPE: return "Portal";
				case REACT_PROFILER_TYPE: return "Profiler";
				case REACT_STRICT_MODE_TYPE: return "StrictMode";
				case REACT_SUSPENSE_TYPE: return "Suspense";
				case REACT_SUSPENSE_LIST_TYPE: return "SuspenseList";
			}
			if (typeof type === "object") switch (type.$$typeof) {
				case REACT_CONTEXT_TYPE:
					var context = type;
					return getContextName(context) + ".Consumer";
				case REACT_PROVIDER_TYPE:
					var provider = type;
					return getContextName(provider._context) + ".Provider";
				case REACT_FORWARD_REF_TYPE: return getWrappedName(type, type.render, "ForwardRef");
				case REACT_MEMO_TYPE:
					var outerName = type.displayName || null;
					if (outerName !== null) return outerName;
					return getComponentNameFromType(type.type) || "Memo";
				case REACT_LAZY_TYPE: {
					var lazyComponent = type;
					var payload = lazyComponent._payload;
					var init = lazyComponent._init;
					try {
						return getComponentNameFromType(init(payload));
					} catch (x) {
						return null;
					}
				}
			}
			return null;
		}
		var hasOwnProperty = Object.prototype.hasOwnProperty;
		var RESERVED_PROPS = {
			key: true,
			ref: true,
			__self: true,
			__source: true
		};
		var specialPropKeyWarningShown, specialPropRefWarningShown, didWarnAboutStringRefs;
		didWarnAboutStringRefs = {};
		function hasValidRef(config) {
			if (hasOwnProperty.call(config, "ref")) {
				var getter = Object.getOwnPropertyDescriptor(config, "ref").get;
				if (getter && getter.isReactWarning) return false;
			}
			return config.ref !== undefined;
		}
		function hasValidKey(config) {
			if (hasOwnProperty.call(config, "key")) {
				var getter = Object.getOwnPropertyDescriptor(config, "key").get;
				if (getter && getter.isReactWarning) return false;
			}
			return config.key !== undefined;
		}
		function defineKeyPropWarningGetter(props, displayName) {
			var warnAboutAccessingKey = function() {
				if (!specialPropKeyWarningShown) {
					specialPropKeyWarningShown = true;
					error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", displayName);
				}
			};
			warnAboutAccessingKey.isReactWarning = true;
			Object.defineProperty(props, "key", {
				get: warnAboutAccessingKey,
				configurable: true
			});
		}
		function defineRefPropWarningGetter(props, displayName) {
			var warnAboutAccessingRef = function() {
				if (!specialPropRefWarningShown) {
					specialPropRefWarningShown = true;
					error("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", displayName);
				}
			};
			warnAboutAccessingRef.isReactWarning = true;
			Object.defineProperty(props, "ref", {
				get: warnAboutAccessingRef,
				configurable: true
			});
		}
		function warnIfStringRefCannotBeAutoConverted(config) {
			if (typeof config.ref === "string" && ReactCurrentOwner.current && config.__self && ReactCurrentOwner.current.stateNode !== config.__self) {
				var componentName = getComponentNameFromType(ReactCurrentOwner.current.type);
				if (!didWarnAboutStringRefs[componentName]) {
					error("Component \"%s\" contains the string ref \"%s\". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref", componentName, config.ref);
					didWarnAboutStringRefs[componentName] = true;
				}
			}
		}
		/**
		* Factory method to create a new React element. This no longer adheres to
		* the class pattern, so do not use new to call it. Also, instanceof check
		* will not work. Instead test $$typeof field against Symbol.for('react.element') to check
		* if something is a React Element.
		*
		* @param {*} type
		* @param {*} props
		* @param {*} key
		* @param {string|object} ref
		* @param {*} owner
		* @param {*} self A *temporary* helper to detect places where `this` is
		* different from the `owner` when React.createElement is called, so that we
		* can warn. We want to get rid of owner and replace string `ref`s with arrow
		* functions, and as long as `this` and owner are the same, there will be no
		* change in behavior.
		* @param {*} source An annotation object (added by a transpiler or otherwise)
		* indicating filename, line number, and/or other information.
		* @internal
		*/
		var ReactElement = function(type, key, ref, self, source, owner, props) {
			var element = {
				$$typeof: REACT_ELEMENT_TYPE,
				type,
				key,
				ref,
				props,
				_owner: owner
			};
			{
				element._store = {};
				Object.defineProperty(element._store, "validated", {
					configurable: false,
					enumerable: false,
					writable: true,
					value: false
				});
				Object.defineProperty(element, "_self", {
					configurable: false,
					enumerable: false,
					writable: false,
					value: self
				});
				Object.defineProperty(element, "_source", {
					configurable: false,
					enumerable: false,
					writable: false,
					value: source
				});
				if (Object.freeze) {
					Object.freeze(element.props);
					Object.freeze(element);
				}
			}
			return element;
		};
		/**
		* Create and return a new ReactElement of the given type.
		* See https://reactjs.org/docs/react-api.html#createelement
		*/
		function createElement(type, config, children) {
			var propName;
			var props = {};
			var key = null;
			var ref = null;
			var self = null;
			var source = null;
			if (config != null) {
				if (hasValidRef(config)) {
					ref = config.ref;
					warnIfStringRefCannotBeAutoConverted(config);
				}
				if (hasValidKey(config)) {
					checkKeyStringCoercion(config.key);
					key = "" + config.key;
				}
				self = config.__self === undefined ? null : config.__self;
				source = config.__source === undefined ? null : config.__source;
				for (propName in config) if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) props[propName] = config[propName];
			}
			var childrenLength = arguments.length - 2;
			if (childrenLength === 1) props.children = children;
else if (childrenLength > 1) {
				var childArray = Array(childrenLength);
				for (var i$1 = 0; i$1 < childrenLength; i$1++) childArray[i$1] = arguments[i$1 + 2];
				if (Object.freeze) Object.freeze(childArray);
				props.children = childArray;
			}
			if (type && type.defaultProps) {
				var defaultProps = type.defaultProps;
				for (propName in defaultProps) if (props[propName] === undefined) props[propName] = defaultProps[propName];
			}
			if (key || ref) {
				var displayName = typeof type === "function" ? type.displayName || type.name || "Unknown" : type;
				if (key) defineKeyPropWarningGetter(props, displayName);
				if (ref) defineRefPropWarningGetter(props, displayName);
			}
			return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
		}
		function cloneAndReplaceKey(oldElement, newKey) {
			var newElement = ReactElement(oldElement.type, newKey, oldElement.ref, oldElement._self, oldElement._source, oldElement._owner, oldElement.props);
			return newElement;
		}
		/**
		* Clone and return a new ReactElement using element as the starting point.
		* See https://reactjs.org/docs/react-api.html#cloneelement
		*/
		function cloneElement(element, config, children) {
			if (element === null || element === undefined) throw new Error("React.cloneElement(...): The argument must be a React element, but you passed " + element + ".");
			var propName;
			var props = assign({}, element.props);
			var key = element.key;
			var ref = element.ref;
			var self = element._self;
			var source = element._source;
			var owner = element._owner;
			if (config != null) {
				if (hasValidRef(config)) {
					ref = config.ref;
					owner = ReactCurrentOwner.current;
				}
				if (hasValidKey(config)) {
					checkKeyStringCoercion(config.key);
					key = "" + config.key;
				}
				var defaultProps;
				if (element.type && element.type.defaultProps) defaultProps = element.type.defaultProps;
				for (propName in config) if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) if (config[propName] === undefined && defaultProps !== undefined) props[propName] = defaultProps[propName];
else props[propName] = config[propName];
			}
			var childrenLength = arguments.length - 2;
			if (childrenLength === 1) props.children = children;
else if (childrenLength > 1) {
				var childArray = Array(childrenLength);
				for (var i$1 = 0; i$1 < childrenLength; i$1++) childArray[i$1] = arguments[i$1 + 2];
				props.children = childArray;
			}
			return ReactElement(element.type, key, ref, self, source, owner, props);
		}
		/**
		* Verifies the object is a ReactElement.
		* See https://reactjs.org/docs/react-api.html#isvalidelement
		* @param {?object} object
		* @return {boolean} True if `object` is a ReactElement.
		* @final
		*/
		function isValidElement(object) {
			return typeof object === "object" && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
		}
		var SEPARATOR = ".";
		var SUBSEPARATOR = ":";
		/**
		* Escape and wrap key so it is safe to use as a reactid
		*
		* @param {string} key to be escaped.
		* @return {string} the escaped key.
		*/
		function escape(key) {
			var escapeRegex = /[=:]/g;
			var escaperLookup = {
				"=": "=0",
				":": "=2"
			};
			var escapedString = key.replace(escapeRegex, function(match) {
				return escaperLookup[match];
			});
			return "$" + escapedString;
		}
		/**
		* TODO: Test that a single child and an array with one item have the same key
		* pattern.
		*/
		var didWarnAboutMaps = false;
		var userProvidedKeyEscapeRegex = /\/+/g;
		function escapeUserProvidedKey(text) {
			return text.replace(userProvidedKeyEscapeRegex, "$&/");
		}
		/**
		* Generate a key string that identifies a element within a set.
		*
		* @param {*} element A element that could contain a manual key.
		* @param {number} index Index that is used if a manual key is not provided.
		* @return {string}
		*/
		function getElementKey(element, index) {
			if (typeof element === "object" && element !== null && element.key != null) {
				checkKeyStringCoercion(element.key);
				return escape("" + element.key);
			}
			return index.toString(36);
		}
		function mapIntoArray(children, array, escapedPrefix, nameSoFar, callback) {
			var type = typeof children;
			if (type === "undefined" || type === "boolean") children = null;
			var invokeCallback = false;
			if (children === null) invokeCallback = true;
else switch (type) {
				case "string":
				case "number":
					invokeCallback = true;
					break;
				case "object": switch (children.$$typeof) {
					case REACT_ELEMENT_TYPE:
					case REACT_PORTAL_TYPE: invokeCallback = true;
				}
			}
			if (invokeCallback) {
				var _child = children;
				var mappedChild = callback(_child);
				var childKey = nameSoFar === "" ? SEPARATOR + getElementKey(_child, 0) : nameSoFar;
				if (isArray(mappedChild)) {
					var escapedChildKey = "";
					if (childKey != null) escapedChildKey = escapeUserProvidedKey(childKey) + "/";
					mapIntoArray(mappedChild, array, escapedChildKey, "", function(c) {
						return c;
					});
				} else if (mappedChild != null) {
					if (isValidElement(mappedChild)) {
						if (mappedChild.key && (!_child || _child.key !== mappedChild.key)) checkKeyStringCoercion(mappedChild.key);
						mappedChild = cloneAndReplaceKey(
							mappedChild,
							// traverseAllChildren used to do for objects as children
							escapedPrefix + (mappedChild.key && (!_child || _child.key !== mappedChild.key) ? escapeUserProvidedKey("" + mappedChild.key) + "/" : "") + childKey
);
					}
					array.push(mappedChild);
				}
				return 1;
			}
			var child;
			var nextName;
			var subtreeCount = 0;
			var nextNamePrefix = nameSoFar === "" ? SEPARATOR : nameSoFar + SUBSEPARATOR;
			if (isArray(children)) for (var i$1 = 0; i$1 < children.length; i$1++) {
				child = children[i$1];
				nextName = nextNamePrefix + getElementKey(child, i$1);
				subtreeCount += mapIntoArray(child, array, escapedPrefix, nextName, callback);
			}
else {
				var iteratorFn = getIteratorFn(children);
				if (typeof iteratorFn === "function") {
					var iterableChildren = children;
					if (iteratorFn === iterableChildren.entries) {
						if (!didWarnAboutMaps) warn("Using Maps as children is not supported. Use an array of keyed ReactElements instead.");
						didWarnAboutMaps = true;
					}
					var iterator = iteratorFn.call(iterableChildren);
					var step;
					var ii = 0;
					while (!(step = iterator.next()).done) {
						child = step.value;
						nextName = nextNamePrefix + getElementKey(child, ii++);
						subtreeCount += mapIntoArray(child, array, escapedPrefix, nextName, callback);
					}
				} else if (type === "object") {
					var childrenString = String(children);
					throw new Error("Objects are not valid as a React child (found: " + (childrenString === "[object Object]" ? "object with keys {" + Object.keys(children).join(", ") + "}" : childrenString) + "). " + "If you meant to render a collection of children, use an array " + "instead.");
				}
			}
			return subtreeCount;
		}
		/**
		* Maps children that are typically specified as `props.children`.
		*
		* See https://reactjs.org/docs/react-api.html#reactchildrenmap
		*
		* The provided mapFunction(child, index) will be called for each
		* leaf child.
		*
		* @param {?*} children Children tree container.
		* @param {function(*, int)} func The map function.
		* @param {*} context Context for mapFunction.
		* @return {object} Object containing the ordered map of results.
		*/
		function mapChildren(children, func, context) {
			if (children == null) return children;
			var result = [];
			var count = 0;
			mapIntoArray(children, result, "", "", function(child) {
				return func.call(context, child, count++);
			});
			return result;
		}
		/**
		* Count the number of children that are typically specified as
		* `props.children`.
		*
		* See https://reactjs.org/docs/react-api.html#reactchildrencount
		*
		* @param {?*} children Children tree container.
		* @return {number} The number of children.
		*/
		function countChildren(children) {
			var n = 0;
			mapChildren(children, function() {
				n++;
			});
			return n;
		}
		/**
		* Iterates through children that are typically specified as `props.children`.
		*
		* See https://reactjs.org/docs/react-api.html#reactchildrenforeach
		*
		* The provided forEachFunc(child, index) will be called for each
		* leaf child.
		*
		* @param {?*} children Children tree container.
		* @param {function(*, int)} forEachFunc
		* @param {*} forEachContext Context for forEachContext.
		*/
		function forEachChildren(children, forEachFunc, forEachContext) {
			mapChildren(children, function() {
				forEachFunc.apply(this, arguments);
			}, forEachContext);
		}
		/**
		* Flatten a children object (typically specified as `props.children`) and
		* return an array with appropriately re-keyed children.
		*
		* See https://reactjs.org/docs/react-api.html#reactchildrentoarray
		*/
		function toArray(children) {
			return mapChildren(children, function(child) {
				return child;
			}) || [];
		}
		/**
		* Returns the first child in a collection of children and verifies that there
		* is only one child in the collection.
		*
		* See https://reactjs.org/docs/react-api.html#reactchildrenonly
		*
		* The current implementation of this function assumes that a single child gets
		* passed without a wrapper, but the purpose of this helper function is to
		* abstract away the particular structure of children.
		*
		* @param {?object} children Child collection structure.
		* @return {ReactElement} The first and only `ReactElement` contained in the
		* structure.
		*/
		function onlyChild(children) {
			if (!isValidElement(children)) throw new Error("React.Children.only expected to receive a single React element child.");
			return children;
		}
		function createContext(defaultValue) {
			var context = {
				$$typeof: REACT_CONTEXT_TYPE,
				_currentValue: defaultValue,
				_currentValue2: defaultValue,
				_threadCount: 0,
				Provider: null,
				Consumer: null,
				_defaultValue: null,
				_globalName: null
			};
			context.Provider = {
				$$typeof: REACT_PROVIDER_TYPE,
				_context: context
			};
			var hasWarnedAboutUsingNestedContextConsumers = false;
			var hasWarnedAboutUsingConsumerProvider = false;
			var hasWarnedAboutDisplayNameOnConsumer = false;
			{
				var Consumer = {
					$$typeof: REACT_CONTEXT_TYPE,
					_context: context
				};
				Object.defineProperties(Consumer, {
					Provider: {
						get: function() {
							if (!hasWarnedAboutUsingConsumerProvider) {
								hasWarnedAboutUsingConsumerProvider = true;
								error("Rendering <Context.Consumer.Provider> is not supported and will be removed in a future major release. Did you mean to render <Context.Provider> instead?");
							}
							return context.Provider;
						},
						set: function(_Provider) {
							context.Provider = _Provider;
						}
					},
					_currentValue: {
						get: function() {
							return context._currentValue;
						},
						set: function(_currentValue) {
							context._currentValue = _currentValue;
						}
					},
					_currentValue2: {
						get: function() {
							return context._currentValue2;
						},
						set: function(_currentValue2) {
							context._currentValue2 = _currentValue2;
						}
					},
					_threadCount: {
						get: function() {
							return context._threadCount;
						},
						set: function(_threadCount) {
							context._threadCount = _threadCount;
						}
					},
					Consumer: { get: function() {
						if (!hasWarnedAboutUsingNestedContextConsumers) {
							hasWarnedAboutUsingNestedContextConsumers = true;
							error("Rendering <Context.Consumer.Consumer> is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?");
						}
						return context.Consumer;
					} },
					displayName: {
						get: function() {
							return context.displayName;
						},
						set: function(displayName) {
							if (!hasWarnedAboutDisplayNameOnConsumer) {
								warn("Setting `displayName` on Context.Consumer has no effect. You should set it directly on the context with Context.displayName = '%s'.", displayName);
								hasWarnedAboutDisplayNameOnConsumer = true;
							}
						}
					}
				});
				context.Consumer = Consumer;
			}
			{
				context._currentRenderer = null;
				context._currentRenderer2 = null;
			}
			return context;
		}
		var Uninitialized = -1;
		var Pending = 0;
		var Resolved = 1;
		var Rejected = 2;
		function lazyInitializer(payload) {
			if (payload._status === Uninitialized) {
				var ctor = payload._result;
				var thenable = ctor();
				thenable.then(function(moduleObject$1) {
					if (payload._status === Pending || payload._status === Uninitialized) {
						var resolved = payload;
						resolved._status = Resolved;
						resolved._result = moduleObject$1;
					}
				}, function(error$1) {
					if (payload._status === Pending || payload._status === Uninitialized) {
						var rejected = payload;
						rejected._status = Rejected;
						rejected._result = error$1;
					}
				});
				if (payload._status === Uninitialized) {
					var pending = payload;
					pending._status = Pending;
					pending._result = thenable;
				}
			}
			if (payload._status === Resolved) {
				var moduleObject = payload._result;
				if (moduleObject === undefined) error("lazy: Expected the result of a dynamic import() call. Instead received: %s\n\nYour code should look like: \n  const MyComponent = lazy(() => import('./MyComponent'))\n\nDid you accidentally put curly braces around the import?", moduleObject);
				if (!("default" in moduleObject)) error("lazy: Expected the result of a dynamic import() call. Instead received: %s\n\nYour code should look like: \n  const MyComponent = lazy(() => import('./MyComponent'))", moduleObject);
				return moduleObject.default;
			} else throw payload._result;
		}
		function lazy(ctor) {
			var payload = {
				_status: Uninitialized,
				_result: ctor
			};
			var lazyType = {
				$$typeof: REACT_LAZY_TYPE,
				_payload: payload,
				_init: lazyInitializer
			};
			{
				var defaultProps;
				var propTypes;
				Object.defineProperties(lazyType, {
					defaultProps: {
						configurable: true,
						get: function() {
							return defaultProps;
						},
						set: function(newDefaultProps) {
							error("React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it.");
							defaultProps = newDefaultProps;
							Object.defineProperty(lazyType, "defaultProps", { enumerable: true });
						}
					},
					propTypes: {
						configurable: true,
						get: function() {
							return propTypes;
						},
						set: function(newPropTypes) {
							error("React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it.");
							propTypes = newPropTypes;
							Object.defineProperty(lazyType, "propTypes", { enumerable: true });
						}
					}
				});
			}
			return lazyType;
		}
		function forwardRef(render) {
			{
				if (render != null && render.$$typeof === REACT_MEMO_TYPE) error("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...)).");
else if (typeof render !== "function") error("forwardRef requires a render function but was given %s.", render === null ? "null" : typeof render);
else if (render.length !== 0 && render.length !== 2) error("forwardRef render functions accept exactly two parameters: props and ref. %s", render.length === 1 ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined.");
				if (render != null) {
					if (render.defaultProps != null || render.propTypes != null) error("forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?");
				}
			}
			var elementType = {
				$$typeof: REACT_FORWARD_REF_TYPE,
				render
			};
			{
				var ownName;
				Object.defineProperty(elementType, "displayName", {
					enumerable: false,
					configurable: true,
					get: function() {
						return ownName;
					},
					set: function(name) {
						ownName = name;
						if (!render.name && !render.displayName) render.displayName = name;
					}
				});
			}
			return elementType;
		}
		var REACT_MODULE_REFERENCE;
		REACT_MODULE_REFERENCE = Symbol.for("react.module.reference");
		function isValidElementType(type) {
			if (typeof type === "string" || typeof type === "function") return true;
			if (type === REACT_FRAGMENT_TYPE || type === REACT_PROFILER_TYPE || enableDebugTracing || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || enableLegacyHidden || type === REACT_OFFSCREEN_TYPE || enableScopeAPI || enableCacheElement || enableTransitionTracing) return true;
			if (typeof type === "object" && type !== null) {
				if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_MODULE_REFERENCE || type.getModuleId !== undefined) return true;
			}
			return false;
		}
		function memo(type, compare) {
			if (!isValidElementType(type)) error("memo: The first argument must be a component. Instead received: %s", type === null ? "null" : typeof type);
			var elementType = {
				$$typeof: REACT_MEMO_TYPE,
				type,
				compare: compare === undefined ? null : compare
			};
			{
				var ownName;
				Object.defineProperty(elementType, "displayName", {
					enumerable: false,
					configurable: true,
					get: function() {
						return ownName;
					},
					set: function(name) {
						ownName = name;
						if (!type.name && !type.displayName) type.displayName = name;
					}
				});
			}
			return elementType;
		}
		function resolveDispatcher() {
			var dispatcher = ReactCurrentDispatcher.current;
			if (dispatcher === null) error("Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.");
			return dispatcher;
		}
		function useContext(Context) {
			var dispatcher = resolveDispatcher();
			if (Context._context !== undefined) {
				var realContext = Context._context;
				if (realContext.Consumer === Context) error("Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?");
else if (realContext.Provider === Context) error("Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?");
			}
			return dispatcher.useContext(Context);
		}
		function useState$1(initialState) {
			var dispatcher = resolveDispatcher();
			return dispatcher.useState(initialState);
		}
		function useReducer(reducer, initialArg, init) {
			var dispatcher = resolveDispatcher();
			return dispatcher.useReducer(reducer, initialArg, init);
		}
		function useRef$1(initialValue) {
			var dispatcher = resolveDispatcher();
			return dispatcher.useRef(initialValue);
		}
		function useEffect(create, deps) {
			var dispatcher = resolveDispatcher();
			return dispatcher.useEffect(create, deps);
		}
		function useInsertionEffect(create, deps) {
			var dispatcher = resolveDispatcher();
			return dispatcher.useInsertionEffect(create, deps);
		}
		function useLayoutEffect$1(create, deps) {
			var dispatcher = resolveDispatcher();
			return dispatcher.useLayoutEffect(create, deps);
		}
		function useCallback(callback, deps) {
			var dispatcher = resolveDispatcher();
			return dispatcher.useCallback(callback, deps);
		}
		function useMemo(create, deps) {
			var dispatcher = resolveDispatcher();
			return dispatcher.useMemo(create, deps);
		}
		function useImperativeHandle(ref, create, deps) {
			var dispatcher = resolveDispatcher();
			return dispatcher.useImperativeHandle(ref, create, deps);
		}
		function useDebugValue(value, formatterFn) {
			{
				var dispatcher = resolveDispatcher();
				return dispatcher.useDebugValue(value, formatterFn);
			}
		}
		function useTransition() {
			var dispatcher = resolveDispatcher();
			return dispatcher.useTransition();
		}
		function useDeferredValue(value) {
			var dispatcher = resolveDispatcher();
			return dispatcher.useDeferredValue(value);
		}
		function useId() {
			var dispatcher = resolveDispatcher();
			return dispatcher.useId();
		}
		function useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot) {
			var dispatcher = resolveDispatcher();
			return dispatcher.useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
		}
		var disabledDepth = 0;
		var prevLog;
		var prevInfo;
		var prevWarn;
		var prevError;
		var prevGroup;
		var prevGroupCollapsed;
		var prevGroupEnd;
		function disabledLog() {}
		disabledLog.__reactDisabledLog = true;
		function disableLogs() {
			{
				if (disabledDepth === 0) {
					prevLog = console.log;
					prevInfo = console.info;
					prevWarn = console.warn;
					prevError = console.error;
					prevGroup = console.group;
					prevGroupCollapsed = console.groupCollapsed;
					prevGroupEnd = console.groupEnd;
					var props = {
						configurable: true,
						enumerable: true,
						value: disabledLog,
						writable: true
					};
					Object.defineProperties(console, {
						info: props,
						log: props,
						warn: props,
						error: props,
						group: props,
						groupCollapsed: props,
						groupEnd: props
					});
				}
				disabledDepth++;
			}
		}
		function reenableLogs() {
			{
				disabledDepth--;
				if (disabledDepth === 0) {
					var props = {
						configurable: true,
						enumerable: true,
						writable: true
					};
					Object.defineProperties(console, {
						log: assign({}, props, { value: prevLog }),
						info: assign({}, props, { value: prevInfo }),
						warn: assign({}, props, { value: prevWarn }),
						error: assign({}, props, { value: prevError }),
						group: assign({}, props, { value: prevGroup }),
						groupCollapsed: assign({}, props, { value: prevGroupCollapsed }),
						groupEnd: assign({}, props, { value: prevGroupEnd })
					});
				}
				if (disabledDepth < 0) error("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
			}
		}
		var ReactCurrentDispatcher$1 = ReactSharedInternals.ReactCurrentDispatcher;
		var prefix$1;
		function describeBuiltInComponentFrame(name, source, ownerFn) {
			{
				if (prefix$1 === undefined) try {
					throw Error();
				} catch (x) {
					var match = x.stack.trim().match(/\n( *(at )?)/);
					prefix$1 = match && match[1] || "";
				}
				return "\n" + prefix$1 + name;
			}
		}
		var reentry = false;
		var componentFrameCache;
		{
			var PossiblyWeakMap = typeof WeakMap === "function" ? WeakMap : Map;
			componentFrameCache = new PossiblyWeakMap();
		}
		function describeNativeComponentFrame(fn, construct) {
			if (!fn || reentry) return "";
			{
				var frame = componentFrameCache.get(fn);
				if (frame !== undefined) return frame;
			}
			var control;
			reentry = true;
			var previousPrepareStackTrace = Error.prepareStackTrace;
			Error.prepareStackTrace = undefined;
			var previousDispatcher;
			{
				previousDispatcher = ReactCurrentDispatcher$1.current;
				ReactCurrentDispatcher$1.current = null;
				disableLogs();
			}
			try {
				if (construct) {
					var Fake = function() {
						throw Error();
					};
					Object.defineProperty(Fake.prototype, "props", { set: function() {
						throw Error();
					} });
					if (typeof Reflect === "object" && Reflect.construct) {
						try {
							Reflect.construct(Fake, []);
						} catch (x) {
							control = x;
						}
						Reflect.construct(fn, [], Fake);
					} else {
						try {
							Fake.call();
						} catch (x) {
							control = x;
						}
						fn.call(Fake.prototype);
					}
				} else {
					try {
						throw Error();
					} catch (x) {
						control = x;
					}
					fn();
				}
			} catch (sample) {
				if (sample && control && typeof sample.stack === "string") {
					var sampleLines = sample.stack.split("\n");
					var controlLines = control.stack.split("\n");
					var s = sampleLines.length - 1;
					var c = controlLines.length - 1;
					while (s >= 1 && c >= 0 && sampleLines[s] !== controlLines[c]) c--;
					for (; s >= 1 && c >= 0; s--, c--) if (sampleLines[s] !== controlLines[c]) {
						if (s !== 1 || c !== 1) do {
							s--;
							c--;
							if (c < 0 || sampleLines[s] !== controlLines[c]) {
								var _frame = "\n" + sampleLines[s].replace(" at new ", " at ");
								if (fn.displayName && _frame.includes("<anonymous>")) _frame = _frame.replace("<anonymous>", fn.displayName);
								if (typeof fn === "function") componentFrameCache.set(fn, _frame);
								return _frame;
							}
						} while (s >= 1 && c >= 0);
						break;
					}
				}
			} finally {
				reentry = false;
				{
					ReactCurrentDispatcher$1.current = previousDispatcher;
					reenableLogs();
				}
				Error.prepareStackTrace = previousPrepareStackTrace;
			}
			var name = fn ? fn.displayName || fn.name : "";
			var syntheticFrame = name ? describeBuiltInComponentFrame(name) : "";
			if (typeof fn === "function") componentFrameCache.set(fn, syntheticFrame);
			return syntheticFrame;
		}
		function describeFunctionComponentFrame(fn, source, ownerFn) {
			return describeNativeComponentFrame(fn, false);
		}
		function shouldConstruct(Component$1) {
			var prototype = Component$1.prototype;
			return !!(prototype && prototype.isReactComponent);
		}
		function describeUnknownElementTypeFrameInDEV(type, source, ownerFn) {
			if (type == null) return "";
			if (typeof type === "function") return describeNativeComponentFrame(type, shouldConstruct(type));
			if (typeof type === "string") return describeBuiltInComponentFrame(type);
			switch (type) {
				case REACT_SUSPENSE_TYPE: return describeBuiltInComponentFrame("Suspense");
				case REACT_SUSPENSE_LIST_TYPE: return describeBuiltInComponentFrame("SuspenseList");
			}
			if (typeof type === "object") switch (type.$$typeof) {
				case REACT_FORWARD_REF_TYPE: return describeFunctionComponentFrame(type.render);
				case REACT_MEMO_TYPE: return describeUnknownElementTypeFrameInDEV(type.type, source, ownerFn);
				case REACT_LAZY_TYPE: {
					var lazyComponent = type;
					var payload = lazyComponent._payload;
					var init = lazyComponent._init;
					try {
						return describeUnknownElementTypeFrameInDEV(init(payload), source, ownerFn);
					} catch (x) {}
				}
			}
			return "";
		}
		var loggedTypeFailures = {};
		var ReactDebugCurrentFrame$1 = ReactSharedInternals.ReactDebugCurrentFrame;
		function setCurrentlyValidatingElement(element) {
			if (element) {
				var owner = element._owner;
				var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
				ReactDebugCurrentFrame$1.setExtraStackFrame(stack);
			} else ReactDebugCurrentFrame$1.setExtraStackFrame(null);
		}
		function checkPropTypes(typeSpecs, values, location, componentName, element) {
			{
				var has = Function.call.bind(hasOwnProperty);
				for (var typeSpecName in typeSpecs) if (has(typeSpecs, typeSpecName)) {
					var error$1 = void 0;
					try {
						if (typeof typeSpecs[typeSpecName] !== "function") {
							var err = Error((componentName || "React class") + ": " + location + " type `" + typeSpecName + "` is invalid; " + "it must be a function, usually from the `prop-types` package, but received `" + typeof typeSpecs[typeSpecName] + "`." + "This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
							err.name = "Invariant Violation";
							throw err;
						}
						error$1 = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
					} catch (ex) {
						error$1 = ex;
					}
					if (error$1 && !(error$1 instanceof Error)) {
						setCurrentlyValidatingElement(element);
						error("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", componentName || "React class", location, typeSpecName, typeof error$1);
						setCurrentlyValidatingElement(null);
					}
					if (error$1 instanceof Error && !(error$1.message in loggedTypeFailures)) {
						loggedTypeFailures[error$1.message] = true;
						setCurrentlyValidatingElement(element);
						error("Failed %s type: %s", location, error$1.message);
						setCurrentlyValidatingElement(null);
					}
				}
			}
		}
		function setCurrentlyValidatingElement$1(element) {
			if (element) {
				var owner = element._owner;
				var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
				setExtraStackFrame(stack);
			} else setExtraStackFrame(null);
		}
		var propTypesMisspellWarningShown;
		propTypesMisspellWarningShown = false;
		function getDeclarationErrorAddendum() {
			if (ReactCurrentOwner.current) {
				var name = getComponentNameFromType(ReactCurrentOwner.current.type);
				if (name) return "\n\nCheck the render method of `" + name + "`.";
			}
			return "";
		}
		function getSourceInfoErrorAddendum(source) {
			if (source !== undefined) {
				var fileName = source.fileName.replace(/^.*[\\\/]/, "");
				var lineNumber = source.lineNumber;
				return "\n\nCheck your code at " + fileName + ":" + lineNumber + ".";
			}
			return "";
		}
		function getSourceInfoErrorAddendumForProps(elementProps) {
			if (elementProps !== null && elementProps !== undefined) return getSourceInfoErrorAddendum(elementProps.__source);
			return "";
		}
		/**
		* Warn if there's no key explicitly set on dynamic arrays of children or
		* object keys are not valid. This allows us to keep track of children between
		* updates.
		*/
		var ownerHasKeyUseWarning = {};
		function getCurrentComponentErrorInfo(parentType) {
			var info = getDeclarationErrorAddendum();
			if (!info) {
				var parentName = typeof parentType === "string" ? parentType : parentType.displayName || parentType.name;
				if (parentName) info = "\n\nCheck the top-level render call using <" + parentName + ">.";
			}
			return info;
		}
		/**
		* Warn if the element doesn't have an explicit key assigned to it.
		* This element is in an array. The array could grow and shrink or be
		* reordered. All children that haven't already been validated are required to
		* have a "key" property assigned to it. Error statuses are cached so a warning
		* will only be shown once.
		*
		* @internal
		* @param {ReactElement} element Element that requires a key.
		* @param {*} parentType element's parent's type.
		*/
		function validateExplicitKey(element, parentType) {
			if (!element._store || element._store.validated || element.key != null) return;
			element._store.validated = true;
			var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);
			if (ownerHasKeyUseWarning[currentComponentErrorInfo]) return;
			ownerHasKeyUseWarning[currentComponentErrorInfo] = true;
			var childOwner = "";
			if (element && element._owner && element._owner !== ReactCurrentOwner.current) childOwner = " It was passed a child from " + getComponentNameFromType(element._owner.type) + ".";
			{
				setCurrentlyValidatingElement$1(element);
				error("Each child in a list should have a unique \"key\" prop.%s%s See https://reactjs.org/link/warning-keys for more information.", currentComponentErrorInfo, childOwner);
				setCurrentlyValidatingElement$1(null);
			}
		}
		/**
		* Ensure that every element either is passed in a static location, in an
		* array with an explicit keys property defined, or in an object literal
		* with valid key property.
		*
		* @internal
		* @param {ReactNode} node Statically passed child of any type.
		* @param {*} parentType node's parent's type.
		*/
		function validateChildKeys(node, parentType) {
			if (typeof node !== "object") return;
			if (isArray(node)) for (var i$1 = 0; i$1 < node.length; i$1++) {
				var child = node[i$1];
				if (isValidElement(child)) validateExplicitKey(child, parentType);
			}
else if (isValidElement(node)) {
				if (node._store) node._store.validated = true;
			} else if (node) {
				var iteratorFn = getIteratorFn(node);
				if (typeof iteratorFn === "function") {
					if (iteratorFn !== node.entries) {
						var iterator = iteratorFn.call(node);
						var step;
						while (!(step = iterator.next()).done) if (isValidElement(step.value)) validateExplicitKey(step.value, parentType);
					}
				}
			}
		}
		/**
		* Given an element, validate that its props follow the propTypes definition,
		* provided by the type.
		*
		* @param {ReactElement} element
		*/
		function validatePropTypes(element) {
			{
				var type = element.type;
				if (type === null || type === undefined || typeof type === "string") return;
				var propTypes;
				if (typeof type === "function") propTypes = type.propTypes;
else if (typeof type === "object" && (type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_MEMO_TYPE)) propTypes = type.propTypes;
else return;
				if (propTypes) {
					var name = getComponentNameFromType(type);
					checkPropTypes(propTypes, element.props, "prop", name, element);
				} else if (type.PropTypes !== undefined && !propTypesMisspellWarningShown) {
					propTypesMisspellWarningShown = true;
					var _name = getComponentNameFromType(type);
					error("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", _name || "Unknown");
				}
				if (typeof type.getDefaultProps === "function" && !type.getDefaultProps.isReactClassApproved) error("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
			}
		}
		/**
		* Given a fragment, validate that it can only be provided with fragment props
		* @param {ReactElement} fragment
		*/
		function validateFragmentProps(fragment) {
			{
				var keys = Object.keys(fragment.props);
				for (var i$1 = 0; i$1 < keys.length; i$1++) {
					var key = keys[i$1];
					if (key !== "children" && key !== "key") {
						setCurrentlyValidatingElement$1(fragment);
						error("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", key);
						setCurrentlyValidatingElement$1(null);
						break;
					}
				}
				if (fragment.ref !== null) {
					setCurrentlyValidatingElement$1(fragment);
					error("Invalid attribute `ref` supplied to `React.Fragment`.");
					setCurrentlyValidatingElement$1(null);
				}
			}
		}
		function createElementWithValidation(type, props, children) {
			var validType = isValidElementType(type);
			if (!validType) {
				var info = "";
				if (type === undefined || typeof type === "object" && type !== null && Object.keys(type).length === 0) info += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.";
				var sourceInfo = getSourceInfoErrorAddendumForProps(props);
				if (sourceInfo) info += sourceInfo;
else info += getDeclarationErrorAddendum();
				var typeString;
				if (type === null) typeString = "null";
else if (isArray(type)) typeString = "array";
else if (type !== undefined && type.$$typeof === REACT_ELEMENT_TYPE) {
					typeString = "<" + (getComponentNameFromType(type.type) || "Unknown") + " />";
					info = " Did you accidentally export a JSX literal instead of a component?";
				} else typeString = typeof type;
				error("React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", typeString, info);
			}
			var element = createElement.apply(this, arguments);
			if (element == null) return element;
			if (validType) for (var i$1 = 2; i$1 < arguments.length; i$1++) validateChildKeys(arguments[i$1], type);
			if (type === REACT_FRAGMENT_TYPE) validateFragmentProps(element);
else validatePropTypes(element);
			return element;
		}
		var didWarnAboutDeprecatedCreateFactory = false;
		function createFactoryWithValidation(type) {
			var validatedFactory = createElementWithValidation.bind(null, type);
			validatedFactory.type = type;
			{
				if (!didWarnAboutDeprecatedCreateFactory) {
					didWarnAboutDeprecatedCreateFactory = true;
					warn("React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead.");
				}
				Object.defineProperty(validatedFactory, "type", {
					enumerable: false,
					get: function() {
						warn("Factory.type is deprecated. Access the class directly before passing it to createFactory.");
						Object.defineProperty(this, "type", { value: type });
						return type;
					}
				});
			}
			return validatedFactory;
		}
		function cloneElementWithValidation(element, props, children) {
			var newElement = cloneElement.apply(this, arguments);
			for (var i$1 = 2; i$1 < arguments.length; i$1++) validateChildKeys(arguments[i$1], newElement.type);
			validatePropTypes(newElement);
			return newElement;
		}
		function startTransition(scope, options) {
			var prevTransition = ReactCurrentBatchConfig.transition;
			ReactCurrentBatchConfig.transition = {};
			var currentTransition = ReactCurrentBatchConfig.transition;
			ReactCurrentBatchConfig.transition._updatedFibers = new Set();
			try {
				scope();
			} finally {
				ReactCurrentBatchConfig.transition = prevTransition;
				if (prevTransition === null && currentTransition._updatedFibers) {
					var updatedFibersCount = currentTransition._updatedFibers.size;
					if (updatedFibersCount > 10) warn("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table.");
					currentTransition._updatedFibers.clear();
				}
			}
		}
		var didWarnAboutMessageChannel = false;
		var enqueueTaskImpl = null;
		function enqueueTask(task) {
			if (enqueueTaskImpl === null) try {
				var requireString = ("require" + Math.random()).slice(0, 7);
				var nodeRequire = module && module[requireString];
				enqueueTaskImpl = nodeRequire.call(module, "timers").setImmediate;
			} catch (_err) {
				enqueueTaskImpl = function(callback) {
					if (didWarnAboutMessageChannel === false) {
						didWarnAboutMessageChannel = true;
						if (typeof MessageChannel === "undefined") error("This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning.");
					}
					var channel = new MessageChannel();
					channel.port1.onmessage = callback;
					channel.port2.postMessage(undefined);
				};
			}
			return enqueueTaskImpl(task);
		}
		var actScopeDepth = 0;
		var didWarnNoAwaitAct = false;
		function act(callback) {
			{
				var prevActScopeDepth = actScopeDepth;
				actScopeDepth++;
				if (ReactCurrentActQueue.current === null) ReactCurrentActQueue.current = [];
				var prevIsBatchingLegacy = ReactCurrentActQueue.isBatchingLegacy;
				var result;
				try {
					ReactCurrentActQueue.isBatchingLegacy = true;
					result = callback();
					if (!prevIsBatchingLegacy && ReactCurrentActQueue.didScheduleLegacyUpdate) {
						var queue = ReactCurrentActQueue.current;
						if (queue !== null) {
							ReactCurrentActQueue.didScheduleLegacyUpdate = false;
							flushActQueue(queue);
						}
					}
				} catch (error$1) {
					popActScope(prevActScopeDepth);
					throw error$1;
				} finally {
					ReactCurrentActQueue.isBatchingLegacy = prevIsBatchingLegacy;
				}
				if (result !== null && typeof result === "object" && typeof result.then === "function") {
					var thenableResult = result;
					var wasAwaited = false;
					var thenable = { then: function(resolve, reject) {
						wasAwaited = true;
						thenableResult.then(function(returnValue$1) {
							popActScope(prevActScopeDepth);
							if (actScopeDepth === 0) recursivelyFlushAsyncActWork(returnValue$1, resolve, reject);
else resolve(returnValue$1);
						}, function(error$1) {
							popActScope(prevActScopeDepth);
							reject(error$1);
						});
					} };
					if (!didWarnNoAwaitAct && typeof Promise !== "undefined") Promise.resolve().then(function() {}).then(function() {
						if (!wasAwaited) {
							didWarnNoAwaitAct = true;
							error("You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);");
						}
					});
					return thenable;
				} else {
					var returnValue = result;
					popActScope(prevActScopeDepth);
					if (actScopeDepth === 0) {
						var _queue = ReactCurrentActQueue.current;
						if (_queue !== null) {
							flushActQueue(_queue);
							ReactCurrentActQueue.current = null;
						}
						var _thenable = { then: function(resolve, reject) {
							if (ReactCurrentActQueue.current === null) {
								ReactCurrentActQueue.current = [];
								recursivelyFlushAsyncActWork(returnValue, resolve, reject);
							} else resolve(returnValue);
						} };
						return _thenable;
					} else {
						var _thenable2 = { then: function(resolve, reject) {
							resolve(returnValue);
						} };
						return _thenable2;
					}
				}
			}
		}
		function popActScope(prevActScopeDepth) {
			{
				if (prevActScopeDepth !== actScopeDepth - 1) error("You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. ");
				actScopeDepth = prevActScopeDepth;
			}
		}
		function recursivelyFlushAsyncActWork(returnValue, resolve, reject) {
			{
				var queue = ReactCurrentActQueue.current;
				if (queue !== null) try {
					flushActQueue(queue);
					enqueueTask(function() {
						if (queue.length === 0) {
							ReactCurrentActQueue.current = null;
							resolve(returnValue);
						} else recursivelyFlushAsyncActWork(returnValue, resolve, reject);
					});
				} catch (error$1) {
					reject(error$1);
				}
else resolve(returnValue);
			}
		}
		var isFlushing = false;
		function flushActQueue(queue) {
			if (!isFlushing) {
				isFlushing = true;
				var i$1 = 0;
				try {
					for (; i$1 < queue.length; i$1++) {
						var callback = queue[i$1];
						do 
							callback = callback(true);
						while (callback !== null);
					}
					queue.length = 0;
				} catch (error$1) {
					queue = queue.slice(i$1 + 1);
					throw error$1;
				} finally {
					isFlushing = false;
				}
			}
		}
		var createElement$1 = createElementWithValidation;
		var cloneElement$1 = cloneElementWithValidation;
		var createFactory = createFactoryWithValidation;
		var Children = {
			map: mapChildren,
			forEach: forEachChildren,
			count: countChildren,
			toArray,
			only: onlyChild
		};
		exports.Children = Children;
		exports.Component = Component;
		exports.Fragment = REACT_FRAGMENT_TYPE;
		exports.Profiler = REACT_PROFILER_TYPE;
		exports.PureComponent = PureComponent;
		exports.StrictMode = REACT_STRICT_MODE_TYPE;
		exports.Suspense = REACT_SUSPENSE_TYPE;
		exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ReactSharedInternals;
		exports.act = act;
		exports.cloneElement = cloneElement$1;
		exports.createContext = createContext;
		exports.createElement = createElement$1;
		exports.createFactory = createFactory;
		exports.createRef = createRef;
		exports.forwardRef = forwardRef;
		exports.isValidElement = isValidElement;
		exports.lazy = lazy;
		exports.memo = memo;
		exports.startTransition = startTransition;
		exports.unstable_act = act;
		exports.useCallback = useCallback;
		exports.useContext = useContext;
		exports.useDebugValue = useDebugValue;
		exports.useDeferredValue = useDeferredValue;
		exports.useEffect = useEffect;
		exports.useId = useId;
		exports.useImperativeHandle = useImperativeHandle;
		exports.useInsertionEffect = useInsertionEffect;
		exports.useLayoutEffect = useLayoutEffect$1;
		exports.useMemo = useMemo;
		exports.useReducer = useReducer;
		exports.useRef = useRef$1;
		exports.useState = useState$1;
		exports.useSyncExternalStore = useSyncExternalStore;
		exports.useTransition = useTransition;
		exports.version = ReactVersion;
		if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== "undefined" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop === "function") __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
	})();
} });

//#endregion
//#region node_modules/react/index.js
var require_react = __commonJS({ "node_modules/react/index.js"(exports, module) {
	module.exports = require_react_development();
} });

//#endregion
//#region node_modules/scheduler/cjs/scheduler.development.js
var require_scheduler_development = __commonJS({ "node_modules/scheduler/cjs/scheduler.development.js"(exports) {
	(function() {
		"use strict";
		if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== "undefined" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart === "function") __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
		var enableSchedulerDebugging = false;
		var enableProfiling = false;
		var frameYieldMs = 5;
		function push(heap, node) {
			var index = heap.length;
			heap.push(node);
			siftUp(heap, node, index);
		}
		function peek(heap) {
			return heap.length === 0 ? null : heap[0];
		}
		function pop(heap) {
			if (heap.length === 0) return null;
			var first = heap[0];
			var last$1 = heap.pop();
			if (last$1 !== first) {
				heap[0] = last$1;
				siftDown(heap, last$1, 0);
			}
			return first;
		}
		function siftUp(heap, node, i$1) {
			var index = i$1;
			while (index > 0) {
				var parentIndex = index - 1 >>> 1;
				var parent = heap[parentIndex];
				if (compare(parent, node) > 0) {
					heap[parentIndex] = node;
					heap[index] = parent;
					index = parentIndex;
				} else return;
			}
		}
		function siftDown(heap, node, i$1) {
			var index = i$1;
			var length = heap.length;
			var halfLength = length >>> 1;
			while (index < halfLength) {
				var leftIndex = (index + 1) * 2 - 1;
				var left = heap[leftIndex];
				var rightIndex = leftIndex + 1;
				var right = heap[rightIndex];
				if (compare(left, node) < 0) if (rightIndex < length && compare(right, left) < 0) {
					heap[index] = right;
					heap[rightIndex] = node;
					index = rightIndex;
				} else {
					heap[index] = left;
					heap[leftIndex] = node;
					index = leftIndex;
				}
else if (rightIndex < length && compare(right, node) < 0) {
					heap[index] = right;
					heap[rightIndex] = node;
					index = rightIndex;
				} else return;
			}
		}
		function compare(a, b) {
			var diff = a.sortIndex - b.sortIndex;
			return diff !== 0 ? diff : a.id - b.id;
		}
		var ImmediatePriority = 1;
		var UserBlockingPriority = 2;
		var NormalPriority = 3;
		var LowPriority = 4;
		var IdlePriority = 5;
		function markTaskErrored(task, ms) {}
		var hasPerformanceNow = typeof performance === "object" && typeof performance.now === "function";
		if (hasPerformanceNow) {
			var localPerformance = performance;
			exports.unstable_now = function() {
				return localPerformance.now();
			};
		} else {
			var localDate = Date;
			var initialTime = localDate.now();
			exports.unstable_now = function() {
				return localDate.now() - initialTime;
			};
		}
		var maxSigned31BitInt = 1073741823;
		var IMMEDIATE_PRIORITY_TIMEOUT = -1;
		var USER_BLOCKING_PRIORITY_TIMEOUT = 250;
		var NORMAL_PRIORITY_TIMEOUT = 5e3;
		var LOW_PRIORITY_TIMEOUT = 1e4;
		var IDLE_PRIORITY_TIMEOUT = maxSigned31BitInt;
		var taskQueue = [];
		var timerQueue = [];
		var taskIdCounter = 1;
		var currentTask = null;
		var currentPriorityLevel = NormalPriority;
		var isPerformingWork = false;
		var isHostCallbackScheduled = false;
		var isHostTimeoutScheduled = false;
		var localSetTimeout = typeof setTimeout === "function" ? setTimeout : null;
		var localClearTimeout = typeof clearTimeout === "function" ? clearTimeout : null;
		var localSetImmediate = typeof setImmediate !== "undefined" ? setImmediate : null;
		var isInputPending = typeof navigator !== "undefined" && navigator.scheduling !== undefined && navigator.scheduling.isInputPending !== undefined ? navigator.scheduling.isInputPending.bind(navigator.scheduling) : null;
		function advanceTimers(currentTime) {
			var timer = peek(timerQueue);
			while (timer !== null) {
				if (timer.callback === null) pop(timerQueue);
else if (timer.startTime <= currentTime) {
					pop(timerQueue);
					timer.sortIndex = timer.expirationTime;
					push(taskQueue, timer);
				} else return;
				timer = peek(timerQueue);
			}
		}
		function handleTimeout(currentTime) {
			isHostTimeoutScheduled = false;
			advanceTimers(currentTime);
			if (!isHostCallbackScheduled) if (peek(taskQueue) !== null) {
				isHostCallbackScheduled = true;
				requestHostCallback(flushWork);
			} else {
				var firstTimer = peek(timerQueue);
				if (firstTimer !== null) requestHostTimeout(handleTimeout, firstTimer.startTime - currentTime);
			}
		}
		function flushWork(hasTimeRemaining, initialTime$1) {
			isHostCallbackScheduled = false;
			if (isHostTimeoutScheduled) {
				isHostTimeoutScheduled = false;
				cancelHostTimeout();
			}
			isPerformingWork = true;
			var previousPriorityLevel = currentPriorityLevel;
			try {
				if (enableProfiling) try {
					return workLoop(hasTimeRemaining, initialTime$1);
				} catch (error) {
					if (currentTask !== null) {
						var currentTime = exports.unstable_now();
						markTaskErrored(currentTask, currentTime);
						currentTask.isQueued = false;
					}
					throw error;
				}
else return workLoop(hasTimeRemaining, initialTime$1);
			} finally {
				currentTask = null;
				currentPriorityLevel = previousPriorityLevel;
				isPerformingWork = false;
			}
		}
		function workLoop(hasTimeRemaining, initialTime$1) {
			var currentTime = initialTime$1;
			advanceTimers(currentTime);
			currentTask = peek(taskQueue);
			while (currentTask !== null && !enableSchedulerDebugging) {
				if (currentTask.expirationTime > currentTime && (!hasTimeRemaining || shouldYieldToHost())) break;
				var callback = currentTask.callback;
				if (typeof callback === "function") {
					currentTask.callback = null;
					currentPriorityLevel = currentTask.priorityLevel;
					var didUserCallbackTimeout = currentTask.expirationTime <= currentTime;
					var continuationCallback = callback(didUserCallbackTimeout);
					currentTime = exports.unstable_now();
					if (typeof continuationCallback === "function") currentTask.callback = continuationCallback;
else if (currentTask === peek(taskQueue)) pop(taskQueue);
					advanceTimers(currentTime);
				} else pop(taskQueue);
				currentTask = peek(taskQueue);
			}
			if (currentTask !== null) return true;
else {
				var firstTimer = peek(timerQueue);
				if (firstTimer !== null) requestHostTimeout(handleTimeout, firstTimer.startTime - currentTime);
				return false;
			}
		}
		function unstable_runWithPriority(priorityLevel, eventHandler) {
			switch (priorityLevel) {
				case ImmediatePriority:
				case UserBlockingPriority:
				case NormalPriority:
				case LowPriority:
				case IdlePriority: break;
				default: priorityLevel = NormalPriority;
			}
			var previousPriorityLevel = currentPriorityLevel;
			currentPriorityLevel = priorityLevel;
			try {
				return eventHandler();
			} finally {
				currentPriorityLevel = previousPriorityLevel;
			}
		}
		function unstable_next(eventHandler) {
			var priorityLevel;
			switch (currentPriorityLevel) {
				case ImmediatePriority:
				case UserBlockingPriority:
				case NormalPriority:
					priorityLevel = NormalPriority;
					break;
				default:
					priorityLevel = currentPriorityLevel;
					break;
			}
			var previousPriorityLevel = currentPriorityLevel;
			currentPriorityLevel = priorityLevel;
			try {
				return eventHandler();
			} finally {
				currentPriorityLevel = previousPriorityLevel;
			}
		}
		function unstable_wrapCallback(callback) {
			var parentPriorityLevel = currentPriorityLevel;
			return function() {
				var previousPriorityLevel = currentPriorityLevel;
				currentPriorityLevel = parentPriorityLevel;
				try {
					return callback.apply(this, arguments);
				} finally {
					currentPriorityLevel = previousPriorityLevel;
				}
			};
		}
		function unstable_scheduleCallback(priorityLevel, callback, options) {
			var currentTime = exports.unstable_now();
			var startTime$1;
			if (typeof options === "object" && options !== null) {
				var delay = options.delay;
				if (typeof delay === "number" && delay > 0) startTime$1 = currentTime + delay;
else startTime$1 = currentTime;
			} else startTime$1 = currentTime;
			var timeout;
			switch (priorityLevel) {
				case ImmediatePriority:
					timeout = IMMEDIATE_PRIORITY_TIMEOUT;
					break;
				case UserBlockingPriority:
					timeout = USER_BLOCKING_PRIORITY_TIMEOUT;
					break;
				case IdlePriority:
					timeout = IDLE_PRIORITY_TIMEOUT;
					break;
				case LowPriority:
					timeout = LOW_PRIORITY_TIMEOUT;
					break;
				case NormalPriority:
				default:
					timeout = NORMAL_PRIORITY_TIMEOUT;
					break;
			}
			var expirationTime = startTime$1 + timeout;
			var newTask = {
				id: taskIdCounter++,
				callback,
				priorityLevel,
				startTime: startTime$1,
				expirationTime,
				sortIndex: -1
			};
			if (startTime$1 > currentTime) {
				newTask.sortIndex = startTime$1;
				push(timerQueue, newTask);
				if (peek(taskQueue) === null && newTask === peek(timerQueue)) {
					if (isHostTimeoutScheduled) cancelHostTimeout();
else isHostTimeoutScheduled = true;
					requestHostTimeout(handleTimeout, startTime$1 - currentTime);
				}
			} else {
				newTask.sortIndex = expirationTime;
				push(taskQueue, newTask);
				if (!isHostCallbackScheduled && !isPerformingWork) {
					isHostCallbackScheduled = true;
					requestHostCallback(flushWork);
				}
			}
			return newTask;
		}
		function unstable_pauseExecution() {}
		function unstable_continueExecution() {
			if (!isHostCallbackScheduled && !isPerformingWork) {
				isHostCallbackScheduled = true;
				requestHostCallback(flushWork);
			}
		}
		function unstable_getFirstCallbackNode() {
			return peek(taskQueue);
		}
		function unstable_cancelCallback(task) {
			task.callback = null;
		}
		function unstable_getCurrentPriorityLevel() {
			return currentPriorityLevel;
		}
		var isMessageLoopRunning = false;
		var scheduledHostCallback = null;
		var taskTimeoutID = -1;
		var frameInterval = frameYieldMs;
		var startTime = -1;
		function shouldYieldToHost() {
			var timeElapsed = exports.unstable_now() - startTime;
			if (timeElapsed < frameInterval) return false;
			return true;
		}
		function requestPaint() {}
		function forceFrameRate(fps) {
			if (fps < 0 || fps > 125) {
				console["error"]("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported");
				return;
			}
			if (fps > 0) frameInterval = Math.floor(1e3 / fps);
else frameInterval = frameYieldMs;
		}
		var performWorkUntilDeadline = function() {
			if (scheduledHostCallback !== null) {
				var currentTime = exports.unstable_now();
				startTime = currentTime;
				var hasTimeRemaining = true;
				var hasMoreWork = true;
				try {
					hasMoreWork = scheduledHostCallback(hasTimeRemaining, currentTime);
				} finally {
					if (hasMoreWork) schedulePerformWorkUntilDeadline();
else {
						isMessageLoopRunning = false;
						scheduledHostCallback = null;
					}
				}
			} else isMessageLoopRunning = false;
		};
		var schedulePerformWorkUntilDeadline;
		if (typeof localSetImmediate === "function") schedulePerformWorkUntilDeadline = function() {
			localSetImmediate(performWorkUntilDeadline);
		};
else if (typeof MessageChannel !== "undefined") {
			var channel = new MessageChannel();
			var port = channel.port2;
			channel.port1.onmessage = performWorkUntilDeadline;
			schedulePerformWorkUntilDeadline = function() {
				port.postMessage(null);
			};
		} else schedulePerformWorkUntilDeadline = function() {
			localSetTimeout(performWorkUntilDeadline, 0);
		};
		function requestHostCallback(callback) {
			scheduledHostCallback = callback;
			if (!isMessageLoopRunning) {
				isMessageLoopRunning = true;
				schedulePerformWorkUntilDeadline();
			}
		}
		function requestHostTimeout(callback, ms) {
			taskTimeoutID = localSetTimeout(function() {
				callback(exports.unstable_now());
			}, ms);
		}
		function cancelHostTimeout() {
			localClearTimeout(taskTimeoutID);
			taskTimeoutID = -1;
		}
		var unstable_requestPaint = requestPaint;
		var unstable_Profiling = null;
		exports.unstable_IdlePriority = IdlePriority;
		exports.unstable_ImmediatePriority = ImmediatePriority;
		exports.unstable_LowPriority = LowPriority;
		exports.unstable_NormalPriority = NormalPriority;
		exports.unstable_Profiling = unstable_Profiling;
		exports.unstable_UserBlockingPriority = UserBlockingPriority;
		exports.unstable_cancelCallback = unstable_cancelCallback;
		exports.unstable_continueExecution = unstable_continueExecution;
		exports.unstable_forceFrameRate = forceFrameRate;
		exports.unstable_getCurrentPriorityLevel = unstable_getCurrentPriorityLevel;
		exports.unstable_getFirstCallbackNode = unstable_getFirstCallbackNode;
		exports.unstable_next = unstable_next;
		exports.unstable_pauseExecution = unstable_pauseExecution;
		exports.unstable_requestPaint = unstable_requestPaint;
		exports.unstable_runWithPriority = unstable_runWithPriority;
		exports.unstable_scheduleCallback = unstable_scheduleCallback;
		exports.unstable_shouldYield = shouldYieldToHost;
		exports.unstable_wrapCallback = unstable_wrapCallback;
		if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== "undefined" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop === "function") __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
	})();
} });

//#endregion
//#region node_modules/scheduler/index.js
var require_scheduler = __commonJS({ "node_modules/scheduler/index.js"(exports, module) {
	module.exports = require_scheduler_development();
} });

//#endregion
//#region node_modules/react-dom/cjs/react-dom.development.js
var require_react_dom_development = __commonJS({ "node_modules/react-dom/cjs/react-dom.development.js"(exports) {
	(function() {
		"use strict";
		if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== "undefined" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart === "function") __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
		var React = require_react();
		var Scheduler = require_scheduler();
		var ReactSharedInternals = React.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
		var suppressWarning = false;
		function setSuppressWarning(newSuppressWarning) {
			suppressWarning = newSuppressWarning;
		}
		function warn(format) {
			if (!suppressWarning) {
				for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) args[_key - 1] = arguments[_key];
				printWarning("warn", format, args);
			}
		}
		function error(format) {
			if (!suppressWarning) {
				for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) args[_key2 - 1] = arguments[_key2];
				printWarning("error", format, args);
			}
		}
		function printWarning(level, format, args) {
			{
				var ReactDebugCurrentFrame$2 = ReactSharedInternals.ReactDebugCurrentFrame;
				var stack = ReactDebugCurrentFrame$2.getStackAddendum();
				if (stack !== "") {
					format += "%s";
					args = args.concat([stack]);
				}
				var argsWithFormat = args.map(function(item) {
					return String(item);
				});
				argsWithFormat.unshift("Warning: " + format);
				Function.prototype.apply.call(console[level], console, argsWithFormat);
			}
		}
		var FunctionComponent = 0;
		var ClassComponent = 1;
		var IndeterminateComponent = 2;
		var HostRoot = 3;
		var HostPortal = 4;
		var HostComponent = 5;
		var HostText = 6;
		var Fragment$2 = 7;
		var Mode = 8;
		var ContextConsumer = 9;
		var ContextProvider = 10;
		var ForwardRef = 11;
		var Profiler = 12;
		var SuspenseComponent = 13;
		var MemoComponent = 14;
		var SimpleMemoComponent = 15;
		var LazyComponent = 16;
		var IncompleteClassComponent = 17;
		var DehydratedFragment = 18;
		var SuspenseListComponent = 19;
		var ScopeComponent = 21;
		var OffscreenComponent = 22;
		var LegacyHiddenComponent = 23;
		var CacheComponent = 24;
		var TracingMarkerComponent = 25;
		var enableClientRenderFallbackOnTextMismatch = true;
		var enableNewReconciler = false;
		var enableLazyContextPropagation = false;
		var enableLegacyHidden = false;
		var enableSuspenseAvoidThisFallback = false;
		var disableCommentsAsDOMContainers = true;
		var enableCustomElementPropertySupport = false;
		var warnAboutStringRefs = true;
		var enableSchedulingProfiler = true;
		var enableProfilerTimer = true;
		var enableProfilerCommitHooks = true;
		var allNativeEvents = new Set();
		/**
		* Mapping from registration name to event name
		*/
		var registrationNameDependencies = {};
		/**
		* Mapping from lowercase registration names to the properly cased version,
		* used to warn in the case of missing event handlers. Available
		* only in true.
		* @type {Object}
		*/
		var possibleRegistrationNames = {};
		function registerTwoPhaseEvent(registrationName, dependencies) {
			registerDirectEvent(registrationName, dependencies);
			registerDirectEvent(registrationName + "Capture", dependencies);
		}
		function registerDirectEvent(registrationName, dependencies) {
			if (registrationNameDependencies[registrationName]) error("EventRegistry: More than one plugin attempted to publish the same registration name, `%s`.", registrationName);
			registrationNameDependencies[registrationName] = dependencies;
			{
				var lowerCasedName = registrationName.toLowerCase();
				possibleRegistrationNames[lowerCasedName] = registrationName;
				if (registrationName === "onDoubleClick") possibleRegistrationNames.ondblclick = registrationName;
			}
			for (var i$1 = 0; i$1 < dependencies.length; i$1++) allNativeEvents.add(dependencies[i$1]);
		}
		var canUseDOM = !!(typeof window !== "undefined" && typeof window.document !== "undefined" && typeof window.document.createElement !== "undefined");
		var hasOwnProperty = Object.prototype.hasOwnProperty;
		function typeName(value) {
			{
				var hasToStringTag = typeof Symbol === "function" && Symbol.toStringTag;
				var type = hasToStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
				return type;
			}
		}
		function willCoercionThrow(value) {
			try {
				testStringCoercion(value);
				return false;
			} catch (e) {
				return true;
			}
		}
		function testStringCoercion(value) {
			return "" + value;
		}
		function checkAttributeStringCoercion(value, attributeName) {
			if (willCoercionThrow(value)) {
				error("The provided `%s` attribute is an unsupported type %s. This value must be coerced to a string before before using it here.", attributeName, typeName(value));
				return testStringCoercion(value);
			}
		}
		function checkKeyStringCoercion(value) {
			if (willCoercionThrow(value)) {
				error("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", typeName(value));
				return testStringCoercion(value);
			}
		}
		function checkPropStringCoercion(value, propName) {
			if (willCoercionThrow(value)) {
				error("The provided `%s` prop is an unsupported type %s. This value must be coerced to a string before before using it here.", propName, typeName(value));
				return testStringCoercion(value);
			}
		}
		function checkCSSPropertyStringCoercion(value, propName) {
			if (willCoercionThrow(value)) {
				error("The provided `%s` CSS property is an unsupported type %s. This value must be coerced to a string before before using it here.", propName, typeName(value));
				return testStringCoercion(value);
			}
		}
		function checkHtmlStringCoercion(value) {
			if (willCoercionThrow(value)) {
				error("The provided HTML markup uses a value of unsupported type %s. This value must be coerced to a string before before using it here.", typeName(value));
				return testStringCoercion(value);
			}
		}
		function checkFormFieldValueStringCoercion(value) {
			if (willCoercionThrow(value)) {
				error("Form field values (value, checked, defaultValue, or defaultChecked props) must be strings, not %s. This value must be coerced to a string before before using it here.", typeName(value));
				return testStringCoercion(value);
			}
		}
		var RESERVED = 0;
		var STRING = 1;
		var BOOLEANISH_STRING = 2;
		var BOOLEAN = 3;
		var OVERLOADED_BOOLEAN = 4;
		var NUMERIC = 5;
		var POSITIVE_NUMERIC = 6;
		var ATTRIBUTE_NAME_START_CHAR = ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD";
		var ATTRIBUTE_NAME_CHAR = ATTRIBUTE_NAME_START_CHAR + "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040";
		var VALID_ATTRIBUTE_NAME_REGEX = new RegExp("^[" + ATTRIBUTE_NAME_START_CHAR + "][" + ATTRIBUTE_NAME_CHAR + "]*$");
		var illegalAttributeNameCache = {};
		var validatedAttributeNameCache = {};
		function isAttributeNameSafe(attributeName) {
			if (hasOwnProperty.call(validatedAttributeNameCache, attributeName)) return true;
			if (hasOwnProperty.call(illegalAttributeNameCache, attributeName)) return false;
			if (VALID_ATTRIBUTE_NAME_REGEX.test(attributeName)) {
				validatedAttributeNameCache[attributeName] = true;
				return true;
			}
			illegalAttributeNameCache[attributeName] = true;
			error("Invalid attribute name: `%s`", attributeName);
			return false;
		}
		function shouldIgnoreAttribute(name, propertyInfo, isCustomComponentTag) {
			if (propertyInfo !== null) return propertyInfo.type === RESERVED;
			if (isCustomComponentTag) return false;
			if (name.length > 2 && (name[0] === "o" || name[0] === "O") && (name[1] === "n" || name[1] === "N")) return true;
			return false;
		}
		function shouldRemoveAttributeWithWarning(name, value, propertyInfo, isCustomComponentTag) {
			if (propertyInfo !== null && propertyInfo.type === RESERVED) return false;
			switch (typeof value) {
				case "function":
				case "symbol": return true;
				case "boolean": {
					if (isCustomComponentTag) return false;
					if (propertyInfo !== null) return !propertyInfo.acceptsBooleans;
else {
						var prefix$2 = name.toLowerCase().slice(0, 5);
						return prefix$2 !== "data-" && prefix$2 !== "aria-";
					}
				}
				default: return false;
			}
		}
		function shouldRemoveAttribute(name, value, propertyInfo, isCustomComponentTag) {
			if (value === null || typeof value === "undefined") return true;
			if (shouldRemoveAttributeWithWarning(name, value, propertyInfo, isCustomComponentTag)) return true;
			if (isCustomComponentTag) return false;
			if (propertyInfo !== null) switch (propertyInfo.type) {
				case BOOLEAN: return !value;
				case OVERLOADED_BOOLEAN: return value === false;
				case NUMERIC: return isNaN(value);
				case POSITIVE_NUMERIC: return isNaN(value) || value < 1;
			}
			return false;
		}
		function getPropertyInfo(name) {
			return properties.hasOwnProperty(name) ? properties[name] : null;
		}
		function PropertyInfoRecord(name, type, mustUseProperty, attributeName, attributeNamespace, sanitizeURL$1, removeEmptyString) {
			this.acceptsBooleans = type === BOOLEANISH_STRING || type === BOOLEAN || type === OVERLOADED_BOOLEAN;
			this.attributeName = attributeName;
			this.attributeNamespace = attributeNamespace;
			this.mustUseProperty = mustUseProperty;
			this.propertyName = name;
			this.type = type;
			this.sanitizeURL = sanitizeURL$1;
			this.removeEmptyString = removeEmptyString;
		}
		var properties = {};
		var reservedProps = [
			"children",
			"dangerouslySetInnerHTML",
			"defaultValue",
			"defaultChecked",
			"innerHTML",
			"suppressContentEditableWarning",
			"suppressHydrationWarning",
			"style"
		];
		reservedProps.forEach(function(name) {
			properties[name] = new PropertyInfoRecord(name, RESERVED, false, name, null, false, false);
		});
		[
			["acceptCharset", "accept-charset"],
			["className", "class"],
			["htmlFor", "for"],
			["httpEquiv", "http-equiv"]
		].forEach(function(_ref) {
			var name = _ref[0], attributeName = _ref[1];
			properties[name] = new PropertyInfoRecord(name, STRING, false, attributeName, null, false, false);
		});
		[
			"contentEditable",
			"draggable",
			"spellCheck",
			"value"
		].forEach(function(name) {
			properties[name] = new PropertyInfoRecord(name, BOOLEANISH_STRING, false, name.toLowerCase(), null, false, false);
		});
		[
			"autoReverse",
			"externalResourcesRequired",
			"focusable",
			"preserveAlpha"
		].forEach(function(name) {
			properties[name] = new PropertyInfoRecord(name, BOOLEANISH_STRING, false, name, null, false, false);
		});
		[
			"allowFullScreen",
			"async",
			"autoFocus",
			"autoPlay",
			"controls",
			"default",
			"defer",
			"disabled",
			"disablePictureInPicture",
			"disableRemotePlayback",
			"formNoValidate",
			"hidden",
			"loop",
			"noModule",
			"noValidate",
			"open",
			"playsInline",
			"readOnly",
			"required",
			"reversed",
			"scoped",
			"seamless",
			"itemScope"
		].forEach(function(name) {
			properties[name] = new PropertyInfoRecord(name, BOOLEAN, false, name.toLowerCase(), null, false, false);
		});
		[
			"checked",
			"multiple",
			"muted",
			"selected"
		].forEach(function(name) {
			properties[name] = new PropertyInfoRecord(name, BOOLEAN, true, name, null, false, false);
		});
		["capture", "download"].forEach(function(name) {
			properties[name] = new PropertyInfoRecord(name, OVERLOADED_BOOLEAN, false, name, null, false, false);
		});
		[
			"cols",
			"rows",
			"size",
			"span"
		].forEach(function(name) {
			properties[name] = new PropertyInfoRecord(name, POSITIVE_NUMERIC, false, name, null, false, false);
		});
		["rowSpan", "start"].forEach(function(name) {
			properties[name] = new PropertyInfoRecord(name, NUMERIC, false, name.toLowerCase(), null, false, false);
		});
		var CAMELIZE = /[\-\:]([a-z])/g;
		var capitalize = function(token) {
			return token[1].toUpperCase();
		};
		[
			"accent-height",
			"alignment-baseline",
			"arabic-form",
			"baseline-shift",
			"cap-height",
			"clip-path",
			"clip-rule",
			"color-interpolation",
			"color-interpolation-filters",
			"color-profile",
			"color-rendering",
			"dominant-baseline",
			"enable-background",
			"fill-opacity",
			"fill-rule",
			"flood-color",
			"flood-opacity",
			"font-family",
			"font-size",
			"font-size-adjust",
			"font-stretch",
			"font-style",
			"font-variant",
			"font-weight",
			"glyph-name",
			"glyph-orientation-horizontal",
			"glyph-orientation-vertical",
			"horiz-adv-x",
			"horiz-origin-x",
			"image-rendering",
			"letter-spacing",
			"lighting-color",
			"marker-end",
			"marker-mid",
			"marker-start",
			"overline-position",
			"overline-thickness",
			"paint-order",
			"panose-1",
			"pointer-events",
			"rendering-intent",
			"shape-rendering",
			"stop-color",
			"stop-opacity",
			"strikethrough-position",
			"strikethrough-thickness",
			"stroke-dasharray",
			"stroke-dashoffset",
			"stroke-linecap",
			"stroke-linejoin",
			"stroke-miterlimit",
			"stroke-opacity",
			"stroke-width",
			"text-anchor",
			"text-decoration",
			"text-rendering",
			"underline-position",
			"underline-thickness",
			"unicode-bidi",
			"unicode-range",
			"units-per-em",
			"v-alphabetic",
			"v-hanging",
			"v-ideographic",
			"v-mathematical",
			"vector-effect",
			"vert-adv-y",
			"vert-origin-x",
			"vert-origin-y",
			"word-spacing",
			"writing-mode",
			"xmlns:xlink",
			"x-height"
		].forEach(function(attributeName) {
			var name = attributeName.replace(CAMELIZE, capitalize);
			properties[name] = new PropertyInfoRecord(name, STRING, false, attributeName, null, false, false);
		});
		[
			"xlink:actuate",
			"xlink:arcrole",
			"xlink:role",
			"xlink:show",
			"xlink:title",
			"xlink:type"
		].forEach(function(attributeName) {
			var name = attributeName.replace(CAMELIZE, capitalize);
			properties[name] = new PropertyInfoRecord(name, STRING, false, attributeName, "http://www.w3.org/1999/xlink", false, false);
		});
		[
			"xml:base",
			"xml:lang",
			"xml:space"
		].forEach(function(attributeName) {
			var name = attributeName.replace(CAMELIZE, capitalize);
			properties[name] = new PropertyInfoRecord(name, STRING, false, attributeName, "http://www.w3.org/XML/1998/namespace", false, false);
		});
		["tabIndex", "crossOrigin"].forEach(function(attributeName) {
			properties[attributeName] = new PropertyInfoRecord(attributeName, STRING, false, attributeName.toLowerCase(), null, false, false);
		});
		var xlinkHref = "xlinkHref";
		properties[xlinkHref] = new PropertyInfoRecord("xlinkHref", STRING, false, "xlink:href", "http://www.w3.org/1999/xlink", true, false);
		[
			"src",
			"href",
			"action",
			"formAction"
		].forEach(function(attributeName) {
			properties[attributeName] = new PropertyInfoRecord(attributeName, STRING, false, attributeName.toLowerCase(), null, true, true);
		});
		var isJavaScriptProtocol = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*\:/i;
		var didWarn = false;
		function sanitizeURL(url) {
			if (!didWarn && isJavaScriptProtocol.test(url)) {
				didWarn = true;
				error("A future version of React will block javascript: URLs as a security precaution. Use event handlers instead if you can. If you need to generate unsafe HTML try using dangerouslySetInnerHTML instead. React was passed %s.", JSON.stringify(url));
			}
		}
		/**
		* Get the value for a property on a node. Only used in DEV for SSR validation.
		* The "expected" argument is used as a hint of what the expected value is.
		* Some properties have multiple equivalent values.
		*/
		function getValueForProperty(node, name, expected, propertyInfo) {
			if (propertyInfo.mustUseProperty) {
				var propertyName = propertyInfo.propertyName;
				return node[propertyName];
			} else {
				checkAttributeStringCoercion(expected, name);
				if (propertyInfo.sanitizeURL) sanitizeURL("" + expected);
				var attributeName = propertyInfo.attributeName;
				var stringValue = null;
				if (propertyInfo.type === OVERLOADED_BOOLEAN) {
					if (node.hasAttribute(attributeName)) {
						var value = node.getAttribute(attributeName);
						if (value === "") return true;
						if (shouldRemoveAttribute(name, expected, propertyInfo, false)) return value;
						if (value === "" + expected) return expected;
						return value;
					}
				} else if (node.hasAttribute(attributeName)) {
					if (shouldRemoveAttribute(name, expected, propertyInfo, false)) return node.getAttribute(attributeName);
					if (propertyInfo.type === BOOLEAN) return expected;
					stringValue = node.getAttribute(attributeName);
				}
				if (shouldRemoveAttribute(name, expected, propertyInfo, false)) return stringValue === null ? expected : stringValue;
else if (stringValue === "" + expected) return expected;
else return stringValue;
			}
		}
		/**
		* Get the value for a attribute on a node. Only used in DEV for SSR validation.
		* The third argument is used as a hint of what the expected value is. Some
		* attributes have multiple equivalent values.
		*/
		function getValueForAttribute(node, name, expected, isCustomComponentTag) {
			{
				if (!isAttributeNameSafe(name)) return;
				if (!node.hasAttribute(name)) return expected === undefined ? undefined : null;
				var value = node.getAttribute(name);
				checkAttributeStringCoercion(expected, name);
				if (value === "" + expected) return expected;
				return value;
			}
		}
		/**
		* Sets the value for a property on a node.
		*
		* @param {DOMElement} node
		* @param {string} name
		* @param {*} value
		*/
		function setValueForProperty(node, name, value, isCustomComponentTag) {
			var propertyInfo = getPropertyInfo(name);
			if (shouldIgnoreAttribute(name, propertyInfo, isCustomComponentTag)) return;
			if (shouldRemoveAttribute(name, value, propertyInfo, isCustomComponentTag)) value = null;
			if (isCustomComponentTag || propertyInfo === null) {
				if (isAttributeNameSafe(name)) {
					var _attributeName = name;
					if (value === null) node.removeAttribute(_attributeName);
else {
						checkAttributeStringCoercion(value, name);
						node.setAttribute(_attributeName, "" + value);
					}
				}
				return;
			}
			var mustUseProperty = propertyInfo.mustUseProperty;
			if (mustUseProperty) {
				var propertyName = propertyInfo.propertyName;
				if (value === null) {
					var type = propertyInfo.type;
					node[propertyName] = type === BOOLEAN ? false : "";
				} else node[propertyName] = value;
				return;
			}
			var attributeName = propertyInfo.attributeName, attributeNamespace = propertyInfo.attributeNamespace;
			if (value === null) node.removeAttribute(attributeName);
else {
				var _type = propertyInfo.type;
				var attributeValue;
				if (_type === BOOLEAN || _type === OVERLOADED_BOOLEAN && value === true) attributeValue = "";
else {
					{
						checkAttributeStringCoercion(value, attributeName);
						attributeValue = "" + value;
					}
					if (propertyInfo.sanitizeURL) sanitizeURL(attributeValue.toString());
				}
				if (attributeNamespace) node.setAttributeNS(attributeNamespace, attributeName, attributeValue);
else node.setAttribute(attributeName, attributeValue);
			}
		}
		var REACT_ELEMENT_TYPE = Symbol.for("react.element");
		var REACT_PORTAL_TYPE = Symbol.for("react.portal");
		var REACT_FRAGMENT_TYPE = Symbol.for("react.fragment");
		var REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode");
		var REACT_PROFILER_TYPE = Symbol.for("react.profiler");
		var REACT_PROVIDER_TYPE = Symbol.for("react.provider");
		var REACT_CONTEXT_TYPE = Symbol.for("react.context");
		var REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref");
		var REACT_SUSPENSE_TYPE = Symbol.for("react.suspense");
		var REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list");
		var REACT_MEMO_TYPE = Symbol.for("react.memo");
		var REACT_LAZY_TYPE = Symbol.for("react.lazy");
		var REACT_SCOPE_TYPE = Symbol.for("react.scope");
		var REACT_DEBUG_TRACING_MODE_TYPE = Symbol.for("react.debug_trace_mode");
		var REACT_OFFSCREEN_TYPE = Symbol.for("react.offscreen");
		var REACT_LEGACY_HIDDEN_TYPE = Symbol.for("react.legacy_hidden");
		var REACT_CACHE_TYPE = Symbol.for("react.cache");
		var REACT_TRACING_MARKER_TYPE = Symbol.for("react.tracing_marker");
		var MAYBE_ITERATOR_SYMBOL = Symbol.iterator;
		var FAUX_ITERATOR_SYMBOL = "@@iterator";
		function getIteratorFn(maybeIterable) {
			if (maybeIterable === null || typeof maybeIterable !== "object") return null;
			var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];
			if (typeof maybeIterator === "function") return maybeIterator;
			return null;
		}
		var assign = Object.assign;
		var disabledDepth = 0;
		var prevLog;
		var prevInfo;
		var prevWarn;
		var prevError;
		var prevGroup;
		var prevGroupCollapsed;
		var prevGroupEnd;
		function disabledLog() {}
		disabledLog.__reactDisabledLog = true;
		function disableLogs() {
			{
				if (disabledDepth === 0) {
					prevLog = console.log;
					prevInfo = console.info;
					prevWarn = console.warn;
					prevError = console.error;
					prevGroup = console.group;
					prevGroupCollapsed = console.groupCollapsed;
					prevGroupEnd = console.groupEnd;
					var props = {
						configurable: true,
						enumerable: true,
						value: disabledLog,
						writable: true
					};
					Object.defineProperties(console, {
						info: props,
						log: props,
						warn: props,
						error: props,
						group: props,
						groupCollapsed: props,
						groupEnd: props
					});
				}
				disabledDepth++;
			}
		}
		function reenableLogs() {
			{
				disabledDepth--;
				if (disabledDepth === 0) {
					var props = {
						configurable: true,
						enumerable: true,
						writable: true
					};
					Object.defineProperties(console, {
						log: assign({}, props, { value: prevLog }),
						info: assign({}, props, { value: prevInfo }),
						warn: assign({}, props, { value: prevWarn }),
						error: assign({}, props, { value: prevError }),
						group: assign({}, props, { value: prevGroup }),
						groupCollapsed: assign({}, props, { value: prevGroupCollapsed }),
						groupEnd: assign({}, props, { value: prevGroupEnd })
					});
				}
				if (disabledDepth < 0) error("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
			}
		}
		var ReactCurrentDispatcher = ReactSharedInternals.ReactCurrentDispatcher;
		var prefix$1;
		function describeBuiltInComponentFrame(name, source, ownerFn) {
			{
				if (prefix$1 === undefined) try {
					throw Error();
				} catch (x) {
					var match = x.stack.trim().match(/\n( *(at )?)/);
					prefix$1 = match && match[1] || "";
				}
				return "\n" + prefix$1 + name;
			}
		}
		var reentry = false;
		var componentFrameCache;
		{
			var PossiblyWeakMap = typeof WeakMap === "function" ? WeakMap : Map;
			componentFrameCache = new PossiblyWeakMap();
		}
		function describeNativeComponentFrame(fn, construct) {
			if (!fn || reentry) return "";
			{
				var frame = componentFrameCache.get(fn);
				if (frame !== undefined) return frame;
			}
			var control;
			reentry = true;
			var previousPrepareStackTrace = Error.prepareStackTrace;
			Error.prepareStackTrace = undefined;
			var previousDispatcher;
			{
				previousDispatcher = ReactCurrentDispatcher.current;
				ReactCurrentDispatcher.current = null;
				disableLogs();
			}
			try {
				if (construct) {
					var Fake = function() {
						throw Error();
					};
					Object.defineProperty(Fake.prototype, "props", { set: function() {
						throw Error();
					} });
					if (typeof Reflect === "object" && Reflect.construct) {
						try {
							Reflect.construct(Fake, []);
						} catch (x) {
							control = x;
						}
						Reflect.construct(fn, [], Fake);
					} else {
						try {
							Fake.call();
						} catch (x) {
							control = x;
						}
						fn.call(Fake.prototype);
					}
				} else {
					try {
						throw Error();
					} catch (x) {
						control = x;
					}
					fn();
				}
			} catch (sample) {
				if (sample && control && typeof sample.stack === "string") {
					var sampleLines = sample.stack.split("\n");
					var controlLines = control.stack.split("\n");
					var s = sampleLines.length - 1;
					var c = controlLines.length - 1;
					while (s >= 1 && c >= 0 && sampleLines[s] !== controlLines[c]) c--;
					for (; s >= 1 && c >= 0; s--, c--) if (sampleLines[s] !== controlLines[c]) {
						if (s !== 1 || c !== 1) do {
							s--;
							c--;
							if (c < 0 || sampleLines[s] !== controlLines[c]) {
								var _frame = "\n" + sampleLines[s].replace(" at new ", " at ");
								if (fn.displayName && _frame.includes("<anonymous>")) _frame = _frame.replace("<anonymous>", fn.displayName);
								if (typeof fn === "function") componentFrameCache.set(fn, _frame);
								return _frame;
							}
						} while (s >= 1 && c >= 0);
						break;
					}
				}
			} finally {
				reentry = false;
				{
					ReactCurrentDispatcher.current = previousDispatcher;
					reenableLogs();
				}
				Error.prepareStackTrace = previousPrepareStackTrace;
			}
			var name = fn ? fn.displayName || fn.name : "";
			var syntheticFrame = name ? describeBuiltInComponentFrame(name) : "";
			if (typeof fn === "function") componentFrameCache.set(fn, syntheticFrame);
			return syntheticFrame;
		}
		function describeClassComponentFrame(ctor, source, ownerFn) {
			return describeNativeComponentFrame(ctor, true);
		}
		function describeFunctionComponentFrame(fn, source, ownerFn) {
			return describeNativeComponentFrame(fn, false);
		}
		function shouldConstruct(Component) {
			var prototype = Component.prototype;
			return !!(prototype && prototype.isReactComponent);
		}
		function describeUnknownElementTypeFrameInDEV(type, source, ownerFn) {
			if (type == null) return "";
			if (typeof type === "function") return describeNativeComponentFrame(type, shouldConstruct(type));
			if (typeof type === "string") return describeBuiltInComponentFrame(type);
			switch (type) {
				case REACT_SUSPENSE_TYPE: return describeBuiltInComponentFrame("Suspense");
				case REACT_SUSPENSE_LIST_TYPE: return describeBuiltInComponentFrame("SuspenseList");
			}
			if (typeof type === "object") switch (type.$$typeof) {
				case REACT_FORWARD_REF_TYPE: return describeFunctionComponentFrame(type.render);
				case REACT_MEMO_TYPE: return describeUnknownElementTypeFrameInDEV(type.type, source, ownerFn);
				case REACT_LAZY_TYPE: {
					var lazyComponent = type;
					var payload = lazyComponent._payload;
					var init = lazyComponent._init;
					try {
						return describeUnknownElementTypeFrameInDEV(init(payload), source, ownerFn);
					} catch (x) {}
				}
			}
			return "";
		}
		function describeFiber(fiber) {
			var owner = fiber._debugOwner ? fiber._debugOwner.type : null;
			var source = fiber._debugSource;
			switch (fiber.tag) {
				case HostComponent: return describeBuiltInComponentFrame(fiber.type);
				case LazyComponent: return describeBuiltInComponentFrame("Lazy");
				case SuspenseComponent: return describeBuiltInComponentFrame("Suspense");
				case SuspenseListComponent: return describeBuiltInComponentFrame("SuspenseList");
				case FunctionComponent:
				case IndeterminateComponent:
				case SimpleMemoComponent: return describeFunctionComponentFrame(fiber.type);
				case ForwardRef: return describeFunctionComponentFrame(fiber.type.render);
				case ClassComponent: return describeClassComponentFrame(fiber.type);
				default: return "";
			}
		}
		function getStackByFiberInDevAndProd(workInProgress$1) {
			try {
				var info = "";
				var node = workInProgress$1;
				do {
					info += describeFiber(node);
					node = node.return;
				} while (node);
				return info;
			} catch (x) {
				return "\nError generating stack: " + x.message + "\n" + x.stack;
			}
		}
		function getWrappedName(outerType, innerType, wrapperName) {
			var displayName = outerType.displayName;
			if (displayName) return displayName;
			var functionName = innerType.displayName || innerType.name || "";
			return functionName !== "" ? wrapperName + "(" + functionName + ")" : wrapperName;
		}
		function getContextName(type) {
			return type.displayName || "Context";
		}
		function getComponentNameFromType(type) {
			if (type == null) return null;
			if (typeof type.tag === "number") error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue.");
			if (typeof type === "function") return type.displayName || type.name || null;
			if (typeof type === "string") return type;
			switch (type) {
				case REACT_FRAGMENT_TYPE: return "Fragment";
				case REACT_PORTAL_TYPE: return "Portal";
				case REACT_PROFILER_TYPE: return "Profiler";
				case REACT_STRICT_MODE_TYPE: return "StrictMode";
				case REACT_SUSPENSE_TYPE: return "Suspense";
				case REACT_SUSPENSE_LIST_TYPE: return "SuspenseList";
			}
			if (typeof type === "object") switch (type.$$typeof) {
				case REACT_CONTEXT_TYPE:
					var context = type;
					return getContextName(context) + ".Consumer";
				case REACT_PROVIDER_TYPE:
					var provider = type;
					return getContextName(provider._context) + ".Provider";
				case REACT_FORWARD_REF_TYPE: return getWrappedName(type, type.render, "ForwardRef");
				case REACT_MEMO_TYPE:
					var outerName = type.displayName || null;
					if (outerName !== null) return outerName;
					return getComponentNameFromType(type.type) || "Memo";
				case REACT_LAZY_TYPE: {
					var lazyComponent = type;
					var payload = lazyComponent._payload;
					var init = lazyComponent._init;
					try {
						return getComponentNameFromType(init(payload));
					} catch (x) {
						return null;
					}
				}
			}
			return null;
		}
		function getWrappedName$1(outerType, innerType, wrapperName) {
			var functionName = innerType.displayName || innerType.name || "";
			return outerType.displayName || (functionName !== "" ? wrapperName + "(" + functionName + ")" : wrapperName);
		}
		function getContextName$1(type) {
			return type.displayName || "Context";
		}
		function getComponentNameFromFiber(fiber) {
			var tag = fiber.tag, type = fiber.type;
			switch (tag) {
				case CacheComponent: return "Cache";
				case ContextConsumer:
					var context = type;
					return getContextName$1(context) + ".Consumer";
				case ContextProvider:
					var provider = type;
					return getContextName$1(provider._context) + ".Provider";
				case DehydratedFragment: return "DehydratedFragment";
				case ForwardRef: return getWrappedName$1(type, type.render, "ForwardRef");
				case Fragment$2: return "Fragment";
				case HostComponent: return type;
				case HostPortal: return "Portal";
				case HostRoot: return "Root";
				case HostText: return "Text";
				case LazyComponent: return getComponentNameFromType(type);
				case Mode:
					if (type === REACT_STRICT_MODE_TYPE) return "StrictMode";
					return "Mode";
				case OffscreenComponent: return "Offscreen";
				case Profiler: return "Profiler";
				case ScopeComponent: return "Scope";
				case SuspenseComponent: return "Suspense";
				case SuspenseListComponent: return "SuspenseList";
				case TracingMarkerComponent: return "TracingMarker";
				case ClassComponent:
				case FunctionComponent:
				case IncompleteClassComponent:
				case IndeterminateComponent:
				case MemoComponent:
				case SimpleMemoComponent:
					if (typeof type === "function") return type.displayName || type.name || null;
					if (typeof type === "string") return type;
					break;
			}
			return null;
		}
		var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
		var current = null;
		var isRendering = false;
		function getCurrentFiberOwnerNameInDevOrNull() {
			{
				if (current === null) return null;
				var owner = current._debugOwner;
				if (owner !== null && typeof owner !== "undefined") return getComponentNameFromFiber(owner);
			}
			return null;
		}
		function getCurrentFiberStackInDev() {
			{
				if (current === null) return "";
				return getStackByFiberInDevAndProd(current);
			}
		}
		function resetCurrentFiber() {
			{
				ReactDebugCurrentFrame.getCurrentStack = null;
				current = null;
				isRendering = false;
			}
		}
		function setCurrentFiber(fiber) {
			{
				ReactDebugCurrentFrame.getCurrentStack = fiber === null ? null : getCurrentFiberStackInDev;
				current = fiber;
				isRendering = false;
			}
		}
		function getCurrentFiber() {
			return current;
		}
		function setIsRendering(rendering) {
			isRendering = rendering;
		}
		function toString(value) {
			return "" + value;
		}
		function getToStringValue(value) {
			switch (typeof value) {
				case "boolean":
				case "number":
				case "string":
				case "undefined": return value;
				case "object":
					checkFormFieldValueStringCoercion(value);
					return value;
				default: return "";
			}
		}
		var hasReadOnlyValue = {
			button: true,
			checkbox: true,
			image: true,
			hidden: true,
			radio: true,
			reset: true,
			submit: true
		};
		function checkControlledValueProps(tagName, props) {
			{
				if (!(hasReadOnlyValue[props.type] || props.onChange || props.onInput || props.readOnly || props.disabled || props.value == null)) error("You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`.");
				if (!(props.onChange || props.readOnly || props.disabled || props.checked == null)) error("You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`.");
			}
		}
		function isCheckable(elem) {
			var type = elem.type;
			var nodeName = elem.nodeName;
			return nodeName && nodeName.toLowerCase() === "input" && (type === "checkbox" || type === "radio");
		}
		function getTracker(node) {
			return node._valueTracker;
		}
		function detachTracker(node) {
			node._valueTracker = null;
		}
		function getValueFromNode(node) {
			var value = "";
			if (!node) return value;
			if (isCheckable(node)) value = node.checked ? "true" : "false";
else value = node.value;
			return value;
		}
		function trackValueOnNode(node) {
			var valueField = isCheckable(node) ? "checked" : "value";
			var descriptor = Object.getOwnPropertyDescriptor(node.constructor.prototype, valueField);
			checkFormFieldValueStringCoercion(node[valueField]);
			var currentValue = "" + node[valueField];
			if (node.hasOwnProperty(valueField) || typeof descriptor === "undefined" || typeof descriptor.get !== "function" || typeof descriptor.set !== "function") return;
			var get$1 = descriptor.get, set$1 = descriptor.set;
			Object.defineProperty(node, valueField, {
				configurable: true,
				get: function() {
					return get$1.call(this);
				},
				set: function(value) {
					checkFormFieldValueStringCoercion(value);
					currentValue = "" + value;
					set$1.call(this, value);
				}
			});
			Object.defineProperty(node, valueField, { enumerable: descriptor.enumerable });
			var tracker = {
				getValue: function() {
					return currentValue;
				},
				setValue: function(value) {
					checkFormFieldValueStringCoercion(value);
					currentValue = "" + value;
				},
				stopTracking: function() {
					detachTracker(node);
					delete node[valueField];
				}
			};
			return tracker;
		}
		function track(node) {
			if (getTracker(node)) return;
			node._valueTracker = trackValueOnNode(node);
		}
		function updateValueIfChanged(node) {
			if (!node) return false;
			var tracker = getTracker(node);
			if (!tracker) return true;
			var lastValue = tracker.getValue();
			var nextValue = getValueFromNode(node);
			if (nextValue !== lastValue) {
				tracker.setValue(nextValue);
				return true;
			}
			return false;
		}
		function getActiveElement(doc) {
			doc = doc || (typeof document !== "undefined" ? document : undefined);
			if (typeof doc === "undefined") return null;
			try {
				return doc.activeElement || doc.body;
			} catch (e) {
				return doc.body;
			}
		}
		var didWarnValueDefaultValue = false;
		var didWarnCheckedDefaultChecked = false;
		var didWarnControlledToUncontrolled = false;
		var didWarnUncontrolledToControlled = false;
		function isControlled(props) {
			var usesChecked = props.type === "checkbox" || props.type === "radio";
			return usesChecked ? props.checked != null : props.value != null;
		}
		/**
		* Implements an <input> host component that allows setting these optional
		* props: `checked`, `value`, `defaultChecked`, and `defaultValue`.
		*
		* If `checked` or `value` are not supplied (or null/undefined), user actions
		* that affect the checked state or value will trigger updates to the element.
		*
		* If they are supplied (and not null/undefined), the rendered element will not
		* trigger updates to the element. Instead, the props must change in order for
		* the rendered element to be updated.
		*
		* The rendered element will be initialized as unchecked (or `defaultChecked`)
		* with an empty value (or `defaultValue`).
		*
		* See http://www.w3.org/TR/2012/WD-html5-20121025/the-input-element.html
		*/
		function getHostProps(element, props) {
			var node = element;
			var checked = props.checked;
			var hostProps = assign({}, props, {
				defaultChecked: undefined,
				defaultValue: undefined,
				value: undefined,
				checked: checked != null ? checked : node._wrapperState.initialChecked
			});
			return hostProps;
		}
		function initWrapperState(element, props) {
			{
				checkControlledValueProps("input", props);
				if (props.checked !== undefined && props.defaultChecked !== undefined && !didWarnCheckedDefaultChecked) {
					error("%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", getCurrentFiberOwnerNameInDevOrNull() || "A component", props.type);
					didWarnCheckedDefaultChecked = true;
				}
				if (props.value !== undefined && props.defaultValue !== undefined && !didWarnValueDefaultValue) {
					error("%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", getCurrentFiberOwnerNameInDevOrNull() || "A component", props.type);
					didWarnValueDefaultValue = true;
				}
			}
			var node = element;
			var defaultValue = props.defaultValue == null ? "" : props.defaultValue;
			node._wrapperState = {
				initialChecked: props.checked != null ? props.checked : props.defaultChecked,
				initialValue: getToStringValue(props.value != null ? props.value : defaultValue),
				controlled: isControlled(props)
			};
		}
		function updateChecked(element, props) {
			var node = element;
			var checked = props.checked;
			if (checked != null) setValueForProperty(node, "checked", checked, false);
		}
		function updateWrapper(element, props) {
			var node = element;
			{
				var controlled = isControlled(props);
				if (!node._wrapperState.controlled && controlled && !didWarnUncontrolledToControlled) {
					error("A component is changing an uncontrolled input to be controlled. This is likely caused by the value changing from undefined to a defined value, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components");
					didWarnUncontrolledToControlled = true;
				}
				if (node._wrapperState.controlled && !controlled && !didWarnControlledToUncontrolled) {
					error("A component is changing a controlled input to be uncontrolled. This is likely caused by the value changing from a defined to undefined, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components");
					didWarnControlledToUncontrolled = true;
				}
			}
			updateChecked(element, props);
			var value = getToStringValue(props.value);
			var type = props.type;
			if (value != null) {
				if (type === "number") {
					if (value === 0 && node.value === "" || node.value != value) node.value = toString(value);
				} else if (node.value !== toString(value)) node.value = toString(value);
			} else if (type === "submit" || type === "reset") {
				node.removeAttribute("value");
				return;
			}
			if (props.hasOwnProperty("value")) setDefaultValue(node, props.type, value);
else if (props.hasOwnProperty("defaultValue")) setDefaultValue(node, props.type, getToStringValue(props.defaultValue));
			if (props.checked == null && props.defaultChecked != null) node.defaultChecked = !!props.defaultChecked;
		}
		function postMountWrapper(element, props, isHydrating$1) {
			var node = element;
			if (props.hasOwnProperty("value") || props.hasOwnProperty("defaultValue")) {
				var type = props.type;
				var isButton = type === "submit" || type === "reset";
				if (isButton && (props.value === undefined || props.value === null)) return;
				var initialValue = toString(node._wrapperState.initialValue);
				if (!isHydrating$1) {
					if (initialValue !== node.value) node.value = initialValue;
				}
				node.defaultValue = initialValue;
			}
			var name = node.name;
			if (name !== "") node.name = "";
			{
				node.defaultChecked = !node.defaultChecked;
				node.defaultChecked = !!node._wrapperState.initialChecked;
			}
			if (name !== "") node.name = name;
		}
		function restoreControlledState(element, props) {
			var node = element;
			updateWrapper(node, props);
			updateNamedCousins(node, props);
		}
		function updateNamedCousins(rootNode, props) {
			var name = props.name;
			if (props.type === "radio" && name != null) {
				var queryRoot = rootNode;
				while (queryRoot.parentNode) queryRoot = queryRoot.parentNode;
				checkAttributeStringCoercion(name, "name");
				var group = queryRoot.querySelectorAll("input[name=" + JSON.stringify("" + name) + "][type=\"radio\"]");
				for (var i$1 = 0; i$1 < group.length; i$1++) {
					var otherNode = group[i$1];
					if (otherNode === rootNode || otherNode.form !== rootNode.form) continue;
					var otherProps = getFiberCurrentPropsFromNode(otherNode);
					if (!otherProps) throw new Error("ReactDOMInput: Mixing React and non-React radio inputs with the same `name` is not supported.");
					updateValueIfChanged(otherNode);
					updateWrapper(otherNode, otherProps);
				}
			}
		}
		function setDefaultValue(node, type, value) {
			if (type !== "number" || getActiveElement(node.ownerDocument) !== node) {
				if (value == null) node.defaultValue = toString(node._wrapperState.initialValue);
else if (node.defaultValue !== toString(value)) node.defaultValue = toString(value);
			}
		}
		var didWarnSelectedSetOnOption = false;
		var didWarnInvalidChild = false;
		var didWarnInvalidInnerHTML = false;
		/**
		* Implements an <option> host component that warns when `selected` is set.
		*/
		function validateProps(element, props) {
			{
				if (props.value == null) {
					if (typeof props.children === "object" && props.children !== null) React.Children.forEach(props.children, function(child) {
						if (child == null) return;
						if (typeof child === "string" || typeof child === "number") return;
						if (!didWarnInvalidChild) {
							didWarnInvalidChild = true;
							error("Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>.");
						}
					});
else if (props.dangerouslySetInnerHTML != null) {
						if (!didWarnInvalidInnerHTML) {
							didWarnInvalidInnerHTML = true;
							error("Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected.");
						}
					}
				}
				if (props.selected != null && !didWarnSelectedSetOnOption) {
					error("Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>.");
					didWarnSelectedSetOnOption = true;
				}
			}
		}
		function postMountWrapper$1(element, props) {
			if (props.value != null) element.setAttribute("value", toString(getToStringValue(props.value)));
		}
		var isArrayImpl = Array.isArray;
		function isArray(a) {
			return isArrayImpl(a);
		}
		var didWarnValueDefaultValue$1;
		didWarnValueDefaultValue$1 = false;
		function getDeclarationErrorAddendum() {
			var ownerName = getCurrentFiberOwnerNameInDevOrNull();
			if (ownerName) return "\n\nCheck the render method of `" + ownerName + "`.";
			return "";
		}
		var valuePropNames = ["value", "defaultValue"];
		/**
		* Validation function for `value` and `defaultValue`.
		*/
		function checkSelectPropTypes(props) {
			{
				checkControlledValueProps("select", props);
				for (var i$1 = 0; i$1 < valuePropNames.length; i$1++) {
					var propName = valuePropNames[i$1];
					if (props[propName] == null) continue;
					var propNameIsArray = isArray(props[propName]);
					if (props.multiple && !propNameIsArray) error("The `%s` prop supplied to <select> must be an array if `multiple` is true.%s", propName, getDeclarationErrorAddendum());
else if (!props.multiple && propNameIsArray) error("The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.%s", propName, getDeclarationErrorAddendum());
				}
			}
		}
		function updateOptions(node, multiple, propValue, setDefaultSelected) {
			var options$1 = node.options;
			if (multiple) {
				var selectedValues = propValue;
				var selectedValue = {};
				for (var i$1 = 0; i$1 < selectedValues.length; i$1++) selectedValue["$" + selectedValues[i$1]] = true;
				for (var _i = 0; _i < options$1.length; _i++) {
					var selected = selectedValue.hasOwnProperty("$" + options$1[_i].value);
					if (options$1[_i].selected !== selected) options$1[_i].selected = selected;
					if (selected && setDefaultSelected) options$1[_i].defaultSelected = true;
				}
			} else {
				var _selectedValue = toString(getToStringValue(propValue));
				var defaultSelected = null;
				for (var _i2 = 0; _i2 < options$1.length; _i2++) {
					if (options$1[_i2].value === _selectedValue) {
						options$1[_i2].selected = true;
						if (setDefaultSelected) options$1[_i2].defaultSelected = true;
						return;
					}
					if (defaultSelected === null && !options$1[_i2].disabled) defaultSelected = options$1[_i2];
				}
				if (defaultSelected !== null) defaultSelected.selected = true;
			}
		}
		/**
		* Implements a <select> host component that allows optionally setting the
		* props `value` and `defaultValue`. If `multiple` is false, the prop must be a
		* stringable. If `multiple` is true, the prop must be an array of stringables.
		*
		* If `value` is not supplied (or null/undefined), user actions that change the
		* selected option will trigger updates to the rendered options.
		*
		* If it is supplied (and not null/undefined), the rendered options will not
		* update in response to user actions. Instead, the `value` prop must change in
		* order for the rendered options to update.
		*
		* If `defaultValue` is provided, any options with the supplied values will be
		* selected.
		*/
		function getHostProps$1(element, props) {
			return assign({}, props, { value: undefined });
		}
		function initWrapperState$1(element, props) {
			var node = element;
			checkSelectPropTypes(props);
			node._wrapperState = { wasMultiple: !!props.multiple };
			if (props.value !== undefined && props.defaultValue !== undefined && !didWarnValueDefaultValue$1) {
				error("Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://reactjs.org/link/controlled-components");
				didWarnValueDefaultValue$1 = true;
			}
		}
		function postMountWrapper$2(element, props) {
			var node = element;
			node.multiple = !!props.multiple;
			var value = props.value;
			if (value != null) updateOptions(node, !!props.multiple, value, false);
else if (props.defaultValue != null) updateOptions(node, !!props.multiple, props.defaultValue, true);
		}
		function postUpdateWrapper(element, props) {
			var node = element;
			var wasMultiple = node._wrapperState.wasMultiple;
			node._wrapperState.wasMultiple = !!props.multiple;
			var value = props.value;
			if (value != null) updateOptions(node, !!props.multiple, value, false);
else if (wasMultiple !== !!props.multiple) if (props.defaultValue != null) updateOptions(node, !!props.multiple, props.defaultValue, true);
else updateOptions(node, !!props.multiple, props.multiple ? [] : "", false);
		}
		function restoreControlledState$1(element, props) {
			var node = element;
			var value = props.value;
			if (value != null) updateOptions(node, !!props.multiple, value, false);
		}
		var didWarnValDefaultVal = false;
		/**
		* Implements a <textarea> host component that allows setting `value`, and
		* `defaultValue`. This differs from the traditional DOM API because value is
		* usually set as PCDATA children.
		*
		* If `value` is not supplied (or null/undefined), user actions that affect the
		* value will trigger updates to the element.
		*
		* If `value` is supplied (and not null/undefined), the rendered element will
		* not trigger updates to the element. Instead, the `value` prop must change in
		* order for the rendered element to be updated.
		*
		* The rendered element will be initialized with an empty value, the prop
		* `defaultValue` if specified, or the children content (deprecated).
		*/
		function getHostProps$2(element, props) {
			var node = element;
			if (props.dangerouslySetInnerHTML != null) throw new Error("`dangerouslySetInnerHTML` does not make sense on <textarea>.");
			var hostProps = assign({}, props, {
				value: undefined,
				defaultValue: undefined,
				children: toString(node._wrapperState.initialValue)
			});
			return hostProps;
		}
		function initWrapperState$2(element, props) {
			var node = element;
			{
				checkControlledValueProps("textarea", props);
				if (props.value !== undefined && props.defaultValue !== undefined && !didWarnValDefaultVal) {
					error("%s contains a textarea with both value and defaultValue props. Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://reactjs.org/link/controlled-components", getCurrentFiberOwnerNameInDevOrNull() || "A component");
					didWarnValDefaultVal = true;
				}
			}
			var initialValue = props.value;
			if (initialValue == null) {
				var children = props.children, defaultValue = props.defaultValue;
				if (children != null) {
					error("Use the `defaultValue` or `value` props instead of setting children on <textarea>.");
					{
						if (defaultValue != null) throw new Error("If you supply `defaultValue` on a <textarea>, do not pass children.");
						if (isArray(children)) {
							if (children.length > 1) throw new Error("<textarea> can only have at most one child.");
							children = children[0];
						}
						defaultValue = children;
					}
				}
				if (defaultValue == null) defaultValue = "";
				initialValue = defaultValue;
			}
			node._wrapperState = { initialValue: getToStringValue(initialValue) };
		}
		function updateWrapper$1(element, props) {
			var node = element;
			var value = getToStringValue(props.value);
			var defaultValue = getToStringValue(props.defaultValue);
			if (value != null) {
				var newValue = toString(value);
				if (newValue !== node.value) node.value = newValue;
				if (props.defaultValue == null && node.defaultValue !== newValue) node.defaultValue = newValue;
			}
			if (defaultValue != null) node.defaultValue = toString(defaultValue);
		}
		function postMountWrapper$3(element, props) {
			var node = element;
			var textContent = node.textContent;
			if (textContent === node._wrapperState.initialValue) {
				if (textContent !== "" && textContent !== null) node.value = textContent;
			}
		}
		function restoreControlledState$2(element, props) {
			updateWrapper$1(element, props);
		}
		var HTML_NAMESPACE = "http://www.w3.org/1999/xhtml";
		var MATH_NAMESPACE = "http://www.w3.org/1998/Math/MathML";
		var SVG_NAMESPACE = "http://www.w3.org/2000/svg";
		function getIntrinsicNamespace(type) {
			switch (type) {
				case "svg": return SVG_NAMESPACE;
				case "math": return MATH_NAMESPACE;
				default: return HTML_NAMESPACE;
			}
		}
		function getChildNamespace(parentNamespace, type) {
			if (parentNamespace == null || parentNamespace === HTML_NAMESPACE) return getIntrinsicNamespace(type);
			if (parentNamespace === SVG_NAMESPACE && type === "foreignObject") return HTML_NAMESPACE;
			return parentNamespace;
		}
		/**
		* Create a function which has 'unsafe' privileges (required by windows8 apps)
		*/
		var createMicrosoftUnsafeLocalFunction = function(func) {
			if (typeof MSApp !== "undefined" && MSApp.execUnsafeLocalFunction) return function(arg0, arg1, arg2, arg3) {
				MSApp.execUnsafeLocalFunction(function() {
					return func(arg0, arg1, arg2, arg3);
				});
			};
else return func;
		};
		var reusableSVGContainer;
		/**
		* Set the innerHTML property of a node
		*
		* @param {DOMElement} node
		* @param {string} html
		* @internal
		*/
		var setInnerHTML = createMicrosoftUnsafeLocalFunction(function(node, html) {
			if (node.namespaceURI === SVG_NAMESPACE) {
				if (!("innerHTML" in node)) {
					reusableSVGContainer = reusableSVGContainer || document.createElement("div");
					reusableSVGContainer.innerHTML = "<svg>" + html.valueOf().toString() + "</svg>";
					var svgNode = reusableSVGContainer.firstChild;
					while (node.firstChild) node.removeChild(node.firstChild);
					while (svgNode.firstChild) node.appendChild(svgNode.firstChild);
					return;
				}
			}
			node.innerHTML = html;
		});
		/**
		* HTML nodeType values that represent the type of the node
		*/
		var ELEMENT_NODE = 1;
		var TEXT_NODE = 3;
		var COMMENT_NODE = 8;
		var DOCUMENT_NODE = 9;
		var DOCUMENT_FRAGMENT_NODE = 11;
		/**
		* Set the textContent property of a node. For text updates, it's faster
		* to set the `nodeValue` of the Text node directly instead of using
		* `.textContent` which will remove the existing node and create a new one.
		*
		* @param {DOMElement} node
		* @param {string} text
		* @internal
		*/
		var setTextContent = function(node, text) {
			if (text) {
				var firstChild = node.firstChild;
				if (firstChild && firstChild === node.lastChild && firstChild.nodeType === TEXT_NODE) {
					firstChild.nodeValue = text;
					return;
				}
			}
			node.textContent = text;
		};
		var shorthandToLonghand = {
			animation: [
				"animationDelay",
				"animationDirection",
				"animationDuration",
				"animationFillMode",
				"animationIterationCount",
				"animationName",
				"animationPlayState",
				"animationTimingFunction"
			],
			background: [
				"backgroundAttachment",
				"backgroundClip",
				"backgroundColor",
				"backgroundImage",
				"backgroundOrigin",
				"backgroundPositionX",
				"backgroundPositionY",
				"backgroundRepeat",
				"backgroundSize"
			],
			backgroundPosition: ["backgroundPositionX", "backgroundPositionY"],
			border: [
				"borderBottomColor",
				"borderBottomStyle",
				"borderBottomWidth",
				"borderImageOutset",
				"borderImageRepeat",
				"borderImageSlice",
				"borderImageSource",
				"borderImageWidth",
				"borderLeftColor",
				"borderLeftStyle",
				"borderLeftWidth",
				"borderRightColor",
				"borderRightStyle",
				"borderRightWidth",
				"borderTopColor",
				"borderTopStyle",
				"borderTopWidth"
			],
			borderBlockEnd: [
				"borderBlockEndColor",
				"borderBlockEndStyle",
				"borderBlockEndWidth"
			],
			borderBlockStart: [
				"borderBlockStartColor",
				"borderBlockStartStyle",
				"borderBlockStartWidth"
			],
			borderBottom: [
				"borderBottomColor",
				"borderBottomStyle",
				"borderBottomWidth"
			],
			borderColor: [
				"borderBottomColor",
				"borderLeftColor",
				"borderRightColor",
				"borderTopColor"
			],
			borderImage: [
				"borderImageOutset",
				"borderImageRepeat",
				"borderImageSlice",
				"borderImageSource",
				"borderImageWidth"
			],
			borderInlineEnd: [
				"borderInlineEndColor",
				"borderInlineEndStyle",
				"borderInlineEndWidth"
			],
			borderInlineStart: [
				"borderInlineStartColor",
				"borderInlineStartStyle",
				"borderInlineStartWidth"
			],
			borderLeft: [
				"borderLeftColor",
				"borderLeftStyle",
				"borderLeftWidth"
			],
			borderRadius: [
				"borderBottomLeftRadius",
				"borderBottomRightRadius",
				"borderTopLeftRadius",
				"borderTopRightRadius"
			],
			borderRight: [
				"borderRightColor",
				"borderRightStyle",
				"borderRightWidth"
			],
			borderStyle: [
				"borderBottomStyle",
				"borderLeftStyle",
				"borderRightStyle",
				"borderTopStyle"
			],
			borderTop: [
				"borderTopColor",
				"borderTopStyle",
				"borderTopWidth"
			],
			borderWidth: [
				"borderBottomWidth",
				"borderLeftWidth",
				"borderRightWidth",
				"borderTopWidth"
			],
			columnRule: [
				"columnRuleColor",
				"columnRuleStyle",
				"columnRuleWidth"
			],
			columns: ["columnCount", "columnWidth"],
			flex: [
				"flexBasis",
				"flexGrow",
				"flexShrink"
			],
			flexFlow: ["flexDirection", "flexWrap"],
			font: [
				"fontFamily",
				"fontFeatureSettings",
				"fontKerning",
				"fontLanguageOverride",
				"fontSize",
				"fontSizeAdjust",
				"fontStretch",
				"fontStyle",
				"fontVariant",
				"fontVariantAlternates",
				"fontVariantCaps",
				"fontVariantEastAsian",
				"fontVariantLigatures",
				"fontVariantNumeric",
				"fontVariantPosition",
				"fontWeight",
				"lineHeight"
			],
			fontVariant: [
				"fontVariantAlternates",
				"fontVariantCaps",
				"fontVariantEastAsian",
				"fontVariantLigatures",
				"fontVariantNumeric",
				"fontVariantPosition"
			],
			gap: ["columnGap", "rowGap"],
			grid: [
				"gridAutoColumns",
				"gridAutoFlow",
				"gridAutoRows",
				"gridTemplateAreas",
				"gridTemplateColumns",
				"gridTemplateRows"
			],
			gridArea: [
				"gridColumnEnd",
				"gridColumnStart",
				"gridRowEnd",
				"gridRowStart"
			],
			gridColumn: ["gridColumnEnd", "gridColumnStart"],
			gridColumnGap: ["columnGap"],
			gridGap: ["columnGap", "rowGap"],
			gridRow: ["gridRowEnd", "gridRowStart"],
			gridRowGap: ["rowGap"],
			gridTemplate: [
				"gridTemplateAreas",
				"gridTemplateColumns",
				"gridTemplateRows"
			],
			listStyle: [
				"listStyleImage",
				"listStylePosition",
				"listStyleType"
			],
			margin: [
				"marginBottom",
				"marginLeft",
				"marginRight",
				"marginTop"
			],
			marker: [
				"markerEnd",
				"markerMid",
				"markerStart"
			],
			mask: [
				"maskClip",
				"maskComposite",
				"maskImage",
				"maskMode",
				"maskOrigin",
				"maskPositionX",
				"maskPositionY",
				"maskRepeat",
				"maskSize"
			],
			maskPosition: ["maskPositionX", "maskPositionY"],
			outline: [
				"outlineColor",
				"outlineStyle",
				"outlineWidth"
			],
			overflow: ["overflowX", "overflowY"],
			padding: [
				"paddingBottom",
				"paddingLeft",
				"paddingRight",
				"paddingTop"
			],
			placeContent: ["alignContent", "justifyContent"],
			placeItems: ["alignItems", "justifyItems"],
			placeSelf: ["alignSelf", "justifySelf"],
			textDecoration: [
				"textDecorationColor",
				"textDecorationLine",
				"textDecorationStyle"
			],
			textEmphasis: ["textEmphasisColor", "textEmphasisStyle"],
			transition: [
				"transitionDelay",
				"transitionDuration",
				"transitionProperty",
				"transitionTimingFunction"
			],
			wordWrap: ["overflowWrap"]
		};
		/**
		* CSS properties which accept numbers but are not in units of "px".
		*/
		var isUnitlessNumber = {
			animationIterationCount: true,
			aspectRatio: true,
			borderImageOutset: true,
			borderImageSlice: true,
			borderImageWidth: true,
			boxFlex: true,
			boxFlexGroup: true,
			boxOrdinalGroup: true,
			columnCount: true,
			columns: true,
			flex: true,
			flexGrow: true,
			flexPositive: true,
			flexShrink: true,
			flexNegative: true,
			flexOrder: true,
			gridArea: true,
			gridRow: true,
			gridRowEnd: true,
			gridRowSpan: true,
			gridRowStart: true,
			gridColumn: true,
			gridColumnEnd: true,
			gridColumnSpan: true,
			gridColumnStart: true,
			fontWeight: true,
			lineClamp: true,
			lineHeight: true,
			opacity: true,
			order: true,
			orphans: true,
			tabSize: true,
			widows: true,
			zIndex: true,
			zoom: true,
			fillOpacity: true,
			floodOpacity: true,
			stopOpacity: true,
			strokeDasharray: true,
			strokeDashoffset: true,
			strokeMiterlimit: true,
			strokeOpacity: true,
			strokeWidth: true
		};
		/**
		* @param {string} prefix vendor-specific prefix, eg: Webkit
		* @param {string} key style name, eg: transitionDuration
		* @return {string} style name prefixed with `prefix`, properly camelCased, eg:
		* WebkitTransitionDuration
		*/
		function prefixKey(prefix$2, key) {
			return prefix$2 + key.charAt(0).toUpperCase() + key.substring(1);
		}
		/**
		* Support style names that may come passed in prefixed by adding permutations
		* of vendor prefixes.
		*/
		var prefixes = [
			"Webkit",
			"ms",
			"Moz",
			"O"
		];
		Object.keys(isUnitlessNumber).forEach(function(prop) {
			prefixes.forEach(function(prefix$2) {
				isUnitlessNumber[prefixKey(prefix$2, prop)] = isUnitlessNumber[prop];
			});
		});
		/**
		* Convert a value into the proper css writable value. The style name `name`
		* should be logical (no hyphens), as specified
		* in `CSSProperty.isUnitlessNumber`.
		*
		* @param {string} name CSS property name such as `topMargin`.
		* @param {*} value CSS property value such as `10px`.
		* @return {string} Normalized style value with dimensions applied.
		*/
		function dangerousStyleValue(name, value, isCustomProperty) {
			var isEmpty = value == null || typeof value === "boolean" || value === "";
			if (isEmpty) return "";
			if (!isCustomProperty && typeof value === "number" && value !== 0 && !(isUnitlessNumber.hasOwnProperty(name) && isUnitlessNumber[name])) return value + "px";
			checkCSSPropertyStringCoercion(value, name);
			return ("" + value).trim();
		}
		var uppercasePattern = /([A-Z])/g;
		var msPattern = /^ms-/;
		/**
		* Hyphenates a camelcased CSS property name, for example:
		*
		*   > hyphenateStyleName('backgroundColor')
		*   < "background-color"
		*   > hyphenateStyleName('MozTransition')
		*   < "-moz-transition"
		*   > hyphenateStyleName('msTransition')
		*   < "-ms-transition"
		*
		* As Modernizr suggests (http://modernizr.com/docs/#prefixed), an `ms` prefix
		* is converted to `-ms-`.
		*/
		function hyphenateStyleName(name) {
			return name.replace(uppercasePattern, "-$1").toLowerCase().replace(msPattern, "-ms-");
		}
		var warnValidStyle = function() {};
		{
			var badVendoredStyleNamePattern = /^(?:webkit|moz|o)[A-Z]/;
			var msPattern$1 = /^-ms-/;
			var hyphenPattern = /-(.)/g;
			var badStyleValueWithSemicolonPattern = /;\s*$/;
			var warnedStyleNames = {};
			var warnedStyleValues = {};
			var warnedForNaNValue = false;
			var warnedForInfinityValue = false;
			var camelize = function(string) {
				return string.replace(hyphenPattern, function(_, character) {
					return character.toUpperCase();
				});
			};
			var warnHyphenatedStyleName = function(name) {
				if (warnedStyleNames.hasOwnProperty(name) && warnedStyleNames[name]) return;
				warnedStyleNames[name] = true;
				error(
					"Unsupported style property %s. Did you mean %s?",
					name,
					// (http://www.andismith.com/blog/2012/02/modernizr-prefixed/), an `-ms` prefix
					// is converted to lowercase `ms`.
					camelize(name.replace(msPattern$1, "ms-"))
);
			};
			var warnBadVendoredStyleName = function(name) {
				if (warnedStyleNames.hasOwnProperty(name) && warnedStyleNames[name]) return;
				warnedStyleNames[name] = true;
				error("Unsupported vendor-prefixed style property %s. Did you mean %s?", name, name.charAt(0).toUpperCase() + name.slice(1));
			};
			var warnStyleValueWithSemicolon = function(name, value) {
				if (warnedStyleValues.hasOwnProperty(value) && warnedStyleValues[value]) return;
				warnedStyleValues[value] = true;
				error("Style property values shouldn't contain a semicolon. Try \"%s: %s\" instead.", name, value.replace(badStyleValueWithSemicolonPattern, ""));
			};
			var warnStyleValueIsNaN = function(name, value) {
				if (warnedForNaNValue) return;
				warnedForNaNValue = true;
				error("`NaN` is an invalid value for the `%s` css style property.", name);
			};
			var warnStyleValueIsInfinity = function(name, value) {
				if (warnedForInfinityValue) return;
				warnedForInfinityValue = true;
				error("`Infinity` is an invalid value for the `%s` css style property.", name);
			};
			warnValidStyle = function(name, value) {
				if (name.indexOf("-") > -1) warnHyphenatedStyleName(name);
else if (badVendoredStyleNamePattern.test(name)) warnBadVendoredStyleName(name);
else if (badStyleValueWithSemicolonPattern.test(value)) warnStyleValueWithSemicolon(name, value);
				if (typeof value === "number") {
					if (isNaN(value)) warnStyleValueIsNaN(name, value);
else if (!isFinite(value)) warnStyleValueIsInfinity(name, value);
				}
			};
		}
		var warnValidStyle$1 = warnValidStyle;
		/**
		* Operations for dealing with CSS properties.
		*/
		/**
		* This creates a string that is expected to be equivalent to the style
		* attribute generated by server-side rendering. It by-passes warnings and
		* security checks so it's not safe to use this value for anything other than
		* comparison. It is only used in DEV for SSR validation.
		*/
		function createDangerousStringForStyles(styles) {
			{
				var serialized = "";
				var delimiter = "";
				for (var styleName in styles) {
					if (!styles.hasOwnProperty(styleName)) continue;
					var styleValue = styles[styleName];
					if (styleValue != null) {
						var isCustomProperty = styleName.indexOf("--") === 0;
						serialized += delimiter + (isCustomProperty ? styleName : hyphenateStyleName(styleName)) + ":";
						serialized += dangerousStyleValue(styleName, styleValue, isCustomProperty);
						delimiter = ";";
					}
				}
				return serialized || null;
			}
		}
		/**
		* Sets the value for multiple styles on a node.  If a value is specified as
		* '' (empty string), the corresponding style property will be unset.
		*
		* @param {DOMElement} node
		* @param {object} styles
		*/
		function setValueForStyles(node, styles) {
			var style$1 = node.style;
			for (var styleName in styles) {
				if (!styles.hasOwnProperty(styleName)) continue;
				var isCustomProperty = styleName.indexOf("--") === 0;
				if (!isCustomProperty) warnValidStyle$1(styleName, styles[styleName]);
				var styleValue = dangerousStyleValue(styleName, styles[styleName], isCustomProperty);
				if (styleName === "float") styleName = "cssFloat";
				if (isCustomProperty) style$1.setProperty(styleName, styleValue);
else style$1[styleName] = styleValue;
			}
		}
		function isValueEmpty(value) {
			return value == null || typeof value === "boolean" || value === "";
		}
		/**
		* Given {color: 'red', overflow: 'hidden'} returns {
		*   color: 'color',
		*   overflowX: 'overflow',
		*   overflowY: 'overflow',
		* }. This can be read as "the overflowY property was set by the overflow
		* shorthand". That is, the values are the property that each was derived from.
		*/
		function expandShorthandMap(styles) {
			var expanded = {};
			for (var key in styles) {
				var longhands = shorthandToLonghand[key] || [key];
				for (var i$1 = 0; i$1 < longhands.length; i$1++) expanded[longhands[i$1]] = key;
			}
			return expanded;
		}
		/**
		* When mixing shorthand and longhand property names, we warn during updates if
		* we expect an incorrect result to occur. In particular, we warn for:
		*
		* Updating a shorthand property (longhand gets overwritten):
		*   {font: 'foo', fontVariant: 'bar'} -> {font: 'baz', fontVariant: 'bar'}
		*   becomes .style.font = 'baz'
		* Removing a shorthand property (longhand gets lost too):
		*   {font: 'foo', fontVariant: 'bar'} -> {fontVariant: 'bar'}
		*   becomes .style.font = ''
		* Removing a longhand property (should revert to shorthand; doesn't):
		*   {font: 'foo', fontVariant: 'bar'} -> {font: 'foo'}
		*   becomes .style.fontVariant = ''
		*/
		function validateShorthandPropertyCollisionInDev(styleUpdates, nextStyles) {
			{
				if (!nextStyles) return;
				var expandedUpdates = expandShorthandMap(styleUpdates);
				var expandedStyles = expandShorthandMap(nextStyles);
				var warnedAbout = {};
				for (var key in expandedUpdates) {
					var originalKey = expandedUpdates[key];
					var correctOriginalKey = expandedStyles[key];
					if (correctOriginalKey && originalKey !== correctOriginalKey) {
						var warningKey = originalKey + "," + correctOriginalKey;
						if (warnedAbout[warningKey]) continue;
						warnedAbout[warningKey] = true;
						error("%s a style property during rerender (%s) when a conflicting property is set (%s) can lead to styling bugs. To avoid this, don't mix shorthand and non-shorthand properties for the same value; instead, replace the shorthand with separate values.", isValueEmpty(styleUpdates[originalKey]) ? "Removing" : "Updating", originalKey, correctOriginalKey);
					}
				}
			}
		}
		var omittedCloseTags = {
			area: true,
			base: true,
			br: true,
			col: true,
			embed: true,
			hr: true,
			img: true,
			input: true,
			keygen: true,
			link: true,
			meta: true,
			param: true,
			source: true,
			track: true,
			wbr: true
		};
		var voidElementTags = assign({ menuitem: true }, omittedCloseTags);
		var HTML = "__html";
		function assertValidProps(tag, props) {
			if (!props) return;
			if (voidElementTags[tag]) {
				if (props.children != null || props.dangerouslySetInnerHTML != null) throw new Error(tag + " is a void element tag and must neither have `children` nor " + "use `dangerouslySetInnerHTML`.");
			}
			if (props.dangerouslySetInnerHTML != null) {
				if (props.children != null) throw new Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
				if (typeof props.dangerouslySetInnerHTML !== "object" || !(HTML in props.dangerouslySetInnerHTML)) throw new Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information.");
			}
			if (!props.suppressContentEditableWarning && props.contentEditable && props.children != null) error("A component is `contentEditable` and contains `children` managed by React. It is now your responsibility to guarantee that none of those nodes are unexpectedly modified or duplicated. This is probably not intentional.");
			if (props.style != null && typeof props.style !== "object") throw new Error("The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX.");
		}
		function isCustomComponent(tagName, props) {
			if (tagName.indexOf("-") === -1) return typeof props.is === "string";
			switch (tagName) {
				case "annotation-xml":
				case "color-profile":
				case "font-face":
				case "font-face-src":
				case "font-face-uri":
				case "font-face-format":
				case "font-face-name":
				case "missing-glyph": return false;
				default: return true;
			}
		}
		var possibleStandardNames = {
			accept: "accept",
			acceptcharset: "acceptCharset",
			"accept-charset": "acceptCharset",
			accesskey: "accessKey",
			action: "action",
			allowfullscreen: "allowFullScreen",
			alt: "alt",
			as: "as",
			async: "async",
			autocapitalize: "autoCapitalize",
			autocomplete: "autoComplete",
			autocorrect: "autoCorrect",
			autofocus: "autoFocus",
			autoplay: "autoPlay",
			autosave: "autoSave",
			capture: "capture",
			cellpadding: "cellPadding",
			cellspacing: "cellSpacing",
			challenge: "challenge",
			charset: "charSet",
			checked: "checked",
			children: "children",
			cite: "cite",
			class: "className",
			classid: "classID",
			classname: "className",
			cols: "cols",
			colspan: "colSpan",
			content: "content",
			contenteditable: "contentEditable",
			contextmenu: "contextMenu",
			controls: "controls",
			controlslist: "controlsList",
			coords: "coords",
			crossorigin: "crossOrigin",
			dangerouslysetinnerhtml: "dangerouslySetInnerHTML",
			data: "data",
			datetime: "dateTime",
			default: "default",
			defaultchecked: "defaultChecked",
			defaultvalue: "defaultValue",
			defer: "defer",
			dir: "dir",
			disabled: "disabled",
			disablepictureinpicture: "disablePictureInPicture",
			disableremoteplayback: "disableRemotePlayback",
			download: "download",
			draggable: "draggable",
			enctype: "encType",
			enterkeyhint: "enterKeyHint",
			for: "htmlFor",
			form: "form",
			formmethod: "formMethod",
			formaction: "formAction",
			formenctype: "formEncType",
			formnovalidate: "formNoValidate",
			formtarget: "formTarget",
			frameborder: "frameBorder",
			headers: "headers",
			height: "height",
			hidden: "hidden",
			high: "high",
			href: "href",
			hreflang: "hrefLang",
			htmlfor: "htmlFor",
			httpequiv: "httpEquiv",
			"http-equiv": "httpEquiv",
			icon: "icon",
			id: "id",
			imagesizes: "imageSizes",
			imagesrcset: "imageSrcSet",
			innerhtml: "innerHTML",
			inputmode: "inputMode",
			integrity: "integrity",
			is: "is",
			itemid: "itemID",
			itemprop: "itemProp",
			itemref: "itemRef",
			itemscope: "itemScope",
			itemtype: "itemType",
			keyparams: "keyParams",
			keytype: "keyType",
			kind: "kind",
			label: "label",
			lang: "lang",
			list: "list",
			loop: "loop",
			low: "low",
			manifest: "manifest",
			marginwidth: "marginWidth",
			marginheight: "marginHeight",
			max: "max",
			maxlength: "maxLength",
			media: "media",
			mediagroup: "mediaGroup",
			method: "method",
			min: "min",
			minlength: "minLength",
			multiple: "multiple",
			muted: "muted",
			name: "name",
			nomodule: "noModule",
			nonce: "nonce",
			novalidate: "noValidate",
			open: "open",
			optimum: "optimum",
			pattern: "pattern",
			placeholder: "placeholder",
			playsinline: "playsInline",
			poster: "poster",
			preload: "preload",
			profile: "profile",
			radiogroup: "radioGroup",
			readonly: "readOnly",
			referrerpolicy: "referrerPolicy",
			rel: "rel",
			required: "required",
			reversed: "reversed",
			role: "role",
			rows: "rows",
			rowspan: "rowSpan",
			sandbox: "sandbox",
			scope: "scope",
			scoped: "scoped",
			scrolling: "scrolling",
			seamless: "seamless",
			selected: "selected",
			shape: "shape",
			size: "size",
			sizes: "sizes",
			span: "span",
			spellcheck: "spellCheck",
			src: "src",
			srcdoc: "srcDoc",
			srclang: "srcLang",
			srcset: "srcSet",
			start: "start",
			step: "step",
			style: "style",
			summary: "summary",
			tabindex: "tabIndex",
			target: "target",
			title: "title",
			type: "type",
			usemap: "useMap",
			value: "value",
			width: "width",
			wmode: "wmode",
			wrap: "wrap",
			about: "about",
			accentheight: "accentHeight",
			"accent-height": "accentHeight",
			accumulate: "accumulate",
			additive: "additive",
			alignmentbaseline: "alignmentBaseline",
			"alignment-baseline": "alignmentBaseline",
			allowreorder: "allowReorder",
			alphabetic: "alphabetic",
			amplitude: "amplitude",
			arabicform: "arabicForm",
			"arabic-form": "arabicForm",
			ascent: "ascent",
			attributename: "attributeName",
			attributetype: "attributeType",
			autoreverse: "autoReverse",
			azimuth: "azimuth",
			basefrequency: "baseFrequency",
			baselineshift: "baselineShift",
			"baseline-shift": "baselineShift",
			baseprofile: "baseProfile",
			bbox: "bbox",
			begin: "begin",
			bias: "bias",
			by: "by",
			calcmode: "calcMode",
			capheight: "capHeight",
			"cap-height": "capHeight",
			clip: "clip",
			clippath: "clipPath",
			"clip-path": "clipPath",
			clippathunits: "clipPathUnits",
			cliprule: "clipRule",
			"clip-rule": "clipRule",
			color: "color",
			colorinterpolation: "colorInterpolation",
			"color-interpolation": "colorInterpolation",
			colorinterpolationfilters: "colorInterpolationFilters",
			"color-interpolation-filters": "colorInterpolationFilters",
			colorprofile: "colorProfile",
			"color-profile": "colorProfile",
			colorrendering: "colorRendering",
			"color-rendering": "colorRendering",
			contentscripttype: "contentScriptType",
			contentstyletype: "contentStyleType",
			cursor: "cursor",
			cx: "cx",
			cy: "cy",
			d: "d",
			datatype: "datatype",
			decelerate: "decelerate",
			descent: "descent",
			diffuseconstant: "diffuseConstant",
			direction: "direction",
			display: "display",
			divisor: "divisor",
			dominantbaseline: "dominantBaseline",
			"dominant-baseline": "dominantBaseline",
			dur: "dur",
			dx: "dx",
			dy: "dy",
			edgemode: "edgeMode",
			elevation: "elevation",
			enablebackground: "enableBackground",
			"enable-background": "enableBackground",
			end: "end",
			exponent: "exponent",
			externalresourcesrequired: "externalResourcesRequired",
			fill: "fill",
			fillopacity: "fillOpacity",
			"fill-opacity": "fillOpacity",
			fillrule: "fillRule",
			"fill-rule": "fillRule",
			filter: "filter",
			filterres: "filterRes",
			filterunits: "filterUnits",
			floodopacity: "floodOpacity",
			"flood-opacity": "floodOpacity",
			floodcolor: "floodColor",
			"flood-color": "floodColor",
			focusable: "focusable",
			fontfamily: "fontFamily",
			"font-family": "fontFamily",
			fontsize: "fontSize",
			"font-size": "fontSize",
			fontsizeadjust: "fontSizeAdjust",
			"font-size-adjust": "fontSizeAdjust",
			fontstretch: "fontStretch",
			"font-stretch": "fontStretch",
			fontstyle: "fontStyle",
			"font-style": "fontStyle",
			fontvariant: "fontVariant",
			"font-variant": "fontVariant",
			fontweight: "fontWeight",
			"font-weight": "fontWeight",
			format: "format",
			from: "from",
			fx: "fx",
			fy: "fy",
			g1: "g1",
			g2: "g2",
			glyphname: "glyphName",
			"glyph-name": "glyphName",
			glyphorientationhorizontal: "glyphOrientationHorizontal",
			"glyph-orientation-horizontal": "glyphOrientationHorizontal",
			glyphorientationvertical: "glyphOrientationVertical",
			"glyph-orientation-vertical": "glyphOrientationVertical",
			glyphref: "glyphRef",
			gradienttransform: "gradientTransform",
			gradientunits: "gradientUnits",
			hanging: "hanging",
			horizadvx: "horizAdvX",
			"horiz-adv-x": "horizAdvX",
			horizoriginx: "horizOriginX",
			"horiz-origin-x": "horizOriginX",
			ideographic: "ideographic",
			imagerendering: "imageRendering",
			"image-rendering": "imageRendering",
			in2: "in2",
			in: "in",
			inlist: "inlist",
			intercept: "intercept",
			k1: "k1",
			k2: "k2",
			k3: "k3",
			k4: "k4",
			k: "k",
			kernelmatrix: "kernelMatrix",
			kernelunitlength: "kernelUnitLength",
			kerning: "kerning",
			keypoints: "keyPoints",
			keysplines: "keySplines",
			keytimes: "keyTimes",
			lengthadjust: "lengthAdjust",
			letterspacing: "letterSpacing",
			"letter-spacing": "letterSpacing",
			lightingcolor: "lightingColor",
			"lighting-color": "lightingColor",
			limitingconeangle: "limitingConeAngle",
			local: "local",
			markerend: "markerEnd",
			"marker-end": "markerEnd",
			markerheight: "markerHeight",
			markermid: "markerMid",
			"marker-mid": "markerMid",
			markerstart: "markerStart",
			"marker-start": "markerStart",
			markerunits: "markerUnits",
			markerwidth: "markerWidth",
			mask: "mask",
			maskcontentunits: "maskContentUnits",
			maskunits: "maskUnits",
			mathematical: "mathematical",
			mode: "mode",
			numoctaves: "numOctaves",
			offset: "offset",
			opacity: "opacity",
			operator: "operator",
			order: "order",
			orient: "orient",
			orientation: "orientation",
			origin: "origin",
			overflow: "overflow",
			overlineposition: "overlinePosition",
			"overline-position": "overlinePosition",
			overlinethickness: "overlineThickness",
			"overline-thickness": "overlineThickness",
			paintorder: "paintOrder",
			"paint-order": "paintOrder",
			panose1: "panose1",
			"panose-1": "panose1",
			pathlength: "pathLength",
			patterncontentunits: "patternContentUnits",
			patterntransform: "patternTransform",
			patternunits: "patternUnits",
			pointerevents: "pointerEvents",
			"pointer-events": "pointerEvents",
			points: "points",
			pointsatx: "pointsAtX",
			pointsaty: "pointsAtY",
			pointsatz: "pointsAtZ",
			prefix: "prefix",
			preservealpha: "preserveAlpha",
			preserveaspectratio: "preserveAspectRatio",
			primitiveunits: "primitiveUnits",
			property: "property",
			r: "r",
			radius: "radius",
			refx: "refX",
			refy: "refY",
			renderingintent: "renderingIntent",
			"rendering-intent": "renderingIntent",
			repeatcount: "repeatCount",
			repeatdur: "repeatDur",
			requiredextensions: "requiredExtensions",
			requiredfeatures: "requiredFeatures",
			resource: "resource",
			restart: "restart",
			result: "result",
			results: "results",
			rotate: "rotate",
			rx: "rx",
			ry: "ry",
			scale: "scale",
			security: "security",
			seed: "seed",
			shaperendering: "shapeRendering",
			"shape-rendering": "shapeRendering",
			slope: "slope",
			spacing: "spacing",
			specularconstant: "specularConstant",
			specularexponent: "specularExponent",
			speed: "speed",
			spreadmethod: "spreadMethod",
			startoffset: "startOffset",
			stddeviation: "stdDeviation",
			stemh: "stemh",
			stemv: "stemv",
			stitchtiles: "stitchTiles",
			stopcolor: "stopColor",
			"stop-color": "stopColor",
			stopopacity: "stopOpacity",
			"stop-opacity": "stopOpacity",
			strikethroughposition: "strikethroughPosition",
			"strikethrough-position": "strikethroughPosition",
			strikethroughthickness: "strikethroughThickness",
			"strikethrough-thickness": "strikethroughThickness",
			string: "string",
			stroke: "stroke",
			strokedasharray: "strokeDasharray",
			"stroke-dasharray": "strokeDasharray",
			strokedashoffset: "strokeDashoffset",
			"stroke-dashoffset": "strokeDashoffset",
			strokelinecap: "strokeLinecap",
			"stroke-linecap": "strokeLinecap",
			strokelinejoin: "strokeLinejoin",
			"stroke-linejoin": "strokeLinejoin",
			strokemiterlimit: "strokeMiterlimit",
			"stroke-miterlimit": "strokeMiterlimit",
			strokewidth: "strokeWidth",
			"stroke-width": "strokeWidth",
			strokeopacity: "strokeOpacity",
			"stroke-opacity": "strokeOpacity",
			suppresscontenteditablewarning: "suppressContentEditableWarning",
			suppresshydrationwarning: "suppressHydrationWarning",
			surfacescale: "surfaceScale",
			systemlanguage: "systemLanguage",
			tablevalues: "tableValues",
			targetx: "targetX",
			targety: "targetY",
			textanchor: "textAnchor",
			"text-anchor": "textAnchor",
			textdecoration: "textDecoration",
			"text-decoration": "textDecoration",
			textlength: "textLength",
			textrendering: "textRendering",
			"text-rendering": "textRendering",
			to: "to",
			transform: "transform",
			typeof: "typeof",
			u1: "u1",
			u2: "u2",
			underlineposition: "underlinePosition",
			"underline-position": "underlinePosition",
			underlinethickness: "underlineThickness",
			"underline-thickness": "underlineThickness",
			unicode: "unicode",
			unicodebidi: "unicodeBidi",
			"unicode-bidi": "unicodeBidi",
			unicoderange: "unicodeRange",
			"unicode-range": "unicodeRange",
			unitsperem: "unitsPerEm",
			"units-per-em": "unitsPerEm",
			unselectable: "unselectable",
			valphabetic: "vAlphabetic",
			"v-alphabetic": "vAlphabetic",
			values: "values",
			vectoreffect: "vectorEffect",
			"vector-effect": "vectorEffect",
			version: "version",
			vertadvy: "vertAdvY",
			"vert-adv-y": "vertAdvY",
			vertoriginx: "vertOriginX",
			"vert-origin-x": "vertOriginX",
			vertoriginy: "vertOriginY",
			"vert-origin-y": "vertOriginY",
			vhanging: "vHanging",
			"v-hanging": "vHanging",
			videographic: "vIdeographic",
			"v-ideographic": "vIdeographic",
			viewbox: "viewBox",
			viewtarget: "viewTarget",
			visibility: "visibility",
			vmathematical: "vMathematical",
			"v-mathematical": "vMathematical",
			vocab: "vocab",
			widths: "widths",
			wordspacing: "wordSpacing",
			"word-spacing": "wordSpacing",
			writingmode: "writingMode",
			"writing-mode": "writingMode",
			x1: "x1",
			x2: "x2",
			x: "x",
			xchannelselector: "xChannelSelector",
			xheight: "xHeight",
			"x-height": "xHeight",
			xlinkactuate: "xlinkActuate",
			"xlink:actuate": "xlinkActuate",
			xlinkarcrole: "xlinkArcrole",
			"xlink:arcrole": "xlinkArcrole",
			xlinkhref: "xlinkHref",
			"xlink:href": "xlinkHref",
			xlinkrole: "xlinkRole",
			"xlink:role": "xlinkRole",
			xlinkshow: "xlinkShow",
			"xlink:show": "xlinkShow",
			xlinktitle: "xlinkTitle",
			"xlink:title": "xlinkTitle",
			xlinktype: "xlinkType",
			"xlink:type": "xlinkType",
			xmlbase: "xmlBase",
			"xml:base": "xmlBase",
			xmllang: "xmlLang",
			"xml:lang": "xmlLang",
			xmlns: "xmlns",
			"xml:space": "xmlSpace",
			xmlnsxlink: "xmlnsXlink",
			"xmlns:xlink": "xmlnsXlink",
			xmlspace: "xmlSpace",
			y1: "y1",
			y2: "y2",
			y: "y",
			ychannelselector: "yChannelSelector",
			z: "z",
			zoomandpan: "zoomAndPan"
		};
		var ariaProperties = {
			"aria-current": 0,
			"aria-description": 0,
			"aria-details": 0,
			"aria-disabled": 0,
			"aria-hidden": 0,
			"aria-invalid": 0,
			"aria-keyshortcuts": 0,
			"aria-label": 0,
			"aria-roledescription": 0,
			"aria-autocomplete": 0,
			"aria-checked": 0,
			"aria-expanded": 0,
			"aria-haspopup": 0,
			"aria-level": 0,
			"aria-modal": 0,
			"aria-multiline": 0,
			"aria-multiselectable": 0,
			"aria-orientation": 0,
			"aria-placeholder": 0,
			"aria-pressed": 0,
			"aria-readonly": 0,
			"aria-required": 0,
			"aria-selected": 0,
			"aria-sort": 0,
			"aria-valuemax": 0,
			"aria-valuemin": 0,
			"aria-valuenow": 0,
			"aria-valuetext": 0,
			"aria-atomic": 0,
			"aria-busy": 0,
			"aria-live": 0,
			"aria-relevant": 0,
			"aria-dropeffect": 0,
			"aria-grabbed": 0,
			"aria-activedescendant": 0,
			"aria-colcount": 0,
			"aria-colindex": 0,
			"aria-colspan": 0,
			"aria-controls": 0,
			"aria-describedby": 0,
			"aria-errormessage": 0,
			"aria-flowto": 0,
			"aria-labelledby": 0,
			"aria-owns": 0,
			"aria-posinset": 0,
			"aria-rowcount": 0,
			"aria-rowindex": 0,
			"aria-rowspan": 0,
			"aria-setsize": 0
		};
		var warnedProperties = {};
		var rARIA = new RegExp("^(aria)-[" + ATTRIBUTE_NAME_CHAR + "]*$");
		var rARIACamel = new RegExp("^(aria)[A-Z][" + ATTRIBUTE_NAME_CHAR + "]*$");
		function validateProperty(tagName, name) {
			{
				if (hasOwnProperty.call(warnedProperties, name) && warnedProperties[name]) return true;
				if (rARIACamel.test(name)) {
					var ariaName = "aria-" + name.slice(4).toLowerCase();
					var correctName = ariaProperties.hasOwnProperty(ariaName) ? ariaName : null;
					if (correctName == null) {
						error("Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.", name);
						warnedProperties[name] = true;
						return true;
					}
					if (name !== correctName) {
						error("Invalid ARIA attribute `%s`. Did you mean `%s`?", name, correctName);
						warnedProperties[name] = true;
						return true;
					}
				}
				if (rARIA.test(name)) {
					var lowerCasedName = name.toLowerCase();
					var standardName = ariaProperties.hasOwnProperty(lowerCasedName) ? lowerCasedName : null;
					if (standardName == null) {
						warnedProperties[name] = true;
						return false;
					}
					if (name !== standardName) {
						error("Unknown ARIA attribute `%s`. Did you mean `%s`?", name, standardName);
						warnedProperties[name] = true;
						return true;
					}
				}
			}
			return true;
		}
		function warnInvalidARIAProps(type, props) {
			{
				var invalidProps = [];
				for (var key in props) {
					var isValid = validateProperty(type, key);
					if (!isValid) invalidProps.push(key);
				}
				var unknownPropString = invalidProps.map(function(prop) {
					return "`" + prop + "`";
				}).join(", ");
				if (invalidProps.length === 1) error("Invalid aria prop %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", unknownPropString, type);
else if (invalidProps.length > 1) error("Invalid aria props %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", unknownPropString, type);
			}
		}
		function validateProperties(type, props) {
			if (isCustomComponent(type, props)) return;
			warnInvalidARIAProps(type, props);
		}
		var didWarnValueNull = false;
		function validateProperties$1(type, props) {
			{
				if (type !== "input" && type !== "textarea" && type !== "select") return;
				if (props != null && props.value === null && !didWarnValueNull) {
					didWarnValueNull = true;
					if (type === "select" && props.multiple) error("`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.", type);
else error("`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.", type);
				}
			}
		}
		var validateProperty$1 = function() {};
		{
			var warnedProperties$1 = {};
			var EVENT_NAME_REGEX = /^on./;
			var INVALID_EVENT_NAME_REGEX = /^on[^A-Z]/;
			var rARIA$1 = new RegExp("^(aria)-[" + ATTRIBUTE_NAME_CHAR + "]*$");
			var rARIACamel$1 = new RegExp("^(aria)[A-Z][" + ATTRIBUTE_NAME_CHAR + "]*$");
			validateProperty$1 = function(tagName, name, value, eventRegistry) {
				if (hasOwnProperty.call(warnedProperties$1, name) && warnedProperties$1[name]) return true;
				var lowerCasedName = name.toLowerCase();
				if (lowerCasedName === "onfocusin" || lowerCasedName === "onfocusout") {
					error("React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React.");
					warnedProperties$1[name] = true;
					return true;
				}
				if (eventRegistry != null) {
					var registrationNameDependencies$1 = eventRegistry.registrationNameDependencies, possibleRegistrationNames$1 = eventRegistry.possibleRegistrationNames;
					if (registrationNameDependencies$1.hasOwnProperty(name)) return true;
					var registrationName = possibleRegistrationNames$1.hasOwnProperty(lowerCasedName) ? possibleRegistrationNames$1[lowerCasedName] : null;
					if (registrationName != null) {
						error("Invalid event handler property `%s`. Did you mean `%s`?", name, registrationName);
						warnedProperties$1[name] = true;
						return true;
					}
					if (EVENT_NAME_REGEX.test(name)) {
						error("Unknown event handler property `%s`. It will be ignored.", name);
						warnedProperties$1[name] = true;
						return true;
					}
				} else if (EVENT_NAME_REGEX.test(name)) {
					if (INVALID_EVENT_NAME_REGEX.test(name)) error("Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.", name);
					warnedProperties$1[name] = true;
					return true;
				}
				if (rARIA$1.test(name) || rARIACamel$1.test(name)) return true;
				if (lowerCasedName === "innerhtml") {
					error("Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`.");
					warnedProperties$1[name] = true;
					return true;
				}
				if (lowerCasedName === "aria") {
					error("The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead.");
					warnedProperties$1[name] = true;
					return true;
				}
				if (lowerCasedName === "is" && value !== null && value !== undefined && typeof value !== "string") {
					error("Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.", typeof value);
					warnedProperties$1[name] = true;
					return true;
				}
				if (typeof value === "number" && isNaN(value)) {
					error("Received NaN for the `%s` attribute. If this is expected, cast the value to a string.", name);
					warnedProperties$1[name] = true;
					return true;
				}
				var propertyInfo = getPropertyInfo(name);
				var isReserved = propertyInfo !== null && propertyInfo.type === RESERVED;
				if (possibleStandardNames.hasOwnProperty(lowerCasedName)) {
					var standardName = possibleStandardNames[lowerCasedName];
					if (standardName !== name) {
						error("Invalid DOM property `%s`. Did you mean `%s`?", name, standardName);
						warnedProperties$1[name] = true;
						return true;
					}
				} else if (!isReserved && name !== lowerCasedName) {
					error("React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.", name, lowerCasedName);
					warnedProperties$1[name] = true;
					return true;
				}
				if (typeof value === "boolean" && shouldRemoveAttributeWithWarning(name, value, propertyInfo, false)) {
					if (value) error("Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s=\"%s\" or %s={value.toString()}.", value, name, name, value, name);
else error("Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s=\"%s\" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.", value, name, name, value, name, name, name);
					warnedProperties$1[name] = true;
					return true;
				}
				if (isReserved) return true;
				if (shouldRemoveAttributeWithWarning(name, value, propertyInfo, false)) {
					warnedProperties$1[name] = true;
					return false;
				}
				if ((value === "false" || value === "true") && propertyInfo !== null && propertyInfo.type === BOOLEAN) {
					error("Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?", value, name, value === "false" ? "The browser will interpret it as a truthy value." : "Although this works, it will not work as expected if you pass the string \"false\".", name, value);
					warnedProperties$1[name] = true;
					return true;
				}
				return true;
			};
		}
		var warnUnknownProperties = function(type, props, eventRegistry) {
			{
				var unknownProps = [];
				for (var key in props) {
					var isValid = validateProperty$1(type, key, props[key], eventRegistry);
					if (!isValid) unknownProps.push(key);
				}
				var unknownPropString = unknownProps.map(function(prop) {
					return "`" + prop + "`";
				}).join(", ");
				if (unknownProps.length === 1) error("Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", unknownPropString, type);
else if (unknownProps.length > 1) error("Invalid values for props %s on <%s> tag. Either remove them from the element, or pass a string or number value to keep them in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", unknownPropString, type);
			}
		};
		function validateProperties$2(type, props, eventRegistry) {
			if (isCustomComponent(type, props)) return;
			warnUnknownProperties(type, props, eventRegistry);
		}
		var IS_EVENT_HANDLE_NON_MANAGED_NODE = 1;
		var IS_NON_DELEGATED = 2;
		var IS_CAPTURE_PHASE = 4;
		var SHOULD_NOT_PROCESS_POLYFILL_EVENT_PLUGINS = IS_EVENT_HANDLE_NON_MANAGED_NODE | IS_NON_DELEGATED | IS_CAPTURE_PHASE;
		var currentReplayingEvent = null;
		function setReplayingEvent(event) {
			if (currentReplayingEvent !== null) error("Expected currently replaying event to be null. This error is likely caused by a bug in React. Please file an issue.");
			currentReplayingEvent = event;
		}
		function resetReplayingEvent() {
			if (currentReplayingEvent === null) error("Expected currently replaying event to not be null. This error is likely caused by a bug in React. Please file an issue.");
			currentReplayingEvent = null;
		}
		function isReplayingEvent(event) {
			return event === currentReplayingEvent;
		}
		/**
		* Gets the target node from a native browser event by accounting for
		* inconsistencies in browser DOM APIs.
		*
		* @param {object} nativeEvent Native browser event.
		* @return {DOMEventTarget} Target node.
		*/
		function getEventTarget(nativeEvent) {
			var target = nativeEvent.target || nativeEvent.srcElement || window;
			if (target.correspondingUseElement) target = target.correspondingUseElement;
			return target.nodeType === TEXT_NODE ? target.parentNode : target;
		}
		var restoreImpl = null;
		var restoreTarget = null;
		var restoreQueue = null;
		function restoreStateOfTarget(target) {
			var internalInstance = getInstanceFromNode(target);
			if (!internalInstance) return;
			if (typeof restoreImpl !== "function") throw new Error("setRestoreImplementation() needs to be called to handle a target for controlled events. This error is likely caused by a bug in React. Please file an issue.");
			var stateNode = internalInstance.stateNode;
			if (stateNode) {
				var _props = getFiberCurrentPropsFromNode(stateNode);
				restoreImpl(internalInstance.stateNode, internalInstance.type, _props);
			}
		}
		function setRestoreImplementation(impl) {
			restoreImpl = impl;
		}
		function enqueueStateRestore(target) {
			if (restoreTarget) if (restoreQueue) restoreQueue.push(target);
else restoreQueue = [target];
else restoreTarget = target;
		}
		function needsStateRestore() {
			return restoreTarget !== null || restoreQueue !== null;
		}
		function restoreStateIfNeeded() {
			if (!restoreTarget) return;
			var target = restoreTarget;
			var queuedTargets = restoreQueue;
			restoreTarget = null;
			restoreQueue = null;
			restoreStateOfTarget(target);
			if (queuedTargets) for (var i$1 = 0; i$1 < queuedTargets.length; i$1++) restoreStateOfTarget(queuedTargets[i$1]);
		}
		var batchedUpdatesImpl = function(fn, bookkeeping) {
			return fn(bookkeeping);
		};
		var flushSyncImpl = function() {};
		var isInsideEventHandler = false;
		function finishEventHandler() {
			var controlledComponentsHavePendingUpdates = needsStateRestore();
			if (controlledComponentsHavePendingUpdates) {
				flushSyncImpl();
				restoreStateIfNeeded();
			}
		}
		function batchedUpdates(fn, a, b) {
			if (isInsideEventHandler) return fn(a, b);
			isInsideEventHandler = true;
			try {
				return batchedUpdatesImpl(fn, a, b);
			} finally {
				isInsideEventHandler = false;
				finishEventHandler();
			}
		}
		function setBatchingImplementation(_batchedUpdatesImpl, _discreteUpdatesImpl, _flushSyncImpl) {
			batchedUpdatesImpl = _batchedUpdatesImpl;
			flushSyncImpl = _flushSyncImpl;
		}
		function isInteractive(tag) {
			return tag === "button" || tag === "input" || tag === "select" || tag === "textarea";
		}
		function shouldPreventMouseEvent(name, type, props) {
			switch (name) {
				case "onClick":
				case "onClickCapture":
				case "onDoubleClick":
				case "onDoubleClickCapture":
				case "onMouseDown":
				case "onMouseDownCapture":
				case "onMouseMove":
				case "onMouseMoveCapture":
				case "onMouseUp":
				case "onMouseUpCapture":
				case "onMouseEnter": return !!(props.disabled && isInteractive(type));
				default: return false;
			}
		}
		/**
		* @param {object} inst The instance, which is the source of events.
		* @param {string} registrationName Name of listener (e.g. `onClick`).
		* @return {?function} The stored callback.
		*/
		function getListener(inst, registrationName) {
			var stateNode = inst.stateNode;
			if (stateNode === null) return null;
			var props = getFiberCurrentPropsFromNode(stateNode);
			if (props === null) return null;
			var listener = props[registrationName];
			if (shouldPreventMouseEvent(registrationName, inst.type, props)) return null;
			if (listener && typeof listener !== "function") throw new Error("Expected `" + registrationName + "` listener to be a function, instead got a value of `" + typeof listener + "` type.");
			return listener;
		}
		var passiveBrowserEventsSupported = false;
		if (canUseDOM) try {
			var options = {};
			Object.defineProperty(options, "passive", { get: function() {
				passiveBrowserEventsSupported = true;
			} });
			window.addEventListener("test", options, options);
			window.removeEventListener("test", options, options);
		} catch (e) {
			passiveBrowserEventsSupported = false;
		}
		function invokeGuardedCallbackProd(name, func, context, a, b, c, d, e, f) {
			var funcArgs = Array.prototype.slice.call(arguments, 3);
			try {
				func.apply(context, funcArgs);
			} catch (error$1) {
				this.onError(error$1);
			}
		}
		var invokeGuardedCallbackImpl = invokeGuardedCallbackProd;
		if (typeof window !== "undefined" && typeof window.dispatchEvent === "function" && typeof document !== "undefined" && typeof document.createEvent === "function") {
			var fakeNode = document.createElement("react");
			invokeGuardedCallbackImpl = function invokeGuardedCallbackDev(name, func, context, a, b, c, d, e, f) {
				if (typeof document === "undefined" || document === null) throw new Error("The `document` global was defined when React was initialized, but is not defined anymore. This can happen in a test environment if a component schedules an update from an asynchronous callback, but the test has already finished running. To solve this, you can either unmount the component at the end of your test (and ensure that any asynchronous operations get canceled in `componentWillUnmount`), or you can change the test itself to be asynchronous.");
				var evt = document.createEvent("Event");
				var didCall = false;
				var didError = true;
				var windowEvent = window.event;
				var windowEventDescriptor = Object.getOwnPropertyDescriptor(window, "event");
				function restoreAfterDispatch() {
					fakeNode.removeEventListener(evtType, callCallback$1, false);
					if (typeof window.event !== "undefined" && window.hasOwnProperty("event")) window.event = windowEvent;
				}
				var funcArgs = Array.prototype.slice.call(arguments, 3);
				function callCallback$1() {
					didCall = true;
					restoreAfterDispatch();
					func.apply(context, funcArgs);
					didError = false;
				}
				var error$1;
				var didSetError = false;
				var isCrossOriginError = false;
				function handleWindowError(event) {
					error$1 = event.error;
					didSetError = true;
					if (error$1 === null && event.colno === 0 && event.lineno === 0) isCrossOriginError = true;
					if (event.defaultPrevented) {
						if (error$1 != null && typeof error$1 === "object") try {
							error$1._suppressLogging = true;
						} catch (inner) {}
					}
				}
				var evtType = "react-" + (name ? name : "invokeguardedcallback");
				window.addEventListener("error", handleWindowError);
				fakeNode.addEventListener(evtType, callCallback$1, false);
				evt.initEvent(evtType, false, false);
				fakeNode.dispatchEvent(evt);
				if (windowEventDescriptor) Object.defineProperty(window, "event", windowEventDescriptor);
				if (didCall && didError) {
					if (!didSetError) error$1 = new Error("An error was thrown inside one of your components, but React doesn't know what it was. This is likely due to browser flakiness. React does its best to preserve the \"Pause on exceptions\" behavior of the DevTools, which requires some DEV-mode only tricks. It's possible that these don't work in your browser. Try triggering the error in production mode, or switching to a modern browser. If you suspect that this is actually an issue with React, please file an issue.");
else if (isCrossOriginError) error$1 = new Error("A cross-origin error was thrown. React doesn't have access to the actual error object in development. See https://reactjs.org/link/crossorigin-error for more information.");
					this.onError(error$1);
				}
				window.removeEventListener("error", handleWindowError);
				if (!didCall) {
					restoreAfterDispatch();
					return invokeGuardedCallbackProd.apply(this, arguments);
				}
			};
		}
		var invokeGuardedCallbackImpl$1 = invokeGuardedCallbackImpl;
		var hasError = false;
		var caughtError = null;
		var hasRethrowError = false;
		var rethrowError = null;
		var reporter = { onError: function(error$1) {
			hasError = true;
			caughtError = error$1;
		} };
		/**
		* Call a function while guarding against errors that happens within it.
		* Returns an error if it throws, otherwise null.
		*
		* In production, this is implemented using a try-catch. The reason we don't
		* use a try-catch directly is so that we can swap out a different
		* implementation in DEV mode.
		*
		* @param {String} name of the guard to use for logging or debugging
		* @param {Function} func The function to invoke
		* @param {*} context The context to use when calling the function
		* @param {...*} args Arguments for function
		*/
		function invokeGuardedCallback(name, func, context, a, b, c, d, e, f) {
			hasError = false;
			caughtError = null;
			invokeGuardedCallbackImpl$1.apply(reporter, arguments);
		}
		/**
		* Same as invokeGuardedCallback, but instead of returning an error, it stores
		* it in a global so it can be rethrown by `rethrowCaughtError` later.
		* TODO: See if caughtError and rethrowError can be unified.
		*
		* @param {String} name of the guard to use for logging or debugging
		* @param {Function} func The function to invoke
		* @param {*} context The context to use when calling the function
		* @param {...*} args Arguments for function
		*/
		function invokeGuardedCallbackAndCatchFirstError(name, func, context, a, b, c, d, e, f) {
			invokeGuardedCallback.apply(this, arguments);
			if (hasError) {
				var error$1 = clearCaughtError();
				if (!hasRethrowError) {
					hasRethrowError = true;
					rethrowError = error$1;
				}
			}
		}
		/**
		* During execution of guarded functions we will capture the first error which
		* we will rethrow to be handled by the top level error handler.
		*/
		function rethrowCaughtError() {
			if (hasRethrowError) {
				var error$1 = rethrowError;
				hasRethrowError = false;
				rethrowError = null;
				throw error$1;
			}
		}
		function hasCaughtError() {
			return hasError;
		}
		function clearCaughtError() {
			if (hasError) {
				var error$1 = caughtError;
				hasError = false;
				caughtError = null;
				return error$1;
			} else throw new Error("clearCaughtError was called but no error was captured. This error is likely caused by a bug in React. Please file an issue.");
		}
		/**
		* `ReactInstanceMap` maintains a mapping from a public facing stateful
		* instance (key) and the internal representation (value). This allows public
		* methods to accept the user facing instance as an argument and map them back
		* to internal methods.
		*
		* Note that this module is currently shared and assumed to be stateless.
		* If this becomes an actual Map, that will break.
		*/
		function get(key) {
			return key._reactInternals;
		}
		function has(key) {
			return key._reactInternals !== undefined;
		}
		function set(key, value) {
			key._reactInternals = value;
		}
		var NoFlags = 0;
		var PerformedWork = 1;
		var Placement = 2;
		var Update = 4;
		var ChildDeletion = 16;
		var ContentReset = 32;
		var Callback = 64;
		var DidCapture = 128;
		var ForceClientRender = 256;
		var Ref = 512;
		var Snapshot = 1024;
		var Passive = 2048;
		var Hydrating = 4096;
		var Visibility = 8192;
		var StoreConsistency = 16384;
		var LifecycleEffectMask = Passive | Update | Callback | Ref | Snapshot | StoreConsistency;
		var HostEffectMask = 32767;
		var Incomplete = 32768;
		var ShouldCapture = 65536;
		var ForceUpdateForLegacySuspense = 131072;
		var Forked = 1048576;
		var RefStatic = 2097152;
		var LayoutStatic = 4194304;
		var PassiveStatic = 8388608;
		var MountLayoutDev = 16777216;
		var MountPassiveDev = 33554432;
		var BeforeMutationMask = Update | Snapshot | 0;
		var MutationMask = Placement | Update | ChildDeletion | ContentReset | Ref | Hydrating | Visibility;
		var LayoutMask = Update | Callback | Ref | Visibility;
		var PassiveMask = Passive | ChildDeletion;
		var StaticMask = LayoutStatic | PassiveStatic | RefStatic;
		var ReactCurrentOwner = ReactSharedInternals.ReactCurrentOwner;
		function getNearestMountedFiber(fiber) {
			var node = fiber;
			var nearestMounted = fiber;
			if (!fiber.alternate) {
				var nextNode = node;
				do {
					node = nextNode;
					if ((node.flags & (Placement | Hydrating)) !== NoFlags) nearestMounted = node.return;
					nextNode = node.return;
				} while (nextNode);
			} else while (node.return) node = node.return;
			if (node.tag === HostRoot) return nearestMounted;
			return null;
		}
		function getSuspenseInstanceFromFiber(fiber) {
			if (fiber.tag === SuspenseComponent) {
				var suspenseState = fiber.memoizedState;
				if (suspenseState === null) {
					var current$1 = fiber.alternate;
					if (current$1 !== null) suspenseState = current$1.memoizedState;
				}
				if (suspenseState !== null) return suspenseState.dehydrated;
			}
			return null;
		}
		function getContainerFromFiber(fiber) {
			return fiber.tag === HostRoot ? fiber.stateNode.containerInfo : null;
		}
		function isFiberMounted(fiber) {
			return getNearestMountedFiber(fiber) === fiber;
		}
		function isMounted(component) {
			{
				var owner = ReactCurrentOwner.current;
				if (owner !== null && owner.tag === ClassComponent) {
					var ownerFiber = owner;
					var instance = ownerFiber.stateNode;
					if (!instance._warnedAboutRefsInRender) error("%s is accessing isMounted inside its render() function. render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", getComponentNameFromFiber(ownerFiber) || "A component");
					instance._warnedAboutRefsInRender = true;
				}
			}
			var fiber = get(component);
			if (!fiber) return false;
			return getNearestMountedFiber(fiber) === fiber;
		}
		function assertIsMounted(fiber) {
			if (getNearestMountedFiber(fiber) !== fiber) throw new Error("Unable to find node on an unmounted component.");
		}
		function findCurrentFiberUsingSlowPath(fiber) {
			var alternate = fiber.alternate;
			if (!alternate) {
				var nearestMounted = getNearestMountedFiber(fiber);
				if (nearestMounted === null) throw new Error("Unable to find node on an unmounted component.");
				if (nearestMounted !== fiber) return null;
				return fiber;
			}
			var a = fiber;
			var b = alternate;
			while (true) {
				var parentA = a.return;
				if (parentA === null) break;
				var parentB = parentA.alternate;
				if (parentB === null) {
					var nextParent = parentA.return;
					if (nextParent !== null) {
						a = b = nextParent;
						continue;
					}
					break;
				}
				if (parentA.child === parentB.child) {
					var child = parentA.child;
					while (child) {
						if (child === a) {
							assertIsMounted(parentA);
							return fiber;
						}
						if (child === b) {
							assertIsMounted(parentA);
							return alternate;
						}
						child = child.sibling;
					}
					throw new Error("Unable to find node on an unmounted component.");
				}
				if (a.return !== b.return) {
					a = parentA;
					b = parentB;
				} else {
					var didFindChild = false;
					var _child = parentA.child;
					while (_child) {
						if (_child === a) {
							didFindChild = true;
							a = parentA;
							b = parentB;
							break;
						}
						if (_child === b) {
							didFindChild = true;
							b = parentA;
							a = parentB;
							break;
						}
						_child = _child.sibling;
					}
					if (!didFindChild) {
						_child = parentB.child;
						while (_child) {
							if (_child === a) {
								didFindChild = true;
								a = parentB;
								b = parentA;
								break;
							}
							if (_child === b) {
								didFindChild = true;
								b = parentB;
								a = parentA;
								break;
							}
							_child = _child.sibling;
						}
						if (!didFindChild) throw new Error("Child was not found in either parent set. This indicates a bug in React related to the return pointer. Please file an issue.");
					}
				}
				if (a.alternate !== b) throw new Error("Return fibers should always be each others' alternates. This error is likely caused by a bug in React. Please file an issue.");
			}
			if (a.tag !== HostRoot) throw new Error("Unable to find node on an unmounted component.");
			if (a.stateNode.current === a) return fiber;
			return alternate;
		}
		function findCurrentHostFiber(parent) {
			var currentParent = findCurrentFiberUsingSlowPath(parent);
			return currentParent !== null ? findCurrentHostFiberImpl(currentParent) : null;
		}
		function findCurrentHostFiberImpl(node) {
			if (node.tag === HostComponent || node.tag === HostText) return node;
			var child = node.child;
			while (child !== null) {
				var match = findCurrentHostFiberImpl(child);
				if (match !== null) return match;
				child = child.sibling;
			}
			return null;
		}
		function findCurrentHostFiberWithNoPortals(parent) {
			var currentParent = findCurrentFiberUsingSlowPath(parent);
			return currentParent !== null ? findCurrentHostFiberWithNoPortalsImpl(currentParent) : null;
		}
		function findCurrentHostFiberWithNoPortalsImpl(node) {
			if (node.tag === HostComponent || node.tag === HostText) return node;
			var child = node.child;
			while (child !== null) {
				if (child.tag !== HostPortal) {
					var match = findCurrentHostFiberWithNoPortalsImpl(child);
					if (match !== null) return match;
				}
				child = child.sibling;
			}
			return null;
		}
		var scheduleCallback = Scheduler.unstable_scheduleCallback;
		var cancelCallback = Scheduler.unstable_cancelCallback;
		var shouldYield = Scheduler.unstable_shouldYield;
		var requestPaint = Scheduler.unstable_requestPaint;
		var now = Scheduler.unstable_now;
		var getCurrentPriorityLevel = Scheduler.unstable_getCurrentPriorityLevel;
		var ImmediatePriority = Scheduler.unstable_ImmediatePriority;
		var UserBlockingPriority = Scheduler.unstable_UserBlockingPriority;
		var NormalPriority = Scheduler.unstable_NormalPriority;
		var LowPriority = Scheduler.unstable_LowPriority;
		var IdlePriority = Scheduler.unstable_IdlePriority;
		var unstable_yieldValue = Scheduler.unstable_yieldValue;
		var unstable_setDisableYieldValue = Scheduler.unstable_setDisableYieldValue;
		var rendererID = null;
		var injectedHook = null;
		var injectedProfilingHooks = null;
		var hasLoggedError = false;
		var isDevToolsPresent = typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== "undefined";
		function injectInternals(internals) {
			if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === "undefined") return false;
			var hook = __REACT_DEVTOOLS_GLOBAL_HOOK__;
			if (hook.isDisabled) return true;
			if (!hook.supportsFiber) {
				error("The installed version of React DevTools is too old and will not work with the current version of React. Please update React DevTools. https://reactjs.org/link/react-devtools");
				return true;
			}
			try {
				if (enableSchedulingProfiler) internals = assign({}, internals, {
					getLaneLabelMap,
					injectProfilingHooks
				});
				rendererID = hook.inject(internals);
				injectedHook = hook;
			} catch (err) {
				error("React instrumentation encountered an error: %s.", err);
			}
			if (hook.checkDCE) return true;
else return false;
		}
		function onScheduleRoot(root$1, children) {
			if (injectedHook && typeof injectedHook.onScheduleFiberRoot === "function") try {
				injectedHook.onScheduleFiberRoot(rendererID, root$1, children);
			} catch (err) {
				if (!hasLoggedError) {
					hasLoggedError = true;
					error("React instrumentation encountered an error: %s", err);
				}
			}
		}
		function onCommitRoot(root$1, eventPriority) {
			if (injectedHook && typeof injectedHook.onCommitFiberRoot === "function") try {
				var didError = (root$1.current.flags & DidCapture) === DidCapture;
				if (enableProfilerTimer) {
					var schedulerPriority;
					switch (eventPriority) {
						case DiscreteEventPriority:
							schedulerPriority = ImmediatePriority;
							break;
						case ContinuousEventPriority:
							schedulerPriority = UserBlockingPriority;
							break;
						case DefaultEventPriority:
							schedulerPriority = NormalPriority;
							break;
						case IdleEventPriority:
							schedulerPriority = IdlePriority;
							break;
						default:
							schedulerPriority = NormalPriority;
							break;
					}
					injectedHook.onCommitFiberRoot(rendererID, root$1, schedulerPriority, didError);
				} else injectedHook.onCommitFiberRoot(rendererID, root$1, undefined, didError);
			} catch (err) {
				if (!hasLoggedError) {
					hasLoggedError = true;
					error("React instrumentation encountered an error: %s", err);
				}
			}
		}
		function onPostCommitRoot(root$1) {
			if (injectedHook && typeof injectedHook.onPostCommitFiberRoot === "function") try {
				injectedHook.onPostCommitFiberRoot(rendererID, root$1);
			} catch (err) {
				if (!hasLoggedError) {
					hasLoggedError = true;
					error("React instrumentation encountered an error: %s", err);
				}
			}
		}
		function onCommitUnmount(fiber) {
			if (injectedHook && typeof injectedHook.onCommitFiberUnmount === "function") try {
				injectedHook.onCommitFiberUnmount(rendererID, fiber);
			} catch (err) {
				if (!hasLoggedError) {
					hasLoggedError = true;
					error("React instrumentation encountered an error: %s", err);
				}
			}
		}
		function setIsStrictModeForDevtools(newIsStrictMode) {
			{
				if (typeof unstable_yieldValue === "function") {
					unstable_setDisableYieldValue(newIsStrictMode);
					setSuppressWarning(newIsStrictMode);
				}
				if (injectedHook && typeof injectedHook.setStrictMode === "function") try {
					injectedHook.setStrictMode(rendererID, newIsStrictMode);
				} catch (err) {
					if (!hasLoggedError) {
						hasLoggedError = true;
						error("React instrumentation encountered an error: %s", err);
					}
				}
			}
		}
		function injectProfilingHooks(profilingHooks) {
			injectedProfilingHooks = profilingHooks;
		}
		function getLaneLabelMap() {
			{
				var map = new Map();
				var lane = 1;
				for (var index$1 = 0; index$1 < TotalLanes; index$1++) {
					var label = getLabelForLane(lane);
					map.set(lane, label);
					lane *= 2;
				}
				return map;
			}
		}
		function markCommitStarted(lanes) {
			if (injectedProfilingHooks !== null && typeof injectedProfilingHooks.markCommitStarted === "function") injectedProfilingHooks.markCommitStarted(lanes);
		}
		function markCommitStopped() {
			if (injectedProfilingHooks !== null && typeof injectedProfilingHooks.markCommitStopped === "function") injectedProfilingHooks.markCommitStopped();
		}
		function markComponentRenderStarted(fiber) {
			if (injectedProfilingHooks !== null && typeof injectedProfilingHooks.markComponentRenderStarted === "function") injectedProfilingHooks.markComponentRenderStarted(fiber);
		}
		function markComponentRenderStopped() {
			if (injectedProfilingHooks !== null && typeof injectedProfilingHooks.markComponentRenderStopped === "function") injectedProfilingHooks.markComponentRenderStopped();
		}
		function markComponentPassiveEffectMountStarted(fiber) {
			if (injectedProfilingHooks !== null && typeof injectedProfilingHooks.markComponentPassiveEffectMountStarted === "function") injectedProfilingHooks.markComponentPassiveEffectMountStarted(fiber);
		}
		function markComponentPassiveEffectMountStopped() {
			if (injectedProfilingHooks !== null && typeof injectedProfilingHooks.markComponentPassiveEffectMountStopped === "function") injectedProfilingHooks.markComponentPassiveEffectMountStopped();
		}
		function markComponentPassiveEffectUnmountStarted(fiber) {
			if (injectedProfilingHooks !== null && typeof injectedProfilingHooks.markComponentPassiveEffectUnmountStarted === "function") injectedProfilingHooks.markComponentPassiveEffectUnmountStarted(fiber);
		}
		function markComponentPassiveEffectUnmountStopped() {
			if (injectedProfilingHooks !== null && typeof injectedProfilingHooks.markComponentPassiveEffectUnmountStopped === "function") injectedProfilingHooks.markComponentPassiveEffectUnmountStopped();
		}
		function markComponentLayoutEffectMountStarted(fiber) {
			if (injectedProfilingHooks !== null && typeof injectedProfilingHooks.markComponentLayoutEffectMountStarted === "function") injectedProfilingHooks.markComponentLayoutEffectMountStarted(fiber);
		}
		function markComponentLayoutEffectMountStopped() {
			if (injectedProfilingHooks !== null && typeof injectedProfilingHooks.markComponentLayoutEffectMountStopped === "function") injectedProfilingHooks.markComponentLayoutEffectMountStopped();
		}
		function markComponentLayoutEffectUnmountStarted(fiber) {
			if (injectedProfilingHooks !== null && typeof injectedProfilingHooks.markComponentLayoutEffectUnmountStarted === "function") injectedProfilingHooks.markComponentLayoutEffectUnmountStarted(fiber);
		}
		function markComponentLayoutEffectUnmountStopped() {
			if (injectedProfilingHooks !== null && typeof injectedProfilingHooks.markComponentLayoutEffectUnmountStopped === "function") injectedProfilingHooks.markComponentLayoutEffectUnmountStopped();
		}
		function markComponentErrored(fiber, thrownValue, lanes) {
			if (injectedProfilingHooks !== null && typeof injectedProfilingHooks.markComponentErrored === "function") injectedProfilingHooks.markComponentErrored(fiber, thrownValue, lanes);
		}
		function markComponentSuspended(fiber, wakeable, lanes) {
			if (injectedProfilingHooks !== null && typeof injectedProfilingHooks.markComponentSuspended === "function") injectedProfilingHooks.markComponentSuspended(fiber, wakeable, lanes);
		}
		function markLayoutEffectsStarted(lanes) {
			if (injectedProfilingHooks !== null && typeof injectedProfilingHooks.markLayoutEffectsStarted === "function") injectedProfilingHooks.markLayoutEffectsStarted(lanes);
		}
		function markLayoutEffectsStopped() {
			if (injectedProfilingHooks !== null && typeof injectedProfilingHooks.markLayoutEffectsStopped === "function") injectedProfilingHooks.markLayoutEffectsStopped();
		}
		function markPassiveEffectsStarted(lanes) {
			if (injectedProfilingHooks !== null && typeof injectedProfilingHooks.markPassiveEffectsStarted === "function") injectedProfilingHooks.markPassiveEffectsStarted(lanes);
		}
		function markPassiveEffectsStopped() {
			if (injectedProfilingHooks !== null && typeof injectedProfilingHooks.markPassiveEffectsStopped === "function") injectedProfilingHooks.markPassiveEffectsStopped();
		}
		function markRenderStarted(lanes) {
			if (injectedProfilingHooks !== null && typeof injectedProfilingHooks.markRenderStarted === "function") injectedProfilingHooks.markRenderStarted(lanes);
		}
		function markRenderYielded() {
			if (injectedProfilingHooks !== null && typeof injectedProfilingHooks.markRenderYielded === "function") injectedProfilingHooks.markRenderYielded();
		}
		function markRenderStopped() {
			if (injectedProfilingHooks !== null && typeof injectedProfilingHooks.markRenderStopped === "function") injectedProfilingHooks.markRenderStopped();
		}
		function markRenderScheduled(lane) {
			if (injectedProfilingHooks !== null && typeof injectedProfilingHooks.markRenderScheduled === "function") injectedProfilingHooks.markRenderScheduled(lane);
		}
		function markForceUpdateScheduled(fiber, lane) {
			if (injectedProfilingHooks !== null && typeof injectedProfilingHooks.markForceUpdateScheduled === "function") injectedProfilingHooks.markForceUpdateScheduled(fiber, lane);
		}
		function markStateUpdateScheduled(fiber, lane) {
			if (injectedProfilingHooks !== null && typeof injectedProfilingHooks.markStateUpdateScheduled === "function") injectedProfilingHooks.markStateUpdateScheduled(fiber, lane);
		}
		var NoMode = 0;
		var ConcurrentMode = 1;
		var ProfileMode = 2;
		var StrictLegacyMode = 8;
		var StrictEffectsMode = 16;
		var clz32 = Math.clz32 ? Math.clz32 : clz32Fallback;
		var log = Math.log;
		var LN2 = Math.LN2;
		function clz32Fallback(x) {
			var asUint = x >>> 0;
			if (asUint === 0) return 32;
			return 31 - (log(asUint) / LN2 | 0) | 0;
		}
		var TotalLanes = 31;
		var NoLanes = 0;
		var NoLane = 0;
		var SyncLane = 1;
		var InputContinuousHydrationLane = 2;
		var InputContinuousLane = 4;
		var DefaultHydrationLane = 8;
		var DefaultLane = 16;
		var TransitionHydrationLane = 32;
		var TransitionLanes = 4194240;
		var TransitionLane1 = 64;
		var TransitionLane2 = 128;
		var TransitionLane3 = 256;
		var TransitionLane4 = 512;
		var TransitionLane5 = 1024;
		var TransitionLane6 = 2048;
		var TransitionLane7 = 4096;
		var TransitionLane8 = 8192;
		var TransitionLane9 = 16384;
		var TransitionLane10 = 32768;
		var TransitionLane11 = 65536;
		var TransitionLane12 = 131072;
		var TransitionLane13 = 262144;
		var TransitionLane14 = 524288;
		var TransitionLane15 = 1048576;
		var TransitionLane16 = 2097152;
		var RetryLanes = 130023424;
		var RetryLane1 = 4194304;
		var RetryLane2 = 8388608;
		var RetryLane3 = 16777216;
		var RetryLane4 = 33554432;
		var RetryLane5 = 67108864;
		var SomeRetryLane = RetryLane1;
		var SelectiveHydrationLane = 134217728;
		var NonIdleLanes = 268435455;
		var IdleHydrationLane = 268435456;
		var IdleLane = 536870912;
		var OffscreenLane = 1073741824;
		function getLabelForLane(lane) {
			{
				if (lane & SyncLane) return "Sync";
				if (lane & InputContinuousHydrationLane) return "InputContinuousHydration";
				if (lane & InputContinuousLane) return "InputContinuous";
				if (lane & DefaultHydrationLane) return "DefaultHydration";
				if (lane & DefaultLane) return "Default";
				if (lane & TransitionHydrationLane) return "TransitionHydration";
				if (lane & TransitionLanes) return "Transition";
				if (lane & RetryLanes) return "Retry";
				if (lane & SelectiveHydrationLane) return "SelectiveHydration";
				if (lane & IdleHydrationLane) return "IdleHydration";
				if (lane & IdleLane) return "Idle";
				if (lane & OffscreenLane) return "Offscreen";
			}
		}
		var NoTimestamp = -1;
		var nextTransitionLane = TransitionLane1;
		var nextRetryLane = RetryLane1;
		function getHighestPriorityLanes(lanes) {
			switch (getHighestPriorityLane(lanes)) {
				case SyncLane: return SyncLane;
				case InputContinuousHydrationLane: return InputContinuousHydrationLane;
				case InputContinuousLane: return InputContinuousLane;
				case DefaultHydrationLane: return DefaultHydrationLane;
				case DefaultLane: return DefaultLane;
				case TransitionHydrationLane: return TransitionHydrationLane;
				case TransitionLane1:
				case TransitionLane2:
				case TransitionLane3:
				case TransitionLane4:
				case TransitionLane5:
				case TransitionLane6:
				case TransitionLane7:
				case TransitionLane8:
				case TransitionLane9:
				case TransitionLane10:
				case TransitionLane11:
				case TransitionLane12:
				case TransitionLane13:
				case TransitionLane14:
				case TransitionLane15:
				case TransitionLane16: return lanes & TransitionLanes;
				case RetryLane1:
				case RetryLane2:
				case RetryLane3:
				case RetryLane4:
				case RetryLane5: return lanes & RetryLanes;
				case SelectiveHydrationLane: return SelectiveHydrationLane;
				case IdleHydrationLane: return IdleHydrationLane;
				case IdleLane: return IdleLane;
				case OffscreenLane: return OffscreenLane;
				default:
					error("Should have found matching lanes. This is a bug in React.");
					return lanes;
			}
		}
		function getNextLanes(root$1, wipLanes) {
			var pendingLanes = root$1.pendingLanes;
			if (pendingLanes === NoLanes) return NoLanes;
			var nextLanes = NoLanes;
			var suspendedLanes = root$1.suspendedLanes;
			var pingedLanes = root$1.pingedLanes;
			var nonIdlePendingLanes = pendingLanes & NonIdleLanes;
			if (nonIdlePendingLanes !== NoLanes) {
				var nonIdleUnblockedLanes = nonIdlePendingLanes & ~suspendedLanes;
				if (nonIdleUnblockedLanes !== NoLanes) nextLanes = getHighestPriorityLanes(nonIdleUnblockedLanes);
else {
					var nonIdlePingedLanes = nonIdlePendingLanes & pingedLanes;
					if (nonIdlePingedLanes !== NoLanes) nextLanes = getHighestPriorityLanes(nonIdlePingedLanes);
				}
			} else {
				var unblockedLanes = pendingLanes & ~suspendedLanes;
				if (unblockedLanes !== NoLanes) nextLanes = getHighestPriorityLanes(unblockedLanes);
else if (pingedLanes !== NoLanes) nextLanes = getHighestPriorityLanes(pingedLanes);
			}
			if (nextLanes === NoLanes) return NoLanes;
			if (wipLanes !== NoLanes && wipLanes !== nextLanes && (wipLanes & suspendedLanes) === NoLanes) {
				var nextLane = getHighestPriorityLane(nextLanes);
				var wipLane = getHighestPriorityLane(wipLanes);
				if (nextLane >= wipLane || nextLane === DefaultLane && (wipLane & TransitionLanes) !== NoLanes) return wipLanes;
			}
			if ((nextLanes & InputContinuousLane) !== NoLanes) nextLanes |= pendingLanes & DefaultLane;
			var entangledLanes = root$1.entangledLanes;
			if (entangledLanes !== NoLanes) {
				var entanglements = root$1.entanglements;
				var lanes = nextLanes & entangledLanes;
				while (lanes > 0) {
					var index$1 = pickArbitraryLaneIndex(lanes);
					var lane = 1 << index$1;
					nextLanes |= entanglements[index$1];
					lanes &= ~lane;
				}
			}
			return nextLanes;
		}
		function getMostRecentEventTime(root$1, lanes) {
			var eventTimes = root$1.eventTimes;
			var mostRecentEventTime = NoTimestamp;
			while (lanes > 0) {
				var index$1 = pickArbitraryLaneIndex(lanes);
				var lane = 1 << index$1;
				var eventTime = eventTimes[index$1];
				if (eventTime > mostRecentEventTime) mostRecentEventTime = eventTime;
				lanes &= ~lane;
			}
			return mostRecentEventTime;
		}
		function computeExpirationTime(lane, currentTime) {
			switch (lane) {
				case SyncLane:
				case InputContinuousHydrationLane:
				case InputContinuousLane: return currentTime + 250;
				case DefaultHydrationLane:
				case DefaultLane:
				case TransitionHydrationLane:
				case TransitionLane1:
				case TransitionLane2:
				case TransitionLane3:
				case TransitionLane4:
				case TransitionLane5:
				case TransitionLane6:
				case TransitionLane7:
				case TransitionLane8:
				case TransitionLane9:
				case TransitionLane10:
				case TransitionLane11:
				case TransitionLane12:
				case TransitionLane13:
				case TransitionLane14:
				case TransitionLane15:
				case TransitionLane16: return currentTime + 5e3;
				case RetryLane1:
				case RetryLane2:
				case RetryLane3:
				case RetryLane4:
				case RetryLane5: return NoTimestamp;
				case SelectiveHydrationLane:
				case IdleHydrationLane:
				case IdleLane:
				case OffscreenLane: return NoTimestamp;
				default:
					error("Should have found matching lanes. This is a bug in React.");
					return NoTimestamp;
			}
		}
		function markStarvedLanesAsExpired(root$1, currentTime) {
			var pendingLanes = root$1.pendingLanes;
			var suspendedLanes = root$1.suspendedLanes;
			var pingedLanes = root$1.pingedLanes;
			var expirationTimes = root$1.expirationTimes;
			var lanes = pendingLanes;
			while (lanes > 0) {
				var index$1 = pickArbitraryLaneIndex(lanes);
				var lane = 1 << index$1;
				var expirationTime = expirationTimes[index$1];
				if (expirationTime === NoTimestamp) {
					if ((lane & suspendedLanes) === NoLanes || (lane & pingedLanes) !== NoLanes) expirationTimes[index$1] = computeExpirationTime(lane, currentTime);
				} else if (expirationTime <= currentTime) root$1.expiredLanes |= lane;
				lanes &= ~lane;
			}
		}
		function getHighestPriorityPendingLanes(root$1) {
			return getHighestPriorityLanes(root$1.pendingLanes);
		}
		function getLanesToRetrySynchronouslyOnError(root$1) {
			var everythingButOffscreen = root$1.pendingLanes & ~OffscreenLane;
			if (everythingButOffscreen !== NoLanes) return everythingButOffscreen;
			if (everythingButOffscreen & OffscreenLane) return OffscreenLane;
			return NoLanes;
		}
		function includesSyncLane(lanes) {
			return (lanes & SyncLane) !== NoLanes;
		}
		function includesNonIdleWork(lanes) {
			return (lanes & NonIdleLanes) !== NoLanes;
		}
		function includesOnlyRetries(lanes) {
			return (lanes & RetryLanes) === lanes;
		}
		function includesOnlyNonUrgentLanes(lanes) {
			var UrgentLanes = SyncLane | InputContinuousLane | DefaultLane;
			return (lanes & UrgentLanes) === NoLanes;
		}
		function includesOnlyTransitions(lanes) {
			return (lanes & TransitionLanes) === lanes;
		}
		function includesBlockingLane(root$1, lanes) {
			var SyncDefaultLanes = InputContinuousHydrationLane | InputContinuousLane | DefaultHydrationLane | DefaultLane;
			return (lanes & SyncDefaultLanes) !== NoLanes;
		}
		function includesExpiredLane(root$1, lanes) {
			return (lanes & root$1.expiredLanes) !== NoLanes;
		}
		function isTransitionLane(lane) {
			return (lane & TransitionLanes) !== NoLanes;
		}
		function claimNextTransitionLane() {
			var lane = nextTransitionLane;
			nextTransitionLane <<= 1;
			if ((nextTransitionLane & TransitionLanes) === NoLanes) nextTransitionLane = TransitionLane1;
			return lane;
		}
		function claimNextRetryLane() {
			var lane = nextRetryLane;
			nextRetryLane <<= 1;
			if ((nextRetryLane & RetryLanes) === NoLanes) nextRetryLane = RetryLane1;
			return lane;
		}
		function getHighestPriorityLane(lanes) {
			return lanes & -lanes;
		}
		function pickArbitraryLane(lanes) {
			return getHighestPriorityLane(lanes);
		}
		function pickArbitraryLaneIndex(lanes) {
			return 31 - clz32(lanes);
		}
		function laneToIndex(lane) {
			return pickArbitraryLaneIndex(lane);
		}
		function includesSomeLane(a, b) {
			return (a & b) !== NoLanes;
		}
		function isSubsetOfLanes(set$1, subset) {
			return (set$1 & subset) === subset;
		}
		function mergeLanes(a, b) {
			return a | b;
		}
		function removeLanes(set$1, subset) {
			return set$1 & ~subset;
		}
		function intersectLanes(a, b) {
			return a & b;
		}
		function laneToLanes(lane) {
			return lane;
		}
		function higherPriorityLane(a, b) {
			return a !== NoLane && a < b ? a : b;
		}
		function createLaneMap(initial) {
			var laneMap = [];
			for (var i$1 = 0; i$1 < TotalLanes; i$1++) laneMap.push(initial);
			return laneMap;
		}
		function markRootUpdated(root$1, updateLane, eventTime) {
			root$1.pendingLanes |= updateLane;
			if (updateLane !== IdleLane) {
				root$1.suspendedLanes = NoLanes;
				root$1.pingedLanes = NoLanes;
			}
			var eventTimes = root$1.eventTimes;
			var index$1 = laneToIndex(updateLane);
			eventTimes[index$1] = eventTime;
		}
		function markRootSuspended(root$1, suspendedLanes) {
			root$1.suspendedLanes |= suspendedLanes;
			root$1.pingedLanes &= ~suspendedLanes;
			var expirationTimes = root$1.expirationTimes;
			var lanes = suspendedLanes;
			while (lanes > 0) {
				var index$1 = pickArbitraryLaneIndex(lanes);
				var lane = 1 << index$1;
				expirationTimes[index$1] = NoTimestamp;
				lanes &= ~lane;
			}
		}
		function markRootPinged(root$1, pingedLanes, eventTime) {
			root$1.pingedLanes |= root$1.suspendedLanes & pingedLanes;
		}
		function markRootFinished(root$1, remainingLanes) {
			var noLongerPendingLanes = root$1.pendingLanes & ~remainingLanes;
			root$1.pendingLanes = remainingLanes;
			root$1.suspendedLanes = NoLanes;
			root$1.pingedLanes = NoLanes;
			root$1.expiredLanes &= remainingLanes;
			root$1.mutableReadLanes &= remainingLanes;
			root$1.entangledLanes &= remainingLanes;
			var entanglements = root$1.entanglements;
			var eventTimes = root$1.eventTimes;
			var expirationTimes = root$1.expirationTimes;
			var lanes = noLongerPendingLanes;
			while (lanes > 0) {
				var index$1 = pickArbitraryLaneIndex(lanes);
				var lane = 1 << index$1;
				entanglements[index$1] = NoLanes;
				eventTimes[index$1] = NoTimestamp;
				expirationTimes[index$1] = NoTimestamp;
				lanes &= ~lane;
			}
		}
		function markRootEntangled(root$1, entangledLanes) {
			var rootEntangledLanes = root$1.entangledLanes |= entangledLanes;
			var entanglements = root$1.entanglements;
			var lanes = rootEntangledLanes;
			while (lanes) {
				var index$1 = pickArbitraryLaneIndex(lanes);
				var lane = 1 << index$1;
				if (lane & entangledLanes | entanglements[index$1] & entangledLanes) entanglements[index$1] |= entangledLanes;
				lanes &= ~lane;
			}
		}
		function getBumpedLaneForHydration(root$1, renderLanes$1) {
			var renderLane = getHighestPriorityLane(renderLanes$1);
			var lane;
			switch (renderLane) {
				case InputContinuousLane:
					lane = InputContinuousHydrationLane;
					break;
				case DefaultLane:
					lane = DefaultHydrationLane;
					break;
				case TransitionLane1:
				case TransitionLane2:
				case TransitionLane3:
				case TransitionLane4:
				case TransitionLane5:
				case TransitionLane6:
				case TransitionLane7:
				case TransitionLane8:
				case TransitionLane9:
				case TransitionLane10:
				case TransitionLane11:
				case TransitionLane12:
				case TransitionLane13:
				case TransitionLane14:
				case TransitionLane15:
				case TransitionLane16:
				case RetryLane1:
				case RetryLane2:
				case RetryLane3:
				case RetryLane4:
				case RetryLane5:
					lane = TransitionHydrationLane;
					break;
				case IdleLane:
					lane = IdleHydrationLane;
					break;
				default:
					lane = NoLane;
					break;
			}
			if ((lane & (root$1.suspendedLanes | renderLanes$1)) !== NoLane) return NoLane;
			return lane;
		}
		function addFiberToLanesMap(root$1, fiber, lanes) {
			if (!isDevToolsPresent) return;
			var pendingUpdatersLaneMap = root$1.pendingUpdatersLaneMap;
			while (lanes > 0) {
				var index$1 = laneToIndex(lanes);
				var lane = 1 << index$1;
				var updaters = pendingUpdatersLaneMap[index$1];
				updaters.add(fiber);
				lanes &= ~lane;
			}
		}
		function movePendingFibersToMemoized(root$1, lanes) {
			if (!isDevToolsPresent) return;
			var pendingUpdatersLaneMap = root$1.pendingUpdatersLaneMap;
			var memoizedUpdaters = root$1.memoizedUpdaters;
			while (lanes > 0) {
				var index$1 = laneToIndex(lanes);
				var lane = 1 << index$1;
				var updaters = pendingUpdatersLaneMap[index$1];
				if (updaters.size > 0) {
					updaters.forEach(function(fiber) {
						var alternate = fiber.alternate;
						if (alternate === null || !memoizedUpdaters.has(alternate)) memoizedUpdaters.add(fiber);
					});
					updaters.clear();
				}
				lanes &= ~lane;
			}
		}
		function getTransitionsForLanes(root$1, lanes) {
			return null;
		}
		var DiscreteEventPriority = SyncLane;
		var ContinuousEventPriority = InputContinuousLane;
		var DefaultEventPriority = DefaultLane;
		var IdleEventPriority = IdleLane;
		var currentUpdatePriority = NoLane;
		function getCurrentUpdatePriority() {
			return currentUpdatePriority;
		}
		function setCurrentUpdatePriority(newPriority) {
			currentUpdatePriority = newPriority;
		}
		function runWithPriority(priority, fn) {
			var previousPriority = currentUpdatePriority;
			try {
				currentUpdatePriority = priority;
				return fn();
			} finally {
				currentUpdatePriority = previousPriority;
			}
		}
		function higherEventPriority(a, b) {
			return a !== 0 && a < b ? a : b;
		}
		function lowerEventPriority(a, b) {
			return a === 0 || a > b ? a : b;
		}
		function isHigherEventPriority(a, b) {
			return a !== 0 && a < b;
		}
		function lanesToEventPriority(lanes) {
			var lane = getHighestPriorityLane(lanes);
			if (!isHigherEventPriority(DiscreteEventPriority, lane)) return DiscreteEventPriority;
			if (!isHigherEventPriority(ContinuousEventPriority, lane)) return ContinuousEventPriority;
			if (includesNonIdleWork(lane)) return DefaultEventPriority;
			return IdleEventPriority;
		}
		function isRootDehydrated(root$1) {
			var currentState = root$1.current.memoizedState;
			return currentState.isDehydrated;
		}
		var _attemptSynchronousHydration;
		function setAttemptSynchronousHydration(fn) {
			_attemptSynchronousHydration = fn;
		}
		function attemptSynchronousHydration(fiber) {
			_attemptSynchronousHydration(fiber);
		}
		var attemptContinuousHydration;
		function setAttemptContinuousHydration(fn) {
			attemptContinuousHydration = fn;
		}
		var attemptHydrationAtCurrentPriority;
		function setAttemptHydrationAtCurrentPriority(fn) {
			attemptHydrationAtCurrentPriority = fn;
		}
		var getCurrentUpdatePriority$1;
		function setGetCurrentUpdatePriority(fn) {
			getCurrentUpdatePriority$1 = fn;
		}
		var attemptHydrationAtPriority;
		function setAttemptHydrationAtPriority(fn) {
			attemptHydrationAtPriority = fn;
		}
		var hasScheduledReplayAttempt = false;
		var queuedDiscreteEvents = [];
		var queuedFocus = null;
		var queuedDrag = null;
		var queuedMouse = null;
		var queuedPointers = new Map();
		var queuedPointerCaptures = new Map();
		var queuedExplicitHydrationTargets = [];
		var discreteReplayableEvents = [
			"mousedown",
			"mouseup",
			"touchcancel",
			"touchend",
			"touchstart",
			"auxclick",
			"dblclick",
			"pointercancel",
			"pointerdown",
			"pointerup",
			"dragend",
			"dragstart",
			"drop",
			"compositionend",
			"compositionstart",
			"keydown",
			"keypress",
			"keyup",
			"input",
			"textInput",
			"copy",
			"cut",
			"paste",
			"click",
			"change",
			"contextmenu",
			"reset",
			"submit"
		];
		function isDiscreteEventThatRequiresHydration(eventType) {
			return discreteReplayableEvents.indexOf(eventType) > -1;
		}
		function createQueuedReplayableEvent(blockedOn, domEventName, eventSystemFlags, targetContainer, nativeEvent) {
			return {
				blockedOn,
				domEventName,
				eventSystemFlags,
				nativeEvent,
				targetContainers: [targetContainer]
			};
		}
		function clearIfContinuousEvent(domEventName, nativeEvent) {
			switch (domEventName) {
				case "focusin":
				case "focusout":
					queuedFocus = null;
					break;
				case "dragenter":
				case "dragleave":
					queuedDrag = null;
					break;
				case "mouseover":
				case "mouseout":
					queuedMouse = null;
					break;
				case "pointerover":
				case "pointerout": {
					var pointerId = nativeEvent.pointerId;
					queuedPointers.delete(pointerId);
					break;
				}
				case "gotpointercapture":
				case "lostpointercapture": {
					var _pointerId = nativeEvent.pointerId;
					queuedPointerCaptures.delete(_pointerId);
					break;
				}
			}
		}
		function accumulateOrCreateContinuousQueuedReplayableEvent(existingQueuedEvent, blockedOn, domEventName, eventSystemFlags, targetContainer, nativeEvent) {
			if (existingQueuedEvent === null || existingQueuedEvent.nativeEvent !== nativeEvent) {
				var queuedEvent = createQueuedReplayableEvent(blockedOn, domEventName, eventSystemFlags, targetContainer, nativeEvent);
				if (blockedOn !== null) {
					var _fiber2 = getInstanceFromNode(blockedOn);
					if (_fiber2 !== null) attemptContinuousHydration(_fiber2);
				}
				return queuedEvent;
			}
			existingQueuedEvent.eventSystemFlags |= eventSystemFlags;
			var targetContainers = existingQueuedEvent.targetContainers;
			if (targetContainer !== null && targetContainers.indexOf(targetContainer) === -1) targetContainers.push(targetContainer);
			return existingQueuedEvent;
		}
		function queueIfContinuousEvent(blockedOn, domEventName, eventSystemFlags, targetContainer, nativeEvent) {
			switch (domEventName) {
				case "focusin": {
					var focusEvent = nativeEvent;
					queuedFocus = accumulateOrCreateContinuousQueuedReplayableEvent(queuedFocus, blockedOn, domEventName, eventSystemFlags, targetContainer, focusEvent);
					return true;
				}
				case "dragenter": {
					var dragEvent = nativeEvent;
					queuedDrag = accumulateOrCreateContinuousQueuedReplayableEvent(queuedDrag, blockedOn, domEventName, eventSystemFlags, targetContainer, dragEvent);
					return true;
				}
				case "mouseover": {
					var mouseEvent = nativeEvent;
					queuedMouse = accumulateOrCreateContinuousQueuedReplayableEvent(queuedMouse, blockedOn, domEventName, eventSystemFlags, targetContainer, mouseEvent);
					return true;
				}
				case "pointerover": {
					var pointerEvent = nativeEvent;
					var pointerId = pointerEvent.pointerId;
					queuedPointers.set(pointerId, accumulateOrCreateContinuousQueuedReplayableEvent(queuedPointers.get(pointerId) || null, blockedOn, domEventName, eventSystemFlags, targetContainer, pointerEvent));
					return true;
				}
				case "gotpointercapture": {
					var _pointerEvent = nativeEvent;
					var _pointerId2 = _pointerEvent.pointerId;
					queuedPointerCaptures.set(_pointerId2, accumulateOrCreateContinuousQueuedReplayableEvent(queuedPointerCaptures.get(_pointerId2) || null, blockedOn, domEventName, eventSystemFlags, targetContainer, _pointerEvent));
					return true;
				}
			}
			return false;
		}
		function attemptExplicitHydrationTarget(queuedTarget) {
			var targetInst = getClosestInstanceFromNode(queuedTarget.target);
			if (targetInst !== null) {
				var nearestMounted = getNearestMountedFiber(targetInst);
				if (nearestMounted !== null) {
					var tag = nearestMounted.tag;
					if (tag === SuspenseComponent) {
						var instance = getSuspenseInstanceFromFiber(nearestMounted);
						if (instance !== null) {
							queuedTarget.blockedOn = instance;
							attemptHydrationAtPriority(queuedTarget.priority, function() {
								attemptHydrationAtCurrentPriority(nearestMounted);
							});
							return;
						}
					} else if (tag === HostRoot) {
						var root$1 = nearestMounted.stateNode;
						if (isRootDehydrated(root$1)) {
							queuedTarget.blockedOn = getContainerFromFiber(nearestMounted);
							return;
						}
					}
				}
			}
			queuedTarget.blockedOn = null;
		}
		function queueExplicitHydrationTarget(target) {
			var updatePriority = getCurrentUpdatePriority$1();
			var queuedTarget = {
				blockedOn: null,
				target,
				priority: updatePriority
			};
			var i$1 = 0;
			for (; i$1 < queuedExplicitHydrationTargets.length; i$1++) if (!isHigherEventPriority(updatePriority, queuedExplicitHydrationTargets[i$1].priority)) break;
			queuedExplicitHydrationTargets.splice(i$1, 0, queuedTarget);
			if (i$1 === 0) attemptExplicitHydrationTarget(queuedTarget);
		}
		function attemptReplayContinuousQueuedEvent(queuedEvent) {
			if (queuedEvent.blockedOn !== null) return false;
			var targetContainers = queuedEvent.targetContainers;
			while (targetContainers.length > 0) {
				var targetContainer = targetContainers[0];
				var nextBlockedOn = findInstanceBlockingEvent(queuedEvent.domEventName, queuedEvent.eventSystemFlags, targetContainer, queuedEvent.nativeEvent);
				if (nextBlockedOn === null) {
					var nativeEvent = queuedEvent.nativeEvent;
					var nativeEventClone = new nativeEvent.constructor(nativeEvent.type, nativeEvent);
					setReplayingEvent(nativeEventClone);
					nativeEvent.target.dispatchEvent(nativeEventClone);
					resetReplayingEvent();
				} else {
					var _fiber3 = getInstanceFromNode(nextBlockedOn);
					if (_fiber3 !== null) attemptContinuousHydration(_fiber3);
					queuedEvent.blockedOn = nextBlockedOn;
					return false;
				}
				targetContainers.shift();
			}
			return true;
		}
		function attemptReplayContinuousQueuedEventInMap(queuedEvent, key, map) {
			if (attemptReplayContinuousQueuedEvent(queuedEvent)) map.delete(key);
		}
		function replayUnblockedEvents() {
			hasScheduledReplayAttempt = false;
			if (queuedFocus !== null && attemptReplayContinuousQueuedEvent(queuedFocus)) queuedFocus = null;
			if (queuedDrag !== null && attemptReplayContinuousQueuedEvent(queuedDrag)) queuedDrag = null;
			if (queuedMouse !== null && attemptReplayContinuousQueuedEvent(queuedMouse)) queuedMouse = null;
			queuedPointers.forEach(attemptReplayContinuousQueuedEventInMap);
			queuedPointerCaptures.forEach(attemptReplayContinuousQueuedEventInMap);
		}
		function scheduleCallbackIfUnblocked(queuedEvent, unblocked) {
			if (queuedEvent.blockedOn === unblocked) {
				queuedEvent.blockedOn = null;
				if (!hasScheduledReplayAttempt) {
					hasScheduledReplayAttempt = true;
					Scheduler.unstable_scheduleCallback(Scheduler.unstable_NormalPriority, replayUnblockedEvents);
				}
			}
		}
		function retryIfBlockedOn(unblocked) {
			if (queuedDiscreteEvents.length > 0) {
				scheduleCallbackIfUnblocked(queuedDiscreteEvents[0], unblocked);
				for (var i$1 = 1; i$1 < queuedDiscreteEvents.length; i$1++) {
					var queuedEvent = queuedDiscreteEvents[i$1];
					if (queuedEvent.blockedOn === unblocked) queuedEvent.blockedOn = null;
				}
			}
			if (queuedFocus !== null) scheduleCallbackIfUnblocked(queuedFocus, unblocked);
			if (queuedDrag !== null) scheduleCallbackIfUnblocked(queuedDrag, unblocked);
			if (queuedMouse !== null) scheduleCallbackIfUnblocked(queuedMouse, unblocked);
			var unblock = function(queuedEvent$1) {
				return scheduleCallbackIfUnblocked(queuedEvent$1, unblocked);
			};
			queuedPointers.forEach(unblock);
			queuedPointerCaptures.forEach(unblock);
			for (var _i = 0; _i < queuedExplicitHydrationTargets.length; _i++) {
				var queuedTarget = queuedExplicitHydrationTargets[_i];
				if (queuedTarget.blockedOn === unblocked) queuedTarget.blockedOn = null;
			}
			while (queuedExplicitHydrationTargets.length > 0) {
				var nextExplicitTarget = queuedExplicitHydrationTargets[0];
				if (nextExplicitTarget.blockedOn !== null) break;
else {
					attemptExplicitHydrationTarget(nextExplicitTarget);
					if (nextExplicitTarget.blockedOn === null) queuedExplicitHydrationTargets.shift();
				}
			}
		}
		var ReactCurrentBatchConfig = ReactSharedInternals.ReactCurrentBatchConfig;
		var _enabled = true;
		function setEnabled(enabled) {
			_enabled = !!enabled;
		}
		function isEnabled() {
			return _enabled;
		}
		function createEventListenerWrapperWithPriority(targetContainer, domEventName, eventSystemFlags) {
			var eventPriority = getEventPriority(domEventName);
			var listenerWrapper;
			switch (eventPriority) {
				case DiscreteEventPriority:
					listenerWrapper = dispatchDiscreteEvent;
					break;
				case ContinuousEventPriority:
					listenerWrapper = dispatchContinuousEvent;
					break;
				case DefaultEventPriority:
				default:
					listenerWrapper = dispatchEvent;
					break;
			}
			return listenerWrapper.bind(null, domEventName, eventSystemFlags, targetContainer);
		}
		function dispatchDiscreteEvent(domEventName, eventSystemFlags, container, nativeEvent) {
			var previousPriority = getCurrentUpdatePriority();
			var prevTransition = ReactCurrentBatchConfig.transition;
			ReactCurrentBatchConfig.transition = null;
			try {
				setCurrentUpdatePriority(DiscreteEventPriority);
				dispatchEvent(domEventName, eventSystemFlags, container, nativeEvent);
			} finally {
				setCurrentUpdatePriority(previousPriority);
				ReactCurrentBatchConfig.transition = prevTransition;
			}
		}
		function dispatchContinuousEvent(domEventName, eventSystemFlags, container, nativeEvent) {
			var previousPriority = getCurrentUpdatePriority();
			var prevTransition = ReactCurrentBatchConfig.transition;
			ReactCurrentBatchConfig.transition = null;
			try {
				setCurrentUpdatePriority(ContinuousEventPriority);
				dispatchEvent(domEventName, eventSystemFlags, container, nativeEvent);
			} finally {
				setCurrentUpdatePriority(previousPriority);
				ReactCurrentBatchConfig.transition = prevTransition;
			}
		}
		function dispatchEvent(domEventName, eventSystemFlags, targetContainer, nativeEvent) {
			if (!_enabled) return;
			dispatchEventWithEnableCapturePhaseSelectiveHydrationWithoutDiscreteEventReplay(domEventName, eventSystemFlags, targetContainer, nativeEvent);
		}
		function dispatchEventWithEnableCapturePhaseSelectiveHydrationWithoutDiscreteEventReplay(domEventName, eventSystemFlags, targetContainer, nativeEvent) {
			var blockedOn = findInstanceBlockingEvent(domEventName, eventSystemFlags, targetContainer, nativeEvent);
			if (blockedOn === null) {
				dispatchEventForPluginEventSystem(domEventName, eventSystemFlags, nativeEvent, return_targetInst, targetContainer);
				clearIfContinuousEvent(domEventName, nativeEvent);
				return;
			}
			if (queueIfContinuousEvent(blockedOn, domEventName, eventSystemFlags, targetContainer, nativeEvent)) {
				nativeEvent.stopPropagation();
				return;
			}
			clearIfContinuousEvent(domEventName, nativeEvent);
			if (eventSystemFlags & IS_CAPTURE_PHASE && isDiscreteEventThatRequiresHydration(domEventName)) {
				while (blockedOn !== null) {
					var fiber = getInstanceFromNode(blockedOn);
					if (fiber !== null) attemptSynchronousHydration(fiber);
					var nextBlockedOn = findInstanceBlockingEvent(domEventName, eventSystemFlags, targetContainer, nativeEvent);
					if (nextBlockedOn === null) dispatchEventForPluginEventSystem(domEventName, eventSystemFlags, nativeEvent, return_targetInst, targetContainer);
					if (nextBlockedOn === blockedOn) break;
					blockedOn = nextBlockedOn;
				}
				if (blockedOn !== null) nativeEvent.stopPropagation();
				return;
			}
			dispatchEventForPluginEventSystem(domEventName, eventSystemFlags, nativeEvent, null, targetContainer);
		}
		var return_targetInst = null;
		function findInstanceBlockingEvent(domEventName, eventSystemFlags, targetContainer, nativeEvent) {
			return_targetInst = null;
			var nativeEventTarget = getEventTarget(nativeEvent);
			var targetInst = getClosestInstanceFromNode(nativeEventTarget);
			if (targetInst !== null) {
				var nearestMounted = getNearestMountedFiber(targetInst);
				if (nearestMounted === null) targetInst = null;
else {
					var tag = nearestMounted.tag;
					if (tag === SuspenseComponent) {
						var instance = getSuspenseInstanceFromFiber(nearestMounted);
						if (instance !== null) return instance;
						targetInst = null;
					} else if (tag === HostRoot) {
						var root$1 = nearestMounted.stateNode;
						if (isRootDehydrated(root$1)) return getContainerFromFiber(nearestMounted);
						targetInst = null;
					} else if (nearestMounted !== targetInst) targetInst = null;
				}
			}
			return_targetInst = targetInst;
			return null;
		}
		function getEventPriority(domEventName) {
			switch (domEventName) {
				case "cancel":
				case "click":
				case "close":
				case "contextmenu":
				case "copy":
				case "cut":
				case "auxclick":
				case "dblclick":
				case "dragend":
				case "dragstart":
				case "drop":
				case "focusin":
				case "focusout":
				case "input":
				case "invalid":
				case "keydown":
				case "keypress":
				case "keyup":
				case "mousedown":
				case "mouseup":
				case "paste":
				case "pause":
				case "play":
				case "pointercancel":
				case "pointerdown":
				case "pointerup":
				case "ratechange":
				case "reset":
				case "resize":
				case "seeked":
				case "submit":
				case "touchcancel":
				case "touchend":
				case "touchstart":
				case "volumechange":
				case "change":
				case "selectionchange":
				case "textInput":
				case "compositionstart":
				case "compositionend":
				case "compositionupdate":
				case "beforeblur":
				case "afterblur":
				case "beforeinput":
				case "blur":
				case "fullscreenchange":
				case "focus":
				case "hashchange":
				case "popstate":
				case "select":
				case "selectstart": return DiscreteEventPriority;
				case "drag":
				case "dragenter":
				case "dragexit":
				case "dragleave":
				case "dragover":
				case "mousemove":
				case "mouseout":
				case "mouseover":
				case "pointermove":
				case "pointerout":
				case "pointerover":
				case "scroll":
				case "toggle":
				case "touchmove":
				case "wheel":
				case "mouseenter":
				case "mouseleave":
				case "pointerenter":
				case "pointerleave": return ContinuousEventPriority;
				case "message": {
					var schedulerPriority = getCurrentPriorityLevel();
					switch (schedulerPriority) {
						case ImmediatePriority: return DiscreteEventPriority;
						case UserBlockingPriority: return ContinuousEventPriority;
						case NormalPriority:
						case LowPriority: return DefaultEventPriority;
						case IdlePriority: return IdleEventPriority;
						default: return DefaultEventPriority;
					}
				}
				default: return DefaultEventPriority;
			}
		}
		function addEventBubbleListener(target, eventType, listener) {
			target.addEventListener(eventType, listener, false);
			return listener;
		}
		function addEventCaptureListener(target, eventType, listener) {
			target.addEventListener(eventType, listener, true);
			return listener;
		}
		function addEventCaptureListenerWithPassiveFlag(target, eventType, listener, passive) {
			target.addEventListener(eventType, listener, {
				capture: true,
				passive
			});
			return listener;
		}
		function addEventBubbleListenerWithPassiveFlag(target, eventType, listener, passive) {
			target.addEventListener(eventType, listener, { passive });
			return listener;
		}
		/**
		* These variables store information about text content of a target node,
		* allowing comparison of content before and after a given event.
		*
		* Identify the node where selection currently begins, then observe
		* both its text content and its current position in the DOM. Since the
		* browser may natively replace the target node during composition, we can
		* use its position to find its replacement.
		*
		*
		*/
		var root = null;
		var startText = null;
		var fallbackText = null;
		function initialize(nativeEventTarget) {
			root = nativeEventTarget;
			startText = getText();
			return true;
		}
		function reset() {
			root = null;
			startText = null;
			fallbackText = null;
		}
		function getData() {
			if (fallbackText) return fallbackText;
			var start;
			var startValue = startText;
			var startLength = startValue.length;
			var end;
			var endValue = getText();
			var endLength = endValue.length;
			for (start = 0; start < startLength; start++) if (startValue[start] !== endValue[start]) break;
			var minEnd = startLength - start;
			for (end = 1; end <= minEnd; end++) if (startValue[startLength - end] !== endValue[endLength - end]) break;
			var sliceTail = end > 1 ? 1 - end : undefined;
			fallbackText = endValue.slice(start, sliceTail);
			return fallbackText;
		}
		function getText() {
			if ("value" in root) return root.value;
			return root.textContent;
		}
		/**
		* `charCode` represents the actual "character code" and is safe to use with
		* `String.fromCharCode`. As such, only keys that correspond to printable
		* characters produce a valid `charCode`, the only exception to this is Enter.
		* The Tab-key is considered non-printable and does not have a `charCode`,
		* presumably because it does not produce a tab-character in browsers.
		*
		* @param {object} nativeEvent Native browser event.
		* @return {number} Normalized `charCode` property.
		*/
		function getEventCharCode(nativeEvent) {
			var charCode;
			var keyCode = nativeEvent.keyCode;
			if ("charCode" in nativeEvent) {
				charCode = nativeEvent.charCode;
				if (charCode === 0 && keyCode === 13) charCode = 13;
			} else charCode = keyCode;
			if (charCode === 10) charCode = 13;
			if (charCode >= 32 || charCode === 13) return charCode;
			return 0;
		}
		function functionThatReturnsTrue() {
			return true;
		}
		function functionThatReturnsFalse() {
			return false;
		}
		function createSyntheticEvent(Interface) {
			/**
			* Synthetic events are dispatched by event plugins, typically in response to a
			* top-level event delegation handler.
			*
			* These systems should generally use pooling to reduce the frequency of garbage
			* collection. The system should check `isPersistent` to determine whether the
			* event should be released into the pool after being dispatched. Users that
			* need a persisted event should invoke `persist`.
			*
			* Synthetic events (and subclasses) implement the DOM Level 3 Events API by
			* normalizing browser quirks. Subclasses do not necessarily have to implement a
			* DOM interface; custom application-specific events can also subclass this.
			*/
			function SyntheticBaseEvent(reactName, reactEventType, targetInst, nativeEvent, nativeEventTarget) {
				this._reactName = reactName;
				this._targetInst = targetInst;
				this.type = reactEventType;
				this.nativeEvent = nativeEvent;
				this.target = nativeEventTarget;
				this.currentTarget = null;
				for (var _propName in Interface) {
					if (!Interface.hasOwnProperty(_propName)) continue;
					var normalize = Interface[_propName];
					if (normalize) this[_propName] = normalize(nativeEvent);
else this[_propName] = nativeEvent[_propName];
				}
				var defaultPrevented = nativeEvent.defaultPrevented != null ? nativeEvent.defaultPrevented : nativeEvent.returnValue === false;
				if (defaultPrevented) this.isDefaultPrevented = functionThatReturnsTrue;
else this.isDefaultPrevented = functionThatReturnsFalse;
				this.isPropagationStopped = functionThatReturnsFalse;
				return this;
			}
			assign(SyntheticBaseEvent.prototype, {
				preventDefault: function() {
					this.defaultPrevented = true;
					var event = this.nativeEvent;
					if (!event) return;
					if (event.preventDefault) event.preventDefault();
else if (typeof event.returnValue !== "unknown") event.returnValue = false;
					this.isDefaultPrevented = functionThatReturnsTrue;
				},
				stopPropagation: function() {
					var event = this.nativeEvent;
					if (!event) return;
					if (event.stopPropagation) event.stopPropagation();
else if (typeof event.cancelBubble !== "unknown") event.cancelBubble = true;
					this.isPropagationStopped = functionThatReturnsTrue;
				},
				persist: function() {},
				isPersistent: functionThatReturnsTrue
			});
			return SyntheticBaseEvent;
		}
		/**
		* @interface Event
		* @see http://www.w3.org/TR/DOM-Level-3-Events/
		*/
		var EventInterface = {
			eventPhase: 0,
			bubbles: 0,
			cancelable: 0,
			timeStamp: function(event) {
				return event.timeStamp || Date.now();
			},
			defaultPrevented: 0,
			isTrusted: 0
		};
		var SyntheticEvent = createSyntheticEvent(EventInterface);
		var UIEventInterface = assign({}, EventInterface, {
			view: 0,
			detail: 0
		});
		var SyntheticUIEvent = createSyntheticEvent(UIEventInterface);
		var lastMovementX;
		var lastMovementY;
		var lastMouseEvent;
		function updateMouseMovementPolyfillState(event) {
			if (event !== lastMouseEvent) {
				if (lastMouseEvent && event.type === "mousemove") {
					lastMovementX = event.screenX - lastMouseEvent.screenX;
					lastMovementY = event.screenY - lastMouseEvent.screenY;
				} else {
					lastMovementX = 0;
					lastMovementY = 0;
				}
				lastMouseEvent = event;
			}
		}
		/**
		* @interface MouseEvent
		* @see http://www.w3.org/TR/DOM-Level-3-Events/
		*/
		var MouseEventInterface = assign({}, UIEventInterface, {
			screenX: 0,
			screenY: 0,
			clientX: 0,
			clientY: 0,
			pageX: 0,
			pageY: 0,
			ctrlKey: 0,
			shiftKey: 0,
			altKey: 0,
			metaKey: 0,
			getModifierState: getEventModifierState,
			button: 0,
			buttons: 0,
			relatedTarget: function(event) {
				if (event.relatedTarget === undefined) return event.fromElement === event.srcElement ? event.toElement : event.fromElement;
				return event.relatedTarget;
			},
			movementX: function(event) {
				if ("movementX" in event) return event.movementX;
				updateMouseMovementPolyfillState(event);
				return lastMovementX;
			},
			movementY: function(event) {
				if ("movementY" in event) return event.movementY;
				return lastMovementY;
			}
		});
		var SyntheticMouseEvent = createSyntheticEvent(MouseEventInterface);
		/**
		* @interface DragEvent
		* @see http://www.w3.org/TR/DOM-Level-3-Events/
		*/
		var DragEventInterface = assign({}, MouseEventInterface, { dataTransfer: 0 });
		var SyntheticDragEvent = createSyntheticEvent(DragEventInterface);
		/**
		* @interface FocusEvent
		* @see http://www.w3.org/TR/DOM-Level-3-Events/
		*/
		var FocusEventInterface = assign({}, UIEventInterface, { relatedTarget: 0 });
		var SyntheticFocusEvent = createSyntheticEvent(FocusEventInterface);
		/**
		* @interface Event
		* @see http://www.w3.org/TR/css3-animations/#AnimationEvent-interface
		* @see https://developer.mozilla.org/en-US/docs/Web/API/AnimationEvent
		*/
		var AnimationEventInterface = assign({}, EventInterface, {
			animationName: 0,
			elapsedTime: 0,
			pseudoElement: 0
		});
		var SyntheticAnimationEvent = createSyntheticEvent(AnimationEventInterface);
		/**
		* @interface Event
		* @see http://www.w3.org/TR/clipboard-apis/
		*/
		var ClipboardEventInterface = assign({}, EventInterface, { clipboardData: function(event) {
			return "clipboardData" in event ? event.clipboardData : window.clipboardData;
		} });
		var SyntheticClipboardEvent = createSyntheticEvent(ClipboardEventInterface);
		/**
		* @interface Event
		* @see http://www.w3.org/TR/DOM-Level-3-Events/#events-compositionevents
		*/
		var CompositionEventInterface = assign({}, EventInterface, { data: 0 });
		var SyntheticCompositionEvent = createSyntheticEvent(CompositionEventInterface);
		/**
		* @interface Event
		* @see http://www.w3.org/TR/2013/WD-DOM-Level-3-Events-20131105
		*      /#events-inputevents
		*/
		var SyntheticInputEvent = SyntheticCompositionEvent;
		/**
		* Normalization of deprecated HTML5 `key` values
		* @see https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent#Key_names
		*/
		var normalizeKey = {
			Esc: "Escape",
			Spacebar: " ",
			Left: "ArrowLeft",
			Up: "ArrowUp",
			Right: "ArrowRight",
			Down: "ArrowDown",
			Del: "Delete",
			Win: "OS",
			Menu: "ContextMenu",
			Apps: "ContextMenu",
			Scroll: "ScrollLock",
			MozPrintableKey: "Unidentified"
		};
		/**
		* Translation from legacy `keyCode` to HTML5 `key`
		* Only special keys supported, all others depend on keyboard layout or browser
		* @see https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent#Key_names
		*/
		var translateToKey = {
			"8": "Backspace",
			"9": "Tab",
			"12": "Clear",
			"13": "Enter",
			"16": "Shift",
			"17": "Control",
			"18": "Alt",
			"19": "Pause",
			"20": "CapsLock",
			"27": "Escape",
			"32": " ",
			"33": "PageUp",
			"34": "PageDown",
			"35": "End",
			"36": "Home",
			"37": "ArrowLeft",
			"38": "ArrowUp",
			"39": "ArrowRight",
			"40": "ArrowDown",
			"45": "Insert",
			"46": "Delete",
			"112": "F1",
			"113": "F2",
			"114": "F3",
			"115": "F4",
			"116": "F5",
			"117": "F6",
			"118": "F7",
			"119": "F8",
			"120": "F9",
			"121": "F10",
			"122": "F11",
			"123": "F12",
			"144": "NumLock",
			"145": "ScrollLock",
			"224": "Meta"
		};
		/**
		* @param {object} nativeEvent Native browser event.
		* @return {string} Normalized `key` property.
		*/
		function getEventKey(nativeEvent) {
			if (nativeEvent.key) {
				var key = normalizeKey[nativeEvent.key] || nativeEvent.key;
				if (key !== "Unidentified") return key;
			}
			if (nativeEvent.type === "keypress") {
				var charCode = getEventCharCode(nativeEvent);
				return charCode === 13 ? "Enter" : String.fromCharCode(charCode);
			}
			if (nativeEvent.type === "keydown" || nativeEvent.type === "keyup") return translateToKey[nativeEvent.keyCode] || "Unidentified";
			return "";
		}
		/**
		* Translation from modifier key to the associated property in the event.
		* @see http://www.w3.org/TR/DOM-Level-3-Events/#keys-Modifiers
		*/
		var modifierKeyToProp = {
			Alt: "altKey",
			Control: "ctrlKey",
			Meta: "metaKey",
			Shift: "shiftKey"
		};
		function modifierStateGetter(keyArg) {
			var syntheticEvent = this;
			var nativeEvent = syntheticEvent.nativeEvent;
			if (nativeEvent.getModifierState) return nativeEvent.getModifierState(keyArg);
			var keyProp = modifierKeyToProp[keyArg];
			return keyProp ? !!nativeEvent[keyProp] : false;
		}
		function getEventModifierState(nativeEvent) {
			return modifierStateGetter;
		}
		/**
		* @interface KeyboardEvent
		* @see http://www.w3.org/TR/DOM-Level-3-Events/
		*/
		var KeyboardEventInterface = assign({}, UIEventInterface, {
			key: getEventKey,
			code: 0,
			location: 0,
			ctrlKey: 0,
			shiftKey: 0,
			altKey: 0,
			metaKey: 0,
			repeat: 0,
			locale: 0,
			getModifierState: getEventModifierState,
			charCode: function(event) {
				if (event.type === "keypress") return getEventCharCode(event);
				return 0;
			},
			keyCode: function(event) {
				if (event.type === "keydown" || event.type === "keyup") return event.keyCode;
				return 0;
			},
			which: function(event) {
				if (event.type === "keypress") return getEventCharCode(event);
				if (event.type === "keydown" || event.type === "keyup") return event.keyCode;
				return 0;
			}
		});
		var SyntheticKeyboardEvent = createSyntheticEvent(KeyboardEventInterface);
		/**
		* @interface PointerEvent
		* @see http://www.w3.org/TR/pointerevents/
		*/
		var PointerEventInterface = assign({}, MouseEventInterface, {
			pointerId: 0,
			width: 0,
			height: 0,
			pressure: 0,
			tangentialPressure: 0,
			tiltX: 0,
			tiltY: 0,
			twist: 0,
			pointerType: 0,
			isPrimary: 0
		});
		var SyntheticPointerEvent = createSyntheticEvent(PointerEventInterface);
		/**
		* @interface TouchEvent
		* @see http://www.w3.org/TR/touch-events/
		*/
		var TouchEventInterface = assign({}, UIEventInterface, {
			touches: 0,
			targetTouches: 0,
			changedTouches: 0,
			altKey: 0,
			metaKey: 0,
			ctrlKey: 0,
			shiftKey: 0,
			getModifierState: getEventModifierState
		});
		var SyntheticTouchEvent = createSyntheticEvent(TouchEventInterface);
		/**
		* @interface Event
		* @see http://www.w3.org/TR/2009/WD-css3-transitions-20090320/#transition-events-
		* @see https://developer.mozilla.org/en-US/docs/Web/API/TransitionEvent
		*/
		var TransitionEventInterface = assign({}, EventInterface, {
			propertyName: 0,
			elapsedTime: 0,
			pseudoElement: 0
		});
		var SyntheticTransitionEvent = createSyntheticEvent(TransitionEventInterface);
		/**
		* @interface WheelEvent
		* @see http://www.w3.org/TR/DOM-Level-3-Events/
		*/
		var WheelEventInterface = assign({}, MouseEventInterface, {
			deltaX: function(event) {
				return "deltaX" in event ? event.deltaX : "wheelDeltaX" in event ? -event.wheelDeltaX : 0;
			},
			deltaY: function(event) {
				return "deltaY" in event ? event.deltaY : "wheelDeltaY" in event ? -event.wheelDeltaY : "wheelDelta" in event ? -event.wheelDelta : 0;
			},
			deltaZ: 0,
			deltaMode: 0
		});
		var SyntheticWheelEvent = createSyntheticEvent(WheelEventInterface);
		var END_KEYCODES = [
			9,
			13,
			27,
			32
		];
		var START_KEYCODE = 229;
		var canUseCompositionEvent = canUseDOM && "CompositionEvent" in window;
		var documentMode = null;
		if (canUseDOM && "documentMode" in document) documentMode = document.documentMode;
		var canUseTextInputEvent = canUseDOM && "TextEvent" in window && !documentMode;
		var useFallbackCompositionData = canUseDOM && (!canUseCompositionEvent || documentMode && documentMode > 8 && documentMode <= 11);
		var SPACEBAR_CODE = 32;
		var SPACEBAR_CHAR = String.fromCharCode(SPACEBAR_CODE);
		function registerEvents() {
			registerTwoPhaseEvent("onBeforeInput", [
				"compositionend",
				"keypress",
				"textInput",
				"paste"
			]);
			registerTwoPhaseEvent("onCompositionEnd", [
				"compositionend",
				"focusout",
				"keydown",
				"keypress",
				"keyup",
				"mousedown"
			]);
			registerTwoPhaseEvent("onCompositionStart", [
				"compositionstart",
				"focusout",
				"keydown",
				"keypress",
				"keyup",
				"mousedown"
			]);
			registerTwoPhaseEvent("onCompositionUpdate", [
				"compositionupdate",
				"focusout",
				"keydown",
				"keypress",
				"keyup",
				"mousedown"
			]);
		}
		var hasSpaceKeypress = false;
		/**
		* Return whether a native keypress event is assumed to be a command.
		* This is required because Firefox fires `keypress` events for key commands
		* (cut, copy, select-all, etc.) even though no character is inserted.
		*/
		function isKeypressCommand(nativeEvent) {
			return (nativeEvent.ctrlKey || nativeEvent.altKey || nativeEvent.metaKey) && !(nativeEvent.ctrlKey && nativeEvent.altKey);
		}
		/**
		* Translate native top level events into event types.
		*/
		function getCompositionEventType(domEventName) {
			switch (domEventName) {
				case "compositionstart": return "onCompositionStart";
				case "compositionend": return "onCompositionEnd";
				case "compositionupdate": return "onCompositionUpdate";
			}
		}
		/**
		* Does our fallback best-guess model think this event signifies that
		* composition has begun?
		*/
		function isFallbackCompositionStart(domEventName, nativeEvent) {
			return domEventName === "keydown" && nativeEvent.keyCode === START_KEYCODE;
		}
		/**
		* Does our fallback mode think that this event is the end of composition?
		*/
		function isFallbackCompositionEnd(domEventName, nativeEvent) {
			switch (domEventName) {
				case "keyup": return END_KEYCODES.indexOf(nativeEvent.keyCode) !== -1;
				case "keydown": return nativeEvent.keyCode !== START_KEYCODE;
				case "keypress":
				case "mousedown":
				case "focusout": return true;
				default: return false;
			}
		}
		/**
		* Google Input Tools provides composition data via a CustomEvent,
		* with the `data` property populated in the `detail` object. If this
		* is available on the event object, use it. If not, this is a plain
		* composition event and we have nothing special to extract.
		*
		* @param {object} nativeEvent
		* @return {?string}
		*/
		function getDataFromCustomEvent(nativeEvent) {
			var detail = nativeEvent.detail;
			if (typeof detail === "object" && "data" in detail) return detail.data;
			return null;
		}
		/**
		* Check if a composition event was triggered by Korean IME.
		* Our fallback mode does not work well with IE's Korean IME,
		* so just use native composition events when Korean IME is used.
		* Although CompositionEvent.locale property is deprecated,
		* it is available in IE, where our fallback mode is enabled.
		*
		* @param {object} nativeEvent
		* @return {boolean}
		*/
		function isUsingKoreanIME(nativeEvent) {
			return nativeEvent.locale === "ko";
		}
		var isComposing = false;
		/**
		* @return {?object} A SyntheticCompositionEvent.
		*/
		function extractCompositionEvent(dispatchQueue, domEventName, targetInst, nativeEvent, nativeEventTarget) {
			var eventType;
			var fallbackData;
			if (canUseCompositionEvent) eventType = getCompositionEventType(domEventName);
else if (!isComposing) {
				if (isFallbackCompositionStart(domEventName, nativeEvent)) eventType = "onCompositionStart";
			} else if (isFallbackCompositionEnd(domEventName, nativeEvent)) eventType = "onCompositionEnd";
			if (!eventType) return null;
			if (useFallbackCompositionData && !isUsingKoreanIME(nativeEvent)) {
				if (!isComposing && eventType === "onCompositionStart") isComposing = initialize(nativeEventTarget);
else if (eventType === "onCompositionEnd") {
					if (isComposing) fallbackData = getData();
				}
			}
			var listeners = accumulateTwoPhaseListeners(targetInst, eventType);
			if (listeners.length > 0) {
				var event = new SyntheticCompositionEvent(eventType, domEventName, null, nativeEvent, nativeEventTarget);
				dispatchQueue.push({
					event,
					listeners
				});
				if (fallbackData) event.data = fallbackData;
else {
					var customData = getDataFromCustomEvent(nativeEvent);
					if (customData !== null) event.data = customData;
				}
			}
		}
		function getNativeBeforeInputChars(domEventName, nativeEvent) {
			switch (domEventName) {
				case "compositionend": return getDataFromCustomEvent(nativeEvent);
				case "keypress":
					/**
					* If native `textInput` events are available, our goal is to make
					* use of them. However, there is a special case: the spacebar key.
					* In Webkit, preventing default on a spacebar `textInput` event
					* cancels character insertion, but it *also* causes the browser
					* to fall back to its default spacebar behavior of scrolling the
					* page.
					*
					* Tracking at:
					* https://code.google.com/p/chromium/issues/detail?id=355103
					*
					* To avoid this issue, use the keypress event as if no `textInput`
					* event is available.
					*/
					var which = nativeEvent.which;
					if (which !== SPACEBAR_CODE) return null;
					hasSpaceKeypress = true;
					return SPACEBAR_CHAR;
				case "textInput":
					var chars = nativeEvent.data;
					if (chars === SPACEBAR_CHAR && hasSpaceKeypress) return null;
					return chars;
				default: return null;
			}
		}
		/**
		* For browsers that do not provide the `textInput` event, extract the
		* appropriate string to use for SyntheticInputEvent.
		*/
		function getFallbackBeforeInputChars(domEventName, nativeEvent) {
			if (isComposing) {
				if (domEventName === "compositionend" || !canUseCompositionEvent && isFallbackCompositionEnd(domEventName, nativeEvent)) {
					var chars = getData();
					reset();
					isComposing = false;
					return chars;
				}
				return null;
			}
			switch (domEventName) {
				case "paste": return null;
				case "keypress":
					/**
					* As of v27, Firefox may fire keypress events even when no character
					* will be inserted. A few possibilities:
					*
					* - `which` is `0`. Arrow keys, Esc key, etc.
					*
					* - `which` is the pressed key code, but no char is available.
					*   Ex: 'AltGr + d` in Polish. There is no modified character for
					*   this key combination and no character is inserted into the
					*   document, but FF fires the keypress for char code `100` anyway.
					*   No `input` event will occur.
					*
					* - `which` is the pressed key code, but a command combination is
					*   being used. Ex: `Cmd+C`. No character is inserted, and no
					*   `input` event will occur.
					*/
					if (!isKeypressCommand(nativeEvent)) {
						if (nativeEvent.char && nativeEvent.char.length > 1) return nativeEvent.char;
else if (nativeEvent.which) return String.fromCharCode(nativeEvent.which);
					}
					return null;
				case "compositionend": return useFallbackCompositionData && !isUsingKoreanIME(nativeEvent) ? null : nativeEvent.data;
				default: return null;
			}
		}
		/**
		* Extract a SyntheticInputEvent for `beforeInput`, based on either native
		* `textInput` or fallback behavior.
		*
		* @return {?object} A SyntheticInputEvent.
		*/
		function extractBeforeInputEvent(dispatchQueue, domEventName, targetInst, nativeEvent, nativeEventTarget) {
			var chars;
			if (canUseTextInputEvent) chars = getNativeBeforeInputChars(domEventName, nativeEvent);
else chars = getFallbackBeforeInputChars(domEventName, nativeEvent);
			if (!chars) return null;
			var listeners = accumulateTwoPhaseListeners(targetInst, "onBeforeInput");
			if (listeners.length > 0) {
				var event = new SyntheticInputEvent("onBeforeInput", "beforeinput", null, nativeEvent, nativeEventTarget);
				dispatchQueue.push({
					event,
					listeners
				});
				event.data = chars;
			}
		}
		/**
		* Create an `onBeforeInput` event to match
		* http://www.w3.org/TR/2013/WD-DOM-Level-3-Events-20131105/#events-inputevents.
		*
		* This event plugin is based on the native `textInput` event
		* available in Chrome, Safari, Opera, and IE. This event fires after
		* `onKeyPress` and `onCompositionEnd`, but before `onInput`.
		*
		* `beforeInput` is spec'd but not implemented in any browsers, and
		* the `input` event does not provide any useful information about what has
		* actually been added, contrary to the spec. Thus, `textInput` is the best
		* available event to identify the characters that have actually been inserted
		* into the target node.
		*
		* This plugin is also responsible for emitting `composition` events, thus
		* allowing us to share composition fallback code for both `beforeInput` and
		* `composition` event types.
		*/
		function extractEvents(dispatchQueue, domEventName, targetInst, nativeEvent, nativeEventTarget, eventSystemFlags, targetContainer) {
			extractCompositionEvent(dispatchQueue, domEventName, targetInst, nativeEvent, nativeEventTarget);
			extractBeforeInputEvent(dispatchQueue, domEventName, targetInst, nativeEvent, nativeEventTarget);
		}
		/**
		* @see http://www.whatwg.org/specs/web-apps/current-work/multipage/the-input-element.html#input-type-attr-summary
		*/
		var supportedInputTypes = {
			color: true,
			date: true,
			datetime: true,
			"datetime-local": true,
			email: true,
			month: true,
			number: true,
			password: true,
			range: true,
			search: true,
			tel: true,
			text: true,
			time: true,
			url: true,
			week: true
		};
		function isTextInputElement(elem) {
			var nodeName = elem && elem.nodeName && elem.nodeName.toLowerCase();
			if (nodeName === "input") return !!supportedInputTypes[elem.type];
			if (nodeName === "textarea") return true;
			return false;
		}
		/**
		* Checks if an event is supported in the current execution environment.
		*
		* NOTE: This will not work correctly for non-generic events such as `change`,
		* `reset`, `load`, `error`, and `select`.
		*
		* Borrows from Modernizr.
		*
		* @param {string} eventNameSuffix Event name, e.g. "click".
		* @return {boolean} True if the event is supported.
		* @internal
		* @license Modernizr 3.0.0pre (Custom Build) | MIT
		*/
		function isEventSupported(eventNameSuffix) {
			if (!canUseDOM) return false;
			var eventName = "on" + eventNameSuffix;
			var isSupported = eventName in document;
			if (!isSupported) {
				var element = document.createElement("div");
				element.setAttribute(eventName, "return;");
				isSupported = typeof element[eventName] === "function";
			}
			return isSupported;
		}
		function registerEvents$1() {
			registerTwoPhaseEvent("onChange", [
				"change",
				"click",
				"focusin",
				"focusout",
				"input",
				"keydown",
				"keyup",
				"selectionchange"
			]);
		}
		function createAndAccumulateChangeEvent(dispatchQueue, inst, nativeEvent, target) {
			enqueueStateRestore(target);
			var listeners = accumulateTwoPhaseListeners(inst, "onChange");
			if (listeners.length > 0) {
				var event = new SyntheticEvent("onChange", "change", null, nativeEvent, target);
				dispatchQueue.push({
					event,
					listeners
				});
			}
		}
		/**
		* For IE shims
		*/
		var activeElement = null;
		var activeElementInst = null;
		/**
		* SECTION: handle `change` event
		*/
		function shouldUseChangeEvent(elem) {
			var nodeName = elem.nodeName && elem.nodeName.toLowerCase();
			return nodeName === "select" || nodeName === "input" && elem.type === "file";
		}
		function manualDispatchChangeEvent(nativeEvent) {
			var dispatchQueue = [];
			createAndAccumulateChangeEvent(dispatchQueue, activeElementInst, nativeEvent, getEventTarget(nativeEvent));
			batchedUpdates(runEventInBatch, dispatchQueue);
		}
		function runEventInBatch(dispatchQueue) {
			processDispatchQueue(dispatchQueue, 0);
		}
		function getInstIfValueChanged(targetInst) {
			var targetNode = getNodeFromInstance(targetInst);
			if (updateValueIfChanged(targetNode)) return targetInst;
		}
		function getTargetInstForChangeEvent(domEventName, targetInst) {
			if (domEventName === "change") return targetInst;
		}
		/**
		* SECTION: handle `input` event
		*/
		var isInputEventSupported = false;
		if (canUseDOM) isInputEventSupported = isEventSupported("input") && (!document.documentMode || document.documentMode > 9);
		/**
		* (For IE <=9) Starts tracking propertychange events on the passed-in element
		* and override the value property so that we can distinguish user events from
		* value changes in JS.
		*/
		function startWatchingForValueChange(target, targetInst) {
			activeElement = target;
			activeElementInst = targetInst;
			activeElement.attachEvent("onpropertychange", handlePropertyChange);
		}
		/**
		* (For IE <=9) Removes the event listeners from the currently-tracked element,
		* if any exists.
		*/
		function stopWatchingForValueChange() {
			if (!activeElement) return;
			activeElement.detachEvent("onpropertychange", handlePropertyChange);
			activeElement = null;
			activeElementInst = null;
		}
		/**
		* (For IE <=9) Handles a propertychange event, sending a `change` event if
		* the value of the active element has changed.
		*/
		function handlePropertyChange(nativeEvent) {
			if (nativeEvent.propertyName !== "value") return;
			if (getInstIfValueChanged(activeElementInst)) manualDispatchChangeEvent(nativeEvent);
		}
		function handleEventsForInputEventPolyfill(domEventName, target, targetInst) {
			if (domEventName === "focusin") {
				stopWatchingForValueChange();
				startWatchingForValueChange(target, targetInst);
			} else if (domEventName === "focusout") stopWatchingForValueChange();
		}
		function getTargetInstForInputEventPolyfill(domEventName, targetInst) {
			if (domEventName === "selectionchange" || domEventName === "keyup" || domEventName === "keydown") return getInstIfValueChanged(activeElementInst);
		}
		/**
		* SECTION: handle `click` event
		*/
		function shouldUseClickEvent(elem) {
			var nodeName = elem.nodeName;
			return nodeName && nodeName.toLowerCase() === "input" && (elem.type === "checkbox" || elem.type === "radio");
		}
		function getTargetInstForClickEvent(domEventName, targetInst) {
			if (domEventName === "click") return getInstIfValueChanged(targetInst);
		}
		function getTargetInstForInputOrChangeEvent(domEventName, targetInst) {
			if (domEventName === "input" || domEventName === "change") return getInstIfValueChanged(targetInst);
		}
		function handleControlledInputBlur(node) {
			var state = node._wrapperState;
			if (!state || !state.controlled || node.type !== "number") return;
			setDefaultValue(node, "number", node.value);
		}
		/**
		* This plugin creates an `onChange` event that normalizes change events
		* across form elements. This event fires at a time when it's possible to
		* change the element's value without seeing a flicker.
		*
		* Supported elements are:
		* - input (see `isTextInputElement`)
		* - textarea
		* - select
		*/
		function extractEvents$1(dispatchQueue, domEventName, targetInst, nativeEvent, nativeEventTarget, eventSystemFlags, targetContainer) {
			var targetNode = targetInst ? getNodeFromInstance(targetInst) : window;
			var getTargetInstFunc, handleEventFunc;
			if (shouldUseChangeEvent(targetNode)) getTargetInstFunc = getTargetInstForChangeEvent;
else if (isTextInputElement(targetNode)) if (isInputEventSupported) getTargetInstFunc = getTargetInstForInputOrChangeEvent;
else {
				getTargetInstFunc = getTargetInstForInputEventPolyfill;
				handleEventFunc = handleEventsForInputEventPolyfill;
			}
else if (shouldUseClickEvent(targetNode)) getTargetInstFunc = getTargetInstForClickEvent;
			if (getTargetInstFunc) {
				var inst = getTargetInstFunc(domEventName, targetInst);
				if (inst) {
					createAndAccumulateChangeEvent(dispatchQueue, inst, nativeEvent, nativeEventTarget);
					return;
				}
			}
			if (handleEventFunc) handleEventFunc(domEventName, targetNode, targetInst);
			if (domEventName === "focusout") handleControlledInputBlur(targetNode);
		}
		function registerEvents$2() {
			registerDirectEvent("onMouseEnter", ["mouseout", "mouseover"]);
			registerDirectEvent("onMouseLeave", ["mouseout", "mouseover"]);
			registerDirectEvent("onPointerEnter", ["pointerout", "pointerover"]);
			registerDirectEvent("onPointerLeave", ["pointerout", "pointerover"]);
		}
		/**
		* For almost every interaction we care about, there will be both a top-level
		* `mouseover` and `mouseout` event that occurs. Only use `mouseout` so that
		* we do not extract duplicate events. However, moving the mouse into the
		* browser from outside will not fire a `mouseout` event. In this case, we use
		* the `mouseover` top-level event.
		*/
		function extractEvents$2(dispatchQueue, domEventName, targetInst, nativeEvent, nativeEventTarget, eventSystemFlags, targetContainer) {
			var isOverEvent = domEventName === "mouseover" || domEventName === "pointerover";
			var isOutEvent = domEventName === "mouseout" || domEventName === "pointerout";
			if (isOverEvent && !isReplayingEvent(nativeEvent)) {
				var related = nativeEvent.relatedTarget || nativeEvent.fromElement;
				if (related) {
					if (getClosestInstanceFromNode(related) || isContainerMarkedAsRoot(related)) return;
				}
			}
			if (!isOutEvent && !isOverEvent) return;
			var win;
			if (nativeEventTarget.window === nativeEventTarget) win = nativeEventTarget;
else {
				var doc = nativeEventTarget.ownerDocument;
				if (doc) win = doc.defaultView || doc.parentWindow;
else win = window;
			}
			var from;
			var to;
			if (isOutEvent) {
				var _related = nativeEvent.relatedTarget || nativeEvent.toElement;
				from = targetInst;
				to = _related ? getClosestInstanceFromNode(_related) : null;
				if (to !== null) {
					var nearestMounted = getNearestMountedFiber(to);
					if (to !== nearestMounted || to.tag !== HostComponent && to.tag !== HostText) to = null;
				}
			} else {
				from = null;
				to = targetInst;
			}
			if (from === to) return;
			var SyntheticEventCtor = SyntheticMouseEvent;
			var leaveEventType = "onMouseLeave";
			var enterEventType = "onMouseEnter";
			var eventTypePrefix = "mouse";
			if (domEventName === "pointerout" || domEventName === "pointerover") {
				SyntheticEventCtor = SyntheticPointerEvent;
				leaveEventType = "onPointerLeave";
				enterEventType = "onPointerEnter";
				eventTypePrefix = "pointer";
			}
			var fromNode = from == null ? win : getNodeFromInstance(from);
			var toNode = to == null ? win : getNodeFromInstance(to);
			var leave = new SyntheticEventCtor(leaveEventType, eventTypePrefix + "leave", from, nativeEvent, nativeEventTarget);
			leave.target = fromNode;
			leave.relatedTarget = toNode;
			var enter = null;
			var nativeTargetInst = getClosestInstanceFromNode(nativeEventTarget);
			if (nativeTargetInst === targetInst) {
				var enterEvent = new SyntheticEventCtor(enterEventType, eventTypePrefix + "enter", to, nativeEvent, nativeEventTarget);
				enterEvent.target = toNode;
				enterEvent.relatedTarget = fromNode;
				enter = enterEvent;
			}
			accumulateEnterLeaveTwoPhaseListeners(dispatchQueue, leave, enter, from, to);
		}
		/**
		* inlined Object.is polyfill to avoid requiring consumers ship their own
		* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
		*/
		function is(x, y) {
			return x === y && (x !== 0 || 1 / x === 1 / y) || x !== x && y !== y;
		}
		var objectIs = typeof Object.is === "function" ? Object.is : is;
		/**
		* Performs equality by iterating through keys on an object and returning false
		* when any key has values which are not strictly equal between the arguments.
		* Returns true when the values of all keys are strictly equal.
		*/
		function shallowEqual(objA, objB) {
			if (objectIs(objA, objB)) return true;
			if (typeof objA !== "object" || objA === null || typeof objB !== "object" || objB === null) return false;
			var keysA = Object.keys(objA);
			var keysB = Object.keys(objB);
			if (keysA.length !== keysB.length) return false;
			for (var i$1 = 0; i$1 < keysA.length; i$1++) {
				var currentKey = keysA[i$1];
				if (!hasOwnProperty.call(objB, currentKey) || !objectIs(objA[currentKey], objB[currentKey])) return false;
			}
			return true;
		}
		/**
		* Given any node return the first leaf node without children.
		*
		* @param {DOMElement|DOMTextNode} node
		* @return {DOMElement|DOMTextNode}
		*/
		function getLeafNode(node) {
			while (node && node.firstChild) node = node.firstChild;
			return node;
		}
		/**
		* Get the next sibling within a container. This will walk up the
		* DOM if a node's siblings have been exhausted.
		*
		* @param {DOMElement|DOMTextNode} node
		* @return {?DOMElement|DOMTextNode}
		*/
		function getSiblingNode(node) {
			while (node) {
				if (node.nextSibling) return node.nextSibling;
				node = node.parentNode;
			}
		}
		/**
		* Get object describing the nodes which contain characters at offset.
		*
		* @param {DOMElement|DOMTextNode} root
		* @param {number} offset
		* @return {?object}
		*/
		function getNodeForCharacterOffset(root$1, offset) {
			var node = getLeafNode(root$1);
			var nodeStart = 0;
			var nodeEnd = 0;
			while (node) {
				if (node.nodeType === TEXT_NODE) {
					nodeEnd = nodeStart + node.textContent.length;
					if (nodeStart <= offset && nodeEnd >= offset) return {
						node,
						offset: offset - nodeStart
					};
					nodeStart = nodeEnd;
				}
				node = getLeafNode(getSiblingNode(node));
			}
		}
		/**
		* @param {DOMElement} outerNode
		* @return {?object}
		*/
		function getOffsets(outerNode) {
			var ownerDocument = outerNode.ownerDocument;
			var win = ownerDocument && ownerDocument.defaultView || window;
			var selection = win.getSelection && win.getSelection();
			if (!selection || selection.rangeCount === 0) return null;
			var anchorNode = selection.anchorNode, anchorOffset = selection.anchorOffset, focusNode = selection.focusNode, focusOffset = selection.focusOffset;
			try {
				anchorNode.nodeType;
				focusNode.nodeType;
			} catch (e) {
				return null;
			}
			return getModernOffsetsFromPoints(outerNode, anchorNode, anchorOffset, focusNode, focusOffset);
		}
		/**
		* Returns {start, end} where `start` is the character/codepoint index of
		* (anchorNode, anchorOffset) within the textContent of `outerNode`, and
		* `end` is the index of (focusNode, focusOffset).
		*
		* Returns null if you pass in garbage input but we should probably just crash.
		*
		* Exported only for testing.
		*/
		function getModernOffsetsFromPoints(outerNode, anchorNode, anchorOffset, focusNode, focusOffset) {
			var length = 0;
			var start = -1;
			var end = -1;
			var indexWithinAnchor = 0;
			var indexWithinFocus = 0;
			var node = outerNode;
			var parentNode = null;
			outer: while (true) {
				var next = null;
				while (true) {
					if (node === anchorNode && (anchorOffset === 0 || node.nodeType === TEXT_NODE)) start = length + anchorOffset;
					if (node === focusNode && (focusOffset === 0 || node.nodeType === TEXT_NODE)) end = length + focusOffset;
					if (node.nodeType === TEXT_NODE) length += node.nodeValue.length;
					if ((next = node.firstChild) === null) break;
					parentNode = node;
					node = next;
				}
				while (true) {
					if (node === outerNode) break outer;
					if (parentNode === anchorNode && ++indexWithinAnchor === anchorOffset) start = length;
					if (parentNode === focusNode && ++indexWithinFocus === focusOffset) end = length;
					if ((next = node.nextSibling) !== null) break;
					node = parentNode;
					parentNode = node.parentNode;
				}
				node = next;
			}
			if (start === -1 || end === -1) return null;
			return {
				start,
				end
			};
		}
		/**
		* In modern non-IE browsers, we can support both forward and backward
		* selections.
		*
		* Note: IE10+ supports the Selection object, but it does not support
		* the `extend` method, which means that even in modern IE, it's not possible
		* to programmatically create a backward selection. Thus, for all IE
		* versions, we use the old IE API to create our selections.
		*
		* @param {DOMElement|DOMTextNode} node
		* @param {object} offsets
		*/
		function setOffsets(node, offsets) {
			var doc = node.ownerDocument || document;
			var win = doc && doc.defaultView || window;
			if (!win.getSelection) return;
			var selection = win.getSelection();
			var length = node.textContent.length;
			var start = Math.min(offsets.start, length);
			var end = offsets.end === undefined ? start : Math.min(offsets.end, length);
			if (!selection.extend && start > end) {
				var temp = end;
				end = start;
				start = temp;
			}
			var startMarker = getNodeForCharacterOffset(node, start);
			var endMarker = getNodeForCharacterOffset(node, end);
			if (startMarker && endMarker) {
				if (selection.rangeCount === 1 && selection.anchorNode === startMarker.node && selection.anchorOffset === startMarker.offset && selection.focusNode === endMarker.node && selection.focusOffset === endMarker.offset) return;
				var range = doc.createRange();
				range.setStart(startMarker.node, startMarker.offset);
				selection.removeAllRanges();
				if (start > end) {
					selection.addRange(range);
					selection.extend(endMarker.node, endMarker.offset);
				} else {
					range.setEnd(endMarker.node, endMarker.offset);
					selection.addRange(range);
				}
			}
		}
		function isTextNode(node) {
			return node && node.nodeType === TEXT_NODE;
		}
		function containsNode(outerNode, innerNode) {
			if (!outerNode || !innerNode) return false;
else if (outerNode === innerNode) return true;
else if (isTextNode(outerNode)) return false;
else if (isTextNode(innerNode)) return containsNode(outerNode, innerNode.parentNode);
else if ("contains" in outerNode) return outerNode.contains(innerNode);
else if (outerNode.compareDocumentPosition) return !!(outerNode.compareDocumentPosition(innerNode) & 16);
else return false;
		}
		function isInDocument(node) {
			return node && node.ownerDocument && containsNode(node.ownerDocument.documentElement, node);
		}
		function isSameOriginFrame(iframe) {
			try {
				return typeof iframe.contentWindow.location.href === "string";
			} catch (err) {
				return false;
			}
		}
		function getActiveElementDeep() {
			var win = window;
			var element = getActiveElement();
			while (element instanceof win.HTMLIFrameElement) {
				if (isSameOriginFrame(element)) win = element.contentWindow;
else return element;
				element = getActiveElement(win.document);
			}
			return element;
		}
		/**
		* @ReactInputSelection: React input selection module. Based on Selection.js,
		* but modified to be suitable for react and has a couple of bug fixes (doesn't
		* assume buttons have range selections allowed).
		* Input selection module for React.
		*/
		/**
		* @hasSelectionCapabilities: we get the element types that support selection
		* from https://html.spec.whatwg.org/#do-not-apply, looking at `selectionStart`
		* and `selectionEnd` rows.
		*/
		function hasSelectionCapabilities(elem) {
			var nodeName = elem && elem.nodeName && elem.nodeName.toLowerCase();
			return nodeName && (nodeName === "input" && (elem.type === "text" || elem.type === "search" || elem.type === "tel" || elem.type === "url" || elem.type === "password") || nodeName === "textarea" || elem.contentEditable === "true");
		}
		function getSelectionInformation() {
			var focusedElem = getActiveElementDeep();
			return {
				focusedElem,
				selectionRange: hasSelectionCapabilities(focusedElem) ? getSelection(focusedElem) : null
			};
		}
		/**
		* @restoreSelection: If any selection information was potentially lost,
		* restore it. This is useful when performing operations that could remove dom
		* nodes and place them back in, resulting in focus being lost.
		*/
		function restoreSelection(priorSelectionInformation) {
			var curFocusedElem = getActiveElementDeep();
			var priorFocusedElem = priorSelectionInformation.focusedElem;
			var priorSelectionRange = priorSelectionInformation.selectionRange;
			if (curFocusedElem !== priorFocusedElem && isInDocument(priorFocusedElem)) {
				if (priorSelectionRange !== null && hasSelectionCapabilities(priorFocusedElem)) setSelection(priorFocusedElem, priorSelectionRange);
				var ancestors = [];
				var ancestor = priorFocusedElem;
				while (ancestor = ancestor.parentNode) if (ancestor.nodeType === ELEMENT_NODE) ancestors.push({
					element: ancestor,
					left: ancestor.scrollLeft,
					top: ancestor.scrollTop
				});
				if (typeof priorFocusedElem.focus === "function") priorFocusedElem.focus();
				for (var i$1 = 0; i$1 < ancestors.length; i$1++) {
					var info = ancestors[i$1];
					info.element.scrollLeft = info.left;
					info.element.scrollTop = info.top;
				}
			}
		}
		/**
		* @getSelection: Gets the selection bounds of a focused textarea, input or
		* contentEditable node.
		* -@input: Look up selection bounds of this input
		* -@return {start: selectionStart, end: selectionEnd}
		*/
		function getSelection(input) {
			var selection;
			if ("selectionStart" in input) selection = {
				start: input.selectionStart,
				end: input.selectionEnd
			};
else selection = getOffsets(input);
			return selection || {
				start: 0,
				end: 0
			};
		}
		/**
		* @setSelection: Sets the selection bounds of a textarea or input and focuses
		* the input.
		* -@input     Set selection bounds of this input or textarea
		* -@offsets   Object of same form that is returned from get*
		*/
		function setSelection(input, offsets) {
			var start = offsets.start;
			var end = offsets.end;
			if (end === undefined) end = start;
			if ("selectionStart" in input) {
				input.selectionStart = start;
				input.selectionEnd = Math.min(end, input.value.length);
			} else setOffsets(input, offsets);
		}
		var skipSelectionChangeEvent = canUseDOM && "documentMode" in document && document.documentMode <= 11;
		function registerEvents$3() {
			registerTwoPhaseEvent("onSelect", [
				"focusout",
				"contextmenu",
				"dragend",
				"focusin",
				"keydown",
				"keyup",
				"mousedown",
				"mouseup",
				"selectionchange"
			]);
		}
		var activeElement$1 = null;
		var activeElementInst$1 = null;
		var lastSelection = null;
		var mouseDown = false;
		/**
		* Get an object which is a unique representation of the current selection.
		*
		* The return value will not be consistent across nodes or browsers, but
		* two identical selections on the same node will return identical objects.
		*/
		function getSelection$1(node) {
			if ("selectionStart" in node && hasSelectionCapabilities(node)) return {
				start: node.selectionStart,
				end: node.selectionEnd
			};
else {
				var win = node.ownerDocument && node.ownerDocument.defaultView || window;
				var selection = win.getSelection();
				return {
					anchorNode: selection.anchorNode,
					anchorOffset: selection.anchorOffset,
					focusNode: selection.focusNode,
					focusOffset: selection.focusOffset
				};
			}
		}
		/**
		* Get document associated with the event target.
		*/
		function getEventTargetDocument(eventTarget) {
			return eventTarget.window === eventTarget ? eventTarget.document : eventTarget.nodeType === DOCUMENT_NODE ? eventTarget : eventTarget.ownerDocument;
		}
		/**
		* Poll selection to see whether it's changed.
		*
		* @param {object} nativeEvent
		* @param {object} nativeEventTarget
		* @return {?SyntheticEvent}
		*/
		function constructSelectEvent(dispatchQueue, nativeEvent, nativeEventTarget) {
			var doc = getEventTargetDocument(nativeEventTarget);
			if (mouseDown || activeElement$1 == null || activeElement$1 !== getActiveElement(doc)) return;
			var currentSelection = getSelection$1(activeElement$1);
			if (!lastSelection || !shallowEqual(lastSelection, currentSelection)) {
				lastSelection = currentSelection;
				var listeners = accumulateTwoPhaseListeners(activeElementInst$1, "onSelect");
				if (listeners.length > 0) {
					var event = new SyntheticEvent("onSelect", "select", null, nativeEvent, nativeEventTarget);
					dispatchQueue.push({
						event,
						listeners
					});
					event.target = activeElement$1;
				}
			}
		}
		/**
		* This plugin creates an `onSelect` event that normalizes select events
		* across form elements.
		*
		* Supported elements are:
		* - input (see `isTextInputElement`)
		* - textarea
		* - contentEditable
		*
		* This differs from native browser implementations in the following ways:
		* - Fires on contentEditable fields as well as inputs.
		* - Fires for collapsed selection.
		* - Fires after user input.
		*/
		function extractEvents$3(dispatchQueue, domEventName, targetInst, nativeEvent, nativeEventTarget, eventSystemFlags, targetContainer) {
			var targetNode = targetInst ? getNodeFromInstance(targetInst) : window;
			switch (domEventName) {
				case "focusin":
					if (isTextInputElement(targetNode) || targetNode.contentEditable === "true") {
						activeElement$1 = targetNode;
						activeElementInst$1 = targetInst;
						lastSelection = null;
					}
					break;
				case "focusout":
					activeElement$1 = null;
					activeElementInst$1 = null;
					lastSelection = null;
					break;
				case "mousedown":
					mouseDown = true;
					break;
				case "contextmenu":
				case "mouseup":
				case "dragend":
					mouseDown = false;
					constructSelectEvent(dispatchQueue, nativeEvent, nativeEventTarget);
					break;
				case "selectionchange": if (skipSelectionChangeEvent) break;
				case "keydown":
				case "keyup": constructSelectEvent(dispatchQueue, nativeEvent, nativeEventTarget);
			}
		}
		/**
		* Generate a mapping of standard vendor prefixes using the defined style property and event name.
		*
		* @param {string} styleProp
		* @param {string} eventName
		* @returns {object}
		*/
		function makePrefixMap(styleProp, eventName) {
			var prefixes$1 = {};
			prefixes$1[styleProp.toLowerCase()] = eventName.toLowerCase();
			prefixes$1["Webkit" + styleProp] = "webkit" + eventName;
			prefixes$1["Moz" + styleProp] = "moz" + eventName;
			return prefixes$1;
		}
		/**
		* A list of event names to a configurable list of vendor prefixes.
		*/
		var vendorPrefixes = {
			animationend: makePrefixMap("Animation", "AnimationEnd"),
			animationiteration: makePrefixMap("Animation", "AnimationIteration"),
			animationstart: makePrefixMap("Animation", "AnimationStart"),
			transitionend: makePrefixMap("Transition", "TransitionEnd")
		};
		/**
		* Event names that have already been detected and prefixed (if applicable).
		*/
		var prefixedEventNames = {};
		/**
		* Element to check for prefixes on.
		*/
		var style = {};
		/**
		* Bootstrap if a DOM exists.
		*/
		if (canUseDOM) {
			style = document.createElement("div").style;
			if (!("AnimationEvent" in window)) {
				delete vendorPrefixes.animationend.animation;
				delete vendorPrefixes.animationiteration.animation;
				delete vendorPrefixes.animationstart.animation;
			}
			if (!("TransitionEvent" in window)) delete vendorPrefixes.transitionend.transition;
		}
		/**
		* Attempts to determine the correct vendor prefixed event name.
		*
		* @param {string} eventName
		* @returns {string}
		*/
		function getVendorPrefixedEventName(eventName) {
			if (prefixedEventNames[eventName]) return prefixedEventNames[eventName];
else if (!vendorPrefixes[eventName]) return eventName;
			var prefixMap = vendorPrefixes[eventName];
			for (var styleProp in prefixMap) if (prefixMap.hasOwnProperty(styleProp) && styleProp in style) return prefixedEventNames[eventName] = prefixMap[styleProp];
			return eventName;
		}
		var ANIMATION_END = getVendorPrefixedEventName("animationend");
		var ANIMATION_ITERATION = getVendorPrefixedEventName("animationiteration");
		var ANIMATION_START = getVendorPrefixedEventName("animationstart");
		var TRANSITION_END = getVendorPrefixedEventName("transitionend");
		var topLevelEventsToReactNames = new Map();
		var simpleEventPluginEvents = [
			"abort",
			"auxClick",
			"cancel",
			"canPlay",
			"canPlayThrough",
			"click",
			"close",
			"contextMenu",
			"copy",
			"cut",
			"drag",
			"dragEnd",
			"dragEnter",
			"dragExit",
			"dragLeave",
			"dragOver",
			"dragStart",
			"drop",
			"durationChange",
			"emptied",
			"encrypted",
			"ended",
			"error",
			"gotPointerCapture",
			"input",
			"invalid",
			"keyDown",
			"keyPress",
			"keyUp",
			"load",
			"loadedData",
			"loadedMetadata",
			"loadStart",
			"lostPointerCapture",
			"mouseDown",
			"mouseMove",
			"mouseOut",
			"mouseOver",
			"mouseUp",
			"paste",
			"pause",
			"play",
			"playing",
			"pointerCancel",
			"pointerDown",
			"pointerMove",
			"pointerOut",
			"pointerOver",
			"pointerUp",
			"progress",
			"rateChange",
			"reset",
			"resize",
			"seeked",
			"seeking",
			"stalled",
			"submit",
			"suspend",
			"timeUpdate",
			"touchCancel",
			"touchEnd",
			"touchStart",
			"volumeChange",
			"scroll",
			"toggle",
			"touchMove",
			"waiting",
			"wheel"
		];
		function registerSimpleEvent(domEventName, reactName) {
			topLevelEventsToReactNames.set(domEventName, reactName);
			registerTwoPhaseEvent(reactName, [domEventName]);
		}
		function registerSimpleEvents() {
			for (var i$1 = 0; i$1 < simpleEventPluginEvents.length; i$1++) {
				var eventName = simpleEventPluginEvents[i$1];
				var domEventName = eventName.toLowerCase();
				var capitalizedEvent = eventName[0].toUpperCase() + eventName.slice(1);
				registerSimpleEvent(domEventName, "on" + capitalizedEvent);
			}
			registerSimpleEvent(ANIMATION_END, "onAnimationEnd");
			registerSimpleEvent(ANIMATION_ITERATION, "onAnimationIteration");
			registerSimpleEvent(ANIMATION_START, "onAnimationStart");
			registerSimpleEvent("dblclick", "onDoubleClick");
			registerSimpleEvent("focusin", "onFocus");
			registerSimpleEvent("focusout", "onBlur");
			registerSimpleEvent(TRANSITION_END, "onTransitionEnd");
		}
		function extractEvents$4(dispatchQueue, domEventName, targetInst, nativeEvent, nativeEventTarget, eventSystemFlags, targetContainer) {
			var reactName = topLevelEventsToReactNames.get(domEventName);
			if (reactName === undefined) return;
			var SyntheticEventCtor = SyntheticEvent;
			var reactEventType = domEventName;
			switch (domEventName) {
				case "keypress": if (getEventCharCode(nativeEvent) === 0) return;
				case "keydown":
				case "keyup":
					SyntheticEventCtor = SyntheticKeyboardEvent;
					break;
				case "focusin":
					reactEventType = "focus";
					SyntheticEventCtor = SyntheticFocusEvent;
					break;
				case "focusout":
					reactEventType = "blur";
					SyntheticEventCtor = SyntheticFocusEvent;
					break;
				case "beforeblur":
				case "afterblur":
					SyntheticEventCtor = SyntheticFocusEvent;
					break;
				case "click": if (nativeEvent.button === 2) return;
				case "auxclick":
				case "dblclick":
				case "mousedown":
				case "mousemove":
				case "mouseup":
				case "mouseout":
				case "mouseover":
				case "contextmenu":
					SyntheticEventCtor = SyntheticMouseEvent;
					break;
				case "drag":
				case "dragend":
				case "dragenter":
				case "dragexit":
				case "dragleave":
				case "dragover":
				case "dragstart":
				case "drop":
					SyntheticEventCtor = SyntheticDragEvent;
					break;
				case "touchcancel":
				case "touchend":
				case "touchmove":
				case "touchstart":
					SyntheticEventCtor = SyntheticTouchEvent;
					break;
				case ANIMATION_END:
				case ANIMATION_ITERATION:
				case ANIMATION_START:
					SyntheticEventCtor = SyntheticAnimationEvent;
					break;
				case TRANSITION_END:
					SyntheticEventCtor = SyntheticTransitionEvent;
					break;
				case "scroll":
					SyntheticEventCtor = SyntheticUIEvent;
					break;
				case "wheel":
					SyntheticEventCtor = SyntheticWheelEvent;
					break;
				case "copy":
				case "cut":
				case "paste":
					SyntheticEventCtor = SyntheticClipboardEvent;
					break;
				case "gotpointercapture":
				case "lostpointercapture":
				case "pointercancel":
				case "pointerdown":
				case "pointermove":
				case "pointerout":
				case "pointerover":
				case "pointerup":
					SyntheticEventCtor = SyntheticPointerEvent;
					break;
			}
			var inCapturePhase = (eventSystemFlags & IS_CAPTURE_PHASE) !== 0;
			{
				var accumulateTargetOnly = !inCapturePhase && domEventName === "scroll";
				var _listeners = accumulateSinglePhaseListeners(targetInst, reactName, nativeEvent.type, inCapturePhase, accumulateTargetOnly);
				if (_listeners.length > 0) {
					var _event = new SyntheticEventCtor(reactName, reactEventType, null, nativeEvent, nativeEventTarget);
					dispatchQueue.push({
						event: _event,
						listeners: _listeners
					});
				}
			}
		}
		registerSimpleEvents();
		registerEvents$2();
		registerEvents$1();
		registerEvents$3();
		registerEvents();
		function extractEvents$5(dispatchQueue, domEventName, targetInst, nativeEvent, nativeEventTarget, eventSystemFlags, targetContainer) {
			extractEvents$4(dispatchQueue, domEventName, targetInst, nativeEvent, nativeEventTarget, eventSystemFlags);
			var shouldProcessPolyfillPlugins = (eventSystemFlags & SHOULD_NOT_PROCESS_POLYFILL_EVENT_PLUGINS) === 0;
			if (shouldProcessPolyfillPlugins) {
				extractEvents$2(dispatchQueue, domEventName, targetInst, nativeEvent, nativeEventTarget);
				extractEvents$1(dispatchQueue, domEventName, targetInst, nativeEvent, nativeEventTarget);
				extractEvents$3(dispatchQueue, domEventName, targetInst, nativeEvent, nativeEventTarget);
				extractEvents(dispatchQueue, domEventName, targetInst, nativeEvent, nativeEventTarget);
			}
		}
		var mediaEventTypes = [
			"abort",
			"canplay",
			"canplaythrough",
			"durationchange",
			"emptied",
			"encrypted",
			"ended",
			"error",
			"loadeddata",
			"loadedmetadata",
			"loadstart",
			"pause",
			"play",
			"playing",
			"progress",
			"ratechange",
			"resize",
			"seeked",
			"seeking",
			"stalled",
			"suspend",
			"timeupdate",
			"volumechange",
			"waiting"
		];
		var nonDelegatedEvents = new Set([
			"cancel",
			"close",
			"invalid",
			"load",
			"scroll",
			"toggle"
		].concat(mediaEventTypes));
		function executeDispatch(event, listener, currentTarget) {
			var type = event.type || "unknown-event";
			event.currentTarget = currentTarget;
			invokeGuardedCallbackAndCatchFirstError(type, listener, undefined, event);
			event.currentTarget = null;
		}
		function processDispatchQueueItemsInOrder(event, dispatchListeners, inCapturePhase) {
			var previousInstance;
			if (inCapturePhase) for (var i$1 = dispatchListeners.length - 1; i$1 >= 0; i$1--) {
				var _dispatchListeners$i = dispatchListeners[i$1], instance = _dispatchListeners$i.instance, currentTarget = _dispatchListeners$i.currentTarget, listener = _dispatchListeners$i.listener;
				if (instance !== previousInstance && event.isPropagationStopped()) return;
				executeDispatch(event, listener, currentTarget);
				previousInstance = instance;
			}
else for (var _i = 0; _i < dispatchListeners.length; _i++) {
				var _dispatchListeners$_i = dispatchListeners[_i], _instance = _dispatchListeners$_i.instance, _currentTarget = _dispatchListeners$_i.currentTarget, _listener = _dispatchListeners$_i.listener;
				if (_instance !== previousInstance && event.isPropagationStopped()) return;
				executeDispatch(event, _listener, _currentTarget);
				previousInstance = _instance;
			}
		}
		function processDispatchQueue(dispatchQueue, eventSystemFlags) {
			var inCapturePhase = (eventSystemFlags & IS_CAPTURE_PHASE) !== 0;
			for (var i$1 = 0; i$1 < dispatchQueue.length; i$1++) {
				var _dispatchQueue$i = dispatchQueue[i$1], event = _dispatchQueue$i.event, listeners = _dispatchQueue$i.listeners;
				processDispatchQueueItemsInOrder(event, listeners, inCapturePhase);
			}
			rethrowCaughtError();
		}
		function dispatchEventsForPlugins(domEventName, eventSystemFlags, nativeEvent, targetInst, targetContainer) {
			var nativeEventTarget = getEventTarget(nativeEvent);
			var dispatchQueue = [];
			extractEvents$5(dispatchQueue, domEventName, targetInst, nativeEvent, nativeEventTarget, eventSystemFlags);
			processDispatchQueue(dispatchQueue, eventSystemFlags);
		}
		function listenToNonDelegatedEvent(domEventName, targetElement) {
			if (!nonDelegatedEvents.has(domEventName)) error("Did not expect a listenToNonDelegatedEvent() call for \"%s\". This is a bug in React. Please file an issue.", domEventName);
			var isCapturePhaseListener = false;
			var listenerSet = getEventListenerSet(targetElement);
			var listenerSetKey = getListenerSetKey(domEventName, isCapturePhaseListener);
			if (!listenerSet.has(listenerSetKey)) {
				addTrappedEventListener(targetElement, domEventName, IS_NON_DELEGATED, isCapturePhaseListener);
				listenerSet.add(listenerSetKey);
			}
		}
		function listenToNativeEvent(domEventName, isCapturePhaseListener, target) {
			if (nonDelegatedEvents.has(domEventName) && !isCapturePhaseListener) error("Did not expect a listenToNativeEvent() call for \"%s\" in the bubble phase. This is a bug in React. Please file an issue.", domEventName);
			var eventSystemFlags = 0;
			if (isCapturePhaseListener) eventSystemFlags |= IS_CAPTURE_PHASE;
			addTrappedEventListener(target, domEventName, eventSystemFlags, isCapturePhaseListener);
		}
		var listeningMarker = "_reactListening" + Math.random().toString(36).slice(2);
		function listenToAllSupportedEvents(rootContainerElement) {
			if (!rootContainerElement[listeningMarker]) {
				rootContainerElement[listeningMarker] = true;
				allNativeEvents.forEach(function(domEventName) {
					if (domEventName !== "selectionchange") {
						if (!nonDelegatedEvents.has(domEventName)) listenToNativeEvent(domEventName, false, rootContainerElement);
						listenToNativeEvent(domEventName, true, rootContainerElement);
					}
				});
				var ownerDocument = rootContainerElement.nodeType === DOCUMENT_NODE ? rootContainerElement : rootContainerElement.ownerDocument;
				if (ownerDocument !== null) {
					if (!ownerDocument[listeningMarker]) {
						ownerDocument[listeningMarker] = true;
						listenToNativeEvent("selectionchange", false, ownerDocument);
					}
				}
			}
		}
		function addTrappedEventListener(targetContainer, domEventName, eventSystemFlags, isCapturePhaseListener, isDeferredListenerForLegacyFBSupport) {
			var listener = createEventListenerWrapperWithPriority(targetContainer, domEventName, eventSystemFlags);
			var isPassiveListener = undefined;
			if (passiveBrowserEventsSupported) {
				if (domEventName === "touchstart" || domEventName === "touchmove" || domEventName === "wheel") isPassiveListener = true;
			}
			targetContainer = targetContainer;
			var unsubscribeListener;
			if (isCapturePhaseListener) if (isPassiveListener !== undefined) unsubscribeListener = addEventCaptureListenerWithPassiveFlag(targetContainer, domEventName, listener, isPassiveListener);
else unsubscribeListener = addEventCaptureListener(targetContainer, domEventName, listener);
else if (isPassiveListener !== undefined) unsubscribeListener = addEventBubbleListenerWithPassiveFlag(targetContainer, domEventName, listener, isPassiveListener);
else unsubscribeListener = addEventBubbleListener(targetContainer, domEventName, listener);
		}
		function isMatchingRootContainer(grandContainer, targetContainer) {
			return grandContainer === targetContainer || grandContainer.nodeType === COMMENT_NODE && grandContainer.parentNode === targetContainer;
		}
		function dispatchEventForPluginEventSystem(domEventName, eventSystemFlags, nativeEvent, targetInst, targetContainer) {
			var ancestorInst = targetInst;
			if ((eventSystemFlags & IS_EVENT_HANDLE_NON_MANAGED_NODE) === 0 && (eventSystemFlags & IS_NON_DELEGATED) === 0) {
				var targetContainerNode = targetContainer;
				if (targetInst !== null) {
					var node = targetInst;
					mainLoop: while (true) {
						if (node === null) return;
						var nodeTag = node.tag;
						if (nodeTag === HostRoot || nodeTag === HostPortal) {
							var container = node.stateNode.containerInfo;
							if (isMatchingRootContainer(container, targetContainerNode)) break;
							if (nodeTag === HostPortal) {
								var grandNode = node.return;
								while (grandNode !== null) {
									var grandTag = grandNode.tag;
									if (grandTag === HostRoot || grandTag === HostPortal) {
										var grandContainer = grandNode.stateNode.containerInfo;
										if (isMatchingRootContainer(grandContainer, targetContainerNode)) return;
									}
									grandNode = grandNode.return;
								}
							}
							while (container !== null) {
								var parentNode = getClosestInstanceFromNode(container);
								if (parentNode === null) return;
								var parentTag = parentNode.tag;
								if (parentTag === HostComponent || parentTag === HostText) {
									node = ancestorInst = parentNode;
									continue mainLoop;
								}
								container = container.parentNode;
							}
						}
						node = node.return;
					}
				}
			}
			batchedUpdates(function() {
				return dispatchEventsForPlugins(domEventName, eventSystemFlags, nativeEvent, ancestorInst);
			});
		}
		function createDispatchListener(instance, listener, currentTarget) {
			return {
				instance,
				listener,
				currentTarget
			};
		}
		function accumulateSinglePhaseListeners(targetFiber, reactName, nativeEventType, inCapturePhase, accumulateTargetOnly, nativeEvent) {
			var captureName = reactName !== null ? reactName + "Capture" : null;
			var reactEventName = inCapturePhase ? captureName : reactName;
			var listeners = [];
			var instance = targetFiber;
			var lastHostComponent = null;
			while (instance !== null) {
				var _instance2 = instance, stateNode = _instance2.stateNode, tag = _instance2.tag;
				if (tag === HostComponent && stateNode !== null) {
					lastHostComponent = stateNode;
					if (reactEventName !== null) {
						var listener = getListener(instance, reactEventName);
						if (listener != null) listeners.push(createDispatchListener(instance, listener, lastHostComponent));
					}
				}
				if (accumulateTargetOnly) break;
				instance = instance.return;
			}
			return listeners;
		}
		function accumulateTwoPhaseListeners(targetFiber, reactName) {
			var captureName = reactName + "Capture";
			var listeners = [];
			var instance = targetFiber;
			while (instance !== null) {
				var _instance3 = instance, stateNode = _instance3.stateNode, tag = _instance3.tag;
				if (tag === HostComponent && stateNode !== null) {
					var currentTarget = stateNode;
					var captureListener = getListener(instance, captureName);
					if (captureListener != null) listeners.unshift(createDispatchListener(instance, captureListener, currentTarget));
					var bubbleListener = getListener(instance, reactName);
					if (bubbleListener != null) listeners.push(createDispatchListener(instance, bubbleListener, currentTarget));
				}
				instance = instance.return;
			}
			return listeners;
		}
		function getParent(inst) {
			if (inst === null) return null;
			do 
				inst = inst.return;
			while (inst && inst.tag !== HostComponent);
			if (inst) return inst;
			return null;
		}
		/**
		* Return the lowest common ancestor of A and B, or null if they are in
		* different trees.
		*/
		function getLowestCommonAncestor(instA, instB) {
			var nodeA = instA;
			var nodeB = instB;
			var depthA = 0;
			for (var tempA = nodeA; tempA; tempA = getParent(tempA)) depthA++;
			var depthB = 0;
			for (var tempB = nodeB; tempB; tempB = getParent(tempB)) depthB++;
			while (depthA - depthB > 0) {
				nodeA = getParent(nodeA);
				depthA--;
			}
			while (depthB - depthA > 0) {
				nodeB = getParent(nodeB);
				depthB--;
			}
			var depth = depthA;
			while (depth--) {
				if (nodeA === nodeB || nodeB !== null && nodeA === nodeB.alternate) return nodeA;
				nodeA = getParent(nodeA);
				nodeB = getParent(nodeB);
			}
			return null;
		}
		function accumulateEnterLeaveListenersForEvent(dispatchQueue, event, target, common, inCapturePhase) {
			var registrationName = event._reactName;
			var listeners = [];
			var instance = target;
			while (instance !== null) {
				if (instance === common) break;
				var _instance4 = instance, alternate = _instance4.alternate, stateNode = _instance4.stateNode, tag = _instance4.tag;
				if (alternate !== null && alternate === common) break;
				if (tag === HostComponent && stateNode !== null) {
					var currentTarget = stateNode;
					if (inCapturePhase) {
						var captureListener = getListener(instance, registrationName);
						if (captureListener != null) listeners.unshift(createDispatchListener(instance, captureListener, currentTarget));
					} else if (!inCapturePhase) {
						var bubbleListener = getListener(instance, registrationName);
						if (bubbleListener != null) listeners.push(createDispatchListener(instance, bubbleListener, currentTarget));
					}
				}
				instance = instance.return;
			}
			if (listeners.length !== 0) dispatchQueue.push({
				event,
				listeners
			});
		}
		function accumulateEnterLeaveTwoPhaseListeners(dispatchQueue, leaveEvent, enterEvent, from, to) {
			var common = from && to ? getLowestCommonAncestor(from, to) : null;
			if (from !== null) accumulateEnterLeaveListenersForEvent(dispatchQueue, leaveEvent, from, common, false);
			if (to !== null && enterEvent !== null) accumulateEnterLeaveListenersForEvent(dispatchQueue, enterEvent, to, common, true);
		}
		function getListenerSetKey(domEventName, capture) {
			return domEventName + "__" + (capture ? "capture" : "bubble");
		}
		var didWarnInvalidHydration = false;
		var DANGEROUSLY_SET_INNER_HTML = "dangerouslySetInnerHTML";
		var SUPPRESS_CONTENT_EDITABLE_WARNING = "suppressContentEditableWarning";
		var SUPPRESS_HYDRATION_WARNING = "suppressHydrationWarning";
		var AUTOFOCUS = "autoFocus";
		var CHILDREN = "children";
		var STYLE = "style";
		var HTML$1 = "__html";
		var warnedUnknownTags;
		var validatePropertiesInDevelopment;
		var warnForPropDifference;
		var warnForExtraAttributes;
		var warnForInvalidEventListener;
		var canDiffStyleForHydrationWarning;
		var normalizeHTML;
		{
			warnedUnknownTags = {
				dialog: true,
				webview: true
			};
			validatePropertiesInDevelopment = function(type, props) {
				validateProperties(type, props);
				validateProperties$1(type, props);
				validateProperties$2(type, props, {
					registrationNameDependencies,
					possibleRegistrationNames
				});
			};
			canDiffStyleForHydrationWarning = canUseDOM && !document.documentMode;
			warnForPropDifference = function(propName, serverValue, clientValue) {
				if (didWarnInvalidHydration) return;
				var normalizedClientValue = normalizeMarkupForTextOrAttribute(clientValue);
				var normalizedServerValue = normalizeMarkupForTextOrAttribute(serverValue);
				if (normalizedServerValue === normalizedClientValue) return;
				didWarnInvalidHydration = true;
				error("Prop `%s` did not match. Server: %s Client: %s", propName, JSON.stringify(normalizedServerValue), JSON.stringify(normalizedClientValue));
			};
			warnForExtraAttributes = function(attributeNames) {
				if (didWarnInvalidHydration) return;
				didWarnInvalidHydration = true;
				var names = [];
				attributeNames.forEach(function(name) {
					names.push(name);
				});
				error("Extra attributes from the server: %s", names);
			};
			warnForInvalidEventListener = function(registrationName, listener) {
				if (listener === false) error("Expected `%s` listener to be a function, instead got `false`.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.", registrationName, registrationName, registrationName);
else error("Expected `%s` listener to be a function, instead got a value of `%s` type.", registrationName, typeof listener);
			};
			normalizeHTML = function(parent, html) {
				var testElement = parent.namespaceURI === HTML_NAMESPACE ? parent.ownerDocument.createElement(parent.tagName) : parent.ownerDocument.createElementNS(parent.namespaceURI, parent.tagName);
				testElement.innerHTML = html;
				return testElement.innerHTML;
			};
		}
		var NORMALIZE_NEWLINES_REGEX = /\r\n?/g;
		var NORMALIZE_NULL_AND_REPLACEMENT_REGEX = /\u0000|\uFFFD/g;
		function normalizeMarkupForTextOrAttribute(markup) {
			checkHtmlStringCoercion(markup);
			var markupString = typeof markup === "string" ? markup : "" + markup;
			return markupString.replace(NORMALIZE_NEWLINES_REGEX, "\n").replace(NORMALIZE_NULL_AND_REPLACEMENT_REGEX, "");
		}
		function checkForUnmatchedText(serverText, clientText, isConcurrentMode, shouldWarnDev) {
			var normalizedClientText = normalizeMarkupForTextOrAttribute(clientText);
			var normalizedServerText = normalizeMarkupForTextOrAttribute(serverText);
			if (normalizedServerText === normalizedClientText) return;
			if (shouldWarnDev) {
				if (!didWarnInvalidHydration) {
					didWarnInvalidHydration = true;
					error("Text content did not match. Server: \"%s\" Client: \"%s\"", normalizedServerText, normalizedClientText);
				}
			}
			if (isConcurrentMode && enableClientRenderFallbackOnTextMismatch) throw new Error("Text content does not match server-rendered HTML.");
		}
		function getOwnerDocumentFromRootContainer(rootContainerElement) {
			return rootContainerElement.nodeType === DOCUMENT_NODE ? rootContainerElement : rootContainerElement.ownerDocument;
		}
		function noop() {}
		function trapClickOnNonInteractiveElement(node) {
			node.onclick = noop;
		}
		function setInitialDOMProperties(tag, domElement, rootContainerElement, nextProps, isCustomComponentTag) {
			for (var propKey in nextProps) {
				if (!nextProps.hasOwnProperty(propKey)) continue;
				var nextProp = nextProps[propKey];
				if (propKey === STYLE) {
					if (nextProp) Object.freeze(nextProp);
					setValueForStyles(domElement, nextProp);
				} else if (propKey === DANGEROUSLY_SET_INNER_HTML) {
					var nextHtml = nextProp ? nextProp[HTML$1] : undefined;
					if (nextHtml != null) setInnerHTML(domElement, nextHtml);
				} else if (propKey === CHILDREN) {
					if (typeof nextProp === "string") {
						var canSetTextContent = tag !== "textarea" || nextProp !== "";
						if (canSetTextContent) setTextContent(domElement, nextProp);
					} else if (typeof nextProp === "number") setTextContent(domElement, "" + nextProp);
				} else if (propKey === SUPPRESS_CONTENT_EDITABLE_WARNING || propKey === SUPPRESS_HYDRATION_WARNING);
else if (propKey === AUTOFOCUS);
else if (registrationNameDependencies.hasOwnProperty(propKey)) {
					if (nextProp != null) {
						if (typeof nextProp !== "function") warnForInvalidEventListener(propKey, nextProp);
						if (propKey === "onScroll") listenToNonDelegatedEvent("scroll", domElement);
					}
				} else if (nextProp != null) setValueForProperty(domElement, propKey, nextProp, isCustomComponentTag);
			}
		}
		function updateDOMProperties(domElement, updatePayload, wasCustomComponentTag, isCustomComponentTag) {
			for (var i$1 = 0; i$1 < updatePayload.length; i$1 += 2) {
				var propKey = updatePayload[i$1];
				var propValue = updatePayload[i$1 + 1];
				if (propKey === STYLE) setValueForStyles(domElement, propValue);
else if (propKey === DANGEROUSLY_SET_INNER_HTML) setInnerHTML(domElement, propValue);
else if (propKey === CHILDREN) setTextContent(domElement, propValue);
else setValueForProperty(domElement, propKey, propValue, isCustomComponentTag);
			}
		}
		function createElement(type, props, rootContainerElement, parentNamespace) {
			var isCustomComponentTag;
			var ownerDocument = getOwnerDocumentFromRootContainer(rootContainerElement);
			var domElement;
			var namespaceURI = parentNamespace;
			if (namespaceURI === HTML_NAMESPACE) namespaceURI = getIntrinsicNamespace(type);
			if (namespaceURI === HTML_NAMESPACE) {
				{
					isCustomComponentTag = isCustomComponent(type, props);
					if (!isCustomComponentTag && type !== type.toLowerCase()) error("<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.", type);
				}
				if (type === "script") {
					var div = ownerDocument.createElement("div");
					div.innerHTML = "<script></script>";
					var firstChild = div.firstChild;
					domElement = div.removeChild(firstChild);
				} else if (typeof props.is === "string") domElement = ownerDocument.createElement(type, { is: props.is });
else {
					domElement = ownerDocument.createElement(type);
					if (type === "select") {
						var node = domElement;
						if (props.multiple) node.multiple = true;
else if (props.size) node.size = props.size;
					}
				}
			} else domElement = ownerDocument.createElementNS(namespaceURI, type);
			if (namespaceURI === HTML_NAMESPACE) {
				if (!isCustomComponentTag && Object.prototype.toString.call(domElement) === "[object HTMLUnknownElement]" && !hasOwnProperty.call(warnedUnknownTags, type)) {
					warnedUnknownTags[type] = true;
					error("The tag <%s> is unrecognized in this browser. If you meant to render a React component, start its name with an uppercase letter.", type);
				}
			}
			return domElement;
		}
		function createTextNode(text, rootContainerElement) {
			return getOwnerDocumentFromRootContainer(rootContainerElement).createTextNode(text);
		}
		function setInitialProperties(domElement, tag, rawProps, rootContainerElement) {
			var isCustomComponentTag = isCustomComponent(tag, rawProps);
			validatePropertiesInDevelopment(tag, rawProps);
			var props;
			switch (tag) {
				case "dialog":
					listenToNonDelegatedEvent("cancel", domElement);
					listenToNonDelegatedEvent("close", domElement);
					props = rawProps;
					break;
				case "iframe":
				case "object":
				case "embed":
					listenToNonDelegatedEvent("load", domElement);
					props = rawProps;
					break;
				case "video":
				case "audio":
					for (var i$1 = 0; i$1 < mediaEventTypes.length; i$1++) listenToNonDelegatedEvent(mediaEventTypes[i$1], domElement);
					props = rawProps;
					break;
				case "source":
					listenToNonDelegatedEvent("error", domElement);
					props = rawProps;
					break;
				case "img":
				case "image":
				case "link":
					listenToNonDelegatedEvent("error", domElement);
					listenToNonDelegatedEvent("load", domElement);
					props = rawProps;
					break;
				case "details":
					listenToNonDelegatedEvent("toggle", domElement);
					props = rawProps;
					break;
				case "input":
					initWrapperState(domElement, rawProps);
					props = getHostProps(domElement, rawProps);
					listenToNonDelegatedEvent("invalid", domElement);
					break;
				case "option":
					validateProps(domElement, rawProps);
					props = rawProps;
					break;
				case "select":
					initWrapperState$1(domElement, rawProps);
					props = getHostProps$1(domElement, rawProps);
					listenToNonDelegatedEvent("invalid", domElement);
					break;
				case "textarea":
					initWrapperState$2(domElement, rawProps);
					props = getHostProps$2(domElement, rawProps);
					listenToNonDelegatedEvent("invalid", domElement);
					break;
				default: props = rawProps;
			}
			assertValidProps(tag, props);
			setInitialDOMProperties(tag, domElement, rootContainerElement, props, isCustomComponentTag);
			switch (tag) {
				case "input":
					track(domElement);
					postMountWrapper(domElement, rawProps, false);
					break;
				case "textarea":
					track(domElement);
					postMountWrapper$3(domElement);
					break;
				case "option":
					postMountWrapper$1(domElement, rawProps);
					break;
				case "select":
					postMountWrapper$2(domElement, rawProps);
					break;
				default:
					if (typeof props.onClick === "function") trapClickOnNonInteractiveElement(domElement);
					break;
			}
		}
		function diffProperties(domElement, tag, lastRawProps, nextRawProps, rootContainerElement) {
			validatePropertiesInDevelopment(tag, nextRawProps);
			var updatePayload = null;
			var lastProps;
			var nextProps;
			switch (tag) {
				case "input":
					lastProps = getHostProps(domElement, lastRawProps);
					nextProps = getHostProps(domElement, nextRawProps);
					updatePayload = [];
					break;
				case "select":
					lastProps = getHostProps$1(domElement, lastRawProps);
					nextProps = getHostProps$1(domElement, nextRawProps);
					updatePayload = [];
					break;
				case "textarea":
					lastProps = getHostProps$2(domElement, lastRawProps);
					nextProps = getHostProps$2(domElement, nextRawProps);
					updatePayload = [];
					break;
				default:
					lastProps = lastRawProps;
					nextProps = nextRawProps;
					if (typeof lastProps.onClick !== "function" && typeof nextProps.onClick === "function") trapClickOnNonInteractiveElement(domElement);
					break;
			}
			assertValidProps(tag, nextProps);
			var propKey;
			var styleName;
			var styleUpdates = null;
			for (propKey in lastProps) {
				if (nextProps.hasOwnProperty(propKey) || !lastProps.hasOwnProperty(propKey) || lastProps[propKey] == null) continue;
				if (propKey === STYLE) {
					var lastStyle = lastProps[propKey];
					for (styleName in lastStyle) if (lastStyle.hasOwnProperty(styleName)) {
						if (!styleUpdates) styleUpdates = {};
						styleUpdates[styleName] = "";
					}
				} else if (propKey === DANGEROUSLY_SET_INNER_HTML || propKey === CHILDREN);
else if (propKey === SUPPRESS_CONTENT_EDITABLE_WARNING || propKey === SUPPRESS_HYDRATION_WARNING);
else if (propKey === AUTOFOCUS);
else if (registrationNameDependencies.hasOwnProperty(propKey)) {
					if (!updatePayload) updatePayload = [];
				} else (updatePayload = updatePayload || []).push(propKey, null);
			}
			for (propKey in nextProps) {
				var nextProp = nextProps[propKey];
				var lastProp = lastProps != null ? lastProps[propKey] : undefined;
				if (!nextProps.hasOwnProperty(propKey) || nextProp === lastProp || nextProp == null && lastProp == null) continue;
				if (propKey === STYLE) {
					if (nextProp) Object.freeze(nextProp);
					if (lastProp) {
						for (styleName in lastProp) if (lastProp.hasOwnProperty(styleName) && (!nextProp || !nextProp.hasOwnProperty(styleName))) {
							if (!styleUpdates) styleUpdates = {};
							styleUpdates[styleName] = "";
						}
						for (styleName in nextProp) if (nextProp.hasOwnProperty(styleName) && lastProp[styleName] !== nextProp[styleName]) {
							if (!styleUpdates) styleUpdates = {};
							styleUpdates[styleName] = nextProp[styleName];
						}
					} else {
						if (!styleUpdates) {
							if (!updatePayload) updatePayload = [];
							updatePayload.push(propKey, styleUpdates);
						}
						styleUpdates = nextProp;
					}
				} else if (propKey === DANGEROUSLY_SET_INNER_HTML) {
					var nextHtml = nextProp ? nextProp[HTML$1] : undefined;
					var lastHtml = lastProp ? lastProp[HTML$1] : undefined;
					if (nextHtml != null) {
						if (lastHtml !== nextHtml) (updatePayload = updatePayload || []).push(propKey, nextHtml);
					}
				} else if (propKey === CHILDREN) {
					if (typeof nextProp === "string" || typeof nextProp === "number") (updatePayload = updatePayload || []).push(propKey, "" + nextProp);
				} else if (propKey === SUPPRESS_CONTENT_EDITABLE_WARNING || propKey === SUPPRESS_HYDRATION_WARNING);
else if (registrationNameDependencies.hasOwnProperty(propKey)) {
					if (nextProp != null) {
						if (typeof nextProp !== "function") warnForInvalidEventListener(propKey, nextProp);
						if (propKey === "onScroll") listenToNonDelegatedEvent("scroll", domElement);
					}
					if (!updatePayload && lastProp !== nextProp) updatePayload = [];
				} else (updatePayload = updatePayload || []).push(propKey, nextProp);
			}
			if (styleUpdates) {
				validateShorthandPropertyCollisionInDev(styleUpdates, nextProps[STYLE]);
				(updatePayload = updatePayload || []).push(STYLE, styleUpdates);
			}
			return updatePayload;
		}
		function updateProperties(domElement, updatePayload, tag, lastRawProps, nextRawProps) {
			if (tag === "input" && nextRawProps.type === "radio" && nextRawProps.name != null) updateChecked(domElement, nextRawProps);
			var wasCustomComponentTag = isCustomComponent(tag, lastRawProps);
			var isCustomComponentTag = isCustomComponent(tag, nextRawProps);
			updateDOMProperties(domElement, updatePayload, wasCustomComponentTag, isCustomComponentTag);
			switch (tag) {
				case "input":
					updateWrapper(domElement, nextRawProps);
					break;
				case "textarea":
					updateWrapper$1(domElement, nextRawProps);
					break;
				case "select":
					postUpdateWrapper(domElement, nextRawProps);
					break;
			}
		}
		function getPossibleStandardName(propName) {
			{
				var lowerCasedName = propName.toLowerCase();
				if (!possibleStandardNames.hasOwnProperty(lowerCasedName)) return null;
				return possibleStandardNames[lowerCasedName] || null;
			}
		}
		function diffHydratedProperties(domElement, tag, rawProps, parentNamespace, rootContainerElement, isConcurrentMode, shouldWarnDev) {
			var isCustomComponentTag;
			var extraAttributeNames;
			{
				isCustomComponentTag = isCustomComponent(tag, rawProps);
				validatePropertiesInDevelopment(tag, rawProps);
			}
			switch (tag) {
				case "dialog":
					listenToNonDelegatedEvent("cancel", domElement);
					listenToNonDelegatedEvent("close", domElement);
					break;
				case "iframe":
				case "object":
				case "embed":
					listenToNonDelegatedEvent("load", domElement);
					break;
				case "video":
				case "audio":
					for (var i$1 = 0; i$1 < mediaEventTypes.length; i$1++) listenToNonDelegatedEvent(mediaEventTypes[i$1], domElement);
					break;
				case "source":
					listenToNonDelegatedEvent("error", domElement);
					break;
				case "img":
				case "image":
				case "link":
					listenToNonDelegatedEvent("error", domElement);
					listenToNonDelegatedEvent("load", domElement);
					break;
				case "details":
					listenToNonDelegatedEvent("toggle", domElement);
					break;
				case "input":
					initWrapperState(domElement, rawProps);
					listenToNonDelegatedEvent("invalid", domElement);
					break;
				case "option":
					validateProps(domElement, rawProps);
					break;
				case "select":
					initWrapperState$1(domElement, rawProps);
					listenToNonDelegatedEvent("invalid", domElement);
					break;
				case "textarea":
					initWrapperState$2(domElement, rawProps);
					listenToNonDelegatedEvent("invalid", domElement);
					break;
			}
			assertValidProps(tag, rawProps);
			{
				extraAttributeNames = new Set();
				var attributes = domElement.attributes;
				for (var _i = 0; _i < attributes.length; _i++) {
					var name = attributes[_i].name.toLowerCase();
					switch (name) {
						case "value": break;
						case "checked": break;
						case "selected": break;
						default: extraAttributeNames.add(attributes[_i].name);
					}
				}
			}
			var updatePayload = null;
			for (var propKey in rawProps) {
				if (!rawProps.hasOwnProperty(propKey)) continue;
				var nextProp = rawProps[propKey];
				if (propKey === CHILDREN) {
					if (typeof nextProp === "string") {
						if (domElement.textContent !== nextProp) {
							if (rawProps[SUPPRESS_HYDRATION_WARNING] !== true) checkForUnmatchedText(domElement.textContent, nextProp, isConcurrentMode, shouldWarnDev);
							updatePayload = [CHILDREN, nextProp];
						}
					} else if (typeof nextProp === "number") {
						if (domElement.textContent !== "" + nextProp) {
							if (rawProps[SUPPRESS_HYDRATION_WARNING] !== true) checkForUnmatchedText(domElement.textContent, nextProp, isConcurrentMode, shouldWarnDev);
							updatePayload = [CHILDREN, "" + nextProp];
						}
					}
				} else if (registrationNameDependencies.hasOwnProperty(propKey)) {
					if (nextProp != null) {
						if (typeof nextProp !== "function") warnForInvalidEventListener(propKey, nextProp);
						if (propKey === "onScroll") listenToNonDelegatedEvent("scroll", domElement);
					}
				} else if (shouldWarnDev && typeof isCustomComponentTag === "boolean") {
					var serverValue = void 0;
					var propertyInfo = isCustomComponentTag && enableCustomElementPropertySupport ? null : getPropertyInfo(propKey);
					if (rawProps[SUPPRESS_HYDRATION_WARNING] === true);
else if (propKey === SUPPRESS_CONTENT_EDITABLE_WARNING || propKey === SUPPRESS_HYDRATION_WARNING || propKey === "value" || propKey === "checked" || propKey === "selected");
else if (propKey === DANGEROUSLY_SET_INNER_HTML) {
						var serverHTML = domElement.innerHTML;
						var nextHtml = nextProp ? nextProp[HTML$1] : undefined;
						if (nextHtml != null) {
							var expectedHTML = normalizeHTML(domElement, nextHtml);
							if (expectedHTML !== serverHTML) warnForPropDifference(propKey, serverHTML, expectedHTML);
						}
					} else if (propKey === STYLE) {
						extraAttributeNames.delete(propKey);
						if (canDiffStyleForHydrationWarning) {
							var expectedStyle = createDangerousStringForStyles(nextProp);
							serverValue = domElement.getAttribute("style");
							if (expectedStyle !== serverValue) warnForPropDifference(propKey, serverValue, expectedStyle);
						}
					} else if (isCustomComponentTag && !enableCustomElementPropertySupport) {
						extraAttributeNames.delete(propKey.toLowerCase());
						serverValue = getValueForAttribute(domElement, propKey, nextProp);
						if (nextProp !== serverValue) warnForPropDifference(propKey, serverValue, nextProp);
					} else if (!shouldIgnoreAttribute(propKey, propertyInfo, isCustomComponentTag) && !shouldRemoveAttribute(propKey, nextProp, propertyInfo, isCustomComponentTag)) {
						var isMismatchDueToBadCasing = false;
						if (propertyInfo !== null) {
							extraAttributeNames.delete(propertyInfo.attributeName);
							serverValue = getValueForProperty(domElement, propKey, nextProp, propertyInfo);
						} else {
							var ownNamespace = parentNamespace;
							if (ownNamespace === HTML_NAMESPACE) ownNamespace = getIntrinsicNamespace(tag);
							if (ownNamespace === HTML_NAMESPACE) extraAttributeNames.delete(propKey.toLowerCase());
else {
								var standardName = getPossibleStandardName(propKey);
								if (standardName !== null && standardName !== propKey) {
									isMismatchDueToBadCasing = true;
									extraAttributeNames.delete(standardName);
								}
								extraAttributeNames.delete(propKey);
							}
							serverValue = getValueForAttribute(domElement, propKey, nextProp);
						}
						var dontWarnCustomElement = enableCustomElementPropertySupport;
						if (!dontWarnCustomElement && nextProp !== serverValue && !isMismatchDueToBadCasing) warnForPropDifference(propKey, serverValue, nextProp);
					}
				}
			}
			if (shouldWarnDev) {
				if (extraAttributeNames.size > 0 && rawProps[SUPPRESS_HYDRATION_WARNING] !== true) warnForExtraAttributes(extraAttributeNames);
			}
			switch (tag) {
				case "input":
					track(domElement);
					postMountWrapper(domElement, rawProps, true);
					break;
				case "textarea":
					track(domElement);
					postMountWrapper$3(domElement);
					break;
				case "select":
				case "option": break;
				default:
					if (typeof rawProps.onClick === "function") trapClickOnNonInteractiveElement(domElement);
					break;
			}
			return updatePayload;
		}
		function diffHydratedText(textNode, text, isConcurrentMode) {
			var isDifferent = textNode.nodeValue !== text;
			return isDifferent;
		}
		function warnForDeletedHydratableElement(parentNode, child) {
			{
				if (didWarnInvalidHydration) return;
				didWarnInvalidHydration = true;
				error("Did not expect server HTML to contain a <%s> in <%s>.", child.nodeName.toLowerCase(), parentNode.nodeName.toLowerCase());
			}
		}
		function warnForDeletedHydratableText(parentNode, child) {
			{
				if (didWarnInvalidHydration) return;
				didWarnInvalidHydration = true;
				error("Did not expect server HTML to contain the text node \"%s\" in <%s>.", child.nodeValue, parentNode.nodeName.toLowerCase());
			}
		}
		function warnForInsertedHydratedElement(parentNode, tag, props) {
			{
				if (didWarnInvalidHydration) return;
				didWarnInvalidHydration = true;
				error("Expected server HTML to contain a matching <%s> in <%s>.", tag, parentNode.nodeName.toLowerCase());
			}
		}
		function warnForInsertedHydratedText(parentNode, text) {
			{
				if (text === "") return;
				if (didWarnInvalidHydration) return;
				didWarnInvalidHydration = true;
				error("Expected server HTML to contain a matching text node for \"%s\" in <%s>.", text, parentNode.nodeName.toLowerCase());
			}
		}
		function restoreControlledState$3(domElement, tag, props) {
			switch (tag) {
				case "input":
					restoreControlledState(domElement, props);
					return;
				case "textarea":
					restoreControlledState$2(domElement, props);
					return;
				case "select":
					restoreControlledState$1(domElement, props);
					return;
			}
		}
		var validateDOMNesting = function() {};
		var updatedAncestorInfo = function() {};
		{
			var specialTags = [
				"address",
				"applet",
				"area",
				"article",
				"aside",
				"base",
				"basefont",
				"bgsound",
				"blockquote",
				"body",
				"br",
				"button",
				"caption",
				"center",
				"col",
				"colgroup",
				"dd",
				"details",
				"dir",
				"div",
				"dl",
				"dt",
				"embed",
				"fieldset",
				"figcaption",
				"figure",
				"footer",
				"form",
				"frame",
				"frameset",
				"h1",
				"h2",
				"h3",
				"h4",
				"h5",
				"h6",
				"head",
				"header",
				"hgroup",
				"hr",
				"html",
				"iframe",
				"img",
				"input",
				"isindex",
				"li",
				"link",
				"listing",
				"main",
				"marquee",
				"menu",
				"menuitem",
				"meta",
				"nav",
				"noembed",
				"noframes",
				"noscript",
				"object",
				"ol",
				"p",
				"param",
				"plaintext",
				"pre",
				"script",
				"section",
				"select",
				"source",
				"style",
				"summary",
				"table",
				"tbody",
				"td",
				"template",
				"textarea",
				"tfoot",
				"th",
				"thead",
				"title",
				"tr",
				"track",
				"ul",
				"wbr",
				"xmp"
			];
			var inScopeTags = [
				"applet",
				"caption",
				"html",
				"table",
				"td",
				"th",
				"marquee",
				"object",
				"template",
				"foreignObject",
				"desc",
				"title"
			];
			var buttonScopeTags = inScopeTags.concat(["button"]);
			var impliedEndTags = [
				"dd",
				"dt",
				"li",
				"option",
				"optgroup",
				"p",
				"rp",
				"rt"
			];
			var emptyAncestorInfo = {
				current: null,
				formTag: null,
				aTagInScope: null,
				buttonTagInScope: null,
				nobrTagInScope: null,
				pTagInButtonScope: null,
				listItemTagAutoclosing: null,
				dlItemTagAutoclosing: null
			};
			updatedAncestorInfo = function(oldInfo, tag) {
				var ancestorInfo = assign({}, oldInfo || emptyAncestorInfo);
				var info = { tag };
				if (inScopeTags.indexOf(tag) !== -1) {
					ancestorInfo.aTagInScope = null;
					ancestorInfo.buttonTagInScope = null;
					ancestorInfo.nobrTagInScope = null;
				}
				if (buttonScopeTags.indexOf(tag) !== -1) ancestorInfo.pTagInButtonScope = null;
				if (specialTags.indexOf(tag) !== -1 && tag !== "address" && tag !== "div" && tag !== "p") {
					ancestorInfo.listItemTagAutoclosing = null;
					ancestorInfo.dlItemTagAutoclosing = null;
				}
				ancestorInfo.current = info;
				if (tag === "form") ancestorInfo.formTag = info;
				if (tag === "a") ancestorInfo.aTagInScope = info;
				if (tag === "button") ancestorInfo.buttonTagInScope = info;
				if (tag === "nobr") ancestorInfo.nobrTagInScope = info;
				if (tag === "p") ancestorInfo.pTagInButtonScope = info;
				if (tag === "li") ancestorInfo.listItemTagAutoclosing = info;
				if (tag === "dd" || tag === "dt") ancestorInfo.dlItemTagAutoclosing = info;
				return ancestorInfo;
			};
			/**
			* Returns whether
			*/
			var isTagValidWithParent = function(tag, parentTag) {
				switch (parentTag) {
					case "select": return tag === "option" || tag === "optgroup" || tag === "#text";
					case "optgroup": return tag === "option" || tag === "#text";
					case "option": return tag === "#text";
					case "tr": return tag === "th" || tag === "td" || tag === "style" || tag === "script" || tag === "template";
					case "tbody":
					case "thead":
					case "tfoot": return tag === "tr" || tag === "style" || tag === "script" || tag === "template";
					case "colgroup": return tag === "col" || tag === "template";
					case "table": return tag === "caption" || tag === "colgroup" || tag === "tbody" || tag === "tfoot" || tag === "thead" || tag === "style" || tag === "script" || tag === "template";
					case "head": return tag === "base" || tag === "basefont" || tag === "bgsound" || tag === "link" || tag === "meta" || tag === "title" || tag === "noscript" || tag === "noframes" || tag === "style" || tag === "script" || tag === "template";
					case "html": return tag === "head" || tag === "body" || tag === "frameset";
					case "frameset": return tag === "frame";
					case "#document": return tag === "html";
				}
				switch (tag) {
					case "h1":
					case "h2":
					case "h3":
					case "h4":
					case "h5":
					case "h6": return parentTag !== "h1" && parentTag !== "h2" && parentTag !== "h3" && parentTag !== "h4" && parentTag !== "h5" && parentTag !== "h6";
					case "rp":
					case "rt": return impliedEndTags.indexOf(parentTag) === -1;
					case "body":
					case "caption":
					case "col":
					case "colgroup":
					case "frameset":
					case "frame":
					case "head":
					case "html":
					case "tbody":
					case "td":
					case "tfoot":
					case "th":
					case "thead":
					case "tr": return parentTag == null;
				}
				return true;
			};
			/**
			* Returns whether
			*/
			var findInvalidAncestorForTag = function(tag, ancestorInfo) {
				switch (tag) {
					case "address":
					case "article":
					case "aside":
					case "blockquote":
					case "center":
					case "details":
					case "dialog":
					case "dir":
					case "div":
					case "dl":
					case "fieldset":
					case "figcaption":
					case "figure":
					case "footer":
					case "header":
					case "hgroup":
					case "main":
					case "menu":
					case "nav":
					case "ol":
					case "p":
					case "section":
					case "summary":
					case "ul":
					case "pre":
					case "listing":
					case "table":
					case "hr":
					case "xmp":
					case "h1":
					case "h2":
					case "h3":
					case "h4":
					case "h5":
					case "h6": return ancestorInfo.pTagInButtonScope;
					case "form": return ancestorInfo.formTag || ancestorInfo.pTagInButtonScope;
					case "li": return ancestorInfo.listItemTagAutoclosing;
					case "dd":
					case "dt": return ancestorInfo.dlItemTagAutoclosing;
					case "button": return ancestorInfo.buttonTagInScope;
					case "a": return ancestorInfo.aTagInScope;
					case "nobr": return ancestorInfo.nobrTagInScope;
				}
				return null;
			};
			var didWarn$1 = {};
			validateDOMNesting = function(childTag, childText, ancestorInfo) {
				ancestorInfo = ancestorInfo || emptyAncestorInfo;
				var parentInfo = ancestorInfo.current;
				var parentTag = parentInfo && parentInfo.tag;
				if (childText != null) {
					if (childTag != null) error("validateDOMNesting: when childText is passed, childTag should be null");
					childTag = "#text";
				}
				var invalidParent = isTagValidWithParent(childTag, parentTag) ? null : parentInfo;
				var invalidAncestor = invalidParent ? null : findInvalidAncestorForTag(childTag, ancestorInfo);
				var invalidParentOrAncestor = invalidParent || invalidAncestor;
				if (!invalidParentOrAncestor) return;
				var ancestorTag = invalidParentOrAncestor.tag;
				var warnKey = !!invalidParent + "|" + childTag + "|" + ancestorTag;
				if (didWarn$1[warnKey]) return;
				didWarn$1[warnKey] = true;
				var tagDisplayName = childTag;
				var whitespaceInfo = "";
				if (childTag === "#text") if (/\S/.test(childText)) tagDisplayName = "Text nodes";
else {
					tagDisplayName = "Whitespace text nodes";
					whitespaceInfo = " Make sure you don't have any extra whitespace between tags on each line of your source code.";
				}
else tagDisplayName = "<" + childTag + ">";
				if (invalidParent) {
					var info = "";
					if (ancestorTag === "table" && childTag === "tr") info += " Add a <tbody>, <thead> or <tfoot> to your code to match the DOM tree generated by the browser.";
					error("validateDOMNesting(...): %s cannot appear as a child of <%s>.%s%s", tagDisplayName, ancestorTag, whitespaceInfo, info);
				} else error("validateDOMNesting(...): %s cannot appear as a descendant of <%s>.", tagDisplayName, ancestorTag);
			};
		}
		var SUPPRESS_HYDRATION_WARNING$1 = "suppressHydrationWarning";
		var SUSPENSE_START_DATA = "$";
		var SUSPENSE_END_DATA = "/$";
		var SUSPENSE_PENDING_START_DATA = "$?";
		var SUSPENSE_FALLBACK_START_DATA = "$!";
		var STYLE$1 = "style";
		var eventsEnabled = null;
		var selectionInformation = null;
		function getRootHostContext(rootContainerInstance) {
			var type;
			var namespace;
			var nodeType = rootContainerInstance.nodeType;
			switch (nodeType) {
				case DOCUMENT_NODE:
				case DOCUMENT_FRAGMENT_NODE: {
					type = nodeType === DOCUMENT_NODE ? "#document" : "#fragment";
					var root$1 = rootContainerInstance.documentElement;
					namespace = root$1 ? root$1.namespaceURI : getChildNamespace(null, "");
					break;
				}
				default: {
					var container = nodeType === COMMENT_NODE ? rootContainerInstance.parentNode : rootContainerInstance;
					var ownNamespace = container.namespaceURI || null;
					type = container.tagName;
					namespace = getChildNamespace(ownNamespace, type);
					break;
				}
			}
			{
				var validatedTag = type.toLowerCase();
				var ancestorInfo = updatedAncestorInfo(null, validatedTag);
				return {
					namespace,
					ancestorInfo
				};
			}
		}
		function getChildHostContext(parentHostContext, type, rootContainerInstance) {
			{
				var parentHostContextDev = parentHostContext;
				var namespace = getChildNamespace(parentHostContextDev.namespace, type);
				var ancestorInfo = updatedAncestorInfo(parentHostContextDev.ancestorInfo, type);
				return {
					namespace,
					ancestorInfo
				};
			}
		}
		function getPublicInstance(instance) {
			return instance;
		}
		function prepareForCommit(containerInfo) {
			eventsEnabled = isEnabled();
			selectionInformation = getSelectionInformation();
			var activeInstance = null;
			setEnabled(false);
			return activeInstance;
		}
		function resetAfterCommit(containerInfo) {
			restoreSelection(selectionInformation);
			setEnabled(eventsEnabled);
			eventsEnabled = null;
			selectionInformation = null;
		}
		function createInstance(type, props, rootContainerInstance, hostContext, internalInstanceHandle) {
			var parentNamespace;
			{
				var hostContextDev = hostContext;
				validateDOMNesting(type, null, hostContextDev.ancestorInfo);
				if (typeof props.children === "string" || typeof props.children === "number") {
					var string = "" + props.children;
					var ownAncestorInfo = updatedAncestorInfo(hostContextDev.ancestorInfo, type);
					validateDOMNesting(null, string, ownAncestorInfo);
				}
				parentNamespace = hostContextDev.namespace;
			}
			var domElement = createElement(type, props, rootContainerInstance, parentNamespace);
			precacheFiberNode(internalInstanceHandle, domElement);
			updateFiberProps(domElement, props);
			return domElement;
		}
		function appendInitialChild(parentInstance, child) {
			parentInstance.appendChild(child);
		}
		function finalizeInitialChildren(domElement, type, props, rootContainerInstance, hostContext) {
			setInitialProperties(domElement, type, props, rootContainerInstance);
			switch (type) {
				case "button":
				case "input":
				case "select":
				case "textarea": return !!props.autoFocus;
				case "img": return true;
				default: return false;
			}
		}
		function prepareUpdate(domElement, type, oldProps, newProps, rootContainerInstance, hostContext) {
			{
				var hostContextDev = hostContext;
				if (typeof newProps.children !== typeof oldProps.children && (typeof newProps.children === "string" || typeof newProps.children === "number")) {
					var string = "" + newProps.children;
					var ownAncestorInfo = updatedAncestorInfo(hostContextDev.ancestorInfo, type);
					validateDOMNesting(null, string, ownAncestorInfo);
				}
			}
			return diffProperties(domElement, type, oldProps, newProps);
		}
		function shouldSetTextContent(type, props) {
			return type === "textarea" || type === "noscript" || typeof props.children === "string" || typeof props.children === "number" || typeof props.dangerouslySetInnerHTML === "object" && props.dangerouslySetInnerHTML !== null && props.dangerouslySetInnerHTML.__html != null;
		}
		function createTextInstance(text, rootContainerInstance, hostContext, internalInstanceHandle) {
			{
				var hostContextDev = hostContext;
				validateDOMNesting(null, text, hostContextDev.ancestorInfo);
			}
			var textNode = createTextNode(text, rootContainerInstance);
			precacheFiberNode(internalInstanceHandle, textNode);
			return textNode;
		}
		function getCurrentEventPriority() {
			var currentEvent = window.event;
			if (currentEvent === undefined) return DefaultEventPriority;
			return getEventPriority(currentEvent.type);
		}
		var scheduleTimeout = typeof setTimeout === "function" ? setTimeout : undefined;
		var cancelTimeout = typeof clearTimeout === "function" ? clearTimeout : undefined;
		var noTimeout = -1;
		var localPromise = typeof Promise === "function" ? Promise : undefined;
		var scheduleMicrotask = typeof queueMicrotask === "function" ? queueMicrotask : typeof localPromise !== "undefined" ? function(callback) {
			return localPromise.resolve(null).then(callback).catch(handleErrorInNextTick);
		} : scheduleTimeout;
		function handleErrorInNextTick(error$1) {
			setTimeout(function() {
				throw error$1;
			});
		}
		function commitMount(domElement, type, newProps, internalInstanceHandle) {
			switch (type) {
				case "button":
				case "input":
				case "select":
				case "textarea":
					if (newProps.autoFocus) domElement.focus();
					return;
				case "img": {
					if (newProps.src) domElement.src = newProps.src;
					return;
				}
			}
		}
		function commitUpdate(domElement, updatePayload, type, oldProps, newProps, internalInstanceHandle) {
			updateProperties(domElement, updatePayload, type, oldProps, newProps);
			updateFiberProps(domElement, newProps);
		}
		function resetTextContent(domElement) {
			setTextContent(domElement, "");
		}
		function commitTextUpdate(textInstance, oldText, newText) {
			textInstance.nodeValue = newText;
		}
		function appendChild(parentInstance, child) {
			parentInstance.appendChild(child);
		}
		function appendChildToContainer(container, child) {
			var parentNode;
			if (container.nodeType === COMMENT_NODE) {
				parentNode = container.parentNode;
				parentNode.insertBefore(child, container);
			} else {
				parentNode = container;
				parentNode.appendChild(child);
			}
			var reactRootContainer = container._reactRootContainer;
			if ((reactRootContainer === null || reactRootContainer === undefined) && parentNode.onclick === null) trapClickOnNonInteractiveElement(parentNode);
		}
		function insertBefore(parentInstance, child, beforeChild) {
			parentInstance.insertBefore(child, beforeChild);
		}
		function insertInContainerBefore(container, child, beforeChild) {
			if (container.nodeType === COMMENT_NODE) container.parentNode.insertBefore(child, beforeChild);
else container.insertBefore(child, beforeChild);
		}
		function removeChild(parentInstance, child) {
			parentInstance.removeChild(child);
		}
		function removeChildFromContainer(container, child) {
			if (container.nodeType === COMMENT_NODE) container.parentNode.removeChild(child);
else container.removeChild(child);
		}
		function clearSuspenseBoundary(parentInstance, suspenseInstance) {
			var node = suspenseInstance;
			var depth = 0;
			do {
				var nextNode = node.nextSibling;
				parentInstance.removeChild(node);
				if (nextNode && nextNode.nodeType === COMMENT_NODE) {
					var data = nextNode.data;
					if (data === SUSPENSE_END_DATA) if (depth === 0) {
						parentInstance.removeChild(nextNode);
						retryIfBlockedOn(suspenseInstance);
						return;
					} else depth--;
else if (data === SUSPENSE_START_DATA || data === SUSPENSE_PENDING_START_DATA || data === SUSPENSE_FALLBACK_START_DATA) depth++;
				}
				node = nextNode;
			} while (node);
			retryIfBlockedOn(suspenseInstance);
		}
		function clearSuspenseBoundaryFromContainer(container, suspenseInstance) {
			if (container.nodeType === COMMENT_NODE) clearSuspenseBoundary(container.parentNode, suspenseInstance);
else if (container.nodeType === ELEMENT_NODE) clearSuspenseBoundary(container, suspenseInstance);
			retryIfBlockedOn(container);
		}
		function hideInstance(instance) {
			instance = instance;
			var style$1 = instance.style;
			if (typeof style$1.setProperty === "function") style$1.setProperty("display", "none", "important");
else style$1.display = "none";
		}
		function hideTextInstance(textInstance) {
			textInstance.nodeValue = "";
		}
		function unhideInstance(instance, props) {
			instance = instance;
			var styleProp = props[STYLE$1];
			var display = styleProp !== undefined && styleProp !== null && styleProp.hasOwnProperty("display") ? styleProp.display : null;
			instance.style.display = dangerousStyleValue("display", display);
		}
		function unhideTextInstance(textInstance, text) {
			textInstance.nodeValue = text;
		}
		function clearContainer(container) {
			if (container.nodeType === ELEMENT_NODE) container.textContent = "";
else if (container.nodeType === DOCUMENT_NODE) {
				if (container.documentElement) container.removeChild(container.documentElement);
			}
		}
		function canHydrateInstance(instance, type, props) {
			if (instance.nodeType !== ELEMENT_NODE || type.toLowerCase() !== instance.nodeName.toLowerCase()) return null;
			return instance;
		}
		function canHydrateTextInstance(instance, text) {
			if (text === "" || instance.nodeType !== TEXT_NODE) return null;
			return instance;
		}
		function canHydrateSuspenseInstance(instance) {
			if (instance.nodeType !== COMMENT_NODE) return null;
			return instance;
		}
		function isSuspenseInstancePending(instance) {
			return instance.data === SUSPENSE_PENDING_START_DATA;
		}
		function isSuspenseInstanceFallback(instance) {
			return instance.data === SUSPENSE_FALLBACK_START_DATA;
		}
		function getSuspenseInstanceFallbackErrorDetails(instance) {
			var dataset = instance.nextSibling && instance.nextSibling.dataset;
			var digest, message, stack;
			if (dataset) {
				digest = dataset.dgst;
				{
					message = dataset.msg;
					stack = dataset.stck;
				}
			}
			return {
				message,
				digest,
				stack
			};
		}
		function registerSuspenseInstanceRetry(instance, callback) {
			instance._reactRetry = callback;
		}
		function getNextHydratable(node) {
			for (; node != null; node = node.nextSibling) {
				var nodeType = node.nodeType;
				if (nodeType === ELEMENT_NODE || nodeType === TEXT_NODE) break;
				if (nodeType === COMMENT_NODE) {
					var nodeData = node.data;
					if (nodeData === SUSPENSE_START_DATA || nodeData === SUSPENSE_FALLBACK_START_DATA || nodeData === SUSPENSE_PENDING_START_DATA) break;
					if (nodeData === SUSPENSE_END_DATA) return null;
				}
			}
			return node;
		}
		function getNextHydratableSibling(instance) {
			return getNextHydratable(instance.nextSibling);
		}
		function getFirstHydratableChild(parentInstance) {
			return getNextHydratable(parentInstance.firstChild);
		}
		function getFirstHydratableChildWithinContainer(parentContainer) {
			return getNextHydratable(parentContainer.firstChild);
		}
		function getFirstHydratableChildWithinSuspenseInstance(parentInstance) {
			return getNextHydratable(parentInstance.nextSibling);
		}
		function hydrateInstance(instance, type, props, rootContainerInstance, hostContext, internalInstanceHandle, shouldWarnDev) {
			precacheFiberNode(internalInstanceHandle, instance);
			updateFiberProps(instance, props);
			var parentNamespace;
			{
				var hostContextDev = hostContext;
				parentNamespace = hostContextDev.namespace;
			}
			var isConcurrentMode = (internalInstanceHandle.mode & ConcurrentMode) !== NoMode;
			return diffHydratedProperties(instance, type, props, parentNamespace, rootContainerInstance, isConcurrentMode, shouldWarnDev);
		}
		function hydrateTextInstance(textInstance, text, internalInstanceHandle, shouldWarnDev) {
			precacheFiberNode(internalInstanceHandle, textInstance);
			var isConcurrentMode = (internalInstanceHandle.mode & ConcurrentMode) !== NoMode;
			return diffHydratedText(textInstance, text);
		}
		function hydrateSuspenseInstance(suspenseInstance, internalInstanceHandle) {
			precacheFiberNode(internalInstanceHandle, suspenseInstance);
		}
		function getNextHydratableInstanceAfterSuspenseInstance(suspenseInstance) {
			var node = suspenseInstance.nextSibling;
			var depth = 0;
			while (node) {
				if (node.nodeType === COMMENT_NODE) {
					var data = node.data;
					if (data === SUSPENSE_END_DATA) if (depth === 0) return getNextHydratableSibling(node);
else depth--;
else if (data === SUSPENSE_START_DATA || data === SUSPENSE_FALLBACK_START_DATA || data === SUSPENSE_PENDING_START_DATA) depth++;
				}
				node = node.nextSibling;
			}
			return null;
		}
		function getParentSuspenseInstance(targetInstance) {
			var node = targetInstance.previousSibling;
			var depth = 0;
			while (node) {
				if (node.nodeType === COMMENT_NODE) {
					var data = node.data;
					if (data === SUSPENSE_START_DATA || data === SUSPENSE_FALLBACK_START_DATA || data === SUSPENSE_PENDING_START_DATA) if (depth === 0) return node;
else depth--;
else if (data === SUSPENSE_END_DATA) depth++;
				}
				node = node.previousSibling;
			}
			return null;
		}
		function commitHydratedContainer(container) {
			retryIfBlockedOn(container);
		}
		function commitHydratedSuspenseInstance(suspenseInstance) {
			retryIfBlockedOn(suspenseInstance);
		}
		function shouldDeleteUnhydratedTailInstances(parentType) {
			return parentType !== "head" && parentType !== "body";
		}
		function didNotMatchHydratedContainerTextInstance(parentContainer, textInstance, text, isConcurrentMode) {
			var shouldWarnDev = true;
			checkForUnmatchedText(textInstance.nodeValue, text, isConcurrentMode, shouldWarnDev);
		}
		function didNotMatchHydratedTextInstance(parentType, parentProps, parentInstance, textInstance, text, isConcurrentMode) {
			if (parentProps[SUPPRESS_HYDRATION_WARNING$1] !== true) {
				var shouldWarnDev = true;
				checkForUnmatchedText(textInstance.nodeValue, text, isConcurrentMode, shouldWarnDev);
			}
		}
		function didNotHydrateInstanceWithinContainer(parentContainer, instance) {
			if (instance.nodeType === ELEMENT_NODE) warnForDeletedHydratableElement(parentContainer, instance);
else if (instance.nodeType === COMMENT_NODE);
else warnForDeletedHydratableText(parentContainer, instance);
		}
		function didNotHydrateInstanceWithinSuspenseInstance(parentInstance, instance) {
			{
				var parentNode = parentInstance.parentNode;
				if (parentNode !== null) if (instance.nodeType === ELEMENT_NODE) warnForDeletedHydratableElement(parentNode, instance);
else if (instance.nodeType === COMMENT_NODE);
else warnForDeletedHydratableText(parentNode, instance);
			}
		}
		function didNotHydrateInstance(parentType, parentProps, parentInstance, instance, isConcurrentMode) {
			if (isConcurrentMode || parentProps[SUPPRESS_HYDRATION_WARNING$1] !== true) if (instance.nodeType === ELEMENT_NODE) warnForDeletedHydratableElement(parentInstance, instance);
else if (instance.nodeType === COMMENT_NODE);
else warnForDeletedHydratableText(parentInstance, instance);
		}
		function didNotFindHydratableInstanceWithinContainer(parentContainer, type, props) {
			warnForInsertedHydratedElement(parentContainer, type);
		}
		function didNotFindHydratableTextInstanceWithinContainer(parentContainer, text) {
			warnForInsertedHydratedText(parentContainer, text);
		}
		function didNotFindHydratableInstanceWithinSuspenseInstance(parentInstance, type, props) {
			{
				var parentNode = parentInstance.parentNode;
				if (parentNode !== null) warnForInsertedHydratedElement(parentNode, type);
			}
		}
		function didNotFindHydratableTextInstanceWithinSuspenseInstance(parentInstance, text) {
			{
				var parentNode = parentInstance.parentNode;
				if (parentNode !== null) warnForInsertedHydratedText(parentNode, text);
			}
		}
		function didNotFindHydratableInstance(parentType, parentProps, parentInstance, type, props, isConcurrentMode) {
			if (isConcurrentMode || parentProps[SUPPRESS_HYDRATION_WARNING$1] !== true) warnForInsertedHydratedElement(parentInstance, type);
		}
		function didNotFindHydratableTextInstance(parentType, parentProps, parentInstance, text, isConcurrentMode) {
			if (isConcurrentMode || parentProps[SUPPRESS_HYDRATION_WARNING$1] !== true) warnForInsertedHydratedText(parentInstance, text);
		}
		function errorHydratingContainer(parentContainer) {
			error("An error occurred during hydration. The server HTML was replaced with client content in <%s>.", parentContainer.nodeName.toLowerCase());
		}
		function preparePortalMount(portalInstance) {
			listenToAllSupportedEvents(portalInstance);
		}
		var randomKey = Math.random().toString(36).slice(2);
		var internalInstanceKey = "__reactFiber$" + randomKey;
		var internalPropsKey = "__reactProps$" + randomKey;
		var internalContainerInstanceKey = "__reactContainer$" + randomKey;
		var internalEventHandlersKey = "__reactEvents$" + randomKey;
		var internalEventHandlerListenersKey = "__reactListeners$" + randomKey;
		var internalEventHandlesSetKey = "__reactHandles$" + randomKey;
		function detachDeletedInstance(node) {
			delete node[internalInstanceKey];
			delete node[internalPropsKey];
			delete node[internalEventHandlersKey];
			delete node[internalEventHandlerListenersKey];
			delete node[internalEventHandlesSetKey];
		}
		function precacheFiberNode(hostInst, node) {
			node[internalInstanceKey] = hostInst;
		}
		function markContainerAsRoot(hostRoot, node) {
			node[internalContainerInstanceKey] = hostRoot;
		}
		function unmarkContainerAsRoot(node) {
			node[internalContainerInstanceKey] = null;
		}
		function isContainerMarkedAsRoot(node) {
			return !!node[internalContainerInstanceKey];
		}
		function getClosestInstanceFromNode(targetNode) {
			var targetInst = targetNode[internalInstanceKey];
			if (targetInst) return targetInst;
			var parentNode = targetNode.parentNode;
			while (parentNode) {
				targetInst = parentNode[internalContainerInstanceKey] || parentNode[internalInstanceKey];
				if (targetInst) {
					var alternate = targetInst.alternate;
					if (targetInst.child !== null || alternate !== null && alternate.child !== null) {
						var suspenseInstance = getParentSuspenseInstance(targetNode);
						while (suspenseInstance !== null) {
							var targetSuspenseInst = suspenseInstance[internalInstanceKey];
							if (targetSuspenseInst) return targetSuspenseInst;
							suspenseInstance = getParentSuspenseInstance(suspenseInstance);
						}
					}
					return targetInst;
				}
				targetNode = parentNode;
				parentNode = targetNode.parentNode;
			}
			return null;
		}
		/**
		* Given a DOM node, return the ReactDOMComponent or ReactDOMTextComponent
		* instance, or null if the node was not rendered by this React.
		*/
		function getInstanceFromNode(node) {
			var inst = node[internalInstanceKey] || node[internalContainerInstanceKey];
			if (inst) if (inst.tag === HostComponent || inst.tag === HostText || inst.tag === SuspenseComponent || inst.tag === HostRoot) return inst;
else return null;
			return null;
		}
		/**
		* Given a ReactDOMComponent or ReactDOMTextComponent, return the corresponding
		* DOM node.
		*/
		function getNodeFromInstance(inst) {
			if (inst.tag === HostComponent || inst.tag === HostText) return inst.stateNode;
			throw new Error("getNodeFromInstance: Invalid argument.");
		}
		function getFiberCurrentPropsFromNode(node) {
			return node[internalPropsKey] || null;
		}
		function updateFiberProps(node, props) {
			node[internalPropsKey] = props;
		}
		function getEventListenerSet(node) {
			var elementListenerSet = node[internalEventHandlersKey];
			if (elementListenerSet === undefined) elementListenerSet = node[internalEventHandlersKey] = new Set();
			return elementListenerSet;
		}
		var loggedTypeFailures = {};
		var ReactDebugCurrentFrame$1 = ReactSharedInternals.ReactDebugCurrentFrame;
		function setCurrentlyValidatingElement(element) {
			if (element) {
				var owner = element._owner;
				var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
				ReactDebugCurrentFrame$1.setExtraStackFrame(stack);
			} else ReactDebugCurrentFrame$1.setExtraStackFrame(null);
		}
		function checkPropTypes(typeSpecs, values, location, componentName, element) {
			{
				var has$1 = Function.call.bind(hasOwnProperty);
				for (var typeSpecName in typeSpecs) if (has$1(typeSpecs, typeSpecName)) {
					var error$1 = void 0;
					try {
						if (typeof typeSpecs[typeSpecName] !== "function") {
							var err = Error((componentName || "React class") + ": " + location + " type `" + typeSpecName + "` is invalid; " + "it must be a function, usually from the `prop-types` package, but received `" + typeof typeSpecs[typeSpecName] + "`." + "This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
							err.name = "Invariant Violation";
							throw err;
						}
						error$1 = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
					} catch (ex) {
						error$1 = ex;
					}
					if (error$1 && !(error$1 instanceof Error)) {
						setCurrentlyValidatingElement(element);
						error("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", componentName || "React class", location, typeSpecName, typeof error$1);
						setCurrentlyValidatingElement(null);
					}
					if (error$1 instanceof Error && !(error$1.message in loggedTypeFailures)) {
						loggedTypeFailures[error$1.message] = true;
						setCurrentlyValidatingElement(element);
						error("Failed %s type: %s", location, error$1.message);
						setCurrentlyValidatingElement(null);
					}
				}
			}
		}
		var valueStack = [];
		var fiberStack;
		fiberStack = [];
		var index = -1;
		function createCursor(defaultValue) {
			return { current: defaultValue };
		}
		function pop(cursor, fiber) {
			if (index < 0) {
				error("Unexpected pop.");
				return;
			}
			if (fiber !== fiberStack[index]) error("Unexpected Fiber popped.");
			cursor.current = valueStack[index];
			valueStack[index] = null;
			fiberStack[index] = null;
			index--;
		}
		function push(cursor, value, fiber) {
			index++;
			valueStack[index] = cursor.current;
			fiberStack[index] = fiber;
			cursor.current = value;
		}
		var warnedAboutMissingGetChildContext;
		warnedAboutMissingGetChildContext = {};
		var emptyContextObject = {};
		Object.freeze(emptyContextObject);
		var contextStackCursor = createCursor(emptyContextObject);
		var didPerformWorkStackCursor = createCursor(false);
		var previousContext = emptyContextObject;
		function getUnmaskedContext(workInProgress$1, Component, didPushOwnContextIfProvider) {
			{
				if (didPushOwnContextIfProvider && isContextProvider(Component)) return previousContext;
				return contextStackCursor.current;
			}
		}
		function cacheContext(workInProgress$1, unmaskedContext, maskedContext) {
			{
				var instance = workInProgress$1.stateNode;
				instance.__reactInternalMemoizedUnmaskedChildContext = unmaskedContext;
				instance.__reactInternalMemoizedMaskedChildContext = maskedContext;
			}
		}
		function getMaskedContext(workInProgress$1, unmaskedContext) {
			{
				var type = workInProgress$1.type;
				var contextTypes = type.contextTypes;
				if (!contextTypes) return emptyContextObject;
				var instance = workInProgress$1.stateNode;
				if (instance && instance.__reactInternalMemoizedUnmaskedChildContext === unmaskedContext) return instance.__reactInternalMemoizedMaskedChildContext;
				var context = {};
				for (var key in contextTypes) context[key] = unmaskedContext[key];
				{
					var name = getComponentNameFromFiber(workInProgress$1) || "Unknown";
					checkPropTypes(contextTypes, context, "context", name);
				}
				if (instance) cacheContext(workInProgress$1, unmaskedContext, context);
				return context;
			}
		}
		function hasContextChanged() {
			return didPerformWorkStackCursor.current;
		}
		function isContextProvider(type) {
			{
				var childContextTypes = type.childContextTypes;
				return childContextTypes !== null && childContextTypes !== undefined;
			}
		}
		function popContext(fiber) {
			{
				pop(didPerformWorkStackCursor, fiber);
				pop(contextStackCursor, fiber);
			}
		}
		function popTopLevelContextObject(fiber) {
			{
				pop(didPerformWorkStackCursor, fiber);
				pop(contextStackCursor, fiber);
			}
		}
		function pushTopLevelContextObject(fiber, context, didChange) {
			{
				if (contextStackCursor.current !== emptyContextObject) throw new Error("Unexpected context found on stack. This error is likely caused by a bug in React. Please file an issue.");
				push(contextStackCursor, context, fiber);
				push(didPerformWorkStackCursor, didChange, fiber);
			}
		}
		function processChildContext(fiber, type, parentContext) {
			{
				var instance = fiber.stateNode;
				var childContextTypes = type.childContextTypes;
				if (typeof instance.getChildContext !== "function") {
					{
						var componentName = getComponentNameFromFiber(fiber) || "Unknown";
						if (!warnedAboutMissingGetChildContext[componentName]) {
							warnedAboutMissingGetChildContext[componentName] = true;
							error("%s.childContextTypes is specified but there is no getChildContext() method on the instance. You can either define getChildContext() on %s or remove childContextTypes from it.", componentName, componentName);
						}
					}
					return parentContext;
				}
				var childContext = instance.getChildContext();
				for (var contextKey in childContext) if (!(contextKey in childContextTypes)) throw new Error((getComponentNameFromFiber(fiber) || "Unknown") + ".getChildContext(): key \"" + contextKey + "\" is not defined in childContextTypes.");
				{
					var name = getComponentNameFromFiber(fiber) || "Unknown";
					checkPropTypes(childContextTypes, childContext, "child context", name);
				}
				return assign({}, parentContext, childContext);
			}
		}
		function pushContextProvider(workInProgress$1) {
			{
				var instance = workInProgress$1.stateNode;
				var memoizedMergedChildContext = instance && instance.__reactInternalMemoizedMergedChildContext || emptyContextObject;
				previousContext = contextStackCursor.current;
				push(contextStackCursor, memoizedMergedChildContext, workInProgress$1);
				push(didPerformWorkStackCursor, didPerformWorkStackCursor.current, workInProgress$1);
				return true;
			}
		}
		function invalidateContextProvider(workInProgress$1, type, didChange) {
			{
				var instance = workInProgress$1.stateNode;
				if (!instance) throw new Error("Expected to have an instance by this point. This error is likely caused by a bug in React. Please file an issue.");
				if (didChange) {
					var mergedContext = processChildContext(workInProgress$1, type, previousContext);
					instance.__reactInternalMemoizedMergedChildContext = mergedContext;
					pop(didPerformWorkStackCursor, workInProgress$1);
					pop(contextStackCursor, workInProgress$1);
					push(contextStackCursor, mergedContext, workInProgress$1);
					push(didPerformWorkStackCursor, didChange, workInProgress$1);
				} else {
					pop(didPerformWorkStackCursor, workInProgress$1);
					push(didPerformWorkStackCursor, didChange, workInProgress$1);
				}
			}
		}
		function findCurrentUnmaskedContext(fiber) {
			{
				if (!isFiberMounted(fiber) || fiber.tag !== ClassComponent) throw new Error("Expected subtree parent to be a mounted class component. This error is likely caused by a bug in React. Please file an issue.");
				var node = fiber;
				do {
					switch (node.tag) {
						case HostRoot: return node.stateNode.context;
						case ClassComponent: {
							var Component = node.type;
							if (isContextProvider(Component)) return node.stateNode.__reactInternalMemoizedMergedChildContext;
							break;
						}
					}
					node = node.return;
				} while (node !== null);
				throw new Error("Found unexpected detached subtree parent. This error is likely caused by a bug in React. Please file an issue.");
			}
		}
		var LegacyRoot = 0;
		var ConcurrentRoot = 1;
		var syncQueue = null;
		var includesLegacySyncCallbacks = false;
		var isFlushingSyncQueue = false;
		function scheduleSyncCallback(callback) {
			if (syncQueue === null) syncQueue = [callback];
else syncQueue.push(callback);
		}
		function scheduleLegacySyncCallback(callback) {
			includesLegacySyncCallbacks = true;
			scheduleSyncCallback(callback);
		}
		function flushSyncCallbacksOnlyInLegacyMode() {
			if (includesLegacySyncCallbacks) flushSyncCallbacks();
		}
		function flushSyncCallbacks() {
			if (!isFlushingSyncQueue && syncQueue !== null) {
				isFlushingSyncQueue = true;
				var i$1 = 0;
				var previousUpdatePriority = getCurrentUpdatePriority();
				try {
					var isSync = true;
					var queue = syncQueue;
					setCurrentUpdatePriority(DiscreteEventPriority);
					for (; i$1 < queue.length; i$1++) {
						var callback = queue[i$1];
						do 
							callback = callback(isSync);
						while (callback !== null);
					}
					syncQueue = null;
					includesLegacySyncCallbacks = false;
				} catch (error$1) {
					if (syncQueue !== null) syncQueue = syncQueue.slice(i$1 + 1);
					scheduleCallback(ImmediatePriority, flushSyncCallbacks);
					throw error$1;
				} finally {
					setCurrentUpdatePriority(previousUpdatePriority);
					isFlushingSyncQueue = false;
				}
			}
			return null;
		}
		var forkStack = [];
		var forkStackIndex = 0;
		var treeForkProvider = null;
		var treeForkCount = 0;
		var idStack = [];
		var idStackIndex = 0;
		var treeContextProvider = null;
		var treeContextId = 1;
		var treeContextOverflow = "";
		function isForkedChild(workInProgress$1) {
			warnIfNotHydrating();
			return (workInProgress$1.flags & Forked) !== NoFlags;
		}
		function getForksAtLevel(workInProgress$1) {
			warnIfNotHydrating();
			return treeForkCount;
		}
		function getTreeId() {
			var overflow = treeContextOverflow;
			var idWithLeadingBit = treeContextId;
			var id = idWithLeadingBit & ~getLeadingBit(idWithLeadingBit);
			return id.toString(32) + overflow;
		}
		function pushTreeFork(workInProgress$1, totalChildren) {
			warnIfNotHydrating();
			forkStack[forkStackIndex++] = treeForkCount;
			forkStack[forkStackIndex++] = treeForkProvider;
			treeForkProvider = workInProgress$1;
			treeForkCount = totalChildren;
		}
		function pushTreeId(workInProgress$1, totalChildren, index$1) {
			warnIfNotHydrating();
			idStack[idStackIndex++] = treeContextId;
			idStack[idStackIndex++] = treeContextOverflow;
			idStack[idStackIndex++] = treeContextProvider;
			treeContextProvider = workInProgress$1;
			var baseIdWithLeadingBit = treeContextId;
			var baseOverflow = treeContextOverflow;
			var baseLength = getBitLength(baseIdWithLeadingBit) - 1;
			var baseId = baseIdWithLeadingBit & ~(1 << baseLength);
			var slot = index$1 + 1;
			var length = getBitLength(totalChildren) + baseLength;
			if (length > 30) {
				var numberOfOverflowBits = baseLength - baseLength % 5;
				var newOverflowBits = (1 << numberOfOverflowBits) - 1;
				var newOverflow = (baseId & newOverflowBits).toString(32);
				var restOfBaseId = baseId >> numberOfOverflowBits;
				var restOfBaseLength = baseLength - numberOfOverflowBits;
				var restOfLength = getBitLength(totalChildren) + restOfBaseLength;
				var restOfNewBits = slot << restOfBaseLength;
				var id = restOfNewBits | restOfBaseId;
				var overflow = newOverflow + baseOverflow;
				treeContextId = 1 << restOfLength | id;
				treeContextOverflow = overflow;
			} else {
				var newBits = slot << baseLength;
				var _id = newBits | baseId;
				var _overflow = baseOverflow;
				treeContextId = 1 << length | _id;
				treeContextOverflow = _overflow;
			}
		}
		function pushMaterializedTreeId(workInProgress$1) {
			warnIfNotHydrating();
			var returnFiber = workInProgress$1.return;
			if (returnFiber !== null) {
				var numberOfForks = 1;
				var slotIndex = 0;
				pushTreeFork(workInProgress$1, numberOfForks);
				pushTreeId(workInProgress$1, numberOfForks, slotIndex);
			}
		}
		function getBitLength(number) {
			return 32 - clz32(number);
		}
		function getLeadingBit(id) {
			return 1 << getBitLength(id) - 1;
		}
		function popTreeContext(workInProgress$1) {
			while (workInProgress$1 === treeForkProvider) {
				treeForkProvider = forkStack[--forkStackIndex];
				forkStack[forkStackIndex] = null;
				treeForkCount = forkStack[--forkStackIndex];
				forkStack[forkStackIndex] = null;
			}
			while (workInProgress$1 === treeContextProvider) {
				treeContextProvider = idStack[--idStackIndex];
				idStack[idStackIndex] = null;
				treeContextOverflow = idStack[--idStackIndex];
				idStack[idStackIndex] = null;
				treeContextId = idStack[--idStackIndex];
				idStack[idStackIndex] = null;
			}
		}
		function getSuspendedTreeContext() {
			warnIfNotHydrating();
			if (treeContextProvider !== null) return {
				id: treeContextId,
				overflow: treeContextOverflow
			};
else return null;
		}
		function restoreSuspendedTreeContext(workInProgress$1, suspendedContext) {
			warnIfNotHydrating();
			idStack[idStackIndex++] = treeContextId;
			idStack[idStackIndex++] = treeContextOverflow;
			idStack[idStackIndex++] = treeContextProvider;
			treeContextId = suspendedContext.id;
			treeContextOverflow = suspendedContext.overflow;
			treeContextProvider = workInProgress$1;
		}
		function warnIfNotHydrating() {
			if (!getIsHydrating()) error("Expected to be hydrating. This is a bug in React. Please file an issue.");
		}
		var hydrationParentFiber = null;
		var nextHydratableInstance = null;
		var isHydrating = false;
		var didSuspendOrErrorDEV = false;
		var hydrationErrors = null;
		function warnIfHydrating() {
			if (isHydrating) error("We should not be hydrating here. This is a bug in React. Please file a bug.");
		}
		function markDidThrowWhileHydratingDEV() {
			didSuspendOrErrorDEV = true;
		}
		function didSuspendOrErrorWhileHydratingDEV() {
			return didSuspendOrErrorDEV;
		}
		function enterHydrationState(fiber) {
			var parentInstance = fiber.stateNode.containerInfo;
			nextHydratableInstance = getFirstHydratableChildWithinContainer(parentInstance);
			hydrationParentFiber = fiber;
			isHydrating = true;
			hydrationErrors = null;
			didSuspendOrErrorDEV = false;
			return true;
		}
		function reenterHydrationStateFromDehydratedSuspenseInstance(fiber, suspenseInstance, treeContext) {
			nextHydratableInstance = getFirstHydratableChildWithinSuspenseInstance(suspenseInstance);
			hydrationParentFiber = fiber;
			isHydrating = true;
			hydrationErrors = null;
			didSuspendOrErrorDEV = false;
			if (treeContext !== null) restoreSuspendedTreeContext(fiber, treeContext);
			return true;
		}
		function warnUnhydratedInstance(returnFiber, instance) {
			switch (returnFiber.tag) {
				case HostRoot: {
					didNotHydrateInstanceWithinContainer(returnFiber.stateNode.containerInfo, instance);
					break;
				}
				case HostComponent: {
					var isConcurrentMode = (returnFiber.mode & ConcurrentMode) !== NoMode;
					didNotHydrateInstance(returnFiber.type, returnFiber.memoizedProps, returnFiber.stateNode, instance, isConcurrentMode);
					break;
				}
				case SuspenseComponent: {
					var suspenseState = returnFiber.memoizedState;
					if (suspenseState.dehydrated !== null) didNotHydrateInstanceWithinSuspenseInstance(suspenseState.dehydrated, instance);
					break;
				}
			}
		}
		function deleteHydratableInstance(returnFiber, instance) {
			warnUnhydratedInstance(returnFiber, instance);
			var childToDelete = createFiberFromHostInstanceForDeletion();
			childToDelete.stateNode = instance;
			childToDelete.return = returnFiber;
			var deletions = returnFiber.deletions;
			if (deletions === null) {
				returnFiber.deletions = [childToDelete];
				returnFiber.flags |= ChildDeletion;
			} else deletions.push(childToDelete);
		}
		function warnNonhydratedInstance(returnFiber, fiber) {
			{
				if (didSuspendOrErrorDEV) return;
				switch (returnFiber.tag) {
					case HostRoot: {
						var parentContainer = returnFiber.stateNode.containerInfo;
						switch (fiber.tag) {
							case HostComponent:
								var type = fiber.type;
								var props = fiber.pendingProps;
								didNotFindHydratableInstanceWithinContainer(parentContainer, type);
								break;
							case HostText:
								var text = fiber.pendingProps;
								didNotFindHydratableTextInstanceWithinContainer(parentContainer, text);
								break;
						}
						break;
					}
					case HostComponent: {
						var parentType = returnFiber.type;
						var parentProps = returnFiber.memoizedProps;
						var parentInstance = returnFiber.stateNode;
						switch (fiber.tag) {
							case HostComponent: {
								var _type = fiber.type;
								var _props = fiber.pendingProps;
								var isConcurrentMode = (returnFiber.mode & ConcurrentMode) !== NoMode;
								didNotFindHydratableInstance(parentType, parentProps, parentInstance, _type, _props, isConcurrentMode);
								break;
							}
							case HostText: {
								var _text = fiber.pendingProps;
								var _isConcurrentMode = (returnFiber.mode & ConcurrentMode) !== NoMode;
								didNotFindHydratableTextInstance(parentType, parentProps, parentInstance, _text, _isConcurrentMode);
								break;
							}
						}
						break;
					}
					case SuspenseComponent: {
						var suspenseState = returnFiber.memoizedState;
						var _parentInstance = suspenseState.dehydrated;
						if (_parentInstance !== null) switch (fiber.tag) {
							case HostComponent:
								var _type2 = fiber.type;
								var _props2 = fiber.pendingProps;
								didNotFindHydratableInstanceWithinSuspenseInstance(_parentInstance, _type2);
								break;
							case HostText:
								var _text2 = fiber.pendingProps;
								didNotFindHydratableTextInstanceWithinSuspenseInstance(_parentInstance, _text2);
								break;
						}
						break;
					}
					default: return;
				}
			}
		}
		function insertNonHydratedInstance(returnFiber, fiber) {
			fiber.flags = fiber.flags & ~Hydrating | Placement;
			warnNonhydratedInstance(returnFiber, fiber);
		}
		function tryHydrate(fiber, nextInstance) {
			switch (fiber.tag) {
				case HostComponent: {
					var type = fiber.type;
					var props = fiber.pendingProps;
					var instance = canHydrateInstance(nextInstance, type);
					if (instance !== null) {
						fiber.stateNode = instance;
						hydrationParentFiber = fiber;
						nextHydratableInstance = getFirstHydratableChild(instance);
						return true;
					}
					return false;
				}
				case HostText: {
					var text = fiber.pendingProps;
					var textInstance = canHydrateTextInstance(nextInstance, text);
					if (textInstance !== null) {
						fiber.stateNode = textInstance;
						hydrationParentFiber = fiber;
						nextHydratableInstance = null;
						return true;
					}
					return false;
				}
				case SuspenseComponent: {
					var suspenseInstance = canHydrateSuspenseInstance(nextInstance);
					if (suspenseInstance !== null) {
						var suspenseState = {
							dehydrated: suspenseInstance,
							treeContext: getSuspendedTreeContext(),
							retryLane: OffscreenLane
						};
						fiber.memoizedState = suspenseState;
						var dehydratedFragment = createFiberFromDehydratedFragment(suspenseInstance);
						dehydratedFragment.return = fiber;
						fiber.child = dehydratedFragment;
						hydrationParentFiber = fiber;
						nextHydratableInstance = null;
						return true;
					}
					return false;
				}
				default: return false;
			}
		}
		function shouldClientRenderOnMismatch(fiber) {
			return (fiber.mode & ConcurrentMode) !== NoMode && (fiber.flags & DidCapture) === NoFlags;
		}
		function throwOnHydrationMismatch(fiber) {
			throw new Error("Hydration failed because the initial UI does not match what was rendered on the server.");
		}
		function tryToClaimNextHydratableInstance(fiber) {
			if (!isHydrating) return;
			var nextInstance = nextHydratableInstance;
			if (!nextInstance) {
				if (shouldClientRenderOnMismatch(fiber)) {
					warnNonhydratedInstance(hydrationParentFiber, fiber);
					throwOnHydrationMismatch();
				}
				insertNonHydratedInstance(hydrationParentFiber, fiber);
				isHydrating = false;
				hydrationParentFiber = fiber;
				return;
			}
			var firstAttemptedInstance = nextInstance;
			if (!tryHydrate(fiber, nextInstance)) {
				if (shouldClientRenderOnMismatch(fiber)) {
					warnNonhydratedInstance(hydrationParentFiber, fiber);
					throwOnHydrationMismatch();
				}
				nextInstance = getNextHydratableSibling(firstAttemptedInstance);
				var prevHydrationParentFiber = hydrationParentFiber;
				if (!nextInstance || !tryHydrate(fiber, nextInstance)) {
					insertNonHydratedInstance(hydrationParentFiber, fiber);
					isHydrating = false;
					hydrationParentFiber = fiber;
					return;
				}
				deleteHydratableInstance(prevHydrationParentFiber, firstAttemptedInstance);
			}
		}
		function prepareToHydrateHostInstance(fiber, rootContainerInstance, hostContext) {
			var instance = fiber.stateNode;
			var shouldWarnIfMismatchDev = !didSuspendOrErrorDEV;
			var updatePayload = hydrateInstance(instance, fiber.type, fiber.memoizedProps, rootContainerInstance, hostContext, fiber, shouldWarnIfMismatchDev);
			fiber.updateQueue = updatePayload;
			if (updatePayload !== null) return true;
			return false;
		}
		function prepareToHydrateHostTextInstance(fiber) {
			var textInstance = fiber.stateNode;
			var textContent = fiber.memoizedProps;
			var shouldUpdate = hydrateTextInstance(textInstance, textContent, fiber);
			if (shouldUpdate) {
				var returnFiber = hydrationParentFiber;
				if (returnFiber !== null) switch (returnFiber.tag) {
					case HostRoot: {
						var parentContainer = returnFiber.stateNode.containerInfo;
						var isConcurrentMode = (returnFiber.mode & ConcurrentMode) !== NoMode;
						didNotMatchHydratedContainerTextInstance(parentContainer, textInstance, textContent, isConcurrentMode);
						break;
					}
					case HostComponent: {
						var parentType = returnFiber.type;
						var parentProps = returnFiber.memoizedProps;
						var parentInstance = returnFiber.stateNode;
						var _isConcurrentMode2 = (returnFiber.mode & ConcurrentMode) !== NoMode;
						didNotMatchHydratedTextInstance(parentType, parentProps, parentInstance, textInstance, textContent, _isConcurrentMode2);
						break;
					}
				}
			}
			return shouldUpdate;
		}
		function prepareToHydrateHostSuspenseInstance(fiber) {
			var suspenseState = fiber.memoizedState;
			var suspenseInstance = suspenseState !== null ? suspenseState.dehydrated : null;
			if (!suspenseInstance) throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
			hydrateSuspenseInstance(suspenseInstance, fiber);
		}
		function skipPastDehydratedSuspenseInstance(fiber) {
			var suspenseState = fiber.memoizedState;
			var suspenseInstance = suspenseState !== null ? suspenseState.dehydrated : null;
			if (!suspenseInstance) throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
			return getNextHydratableInstanceAfterSuspenseInstance(suspenseInstance);
		}
		function popToNextHostParent(fiber) {
			var parent = fiber.return;
			while (parent !== null && parent.tag !== HostComponent && parent.tag !== HostRoot && parent.tag !== SuspenseComponent) parent = parent.return;
			hydrationParentFiber = parent;
		}
		function popHydrationState(fiber) {
			if (fiber !== hydrationParentFiber) return false;
			if (!isHydrating) {
				popToNextHostParent(fiber);
				isHydrating = true;
				return false;
			}
			if (fiber.tag !== HostRoot && (fiber.tag !== HostComponent || shouldDeleteUnhydratedTailInstances(fiber.type) && !shouldSetTextContent(fiber.type, fiber.memoizedProps))) {
				var nextInstance = nextHydratableInstance;
				if (nextInstance) if (shouldClientRenderOnMismatch(fiber)) {
					warnIfUnhydratedTailNodes(fiber);
					throwOnHydrationMismatch();
				} else while (nextInstance) {
					deleteHydratableInstance(fiber, nextInstance);
					nextInstance = getNextHydratableSibling(nextInstance);
				}
			}
			popToNextHostParent(fiber);
			if (fiber.tag === SuspenseComponent) nextHydratableInstance = skipPastDehydratedSuspenseInstance(fiber);
else nextHydratableInstance = hydrationParentFiber ? getNextHydratableSibling(fiber.stateNode) : null;
			return true;
		}
		function hasUnhydratedTailNodes() {
			return isHydrating && nextHydratableInstance !== null;
		}
		function warnIfUnhydratedTailNodes(fiber) {
			var nextInstance = nextHydratableInstance;
			while (nextInstance) {
				warnUnhydratedInstance(fiber, nextInstance);
				nextInstance = getNextHydratableSibling(nextInstance);
			}
		}
		function resetHydrationState() {
			hydrationParentFiber = null;
			nextHydratableInstance = null;
			isHydrating = false;
			didSuspendOrErrorDEV = false;
		}
		function upgradeHydrationErrorsToRecoverable() {
			if (hydrationErrors !== null) {
				queueRecoverableErrors(hydrationErrors);
				hydrationErrors = null;
			}
		}
		function getIsHydrating() {
			return isHydrating;
		}
		function queueHydrationError(error$1) {
			if (hydrationErrors === null) hydrationErrors = [error$1];
else hydrationErrors.push(error$1);
		}
		var ReactCurrentBatchConfig$1 = ReactSharedInternals.ReactCurrentBatchConfig;
		var NoTransition = null;
		function requestCurrentTransition() {
			return ReactCurrentBatchConfig$1.transition;
		}
		var ReactStrictModeWarnings = {
			recordUnsafeLifecycleWarnings: function(fiber, instance) {},
			flushPendingUnsafeLifecycleWarnings: function() {},
			recordLegacyContextWarning: function(fiber, instance) {},
			flushLegacyContextWarning: function() {},
			discardPendingWarnings: function() {}
		};
		{
			var findStrictRoot = function(fiber) {
				var maybeStrictRoot = null;
				var node = fiber;
				while (node !== null) {
					if (node.mode & StrictLegacyMode) maybeStrictRoot = node;
					node = node.return;
				}
				return maybeStrictRoot;
			};
			var setToSortedString = function(set$1) {
				var array = [];
				set$1.forEach(function(value) {
					array.push(value);
				});
				return array.sort().join(", ");
			};
			var pendingComponentWillMountWarnings = [];
			var pendingUNSAFE_ComponentWillMountWarnings = [];
			var pendingComponentWillReceivePropsWarnings = [];
			var pendingUNSAFE_ComponentWillReceivePropsWarnings = [];
			var pendingComponentWillUpdateWarnings = [];
			var pendingUNSAFE_ComponentWillUpdateWarnings = [];
			var didWarnAboutUnsafeLifecycles = new Set();
			ReactStrictModeWarnings.recordUnsafeLifecycleWarnings = function(fiber, instance) {
				if (didWarnAboutUnsafeLifecycles.has(fiber.type)) return;
				if (typeof instance.componentWillMount === "function" && instance.componentWillMount.__suppressDeprecationWarning !== true) pendingComponentWillMountWarnings.push(fiber);
				if (fiber.mode & StrictLegacyMode && typeof instance.UNSAFE_componentWillMount === "function") pendingUNSAFE_ComponentWillMountWarnings.push(fiber);
				if (typeof instance.componentWillReceiveProps === "function" && instance.componentWillReceiveProps.__suppressDeprecationWarning !== true) pendingComponentWillReceivePropsWarnings.push(fiber);
				if (fiber.mode & StrictLegacyMode && typeof instance.UNSAFE_componentWillReceiveProps === "function") pendingUNSAFE_ComponentWillReceivePropsWarnings.push(fiber);
				if (typeof instance.componentWillUpdate === "function" && instance.componentWillUpdate.__suppressDeprecationWarning !== true) pendingComponentWillUpdateWarnings.push(fiber);
				if (fiber.mode & StrictLegacyMode && typeof instance.UNSAFE_componentWillUpdate === "function") pendingUNSAFE_ComponentWillUpdateWarnings.push(fiber);
			};
			ReactStrictModeWarnings.flushPendingUnsafeLifecycleWarnings = function() {
				var componentWillMountUniqueNames = new Set();
				if (pendingComponentWillMountWarnings.length > 0) {
					pendingComponentWillMountWarnings.forEach(function(fiber) {
						componentWillMountUniqueNames.add(getComponentNameFromFiber(fiber) || "Component");
						didWarnAboutUnsafeLifecycles.add(fiber.type);
					});
					pendingComponentWillMountWarnings = [];
				}
				var UNSAFE_componentWillMountUniqueNames = new Set();
				if (pendingUNSAFE_ComponentWillMountWarnings.length > 0) {
					pendingUNSAFE_ComponentWillMountWarnings.forEach(function(fiber) {
						UNSAFE_componentWillMountUniqueNames.add(getComponentNameFromFiber(fiber) || "Component");
						didWarnAboutUnsafeLifecycles.add(fiber.type);
					});
					pendingUNSAFE_ComponentWillMountWarnings = [];
				}
				var componentWillReceivePropsUniqueNames = new Set();
				if (pendingComponentWillReceivePropsWarnings.length > 0) {
					pendingComponentWillReceivePropsWarnings.forEach(function(fiber) {
						componentWillReceivePropsUniqueNames.add(getComponentNameFromFiber(fiber) || "Component");
						didWarnAboutUnsafeLifecycles.add(fiber.type);
					});
					pendingComponentWillReceivePropsWarnings = [];
				}
				var UNSAFE_componentWillReceivePropsUniqueNames = new Set();
				if (pendingUNSAFE_ComponentWillReceivePropsWarnings.length > 0) {
					pendingUNSAFE_ComponentWillReceivePropsWarnings.forEach(function(fiber) {
						UNSAFE_componentWillReceivePropsUniqueNames.add(getComponentNameFromFiber(fiber) || "Component");
						didWarnAboutUnsafeLifecycles.add(fiber.type);
					});
					pendingUNSAFE_ComponentWillReceivePropsWarnings = [];
				}
				var componentWillUpdateUniqueNames = new Set();
				if (pendingComponentWillUpdateWarnings.length > 0) {
					pendingComponentWillUpdateWarnings.forEach(function(fiber) {
						componentWillUpdateUniqueNames.add(getComponentNameFromFiber(fiber) || "Component");
						didWarnAboutUnsafeLifecycles.add(fiber.type);
					});
					pendingComponentWillUpdateWarnings = [];
				}
				var UNSAFE_componentWillUpdateUniqueNames = new Set();
				if (pendingUNSAFE_ComponentWillUpdateWarnings.length > 0) {
					pendingUNSAFE_ComponentWillUpdateWarnings.forEach(function(fiber) {
						UNSAFE_componentWillUpdateUniqueNames.add(getComponentNameFromFiber(fiber) || "Component");
						didWarnAboutUnsafeLifecycles.add(fiber.type);
					});
					pendingUNSAFE_ComponentWillUpdateWarnings = [];
				}
				if (UNSAFE_componentWillMountUniqueNames.size > 0) {
					var sortedNames = setToSortedString(UNSAFE_componentWillMountUniqueNames);
					error("Using UNSAFE_componentWillMount in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.\n\n* Move code with side effects to componentDidMount, and set initial state in the constructor.\n\nPlease update the following components: %s", sortedNames);
				}
				if (UNSAFE_componentWillReceivePropsUniqueNames.size > 0) {
					var _sortedNames = setToSortedString(UNSAFE_componentWillReceivePropsUniqueNames);
					error("Using UNSAFE_componentWillReceiveProps in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.\n\n* Move data fetching code or side effects to componentDidUpdate.\n* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state\n\nPlease update the following components: %s", _sortedNames);
				}
				if (UNSAFE_componentWillUpdateUniqueNames.size > 0) {
					var _sortedNames2 = setToSortedString(UNSAFE_componentWillUpdateUniqueNames);
					error("Using UNSAFE_componentWillUpdate in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.\n\n* Move data fetching code or side effects to componentDidUpdate.\n\nPlease update the following components: %s", _sortedNames2);
				}
				if (componentWillMountUniqueNames.size > 0) {
					var _sortedNames3 = setToSortedString(componentWillMountUniqueNames);
					warn("componentWillMount has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.\n\n* Move code with side effects to componentDidMount, and set initial state in the constructor.\n* Rename componentWillMount to UNSAFE_componentWillMount to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run `npx react-codemod rename-unsafe-lifecycles` in your project source folder.\n\nPlease update the following components: %s", _sortedNames3);
				}
				if (componentWillReceivePropsUniqueNames.size > 0) {
					var _sortedNames4 = setToSortedString(componentWillReceivePropsUniqueNames);
					warn("componentWillReceiveProps has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.\n\n* Move data fetching code or side effects to componentDidUpdate.\n* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state\n* Rename componentWillReceiveProps to UNSAFE_componentWillReceiveProps to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run `npx react-codemod rename-unsafe-lifecycles` in your project source folder.\n\nPlease update the following components: %s", _sortedNames4);
				}
				if (componentWillUpdateUniqueNames.size > 0) {
					var _sortedNames5 = setToSortedString(componentWillUpdateUniqueNames);
					warn("componentWillUpdate has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.\n\n* Move data fetching code or side effects to componentDidUpdate.\n* Rename componentWillUpdate to UNSAFE_componentWillUpdate to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run `npx react-codemod rename-unsafe-lifecycles` in your project source folder.\n\nPlease update the following components: %s", _sortedNames5);
				}
			};
			var pendingLegacyContextWarning = new Map();
			var didWarnAboutLegacyContext = new Set();
			ReactStrictModeWarnings.recordLegacyContextWarning = function(fiber, instance) {
				var strictRoot = findStrictRoot(fiber);
				if (strictRoot === null) {
					error("Expected to find a StrictMode component in a strict mode tree. This error is likely caused by a bug in React. Please file an issue.");
					return;
				}
				if (didWarnAboutLegacyContext.has(fiber.type)) return;
				var warningsForRoot = pendingLegacyContextWarning.get(strictRoot);
				if (fiber.type.contextTypes != null || fiber.type.childContextTypes != null || instance !== null && typeof instance.getChildContext === "function") {
					if (warningsForRoot === undefined) {
						warningsForRoot = [];
						pendingLegacyContextWarning.set(strictRoot, warningsForRoot);
					}
					warningsForRoot.push(fiber);
				}
			};
			ReactStrictModeWarnings.flushLegacyContextWarning = function() {
				pendingLegacyContextWarning.forEach(function(fiberArray, strictRoot) {
					if (fiberArray.length === 0) return;
					var firstFiber = fiberArray[0];
					var uniqueNames = new Set();
					fiberArray.forEach(function(fiber) {
						uniqueNames.add(getComponentNameFromFiber(fiber) || "Component");
						didWarnAboutLegacyContext.add(fiber.type);
					});
					var sortedNames = setToSortedString(uniqueNames);
					try {
						setCurrentFiber(firstFiber);
						error("Legacy context API has been detected within a strict-mode tree.\n\nThe old API will be supported in all 16.x releases, but applications using it should migrate to the new version.\n\nPlease update the following components: %s\n\nLearn more about this warning here: https://reactjs.org/link/legacy-context", sortedNames);
					} finally {
						resetCurrentFiber();
					}
				});
			};
			ReactStrictModeWarnings.discardPendingWarnings = function() {
				pendingComponentWillMountWarnings = [];
				pendingUNSAFE_ComponentWillMountWarnings = [];
				pendingComponentWillReceivePropsWarnings = [];
				pendingUNSAFE_ComponentWillReceivePropsWarnings = [];
				pendingComponentWillUpdateWarnings = [];
				pendingUNSAFE_ComponentWillUpdateWarnings = [];
				pendingLegacyContextWarning = new Map();
			};
		}
		var didWarnAboutMaps;
		var didWarnAboutGenerators;
		var didWarnAboutStringRefs;
		var ownerHasKeyUseWarning;
		var ownerHasFunctionTypeWarning;
		var warnForMissingKey = function(child, returnFiber) {};
		{
			didWarnAboutMaps = false;
			didWarnAboutGenerators = false;
			didWarnAboutStringRefs = {};
			/**
			* Warn if there's no key explicitly set on dynamic arrays of children or
			* object keys are not valid. This allows us to keep track of children between
			* updates.
			*/
			ownerHasKeyUseWarning = {};
			ownerHasFunctionTypeWarning = {};
			warnForMissingKey = function(child, returnFiber) {
				if (child === null || typeof child !== "object") return;
				if (!child._store || child._store.validated || child.key != null) return;
				if (typeof child._store !== "object") throw new Error("React Component in warnForMissingKey should have a _store. This error is likely caused by a bug in React. Please file an issue.");
				child._store.validated = true;
				var componentName = getComponentNameFromFiber(returnFiber) || "Component";
				if (ownerHasKeyUseWarning[componentName]) return;
				ownerHasKeyUseWarning[componentName] = true;
				error("Each child in a list should have a unique \"key\" prop. See https://reactjs.org/link/warning-keys for more information.");
			};
		}
		function isReactClass(type) {
			return type.prototype && type.prototype.isReactComponent;
		}
		function coerceRef(returnFiber, current$1, element) {
			var mixedRef = element.ref;
			if (mixedRef !== null && typeof mixedRef !== "function" && typeof mixedRef !== "object") {
				if ((returnFiber.mode & StrictLegacyMode || warnAboutStringRefs) && !(element._owner && element._self && element._owner.stateNode !== element._self) && !(element._owner && element._owner.tag !== ClassComponent) && !(typeof element.type === "function" && !isReactClass(element.type)) && element._owner) {
					var componentName = getComponentNameFromFiber(returnFiber) || "Component";
					if (!didWarnAboutStringRefs[componentName]) {
						error("Component \"%s\" contains the string ref \"%s\". Support for string refs will be removed in a future major release. We recommend using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref", componentName, mixedRef);
						didWarnAboutStringRefs[componentName] = true;
					}
				}
				if (element._owner) {
					var owner = element._owner;
					var inst;
					if (owner) {
						var ownerFiber = owner;
						if (ownerFiber.tag !== ClassComponent) throw new Error("Function components cannot have string refs. We recommend using useRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref");
						inst = ownerFiber.stateNode;
					}
					if (!inst) throw new Error("Missing owner for string ref " + mixedRef + ". This error is likely caused by a " + "bug in React. Please file an issue.");
					var resolvedInst = inst;
					checkPropStringCoercion(mixedRef, "ref");
					var stringRef = "" + mixedRef;
					if (current$1 !== null && current$1.ref !== null && typeof current$1.ref === "function" && current$1.ref._stringRef === stringRef) return current$1.ref;
					var ref = function(value) {
						var refs = resolvedInst.refs;
						if (value === null) delete refs[stringRef];
else refs[stringRef] = value;
					};
					ref._stringRef = stringRef;
					return ref;
				} else {
					if (typeof mixedRef !== "string") throw new Error("Expected ref to be a function, a string, an object returned by React.createRef(), or null.");
					if (!element._owner) throw new Error("Element ref was specified as a string (" + mixedRef + ") but no owner was set. This could happen for one of" + " the following reasons:\n" + "1. You may be adding a ref to a function component\n" + "2. You may be adding a ref to a component that was not created inside a component's render method\n" + "3. You have multiple copies of React loaded\n" + "See https://reactjs.org/link/refs-must-have-owner for more information.");
				}
			}
			return mixedRef;
		}
		function throwOnInvalidObjectType(returnFiber, newChild) {
			var childString = Object.prototype.toString.call(newChild);
			throw new Error("Objects are not valid as a React child (found: " + (childString === "[object Object]" ? "object with keys {" + Object.keys(newChild).join(", ") + "}" : childString) + "). " + "If you meant to render a collection of children, use an array " + "instead.");
		}
		function warnOnFunctionType(returnFiber) {
			{
				var componentName = getComponentNameFromFiber(returnFiber) || "Component";
				if (ownerHasFunctionTypeWarning[componentName]) return;
				ownerHasFunctionTypeWarning[componentName] = true;
				error("Functions are not valid as a React child. This may happen if you return a Component instead of <Component /> from render. Or maybe you meant to call this function rather than return it.");
			}
		}
		function resolveLazy(lazyType) {
			var payload = lazyType._payload;
			var init = lazyType._init;
			return init(payload);
		}
		function ChildReconciler(shouldTrackSideEffects) {
			function deleteChild(returnFiber, childToDelete) {
				if (!shouldTrackSideEffects) return;
				var deletions = returnFiber.deletions;
				if (deletions === null) {
					returnFiber.deletions = [childToDelete];
					returnFiber.flags |= ChildDeletion;
				} else deletions.push(childToDelete);
			}
			function deleteRemainingChildren(returnFiber, currentFirstChild) {
				if (!shouldTrackSideEffects) return null;
				var childToDelete = currentFirstChild;
				while (childToDelete !== null) {
					deleteChild(returnFiber, childToDelete);
					childToDelete = childToDelete.sibling;
				}
				return null;
			}
			function mapRemainingChildren(returnFiber, currentFirstChild) {
				var existingChildren = new Map();
				var existingChild = currentFirstChild;
				while (existingChild !== null) {
					if (existingChild.key !== null) existingChildren.set(existingChild.key, existingChild);
else existingChildren.set(existingChild.index, existingChild);
					existingChild = existingChild.sibling;
				}
				return existingChildren;
			}
			function useFiber(fiber, pendingProps) {
				var clone = createWorkInProgress(fiber, pendingProps);
				clone.index = 0;
				clone.sibling = null;
				return clone;
			}
			function placeChild(newFiber, lastPlacedIndex, newIndex) {
				newFiber.index = newIndex;
				if (!shouldTrackSideEffects) {
					newFiber.flags |= Forked;
					return lastPlacedIndex;
				}
				var current$1 = newFiber.alternate;
				if (current$1 !== null) {
					var oldIndex = current$1.index;
					if (oldIndex < lastPlacedIndex) {
						newFiber.flags |= Placement;
						return lastPlacedIndex;
					} else return oldIndex;
				} else {
					newFiber.flags |= Placement;
					return lastPlacedIndex;
				}
			}
			function placeSingleChild(newFiber) {
				if (shouldTrackSideEffects && newFiber.alternate === null) newFiber.flags |= Placement;
				return newFiber;
			}
			function updateTextNode(returnFiber, current$1, textContent, lanes) {
				if (current$1 === null || current$1.tag !== HostText) {
					var created = createFiberFromText(textContent, returnFiber.mode, lanes);
					created.return = returnFiber;
					return created;
				} else {
					var existing = useFiber(current$1, textContent);
					existing.return = returnFiber;
					return existing;
				}
			}
			function updateElement(returnFiber, current$1, element, lanes) {
				var elementType = element.type;
				if (elementType === REACT_FRAGMENT_TYPE) return updateFragment$1(returnFiber, current$1, element.props.children, lanes, element.key);
				if (current$1 !== null) {
					if (current$1.elementType === elementType || isCompatibleFamilyForHotReloading(current$1, element) || typeof elementType === "object" && elementType !== null && elementType.$$typeof === REACT_LAZY_TYPE && resolveLazy(elementType) === current$1.type) {
						var existing = useFiber(current$1, element.props);
						existing.ref = coerceRef(returnFiber, current$1, element);
						existing.return = returnFiber;
						{
							existing._debugSource = element._source;
							existing._debugOwner = element._owner;
						}
						return existing;
					}
				}
				var created = createFiberFromElement(element, returnFiber.mode, lanes);
				created.ref = coerceRef(returnFiber, current$1, element);
				created.return = returnFiber;
				return created;
			}
			function updatePortal(returnFiber, current$1, portal, lanes) {
				if (current$1 === null || current$1.tag !== HostPortal || current$1.stateNode.containerInfo !== portal.containerInfo || current$1.stateNode.implementation !== portal.implementation) {
					var created = createFiberFromPortal(portal, returnFiber.mode, lanes);
					created.return = returnFiber;
					return created;
				} else {
					var existing = useFiber(current$1, portal.children || []);
					existing.return = returnFiber;
					return existing;
				}
			}
			function updateFragment$1(returnFiber, current$1, fragment, lanes, key) {
				if (current$1 === null || current$1.tag !== Fragment$2) {
					var created = createFiberFromFragment(fragment, returnFiber.mode, lanes, key);
					created.return = returnFiber;
					return created;
				} else {
					var existing = useFiber(current$1, fragment);
					existing.return = returnFiber;
					return existing;
				}
			}
			function createChild(returnFiber, newChild, lanes) {
				if (typeof newChild === "string" && newChild !== "" || typeof newChild === "number") {
					var created = createFiberFromText("" + newChild, returnFiber.mode, lanes);
					created.return = returnFiber;
					return created;
				}
				if (typeof newChild === "object" && newChild !== null) {
					switch (newChild.$$typeof) {
						case REACT_ELEMENT_TYPE: {
							var _created = createFiberFromElement(newChild, returnFiber.mode, lanes);
							_created.ref = coerceRef(returnFiber, null, newChild);
							_created.return = returnFiber;
							return _created;
						}
						case REACT_PORTAL_TYPE: {
							var _created2 = createFiberFromPortal(newChild, returnFiber.mode, lanes);
							_created2.return = returnFiber;
							return _created2;
						}
						case REACT_LAZY_TYPE: {
							var payload = newChild._payload;
							var init = newChild._init;
							return createChild(returnFiber, init(payload), lanes);
						}
					}
					if (isArray(newChild) || getIteratorFn(newChild)) {
						var _created3 = createFiberFromFragment(newChild, returnFiber.mode, lanes, null);
						_created3.return = returnFiber;
						return _created3;
					}
					throwOnInvalidObjectType(returnFiber, newChild);
				}
				if (typeof newChild === "function") warnOnFunctionType(returnFiber);
				return null;
			}
			function updateSlot(returnFiber, oldFiber, newChild, lanes) {
				var key = oldFiber !== null ? oldFiber.key : null;
				if (typeof newChild === "string" && newChild !== "" || typeof newChild === "number") {
					if (key !== null) return null;
					return updateTextNode(returnFiber, oldFiber, "" + newChild, lanes);
				}
				if (typeof newChild === "object" && newChild !== null) {
					switch (newChild.$$typeof) {
						case REACT_ELEMENT_TYPE: if (newChild.key === key) return updateElement(returnFiber, oldFiber, newChild, lanes);
else return null;
						case REACT_PORTAL_TYPE: if (newChild.key === key) return updatePortal(returnFiber, oldFiber, newChild, lanes);
else return null;
						case REACT_LAZY_TYPE: {
							var payload = newChild._payload;
							var init = newChild._init;
							return updateSlot(returnFiber, oldFiber, init(payload), lanes);
						}
					}
					if (isArray(newChild) || getIteratorFn(newChild)) {
						if (key !== null) return null;
						return updateFragment$1(returnFiber, oldFiber, newChild, lanes, null);
					}
					throwOnInvalidObjectType(returnFiber, newChild);
				}
				if (typeof newChild === "function") warnOnFunctionType(returnFiber);
				return null;
			}
			function updateFromMap(existingChildren, returnFiber, newIdx, newChild, lanes) {
				if (typeof newChild === "string" && newChild !== "" || typeof newChild === "number") {
					var matchedFiber = existingChildren.get(newIdx) || null;
					return updateTextNode(returnFiber, matchedFiber, "" + newChild, lanes);
				}
				if (typeof newChild === "object" && newChild !== null) {
					switch (newChild.$$typeof) {
						case REACT_ELEMENT_TYPE: {
							var _matchedFiber = existingChildren.get(newChild.key === null ? newIdx : newChild.key) || null;
							return updateElement(returnFiber, _matchedFiber, newChild, lanes);
						}
						case REACT_PORTAL_TYPE: {
							var _matchedFiber2 = existingChildren.get(newChild.key === null ? newIdx : newChild.key) || null;
							return updatePortal(returnFiber, _matchedFiber2, newChild, lanes);
						}
						case REACT_LAZY_TYPE:
							var payload = newChild._payload;
							var init = newChild._init;
							return updateFromMap(existingChildren, returnFiber, newIdx, init(payload), lanes);
					}
					if (isArray(newChild) || getIteratorFn(newChild)) {
						var _matchedFiber3 = existingChildren.get(newIdx) || null;
						return updateFragment$1(returnFiber, _matchedFiber3, newChild, lanes, null);
					}
					throwOnInvalidObjectType(returnFiber, newChild);
				}
				if (typeof newChild === "function") warnOnFunctionType(returnFiber);
				return null;
			}
			/**
			* Warns if there is a duplicate or missing key
			*/
			function warnOnInvalidKey(child, knownKeys, returnFiber) {
				{
					if (typeof child !== "object" || child === null) return knownKeys;
					switch (child.$$typeof) {
						case REACT_ELEMENT_TYPE:
						case REACT_PORTAL_TYPE:
							warnForMissingKey(child, returnFiber);
							var key = child.key;
							if (typeof key !== "string") break;
							if (knownKeys === null) {
								knownKeys = new Set();
								knownKeys.add(key);
								break;
							}
							if (!knownKeys.has(key)) {
								knownKeys.add(key);
								break;
							}
							error("Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version.", key);
							break;
						case REACT_LAZY_TYPE:
							var payload = child._payload;
							var init = child._init;
							warnOnInvalidKey(init(payload), knownKeys, returnFiber);
							break;
					}
				}
				return knownKeys;
			}
			function reconcileChildrenArray(returnFiber, currentFirstChild, newChildren, lanes) {
				{
					var knownKeys = null;
					for (var i$1 = 0; i$1 < newChildren.length; i$1++) {
						var child = newChildren[i$1];
						knownKeys = warnOnInvalidKey(child, knownKeys, returnFiber);
					}
				}
				var resultingFirstChild = null;
				var previousNewFiber = null;
				var oldFiber = currentFirstChild;
				var lastPlacedIndex = 0;
				var newIdx = 0;
				var nextOldFiber = null;
				for (; oldFiber !== null && newIdx < newChildren.length; newIdx++) {
					if (oldFiber.index > newIdx) {
						nextOldFiber = oldFiber;
						oldFiber = null;
					} else nextOldFiber = oldFiber.sibling;
					var newFiber = updateSlot(returnFiber, oldFiber, newChildren[newIdx], lanes);
					if (newFiber === null) {
						if (oldFiber === null) oldFiber = nextOldFiber;
						break;
					}
					if (shouldTrackSideEffects) {
						if (oldFiber && newFiber.alternate === null) deleteChild(returnFiber, oldFiber);
					}
					lastPlacedIndex = placeChild(newFiber, lastPlacedIndex, newIdx);
					if (previousNewFiber === null) resultingFirstChild = newFiber;
else previousNewFiber.sibling = newFiber;
					previousNewFiber = newFiber;
					oldFiber = nextOldFiber;
				}
				if (newIdx === newChildren.length) {
					deleteRemainingChildren(returnFiber, oldFiber);
					if (getIsHydrating()) {
						var numberOfForks = newIdx;
						pushTreeFork(returnFiber, numberOfForks);
					}
					return resultingFirstChild;
				}
				if (oldFiber === null) {
					for (; newIdx < newChildren.length; newIdx++) {
						var _newFiber = createChild(returnFiber, newChildren[newIdx], lanes);
						if (_newFiber === null) continue;
						lastPlacedIndex = placeChild(_newFiber, lastPlacedIndex, newIdx);
						if (previousNewFiber === null) resultingFirstChild = _newFiber;
else previousNewFiber.sibling = _newFiber;
						previousNewFiber = _newFiber;
					}
					if (getIsHydrating()) {
						var _numberOfForks = newIdx;
						pushTreeFork(returnFiber, _numberOfForks);
					}
					return resultingFirstChild;
				}
				var existingChildren = mapRemainingChildren(returnFiber, oldFiber);
				for (; newIdx < newChildren.length; newIdx++) {
					var _newFiber2 = updateFromMap(existingChildren, returnFiber, newIdx, newChildren[newIdx], lanes);
					if (_newFiber2 !== null) {
						if (shouldTrackSideEffects) {
							if (_newFiber2.alternate !== null) existingChildren.delete(_newFiber2.key === null ? newIdx : _newFiber2.key);
						}
						lastPlacedIndex = placeChild(_newFiber2, lastPlacedIndex, newIdx);
						if (previousNewFiber === null) resultingFirstChild = _newFiber2;
else previousNewFiber.sibling = _newFiber2;
						previousNewFiber = _newFiber2;
					}
				}
				if (shouldTrackSideEffects) existingChildren.forEach(function(child$1) {
					return deleteChild(returnFiber, child$1);
				});
				if (getIsHydrating()) {
					var _numberOfForks2 = newIdx;
					pushTreeFork(returnFiber, _numberOfForks2);
				}
				return resultingFirstChild;
			}
			function reconcileChildrenIterator(returnFiber, currentFirstChild, newChildrenIterable, lanes) {
				var iteratorFn = getIteratorFn(newChildrenIterable);
				if (typeof iteratorFn !== "function") throw new Error("An object is not an iterable. This error is likely caused by a bug in React. Please file an issue.");
				{
					if (typeof Symbol === "function" && newChildrenIterable[Symbol.toStringTag] === "Generator") {
						if (!didWarnAboutGenerators) error("Using Generators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. Keep in mind you might need to polyfill these features for older browsers.");
						didWarnAboutGenerators = true;
					}
					if (newChildrenIterable.entries === iteratorFn) {
						if (!didWarnAboutMaps) error("Using Maps as children is not supported. Use an array of keyed ReactElements instead.");
						didWarnAboutMaps = true;
					}
					var _newChildren = iteratorFn.call(newChildrenIterable);
					if (_newChildren) {
						var knownKeys = null;
						var _step = _newChildren.next();
						for (; !_step.done; _step = _newChildren.next()) {
							var child = _step.value;
							knownKeys = warnOnInvalidKey(child, knownKeys, returnFiber);
						}
					}
				}
				var newChildren = iteratorFn.call(newChildrenIterable);
				if (newChildren == null) throw new Error("An iterable object provided no iterator.");
				var resultingFirstChild = null;
				var previousNewFiber = null;
				var oldFiber = currentFirstChild;
				var lastPlacedIndex = 0;
				var newIdx = 0;
				var nextOldFiber = null;
				var step = newChildren.next();
				for (; oldFiber !== null && !step.done; newIdx++, step = newChildren.next()) {
					if (oldFiber.index > newIdx) {
						nextOldFiber = oldFiber;
						oldFiber = null;
					} else nextOldFiber = oldFiber.sibling;
					var newFiber = updateSlot(returnFiber, oldFiber, step.value, lanes);
					if (newFiber === null) {
						if (oldFiber === null) oldFiber = nextOldFiber;
						break;
					}
					if (shouldTrackSideEffects) {
						if (oldFiber && newFiber.alternate === null) deleteChild(returnFiber, oldFiber);
					}
					lastPlacedIndex = placeChild(newFiber, lastPlacedIndex, newIdx);
					if (previousNewFiber === null) resultingFirstChild = newFiber;
else previousNewFiber.sibling = newFiber;
					previousNewFiber = newFiber;
					oldFiber = nextOldFiber;
				}
				if (step.done) {
					deleteRemainingChildren(returnFiber, oldFiber);
					if (getIsHydrating()) {
						var numberOfForks = newIdx;
						pushTreeFork(returnFiber, numberOfForks);
					}
					return resultingFirstChild;
				}
				if (oldFiber === null) {
					for (; !step.done; newIdx++, step = newChildren.next()) {
						var _newFiber3 = createChild(returnFiber, step.value, lanes);
						if (_newFiber3 === null) continue;
						lastPlacedIndex = placeChild(_newFiber3, lastPlacedIndex, newIdx);
						if (previousNewFiber === null) resultingFirstChild = _newFiber3;
else previousNewFiber.sibling = _newFiber3;
						previousNewFiber = _newFiber3;
					}
					if (getIsHydrating()) {
						var _numberOfForks3 = newIdx;
						pushTreeFork(returnFiber, _numberOfForks3);
					}
					return resultingFirstChild;
				}
				var existingChildren = mapRemainingChildren(returnFiber, oldFiber);
				for (; !step.done; newIdx++, step = newChildren.next()) {
					var _newFiber4 = updateFromMap(existingChildren, returnFiber, newIdx, step.value, lanes);
					if (_newFiber4 !== null) {
						if (shouldTrackSideEffects) {
							if (_newFiber4.alternate !== null) existingChildren.delete(_newFiber4.key === null ? newIdx : _newFiber4.key);
						}
						lastPlacedIndex = placeChild(_newFiber4, lastPlacedIndex, newIdx);
						if (previousNewFiber === null) resultingFirstChild = _newFiber4;
else previousNewFiber.sibling = _newFiber4;
						previousNewFiber = _newFiber4;
					}
				}
				if (shouldTrackSideEffects) existingChildren.forEach(function(child$1) {
					return deleteChild(returnFiber, child$1);
				});
				if (getIsHydrating()) {
					var _numberOfForks4 = newIdx;
					pushTreeFork(returnFiber, _numberOfForks4);
				}
				return resultingFirstChild;
			}
			function reconcileSingleTextNode(returnFiber, currentFirstChild, textContent, lanes) {
				if (currentFirstChild !== null && currentFirstChild.tag === HostText) {
					deleteRemainingChildren(returnFiber, currentFirstChild.sibling);
					var existing = useFiber(currentFirstChild, textContent);
					existing.return = returnFiber;
					return existing;
				}
				deleteRemainingChildren(returnFiber, currentFirstChild);
				var created = createFiberFromText(textContent, returnFiber.mode, lanes);
				created.return = returnFiber;
				return created;
			}
			function reconcileSingleElement(returnFiber, currentFirstChild, element, lanes) {
				var key = element.key;
				var child = currentFirstChild;
				while (child !== null) {
					if (child.key === key) {
						var elementType = element.type;
						if (elementType === REACT_FRAGMENT_TYPE) {
							if (child.tag === Fragment$2) {
								deleteRemainingChildren(returnFiber, child.sibling);
								var existing = useFiber(child, element.props.children);
								existing.return = returnFiber;
								{
									existing._debugSource = element._source;
									existing._debugOwner = element._owner;
								}
								return existing;
							}
						} else if (child.elementType === elementType || isCompatibleFamilyForHotReloading(child, element) || typeof elementType === "object" && elementType !== null && elementType.$$typeof === REACT_LAZY_TYPE && resolveLazy(elementType) === child.type) {
							deleteRemainingChildren(returnFiber, child.sibling);
							var _existing = useFiber(child, element.props);
							_existing.ref = coerceRef(returnFiber, child, element);
							_existing.return = returnFiber;
							{
								_existing._debugSource = element._source;
								_existing._debugOwner = element._owner;
							}
							return _existing;
						}
						deleteRemainingChildren(returnFiber, child);
						break;
					} else deleteChild(returnFiber, child);
					child = child.sibling;
				}
				if (element.type === REACT_FRAGMENT_TYPE) {
					var created = createFiberFromFragment(element.props.children, returnFiber.mode, lanes, element.key);
					created.return = returnFiber;
					return created;
				} else {
					var _created4 = createFiberFromElement(element, returnFiber.mode, lanes);
					_created4.ref = coerceRef(returnFiber, currentFirstChild, element);
					_created4.return = returnFiber;
					return _created4;
				}
			}
			function reconcileSinglePortal(returnFiber, currentFirstChild, portal, lanes) {
				var key = portal.key;
				var child = currentFirstChild;
				while (child !== null) {
					if (child.key === key) if (child.tag === HostPortal && child.stateNode.containerInfo === portal.containerInfo && child.stateNode.implementation === portal.implementation) {
						deleteRemainingChildren(returnFiber, child.sibling);
						var existing = useFiber(child, portal.children || []);
						existing.return = returnFiber;
						return existing;
					} else {
						deleteRemainingChildren(returnFiber, child);
						break;
					}
else deleteChild(returnFiber, child);
					child = child.sibling;
				}
				var created = createFiberFromPortal(portal, returnFiber.mode, lanes);
				created.return = returnFiber;
				return created;
			}
			function reconcileChildFibers$1(returnFiber, currentFirstChild, newChild, lanes) {
				var isUnkeyedTopLevelFragment = typeof newChild === "object" && newChild !== null && newChild.type === REACT_FRAGMENT_TYPE && newChild.key === null;
				if (isUnkeyedTopLevelFragment) newChild = newChild.props.children;
				if (typeof newChild === "object" && newChild !== null) {
					switch (newChild.$$typeof) {
						case REACT_ELEMENT_TYPE: return placeSingleChild(reconcileSingleElement(returnFiber, currentFirstChild, newChild, lanes));
						case REACT_PORTAL_TYPE: return placeSingleChild(reconcileSinglePortal(returnFiber, currentFirstChild, newChild, lanes));
						case REACT_LAZY_TYPE:
							var payload = newChild._payload;
							var init = newChild._init;
							return reconcileChildFibers$1(returnFiber, currentFirstChild, init(payload), lanes);
					}
					if (isArray(newChild)) return reconcileChildrenArray(returnFiber, currentFirstChild, newChild, lanes);
					if (getIteratorFn(newChild)) return reconcileChildrenIterator(returnFiber, currentFirstChild, newChild, lanes);
					throwOnInvalidObjectType(returnFiber, newChild);
				}
				if (typeof newChild === "string" && newChild !== "" || typeof newChild === "number") return placeSingleChild(reconcileSingleTextNode(returnFiber, currentFirstChild, "" + newChild, lanes));
				if (typeof newChild === "function") warnOnFunctionType(returnFiber);
				return deleteRemainingChildren(returnFiber, currentFirstChild);
			}
			return reconcileChildFibers$1;
		}
		var reconcileChildFibers = ChildReconciler(true);
		var mountChildFibers = ChildReconciler(false);
		function cloneChildFibers(current$1, workInProgress$1) {
			if (current$1 !== null && workInProgress$1.child !== current$1.child) throw new Error("Resuming work not yet implemented.");
			if (workInProgress$1.child === null) return;
			var currentChild = workInProgress$1.child;
			var newChild = createWorkInProgress(currentChild, currentChild.pendingProps);
			workInProgress$1.child = newChild;
			newChild.return = workInProgress$1;
			while (currentChild.sibling !== null) {
				currentChild = currentChild.sibling;
				newChild = newChild.sibling = createWorkInProgress(currentChild, currentChild.pendingProps);
				newChild.return = workInProgress$1;
			}
			newChild.sibling = null;
		}
		function resetChildFibers(workInProgress$1, lanes) {
			var child = workInProgress$1.child;
			while (child !== null) {
				resetWorkInProgress(child, lanes);
				child = child.sibling;
			}
		}
		var valueCursor = createCursor(null);
		var rendererSigil;
		rendererSigil = {};
		var currentlyRenderingFiber = null;
		var lastContextDependency = null;
		var lastFullyObservedContext = null;
		var isDisallowedContextReadInDEV = false;
		function resetContextDependencies() {
			currentlyRenderingFiber = null;
			lastContextDependency = null;
			lastFullyObservedContext = null;
			isDisallowedContextReadInDEV = false;
		}
		function enterDisallowedContextReadInDEV() {
			isDisallowedContextReadInDEV = true;
		}
		function exitDisallowedContextReadInDEV() {
			isDisallowedContextReadInDEV = false;
		}
		function pushProvider(providerFiber, context, nextValue) {
			{
				push(valueCursor, context._currentValue, providerFiber);
				context._currentValue = nextValue;
				{
					if (context._currentRenderer !== undefined && context._currentRenderer !== null && context._currentRenderer !== rendererSigil) error("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported.");
					context._currentRenderer = rendererSigil;
				}
			}
		}
		function popProvider(context, providerFiber) {
			var currentValue = valueCursor.current;
			pop(valueCursor, providerFiber);
			context._currentValue = currentValue;
		}
		function scheduleContextWorkOnParentPath(parent, renderLanes$1, propagationRoot) {
			var node = parent;
			while (node !== null) {
				var alternate = node.alternate;
				if (!isSubsetOfLanes(node.childLanes, renderLanes$1)) {
					node.childLanes = mergeLanes(node.childLanes, renderLanes$1);
					if (alternate !== null) alternate.childLanes = mergeLanes(alternate.childLanes, renderLanes$1);
				} else if (alternate !== null && !isSubsetOfLanes(alternate.childLanes, renderLanes$1)) alternate.childLanes = mergeLanes(alternate.childLanes, renderLanes$1);
				if (node === propagationRoot) break;
				node = node.return;
			}
			if (node !== propagationRoot) error("Expected to find the propagation root when scheduling context work. This error is likely caused by a bug in React. Please file an issue.");
		}
		function propagateContextChange(workInProgress$1, context, renderLanes$1) {
			propagateContextChange_eager(workInProgress$1, context, renderLanes$1);
		}
		function propagateContextChange_eager(workInProgress$1, context, renderLanes$1) {
			var fiber = workInProgress$1.child;
			if (fiber !== null) fiber.return = workInProgress$1;
			while (fiber !== null) {
				var nextFiber = void 0;
				var list = fiber.dependencies;
				if (list !== null) {
					nextFiber = fiber.child;
					var dependency = list.firstContext;
					while (dependency !== null) {
						if (dependency.context === context) {
							if (fiber.tag === ClassComponent) {
								var lane = pickArbitraryLane(renderLanes$1);
								var update = createUpdate(NoTimestamp, lane);
								update.tag = ForceUpdate;
								var updateQueue = fiber.updateQueue;
								if (updateQueue === null);
else {
									var sharedQueue = updateQueue.shared;
									var pending = sharedQueue.pending;
									if (pending === null) update.next = update;
else {
										update.next = pending.next;
										pending.next = update;
									}
									sharedQueue.pending = update;
								}
							}
							fiber.lanes = mergeLanes(fiber.lanes, renderLanes$1);
							var alternate = fiber.alternate;
							if (alternate !== null) alternate.lanes = mergeLanes(alternate.lanes, renderLanes$1);
							scheduleContextWorkOnParentPath(fiber.return, renderLanes$1, workInProgress$1);
							list.lanes = mergeLanes(list.lanes, renderLanes$1);
							break;
						}
						dependency = dependency.next;
					}
				} else if (fiber.tag === ContextProvider) nextFiber = fiber.type === workInProgress$1.type ? null : fiber.child;
else if (fiber.tag === DehydratedFragment) {
					var parentSuspense = fiber.return;
					if (parentSuspense === null) throw new Error("We just came from a parent so we must have had a parent. This is a bug in React.");
					parentSuspense.lanes = mergeLanes(parentSuspense.lanes, renderLanes$1);
					var _alternate = parentSuspense.alternate;
					if (_alternate !== null) _alternate.lanes = mergeLanes(_alternate.lanes, renderLanes$1);
					scheduleContextWorkOnParentPath(parentSuspense, renderLanes$1, workInProgress$1);
					nextFiber = fiber.sibling;
				} else nextFiber = fiber.child;
				if (nextFiber !== null) nextFiber.return = fiber;
else {
					nextFiber = fiber;
					while (nextFiber !== null) {
						if (nextFiber === workInProgress$1) {
							nextFiber = null;
							break;
						}
						var sibling = nextFiber.sibling;
						if (sibling !== null) {
							sibling.return = nextFiber.return;
							nextFiber = sibling;
							break;
						}
						nextFiber = nextFiber.return;
					}
				}
				fiber = nextFiber;
			}
		}
		function prepareToReadContext(workInProgress$1, renderLanes$1) {
			currentlyRenderingFiber = workInProgress$1;
			lastContextDependency = null;
			lastFullyObservedContext = null;
			var dependencies = workInProgress$1.dependencies;
			if (dependencies !== null) {
				var firstContext = dependencies.firstContext;
				if (firstContext !== null) {
					if (includesSomeLane(dependencies.lanes, renderLanes$1)) markWorkInProgressReceivedUpdate();
					dependencies.firstContext = null;
				}
			}
		}
		function readContext(context) {
			if (isDisallowedContextReadInDEV) error("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
			var value = context._currentValue;
			if (lastFullyObservedContext === context);
else {
				var contextItem = {
					context,
					memoizedValue: value,
					next: null
				};
				if (lastContextDependency === null) {
					if (currentlyRenderingFiber === null) throw new Error("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
					lastContextDependency = contextItem;
					currentlyRenderingFiber.dependencies = {
						lanes: NoLanes,
						firstContext: contextItem
					};
				} else lastContextDependency = lastContextDependency.next = contextItem;
			}
			return value;
		}
		var concurrentQueues = null;
		function pushConcurrentUpdateQueue(queue) {
			if (concurrentQueues === null) concurrentQueues = [queue];
else concurrentQueues.push(queue);
		}
		function finishQueueingConcurrentUpdates() {
			if (concurrentQueues !== null) {
				for (var i$1 = 0; i$1 < concurrentQueues.length; i$1++) {
					var queue = concurrentQueues[i$1];
					var lastInterleavedUpdate = queue.interleaved;
					if (lastInterleavedUpdate !== null) {
						queue.interleaved = null;
						var firstInterleavedUpdate = lastInterleavedUpdate.next;
						var lastPendingUpdate = queue.pending;
						if (lastPendingUpdate !== null) {
							var firstPendingUpdate = lastPendingUpdate.next;
							lastPendingUpdate.next = firstInterleavedUpdate;
							lastInterleavedUpdate.next = firstPendingUpdate;
						}
						queue.pending = lastInterleavedUpdate;
					}
				}
				concurrentQueues = null;
			}
		}
		function enqueueConcurrentHookUpdate(fiber, queue, update, lane) {
			var interleaved = queue.interleaved;
			if (interleaved === null) {
				update.next = update;
				pushConcurrentUpdateQueue(queue);
			} else {
				update.next = interleaved.next;
				interleaved.next = update;
			}
			queue.interleaved = update;
			return markUpdateLaneFromFiberToRoot(fiber, lane);
		}
		function enqueueConcurrentHookUpdateAndEagerlyBailout(fiber, queue, update, lane) {
			var interleaved = queue.interleaved;
			if (interleaved === null) {
				update.next = update;
				pushConcurrentUpdateQueue(queue);
			} else {
				update.next = interleaved.next;
				interleaved.next = update;
			}
			queue.interleaved = update;
		}
		function enqueueConcurrentClassUpdate(fiber, queue, update, lane) {
			var interleaved = queue.interleaved;
			if (interleaved === null) {
				update.next = update;
				pushConcurrentUpdateQueue(queue);
			} else {
				update.next = interleaved.next;
				interleaved.next = update;
			}
			queue.interleaved = update;
			return markUpdateLaneFromFiberToRoot(fiber, lane);
		}
		function enqueueConcurrentRenderForLane(fiber, lane) {
			return markUpdateLaneFromFiberToRoot(fiber, lane);
		}
		var unsafe_markUpdateLaneFromFiberToRoot = markUpdateLaneFromFiberToRoot;
		function markUpdateLaneFromFiberToRoot(sourceFiber, lane) {
			sourceFiber.lanes = mergeLanes(sourceFiber.lanes, lane);
			var alternate = sourceFiber.alternate;
			if (alternate !== null) alternate.lanes = mergeLanes(alternate.lanes, lane);
			if (alternate === null && (sourceFiber.flags & (Placement | Hydrating)) !== NoFlags) warnAboutUpdateOnNotYetMountedFiberInDEV(sourceFiber);
			var node = sourceFiber;
			var parent = sourceFiber.return;
			while (parent !== null) {
				parent.childLanes = mergeLanes(parent.childLanes, lane);
				alternate = parent.alternate;
				if (alternate !== null) alternate.childLanes = mergeLanes(alternate.childLanes, lane);
else if ((parent.flags & (Placement | Hydrating)) !== NoFlags) warnAboutUpdateOnNotYetMountedFiberInDEV(sourceFiber);
				node = parent;
				parent = parent.return;
			}
			if (node.tag === HostRoot) {
				var root$1 = node.stateNode;
				return root$1;
			} else return null;
		}
		var UpdateState = 0;
		var ReplaceState = 1;
		var ForceUpdate = 2;
		var CaptureUpdate = 3;
		var hasForceUpdate = false;
		var didWarnUpdateInsideUpdate;
		var currentlyProcessingQueue;
		{
			didWarnUpdateInsideUpdate = false;
			currentlyProcessingQueue = null;
		}
		function initializeUpdateQueue(fiber) {
			var queue = {
				baseState: fiber.memoizedState,
				firstBaseUpdate: null,
				lastBaseUpdate: null,
				shared: {
					pending: null,
					interleaved: null,
					lanes: NoLanes
				},
				effects: null
			};
			fiber.updateQueue = queue;
		}
		function cloneUpdateQueue(current$1, workInProgress$1) {
			var queue = workInProgress$1.updateQueue;
			var currentQueue = current$1.updateQueue;
			if (queue === currentQueue) {
				var clone = {
					baseState: currentQueue.baseState,
					firstBaseUpdate: currentQueue.firstBaseUpdate,
					lastBaseUpdate: currentQueue.lastBaseUpdate,
					shared: currentQueue.shared,
					effects: currentQueue.effects
				};
				workInProgress$1.updateQueue = clone;
			}
		}
		function createUpdate(eventTime, lane) {
			var update = {
				eventTime,
				lane,
				tag: UpdateState,
				payload: null,
				callback: null,
				next: null
			};
			return update;
		}
		function enqueueUpdate(fiber, update, lane) {
			var updateQueue = fiber.updateQueue;
			if (updateQueue === null) return null;
			var sharedQueue = updateQueue.shared;
			if (currentlyProcessingQueue === sharedQueue && !didWarnUpdateInsideUpdate) {
				error("An update (setState, replaceState, or forceUpdate) was scheduled from inside an update function. Update functions should be pure, with zero side-effects. Consider using componentDidUpdate or a callback.");
				didWarnUpdateInsideUpdate = true;
			}
			if (isUnsafeClassRenderPhaseUpdate()) {
				var pending = sharedQueue.pending;
				if (pending === null) update.next = update;
else {
					update.next = pending.next;
					pending.next = update;
				}
				sharedQueue.pending = update;
				return unsafe_markUpdateLaneFromFiberToRoot(fiber, lane);
			} else return enqueueConcurrentClassUpdate(fiber, sharedQueue, update, lane);
		}
		function entangleTransitions(root$1, fiber, lane) {
			var updateQueue = fiber.updateQueue;
			if (updateQueue === null) return;
			var sharedQueue = updateQueue.shared;
			if (isTransitionLane(lane)) {
				var queueLanes = sharedQueue.lanes;
				queueLanes = intersectLanes(queueLanes, root$1.pendingLanes);
				var newQueueLanes = mergeLanes(queueLanes, lane);
				sharedQueue.lanes = newQueueLanes;
				markRootEntangled(root$1, newQueueLanes);
			}
		}
		function enqueueCapturedUpdate(workInProgress$1, capturedUpdate) {
			var queue = workInProgress$1.updateQueue;
			var current$1 = workInProgress$1.alternate;
			if (current$1 !== null) {
				var currentQueue = current$1.updateQueue;
				if (queue === currentQueue) {
					var newFirst = null;
					var newLast = null;
					var firstBaseUpdate = queue.firstBaseUpdate;
					if (firstBaseUpdate !== null) {
						var update = firstBaseUpdate;
						do {
							var clone = {
								eventTime: update.eventTime,
								lane: update.lane,
								tag: update.tag,
								payload: update.payload,
								callback: update.callback,
								next: null
							};
							if (newLast === null) newFirst = newLast = clone;
else {
								newLast.next = clone;
								newLast = clone;
							}
							update = update.next;
						} while (update !== null);
						if (newLast === null) newFirst = newLast = capturedUpdate;
else {
							newLast.next = capturedUpdate;
							newLast = capturedUpdate;
						}
					} else newFirst = newLast = capturedUpdate;
					queue = {
						baseState: currentQueue.baseState,
						firstBaseUpdate: newFirst,
						lastBaseUpdate: newLast,
						shared: currentQueue.shared,
						effects: currentQueue.effects
					};
					workInProgress$1.updateQueue = queue;
					return;
				}
			}
			var lastBaseUpdate = queue.lastBaseUpdate;
			if (lastBaseUpdate === null) queue.firstBaseUpdate = capturedUpdate;
else lastBaseUpdate.next = capturedUpdate;
			queue.lastBaseUpdate = capturedUpdate;
		}
		function getStateFromUpdate(workInProgress$1, queue, update, prevState, nextProps, instance) {
			switch (update.tag) {
				case ReplaceState: {
					var payload = update.payload;
					if (typeof payload === "function") {
						enterDisallowedContextReadInDEV();
						var nextState = payload.call(instance, prevState, nextProps);
						{
							if (workInProgress$1.mode & StrictLegacyMode) {
								setIsStrictModeForDevtools(true);
								try {
									payload.call(instance, prevState, nextProps);
								} finally {
									setIsStrictModeForDevtools(false);
								}
							}
							exitDisallowedContextReadInDEV();
						}
						return nextState;
					}
					return payload;
				}
				case CaptureUpdate: workInProgress$1.flags = workInProgress$1.flags & ~ShouldCapture | DidCapture;
				case UpdateState: {
					var _payload = update.payload;
					var partialState;
					if (typeof _payload === "function") {
						enterDisallowedContextReadInDEV();
						partialState = _payload.call(instance, prevState, nextProps);
						{
							if (workInProgress$1.mode & StrictLegacyMode) {
								setIsStrictModeForDevtools(true);
								try {
									_payload.call(instance, prevState, nextProps);
								} finally {
									setIsStrictModeForDevtools(false);
								}
							}
							exitDisallowedContextReadInDEV();
						}
					} else partialState = _payload;
					if (partialState === null || partialState === undefined) return prevState;
					return assign({}, prevState, partialState);
				}
				case ForceUpdate: {
					hasForceUpdate = true;
					return prevState;
				}
			}
			return prevState;
		}
		function processUpdateQueue(workInProgress$1, props, instance, renderLanes$1) {
			var queue = workInProgress$1.updateQueue;
			hasForceUpdate = false;
			currentlyProcessingQueue = queue.shared;
			var firstBaseUpdate = queue.firstBaseUpdate;
			var lastBaseUpdate = queue.lastBaseUpdate;
			var pendingQueue = queue.shared.pending;
			if (pendingQueue !== null) {
				queue.shared.pending = null;
				var lastPendingUpdate = pendingQueue;
				var firstPendingUpdate = lastPendingUpdate.next;
				lastPendingUpdate.next = null;
				if (lastBaseUpdate === null) firstBaseUpdate = firstPendingUpdate;
else lastBaseUpdate.next = firstPendingUpdate;
				lastBaseUpdate = lastPendingUpdate;
				var current$1 = workInProgress$1.alternate;
				if (current$1 !== null) {
					var currentQueue = current$1.updateQueue;
					var currentLastBaseUpdate = currentQueue.lastBaseUpdate;
					if (currentLastBaseUpdate !== lastBaseUpdate) {
						if (currentLastBaseUpdate === null) currentQueue.firstBaseUpdate = firstPendingUpdate;
else currentLastBaseUpdate.next = firstPendingUpdate;
						currentQueue.lastBaseUpdate = lastPendingUpdate;
					}
				}
			}
			if (firstBaseUpdate !== null) {
				var newState = queue.baseState;
				var newLanes = NoLanes;
				var newBaseState = null;
				var newFirstBaseUpdate = null;
				var newLastBaseUpdate = null;
				var update = firstBaseUpdate;
				do {
					var updateLane = update.lane;
					var updateEventTime = update.eventTime;
					if (!isSubsetOfLanes(renderLanes$1, updateLane)) {
						var clone = {
							eventTime: updateEventTime,
							lane: updateLane,
							tag: update.tag,
							payload: update.payload,
							callback: update.callback,
							next: null
						};
						if (newLastBaseUpdate === null) {
							newFirstBaseUpdate = newLastBaseUpdate = clone;
							newBaseState = newState;
						} else newLastBaseUpdate = newLastBaseUpdate.next = clone;
						newLanes = mergeLanes(newLanes, updateLane);
					} else {
						if (newLastBaseUpdate !== null) {
							var _clone = {
								eventTime: updateEventTime,
								lane: NoLane,
								tag: update.tag,
								payload: update.payload,
								callback: update.callback,
								next: null
							};
							newLastBaseUpdate = newLastBaseUpdate.next = _clone;
						}
						newState = getStateFromUpdate(workInProgress$1, queue, update, newState, props, instance);
						var callback = update.callback;
						if (callback !== null && update.lane !== NoLane) {
							workInProgress$1.flags |= Callback;
							var effects = queue.effects;
							if (effects === null) queue.effects = [update];
else effects.push(update);
						}
					}
					update = update.next;
					if (update === null) {
						pendingQueue = queue.shared.pending;
						if (pendingQueue === null) break;
else {
							var _lastPendingUpdate = pendingQueue;
							var _firstPendingUpdate = _lastPendingUpdate.next;
							_lastPendingUpdate.next = null;
							update = _firstPendingUpdate;
							queue.lastBaseUpdate = _lastPendingUpdate;
							queue.shared.pending = null;
						}
					}
				} while (true);
				if (newLastBaseUpdate === null) newBaseState = newState;
				queue.baseState = newBaseState;
				queue.firstBaseUpdate = newFirstBaseUpdate;
				queue.lastBaseUpdate = newLastBaseUpdate;
				var lastInterleaved = queue.shared.interleaved;
				if (lastInterleaved !== null) {
					var interleaved = lastInterleaved;
					do {
						newLanes = mergeLanes(newLanes, interleaved.lane);
						interleaved = interleaved.next;
					} while (interleaved !== lastInterleaved);
				} else if (firstBaseUpdate === null) queue.shared.lanes = NoLanes;
				markSkippedUpdateLanes(newLanes);
				workInProgress$1.lanes = newLanes;
				workInProgress$1.memoizedState = newState;
			}
			currentlyProcessingQueue = null;
		}
		function callCallback(callback, context) {
			if (typeof callback !== "function") throw new Error("Invalid argument passed as callback. Expected a function. Instead " + ("received: " + callback));
			callback.call(context);
		}
		function resetHasForceUpdateBeforeProcessing() {
			hasForceUpdate = false;
		}
		function checkHasForceUpdateAfterProcessing() {
			return hasForceUpdate;
		}
		function commitUpdateQueue(finishedWork, finishedQueue, instance) {
			var effects = finishedQueue.effects;
			finishedQueue.effects = null;
			if (effects !== null) for (var i$1 = 0; i$1 < effects.length; i$1++) {
				var effect = effects[i$1];
				var callback = effect.callback;
				if (callback !== null) {
					effect.callback = null;
					callCallback(callback, instance);
				}
			}
		}
		var NO_CONTEXT = {};
		var contextStackCursor$1 = createCursor(NO_CONTEXT);
		var contextFiberStackCursor = createCursor(NO_CONTEXT);
		var rootInstanceStackCursor = createCursor(NO_CONTEXT);
		function requiredContext(c) {
			if (c === NO_CONTEXT) throw new Error("Expected host context to exist. This error is likely caused by a bug in React. Please file an issue.");
			return c;
		}
		function getRootHostContainer() {
			var rootInstance = requiredContext(rootInstanceStackCursor.current);
			return rootInstance;
		}
		function pushHostContainer(fiber, nextRootInstance) {
			push(rootInstanceStackCursor, nextRootInstance, fiber);
			push(contextFiberStackCursor, fiber, fiber);
			push(contextStackCursor$1, NO_CONTEXT, fiber);
			var nextRootContext = getRootHostContext(nextRootInstance);
			pop(contextStackCursor$1, fiber);
			push(contextStackCursor$1, nextRootContext, fiber);
		}
		function popHostContainer(fiber) {
			pop(contextStackCursor$1, fiber);
			pop(contextFiberStackCursor, fiber);
			pop(rootInstanceStackCursor, fiber);
		}
		function getHostContext() {
			var context = requiredContext(contextStackCursor$1.current);
			return context;
		}
		function pushHostContext(fiber) {
			var rootInstance = requiredContext(rootInstanceStackCursor.current);
			var context = requiredContext(contextStackCursor$1.current);
			var nextContext = getChildHostContext(context, fiber.type);
			if (context === nextContext) return;
			push(contextFiberStackCursor, fiber, fiber);
			push(contextStackCursor$1, nextContext, fiber);
		}
		function popHostContext(fiber) {
			if (contextFiberStackCursor.current !== fiber) return;
			pop(contextStackCursor$1, fiber);
			pop(contextFiberStackCursor, fiber);
		}
		var DefaultSuspenseContext = 0;
		var SubtreeSuspenseContextMask = 1;
		var InvisibleParentSuspenseContext = 1;
		var ForceSuspenseFallback = 2;
		var suspenseStackCursor = createCursor(DefaultSuspenseContext);
		function hasSuspenseContext(parentContext, flag) {
			return (parentContext & flag) !== 0;
		}
		function setDefaultShallowSuspenseContext(parentContext) {
			return parentContext & SubtreeSuspenseContextMask;
		}
		function setShallowSuspenseContext(parentContext, shallowContext) {
			return parentContext & SubtreeSuspenseContextMask | shallowContext;
		}
		function addSubtreeSuspenseContext(parentContext, subtreeContext) {
			return parentContext | subtreeContext;
		}
		function pushSuspenseContext(fiber, newContext) {
			push(suspenseStackCursor, newContext, fiber);
		}
		function popSuspenseContext(fiber) {
			pop(suspenseStackCursor, fiber);
		}
		function shouldCaptureSuspense(workInProgress$1, hasInvisibleParent) {
			var nextState = workInProgress$1.memoizedState;
			if (nextState !== null) {
				if (nextState.dehydrated !== null) return true;
				return false;
			}
			var props = workInProgress$1.memoizedProps;
			return true;
		}
		function findFirstSuspended(row) {
			var node = row;
			while (node !== null) {
				if (node.tag === SuspenseComponent) {
					var state = node.memoizedState;
					if (state !== null) {
						var dehydrated = state.dehydrated;
						if (dehydrated === null || isSuspenseInstancePending(dehydrated) || isSuspenseInstanceFallback(dehydrated)) return node;
					}
				} else if (node.tag === SuspenseListComponent && node.memoizedProps.revealOrder !== undefined) {
					var didSuspend = (node.flags & DidCapture) !== NoFlags;
					if (didSuspend) return node;
				} else if (node.child !== null) {
					node.child.return = node;
					node = node.child;
					continue;
				}
				if (node === row) return null;
				while (node.sibling === null) {
					if (node.return === null || node.return === row) return null;
					node = node.return;
				}
				node.sibling.return = node.return;
				node = node.sibling;
			}
			return null;
		}
		var NoFlags$1 = 0;
		var HasEffect = 1;
		var Insertion = 2;
		var Layout = 4;
		var Passive$1 = 8;
		var workInProgressSources = [];
		function resetWorkInProgressVersions() {
			for (var i$1 = 0; i$1 < workInProgressSources.length; i$1++) {
				var mutableSource = workInProgressSources[i$1];
				mutableSource._workInProgressVersionPrimary = null;
			}
			workInProgressSources.length = 0;
		}
		function registerMutableSourceForHydration(root$1, mutableSource) {
			var getVersion = mutableSource._getVersion;
			var version = getVersion(mutableSource._source);
			if (root$1.mutableSourceEagerHydrationData == null) root$1.mutableSourceEagerHydrationData = [mutableSource, version];
else root$1.mutableSourceEagerHydrationData.push(mutableSource, version);
		}
		var ReactCurrentDispatcher$1 = ReactSharedInternals.ReactCurrentDispatcher, ReactCurrentBatchConfig$2 = ReactSharedInternals.ReactCurrentBatchConfig;
		var didWarnAboutMismatchedHooksForComponent;
		var didWarnUncachedGetSnapshot;
		didWarnAboutMismatchedHooksForComponent = new Set();
		var renderLanes = NoLanes;
		var currentlyRenderingFiber$1 = null;
		var currentHook = null;
		var workInProgressHook = null;
		var didScheduleRenderPhaseUpdate = false;
		var didScheduleRenderPhaseUpdateDuringThisPass = false;
		var localIdCounter = 0;
		var globalClientIdCounter = 0;
		var RE_RENDER_LIMIT = 25;
		var currentHookNameInDev = null;
		var hookTypesDev = null;
		var hookTypesUpdateIndexDev = -1;
		var ignorePreviousDependencies = false;
		function mountHookTypesDev() {
			{
				var hookName = currentHookNameInDev;
				if (hookTypesDev === null) hookTypesDev = [hookName];
else hookTypesDev.push(hookName);
			}
		}
		function updateHookTypesDev() {
			{
				var hookName = currentHookNameInDev;
				if (hookTypesDev !== null) {
					hookTypesUpdateIndexDev++;
					if (hookTypesDev[hookTypesUpdateIndexDev] !== hookName) warnOnHookMismatchInDev(hookName);
				}
			}
		}
		function checkDepsAreArrayDev(deps) {
			if (deps !== undefined && deps !== null && !isArray(deps)) error("%s received a final argument that is not an array (instead, received `%s`). When specified, the final argument must be an array.", currentHookNameInDev, typeof deps);
		}
		function warnOnHookMismatchInDev(currentHookName) {
			{
				var componentName = getComponentNameFromFiber(currentlyRenderingFiber$1);
				if (!didWarnAboutMismatchedHooksForComponent.has(componentName)) {
					didWarnAboutMismatchedHooksForComponent.add(componentName);
					if (hookTypesDev !== null) {
						var table = "";
						var secondColumnStart = 30;
						for (var i$1 = 0; i$1 <= hookTypesUpdateIndexDev; i$1++) {
							var oldHookName = hookTypesDev[i$1];
							var newHookName = i$1 === hookTypesUpdateIndexDev ? currentHookName : oldHookName;
							var row = i$1 + 1 + ". " + oldHookName;
							while (row.length < secondColumnStart) row += " ";
							row += newHookName + "\n";
							table += row;
						}
						error("React has detected a change in the order of Hooks called by %s. This will lead to bugs and errors if not fixed. For more information, read the Rules of Hooks: https://reactjs.org/link/rules-of-hooks\n\n   Previous render            Next render\n   ------------------------------------------------------\n%s   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n", componentName, table);
					}
				}
			}
		}
		function throwInvalidHookError() {
			throw new Error("Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.");
		}
		function areHookInputsEqual(nextDeps, prevDeps) {
			if (ignorePreviousDependencies) return false;
			if (prevDeps === null) {
				error("%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.", currentHookNameInDev);
				return false;
			}
			if (nextDeps.length !== prevDeps.length) error("The final argument passed to %s changed size between renders. The order and size of this array must remain constant.\n\nPrevious: %s\nIncoming: %s", currentHookNameInDev, "[" + prevDeps.join(", ") + "]", "[" + nextDeps.join(", ") + "]");
			for (var i$1 = 0; i$1 < prevDeps.length && i$1 < nextDeps.length; i$1++) {
				if (objectIs(nextDeps[i$1], prevDeps[i$1])) continue;
				return false;
			}
			return true;
		}
		function renderWithHooks(current$1, workInProgress$1, Component, props, secondArg, nextRenderLanes) {
			renderLanes = nextRenderLanes;
			currentlyRenderingFiber$1 = workInProgress$1;
			{
				hookTypesDev = current$1 !== null ? current$1._debugHookTypes : null;
				hookTypesUpdateIndexDev = -1;
				ignorePreviousDependencies = current$1 !== null && current$1.type !== workInProgress$1.type;
			}
			workInProgress$1.memoizedState = null;
			workInProgress$1.updateQueue = null;
			workInProgress$1.lanes = NoLanes;
			if (current$1 !== null && current$1.memoizedState !== null) ReactCurrentDispatcher$1.current = HooksDispatcherOnUpdateInDEV;
else if (hookTypesDev !== null) ReactCurrentDispatcher$1.current = HooksDispatcherOnMountWithHookTypesInDEV;
else ReactCurrentDispatcher$1.current = HooksDispatcherOnMountInDEV;
			var children = Component(props, secondArg);
			if (didScheduleRenderPhaseUpdateDuringThisPass) {
				var numberOfReRenders = 0;
				do {
					didScheduleRenderPhaseUpdateDuringThisPass = false;
					localIdCounter = 0;
					if (numberOfReRenders >= RE_RENDER_LIMIT) throw new Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");
					numberOfReRenders += 1;
					ignorePreviousDependencies = false;
					currentHook = null;
					workInProgressHook = null;
					workInProgress$1.updateQueue = null;
					hookTypesUpdateIndexDev = -1;
					ReactCurrentDispatcher$1.current = HooksDispatcherOnRerenderInDEV;
					children = Component(props, secondArg);
				} while (didScheduleRenderPhaseUpdateDuringThisPass);
			}
			ReactCurrentDispatcher$1.current = ContextOnlyDispatcher;
			workInProgress$1._debugHookTypes = hookTypesDev;
			var didRenderTooFewHooks = currentHook !== null && currentHook.next !== null;
			renderLanes = NoLanes;
			currentlyRenderingFiber$1 = null;
			currentHook = null;
			workInProgressHook = null;
			{
				currentHookNameInDev = null;
				hookTypesDev = null;
				hookTypesUpdateIndexDev = -1;
				if (current$1 !== null && (current$1.flags & StaticMask) !== (workInProgress$1.flags & StaticMask) && (current$1.mode & ConcurrentMode) !== NoMode) error("Internal React error: Expected static flag was missing. Please notify the React team.");
			}
			didScheduleRenderPhaseUpdate = false;
			if (didRenderTooFewHooks) throw new Error("Rendered fewer hooks than expected. This may be caused by an accidental early return statement.");
			return children;
		}
		function checkDidRenderIdHook() {
			var didRenderIdHook = localIdCounter !== 0;
			localIdCounter = 0;
			return didRenderIdHook;
		}
		function bailoutHooks(current$1, workInProgress$1, lanes) {
			workInProgress$1.updateQueue = current$1.updateQueue;
			if ((workInProgress$1.mode & StrictEffectsMode) !== NoMode) workInProgress$1.flags &= ~(MountPassiveDev | MountLayoutDev | Passive | Update);
else workInProgress$1.flags &= ~(Passive | Update);
			current$1.lanes = removeLanes(current$1.lanes, lanes);
		}
		function resetHooksAfterThrow() {
			ReactCurrentDispatcher$1.current = ContextOnlyDispatcher;
			if (didScheduleRenderPhaseUpdate) {
				var hook = currentlyRenderingFiber$1.memoizedState;
				while (hook !== null) {
					var queue = hook.queue;
					if (queue !== null) queue.pending = null;
					hook = hook.next;
				}
				didScheduleRenderPhaseUpdate = false;
			}
			renderLanes = NoLanes;
			currentlyRenderingFiber$1 = null;
			currentHook = null;
			workInProgressHook = null;
			{
				hookTypesDev = null;
				hookTypesUpdateIndexDev = -1;
				currentHookNameInDev = null;
				isUpdatingOpaqueValueInRenderPhase = false;
			}
			didScheduleRenderPhaseUpdateDuringThisPass = false;
			localIdCounter = 0;
		}
		function mountWorkInProgressHook() {
			var hook = {
				memoizedState: null,
				baseState: null,
				baseQueue: null,
				queue: null,
				next: null
			};
			if (workInProgressHook === null) currentlyRenderingFiber$1.memoizedState = workInProgressHook = hook;
else workInProgressHook = workInProgressHook.next = hook;
			return workInProgressHook;
		}
		function updateWorkInProgressHook() {
			var nextCurrentHook;
			if (currentHook === null) {
				var current$1 = currentlyRenderingFiber$1.alternate;
				if (current$1 !== null) nextCurrentHook = current$1.memoizedState;
else nextCurrentHook = null;
			} else nextCurrentHook = currentHook.next;
			var nextWorkInProgressHook;
			if (workInProgressHook === null) nextWorkInProgressHook = currentlyRenderingFiber$1.memoizedState;
else nextWorkInProgressHook = workInProgressHook.next;
			if (nextWorkInProgressHook !== null) {
				workInProgressHook = nextWorkInProgressHook;
				nextWorkInProgressHook = workInProgressHook.next;
				currentHook = nextCurrentHook;
			} else {
				if (nextCurrentHook === null) throw new Error("Rendered more hooks than during the previous render.");
				currentHook = nextCurrentHook;
				var newHook = {
					memoizedState: currentHook.memoizedState,
					baseState: currentHook.baseState,
					baseQueue: currentHook.baseQueue,
					queue: currentHook.queue,
					next: null
				};
				if (workInProgressHook === null) currentlyRenderingFiber$1.memoizedState = workInProgressHook = newHook;
else workInProgressHook = workInProgressHook.next = newHook;
			}
			return workInProgressHook;
		}
		function createFunctionComponentUpdateQueue() {
			return {
				lastEffect: null,
				stores: null
			};
		}
		function basicStateReducer(state, action) {
			return typeof action === "function" ? action(state) : action;
		}
		function mountReducer(reducer, initialArg, init) {
			var hook = mountWorkInProgressHook();
			var initialState;
			if (init !== undefined) initialState = init(initialArg);
else initialState = initialArg;
			hook.memoizedState = hook.baseState = initialState;
			var queue = {
				pending: null,
				interleaved: null,
				lanes: NoLanes,
				dispatch: null,
				lastRenderedReducer: reducer,
				lastRenderedState: initialState
			};
			hook.queue = queue;
			var dispatch = queue.dispatch = dispatchReducerAction.bind(null, currentlyRenderingFiber$1, queue);
			return [hook.memoizedState, dispatch];
		}
		function updateReducer(reducer, initialArg, init) {
			var hook = updateWorkInProgressHook();
			var queue = hook.queue;
			if (queue === null) throw new Error("Should have a queue. This is likely a bug in React. Please file an issue.");
			queue.lastRenderedReducer = reducer;
			var current$1 = currentHook;
			var baseQueue = current$1.baseQueue;
			var pendingQueue = queue.pending;
			if (pendingQueue !== null) {
				if (baseQueue !== null) {
					var baseFirst = baseQueue.next;
					var pendingFirst = pendingQueue.next;
					baseQueue.next = pendingFirst;
					pendingQueue.next = baseFirst;
				}
				if (current$1.baseQueue !== baseQueue) error("Internal error: Expected work-in-progress queue to be a clone. This is a bug in React.");
				current$1.baseQueue = baseQueue = pendingQueue;
				queue.pending = null;
			}
			if (baseQueue !== null) {
				var first = baseQueue.next;
				var newState = current$1.baseState;
				var newBaseState = null;
				var newBaseQueueFirst = null;
				var newBaseQueueLast = null;
				var update = first;
				do {
					var updateLane = update.lane;
					if (!isSubsetOfLanes(renderLanes, updateLane)) {
						var clone = {
							lane: updateLane,
							action: update.action,
							hasEagerState: update.hasEagerState,
							eagerState: update.eagerState,
							next: null
						};
						if (newBaseQueueLast === null) {
							newBaseQueueFirst = newBaseQueueLast = clone;
							newBaseState = newState;
						} else newBaseQueueLast = newBaseQueueLast.next = clone;
						currentlyRenderingFiber$1.lanes = mergeLanes(currentlyRenderingFiber$1.lanes, updateLane);
						markSkippedUpdateLanes(updateLane);
					} else {
						if (newBaseQueueLast !== null) {
							var _clone = {
								lane: NoLane,
								action: update.action,
								hasEagerState: update.hasEagerState,
								eagerState: update.eagerState,
								next: null
							};
							newBaseQueueLast = newBaseQueueLast.next = _clone;
						}
						if (update.hasEagerState) newState = update.eagerState;
else {
							var action = update.action;
							newState = reducer(newState, action);
						}
					}
					update = update.next;
				} while (update !== null && update !== first);
				if (newBaseQueueLast === null) newBaseState = newState;
else newBaseQueueLast.next = newBaseQueueFirst;
				if (!objectIs(newState, hook.memoizedState)) markWorkInProgressReceivedUpdate();
				hook.memoizedState = newState;
				hook.baseState = newBaseState;
				hook.baseQueue = newBaseQueueLast;
				queue.lastRenderedState = newState;
			}
			var lastInterleaved = queue.interleaved;
			if (lastInterleaved !== null) {
				var interleaved = lastInterleaved;
				do {
					var interleavedLane = interleaved.lane;
					currentlyRenderingFiber$1.lanes = mergeLanes(currentlyRenderingFiber$1.lanes, interleavedLane);
					markSkippedUpdateLanes(interleavedLane);
					interleaved = interleaved.next;
				} while (interleaved !== lastInterleaved);
			} else if (baseQueue === null) queue.lanes = NoLanes;
			var dispatch = queue.dispatch;
			return [hook.memoizedState, dispatch];
		}
		function rerenderReducer(reducer, initialArg, init) {
			var hook = updateWorkInProgressHook();
			var queue = hook.queue;
			if (queue === null) throw new Error("Should have a queue. This is likely a bug in React. Please file an issue.");
			queue.lastRenderedReducer = reducer;
			var dispatch = queue.dispatch;
			var lastRenderPhaseUpdate = queue.pending;
			var newState = hook.memoizedState;
			if (lastRenderPhaseUpdate !== null) {
				queue.pending = null;
				var firstRenderPhaseUpdate = lastRenderPhaseUpdate.next;
				var update = firstRenderPhaseUpdate;
				do {
					var action = update.action;
					newState = reducer(newState, action);
					update = update.next;
				} while (update !== firstRenderPhaseUpdate);
				if (!objectIs(newState, hook.memoizedState)) markWorkInProgressReceivedUpdate();
				hook.memoizedState = newState;
				if (hook.baseQueue === null) hook.baseState = newState;
				queue.lastRenderedState = newState;
			}
			return [newState, dispatch];
		}
		function mountMutableSource(source, getSnapshot, subscribe) {
			return undefined;
		}
		function updateMutableSource(source, getSnapshot, subscribe) {
			return undefined;
		}
		function mountSyncExternalStore(subscribe, getSnapshot, getServerSnapshot) {
			var fiber = currentlyRenderingFiber$1;
			var hook = mountWorkInProgressHook();
			var nextSnapshot;
			var isHydrating$1 = getIsHydrating();
			if (isHydrating$1) {
				if (getServerSnapshot === undefined) throw new Error("Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering.");
				nextSnapshot = getServerSnapshot();
				if (!didWarnUncachedGetSnapshot) {
					if (nextSnapshot !== getServerSnapshot()) {
						error("The result of getServerSnapshot should be cached to avoid an infinite loop");
						didWarnUncachedGetSnapshot = true;
					}
				}
			} else {
				nextSnapshot = getSnapshot();
				if (!didWarnUncachedGetSnapshot) {
					var cachedSnapshot = getSnapshot();
					if (!objectIs(nextSnapshot, cachedSnapshot)) {
						error("The result of getSnapshot should be cached to avoid an infinite loop");
						didWarnUncachedGetSnapshot = true;
					}
				}
				var root$1 = getWorkInProgressRoot();
				if (root$1 === null) throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
				if (!includesBlockingLane(root$1, renderLanes)) pushStoreConsistencyCheck(fiber, getSnapshot, nextSnapshot);
			}
			hook.memoizedState = nextSnapshot;
			var inst = {
				value: nextSnapshot,
				getSnapshot
			};
			hook.queue = inst;
			mountEffect(subscribeToStore.bind(null, fiber, inst, subscribe), [subscribe]);
			fiber.flags |= Passive;
			pushEffect(HasEffect | Passive$1, updateStoreInstance.bind(null, fiber, inst, nextSnapshot, getSnapshot), undefined, null);
			return nextSnapshot;
		}
		function updateSyncExternalStore(subscribe, getSnapshot, getServerSnapshot) {
			var fiber = currentlyRenderingFiber$1;
			var hook = updateWorkInProgressHook();
			var nextSnapshot = getSnapshot();
			if (!didWarnUncachedGetSnapshot) {
				var cachedSnapshot = getSnapshot();
				if (!objectIs(nextSnapshot, cachedSnapshot)) {
					error("The result of getSnapshot should be cached to avoid an infinite loop");
					didWarnUncachedGetSnapshot = true;
				}
			}
			var prevSnapshot = hook.memoizedState;
			var snapshotChanged = !objectIs(prevSnapshot, nextSnapshot);
			if (snapshotChanged) {
				hook.memoizedState = nextSnapshot;
				markWorkInProgressReceivedUpdate();
			}
			var inst = hook.queue;
			updateEffect(subscribeToStore.bind(null, fiber, inst, subscribe), [subscribe]);
			if (inst.getSnapshot !== getSnapshot || snapshotChanged || workInProgressHook !== null && workInProgressHook.memoizedState.tag & HasEffect) {
				fiber.flags |= Passive;
				pushEffect(HasEffect | Passive$1, updateStoreInstance.bind(null, fiber, inst, nextSnapshot, getSnapshot), undefined, null);
				var root$1 = getWorkInProgressRoot();
				if (root$1 === null) throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
				if (!includesBlockingLane(root$1, renderLanes)) pushStoreConsistencyCheck(fiber, getSnapshot, nextSnapshot);
			}
			return nextSnapshot;
		}
		function pushStoreConsistencyCheck(fiber, getSnapshot, renderedSnapshot) {
			fiber.flags |= StoreConsistency;
			var check = {
				getSnapshot,
				value: renderedSnapshot
			};
			var componentUpdateQueue = currentlyRenderingFiber$1.updateQueue;
			if (componentUpdateQueue === null) {
				componentUpdateQueue = createFunctionComponentUpdateQueue();
				currentlyRenderingFiber$1.updateQueue = componentUpdateQueue;
				componentUpdateQueue.stores = [check];
			} else {
				var stores = componentUpdateQueue.stores;
				if (stores === null) componentUpdateQueue.stores = [check];
else stores.push(check);
			}
		}
		function updateStoreInstance(fiber, inst, nextSnapshot, getSnapshot) {
			inst.value = nextSnapshot;
			inst.getSnapshot = getSnapshot;
			if (checkIfSnapshotChanged(inst)) forceStoreRerender(fiber);
		}
		function subscribeToStore(fiber, inst, subscribe) {
			var handleStoreChange = function() {
				if (checkIfSnapshotChanged(inst)) forceStoreRerender(fiber);
			};
			return subscribe(handleStoreChange);
		}
		function checkIfSnapshotChanged(inst) {
			var latestGetSnapshot = inst.getSnapshot;
			var prevValue = inst.value;
			try {
				var nextValue = latestGetSnapshot();
				return !objectIs(prevValue, nextValue);
			} catch (error$1) {
				return true;
			}
		}
		function forceStoreRerender(fiber) {
			var root$1 = enqueueConcurrentRenderForLane(fiber, SyncLane);
			if (root$1 !== null) scheduleUpdateOnFiber(root$1, fiber, SyncLane, NoTimestamp);
		}
		function mountState(initialState) {
			var hook = mountWorkInProgressHook();
			if (typeof initialState === "function") initialState = initialState();
			hook.memoizedState = hook.baseState = initialState;
			var queue = {
				pending: null,
				interleaved: null,
				lanes: NoLanes,
				dispatch: null,
				lastRenderedReducer: basicStateReducer,
				lastRenderedState: initialState
			};
			hook.queue = queue;
			var dispatch = queue.dispatch = dispatchSetState.bind(null, currentlyRenderingFiber$1, queue);
			return [hook.memoizedState, dispatch];
		}
		function updateState(initialState) {
			return updateReducer(basicStateReducer);
		}
		function rerenderState(initialState) {
			return rerenderReducer(basicStateReducer);
		}
		function pushEffect(tag, create, destroy, deps) {
			var effect = {
				tag,
				create,
				destroy,
				deps,
				next: null
			};
			var componentUpdateQueue = currentlyRenderingFiber$1.updateQueue;
			if (componentUpdateQueue === null) {
				componentUpdateQueue = createFunctionComponentUpdateQueue();
				currentlyRenderingFiber$1.updateQueue = componentUpdateQueue;
				componentUpdateQueue.lastEffect = effect.next = effect;
			} else {
				var lastEffect = componentUpdateQueue.lastEffect;
				if (lastEffect === null) componentUpdateQueue.lastEffect = effect.next = effect;
else {
					var firstEffect = lastEffect.next;
					lastEffect.next = effect;
					effect.next = firstEffect;
					componentUpdateQueue.lastEffect = effect;
				}
			}
			return effect;
		}
		function mountRef(initialValue) {
			var hook = mountWorkInProgressHook();
			{
				var _ref2 = { current: initialValue };
				hook.memoizedState = _ref2;
				return _ref2;
			}
		}
		function updateRef(initialValue) {
			var hook = updateWorkInProgressHook();
			return hook.memoizedState;
		}
		function mountEffectImpl(fiberFlags, hookFlags, create, deps) {
			var hook = mountWorkInProgressHook();
			var nextDeps = deps === undefined ? null : deps;
			currentlyRenderingFiber$1.flags |= fiberFlags;
			hook.memoizedState = pushEffect(HasEffect | hookFlags, create, undefined, nextDeps);
		}
		function updateEffectImpl(fiberFlags, hookFlags, create, deps) {
			var hook = updateWorkInProgressHook();
			var nextDeps = deps === undefined ? null : deps;
			var destroy = undefined;
			if (currentHook !== null) {
				var prevEffect = currentHook.memoizedState;
				destroy = prevEffect.destroy;
				if (nextDeps !== null) {
					var prevDeps = prevEffect.deps;
					if (areHookInputsEqual(nextDeps, prevDeps)) {
						hook.memoizedState = pushEffect(hookFlags, create, destroy, nextDeps);
						return;
					}
				}
			}
			currentlyRenderingFiber$1.flags |= fiberFlags;
			hook.memoizedState = pushEffect(HasEffect | hookFlags, create, destroy, nextDeps);
		}
		function mountEffect(create, deps) {
			if ((currentlyRenderingFiber$1.mode & StrictEffectsMode) !== NoMode) return mountEffectImpl(MountPassiveDev | Passive | PassiveStatic, Passive$1, create, deps);
else return mountEffectImpl(Passive | PassiveStatic, Passive$1, create, deps);
		}
		function updateEffect(create, deps) {
			return updateEffectImpl(Passive, Passive$1, create, deps);
		}
		function mountInsertionEffect(create, deps) {
			return mountEffectImpl(Update, Insertion, create, deps);
		}
		function updateInsertionEffect(create, deps) {
			return updateEffectImpl(Update, Insertion, create, deps);
		}
		function mountLayoutEffect(create, deps) {
			var fiberFlags = Update;
			fiberFlags |= LayoutStatic;
			if ((currentlyRenderingFiber$1.mode & StrictEffectsMode) !== NoMode) fiberFlags |= MountLayoutDev;
			return mountEffectImpl(fiberFlags, Layout, create, deps);
		}
		function updateLayoutEffect(create, deps) {
			return updateEffectImpl(Update, Layout, create, deps);
		}
		function imperativeHandleEffect(create, ref) {
			if (typeof ref === "function") {
				var refCallback = ref;
				var _inst = create();
				refCallback(_inst);
				return function() {
					refCallback(null);
				};
			} else if (ref !== null && ref !== undefined) {
				var refObject = ref;
				if (!refObject.hasOwnProperty("current")) error("Expected useImperativeHandle() first argument to either be a ref callback or React.createRef() object. Instead received: %s.", "an object with keys {" + Object.keys(refObject).join(", ") + "}");
				var _inst2 = create();
				refObject.current = _inst2;
				return function() {
					refObject.current = null;
				};
			}
		}
		function mountImperativeHandle(ref, create, deps) {
			if (typeof create !== "function") error("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", create !== null ? typeof create : "null");
			var effectDeps = deps !== null && deps !== undefined ? deps.concat([ref]) : null;
			var fiberFlags = Update;
			fiberFlags |= LayoutStatic;
			if ((currentlyRenderingFiber$1.mode & StrictEffectsMode) !== NoMode) fiberFlags |= MountLayoutDev;
			return mountEffectImpl(fiberFlags, Layout, imperativeHandleEffect.bind(null, create, ref), effectDeps);
		}
		function updateImperativeHandle(ref, create, deps) {
			if (typeof create !== "function") error("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", create !== null ? typeof create : "null");
			var effectDeps = deps !== null && deps !== undefined ? deps.concat([ref]) : null;
			return updateEffectImpl(Update, Layout, imperativeHandleEffect.bind(null, create, ref), effectDeps);
		}
		function mountDebugValue(value, formatterFn) {}
		var updateDebugValue = mountDebugValue;
		function mountCallback(callback, deps) {
			var hook = mountWorkInProgressHook();
			var nextDeps = deps === undefined ? null : deps;
			hook.memoizedState = [callback, nextDeps];
			return callback;
		}
		function updateCallback(callback, deps) {
			var hook = updateWorkInProgressHook();
			var nextDeps = deps === undefined ? null : deps;
			var prevState = hook.memoizedState;
			if (prevState !== null) {
				if (nextDeps !== null) {
					var prevDeps = prevState[1];
					if (areHookInputsEqual(nextDeps, prevDeps)) return prevState[0];
				}
			}
			hook.memoizedState = [callback, nextDeps];
			return callback;
		}
		function mountMemo(nextCreate, deps) {
			var hook = mountWorkInProgressHook();
			var nextDeps = deps === undefined ? null : deps;
			var nextValue = nextCreate();
			hook.memoizedState = [nextValue, nextDeps];
			return nextValue;
		}
		function updateMemo(nextCreate, deps) {
			var hook = updateWorkInProgressHook();
			var nextDeps = deps === undefined ? null : deps;
			var prevState = hook.memoizedState;
			if (prevState !== null) {
				if (nextDeps !== null) {
					var prevDeps = prevState[1];
					if (areHookInputsEqual(nextDeps, prevDeps)) return prevState[0];
				}
			}
			var nextValue = nextCreate();
			hook.memoizedState = [nextValue, nextDeps];
			return nextValue;
		}
		function mountDeferredValue(value) {
			var hook = mountWorkInProgressHook();
			hook.memoizedState = value;
			return value;
		}
		function updateDeferredValue(value) {
			var hook = updateWorkInProgressHook();
			var resolvedCurrentHook = currentHook;
			var prevValue = resolvedCurrentHook.memoizedState;
			return updateDeferredValueImpl(hook, prevValue, value);
		}
		function rerenderDeferredValue(value) {
			var hook = updateWorkInProgressHook();
			if (currentHook === null) {
				hook.memoizedState = value;
				return value;
			} else {
				var prevValue = currentHook.memoizedState;
				return updateDeferredValueImpl(hook, prevValue, value);
			}
		}
		function updateDeferredValueImpl(hook, prevValue, value) {
			var shouldDeferValue = !includesOnlyNonUrgentLanes(renderLanes);
			if (shouldDeferValue) {
				if (!objectIs(value, prevValue)) {
					var deferredLane = claimNextTransitionLane();
					currentlyRenderingFiber$1.lanes = mergeLanes(currentlyRenderingFiber$1.lanes, deferredLane);
					markSkippedUpdateLanes(deferredLane);
					hook.baseState = true;
				}
				return prevValue;
			} else {
				if (hook.baseState) {
					hook.baseState = false;
					markWorkInProgressReceivedUpdate();
				}
				hook.memoizedState = value;
				return value;
			}
		}
		function startTransition(setPending, callback, options$1) {
			var previousPriority = getCurrentUpdatePriority();
			setCurrentUpdatePriority(higherEventPriority(previousPriority, ContinuousEventPriority));
			setPending(true);
			var prevTransition = ReactCurrentBatchConfig$2.transition;
			ReactCurrentBatchConfig$2.transition = {};
			var currentTransition = ReactCurrentBatchConfig$2.transition;
			ReactCurrentBatchConfig$2.transition._updatedFibers = new Set();
			try {
				setPending(false);
				callback();
			} finally {
				setCurrentUpdatePriority(previousPriority);
				ReactCurrentBatchConfig$2.transition = prevTransition;
				if (prevTransition === null && currentTransition._updatedFibers) {
					var updatedFibersCount = currentTransition._updatedFibers.size;
					if (updatedFibersCount > 10) warn("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table.");
					currentTransition._updatedFibers.clear();
				}
			}
		}
		function mountTransition() {
			var _mountState = mountState(false), isPending = _mountState[0], setPending = _mountState[1];
			var start = startTransition.bind(null, setPending);
			var hook = mountWorkInProgressHook();
			hook.memoizedState = start;
			return [isPending, start];
		}
		function updateTransition() {
			var _updateState = updateState(), isPending = _updateState[0];
			var hook = updateWorkInProgressHook();
			var start = hook.memoizedState;
			return [isPending, start];
		}
		function rerenderTransition() {
			var _rerenderState = rerenderState(), isPending = _rerenderState[0];
			var hook = updateWorkInProgressHook();
			var start = hook.memoizedState;
			return [isPending, start];
		}
		var isUpdatingOpaqueValueInRenderPhase = false;
		function getIsUpdatingOpaqueValueInRenderPhaseInDEV() {
			return isUpdatingOpaqueValueInRenderPhase;
		}
		function mountId() {
			var hook = mountWorkInProgressHook();
			var root$1 = getWorkInProgressRoot();
			var identifierPrefix = root$1.identifierPrefix;
			var id;
			if (getIsHydrating()) {
				var treeId = getTreeId();
				id = ":" + identifierPrefix + "R" + treeId;
				var localId = localIdCounter++;
				if (localId > 0) id += "H" + localId.toString(32);
				id += ":";
			} else {
				var globalClientId = globalClientIdCounter++;
				id = ":" + identifierPrefix + "r" + globalClientId.toString(32) + ":";
			}
			hook.memoizedState = id;
			return id;
		}
		function updateId() {
			var hook = updateWorkInProgressHook();
			var id = hook.memoizedState;
			return id;
		}
		function dispatchReducerAction(fiber, queue, action) {
			if (typeof arguments[3] === "function") error("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
			var lane = requestUpdateLane(fiber);
			var update = {
				lane,
				action,
				hasEagerState: false,
				eagerState: null,
				next: null
			};
			if (isRenderPhaseUpdate(fiber)) enqueueRenderPhaseUpdate(queue, update);
else {
				var root$1 = enqueueConcurrentHookUpdate(fiber, queue, update, lane);
				if (root$1 !== null) {
					var eventTime = requestEventTime();
					scheduleUpdateOnFiber(root$1, fiber, lane, eventTime);
					entangleTransitionUpdate(root$1, queue, lane);
				}
			}
			markUpdateInDevTools(fiber, lane);
		}
		function dispatchSetState(fiber, queue, action) {
			if (typeof arguments[3] === "function") error("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
			var lane = requestUpdateLane(fiber);
			var update = {
				lane,
				action,
				hasEagerState: false,
				eagerState: null,
				next: null
			};
			if (isRenderPhaseUpdate(fiber)) enqueueRenderPhaseUpdate(queue, update);
else {
				var alternate = fiber.alternate;
				if (fiber.lanes === NoLanes && (alternate === null || alternate.lanes === NoLanes)) {
					var lastRenderedReducer = queue.lastRenderedReducer;
					if (lastRenderedReducer !== null) {
						var prevDispatcher;
						{
							prevDispatcher = ReactCurrentDispatcher$1.current;
							ReactCurrentDispatcher$1.current = InvalidNestedHooksDispatcherOnUpdateInDEV;
						}
						try {
							var currentState = queue.lastRenderedState;
							var eagerState = lastRenderedReducer(currentState, action);
							update.hasEagerState = true;
							update.eagerState = eagerState;
							if (objectIs(eagerState, currentState)) {
								enqueueConcurrentHookUpdateAndEagerlyBailout(fiber, queue, update, lane);
								return;
							}
						} catch (error$1) {} finally {
							ReactCurrentDispatcher$1.current = prevDispatcher;
						}
					}
				}
				var root$1 = enqueueConcurrentHookUpdate(fiber, queue, update, lane);
				if (root$1 !== null) {
					var eventTime = requestEventTime();
					scheduleUpdateOnFiber(root$1, fiber, lane, eventTime);
					entangleTransitionUpdate(root$1, queue, lane);
				}
			}
			markUpdateInDevTools(fiber, lane);
		}
		function isRenderPhaseUpdate(fiber) {
			var alternate = fiber.alternate;
			return fiber === currentlyRenderingFiber$1 || alternate !== null && alternate === currentlyRenderingFiber$1;
		}
		function enqueueRenderPhaseUpdate(queue, update) {
			didScheduleRenderPhaseUpdateDuringThisPass = didScheduleRenderPhaseUpdate = true;
			var pending = queue.pending;
			if (pending === null) update.next = update;
else {
				update.next = pending.next;
				pending.next = update;
			}
			queue.pending = update;
		}
		function entangleTransitionUpdate(root$1, queue, lane) {
			if (isTransitionLane(lane)) {
				var queueLanes = queue.lanes;
				queueLanes = intersectLanes(queueLanes, root$1.pendingLanes);
				var newQueueLanes = mergeLanes(queueLanes, lane);
				queue.lanes = newQueueLanes;
				markRootEntangled(root$1, newQueueLanes);
			}
		}
		function markUpdateInDevTools(fiber, lane, action) {
			markStateUpdateScheduled(fiber, lane);
		}
		var ContextOnlyDispatcher = {
			readContext,
			useCallback: throwInvalidHookError,
			useContext: throwInvalidHookError,
			useEffect: throwInvalidHookError,
			useImperativeHandle: throwInvalidHookError,
			useInsertionEffect: throwInvalidHookError,
			useLayoutEffect: throwInvalidHookError,
			useMemo: throwInvalidHookError,
			useReducer: throwInvalidHookError,
			useRef: throwInvalidHookError,
			useState: throwInvalidHookError,
			useDebugValue: throwInvalidHookError,
			useDeferredValue: throwInvalidHookError,
			useTransition: throwInvalidHookError,
			useMutableSource: throwInvalidHookError,
			useSyncExternalStore: throwInvalidHookError,
			useId: throwInvalidHookError,
			unstable_isNewReconciler: enableNewReconciler
		};
		var HooksDispatcherOnMountInDEV = null;
		var HooksDispatcherOnMountWithHookTypesInDEV = null;
		var HooksDispatcherOnUpdateInDEV = null;
		var HooksDispatcherOnRerenderInDEV = null;
		var InvalidNestedHooksDispatcherOnMountInDEV = null;
		var InvalidNestedHooksDispatcherOnUpdateInDEV = null;
		var InvalidNestedHooksDispatcherOnRerenderInDEV = null;
		{
			var warnInvalidContextAccess = function() {
				error("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
			};
			var warnInvalidHookAccess = function() {
				error("Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://reactjs.org/link/rules-of-hooks");
			};
			HooksDispatcherOnMountInDEV = {
				readContext: function(context) {
					return readContext(context);
				},
				useCallback: function(callback, deps) {
					currentHookNameInDev = "useCallback";
					mountHookTypesDev();
					checkDepsAreArrayDev(deps);
					return mountCallback(callback, deps);
				},
				useContext: function(context) {
					currentHookNameInDev = "useContext";
					mountHookTypesDev();
					return readContext(context);
				},
				useEffect: function(create, deps) {
					currentHookNameInDev = "useEffect";
					mountHookTypesDev();
					checkDepsAreArrayDev(deps);
					return mountEffect(create, deps);
				},
				useImperativeHandle: function(ref, create, deps) {
					currentHookNameInDev = "useImperativeHandle";
					mountHookTypesDev();
					checkDepsAreArrayDev(deps);
					return mountImperativeHandle(ref, create, deps);
				},
				useInsertionEffect: function(create, deps) {
					currentHookNameInDev = "useInsertionEffect";
					mountHookTypesDev();
					checkDepsAreArrayDev(deps);
					return mountInsertionEffect(create, deps);
				},
				useLayoutEffect: function(create, deps) {
					currentHookNameInDev = "useLayoutEffect";
					mountHookTypesDev();
					checkDepsAreArrayDev(deps);
					return mountLayoutEffect(create, deps);
				},
				useMemo: function(create, deps) {
					currentHookNameInDev = "useMemo";
					mountHookTypesDev();
					checkDepsAreArrayDev(deps);
					var prevDispatcher = ReactCurrentDispatcher$1.current;
					ReactCurrentDispatcher$1.current = InvalidNestedHooksDispatcherOnMountInDEV;
					try {
						return mountMemo(create, deps);
					} finally {
						ReactCurrentDispatcher$1.current = prevDispatcher;
					}
				},
				useReducer: function(reducer, initialArg, init) {
					currentHookNameInDev = "useReducer";
					mountHookTypesDev();
					var prevDispatcher = ReactCurrentDispatcher$1.current;
					ReactCurrentDispatcher$1.current = InvalidNestedHooksDispatcherOnMountInDEV;
					try {
						return mountReducer(reducer, initialArg, init);
					} finally {
						ReactCurrentDispatcher$1.current = prevDispatcher;
					}
				},
				useRef: function(initialValue) {
					currentHookNameInDev = "useRef";
					mountHookTypesDev();
					return mountRef(initialValue);
				},
				useState: function(initialState) {
					currentHookNameInDev = "useState";
					mountHookTypesDev();
					var prevDispatcher = ReactCurrentDispatcher$1.current;
					ReactCurrentDispatcher$1.current = InvalidNestedHooksDispatcherOnMountInDEV;
					try {
						return mountState(initialState);
					} finally {
						ReactCurrentDispatcher$1.current = prevDispatcher;
					}
				},
				useDebugValue: function(value, formatterFn) {
					currentHookNameInDev = "useDebugValue";
					mountHookTypesDev();
					return mountDebugValue();
				},
				useDeferredValue: function(value) {
					currentHookNameInDev = "useDeferredValue";
					mountHookTypesDev();
					return mountDeferredValue(value);
				},
				useTransition: function() {
					currentHookNameInDev = "useTransition";
					mountHookTypesDev();
					return mountTransition();
				},
				useMutableSource: function(source, getSnapshot, subscribe) {
					currentHookNameInDev = "useMutableSource";
					mountHookTypesDev();
					return mountMutableSource();
				},
				useSyncExternalStore: function(subscribe, getSnapshot, getServerSnapshot) {
					currentHookNameInDev = "useSyncExternalStore";
					mountHookTypesDev();
					return mountSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
				},
				useId: function() {
					currentHookNameInDev = "useId";
					mountHookTypesDev();
					return mountId();
				},
				unstable_isNewReconciler: enableNewReconciler
			};
			HooksDispatcherOnMountWithHookTypesInDEV = {
				readContext: function(context) {
					return readContext(context);
				},
				useCallback: function(callback, deps) {
					currentHookNameInDev = "useCallback";
					updateHookTypesDev();
					return mountCallback(callback, deps);
				},
				useContext: function(context) {
					currentHookNameInDev = "useContext";
					updateHookTypesDev();
					return readContext(context);
				},
				useEffect: function(create, deps) {
					currentHookNameInDev = "useEffect";
					updateHookTypesDev();
					return mountEffect(create, deps);
				},
				useImperativeHandle: function(ref, create, deps) {
					currentHookNameInDev = "useImperativeHandle";
					updateHookTypesDev();
					return mountImperativeHandle(ref, create, deps);
				},
				useInsertionEffect: function(create, deps) {
					currentHookNameInDev = "useInsertionEffect";
					updateHookTypesDev();
					return mountInsertionEffect(create, deps);
				},
				useLayoutEffect: function(create, deps) {
					currentHookNameInDev = "useLayoutEffect";
					updateHookTypesDev();
					return mountLayoutEffect(create, deps);
				},
				useMemo: function(create, deps) {
					currentHookNameInDev = "useMemo";
					updateHookTypesDev();
					var prevDispatcher = ReactCurrentDispatcher$1.current;
					ReactCurrentDispatcher$1.current = InvalidNestedHooksDispatcherOnMountInDEV;
					try {
						return mountMemo(create, deps);
					} finally {
						ReactCurrentDispatcher$1.current = prevDispatcher;
					}
				},
				useReducer: function(reducer, initialArg, init) {
					currentHookNameInDev = "useReducer";
					updateHookTypesDev();
					var prevDispatcher = ReactCurrentDispatcher$1.current;
					ReactCurrentDispatcher$1.current = InvalidNestedHooksDispatcherOnMountInDEV;
					try {
						return mountReducer(reducer, initialArg, init);
					} finally {
						ReactCurrentDispatcher$1.current = prevDispatcher;
					}
				},
				useRef: function(initialValue) {
					currentHookNameInDev = "useRef";
					updateHookTypesDev();
					return mountRef(initialValue);
				},
				useState: function(initialState) {
					currentHookNameInDev = "useState";
					updateHookTypesDev();
					var prevDispatcher = ReactCurrentDispatcher$1.current;
					ReactCurrentDispatcher$1.current = InvalidNestedHooksDispatcherOnMountInDEV;
					try {
						return mountState(initialState);
					} finally {
						ReactCurrentDispatcher$1.current = prevDispatcher;
					}
				},
				useDebugValue: function(value, formatterFn) {
					currentHookNameInDev = "useDebugValue";
					updateHookTypesDev();
					return mountDebugValue();
				},
				useDeferredValue: function(value) {
					currentHookNameInDev = "useDeferredValue";
					updateHookTypesDev();
					return mountDeferredValue(value);
				},
				useTransition: function() {
					currentHookNameInDev = "useTransition";
					updateHookTypesDev();
					return mountTransition();
				},
				useMutableSource: function(source, getSnapshot, subscribe) {
					currentHookNameInDev = "useMutableSource";
					updateHookTypesDev();
					return mountMutableSource();
				},
				useSyncExternalStore: function(subscribe, getSnapshot, getServerSnapshot) {
					currentHookNameInDev = "useSyncExternalStore";
					updateHookTypesDev();
					return mountSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
				},
				useId: function() {
					currentHookNameInDev = "useId";
					updateHookTypesDev();
					return mountId();
				},
				unstable_isNewReconciler: enableNewReconciler
			};
			HooksDispatcherOnUpdateInDEV = {
				readContext: function(context) {
					return readContext(context);
				},
				useCallback: function(callback, deps) {
					currentHookNameInDev = "useCallback";
					updateHookTypesDev();
					return updateCallback(callback, deps);
				},
				useContext: function(context) {
					currentHookNameInDev = "useContext";
					updateHookTypesDev();
					return readContext(context);
				},
				useEffect: function(create, deps) {
					currentHookNameInDev = "useEffect";
					updateHookTypesDev();
					return updateEffect(create, deps);
				},
				useImperativeHandle: function(ref, create, deps) {
					currentHookNameInDev = "useImperativeHandle";
					updateHookTypesDev();
					return updateImperativeHandle(ref, create, deps);
				},
				useInsertionEffect: function(create, deps) {
					currentHookNameInDev = "useInsertionEffect";
					updateHookTypesDev();
					return updateInsertionEffect(create, deps);
				},
				useLayoutEffect: function(create, deps) {
					currentHookNameInDev = "useLayoutEffect";
					updateHookTypesDev();
					return updateLayoutEffect(create, deps);
				},
				useMemo: function(create, deps) {
					currentHookNameInDev = "useMemo";
					updateHookTypesDev();
					var prevDispatcher = ReactCurrentDispatcher$1.current;
					ReactCurrentDispatcher$1.current = InvalidNestedHooksDispatcherOnUpdateInDEV;
					try {
						return updateMemo(create, deps);
					} finally {
						ReactCurrentDispatcher$1.current = prevDispatcher;
					}
				},
				useReducer: function(reducer, initialArg, init) {
					currentHookNameInDev = "useReducer";
					updateHookTypesDev();
					var prevDispatcher = ReactCurrentDispatcher$1.current;
					ReactCurrentDispatcher$1.current = InvalidNestedHooksDispatcherOnUpdateInDEV;
					try {
						return updateReducer(reducer, initialArg, init);
					} finally {
						ReactCurrentDispatcher$1.current = prevDispatcher;
					}
				},
				useRef: function(initialValue) {
					currentHookNameInDev = "useRef";
					updateHookTypesDev();
					return updateRef();
				},
				useState: function(initialState) {
					currentHookNameInDev = "useState";
					updateHookTypesDev();
					var prevDispatcher = ReactCurrentDispatcher$1.current;
					ReactCurrentDispatcher$1.current = InvalidNestedHooksDispatcherOnUpdateInDEV;
					try {
						return updateState(initialState);
					} finally {
						ReactCurrentDispatcher$1.current = prevDispatcher;
					}
				},
				useDebugValue: function(value, formatterFn) {
					currentHookNameInDev = "useDebugValue";
					updateHookTypesDev();
					return updateDebugValue();
				},
				useDeferredValue: function(value) {
					currentHookNameInDev = "useDeferredValue";
					updateHookTypesDev();
					return updateDeferredValue(value);
				},
				useTransition: function() {
					currentHookNameInDev = "useTransition";
					updateHookTypesDev();
					return updateTransition();
				},
				useMutableSource: function(source, getSnapshot, subscribe) {
					currentHookNameInDev = "useMutableSource";
					updateHookTypesDev();
					return updateMutableSource();
				},
				useSyncExternalStore: function(subscribe, getSnapshot, getServerSnapshot) {
					currentHookNameInDev = "useSyncExternalStore";
					updateHookTypesDev();
					return updateSyncExternalStore(subscribe, getSnapshot);
				},
				useId: function() {
					currentHookNameInDev = "useId";
					updateHookTypesDev();
					return updateId();
				},
				unstable_isNewReconciler: enableNewReconciler
			};
			HooksDispatcherOnRerenderInDEV = {
				readContext: function(context) {
					return readContext(context);
				},
				useCallback: function(callback, deps) {
					currentHookNameInDev = "useCallback";
					updateHookTypesDev();
					return updateCallback(callback, deps);
				},
				useContext: function(context) {
					currentHookNameInDev = "useContext";
					updateHookTypesDev();
					return readContext(context);
				},
				useEffect: function(create, deps) {
					currentHookNameInDev = "useEffect";
					updateHookTypesDev();
					return updateEffect(create, deps);
				},
				useImperativeHandle: function(ref, create, deps) {
					currentHookNameInDev = "useImperativeHandle";
					updateHookTypesDev();
					return updateImperativeHandle(ref, create, deps);
				},
				useInsertionEffect: function(create, deps) {
					currentHookNameInDev = "useInsertionEffect";
					updateHookTypesDev();
					return updateInsertionEffect(create, deps);
				},
				useLayoutEffect: function(create, deps) {
					currentHookNameInDev = "useLayoutEffect";
					updateHookTypesDev();
					return updateLayoutEffect(create, deps);
				},
				useMemo: function(create, deps) {
					currentHookNameInDev = "useMemo";
					updateHookTypesDev();
					var prevDispatcher = ReactCurrentDispatcher$1.current;
					ReactCurrentDispatcher$1.current = InvalidNestedHooksDispatcherOnRerenderInDEV;
					try {
						return updateMemo(create, deps);
					} finally {
						ReactCurrentDispatcher$1.current = prevDispatcher;
					}
				},
				useReducer: function(reducer, initialArg, init) {
					currentHookNameInDev = "useReducer";
					updateHookTypesDev();
					var prevDispatcher = ReactCurrentDispatcher$1.current;
					ReactCurrentDispatcher$1.current = InvalidNestedHooksDispatcherOnRerenderInDEV;
					try {
						return rerenderReducer(reducer, initialArg, init);
					} finally {
						ReactCurrentDispatcher$1.current = prevDispatcher;
					}
				},
				useRef: function(initialValue) {
					currentHookNameInDev = "useRef";
					updateHookTypesDev();
					return updateRef();
				},
				useState: function(initialState) {
					currentHookNameInDev = "useState";
					updateHookTypesDev();
					var prevDispatcher = ReactCurrentDispatcher$1.current;
					ReactCurrentDispatcher$1.current = InvalidNestedHooksDispatcherOnRerenderInDEV;
					try {
						return rerenderState(initialState);
					} finally {
						ReactCurrentDispatcher$1.current = prevDispatcher;
					}
				},
				useDebugValue: function(value, formatterFn) {
					currentHookNameInDev = "useDebugValue";
					updateHookTypesDev();
					return updateDebugValue();
				},
				useDeferredValue: function(value) {
					currentHookNameInDev = "useDeferredValue";
					updateHookTypesDev();
					return rerenderDeferredValue(value);
				},
				useTransition: function() {
					currentHookNameInDev = "useTransition";
					updateHookTypesDev();
					return rerenderTransition();
				},
				useMutableSource: function(source, getSnapshot, subscribe) {
					currentHookNameInDev = "useMutableSource";
					updateHookTypesDev();
					return updateMutableSource();
				},
				useSyncExternalStore: function(subscribe, getSnapshot, getServerSnapshot) {
					currentHookNameInDev = "useSyncExternalStore";
					updateHookTypesDev();
					return updateSyncExternalStore(subscribe, getSnapshot);
				},
				useId: function() {
					currentHookNameInDev = "useId";
					updateHookTypesDev();
					return updateId();
				},
				unstable_isNewReconciler: enableNewReconciler
			};
			InvalidNestedHooksDispatcherOnMountInDEV = {
				readContext: function(context) {
					warnInvalidContextAccess();
					return readContext(context);
				},
				useCallback: function(callback, deps) {
					currentHookNameInDev = "useCallback";
					warnInvalidHookAccess();
					mountHookTypesDev();
					return mountCallback(callback, deps);
				},
				useContext: function(context) {
					currentHookNameInDev = "useContext";
					warnInvalidHookAccess();
					mountHookTypesDev();
					return readContext(context);
				},
				useEffect: function(create, deps) {
					currentHookNameInDev = "useEffect";
					warnInvalidHookAccess();
					mountHookTypesDev();
					return mountEffect(create, deps);
				},
				useImperativeHandle: function(ref, create, deps) {
					currentHookNameInDev = "useImperativeHandle";
					warnInvalidHookAccess();
					mountHookTypesDev();
					return mountImperativeHandle(ref, create, deps);
				},
				useInsertionEffect: function(create, deps) {
					currentHookNameInDev = "useInsertionEffect";
					warnInvalidHookAccess();
					mountHookTypesDev();
					return mountInsertionEffect(create, deps);
				},
				useLayoutEffect: function(create, deps) {
					currentHookNameInDev = "useLayoutEffect";
					warnInvalidHookAccess();
					mountHookTypesDev();
					return mountLayoutEffect(create, deps);
				},
				useMemo: function(create, deps) {
					currentHookNameInDev = "useMemo";
					warnInvalidHookAccess();
					mountHookTypesDev();
					var prevDispatcher = ReactCurrentDispatcher$1.current;
					ReactCurrentDispatcher$1.current = InvalidNestedHooksDispatcherOnMountInDEV;
					try {
						return mountMemo(create, deps);
					} finally {
						ReactCurrentDispatcher$1.current = prevDispatcher;
					}
				},
				useReducer: function(reducer, initialArg, init) {
					currentHookNameInDev = "useReducer";
					warnInvalidHookAccess();
					mountHookTypesDev();
					var prevDispatcher = ReactCurrentDispatcher$1.current;
					ReactCurrentDispatcher$1.current = InvalidNestedHooksDispatcherOnMountInDEV;
					try {
						return mountReducer(reducer, initialArg, init);
					} finally {
						ReactCurrentDispatcher$1.current = prevDispatcher;
					}
				},
				useRef: function(initialValue) {
					currentHookNameInDev = "useRef";
					warnInvalidHookAccess();
					mountHookTypesDev();
					return mountRef(initialValue);
				},
				useState: function(initialState) {
					currentHookNameInDev = "useState";
					warnInvalidHookAccess();
					mountHookTypesDev();
					var prevDispatcher = ReactCurrentDispatcher$1.current;
					ReactCurrentDispatcher$1.current = InvalidNestedHooksDispatcherOnMountInDEV;
					try {
						return mountState(initialState);
					} finally {
						ReactCurrentDispatcher$1.current = prevDispatcher;
					}
				},
				useDebugValue: function(value, formatterFn) {
					currentHookNameInDev = "useDebugValue";
					warnInvalidHookAccess();
					mountHookTypesDev();
					return mountDebugValue();
				},
				useDeferredValue: function(value) {
					currentHookNameInDev = "useDeferredValue";
					warnInvalidHookAccess();
					mountHookTypesDev();
					return mountDeferredValue(value);
				},
				useTransition: function() {
					currentHookNameInDev = "useTransition";
					warnInvalidHookAccess();
					mountHookTypesDev();
					return mountTransition();
				},
				useMutableSource: function(source, getSnapshot, subscribe) {
					currentHookNameInDev = "useMutableSource";
					warnInvalidHookAccess();
					mountHookTypesDev();
					return mountMutableSource();
				},
				useSyncExternalStore: function(subscribe, getSnapshot, getServerSnapshot) {
					currentHookNameInDev = "useSyncExternalStore";
					warnInvalidHookAccess();
					mountHookTypesDev();
					return mountSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
				},
				useId: function() {
					currentHookNameInDev = "useId";
					warnInvalidHookAccess();
					mountHookTypesDev();
					return mountId();
				},
				unstable_isNewReconciler: enableNewReconciler
			};
			InvalidNestedHooksDispatcherOnUpdateInDEV = {
				readContext: function(context) {
					warnInvalidContextAccess();
					return readContext(context);
				},
				useCallback: function(callback, deps) {
					currentHookNameInDev = "useCallback";
					warnInvalidHookAccess();
					updateHookTypesDev();
					return updateCallback(callback, deps);
				},
				useContext: function(context) {
					currentHookNameInDev = "useContext";
					warnInvalidHookAccess();
					updateHookTypesDev();
					return readContext(context);
				},
				useEffect: function(create, deps) {
					currentHookNameInDev = "useEffect";
					warnInvalidHookAccess();
					updateHookTypesDev();
					return updateEffect(create, deps);
				},
				useImperativeHandle: function(ref, create, deps) {
					currentHookNameInDev = "useImperativeHandle";
					warnInvalidHookAccess();
					updateHookTypesDev();
					return updateImperativeHandle(ref, create, deps);
				},
				useInsertionEffect: function(create, deps) {
					currentHookNameInDev = "useInsertionEffect";
					warnInvalidHookAccess();
					updateHookTypesDev();
					return updateInsertionEffect(create, deps);
				},
				useLayoutEffect: function(create, deps) {
					currentHookNameInDev = "useLayoutEffect";
					warnInvalidHookAccess();
					updateHookTypesDev();
					return updateLayoutEffect(create, deps);
				},
				useMemo: function(create, deps) {
					currentHookNameInDev = "useMemo";
					warnInvalidHookAccess();
					updateHookTypesDev();
					var prevDispatcher = ReactCurrentDispatcher$1.current;
					ReactCurrentDispatcher$1.current = InvalidNestedHooksDispatcherOnUpdateInDEV;
					try {
						return updateMemo(create, deps);
					} finally {
						ReactCurrentDispatcher$1.current = prevDispatcher;
					}
				},
				useReducer: function(reducer, initialArg, init) {
					currentHookNameInDev = "useReducer";
					warnInvalidHookAccess();
					updateHookTypesDev();
					var prevDispatcher = ReactCurrentDispatcher$1.current;
					ReactCurrentDispatcher$1.current = InvalidNestedHooksDispatcherOnUpdateInDEV;
					try {
						return updateReducer(reducer, initialArg, init);
					} finally {
						ReactCurrentDispatcher$1.current = prevDispatcher;
					}
				},
				useRef: function(initialValue) {
					currentHookNameInDev = "useRef";
					warnInvalidHookAccess();
					updateHookTypesDev();
					return updateRef();
				},
				useState: function(initialState) {
					currentHookNameInDev = "useState";
					warnInvalidHookAccess();
					updateHookTypesDev();
					var prevDispatcher = ReactCurrentDispatcher$1.current;
					ReactCurrentDispatcher$1.current = InvalidNestedHooksDispatcherOnUpdateInDEV;
					try {
						return updateState(initialState);
					} finally {
						ReactCurrentDispatcher$1.current = prevDispatcher;
					}
				},
				useDebugValue: function(value, formatterFn) {
					currentHookNameInDev = "useDebugValue";
					warnInvalidHookAccess();
					updateHookTypesDev();
					return updateDebugValue();
				},
				useDeferredValue: function(value) {
					currentHookNameInDev = "useDeferredValue";
					warnInvalidHookAccess();
					updateHookTypesDev();
					return updateDeferredValue(value);
				},
				useTransition: function() {
					currentHookNameInDev = "useTransition";
					warnInvalidHookAccess();
					updateHookTypesDev();
					return updateTransition();
				},
				useMutableSource: function(source, getSnapshot, subscribe) {
					currentHookNameInDev = "useMutableSource";
					warnInvalidHookAccess();
					updateHookTypesDev();
					return updateMutableSource();
				},
				useSyncExternalStore: function(subscribe, getSnapshot, getServerSnapshot) {
					currentHookNameInDev = "useSyncExternalStore";
					warnInvalidHookAccess();
					updateHookTypesDev();
					return updateSyncExternalStore(subscribe, getSnapshot);
				},
				useId: function() {
					currentHookNameInDev = "useId";
					warnInvalidHookAccess();
					updateHookTypesDev();
					return updateId();
				},
				unstable_isNewReconciler: enableNewReconciler
			};
			InvalidNestedHooksDispatcherOnRerenderInDEV = {
				readContext: function(context) {
					warnInvalidContextAccess();
					return readContext(context);
				},
				useCallback: function(callback, deps) {
					currentHookNameInDev = "useCallback";
					warnInvalidHookAccess();
					updateHookTypesDev();
					return updateCallback(callback, deps);
				},
				useContext: function(context) {
					currentHookNameInDev = "useContext";
					warnInvalidHookAccess();
					updateHookTypesDev();
					return readContext(context);
				},
				useEffect: function(create, deps) {
					currentHookNameInDev = "useEffect";
					warnInvalidHookAccess();
					updateHookTypesDev();
					return updateEffect(create, deps);
				},
				useImperativeHandle: function(ref, create, deps) {
					currentHookNameInDev = "useImperativeHandle";
					warnInvalidHookAccess();
					updateHookTypesDev();
					return updateImperativeHandle(ref, create, deps);
				},
				useInsertionEffect: function(create, deps) {
					currentHookNameInDev = "useInsertionEffect";
					warnInvalidHookAccess();
					updateHookTypesDev();
					return updateInsertionEffect(create, deps);
				},
				useLayoutEffect: function(create, deps) {
					currentHookNameInDev = "useLayoutEffect";
					warnInvalidHookAccess();
					updateHookTypesDev();
					return updateLayoutEffect(create, deps);
				},
				useMemo: function(create, deps) {
					currentHookNameInDev = "useMemo";
					warnInvalidHookAccess();
					updateHookTypesDev();
					var prevDispatcher = ReactCurrentDispatcher$1.current;
					ReactCurrentDispatcher$1.current = InvalidNestedHooksDispatcherOnUpdateInDEV;
					try {
						return updateMemo(create, deps);
					} finally {
						ReactCurrentDispatcher$1.current = prevDispatcher;
					}
				},
				useReducer: function(reducer, initialArg, init) {
					currentHookNameInDev = "useReducer";
					warnInvalidHookAccess();
					updateHookTypesDev();
					var prevDispatcher = ReactCurrentDispatcher$1.current;
					ReactCurrentDispatcher$1.current = InvalidNestedHooksDispatcherOnUpdateInDEV;
					try {
						return rerenderReducer(reducer, initialArg, init);
					} finally {
						ReactCurrentDispatcher$1.current = prevDispatcher;
					}
				},
				useRef: function(initialValue) {
					currentHookNameInDev = "useRef";
					warnInvalidHookAccess();
					updateHookTypesDev();
					return updateRef();
				},
				useState: function(initialState) {
					currentHookNameInDev = "useState";
					warnInvalidHookAccess();
					updateHookTypesDev();
					var prevDispatcher = ReactCurrentDispatcher$1.current;
					ReactCurrentDispatcher$1.current = InvalidNestedHooksDispatcherOnUpdateInDEV;
					try {
						return rerenderState(initialState);
					} finally {
						ReactCurrentDispatcher$1.current = prevDispatcher;
					}
				},
				useDebugValue: function(value, formatterFn) {
					currentHookNameInDev = "useDebugValue";
					warnInvalidHookAccess();
					updateHookTypesDev();
					return updateDebugValue();
				},
				useDeferredValue: function(value) {
					currentHookNameInDev = "useDeferredValue";
					warnInvalidHookAccess();
					updateHookTypesDev();
					return rerenderDeferredValue(value);
				},
				useTransition: function() {
					currentHookNameInDev = "useTransition";
					warnInvalidHookAccess();
					updateHookTypesDev();
					return rerenderTransition();
				},
				useMutableSource: function(source, getSnapshot, subscribe) {
					currentHookNameInDev = "useMutableSource";
					warnInvalidHookAccess();
					updateHookTypesDev();
					return updateMutableSource();
				},
				useSyncExternalStore: function(subscribe, getSnapshot, getServerSnapshot) {
					currentHookNameInDev = "useSyncExternalStore";
					warnInvalidHookAccess();
					updateHookTypesDev();
					return updateSyncExternalStore(subscribe, getSnapshot);
				},
				useId: function() {
					currentHookNameInDev = "useId";
					warnInvalidHookAccess();
					updateHookTypesDev();
					return updateId();
				},
				unstable_isNewReconciler: enableNewReconciler
			};
		}
		var now$1 = Scheduler.unstable_now;
		var commitTime = 0;
		var layoutEffectStartTime = -1;
		var profilerStartTime = -1;
		var passiveEffectStartTime = -1;
		/**
		* Tracks whether the current update was a nested/cascading update (scheduled from a layout effect).
		*
		* The overall sequence is:
		*   1. render
		*   2. commit (and call `onRender`, `onCommit`)
		*   3. check for nested updates
		*   4. flush passive effects (and call `onPostCommit`)
		*
		* Nested updates are identified in step 3 above,
		* but step 4 still applies to the work that was just committed.
		* We use two flags to track nested updates then:
		* one tracks whether the upcoming update is a nested update,
		* and the other tracks whether the current update was a nested update.
		* The first value gets synced to the second at the start of the render phase.
		*/
		var currentUpdateIsNested = false;
		var nestedUpdateScheduled = false;
		function isCurrentUpdateNested() {
			return currentUpdateIsNested;
		}
		function markNestedUpdateScheduled() {
			nestedUpdateScheduled = true;
		}
		function resetNestedUpdateFlag() {
			{
				currentUpdateIsNested = false;
				nestedUpdateScheduled = false;
			}
		}
		function syncNestedUpdateFlag() {
			{
				currentUpdateIsNested = nestedUpdateScheduled;
				nestedUpdateScheduled = false;
			}
		}
		function getCommitTime() {
			return commitTime;
		}
		function recordCommitTime() {
			commitTime = now$1();
		}
		function startProfilerTimer(fiber) {
			profilerStartTime = now$1();
			if (fiber.actualStartTime < 0) fiber.actualStartTime = now$1();
		}
		function stopProfilerTimerIfRunning(fiber) {
			profilerStartTime = -1;
		}
		function stopProfilerTimerIfRunningAndRecordDelta(fiber, overrideBaseTime) {
			if (profilerStartTime >= 0) {
				var elapsedTime = now$1() - profilerStartTime;
				fiber.actualDuration += elapsedTime;
				if (overrideBaseTime) fiber.selfBaseDuration = elapsedTime;
				profilerStartTime = -1;
			}
		}
		function recordLayoutEffectDuration(fiber) {
			if (layoutEffectStartTime >= 0) {
				var elapsedTime = now$1() - layoutEffectStartTime;
				layoutEffectStartTime = -1;
				var parentFiber = fiber.return;
				while (parentFiber !== null) {
					switch (parentFiber.tag) {
						case HostRoot:
							var root$1 = parentFiber.stateNode;
							root$1.effectDuration += elapsedTime;
							return;
						case Profiler:
							var parentStateNode = parentFiber.stateNode;
							parentStateNode.effectDuration += elapsedTime;
							return;
					}
					parentFiber = parentFiber.return;
				}
			}
		}
		function recordPassiveEffectDuration(fiber) {
			if (passiveEffectStartTime >= 0) {
				var elapsedTime = now$1() - passiveEffectStartTime;
				passiveEffectStartTime = -1;
				var parentFiber = fiber.return;
				while (parentFiber !== null) {
					switch (parentFiber.tag) {
						case HostRoot:
							var root$1 = parentFiber.stateNode;
							if (root$1 !== null) root$1.passiveEffectDuration += elapsedTime;
							return;
						case Profiler:
							var parentStateNode = parentFiber.stateNode;
							if (parentStateNode !== null) parentStateNode.passiveEffectDuration += elapsedTime;
							return;
					}
					parentFiber = parentFiber.return;
				}
			}
		}
		function startLayoutEffectTimer() {
			layoutEffectStartTime = now$1();
		}
		function startPassiveEffectTimer() {
			passiveEffectStartTime = now$1();
		}
		function transferActualDuration(fiber) {
			var child = fiber.child;
			while (child) {
				fiber.actualDuration += child.actualDuration;
				child = child.sibling;
			}
		}
		function resolveDefaultProps(Component, baseProps) {
			if (Component && Component.defaultProps) {
				var props = assign({}, baseProps);
				var defaultProps = Component.defaultProps;
				for (var propName in defaultProps) if (props[propName] === undefined) props[propName] = defaultProps[propName];
				return props;
			}
			return baseProps;
		}
		var fakeInternalInstance = {};
		var didWarnAboutStateAssignmentForComponent;
		var didWarnAboutUninitializedState;
		var didWarnAboutGetSnapshotBeforeUpdateWithoutDidUpdate;
		var didWarnAboutLegacyLifecyclesAndDerivedState;
		var didWarnAboutUndefinedDerivedState;
		var warnOnUndefinedDerivedState;
		var warnOnInvalidCallback;
		var didWarnAboutDirectlyAssigningPropsToState;
		var didWarnAboutContextTypeAndContextTypes;
		var didWarnAboutInvalidateContextType;
		var didWarnAboutLegacyContext$1;
		{
			didWarnAboutStateAssignmentForComponent = new Set();
			didWarnAboutUninitializedState = new Set();
			didWarnAboutGetSnapshotBeforeUpdateWithoutDidUpdate = new Set();
			didWarnAboutLegacyLifecyclesAndDerivedState = new Set();
			didWarnAboutDirectlyAssigningPropsToState = new Set();
			didWarnAboutUndefinedDerivedState = new Set();
			didWarnAboutContextTypeAndContextTypes = new Set();
			didWarnAboutInvalidateContextType = new Set();
			didWarnAboutLegacyContext$1 = new Set();
			var didWarnOnInvalidCallback = new Set();
			warnOnInvalidCallback = function(callback, callerName) {
				if (callback === null || typeof callback === "function") return;
				var key = callerName + "_" + callback;
				if (!didWarnOnInvalidCallback.has(key)) {
					didWarnOnInvalidCallback.add(key);
					error("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", callerName, callback);
				}
			};
			warnOnUndefinedDerivedState = function(type, partialState) {
				if (partialState === undefined) {
					var componentName = getComponentNameFromType(type) || "Component";
					if (!didWarnAboutUndefinedDerivedState.has(componentName)) {
						didWarnAboutUndefinedDerivedState.add(componentName);
						error("%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.", componentName);
					}
				}
			};
			Object.defineProperty(fakeInternalInstance, "_processChildContext", {
				enumerable: false,
				value: function() {
					throw new Error("_processChildContext is not available in React 16+. This likely means you have multiple copies of React and are attempting to nest a React 15 tree inside a React 16 tree using unstable_renderSubtreeIntoContainer, which isn't supported. Try to make sure you have only one copy of React (and ideally, switch to ReactDOM.createPortal).");
				}
			});
			Object.freeze(fakeInternalInstance);
		}
		function applyDerivedStateFromProps(workInProgress$1, ctor, getDerivedStateFromProps, nextProps) {
			var prevState = workInProgress$1.memoizedState;
			var partialState = getDerivedStateFromProps(nextProps, prevState);
			{
				if (workInProgress$1.mode & StrictLegacyMode) {
					setIsStrictModeForDevtools(true);
					try {
						partialState = getDerivedStateFromProps(nextProps, prevState);
					} finally {
						setIsStrictModeForDevtools(false);
					}
				}
				warnOnUndefinedDerivedState(ctor, partialState);
			}
			var memoizedState = partialState === null || partialState === undefined ? prevState : assign({}, prevState, partialState);
			workInProgress$1.memoizedState = memoizedState;
			if (workInProgress$1.lanes === NoLanes) {
				var updateQueue = workInProgress$1.updateQueue;
				updateQueue.baseState = memoizedState;
			}
		}
		var classComponentUpdater = {
			isMounted,
			enqueueSetState: function(inst, payload, callback) {
				var fiber = get(inst);
				var eventTime = requestEventTime();
				var lane = requestUpdateLane(fiber);
				var update = createUpdate(eventTime, lane);
				update.payload = payload;
				if (callback !== undefined && callback !== null) {
					warnOnInvalidCallback(callback, "setState");
					update.callback = callback;
				}
				var root$1 = enqueueUpdate(fiber, update, lane);
				if (root$1 !== null) {
					scheduleUpdateOnFiber(root$1, fiber, lane, eventTime);
					entangleTransitions(root$1, fiber, lane);
				}
				markStateUpdateScheduled(fiber, lane);
			},
			enqueueReplaceState: function(inst, payload, callback) {
				var fiber = get(inst);
				var eventTime = requestEventTime();
				var lane = requestUpdateLane(fiber);
				var update = createUpdate(eventTime, lane);
				update.tag = ReplaceState;
				update.payload = payload;
				if (callback !== undefined && callback !== null) {
					warnOnInvalidCallback(callback, "replaceState");
					update.callback = callback;
				}
				var root$1 = enqueueUpdate(fiber, update, lane);
				if (root$1 !== null) {
					scheduleUpdateOnFiber(root$1, fiber, lane, eventTime);
					entangleTransitions(root$1, fiber, lane);
				}
				markStateUpdateScheduled(fiber, lane);
			},
			enqueueForceUpdate: function(inst, callback) {
				var fiber = get(inst);
				var eventTime = requestEventTime();
				var lane = requestUpdateLane(fiber);
				var update = createUpdate(eventTime, lane);
				update.tag = ForceUpdate;
				if (callback !== undefined && callback !== null) {
					warnOnInvalidCallback(callback, "forceUpdate");
					update.callback = callback;
				}
				var root$1 = enqueueUpdate(fiber, update, lane);
				if (root$1 !== null) {
					scheduleUpdateOnFiber(root$1, fiber, lane, eventTime);
					entangleTransitions(root$1, fiber, lane);
				}
				markForceUpdateScheduled(fiber, lane);
			}
		};
		function checkShouldComponentUpdate(workInProgress$1, ctor, oldProps, newProps, oldState, newState, nextContext) {
			var instance = workInProgress$1.stateNode;
			if (typeof instance.shouldComponentUpdate === "function") {
				var shouldUpdate = instance.shouldComponentUpdate(newProps, newState, nextContext);
				{
					if (workInProgress$1.mode & StrictLegacyMode) {
						setIsStrictModeForDevtools(true);
						try {
							shouldUpdate = instance.shouldComponentUpdate(newProps, newState, nextContext);
						} finally {
							setIsStrictModeForDevtools(false);
						}
					}
					if (shouldUpdate === undefined) error("%s.shouldComponentUpdate(): Returned undefined instead of a boolean value. Make sure to return true or false.", getComponentNameFromType(ctor) || "Component");
				}
				return shouldUpdate;
			}
			if (ctor.prototype && ctor.prototype.isPureReactComponent) return !shallowEqual(oldProps, newProps) || !shallowEqual(oldState, newState);
			return true;
		}
		function checkClassInstance(workInProgress$1, ctor, newProps) {
			var instance = workInProgress$1.stateNode;
			{
				var name = getComponentNameFromType(ctor) || "Component";
				var renderPresent = instance.render;
				if (!renderPresent) if (ctor.prototype && typeof ctor.prototype.render === "function") error("%s(...): No `render` method found on the returned component instance: did you accidentally return an object from the constructor?", name);
else error("%s(...): No `render` method found on the returned component instance: you may have forgotten to define `render`.", name);
				if (instance.getInitialState && !instance.getInitialState.isReactClassApproved && !instance.state) error("getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?", name);
				if (instance.getDefaultProps && !instance.getDefaultProps.isReactClassApproved) error("getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.", name);
				if (instance.propTypes) error("propTypes was defined as an instance property on %s. Use a static property to define propTypes instead.", name);
				if (instance.contextType) error("contextType was defined as an instance property on %s. Use a static property to define contextType instead.", name);
				{
					if (ctor.childContextTypes && !didWarnAboutLegacyContext$1.has(ctor) && (workInProgress$1.mode & StrictLegacyMode) === NoMode) {
						didWarnAboutLegacyContext$1.add(ctor);
						error("%s uses the legacy childContextTypes API which is no longer supported and will be removed in the next major release. Use React.createContext() instead\n\n.Learn more about this warning here: https://reactjs.org/link/legacy-context", name);
					}
					if (ctor.contextTypes && !didWarnAboutLegacyContext$1.has(ctor) && (workInProgress$1.mode & StrictLegacyMode) === NoMode) {
						didWarnAboutLegacyContext$1.add(ctor);
						error("%s uses the legacy contextTypes API which is no longer supported and will be removed in the next major release. Use React.createContext() with static contextType instead.\n\nLearn more about this warning here: https://reactjs.org/link/legacy-context", name);
					}
					if (instance.contextTypes) error("contextTypes was defined as an instance property on %s. Use a static property to define contextTypes instead.", name);
					if (ctor.contextType && ctor.contextTypes && !didWarnAboutContextTypeAndContextTypes.has(ctor)) {
						didWarnAboutContextTypeAndContextTypes.add(ctor);
						error("%s declares both contextTypes and contextType static properties. The legacy contextTypes property will be ignored.", name);
					}
				}
				if (typeof instance.componentShouldUpdate === "function") error("%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.", name);
				if (ctor.prototype && ctor.prototype.isPureReactComponent && typeof instance.shouldComponentUpdate !== "undefined") error("%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.", getComponentNameFromType(ctor) || "A pure component");
				if (typeof instance.componentDidUnmount === "function") error("%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?", name);
				if (typeof instance.componentDidReceiveProps === "function") error("%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().", name);
				if (typeof instance.componentWillRecieveProps === "function") error("%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?", name);
				if (typeof instance.UNSAFE_componentWillRecieveProps === "function") error("%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?", name);
				var hasMutatedProps = instance.props !== newProps;
				if (instance.props !== undefined && hasMutatedProps) error("%s(...): When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.", name, name);
				if (instance.defaultProps) error("Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.", name, name);
				if (typeof instance.getSnapshotBeforeUpdate === "function" && typeof instance.componentDidUpdate !== "function" && !didWarnAboutGetSnapshotBeforeUpdateWithoutDidUpdate.has(ctor)) {
					didWarnAboutGetSnapshotBeforeUpdateWithoutDidUpdate.add(ctor);
					error("%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.", getComponentNameFromType(ctor));
				}
				if (typeof instance.getDerivedStateFromProps === "function") error("%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.", name);
				if (typeof instance.getDerivedStateFromError === "function") error("%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.", name);
				if (typeof ctor.getSnapshotBeforeUpdate === "function") error("%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.", name);
				var _state = instance.state;
				if (_state && (typeof _state !== "object" || isArray(_state))) error("%s.state: must be set to an object or null", name);
				if (typeof instance.getChildContext === "function" && typeof ctor.childContextTypes !== "object") error("%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().", name);
			}
		}
		function adoptClassInstance(workInProgress$1, instance) {
			instance.updater = classComponentUpdater;
			workInProgress$1.stateNode = instance;
			set(instance, workInProgress$1);
			instance._reactInternalInstance = fakeInternalInstance;
		}
		function constructClassInstance(workInProgress$1, ctor, props) {
			var isLegacyContextConsumer = false;
			var unmaskedContext = emptyContextObject;
			var context = emptyContextObject;
			var contextType = ctor.contextType;
			if ("contextType" in ctor) {
				var isValid = contextType === null || contextType !== undefined && contextType.$$typeof === REACT_CONTEXT_TYPE && contextType._context === undefined;
				if (!isValid && !didWarnAboutInvalidateContextType.has(ctor)) {
					didWarnAboutInvalidateContextType.add(ctor);
					var addendum = "";
					if (contextType === undefined) addendum = " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file.";
else if (typeof contextType !== "object") addendum = " However, it is set to a " + typeof contextType + ".";
else if (contextType.$$typeof === REACT_PROVIDER_TYPE) addendum = " Did you accidentally pass the Context.Provider instead?";
else if (contextType._context !== undefined) addendum = " Did you accidentally pass the Context.Consumer instead?";
else addendum = " However, it is set to an object with keys {" + Object.keys(contextType).join(", ") + "}.";
					error("%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s", getComponentNameFromType(ctor) || "Component", addendum);
				}
			}
			if (typeof contextType === "object" && contextType !== null) context = readContext(contextType);
else {
				unmaskedContext = getUnmaskedContext(workInProgress$1, ctor, true);
				var contextTypes = ctor.contextTypes;
				isLegacyContextConsumer = contextTypes !== null && contextTypes !== undefined;
				context = isLegacyContextConsumer ? getMaskedContext(workInProgress$1, unmaskedContext) : emptyContextObject;
			}
			var instance = new ctor(props, context);
			if (workInProgress$1.mode & StrictLegacyMode) {
				setIsStrictModeForDevtools(true);
				try {
					instance = new ctor(props, context);
				} finally {
					setIsStrictModeForDevtools(false);
				}
			}
			var state = workInProgress$1.memoizedState = instance.state !== null && instance.state !== undefined ? instance.state : null;
			adoptClassInstance(workInProgress$1, instance);
			{
				if (typeof ctor.getDerivedStateFromProps === "function" && state === null) {
					var componentName = getComponentNameFromType(ctor) || "Component";
					if (!didWarnAboutUninitializedState.has(componentName)) {
						didWarnAboutUninitializedState.add(componentName);
						error("`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.", componentName, instance.state === null ? "null" : "undefined", componentName);
					}
				}
				if (typeof ctor.getDerivedStateFromProps === "function" || typeof instance.getSnapshotBeforeUpdate === "function") {
					var foundWillMountName = null;
					var foundWillReceivePropsName = null;
					var foundWillUpdateName = null;
					if (typeof instance.componentWillMount === "function" && instance.componentWillMount.__suppressDeprecationWarning !== true) foundWillMountName = "componentWillMount";
else if (typeof instance.UNSAFE_componentWillMount === "function") foundWillMountName = "UNSAFE_componentWillMount";
					if (typeof instance.componentWillReceiveProps === "function" && instance.componentWillReceiveProps.__suppressDeprecationWarning !== true) foundWillReceivePropsName = "componentWillReceiveProps";
else if (typeof instance.UNSAFE_componentWillReceiveProps === "function") foundWillReceivePropsName = "UNSAFE_componentWillReceiveProps";
					if (typeof instance.componentWillUpdate === "function" && instance.componentWillUpdate.__suppressDeprecationWarning !== true) foundWillUpdateName = "componentWillUpdate";
else if (typeof instance.UNSAFE_componentWillUpdate === "function") foundWillUpdateName = "UNSAFE_componentWillUpdate";
					if (foundWillMountName !== null || foundWillReceivePropsName !== null || foundWillUpdateName !== null) {
						var _componentName = getComponentNameFromType(ctor) || "Component";
						var newApiName = typeof ctor.getDerivedStateFromProps === "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
						if (!didWarnAboutLegacyLifecyclesAndDerivedState.has(_componentName)) {
							didWarnAboutLegacyLifecyclesAndDerivedState.add(_componentName);
							error("Unsafe legacy lifecycles will not be called for components using new component APIs.\n\n%s uses %s but also contains the following legacy lifecycles:%s%s%s\n\nThe above lifecycles should be removed. Learn more about this warning here:\nhttps://reactjs.org/link/unsafe-component-lifecycles", _componentName, newApiName, foundWillMountName !== null ? "\n  " + foundWillMountName : "", foundWillReceivePropsName !== null ? "\n  " + foundWillReceivePropsName : "", foundWillUpdateName !== null ? "\n  " + foundWillUpdateName : "");
						}
					}
				}
			}
			if (isLegacyContextConsumer) cacheContext(workInProgress$1, unmaskedContext, context);
			return instance;
		}
		function callComponentWillMount(workInProgress$1, instance) {
			var oldState = instance.state;
			if (typeof instance.componentWillMount === "function") instance.componentWillMount();
			if (typeof instance.UNSAFE_componentWillMount === "function") instance.UNSAFE_componentWillMount();
			if (oldState !== instance.state) {
				error("%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", getComponentNameFromFiber(workInProgress$1) || "Component");
				classComponentUpdater.enqueueReplaceState(instance, instance.state, null);
			}
		}
		function callComponentWillReceiveProps(workInProgress$1, instance, newProps, nextContext) {
			var oldState = instance.state;
			if (typeof instance.componentWillReceiveProps === "function") instance.componentWillReceiveProps(newProps, nextContext);
			if (typeof instance.UNSAFE_componentWillReceiveProps === "function") instance.UNSAFE_componentWillReceiveProps(newProps, nextContext);
			if (instance.state !== oldState) {
				{
					var componentName = getComponentNameFromFiber(workInProgress$1) || "Component";
					if (!didWarnAboutStateAssignmentForComponent.has(componentName)) {
						didWarnAboutStateAssignmentForComponent.add(componentName);
						error("%s.componentWillReceiveProps(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", componentName);
					}
				}
				classComponentUpdater.enqueueReplaceState(instance, instance.state, null);
			}
		}
		function mountClassInstance(workInProgress$1, ctor, newProps, renderLanes$1) {
			checkClassInstance(workInProgress$1, ctor, newProps);
			var instance = workInProgress$1.stateNode;
			instance.props = newProps;
			instance.state = workInProgress$1.memoizedState;
			instance.refs = {};
			initializeUpdateQueue(workInProgress$1);
			var contextType = ctor.contextType;
			if (typeof contextType === "object" && contextType !== null) instance.context = readContext(contextType);
else {
				var unmaskedContext = getUnmaskedContext(workInProgress$1, ctor, true);
				instance.context = getMaskedContext(workInProgress$1, unmaskedContext);
			}
			{
				if (instance.state === newProps) {
					var componentName = getComponentNameFromType(ctor) || "Component";
					if (!didWarnAboutDirectlyAssigningPropsToState.has(componentName)) {
						didWarnAboutDirectlyAssigningPropsToState.add(componentName);
						error("%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.", componentName);
					}
				}
				if (workInProgress$1.mode & StrictLegacyMode) ReactStrictModeWarnings.recordLegacyContextWarning(workInProgress$1, instance);
				ReactStrictModeWarnings.recordUnsafeLifecycleWarnings(workInProgress$1, instance);
			}
			instance.state = workInProgress$1.memoizedState;
			var getDerivedStateFromProps = ctor.getDerivedStateFromProps;
			if (typeof getDerivedStateFromProps === "function") {
				applyDerivedStateFromProps(workInProgress$1, ctor, getDerivedStateFromProps, newProps);
				instance.state = workInProgress$1.memoizedState;
			}
			if (typeof ctor.getDerivedStateFromProps !== "function" && typeof instance.getSnapshotBeforeUpdate !== "function" && (typeof instance.UNSAFE_componentWillMount === "function" || typeof instance.componentWillMount === "function")) {
				callComponentWillMount(workInProgress$1, instance);
				processUpdateQueue(workInProgress$1, newProps, instance, renderLanes$1);
				instance.state = workInProgress$1.memoizedState;
			}
			if (typeof instance.componentDidMount === "function") {
				var fiberFlags = Update;
				fiberFlags |= LayoutStatic;
				if ((workInProgress$1.mode & StrictEffectsMode) !== NoMode) fiberFlags |= MountLayoutDev;
				workInProgress$1.flags |= fiberFlags;
			}
		}
		function resumeMountClassInstance(workInProgress$1, ctor, newProps, renderLanes$1) {
			var instance = workInProgress$1.stateNode;
			var oldProps = workInProgress$1.memoizedProps;
			instance.props = oldProps;
			var oldContext = instance.context;
			var contextType = ctor.contextType;
			var nextContext = emptyContextObject;
			if (typeof contextType === "object" && contextType !== null) nextContext = readContext(contextType);
else {
				var nextLegacyUnmaskedContext = getUnmaskedContext(workInProgress$1, ctor, true);
				nextContext = getMaskedContext(workInProgress$1, nextLegacyUnmaskedContext);
			}
			var getDerivedStateFromProps = ctor.getDerivedStateFromProps;
			var hasNewLifecycles = typeof getDerivedStateFromProps === "function" || typeof instance.getSnapshotBeforeUpdate === "function";
			if (!hasNewLifecycles && (typeof instance.UNSAFE_componentWillReceiveProps === "function" || typeof instance.componentWillReceiveProps === "function")) {
				if (oldProps !== newProps || oldContext !== nextContext) callComponentWillReceiveProps(workInProgress$1, instance, newProps, nextContext);
			}
			resetHasForceUpdateBeforeProcessing();
			var oldState = workInProgress$1.memoizedState;
			var newState = instance.state = oldState;
			processUpdateQueue(workInProgress$1, newProps, instance, renderLanes$1);
			newState = workInProgress$1.memoizedState;
			if (oldProps === newProps && oldState === newState && !hasContextChanged() && !checkHasForceUpdateAfterProcessing()) {
				if (typeof instance.componentDidMount === "function") {
					var fiberFlags = Update;
					fiberFlags |= LayoutStatic;
					if ((workInProgress$1.mode & StrictEffectsMode) !== NoMode) fiberFlags |= MountLayoutDev;
					workInProgress$1.flags |= fiberFlags;
				}
				return false;
			}
			if (typeof getDerivedStateFromProps === "function") {
				applyDerivedStateFromProps(workInProgress$1, ctor, getDerivedStateFromProps, newProps);
				newState = workInProgress$1.memoizedState;
			}
			var shouldUpdate = checkHasForceUpdateAfterProcessing() || checkShouldComponentUpdate(workInProgress$1, ctor, oldProps, newProps, oldState, newState, nextContext);
			if (shouldUpdate) {
				if (!hasNewLifecycles && (typeof instance.UNSAFE_componentWillMount === "function" || typeof instance.componentWillMount === "function")) {
					if (typeof instance.componentWillMount === "function") instance.componentWillMount();
					if (typeof instance.UNSAFE_componentWillMount === "function") instance.UNSAFE_componentWillMount();
				}
				if (typeof instance.componentDidMount === "function") {
					var _fiberFlags = Update;
					_fiberFlags |= LayoutStatic;
					if ((workInProgress$1.mode & StrictEffectsMode) !== NoMode) _fiberFlags |= MountLayoutDev;
					workInProgress$1.flags |= _fiberFlags;
				}
			} else {
				if (typeof instance.componentDidMount === "function") {
					var _fiberFlags2 = Update;
					_fiberFlags2 |= LayoutStatic;
					if ((workInProgress$1.mode & StrictEffectsMode) !== NoMode) _fiberFlags2 |= MountLayoutDev;
					workInProgress$1.flags |= _fiberFlags2;
				}
				workInProgress$1.memoizedProps = newProps;
				workInProgress$1.memoizedState = newState;
			}
			instance.props = newProps;
			instance.state = newState;
			instance.context = nextContext;
			return shouldUpdate;
		}
		function updateClassInstance(current$1, workInProgress$1, ctor, newProps, renderLanes$1) {
			var instance = workInProgress$1.stateNode;
			cloneUpdateQueue(current$1, workInProgress$1);
			var unresolvedOldProps = workInProgress$1.memoizedProps;
			var oldProps = workInProgress$1.type === workInProgress$1.elementType ? unresolvedOldProps : resolveDefaultProps(workInProgress$1.type, unresolvedOldProps);
			instance.props = oldProps;
			var unresolvedNewProps = workInProgress$1.pendingProps;
			var oldContext = instance.context;
			var contextType = ctor.contextType;
			var nextContext = emptyContextObject;
			if (typeof contextType === "object" && contextType !== null) nextContext = readContext(contextType);
else {
				var nextUnmaskedContext = getUnmaskedContext(workInProgress$1, ctor, true);
				nextContext = getMaskedContext(workInProgress$1, nextUnmaskedContext);
			}
			var getDerivedStateFromProps = ctor.getDerivedStateFromProps;
			var hasNewLifecycles = typeof getDerivedStateFromProps === "function" || typeof instance.getSnapshotBeforeUpdate === "function";
			if (!hasNewLifecycles && (typeof instance.UNSAFE_componentWillReceiveProps === "function" || typeof instance.componentWillReceiveProps === "function")) {
				if (unresolvedOldProps !== unresolvedNewProps || oldContext !== nextContext) callComponentWillReceiveProps(workInProgress$1, instance, newProps, nextContext);
			}
			resetHasForceUpdateBeforeProcessing();
			var oldState = workInProgress$1.memoizedState;
			var newState = instance.state = oldState;
			processUpdateQueue(workInProgress$1, newProps, instance, renderLanes$1);
			newState = workInProgress$1.memoizedState;
			if (unresolvedOldProps === unresolvedNewProps && oldState === newState && !hasContextChanged() && !checkHasForceUpdateAfterProcessing() && !enableLazyContextPropagation) {
				if (typeof instance.componentDidUpdate === "function") {
					if (unresolvedOldProps !== current$1.memoizedProps || oldState !== current$1.memoizedState) workInProgress$1.flags |= Update;
				}
				if (typeof instance.getSnapshotBeforeUpdate === "function") {
					if (unresolvedOldProps !== current$1.memoizedProps || oldState !== current$1.memoizedState) workInProgress$1.flags |= Snapshot;
				}
				return false;
			}
			if (typeof getDerivedStateFromProps === "function") {
				applyDerivedStateFromProps(workInProgress$1, ctor, getDerivedStateFromProps, newProps);
				newState = workInProgress$1.memoizedState;
			}
			var shouldUpdate = checkHasForceUpdateAfterProcessing() || checkShouldComponentUpdate(workInProgress$1, ctor, oldProps, newProps, oldState, newState, nextContext) || enableLazyContextPropagation;
			if (shouldUpdate) {
				if (!hasNewLifecycles && (typeof instance.UNSAFE_componentWillUpdate === "function" || typeof instance.componentWillUpdate === "function")) {
					if (typeof instance.componentWillUpdate === "function") instance.componentWillUpdate(newProps, newState, nextContext);
					if (typeof instance.UNSAFE_componentWillUpdate === "function") instance.UNSAFE_componentWillUpdate(newProps, newState, nextContext);
				}
				if (typeof instance.componentDidUpdate === "function") workInProgress$1.flags |= Update;
				if (typeof instance.getSnapshotBeforeUpdate === "function") workInProgress$1.flags |= Snapshot;
			} else {
				if (typeof instance.componentDidUpdate === "function") {
					if (unresolvedOldProps !== current$1.memoizedProps || oldState !== current$1.memoizedState) workInProgress$1.flags |= Update;
				}
				if (typeof instance.getSnapshotBeforeUpdate === "function") {
					if (unresolvedOldProps !== current$1.memoizedProps || oldState !== current$1.memoizedState) workInProgress$1.flags |= Snapshot;
				}
				workInProgress$1.memoizedProps = newProps;
				workInProgress$1.memoizedState = newState;
			}
			instance.props = newProps;
			instance.state = newState;
			instance.context = nextContext;
			return shouldUpdate;
		}
		function createCapturedValueAtFiber(value, source) {
			return {
				value,
				source,
				stack: getStackByFiberInDevAndProd(source),
				digest: null
			};
		}
		function createCapturedValue(value, digest, stack) {
			return {
				value,
				source: null,
				stack: stack != null ? stack : null,
				digest: digest != null ? digest : null
			};
		}
		function showErrorDialog(boundary, errorInfo) {
			return true;
		}
		function logCapturedError(boundary, errorInfo) {
			try {
				var logError = showErrorDialog(boundary, errorInfo);
				if (logError === false) return;
				var error$1 = errorInfo.value;
				{
					var source = errorInfo.source;
					var stack = errorInfo.stack;
					var componentStack = stack !== null ? stack : "";
					if (error$1 != null && error$1._suppressLogging) {
						if (boundary.tag === ClassComponent) return;
						console["error"](error$1);
					}
					var componentName = source ? getComponentNameFromFiber(source) : null;
					var componentNameMessage = componentName ? "The above error occurred in the <" + componentName + "> component:" : "The above error occurred in one of your React components:";
					var errorBoundaryMessage;
					if (boundary.tag === HostRoot) errorBoundaryMessage = "Consider adding an error boundary to your tree to customize error handling behavior.\nVisit https://reactjs.org/link/error-boundaries to learn more about error boundaries.";
else {
						var errorBoundaryName = getComponentNameFromFiber(boundary) || "Anonymous";
						errorBoundaryMessage = "React will try to recreate this component tree from scratch " + ("using the error boundary you provided, " + errorBoundaryName + ".");
					}
					var combinedMessage = componentNameMessage + "\n" + componentStack + "\n\n" + ("" + errorBoundaryMessage);
					console["error"](combinedMessage);
				}
			} catch (e) {
				setTimeout(function() {
					throw e;
				});
			}
		}
		var PossiblyWeakMap$1 = typeof WeakMap === "function" ? WeakMap : Map;
		function createRootErrorUpdate(fiber, errorInfo, lane) {
			var update = createUpdate(NoTimestamp, lane);
			update.tag = CaptureUpdate;
			update.payload = { element: null };
			var error$1 = errorInfo.value;
			update.callback = function() {
				onUncaughtError(error$1);
				logCapturedError(fiber, errorInfo);
			};
			return update;
		}
		function createClassErrorUpdate(fiber, errorInfo, lane) {
			var update = createUpdate(NoTimestamp, lane);
			update.tag = CaptureUpdate;
			var getDerivedStateFromError = fiber.type.getDerivedStateFromError;
			if (typeof getDerivedStateFromError === "function") {
				var error$1 = errorInfo.value;
				update.payload = function() {
					return getDerivedStateFromError(error$1);
				};
				update.callback = function() {
					markFailedErrorBoundaryForHotReloading(fiber);
					logCapturedError(fiber, errorInfo);
				};
			}
			var inst = fiber.stateNode;
			if (inst !== null && typeof inst.componentDidCatch === "function") update.callback = function callback() {
				markFailedErrorBoundaryForHotReloading(fiber);
				logCapturedError(fiber, errorInfo);
				if (typeof getDerivedStateFromError !== "function") markLegacyErrorBoundaryAsFailed(this);
				var error$1$1 = errorInfo.value;
				var stack = errorInfo.stack;
				this.componentDidCatch(error$1$1, { componentStack: stack !== null ? stack : "" });
				if (typeof getDerivedStateFromError !== "function") {
					if (!includesSomeLane(fiber.lanes, SyncLane)) error("%s: Error boundaries should implement getDerivedStateFromError(). In that method, return a state update to display an error message or fallback UI.", getComponentNameFromFiber(fiber) || "Unknown");
				}
			};
			return update;
		}
		function attachPingListener(root$1, wakeable, lanes) {
			var pingCache = root$1.pingCache;
			var threadIDs;
			if (pingCache === null) {
				pingCache = root$1.pingCache = new PossiblyWeakMap$1();
				threadIDs = new Set();
				pingCache.set(wakeable, threadIDs);
			} else {
				threadIDs = pingCache.get(wakeable);
				if (threadIDs === undefined) {
					threadIDs = new Set();
					pingCache.set(wakeable, threadIDs);
				}
			}
			if (!threadIDs.has(lanes)) {
				threadIDs.add(lanes);
				var ping = pingSuspendedRoot.bind(null, root$1, wakeable, lanes);
				if (isDevToolsPresent) restorePendingUpdaters(root$1, lanes);
				wakeable.then(ping, ping);
			}
		}
		function attachRetryListener(suspenseBoundary, root$1, wakeable, lanes) {
			var wakeables = suspenseBoundary.updateQueue;
			if (wakeables === null) {
				var updateQueue = new Set();
				updateQueue.add(wakeable);
				suspenseBoundary.updateQueue = updateQueue;
			} else wakeables.add(wakeable);
		}
		function resetSuspendedComponent(sourceFiber, rootRenderLanes) {
			var tag = sourceFiber.tag;
			if ((sourceFiber.mode & ConcurrentMode) === NoMode && (tag === FunctionComponent || tag === ForwardRef || tag === SimpleMemoComponent)) {
				var currentSource = sourceFiber.alternate;
				if (currentSource) {
					sourceFiber.updateQueue = currentSource.updateQueue;
					sourceFiber.memoizedState = currentSource.memoizedState;
					sourceFiber.lanes = currentSource.lanes;
				} else {
					sourceFiber.updateQueue = null;
					sourceFiber.memoizedState = null;
				}
			}
		}
		function getNearestSuspenseBoundaryToCapture(returnFiber) {
			var node = returnFiber;
			do {
				if (node.tag === SuspenseComponent && shouldCaptureSuspense(node)) return node;
				node = node.return;
			} while (node !== null);
			return null;
		}
		function markSuspenseBoundaryShouldCapture(suspenseBoundary, returnFiber, sourceFiber, root$1, rootRenderLanes) {
			if ((suspenseBoundary.mode & ConcurrentMode) === NoMode) {
				if (suspenseBoundary === returnFiber) suspenseBoundary.flags |= ShouldCapture;
else {
					suspenseBoundary.flags |= DidCapture;
					sourceFiber.flags |= ForceUpdateForLegacySuspense;
					sourceFiber.flags &= ~(LifecycleEffectMask | Incomplete);
					if (sourceFiber.tag === ClassComponent) {
						var currentSourceFiber = sourceFiber.alternate;
						if (currentSourceFiber === null) sourceFiber.tag = IncompleteClassComponent;
else {
							var update = createUpdate(NoTimestamp, SyncLane);
							update.tag = ForceUpdate;
							enqueueUpdate(sourceFiber, update, SyncLane);
						}
					}
					sourceFiber.lanes = mergeLanes(sourceFiber.lanes, SyncLane);
				}
				return suspenseBoundary;
			}
			suspenseBoundary.flags |= ShouldCapture;
			suspenseBoundary.lanes = rootRenderLanes;
			return suspenseBoundary;
		}
		function throwException(root$1, returnFiber, sourceFiber, value, rootRenderLanes) {
			sourceFiber.flags |= Incomplete;
			if (isDevToolsPresent) restorePendingUpdaters(root$1, rootRenderLanes);
			if (value !== null && typeof value === "object" && typeof value.then === "function") {
				var wakeable = value;
				resetSuspendedComponent(sourceFiber);
				if (getIsHydrating() && sourceFiber.mode & ConcurrentMode) markDidThrowWhileHydratingDEV();
				var suspenseBoundary = getNearestSuspenseBoundaryToCapture(returnFiber);
				if (suspenseBoundary !== null) {
					suspenseBoundary.flags &= ~ForceClientRender;
					markSuspenseBoundaryShouldCapture(suspenseBoundary, returnFiber, sourceFiber, root$1, rootRenderLanes);
					if (suspenseBoundary.mode & ConcurrentMode) attachPingListener(root$1, wakeable, rootRenderLanes);
					attachRetryListener(suspenseBoundary, root$1, wakeable);
					return;
				} else {
					if (!includesSyncLane(rootRenderLanes)) {
						attachPingListener(root$1, wakeable, rootRenderLanes);
						renderDidSuspendDelayIfPossible();
						return;
					}
					var uncaughtSuspenseError = new Error("A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix, updates that suspend should be wrapped with startTransition.");
					value = uncaughtSuspenseError;
				}
			} else if (getIsHydrating() && sourceFiber.mode & ConcurrentMode) {
				markDidThrowWhileHydratingDEV();
				var _suspenseBoundary = getNearestSuspenseBoundaryToCapture(returnFiber);
				if (_suspenseBoundary !== null) {
					if ((_suspenseBoundary.flags & ShouldCapture) === NoFlags) _suspenseBoundary.flags |= ForceClientRender;
					markSuspenseBoundaryShouldCapture(_suspenseBoundary, returnFiber, sourceFiber, root$1, rootRenderLanes);
					queueHydrationError(createCapturedValueAtFiber(value, sourceFiber));
					return;
				}
			}
			value = createCapturedValueAtFiber(value, sourceFiber);
			renderDidError(value);
			var workInProgress$1 = returnFiber;
			do {
				switch (workInProgress$1.tag) {
					case HostRoot: {
						var _errorInfo = value;
						workInProgress$1.flags |= ShouldCapture;
						var lane = pickArbitraryLane(rootRenderLanes);
						workInProgress$1.lanes = mergeLanes(workInProgress$1.lanes, lane);
						var update = createRootErrorUpdate(workInProgress$1, _errorInfo, lane);
						enqueueCapturedUpdate(workInProgress$1, update);
						return;
					}
					case ClassComponent:
						var errorInfo = value;
						var ctor = workInProgress$1.type;
						var instance = workInProgress$1.stateNode;
						if ((workInProgress$1.flags & DidCapture) === NoFlags && (typeof ctor.getDerivedStateFromError === "function" || instance !== null && typeof instance.componentDidCatch === "function" && !isAlreadyFailedLegacyErrorBoundary(instance))) {
							workInProgress$1.flags |= ShouldCapture;
							var _lane = pickArbitraryLane(rootRenderLanes);
							workInProgress$1.lanes = mergeLanes(workInProgress$1.lanes, _lane);
							var _update = createClassErrorUpdate(workInProgress$1, errorInfo, _lane);
							enqueueCapturedUpdate(workInProgress$1, _update);
							return;
						}
						break;
				}
				workInProgress$1 = workInProgress$1.return;
			} while (workInProgress$1 !== null);
		}
		function getSuspendedCache() {
			return null;
		}
		var ReactCurrentOwner$1 = ReactSharedInternals.ReactCurrentOwner;
		var didReceiveUpdate = false;
		var didWarnAboutBadClass;
		var didWarnAboutModulePatternComponent;
		var didWarnAboutContextTypeOnFunctionComponent;
		var didWarnAboutGetDerivedStateOnFunctionComponent;
		var didWarnAboutFunctionRefs;
		var didWarnAboutReassigningProps;
		var didWarnAboutRevealOrder;
		var didWarnAboutTailOptions;
		var didWarnAboutDefaultPropsOnFunctionComponent;
		{
			didWarnAboutBadClass = {};
			didWarnAboutModulePatternComponent = {};
			didWarnAboutContextTypeOnFunctionComponent = {};
			didWarnAboutGetDerivedStateOnFunctionComponent = {};
			didWarnAboutFunctionRefs = {};
			didWarnAboutReassigningProps = false;
			didWarnAboutRevealOrder = {};
			didWarnAboutTailOptions = {};
			didWarnAboutDefaultPropsOnFunctionComponent = {};
		}
		function reconcileChildren(current$1, workInProgress$1, nextChildren, renderLanes$1) {
			if (current$1 === null) workInProgress$1.child = mountChildFibers(workInProgress$1, null, nextChildren, renderLanes$1);
else workInProgress$1.child = reconcileChildFibers(workInProgress$1, current$1.child, nextChildren, renderLanes$1);
		}
		function forceUnmountCurrentAndReconcile(current$1, workInProgress$1, nextChildren, renderLanes$1) {
			workInProgress$1.child = reconcileChildFibers(workInProgress$1, current$1.child, null, renderLanes$1);
			workInProgress$1.child = reconcileChildFibers(workInProgress$1, null, nextChildren, renderLanes$1);
		}
		function updateForwardRef(current$1, workInProgress$1, Component, nextProps, renderLanes$1) {
			if (workInProgress$1.type !== workInProgress$1.elementType) {
				var innerPropTypes = Component.propTypes;
				if (innerPropTypes) checkPropTypes(innerPropTypes, nextProps, "prop", getComponentNameFromType(Component));
			}
			var render$1 = Component.render;
			var ref = workInProgress$1.ref;
			var nextChildren;
			var hasId;
			prepareToReadContext(workInProgress$1, renderLanes$1);
			markComponentRenderStarted(workInProgress$1);
			{
				ReactCurrentOwner$1.current = workInProgress$1;
				setIsRendering(true);
				nextChildren = renderWithHooks(current$1, workInProgress$1, render$1, nextProps, ref, renderLanes$1);
				hasId = checkDidRenderIdHook();
				if (workInProgress$1.mode & StrictLegacyMode) {
					setIsStrictModeForDevtools(true);
					try {
						nextChildren = renderWithHooks(current$1, workInProgress$1, render$1, nextProps, ref, renderLanes$1);
						hasId = checkDidRenderIdHook();
					} finally {
						setIsStrictModeForDevtools(false);
					}
				}
				setIsRendering(false);
			}
			markComponentRenderStopped();
			if (current$1 !== null && !didReceiveUpdate) {
				bailoutHooks(current$1, workInProgress$1, renderLanes$1);
				return bailoutOnAlreadyFinishedWork(current$1, workInProgress$1, renderLanes$1);
			}
			if (getIsHydrating() && hasId) pushMaterializedTreeId(workInProgress$1);
			workInProgress$1.flags |= PerformedWork;
			reconcileChildren(current$1, workInProgress$1, nextChildren, renderLanes$1);
			return workInProgress$1.child;
		}
		function updateMemoComponent(current$1, workInProgress$1, Component, nextProps, renderLanes$1) {
			if (current$1 === null) {
				var type = Component.type;
				if (isSimpleFunctionComponent(type) && Component.compare === null && Component.defaultProps === undefined) {
					var resolvedType = type;
					resolvedType = resolveFunctionForHotReloading(type);
					workInProgress$1.tag = SimpleMemoComponent;
					workInProgress$1.type = resolvedType;
					validateFunctionComponentInDev(workInProgress$1, type);
					return updateSimpleMemoComponent(current$1, workInProgress$1, resolvedType, nextProps, renderLanes$1);
				}
				{
					var innerPropTypes = type.propTypes;
					if (innerPropTypes) checkPropTypes(innerPropTypes, nextProps, "prop", getComponentNameFromType(type));
					if (Component.defaultProps !== undefined) {
						var componentName = getComponentNameFromType(type) || "Unknown";
						if (!didWarnAboutDefaultPropsOnFunctionComponent[componentName]) {
							error("%s: Support for defaultProps will be removed from memo components in a future major release. Use JavaScript default parameters instead.", componentName);
							didWarnAboutDefaultPropsOnFunctionComponent[componentName] = true;
						}
					}
				}
				var child = createFiberFromTypeAndProps(Component.type, null, nextProps, workInProgress$1, workInProgress$1.mode, renderLanes$1);
				child.ref = workInProgress$1.ref;
				child.return = workInProgress$1;
				workInProgress$1.child = child;
				return child;
			}
			{
				var _type = Component.type;
				var _innerPropTypes = _type.propTypes;
				if (_innerPropTypes) checkPropTypes(_innerPropTypes, nextProps, "prop", getComponentNameFromType(_type));
			}
			var currentChild = current$1.child;
			var hasScheduledUpdateOrContext = checkScheduledUpdateOrContext(current$1, renderLanes$1);
			if (!hasScheduledUpdateOrContext) {
				var prevProps = currentChild.memoizedProps;
				var compare = Component.compare;
				compare = compare !== null ? compare : shallowEqual;
				if (compare(prevProps, nextProps) && current$1.ref === workInProgress$1.ref) return bailoutOnAlreadyFinishedWork(current$1, workInProgress$1, renderLanes$1);
			}
			workInProgress$1.flags |= PerformedWork;
			var newChild = createWorkInProgress(currentChild, nextProps);
			newChild.ref = workInProgress$1.ref;
			newChild.return = workInProgress$1;
			workInProgress$1.child = newChild;
			return newChild;
		}
		function updateSimpleMemoComponent(current$1, workInProgress$1, Component, nextProps, renderLanes$1) {
			if (workInProgress$1.type !== workInProgress$1.elementType) {
				var outerMemoType = workInProgress$1.elementType;
				if (outerMemoType.$$typeof === REACT_LAZY_TYPE) {
					var lazyComponent = outerMemoType;
					var payload = lazyComponent._payload;
					var init = lazyComponent._init;
					try {
						outerMemoType = init(payload);
					} catch (x) {
						outerMemoType = null;
					}
					var outerPropTypes = outerMemoType && outerMemoType.propTypes;
					if (outerPropTypes) checkPropTypes(outerPropTypes, nextProps, "prop", getComponentNameFromType(outerMemoType));
				}
			}
			if (current$1 !== null) {
				var prevProps = current$1.memoizedProps;
				if (shallowEqual(prevProps, nextProps) && current$1.ref === workInProgress$1.ref && workInProgress$1.type === current$1.type) {
					didReceiveUpdate = false;
					workInProgress$1.pendingProps = nextProps = prevProps;
					if (!checkScheduledUpdateOrContext(current$1, renderLanes$1)) {
						workInProgress$1.lanes = current$1.lanes;
						return bailoutOnAlreadyFinishedWork(current$1, workInProgress$1, renderLanes$1);
					} else if ((current$1.flags & ForceUpdateForLegacySuspense) !== NoFlags) didReceiveUpdate = true;
				}
			}
			return updateFunctionComponent(current$1, workInProgress$1, Component, nextProps, renderLanes$1);
		}
		function updateOffscreenComponent(current$1, workInProgress$1, renderLanes$1) {
			var nextProps = workInProgress$1.pendingProps;
			var nextChildren = nextProps.children;
			var prevState = current$1 !== null ? current$1.memoizedState : null;
			if (nextProps.mode === "hidden" || enableLegacyHidden) if ((workInProgress$1.mode & ConcurrentMode) === NoMode) {
				var nextState = {
					baseLanes: NoLanes,
					cachePool: null,
					transitions: null
				};
				workInProgress$1.memoizedState = nextState;
				pushRenderLanes(workInProgress$1, renderLanes$1);
			} else if (!includesSomeLane(renderLanes$1, OffscreenLane)) {
				var spawnedCachePool = null;
				var nextBaseLanes;
				if (prevState !== null) {
					var prevBaseLanes = prevState.baseLanes;
					nextBaseLanes = mergeLanes(prevBaseLanes, renderLanes$1);
				} else nextBaseLanes = renderLanes$1;
				workInProgress$1.lanes = workInProgress$1.childLanes = laneToLanes(OffscreenLane);
				var _nextState = {
					baseLanes: nextBaseLanes,
					cachePool: spawnedCachePool,
					transitions: null
				};
				workInProgress$1.memoizedState = _nextState;
				workInProgress$1.updateQueue = null;
				pushRenderLanes(workInProgress$1, nextBaseLanes);
				return null;
			} else {
				var _nextState2 = {
					baseLanes: NoLanes,
					cachePool: null,
					transitions: null
				};
				workInProgress$1.memoizedState = _nextState2;
				var subtreeRenderLanes$1 = prevState !== null ? prevState.baseLanes : renderLanes$1;
				pushRenderLanes(workInProgress$1, subtreeRenderLanes$1);
			}
else {
				var _subtreeRenderLanes;
				if (prevState !== null) {
					_subtreeRenderLanes = mergeLanes(prevState.baseLanes, renderLanes$1);
					workInProgress$1.memoizedState = null;
				} else _subtreeRenderLanes = renderLanes$1;
				pushRenderLanes(workInProgress$1, _subtreeRenderLanes);
			}
			reconcileChildren(current$1, workInProgress$1, nextChildren, renderLanes$1);
			return workInProgress$1.child;
		}
		function updateFragment(current$1, workInProgress$1, renderLanes$1) {
			var nextChildren = workInProgress$1.pendingProps;
			reconcileChildren(current$1, workInProgress$1, nextChildren, renderLanes$1);
			return workInProgress$1.child;
		}
		function updateMode(current$1, workInProgress$1, renderLanes$1) {
			var nextChildren = workInProgress$1.pendingProps.children;
			reconcileChildren(current$1, workInProgress$1, nextChildren, renderLanes$1);
			return workInProgress$1.child;
		}
		function updateProfiler(current$1, workInProgress$1, renderLanes$1) {
			{
				workInProgress$1.flags |= Update;
				{
					var stateNode = workInProgress$1.stateNode;
					stateNode.effectDuration = 0;
					stateNode.passiveEffectDuration = 0;
				}
			}
			var nextProps = workInProgress$1.pendingProps;
			var nextChildren = nextProps.children;
			reconcileChildren(current$1, workInProgress$1, nextChildren, renderLanes$1);
			return workInProgress$1.child;
		}
		function markRef(current$1, workInProgress$1) {
			var ref = workInProgress$1.ref;
			if (current$1 === null && ref !== null || current$1 !== null && current$1.ref !== ref) {
				workInProgress$1.flags |= Ref;
				workInProgress$1.flags |= RefStatic;
			}
		}
		function updateFunctionComponent(current$1, workInProgress$1, Component, nextProps, renderLanes$1) {
			if (workInProgress$1.type !== workInProgress$1.elementType) {
				var innerPropTypes = Component.propTypes;
				if (innerPropTypes) checkPropTypes(innerPropTypes, nextProps, "prop", getComponentNameFromType(Component));
			}
			var context;
			{
				var unmaskedContext = getUnmaskedContext(workInProgress$1, Component, true);
				context = getMaskedContext(workInProgress$1, unmaskedContext);
			}
			var nextChildren;
			var hasId;
			prepareToReadContext(workInProgress$1, renderLanes$1);
			markComponentRenderStarted(workInProgress$1);
			{
				ReactCurrentOwner$1.current = workInProgress$1;
				setIsRendering(true);
				nextChildren = renderWithHooks(current$1, workInProgress$1, Component, nextProps, context, renderLanes$1);
				hasId = checkDidRenderIdHook();
				if (workInProgress$1.mode & StrictLegacyMode) {
					setIsStrictModeForDevtools(true);
					try {
						nextChildren = renderWithHooks(current$1, workInProgress$1, Component, nextProps, context, renderLanes$1);
						hasId = checkDidRenderIdHook();
					} finally {
						setIsStrictModeForDevtools(false);
					}
				}
				setIsRendering(false);
			}
			markComponentRenderStopped();
			if (current$1 !== null && !didReceiveUpdate) {
				bailoutHooks(current$1, workInProgress$1, renderLanes$1);
				return bailoutOnAlreadyFinishedWork(current$1, workInProgress$1, renderLanes$1);
			}
			if (getIsHydrating() && hasId) pushMaterializedTreeId(workInProgress$1);
			workInProgress$1.flags |= PerformedWork;
			reconcileChildren(current$1, workInProgress$1, nextChildren, renderLanes$1);
			return workInProgress$1.child;
		}
		function updateClassComponent(current$1, workInProgress$1, Component, nextProps, renderLanes$1) {
			{
				switch (shouldError(workInProgress$1)) {
					case false: {
						var _instance = workInProgress$1.stateNode;
						var ctor = workInProgress$1.type;
						var tempInstance = new ctor(workInProgress$1.memoizedProps, _instance.context);
						var state = tempInstance.state;
						_instance.updater.enqueueSetState(_instance, state, null);
						break;
					}
					case true: {
						workInProgress$1.flags |= DidCapture;
						workInProgress$1.flags |= ShouldCapture;
						var error$1 = new Error("Simulated error coming from DevTools");
						var lane = pickArbitraryLane(renderLanes$1);
						workInProgress$1.lanes = mergeLanes(workInProgress$1.lanes, lane);
						var update = createClassErrorUpdate(workInProgress$1, createCapturedValueAtFiber(error$1, workInProgress$1), lane);
						enqueueCapturedUpdate(workInProgress$1, update);
						break;
					}
				}
				if (workInProgress$1.type !== workInProgress$1.elementType) {
					var innerPropTypes = Component.propTypes;
					if (innerPropTypes) checkPropTypes(innerPropTypes, nextProps, "prop", getComponentNameFromType(Component));
				}
			}
			var hasContext;
			if (isContextProvider(Component)) {
				hasContext = true;
				pushContextProvider(workInProgress$1);
			} else hasContext = false;
			prepareToReadContext(workInProgress$1, renderLanes$1);
			var instance = workInProgress$1.stateNode;
			var shouldUpdate;
			if (instance === null) {
				resetSuspendedCurrentOnMountInLegacyMode(current$1, workInProgress$1);
				constructClassInstance(workInProgress$1, Component, nextProps);
				mountClassInstance(workInProgress$1, Component, nextProps, renderLanes$1);
				shouldUpdate = true;
			} else if (current$1 === null) shouldUpdate = resumeMountClassInstance(workInProgress$1, Component, nextProps, renderLanes$1);
else shouldUpdate = updateClassInstance(current$1, workInProgress$1, Component, nextProps, renderLanes$1);
			var nextUnitOfWork = finishClassComponent(current$1, workInProgress$1, Component, shouldUpdate, hasContext, renderLanes$1);
			{
				var inst = workInProgress$1.stateNode;
				if (shouldUpdate && inst.props !== nextProps) {
					if (!didWarnAboutReassigningProps) error("It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.", getComponentNameFromFiber(workInProgress$1) || "a component");
					didWarnAboutReassigningProps = true;
				}
			}
			return nextUnitOfWork;
		}
		function finishClassComponent(current$1, workInProgress$1, Component, shouldUpdate, hasContext, renderLanes$1) {
			markRef(current$1, workInProgress$1);
			var didCaptureError = (workInProgress$1.flags & DidCapture) !== NoFlags;
			if (!shouldUpdate && !didCaptureError) {
				if (hasContext) invalidateContextProvider(workInProgress$1, Component, false);
				return bailoutOnAlreadyFinishedWork(current$1, workInProgress$1, renderLanes$1);
			}
			var instance = workInProgress$1.stateNode;
			ReactCurrentOwner$1.current = workInProgress$1;
			var nextChildren;
			if (didCaptureError && typeof Component.getDerivedStateFromError !== "function") {
				nextChildren = null;
				stopProfilerTimerIfRunning();
			} else {
				markComponentRenderStarted(workInProgress$1);
				{
					setIsRendering(true);
					nextChildren = instance.render();
					if (workInProgress$1.mode & StrictLegacyMode) {
						setIsStrictModeForDevtools(true);
						try {
							instance.render();
						} finally {
							setIsStrictModeForDevtools(false);
						}
					}
					setIsRendering(false);
				}
				markComponentRenderStopped();
			}
			workInProgress$1.flags |= PerformedWork;
			if (current$1 !== null && didCaptureError) forceUnmountCurrentAndReconcile(current$1, workInProgress$1, nextChildren, renderLanes$1);
else reconcileChildren(current$1, workInProgress$1, nextChildren, renderLanes$1);
			workInProgress$1.memoizedState = instance.state;
			if (hasContext) invalidateContextProvider(workInProgress$1, Component, true);
			return workInProgress$1.child;
		}
		function pushHostRootContext(workInProgress$1) {
			var root$1 = workInProgress$1.stateNode;
			if (root$1.pendingContext) pushTopLevelContextObject(workInProgress$1, root$1.pendingContext, root$1.pendingContext !== root$1.context);
else if (root$1.context) pushTopLevelContextObject(workInProgress$1, root$1.context, false);
			pushHostContainer(workInProgress$1, root$1.containerInfo);
		}
		function updateHostRoot(current$1, workInProgress$1, renderLanes$1) {
			pushHostRootContext(workInProgress$1);
			if (current$1 === null) throw new Error("Should have a current fiber. This is a bug in React.");
			var nextProps = workInProgress$1.pendingProps;
			var prevState = workInProgress$1.memoizedState;
			var prevChildren = prevState.element;
			cloneUpdateQueue(current$1, workInProgress$1);
			processUpdateQueue(workInProgress$1, nextProps, null, renderLanes$1);
			var nextState = workInProgress$1.memoizedState;
			var root$1 = workInProgress$1.stateNode;
			var nextChildren = nextState.element;
			if (prevState.isDehydrated) {
				var overrideState = {
					element: nextChildren,
					isDehydrated: false,
					cache: nextState.cache,
					pendingSuspenseBoundaries: nextState.pendingSuspenseBoundaries,
					transitions: nextState.transitions
				};
				var updateQueue = workInProgress$1.updateQueue;
				updateQueue.baseState = overrideState;
				workInProgress$1.memoizedState = overrideState;
				if (workInProgress$1.flags & ForceClientRender) {
					var recoverableError = createCapturedValueAtFiber(new Error("There was an error while hydrating. Because the error happened outside of a Suspense boundary, the entire root will switch to client rendering."), workInProgress$1);
					return mountHostRootWithoutHydrating(current$1, workInProgress$1, nextChildren, renderLanes$1, recoverableError);
				} else if (nextChildren !== prevChildren) {
					var _recoverableError = createCapturedValueAtFiber(new Error("This root received an early update, before anything was able hydrate. Switched the entire root to client rendering."), workInProgress$1);
					return mountHostRootWithoutHydrating(current$1, workInProgress$1, nextChildren, renderLanes$1, _recoverableError);
				} else {
					enterHydrationState(workInProgress$1);
					var child = mountChildFibers(workInProgress$1, null, nextChildren, renderLanes$1);
					workInProgress$1.child = child;
					var node = child;
					while (node) {
						node.flags = node.flags & ~Placement | Hydrating;
						node = node.sibling;
					}
				}
			} else {
				resetHydrationState();
				if (nextChildren === prevChildren) return bailoutOnAlreadyFinishedWork(current$1, workInProgress$1, renderLanes$1);
				reconcileChildren(current$1, workInProgress$1, nextChildren, renderLanes$1);
			}
			return workInProgress$1.child;
		}
		function mountHostRootWithoutHydrating(current$1, workInProgress$1, nextChildren, renderLanes$1, recoverableError) {
			resetHydrationState();
			queueHydrationError(recoverableError);
			workInProgress$1.flags |= ForceClientRender;
			reconcileChildren(current$1, workInProgress$1, nextChildren, renderLanes$1);
			return workInProgress$1.child;
		}
		function updateHostComponent(current$1, workInProgress$1, renderLanes$1) {
			pushHostContext(workInProgress$1);
			if (current$1 === null) tryToClaimNextHydratableInstance(workInProgress$1);
			var type = workInProgress$1.type;
			var nextProps = workInProgress$1.pendingProps;
			var prevProps = current$1 !== null ? current$1.memoizedProps : null;
			var nextChildren = nextProps.children;
			var isDirectTextChild = shouldSetTextContent(type, nextProps);
			if (isDirectTextChild) nextChildren = null;
else if (prevProps !== null && shouldSetTextContent(type, prevProps)) workInProgress$1.flags |= ContentReset;
			markRef(current$1, workInProgress$1);
			reconcileChildren(current$1, workInProgress$1, nextChildren, renderLanes$1);
			return workInProgress$1.child;
		}
		function updateHostText(current$1, workInProgress$1) {
			if (current$1 === null) tryToClaimNextHydratableInstance(workInProgress$1);
			return null;
		}
		function mountLazyComponent(_current, workInProgress$1, elementType, renderLanes$1) {
			resetSuspendedCurrentOnMountInLegacyMode(_current, workInProgress$1);
			var props = workInProgress$1.pendingProps;
			var lazyComponent = elementType;
			var payload = lazyComponent._payload;
			var init = lazyComponent._init;
			var Component = init(payload);
			workInProgress$1.type = Component;
			var resolvedTag = workInProgress$1.tag = resolveLazyComponentTag(Component);
			var resolvedProps = resolveDefaultProps(Component, props);
			var child;
			switch (resolvedTag) {
				case FunctionComponent: {
					{
						validateFunctionComponentInDev(workInProgress$1, Component);
						workInProgress$1.type = Component = resolveFunctionForHotReloading(Component);
					}
					child = updateFunctionComponent(null, workInProgress$1, Component, resolvedProps, renderLanes$1);
					return child;
				}
				case ClassComponent: {
					workInProgress$1.type = Component = resolveClassForHotReloading(Component);
					child = updateClassComponent(null, workInProgress$1, Component, resolvedProps, renderLanes$1);
					return child;
				}
				case ForwardRef: {
					workInProgress$1.type = Component = resolveForwardRefForHotReloading(Component);
					child = updateForwardRef(null, workInProgress$1, Component, resolvedProps, renderLanes$1);
					return child;
				}
				case MemoComponent: {
					if (workInProgress$1.type !== workInProgress$1.elementType) {
						var outerPropTypes = Component.propTypes;
						if (outerPropTypes) checkPropTypes(outerPropTypes, resolvedProps, "prop", getComponentNameFromType(Component));
					}
					child = updateMemoComponent(null, workInProgress$1, Component, resolveDefaultProps(Component.type, resolvedProps), renderLanes$1);
					return child;
				}
			}
			var hint = "";
			if (Component !== null && typeof Component === "object" && Component.$$typeof === REACT_LAZY_TYPE) hint = " Did you wrap a component in React.lazy() more than once?";
			throw new Error("Element type is invalid. Received a promise that resolves to: " + Component + ". " + ("Lazy element type must resolve to a class or function." + hint));
		}
		function mountIncompleteClassComponent(_current, workInProgress$1, Component, nextProps, renderLanes$1) {
			resetSuspendedCurrentOnMountInLegacyMode(_current, workInProgress$1);
			workInProgress$1.tag = ClassComponent;
			var hasContext;
			if (isContextProvider(Component)) {
				hasContext = true;
				pushContextProvider(workInProgress$1);
			} else hasContext = false;
			prepareToReadContext(workInProgress$1, renderLanes$1);
			constructClassInstance(workInProgress$1, Component, nextProps);
			mountClassInstance(workInProgress$1, Component, nextProps, renderLanes$1);
			return finishClassComponent(null, workInProgress$1, Component, true, hasContext, renderLanes$1);
		}
		function mountIndeterminateComponent(_current, workInProgress$1, Component, renderLanes$1) {
			resetSuspendedCurrentOnMountInLegacyMode(_current, workInProgress$1);
			var props = workInProgress$1.pendingProps;
			var context;
			{
				var unmaskedContext = getUnmaskedContext(workInProgress$1, Component, false);
				context = getMaskedContext(workInProgress$1, unmaskedContext);
			}
			prepareToReadContext(workInProgress$1, renderLanes$1);
			var value;
			var hasId;
			markComponentRenderStarted(workInProgress$1);
			{
				if (Component.prototype && typeof Component.prototype.render === "function") {
					var componentName = getComponentNameFromType(Component) || "Unknown";
					if (!didWarnAboutBadClass[componentName]) {
						error("The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.", componentName, componentName);
						didWarnAboutBadClass[componentName] = true;
					}
				}
				if (workInProgress$1.mode & StrictLegacyMode) ReactStrictModeWarnings.recordLegacyContextWarning(workInProgress$1, null);
				setIsRendering(true);
				ReactCurrentOwner$1.current = workInProgress$1;
				value = renderWithHooks(null, workInProgress$1, Component, props, context, renderLanes$1);
				hasId = checkDidRenderIdHook();
				setIsRendering(false);
			}
			markComponentRenderStopped();
			workInProgress$1.flags |= PerformedWork;
			if (typeof value === "object" && value !== null && typeof value.render === "function" && value.$$typeof === undefined) {
				var _componentName = getComponentNameFromType(Component) || "Unknown";
				if (!didWarnAboutModulePatternComponent[_componentName]) {
					error("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", _componentName, _componentName, _componentName);
					didWarnAboutModulePatternComponent[_componentName] = true;
				}
			}
			if (typeof value === "object" && value !== null && typeof value.render === "function" && value.$$typeof === undefined) {
				{
					var _componentName2 = getComponentNameFromType(Component) || "Unknown";
					if (!didWarnAboutModulePatternComponent[_componentName2]) {
						error("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", _componentName2, _componentName2, _componentName2);
						didWarnAboutModulePatternComponent[_componentName2] = true;
					}
				}
				workInProgress$1.tag = ClassComponent;
				workInProgress$1.memoizedState = null;
				workInProgress$1.updateQueue = null;
				var hasContext = false;
				if (isContextProvider(Component)) {
					hasContext = true;
					pushContextProvider(workInProgress$1);
				} else hasContext = false;
				workInProgress$1.memoizedState = value.state !== null && value.state !== undefined ? value.state : null;
				initializeUpdateQueue(workInProgress$1);
				adoptClassInstance(workInProgress$1, value);
				mountClassInstance(workInProgress$1, Component, props, renderLanes$1);
				return finishClassComponent(null, workInProgress$1, Component, true, hasContext, renderLanes$1);
			} else {
				workInProgress$1.tag = FunctionComponent;
				if (workInProgress$1.mode & StrictLegacyMode) {
					setIsStrictModeForDevtools(true);
					try {
						value = renderWithHooks(null, workInProgress$1, Component, props, context, renderLanes$1);
						hasId = checkDidRenderIdHook();
					} finally {
						setIsStrictModeForDevtools(false);
					}
				}
				if (getIsHydrating() && hasId) pushMaterializedTreeId(workInProgress$1);
				reconcileChildren(null, workInProgress$1, value, renderLanes$1);
				validateFunctionComponentInDev(workInProgress$1, Component);
				return workInProgress$1.child;
			}
		}
		function validateFunctionComponentInDev(workInProgress$1, Component) {
			{
				if (Component) {
					if (Component.childContextTypes) error("%s(...): childContextTypes cannot be defined on a function component.", Component.displayName || Component.name || "Component");
				}
				if (workInProgress$1.ref !== null) {
					var info = "";
					var ownerName = getCurrentFiberOwnerNameInDevOrNull();
					if (ownerName) info += "\n\nCheck the render method of `" + ownerName + "`.";
					var warningKey = ownerName || "";
					var debugSource = workInProgress$1._debugSource;
					if (debugSource) warningKey = debugSource.fileName + ":" + debugSource.lineNumber;
					if (!didWarnAboutFunctionRefs[warningKey]) {
						didWarnAboutFunctionRefs[warningKey] = true;
						error("Function components cannot be given refs. Attempts to access this ref will fail. Did you mean to use React.forwardRef()?%s", info);
					}
				}
				if (Component.defaultProps !== undefined) {
					var componentName = getComponentNameFromType(Component) || "Unknown";
					if (!didWarnAboutDefaultPropsOnFunctionComponent[componentName]) {
						error("%s: Support for defaultProps will be removed from function components in a future major release. Use JavaScript default parameters instead.", componentName);
						didWarnAboutDefaultPropsOnFunctionComponent[componentName] = true;
					}
				}
				if (typeof Component.getDerivedStateFromProps === "function") {
					var _componentName3 = getComponentNameFromType(Component) || "Unknown";
					if (!didWarnAboutGetDerivedStateOnFunctionComponent[_componentName3]) {
						error("%s: Function components do not support getDerivedStateFromProps.", _componentName3);
						didWarnAboutGetDerivedStateOnFunctionComponent[_componentName3] = true;
					}
				}
				if (typeof Component.contextType === "object" && Component.contextType !== null) {
					var _componentName4 = getComponentNameFromType(Component) || "Unknown";
					if (!didWarnAboutContextTypeOnFunctionComponent[_componentName4]) {
						error("%s: Function components do not support contextType.", _componentName4);
						didWarnAboutContextTypeOnFunctionComponent[_componentName4] = true;
					}
				}
			}
		}
		var SUSPENDED_MARKER = {
			dehydrated: null,
			treeContext: null,
			retryLane: NoLane
		};
		function mountSuspenseOffscreenState(renderLanes$1) {
			return {
				baseLanes: renderLanes$1,
				cachePool: getSuspendedCache(),
				transitions: null
			};
		}
		function updateSuspenseOffscreenState(prevOffscreenState, renderLanes$1) {
			var cachePool = null;
			return {
				baseLanes: mergeLanes(prevOffscreenState.baseLanes, renderLanes$1),
				cachePool,
				transitions: prevOffscreenState.transitions
			};
		}
		function shouldRemainOnFallback(suspenseContext, current$1, workInProgress$1, renderLanes$1) {
			if (current$1 !== null) {
				var suspenseState = current$1.memoizedState;
				if (suspenseState === null) return false;
			}
			return hasSuspenseContext(suspenseContext, ForceSuspenseFallback);
		}
		function getRemainingWorkInPrimaryTree(current$1, renderLanes$1) {
			return removeLanes(current$1.childLanes, renderLanes$1);
		}
		function updateSuspenseComponent(current$1, workInProgress$1, renderLanes$1) {
			var nextProps = workInProgress$1.pendingProps;
			if (shouldSuspend(workInProgress$1)) workInProgress$1.flags |= DidCapture;
			var suspenseContext = suspenseStackCursor.current;
			var showFallback = false;
			var didSuspend = (workInProgress$1.flags & DidCapture) !== NoFlags;
			if (didSuspend || shouldRemainOnFallback(suspenseContext, current$1)) {
				showFallback = true;
				workInProgress$1.flags &= ~DidCapture;
			} else if (current$1 === null || current$1.memoizedState !== null) suspenseContext = addSubtreeSuspenseContext(suspenseContext, InvisibleParentSuspenseContext);
			suspenseContext = setDefaultShallowSuspenseContext(suspenseContext);
			pushSuspenseContext(workInProgress$1, suspenseContext);
			if (current$1 === null) {
				tryToClaimNextHydratableInstance(workInProgress$1);
				var suspenseState = workInProgress$1.memoizedState;
				if (suspenseState !== null) {
					var dehydrated = suspenseState.dehydrated;
					if (dehydrated !== null) return mountDehydratedSuspenseComponent(workInProgress$1, dehydrated);
				}
				var nextPrimaryChildren = nextProps.children;
				var nextFallbackChildren = nextProps.fallback;
				if (showFallback) {
					var fallbackFragment = mountSuspenseFallbackChildren(workInProgress$1, nextPrimaryChildren, nextFallbackChildren, renderLanes$1);
					var primaryChildFragment = workInProgress$1.child;
					primaryChildFragment.memoizedState = mountSuspenseOffscreenState(renderLanes$1);
					workInProgress$1.memoizedState = SUSPENDED_MARKER;
					return fallbackFragment;
				} else return mountSuspensePrimaryChildren(workInProgress$1, nextPrimaryChildren);
			} else {
				var prevState = current$1.memoizedState;
				if (prevState !== null) {
					var _dehydrated = prevState.dehydrated;
					if (_dehydrated !== null) return updateDehydratedSuspenseComponent(current$1, workInProgress$1, didSuspend, nextProps, _dehydrated, prevState, renderLanes$1);
				}
				if (showFallback) {
					var _nextFallbackChildren = nextProps.fallback;
					var _nextPrimaryChildren = nextProps.children;
					var fallbackChildFragment = updateSuspenseFallbackChildren(current$1, workInProgress$1, _nextPrimaryChildren, _nextFallbackChildren, renderLanes$1);
					var _primaryChildFragment2 = workInProgress$1.child;
					var prevOffscreenState = current$1.child.memoizedState;
					_primaryChildFragment2.memoizedState = prevOffscreenState === null ? mountSuspenseOffscreenState(renderLanes$1) : updateSuspenseOffscreenState(prevOffscreenState, renderLanes$1);
					_primaryChildFragment2.childLanes = getRemainingWorkInPrimaryTree(current$1, renderLanes$1);
					workInProgress$1.memoizedState = SUSPENDED_MARKER;
					return fallbackChildFragment;
				} else {
					var _nextPrimaryChildren2 = nextProps.children;
					var _primaryChildFragment3 = updateSuspensePrimaryChildren(current$1, workInProgress$1, _nextPrimaryChildren2, renderLanes$1);
					workInProgress$1.memoizedState = null;
					return _primaryChildFragment3;
				}
			}
		}
		function mountSuspensePrimaryChildren(workInProgress$1, primaryChildren, renderLanes$1) {
			var mode = workInProgress$1.mode;
			var primaryChildProps = {
				mode: "visible",
				children: primaryChildren
			};
			var primaryChildFragment = mountWorkInProgressOffscreenFiber(primaryChildProps, mode);
			primaryChildFragment.return = workInProgress$1;
			workInProgress$1.child = primaryChildFragment;
			return primaryChildFragment;
		}
		function mountSuspenseFallbackChildren(workInProgress$1, primaryChildren, fallbackChildren, renderLanes$1) {
			var mode = workInProgress$1.mode;
			var progressedPrimaryFragment = workInProgress$1.child;
			var primaryChildProps = {
				mode: "hidden",
				children: primaryChildren
			};
			var primaryChildFragment;
			var fallbackChildFragment;
			if ((mode & ConcurrentMode) === NoMode && progressedPrimaryFragment !== null) {
				primaryChildFragment = progressedPrimaryFragment;
				primaryChildFragment.childLanes = NoLanes;
				primaryChildFragment.pendingProps = primaryChildProps;
				if (workInProgress$1.mode & ProfileMode) {
					primaryChildFragment.actualDuration = 0;
					primaryChildFragment.actualStartTime = -1;
					primaryChildFragment.selfBaseDuration = 0;
					primaryChildFragment.treeBaseDuration = 0;
				}
				fallbackChildFragment = createFiberFromFragment(fallbackChildren, mode, renderLanes$1, null);
			} else {
				primaryChildFragment = mountWorkInProgressOffscreenFiber(primaryChildProps, mode);
				fallbackChildFragment = createFiberFromFragment(fallbackChildren, mode, renderLanes$1, null);
			}
			primaryChildFragment.return = workInProgress$1;
			fallbackChildFragment.return = workInProgress$1;
			primaryChildFragment.sibling = fallbackChildFragment;
			workInProgress$1.child = primaryChildFragment;
			return fallbackChildFragment;
		}
		function mountWorkInProgressOffscreenFiber(offscreenProps, mode, renderLanes$1) {
			return createFiberFromOffscreen(offscreenProps, mode, NoLanes, null);
		}
		function updateWorkInProgressOffscreenFiber(current$1, offscreenProps) {
			return createWorkInProgress(current$1, offscreenProps);
		}
		function updateSuspensePrimaryChildren(current$1, workInProgress$1, primaryChildren, renderLanes$1) {
			var currentPrimaryChildFragment = current$1.child;
			var currentFallbackChildFragment = currentPrimaryChildFragment.sibling;
			var primaryChildFragment = updateWorkInProgressOffscreenFiber(currentPrimaryChildFragment, {
				mode: "visible",
				children: primaryChildren
			});
			if ((workInProgress$1.mode & ConcurrentMode) === NoMode) primaryChildFragment.lanes = renderLanes$1;
			primaryChildFragment.return = workInProgress$1;
			primaryChildFragment.sibling = null;
			if (currentFallbackChildFragment !== null) {
				var deletions = workInProgress$1.deletions;
				if (deletions === null) {
					workInProgress$1.deletions = [currentFallbackChildFragment];
					workInProgress$1.flags |= ChildDeletion;
				} else deletions.push(currentFallbackChildFragment);
			}
			workInProgress$1.child = primaryChildFragment;
			return primaryChildFragment;
		}
		function updateSuspenseFallbackChildren(current$1, workInProgress$1, primaryChildren, fallbackChildren, renderLanes$1) {
			var mode = workInProgress$1.mode;
			var currentPrimaryChildFragment = current$1.child;
			var currentFallbackChildFragment = currentPrimaryChildFragment.sibling;
			var primaryChildProps = {
				mode: "hidden",
				children: primaryChildren
			};
			var primaryChildFragment;
			if ((mode & ConcurrentMode) === NoMode && workInProgress$1.child !== currentPrimaryChildFragment) {
				var progressedPrimaryFragment = workInProgress$1.child;
				primaryChildFragment = progressedPrimaryFragment;
				primaryChildFragment.childLanes = NoLanes;
				primaryChildFragment.pendingProps = primaryChildProps;
				if (workInProgress$1.mode & ProfileMode) {
					primaryChildFragment.actualDuration = 0;
					primaryChildFragment.actualStartTime = -1;
					primaryChildFragment.selfBaseDuration = currentPrimaryChildFragment.selfBaseDuration;
					primaryChildFragment.treeBaseDuration = currentPrimaryChildFragment.treeBaseDuration;
				}
				workInProgress$1.deletions = null;
			} else {
				primaryChildFragment = updateWorkInProgressOffscreenFiber(currentPrimaryChildFragment, primaryChildProps);
				primaryChildFragment.subtreeFlags = currentPrimaryChildFragment.subtreeFlags & StaticMask;
			}
			var fallbackChildFragment;
			if (currentFallbackChildFragment !== null) fallbackChildFragment = createWorkInProgress(currentFallbackChildFragment, fallbackChildren);
else {
				fallbackChildFragment = createFiberFromFragment(fallbackChildren, mode, renderLanes$1, null);
				fallbackChildFragment.flags |= Placement;
			}
			fallbackChildFragment.return = workInProgress$1;
			primaryChildFragment.return = workInProgress$1;
			primaryChildFragment.sibling = fallbackChildFragment;
			workInProgress$1.child = primaryChildFragment;
			return fallbackChildFragment;
		}
		function retrySuspenseComponentWithoutHydrating(current$1, workInProgress$1, renderLanes$1, recoverableError) {
			if (recoverableError !== null) queueHydrationError(recoverableError);
			reconcileChildFibers(workInProgress$1, current$1.child, null, renderLanes$1);
			var nextProps = workInProgress$1.pendingProps;
			var primaryChildren = nextProps.children;
			var primaryChildFragment = mountSuspensePrimaryChildren(workInProgress$1, primaryChildren);
			primaryChildFragment.flags |= Placement;
			workInProgress$1.memoizedState = null;
			return primaryChildFragment;
		}
		function mountSuspenseFallbackAfterRetryWithoutHydrating(current$1, workInProgress$1, primaryChildren, fallbackChildren, renderLanes$1) {
			var fiberMode = workInProgress$1.mode;
			var primaryChildProps = {
				mode: "visible",
				children: primaryChildren
			};
			var primaryChildFragment = mountWorkInProgressOffscreenFiber(primaryChildProps, fiberMode);
			var fallbackChildFragment = createFiberFromFragment(fallbackChildren, fiberMode, renderLanes$1, null);
			fallbackChildFragment.flags |= Placement;
			primaryChildFragment.return = workInProgress$1;
			fallbackChildFragment.return = workInProgress$1;
			primaryChildFragment.sibling = fallbackChildFragment;
			workInProgress$1.child = primaryChildFragment;
			if ((workInProgress$1.mode & ConcurrentMode) !== NoMode) reconcileChildFibers(workInProgress$1, current$1.child, null, renderLanes$1);
			return fallbackChildFragment;
		}
		function mountDehydratedSuspenseComponent(workInProgress$1, suspenseInstance, renderLanes$1) {
			if ((workInProgress$1.mode & ConcurrentMode) === NoMode) {
				error("Cannot hydrate Suspense in legacy mode. Switch from ReactDOM.hydrate(element, container) to ReactDOMClient.hydrateRoot(container, <App />).render(element) or remove the Suspense components from the server rendered components.");
				workInProgress$1.lanes = laneToLanes(SyncLane);
			} else if (isSuspenseInstanceFallback(suspenseInstance)) workInProgress$1.lanes = laneToLanes(DefaultHydrationLane);
else workInProgress$1.lanes = laneToLanes(OffscreenLane);
			return null;
		}
		function updateDehydratedSuspenseComponent(current$1, workInProgress$1, didSuspend, nextProps, suspenseInstance, suspenseState, renderLanes$1) {
			if (!didSuspend) {
				warnIfHydrating();
				if ((workInProgress$1.mode & ConcurrentMode) === NoMode) return retrySuspenseComponentWithoutHydrating(
					current$1,
					workInProgress$1,
					renderLanes$1,
					// required — every concurrent mode path that causes hydration to
					// de-opt to client rendering should have an error message.
					null
);
				if (isSuspenseInstanceFallback(suspenseInstance)) {
					var digest, message, stack;
					{
						var _getSuspenseInstanceF = getSuspenseInstanceFallbackErrorDetails(suspenseInstance);
						digest = _getSuspenseInstanceF.digest;
						message = _getSuspenseInstanceF.message;
						stack = _getSuspenseInstanceF.stack;
					}
					var error$1;
					if (message) error$1 = new Error(message);
else error$1 = new Error("The server could not finish this Suspense boundary, likely due to an error during server rendering. Switched to client rendering.");
					var capturedValue = createCapturedValue(error$1, digest, stack);
					return retrySuspenseComponentWithoutHydrating(current$1, workInProgress$1, renderLanes$1, capturedValue);
				}
				var hasContextChanged$1 = includesSomeLane(renderLanes$1, current$1.childLanes);
				if (didReceiveUpdate || hasContextChanged$1) {
					var root$1 = getWorkInProgressRoot();
					if (root$1 !== null) {
						var attemptHydrationAtLane = getBumpedLaneForHydration(root$1, renderLanes$1);
						if (attemptHydrationAtLane !== NoLane && attemptHydrationAtLane !== suspenseState.retryLane) {
							suspenseState.retryLane = attemptHydrationAtLane;
							var eventTime = NoTimestamp;
							enqueueConcurrentRenderForLane(current$1, attemptHydrationAtLane);
							scheduleUpdateOnFiber(root$1, current$1, attemptHydrationAtLane, eventTime);
						}
					}
					renderDidSuspendDelayIfPossible();
					var _capturedValue = createCapturedValue(new Error("This Suspense boundary received an update before it finished hydrating. This caused the boundary to switch to client rendering. The usual way to fix this is to wrap the original update in startTransition."));
					return retrySuspenseComponentWithoutHydrating(current$1, workInProgress$1, renderLanes$1, _capturedValue);
				} else if (isSuspenseInstancePending(suspenseInstance)) {
					workInProgress$1.flags |= DidCapture;
					workInProgress$1.child = current$1.child;
					var retry = retryDehydratedSuspenseBoundary.bind(null, current$1);
					registerSuspenseInstanceRetry(suspenseInstance, retry);
					return null;
				} else {
					reenterHydrationStateFromDehydratedSuspenseInstance(workInProgress$1, suspenseInstance, suspenseState.treeContext);
					var primaryChildren = nextProps.children;
					var primaryChildFragment = mountSuspensePrimaryChildren(workInProgress$1, primaryChildren);
					primaryChildFragment.flags |= Hydrating;
					return primaryChildFragment;
				}
			} else if (workInProgress$1.flags & ForceClientRender) {
				workInProgress$1.flags &= ~ForceClientRender;
				var _capturedValue2 = createCapturedValue(new Error("There was an error while hydrating this Suspense boundary. Switched to client rendering."));
				return retrySuspenseComponentWithoutHydrating(current$1, workInProgress$1, renderLanes$1, _capturedValue2);
			} else if (workInProgress$1.memoizedState !== null) {
				workInProgress$1.child = current$1.child;
				workInProgress$1.flags |= DidCapture;
				return null;
			} else {
				var nextPrimaryChildren = nextProps.children;
				var nextFallbackChildren = nextProps.fallback;
				var fallbackChildFragment = mountSuspenseFallbackAfterRetryWithoutHydrating(current$1, workInProgress$1, nextPrimaryChildren, nextFallbackChildren, renderLanes$1);
				var _primaryChildFragment4 = workInProgress$1.child;
				_primaryChildFragment4.memoizedState = mountSuspenseOffscreenState(renderLanes$1);
				workInProgress$1.memoizedState = SUSPENDED_MARKER;
				return fallbackChildFragment;
			}
		}
		function scheduleSuspenseWorkOnFiber(fiber, renderLanes$1, propagationRoot) {
			fiber.lanes = mergeLanes(fiber.lanes, renderLanes$1);
			var alternate = fiber.alternate;
			if (alternate !== null) alternate.lanes = mergeLanes(alternate.lanes, renderLanes$1);
			scheduleContextWorkOnParentPath(fiber.return, renderLanes$1, propagationRoot);
		}
		function propagateSuspenseContextChange(workInProgress$1, firstChild, renderLanes$1) {
			var node = firstChild;
			while (node !== null) {
				if (node.tag === SuspenseComponent) {
					var state = node.memoizedState;
					if (state !== null) scheduleSuspenseWorkOnFiber(node, renderLanes$1, workInProgress$1);
				} else if (node.tag === SuspenseListComponent) scheduleSuspenseWorkOnFiber(node, renderLanes$1, workInProgress$1);
else if (node.child !== null) {
					node.child.return = node;
					node = node.child;
					continue;
				}
				if (node === workInProgress$1) return;
				while (node.sibling === null) {
					if (node.return === null || node.return === workInProgress$1) return;
					node = node.return;
				}
				node.sibling.return = node.return;
				node = node.sibling;
			}
		}
		function findLastContentRow(firstChild) {
			var row = firstChild;
			var lastContentRow = null;
			while (row !== null) {
				var currentRow = row.alternate;
				if (currentRow !== null && findFirstSuspended(currentRow) === null) lastContentRow = row;
				row = row.sibling;
			}
			return lastContentRow;
		}
		function validateRevealOrder(revealOrder) {
			if (revealOrder !== undefined && revealOrder !== "forwards" && revealOrder !== "backwards" && revealOrder !== "together" && !didWarnAboutRevealOrder[revealOrder]) {
				didWarnAboutRevealOrder[revealOrder] = true;
				if (typeof revealOrder === "string") switch (revealOrder.toLowerCase()) {
					case "together":
					case "forwards":
					case "backwards": {
						error("\"%s\" is not a valid value for revealOrder on <SuspenseList />. Use lowercase \"%s\" instead.", revealOrder, revealOrder.toLowerCase());
						break;
					}
					case "forward":
					case "backward": {
						error("\"%s\" is not a valid value for revealOrder on <SuspenseList />. React uses the -s suffix in the spelling. Use \"%ss\" instead.", revealOrder, revealOrder.toLowerCase());
						break;
					}
					default:
						error("\"%s\" is not a supported revealOrder on <SuspenseList />. Did you mean \"together\", \"forwards\" or \"backwards\"?", revealOrder);
						break;
				}
else error("%s is not a supported value for revealOrder on <SuspenseList />. Did you mean \"together\", \"forwards\" or \"backwards\"?", revealOrder);
			}
		}
		function validateTailOptions(tailMode, revealOrder) {
			if (tailMode !== undefined && !didWarnAboutTailOptions[tailMode]) {
				if (tailMode !== "collapsed" && tailMode !== "hidden") {
					didWarnAboutTailOptions[tailMode] = true;
					error("\"%s\" is not a supported value for tail on <SuspenseList />. Did you mean \"collapsed\" or \"hidden\"?", tailMode);
				} else if (revealOrder !== "forwards" && revealOrder !== "backwards") {
					didWarnAboutTailOptions[tailMode] = true;
					error("<SuspenseList tail=\"%s\" /> is only valid if revealOrder is \"forwards\" or \"backwards\". Did you mean to specify revealOrder=\"forwards\"?", tailMode);
				}
			}
		}
		function validateSuspenseListNestedChild(childSlot, index$1) {
			{
				var isAnArray = isArray(childSlot);
				var isIterable = !isAnArray && typeof getIteratorFn(childSlot) === "function";
				if (isAnArray || isIterable) {
					var type = isAnArray ? "array" : "iterable";
					error("A nested %s was passed to row #%s in <SuspenseList />. Wrap it in an additional SuspenseList to configure its revealOrder: <SuspenseList revealOrder=...> ... <SuspenseList revealOrder=...>{%s}</SuspenseList> ... </SuspenseList>", type, index$1, type);
					return false;
				}
			}
			return true;
		}
		function validateSuspenseListChildren(children, revealOrder) {
			if ((revealOrder === "forwards" || revealOrder === "backwards") && children !== undefined && children !== null && children !== false) if (isArray(children)) {
				for (var i$1 = 0; i$1 < children.length; i$1++) if (!validateSuspenseListNestedChild(children[i$1], i$1)) return;
			} else {
				var iteratorFn = getIteratorFn(children);
				if (typeof iteratorFn === "function") {
					var childrenIterator = iteratorFn.call(children);
					if (childrenIterator) {
						var step = childrenIterator.next();
						var _i = 0;
						for (; !step.done; step = childrenIterator.next()) {
							if (!validateSuspenseListNestedChild(step.value, _i)) return;
							_i++;
						}
					}
				} else error("A single row was passed to a <SuspenseList revealOrder=\"%s\" />. This is not useful since it needs multiple rows. Did you mean to pass multiple children or an array?", revealOrder);
			}
		}
		function initSuspenseListRenderState(workInProgress$1, isBackwards, tail, lastContentRow, tailMode) {
			var renderState = workInProgress$1.memoizedState;
			if (renderState === null) workInProgress$1.memoizedState = {
				isBackwards,
				rendering: null,
				renderingStartTime: 0,
				last: lastContentRow,
				tail,
				tailMode
			};
else {
				renderState.isBackwards = isBackwards;
				renderState.rendering = null;
				renderState.renderingStartTime = 0;
				renderState.last = lastContentRow;
				renderState.tail = tail;
				renderState.tailMode = tailMode;
			}
		}
		function updateSuspenseListComponent(current$1, workInProgress$1, renderLanes$1) {
			var nextProps = workInProgress$1.pendingProps;
			var revealOrder = nextProps.revealOrder;
			var tailMode = nextProps.tail;
			var newChildren = nextProps.children;
			validateRevealOrder(revealOrder);
			validateTailOptions(tailMode, revealOrder);
			validateSuspenseListChildren(newChildren, revealOrder);
			reconcileChildren(current$1, workInProgress$1, newChildren, renderLanes$1);
			var suspenseContext = suspenseStackCursor.current;
			var shouldForceFallback = hasSuspenseContext(suspenseContext, ForceSuspenseFallback);
			if (shouldForceFallback) {
				suspenseContext = setShallowSuspenseContext(suspenseContext, ForceSuspenseFallback);
				workInProgress$1.flags |= DidCapture;
			} else {
				var didSuspendBefore = current$1 !== null && (current$1.flags & DidCapture) !== NoFlags;
				if (didSuspendBefore) propagateSuspenseContextChange(workInProgress$1, workInProgress$1.child, renderLanes$1);
				suspenseContext = setDefaultShallowSuspenseContext(suspenseContext);
			}
			pushSuspenseContext(workInProgress$1, suspenseContext);
			if ((workInProgress$1.mode & ConcurrentMode) === NoMode) workInProgress$1.memoizedState = null;
else switch (revealOrder) {
				case "forwards": {
					var lastContentRow = findLastContentRow(workInProgress$1.child);
					var tail;
					if (lastContentRow === null) {
						tail = workInProgress$1.child;
						workInProgress$1.child = null;
					} else {
						tail = lastContentRow.sibling;
						lastContentRow.sibling = null;
					}
					initSuspenseListRenderState(workInProgress$1, false, tail, lastContentRow, tailMode);
					break;
				}
				case "backwards": {
					var _tail = null;
					var row = workInProgress$1.child;
					workInProgress$1.child = null;
					while (row !== null) {
						var currentRow = row.alternate;
						if (currentRow !== null && findFirstSuspended(currentRow) === null) {
							workInProgress$1.child = row;
							break;
						}
						var nextRow = row.sibling;
						row.sibling = _tail;
						_tail = row;
						row = nextRow;
					}
					initSuspenseListRenderState(workInProgress$1, true, _tail, null, tailMode);
					break;
				}
				case "together": {
					initSuspenseListRenderState(workInProgress$1, false, null, null, undefined);
					break;
				}
				default: workInProgress$1.memoizedState = null;
			}
			return workInProgress$1.child;
		}
		function updatePortalComponent(current$1, workInProgress$1, renderLanes$1) {
			pushHostContainer(workInProgress$1, workInProgress$1.stateNode.containerInfo);
			var nextChildren = workInProgress$1.pendingProps;
			if (current$1 === null) workInProgress$1.child = reconcileChildFibers(workInProgress$1, null, nextChildren, renderLanes$1);
else reconcileChildren(current$1, workInProgress$1, nextChildren, renderLanes$1);
			return workInProgress$1.child;
		}
		var hasWarnedAboutUsingNoValuePropOnContextProvider = false;
		function updateContextProvider(current$1, workInProgress$1, renderLanes$1) {
			var providerType = workInProgress$1.type;
			var context = providerType._context;
			var newProps = workInProgress$1.pendingProps;
			var oldProps = workInProgress$1.memoizedProps;
			var newValue = newProps.value;
			{
				if (!("value" in newProps)) {
					if (!hasWarnedAboutUsingNoValuePropOnContextProvider) {
						hasWarnedAboutUsingNoValuePropOnContextProvider = true;
						error("The `value` prop is required for the `<Context.Provider>`. Did you misspell it or forget to pass it?");
					}
				}
				var providerPropTypes = workInProgress$1.type.propTypes;
				if (providerPropTypes) checkPropTypes(providerPropTypes, newProps, "prop", "Context.Provider");
			}
			pushProvider(workInProgress$1, context, newValue);
			if (oldProps !== null) {
				var oldValue = oldProps.value;
				if (objectIs(oldValue, newValue)) {
					if (oldProps.children === newProps.children && !hasContextChanged()) return bailoutOnAlreadyFinishedWork(current$1, workInProgress$1, renderLanes$1);
				} else propagateContextChange(workInProgress$1, context, renderLanes$1);
			}
			var newChildren = newProps.children;
			reconcileChildren(current$1, workInProgress$1, newChildren, renderLanes$1);
			return workInProgress$1.child;
		}
		var hasWarnedAboutUsingContextAsConsumer = false;
		function updateContextConsumer(current$1, workInProgress$1, renderLanes$1) {
			var context = workInProgress$1.type;
			if (context._context === undefined) {
				if (context !== context.Consumer) {
					if (!hasWarnedAboutUsingContextAsConsumer) {
						hasWarnedAboutUsingContextAsConsumer = true;
						error("Rendering <Context> directly is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?");
					}
				}
			} else context = context._context;
			var newProps = workInProgress$1.pendingProps;
			var render$1 = newProps.children;
			if (typeof render$1 !== "function") error("A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it.");
			prepareToReadContext(workInProgress$1, renderLanes$1);
			var newValue = readContext(context);
			markComponentRenderStarted(workInProgress$1);
			var newChildren;
			{
				ReactCurrentOwner$1.current = workInProgress$1;
				setIsRendering(true);
				newChildren = render$1(newValue);
				setIsRendering(false);
			}
			markComponentRenderStopped();
			workInProgress$1.flags |= PerformedWork;
			reconcileChildren(current$1, workInProgress$1, newChildren, renderLanes$1);
			return workInProgress$1.child;
		}
		function markWorkInProgressReceivedUpdate() {
			didReceiveUpdate = true;
		}
		function resetSuspendedCurrentOnMountInLegacyMode(current$1, workInProgress$1) {
			if ((workInProgress$1.mode & ConcurrentMode) === NoMode) {
				if (current$1 !== null) {
					current$1.alternate = null;
					workInProgress$1.alternate = null;
					workInProgress$1.flags |= Placement;
				}
			}
		}
		function bailoutOnAlreadyFinishedWork(current$1, workInProgress$1, renderLanes$1) {
			if (current$1 !== null) workInProgress$1.dependencies = current$1.dependencies;
			stopProfilerTimerIfRunning();
			markSkippedUpdateLanes(workInProgress$1.lanes);
			if (!includesSomeLane(renderLanes$1, workInProgress$1.childLanes)) return null;
			cloneChildFibers(current$1, workInProgress$1);
			return workInProgress$1.child;
		}
		function remountFiber(current$1, oldWorkInProgress, newWorkInProgress) {
			{
				var returnFiber = oldWorkInProgress.return;
				if (returnFiber === null) throw new Error("Cannot swap the root fiber.");
				current$1.alternate = null;
				oldWorkInProgress.alternate = null;
				newWorkInProgress.index = oldWorkInProgress.index;
				newWorkInProgress.sibling = oldWorkInProgress.sibling;
				newWorkInProgress.return = oldWorkInProgress.return;
				newWorkInProgress.ref = oldWorkInProgress.ref;
				if (oldWorkInProgress === returnFiber.child) returnFiber.child = newWorkInProgress;
else {
					var prevSibling = returnFiber.child;
					if (prevSibling === null) throw new Error("Expected parent to have a child.");
					while (prevSibling.sibling !== oldWorkInProgress) {
						prevSibling = prevSibling.sibling;
						if (prevSibling === null) throw new Error("Expected to find the previous sibling.");
					}
					prevSibling.sibling = newWorkInProgress;
				}
				var deletions = returnFiber.deletions;
				if (deletions === null) {
					returnFiber.deletions = [current$1];
					returnFiber.flags |= ChildDeletion;
				} else deletions.push(current$1);
				newWorkInProgress.flags |= Placement;
				return newWorkInProgress;
			}
		}
		function checkScheduledUpdateOrContext(current$1, renderLanes$1) {
			var updateLanes = current$1.lanes;
			if (includesSomeLane(updateLanes, renderLanes$1)) return true;
			return false;
		}
		function attemptEarlyBailoutIfNoScheduledUpdate(current$1, workInProgress$1, renderLanes$1) {
			switch (workInProgress$1.tag) {
				case HostRoot:
					pushHostRootContext(workInProgress$1);
					var root$1 = workInProgress$1.stateNode;
					resetHydrationState();
					break;
				case HostComponent:
					pushHostContext(workInProgress$1);
					break;
				case ClassComponent: {
					var Component = workInProgress$1.type;
					if (isContextProvider(Component)) pushContextProvider(workInProgress$1);
					break;
				}
				case HostPortal:
					pushHostContainer(workInProgress$1, workInProgress$1.stateNode.containerInfo);
					break;
				case ContextProvider: {
					var newValue = workInProgress$1.memoizedProps.value;
					var context = workInProgress$1.type._context;
					pushProvider(workInProgress$1, context, newValue);
					break;
				}
				case Profiler:
					{
						var hasChildWork = includesSomeLane(renderLanes$1, workInProgress$1.childLanes);
						if (hasChildWork) workInProgress$1.flags |= Update;
						{
							var stateNode = workInProgress$1.stateNode;
							stateNode.effectDuration = 0;
							stateNode.passiveEffectDuration = 0;
						}
					}
					break;
				case SuspenseComponent: {
					var state = workInProgress$1.memoizedState;
					if (state !== null) {
						if (state.dehydrated !== null) {
							pushSuspenseContext(workInProgress$1, setDefaultShallowSuspenseContext(suspenseStackCursor.current));
							workInProgress$1.flags |= DidCapture;
							return null;
						}
						var primaryChildFragment = workInProgress$1.child;
						var primaryChildLanes = primaryChildFragment.childLanes;
						if (includesSomeLane(renderLanes$1, primaryChildLanes)) return updateSuspenseComponent(current$1, workInProgress$1, renderLanes$1);
else {
							pushSuspenseContext(workInProgress$1, setDefaultShallowSuspenseContext(suspenseStackCursor.current));
							var child = bailoutOnAlreadyFinishedWork(current$1, workInProgress$1, renderLanes$1);
							if (child !== null) return child.sibling;
else return null;
						}
					} else pushSuspenseContext(workInProgress$1, setDefaultShallowSuspenseContext(suspenseStackCursor.current));
					break;
				}
				case SuspenseListComponent: {
					var didSuspendBefore = (current$1.flags & DidCapture) !== NoFlags;
					var _hasChildWork = includesSomeLane(renderLanes$1, workInProgress$1.childLanes);
					if (didSuspendBefore) {
						if (_hasChildWork) return updateSuspenseListComponent(current$1, workInProgress$1, renderLanes$1);
						workInProgress$1.flags |= DidCapture;
					}
					var renderState = workInProgress$1.memoizedState;
					if (renderState !== null) {
						renderState.rendering = null;
						renderState.tail = null;
						renderState.lastEffect = null;
					}
					pushSuspenseContext(workInProgress$1, suspenseStackCursor.current);
					if (_hasChildWork) break;
else return null;
				}
				case OffscreenComponent:
				case LegacyHiddenComponent: {
					workInProgress$1.lanes = NoLanes;
					return updateOffscreenComponent(current$1, workInProgress$1, renderLanes$1);
				}
			}
			return bailoutOnAlreadyFinishedWork(current$1, workInProgress$1, renderLanes$1);
		}
		function beginWork(current$1, workInProgress$1, renderLanes$1) {
			if (workInProgress$1._debugNeedsRemount && current$1 !== null) return remountFiber(current$1, workInProgress$1, createFiberFromTypeAndProps(workInProgress$1.type, workInProgress$1.key, workInProgress$1.pendingProps, workInProgress$1._debugOwner || null, workInProgress$1.mode, workInProgress$1.lanes));
			if (current$1 !== null) {
				var oldProps = current$1.memoizedProps;
				var newProps = workInProgress$1.pendingProps;
				if (oldProps !== newProps || hasContextChanged() || workInProgress$1.type !== current$1.type) didReceiveUpdate = true;
else {
					var hasScheduledUpdateOrContext = checkScheduledUpdateOrContext(current$1, renderLanes$1);
					if (!hasScheduledUpdateOrContext && (workInProgress$1.flags & DidCapture) === NoFlags) {
						didReceiveUpdate = false;
						return attemptEarlyBailoutIfNoScheduledUpdate(current$1, workInProgress$1, renderLanes$1);
					}
					if ((current$1.flags & ForceUpdateForLegacySuspense) !== NoFlags) didReceiveUpdate = true;
else didReceiveUpdate = false;
				}
			} else {
				didReceiveUpdate = false;
				if (getIsHydrating() && isForkedChild(workInProgress$1)) {
					var slotIndex = workInProgress$1.index;
					var numberOfForks = getForksAtLevel();
					pushTreeId(workInProgress$1, numberOfForks, slotIndex);
				}
			}
			workInProgress$1.lanes = NoLanes;
			switch (workInProgress$1.tag) {
				case IndeterminateComponent: return mountIndeterminateComponent(current$1, workInProgress$1, workInProgress$1.type, renderLanes$1);
				case LazyComponent: {
					var elementType = workInProgress$1.elementType;
					return mountLazyComponent(current$1, workInProgress$1, elementType, renderLanes$1);
				}
				case FunctionComponent: {
					var Component = workInProgress$1.type;
					var unresolvedProps = workInProgress$1.pendingProps;
					var resolvedProps = workInProgress$1.elementType === Component ? unresolvedProps : resolveDefaultProps(Component, unresolvedProps);
					return updateFunctionComponent(current$1, workInProgress$1, Component, resolvedProps, renderLanes$1);
				}
				case ClassComponent: {
					var _Component = workInProgress$1.type;
					var _unresolvedProps = workInProgress$1.pendingProps;
					var _resolvedProps = workInProgress$1.elementType === _Component ? _unresolvedProps : resolveDefaultProps(_Component, _unresolvedProps);
					return updateClassComponent(current$1, workInProgress$1, _Component, _resolvedProps, renderLanes$1);
				}
				case HostRoot: return updateHostRoot(current$1, workInProgress$1, renderLanes$1);
				case HostComponent: return updateHostComponent(current$1, workInProgress$1, renderLanes$1);
				case HostText: return updateHostText(current$1, workInProgress$1);
				case SuspenseComponent: return updateSuspenseComponent(current$1, workInProgress$1, renderLanes$1);
				case HostPortal: return updatePortalComponent(current$1, workInProgress$1, renderLanes$1);
				case ForwardRef: {
					var type = workInProgress$1.type;
					var _unresolvedProps2 = workInProgress$1.pendingProps;
					var _resolvedProps2 = workInProgress$1.elementType === type ? _unresolvedProps2 : resolveDefaultProps(type, _unresolvedProps2);
					return updateForwardRef(current$1, workInProgress$1, type, _resolvedProps2, renderLanes$1);
				}
				case Fragment$2: return updateFragment(current$1, workInProgress$1, renderLanes$1);
				case Mode: return updateMode(current$1, workInProgress$1, renderLanes$1);
				case Profiler: return updateProfiler(current$1, workInProgress$1, renderLanes$1);
				case ContextProvider: return updateContextProvider(current$1, workInProgress$1, renderLanes$1);
				case ContextConsumer: return updateContextConsumer(current$1, workInProgress$1, renderLanes$1);
				case MemoComponent: {
					var _type2 = workInProgress$1.type;
					var _unresolvedProps3 = workInProgress$1.pendingProps;
					var _resolvedProps3 = resolveDefaultProps(_type2, _unresolvedProps3);
					if (workInProgress$1.type !== workInProgress$1.elementType) {
						var outerPropTypes = _type2.propTypes;
						if (outerPropTypes) checkPropTypes(outerPropTypes, _resolvedProps3, "prop", getComponentNameFromType(_type2));
					}
					_resolvedProps3 = resolveDefaultProps(_type2.type, _resolvedProps3);
					return updateMemoComponent(current$1, workInProgress$1, _type2, _resolvedProps3, renderLanes$1);
				}
				case SimpleMemoComponent: return updateSimpleMemoComponent(current$1, workInProgress$1, workInProgress$1.type, workInProgress$1.pendingProps, renderLanes$1);
				case IncompleteClassComponent: {
					var _Component2 = workInProgress$1.type;
					var _unresolvedProps4 = workInProgress$1.pendingProps;
					var _resolvedProps4 = workInProgress$1.elementType === _Component2 ? _unresolvedProps4 : resolveDefaultProps(_Component2, _unresolvedProps4);
					return mountIncompleteClassComponent(current$1, workInProgress$1, _Component2, _resolvedProps4, renderLanes$1);
				}
				case SuspenseListComponent: return updateSuspenseListComponent(current$1, workInProgress$1, renderLanes$1);
				case ScopeComponent: break;
				case OffscreenComponent: return updateOffscreenComponent(current$1, workInProgress$1, renderLanes$1);
			}
			throw new Error("Unknown unit of work tag (" + workInProgress$1.tag + "). This error is likely caused by a bug in " + "React. Please file an issue.");
		}
		function markUpdate(workInProgress$1) {
			workInProgress$1.flags |= Update;
		}
		function markRef$1(workInProgress$1) {
			workInProgress$1.flags |= Ref;
			workInProgress$1.flags |= RefStatic;
		}
		var appendAllChildren;
		var updateHostContainer;
		var updateHostComponent$1;
		var updateHostText$1;
		{
			appendAllChildren = function(parent, workInProgress$1, needsVisibilityToggle, isHidden) {
				var node = workInProgress$1.child;
				while (node !== null) {
					if (node.tag === HostComponent || node.tag === HostText) appendInitialChild(parent, node.stateNode);
else if (node.tag === HostPortal);
else if (node.child !== null) {
						node.child.return = node;
						node = node.child;
						continue;
					}
					if (node === workInProgress$1) return;
					while (node.sibling === null) {
						if (node.return === null || node.return === workInProgress$1) return;
						node = node.return;
					}
					node.sibling.return = node.return;
					node = node.sibling;
				}
			};
			updateHostContainer = function(current$1, workInProgress$1) {};
			updateHostComponent$1 = function(current$1, workInProgress$1, type, newProps, rootContainerInstance) {
				var oldProps = current$1.memoizedProps;
				if (oldProps === newProps) return;
				var instance = workInProgress$1.stateNode;
				var currentHostContext = getHostContext();
				var updatePayload = prepareUpdate(instance, type, oldProps, newProps, rootContainerInstance, currentHostContext);
				workInProgress$1.updateQueue = updatePayload;
				if (updatePayload) markUpdate(workInProgress$1);
			};
			updateHostText$1 = function(current$1, workInProgress$1, oldText, newText) {
				if (oldText !== newText) markUpdate(workInProgress$1);
			};
		}
		function cutOffTailIfNeeded(renderState, hasRenderedATailFallback) {
			if (getIsHydrating()) return;
			switch (renderState.tailMode) {
				case "hidden": {
					var tailNode = renderState.tail;
					var lastTailNode = null;
					while (tailNode !== null) {
						if (tailNode.alternate !== null) lastTailNode = tailNode;
						tailNode = tailNode.sibling;
					}
					if (lastTailNode === null) renderState.tail = null;
else lastTailNode.sibling = null;
					break;
				}
				case "collapsed": {
					var _tailNode = renderState.tail;
					var _lastTailNode = null;
					while (_tailNode !== null) {
						if (_tailNode.alternate !== null) _lastTailNode = _tailNode;
						_tailNode = _tailNode.sibling;
					}
					if (_lastTailNode === null) if (!hasRenderedATailFallback && renderState.tail !== null) renderState.tail.sibling = null;
else renderState.tail = null;
else _lastTailNode.sibling = null;
					break;
				}
			}
		}
		function bubbleProperties(completedWork) {
			var didBailout = completedWork.alternate !== null && completedWork.alternate.child === completedWork.child;
			var newChildLanes = NoLanes;
			var subtreeFlags = NoFlags;
			if (!didBailout) {
				if ((completedWork.mode & ProfileMode) !== NoMode) {
					var actualDuration = completedWork.actualDuration;
					var treeBaseDuration = completedWork.selfBaseDuration;
					var child = completedWork.child;
					while (child !== null) {
						newChildLanes = mergeLanes(newChildLanes, mergeLanes(child.lanes, child.childLanes));
						subtreeFlags |= child.subtreeFlags;
						subtreeFlags |= child.flags;
						actualDuration += child.actualDuration;
						treeBaseDuration += child.treeBaseDuration;
						child = child.sibling;
					}
					completedWork.actualDuration = actualDuration;
					completedWork.treeBaseDuration = treeBaseDuration;
				} else {
					var _child = completedWork.child;
					while (_child !== null) {
						newChildLanes = mergeLanes(newChildLanes, mergeLanes(_child.lanes, _child.childLanes));
						subtreeFlags |= _child.subtreeFlags;
						subtreeFlags |= _child.flags;
						_child.return = completedWork;
						_child = _child.sibling;
					}
				}
				completedWork.subtreeFlags |= subtreeFlags;
			} else {
				if ((completedWork.mode & ProfileMode) !== NoMode) {
					var _treeBaseDuration = completedWork.selfBaseDuration;
					var _child2 = completedWork.child;
					while (_child2 !== null) {
						newChildLanes = mergeLanes(newChildLanes, mergeLanes(_child2.lanes, _child2.childLanes));
						subtreeFlags |= _child2.subtreeFlags & StaticMask;
						subtreeFlags |= _child2.flags & StaticMask;
						_treeBaseDuration += _child2.treeBaseDuration;
						_child2 = _child2.sibling;
					}
					completedWork.treeBaseDuration = _treeBaseDuration;
				} else {
					var _child3 = completedWork.child;
					while (_child3 !== null) {
						newChildLanes = mergeLanes(newChildLanes, mergeLanes(_child3.lanes, _child3.childLanes));
						subtreeFlags |= _child3.subtreeFlags & StaticMask;
						subtreeFlags |= _child3.flags & StaticMask;
						_child3.return = completedWork;
						_child3 = _child3.sibling;
					}
				}
				completedWork.subtreeFlags |= subtreeFlags;
			}
			completedWork.childLanes = newChildLanes;
			return didBailout;
		}
		function completeDehydratedSuspenseBoundary(current$1, workInProgress$1, nextState) {
			if (hasUnhydratedTailNodes() && (workInProgress$1.mode & ConcurrentMode) !== NoMode && (workInProgress$1.flags & DidCapture) === NoFlags) {
				warnIfUnhydratedTailNodes(workInProgress$1);
				resetHydrationState();
				workInProgress$1.flags |= ForceClientRender | Incomplete | ShouldCapture;
				return false;
			}
			var wasHydrated = popHydrationState(workInProgress$1);
			if (nextState !== null && nextState.dehydrated !== null) if (current$1 === null) {
				if (!wasHydrated) throw new Error("A dehydrated suspense component was completed without a hydrated node. This is probably a bug in React.");
				prepareToHydrateHostSuspenseInstance(workInProgress$1);
				bubbleProperties(workInProgress$1);
				if ((workInProgress$1.mode & ProfileMode) !== NoMode) {
					var isTimedOutSuspense = nextState !== null;
					if (isTimedOutSuspense) {
						var primaryChildFragment = workInProgress$1.child;
						if (primaryChildFragment !== null) workInProgress$1.treeBaseDuration -= primaryChildFragment.treeBaseDuration;
					}
				}
				return false;
			} else {
				resetHydrationState();
				if ((workInProgress$1.flags & DidCapture) === NoFlags) workInProgress$1.memoizedState = null;
				workInProgress$1.flags |= Update;
				bubbleProperties(workInProgress$1);
				if ((workInProgress$1.mode & ProfileMode) !== NoMode) {
					var _isTimedOutSuspense = nextState !== null;
					if (_isTimedOutSuspense) {
						var _primaryChildFragment = workInProgress$1.child;
						if (_primaryChildFragment !== null) workInProgress$1.treeBaseDuration -= _primaryChildFragment.treeBaseDuration;
					}
				}
				return false;
			}
else {
				upgradeHydrationErrorsToRecoverable();
				return true;
			}
		}
		function completeWork(current$1, workInProgress$1, renderLanes$1) {
			var newProps = workInProgress$1.pendingProps;
			popTreeContext(workInProgress$1);
			switch (workInProgress$1.tag) {
				case IndeterminateComponent:
				case LazyComponent:
				case SimpleMemoComponent:
				case FunctionComponent:
				case ForwardRef:
				case Fragment$2:
				case Mode:
				case Profiler:
				case ContextConsumer:
				case MemoComponent:
					bubbleProperties(workInProgress$1);
					return null;
				case ClassComponent: {
					var Component = workInProgress$1.type;
					if (isContextProvider(Component)) popContext(workInProgress$1);
					bubbleProperties(workInProgress$1);
					return null;
				}
				case HostRoot: {
					var fiberRoot = workInProgress$1.stateNode;
					popHostContainer(workInProgress$1);
					popTopLevelContextObject(workInProgress$1);
					resetWorkInProgressVersions();
					if (fiberRoot.pendingContext) {
						fiberRoot.context = fiberRoot.pendingContext;
						fiberRoot.pendingContext = null;
					}
					if (current$1 === null || current$1.child === null) {
						var wasHydrated = popHydrationState(workInProgress$1);
						if (wasHydrated) markUpdate(workInProgress$1);
else if (current$1 !== null) {
							var prevState = current$1.memoizedState;
							if (!prevState.isDehydrated || (workInProgress$1.flags & ForceClientRender) !== NoFlags) {
								workInProgress$1.flags |= Snapshot;
								upgradeHydrationErrorsToRecoverable();
							}
						}
					}
					updateHostContainer(current$1, workInProgress$1);
					bubbleProperties(workInProgress$1);
					return null;
				}
				case HostComponent: {
					popHostContext(workInProgress$1);
					var rootContainerInstance = getRootHostContainer();
					var type = workInProgress$1.type;
					if (current$1 !== null && workInProgress$1.stateNode != null) {
						updateHostComponent$1(current$1, workInProgress$1, type, newProps, rootContainerInstance);
						if (current$1.ref !== workInProgress$1.ref) markRef$1(workInProgress$1);
					} else {
						if (!newProps) {
							if (workInProgress$1.stateNode === null) throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
							bubbleProperties(workInProgress$1);
							return null;
						}
						var currentHostContext = getHostContext();
						var _wasHydrated = popHydrationState(workInProgress$1);
						if (_wasHydrated) {
							if (prepareToHydrateHostInstance(workInProgress$1, rootContainerInstance, currentHostContext)) markUpdate(workInProgress$1);
						} else {
							var instance = createInstance(type, newProps, rootContainerInstance, currentHostContext, workInProgress$1);
							appendAllChildren(instance, workInProgress$1, false, false);
							workInProgress$1.stateNode = instance;
							if (finalizeInitialChildren(instance, type, newProps, rootContainerInstance)) markUpdate(workInProgress$1);
						}
						if (workInProgress$1.ref !== null) markRef$1(workInProgress$1);
					}
					bubbleProperties(workInProgress$1);
					return null;
				}
				case HostText: {
					var newText = newProps;
					if (current$1 && workInProgress$1.stateNode != null) {
						var oldText = current$1.memoizedProps;
						updateHostText$1(current$1, workInProgress$1, oldText, newText);
					} else {
						if (typeof newText !== "string") {
							if (workInProgress$1.stateNode === null) throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
						}
						var _rootContainerInstance = getRootHostContainer();
						var _currentHostContext = getHostContext();
						var _wasHydrated2 = popHydrationState(workInProgress$1);
						if (_wasHydrated2) {
							if (prepareToHydrateHostTextInstance(workInProgress$1)) markUpdate(workInProgress$1);
						} else workInProgress$1.stateNode = createTextInstance(newText, _rootContainerInstance, _currentHostContext, workInProgress$1);
					}
					bubbleProperties(workInProgress$1);
					return null;
				}
				case SuspenseComponent: {
					popSuspenseContext(workInProgress$1);
					var nextState = workInProgress$1.memoizedState;
					if (current$1 === null || current$1.memoizedState !== null && current$1.memoizedState.dehydrated !== null) {
						var fallthroughToNormalSuspensePath = completeDehydratedSuspenseBoundary(current$1, workInProgress$1, nextState);
						if (!fallthroughToNormalSuspensePath) if (workInProgress$1.flags & ShouldCapture) return workInProgress$1;
else return null;
					}
					if ((workInProgress$1.flags & DidCapture) !== NoFlags) {
						workInProgress$1.lanes = renderLanes$1;
						if ((workInProgress$1.mode & ProfileMode) !== NoMode) transferActualDuration(workInProgress$1);
						return workInProgress$1;
					}
					var nextDidTimeout = nextState !== null;
					var prevDidTimeout = current$1 !== null && current$1.memoizedState !== null;
					if (nextDidTimeout !== prevDidTimeout) {
						if (nextDidTimeout) {
							var _offscreenFiber2 = workInProgress$1.child;
							_offscreenFiber2.flags |= Visibility;
							if ((workInProgress$1.mode & ConcurrentMode) !== NoMode) {
								var hasInvisibleChildContext = current$1 === null && (workInProgress$1.memoizedProps.unstable_avoidThisFallback !== true || !enableSuspenseAvoidThisFallback);
								if (hasInvisibleChildContext || hasSuspenseContext(suspenseStackCursor.current, InvisibleParentSuspenseContext)) renderDidSuspend();
else renderDidSuspendDelayIfPossible();
							}
						}
					}
					var wakeables = workInProgress$1.updateQueue;
					if (wakeables !== null) workInProgress$1.flags |= Update;
					bubbleProperties(workInProgress$1);
					if ((workInProgress$1.mode & ProfileMode) !== NoMode) {
						if (nextDidTimeout) {
							var primaryChildFragment = workInProgress$1.child;
							if (primaryChildFragment !== null) workInProgress$1.treeBaseDuration -= primaryChildFragment.treeBaseDuration;
						}
					}
					return null;
				}
				case HostPortal:
					popHostContainer(workInProgress$1);
					updateHostContainer(current$1, workInProgress$1);
					if (current$1 === null) preparePortalMount(workInProgress$1.stateNode.containerInfo);
					bubbleProperties(workInProgress$1);
					return null;
				case ContextProvider:
					var context = workInProgress$1.type._context;
					popProvider(context, workInProgress$1);
					bubbleProperties(workInProgress$1);
					return null;
				case IncompleteClassComponent: {
					var _Component = workInProgress$1.type;
					if (isContextProvider(_Component)) popContext(workInProgress$1);
					bubbleProperties(workInProgress$1);
					return null;
				}
				case SuspenseListComponent: {
					popSuspenseContext(workInProgress$1);
					var renderState = workInProgress$1.memoizedState;
					if (renderState === null) {
						bubbleProperties(workInProgress$1);
						return null;
					}
					var didSuspendAlready = (workInProgress$1.flags & DidCapture) !== NoFlags;
					var renderedTail = renderState.rendering;
					if (renderedTail === null) if (!didSuspendAlready) {
						var cannotBeSuspended = renderHasNotSuspendedYet() && (current$1 === null || (current$1.flags & DidCapture) === NoFlags);
						if (!cannotBeSuspended) {
							var row = workInProgress$1.child;
							while (row !== null) {
								var suspended = findFirstSuspended(row);
								if (suspended !== null) {
									didSuspendAlready = true;
									workInProgress$1.flags |= DidCapture;
									cutOffTailIfNeeded(renderState, false);
									var newThenables = suspended.updateQueue;
									if (newThenables !== null) {
										workInProgress$1.updateQueue = newThenables;
										workInProgress$1.flags |= Update;
									}
									workInProgress$1.subtreeFlags = NoFlags;
									resetChildFibers(workInProgress$1, renderLanes$1);
									pushSuspenseContext(workInProgress$1, setShallowSuspenseContext(suspenseStackCursor.current, ForceSuspenseFallback));
									return workInProgress$1.child;
								}
								row = row.sibling;
							}
						}
						if (renderState.tail !== null && now() > getRenderTargetTime()) {
							workInProgress$1.flags |= DidCapture;
							didSuspendAlready = true;
							cutOffTailIfNeeded(renderState, false);
							workInProgress$1.lanes = SomeRetryLane;
						}
					} else cutOffTailIfNeeded(renderState, false);
else {
						if (!didSuspendAlready) {
							var _suspended = findFirstSuspended(renderedTail);
							if (_suspended !== null) {
								workInProgress$1.flags |= DidCapture;
								didSuspendAlready = true;
								var _newThenables = _suspended.updateQueue;
								if (_newThenables !== null) {
									workInProgress$1.updateQueue = _newThenables;
									workInProgress$1.flags |= Update;
								}
								cutOffTailIfNeeded(renderState, true);
								if (renderState.tail === null && renderState.tailMode === "hidden" && !renderedTail.alternate && !getIsHydrating()) {
									bubbleProperties(workInProgress$1);
									return null;
								}
							} else if (now() * 2 - renderState.renderingStartTime > getRenderTargetTime() && renderLanes$1 !== OffscreenLane) {
								workInProgress$1.flags |= DidCapture;
								didSuspendAlready = true;
								cutOffTailIfNeeded(renderState, false);
								workInProgress$1.lanes = SomeRetryLane;
							}
						}
						if (renderState.isBackwards) {
							renderedTail.sibling = workInProgress$1.child;
							workInProgress$1.child = renderedTail;
						} else {
							var previousSibling = renderState.last;
							if (previousSibling !== null) previousSibling.sibling = renderedTail;
else workInProgress$1.child = renderedTail;
							renderState.last = renderedTail;
						}
					}
					if (renderState.tail !== null) {
						var next = renderState.tail;
						renderState.rendering = next;
						renderState.tail = next.sibling;
						renderState.renderingStartTime = now();
						next.sibling = null;
						var suspenseContext = suspenseStackCursor.current;
						if (didSuspendAlready) suspenseContext = setShallowSuspenseContext(suspenseContext, ForceSuspenseFallback);
else suspenseContext = setDefaultShallowSuspenseContext(suspenseContext);
						pushSuspenseContext(workInProgress$1, suspenseContext);
						return next;
					}
					bubbleProperties(workInProgress$1);
					return null;
				}
				case ScopeComponent: break;
				case OffscreenComponent:
				case LegacyHiddenComponent: {
					popRenderLanes(workInProgress$1);
					var _nextState = workInProgress$1.memoizedState;
					var nextIsHidden = _nextState !== null;
					if (current$1 !== null) {
						var _prevState = current$1.memoizedState;
						var prevIsHidden = _prevState !== null;
						if (prevIsHidden !== nextIsHidden && !enableLegacyHidden) workInProgress$1.flags |= Visibility;
					}
					if (!nextIsHidden || (workInProgress$1.mode & ConcurrentMode) === NoMode) bubbleProperties(workInProgress$1);
else if (includesSomeLane(subtreeRenderLanes, OffscreenLane)) {
						bubbleProperties(workInProgress$1);
						if (workInProgress$1.subtreeFlags & (Placement | Update)) workInProgress$1.flags |= Visibility;
					}
					return null;
				}
				case CacheComponent: return null;
				case TracingMarkerComponent: return null;
			}
			throw new Error("Unknown unit of work tag (" + workInProgress$1.tag + "). This error is likely caused by a bug in " + "React. Please file an issue.");
		}
		function unwindWork(current$1, workInProgress$1, renderLanes$1) {
			popTreeContext(workInProgress$1);
			switch (workInProgress$1.tag) {
				case ClassComponent: {
					var Component = workInProgress$1.type;
					if (isContextProvider(Component)) popContext(workInProgress$1);
					var flags = workInProgress$1.flags;
					if (flags & ShouldCapture) {
						workInProgress$1.flags = flags & ~ShouldCapture | DidCapture;
						if ((workInProgress$1.mode & ProfileMode) !== NoMode) transferActualDuration(workInProgress$1);
						return workInProgress$1;
					}
					return null;
				}
				case HostRoot: {
					var root$1 = workInProgress$1.stateNode;
					popHostContainer(workInProgress$1);
					popTopLevelContextObject(workInProgress$1);
					resetWorkInProgressVersions();
					var _flags = workInProgress$1.flags;
					if ((_flags & ShouldCapture) !== NoFlags && (_flags & DidCapture) === NoFlags) {
						workInProgress$1.flags = _flags & ~ShouldCapture | DidCapture;
						return workInProgress$1;
					}
					return null;
				}
				case HostComponent: {
					popHostContext(workInProgress$1);
					return null;
				}
				case SuspenseComponent: {
					popSuspenseContext(workInProgress$1);
					var suspenseState = workInProgress$1.memoizedState;
					if (suspenseState !== null && suspenseState.dehydrated !== null) {
						if (workInProgress$1.alternate === null) throw new Error("Threw in newly mounted dehydrated component. This is likely a bug in React. Please file an issue.");
						resetHydrationState();
					}
					var _flags2 = workInProgress$1.flags;
					if (_flags2 & ShouldCapture) {
						workInProgress$1.flags = _flags2 & ~ShouldCapture | DidCapture;
						if ((workInProgress$1.mode & ProfileMode) !== NoMode) transferActualDuration(workInProgress$1);
						return workInProgress$1;
					}
					return null;
				}
				case SuspenseListComponent: {
					popSuspenseContext(workInProgress$1);
					return null;
				}
				case HostPortal:
					popHostContainer(workInProgress$1);
					return null;
				case ContextProvider:
					var context = workInProgress$1.type._context;
					popProvider(context, workInProgress$1);
					return null;
				case OffscreenComponent:
				case LegacyHiddenComponent:
					popRenderLanes(workInProgress$1);
					return null;
				case CacheComponent: return null;
				default: return null;
			}
		}
		function unwindInterruptedWork(current$1, interruptedWork, renderLanes$1) {
			popTreeContext(interruptedWork);
			switch (interruptedWork.tag) {
				case ClassComponent: {
					var childContextTypes = interruptedWork.type.childContextTypes;
					if (childContextTypes !== null && childContextTypes !== undefined) popContext(interruptedWork);
					break;
				}
				case HostRoot: {
					var root$1 = interruptedWork.stateNode;
					popHostContainer(interruptedWork);
					popTopLevelContextObject(interruptedWork);
					resetWorkInProgressVersions();
					break;
				}
				case HostComponent: {
					popHostContext(interruptedWork);
					break;
				}
				case HostPortal:
					popHostContainer(interruptedWork);
					break;
				case SuspenseComponent:
					popSuspenseContext(interruptedWork);
					break;
				case SuspenseListComponent:
					popSuspenseContext(interruptedWork);
					break;
				case ContextProvider:
					var context = interruptedWork.type._context;
					popProvider(context, interruptedWork);
					break;
				case OffscreenComponent:
				case LegacyHiddenComponent:
					popRenderLanes(interruptedWork);
					break;
			}
		}
		var didWarnAboutUndefinedSnapshotBeforeUpdate = null;
		didWarnAboutUndefinedSnapshotBeforeUpdate = new Set();
		var offscreenSubtreeIsHidden = false;
		var offscreenSubtreeWasHidden = false;
		var PossiblyWeakSet = typeof WeakSet === "function" ? WeakSet : Set;
		var nextEffect = null;
		var inProgressLanes = null;
		var inProgressRoot = null;
		function reportUncaughtErrorInDEV(error$1) {
			{
				invokeGuardedCallback(null, function() {
					throw error$1;
				});
				clearCaughtError();
			}
		}
		var callComponentWillUnmountWithTimer = function(current$1, instance) {
			instance.props = current$1.memoizedProps;
			instance.state = current$1.memoizedState;
			if (current$1.mode & ProfileMode) try {
				startLayoutEffectTimer();
				instance.componentWillUnmount();
			} finally {
				recordLayoutEffectDuration(current$1);
			}
else instance.componentWillUnmount();
		};
		function safelyCallCommitHookLayoutEffectListMount(current$1, nearestMountedAncestor) {
			try {
				commitHookEffectListMount(Layout, current$1);
			} catch (error$1) {
				captureCommitPhaseError(current$1, nearestMountedAncestor, error$1);
			}
		}
		function safelyCallComponentWillUnmount(current$1, nearestMountedAncestor, instance) {
			try {
				callComponentWillUnmountWithTimer(current$1, instance);
			} catch (error$1) {
				captureCommitPhaseError(current$1, nearestMountedAncestor, error$1);
			}
		}
		function safelyCallComponentDidMount(current$1, nearestMountedAncestor, instance) {
			try {
				instance.componentDidMount();
			} catch (error$1) {
				captureCommitPhaseError(current$1, nearestMountedAncestor, error$1);
			}
		}
		function safelyAttachRef(current$1, nearestMountedAncestor) {
			try {
				commitAttachRef(current$1);
			} catch (error$1) {
				captureCommitPhaseError(current$1, nearestMountedAncestor, error$1);
			}
		}
		function safelyDetachRef(current$1, nearestMountedAncestor) {
			var ref = current$1.ref;
			if (ref !== null) if (typeof ref === "function") {
				var retVal;
				try {
					if (enableProfilerTimer && enableProfilerCommitHooks && current$1.mode & ProfileMode) try {
						startLayoutEffectTimer();
						retVal = ref(null);
					} finally {
						recordLayoutEffectDuration(current$1);
					}
else retVal = ref(null);
				} catch (error$1) {
					captureCommitPhaseError(current$1, nearestMountedAncestor, error$1);
				}
				if (typeof retVal === "function") error("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", getComponentNameFromFiber(current$1));
			} else ref.current = null;
		}
		function safelyCallDestroy(current$1, nearestMountedAncestor, destroy) {
			try {
				destroy();
			} catch (error$1) {
				captureCommitPhaseError(current$1, nearestMountedAncestor, error$1);
			}
		}
		var focusedInstanceHandle = null;
		var shouldFireAfterActiveInstanceBlur = false;
		function commitBeforeMutationEffects(root$1, firstChild) {
			focusedInstanceHandle = prepareForCommit(root$1.containerInfo);
			nextEffect = firstChild;
			commitBeforeMutationEffects_begin();
			var shouldFire = shouldFireAfterActiveInstanceBlur;
			shouldFireAfterActiveInstanceBlur = false;
			focusedInstanceHandle = null;
			return shouldFire;
		}
		function commitBeforeMutationEffects_begin() {
			while (nextEffect !== null) {
				var fiber = nextEffect;
				var child = fiber.child;
				if ((fiber.subtreeFlags & BeforeMutationMask) !== NoFlags && child !== null) {
					child.return = fiber;
					nextEffect = child;
				} else commitBeforeMutationEffects_complete();
			}
		}
		function commitBeforeMutationEffects_complete() {
			while (nextEffect !== null) {
				var fiber = nextEffect;
				setCurrentFiber(fiber);
				try {
					commitBeforeMutationEffectsOnFiber(fiber);
				} catch (error$1) {
					captureCommitPhaseError(fiber, fiber.return, error$1);
				}
				resetCurrentFiber();
				var sibling = fiber.sibling;
				if (sibling !== null) {
					sibling.return = fiber.return;
					nextEffect = sibling;
					return;
				}
				nextEffect = fiber.return;
			}
		}
		function commitBeforeMutationEffectsOnFiber(finishedWork) {
			var current$1 = finishedWork.alternate;
			var flags = finishedWork.flags;
			if ((flags & Snapshot) !== NoFlags) {
				setCurrentFiber(finishedWork);
				switch (finishedWork.tag) {
					case FunctionComponent:
					case ForwardRef:
					case SimpleMemoComponent: break;
					case ClassComponent: {
						if (current$1 !== null) {
							var prevProps = current$1.memoizedProps;
							var prevState = current$1.memoizedState;
							var instance = finishedWork.stateNode;
							if (finishedWork.type === finishedWork.elementType && !didWarnAboutReassigningProps) {
								if (instance.props !== finishedWork.memoizedProps) error("Expected %s props to match memoized props before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", getComponentNameFromFiber(finishedWork) || "instance");
								if (instance.state !== finishedWork.memoizedState) error("Expected %s state to match memoized state before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", getComponentNameFromFiber(finishedWork) || "instance");
							}
							var snapshot = instance.getSnapshotBeforeUpdate(finishedWork.elementType === finishedWork.type ? prevProps : resolveDefaultProps(finishedWork.type, prevProps), prevState);
							{
								var didWarnSet = didWarnAboutUndefinedSnapshotBeforeUpdate;
								if (snapshot === undefined && !didWarnSet.has(finishedWork.type)) {
									didWarnSet.add(finishedWork.type);
									error("%s.getSnapshotBeforeUpdate(): A snapshot value (or null) must be returned. You have returned undefined.", getComponentNameFromFiber(finishedWork));
								}
							}
							instance.__reactInternalSnapshotBeforeUpdate = snapshot;
						}
						break;
					}
					case HostRoot: {
						{
							var root$1 = finishedWork.stateNode;
							clearContainer(root$1.containerInfo);
						}
						break;
					}
					case HostComponent:
					case HostText:
					case HostPortal:
					case IncompleteClassComponent: break;
					default: throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
				}
				resetCurrentFiber();
			}
		}
		function commitHookEffectListUnmount(flags, finishedWork, nearestMountedAncestor) {
			var updateQueue = finishedWork.updateQueue;
			var lastEffect = updateQueue !== null ? updateQueue.lastEffect : null;
			if (lastEffect !== null) {
				var firstEffect = lastEffect.next;
				var effect = firstEffect;
				do {
					if ((effect.tag & flags) === flags) {
						var destroy = effect.destroy;
						effect.destroy = undefined;
						if (destroy !== undefined) {
							if ((flags & Passive$1) !== NoFlags$1) markComponentPassiveEffectUnmountStarted(finishedWork);
else if ((flags & Layout) !== NoFlags$1) markComponentLayoutEffectUnmountStarted(finishedWork);
							if ((flags & Insertion) !== NoFlags$1) setIsRunningInsertionEffect(true);
							safelyCallDestroy(finishedWork, nearestMountedAncestor, destroy);
							if ((flags & Insertion) !== NoFlags$1) setIsRunningInsertionEffect(false);
							if ((flags & Passive$1) !== NoFlags$1) markComponentPassiveEffectUnmountStopped();
else if ((flags & Layout) !== NoFlags$1) markComponentLayoutEffectUnmountStopped();
						}
					}
					effect = effect.next;
				} while (effect !== firstEffect);
			}
		}
		function commitHookEffectListMount(flags, finishedWork) {
			var updateQueue = finishedWork.updateQueue;
			var lastEffect = updateQueue !== null ? updateQueue.lastEffect : null;
			if (lastEffect !== null) {
				var firstEffect = lastEffect.next;
				var effect = firstEffect;
				do {
					if ((effect.tag & flags) === flags) {
						if ((flags & Passive$1) !== NoFlags$1) markComponentPassiveEffectMountStarted(finishedWork);
else if ((flags & Layout) !== NoFlags$1) markComponentLayoutEffectMountStarted(finishedWork);
						var create = effect.create;
						if ((flags & Insertion) !== NoFlags$1) setIsRunningInsertionEffect(true);
						effect.destroy = create();
						if ((flags & Insertion) !== NoFlags$1) setIsRunningInsertionEffect(false);
						if ((flags & Passive$1) !== NoFlags$1) markComponentPassiveEffectMountStopped();
else if ((flags & Layout) !== NoFlags$1) markComponentLayoutEffectMountStopped();
						{
							var destroy = effect.destroy;
							if (destroy !== undefined && typeof destroy !== "function") {
								var hookName = void 0;
								if ((effect.tag & Layout) !== NoFlags) hookName = "useLayoutEffect";
else if ((effect.tag & Insertion) !== NoFlags) hookName = "useInsertionEffect";
else hookName = "useEffect";
								var addendum = void 0;
								if (destroy === null) addendum = " You returned null. If your effect does not require clean up, return undefined (or nothing).";
else if (typeof destroy.then === "function") addendum = "\n\nIt looks like you wrote " + hookName + "(async () => ...) or returned a Promise. " + "Instead, write the async function inside your effect " + "and call it immediately:\n\n" + hookName + "(() => {\n" + "  async function fetchData() {\n" + "    // You can await here\n" + "    const response = await MyAPI.getData(someId);\n" + "    // ...\n" + "  }\n" + "  fetchData();\n" + "}, [someId]); // Or [] if effect doesn't need props or state\n\n" + "Learn more about data fetching with Hooks: https://reactjs.org/link/hooks-data-fetching";
else addendum = " You returned: " + destroy;
								error("%s must not return anything besides a function, which is used for clean-up.%s", hookName, addendum);
							}
						}
					}
					effect = effect.next;
				} while (effect !== firstEffect);
			}
		}
		function commitPassiveEffectDurations(finishedRoot, finishedWork) {
			if ((finishedWork.flags & Update) !== NoFlags) switch (finishedWork.tag) {
				case Profiler: {
					var passiveEffectDuration = finishedWork.stateNode.passiveEffectDuration;
					var _finishedWork$memoize = finishedWork.memoizedProps, id = _finishedWork$memoize.id, onPostCommit = _finishedWork$memoize.onPostCommit;
					var commitTime$1 = getCommitTime();
					var phase = finishedWork.alternate === null ? "mount" : "update";
					if (isCurrentUpdateNested()) phase = "nested-update";
					if (typeof onPostCommit === "function") onPostCommit(id, phase, passiveEffectDuration, commitTime$1);
					var parentFiber = finishedWork.return;
					outer: while (parentFiber !== null) {
						switch (parentFiber.tag) {
							case HostRoot:
								var root$1 = parentFiber.stateNode;
								root$1.passiveEffectDuration += passiveEffectDuration;
								break outer;
							case Profiler:
								var parentStateNode = parentFiber.stateNode;
								parentStateNode.passiveEffectDuration += passiveEffectDuration;
								break outer;
						}
						parentFiber = parentFiber.return;
					}
					break;
				}
			}
		}
		function commitLayoutEffectOnFiber(finishedRoot, current$1, finishedWork, committedLanes) {
			if ((finishedWork.flags & LayoutMask) !== NoFlags) switch (finishedWork.tag) {
				case FunctionComponent:
				case ForwardRef:
				case SimpleMemoComponent: {
					if (!offscreenSubtreeWasHidden) if (finishedWork.mode & ProfileMode) try {
						startLayoutEffectTimer();
						commitHookEffectListMount(Layout | HasEffect, finishedWork);
					} finally {
						recordLayoutEffectDuration(finishedWork);
					}
else commitHookEffectListMount(Layout | HasEffect, finishedWork);
					break;
				}
				case ClassComponent: {
					var instance = finishedWork.stateNode;
					if (finishedWork.flags & Update) {
						if (!offscreenSubtreeWasHidden) if (current$1 === null) {
							if (finishedWork.type === finishedWork.elementType && !didWarnAboutReassigningProps) {
								if (instance.props !== finishedWork.memoizedProps) error("Expected %s props to match memoized props before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", getComponentNameFromFiber(finishedWork) || "instance");
								if (instance.state !== finishedWork.memoizedState) error("Expected %s state to match memoized state before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", getComponentNameFromFiber(finishedWork) || "instance");
							}
							if (finishedWork.mode & ProfileMode) try {
								startLayoutEffectTimer();
								instance.componentDidMount();
							} finally {
								recordLayoutEffectDuration(finishedWork);
							}
else instance.componentDidMount();
						} else {
							var prevProps = finishedWork.elementType === finishedWork.type ? current$1.memoizedProps : resolveDefaultProps(finishedWork.type, current$1.memoizedProps);
							var prevState = current$1.memoizedState;
							if (finishedWork.type === finishedWork.elementType && !didWarnAboutReassigningProps) {
								if (instance.props !== finishedWork.memoizedProps) error("Expected %s props to match memoized props before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", getComponentNameFromFiber(finishedWork) || "instance");
								if (instance.state !== finishedWork.memoizedState) error("Expected %s state to match memoized state before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", getComponentNameFromFiber(finishedWork) || "instance");
							}
							if (finishedWork.mode & ProfileMode) try {
								startLayoutEffectTimer();
								instance.componentDidUpdate(prevProps, prevState, instance.__reactInternalSnapshotBeforeUpdate);
							} finally {
								recordLayoutEffectDuration(finishedWork);
							}
else instance.componentDidUpdate(prevProps, prevState, instance.__reactInternalSnapshotBeforeUpdate);
						}
					}
					var updateQueue = finishedWork.updateQueue;
					if (updateQueue !== null) {
						if (finishedWork.type === finishedWork.elementType && !didWarnAboutReassigningProps) {
							if (instance.props !== finishedWork.memoizedProps) error("Expected %s props to match memoized props before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", getComponentNameFromFiber(finishedWork) || "instance");
							if (instance.state !== finishedWork.memoizedState) error("Expected %s state to match memoized state before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", getComponentNameFromFiber(finishedWork) || "instance");
						}
						commitUpdateQueue(finishedWork, updateQueue, instance);
					}
					break;
				}
				case HostRoot: {
					var _updateQueue = finishedWork.updateQueue;
					if (_updateQueue !== null) {
						var _instance = null;
						if (finishedWork.child !== null) switch (finishedWork.child.tag) {
							case HostComponent:
								_instance = getPublicInstance(finishedWork.child.stateNode);
								break;
							case ClassComponent:
								_instance = finishedWork.child.stateNode;
								break;
						}
						commitUpdateQueue(finishedWork, _updateQueue, _instance);
					}
					break;
				}
				case HostComponent: {
					var _instance2 = finishedWork.stateNode;
					if (current$1 === null && finishedWork.flags & Update) {
						var type = finishedWork.type;
						var props = finishedWork.memoizedProps;
						commitMount(_instance2, type, props);
					}
					break;
				}
				case HostText: break;
				case HostPortal: break;
				case Profiler: {
					{
						var _finishedWork$memoize2 = finishedWork.memoizedProps, onCommit = _finishedWork$memoize2.onCommit, onRender = _finishedWork$memoize2.onRender;
						var effectDuration = finishedWork.stateNode.effectDuration;
						var commitTime$1 = getCommitTime();
						var phase = current$1 === null ? "mount" : "update";
						if (isCurrentUpdateNested()) phase = "nested-update";
						if (typeof onRender === "function") onRender(finishedWork.memoizedProps.id, phase, finishedWork.actualDuration, finishedWork.treeBaseDuration, finishedWork.actualStartTime, commitTime$1);
						{
							if (typeof onCommit === "function") onCommit(finishedWork.memoizedProps.id, phase, effectDuration, commitTime$1);
							enqueuePendingPassiveProfilerEffect(finishedWork);
							var parentFiber = finishedWork.return;
							outer: while (parentFiber !== null) {
								switch (parentFiber.tag) {
									case HostRoot:
										var root$1 = parentFiber.stateNode;
										root$1.effectDuration += effectDuration;
										break outer;
									case Profiler:
										var parentStateNode = parentFiber.stateNode;
										parentStateNode.effectDuration += effectDuration;
										break outer;
								}
								parentFiber = parentFiber.return;
							}
						}
					}
					break;
				}
				case SuspenseComponent: {
					commitSuspenseHydrationCallbacks(finishedRoot, finishedWork);
					break;
				}
				case SuspenseListComponent:
				case IncompleteClassComponent:
				case ScopeComponent:
				case OffscreenComponent:
				case LegacyHiddenComponent:
				case TracingMarkerComponent: break;
				default: throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
			}
			if (!offscreenSubtreeWasHidden) {
				if (finishedWork.flags & Ref) commitAttachRef(finishedWork);
			}
		}
		function reappearLayoutEffectsOnFiber(node) {
			switch (node.tag) {
				case FunctionComponent:
				case ForwardRef:
				case SimpleMemoComponent: {
					if (node.mode & ProfileMode) try {
						startLayoutEffectTimer();
						safelyCallCommitHookLayoutEffectListMount(node, node.return);
					} finally {
						recordLayoutEffectDuration(node);
					}
else safelyCallCommitHookLayoutEffectListMount(node, node.return);
					break;
				}
				case ClassComponent: {
					var instance = node.stateNode;
					if (typeof instance.componentDidMount === "function") safelyCallComponentDidMount(node, node.return, instance);
					safelyAttachRef(node, node.return);
					break;
				}
				case HostComponent: {
					safelyAttachRef(node, node.return);
					break;
				}
			}
		}
		function hideOrUnhideAllChildren(finishedWork, isHidden) {
			var hostSubtreeRoot = null;
			{
				var node = finishedWork;
				while (true) {
					if (node.tag === HostComponent) {
						if (hostSubtreeRoot === null) {
							hostSubtreeRoot = node;
							try {
								var instance = node.stateNode;
								if (isHidden) hideInstance(instance);
else unhideInstance(node.stateNode, node.memoizedProps);
							} catch (error$1) {
								captureCommitPhaseError(finishedWork, finishedWork.return, error$1);
							}
						}
					} else if (node.tag === HostText) {
						if (hostSubtreeRoot === null) try {
							var _instance3 = node.stateNode;
							if (isHidden) hideTextInstance(_instance3);
else unhideTextInstance(_instance3, node.memoizedProps);
						} catch (error$1) {
							captureCommitPhaseError(finishedWork, finishedWork.return, error$1);
						}
					} else if ((node.tag === OffscreenComponent || node.tag === LegacyHiddenComponent) && node.memoizedState !== null && node !== finishedWork);
else if (node.child !== null) {
						node.child.return = node;
						node = node.child;
						continue;
					}
					if (node === finishedWork) return;
					while (node.sibling === null) {
						if (node.return === null || node.return === finishedWork) return;
						if (hostSubtreeRoot === node) hostSubtreeRoot = null;
						node = node.return;
					}
					if (hostSubtreeRoot === node) hostSubtreeRoot = null;
					node.sibling.return = node.return;
					node = node.sibling;
				}
			}
		}
		function commitAttachRef(finishedWork) {
			var ref = finishedWork.ref;
			if (ref !== null) {
				var instance = finishedWork.stateNode;
				var instanceToUse;
				switch (finishedWork.tag) {
					case HostComponent:
						instanceToUse = getPublicInstance(instance);
						break;
					default: instanceToUse = instance;
				}
				if (typeof ref === "function") {
					var retVal;
					if (finishedWork.mode & ProfileMode) try {
						startLayoutEffectTimer();
						retVal = ref(instanceToUse);
					} finally {
						recordLayoutEffectDuration(finishedWork);
					}
else retVal = ref(instanceToUse);
					if (typeof retVal === "function") error("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", getComponentNameFromFiber(finishedWork));
				} else {
					if (!ref.hasOwnProperty("current")) error("Unexpected ref object provided for %s. Use either a ref-setter function or React.createRef().", getComponentNameFromFiber(finishedWork));
					ref.current = instanceToUse;
				}
			}
		}
		function detachFiberMutation(fiber) {
			var alternate = fiber.alternate;
			if (alternate !== null) alternate.return = null;
			fiber.return = null;
		}
		function detachFiberAfterEffects(fiber) {
			var alternate = fiber.alternate;
			if (alternate !== null) {
				fiber.alternate = null;
				detachFiberAfterEffects(alternate);
			}
			{
				fiber.child = null;
				fiber.deletions = null;
				fiber.sibling = null;
				if (fiber.tag === HostComponent) {
					var hostInstance = fiber.stateNode;
					if (hostInstance !== null) detachDeletedInstance(hostInstance);
				}
				fiber.stateNode = null;
				fiber._debugOwner = null;
				{
					fiber.return = null;
					fiber.dependencies = null;
					fiber.memoizedProps = null;
					fiber.memoizedState = null;
					fiber.pendingProps = null;
					fiber.stateNode = null;
					fiber.updateQueue = null;
				}
			}
		}
		function getHostParentFiber(fiber) {
			var parent = fiber.return;
			while (parent !== null) {
				if (isHostParent(parent)) return parent;
				parent = parent.return;
			}
			throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
		}
		function isHostParent(fiber) {
			return fiber.tag === HostComponent || fiber.tag === HostRoot || fiber.tag === HostPortal;
		}
		function getHostSibling(fiber) {
			var node = fiber;
			siblings: while (true) {
				while (node.sibling === null) {
					if (node.return === null || isHostParent(node.return)) return null;
					node = node.return;
				}
				node.sibling.return = node.return;
				node = node.sibling;
				while (node.tag !== HostComponent && node.tag !== HostText && node.tag !== DehydratedFragment) {
					if (node.flags & Placement) continue siblings;
					if (node.child === null || node.tag === HostPortal) continue siblings;
else {
						node.child.return = node;
						node = node.child;
					}
				}
				if (!(node.flags & Placement)) return node.stateNode;
			}
		}
		function commitPlacement(finishedWork) {
			var parentFiber = getHostParentFiber(finishedWork);
			switch (parentFiber.tag) {
				case HostComponent: {
					var parent = parentFiber.stateNode;
					if (parentFiber.flags & ContentReset) {
						resetTextContent(parent);
						parentFiber.flags &= ~ContentReset;
					}
					var before = getHostSibling(finishedWork);
					insertOrAppendPlacementNode(finishedWork, before, parent);
					break;
				}
				case HostRoot:
				case HostPortal: {
					var _parent = parentFiber.stateNode.containerInfo;
					var _before = getHostSibling(finishedWork);
					insertOrAppendPlacementNodeIntoContainer(finishedWork, _before, _parent);
					break;
				}
				default: throw new Error("Invalid host parent fiber. This error is likely caused by a bug in React. Please file an issue.");
			}
		}
		function insertOrAppendPlacementNodeIntoContainer(node, before, parent) {
			var tag = node.tag;
			var isHost = tag === HostComponent || tag === HostText;
			if (isHost) {
				var stateNode = node.stateNode;
				if (before) insertInContainerBefore(parent, stateNode, before);
else appendChildToContainer(parent, stateNode);
			} else if (tag === HostPortal);
else {
				var child = node.child;
				if (child !== null) {
					insertOrAppendPlacementNodeIntoContainer(child, before, parent);
					var sibling = child.sibling;
					while (sibling !== null) {
						insertOrAppendPlacementNodeIntoContainer(sibling, before, parent);
						sibling = sibling.sibling;
					}
				}
			}
		}
		function insertOrAppendPlacementNode(node, before, parent) {
			var tag = node.tag;
			var isHost = tag === HostComponent || tag === HostText;
			if (isHost) {
				var stateNode = node.stateNode;
				if (before) insertBefore(parent, stateNode, before);
else appendChild(parent, stateNode);
			} else if (tag === HostPortal);
else {
				var child = node.child;
				if (child !== null) {
					insertOrAppendPlacementNode(child, before, parent);
					var sibling = child.sibling;
					while (sibling !== null) {
						insertOrAppendPlacementNode(sibling, before, parent);
						sibling = sibling.sibling;
					}
				}
			}
		}
		var hostParent = null;
		var hostParentIsContainer = false;
		function commitDeletionEffects(root$1, returnFiber, deletedFiber) {
			{
				var parent = returnFiber;
				findParent: while (parent !== null) {
					switch (parent.tag) {
						case HostComponent: {
							hostParent = parent.stateNode;
							hostParentIsContainer = false;
							break findParent;
						}
						case HostRoot: {
							hostParent = parent.stateNode.containerInfo;
							hostParentIsContainer = true;
							break findParent;
						}
						case HostPortal: {
							hostParent = parent.stateNode.containerInfo;
							hostParentIsContainer = true;
							break findParent;
						}
					}
					parent = parent.return;
				}
				if (hostParent === null) throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
				commitDeletionEffectsOnFiber(root$1, returnFiber, deletedFiber);
				hostParent = null;
				hostParentIsContainer = false;
			}
			detachFiberMutation(deletedFiber);
		}
		function recursivelyTraverseDeletionEffects(finishedRoot, nearestMountedAncestor, parent) {
			var child = parent.child;
			while (child !== null) {
				commitDeletionEffectsOnFiber(finishedRoot, nearestMountedAncestor, child);
				child = child.sibling;
			}
		}
		function commitDeletionEffectsOnFiber(finishedRoot, nearestMountedAncestor, deletedFiber) {
			onCommitUnmount(deletedFiber);
			switch (deletedFiber.tag) {
				case HostComponent: if (!offscreenSubtreeWasHidden) safelyDetachRef(deletedFiber, nearestMountedAncestor);
				case HostText: {
					{
						var prevHostParent = hostParent;
						var prevHostParentIsContainer = hostParentIsContainer;
						hostParent = null;
						recursivelyTraverseDeletionEffects(finishedRoot, nearestMountedAncestor, deletedFiber);
						hostParent = prevHostParent;
						hostParentIsContainer = prevHostParentIsContainer;
						if (hostParent !== null) if (hostParentIsContainer) removeChildFromContainer(hostParent, deletedFiber.stateNode);
else removeChild(hostParent, deletedFiber.stateNode);
					}
					return;
				}
				case DehydratedFragment: {
					if (hostParent !== null) if (hostParentIsContainer) clearSuspenseBoundaryFromContainer(hostParent, deletedFiber.stateNode);
else clearSuspenseBoundary(hostParent, deletedFiber.stateNode);
					return;
				}
				case HostPortal: {
					{
						var _prevHostParent = hostParent;
						var _prevHostParentIsContainer = hostParentIsContainer;
						hostParent = deletedFiber.stateNode.containerInfo;
						hostParentIsContainer = true;
						recursivelyTraverseDeletionEffects(finishedRoot, nearestMountedAncestor, deletedFiber);
						hostParent = _prevHostParent;
						hostParentIsContainer = _prevHostParentIsContainer;
					}
					return;
				}
				case FunctionComponent:
				case ForwardRef:
				case MemoComponent:
				case SimpleMemoComponent: {
					if (!offscreenSubtreeWasHidden) {
						var updateQueue = deletedFiber.updateQueue;
						if (updateQueue !== null) {
							var lastEffect = updateQueue.lastEffect;
							if (lastEffect !== null) {
								var firstEffect = lastEffect.next;
								var effect = firstEffect;
								do {
									var _effect = effect, destroy = _effect.destroy, tag = _effect.tag;
									if (destroy !== undefined) {
										if ((tag & Insertion) !== NoFlags$1) safelyCallDestroy(deletedFiber, nearestMountedAncestor, destroy);
else if ((tag & Layout) !== NoFlags$1) {
											markComponentLayoutEffectUnmountStarted(deletedFiber);
											if (deletedFiber.mode & ProfileMode) {
												startLayoutEffectTimer();
												safelyCallDestroy(deletedFiber, nearestMountedAncestor, destroy);
												recordLayoutEffectDuration(deletedFiber);
											} else safelyCallDestroy(deletedFiber, nearestMountedAncestor, destroy);
											markComponentLayoutEffectUnmountStopped();
										}
									}
									effect = effect.next;
								} while (effect !== firstEffect);
							}
						}
					}
					recursivelyTraverseDeletionEffects(finishedRoot, nearestMountedAncestor, deletedFiber);
					return;
				}
				case ClassComponent: {
					if (!offscreenSubtreeWasHidden) {
						safelyDetachRef(deletedFiber, nearestMountedAncestor);
						var instance = deletedFiber.stateNode;
						if (typeof instance.componentWillUnmount === "function") safelyCallComponentWillUnmount(deletedFiber, nearestMountedAncestor, instance);
					}
					recursivelyTraverseDeletionEffects(finishedRoot, nearestMountedAncestor, deletedFiber);
					return;
				}
				case ScopeComponent: {
					recursivelyTraverseDeletionEffects(finishedRoot, nearestMountedAncestor, deletedFiber);
					return;
				}
				case OffscreenComponent: {
					if (deletedFiber.mode & ConcurrentMode) {
						var prevOffscreenSubtreeWasHidden = offscreenSubtreeWasHidden;
						offscreenSubtreeWasHidden = prevOffscreenSubtreeWasHidden || deletedFiber.memoizedState !== null;
						recursivelyTraverseDeletionEffects(finishedRoot, nearestMountedAncestor, deletedFiber);
						offscreenSubtreeWasHidden = prevOffscreenSubtreeWasHidden;
					} else recursivelyTraverseDeletionEffects(finishedRoot, nearestMountedAncestor, deletedFiber);
					break;
				}
				default: {
					recursivelyTraverseDeletionEffects(finishedRoot, nearestMountedAncestor, deletedFiber);
					return;
				}
			}
		}
		function commitSuspenseCallback(finishedWork) {
			var newState = finishedWork.memoizedState;
		}
		function commitSuspenseHydrationCallbacks(finishedRoot, finishedWork) {
			var newState = finishedWork.memoizedState;
			if (newState === null) {
				var current$1 = finishedWork.alternate;
				if (current$1 !== null) {
					var prevState = current$1.memoizedState;
					if (prevState !== null) {
						var suspenseInstance = prevState.dehydrated;
						if (suspenseInstance !== null) commitHydratedSuspenseInstance(suspenseInstance);
					}
				}
			}
		}
		function attachSuspenseRetryListeners(finishedWork) {
			var wakeables = finishedWork.updateQueue;
			if (wakeables !== null) {
				finishedWork.updateQueue = null;
				var retryCache = finishedWork.stateNode;
				if (retryCache === null) retryCache = finishedWork.stateNode = new PossiblyWeakSet();
				wakeables.forEach(function(wakeable) {
					var retry = resolveRetryWakeable.bind(null, finishedWork, wakeable);
					if (!retryCache.has(wakeable)) {
						retryCache.add(wakeable);
						if (isDevToolsPresent) if (inProgressLanes !== null && inProgressRoot !== null) restorePendingUpdaters(inProgressRoot, inProgressLanes);
else throw Error("Expected finished root and lanes to be set. This is a bug in React.");
						wakeable.then(retry, retry);
					}
				});
			}
		}
		function commitMutationEffects(root$1, finishedWork, committedLanes) {
			inProgressLanes = committedLanes;
			inProgressRoot = root$1;
			setCurrentFiber(finishedWork);
			commitMutationEffectsOnFiber(finishedWork, root$1);
			setCurrentFiber(finishedWork);
			inProgressLanes = null;
			inProgressRoot = null;
		}
		function recursivelyTraverseMutationEffects(root$1, parentFiber, lanes) {
			var deletions = parentFiber.deletions;
			if (deletions !== null) for (var i$1 = 0; i$1 < deletions.length; i$1++) {
				var childToDelete = deletions[i$1];
				try {
					commitDeletionEffects(root$1, parentFiber, childToDelete);
				} catch (error$1) {
					captureCommitPhaseError(childToDelete, parentFiber, error$1);
				}
			}
			var prevDebugFiber = getCurrentFiber();
			if (parentFiber.subtreeFlags & MutationMask) {
				var child = parentFiber.child;
				while (child !== null) {
					setCurrentFiber(child);
					commitMutationEffectsOnFiber(child, root$1);
					child = child.sibling;
				}
			}
			setCurrentFiber(prevDebugFiber);
		}
		function commitMutationEffectsOnFiber(finishedWork, root$1, lanes) {
			var current$1 = finishedWork.alternate;
			var flags = finishedWork.flags;
			switch (finishedWork.tag) {
				case FunctionComponent:
				case ForwardRef:
				case MemoComponent:
				case SimpleMemoComponent: {
					recursivelyTraverseMutationEffects(root$1, finishedWork);
					commitReconciliationEffects(finishedWork);
					if (flags & Update) {
						try {
							commitHookEffectListUnmount(Insertion | HasEffect, finishedWork, finishedWork.return);
							commitHookEffectListMount(Insertion | HasEffect, finishedWork);
						} catch (error$1) {
							captureCommitPhaseError(finishedWork, finishedWork.return, error$1);
						}
						if (finishedWork.mode & ProfileMode) {
							try {
								startLayoutEffectTimer();
								commitHookEffectListUnmount(Layout | HasEffect, finishedWork, finishedWork.return);
							} catch (error$1) {
								captureCommitPhaseError(finishedWork, finishedWork.return, error$1);
							}
							recordLayoutEffectDuration(finishedWork);
						} else try {
							commitHookEffectListUnmount(Layout | HasEffect, finishedWork, finishedWork.return);
						} catch (error$1) {
							captureCommitPhaseError(finishedWork, finishedWork.return, error$1);
						}
					}
					return;
				}
				case ClassComponent: {
					recursivelyTraverseMutationEffects(root$1, finishedWork);
					commitReconciliationEffects(finishedWork);
					if (flags & Ref) {
						if (current$1 !== null) safelyDetachRef(current$1, current$1.return);
					}
					return;
				}
				case HostComponent: {
					recursivelyTraverseMutationEffects(root$1, finishedWork);
					commitReconciliationEffects(finishedWork);
					if (flags & Ref) {
						if (current$1 !== null) safelyDetachRef(current$1, current$1.return);
					}
					{
						if (finishedWork.flags & ContentReset) {
							var instance = finishedWork.stateNode;
							try {
								resetTextContent(instance);
							} catch (error$1) {
								captureCommitPhaseError(finishedWork, finishedWork.return, error$1);
							}
						}
						if (flags & Update) {
							var _instance4 = finishedWork.stateNode;
							if (_instance4 != null) {
								var newProps = finishedWork.memoizedProps;
								var oldProps = current$1 !== null ? current$1.memoizedProps : newProps;
								var type = finishedWork.type;
								var updatePayload = finishedWork.updateQueue;
								finishedWork.updateQueue = null;
								if (updatePayload !== null) try {
									commitUpdate(_instance4, updatePayload, type, oldProps, newProps, finishedWork);
								} catch (error$1) {
									captureCommitPhaseError(finishedWork, finishedWork.return, error$1);
								}
							}
						}
					}
					return;
				}
				case HostText: {
					recursivelyTraverseMutationEffects(root$1, finishedWork);
					commitReconciliationEffects(finishedWork);
					if (flags & Update) {
						if (finishedWork.stateNode === null) throw new Error("This should have a text node initialized. This error is likely caused by a bug in React. Please file an issue.");
						var textInstance = finishedWork.stateNode;
						var newText = finishedWork.memoizedProps;
						var oldText = current$1 !== null ? current$1.memoizedProps : newText;
						try {
							commitTextUpdate(textInstance, oldText, newText);
						} catch (error$1) {
							captureCommitPhaseError(finishedWork, finishedWork.return, error$1);
						}
					}
					return;
				}
				case HostRoot: {
					recursivelyTraverseMutationEffects(root$1, finishedWork);
					commitReconciliationEffects(finishedWork);
					if (flags & Update) {
						if (current$1 !== null) {
							var prevRootState = current$1.memoizedState;
							if (prevRootState.isDehydrated) try {
								commitHydratedContainer(root$1.containerInfo);
							} catch (error$1) {
								captureCommitPhaseError(finishedWork, finishedWork.return, error$1);
							}
						}
					}
					return;
				}
				case HostPortal: {
					recursivelyTraverseMutationEffects(root$1, finishedWork);
					commitReconciliationEffects(finishedWork);
					return;
				}
				case SuspenseComponent: {
					recursivelyTraverseMutationEffects(root$1, finishedWork);
					commitReconciliationEffects(finishedWork);
					var offscreenFiber = finishedWork.child;
					if (offscreenFiber.flags & Visibility) {
						var offscreenInstance = offscreenFiber.stateNode;
						var newState = offscreenFiber.memoizedState;
						var isHidden = newState !== null;
						offscreenInstance.isHidden = isHidden;
						if (isHidden) {
							var wasHidden = offscreenFiber.alternate !== null && offscreenFiber.alternate.memoizedState !== null;
							if (!wasHidden) markCommitTimeOfFallback();
						}
					}
					if (flags & Update) {
						try {
							commitSuspenseCallback(finishedWork);
						} catch (error$1) {
							captureCommitPhaseError(finishedWork, finishedWork.return, error$1);
						}
						attachSuspenseRetryListeners(finishedWork);
					}
					return;
				}
				case OffscreenComponent: {
					var _wasHidden = current$1 !== null && current$1.memoizedState !== null;
					if (finishedWork.mode & ConcurrentMode) {
						var prevOffscreenSubtreeWasHidden = offscreenSubtreeWasHidden;
						offscreenSubtreeWasHidden = prevOffscreenSubtreeWasHidden || _wasHidden;
						recursivelyTraverseMutationEffects(root$1, finishedWork);
						offscreenSubtreeWasHidden = prevOffscreenSubtreeWasHidden;
					} else recursivelyTraverseMutationEffects(root$1, finishedWork);
					commitReconciliationEffects(finishedWork);
					if (flags & Visibility) {
						var _offscreenInstance = finishedWork.stateNode;
						var _newState = finishedWork.memoizedState;
						var _isHidden = _newState !== null;
						var offscreenBoundary = finishedWork;
						_offscreenInstance.isHidden = _isHidden;
						if (_isHidden) {
							if (!_wasHidden) {
								if ((offscreenBoundary.mode & ConcurrentMode) !== NoMode) {
									nextEffect = offscreenBoundary;
									var offscreenChild = offscreenBoundary.child;
									while (offscreenChild !== null) {
										nextEffect = offscreenChild;
										disappearLayoutEffects_begin(offscreenChild);
										offscreenChild = offscreenChild.sibling;
									}
								}
							}
						}
						hideOrUnhideAllChildren(offscreenBoundary, _isHidden);
					}
					return;
				}
				case SuspenseListComponent: {
					recursivelyTraverseMutationEffects(root$1, finishedWork);
					commitReconciliationEffects(finishedWork);
					if (flags & Update) attachSuspenseRetryListeners(finishedWork);
					return;
				}
				case ScopeComponent: return;
				default: {
					recursivelyTraverseMutationEffects(root$1, finishedWork);
					commitReconciliationEffects(finishedWork);
					return;
				}
			}
		}
		function commitReconciliationEffects(finishedWork) {
			var flags = finishedWork.flags;
			if (flags & Placement) {
				try {
					commitPlacement(finishedWork);
				} catch (error$1) {
					captureCommitPhaseError(finishedWork, finishedWork.return, error$1);
				}
				finishedWork.flags &= ~Placement;
			}
			if (flags & Hydrating) finishedWork.flags &= ~Hydrating;
		}
		function commitLayoutEffects(finishedWork, root$1, committedLanes) {
			inProgressLanes = committedLanes;
			inProgressRoot = root$1;
			nextEffect = finishedWork;
			commitLayoutEffects_begin(finishedWork, root$1, committedLanes);
			inProgressLanes = null;
			inProgressRoot = null;
		}
		function commitLayoutEffects_begin(subtreeRoot, root$1, committedLanes) {
			var isModernRoot = (subtreeRoot.mode & ConcurrentMode) !== NoMode;
			while (nextEffect !== null) {
				var fiber = nextEffect;
				var firstChild = fiber.child;
				if (fiber.tag === OffscreenComponent && isModernRoot) {
					var isHidden = fiber.memoizedState !== null;
					var newOffscreenSubtreeIsHidden = isHidden || offscreenSubtreeIsHidden;
					if (newOffscreenSubtreeIsHidden) {
						commitLayoutMountEffects_complete(subtreeRoot, root$1, committedLanes);
						continue;
					} else {
						var current$1 = fiber.alternate;
						var wasHidden = current$1 !== null && current$1.memoizedState !== null;
						var newOffscreenSubtreeWasHidden = wasHidden || offscreenSubtreeWasHidden;
						var prevOffscreenSubtreeIsHidden = offscreenSubtreeIsHidden;
						var prevOffscreenSubtreeWasHidden = offscreenSubtreeWasHidden;
						offscreenSubtreeIsHidden = newOffscreenSubtreeIsHidden;
						offscreenSubtreeWasHidden = newOffscreenSubtreeWasHidden;
						if (offscreenSubtreeWasHidden && !prevOffscreenSubtreeWasHidden) {
							nextEffect = fiber;
							reappearLayoutEffects_begin(fiber);
						}
						var child = firstChild;
						while (child !== null) {
							nextEffect = child;
							commitLayoutEffects_begin(child, root$1, committedLanes);
							child = child.sibling;
						}
						nextEffect = fiber;
						offscreenSubtreeIsHidden = prevOffscreenSubtreeIsHidden;
						offscreenSubtreeWasHidden = prevOffscreenSubtreeWasHidden;
						commitLayoutMountEffects_complete(subtreeRoot, root$1, committedLanes);
						continue;
					}
				}
				if ((fiber.subtreeFlags & LayoutMask) !== NoFlags && firstChild !== null) {
					firstChild.return = fiber;
					nextEffect = firstChild;
				} else commitLayoutMountEffects_complete(subtreeRoot, root$1, committedLanes);
			}
		}
		function commitLayoutMountEffects_complete(subtreeRoot, root$1, committedLanes) {
			while (nextEffect !== null) {
				var fiber = nextEffect;
				if ((fiber.flags & LayoutMask) !== NoFlags) {
					var current$1 = fiber.alternate;
					setCurrentFiber(fiber);
					try {
						commitLayoutEffectOnFiber(root$1, current$1, fiber, committedLanes);
					} catch (error$1) {
						captureCommitPhaseError(fiber, fiber.return, error$1);
					}
					resetCurrentFiber();
				}
				if (fiber === subtreeRoot) {
					nextEffect = null;
					return;
				}
				var sibling = fiber.sibling;
				if (sibling !== null) {
					sibling.return = fiber.return;
					nextEffect = sibling;
					return;
				}
				nextEffect = fiber.return;
			}
		}
		function disappearLayoutEffects_begin(subtreeRoot) {
			while (nextEffect !== null) {
				var fiber = nextEffect;
				var firstChild = fiber.child;
				switch (fiber.tag) {
					case FunctionComponent:
					case ForwardRef:
					case MemoComponent:
					case SimpleMemoComponent: {
						if (fiber.mode & ProfileMode) try {
							startLayoutEffectTimer();
							commitHookEffectListUnmount(Layout, fiber, fiber.return);
						} finally {
							recordLayoutEffectDuration(fiber);
						}
else commitHookEffectListUnmount(Layout, fiber, fiber.return);
						break;
					}
					case ClassComponent: {
						safelyDetachRef(fiber, fiber.return);
						var instance = fiber.stateNode;
						if (typeof instance.componentWillUnmount === "function") safelyCallComponentWillUnmount(fiber, fiber.return, instance);
						break;
					}
					case HostComponent: {
						safelyDetachRef(fiber, fiber.return);
						break;
					}
					case OffscreenComponent: {
						var isHidden = fiber.memoizedState !== null;
						if (isHidden) {
							disappearLayoutEffects_complete(subtreeRoot);
							continue;
						}
						break;
					}
				}
				if (firstChild !== null) {
					firstChild.return = fiber;
					nextEffect = firstChild;
				} else disappearLayoutEffects_complete(subtreeRoot);
			}
		}
		function disappearLayoutEffects_complete(subtreeRoot) {
			while (nextEffect !== null) {
				var fiber = nextEffect;
				if (fiber === subtreeRoot) {
					nextEffect = null;
					return;
				}
				var sibling = fiber.sibling;
				if (sibling !== null) {
					sibling.return = fiber.return;
					nextEffect = sibling;
					return;
				}
				nextEffect = fiber.return;
			}
		}
		function reappearLayoutEffects_begin(subtreeRoot) {
			while (nextEffect !== null) {
				var fiber = nextEffect;
				var firstChild = fiber.child;
				if (fiber.tag === OffscreenComponent) {
					var isHidden = fiber.memoizedState !== null;
					if (isHidden) {
						reappearLayoutEffects_complete(subtreeRoot);
						continue;
					}
				}
				if (firstChild !== null) {
					firstChild.return = fiber;
					nextEffect = firstChild;
				} else reappearLayoutEffects_complete(subtreeRoot);
			}
		}
		function reappearLayoutEffects_complete(subtreeRoot) {
			while (nextEffect !== null) {
				var fiber = nextEffect;
				setCurrentFiber(fiber);
				try {
					reappearLayoutEffectsOnFiber(fiber);
				} catch (error$1) {
					captureCommitPhaseError(fiber, fiber.return, error$1);
				}
				resetCurrentFiber();
				if (fiber === subtreeRoot) {
					nextEffect = null;
					return;
				}
				var sibling = fiber.sibling;
				if (sibling !== null) {
					sibling.return = fiber.return;
					nextEffect = sibling;
					return;
				}
				nextEffect = fiber.return;
			}
		}
		function commitPassiveMountEffects(root$1, finishedWork, committedLanes, committedTransitions) {
			nextEffect = finishedWork;
			commitPassiveMountEffects_begin(finishedWork, root$1, committedLanes, committedTransitions);
		}
		function commitPassiveMountEffects_begin(subtreeRoot, root$1, committedLanes, committedTransitions) {
			while (nextEffect !== null) {
				var fiber = nextEffect;
				var firstChild = fiber.child;
				if ((fiber.subtreeFlags & PassiveMask) !== NoFlags && firstChild !== null) {
					firstChild.return = fiber;
					nextEffect = firstChild;
				} else commitPassiveMountEffects_complete(subtreeRoot, root$1, committedLanes, committedTransitions);
			}
		}
		function commitPassiveMountEffects_complete(subtreeRoot, root$1, committedLanes, committedTransitions) {
			while (nextEffect !== null) {
				var fiber = nextEffect;
				if ((fiber.flags & Passive) !== NoFlags) {
					setCurrentFiber(fiber);
					try {
						commitPassiveMountOnFiber(root$1, fiber, committedLanes, committedTransitions);
					} catch (error$1) {
						captureCommitPhaseError(fiber, fiber.return, error$1);
					}
					resetCurrentFiber();
				}
				if (fiber === subtreeRoot) {
					nextEffect = null;
					return;
				}
				var sibling = fiber.sibling;
				if (sibling !== null) {
					sibling.return = fiber.return;
					nextEffect = sibling;
					return;
				}
				nextEffect = fiber.return;
			}
		}
		function commitPassiveMountOnFiber(finishedRoot, finishedWork, committedLanes, committedTransitions) {
			switch (finishedWork.tag) {
				case FunctionComponent:
				case ForwardRef:
				case SimpleMemoComponent: {
					if (finishedWork.mode & ProfileMode) {
						startPassiveEffectTimer();
						try {
							commitHookEffectListMount(Passive$1 | HasEffect, finishedWork);
						} finally {
							recordPassiveEffectDuration(finishedWork);
						}
					} else commitHookEffectListMount(Passive$1 | HasEffect, finishedWork);
					break;
				}
			}
		}
		function commitPassiveUnmountEffects(firstChild) {
			nextEffect = firstChild;
			commitPassiveUnmountEffects_begin();
		}
		function commitPassiveUnmountEffects_begin() {
			while (nextEffect !== null) {
				var fiber = nextEffect;
				var child = fiber.child;
				if ((nextEffect.flags & ChildDeletion) !== NoFlags) {
					var deletions = fiber.deletions;
					if (deletions !== null) {
						for (var i$1 = 0; i$1 < deletions.length; i$1++) {
							var fiberToDelete = deletions[i$1];
							nextEffect = fiberToDelete;
							commitPassiveUnmountEffectsInsideOfDeletedTree_begin(fiberToDelete, fiber);
						}
						{
							var previousFiber = fiber.alternate;
							if (previousFiber !== null) {
								var detachedChild = previousFiber.child;
								if (detachedChild !== null) {
									previousFiber.child = null;
									do {
										var detachedSibling = detachedChild.sibling;
										detachedChild.sibling = null;
										detachedChild = detachedSibling;
									} while (detachedChild !== null);
								}
							}
						}
						nextEffect = fiber;
					}
				}
				if ((fiber.subtreeFlags & PassiveMask) !== NoFlags && child !== null) {
					child.return = fiber;
					nextEffect = child;
				} else commitPassiveUnmountEffects_complete();
			}
		}
		function commitPassiveUnmountEffects_complete() {
			while (nextEffect !== null) {
				var fiber = nextEffect;
				if ((fiber.flags & Passive) !== NoFlags) {
					setCurrentFiber(fiber);
					commitPassiveUnmountOnFiber(fiber);
					resetCurrentFiber();
				}
				var sibling = fiber.sibling;
				if (sibling !== null) {
					sibling.return = fiber.return;
					nextEffect = sibling;
					return;
				}
				nextEffect = fiber.return;
			}
		}
		function commitPassiveUnmountOnFiber(finishedWork) {
			switch (finishedWork.tag) {
				case FunctionComponent:
				case ForwardRef:
				case SimpleMemoComponent: {
					if (finishedWork.mode & ProfileMode) {
						startPassiveEffectTimer();
						commitHookEffectListUnmount(Passive$1 | HasEffect, finishedWork, finishedWork.return);
						recordPassiveEffectDuration(finishedWork);
					} else commitHookEffectListUnmount(Passive$1 | HasEffect, finishedWork, finishedWork.return);
					break;
				}
			}
		}
		function commitPassiveUnmountEffectsInsideOfDeletedTree_begin(deletedSubtreeRoot, nearestMountedAncestor) {
			while (nextEffect !== null) {
				var fiber = nextEffect;
				setCurrentFiber(fiber);
				commitPassiveUnmountInsideDeletedTreeOnFiber(fiber, nearestMountedAncestor);
				resetCurrentFiber();
				var child = fiber.child;
				if (child !== null) {
					child.return = fiber;
					nextEffect = child;
				} else commitPassiveUnmountEffectsInsideOfDeletedTree_complete(deletedSubtreeRoot);
			}
		}
		function commitPassiveUnmountEffectsInsideOfDeletedTree_complete(deletedSubtreeRoot) {
			while (nextEffect !== null) {
				var fiber = nextEffect;
				var sibling = fiber.sibling;
				var returnFiber = fiber.return;
				{
					detachFiberAfterEffects(fiber);
					if (fiber === deletedSubtreeRoot) {
						nextEffect = null;
						return;
					}
				}
				if (sibling !== null) {
					sibling.return = returnFiber;
					nextEffect = sibling;
					return;
				}
				nextEffect = returnFiber;
			}
		}
		function commitPassiveUnmountInsideDeletedTreeOnFiber(current$1, nearestMountedAncestor) {
			switch (current$1.tag) {
				case FunctionComponent:
				case ForwardRef:
				case SimpleMemoComponent: {
					if (current$1.mode & ProfileMode) {
						startPassiveEffectTimer();
						commitHookEffectListUnmount(Passive$1, current$1, nearestMountedAncestor);
						recordPassiveEffectDuration(current$1);
					} else commitHookEffectListUnmount(Passive$1, current$1, nearestMountedAncestor);
					break;
				}
			}
		}
		function invokeLayoutEffectMountInDEV(fiber) {
			switch (fiber.tag) {
				case FunctionComponent:
				case ForwardRef:
				case SimpleMemoComponent: {
					try {
						commitHookEffectListMount(Layout | HasEffect, fiber);
					} catch (error$1) {
						captureCommitPhaseError(fiber, fiber.return, error$1);
					}
					break;
				}
				case ClassComponent: {
					var instance = fiber.stateNode;
					try {
						instance.componentDidMount();
					} catch (error$1) {
						captureCommitPhaseError(fiber, fiber.return, error$1);
					}
					break;
				}
			}
		}
		function invokePassiveEffectMountInDEV(fiber) {
			switch (fiber.tag) {
				case FunctionComponent:
				case ForwardRef:
				case SimpleMemoComponent: {
					try {
						commitHookEffectListMount(Passive$1 | HasEffect, fiber);
					} catch (error$1) {
						captureCommitPhaseError(fiber, fiber.return, error$1);
					}
					break;
				}
			}
		}
		function invokeLayoutEffectUnmountInDEV(fiber) {
			switch (fiber.tag) {
				case FunctionComponent:
				case ForwardRef:
				case SimpleMemoComponent: {
					try {
						commitHookEffectListUnmount(Layout | HasEffect, fiber, fiber.return);
					} catch (error$1) {
						captureCommitPhaseError(fiber, fiber.return, error$1);
					}
					break;
				}
				case ClassComponent: {
					var instance = fiber.stateNode;
					if (typeof instance.componentWillUnmount === "function") safelyCallComponentWillUnmount(fiber, fiber.return, instance);
					break;
				}
			}
		}
		function invokePassiveEffectUnmountInDEV(fiber) {
			switch (fiber.tag) {
				case FunctionComponent:
				case ForwardRef:
				case SimpleMemoComponent: try {
					commitHookEffectListUnmount(Passive$1 | HasEffect, fiber, fiber.return);
				} catch (error$1) {
					captureCommitPhaseError(fiber, fiber.return, error$1);
				}
			}
		}
		var COMPONENT_TYPE = 0;
		var HAS_PSEUDO_CLASS_TYPE = 1;
		var ROLE_TYPE = 2;
		var TEST_NAME_TYPE = 3;
		var TEXT_TYPE = 4;
		if (typeof Symbol === "function" && Symbol.for) {
			var symbolFor = Symbol.for;
			COMPONENT_TYPE = symbolFor("selector.component");
			HAS_PSEUDO_CLASS_TYPE = symbolFor("selector.has_pseudo_class");
			ROLE_TYPE = symbolFor("selector.role");
			TEST_NAME_TYPE = symbolFor("selector.test_id");
			TEXT_TYPE = symbolFor("selector.text");
		}
		var commitHooks = [];
		function onCommitRoot$1() {
			commitHooks.forEach(function(commitHook) {
				return commitHook();
			});
		}
		var ReactCurrentActQueue = ReactSharedInternals.ReactCurrentActQueue;
		function isLegacyActEnvironment(fiber) {
			{
				var isReactActEnvironmentGlobal = typeof IS_REACT_ACT_ENVIRONMENT !== "undefined" ? IS_REACT_ACT_ENVIRONMENT : undefined;
				var jestIsDefined = typeof jest !== "undefined";
				return jestIsDefined && isReactActEnvironmentGlobal !== false;
			}
		}
		function isConcurrentActEnvironment() {
			{
				var isReactActEnvironmentGlobal = typeof IS_REACT_ACT_ENVIRONMENT !== "undefined" ? IS_REACT_ACT_ENVIRONMENT : undefined;
				if (!isReactActEnvironmentGlobal && ReactCurrentActQueue.current !== null) error("The current testing environment is not configured to support act(...)");
				return isReactActEnvironmentGlobal;
			}
		}
		var ceil = Math.ceil;
		var ReactCurrentDispatcher$2 = ReactSharedInternals.ReactCurrentDispatcher, ReactCurrentOwner$2 = ReactSharedInternals.ReactCurrentOwner, ReactCurrentBatchConfig$3 = ReactSharedInternals.ReactCurrentBatchConfig, ReactCurrentActQueue$1 = ReactSharedInternals.ReactCurrentActQueue;
		var NoContext = 0;
		var BatchedContext = 1;
		var RenderContext = 2;
		var CommitContext = 4;
		var RootInProgress = 0;
		var RootFatalErrored = 1;
		var RootErrored = 2;
		var RootSuspended = 3;
		var RootSuspendedWithDelay = 4;
		var RootCompleted = 5;
		var RootDidNotComplete = 6;
		var executionContext = NoContext;
		var workInProgressRoot = null;
		var workInProgress = null;
		var workInProgressRootRenderLanes = NoLanes;
		var subtreeRenderLanes = NoLanes;
		var subtreeRenderLanesCursor = createCursor(NoLanes);
		var workInProgressRootExitStatus = RootInProgress;
		var workInProgressRootFatalError = null;
		var workInProgressRootIncludedLanes = NoLanes;
		var workInProgressRootSkippedLanes = NoLanes;
		var workInProgressRootInterleavedUpdatedLanes = NoLanes;
		var workInProgressRootPingedLanes = NoLanes;
		var workInProgressRootConcurrentErrors = null;
		var workInProgressRootRecoverableErrors = null;
		var globalMostRecentFallbackTime = 0;
		var FALLBACK_THROTTLE_MS = 500;
		var workInProgressRootRenderTargetTime = Infinity;
		var RENDER_TIMEOUT_MS = 500;
		var workInProgressTransitions = null;
		function resetRenderTimer() {
			workInProgressRootRenderTargetTime = now() + RENDER_TIMEOUT_MS;
		}
		function getRenderTargetTime() {
			return workInProgressRootRenderTargetTime;
		}
		var hasUncaughtError = false;
		var firstUncaughtError = null;
		var legacyErrorBoundariesThatAlreadyFailed = null;
		var rootDoesHavePassiveEffects = false;
		var rootWithPendingPassiveEffects = null;
		var pendingPassiveEffectsLanes = NoLanes;
		var pendingPassiveProfilerEffects = [];
		var pendingPassiveTransitions = null;
		var NESTED_UPDATE_LIMIT = 50;
		var nestedUpdateCount = 0;
		var rootWithNestedUpdates = null;
		var isFlushingPassiveEffects = false;
		var didScheduleUpdateDuringPassiveEffects = false;
		var NESTED_PASSIVE_UPDATE_LIMIT = 50;
		var nestedPassiveUpdateCount = 0;
		var rootWithPassiveNestedUpdates = null;
		var currentEventTime = NoTimestamp;
		var currentEventTransitionLane = NoLanes;
		var isRunningInsertionEffect = false;
		function getWorkInProgressRoot() {
			return workInProgressRoot;
		}
		function requestEventTime() {
			if ((executionContext & (RenderContext | CommitContext)) !== NoContext) return now();
			if (currentEventTime !== NoTimestamp) return currentEventTime;
			currentEventTime = now();
			return currentEventTime;
		}
		function requestUpdateLane(fiber) {
			var mode = fiber.mode;
			if ((mode & ConcurrentMode) === NoMode) return SyncLane;
else if ((executionContext & RenderContext) !== NoContext && workInProgressRootRenderLanes !== NoLanes) return pickArbitraryLane(workInProgressRootRenderLanes);
			var isTransition = requestCurrentTransition() !== NoTransition;
			if (isTransition) {
				if (ReactCurrentBatchConfig$3.transition !== null) {
					var transition = ReactCurrentBatchConfig$3.transition;
					if (!transition._updatedFibers) transition._updatedFibers = new Set();
					transition._updatedFibers.add(fiber);
				}
				if (currentEventTransitionLane === NoLane) currentEventTransitionLane = claimNextTransitionLane();
				return currentEventTransitionLane;
			}
			var updateLane = getCurrentUpdatePriority();
			if (updateLane !== NoLane) return updateLane;
			var eventLane = getCurrentEventPriority();
			return eventLane;
		}
		function requestRetryLane(fiber) {
			var mode = fiber.mode;
			if ((mode & ConcurrentMode) === NoMode) return SyncLane;
			return claimNextRetryLane();
		}
		function scheduleUpdateOnFiber(root$1, fiber, lane, eventTime) {
			checkForNestedUpdates();
			if (isRunningInsertionEffect) error("useInsertionEffect must not schedule updates.");
			if (isFlushingPassiveEffects) didScheduleUpdateDuringPassiveEffects = true;
			markRootUpdated(root$1, lane, eventTime);
			if ((executionContext & RenderContext) !== NoLanes && root$1 === workInProgressRoot) warnAboutRenderPhaseUpdatesInDEV(fiber);
else {
				if (isDevToolsPresent) addFiberToLanesMap(root$1, fiber, lane);
				warnIfUpdatesNotWrappedWithActDEV(fiber);
				if (root$1 === workInProgressRoot) {
					if ((executionContext & RenderContext) === NoContext) workInProgressRootInterleavedUpdatedLanes = mergeLanes(workInProgressRootInterleavedUpdatedLanes, lane);
					if (workInProgressRootExitStatus === RootSuspendedWithDelay) markRootSuspended$1(root$1, workInProgressRootRenderLanes);
				}
				ensureRootIsScheduled(root$1, eventTime);
				if (lane === SyncLane && executionContext === NoContext && (fiber.mode & ConcurrentMode) === NoMode && !ReactCurrentActQueue$1.isBatchingLegacy) {
					resetRenderTimer();
					flushSyncCallbacksOnlyInLegacyMode();
				}
			}
		}
		function scheduleInitialHydrationOnRoot(root$1, lane, eventTime) {
			var current$1 = root$1.current;
			current$1.lanes = lane;
			markRootUpdated(root$1, lane, eventTime);
			ensureRootIsScheduled(root$1, eventTime);
		}
		function isUnsafeClassRenderPhaseUpdate(fiber) {
			return (executionContext & RenderContext) !== NoContext;
		}
		function ensureRootIsScheduled(root$1, currentTime) {
			var existingCallbackNode = root$1.callbackNode;
			markStarvedLanesAsExpired(root$1, currentTime);
			var nextLanes = getNextLanes(root$1, root$1 === workInProgressRoot ? workInProgressRootRenderLanes : NoLanes);
			if (nextLanes === NoLanes) {
				if (existingCallbackNode !== null) cancelCallback$1(existingCallbackNode);
				root$1.callbackNode = null;
				root$1.callbackPriority = NoLane;
				return;
			}
			var newCallbackPriority = getHighestPriorityLane(nextLanes);
			var existingCallbackPriority = root$1.callbackPriority;
			if (existingCallbackPriority === newCallbackPriority && !(ReactCurrentActQueue$1.current !== null && existingCallbackNode !== fakeActCallbackNode)) {
				if (existingCallbackNode == null && existingCallbackPriority !== SyncLane) error("Expected scheduled callback to exist. This error is likely caused by a bug in React. Please file an issue.");
				return;
			}
			if (existingCallbackNode != null) cancelCallback$1(existingCallbackNode);
			var newCallbackNode;
			if (newCallbackPriority === SyncLane) {
				if (root$1.tag === LegacyRoot) {
					if (ReactCurrentActQueue$1.isBatchingLegacy !== null) ReactCurrentActQueue$1.didScheduleLegacyUpdate = true;
					scheduleLegacySyncCallback(performSyncWorkOnRoot.bind(null, root$1));
				} else scheduleSyncCallback(performSyncWorkOnRoot.bind(null, root$1));
				if (ReactCurrentActQueue$1.current !== null) ReactCurrentActQueue$1.current.push(flushSyncCallbacks);
else scheduleMicrotask(function() {
					if ((executionContext & (RenderContext | CommitContext)) === NoContext) flushSyncCallbacks();
				});
				newCallbackNode = null;
			} else {
				var schedulerPriorityLevel;
				switch (lanesToEventPriority(nextLanes)) {
					case DiscreteEventPriority:
						schedulerPriorityLevel = ImmediatePriority;
						break;
					case ContinuousEventPriority:
						schedulerPriorityLevel = UserBlockingPriority;
						break;
					case DefaultEventPriority:
						schedulerPriorityLevel = NormalPriority;
						break;
					case IdleEventPriority:
						schedulerPriorityLevel = IdlePriority;
						break;
					default:
						schedulerPriorityLevel = NormalPriority;
						break;
				}
				newCallbackNode = scheduleCallback$1(schedulerPriorityLevel, performConcurrentWorkOnRoot.bind(null, root$1));
			}
			root$1.callbackPriority = newCallbackPriority;
			root$1.callbackNode = newCallbackNode;
		}
		function performConcurrentWorkOnRoot(root$1, didTimeout) {
			resetNestedUpdateFlag();
			currentEventTime = NoTimestamp;
			currentEventTransitionLane = NoLanes;
			if ((executionContext & (RenderContext | CommitContext)) !== NoContext) throw new Error("Should not already be working.");
			var originalCallbackNode = root$1.callbackNode;
			var didFlushPassiveEffects = flushPassiveEffects();
			if (didFlushPassiveEffects) {
				if (root$1.callbackNode !== originalCallbackNode) return null;
			}
			var lanes = getNextLanes(root$1, root$1 === workInProgressRoot ? workInProgressRootRenderLanes : NoLanes);
			if (lanes === NoLanes) return null;
			var shouldTimeSlice = !includesBlockingLane(root$1, lanes) && !includesExpiredLane(root$1, lanes) && !didTimeout;
			var exitStatus = shouldTimeSlice ? renderRootConcurrent(root$1, lanes) : renderRootSync(root$1, lanes);
			if (exitStatus !== RootInProgress) {
				if (exitStatus === RootErrored) {
					var errorRetryLanes = getLanesToRetrySynchronouslyOnError(root$1);
					if (errorRetryLanes !== NoLanes) {
						lanes = errorRetryLanes;
						exitStatus = recoverFromConcurrentError(root$1, errorRetryLanes);
					}
				}
				if (exitStatus === RootFatalErrored) {
					var fatalError = workInProgressRootFatalError;
					prepareFreshStack(root$1, NoLanes);
					markRootSuspended$1(root$1, lanes);
					ensureRootIsScheduled(root$1, now());
					throw fatalError;
				}
				if (exitStatus === RootDidNotComplete) markRootSuspended$1(root$1, lanes);
else {
					var renderWasConcurrent = !includesBlockingLane(root$1, lanes);
					var finishedWork = root$1.current.alternate;
					if (renderWasConcurrent && !isRenderConsistentWithExternalStores(finishedWork)) {
						exitStatus = renderRootSync(root$1, lanes);
						if (exitStatus === RootErrored) {
							var _errorRetryLanes = getLanesToRetrySynchronouslyOnError(root$1);
							if (_errorRetryLanes !== NoLanes) {
								lanes = _errorRetryLanes;
								exitStatus = recoverFromConcurrentError(root$1, _errorRetryLanes);
							}
						}
						if (exitStatus === RootFatalErrored) {
							var _fatalError = workInProgressRootFatalError;
							prepareFreshStack(root$1, NoLanes);
							markRootSuspended$1(root$1, lanes);
							ensureRootIsScheduled(root$1, now());
							throw _fatalError;
						}
					}
					root$1.finishedWork = finishedWork;
					root$1.finishedLanes = lanes;
					finishConcurrentRender(root$1, exitStatus, lanes);
				}
			}
			ensureRootIsScheduled(root$1, now());
			if (root$1.callbackNode === originalCallbackNode) return performConcurrentWorkOnRoot.bind(null, root$1);
			return null;
		}
		function recoverFromConcurrentError(root$1, errorRetryLanes) {
			var errorsFromFirstAttempt = workInProgressRootConcurrentErrors;
			if (isRootDehydrated(root$1)) {
				var rootWorkInProgress = prepareFreshStack(root$1, errorRetryLanes);
				rootWorkInProgress.flags |= ForceClientRender;
				errorHydratingContainer(root$1.containerInfo);
			}
			var exitStatus = renderRootSync(root$1, errorRetryLanes);
			if (exitStatus !== RootErrored) {
				var errorsFromSecondAttempt = workInProgressRootRecoverableErrors;
				workInProgressRootRecoverableErrors = errorsFromFirstAttempt;
				if (errorsFromSecondAttempt !== null) queueRecoverableErrors(errorsFromSecondAttempt);
			}
			return exitStatus;
		}
		function queueRecoverableErrors(errors) {
			if (workInProgressRootRecoverableErrors === null) workInProgressRootRecoverableErrors = errors;
else workInProgressRootRecoverableErrors.push.apply(workInProgressRootRecoverableErrors, errors);
		}
		function finishConcurrentRender(root$1, exitStatus, lanes) {
			switch (exitStatus) {
				case RootInProgress:
				case RootFatalErrored: throw new Error("Root did not complete. This is a bug in React.");
				case RootErrored: {
					commitRoot(root$1, workInProgressRootRecoverableErrors, workInProgressTransitions);
					break;
				}
				case RootSuspended: {
					markRootSuspended$1(root$1, lanes);
					if (includesOnlyRetries(lanes) && !shouldForceFlushFallbacksInDEV()) {
						var msUntilTimeout = globalMostRecentFallbackTime + FALLBACK_THROTTLE_MS - now();
						if (msUntilTimeout > 10) {
							var nextLanes = getNextLanes(root$1, NoLanes);
							if (nextLanes !== NoLanes) break;
							var suspendedLanes = root$1.suspendedLanes;
							if (!isSubsetOfLanes(suspendedLanes, lanes)) {
								var eventTime = requestEventTime();
								markRootPinged(root$1, suspendedLanes);
								break;
							}
							root$1.timeoutHandle = scheduleTimeout(commitRoot.bind(null, root$1, workInProgressRootRecoverableErrors, workInProgressTransitions), msUntilTimeout);
							break;
						}
					}
					commitRoot(root$1, workInProgressRootRecoverableErrors, workInProgressTransitions);
					break;
				}
				case RootSuspendedWithDelay: {
					markRootSuspended$1(root$1, lanes);
					if (includesOnlyTransitions(lanes)) break;
					if (!shouldForceFlushFallbacksInDEV()) {
						var mostRecentEventTime = getMostRecentEventTime(root$1, lanes);
						var eventTimeMs = mostRecentEventTime;
						var timeElapsedMs = now() - eventTimeMs;
						var _msUntilTimeout = jnd(timeElapsedMs) - timeElapsedMs;
						if (_msUntilTimeout > 10) {
							root$1.timeoutHandle = scheduleTimeout(commitRoot.bind(null, root$1, workInProgressRootRecoverableErrors, workInProgressTransitions), _msUntilTimeout);
							break;
						}
					}
					commitRoot(root$1, workInProgressRootRecoverableErrors, workInProgressTransitions);
					break;
				}
				case RootCompleted: {
					commitRoot(root$1, workInProgressRootRecoverableErrors, workInProgressTransitions);
					break;
				}
				default: throw new Error("Unknown root exit status.");
			}
		}
		function isRenderConsistentWithExternalStores(finishedWork) {
			var node = finishedWork;
			while (true) {
				if (node.flags & StoreConsistency) {
					var updateQueue = node.updateQueue;
					if (updateQueue !== null) {
						var checks = updateQueue.stores;
						if (checks !== null) for (var i$1 = 0; i$1 < checks.length; i$1++) {
							var check = checks[i$1];
							var getSnapshot = check.getSnapshot;
							var renderedValue = check.value;
							try {
								if (!objectIs(getSnapshot(), renderedValue)) return false;
							} catch (error$1) {
								return false;
							}
						}
					}
				}
				var child = node.child;
				if (node.subtreeFlags & StoreConsistency && child !== null) {
					child.return = node;
					node = child;
					continue;
				}
				if (node === finishedWork) return true;
				while (node.sibling === null) {
					if (node.return === null || node.return === finishedWork) return true;
					node = node.return;
				}
				node.sibling.return = node.return;
				node = node.sibling;
			}
			return true;
		}
		function markRootSuspended$1(root$1, suspendedLanes) {
			suspendedLanes = removeLanes(suspendedLanes, workInProgressRootPingedLanes);
			suspendedLanes = removeLanes(suspendedLanes, workInProgressRootInterleavedUpdatedLanes);
			markRootSuspended(root$1, suspendedLanes);
		}
		function performSyncWorkOnRoot(root$1) {
			syncNestedUpdateFlag();
			if ((executionContext & (RenderContext | CommitContext)) !== NoContext) throw new Error("Should not already be working.");
			flushPassiveEffects();
			var lanes = getNextLanes(root$1, NoLanes);
			if (!includesSomeLane(lanes, SyncLane)) {
				ensureRootIsScheduled(root$1, now());
				return null;
			}
			var exitStatus = renderRootSync(root$1, lanes);
			if (root$1.tag !== LegacyRoot && exitStatus === RootErrored) {
				var errorRetryLanes = getLanesToRetrySynchronouslyOnError(root$1);
				if (errorRetryLanes !== NoLanes) {
					lanes = errorRetryLanes;
					exitStatus = recoverFromConcurrentError(root$1, errorRetryLanes);
				}
			}
			if (exitStatus === RootFatalErrored) {
				var fatalError = workInProgressRootFatalError;
				prepareFreshStack(root$1, NoLanes);
				markRootSuspended$1(root$1, lanes);
				ensureRootIsScheduled(root$1, now());
				throw fatalError;
			}
			if (exitStatus === RootDidNotComplete) throw new Error("Root did not complete. This is a bug in React.");
			var finishedWork = root$1.current.alternate;
			root$1.finishedWork = finishedWork;
			root$1.finishedLanes = lanes;
			commitRoot(root$1, workInProgressRootRecoverableErrors, workInProgressTransitions);
			ensureRootIsScheduled(root$1, now());
			return null;
		}
		function flushRoot(root$1, lanes) {
			if (lanes !== NoLanes) {
				markRootEntangled(root$1, mergeLanes(lanes, SyncLane));
				ensureRootIsScheduled(root$1, now());
				if ((executionContext & (RenderContext | CommitContext)) === NoContext) {
					resetRenderTimer();
					flushSyncCallbacks();
				}
			}
		}
		function batchedUpdates$1(fn, a) {
			var prevExecutionContext = executionContext;
			executionContext |= BatchedContext;
			try {
				return fn(a);
			} finally {
				executionContext = prevExecutionContext;
				if (executionContext === NoContext && !ReactCurrentActQueue$1.isBatchingLegacy) {
					resetRenderTimer();
					flushSyncCallbacksOnlyInLegacyMode();
				}
			}
		}
		function discreteUpdates(fn, a, b, c, d) {
			var previousPriority = getCurrentUpdatePriority();
			var prevTransition = ReactCurrentBatchConfig$3.transition;
			try {
				ReactCurrentBatchConfig$3.transition = null;
				setCurrentUpdatePriority(DiscreteEventPriority);
				return fn(a, b, c, d);
			} finally {
				setCurrentUpdatePriority(previousPriority);
				ReactCurrentBatchConfig$3.transition = prevTransition;
				if (executionContext === NoContext) resetRenderTimer();
			}
		}
		function flushSync$1(fn) {
			if (rootWithPendingPassiveEffects !== null && rootWithPendingPassiveEffects.tag === LegacyRoot && (executionContext & (RenderContext | CommitContext)) === NoContext) flushPassiveEffects();
			var prevExecutionContext = executionContext;
			executionContext |= BatchedContext;
			var prevTransition = ReactCurrentBatchConfig$3.transition;
			var previousPriority = getCurrentUpdatePriority();
			try {
				ReactCurrentBatchConfig$3.transition = null;
				setCurrentUpdatePriority(DiscreteEventPriority);
				if (fn) return fn();
else return undefined;
			} finally {
				setCurrentUpdatePriority(previousPriority);
				ReactCurrentBatchConfig$3.transition = prevTransition;
				executionContext = prevExecutionContext;
				if ((executionContext & (RenderContext | CommitContext)) === NoContext) flushSyncCallbacks();
			}
		}
		function isAlreadyRendering() {
			return (executionContext & (RenderContext | CommitContext)) !== NoContext;
		}
		function pushRenderLanes(fiber, lanes) {
			push(subtreeRenderLanesCursor, subtreeRenderLanes, fiber);
			subtreeRenderLanes = mergeLanes(subtreeRenderLanes, lanes);
			workInProgressRootIncludedLanes = mergeLanes(workInProgressRootIncludedLanes, lanes);
		}
		function popRenderLanes(fiber) {
			subtreeRenderLanes = subtreeRenderLanesCursor.current;
			pop(subtreeRenderLanesCursor, fiber);
		}
		function prepareFreshStack(root$1, lanes) {
			root$1.finishedWork = null;
			root$1.finishedLanes = NoLanes;
			var timeoutHandle = root$1.timeoutHandle;
			if (timeoutHandle !== noTimeout) {
				root$1.timeoutHandle = noTimeout;
				cancelTimeout(timeoutHandle);
			}
			if (workInProgress !== null) {
				var interruptedWork = workInProgress.return;
				while (interruptedWork !== null) {
					var current$1 = interruptedWork.alternate;
					unwindInterruptedWork(current$1, interruptedWork);
					interruptedWork = interruptedWork.return;
				}
			}
			workInProgressRoot = root$1;
			var rootWorkInProgress = createWorkInProgress(root$1.current, null);
			workInProgress = rootWorkInProgress;
			workInProgressRootRenderLanes = subtreeRenderLanes = workInProgressRootIncludedLanes = lanes;
			workInProgressRootExitStatus = RootInProgress;
			workInProgressRootFatalError = null;
			workInProgressRootSkippedLanes = NoLanes;
			workInProgressRootInterleavedUpdatedLanes = NoLanes;
			workInProgressRootPingedLanes = NoLanes;
			workInProgressRootConcurrentErrors = null;
			workInProgressRootRecoverableErrors = null;
			finishQueueingConcurrentUpdates();
			ReactStrictModeWarnings.discardPendingWarnings();
			return rootWorkInProgress;
		}
		function handleError(root$1, thrownValue) {
			do {
				var erroredWork = workInProgress;
				try {
					resetContextDependencies();
					resetHooksAfterThrow();
					resetCurrentFiber();
					ReactCurrentOwner$2.current = null;
					if (erroredWork === null || erroredWork.return === null) {
						workInProgressRootExitStatus = RootFatalErrored;
						workInProgressRootFatalError = thrownValue;
						workInProgress = null;
						return;
					}
					if (enableProfilerTimer && erroredWork.mode & ProfileMode) stopProfilerTimerIfRunningAndRecordDelta(erroredWork, true);
					if (enableSchedulingProfiler) {
						markComponentRenderStopped();
						if (thrownValue !== null && typeof thrownValue === "object" && typeof thrownValue.then === "function") {
							var wakeable = thrownValue;
							markComponentSuspended(erroredWork, wakeable, workInProgressRootRenderLanes);
						} else markComponentErrored(erroredWork, thrownValue, workInProgressRootRenderLanes);
					}
					throwException(root$1, erroredWork.return, erroredWork, thrownValue, workInProgressRootRenderLanes);
					completeUnitOfWork(erroredWork);
				} catch (yetAnotherThrownValue) {
					thrownValue = yetAnotherThrownValue;
					if (workInProgress === erroredWork && erroredWork !== null) {
						erroredWork = erroredWork.return;
						workInProgress = erroredWork;
					} else erroredWork = workInProgress;
					continue;
				}
				return;
			} while (true);
		}
		function pushDispatcher() {
			var prevDispatcher = ReactCurrentDispatcher$2.current;
			ReactCurrentDispatcher$2.current = ContextOnlyDispatcher;
			if (prevDispatcher === null) return ContextOnlyDispatcher;
else return prevDispatcher;
		}
		function popDispatcher(prevDispatcher) {
			ReactCurrentDispatcher$2.current = prevDispatcher;
		}
		function markCommitTimeOfFallback() {
			globalMostRecentFallbackTime = now();
		}
		function markSkippedUpdateLanes(lane) {
			workInProgressRootSkippedLanes = mergeLanes(lane, workInProgressRootSkippedLanes);
		}
		function renderDidSuspend() {
			if (workInProgressRootExitStatus === RootInProgress) workInProgressRootExitStatus = RootSuspended;
		}
		function renderDidSuspendDelayIfPossible() {
			if (workInProgressRootExitStatus === RootInProgress || workInProgressRootExitStatus === RootSuspended || workInProgressRootExitStatus === RootErrored) workInProgressRootExitStatus = RootSuspendedWithDelay;
			if (workInProgressRoot !== null && (includesNonIdleWork(workInProgressRootSkippedLanes) || includesNonIdleWork(workInProgressRootInterleavedUpdatedLanes))) markRootSuspended$1(workInProgressRoot, workInProgressRootRenderLanes);
		}
		function renderDidError(error$1) {
			if (workInProgressRootExitStatus !== RootSuspendedWithDelay) workInProgressRootExitStatus = RootErrored;
			if (workInProgressRootConcurrentErrors === null) workInProgressRootConcurrentErrors = [error$1];
else workInProgressRootConcurrentErrors.push(error$1);
		}
		function renderHasNotSuspendedYet() {
			return workInProgressRootExitStatus === RootInProgress;
		}
		function renderRootSync(root$1, lanes) {
			var prevExecutionContext = executionContext;
			executionContext |= RenderContext;
			var prevDispatcher = pushDispatcher();
			if (workInProgressRoot !== root$1 || workInProgressRootRenderLanes !== lanes) {
				if (isDevToolsPresent) {
					var memoizedUpdaters = root$1.memoizedUpdaters;
					if (memoizedUpdaters.size > 0) {
						restorePendingUpdaters(root$1, workInProgressRootRenderLanes);
						memoizedUpdaters.clear();
					}
					movePendingFibersToMemoized(root$1, lanes);
				}
				workInProgressTransitions = getTransitionsForLanes();
				prepareFreshStack(root$1, lanes);
			}
			markRenderStarted(lanes);
			do 
				try {
					workLoopSync();
					break;
				} catch (thrownValue) {
					handleError(root$1, thrownValue);
				}
			while (true);
			resetContextDependencies();
			executionContext = prevExecutionContext;
			popDispatcher(prevDispatcher);
			if (workInProgress !== null) throw new Error("Cannot commit an incomplete root. This error is likely caused by a bug in React. Please file an issue.");
			markRenderStopped();
			workInProgressRoot = null;
			workInProgressRootRenderLanes = NoLanes;
			return workInProgressRootExitStatus;
		}
		/** @noinline */
		function workLoopSync() {
			while (workInProgress !== null) performUnitOfWork(workInProgress);
		}
		function renderRootConcurrent(root$1, lanes) {
			var prevExecutionContext = executionContext;
			executionContext |= RenderContext;
			var prevDispatcher = pushDispatcher();
			if (workInProgressRoot !== root$1 || workInProgressRootRenderLanes !== lanes) {
				if (isDevToolsPresent) {
					var memoizedUpdaters = root$1.memoizedUpdaters;
					if (memoizedUpdaters.size > 0) {
						restorePendingUpdaters(root$1, workInProgressRootRenderLanes);
						memoizedUpdaters.clear();
					}
					movePendingFibersToMemoized(root$1, lanes);
				}
				workInProgressTransitions = getTransitionsForLanes();
				resetRenderTimer();
				prepareFreshStack(root$1, lanes);
			}
			markRenderStarted(lanes);
			do 
				try {
					workLoopConcurrent();
					break;
				} catch (thrownValue) {
					handleError(root$1, thrownValue);
				}
			while (true);
			resetContextDependencies();
			popDispatcher(prevDispatcher);
			executionContext = prevExecutionContext;
			if (workInProgress !== null) {
				markRenderYielded();
				return RootInProgress;
			} else {
				markRenderStopped();
				workInProgressRoot = null;
				workInProgressRootRenderLanes = NoLanes;
				return workInProgressRootExitStatus;
			}
		}
		/** @noinline */
		function workLoopConcurrent() {
			while (workInProgress !== null && !shouldYield()) performUnitOfWork(workInProgress);
		}
		function performUnitOfWork(unitOfWork) {
			var current$1 = unitOfWork.alternate;
			setCurrentFiber(unitOfWork);
			var next;
			if ((unitOfWork.mode & ProfileMode) !== NoMode) {
				startProfilerTimer(unitOfWork);
				next = beginWork$1(current$1, unitOfWork, subtreeRenderLanes);
				stopProfilerTimerIfRunningAndRecordDelta(unitOfWork, true);
			} else next = beginWork$1(current$1, unitOfWork, subtreeRenderLanes);
			resetCurrentFiber();
			unitOfWork.memoizedProps = unitOfWork.pendingProps;
			if (next === null) completeUnitOfWork(unitOfWork);
else workInProgress = next;
			ReactCurrentOwner$2.current = null;
		}
		function completeUnitOfWork(unitOfWork) {
			var completedWork = unitOfWork;
			do {
				var current$1 = completedWork.alternate;
				var returnFiber = completedWork.return;
				if ((completedWork.flags & Incomplete) === NoFlags) {
					setCurrentFiber(completedWork);
					var next = void 0;
					if ((completedWork.mode & ProfileMode) === NoMode) next = completeWork(current$1, completedWork, subtreeRenderLanes);
else {
						startProfilerTimer(completedWork);
						next = completeWork(current$1, completedWork, subtreeRenderLanes);
						stopProfilerTimerIfRunningAndRecordDelta(completedWork, false);
					}
					resetCurrentFiber();
					if (next !== null) {
						workInProgress = next;
						return;
					}
				} else {
					var _next = unwindWork(current$1, completedWork);
					if (_next !== null) {
						_next.flags &= HostEffectMask;
						workInProgress = _next;
						return;
					}
					if ((completedWork.mode & ProfileMode) !== NoMode) {
						stopProfilerTimerIfRunningAndRecordDelta(completedWork, false);
						var actualDuration = completedWork.actualDuration;
						var child = completedWork.child;
						while (child !== null) {
							actualDuration += child.actualDuration;
							child = child.sibling;
						}
						completedWork.actualDuration = actualDuration;
					}
					if (returnFiber !== null) {
						returnFiber.flags |= Incomplete;
						returnFiber.subtreeFlags = NoFlags;
						returnFiber.deletions = null;
					} else {
						workInProgressRootExitStatus = RootDidNotComplete;
						workInProgress = null;
						return;
					}
				}
				var siblingFiber = completedWork.sibling;
				if (siblingFiber !== null) {
					workInProgress = siblingFiber;
					return;
				}
				completedWork = returnFiber;
				workInProgress = completedWork;
			} while (completedWork !== null);
			if (workInProgressRootExitStatus === RootInProgress) workInProgressRootExitStatus = RootCompleted;
		}
		function commitRoot(root$1, recoverableErrors, transitions) {
			var previousUpdateLanePriority = getCurrentUpdatePriority();
			var prevTransition = ReactCurrentBatchConfig$3.transition;
			try {
				ReactCurrentBatchConfig$3.transition = null;
				setCurrentUpdatePriority(DiscreteEventPriority);
				commitRootImpl(root$1, recoverableErrors, transitions, previousUpdateLanePriority);
			} finally {
				ReactCurrentBatchConfig$3.transition = prevTransition;
				setCurrentUpdatePriority(previousUpdateLanePriority);
			}
			return null;
		}
		function commitRootImpl(root$1, recoverableErrors, transitions, renderPriorityLevel) {
			do 
				flushPassiveEffects();
			while (rootWithPendingPassiveEffects !== null);
			flushRenderPhaseStrictModeWarningsInDEV();
			if ((executionContext & (RenderContext | CommitContext)) !== NoContext) throw new Error("Should not already be working.");
			var finishedWork = root$1.finishedWork;
			var lanes = root$1.finishedLanes;
			markCommitStarted(lanes);
			if (finishedWork === null) {
				markCommitStopped();
				return null;
			} else if (lanes === NoLanes) error("root.finishedLanes should not be empty during a commit. This is a bug in React.");
			root$1.finishedWork = null;
			root$1.finishedLanes = NoLanes;
			if (finishedWork === root$1.current) throw new Error("Cannot commit the same tree as before. This error is likely caused by a bug in React. Please file an issue.");
			root$1.callbackNode = null;
			root$1.callbackPriority = NoLane;
			var remainingLanes = mergeLanes(finishedWork.lanes, finishedWork.childLanes);
			markRootFinished(root$1, remainingLanes);
			if (root$1 === workInProgressRoot) {
				workInProgressRoot = null;
				workInProgress = null;
				workInProgressRootRenderLanes = NoLanes;
			}
			if ((finishedWork.subtreeFlags & PassiveMask) !== NoFlags || (finishedWork.flags & PassiveMask) !== NoFlags) {
				if (!rootDoesHavePassiveEffects) {
					rootDoesHavePassiveEffects = true;
					pendingPassiveTransitions = transitions;
					scheduleCallback$1(NormalPriority, function() {
						flushPassiveEffects();
						return null;
					});
				}
			}
			var subtreeHasEffects = (finishedWork.subtreeFlags & (BeforeMutationMask | MutationMask | LayoutMask | PassiveMask)) !== NoFlags;
			var rootHasEffect = (finishedWork.flags & (BeforeMutationMask | MutationMask | LayoutMask | PassiveMask)) !== NoFlags;
			if (subtreeHasEffects || rootHasEffect) {
				var prevTransition = ReactCurrentBatchConfig$3.transition;
				ReactCurrentBatchConfig$3.transition = null;
				var previousPriority = getCurrentUpdatePriority();
				setCurrentUpdatePriority(DiscreteEventPriority);
				var prevExecutionContext = executionContext;
				executionContext |= CommitContext;
				ReactCurrentOwner$2.current = null;
				var shouldFireAfterActiveInstanceBlur$1 = commitBeforeMutationEffects(root$1, finishedWork);
				recordCommitTime();
				commitMutationEffects(root$1, finishedWork, lanes);
				resetAfterCommit(root$1.containerInfo);
				root$1.current = finishedWork;
				markLayoutEffectsStarted(lanes);
				commitLayoutEffects(finishedWork, root$1, lanes);
				markLayoutEffectsStopped();
				requestPaint();
				executionContext = prevExecutionContext;
				setCurrentUpdatePriority(previousPriority);
				ReactCurrentBatchConfig$3.transition = prevTransition;
			} else {
				root$1.current = finishedWork;
				recordCommitTime();
			}
			var rootDidHavePassiveEffects = rootDoesHavePassiveEffects;
			if (rootDoesHavePassiveEffects) {
				rootDoesHavePassiveEffects = false;
				rootWithPendingPassiveEffects = root$1;
				pendingPassiveEffectsLanes = lanes;
			} else {
				nestedPassiveUpdateCount = 0;
				rootWithPassiveNestedUpdates = null;
			}
			remainingLanes = root$1.pendingLanes;
			if (remainingLanes === NoLanes) legacyErrorBoundariesThatAlreadyFailed = null;
			if (!rootDidHavePassiveEffects) commitDoubleInvokeEffectsInDEV(root$1.current, false);
			onCommitRoot(finishedWork.stateNode, renderPriorityLevel);
			if (isDevToolsPresent) root$1.memoizedUpdaters.clear();
			onCommitRoot$1();
			ensureRootIsScheduled(root$1, now());
			if (recoverableErrors !== null) {
				var onRecoverableError = root$1.onRecoverableError;
				for (var i$1 = 0; i$1 < recoverableErrors.length; i$1++) {
					var recoverableError = recoverableErrors[i$1];
					var componentStack = recoverableError.stack;
					var digest = recoverableError.digest;
					onRecoverableError(recoverableError.value, {
						componentStack,
						digest
					});
				}
			}
			if (hasUncaughtError) {
				hasUncaughtError = false;
				var error$1 = firstUncaughtError;
				firstUncaughtError = null;
				throw error$1;
			}
			if (includesSomeLane(pendingPassiveEffectsLanes, SyncLane) && root$1.tag !== LegacyRoot) flushPassiveEffects();
			remainingLanes = root$1.pendingLanes;
			if (includesSomeLane(remainingLanes, SyncLane)) {
				markNestedUpdateScheduled();
				if (root$1 === rootWithNestedUpdates) nestedUpdateCount++;
else {
					nestedUpdateCount = 0;
					rootWithNestedUpdates = root$1;
				}
			} else nestedUpdateCount = 0;
			flushSyncCallbacks();
			markCommitStopped();
			return null;
		}
		function flushPassiveEffects() {
			if (rootWithPendingPassiveEffects !== null) {
				var renderPriority = lanesToEventPriority(pendingPassiveEffectsLanes);
				var priority = lowerEventPriority(DefaultEventPriority, renderPriority);
				var prevTransition = ReactCurrentBatchConfig$3.transition;
				var previousPriority = getCurrentUpdatePriority();
				try {
					ReactCurrentBatchConfig$3.transition = null;
					setCurrentUpdatePriority(priority);
					return flushPassiveEffectsImpl();
				} finally {
					setCurrentUpdatePriority(previousPriority);
					ReactCurrentBatchConfig$3.transition = prevTransition;
				}
			}
			return false;
		}
		function enqueuePendingPassiveProfilerEffect(fiber) {
			{
				pendingPassiveProfilerEffects.push(fiber);
				if (!rootDoesHavePassiveEffects) {
					rootDoesHavePassiveEffects = true;
					scheduleCallback$1(NormalPriority, function() {
						flushPassiveEffects();
						return null;
					});
				}
			}
		}
		function flushPassiveEffectsImpl() {
			if (rootWithPendingPassiveEffects === null) return false;
			var transitions = pendingPassiveTransitions;
			pendingPassiveTransitions = null;
			var root$1 = rootWithPendingPassiveEffects;
			var lanes = pendingPassiveEffectsLanes;
			rootWithPendingPassiveEffects = null;
			pendingPassiveEffectsLanes = NoLanes;
			if ((executionContext & (RenderContext | CommitContext)) !== NoContext) throw new Error("Cannot flush passive effects while already rendering.");
			{
				isFlushingPassiveEffects = true;
				didScheduleUpdateDuringPassiveEffects = false;
			}
			markPassiveEffectsStarted(lanes);
			var prevExecutionContext = executionContext;
			executionContext |= CommitContext;
			commitPassiveUnmountEffects(root$1.current);
			commitPassiveMountEffects(root$1, root$1.current, lanes, transitions);
			{
				var profilerEffects = pendingPassiveProfilerEffects;
				pendingPassiveProfilerEffects = [];
				for (var i$1 = 0; i$1 < profilerEffects.length; i$1++) {
					var _fiber = profilerEffects[i$1];
					commitPassiveEffectDurations(root$1, _fiber);
				}
			}
			markPassiveEffectsStopped();
			commitDoubleInvokeEffectsInDEV(root$1.current, true);
			executionContext = prevExecutionContext;
			flushSyncCallbacks();
			{
				if (didScheduleUpdateDuringPassiveEffects) if (root$1 === rootWithPassiveNestedUpdates) nestedPassiveUpdateCount++;
else {
					nestedPassiveUpdateCount = 0;
					rootWithPassiveNestedUpdates = root$1;
				}
else nestedPassiveUpdateCount = 0;
				isFlushingPassiveEffects = false;
				didScheduleUpdateDuringPassiveEffects = false;
			}
			onPostCommitRoot(root$1);
			{
				var stateNode = root$1.current.stateNode;
				stateNode.effectDuration = 0;
				stateNode.passiveEffectDuration = 0;
			}
			return true;
		}
		function isAlreadyFailedLegacyErrorBoundary(instance) {
			return legacyErrorBoundariesThatAlreadyFailed !== null && legacyErrorBoundariesThatAlreadyFailed.has(instance);
		}
		function markLegacyErrorBoundaryAsFailed(instance) {
			if (legacyErrorBoundariesThatAlreadyFailed === null) legacyErrorBoundariesThatAlreadyFailed = new Set([instance]);
else legacyErrorBoundariesThatAlreadyFailed.add(instance);
		}
		function prepareToThrowUncaughtError(error$1) {
			if (!hasUncaughtError) {
				hasUncaughtError = true;
				firstUncaughtError = error$1;
			}
		}
		var onUncaughtError = prepareToThrowUncaughtError;
		function captureCommitPhaseErrorOnRoot(rootFiber, sourceFiber, error$1) {
			var errorInfo = createCapturedValueAtFiber(error$1, sourceFiber);
			var update = createRootErrorUpdate(rootFiber, errorInfo, SyncLane);
			var root$1 = enqueueUpdate(rootFiber, update, SyncLane);
			var eventTime = requestEventTime();
			if (root$1 !== null) {
				markRootUpdated(root$1, SyncLane, eventTime);
				ensureRootIsScheduled(root$1, eventTime);
			}
		}
		function captureCommitPhaseError(sourceFiber, nearestMountedAncestor, error$1) {
			{
				reportUncaughtErrorInDEV(error$1);
				setIsRunningInsertionEffect(false);
			}
			if (sourceFiber.tag === HostRoot) {
				captureCommitPhaseErrorOnRoot(sourceFiber, sourceFiber, error$1);
				return;
			}
			var fiber = null;
			fiber = nearestMountedAncestor;
			while (fiber !== null) {
				if (fiber.tag === HostRoot) {
					captureCommitPhaseErrorOnRoot(fiber, sourceFiber, error$1);
					return;
				} else if (fiber.tag === ClassComponent) {
					var ctor = fiber.type;
					var instance = fiber.stateNode;
					if (typeof ctor.getDerivedStateFromError === "function" || typeof instance.componentDidCatch === "function" && !isAlreadyFailedLegacyErrorBoundary(instance)) {
						var errorInfo = createCapturedValueAtFiber(error$1, sourceFiber);
						var update = createClassErrorUpdate(fiber, errorInfo, SyncLane);
						var root$1 = enqueueUpdate(fiber, update, SyncLane);
						var eventTime = requestEventTime();
						if (root$1 !== null) {
							markRootUpdated(root$1, SyncLane, eventTime);
							ensureRootIsScheduled(root$1, eventTime);
						}
						return;
					}
				}
				fiber = fiber.return;
			}
			error("Internal React error: Attempted to capture a commit phase error inside a detached tree. This indicates a bug in React. Likely causes include deleting the same fiber more than once, committing an already-finished tree, or an inconsistent return pointer.\n\nError message:\n\n%s", error$1);
		}
		function pingSuspendedRoot(root$1, wakeable, pingedLanes) {
			var pingCache = root$1.pingCache;
			if (pingCache !== null) pingCache.delete(wakeable);
			var eventTime = requestEventTime();
			markRootPinged(root$1, pingedLanes);
			warnIfSuspenseResolutionNotWrappedWithActDEV(root$1);
			if (workInProgressRoot === root$1 && isSubsetOfLanes(workInProgressRootRenderLanes, pingedLanes)) if (workInProgressRootExitStatus === RootSuspendedWithDelay || workInProgressRootExitStatus === RootSuspended && includesOnlyRetries(workInProgressRootRenderLanes) && now() - globalMostRecentFallbackTime < FALLBACK_THROTTLE_MS) prepareFreshStack(root$1, NoLanes);
else workInProgressRootPingedLanes = mergeLanes(workInProgressRootPingedLanes, pingedLanes);
			ensureRootIsScheduled(root$1, eventTime);
		}
		function retryTimedOutBoundary(boundaryFiber, retryLane) {
			if (retryLane === NoLane) retryLane = requestRetryLane(boundaryFiber);
			var eventTime = requestEventTime();
			var root$1 = enqueueConcurrentRenderForLane(boundaryFiber, retryLane);
			if (root$1 !== null) {
				markRootUpdated(root$1, retryLane, eventTime);
				ensureRootIsScheduled(root$1, eventTime);
			}
		}
		function retryDehydratedSuspenseBoundary(boundaryFiber) {
			var suspenseState = boundaryFiber.memoizedState;
			var retryLane = NoLane;
			if (suspenseState !== null) retryLane = suspenseState.retryLane;
			retryTimedOutBoundary(boundaryFiber, retryLane);
		}
		function resolveRetryWakeable(boundaryFiber, wakeable) {
			var retryLane = NoLane;
			var retryCache;
			switch (boundaryFiber.tag) {
				case SuspenseComponent:
					retryCache = boundaryFiber.stateNode;
					var suspenseState = boundaryFiber.memoizedState;
					if (suspenseState !== null) retryLane = suspenseState.retryLane;
					break;
				case SuspenseListComponent:
					retryCache = boundaryFiber.stateNode;
					break;
				default: throw new Error("Pinged unknown suspense boundary type. This is probably a bug in React.");
			}
			if (retryCache !== null) retryCache.delete(wakeable);
			retryTimedOutBoundary(boundaryFiber, retryLane);
		}
		function jnd(timeElapsed) {
			return timeElapsed < 120 ? 120 : timeElapsed < 480 ? 480 : timeElapsed < 1080 ? 1080 : timeElapsed < 1920 ? 1920 : timeElapsed < 3e3 ? 3e3 : timeElapsed < 4320 ? 4320 : ceil(timeElapsed / 1960) * 1960;
		}
		function checkForNestedUpdates() {
			if (nestedUpdateCount > NESTED_UPDATE_LIMIT) {
				nestedUpdateCount = 0;
				rootWithNestedUpdates = null;
				throw new Error("Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops.");
			}
			if (nestedPassiveUpdateCount > NESTED_PASSIVE_UPDATE_LIMIT) {
				nestedPassiveUpdateCount = 0;
				rootWithPassiveNestedUpdates = null;
				error("Maximum update depth exceeded. This can happen when a component calls setState inside useEffect, but useEffect either doesn't have a dependency array, or one of the dependencies changes on every render.");
			}
		}
		function flushRenderPhaseStrictModeWarningsInDEV() {
			{
				ReactStrictModeWarnings.flushLegacyContextWarning();
				ReactStrictModeWarnings.flushPendingUnsafeLifecycleWarnings();
			}
		}
		function commitDoubleInvokeEffectsInDEV(fiber, hasPassiveEffects) {
			{
				setCurrentFiber(fiber);
				invokeEffectsInDev(fiber, MountLayoutDev, invokeLayoutEffectUnmountInDEV);
				if (hasPassiveEffects) invokeEffectsInDev(fiber, MountPassiveDev, invokePassiveEffectUnmountInDEV);
				invokeEffectsInDev(fiber, MountLayoutDev, invokeLayoutEffectMountInDEV);
				if (hasPassiveEffects) invokeEffectsInDev(fiber, MountPassiveDev, invokePassiveEffectMountInDEV);
				resetCurrentFiber();
			}
		}
		function invokeEffectsInDev(firstChild, fiberFlags, invokeEffectFn) {
			{
				var current$1 = firstChild;
				var subtreeRoot = null;
				while (current$1 !== null) {
					var primarySubtreeFlag = current$1.subtreeFlags & fiberFlags;
					if (current$1 !== subtreeRoot && current$1.child !== null && primarySubtreeFlag !== NoFlags) current$1 = current$1.child;
else {
						if ((current$1.flags & fiberFlags) !== NoFlags) invokeEffectFn(current$1);
						if (current$1.sibling !== null) current$1 = current$1.sibling;
else current$1 = subtreeRoot = current$1.return;
					}
				}
			}
		}
		var didWarnStateUpdateForNotYetMountedComponent = null;
		function warnAboutUpdateOnNotYetMountedFiberInDEV(fiber) {
			{
				if ((executionContext & RenderContext) !== NoContext) return;
				if (!(fiber.mode & ConcurrentMode)) return;
				var tag = fiber.tag;
				if (tag !== IndeterminateComponent && tag !== HostRoot && tag !== ClassComponent && tag !== FunctionComponent && tag !== ForwardRef && tag !== MemoComponent && tag !== SimpleMemoComponent) return;
				var componentName = getComponentNameFromFiber(fiber) || "ReactComponent";
				if (didWarnStateUpdateForNotYetMountedComponent !== null) {
					if (didWarnStateUpdateForNotYetMountedComponent.has(componentName)) return;
					didWarnStateUpdateForNotYetMountedComponent.add(componentName);
				} else didWarnStateUpdateForNotYetMountedComponent = new Set([componentName]);
				var previousFiber = current;
				try {
					setCurrentFiber(fiber);
					error("Can't perform a React state update on a component that hasn't mounted yet. This indicates that you have a side-effect in your render function that asynchronously later calls tries to update the component. Move this work to useEffect instead.");
				} finally {
					if (previousFiber) setCurrentFiber(fiber);
else resetCurrentFiber();
				}
			}
		}
		var beginWork$1;
		{
			var dummyFiber = null;
			beginWork$1 = function(current$1, unitOfWork, lanes) {
				var originalWorkInProgressCopy = assignFiberPropertiesInDEV(dummyFiber, unitOfWork);
				try {
					return beginWork(current$1, unitOfWork, lanes);
				} catch (originalError) {
					if (didSuspendOrErrorWhileHydratingDEV() || originalError !== null && typeof originalError === "object" && typeof originalError.then === "function") throw originalError;
					resetContextDependencies();
					resetHooksAfterThrow();
					unwindInterruptedWork(current$1, unitOfWork);
					assignFiberPropertiesInDEV(unitOfWork, originalWorkInProgressCopy);
					if (unitOfWork.mode & ProfileMode) startProfilerTimer(unitOfWork);
					invokeGuardedCallback(null, beginWork, null, current$1, unitOfWork, lanes);
					if (hasCaughtError()) {
						var replayError = clearCaughtError();
						if (typeof replayError === "object" && replayError !== null && replayError._suppressLogging && typeof originalError === "object" && originalError !== null && !originalError._suppressLogging) originalError._suppressLogging = true;
					}
					throw originalError;
				}
			};
		}
		var didWarnAboutUpdateInRender = false;
		var didWarnAboutUpdateInRenderForAnotherComponent;
		didWarnAboutUpdateInRenderForAnotherComponent = new Set();
		function warnAboutRenderPhaseUpdatesInDEV(fiber) {
			if (isRendering && !getIsUpdatingOpaqueValueInRenderPhaseInDEV()) switch (fiber.tag) {
				case FunctionComponent:
				case ForwardRef:
				case SimpleMemoComponent: {
					var renderingComponentName = workInProgress && getComponentNameFromFiber(workInProgress) || "Unknown";
					var dedupeKey = renderingComponentName;
					if (!didWarnAboutUpdateInRenderForAnotherComponent.has(dedupeKey)) {
						didWarnAboutUpdateInRenderForAnotherComponent.add(dedupeKey);
						var setStateComponentName = getComponentNameFromFiber(fiber) || "Unknown";
						error("Cannot update a component (`%s`) while rendering a different component (`%s`). To locate the bad setState() call inside `%s`, follow the stack trace as described in https://reactjs.org/link/setstate-in-render", setStateComponentName, renderingComponentName, renderingComponentName);
					}
					break;
				}
				case ClassComponent: {
					if (!didWarnAboutUpdateInRender) {
						error("Cannot update during an existing state transition (such as within `render`). Render methods should be a pure function of props and state.");
						didWarnAboutUpdateInRender = true;
					}
					break;
				}
			}
		}
		function restorePendingUpdaters(root$1, lanes) {
			if (isDevToolsPresent) {
				var memoizedUpdaters = root$1.memoizedUpdaters;
				memoizedUpdaters.forEach(function(schedulingFiber) {
					addFiberToLanesMap(root$1, schedulingFiber, lanes);
				});
			}
		}
		var fakeActCallbackNode = {};
		function scheduleCallback$1(priorityLevel, callback) {
			{
				var actQueue = ReactCurrentActQueue$1.current;
				if (actQueue !== null) {
					actQueue.push(callback);
					return fakeActCallbackNode;
				} else return scheduleCallback(priorityLevel, callback);
			}
		}
		function cancelCallback$1(callbackNode) {
			if (callbackNode === fakeActCallbackNode) return;
			return cancelCallback(callbackNode);
		}
		function shouldForceFlushFallbacksInDEV() {
			return ReactCurrentActQueue$1.current !== null;
		}
		function warnIfUpdatesNotWrappedWithActDEV(fiber) {
			{
				if (fiber.mode & ConcurrentMode) {
					if (!isConcurrentActEnvironment()) return;
				} else {
					if (!isLegacyActEnvironment()) return;
					if (executionContext !== NoContext) return;
					if (fiber.tag !== FunctionComponent && fiber.tag !== ForwardRef && fiber.tag !== SimpleMemoComponent) return;
				}
				if (ReactCurrentActQueue$1.current === null) {
					var previousFiber = current;
					try {
						setCurrentFiber(fiber);
						error("An update to %s inside a test was not wrapped in act(...).\n\nWhen testing, code that causes React state updates should be wrapped into act(...):\n\nact(() => {\n  /* fire events that update state */\n});\n/* assert on the output */\n\nThis ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act", getComponentNameFromFiber(fiber));
					} finally {
						if (previousFiber) setCurrentFiber(fiber);
else resetCurrentFiber();
					}
				}
			}
		}
		function warnIfSuspenseResolutionNotWrappedWithActDEV(root$1) {
			if (root$1.tag !== LegacyRoot && isConcurrentActEnvironment() && ReactCurrentActQueue$1.current === null) error("A suspended resource finished loading inside a test, but the event was not wrapped in act(...).\n\nWhen testing, code that resolves suspended data should be wrapped into act(...):\n\nact(() => {\n  /* finish loading suspended data */\n});\n/* assert on the output */\n\nThis ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act");
		}
		function setIsRunningInsertionEffect(isRunning) {
			isRunningInsertionEffect = isRunning;
		}
		var resolveFamily = null;
		var failedBoundaries = null;
		var setRefreshHandler = function(handler) {
			resolveFamily = handler;
		};
		function resolveFunctionForHotReloading(type) {
			{
				if (resolveFamily === null) return type;
				var family = resolveFamily(type);
				if (family === undefined) return type;
				return family.current;
			}
		}
		function resolveClassForHotReloading(type) {
			return resolveFunctionForHotReloading(type);
		}
		function resolveForwardRefForHotReloading(type) {
			{
				if (resolveFamily === null) return type;
				var family = resolveFamily(type);
				if (family === undefined) {
					if (type !== null && type !== undefined && typeof type.render === "function") {
						var currentRender = resolveFunctionForHotReloading(type.render);
						if (type.render !== currentRender) {
							var syntheticType = {
								$$typeof: REACT_FORWARD_REF_TYPE,
								render: currentRender
							};
							if (type.displayName !== undefined) syntheticType.displayName = type.displayName;
							return syntheticType;
						}
					}
					return type;
				}
				return family.current;
			}
		}
		function isCompatibleFamilyForHotReloading(fiber, element) {
			{
				if (resolveFamily === null) return false;
				var prevType = fiber.elementType;
				var nextType = element.type;
				var needsCompareFamilies = false;
				var $$typeofNextType = typeof nextType === "object" && nextType !== null ? nextType.$$typeof : null;
				switch (fiber.tag) {
					case ClassComponent: {
						if (typeof nextType === "function") needsCompareFamilies = true;
						break;
					}
					case FunctionComponent: {
						if (typeof nextType === "function") needsCompareFamilies = true;
else if ($$typeofNextType === REACT_LAZY_TYPE) needsCompareFamilies = true;
						break;
					}
					case ForwardRef: {
						if ($$typeofNextType === REACT_FORWARD_REF_TYPE) needsCompareFamilies = true;
else if ($$typeofNextType === REACT_LAZY_TYPE) needsCompareFamilies = true;
						break;
					}
					case MemoComponent:
					case SimpleMemoComponent: {
						if ($$typeofNextType === REACT_MEMO_TYPE) needsCompareFamilies = true;
else if ($$typeofNextType === REACT_LAZY_TYPE) needsCompareFamilies = true;
						break;
					}
					default: return false;
				}
				if (needsCompareFamilies) {
					var prevFamily = resolveFamily(prevType);
					if (prevFamily !== undefined && prevFamily === resolveFamily(nextType)) return true;
				}
				return false;
			}
		}
		function markFailedErrorBoundaryForHotReloading(fiber) {
			{
				if (resolveFamily === null) return;
				if (typeof WeakSet !== "function") return;
				if (failedBoundaries === null) failedBoundaries = new WeakSet();
				failedBoundaries.add(fiber);
			}
		}
		var scheduleRefresh = function(root$1, update) {
			{
				if (resolveFamily === null) return;
				var staleFamilies = update.staleFamilies, updatedFamilies = update.updatedFamilies;
				flushPassiveEffects();
				flushSync$1(function() {
					scheduleFibersWithFamiliesRecursively(root$1.current, updatedFamilies, staleFamilies);
				});
			}
		};
		var scheduleRoot = function(root$1, element) {
			{
				if (root$1.context !== emptyContextObject) return;
				flushPassiveEffects();
				flushSync$1(function() {
					updateContainer(element, root$1, null, null);
				});
			}
		};
		function scheduleFibersWithFamiliesRecursively(fiber, updatedFamilies, staleFamilies) {
			{
				var alternate = fiber.alternate, child = fiber.child, sibling = fiber.sibling, tag = fiber.tag, type = fiber.type;
				var candidateType = null;
				switch (tag) {
					case FunctionComponent:
					case SimpleMemoComponent:
					case ClassComponent:
						candidateType = type;
						break;
					case ForwardRef:
						candidateType = type.render;
						break;
				}
				if (resolveFamily === null) throw new Error("Expected resolveFamily to be set during hot reload.");
				var needsRender = false;
				var needsRemount = false;
				if (candidateType !== null) {
					var family = resolveFamily(candidateType);
					if (family !== undefined) {
						if (staleFamilies.has(family)) needsRemount = true;
else if (updatedFamilies.has(family)) if (tag === ClassComponent) needsRemount = true;
else needsRender = true;
					}
				}
				if (failedBoundaries !== null) {
					if (failedBoundaries.has(fiber) || alternate !== null && failedBoundaries.has(alternate)) needsRemount = true;
				}
				if (needsRemount) fiber._debugNeedsRemount = true;
				if (needsRemount || needsRender) {
					var _root = enqueueConcurrentRenderForLane(fiber, SyncLane);
					if (_root !== null) scheduleUpdateOnFiber(_root, fiber, SyncLane, NoTimestamp);
				}
				if (child !== null && !needsRemount) scheduleFibersWithFamiliesRecursively(child, updatedFamilies, staleFamilies);
				if (sibling !== null) scheduleFibersWithFamiliesRecursively(sibling, updatedFamilies, staleFamilies);
			}
		}
		var findHostInstancesForRefresh = function(root$1, families) {
			{
				var hostInstances = new Set();
				var types = new Set(families.map(function(family) {
					return family.current;
				}));
				findHostInstancesForMatchingFibersRecursively(root$1.current, types, hostInstances);
				return hostInstances;
			}
		};
		function findHostInstancesForMatchingFibersRecursively(fiber, types, hostInstances) {
			{
				var child = fiber.child, sibling = fiber.sibling, tag = fiber.tag, type = fiber.type;
				var candidateType = null;
				switch (tag) {
					case FunctionComponent:
					case SimpleMemoComponent:
					case ClassComponent:
						candidateType = type;
						break;
					case ForwardRef:
						candidateType = type.render;
						break;
				}
				var didMatch = false;
				if (candidateType !== null) {
					if (types.has(candidateType)) didMatch = true;
				}
				if (didMatch) findHostInstancesForFiberShallowly(fiber, hostInstances);
else if (child !== null) findHostInstancesForMatchingFibersRecursively(child, types, hostInstances);
				if (sibling !== null) findHostInstancesForMatchingFibersRecursively(sibling, types, hostInstances);
			}
		}
		function findHostInstancesForFiberShallowly(fiber, hostInstances) {
			{
				var foundHostInstances = findChildHostInstancesForFiberShallowly(fiber, hostInstances);
				if (foundHostInstances) return;
				var node = fiber;
				while (true) {
					switch (node.tag) {
						case HostComponent:
							hostInstances.add(node.stateNode);
							return;
						case HostPortal:
							hostInstances.add(node.stateNode.containerInfo);
							return;
						case HostRoot:
							hostInstances.add(node.stateNode.containerInfo);
							return;
					}
					if (node.return === null) throw new Error("Expected to reach root first.");
					node = node.return;
				}
			}
		}
		function findChildHostInstancesForFiberShallowly(fiber, hostInstances) {
			{
				var node = fiber;
				var foundHostInstances = false;
				while (true) {
					if (node.tag === HostComponent) {
						foundHostInstances = true;
						hostInstances.add(node.stateNode);
					} else if (node.child !== null) {
						node.child.return = node;
						node = node.child;
						continue;
					}
					if (node === fiber) return foundHostInstances;
					while (node.sibling === null) {
						if (node.return === null || node.return === fiber) return foundHostInstances;
						node = node.return;
					}
					node.sibling.return = node.return;
					node = node.sibling;
				}
			}
			return false;
		}
		var hasBadMapPolyfill;
		{
			hasBadMapPolyfill = false;
			try {
				var nonExtensibleObject = Object.preventExtensions({});
				new Map([[nonExtensibleObject, null]]);
				new Set([nonExtensibleObject]);
			} catch (e) {
				hasBadMapPolyfill = true;
			}
		}
		function FiberNode(tag, pendingProps, key, mode) {
			this.tag = tag;
			this.key = key;
			this.elementType = null;
			this.type = null;
			this.stateNode = null;
			this.return = null;
			this.child = null;
			this.sibling = null;
			this.index = 0;
			this.ref = null;
			this.pendingProps = pendingProps;
			this.memoizedProps = null;
			this.updateQueue = null;
			this.memoizedState = null;
			this.dependencies = null;
			this.mode = mode;
			this.flags = NoFlags;
			this.subtreeFlags = NoFlags;
			this.deletions = null;
			this.lanes = NoLanes;
			this.childLanes = NoLanes;
			this.alternate = null;
			{
				this.actualDuration = Number.NaN;
				this.actualStartTime = Number.NaN;
				this.selfBaseDuration = Number.NaN;
				this.treeBaseDuration = Number.NaN;
				this.actualDuration = 0;
				this.actualStartTime = -1;
				this.selfBaseDuration = 0;
				this.treeBaseDuration = 0;
			}
			{
				this._debugSource = null;
				this._debugOwner = null;
				this._debugNeedsRemount = false;
				this._debugHookTypes = null;
				if (!hasBadMapPolyfill && typeof Object.preventExtensions === "function") Object.preventExtensions(this);
			}
		}
		var createFiber = function(tag, pendingProps, key, mode) {
			return new FiberNode(tag, pendingProps, key, mode);
		};
		function shouldConstruct$1(Component) {
			var prototype = Component.prototype;
			return !!(prototype && prototype.isReactComponent);
		}
		function isSimpleFunctionComponent(type) {
			return typeof type === "function" && !shouldConstruct$1(type) && type.defaultProps === undefined;
		}
		function resolveLazyComponentTag(Component) {
			if (typeof Component === "function") return shouldConstruct$1(Component) ? ClassComponent : FunctionComponent;
else if (Component !== undefined && Component !== null) {
				var $$typeof = Component.$$typeof;
				if ($$typeof === REACT_FORWARD_REF_TYPE) return ForwardRef;
				if ($$typeof === REACT_MEMO_TYPE) return MemoComponent;
			}
			return IndeterminateComponent;
		}
		function createWorkInProgress(current$1, pendingProps) {
			var workInProgress$1 = current$1.alternate;
			if (workInProgress$1 === null) {
				workInProgress$1 = createFiber(current$1.tag, pendingProps, current$1.key, current$1.mode);
				workInProgress$1.elementType = current$1.elementType;
				workInProgress$1.type = current$1.type;
				workInProgress$1.stateNode = current$1.stateNode;
				{
					workInProgress$1._debugSource = current$1._debugSource;
					workInProgress$1._debugOwner = current$1._debugOwner;
					workInProgress$1._debugHookTypes = current$1._debugHookTypes;
				}
				workInProgress$1.alternate = current$1;
				current$1.alternate = workInProgress$1;
			} else {
				workInProgress$1.pendingProps = pendingProps;
				workInProgress$1.type = current$1.type;
				workInProgress$1.flags = NoFlags;
				workInProgress$1.subtreeFlags = NoFlags;
				workInProgress$1.deletions = null;
				{
					workInProgress$1.actualDuration = 0;
					workInProgress$1.actualStartTime = -1;
				}
			}
			workInProgress$1.flags = current$1.flags & StaticMask;
			workInProgress$1.childLanes = current$1.childLanes;
			workInProgress$1.lanes = current$1.lanes;
			workInProgress$1.child = current$1.child;
			workInProgress$1.memoizedProps = current$1.memoizedProps;
			workInProgress$1.memoizedState = current$1.memoizedState;
			workInProgress$1.updateQueue = current$1.updateQueue;
			var currentDependencies = current$1.dependencies;
			workInProgress$1.dependencies = currentDependencies === null ? null : {
				lanes: currentDependencies.lanes,
				firstContext: currentDependencies.firstContext
			};
			workInProgress$1.sibling = current$1.sibling;
			workInProgress$1.index = current$1.index;
			workInProgress$1.ref = current$1.ref;
			{
				workInProgress$1.selfBaseDuration = current$1.selfBaseDuration;
				workInProgress$1.treeBaseDuration = current$1.treeBaseDuration;
			}
			{
				workInProgress$1._debugNeedsRemount = current$1._debugNeedsRemount;
				switch (workInProgress$1.tag) {
					case IndeterminateComponent:
					case FunctionComponent:
					case SimpleMemoComponent:
						workInProgress$1.type = resolveFunctionForHotReloading(current$1.type);
						break;
					case ClassComponent:
						workInProgress$1.type = resolveClassForHotReloading(current$1.type);
						break;
					case ForwardRef:
						workInProgress$1.type = resolveForwardRefForHotReloading(current$1.type);
						break;
				}
			}
			return workInProgress$1;
		}
		function resetWorkInProgress(workInProgress$1, renderLanes$1) {
			workInProgress$1.flags &= StaticMask | Placement;
			var current$1 = workInProgress$1.alternate;
			if (current$1 === null) {
				workInProgress$1.childLanes = NoLanes;
				workInProgress$1.lanes = renderLanes$1;
				workInProgress$1.child = null;
				workInProgress$1.subtreeFlags = NoFlags;
				workInProgress$1.memoizedProps = null;
				workInProgress$1.memoizedState = null;
				workInProgress$1.updateQueue = null;
				workInProgress$1.dependencies = null;
				workInProgress$1.stateNode = null;
				{
					workInProgress$1.selfBaseDuration = 0;
					workInProgress$1.treeBaseDuration = 0;
				}
			} else {
				workInProgress$1.childLanes = current$1.childLanes;
				workInProgress$1.lanes = current$1.lanes;
				workInProgress$1.child = current$1.child;
				workInProgress$1.subtreeFlags = NoFlags;
				workInProgress$1.deletions = null;
				workInProgress$1.memoizedProps = current$1.memoizedProps;
				workInProgress$1.memoizedState = current$1.memoizedState;
				workInProgress$1.updateQueue = current$1.updateQueue;
				workInProgress$1.type = current$1.type;
				var currentDependencies = current$1.dependencies;
				workInProgress$1.dependencies = currentDependencies === null ? null : {
					lanes: currentDependencies.lanes,
					firstContext: currentDependencies.firstContext
				};
				{
					workInProgress$1.selfBaseDuration = current$1.selfBaseDuration;
					workInProgress$1.treeBaseDuration = current$1.treeBaseDuration;
				}
			}
			return workInProgress$1;
		}
		function createHostRootFiber(tag, isStrictMode, concurrentUpdatesByDefaultOverride) {
			var mode;
			if (tag === ConcurrentRoot) {
				mode = ConcurrentMode;
				if (isStrictMode === true) {
					mode |= StrictLegacyMode;
					mode |= StrictEffectsMode;
				}
			} else mode = NoMode;
			if (isDevToolsPresent) mode |= ProfileMode;
			return createFiber(HostRoot, null, null, mode);
		}
		function createFiberFromTypeAndProps(type, key, pendingProps, owner, mode, lanes) {
			var fiberTag = IndeterminateComponent;
			var resolvedType = type;
			if (typeof type === "function") if (shouldConstruct$1(type)) {
				fiberTag = ClassComponent;
				resolvedType = resolveClassForHotReloading(resolvedType);
			} else resolvedType = resolveFunctionForHotReloading(resolvedType);
else if (typeof type === "string") fiberTag = HostComponent;
else getTag: switch (type) {
				case REACT_FRAGMENT_TYPE: return createFiberFromFragment(pendingProps.children, mode, lanes, key);
				case REACT_STRICT_MODE_TYPE:
					fiberTag = Mode;
					mode |= StrictLegacyMode;
					if ((mode & ConcurrentMode) !== NoMode) mode |= StrictEffectsMode;
					break;
				case REACT_PROFILER_TYPE: return createFiberFromProfiler(pendingProps, mode, lanes, key);
				case REACT_SUSPENSE_TYPE: return createFiberFromSuspense(pendingProps, mode, lanes, key);
				case REACT_SUSPENSE_LIST_TYPE: return createFiberFromSuspenseList(pendingProps, mode, lanes, key);
				case REACT_OFFSCREEN_TYPE: return createFiberFromOffscreen(pendingProps, mode, lanes, key);
				case REACT_LEGACY_HIDDEN_TYPE:
				case REACT_SCOPE_TYPE:
				case REACT_CACHE_TYPE:
				case REACT_TRACING_MARKER_TYPE:
				case REACT_DEBUG_TRACING_MODE_TYPE:
				default: {
					if (typeof type === "object" && type !== null) switch (type.$$typeof) {
						case REACT_PROVIDER_TYPE:
							fiberTag = ContextProvider;
							break getTag;
						case REACT_CONTEXT_TYPE:
							fiberTag = ContextConsumer;
							break getTag;
						case REACT_FORWARD_REF_TYPE:
							fiberTag = ForwardRef;
							resolvedType = resolveForwardRefForHotReloading(resolvedType);
							break getTag;
						case REACT_MEMO_TYPE:
							fiberTag = MemoComponent;
							break getTag;
						case REACT_LAZY_TYPE:
							fiberTag = LazyComponent;
							resolvedType = null;
							break getTag;
					}
					var info = "";
					{
						if (type === undefined || typeof type === "object" && type !== null && Object.keys(type).length === 0) info += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.";
						var ownerName = owner ? getComponentNameFromFiber(owner) : null;
						if (ownerName) info += "\n\nCheck the render method of `" + ownerName + "`.";
					}
					throw new Error("Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) " + ("but got: " + (type == null ? type : typeof type) + "." + info));
				}
			}
			var fiber = createFiber(fiberTag, pendingProps, key, mode);
			fiber.elementType = type;
			fiber.type = resolvedType;
			fiber.lanes = lanes;
			fiber._debugOwner = owner;
			return fiber;
		}
		function createFiberFromElement(element, mode, lanes) {
			var owner = null;
			owner = element._owner;
			var type = element.type;
			var key = element.key;
			var pendingProps = element.props;
			var fiber = createFiberFromTypeAndProps(type, key, pendingProps, owner, mode, lanes);
			{
				fiber._debugSource = element._source;
				fiber._debugOwner = element._owner;
			}
			return fiber;
		}
		function createFiberFromFragment(elements, mode, lanes, key) {
			var fiber = createFiber(Fragment$2, elements, key, mode);
			fiber.lanes = lanes;
			return fiber;
		}
		function createFiberFromProfiler(pendingProps, mode, lanes, key) {
			if (typeof pendingProps.id !== "string") error("Profiler must specify an \"id\" of type `string` as a prop. Received the type `%s` instead.", typeof pendingProps.id);
			var fiber = createFiber(Profiler, pendingProps, key, mode | ProfileMode);
			fiber.elementType = REACT_PROFILER_TYPE;
			fiber.lanes = lanes;
			fiber.stateNode = {
				effectDuration: 0,
				passiveEffectDuration: 0
			};
			return fiber;
		}
		function createFiberFromSuspense(pendingProps, mode, lanes, key) {
			var fiber = createFiber(SuspenseComponent, pendingProps, key, mode);
			fiber.elementType = REACT_SUSPENSE_TYPE;
			fiber.lanes = lanes;
			return fiber;
		}
		function createFiberFromSuspenseList(pendingProps, mode, lanes, key) {
			var fiber = createFiber(SuspenseListComponent, pendingProps, key, mode);
			fiber.elementType = REACT_SUSPENSE_LIST_TYPE;
			fiber.lanes = lanes;
			return fiber;
		}
		function createFiberFromOffscreen(pendingProps, mode, lanes, key) {
			var fiber = createFiber(OffscreenComponent, pendingProps, key, mode);
			fiber.elementType = REACT_OFFSCREEN_TYPE;
			fiber.lanes = lanes;
			var primaryChildInstance = { isHidden: false };
			fiber.stateNode = primaryChildInstance;
			return fiber;
		}
		function createFiberFromText(content, mode, lanes) {
			var fiber = createFiber(HostText, content, null, mode);
			fiber.lanes = lanes;
			return fiber;
		}
		function createFiberFromHostInstanceForDeletion() {
			var fiber = createFiber(HostComponent, null, null, NoMode);
			fiber.elementType = "DELETED";
			return fiber;
		}
		function createFiberFromDehydratedFragment(dehydratedNode) {
			var fiber = createFiber(DehydratedFragment, null, null, NoMode);
			fiber.stateNode = dehydratedNode;
			return fiber;
		}
		function createFiberFromPortal(portal, mode, lanes) {
			var pendingProps = portal.children !== null ? portal.children : [];
			var fiber = createFiber(HostPortal, pendingProps, portal.key, mode);
			fiber.lanes = lanes;
			fiber.stateNode = {
				containerInfo: portal.containerInfo,
				pendingChildren: null,
				implementation: portal.implementation
			};
			return fiber;
		}
		function assignFiberPropertiesInDEV(target, source) {
			if (target === null) target = createFiber(IndeterminateComponent, null, null, NoMode);
			target.tag = source.tag;
			target.key = source.key;
			target.elementType = source.elementType;
			target.type = source.type;
			target.stateNode = source.stateNode;
			target.return = source.return;
			target.child = source.child;
			target.sibling = source.sibling;
			target.index = source.index;
			target.ref = source.ref;
			target.pendingProps = source.pendingProps;
			target.memoizedProps = source.memoizedProps;
			target.updateQueue = source.updateQueue;
			target.memoizedState = source.memoizedState;
			target.dependencies = source.dependencies;
			target.mode = source.mode;
			target.flags = source.flags;
			target.subtreeFlags = source.subtreeFlags;
			target.deletions = source.deletions;
			target.lanes = source.lanes;
			target.childLanes = source.childLanes;
			target.alternate = source.alternate;
			{
				target.actualDuration = source.actualDuration;
				target.actualStartTime = source.actualStartTime;
				target.selfBaseDuration = source.selfBaseDuration;
				target.treeBaseDuration = source.treeBaseDuration;
			}
			target._debugSource = source._debugSource;
			target._debugOwner = source._debugOwner;
			target._debugNeedsRemount = source._debugNeedsRemount;
			target._debugHookTypes = source._debugHookTypes;
			return target;
		}
		function FiberRootNode(containerInfo, tag, hydrate$1, identifierPrefix, onRecoverableError) {
			this.tag = tag;
			this.containerInfo = containerInfo;
			this.pendingChildren = null;
			this.current = null;
			this.pingCache = null;
			this.finishedWork = null;
			this.timeoutHandle = noTimeout;
			this.context = null;
			this.pendingContext = null;
			this.callbackNode = null;
			this.callbackPriority = NoLane;
			this.eventTimes = createLaneMap(NoLanes);
			this.expirationTimes = createLaneMap(NoTimestamp);
			this.pendingLanes = NoLanes;
			this.suspendedLanes = NoLanes;
			this.pingedLanes = NoLanes;
			this.expiredLanes = NoLanes;
			this.mutableReadLanes = NoLanes;
			this.finishedLanes = NoLanes;
			this.entangledLanes = NoLanes;
			this.entanglements = createLaneMap(NoLanes);
			this.identifierPrefix = identifierPrefix;
			this.onRecoverableError = onRecoverableError;
			this.mutableSourceEagerHydrationData = null;
			{
				this.effectDuration = 0;
				this.passiveEffectDuration = 0;
			}
			{
				this.memoizedUpdaters = new Set();
				var pendingUpdatersLaneMap = this.pendingUpdatersLaneMap = [];
				for (var _i = 0; _i < TotalLanes; _i++) pendingUpdatersLaneMap.push(new Set());
			}
			switch (tag) {
				case ConcurrentRoot:
					this._debugRootType = hydrate$1 ? "hydrateRoot()" : "createRoot()";
					break;
				case LegacyRoot:
					this._debugRootType = hydrate$1 ? "hydrate()" : "render()";
					break;
			}
		}
		function createFiberRoot(containerInfo, tag, hydrate$1, initialChildren, hydrationCallbacks, isStrictMode, concurrentUpdatesByDefaultOverride, identifierPrefix, onRecoverableError, transitionCallbacks) {
			var root$1 = new FiberRootNode(containerInfo, tag, hydrate$1, identifierPrefix, onRecoverableError);
			var uninitializedFiber = createHostRootFiber(tag, isStrictMode);
			root$1.current = uninitializedFiber;
			uninitializedFiber.stateNode = root$1;
			{
				var _initialState = {
					element: initialChildren,
					isDehydrated: hydrate$1,
					cache: null,
					transitions: null,
					pendingSuspenseBoundaries: null
				};
				uninitializedFiber.memoizedState = _initialState;
			}
			initializeUpdateQueue(uninitializedFiber);
			return root$1;
		}
		var ReactVersion = "18.3.1";
		function createPortal(children, containerInfo, implementation) {
			var key = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
			checkKeyStringCoercion(key);
			return {
				$$typeof: REACT_PORTAL_TYPE,
				key: key == null ? null : "" + key,
				children,
				containerInfo,
				implementation
			};
		}
		var didWarnAboutNestedUpdates;
		var didWarnAboutFindNodeInStrictMode;
		{
			didWarnAboutNestedUpdates = false;
			didWarnAboutFindNodeInStrictMode = {};
		}
		function getContextForSubtree(parentComponent) {
			if (!parentComponent) return emptyContextObject;
			var fiber = get(parentComponent);
			var parentContext = findCurrentUnmaskedContext(fiber);
			if (fiber.tag === ClassComponent) {
				var Component = fiber.type;
				if (isContextProvider(Component)) return processChildContext(fiber, Component, parentContext);
			}
			return parentContext;
		}
		function findHostInstanceWithWarning(component, methodName) {
			{
				var fiber = get(component);
				if (fiber === undefined) if (typeof component.render === "function") throw new Error("Unable to find node on an unmounted component.");
else {
					var keys = Object.keys(component).join(",");
					throw new Error("Argument appears to not be a ReactComponent. Keys: " + keys);
				}
				var hostFiber = findCurrentHostFiber(fiber);
				if (hostFiber === null) return null;
				if (hostFiber.mode & StrictLegacyMode) {
					var componentName = getComponentNameFromFiber(fiber) || "Component";
					if (!didWarnAboutFindNodeInStrictMode[componentName]) {
						didWarnAboutFindNodeInStrictMode[componentName] = true;
						var previousFiber = current;
						try {
							setCurrentFiber(hostFiber);
							if (fiber.mode & StrictLegacyMode) error("%s is deprecated in StrictMode. %s was passed an instance of %s which is inside StrictMode. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", methodName, methodName, componentName);
else error("%s is deprecated in StrictMode. %s was passed an instance of %s which renders StrictMode children. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", methodName, methodName, componentName);
						} finally {
							if (previousFiber) setCurrentFiber(previousFiber);
else resetCurrentFiber();
						}
					}
				}
				return hostFiber.stateNode;
			}
		}
		function createContainer(containerInfo, tag, hydrationCallbacks, isStrictMode, concurrentUpdatesByDefaultOverride, identifierPrefix, onRecoverableError, transitionCallbacks) {
			var hydrate$1 = false;
			var initialChildren = null;
			return createFiberRoot(containerInfo, tag, hydrate$1, initialChildren, hydrationCallbacks, isStrictMode, concurrentUpdatesByDefaultOverride, identifierPrefix, onRecoverableError);
		}
		function createHydrationContainer(initialChildren, callback, containerInfo, tag, hydrationCallbacks, isStrictMode, concurrentUpdatesByDefaultOverride, identifierPrefix, onRecoverableError, transitionCallbacks) {
			var hydrate$1 = true;
			var root$1 = createFiberRoot(containerInfo, tag, hydrate$1, initialChildren, hydrationCallbacks, isStrictMode, concurrentUpdatesByDefaultOverride, identifierPrefix, onRecoverableError);
			root$1.context = getContextForSubtree(null);
			var current$1 = root$1.current;
			var eventTime = requestEventTime();
			var lane = requestUpdateLane(current$1);
			var update = createUpdate(eventTime, lane);
			update.callback = callback !== undefined && callback !== null ? callback : null;
			enqueueUpdate(current$1, update, lane);
			scheduleInitialHydrationOnRoot(root$1, lane, eventTime);
			return root$1;
		}
		function updateContainer(element, container, parentComponent, callback) {
			onScheduleRoot(container, element);
			var current$1 = container.current;
			var eventTime = requestEventTime();
			var lane = requestUpdateLane(current$1);
			markRenderScheduled(lane);
			var context = getContextForSubtree(parentComponent);
			if (container.context === null) container.context = context;
else container.pendingContext = context;
			if (isRendering && current !== null && !didWarnAboutNestedUpdates) {
				didWarnAboutNestedUpdates = true;
				error("Render methods should be a pure function of props and state; triggering nested component updates from render is not allowed. If necessary, trigger nested updates in componentDidUpdate.\n\nCheck the render method of %s.", getComponentNameFromFiber(current) || "Unknown");
			}
			var update = createUpdate(eventTime, lane);
			update.payload = { element };
			callback = callback === undefined ? null : callback;
			if (callback !== null) {
				if (typeof callback !== "function") error("render(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", callback);
				update.callback = callback;
			}
			var root$1 = enqueueUpdate(current$1, update, lane);
			if (root$1 !== null) {
				scheduleUpdateOnFiber(root$1, current$1, lane, eventTime);
				entangleTransitions(root$1, current$1, lane);
			}
			return lane;
		}
		function getPublicRootInstance(container) {
			var containerFiber = container.current;
			if (!containerFiber.child) return null;
			switch (containerFiber.child.tag) {
				case HostComponent: return getPublicInstance(containerFiber.child.stateNode);
				default: return containerFiber.child.stateNode;
			}
		}
		function attemptSynchronousHydration$1(fiber) {
			switch (fiber.tag) {
				case HostRoot: {
					var root$1 = fiber.stateNode;
					if (isRootDehydrated(root$1)) {
						var lanes = getHighestPriorityPendingLanes(root$1);
						flushRoot(root$1, lanes);
					}
					break;
				}
				case SuspenseComponent: {
					flushSync$1(function() {
						var root$2 = enqueueConcurrentRenderForLane(fiber, SyncLane);
						if (root$2 !== null) {
							var eventTime = requestEventTime();
							scheduleUpdateOnFiber(root$2, fiber, SyncLane, eventTime);
						}
					});
					var retryLane = SyncLane;
					markRetryLaneIfNotHydrated(fiber, retryLane);
					break;
				}
			}
		}
		function markRetryLaneImpl(fiber, retryLane) {
			var suspenseState = fiber.memoizedState;
			if (suspenseState !== null && suspenseState.dehydrated !== null) suspenseState.retryLane = higherPriorityLane(suspenseState.retryLane, retryLane);
		}
		function markRetryLaneIfNotHydrated(fiber, retryLane) {
			markRetryLaneImpl(fiber, retryLane);
			var alternate = fiber.alternate;
			if (alternate) markRetryLaneImpl(alternate, retryLane);
		}
		function attemptContinuousHydration$1(fiber) {
			if (fiber.tag !== SuspenseComponent) return;
			var lane = SelectiveHydrationLane;
			var root$1 = enqueueConcurrentRenderForLane(fiber, lane);
			if (root$1 !== null) {
				var eventTime = requestEventTime();
				scheduleUpdateOnFiber(root$1, fiber, lane, eventTime);
			}
			markRetryLaneIfNotHydrated(fiber, lane);
		}
		function attemptHydrationAtCurrentPriority$1(fiber) {
			if (fiber.tag !== SuspenseComponent) return;
			var lane = requestUpdateLane(fiber);
			var root$1 = enqueueConcurrentRenderForLane(fiber, lane);
			if (root$1 !== null) {
				var eventTime = requestEventTime();
				scheduleUpdateOnFiber(root$1, fiber, lane, eventTime);
			}
			markRetryLaneIfNotHydrated(fiber, lane);
		}
		function findHostInstanceWithNoPortals(fiber) {
			var hostFiber = findCurrentHostFiberWithNoPortals(fiber);
			if (hostFiber === null) return null;
			return hostFiber.stateNode;
		}
		var shouldErrorImpl = function(fiber) {
			return null;
		};
		function shouldError(fiber) {
			return shouldErrorImpl(fiber);
		}
		var shouldSuspendImpl = function(fiber) {
			return false;
		};
		function shouldSuspend(fiber) {
			return shouldSuspendImpl(fiber);
		}
		var overrideHookState = null;
		var overrideHookStateDeletePath = null;
		var overrideHookStateRenamePath = null;
		var overrideProps = null;
		var overridePropsDeletePath = null;
		var overridePropsRenamePath = null;
		var scheduleUpdate = null;
		var setErrorHandler = null;
		var setSuspenseHandler = null;
		{
			var copyWithDeleteImpl = function(obj, path, index$1) {
				var key = path[index$1];
				var updated = isArray(obj) ? obj.slice() : assign({}, obj);
				if (index$1 + 1 === path.length) {
					if (isArray(updated)) updated.splice(key, 1);
else delete updated[key];
					return updated;
				}
				updated[key] = copyWithDeleteImpl(obj[key], path, index$1 + 1);
				return updated;
			};
			var copyWithDelete = function(obj, path) {
				return copyWithDeleteImpl(obj, path, 0);
			};
			var copyWithRenameImpl = function(obj, oldPath, newPath, index$1) {
				var oldKey = oldPath[index$1];
				var updated = isArray(obj) ? obj.slice() : assign({}, obj);
				if (index$1 + 1 === oldPath.length) {
					var newKey = newPath[index$1];
					updated[newKey] = updated[oldKey];
					if (isArray(updated)) updated.splice(oldKey, 1);
else delete updated[oldKey];
				} else updated[oldKey] = copyWithRenameImpl(
					// $FlowFixMe number or string is fine here
					obj[oldKey],
					oldPath,
					newPath,
					index$1 + 1
);
				return updated;
			};
			var copyWithRename = function(obj, oldPath, newPath) {
				if (oldPath.length !== newPath.length) {
					warn("copyWithRename() expects paths of the same length");
					return;
				} else for (var i$1 = 0; i$1 < newPath.length - 1; i$1++) if (oldPath[i$1] !== newPath[i$1]) {
					warn("copyWithRename() expects paths to be the same except for the deepest key");
					return;
				}
				return copyWithRenameImpl(obj, oldPath, newPath, 0);
			};
			var copyWithSetImpl = function(obj, path, index$1, value) {
				if (index$1 >= path.length) return value;
				var key = path[index$1];
				var updated = isArray(obj) ? obj.slice() : assign({}, obj);
				updated[key] = copyWithSetImpl(obj[key], path, index$1 + 1, value);
				return updated;
			};
			var copyWithSet = function(obj, path, value) {
				return copyWithSetImpl(obj, path, 0, value);
			};
			var findHook = function(fiber, id) {
				var currentHook$1 = fiber.memoizedState;
				while (currentHook$1 !== null && id > 0) {
					currentHook$1 = currentHook$1.next;
					id--;
				}
				return currentHook$1;
			};
			overrideHookState = function(fiber, id, path, value) {
				var hook = findHook(fiber, id);
				if (hook !== null) {
					var newState = copyWithSet(hook.memoizedState, path, value);
					hook.memoizedState = newState;
					hook.baseState = newState;
					fiber.memoizedProps = assign({}, fiber.memoizedProps);
					var root$1 = enqueueConcurrentRenderForLane(fiber, SyncLane);
					if (root$1 !== null) scheduleUpdateOnFiber(root$1, fiber, SyncLane, NoTimestamp);
				}
			};
			overrideHookStateDeletePath = function(fiber, id, path) {
				var hook = findHook(fiber, id);
				if (hook !== null) {
					var newState = copyWithDelete(hook.memoizedState, path);
					hook.memoizedState = newState;
					hook.baseState = newState;
					fiber.memoizedProps = assign({}, fiber.memoizedProps);
					var root$1 = enqueueConcurrentRenderForLane(fiber, SyncLane);
					if (root$1 !== null) scheduleUpdateOnFiber(root$1, fiber, SyncLane, NoTimestamp);
				}
			};
			overrideHookStateRenamePath = function(fiber, id, oldPath, newPath) {
				var hook = findHook(fiber, id);
				if (hook !== null) {
					var newState = copyWithRename(hook.memoizedState, oldPath, newPath);
					hook.memoizedState = newState;
					hook.baseState = newState;
					fiber.memoizedProps = assign({}, fiber.memoizedProps);
					var root$1 = enqueueConcurrentRenderForLane(fiber, SyncLane);
					if (root$1 !== null) scheduleUpdateOnFiber(root$1, fiber, SyncLane, NoTimestamp);
				}
			};
			overrideProps = function(fiber, path, value) {
				fiber.pendingProps = copyWithSet(fiber.memoizedProps, path, value);
				if (fiber.alternate) fiber.alternate.pendingProps = fiber.pendingProps;
				var root$1 = enqueueConcurrentRenderForLane(fiber, SyncLane);
				if (root$1 !== null) scheduleUpdateOnFiber(root$1, fiber, SyncLane, NoTimestamp);
			};
			overridePropsDeletePath = function(fiber, path) {
				fiber.pendingProps = copyWithDelete(fiber.memoizedProps, path);
				if (fiber.alternate) fiber.alternate.pendingProps = fiber.pendingProps;
				var root$1 = enqueueConcurrentRenderForLane(fiber, SyncLane);
				if (root$1 !== null) scheduleUpdateOnFiber(root$1, fiber, SyncLane, NoTimestamp);
			};
			overridePropsRenamePath = function(fiber, oldPath, newPath) {
				fiber.pendingProps = copyWithRename(fiber.memoizedProps, oldPath, newPath);
				if (fiber.alternate) fiber.alternate.pendingProps = fiber.pendingProps;
				var root$1 = enqueueConcurrentRenderForLane(fiber, SyncLane);
				if (root$1 !== null) scheduleUpdateOnFiber(root$1, fiber, SyncLane, NoTimestamp);
			};
			scheduleUpdate = function(fiber) {
				var root$1 = enqueueConcurrentRenderForLane(fiber, SyncLane);
				if (root$1 !== null) scheduleUpdateOnFiber(root$1, fiber, SyncLane, NoTimestamp);
			};
			setErrorHandler = function(newShouldErrorImpl) {
				shouldErrorImpl = newShouldErrorImpl;
			};
			setSuspenseHandler = function(newShouldSuspendImpl) {
				shouldSuspendImpl = newShouldSuspendImpl;
			};
		}
		function findHostInstanceByFiber(fiber) {
			var hostFiber = findCurrentHostFiber(fiber);
			if (hostFiber === null) return null;
			return hostFiber.stateNode;
		}
		function emptyFindFiberByHostInstance(instance) {
			return null;
		}
		function getCurrentFiberForDevTools() {
			return current;
		}
		function injectIntoDevTools(devToolsConfig) {
			var findFiberByHostInstance = devToolsConfig.findFiberByHostInstance;
			var ReactCurrentDispatcher$3 = ReactSharedInternals.ReactCurrentDispatcher;
			return injectInternals({
				bundleType: devToolsConfig.bundleType,
				version: devToolsConfig.version,
				rendererPackageName: devToolsConfig.rendererPackageName,
				rendererConfig: devToolsConfig.rendererConfig,
				overrideHookState,
				overrideHookStateDeletePath,
				overrideHookStateRenamePath,
				overrideProps,
				overridePropsDeletePath,
				overridePropsRenamePath,
				setErrorHandler,
				setSuspenseHandler,
				scheduleUpdate,
				currentDispatcherRef: ReactCurrentDispatcher$3,
				findHostInstanceByFiber,
				findFiberByHostInstance: findFiberByHostInstance || emptyFindFiberByHostInstance,
				findHostInstancesForRefresh,
				scheduleRefresh,
				scheduleRoot,
				setRefreshHandler,
				getCurrentFiber: getCurrentFiberForDevTools,
				reconcilerVersion: ReactVersion
			});
		}
		var defaultOnRecoverableError = typeof reportError === "function" ? reportError : function(error$1) {
			console["error"](error$1);
		};
		function ReactDOMRoot(internalRoot) {
			this._internalRoot = internalRoot;
		}
		ReactDOMHydrationRoot.prototype.render = ReactDOMRoot.prototype.render = function(children) {
			var root$1 = this._internalRoot;
			if (root$1 === null) throw new Error("Cannot update an unmounted root.");
			{
				if (typeof arguments[1] === "function") error("render(...): does not support the second callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().");
else if (isValidContainer(arguments[1])) error("You passed a container to the second argument of root.render(...). You don't need to pass it again since you already passed it to create the root.");
else if (typeof arguments[1] !== "undefined") error("You passed a second argument to root.render(...) but it only accepts one argument.");
				var container = root$1.containerInfo;
				if (container.nodeType !== COMMENT_NODE) {
					var hostInstance = findHostInstanceWithNoPortals(root$1.current);
					if (hostInstance) {
						if (hostInstance.parentNode !== container) error("render(...): It looks like the React-rendered content of the root container was removed without using React. This is not supported and will cause errors. Instead, call root.unmount() to empty a root's container.");
					}
				}
			}
			updateContainer(children, root$1, null, null);
		};
		ReactDOMHydrationRoot.prototype.unmount = ReactDOMRoot.prototype.unmount = function() {
			if (typeof arguments[0] === "function") error("unmount(...): does not support a callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().");
			var root$1 = this._internalRoot;
			if (root$1 !== null) {
				this._internalRoot = null;
				var container = root$1.containerInfo;
				if (isAlreadyRendering()) error("Attempted to synchronously unmount a root while React was already rendering. React cannot finish unmounting the root until the current render has completed, which may lead to a race condition.");
				flushSync$1(function() {
					updateContainer(null, root$1, null, null);
				});
				unmarkContainerAsRoot(container);
			}
		};
		function createRoot(container, options$1) {
			if (!isValidContainer(container)) throw new Error("createRoot(...): Target container is not a DOM element.");
			warnIfReactDOMContainerInDEV(container);
			var isStrictMode = false;
			var concurrentUpdatesByDefaultOverride = false;
			var identifierPrefix = "";
			var onRecoverableError = defaultOnRecoverableError;
			var transitionCallbacks = null;
			if (options$1 !== null && options$1 !== undefined) {
				if (options$1.hydrate) warn("hydrate through createRoot is deprecated. Use ReactDOMClient.hydrateRoot(container, <App />) instead.");
else if (typeof options$1 === "object" && options$1 !== null && options$1.$$typeof === REACT_ELEMENT_TYPE) error("You passed a JSX element to createRoot. You probably meant to call root.render instead. Example usage:\n\n  let root = createRoot(domContainer);\n  root.render(<App />);");
				if (options$1.unstable_strictMode === true) isStrictMode = true;
				if (options$1.identifierPrefix !== undefined) identifierPrefix = options$1.identifierPrefix;
				if (options$1.onRecoverableError !== undefined) onRecoverableError = options$1.onRecoverableError;
				if (options$1.transitionCallbacks !== undefined) transitionCallbacks = options$1.transitionCallbacks;
			}
			var root$1 = createContainer(container, ConcurrentRoot, null, isStrictMode, concurrentUpdatesByDefaultOverride, identifierPrefix, onRecoverableError);
			markContainerAsRoot(root$1.current, container);
			var rootContainerElement = container.nodeType === COMMENT_NODE ? container.parentNode : container;
			listenToAllSupportedEvents(rootContainerElement);
			return new ReactDOMRoot(root$1);
		}
		function ReactDOMHydrationRoot(internalRoot) {
			this._internalRoot = internalRoot;
		}
		function scheduleHydration(target) {
			if (target) queueExplicitHydrationTarget(target);
		}
		ReactDOMHydrationRoot.prototype.unstable_scheduleHydration = scheduleHydration;
		function hydrateRoot(container, initialChildren, options$1) {
			if (!isValidContainer(container)) throw new Error("hydrateRoot(...): Target container is not a DOM element.");
			warnIfReactDOMContainerInDEV(container);
			if (initialChildren === undefined) error("Must provide initial children as second argument to hydrateRoot. Example usage: hydrateRoot(domContainer, <App />)");
			var hydrationCallbacks = options$1 != null ? options$1 : null;
			var mutableSources = options$1 != null && options$1.hydratedSources || null;
			var isStrictMode = false;
			var concurrentUpdatesByDefaultOverride = false;
			var identifierPrefix = "";
			var onRecoverableError = defaultOnRecoverableError;
			if (options$1 !== null && options$1 !== undefined) {
				if (options$1.unstable_strictMode === true) isStrictMode = true;
				if (options$1.identifierPrefix !== undefined) identifierPrefix = options$1.identifierPrefix;
				if (options$1.onRecoverableError !== undefined) onRecoverableError = options$1.onRecoverableError;
			}
			var root$1 = createHydrationContainer(initialChildren, null, container, ConcurrentRoot, hydrationCallbacks, isStrictMode, concurrentUpdatesByDefaultOverride, identifierPrefix, onRecoverableError);
			markContainerAsRoot(root$1.current, container);
			listenToAllSupportedEvents(container);
			if (mutableSources) for (var i$1 = 0; i$1 < mutableSources.length; i$1++) {
				var mutableSource = mutableSources[i$1];
				registerMutableSourceForHydration(root$1, mutableSource);
			}
			return new ReactDOMHydrationRoot(root$1);
		}
		function isValidContainer(node) {
			return !!(node && (node.nodeType === ELEMENT_NODE || node.nodeType === DOCUMENT_NODE || node.nodeType === DOCUMENT_FRAGMENT_NODE || !disableCommentsAsDOMContainers));
		}
		function isValidContainerLegacy(node) {
			return !!(node && (node.nodeType === ELEMENT_NODE || node.nodeType === DOCUMENT_NODE || node.nodeType === DOCUMENT_FRAGMENT_NODE || node.nodeType === COMMENT_NODE && node.nodeValue === " react-mount-point-unstable "));
		}
		function warnIfReactDOMContainerInDEV(container) {
			{
				if (container.nodeType === ELEMENT_NODE && container.tagName && container.tagName.toUpperCase() === "BODY") error("createRoot(): Creating roots directly with document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try using a container element created for your app.");
				if (isContainerMarkedAsRoot(container)) if (container._reactRootContainer) error("You are calling ReactDOMClient.createRoot() on a container that was previously passed to ReactDOM.render(). This is not supported.");
else error("You are calling ReactDOMClient.createRoot() on a container that has already been passed to createRoot() before. Instead, call root.render() on the existing root instead if you want to update it.");
			}
		}
		var ReactCurrentOwner$3 = ReactSharedInternals.ReactCurrentOwner;
		var topLevelUpdateWarnings;
		topLevelUpdateWarnings = function(container) {
			if (container._reactRootContainer && container.nodeType !== COMMENT_NODE) {
				var hostInstance = findHostInstanceWithNoPortals(container._reactRootContainer.current);
				if (hostInstance) {
					if (hostInstance.parentNode !== container) error("render(...): It looks like the React-rendered content of this container was removed without using React. This is not supported and will cause errors. Instead, call ReactDOM.unmountComponentAtNode to empty a container.");
				}
			}
			var isRootRenderedBySomeReact = !!container._reactRootContainer;
			var rootEl = getReactRootElementInContainer(container);
			var hasNonRootReactChild = !!(rootEl && getInstanceFromNode(rootEl));
			if (hasNonRootReactChild && !isRootRenderedBySomeReact) error("render(...): Replacing React-rendered children with a new root component. If you intended to update the children of this node, you should instead have the existing children update their state and render the new components instead of calling ReactDOM.render.");
			if (container.nodeType === ELEMENT_NODE && container.tagName && container.tagName.toUpperCase() === "BODY") error("render(): Rendering components directly into document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try rendering into a container element created for your app.");
		};
		function getReactRootElementInContainer(container) {
			if (!container) return null;
			if (container.nodeType === DOCUMENT_NODE) return container.documentElement;
else return container.firstChild;
		}
		function noopOnRecoverableError() {}
		function legacyCreateRootFromDOMContainer(container, initialChildren, parentComponent, callback, isHydrationContainer) {
			if (isHydrationContainer) {
				if (typeof callback === "function") {
					var originalCallback = callback;
					callback = function() {
						var instance = getPublicRootInstance(root$1);
						originalCallback.call(instance);
					};
				}
				var root$1 = createHydrationContainer(initialChildren, callback, container, LegacyRoot, null, false, false, "", noopOnRecoverableError);
				container._reactRootContainer = root$1;
				markContainerAsRoot(root$1.current, container);
				var rootContainerElement = container.nodeType === COMMENT_NODE ? container.parentNode : container;
				listenToAllSupportedEvents(rootContainerElement);
				flushSync$1();
				return root$1;
			} else {
				var rootSibling;
				while (rootSibling = container.lastChild) container.removeChild(rootSibling);
				if (typeof callback === "function") {
					var _originalCallback = callback;
					callback = function() {
						var instance = getPublicRootInstance(_root);
						_originalCallback.call(instance);
					};
				}
				var _root = createContainer(container, LegacyRoot, null, false, false, "", noopOnRecoverableError);
				container._reactRootContainer = _root;
				markContainerAsRoot(_root.current, container);
				var _rootContainerElement = container.nodeType === COMMENT_NODE ? container.parentNode : container;
				listenToAllSupportedEvents(_rootContainerElement);
				flushSync$1(function() {
					updateContainer(initialChildren, _root, parentComponent, callback);
				});
				return _root;
			}
		}
		function warnOnInvalidCallback$1(callback, callerName) {
			if (callback !== null && typeof callback !== "function") error("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", callerName, callback);
		}
		function legacyRenderSubtreeIntoContainer(parentComponent, children, container, forceHydrate, callback) {
			{
				topLevelUpdateWarnings(container);
				warnOnInvalidCallback$1(callback === undefined ? null : callback, "render");
			}
			var maybeRoot = container._reactRootContainer;
			var root$1;
			if (!maybeRoot) root$1 = legacyCreateRootFromDOMContainer(container, children, parentComponent, callback, forceHydrate);
else {
				root$1 = maybeRoot;
				if (typeof callback === "function") {
					var originalCallback = callback;
					callback = function() {
						var instance = getPublicRootInstance(root$1);
						originalCallback.call(instance);
					};
				}
				updateContainer(children, root$1, parentComponent, callback);
			}
			return getPublicRootInstance(root$1);
		}
		var didWarnAboutFindDOMNode = false;
		function findDOMNode(componentOrElement) {
			{
				if (!didWarnAboutFindDOMNode) {
					didWarnAboutFindDOMNode = true;
					error("findDOMNode is deprecated and will be removed in the next major release. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node");
				}
				var owner = ReactCurrentOwner$3.current;
				if (owner !== null && owner.stateNode !== null) {
					var warnedAboutRefsInRender = owner.stateNode._warnedAboutRefsInRender;
					if (!warnedAboutRefsInRender) error("%s is accessing findDOMNode inside its render(). render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", getComponentNameFromType(owner.type) || "A component");
					owner.stateNode._warnedAboutRefsInRender = true;
				}
			}
			if (componentOrElement == null) return null;
			if (componentOrElement.nodeType === ELEMENT_NODE) return componentOrElement;
			return findHostInstanceWithWarning(componentOrElement, "findDOMNode");
		}
		function hydrate(element, container, callback) {
			error("ReactDOM.hydrate is no longer supported in React 18. Use hydrateRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot");
			if (!isValidContainerLegacy(container)) throw new Error("Target container is not a DOM element.");
			{
				var isModernRoot = isContainerMarkedAsRoot(container) && container._reactRootContainer === undefined;
				if (isModernRoot) error("You are calling ReactDOM.hydrate() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call hydrateRoot(container, element)?");
			}
			return legacyRenderSubtreeIntoContainer(null, element, container, true, callback);
		}
		function render(element, container, callback) {
			error("ReactDOM.render is no longer supported in React 18. Use createRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot");
			if (!isValidContainerLegacy(container)) throw new Error("Target container is not a DOM element.");
			{
				var isModernRoot = isContainerMarkedAsRoot(container) && container._reactRootContainer === undefined;
				if (isModernRoot) error("You are calling ReactDOM.render() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.render(element)?");
			}
			return legacyRenderSubtreeIntoContainer(null, element, container, false, callback);
		}
		function unstable_renderSubtreeIntoContainer(parentComponent, element, containerNode, callback) {
			error("ReactDOM.unstable_renderSubtreeIntoContainer() is no longer supported in React 18. Consider using a portal instead. Until you switch to the createRoot API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot");
			if (!isValidContainerLegacy(containerNode)) throw new Error("Target container is not a DOM element.");
			if (parentComponent == null || !has(parentComponent)) throw new Error("parentComponent must be a valid React Component");
			return legacyRenderSubtreeIntoContainer(parentComponent, element, containerNode, false, callback);
		}
		var didWarnAboutUnmountComponentAtNode = false;
		function unmountComponentAtNode(container) {
			if (!didWarnAboutUnmountComponentAtNode) {
				didWarnAboutUnmountComponentAtNode = true;
				error("unmountComponentAtNode is deprecated and will be removed in the next major release. Switch to the createRoot API. Learn more: https://reactjs.org/link/switch-to-createroot");
			}
			if (!isValidContainerLegacy(container)) throw new Error("unmountComponentAtNode(...): Target container is not a DOM element.");
			{
				var isModernRoot = isContainerMarkedAsRoot(container) && container._reactRootContainer === undefined;
				if (isModernRoot) error("You are calling ReactDOM.unmountComponentAtNode() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.unmount()?");
			}
			if (container._reactRootContainer) {
				{
					var rootEl = getReactRootElementInContainer(container);
					var renderedByDifferentReact = rootEl && !getInstanceFromNode(rootEl);
					if (renderedByDifferentReact) error("unmountComponentAtNode(): The node you're attempting to unmount was rendered by another copy of React.");
				}
				flushSync$1(function() {
					legacyRenderSubtreeIntoContainer(null, null, container, false, function() {
						container._reactRootContainer = null;
						unmarkContainerAsRoot(container);
					});
				});
				return true;
			} else {
				{
					var _rootEl = getReactRootElementInContainer(container);
					var hasNonRootReactChild = !!(_rootEl && getInstanceFromNode(_rootEl));
					var isContainerReactRoot = container.nodeType === ELEMENT_NODE && isValidContainerLegacy(container.parentNode) && !!container.parentNode._reactRootContainer;
					if (hasNonRootReactChild) error("unmountComponentAtNode(): The node you're attempting to unmount was rendered by React and is not a top-level container. %s", isContainerReactRoot ? "You may have accidentally passed in a React root node instead of its container." : "Instead, have the parent component update its state and rerender in order to remove this component.");
				}
				return false;
			}
		}
		setAttemptSynchronousHydration(attemptSynchronousHydration$1);
		setAttemptContinuousHydration(attemptContinuousHydration$1);
		setAttemptHydrationAtCurrentPriority(attemptHydrationAtCurrentPriority$1);
		setGetCurrentUpdatePriority(getCurrentUpdatePriority);
		setAttemptHydrationAtPriority(runWithPriority);
		if (typeof Map !== "function" || Map.prototype == null || typeof Map.prototype.forEach !== "function" || typeof Set !== "function" || Set.prototype == null || typeof Set.prototype.clear !== "function" || typeof Set.prototype.forEach !== "function") error("React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills");
		setRestoreImplementation(restoreControlledState$3);
		setBatchingImplementation(batchedUpdates$1, discreteUpdates, flushSync$1);
		function createPortal$1(children, container) {
			var key = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
			if (!isValidContainer(container)) throw new Error("Target container is not a DOM element.");
			return createPortal(children, container, null, key);
		}
		function renderSubtreeIntoContainer(parentComponent, element, containerNode, callback) {
			return unstable_renderSubtreeIntoContainer(parentComponent, element, containerNode, callback);
		}
		var Internals = {
			usingClientEntryPoint: false,
			Events: [
				getInstanceFromNode,
				getNodeFromInstance,
				getFiberCurrentPropsFromNode,
				enqueueStateRestore,
				restoreStateIfNeeded,
				batchedUpdates$1
			]
		};
		function createRoot$1(container, options$1) {
			if (!Internals.usingClientEntryPoint && true) error("You are importing createRoot from \"react-dom\" which is not supported. You should instead import it from \"react-dom/client\".");
			return createRoot(container, options$1);
		}
		function hydrateRoot$1(container, initialChildren, options$1) {
			if (!Internals.usingClientEntryPoint && true) error("You are importing hydrateRoot from \"react-dom\" which is not supported. You should instead import it from \"react-dom/client\".");
			return hydrateRoot(container, initialChildren, options$1);
		}
		function flushSync$1$1(fn) {
			if (isAlreadyRendering()) error("flushSync was called from inside a lifecycle method. React cannot flush when React is already rendering. Consider moving this call to a scheduler task or micro task.");
			return flushSync$1(fn);
		}
		var foundDevTools = injectIntoDevTools({
			findFiberByHostInstance: getClosestInstanceFromNode,
			bundleType: 1,
			version: ReactVersion,
			rendererPackageName: "react-dom"
		});
		if (!foundDevTools && canUseDOM && window.top === window.self) {
			if (navigator.userAgent.indexOf("Chrome") > -1 && navigator.userAgent.indexOf("Edge") === -1 || navigator.userAgent.indexOf("Firefox") > -1) {
				var protocol = window.location.protocol;
				if (/^(https?|file):$/.test(protocol)) console.info("%cDownload the React DevTools for a better development experience: https://reactjs.org/link/react-devtools" + (protocol === "file:" ? "\nYou might need to use a local HTTP server (instead of file://): https://reactjs.org/link/react-devtools-faq" : ""), "font-weight:bold");
			}
		}
		exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Internals;
		exports.createPortal = createPortal$1;
		exports.createRoot = createRoot$1;
		exports.findDOMNode = findDOMNode;
		exports.flushSync = flushSync$1$1;
		exports.hydrate = hydrate;
		exports.hydrateRoot = hydrateRoot$1;
		exports.render = render;
		exports.unmountComponentAtNode = unmountComponentAtNode;
		exports.unstable_batchedUpdates = batchedUpdates$1;
		exports.unstable_renderSubtreeIntoContainer = renderSubtreeIntoContainer;
		exports.version = ReactVersion;
		if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== "undefined" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop === "function") __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
	})();
} });

//#endregion
//#region node_modules/react-dom/index.js
var require_react_dom = __commonJS({ "node_modules/react-dom/index.js"(exports, module) {
	module.exports = require_react_dom_development();
} });

//#endregion
//#region node_modules/react-dom/client.js
var require_client = __commonJS({ "node_modules/react-dom/client.js"(exports) {
	var m = require_react_dom();
	{
		var i = m.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
		exports.createRoot = function(c, o) {
			i.usingClientEntryPoint = true;
			try {
				return m.createRoot(c, o);
			} finally {
				i.usingClientEntryPoint = false;
			}
		};
		exports.hydrateRoot = function(c, h, o) {
			i.usingClientEntryPoint = true;
			try {
				return m.hydrateRoot(c, h, o);
			} finally {
				i.usingClientEntryPoint = false;
			}
		};
	}
} });

//#endregion
//#region node_modules/@tanstack/history/dist/esm/index.js
const stateIndexKey = "__TSR_index";
const popStateEvent = "popstate";
const beforeUnloadEvent = "beforeunload";
function createHistory(opts) {
	let location = opts.getLocation();
	const subscribers = /* @__PURE__ */ new Set();
	const notify = (action) => {
		location = opts.getLocation();
		subscribers.forEach((subscriber) => subscriber({
			location,
			action
		}));
	};
	const handleIndexChange = (action) => {
		if (opts.notifyOnIndexChange ?? true) notify(action);
else location = opts.getLocation();
	};
	const tryNavigation = async ({ task, navigateOpts,...actionInfo }) => {
		var _a, _b;
		const ignoreBlocker = (navigateOpts == null ? void 0 : navigateOpts.ignoreBlocker) ?? false;
		if (ignoreBlocker) {
			task();
			return;
		}
		const blockers = ((_a = opts.getBlockers) == null ? void 0 : _a.call(opts)) ?? [];
		const isPushOrReplace = actionInfo.type === "PUSH" || actionInfo.type === "REPLACE";
		if (typeof document !== "undefined" && blockers.length && isPushOrReplace) for (const blocker of blockers) {
			const nextLocation = parseHref(actionInfo.path, actionInfo.state);
			const isBlocked = await blocker.blockerFn({
				currentLocation: location,
				nextLocation,
				action: actionInfo.type
			});
			if (isBlocked) {
				(_b = opts.onBlocked) == null ? void 0 : _b.call(opts);
				return;
			}
		}
		task();
	};
	return {
		get location() {
			return location;
		},
		get length() {
			return opts.getLength();
		},
		subscribers,
		subscribe: (cb) => {
			subscribers.add(cb);
			return () => {
				subscribers.delete(cb);
			};
		},
		push: (path, state, navigateOpts) => {
			const currentIndex = location.state[stateIndexKey];
			state = assignKeyAndIndex(currentIndex + 1, state);
			tryNavigation({
				task: () => {
					opts.pushState(path, state);
					notify({ type: "PUSH" });
				},
				navigateOpts,
				type: "PUSH",
				path,
				state
			});
		},
		replace: (path, state, navigateOpts) => {
			const currentIndex = location.state[stateIndexKey];
			state = assignKeyAndIndex(currentIndex, state);
			tryNavigation({
				task: () => {
					opts.replaceState(path, state);
					notify({ type: "REPLACE" });
				},
				navigateOpts,
				type: "REPLACE",
				path,
				state
			});
		},
		go: (index, navigateOpts) => {
			tryNavigation({
				task: () => {
					opts.go(index);
					handleIndexChange({
						type: "GO",
						index
					});
				},
				navigateOpts,
				type: "GO"
			});
		},
		back: (navigateOpts) => {
			tryNavigation({
				task: () => {
					opts.back((navigateOpts == null ? void 0 : navigateOpts.ignoreBlocker) ?? false);
					handleIndexChange({ type: "BACK" });
				},
				navigateOpts,
				type: "BACK"
			});
		},
		forward: (navigateOpts) => {
			tryNavigation({
				task: () => {
					opts.forward((navigateOpts == null ? void 0 : navigateOpts.ignoreBlocker) ?? false);
					handleIndexChange({ type: "FORWARD" });
				},
				navigateOpts,
				type: "FORWARD"
			});
		},
		canGoBack: () => location.state[stateIndexKey] !== 0,
		createHref: (str) => opts.createHref(str),
		block: (blocker) => {
			var _a;
			if (!opts.setBlockers) return () => {};
			const blockers = ((_a = opts.getBlockers) == null ? void 0 : _a.call(opts)) ?? [];
			opts.setBlockers([...blockers, blocker]);
			return () => {
				var _a2, _b;
				const blockers2 = ((_a2 = opts.getBlockers) == null ? void 0 : _a2.call(opts)) ?? [];
				(_b = opts.setBlockers) == null ? void 0 : _b.call(opts, blockers2.filter((b) => b !== blocker));
			};
		},
		flush: () => {
			var _a;
			return (_a = opts.flush) == null ? void 0 : _a.call(opts);
		},
		destroy: () => {
			var _a;
			return (_a = opts.destroy) == null ? void 0 : _a.call(opts);
		},
		notify
	};
}
function assignKeyAndIndex(index, state) {
	if (!state) state = {};
	return {
		...state,
		key: createRandomKey(),
		[stateIndexKey]: index
	};
}
function createBrowserHistory(opts) {
	const win = (opts == null ? void 0 : opts.window) ?? (typeof document !== "undefined" ? window : void 0);
	const originalPushState = win.history.pushState;
	const originalReplaceState = win.history.replaceState;
	let blockers = [];
	const _getBlockers = () => blockers;
	const _setBlockers = (newBlockers) => blockers = newBlockers;
	const createHref = (opts == null ? void 0 : opts.createHref) ?? ((path) => path);
	const parseLocation = (opts == null ? void 0 : opts.parseLocation) ?? (() => parseHref(`${win.location.pathname}${win.location.search}${win.location.hash}`, win.history.state));
	let currentLocation = parseLocation();
	let rollbackLocation;
	let nextPopIsGo = false;
	let ignoreNextPop = false;
	let skipBlockerNextPop = false;
	let ignoreNextBeforeUnload = false;
	const getLocation = () => currentLocation;
	let next;
	let scheduled;
	const flush = () => {
		if (!next) return;
		history._ignoreSubscribers = true;
		(next.isPush ? win.history.pushState : win.history.replaceState)(next.state, "", next.href);
		history._ignoreSubscribers = false;
		next = void 0;
		scheduled = void 0;
		rollbackLocation = void 0;
	};
	const queueHistoryAction = (type, destHref, state) => {
		const href = createHref(destHref);
		if (!scheduled) rollbackLocation = currentLocation;
		currentLocation = parseHref(destHref, state);
		next = {
			href,
			state,
			isPush: (next == null ? void 0 : next.isPush) || type === "push"
		};
		if (!scheduled) scheduled = Promise.resolve().then(() => flush());
	};
	const onPushPop = (type) => {
		currentLocation = parseLocation();
		history.notify({ type });
	};
	const onPushPopEvent = async () => {
		if (ignoreNextPop) {
			ignoreNextPop = false;
			return;
		}
		const nextLocation = parseLocation();
		const delta = nextLocation.state[stateIndexKey] - currentLocation.state[stateIndexKey];
		const isForward = delta === 1;
		const isBack = delta === -1;
		const isGo = !isForward && !isBack || nextPopIsGo;
		nextPopIsGo = false;
		const action = isGo ? "GO" : isBack ? "BACK" : "FORWARD";
		const notify = isGo ? {
			type: "GO",
			index: delta
		} : { type: isBack ? "BACK" : "FORWARD" };
		if (skipBlockerNextPop) skipBlockerNextPop = false;
else {
			const blockers2 = _getBlockers();
			if (typeof document !== "undefined" && blockers2.length) for (const blocker of blockers2) {
				const isBlocked = await blocker.blockerFn({
					currentLocation,
					nextLocation,
					action
				});
				if (isBlocked) {
					ignoreNextPop = true;
					win.history.go(1);
					history.notify(notify);
					return;
				}
			}
		}
		currentLocation = parseLocation();
		history.notify(notify);
	};
	const onBeforeUnload = (e) => {
		if (ignoreNextBeforeUnload) {
			ignoreNextBeforeUnload = false;
			return;
		}
		let shouldBlock = false;
		const blockers2 = _getBlockers();
		if (typeof document !== "undefined" && blockers2.length) for (const blocker of blockers2) {
			const shouldHaveBeforeUnload = blocker.enableBeforeUnload ?? true;
			if (shouldHaveBeforeUnload === true) {
				shouldBlock = true;
				break;
			}
			if (typeof shouldHaveBeforeUnload === "function" && shouldHaveBeforeUnload() === true) {
				shouldBlock = true;
				break;
			}
		}
		if (shouldBlock) {
			e.preventDefault();
			return e.returnValue = "";
		}
		return;
	};
	const history = createHistory({
		getLocation,
		getLength: () => win.history.length,
		pushState: (href, state) => queueHistoryAction("push", href, state),
		replaceState: (href, state) => queueHistoryAction("replace", href, state),
		back: (ignoreBlocker) => {
			if (ignoreBlocker) skipBlockerNextPop = true;
			ignoreNextBeforeUnload = true;
			return win.history.back();
		},
		forward: (ignoreBlocker) => {
			if (ignoreBlocker) skipBlockerNextPop = true;
			ignoreNextBeforeUnload = true;
			win.history.forward();
		},
		go: (n) => {
			nextPopIsGo = true;
			win.history.go(n);
		},
		createHref: (href) => createHref(href),
		flush,
		destroy: () => {
			win.history.pushState = originalPushState;
			win.history.replaceState = originalReplaceState;
			win.removeEventListener(beforeUnloadEvent, onBeforeUnload, { capture: true });
			win.removeEventListener(popStateEvent, onPushPopEvent);
		},
		onBlocked: () => {
			if (rollbackLocation && currentLocation !== rollbackLocation) currentLocation = rollbackLocation;
		},
		getBlockers: _getBlockers,
		setBlockers: _setBlockers,
		notifyOnIndexChange: false
	});
	win.addEventListener(beforeUnloadEvent, onBeforeUnload, { capture: true });
	win.addEventListener(popStateEvent, onPushPopEvent);
	win.history.pushState = function(...args) {
		const res = originalPushState.apply(win.history, args);
		if (!history._ignoreSubscribers) onPushPop("PUSH");
		return res;
	};
	win.history.replaceState = function(...args) {
		const res = originalReplaceState.apply(win.history, args);
		if (!history._ignoreSubscribers) onPushPop("REPLACE");
		return res;
	};
	return history;
}
function createMemoryHistory(opts = { initialEntries: ["/"] }) {
	const entries = opts.initialEntries;
	let index = opts.initialIndex ? Math.min(Math.max(opts.initialIndex, 0), entries.length - 1) : entries.length - 1;
	const states = entries.map((_entry, index2) => assignKeyAndIndex(index2, void 0));
	const getLocation = () => parseHref(entries[index], states[index]);
	return createHistory({
		getLocation,
		getLength: () => entries.length,
		pushState: (path, state) => {
			if (index < entries.length - 1) {
				entries.splice(index + 1);
				states.splice(index + 1);
			}
			states.push(state);
			entries.push(path);
			index = Math.max(entries.length - 1, 0);
		},
		replaceState: (path, state) => {
			states[index] = state;
			entries[index] = path;
		},
		back: () => {
			index = Math.max(index - 1, 0);
		},
		forward: () => {
			index = Math.min(index + 1, entries.length - 1);
		},
		go: (n) => {
			index = Math.min(Math.max(index + n, 0), entries.length - 1);
		},
		createHref: (path) => path
	});
}
function parseHref(href, state) {
	const hashIndex = href.indexOf("#");
	const searchIndex = href.indexOf("?");
	return {
		href,
		pathname: href.substring(0, hashIndex > 0 ? searchIndex > 0 ? Math.min(hashIndex, searchIndex) : hashIndex : searchIndex > 0 ? searchIndex : href.length),
		hash: hashIndex > -1 ? href.substring(hashIndex) : "",
		search: searchIndex > -1 ? href.slice(searchIndex, hashIndex === -1 ? void 0 : hashIndex) : "",
		state: state || { [stateIndexKey]: 0 }
	};
}
function createRandomKey() {
	return (Math.random() + 1).toString(36).substring(7);
}

//#endregion
//#region node_modules/tiny-invariant/dist/esm/tiny-invariant.js
var isProduction$1 = false;
var prefix = "Invariant failed";
function invariant(condition, message) {
	if (condition) return;
	if (isProduction$1) throw new Error(prefix);
	var provided = typeof message === "function" ? message() : message;
	var value = provided ? "".concat(prefix, ": ").concat(provided) : prefix;
	throw new Error(value);
}

//#endregion
//#region node_modules/tiny-warning/dist/tiny-warning.esm.js
var isProduction = false;
function warning(condition, message) {
	if (!isProduction) {
		if (condition) return;
		var text = "Warning: " + message;
		if (typeof console !== "undefined") console.warn(text);
		try {
			throw Error(text);
		} catch (x) {}
	}
}
var tiny_warning_esm_default = warning;

//#endregion
//#region node_modules/react/cjs/react-jsx-runtime.development.js
var require_react_jsx_runtime_development = __commonJS({ "node_modules/react/cjs/react-jsx-runtime.development.js"(exports) {
	(function() {
		"use strict";
		var React = require_react();
		var REACT_ELEMENT_TYPE = Symbol.for("react.element");
		var REACT_PORTAL_TYPE = Symbol.for("react.portal");
		var REACT_FRAGMENT_TYPE = Symbol.for("react.fragment");
		var REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode");
		var REACT_PROFILER_TYPE = Symbol.for("react.profiler");
		var REACT_PROVIDER_TYPE = Symbol.for("react.provider");
		var REACT_CONTEXT_TYPE = Symbol.for("react.context");
		var REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref");
		var REACT_SUSPENSE_TYPE = Symbol.for("react.suspense");
		var REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list");
		var REACT_MEMO_TYPE = Symbol.for("react.memo");
		var REACT_LAZY_TYPE = Symbol.for("react.lazy");
		var REACT_OFFSCREEN_TYPE = Symbol.for("react.offscreen");
		var MAYBE_ITERATOR_SYMBOL = Symbol.iterator;
		var FAUX_ITERATOR_SYMBOL = "@@iterator";
		function getIteratorFn(maybeIterable) {
			if (maybeIterable === null || typeof maybeIterable !== "object") return null;
			var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];
			if (typeof maybeIterator === "function") return maybeIterator;
			return null;
		}
		var ReactSharedInternals = React.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
		function error(format) {
			{
				for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) args[_key2 - 1] = arguments[_key2];
				printWarning("error", format, args);
			}
		}
		function printWarning(level, format, args) {
			{
				var ReactDebugCurrentFrame$2 = ReactSharedInternals.ReactDebugCurrentFrame;
				var stack = ReactDebugCurrentFrame$2.getStackAddendum();
				if (stack !== "") {
					format += "%s";
					args = args.concat([stack]);
				}
				var argsWithFormat = args.map(function(item) {
					return String(item);
				});
				argsWithFormat.unshift("Warning: " + format);
				Function.prototype.apply.call(console[level], console, argsWithFormat);
			}
		}
		var enableScopeAPI = false;
		var enableCacheElement = false;
		var enableTransitionTracing = false;
		var enableLegacyHidden = false;
		var enableDebugTracing = false;
		var REACT_MODULE_REFERENCE;
		REACT_MODULE_REFERENCE = Symbol.for("react.module.reference");
		function isValidElementType(type) {
			if (typeof type === "string" || typeof type === "function") return true;
			if (type === REACT_FRAGMENT_TYPE || type === REACT_PROFILER_TYPE || enableDebugTracing || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || enableLegacyHidden || type === REACT_OFFSCREEN_TYPE || enableScopeAPI || enableCacheElement || enableTransitionTracing) return true;
			if (typeof type === "object" && type !== null) {
				if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_MODULE_REFERENCE || type.getModuleId !== undefined) return true;
			}
			return false;
		}
		function getWrappedName(outerType, innerType, wrapperName) {
			var displayName = outerType.displayName;
			if (displayName) return displayName;
			var functionName = innerType.displayName || innerType.name || "";
			return functionName !== "" ? wrapperName + "(" + functionName + ")" : wrapperName;
		}
		function getContextName(type) {
			return type.displayName || "Context";
		}
		function getComponentNameFromType(type) {
			if (type == null) return null;
			if (typeof type.tag === "number") error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue.");
			if (typeof type === "function") return type.displayName || type.name || null;
			if (typeof type === "string") return type;
			switch (type) {
				case REACT_FRAGMENT_TYPE: return "Fragment";
				case REACT_PORTAL_TYPE: return "Portal";
				case REACT_PROFILER_TYPE: return "Profiler";
				case REACT_STRICT_MODE_TYPE: return "StrictMode";
				case REACT_SUSPENSE_TYPE: return "Suspense";
				case REACT_SUSPENSE_LIST_TYPE: return "SuspenseList";
			}
			if (typeof type === "object") switch (type.$$typeof) {
				case REACT_CONTEXT_TYPE:
					var context = type;
					return getContextName(context) + ".Consumer";
				case REACT_PROVIDER_TYPE:
					var provider = type;
					return getContextName(provider._context) + ".Provider";
				case REACT_FORWARD_REF_TYPE: return getWrappedName(type, type.render, "ForwardRef");
				case REACT_MEMO_TYPE:
					var outerName = type.displayName || null;
					if (outerName !== null) return outerName;
					return getComponentNameFromType(type.type) || "Memo";
				case REACT_LAZY_TYPE: {
					var lazyComponent = type;
					var payload = lazyComponent._payload;
					var init = lazyComponent._init;
					try {
						return getComponentNameFromType(init(payload));
					} catch (x) {
						return null;
					}
				}
			}
			return null;
		}
		var assign = Object.assign;
		var disabledDepth = 0;
		var prevLog;
		var prevInfo;
		var prevWarn;
		var prevError;
		var prevGroup;
		var prevGroupCollapsed;
		var prevGroupEnd;
		function disabledLog() {}
		disabledLog.__reactDisabledLog = true;
		function disableLogs() {
			{
				if (disabledDepth === 0) {
					prevLog = console.log;
					prevInfo = console.info;
					prevWarn = console.warn;
					prevError = console.error;
					prevGroup = console.group;
					prevGroupCollapsed = console.groupCollapsed;
					prevGroupEnd = console.groupEnd;
					var props = {
						configurable: true,
						enumerable: true,
						value: disabledLog,
						writable: true
					};
					Object.defineProperties(console, {
						info: props,
						log: props,
						warn: props,
						error: props,
						group: props,
						groupCollapsed: props,
						groupEnd: props
					});
				}
				disabledDepth++;
			}
		}
		function reenableLogs() {
			{
				disabledDepth--;
				if (disabledDepth === 0) {
					var props = {
						configurable: true,
						enumerable: true,
						writable: true
					};
					Object.defineProperties(console, {
						log: assign({}, props, { value: prevLog }),
						info: assign({}, props, { value: prevInfo }),
						warn: assign({}, props, { value: prevWarn }),
						error: assign({}, props, { value: prevError }),
						group: assign({}, props, { value: prevGroup }),
						groupCollapsed: assign({}, props, { value: prevGroupCollapsed }),
						groupEnd: assign({}, props, { value: prevGroupEnd })
					});
				}
				if (disabledDepth < 0) error("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
			}
		}
		var ReactCurrentDispatcher = ReactSharedInternals.ReactCurrentDispatcher;
		var prefix$1;
		function describeBuiltInComponentFrame(name, source, ownerFn) {
			{
				if (prefix$1 === undefined) try {
					throw Error();
				} catch (x) {
					var match = x.stack.trim().match(/\n( *(at )?)/);
					prefix$1 = match && match[1] || "";
				}
				return "\n" + prefix$1 + name;
			}
		}
		var reentry = false;
		var componentFrameCache;
		{
			var PossiblyWeakMap = typeof WeakMap === "function" ? WeakMap : Map;
			componentFrameCache = new PossiblyWeakMap();
		}
		function describeNativeComponentFrame(fn, construct) {
			if (!fn || reentry) return "";
			{
				var frame = componentFrameCache.get(fn);
				if (frame !== undefined) return frame;
			}
			var control;
			reentry = true;
			var previousPrepareStackTrace = Error.prepareStackTrace;
			Error.prepareStackTrace = undefined;
			var previousDispatcher;
			{
				previousDispatcher = ReactCurrentDispatcher.current;
				ReactCurrentDispatcher.current = null;
				disableLogs();
			}
			try {
				if (construct) {
					var Fake = function() {
						throw Error();
					};
					Object.defineProperty(Fake.prototype, "props", { set: function() {
						throw Error();
					} });
					if (typeof Reflect === "object" && Reflect.construct) {
						try {
							Reflect.construct(Fake, []);
						} catch (x) {
							control = x;
						}
						Reflect.construct(fn, [], Fake);
					} else {
						try {
							Fake.call();
						} catch (x) {
							control = x;
						}
						fn.call(Fake.prototype);
					}
				} else {
					try {
						throw Error();
					} catch (x) {
						control = x;
					}
					fn();
				}
			} catch (sample) {
				if (sample && control && typeof sample.stack === "string") {
					var sampleLines = sample.stack.split("\n");
					var controlLines = control.stack.split("\n");
					var s = sampleLines.length - 1;
					var c = controlLines.length - 1;
					while (s >= 1 && c >= 0 && sampleLines[s] !== controlLines[c]) c--;
					for (; s >= 1 && c >= 0; s--, c--) if (sampleLines[s] !== controlLines[c]) {
						if (s !== 1 || c !== 1) do {
							s--;
							c--;
							if (c < 0 || sampleLines[s] !== controlLines[c]) {
								var _frame = "\n" + sampleLines[s].replace(" at new ", " at ");
								if (fn.displayName && _frame.includes("<anonymous>")) _frame = _frame.replace("<anonymous>", fn.displayName);
								if (typeof fn === "function") componentFrameCache.set(fn, _frame);
								return _frame;
							}
						} while (s >= 1 && c >= 0);
						break;
					}
				}
			} finally {
				reentry = false;
				{
					ReactCurrentDispatcher.current = previousDispatcher;
					reenableLogs();
				}
				Error.prepareStackTrace = previousPrepareStackTrace;
			}
			var name = fn ? fn.displayName || fn.name : "";
			var syntheticFrame = name ? describeBuiltInComponentFrame(name) : "";
			if (typeof fn === "function") componentFrameCache.set(fn, syntheticFrame);
			return syntheticFrame;
		}
		function describeFunctionComponentFrame(fn, source, ownerFn) {
			return describeNativeComponentFrame(fn, false);
		}
		function shouldConstruct(Component) {
			var prototype = Component.prototype;
			return !!(prototype && prototype.isReactComponent);
		}
		function describeUnknownElementTypeFrameInDEV(type, source, ownerFn) {
			if (type == null) return "";
			if (typeof type === "function") return describeNativeComponentFrame(type, shouldConstruct(type));
			if (typeof type === "string") return describeBuiltInComponentFrame(type);
			switch (type) {
				case REACT_SUSPENSE_TYPE: return describeBuiltInComponentFrame("Suspense");
				case REACT_SUSPENSE_LIST_TYPE: return describeBuiltInComponentFrame("SuspenseList");
			}
			if (typeof type === "object") switch (type.$$typeof) {
				case REACT_FORWARD_REF_TYPE: return describeFunctionComponentFrame(type.render);
				case REACT_MEMO_TYPE: return describeUnknownElementTypeFrameInDEV(type.type, source, ownerFn);
				case REACT_LAZY_TYPE: {
					var lazyComponent = type;
					var payload = lazyComponent._payload;
					var init = lazyComponent._init;
					try {
						return describeUnknownElementTypeFrameInDEV(init(payload), source, ownerFn);
					} catch (x) {}
				}
			}
			return "";
		}
		var hasOwnProperty = Object.prototype.hasOwnProperty;
		var loggedTypeFailures = {};
		var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
		function setCurrentlyValidatingElement(element) {
			if (element) {
				var owner = element._owner;
				var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
				ReactDebugCurrentFrame.setExtraStackFrame(stack);
			} else ReactDebugCurrentFrame.setExtraStackFrame(null);
		}
		function checkPropTypes(typeSpecs, values, location, componentName, element) {
			{
				var has = Function.call.bind(hasOwnProperty);
				for (var typeSpecName in typeSpecs) if (has(typeSpecs, typeSpecName)) {
					var error$1 = void 0;
					try {
						if (typeof typeSpecs[typeSpecName] !== "function") {
							var err = Error((componentName || "React class") + ": " + location + " type `" + typeSpecName + "` is invalid; " + "it must be a function, usually from the `prop-types` package, but received `" + typeof typeSpecs[typeSpecName] + "`." + "This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
							err.name = "Invariant Violation";
							throw err;
						}
						error$1 = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
					} catch (ex) {
						error$1 = ex;
					}
					if (error$1 && !(error$1 instanceof Error)) {
						setCurrentlyValidatingElement(element);
						error("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", componentName || "React class", location, typeSpecName, typeof error$1);
						setCurrentlyValidatingElement(null);
					}
					if (error$1 instanceof Error && !(error$1.message in loggedTypeFailures)) {
						loggedTypeFailures[error$1.message] = true;
						setCurrentlyValidatingElement(element);
						error("Failed %s type: %s", location, error$1.message);
						setCurrentlyValidatingElement(null);
					}
				}
			}
		}
		var isArrayImpl = Array.isArray;
		function isArray(a) {
			return isArrayImpl(a);
		}
		function typeName(value) {
			{
				var hasToStringTag = typeof Symbol === "function" && Symbol.toStringTag;
				var type = hasToStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
				return type;
			}
		}
		function willCoercionThrow(value) {
			try {
				testStringCoercion(value);
				return false;
			} catch (e) {
				return true;
			}
		}
		function testStringCoercion(value) {
			return "" + value;
		}
		function checkKeyStringCoercion(value) {
			if (willCoercionThrow(value)) {
				error("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", typeName(value));
				return testStringCoercion(value);
			}
		}
		var ReactCurrentOwner = ReactSharedInternals.ReactCurrentOwner;
		var RESERVED_PROPS = {
			key: true,
			ref: true,
			__self: true,
			__source: true
		};
		var specialPropKeyWarningShown;
		var specialPropRefWarningShown;
		var didWarnAboutStringRefs;
		didWarnAboutStringRefs = {};
		function hasValidRef(config) {
			if (hasOwnProperty.call(config, "ref")) {
				var getter = Object.getOwnPropertyDescriptor(config, "ref").get;
				if (getter && getter.isReactWarning) return false;
			}
			return config.ref !== undefined;
		}
		function hasValidKey(config) {
			if (hasOwnProperty.call(config, "key")) {
				var getter = Object.getOwnPropertyDescriptor(config, "key").get;
				if (getter && getter.isReactWarning) return false;
			}
			return config.key !== undefined;
		}
		function warnIfStringRefCannotBeAutoConverted(config, self) {
			if (typeof config.ref === "string" && ReactCurrentOwner.current && self && ReactCurrentOwner.current.stateNode !== self) {
				var componentName = getComponentNameFromType(ReactCurrentOwner.current.type);
				if (!didWarnAboutStringRefs[componentName]) {
					error("Component \"%s\" contains the string ref \"%s\". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref", getComponentNameFromType(ReactCurrentOwner.current.type), config.ref);
					didWarnAboutStringRefs[componentName] = true;
				}
			}
		}
		function defineKeyPropWarningGetter(props, displayName) {
			{
				var warnAboutAccessingKey = function() {
					if (!specialPropKeyWarningShown) {
						specialPropKeyWarningShown = true;
						error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", displayName);
					}
				};
				warnAboutAccessingKey.isReactWarning = true;
				Object.defineProperty(props, "key", {
					get: warnAboutAccessingKey,
					configurable: true
				});
			}
		}
		function defineRefPropWarningGetter(props, displayName) {
			{
				var warnAboutAccessingRef = function() {
					if (!specialPropRefWarningShown) {
						specialPropRefWarningShown = true;
						error("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", displayName);
					}
				};
				warnAboutAccessingRef.isReactWarning = true;
				Object.defineProperty(props, "ref", {
					get: warnAboutAccessingRef,
					configurable: true
				});
			}
		}
		/**
		* Factory method to create a new React element. This no longer adheres to
		* the class pattern, so do not use new to call it. Also, instanceof check
		* will not work. Instead test $$typeof field against Symbol.for('react.element') to check
		* if something is a React Element.
		*
		* @param {*} type
		* @param {*} props
		* @param {*} key
		* @param {string|object} ref
		* @param {*} owner
		* @param {*} self A *temporary* helper to detect places where `this` is
		* different from the `owner` when React.createElement is called, so that we
		* can warn. We want to get rid of owner and replace string `ref`s with arrow
		* functions, and as long as `this` and owner are the same, there will be no
		* change in behavior.
		* @param {*} source An annotation object (added by a transpiler or otherwise)
		* indicating filename, line number, and/or other information.
		* @internal
		*/
		var ReactElement = function(type, key, ref, self, source, owner, props) {
			var element = {
				$$typeof: REACT_ELEMENT_TYPE,
				type,
				key,
				ref,
				props,
				_owner: owner
			};
			{
				element._store = {};
				Object.defineProperty(element._store, "validated", {
					configurable: false,
					enumerable: false,
					writable: true,
					value: false
				});
				Object.defineProperty(element, "_self", {
					configurable: false,
					enumerable: false,
					writable: false,
					value: self
				});
				Object.defineProperty(element, "_source", {
					configurable: false,
					enumerable: false,
					writable: false,
					value: source
				});
				if (Object.freeze) {
					Object.freeze(element.props);
					Object.freeze(element);
				}
			}
			return element;
		};
		/**
		* https://github.com/reactjs/rfcs/pull/107
		* @param {*} type
		* @param {object} props
		* @param {string} key
		*/
		function jsxDEV(type, config, maybeKey, source, self) {
			{
				var propName;
				var props = {};
				var key = null;
				var ref = null;
				if (maybeKey !== undefined) {
					checkKeyStringCoercion(maybeKey);
					key = "" + maybeKey;
				}
				if (hasValidKey(config)) {
					checkKeyStringCoercion(config.key);
					key = "" + config.key;
				}
				if (hasValidRef(config)) {
					ref = config.ref;
					warnIfStringRefCannotBeAutoConverted(config, self);
				}
				for (propName in config) if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) props[propName] = config[propName];
				if (type && type.defaultProps) {
					var defaultProps = type.defaultProps;
					for (propName in defaultProps) if (props[propName] === undefined) props[propName] = defaultProps[propName];
				}
				if (key || ref) {
					var displayName = typeof type === "function" ? type.displayName || type.name || "Unknown" : type;
					if (key) defineKeyPropWarningGetter(props, displayName);
					if (ref) defineRefPropWarningGetter(props, displayName);
				}
				return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
			}
		}
		var ReactCurrentOwner$1 = ReactSharedInternals.ReactCurrentOwner;
		var ReactDebugCurrentFrame$1 = ReactSharedInternals.ReactDebugCurrentFrame;
		function setCurrentlyValidatingElement$1(element) {
			if (element) {
				var owner = element._owner;
				var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
				ReactDebugCurrentFrame$1.setExtraStackFrame(stack);
			} else ReactDebugCurrentFrame$1.setExtraStackFrame(null);
		}
		var propTypesMisspellWarningShown;
		propTypesMisspellWarningShown = false;
		/**
		* Verifies the object is a ReactElement.
		* See https://reactjs.org/docs/react-api.html#isvalidelement
		* @param {?object} object
		* @return {boolean} True if `object` is a ReactElement.
		* @final
		*/
		function isValidElement(object) {
			return typeof object === "object" && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
		}
		function getDeclarationErrorAddendum() {
			{
				if (ReactCurrentOwner$1.current) {
					var name = getComponentNameFromType(ReactCurrentOwner$1.current.type);
					if (name) return "\n\nCheck the render method of `" + name + "`.";
				}
				return "";
			}
		}
		function getSourceInfoErrorAddendum(source) {
			{
				if (source !== undefined) {
					var fileName = source.fileName.replace(/^.*[\\\/]/, "");
					var lineNumber = source.lineNumber;
					return "\n\nCheck your code at " + fileName + ":" + lineNumber + ".";
				}
				return "";
			}
		}
		/**
		* Warn if there's no key explicitly set on dynamic arrays of children or
		* object keys are not valid. This allows us to keep track of children between
		* updates.
		*/
		var ownerHasKeyUseWarning = {};
		function getCurrentComponentErrorInfo(parentType) {
			{
				var info = getDeclarationErrorAddendum();
				if (!info) {
					var parentName = typeof parentType === "string" ? parentType : parentType.displayName || parentType.name;
					if (parentName) info = "\n\nCheck the top-level render call using <" + parentName + ">.";
				}
				return info;
			}
		}
		/**
		* Warn if the element doesn't have an explicit key assigned to it.
		* This element is in an array. The array could grow and shrink or be
		* reordered. All children that haven't already been validated are required to
		* have a "key" property assigned to it. Error statuses are cached so a warning
		* will only be shown once.
		*
		* @internal
		* @param {ReactElement} element Element that requires a key.
		* @param {*} parentType element's parent's type.
		*/
		function validateExplicitKey(element, parentType) {
			{
				if (!element._store || element._store.validated || element.key != null) return;
				element._store.validated = true;
				var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);
				if (ownerHasKeyUseWarning[currentComponentErrorInfo]) return;
				ownerHasKeyUseWarning[currentComponentErrorInfo] = true;
				var childOwner = "";
				if (element && element._owner && element._owner !== ReactCurrentOwner$1.current) childOwner = " It was passed a child from " + getComponentNameFromType(element._owner.type) + ".";
				setCurrentlyValidatingElement$1(element);
				error("Each child in a list should have a unique \"key\" prop.%s%s See https://reactjs.org/link/warning-keys for more information.", currentComponentErrorInfo, childOwner);
				setCurrentlyValidatingElement$1(null);
			}
		}
		/**
		* Ensure that every element either is passed in a static location, in an
		* array with an explicit keys property defined, or in an object literal
		* with valid key property.
		*
		* @internal
		* @param {ReactNode} node Statically passed child of any type.
		* @param {*} parentType node's parent's type.
		*/
		function validateChildKeys(node, parentType) {
			{
				if (typeof node !== "object") return;
				if (isArray(node)) for (var i$1 = 0; i$1 < node.length; i$1++) {
					var child = node[i$1];
					if (isValidElement(child)) validateExplicitKey(child, parentType);
				}
else if (isValidElement(node)) {
					if (node._store) node._store.validated = true;
				} else if (node) {
					var iteratorFn = getIteratorFn(node);
					if (typeof iteratorFn === "function") {
						if (iteratorFn !== node.entries) {
							var iterator = iteratorFn.call(node);
							var step;
							while (!(step = iterator.next()).done) if (isValidElement(step.value)) validateExplicitKey(step.value, parentType);
						}
					}
				}
			}
		}
		/**
		* Given an element, validate that its props follow the propTypes definition,
		* provided by the type.
		*
		* @param {ReactElement} element
		*/
		function validatePropTypes(element) {
			{
				var type = element.type;
				if (type === null || type === undefined || typeof type === "string") return;
				var propTypes;
				if (typeof type === "function") propTypes = type.propTypes;
else if (typeof type === "object" && (type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_MEMO_TYPE)) propTypes = type.propTypes;
else return;
				if (propTypes) {
					var name = getComponentNameFromType(type);
					checkPropTypes(propTypes, element.props, "prop", name, element);
				} else if (type.PropTypes !== undefined && !propTypesMisspellWarningShown) {
					propTypesMisspellWarningShown = true;
					var _name = getComponentNameFromType(type);
					error("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", _name || "Unknown");
				}
				if (typeof type.getDefaultProps === "function" && !type.getDefaultProps.isReactClassApproved) error("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
			}
		}
		/**
		* Given a fragment, validate that it can only be provided with fragment props
		* @param {ReactElement} fragment
		*/
		function validateFragmentProps(fragment) {
			{
				var keys = Object.keys(fragment.props);
				for (var i$1 = 0; i$1 < keys.length; i$1++) {
					var key = keys[i$1];
					if (key !== "children" && key !== "key") {
						setCurrentlyValidatingElement$1(fragment);
						error("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", key);
						setCurrentlyValidatingElement$1(null);
						break;
					}
				}
				if (fragment.ref !== null) {
					setCurrentlyValidatingElement$1(fragment);
					error("Invalid attribute `ref` supplied to `React.Fragment`.");
					setCurrentlyValidatingElement$1(null);
				}
			}
		}
		var didWarnAboutKeySpread = {};
		function jsxWithValidation(type, props, key, isStaticChildren, source, self) {
			{
				var validType = isValidElementType(type);
				if (!validType) {
					var info = "";
					if (type === undefined || typeof type === "object" && type !== null && Object.keys(type).length === 0) info += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.";
					var sourceInfo = getSourceInfoErrorAddendum(source);
					if (sourceInfo) info += sourceInfo;
else info += getDeclarationErrorAddendum();
					var typeString;
					if (type === null) typeString = "null";
else if (isArray(type)) typeString = "array";
else if (type !== undefined && type.$$typeof === REACT_ELEMENT_TYPE) {
						typeString = "<" + (getComponentNameFromType(type.type) || "Unknown") + " />";
						info = " Did you accidentally export a JSX literal instead of a component?";
					} else typeString = typeof type;
					error("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", typeString, info);
				}
				var element = jsxDEV(type, props, key, source, self);
				if (element == null) return element;
				if (validType) {
					var children = props.children;
					if (children !== undefined) if (isStaticChildren) if (isArray(children)) {
						for (var i$1 = 0; i$1 < children.length; i$1++) validateChildKeys(children[i$1], type);
						if (Object.freeze) Object.freeze(children);
					} else error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
else validateChildKeys(children, type);
				}
				if (hasOwnProperty.call(props, "key")) {
					var componentName = getComponentNameFromType(type);
					var keys = Object.keys(props).filter(function(k) {
						return k !== "key";
					});
					var beforeExample = keys.length > 0 ? "{key: someKey, " + keys.join(": ..., ") + ": ...}" : "{key: someKey}";
					if (!didWarnAboutKeySpread[componentName + beforeExample]) {
						var afterExample = keys.length > 0 ? "{" + keys.join(": ..., ") + ": ...}" : "{}";
						error("A props object containing a \"key\" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />", beforeExample, componentName, afterExample, componentName);
						didWarnAboutKeySpread[componentName + beforeExample] = true;
					}
				}
				if (type === REACT_FRAGMENT_TYPE) validateFragmentProps(element);
else validatePropTypes(element);
				return element;
			}
		}
		function jsxWithValidationStatic(type, props, key) {
			return jsxWithValidation(type, props, key, true);
		}
		function jsxWithValidationDynamic(type, props, key) {
			return jsxWithValidation(type, props, key, false);
		}
		var jsx$8 = jsxWithValidationDynamic;
		var jsxs$3 = jsxWithValidationStatic;
		exports.Fragment = REACT_FRAGMENT_TYPE;
		exports.jsx = jsx$8;
		exports.jsxs = jsxs$3;
	})();
} });

//#endregion
//#region node_modules/react/jsx-runtime.js
var require_jsx_runtime = __commonJS({ "node_modules/react/jsx-runtime.js"(exports, module) {
	module.exports = require_react_jsx_runtime_development();
} });

//#endregion
//#region node_modules/@tanstack/react-router/dist/esm/routerContext.js
var import_react$12 = __toESM(require_react(), 1);
const routerContext = import_react$12.createContext(null);
function getRouterContext() {
	if (typeof document === "undefined") return routerContext;
	if (window.__TSR_ROUTER_CONTEXT__) return window.__TSR_ROUTER_CONTEXT__;
	window.__TSR_ROUTER_CONTEXT__ = routerContext;
	return routerContext;
}

//#endregion
//#region node_modules/@tanstack/react-router/dist/esm/useRouter.js
var import_react$11 = __toESM(require_react(), 1);
function useRouter(opts) {
	const value = import_react$11.useContext(getRouterContext());
	tiny_warning_esm_default(!(((opts == null ? void 0 : opts.warn) ?? true) && !value), "useRouter must be used inside a <RouterProvider> component!");
	return value;
}

//#endregion
//#region node_modules/use-sync-external-store/cjs/use-sync-external-store-shim.development.js
var require_use_sync_external_store_shim_development = __commonJS({ "node_modules/use-sync-external-store/cjs/use-sync-external-store-shim.development.js"(exports) {
	(function() {
		function is(x, y) {
			return x === y && (0 !== x || 1 / x === 1 / y) || x !== x && y !== y;
		}
		function useSyncExternalStore$2(subscribe, getSnapshot) {
			didWarnOld18Alpha || void 0 === React.startTransition || (didWarnOld18Alpha = !0, console.error("You are using an outdated, pre-release alpha of React 18 that does not support useSyncExternalStore. The use-sync-external-store shim will not work correctly. Upgrade to a newer pre-release."));
			var value = getSnapshot();
			if (!didWarnUncachedGetSnapshot) {
				var cachedValue = getSnapshot();
				objectIs(value, cachedValue) || (console.error("The result of getSnapshot should be cached to avoid an infinite loop"), didWarnUncachedGetSnapshot = !0);
			}
			cachedValue = useState$1({ inst: {
				value,
				getSnapshot
			} });
			var inst = cachedValue[0].inst, forceUpdate = cachedValue[1];
			useLayoutEffect$1(function() {
				inst.value = value;
				inst.getSnapshot = getSnapshot;
				checkIfSnapshotChanged(inst) && forceUpdate({ inst });
			}, [
				subscribe,
				value,
				getSnapshot
			]);
			useEffect(function() {
				checkIfSnapshotChanged(inst) && forceUpdate({ inst });
				return subscribe(function() {
					checkIfSnapshotChanged(inst) && forceUpdate({ inst });
				});
			}, [subscribe]);
			useDebugValue(value);
			return value;
		}
		function checkIfSnapshotChanged(inst) {
			var latestGetSnapshot = inst.getSnapshot;
			inst = inst.value;
			try {
				var nextValue = latestGetSnapshot();
				return !objectIs(inst, nextValue);
			} catch (error) {
				return !0;
			}
		}
		function useSyncExternalStore$1(subscribe, getSnapshot) {
			return getSnapshot();
		}
		"undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
		var React = require_react(), objectIs = "function" === typeof Object.is ? Object.is : is, useState$1 = React.useState, useEffect = React.useEffect, useLayoutEffect$1 = React.useLayoutEffect, useDebugValue = React.useDebugValue, didWarnOld18Alpha = !1, didWarnUncachedGetSnapshot = !1, shim = "undefined" === typeof window || "undefined" === typeof window.document || "undefined" === typeof window.document.createElement ? useSyncExternalStore$1 : useSyncExternalStore$2;
		exports.useSyncExternalStore = void 0 !== React.useSyncExternalStore ? React.useSyncExternalStore : shim;
		"undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
	})();
} });

//#endregion
//#region node_modules/use-sync-external-store/shim/index.js
var require_shim = __commonJS({ "node_modules/use-sync-external-store/shim/index.js"(exports, module) {
	module.exports = require_use_sync_external_store_shim_development();
} });

//#endregion
//#region node_modules/use-sync-external-store/cjs/use-sync-external-store-shim/with-selector.development.js
var require_with_selector_development = __commonJS({ "node_modules/use-sync-external-store/cjs/use-sync-external-store-shim/with-selector.development.js"(exports) {
	(function() {
		function is(x, y) {
			return x === y && (0 !== x || 1 / x === 1 / y) || x !== x && y !== y;
		}
		"undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
		var React = require_react(), shim = require_shim(), objectIs = "function" === typeof Object.is ? Object.is : is, useSyncExternalStore = shim.useSyncExternalStore, useRef$1 = React.useRef, useEffect = React.useEffect, useMemo = React.useMemo, useDebugValue = React.useDebugValue;
		exports.useSyncExternalStoreWithSelector = function(subscribe, getSnapshot, getServerSnapshot, selector, isEqual) {
			var instRef = useRef$1(null);
			if (null === instRef.current) {
				var inst = {
					hasValue: !1,
					value: null
				};
				instRef.current = inst;
			} else inst = instRef.current;
			instRef = useMemo(function() {
				function memoizedSelector(nextSnapshot) {
					if (!hasMemo) {
						hasMemo = !0;
						memoizedSnapshot = nextSnapshot;
						nextSnapshot = selector(nextSnapshot);
						if (void 0 !== isEqual && inst.hasValue) {
							var currentSelection = inst.value;
							if (isEqual(currentSelection, nextSnapshot)) return memoizedSelection = currentSelection;
						}
						return memoizedSelection = nextSnapshot;
					}
					currentSelection = memoizedSelection;
					if (objectIs(memoizedSnapshot, nextSnapshot)) return currentSelection;
					var nextSelection = selector(nextSnapshot);
					if (void 0 !== isEqual && isEqual(currentSelection, nextSelection)) return memoizedSnapshot = nextSnapshot, currentSelection;
					memoizedSnapshot = nextSnapshot;
					return memoizedSelection = nextSelection;
				}
				var hasMemo = !1, memoizedSnapshot, memoizedSelection, maybeGetServerSnapshot = void 0 === getServerSnapshot ? null : getServerSnapshot;
				return [function() {
					return memoizedSelector(getSnapshot());
				}, null === maybeGetServerSnapshot ? void 0 : function() {
					return memoizedSelector(maybeGetServerSnapshot());
				}];
			}, [
				getSnapshot,
				getServerSnapshot,
				selector,
				isEqual
			]);
			var value = useSyncExternalStore(subscribe, instRef[0], instRef[1]);
			useEffect(function() {
				inst.hasValue = !0;
				inst.value = value;
			}, [value]);
			useDebugValue(value);
			return value;
		};
		"undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
	})();
} });

//#endregion
//#region node_modules/use-sync-external-store/shim/with-selector.js
var require_with_selector = __commonJS({ "node_modules/use-sync-external-store/shim/with-selector.js"(exports, module) {
	module.exports = require_with_selector_development();
} });

//#endregion
//#region node_modules/@tanstack/store/dist/esm/scheduler.js
const __storeToDerived = /* @__PURE__ */ new WeakMap();
const __derivedToStore = /* @__PURE__ */ new WeakMap();
const __depsThatHaveWrittenThisTick = { current: [] };
let __isFlushing = false;
let __batchDepth = 0;
const __pendingUpdates = /* @__PURE__ */ new Set();
const __initialBatchValues = /* @__PURE__ */ new Map();
function __flush_internals(relatedVals) {
	const sorted = Array.from(relatedVals).sort((a, b) => {
		if (a instanceof Derived && a.options.deps.includes(b)) return 1;
		if (b instanceof Derived && b.options.deps.includes(a)) return -1;
		return 0;
	});
	for (const derived of sorted) {
		if (__depsThatHaveWrittenThisTick.current.includes(derived)) continue;
		__depsThatHaveWrittenThisTick.current.push(derived);
		derived.recompute();
		const stores = __derivedToStore.get(derived);
		if (stores) for (const store of stores) {
			const relatedLinkedDerivedVals = __storeToDerived.get(store);
			if (!relatedLinkedDerivedVals) continue;
			__flush_internals(relatedLinkedDerivedVals);
		}
	}
}
function __notifyListeners(store) {
	store.listeners.forEach((listener) => listener({
		prevVal: store.prevState,
		currentVal: store.state
	}));
}
function __notifyDerivedListeners(derived) {
	derived.listeners.forEach((listener) => listener({
		prevVal: derived.prevState,
		currentVal: derived.state
	}));
}
function __flush(store) {
	if (__batchDepth > 0 && !__initialBatchValues.has(store)) __initialBatchValues.set(store, store.prevState);
	__pendingUpdates.add(store);
	if (__batchDepth > 0) return;
	if (__isFlushing) return;
	try {
		__isFlushing = true;
		while (__pendingUpdates.size > 0) {
			const stores = Array.from(__pendingUpdates);
			__pendingUpdates.clear();
			for (const store2 of stores) {
				const prevState = __initialBatchValues.get(store2) ?? store2.prevState;
				store2.prevState = prevState;
				__notifyListeners(store2);
			}
			for (const store2 of stores) {
				const derivedVals = __storeToDerived.get(store2);
				if (!derivedVals) continue;
				__depsThatHaveWrittenThisTick.current.push(store2);
				__flush_internals(derivedVals);
			}
			for (const store2 of stores) {
				const derivedVals = __storeToDerived.get(store2);
				if (!derivedVals) continue;
				for (const derived of derivedVals) __notifyDerivedListeners(derived);
			}
		}
	} finally {
		__isFlushing = false;
		__depsThatHaveWrittenThisTick.current = [];
		__initialBatchValues.clear();
	}
}
function batch(fn) {
	__batchDepth++;
	try {
		fn();
	} finally {
		__batchDepth--;
		if (__batchDepth === 0) {
			const pendingUpdateToFlush = Array.from(__pendingUpdates)[0];
			if (pendingUpdateToFlush) __flush(pendingUpdateToFlush);
		}
	}
}

//#endregion
//#region node_modules/@tanstack/store/dist/esm/store.js
var Store = class {
	constructor(initialState, options) {
		this.listeners = /* @__PURE__ */ new Set();
		this.subscribe = (listener) => {
			var _a, _b;
			this.listeners.add(listener);
			const unsub = (_b = (_a = this.options) == null ? void 0 : _a.onSubscribe) == null ? void 0 : _b.call(_a, listener, this);
			return () => {
				this.listeners.delete(listener);
				unsub == null ? void 0 : unsub();
			};
		};
		this.setState = (updater) => {
			var _a, _b, _c;
			this.prevState = this.state;
			this.state = ((_a = this.options) == null ? void 0 : _a.updateFn) ? this.options.updateFn(this.prevState)(updater) : updater(this.prevState);
			(_c = (_b = this.options) == null ? void 0 : _b.onUpdate) == null ? void 0 : _c.call(_b);
			__flush(this);
		};
		this.prevState = initialState;
		this.state = initialState;
		this.options = options;
	}
};

//#endregion
//#region node_modules/@tanstack/store/dist/esm/derived.js
var Derived = class Derived {
	constructor(options) {
		this.listeners = /* @__PURE__ */ new Set();
		this._subscriptions = [];
		this.lastSeenDepValues = [];
		this.getDepVals = () => {
			const prevDepVals = [];
			const currDepVals = [];
			for (const dep of this.options.deps) {
				prevDepVals.push(dep.prevState);
				currDepVals.push(dep.state);
			}
			this.lastSeenDepValues = currDepVals;
			return {
				prevDepVals,
				currDepVals,
				prevVal: this.prevState ?? void 0
			};
		};
		this.recompute = () => {
			var _a, _b;
			this.prevState = this.state;
			const { prevDepVals, currDepVals, prevVal } = this.getDepVals();
			this.state = this.options.fn({
				prevDepVals,
				currDepVals,
				prevVal
			});
			(_b = (_a = this.options).onUpdate) == null ? void 0 : _b.call(_a);
		};
		this.checkIfRecalculationNeededDeeply = () => {
			for (const dep of this.options.deps) if (dep instanceof Derived) dep.checkIfRecalculationNeededDeeply();
			let shouldRecompute = false;
			const lastSeenDepValues = this.lastSeenDepValues;
			const { currDepVals } = this.getDepVals();
			for (let i$1 = 0; i$1 < currDepVals.length; i$1++) if (currDepVals[i$1] !== lastSeenDepValues[i$1]) {
				shouldRecompute = true;
				break;
			}
			if (shouldRecompute) this.recompute();
		};
		this.mount = () => {
			this.registerOnGraph();
			this.checkIfRecalculationNeededDeeply();
			return () => {
				this.unregisterFromGraph();
				for (const cleanup of this._subscriptions) cleanup();
			};
		};
		this.subscribe = (listener) => {
			var _a, _b;
			this.listeners.add(listener);
			const unsub = (_b = (_a = this.options).onSubscribe) == null ? void 0 : _b.call(_a, listener, this);
			return () => {
				this.listeners.delete(listener);
				unsub == null ? void 0 : unsub();
			};
		};
		this.options = options;
		this.state = options.fn({
			prevDepVals: void 0,
			prevVal: void 0,
			currDepVals: this.getDepVals().currDepVals
		});
	}
	registerOnGraph(deps = this.options.deps) {
		for (const dep of deps) if (dep instanceof Derived) {
			dep.registerOnGraph();
			this.registerOnGraph(dep.options.deps);
		} else if (dep instanceof Store) {
			let relatedLinkedDerivedVals = __storeToDerived.get(dep);
			if (!relatedLinkedDerivedVals) {
				relatedLinkedDerivedVals = /* @__PURE__ */ new Set();
				__storeToDerived.set(dep, relatedLinkedDerivedVals);
			}
			relatedLinkedDerivedVals.add(this);
			let relatedStores = __derivedToStore.get(this);
			if (!relatedStores) {
				relatedStores = /* @__PURE__ */ new Set();
				__derivedToStore.set(this, relatedStores);
			}
			relatedStores.add(dep);
		}
	}
	unregisterFromGraph(deps = this.options.deps) {
		for (const dep of deps) if (dep instanceof Derived) this.unregisterFromGraph(dep.options.deps);
else if (dep instanceof Store) {
			const relatedLinkedDerivedVals = __storeToDerived.get(dep);
			if (relatedLinkedDerivedVals) relatedLinkedDerivedVals.delete(this);
			const relatedStores = __derivedToStore.get(this);
			if (relatedStores) relatedStores.delete(dep);
		}
	}
};

//#endregion
//#region node_modules/@tanstack/react-store/dist/esm/index.js
var import_with_selector = __toESM(require_with_selector(), 1);
function useStore(store, selector = (d) => d) {
	const slice = (0, import_with_selector.useSyncExternalStoreWithSelector)(store.subscribe, () => store.state, () => store.state, selector, shallow);
	return slice;
}
function shallow(objA, objB) {
	if (Object.is(objA, objB)) return true;
	if (typeof objA !== "object" || objA === null || typeof objB !== "object" || objB === null) return false;
	if (objA instanceof Map && objB instanceof Map) {
		if (objA.size !== objB.size) return false;
		for (const [k, v] of objA) if (!objB.has(k) || !Object.is(v, objB.get(k))) return false;
		return true;
	}
	if (objA instanceof Set && objB instanceof Set) {
		if (objA.size !== objB.size) return false;
		for (const v of objA) if (!objB.has(v)) return false;
		return true;
	}
	const keysA = Object.keys(objA);
	if (keysA.length !== Object.keys(objB).length) return false;
	for (let i$1 = 0; i$1 < keysA.length; i$1++) if (!Object.prototype.hasOwnProperty.call(objB, keysA[i$1]) || !Object.is(objA[keysA[i$1]], objB[keysA[i$1]])) return false;
	return true;
}

//#endregion
//#region node_modules/@tanstack/react-router/dist/esm/root.js
const rootRouteId = "__root__";

//#endregion
//#region node_modules/@tanstack/react-router/dist/esm/qss.js
function encode(obj, pfx) {
	let k, i$1, tmp, str = "";
	for (k in obj) if ((tmp = obj[k]) !== void 0) if (Array.isArray(tmp)) for (i$1 = 0; i$1 < tmp.length; i$1++) {
		str && (str += "&");
		str += encodeURIComponent(k) + "=" + encodeURIComponent(tmp[i$1]);
	}
else {
		str && (str += "&");
		str += encodeURIComponent(k) + "=" + encodeURIComponent(tmp);
	}
	return (pfx || "") + str;
}
function toValue(mix) {
	if (!mix) return "";
	const str = decodeURIComponent(mix);
	if (str === "false") return false;
	if (str === "true") return true;
	return +str * 0 === 0 && +str + "" === str ? +str : str;
}
function decode(str, pfx) {
	let tmp, k;
	const out = {}, arr = (pfx ? str.substr(pfx.length) : str).split("&");
	while (tmp = arr.shift()) {
		const equalIndex = tmp.indexOf("=");
		if (equalIndex !== -1) {
			k = tmp.slice(0, equalIndex);
			k = decodeURIComponent(k);
			const value = tmp.slice(equalIndex + 1);
			if (out[k] !== void 0) out[k] = [].concat(out[k], toValue(value));
else out[k] = toValue(value);
		} else {
			k = tmp;
			k = decodeURIComponent(k);
			out[k] = "";
		}
	}
	return out;
}

//#endregion
//#region node_modules/@tanstack/react-router/dist/esm/searchParams.js
const defaultParseSearch = parseSearchWith(JSON.parse);
const defaultStringifySearch = stringifySearchWith(JSON.stringify, JSON.parse);
function parseSearchWith(parser) {
	return (searchStr) => {
		if (searchStr.substring(0, 1) === "?") searchStr = searchStr.substring(1);
		const query = decode(searchStr);
		for (const key in query) {
			const value = query[key];
			if (typeof value === "string") try {
				query[key] = parser(value);
			} catch (err) {}
		}
		return query;
	};
}
function stringifySearchWith(stringify, parser) {
	function stringifyValue(val) {
		if (typeof val === "object" && val !== null) try {
			return stringify(val);
		} catch (err) {}
else if (typeof val === "string" && typeof parser === "function") try {
			parser(val);
			return stringify(val);
		} catch (err) {}
		return val;
	}
	return (search) => {
		search = { ...search };
		Object.keys(search).forEach((key) => {
			const val = search[key];
			if (typeof val === "undefined" || val === void 0) delete search[key];
else search[key] = stringifyValue(val);
		});
		const searchStr = encode(search).toString();
		return searchStr ? `?${searchStr}` : "";
	};
}

//#endregion
//#region node_modules/@tanstack/react-router/dist/esm/utils.js
var import_react$10 = __toESM(require_react(), 1);
function last(arr) {
	return arr[arr.length - 1];
}
function isFunction(d) {
	return typeof d === "function";
}
function functionalUpdate(updater, previous) {
	if (isFunction(updater)) return updater(previous);
	return updater;
}
function pick(parent, keys) {
	return keys.reduce((obj, key) => {
		obj[key] = parent[key];
		return obj;
	}, {});
}
function replaceEqualDeep(prev, _next) {
	if (prev === _next) return prev;
	const next = _next;
	const array = isPlainArray(prev) && isPlainArray(next);
	if (array || isPlainObject(prev) && isPlainObject(next)) {
		const prevItems = array ? prev : Object.keys(prev);
		const prevSize = prevItems.length;
		const nextItems = array ? next : Object.keys(next);
		const nextSize = nextItems.length;
		const copy = array ? [] : {};
		let equalItems = 0;
		for (let i$1 = 0; i$1 < nextSize; i$1++) {
			const key = array ? i$1 : nextItems[i$1];
			if ((!array && prevItems.includes(key) || array) && prev[key] === void 0 && next[key] === void 0) {
				copy[key] = void 0;
				equalItems++;
			} else {
				copy[key] = replaceEqualDeep(prev[key], next[key]);
				if (copy[key] === prev[key] && prev[key] !== void 0) equalItems++;
			}
		}
		return prevSize === nextSize && equalItems === prevSize ? prev : copy;
	}
	return next;
}
function isPlainObject(o) {
	if (!hasObjectPrototype(o)) return false;
	const ctor = o.constructor;
	if (typeof ctor === "undefined") return true;
	const prot = ctor.prototype;
	if (!hasObjectPrototype(prot)) return false;
	if (!prot.hasOwnProperty("isPrototypeOf")) return false;
	return true;
}
function hasObjectPrototype(o) {
	return Object.prototype.toString.call(o) === "[object Object]";
}
function isPlainArray(value) {
	return Array.isArray(value) && value.length === Object.keys(value).length;
}
function getObjectKeys(obj, ignoreUndefined) {
	let keys = Object.keys(obj);
	if (ignoreUndefined) keys = keys.filter((key) => obj[key] !== void 0);
	return keys;
}
function deepEqual(a, b, opts) {
	if (a === b) return true;
	if (typeof a !== typeof b) return false;
	if (isPlainObject(a) && isPlainObject(b)) {
		const ignoreUndefined = (opts == null ? void 0 : opts.ignoreUndefined) ?? true;
		const aKeys = getObjectKeys(a, ignoreUndefined);
		const bKeys = getObjectKeys(b, ignoreUndefined);
		if (!(opts == null ? void 0 : opts.partial) && aKeys.length !== bKeys.length) return false;
		return bKeys.every((key) => deepEqual(a[key], b[key], opts));
	}
	if (Array.isArray(a) && Array.isArray(b)) {
		if (a.length !== b.length) return false;
		return !a.some((item, index) => !deepEqual(item, b[index], opts));
	}
	return false;
}
const useLayoutEffect = typeof window !== "undefined" ? import_react$10.useLayoutEffect : import_react$10.useEffect;
function createControlledPromise(onResolve) {
	let resolveLoadPromise;
	let rejectLoadPromise;
	const controlledPromise = new Promise((resolve, reject) => {
		resolveLoadPromise = resolve;
		rejectLoadPromise = reject;
	});
	controlledPromise.status = "pending";
	controlledPromise.resolve = (value) => {
		controlledPromise.status = "resolved";
		controlledPromise.value = value;
		resolveLoadPromise(value);
		onResolve == null ? void 0 : onResolve(value);
	};
	controlledPromise.reject = (e) => {
		controlledPromise.status = "rejected";
		rejectLoadPromise(e);
	};
	return controlledPromise;
}
function usePrevious(value) {
	const ref = import_react$10.useRef({
		value,
		prev: null
	});
	const current = ref.current.value;
	if (value !== current) ref.current = {
		value,
		prev: current
	};
	return ref.current.prev;
}
function useIntersectionObserver(ref, callback, intersectionObserverOptions = {}, options = {}) {
	const isIntersectionObserverAvailable = import_react$10.useRef(typeof IntersectionObserver === "function");
	const observerRef = import_react$10.useRef(null);
	import_react$10.useEffect(() => {
		if (!ref.current || !isIntersectionObserverAvailable.current || options.disabled) return;
		observerRef.current = new IntersectionObserver(([entry]) => {
			callback(entry);
		}, intersectionObserverOptions);
		observerRef.current.observe(ref.current);
		return () => {
			var _a;
			(_a = observerRef.current) == null ? void 0 : _a.disconnect();
		};
	}, [
		callback,
		intersectionObserverOptions,
		options.disabled,
		ref
	]);
	return observerRef.current;
}
function useForwardedRef(ref) {
	const innerRef = import_react$10.useRef(null);
	import_react$10.useEffect(() => {
		if (!ref) return;
		if (typeof ref === "function") ref(innerRef.current);
else ref.current = innerRef.current;
	});
	return innerRef;
}

//#endregion
//#region node_modules/@tanstack/react-router/dist/esm/path.js
function joinPaths(paths) {
	return cleanPath(paths.filter((val) => {
		return val !== void 0;
	}).join("/"));
}
function cleanPath(path) {
	return path.replace(/\/{2,}/g, "/");
}
function trimPathLeft(path) {
	return path === "/" ? path : path.replace(/^\/{1,}/, "");
}
function trimPathRight(path) {
	return path === "/" ? path : path.replace(/\/{1,}$/, "");
}
function trimPath(path) {
	return trimPathRight(trimPathLeft(path));
}
function removeTrailingSlash(value, basepath) {
	if (value.endsWith("/") && value !== "/" && value !== `${basepath}/`) return value.slice(0, -1);
	return value;
}
function exactPathTest(pathName1, pathName2, basepath) {
	return removeTrailingSlash(pathName1, basepath) === removeTrailingSlash(pathName2, basepath);
}
function resolvePath({ basepath, base, to, trailingSlash = "never", caseSensitive }) {
	var _a, _b;
	base = removeBasepath(basepath, base, caseSensitive);
	to = removeBasepath(basepath, to, caseSensitive);
	let baseSegments = parsePathname(base);
	const toSegments = parsePathname(to);
	if (baseSegments.length > 1 && ((_a = last(baseSegments)) == null ? void 0 : _a.value) === "/") baseSegments.pop();
	toSegments.forEach((toSegment, index) => {
		if (toSegment.value === "/") if (!index) baseSegments = [toSegment];
else if (index === toSegments.length - 1) baseSegments.push(toSegment);
else;
else if (toSegment.value === "..") baseSegments.pop();
else if (toSegment.value === ".");
else baseSegments.push(toSegment);
	});
	if (baseSegments.length > 1) {
		if (((_b = last(baseSegments)) == null ? void 0 : _b.value) === "/") {
			if (trailingSlash === "never") baseSegments.pop();
		} else if (trailingSlash === "always") baseSegments.push({
			type: "pathname",
			value: "/"
		});
	}
	const joined = joinPaths([basepath, ...baseSegments.map((d) => d.value)]);
	return cleanPath(joined);
}
function parsePathname(pathname) {
	if (!pathname) return [];
	pathname = cleanPath(pathname);
	const segments = [];
	if (pathname.slice(0, 1) === "/") {
		pathname = pathname.substring(1);
		segments.push({
			type: "pathname",
			value: "/"
		});
	}
	if (!pathname) return segments;
	const split = pathname.split("/").filter(Boolean);
	segments.push(...split.map((part) => {
		if (part === "$" || part === "*") return {
			type: "wildcard",
			value: part
		};
		if (part.charAt(0) === "$") return {
			type: "param",
			value: part
		};
		return {
			type: "pathname",
			value: decodeURI(part)
		};
	}));
	if (pathname.slice(-1) === "/") {
		pathname = pathname.substring(1);
		segments.push({
			type: "pathname",
			value: "/"
		});
	}
	return segments;
}
function interpolatePath({ path, params, leaveWildcards, leaveParams, decodeCharMap }) {
	const interpolatedPathSegments = parsePathname(path);
	const encodedParams = {};
	for (const [key, value] of Object.entries(params)) {
		const isValueString = typeof value === "string";
		if (["*", "_splat"].includes(key)) encodedParams[key] = isValueString ? encodeURI(value) : value;
else encodedParams[key] = isValueString ? encodePathParam(value, decodeCharMap) : value;
	}
	return joinPaths(interpolatedPathSegments.map((segment) => {
		if (segment.type === "wildcard") {
			const value = encodedParams._splat;
			if (leaveWildcards) return `${segment.value}${value ?? ""}`;
			return value;
		}
		if (segment.type === "param") {
			if (leaveParams) {
				const value = encodedParams[segment.value];
				return `${segment.value}${value ?? ""}`;
			}
			return encodedParams[segment.value.substring(1)] ?? "undefined";
		}
		return segment.value;
	}));
}
function encodePathParam(value, decodeCharMap) {
	let encoded = encodeURIComponent(value);
	if (decodeCharMap) for (const [encodedChar, char] of decodeCharMap) encoded = encoded.replaceAll(encodedChar, char);
	return encoded;
}
function matchPathname(basepath, currentPathname, matchLocation) {
	const pathParams = matchByPath(basepath, currentPathname, matchLocation);
	if (matchLocation.to && !pathParams) return;
	return pathParams ?? {};
}
function removeBasepath(basepath, pathname, caseSensitive = false) {
	const normalizedBasepath = caseSensitive ? basepath : basepath.toLowerCase();
	const normalizedPathname = caseSensitive ? pathname : pathname.toLowerCase();
	switch (true) {
		case normalizedBasepath === "/": return pathname;
		case normalizedPathname === normalizedBasepath: return "";
		case pathname.length < basepath.length: return pathname;
		case normalizedPathname[normalizedBasepath.length] !== "/": return pathname;
		case normalizedPathname.startsWith(normalizedBasepath): return pathname.slice(basepath.length);
		default: return pathname;
	}
}
function matchByPath(basepath, from, matchLocation) {
	if (basepath !== "/" && !from.startsWith(basepath)) return void 0;
	from = removeBasepath(basepath, from, matchLocation.caseSensitive);
	const to = removeBasepath(basepath, `${matchLocation.to ?? "$"}`, matchLocation.caseSensitive);
	const baseSegments = parsePathname(from);
	const routeSegments = parsePathname(to);
	if (!from.startsWith("/")) baseSegments.unshift({
		type: "pathname",
		value: "/"
	});
	if (!to.startsWith("/")) routeSegments.unshift({
		type: "pathname",
		value: "/"
	});
	const params = {};
	const isMatch = (() => {
		for (let i$1 = 0; i$1 < Math.max(baseSegments.length, routeSegments.length); i$1++) {
			const baseSegment = baseSegments[i$1];
			const routeSegment = routeSegments[i$1];
			const isLastBaseSegment = i$1 >= baseSegments.length - 1;
			const isLastRouteSegment = i$1 >= routeSegments.length - 1;
			if (routeSegment) {
				if (routeSegment.type === "wildcard") {
					const _splat = decodeURI(joinPaths(baseSegments.slice(i$1).map((d) => d.value)));
					params["*"] = _splat;
					params["_splat"] = _splat;
					return true;
				}
				if (routeSegment.type === "pathname") {
					if (routeSegment.value === "/" && !(baseSegment == null ? void 0 : baseSegment.value)) return true;
					if (baseSegment) {
						if (matchLocation.caseSensitive) {
							if (routeSegment.value !== baseSegment.value) return false;
						} else if (routeSegment.value.toLowerCase() !== baseSegment.value.toLowerCase()) return false;
					}
				}
				if (!baseSegment) return false;
				if (routeSegment.type === "param") {
					if (baseSegment.value === "/") return false;
					if (baseSegment.value.charAt(0) !== "$") params[routeSegment.value.substring(1)] = decodeURIComponent(baseSegment.value);
				}
			}
			if (!isLastBaseSegment && isLastRouteSegment) {
				params["**"] = joinPaths(baseSegments.slice(i$1 + 1).map((d) => d.value));
				return !!matchLocation.fuzzy && (routeSegment == null ? void 0 : routeSegment.value) !== "/";
			}
		}
		return true;
	})();
	return isMatch ? params : void 0;
}

//#endregion
//#region node_modules/@tanstack/react-router/dist/esm/redirects.js
function redirect(opts) {
	opts.isRedirect = true;
	opts.statusCode = opts.statusCode || opts.code || 307;
	opts.headers = opts.headers || {};
	if (!opts.reloadDocument) {
		opts.reloadDocument = false;
		try {
			new URL(`${opts.href}`);
			opts.reloadDocument = true;
		} catch {}
	}
	if (opts.throw) throw opts;
	return opts;
}
function isRedirect(obj) {
	return !!(obj == null ? void 0 : obj.isRedirect);
}
function isResolvedRedirect(obj) {
	return !!(obj == null ? void 0 : obj.isRedirect) && obj.href;
}

//#endregion
//#region node_modules/@tanstack/react-router/dist/esm/CatchBoundary.js
var import_jsx_runtime$15 = __toESM(require_jsx_runtime(), 1);
var import_react$9 = __toESM(require_react(), 1);
function CatchBoundary(props) {
	const errorComponent = props.errorComponent ?? ErrorComponent;
	return /* @__PURE__ */ (0, import_jsx_runtime$15.jsx)(CatchBoundaryImpl, {
		getResetKey: props.getResetKey,
		onCatch: props.onCatch,
		children: ({ error, reset }) => {
			if (error) return import_react$9.createElement(errorComponent, {
				error,
				reset
			});
			return props.children;
		}
	});
}
var CatchBoundaryImpl = class extends import_react$9.Component {
	constructor() {
		super(...arguments);
		this.state = { error: null };
	}
	static getDerivedStateFromProps(props) {
		return { resetKey: props.getResetKey() };
	}
	static getDerivedStateFromError(error) {
		return { error };
	}
	reset() {
		this.setState({ error: null });
	}
	componentDidUpdate(prevProps, prevState) {
		if (prevState.error && prevState.resetKey !== this.state.resetKey) this.reset();
	}
	componentDidCatch(error, errorInfo) {
		if (this.props.onCatch) this.props.onCatch(error, errorInfo);
	}
	render() {
		return this.props.children({
			error: this.state.resetKey !== this.props.getResetKey() ? null : this.state.error,
			reset: () => {
				this.reset();
			}
		});
	}
};
function ErrorComponent({ error }) {
	const [show, setShow] = import_react$9.useState(true);
	return /* @__PURE__ */ (0, import_jsx_runtime$15.jsxs)("div", {
		style: {
			padding: ".5rem",
			maxWidth: "100%"
		},
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime$15.jsxs)("div", {
				style: {
					display: "flex",
					alignItems: "center",
					gap: ".5rem"
				},
				children: [/* @__PURE__ */ (0, import_jsx_runtime$15.jsx)("strong", {
					style: { fontSize: "1rem" },
					children: "Something went wrong!"
				}), /* @__PURE__ */ (0, import_jsx_runtime$15.jsx)("button", {
					style: {
						appearance: "none",
						fontSize: ".6em",
						border: "1px solid currentColor",
						padding: ".1rem .2rem",
						fontWeight: "bold",
						borderRadius: ".25rem"
					},
					onClick: () => setShow((d) => !d),
					children: show ? "Hide Error" : "Show Error"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime$15.jsx)("div", { style: { height: ".25rem" } }),
			show ? /* @__PURE__ */ (0, import_jsx_runtime$15.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime$15.jsx)("pre", {
				style: {
					fontSize: ".7em",
					border: "1px solid red",
					borderRadius: ".25rem",
					padding: ".3rem",
					color: "red",
					overflow: "auto"
				},
				children: error.message ? /* @__PURE__ */ (0, import_jsx_runtime$15.jsx)("code", { children: error.message }) : null
			}) }) : null
		]
	});
}

//#endregion
//#region node_modules/@tanstack/react-router/dist/esm/useRouterState.js
var import_react$8 = __toESM(require_react(), 1);
function useRouterState(opts) {
	const contextRouter = useRouter({ warn: (opts == null ? void 0 : opts.router) === void 0 });
	const router$1 = (opts == null ? void 0 : opts.router) || contextRouter;
	const previousResult = (0, import_react$8.useRef)();
	return useStore(router$1.__store, (state) => {
		if (opts == null ? void 0 : opts.select) {
			if (opts.structuralSharing ?? router$1.options.defaultStructuralSharing) {
				const newSlice = replaceEqualDeep(previousResult.current, opts.select(state));
				previousResult.current = newSlice;
				return newSlice;
			}
			return opts.select(state);
		}
		return state;
	});
}

//#endregion
//#region node_modules/@tanstack/react-router/dist/esm/not-found.js
var import_jsx_runtime$14 = __toESM(require_jsx_runtime(), 1);
function isNotFound(obj) {
	return !!(obj == null ? void 0 : obj.isNotFound);
}
function CatchNotFound(props) {
	const resetKey = useRouterState({ select: (s) => `not-found-${s.location.pathname}-${s.status}` });
	return /* @__PURE__ */ (0, import_jsx_runtime$14.jsx)(CatchBoundary, {
		getResetKey: () => resetKey,
		onCatch: (error, errorInfo) => {
			var _a;
			if (isNotFound(error)) (_a = props.onCatch) == null ? void 0 : _a.call(props, error, errorInfo);
else throw error;
		},
		errorComponent: ({ error }) => {
			var _a;
			if (isNotFound(error)) return (_a = props.fallback) == null ? void 0 : _a.call(props, error);
else throw error;
		},
		children: props.children
	});
}
function DefaultGlobalNotFound() {
	return /* @__PURE__ */ (0, import_jsx_runtime$14.jsx)("p", { children: "Not Found" });
}

//#endregion
//#region node_modules/@tanstack/react-router/dist/esm/transformer.js
const defaultTransformer = {
	stringify: (value) => JSON.stringify(value, function replacer(key, val) {
		const ogVal = this[key];
		const transformer = transformers.find((t) => t.stringifyCondition(ogVal));
		if (transformer) return transformer.stringify(ogVal);
		return val;
	}),
	parse: (value) => JSON.parse(value, function parser(key, val) {
		const ogVal = this[key];
		if (isPlainObject(ogVal)) {
			const transformer = transformers.find((t) => t.parseCondition(ogVal));
			if (transformer) return transformer.parse(ogVal);
		}
		return val;
	}),
	encode: (value) => {
		if (Array.isArray(value)) return value.map((v) => defaultTransformer.encode(v));
		if (isPlainObject(value)) return Object.fromEntries(Object.entries(value).map(([key, v]) => [key, defaultTransformer.encode(v)]));
		const transformer = transformers.find((t) => t.stringifyCondition(value));
		if (transformer) return transformer.stringify(value);
		return value;
	},
	decode: (value) => {
		if (isPlainObject(value)) {
			const transformer = transformers.find((t) => t.parseCondition(value));
			if (transformer) return transformer.parse(value);
		}
		if (Array.isArray(value)) return value.map((v) => defaultTransformer.decode(v));
		if (isPlainObject(value)) return Object.fromEntries(Object.entries(value).map(([key, v]) => [key, defaultTransformer.decode(v)]));
		return value;
	}
};
const createTransformer = (key, check, toValue$1, fromValue) => ({
	key,
	stringifyCondition: check,
	stringify: (value) => ({ [`$${key}`]: toValue$1(value) }),
	parseCondition: (value) => Object.hasOwn(value, `$${key}`),
	parse: (value) => fromValue(value[`$${key}`])
});
const transformers = [
	createTransformer(
		// Key
		"undefined",
		// Check
		(v) => v === void 0,
		// To
		() => 0,
		// From
		() => void 0
),
	createTransformer(
		// Key
		"date",
		// Check
		(v) => v instanceof Date,
		// To
		(v) => v.toISOString(),
		// From
		(v) => new Date(v)
),
	createTransformer(
		// Key
		"error",
		// Check
		(v) => v instanceof Error,
		// To
		(v) => ({
			...v,
			message: v.message,
			stack: v.stack,
			cause: v.cause
		}),
		// From
		(v) => Object.assign(new Error(v.message), v)
),
	createTransformer(
		// Key
		"formData",
		// Check
		(v) => v instanceof FormData,
		// To
		(v) => {
			const entries = {};
			v.forEach((value, key) => {
				const entry = entries[key];
				if (entry !== void 0) if (Array.isArray(entry)) entry.push(value);
else entries[key] = [entry, value];
else entries[key] = value;
			});
			return entries;
		},
		// From
		(v) => {
			const formData = new FormData();
			Object.entries(v).forEach(([key, value]) => {
				if (Array.isArray(value)) value.forEach((val) => formData.append(key, val));
else formData.append(key, value);
			});
			return formData;
		}
)
];

//#endregion
//#region node_modules/@tanstack/react-router/dist/esm/router.js
const componentTypes = [
	"component",
	"errorComponent",
	"pendingComponent",
	"notFoundComponent"
];
function routeNeedsPreload(route) {
	var _a;
	for (const componentType of componentTypes) if ((_a = route.options[componentType]) == null ? void 0 : _a.preload) return true;
	return false;
}
function validateSearch(validateSearch2, input) {
	if (validateSearch2 == null) return {};
	if ("~standard" in validateSearch2) {
		const result = validateSearch2["~standard"].validate(input);
		if (result instanceof Promise) throw new SearchParamError("Async validation not supported");
		if (result.issues) throw new SearchParamError(JSON.stringify(result.issues, void 0, 2));
		return result.value;
	}
	if ("parse" in validateSearch2) return validateSearch2.parse(input);
	if (typeof validateSearch2 === "function") return validateSearch2(input);
	return {};
}
function createRouter(options) {
	return new Router(options);
}
var Router = class {
	/**
	* @deprecated Use the `createRouter` function instead
	*/
	constructor(options) {
		this.tempLocationKey = `${Math.round(Math.random() * 1e7)}`;
		this.resetNextScroll = true;
		this.shouldViewTransition = void 0;
		this.isViewTransitionTypesSupported = void 0;
		this.subscribers = /* @__PURE__ */ new Set();
		this.startReactTransition = (fn) => fn();
		this.update = (newOptions) => {
			var _a;
			if (newOptions.notFoundRoute) console.warn("The notFoundRoute API is deprecated and will be removed in the next major version. See https://tanstack.com/router/v1/docs/guide/not-found-errors#migrating-from-notfoundroute for more info.");
			const previousOptions = this.options;
			this.options = {
				...this.options,
				...newOptions
			};
			this.isServer = this.options.isServer ?? typeof document === "undefined";
			this.pathParamsDecodeCharMap = this.options.pathParamsAllowedCharacters ? new Map(this.options.pathParamsAllowedCharacters.map((char) => [encodeURIComponent(char), char])) : void 0;
			if (!this.basepath || newOptions.basepath && newOptions.basepath !== previousOptions.basepath) if (newOptions.basepath === void 0 || newOptions.basepath === "" || newOptions.basepath === "/") this.basepath = "/";
else this.basepath = `/${trimPath(newOptions.basepath)}`;
			if (!this.history || this.options.history && this.options.history !== this.history) {
				this.history = this.options.history ?? (this.isServer ? createMemoryHistory({ initialEntries: [this.basepath || "/"] }) : createBrowserHistory());
				this.latestLocation = this.parseLocation();
			}
			if (this.options.routeTree !== this.routeTree) {
				this.routeTree = this.options.routeTree;
				this.buildRouteTree();
			}
			if (!this.__store) this.__store = new Store(getInitialRouterState(this.latestLocation), { onUpdate: () => {
				this.__store.state = {
					...this.state,
					cachedMatches: this.state.cachedMatches.filter((d) => !["redirected"].includes(d.status))
				};
			} });
			if (typeof window !== "undefined" && "CSS" in window && typeof ((_a = window.CSS) == null ? void 0 : _a.supports) === "function") this.isViewTransitionTypesSupported = window.CSS.supports("selector(:active-view-transition-type(a)");
		};
		this.buildRouteTree = () => {
			this.routesById = {};
			this.routesByPath = {};
			const notFoundRoute = this.options.notFoundRoute;
			if (notFoundRoute) {
				notFoundRoute.init({
					originalIndex: 99999999999,
					defaultSsr: this.options.defaultSsr
				});
				this.routesById[notFoundRoute.id] = notFoundRoute;
			}
			const recurseRoutes = (childRoutes) => {
				childRoutes.forEach((childRoute, i$1) => {
					childRoute.init({
						originalIndex: i$1,
						defaultSsr: this.options.defaultSsr
					});
					const existingRoute = this.routesById[childRoute.id];
					invariant(!existingRoute, `Duplicate routes found with id: ${String(childRoute.id)}`);
					this.routesById[childRoute.id] = childRoute;
					if (!childRoute.isRoot && childRoute.path) {
						const trimmedFullPath = trimPathRight(childRoute.fullPath);
						if (!this.routesByPath[trimmedFullPath] || childRoute.fullPath.endsWith("/")) this.routesByPath[trimmedFullPath] = childRoute;
					}
					const children = childRoute.children;
					if (children == null ? void 0 : children.length) recurseRoutes(children);
				});
			};
			recurseRoutes([this.routeTree]);
			const scoredRoutes = [];
			const routes = Object.values(this.routesById);
			routes.forEach((d, i$1) => {
				var _a;
				if (d.isRoot || !d.path) return;
				const trimmed = trimPathLeft(d.fullPath);
				const parsed = parsePathname(trimmed);
				while (parsed.length > 1 && ((_a = parsed[0]) == null ? void 0 : _a.value) === "/") parsed.shift();
				const scores = parsed.map((segment) => {
					if (segment.value === "/") return .75;
					if (segment.type === "param") return .5;
					if (segment.type === "wildcard") return .25;
					return 1;
				});
				scoredRoutes.push({
					child: d,
					trimmed,
					parsed,
					index: i$1,
					scores
				});
			});
			this.flatRoutes = scoredRoutes.sort((a, b) => {
				const minLength = Math.min(a.scores.length, b.scores.length);
				for (let i$1 = 0; i$1 < minLength; i$1++) if (a.scores[i$1] !== b.scores[i$1]) return b.scores[i$1] - a.scores[i$1];
				if (a.scores.length !== b.scores.length) return b.scores.length - a.scores.length;
				for (let i$1 = 0; i$1 < minLength; i$1++) if (a.parsed[i$1].value !== b.parsed[i$1].value) return a.parsed[i$1].value > b.parsed[i$1].value ? 1 : -1;
				return a.index - b.index;
			}).map((d, i$1) => {
				d.child.rank = i$1;
				return d.child;
			});
		};
		this.subscribe = (eventType, fn) => {
			const listener = {
				eventType,
				fn
			};
			this.subscribers.add(listener);
			return () => {
				this.subscribers.delete(listener);
			};
		};
		this.emit = (routerEvent) => {
			this.subscribers.forEach((listener) => {
				if (listener.eventType === routerEvent.type) listener.fn(routerEvent);
			});
		};
		this.parseLocation = (previousLocation, locationToParse) => {
			const parse = ({ pathname, search, hash, state }) => {
				const parsedSearch = this.options.parseSearch(search);
				const searchStr = this.options.stringifySearch(parsedSearch);
				return {
					pathname,
					searchStr,
					search: replaceEqualDeep(previousLocation == null ? void 0 : previousLocation.search, parsedSearch),
					hash: hash.split("#").reverse()[0] ?? "",
					href: `${pathname}${searchStr}${hash}`,
					state: replaceEqualDeep(previousLocation == null ? void 0 : previousLocation.state, state)
				};
			};
			const location = parse(locationToParse ?? this.history.location);
			const { __tempLocation, __tempKey } = location.state;
			if (__tempLocation && (!__tempKey || __tempKey === this.tempLocationKey)) {
				const parsedTempLocation = parse(__tempLocation);
				parsedTempLocation.state.key = location.state.key;
				delete parsedTempLocation.state.__tempLocation;
				return {
					...parsedTempLocation,
					maskedLocation: location
				};
			}
			return location;
		};
		this.resolvePathWithBase = (from, path) => {
			const resolvedPath = resolvePath({
				basepath: this.basepath,
				base: from,
				to: cleanPath(path),
				trailingSlash: this.options.trailingSlash,
				caseSensitive: this.options.caseSensitive
			});
			return resolvedPath;
		};
		this.getMatchedRoutes = (next, dest) => {
			let routeParams = {};
			const trimmedPath = trimPathRight(next.pathname);
			const getMatchedParams = (route) => {
				const result = matchPathname(this.basepath, trimmedPath, {
					to: route.fullPath,
					caseSensitive: route.options.caseSensitive ?? this.options.caseSensitive,
					fuzzy: true
				});
				return result;
			};
			let foundRoute = (dest == null ? void 0 : dest.to) !== void 0 ? this.routesByPath[dest.to] : void 0;
			if (foundRoute) routeParams = getMatchedParams(foundRoute);
else foundRoute = this.flatRoutes.find((route) => {
				const matchedParams = getMatchedParams(route);
				if (matchedParams) {
					routeParams = matchedParams;
					return true;
				}
				return false;
			});
			let routeCursor = foundRoute || this.routesById[rootRouteId];
			const matchedRoutes = [routeCursor];
			while (routeCursor.parentRoute) {
				routeCursor = routeCursor.parentRoute;
				matchedRoutes.unshift(routeCursor);
			}
			return {
				matchedRoutes,
				routeParams,
				foundRoute
			};
		};
		this.cancelMatch = (id) => {
			const match = this.getMatch(id);
			if (!match) return;
			match.abortController.abort();
			clearTimeout(match.pendingTimeout);
		};
		this.cancelMatches = () => {
			var _a;
			(_a = this.state.pendingMatches) == null ? void 0 : _a.forEach((match) => {
				this.cancelMatch(match.id);
			});
		};
		this.buildLocation = (opts) => {
			const build = (dest = {}, matchedRoutesResult) => {
				var _a, _b, _c, _d, _e, _f;
				const fromMatches = dest._fromLocation ? this.matchRoutes(dest._fromLocation, { _buildLocation: true }) : this.state.matches;
				const fromMatch = dest.from != null ? fromMatches.find((d) => matchPathname(this.basepath, trimPathRight(d.pathname), {
					to: dest.from,
					caseSensitive: false,
					fuzzy: false
				})) : void 0;
				const fromPath = (fromMatch == null ? void 0 : fromMatch.pathname) || this.latestLocation.pathname;
				invariant(dest.from == null || fromMatch != null, "Could not find match for from: " + dest.from);
				const fromSearch = ((_a = this.state.pendingMatches) == null ? void 0 : _a.length) ? (_b = last(this.state.pendingMatches)) == null ? void 0 : _b.search : ((_c = last(fromMatches)) == null ? void 0 : _c.search) || this.latestLocation.search;
				const stayingMatches = matchedRoutesResult == null ? void 0 : matchedRoutesResult.matchedRoutes.filter((d) => fromMatches.find((e) => e.routeId === d.id));
				let pathname;
				if (dest.to) pathname = this.resolvePathWithBase(fromPath, `${dest.to}`);
else {
					const fromRouteByFromPathRouteId = this.routesById[(_d = stayingMatches == null ? void 0 : stayingMatches.find((route) => {
						const interpolatedPath = interpolatePath({
							path: route.fullPath,
							params: (matchedRoutesResult == null ? void 0 : matchedRoutesResult.routeParams) ?? {},
							decodeCharMap: this.pathParamsDecodeCharMap
						});
						const pathname2 = joinPaths([this.basepath, interpolatedPath]);
						return pathname2 === fromPath;
					})) == null ? void 0 : _d.id];
					pathname = this.resolvePathWithBase(fromPath, (fromRouteByFromPathRouteId == null ? void 0 : fromRouteByFromPathRouteId.to) ?? fromPath);
				}
				const prevParams = { ...(_e = last(fromMatches)) == null ? void 0 : _e.params };
				let nextParams = (dest.params ?? true) === true ? prevParams : {
					...prevParams,
					...functionalUpdate(dest.params, prevParams)
				};
				if (Object.keys(nextParams).length > 0) matchedRoutesResult == null ? void 0 : matchedRoutesResult.matchedRoutes.map((route) => {
					var _a2;
					return ((_a2 = route.options.params) == null ? void 0 : _a2.stringify) ?? route.options.stringifyParams;
				}).filter(Boolean).forEach((fn) => {
					nextParams = {
						...nextParams,
						...fn(nextParams)
					};
				});
				pathname = interpolatePath({
					path: pathname,
					params: nextParams ?? {},
					leaveWildcards: false,
					leaveParams: opts.leaveParams,
					decodeCharMap: this.pathParamsDecodeCharMap
				});
				let search = fromSearch;
				if (opts._includeValidateSearch && ((_f = this.options.search) == null ? void 0 : _f.strict)) {
					let validatedSearch = {};
					matchedRoutesResult == null ? void 0 : matchedRoutesResult.matchedRoutes.forEach((route) => {
						try {
							if (route.options.validateSearch) validatedSearch = {
								...validatedSearch,
								...validateSearch(route.options.validateSearch, {
									...validatedSearch,
									...search
								}) ?? {}
							};
						} catch (e) {}
					});
					search = validatedSearch;
				}
				const applyMiddlewares = (search2) => {
					const allMiddlewares = (matchedRoutesResult == null ? void 0 : matchedRoutesResult.matchedRoutes.reduce((acc, route) => {
						var _a2;
						const middlewares = [];
						if ("search" in route.options) {
							if ((_a2 = route.options.search) == null ? void 0 : _a2.middlewares) middlewares.push(...route.options.search.middlewares);
						} else if (route.options.preSearchFilters || route.options.postSearchFilters) {
							const legacyMiddleware = ({ search: search3, next }) => {
								let nextSearch = search3;
								if ("preSearchFilters" in route.options && route.options.preSearchFilters) nextSearch = route.options.preSearchFilters.reduce((prev, next2) => next2(prev), search3);
								const result = next(nextSearch);
								if ("postSearchFilters" in route.options && route.options.postSearchFilters) return route.options.postSearchFilters.reduce((prev, next2) => next2(prev), result);
								return result;
							};
							middlewares.push(legacyMiddleware);
						}
						if (opts._includeValidateSearch && route.options.validateSearch) {
							const validate = ({ search: search3, next }) => {
								try {
									const result = next(search3);
									const validatedSearch = {
										...result,
										...validateSearch(route.options.validateSearch, result) ?? {}
									};
									return validatedSearch;
								} catch (e) {}
							};
							middlewares.push(validate);
						}
						return acc.concat(middlewares);
					}, [])) ?? [];
					const final = ({ search: search3 }) => {
						if (!dest.search) return {};
						if (dest.search === true) return search3;
						return functionalUpdate(dest.search, search3);
					};
					allMiddlewares.push(final);
					const applyNext = (index, currentSearch) => {
						if (index >= allMiddlewares.length) return currentSearch;
						const middleware = allMiddlewares[index];
						const next = (newSearch) => {
							return applyNext(index + 1, newSearch);
						};
						return middleware({
							search: currentSearch,
							next
						});
					};
					return applyNext(0, search2);
				};
				search = applyMiddlewares(search);
				search = replaceEqualDeep(fromSearch, search);
				const searchStr = this.options.stringifySearch(search);
				const hash = dest.hash === true ? this.latestLocation.hash : dest.hash ? functionalUpdate(dest.hash, this.latestLocation.hash) : void 0;
				const hashStr = hash ? `#${hash}` : "";
				let nextState = dest.state === true ? this.latestLocation.state : dest.state ? functionalUpdate(dest.state, this.latestLocation.state) : {};
				nextState = replaceEqualDeep(this.latestLocation.state, nextState);
				return {
					pathname,
					search,
					searchStr,
					state: nextState,
					hash: hash ?? "",
					href: `${pathname}${searchStr}${hashStr}`,
					unmaskOnReload: dest.unmaskOnReload
				};
			};
			const buildWithMatches = (dest = {}, maskedDest) => {
				var _a;
				const next = build(dest);
				let maskedNext = maskedDest ? build(maskedDest) : void 0;
				if (!maskedNext) {
					let params = {};
					const foundMask = (_a = this.options.routeMasks) == null ? void 0 : _a.find((d) => {
						const match = matchPathname(this.basepath, next.pathname, {
							to: d.from,
							caseSensitive: false,
							fuzzy: false
						});
						if (match) {
							params = match;
							return true;
						}
						return false;
					});
					if (foundMask) {
						const { from: _from,...maskProps } = foundMask;
						maskedDest = {
							...pick(opts, ["from"]),
							...maskProps,
							params
						};
						maskedNext = build(maskedDest);
					}
				}
				const nextMatches = this.getMatchedRoutes(next, dest);
				const final = build(dest, nextMatches);
				if (maskedNext) {
					const maskedMatches = this.getMatchedRoutes(maskedNext, maskedDest);
					const maskedFinal = build(maskedDest, maskedMatches);
					final.maskedLocation = maskedFinal;
				}
				return final;
			};
			if (opts.mask) return buildWithMatches(opts, {
				...pick(opts, ["from"]),
				...opts.mask
			});
			return buildWithMatches(opts);
		};
		this.commitLocation = ({ viewTransition, ignoreBlocker,...next }) => {
			const isSameState = () => {
				next.state.key = this.latestLocation.state.key;
				const isEqual = deepEqual(next.state, this.latestLocation.state);
				delete next.state.key;
				return isEqual;
			};
			const isSameUrl = this.latestLocation.href === next.href;
			const previousCommitPromise = this.commitLocationPromise;
			this.commitLocationPromise = createControlledPromise(() => {
				previousCommitPromise == null ? void 0 : previousCommitPromise.resolve();
			});
			if (isSameUrl && isSameState()) this.load();
else {
				let { maskedLocation, hashScrollIntoView,...nextHistory } = next;
				if (maskedLocation) {
					nextHistory = {
						...maskedLocation,
						state: {
							...maskedLocation.state,
							__tempKey: void 0,
							__tempLocation: {
								...nextHistory,
								search: nextHistory.searchStr,
								state: {
									...nextHistory.state,
									__tempKey: void 0,
									__tempLocation: void 0,
									key: void 0
								}
							}
						}
					};
					if (nextHistory.unmaskOnReload ?? this.options.unmaskOnReload ?? false) nextHistory.state.__tempKey = this.tempLocationKey;
				}
				nextHistory.state.__hashScrollIntoViewOptions = hashScrollIntoView ?? this.options.defaultHashScrollIntoView ?? true;
				this.shouldViewTransition = viewTransition;
				this.history[next.replace ? "replace" : "push"](nextHistory.href, nextHistory.state, { ignoreBlocker });
			}
			this.resetNextScroll = next.resetScroll ?? true;
			if (!this.history.subscribers.size) this.load();
			return this.commitLocationPromise;
		};
		this.buildAndCommitLocation = ({ replace, resetScroll, hashScrollIntoView, viewTransition, ignoreBlocker, href,...rest } = {}) => {
			if (href) {
				const currentIndex = this.history.location.state.__TSR_index;
				const parsed = parseHref(href, { __TSR_index: replace ? currentIndex : currentIndex + 1 });
				rest.to = parsed.pathname;
				rest.search = this.options.parseSearch(parsed.search);
				rest.hash = parsed.hash.slice(1);
			}
			const location = this.buildLocation({
				...rest,
				_includeValidateSearch: true
			});
			return this.commitLocation({
				...location,
				viewTransition,
				replace,
				resetScroll,
				hashScrollIntoView,
				ignoreBlocker
			});
		};
		this.navigate = ({ to, reloadDocument, href,...rest }) => {
			if (reloadDocument) {
				if (!href) {
					const location = this.buildLocation({
						to,
						...rest
					});
					href = location.href;
				}
				if (rest.replace) window.location.replace(href);
else window.location.href = href;
				return;
			}
			return this.buildAndCommitLocation({
				...rest,
				href,
				to
			});
		};
		this.load = async (opts) => {
			this.latestLocation = this.parseLocation(this.latestLocation);
			let redirect$1;
			let notFound;
			let loadPromise;
			loadPromise = new Promise((resolve) => {
				this.startReactTransition(async () => {
					var _a;
					try {
						const next = this.latestLocation;
						const prevLocation = this.state.resolvedLocation;
						const hrefChanged = prevLocation.href !== next.href;
						const pathChanged = prevLocation.pathname !== next.pathname;
						this.cancelMatches();
						let pendingMatches;
						batch(() => {
							pendingMatches = this.matchRoutes(next);
							this.__store.setState((s) => ({
								...s,
								status: "pending",
								isLoading: true,
								location: next,
								pendingMatches,
								cachedMatches: s.cachedMatches.filter((d) => {
									return !pendingMatches.find((e) => e.id === d.id);
								})
							}));
						});
						if (!this.state.redirect) this.emit({
							type: "onBeforeNavigate",
							fromLocation: prevLocation,
							toLocation: next,
							pathChanged,
							hrefChanged
						});
						this.emit({
							type: "onBeforeLoad",
							fromLocation: prevLocation,
							toLocation: next,
							pathChanged,
							hrefChanged
						});
						await this.loadMatches({
							sync: opts == null ? void 0 : opts.sync,
							matches: pendingMatches,
							location: next,
							onReady: async () => {
								this.startViewTransition(async () => {
									let exitingMatches;
									let enteringMatches;
									let stayingMatches;
									batch(() => {
										this.__store.setState((s) => {
											const previousMatches = s.matches;
											const newMatches = s.pendingMatches || s.matches;
											exitingMatches = previousMatches.filter((match) => !newMatches.find((d) => d.id === match.id));
											enteringMatches = newMatches.filter((match) => !previousMatches.find((d) => d.id === match.id));
											stayingMatches = previousMatches.filter((match) => newMatches.find((d) => d.id === match.id));
											return {
												...s,
												isLoading: false,
												loadedAt: Date.now(),
												matches: newMatches,
												pendingMatches: void 0,
												cachedMatches: [...s.cachedMatches, ...exitingMatches.filter((d) => d.status !== "error")]
											};
										});
										this.clearExpiredCache();
									});
									[
										[exitingMatches, "onLeave"],
										[enteringMatches, "onEnter"],
										[stayingMatches, "onStay"]
									].forEach(([matches, hook]) => {
										matches.forEach((match) => {
											var _a2, _b;
											(_b = (_a2 = this.looseRoutesById[match.routeId].options)[hook]) == null ? void 0 : _b.call(_a2, match);
										});
									});
								});
							}
						});
					} catch (err) {
						if (isResolvedRedirect(err)) {
							redirect$1 = err;
							if (!this.isServer) this.navigate({
								...redirect$1,
								replace: true,
								ignoreBlocker: true
							});
						} else if (isNotFound(err)) notFound = err;
						this.__store.setState((s) => ({
							...s,
							statusCode: redirect$1 ? redirect$1.statusCode : notFound ? 404 : s.matches.some((d) => d.status === "error") ? 500 : 200,
							redirect: redirect$1
						}));
					}
					if (this.latestLoadPromise === loadPromise) {
						(_a = this.commitLocationPromise) == null ? void 0 : _a.resolve();
						this.latestLoadPromise = void 0;
						this.commitLocationPromise = void 0;
					}
					resolve();
				});
			});
			this.latestLoadPromise = loadPromise;
			await loadPromise;
			while (this.latestLoadPromise && loadPromise !== this.latestLoadPromise) await this.latestLoadPromise;
		};
		this.startViewTransition = (fn) => {
			const shouldViewTransition = this.shouldViewTransition ?? this.options.defaultViewTransition;
			delete this.shouldViewTransition;
			if (shouldViewTransition && typeof document !== "undefined" && "startViewTransition" in document && typeof document.startViewTransition === "function") {
				let startViewTransitionParams;
				if (typeof shouldViewTransition === "object" && this.isViewTransitionTypesSupported) startViewTransitionParams = {
					update: fn,
					types: shouldViewTransition.types
				};
else startViewTransitionParams = fn;
				document.startViewTransition(startViewTransitionParams);
			} else fn();
		};
		this.updateMatch = (id, updater) => {
			var _a;
			let updated;
			const isPending = (_a = this.state.pendingMatches) == null ? void 0 : _a.find((d) => d.id === id);
			const isMatched = this.state.matches.find((d) => d.id === id);
			const isCached = this.state.cachedMatches.find((d) => d.id === id);
			const matchesKey = isPending ? "pendingMatches" : isMatched ? "matches" : isCached ? "cachedMatches" : "";
			if (matchesKey) this.__store.setState((s) => {
				var _a2;
				return {
					...s,
					[matchesKey]: (_a2 = s[matchesKey]) == null ? void 0 : _a2.map((d) => d.id === id ? updated = updater(d) : d)
				};
			});
			return updated;
		};
		this.getMatch = (matchId) => {
			return [
				...this.state.cachedMatches,
				...this.state.pendingMatches ?? [],
				...this.state.matches
			].find((d) => d.id === matchId);
		};
		this.loadMatches = async ({ location, matches, preload: allPreload, onReady, updateMatch = this.updateMatch, sync }) => {
			let firstBadMatchIndex;
			let rendered = false;
			const triggerOnReady = async () => {
				if (!rendered) {
					rendered = true;
					await (onReady == null ? void 0 : onReady());
				}
			};
			const resolvePreload = (matchId) => {
				return !!(allPreload && !this.state.matches.find((d) => d.id === matchId));
			};
			if (!this.isServer && !this.state.matches.length) triggerOnReady();
			const handleRedirectAndNotFound = (match, err) => {
				var _a, _b, _c;
				if (isResolvedRedirect(err)) {
					if (!err.reloadDocument) throw err;
				}
				if (isRedirect(err) || isNotFound(err)) {
					updateMatch(match.id, (prev) => ({
						...prev,
						status: isRedirect(err) ? "redirected" : isNotFound(err) ? "notFound" : "error",
						isFetching: false,
						error: err,
						beforeLoadPromise: void 0,
						loaderPromise: void 0
					}));
					if (!err.routeId) err.routeId = match.routeId;
					(_a = match.beforeLoadPromise) == null ? void 0 : _a.resolve();
					(_b = match.loaderPromise) == null ? void 0 : _b.resolve();
					(_c = match.loadPromise) == null ? void 0 : _c.resolve();
					if (isRedirect(err)) {
						rendered = true;
						err = this.resolveRedirect({
							...err,
							_fromLocation: location
						});
						throw err;
					} else if (isNotFound(err)) {
						this._handleNotFound(matches, err, { updateMatch });
						throw err;
					}
				}
			};
			try {
				await new Promise((resolveAll, rejectAll) => {
					(async () => {
						var _a, _b, _c;
						try {
							const handleSerialError = (index, err, routerCode) => {
								var _a2, _b2;
								const { id: matchId, routeId } = matches[index];
								const route = this.looseRoutesById[routeId];
								if (err instanceof Promise) throw err;
								err.routerCode = routerCode;
								firstBadMatchIndex = firstBadMatchIndex ?? index;
								handleRedirectAndNotFound(this.getMatch(matchId), err);
								try {
									(_b2 = (_a2 = route.options).onError) == null ? void 0 : _b2.call(_a2, err);
								} catch (errorHandlerErr) {
									err = errorHandlerErr;
									handleRedirectAndNotFound(this.getMatch(matchId), err);
								}
								updateMatch(matchId, (prev) => {
									var _a3, _b3;
									(_a3 = prev.beforeLoadPromise) == null ? void 0 : _a3.resolve();
									(_b3 = prev.loadPromise) == null ? void 0 : _b3.resolve();
									return {
										...prev,
										error: err,
										status: "error",
										isFetching: false,
										updatedAt: Date.now(),
										abortController: new AbortController(),
										beforeLoadPromise: void 0
									};
								});
							};
							for (const [index, { id: matchId, routeId }] of matches.entries()) {
								const existingMatch = this.getMatch(matchId);
								const parentMatchId = (_a = matches[index - 1]) == null ? void 0 : _a.id;
								const route = this.looseRoutesById[routeId];
								const pendingMs = route.options.pendingMs ?? this.options.defaultPendingMs;
								const shouldPending = !!(onReady && !this.isServer && !resolvePreload(matchId) && (route.options.loader || route.options.beforeLoad) && typeof pendingMs === "number" && pendingMs !== Infinity && (route.options.pendingComponent ?? this.options.defaultPendingComponent));
								let executeBeforeLoad = true;
								if (existingMatch.beforeLoadPromise || existingMatch.loaderPromise) {
									if (shouldPending) setTimeout(() => {
										try {
											triggerOnReady();
										} catch {}
									}, pendingMs);
									await existingMatch.beforeLoadPromise;
									executeBeforeLoad = this.getMatch(matchId).status !== "success";
								}
								if (executeBeforeLoad) {
									try {
										updateMatch(matchId, (prev) => ({
											...prev,
											loadPromise: createControlledPromise(() => {
												var _a2;
												(_a2 = prev.loadPromise) == null ? void 0 : _a2.resolve();
											}),
											beforeLoadPromise: createControlledPromise()
										}));
										const abortController = new AbortController();
										let pendingTimeout;
										if (shouldPending) pendingTimeout = setTimeout(() => {
											try {
												triggerOnReady();
											} catch {}
										}, pendingMs);
										const { paramsError, searchError } = this.getMatch(matchId);
										if (paramsError) handleSerialError(index, paramsError, "PARSE_PARAMS");
										if (searchError) handleSerialError(index, searchError, "VALIDATE_SEARCH");
										const getParentMatchContext = () => parentMatchId ? this.getMatch(parentMatchId).context : this.options.context ?? {};
										updateMatch(matchId, (prev) => ({
											...prev,
											isFetching: "beforeLoad",
											fetchCount: prev.fetchCount + 1,
											abortController,
											pendingTimeout,
											context: {
												...getParentMatchContext(),
												...prev.__routeContext
											}
										}));
										const { search, params, context, cause } = this.getMatch(matchId);
										const preload = resolvePreload(matchId);
										const beforeLoadFnContext = {
											search,
											abortController,
											params,
											preload,
											context,
											location,
											navigate: (opts) => this.navigate({
												...opts,
												_fromLocation: location
											}),
											buildLocation: this.buildLocation,
											cause: preload ? "preload" : cause,
											matches
										};
										let beforeLoadContext = await ((_c = (_b = route.options).beforeLoad) == null ? void 0 : _c.call(_b, beforeLoadFnContext)) ?? {};
										if (this.serializeLoaderData) beforeLoadContext = this.serializeLoaderData("__beforeLoadContext", beforeLoadContext, {
											router: this,
											match: this.getMatch(matchId)
										});
										if (isRedirect(beforeLoadContext) || isNotFound(beforeLoadContext)) handleSerialError(index, beforeLoadContext, "BEFORE_LOAD");
										updateMatch(matchId, (prev) => {
											return {
												...prev,
												__beforeLoadContext: beforeLoadContext,
												context: {
													...getParentMatchContext(),
													...prev.__routeContext,
													...beforeLoadContext
												},
												abortController
											};
										});
									} catch (err) {
										handleSerialError(index, err, "BEFORE_LOAD");
									}
									updateMatch(matchId, (prev) => {
										var _a2;
										(_a2 = prev.beforeLoadPromise) == null ? void 0 : _a2.resolve();
										return {
											...prev,
											beforeLoadPromise: void 0,
											isFetching: false
										};
									});
								}
							}
							const validResolvedMatches = matches.slice(0, firstBadMatchIndex);
							const matchPromises = [];
							validResolvedMatches.forEach(({ id: matchId, routeId }, index) => {
								matchPromises.push((async () => {
									const { loaderPromise: prevLoaderPromise } = this.getMatch(matchId);
									let loaderShouldRunAsync = false;
									let loaderIsRunningAsync = false;
									if (prevLoaderPromise) {
										await prevLoaderPromise;
										const match = this.getMatch(matchId);
										if (match.error) handleRedirectAndNotFound(match, match.error);
									} else {
										const parentMatchPromise = matchPromises[index - 1];
										const route = this.looseRoutesById[routeId];
										const getLoaderContext = () => {
											const { params, loaderDeps, abortController, context, cause } = this.getMatch(matchId);
											const preload2 = resolvePreload(matchId);
											return {
												params,
												deps: loaderDeps,
												preload: !!preload2,
												parentMatchPromise,
												abortController,
												context,
												location,
												navigate: (opts) => this.navigate({
													...opts,
													_fromLocation: location
												}),
												cause: preload2 ? "preload" : cause,
												route
											};
										};
										const age = Date.now() - this.getMatch(matchId).updatedAt;
										const preload = resolvePreload(matchId);
										const staleAge = preload ? route.options.preloadStaleTime ?? this.options.defaultPreloadStaleTime ?? 3e4 : route.options.staleTime ?? this.options.defaultStaleTime ?? 0;
										const shouldReloadOption = route.options.shouldReload;
										const shouldReload = typeof shouldReloadOption === "function" ? shouldReloadOption(getLoaderContext()) : shouldReloadOption;
										updateMatch(matchId, (prev) => ({
											...prev,
											loaderPromise: createControlledPromise(),
											preload: !!preload && !this.state.matches.find((d) => d.id === matchId)
										}));
										const runLoader = async () => {
											var _a2, _b2, _c2, _d, _e, _f, _g, _h;
											try {
												const potentialPendingMinPromise = async () => {
													const latestMatch = this.getMatch(matchId);
													if (latestMatch.minPendingPromise) await latestMatch.minPendingPromise;
												};
												try {
													this.loadRouteChunk(route);
													updateMatch(matchId, (prev) => ({
														...prev,
														isFetching: "loader"
													}));
													let loaderData = await ((_b2 = (_a2 = route.options).loader) == null ? void 0 : _b2.call(_a2, getLoaderContext()));
													if (this.serializeLoaderData) loaderData = this.serializeLoaderData("loaderData", loaderData, {
														router: this,
														match: this.getMatch(matchId)
													});
													handleRedirectAndNotFound(this.getMatch(matchId), loaderData);
													await route._lazyPromise;
													await potentialPendingMinPromise();
													const headFnContent = (_d = (_c2 = route.options).head) == null ? void 0 : _d.call(_c2, {
														matches,
														match: this.getMatch(matchId),
														params: this.getMatch(matchId).params,
														loaderData
													});
													const meta = headFnContent == null ? void 0 : headFnContent.meta;
													const links = headFnContent == null ? void 0 : headFnContent.links;
													const scripts = headFnContent == null ? void 0 : headFnContent.scripts;
													const headers = (_f = (_e = route.options).headers) == null ? void 0 : _f.call(_e, { loaderData });
													updateMatch(matchId, (prev) => ({
														...prev,
														error: void 0,
														status: "success",
														isFetching: false,
														updatedAt: Date.now(),
														loaderData,
														meta,
														links,
														scripts,
														headers
													}));
												} catch (e) {
													let error = e;
													await potentialPendingMinPromise();
													handleRedirectAndNotFound(this.getMatch(matchId), e);
													try {
														(_h = (_g = route.options).onError) == null ? void 0 : _h.call(_g, e);
													} catch (onErrorError) {
														error = onErrorError;
														handleRedirectAndNotFound(this.getMatch(matchId), onErrorError);
													}
													updateMatch(matchId, (prev) => ({
														...prev,
														error,
														status: "error",
														isFetching: false
													}));
												}
												await route._componentsPromise;
											} catch (err) {
												updateMatch(matchId, (prev) => ({
													...prev,
													loaderPromise: void 0
												}));
												handleRedirectAndNotFound(this.getMatch(matchId), err);
											}
										};
										const { status, invalid } = this.getMatch(matchId);
										loaderShouldRunAsync = status === "success" && (invalid || (shouldReload ?? age > staleAge));
										if (preload && route.options.preload === false) {} else if (loaderShouldRunAsync && !sync) {
											loaderIsRunningAsync = true;
											(async () => {
												try {
													await runLoader();
													const { loaderPromise, loadPromise } = this.getMatch(matchId);
													loaderPromise == null ? void 0 : loaderPromise.resolve();
													loadPromise == null ? void 0 : loadPromise.resolve();
													updateMatch(matchId, (prev) => ({
														...prev,
														loaderPromise: void 0
													}));
												} catch (err) {
													if (isResolvedRedirect(err)) await this.navigate(err);
												}
											})();
										} else if (status !== "success" || loaderShouldRunAsync && sync) await runLoader();
									}
									if (!loaderIsRunningAsync) {
										const { loaderPromise, loadPromise } = this.getMatch(matchId);
										loaderPromise == null ? void 0 : loaderPromise.resolve();
										loadPromise == null ? void 0 : loadPromise.resolve();
									}
									updateMatch(matchId, (prev) => ({
										...prev,
										isFetching: loaderIsRunningAsync ? prev.isFetching : false,
										loaderPromise: loaderIsRunningAsync ? prev.loaderPromise : void 0,
										invalid: false
									}));
									return this.getMatch(matchId);
								})());
							});
							await Promise.all(matchPromises);
							resolveAll();
						} catch (err) {
							rejectAll(err);
						}
					})();
				});
				await triggerOnReady();
			} catch (err) {
				if (isRedirect(err) || isNotFound(err)) {
					if (isNotFound(err) && !allPreload) await triggerOnReady();
					throw err;
				}
			}
			return matches;
		};
		this.invalidate = (opts) => {
			const invalidate = (d) => {
				var _a;
				if (((_a = opts == null ? void 0 : opts.filter) == null ? void 0 : _a.call(opts, d)) ?? true) return {
					...d,
					invalid: true,
					...d.status === "error" ? {
						status: "pending",
						error: void 0
					} : {}
				};
				return d;
			};
			this.__store.setState((s) => {
				var _a;
				return {
					...s,
					matches: s.matches.map(invalidate),
					cachedMatches: s.cachedMatches.map(invalidate),
					pendingMatches: (_a = s.pendingMatches) == null ? void 0 : _a.map(invalidate)
				};
			});
			return this.load({ sync: opts == null ? void 0 : opts.sync });
		};
		this.resolveRedirect = (err) => {
			const redirect$1 = err;
			if (!redirect$1.href) redirect$1.href = this.buildLocation(redirect$1).href;
			return redirect$1;
		};
		this.clearCache = (opts) => {
			const filter = opts == null ? void 0 : opts.filter;
			if (filter !== void 0) this.__store.setState((s) => {
				return {
					...s,
					cachedMatches: s.cachedMatches.filter((m$1) => !filter(m$1))
				};
			});
else this.__store.setState((s) => {
				return {
					...s,
					cachedMatches: []
				};
			});
		};
		this.clearExpiredCache = () => {
			const filter = (d) => {
				const route = this.looseRoutesById[d.routeId];
				if (!route.options.loader) return true;
				const gcTime = (d.preload ? route.options.preloadGcTime ?? this.options.defaultPreloadGcTime : route.options.gcTime ?? this.options.defaultGcTime) ?? 3e5;
				return !(d.status !== "error" && Date.now() - d.updatedAt < gcTime);
			};
			this.clearCache({ filter });
		};
		this.loadRouteChunk = (route) => {
			if (route._lazyPromise === void 0) if (route.lazyFn) route._lazyPromise = route.lazyFn().then((lazyRoute) => {
				const { id: _id,...options2 } = lazyRoute.options;
				Object.assign(route.options, options2);
			});
else route._lazyPromise = Promise.resolve();
			if (route._componentsPromise === void 0) route._componentsPromise = route._lazyPromise.then(() => Promise.all(componentTypes.map(async (type) => {
				const component = route.options[type];
				if (component == null ? void 0 : component.preload) await component.preload();
			})));
			return route._componentsPromise;
		};
		this.preloadRoute = async (opts) => {
			const next = this.buildLocation(opts);
			let matches = this.matchRoutes(next, {
				throwOnError: true,
				preload: true,
				dest: opts
			});
			const activeMatchIds = new Set([...this.state.matches, ...this.state.pendingMatches ?? []].map((d) => d.id));
			const loadedMatchIds = /* @__PURE__ */ new Set([...activeMatchIds, ...this.state.cachedMatches.map((d) => d.id)]);
			batch(() => {
				matches.forEach((match) => {
					if (!loadedMatchIds.has(match.id)) this.__store.setState((s) => ({
						...s,
						cachedMatches: [...s.cachedMatches, match]
					}));
				});
			});
			try {
				matches = await this.loadMatches({
					matches,
					location: next,
					preload: true,
					updateMatch: (id, updater) => {
						if (activeMatchIds.has(id)) matches = matches.map((d) => d.id === id ? updater(d) : d);
else this.updateMatch(id, updater);
					}
				});
				return matches;
			} catch (err) {
				if (isRedirect(err)) {
					if (err.reloadDocument) return void 0;
					return await this.preloadRoute({
						...err,
						_fromLocation: next
					});
				}
				console.error(err);
				return void 0;
			}
		};
		this.matchRoute = (location, opts) => {
			const matchLocation = {
				...location,
				to: location.to ? this.resolvePathWithBase(location.from || "", location.to) : void 0,
				params: location.params || {},
				leaveParams: true
			};
			const next = this.buildLocation(matchLocation);
			if ((opts == null ? void 0 : opts.pending) && this.state.status !== "pending") return false;
			const pending = (opts == null ? void 0 : opts.pending) === void 0 ? !this.state.isLoading : opts.pending;
			const baseLocation = pending ? this.latestLocation : this.state.resolvedLocation;
			const match = matchPathname(this.basepath, baseLocation.pathname, {
				...opts,
				to: next.pathname
			});
			if (!match) return false;
			if (location.params) {
				if (!deepEqual(match, location.params, { partial: true })) return false;
			}
			if (match && ((opts == null ? void 0 : opts.includeSearch) ?? true)) return deepEqual(baseLocation.search, next.search, { partial: true }) ? match : false;
			return match;
		};
		this.dehydrate = () => {
			var _a;
			const pickError = ((_a = this.options.errorSerializer) == null ? void 0 : _a.serialize) ?? defaultSerializeError;
			return {
				state: { dehydratedMatches: this.state.matches.map((d) => {
					return {
						...pick(d, [
							"id",
							"status",
							"updatedAt"
						]),
						error: d.error ? {
							data: pickError(d.error),
							__isServerError: true
						} : void 0
					};
				}) },
				manifest: this.manifest
			};
		};
		this.hydrate = () => {
			var _a, _b, _c;
			let ctx;
			if (typeof document !== "undefined") ctx = this.options.transformer.parse((_a = window.__TSR__) == null ? void 0 : _a.dehydrated);
			invariant(ctx, "Expected to find a dehydrated data on window.__TSR__.dehydrated... but we did not. Please file an issue!");
			this.dehydratedData = ctx.payload;
			(_c = (_b = this.options).hydrate) == null ? void 0 : _c.call(_b, ctx.payload);
			const dehydratedState = ctx.router.state;
			const matches = this.matchRoutes(this.state.location).map((match) => {
				const dehydratedMatch = dehydratedState.dehydratedMatches.find((d) => d.id === match.id);
				invariant(dehydratedMatch, `Could not find a client-side match for dehydrated match with id: ${match.id}!`);
				return {
					...match,
					...dehydratedMatch
				};
			});
			this.__store.setState((s) => {
				return {
					...s,
					matches
				};
			});
			this.manifest = ctx.router.manifest;
		};
		this.injectedHtml = [];
		this.injectHtml = (html) => {
			const cb = () => {
				this.injectedHtml = this.injectedHtml.filter((d) => d !== cb);
				return html;
			};
			this.injectedHtml.push(cb);
		};
		this.injectScript = (script, opts) => {
			this.injectHtml(`<script class='tsr-once'>${script}${(opts == null ? void 0 : opts.logScript) ?? true ? `; console.info(\`Injected From Server:
${script}\`)` : ""}; if (typeof __TSR__ !== 'undefined') __TSR__.cleanScripts()<\/script>`);
		};
		this.streamedKeys = /* @__PURE__ */ new Set();
		this.getStreamedValue = (key) => {
			var _a;
			if (this.isServer) return void 0;
			const streamedValue = (_a = window.__TSR__) == null ? void 0 : _a.streamedValues[key];
			if (!streamedValue) return;
			if (!streamedValue.parsed) streamedValue.parsed = this.options.transformer.parse(streamedValue.value);
			return streamedValue.parsed;
		};
		this.streamValue = (key, value) => {
			var _a;
			tiny_warning_esm_default(!this.streamedKeys.has(key), "Key has already been streamed: " + key);
			this.streamedKeys.add(key);
			this.injectScript(`__TSR__.streamedValues['${key}'] = { value: ${(_a = this.serializer) == null ? void 0 : _a.call(this, this.options.transformer.stringify(value))}}`);
		};
		this._handleNotFound = (matches, err, { updateMatch = this.updateMatch } = {}) => {
			const matchesByRouteId = Object.fromEntries(matches.map((match2) => [match2.routeId, match2]));
			let routeCursor = (err.global ? this.looseRoutesById[rootRouteId] : this.looseRoutesById[err.routeId]) || this.looseRoutesById[rootRouteId];
			while (!routeCursor.options.notFoundComponent && !this.options.defaultNotFoundComponent && routeCursor.id !== rootRouteId) {
				routeCursor = routeCursor.parentRoute;
				invariant(routeCursor, "Found invalid route tree while trying to find not-found handler.");
			}
			const match = matchesByRouteId[routeCursor.id];
			invariant(match, "Could not find match for route: " + routeCursor.id);
			updateMatch(match.id, (prev) => ({
				...prev,
				status: "notFound",
				error: err,
				isFetching: false
			}));
			if (err.routerCode === "BEFORE_LOAD" && routeCursor.parentRoute) {
				err.routeId = routeCursor.parentRoute.id;
				this._handleNotFound(matches, err, { updateMatch });
			}
		};
		this.hasNotFoundMatch = () => {
			return this.__store.state.matches.some((d) => d.status === "notFound" || d.globalNotFound);
		};
		this.update({
			defaultPreloadDelay: 50,
			defaultPendingMs: 1e3,
			defaultPendingMinMs: 500,
			context: void 0,
			...options,
			caseSensitive: options.caseSensitive ?? false,
			notFoundMode: options.notFoundMode ?? "fuzzy",
			stringifySearch: options.stringifySearch ?? defaultStringifySearch,
			parseSearch: options.parseSearch ?? defaultParseSearch,
			transformer: options.transformer ?? defaultTransformer
		});
		if (typeof document !== "undefined") window.__TSR__ROUTER__ = this;
	}
	get state() {
		return this.__store.state;
	}
	get looseRoutesById() {
		return this.routesById;
	}
	matchRoutes(pathnameOrNext, locationSearchOrOpts, opts) {
		if (typeof pathnameOrNext === "string") return this.matchRoutesInternal({
			pathname: pathnameOrNext,
			search: locationSearchOrOpts
		}, opts);
else return this.matchRoutesInternal(pathnameOrNext, locationSearchOrOpts);
	}
	matchRoutesInternal(next, opts) {
		const { foundRoute, matchedRoutes, routeParams } = this.getMatchedRoutes(next, opts == null ? void 0 : opts.dest);
		let isGlobalNotFound = false;
		if (foundRoute ? foundRoute.path !== "/" && routeParams["**"] : trimPathRight(next.pathname)) if (this.options.notFoundRoute) matchedRoutes.push(this.options.notFoundRoute);
else isGlobalNotFound = true;
		const globalNotFoundRouteId = (() => {
			if (!isGlobalNotFound) return void 0;
			if (this.options.notFoundMode !== "root") for (let i$1 = matchedRoutes.length - 1; i$1 >= 0; i$1--) {
				const route = matchedRoutes[i$1];
				if (route.children) return route.id;
			}
			return rootRouteId;
		})();
		const parseErrors = matchedRoutes.map((route) => {
			var _a;
			let parsedParamsError;
			const parseParams = ((_a = route.options.params) == null ? void 0 : _a.parse) ?? route.options.parseParams;
			if (parseParams) try {
				const parsedParams = parseParams(routeParams);
				Object.assign(routeParams, parsedParams);
			} catch (err) {
				parsedParamsError = new PathParamError(err.message, { cause: err });
				if (opts == null ? void 0 : opts.throwOnError) throw parsedParamsError;
				return parsedParamsError;
			}
			return;
		});
		const matches = [];
		const getParentContext = (parentMatch) => {
			const parentMatchId = parentMatch == null ? void 0 : parentMatch.id;
			const parentContext = !parentMatchId ? this.options.context ?? {} : parentMatch.context ?? this.options.context ?? {};
			return parentContext;
		};
		matchedRoutes.forEach((route, index) => {
			var _a, _b, _c, _d;
			const parentMatch = matches[index - 1];
			const [preMatchSearch, searchError] = (() => {
				const parentSearch = (parentMatch == null ? void 0 : parentMatch.search) ?? next.search;
				try {
					const search = validateSearch(route.options.validateSearch, parentSearch) ?? {};
					return [{
						...parentSearch,
						...search
					}, void 0];
				} catch (err) {
					const searchParamError = new SearchParamError(err.message, { cause: err });
					if (opts == null ? void 0 : opts.throwOnError) throw searchParamError;
					return [parentSearch, searchParamError];
				}
			})();
			const loaderDeps = ((_b = (_a = route.options).loaderDeps) == null ? void 0 : _b.call(_a, { search: preMatchSearch })) ?? "";
			const loaderDepsHash = loaderDeps ? JSON.stringify(loaderDeps) : "";
			const interpolatedPath = interpolatePath({
				path: route.fullPath,
				params: routeParams,
				decodeCharMap: this.pathParamsDecodeCharMap
			});
			const matchId = interpolatePath({
				path: route.id,
				params: routeParams,
				leaveWildcards: true,
				decodeCharMap: this.pathParamsDecodeCharMap
			}) + loaderDepsHash;
			const existingMatch = this.getMatch(matchId);
			const previousMatch = this.state.matches.find((d) => d.routeId === route.id);
			const cause = previousMatch ? "stay" : "enter";
			let match;
			if (existingMatch) match = {
				...existingMatch,
				cause,
				params: previousMatch ? replaceEqualDeep(previousMatch.params, routeParams) : routeParams,
				search: previousMatch ? replaceEqualDeep(previousMatch.search, preMatchSearch) : replaceEqualDeep(existingMatch.search, preMatchSearch)
			};
else {
				const status = route.options.loader || route.options.beforeLoad || route.lazyFn || routeNeedsPreload(route) ? "pending" : "success";
				match = {
					id: matchId,
					index,
					routeId: route.id,
					params: previousMatch ? replaceEqualDeep(previousMatch.params, routeParams) : routeParams,
					pathname: joinPaths([this.basepath, interpolatedPath]),
					updatedAt: Date.now(),
					search: previousMatch ? replaceEqualDeep(previousMatch.search, preMatchSearch) : preMatchSearch,
					searchError: void 0,
					status,
					isFetching: false,
					error: void 0,
					paramsError: parseErrors[index],
					__routeContext: {},
					__beforeLoadContext: {},
					context: {},
					abortController: new AbortController(),
					fetchCount: 0,
					cause,
					loaderDeps: previousMatch ? replaceEqualDeep(previousMatch.loaderDeps, loaderDeps) : loaderDeps,
					invalid: false,
					preload: false,
					links: void 0,
					scripts: void 0,
					meta: void 0,
					staticData: route.options.staticData || {},
					loadPromise: createControlledPromise(),
					fullPath: route.fullPath
				};
			}
			if (match.status === "success") match.headers = (_d = (_c = route.options).headers) == null ? void 0 : _d.call(_c, { loaderData: match.loaderData });
			if (!(opts == null ? void 0 : opts.preload)) match.globalNotFound = globalNotFoundRouteId === route.id;
			match.searchError = searchError;
			const parentContext = getParentContext(parentMatch);
			match.context = {
				...parentContext,
				...match.__routeContext,
				...match.__beforeLoadContext
			};
			matches.push(match);
		});
		matches.forEach((match, index) => {
			var _a, _b, _c, _d;
			const route = this.looseRoutesById[match.routeId];
			const existingMatch = this.getMatch(match.id);
			if (!existingMatch && (opts == null ? void 0 : opts._buildLocation) !== true) {
				const parentMatch = matches[index - 1];
				const parentContext = getParentContext(parentMatch);
				const contextFnContext = {
					deps: match.loaderDeps,
					params: match.params,
					context: parentContext,
					location: next,
					navigate: (opts2) => this.navigate({
						...opts2,
						_fromLocation: next
					}),
					buildLocation: this.buildLocation,
					cause: match.cause,
					abortController: match.abortController,
					preload: !!match.preload,
					matches
				};
				match.__routeContext = ((_b = (_a = route.options).context) == null ? void 0 : _b.call(_a, contextFnContext)) ?? {};
				match.context = {
					...parentContext,
					...match.__routeContext,
					...match.__beforeLoadContext
				};
			}
			const headFnContent = (_d = (_c = route.options).head) == null ? void 0 : _d.call(_c, {
				matches,
				match,
				params: match.params,
				loaderData: match.loaderData ?? void 0
			});
			match.links = headFnContent == null ? void 0 : headFnContent.links;
			match.scripts = headFnContent == null ? void 0 : headFnContent.scripts;
			match.meta = headFnContent == null ? void 0 : headFnContent.meta;
		});
		return matches;
	}
};
var SearchParamError = class extends Error {};
var PathParamError = class extends Error {};
function getInitialRouterState(location) {
	return {
		loadedAt: 0,
		isLoading: false,
		isTransitioning: false,
		status: "idle",
		resolvedLocation: { ...location },
		location,
		matches: [],
		pendingMatches: [],
		cachedMatches: [],
		statusCode: 200
	};
}
function defaultSerializeError(err) {
	if (err instanceof Error) {
		const obj = {
			name: err.name,
			message: err.message
		};
		obj.stack = err.stack;
		return obj;
	}
	return { data: err };
}

//#endregion
//#region node_modules/@tanstack/react-router/dist/esm/isServerSideError.js
function isServerSideError(error) {
	if (!(typeof error === "object" && error && "data" in error)) return false;
	if (!("__isServerError" in error && error.__isServerError)) return false;
	if (!(typeof error.data === "object" && error.data)) return false;
	return error.__isServerError === true;
}
function defaultDeserializeError(serializedData) {
	if ("name" in serializedData && "message" in serializedData) {
		const error = new Error(serializedData.message);
		error.name = serializedData.name;
		error.stack = serializedData.stack;
		return error;
	}
	return serializedData.data;
}

//#endregion
//#region node_modules/@tanstack/react-router/dist/esm/matchContext.js
var import_react$7 = __toESM(require_react(), 1);
const matchContext = import_react$7.createContext(void 0);
const dummyMatchContext = import_react$7.createContext(void 0);

//#endregion
//#region node_modules/@tanstack/react-router/dist/esm/useMatch.js
var import_react$6 = __toESM(require_react(), 1);
function useMatch(opts) {
	const nearestMatchId = import_react$6.useContext(opts.from ? dummyMatchContext : matchContext);
	const matchSelection = useRouterState({
		select: (state) => {
			const match = state.matches.find((d) => opts.from ? opts.from === d.routeId : d.id === nearestMatchId);
			invariant(!((opts.shouldThrow ?? true) && !match), `Could not find ${opts.from ? `an active match from "${opts.from}"` : "a nearest match!"}`);
			if (match === void 0) return void 0;
			return opts.select ? opts.select(match) : match;
		},
		structuralSharing: opts.structuralSharing
	});
	return matchSelection;
}

//#endregion
//#region node_modules/@tanstack/react-router/dist/esm/useLoaderData.js
function useLoaderData(opts) {
	return useMatch({
		from: opts.from,
		strict: opts.strict,
		structuralSharing: opts.structuralSharing,
		select: (s) => {
			return opts.select ? opts.select(s.loaderData) : s.loaderData;
		}
	});
}

//#endregion
//#region node_modules/@tanstack/react-router/dist/esm/useLoaderDeps.js
function useLoaderDeps(opts) {
	const { select,...rest } = opts;
	return useMatch({
		...rest,
		select: (s) => {
			return select ? select(s.loaderDeps) : s.loaderDeps;
		}
	});
}

//#endregion
//#region node_modules/@tanstack/react-router/dist/esm/useParams.js
function useParams(opts) {
	return useMatch({
		from: opts.from,
		strict: opts.strict,
		structuralSharing: opts.structuralSharing,
		select: (match) => {
			return opts.select ? opts.select(match.params) : match.params;
		}
	});
}

//#endregion
//#region node_modules/@tanstack/react-router/dist/esm/useSearch.js
function useSearch(opts) {
	return useMatch({
		from: opts.from,
		strict: opts.strict,
		structuralSharing: opts.structuralSharing,
		select: (match) => {
			return opts.select ? opts.select(match.search) : match.search;
		}
	});
}

//#endregion
//#region node_modules/@tanstack/react-router/dist/esm/useNavigate.js
var import_react$5 = __toESM(require_react(), 1);
function useNavigate(_defaultOpts) {
	const { navigate } = useRouter();
	return import_react$5.useCallback((options) => {
		return navigate({ ...options });
	}, [navigate]);
}

//#endregion
//#region node_modules/@tanstack/react-router/dist/esm/route.js
var Route$7 = class {
	/**
	* @deprecated Use the `createRoute` function instead.
	*/
	constructor(options) {
		this.init = (opts) => {
			var _a, _b;
			this.originalIndex = opts.originalIndex;
			const options2 = this.options;
			const isRoot = !(options2 == null ? void 0 : options2.path) && !(options2 == null ? void 0 : options2.id);
			this.parentRoute = (_b = (_a = this.options).getParentRoute) == null ? void 0 : _b.call(_a);
			if (isRoot) this._path = rootRouteId;
else invariant(this.parentRoute, `Child Route instances must pass a 'getParentRoute: () => ParentRoute' option that returns a Route instance.`);
			let path = isRoot ? rootRouteId : options2.path;
			if (path && path !== "/") path = trimPathLeft(path);
			const customId = (options2 == null ? void 0 : options2.id) || path;
			let id = isRoot ? rootRouteId : joinPaths([this.parentRoute.id === rootRouteId ? "" : this.parentRoute.id, customId]);
			if (path === rootRouteId) path = "/";
			if (id !== rootRouteId) id = joinPaths(["/", id]);
			const fullPath = id === rootRouteId ? "/" : joinPaths([this.parentRoute.fullPath, path]);
			this._path = path;
			this._id = id;
			this._fullPath = fullPath;
			this._to = fullPath;
			this._ssr = (options2 == null ? void 0 : options2.ssr) ?? opts.defaultSsr ?? true;
		};
		this.updateLoader = (options2) => {
			Object.assign(this.options, options2);
			return this;
		};
		this.update = (options2) => {
			Object.assign(this.options, options2);
			return this;
		};
		this.lazy = (lazyFn) => {
			this.lazyFn = lazyFn;
			return this;
		};
		this.useMatch = (opts) => {
			return useMatch({
				select: opts == null ? void 0 : opts.select,
				from: this.id,
				structuralSharing: opts == null ? void 0 : opts.structuralSharing
			});
		};
		this.useRouteContext = (opts) => {
			return useMatch({
				...opts,
				from: this.id,
				select: (d) => (opts == null ? void 0 : opts.select) ? opts.select(d.context) : d.context
			});
		};
		this.useSearch = (opts) => {
			return useSearch({
				select: opts == null ? void 0 : opts.select,
				structuralSharing: opts == null ? void 0 : opts.structuralSharing,
				from: this.id
			});
		};
		this.useParams = (opts) => {
			return useParams({
				select: opts == null ? void 0 : opts.select,
				structuralSharing: opts == null ? void 0 : opts.structuralSharing,
				from: this.id
			});
		};
		this.useLoaderDeps = (opts) => {
			return useLoaderDeps({
				...opts,
				from: this.id
			});
		};
		this.useLoaderData = (opts) => {
			return useLoaderData({
				...opts,
				from: this.id
			});
		};
		this.useNavigate = () => {
			return useNavigate({ from: this.id });
		};
		this.options = options || {};
		this.isRoot = !(options == null ? void 0 : options.getParentRoute);
		invariant(!((options == null ? void 0 : options.id) && (options == null ? void 0 : options.path)), `Route cannot have both an 'id' and a 'path' option.`);
		this.$$typeof = Symbol.for("react.memo");
	}
	get to() {
		return this._to;
	}
	get id() {
		return this._id;
	}
	get path() {
		return this._path;
	}
	get fullPath() {
		return this._fullPath;
	}
	get ssr() {
		return this._ssr;
	}
	addChildren(children) {
		return this._addFileChildren(children);
	}
	_addFileChildren(children) {
		if (Array.isArray(children)) this.children = children;
		if (typeof children === "object" && children !== null) this.children = Object.values(children);
		return this;
	}
};
function createRoute(options) {
	return new Route$7(options);
}
var RootRoute = class extends Route$7 {
	/**
	* @deprecated `RootRoute` is now an internal implementation detail. Use `createRootRoute()` instead.
	*/
	constructor(options) {
		super(options);
	}
	addChildren(children) {
		super.addChildren(children);
		return this;
	}
	_addFileChildren(children) {
		super._addFileChildren(children);
		return this;
	}
	_addFileTypes() {
		return this;
	}
};
function createRootRoute(options) {
	return new RootRoute(options);
}

//#endregion
//#region node_modules/@tanstack/react-router/dist/esm/fileRoute.js
function createFileRoute(path) {
	return new FileRoute(path, { silent: true }).createRoute;
}
var FileRoute = class {
	constructor(path, _opts) {
		this.path = path;
		this.createRoute = (options) => {
			tiny_warning_esm_default(this.silent, "FileRoute is deprecated and will be removed in the next major version. Use the createFileRoute(path)(options) function instead.");
			const route = createRoute(options);
			route.isRoot = false;
			return route;
		};
		this.silent = _opts == null ? void 0 : _opts.silent;
	}
};

//#endregion
//#region node_modules/@tanstack/react-router/dist/esm/SafeFragment.js
var import_jsx_runtime$13 = __toESM(require_jsx_runtime(), 1);
function SafeFragment(props) {
	return /* @__PURE__ */ (0, import_jsx_runtime$13.jsx)(import_jsx_runtime$13.Fragment, { children: props.children });
}

//#endregion
//#region node_modules/@tanstack/react-router/dist/esm/renderRouteNotFound.js
var import_jsx_runtime$12 = __toESM(require_jsx_runtime(), 1);
function renderRouteNotFound(router$1, route, data) {
	if (!route.options.notFoundComponent) {
		if (router$1.options.defaultNotFoundComponent) return /* @__PURE__ */ (0, import_jsx_runtime$12.jsx)(router$1.options.defaultNotFoundComponent, { data });
		tiny_warning_esm_default(route.options.notFoundComponent, `A notFoundError was encountered on the route with ID "${route.id}", but a notFoundComponent option was not configured, nor was a router level defaultNotFoundComponent configured. Consider configuring at least one of these to avoid TanStack Router's overly generic defaultNotFoundComponent (<div>Not Found<div>)`);
		return /* @__PURE__ */ (0, import_jsx_runtime$12.jsx)(DefaultGlobalNotFound, {});
	}
	return /* @__PURE__ */ (0, import_jsx_runtime$12.jsx)(route.options.notFoundComponent, { data });
}

//#endregion
//#region node_modules/@tanstack/react-router/dist/esm/Match.js
"use client";
var import_jsx_runtime$11 = __toESM(require_jsx_runtime(), 1);
var import_react$4 = __toESM(require_react(), 1);
const Match = import_react$4.memo(function MatchImpl({ matchId }) {
	var _a, _b;
	const router$1 = useRouter();
	const routeId = useRouterState({ select: (s) => {
		var _a2;
		return (_a2 = s.matches.find((d) => d.id === matchId)) == null ? void 0 : _a2.routeId;
	} });
	invariant(routeId, `Could not find routeId for matchId "${matchId}". Please file an issue!`);
	const route = router$1.routesById[routeId];
	const PendingComponent = route.options.pendingComponent ?? router$1.options.defaultPendingComponent;
	const pendingElement = PendingComponent ? /* @__PURE__ */ (0, import_jsx_runtime$11.jsx)(PendingComponent, {}) : null;
	const routeErrorComponent = route.options.errorComponent ?? router$1.options.defaultErrorComponent;
	const routeOnCatch = route.options.onCatch ?? router$1.options.defaultOnCatch;
	const routeNotFoundComponent = route.isRoot ? route.options.notFoundComponent ?? ((_a = router$1.options.notFoundRoute) == null ? void 0 : _a.options.component) : route.options.notFoundComponent;
	const ResolvedSuspenseBoundary = (!route.isRoot || route.options.wrapInSuspense) && (route.options.wrapInSuspense ?? PendingComponent ?? ((_b = route.options.errorComponent) == null ? void 0 : _b.preload)) ? import_react$4.Suspense : SafeFragment;
	const ResolvedCatchBoundary = routeErrorComponent ? CatchBoundary : SafeFragment;
	const ResolvedNotFoundBoundary = routeNotFoundComponent ? CatchNotFound : SafeFragment;
	const resetKey = useRouterState({ select: (s) => s.loadedAt });
	return /* @__PURE__ */ (0, import_jsx_runtime$11.jsx)(matchContext.Provider, {
		value: matchId,
		children: /* @__PURE__ */ (0, import_jsx_runtime$11.jsx)(ResolvedSuspenseBoundary, {
			fallback: pendingElement,
			children: /* @__PURE__ */ (0, import_jsx_runtime$11.jsx)(ResolvedCatchBoundary, {
				getResetKey: () => resetKey,
				errorComponent: routeErrorComponent || ErrorComponent,
				onCatch: (error, errorInfo) => {
					if (isNotFound(error)) throw error;
					tiny_warning_esm_default(false, `Error in route match: ${matchId}`);
					routeOnCatch == null ? void 0 : routeOnCatch(error, errorInfo);
				},
				children: /* @__PURE__ */ (0, import_jsx_runtime$11.jsx)(ResolvedNotFoundBoundary, {
					fallback: (error) => {
						if (!routeNotFoundComponent || error.routeId && error.routeId !== routeId || !error.routeId && !route.isRoot) throw error;
						return import_react$4.createElement(routeNotFoundComponent, error);
					},
					children: /* @__PURE__ */ (0, import_jsx_runtime$11.jsx)(MatchInner, { matchId })
				})
			})
		})
	});
});
const MatchInner = import_react$4.memo(function MatchInnerImpl({ matchId }) {
	var _a, _b, _c, _d, _e;
	const router$1 = useRouter();
	const { match, matchIndex, routeId } = useRouterState({
		select: (s) => {
			const matchIndex2 = s.matches.findIndex((d) => d.id === matchId);
			const match2 = s.matches[matchIndex2];
			const routeId2 = match2.routeId;
			return {
				routeId: routeId2,
				matchIndex: matchIndex2,
				match: pick(match2, [
					"id",
					"status",
					"error"
				])
			};
		},
		structuralSharing: true
	});
	const route = router$1.routesById[routeId];
	const out = import_react$4.useMemo(() => {
		const Comp = route.options.component ?? router$1.options.defaultComponent;
		return Comp ? /* @__PURE__ */ (0, import_jsx_runtime$11.jsx)(Comp, {}) : /* @__PURE__ */ (0, import_jsx_runtime$11.jsx)(Outlet, {});
	}, [route.options.component, router$1.options.defaultComponent]);
	const RouteErrorComponent = (route.options.errorComponent ?? router$1.options.defaultErrorComponent) || ErrorComponent;
	if (match.status === "notFound") {
		let error;
		if (isServerSideError(match.error)) {
			const deserializeError = ((_a = router$1.options.errorSerializer) == null ? void 0 : _a.deserialize) ?? defaultDeserializeError;
			error = deserializeError(match.error.data);
		} else error = match.error;
		invariant(isNotFound(error), "Expected a notFound error");
		return renderRouteNotFound(router$1, route, error);
	}
	if (match.status === "redirected") {
		invariant(isRedirect(match.error), "Expected a redirect error");
		throw (_b = router$1.getMatch(match.id)) == null ? void 0 : _b.loadPromise;
	}
	if (match.status === "error") {
		if (router$1.isServer) return /* @__PURE__ */ (0, import_jsx_runtime$11.jsx)(RouteErrorComponent, {
			error: match.error,
			info: { componentStack: "" }
		});
		if (isServerSideError(match.error)) {
			const deserializeError = ((_c = router$1.options.errorSerializer) == null ? void 0 : _c.deserialize) ?? defaultDeserializeError;
			throw deserializeError(match.error.data);
		} else throw match.error;
	}
	if (match.status === "pending") {
		const pendingMinMs = route.options.pendingMinMs ?? router$1.options.defaultPendingMinMs;
		if (pendingMinMs && !((_d = router$1.getMatch(match.id)) == null ? void 0 : _d.minPendingPromise)) {
			if (!router$1.isServer) {
				const minPendingPromise = createControlledPromise();
				Promise.resolve().then(() => {
					router$1.updateMatch(match.id, (prev) => ({
						...prev,
						minPendingPromise
					}));
				});
				setTimeout(() => {
					minPendingPromise.resolve();
					router$1.updateMatch(match.id, (prev) => ({
						...prev,
						minPendingPromise: void 0
					}));
				}, pendingMinMs);
			}
		}
		throw (_e = router$1.getMatch(match.id)) == null ? void 0 : _e.loadPromise;
	}
	return /* @__PURE__ */ (0, import_jsx_runtime$11.jsxs)(import_jsx_runtime$11.Fragment, { children: [out, router$1.AfterEachMatch ? /* @__PURE__ */ (0, import_jsx_runtime$11.jsx)(router$1.AfterEachMatch, {
		match,
		matchIndex
	}) : null] });
});
const Outlet = import_react$4.memo(function OutletImpl() {
	const router$1 = useRouter();
	const matchId = import_react$4.useContext(matchContext);
	const routeId = useRouterState({ select: (s) => {
		var _a;
		return (_a = s.matches.find((d) => d.id === matchId)) == null ? void 0 : _a.routeId;
	} });
	const route = router$1.routesById[routeId];
	const parentGlobalNotFound = useRouterState({ select: (s) => {
		const matches = s.matches;
		const parentMatch = matches.find((d) => d.id === matchId);
		invariant(parentMatch, `Could not find parent match for matchId "${matchId}"`);
		return parentMatch.globalNotFound;
	} });
	const childMatchId = useRouterState({ select: (s) => {
		var _a;
		const matches = s.matches;
		const index = matches.findIndex((d) => d.id === matchId);
		return (_a = matches[index + 1]) == null ? void 0 : _a.id;
	} });
	if (parentGlobalNotFound) return renderRouteNotFound(router$1, route, void 0);
	if (!childMatchId) return null;
	const nextMatch = /* @__PURE__ */ (0, import_jsx_runtime$11.jsx)(Match, { matchId: childMatchId });
	const pendingElement = router$1.options.defaultPendingComponent ? /* @__PURE__ */ (0, import_jsx_runtime$11.jsx)(router$1.options.defaultPendingComponent, {}) : null;
	if (matchId === rootRouteId) return /* @__PURE__ */ (0, import_jsx_runtime$11.jsx)(import_react$4.Suspense, {
		fallback: pendingElement,
		children: nextMatch
	});
	return nextMatch;
});

//#endregion
//#region node_modules/@tanstack/react-router/dist/esm/link.js
"use client";
var import_jsx_runtime$10 = __toESM(require_jsx_runtime(), 1);
var import_react$3 = __toESM(require_react(), 1);
var import_react_dom = __toESM(require_react_dom(), 1);
const preloadWarning = "Error preloading route! ☝️";
function useLinkProps(options, forwardedRef) {
	const router$1 = useRouter();
	const [isTransitioning, setIsTransitioning] = import_react$3.useState(false);
	const hasRenderFetched = import_react$3.useRef(false);
	const innerRef = useForwardedRef(forwardedRef);
	const { activeProps = () => ({ className: "active" }), inactiveProps = () => ({}), activeOptions, to, preload: userPreload, preloadDelay: userPreloadDelay, hashScrollIntoView, replace, startTransition, resetScroll, viewTransition, children, target, disabled, style, className, onClick, onFocus, onMouseEnter, onMouseLeave, onTouchStart, ignoreBlocker,...rest } = options;
	const { params: _params, search: _search, hash: _hash, state: _state, mask: _mask, reloadDocument: _reloadDocument,...propsSafeToSpread } = rest;
	const type = import_react$3.useMemo(() => {
		try {
			new URL(`${to}`);
			return "external";
		} catch {}
		return "internal";
	}, [to]);
	const currentSearch = useRouterState({
		select: (s) => s.location.search,
		structuralSharing: true
	});
	const parentRouteId = useMatch({
		strict: false,
		select: (s) => s.pathname
	});
	options = {
		from: parentRouteId,
		...options
	};
	const next = import_react$3.useMemo(() => router$1.buildLocation(options), [
		router$1,
		options,
		currentSearch
	]);
	const preload = import_react$3.useMemo(() => {
		if (options.reloadDocument) return false;
		return userPreload ?? router$1.options.defaultPreload;
	}, [
		router$1.options.defaultPreload,
		userPreload,
		options.reloadDocument
	]);
	const preloadDelay = userPreloadDelay ?? router$1.options.defaultPreloadDelay ?? 0;
	const isActive = useRouterState({ select: (s) => {
		if (activeOptions == null ? void 0 : activeOptions.exact) {
			const testExact = exactPathTest(s.location.pathname, next.pathname, router$1.basepath);
			if (!testExact) return false;
		} else {
			const currentPathSplit = removeTrailingSlash(s.location.pathname, router$1.basepath).split("/");
			const nextPathSplit = removeTrailingSlash(next.pathname, router$1.basepath).split("/");
			const pathIsFuzzyEqual = nextPathSplit.every((d, i$1) => d === currentPathSplit[i$1]);
			if (!pathIsFuzzyEqual) return false;
		}
		if ((activeOptions == null ? void 0 : activeOptions.includeSearch) ?? true) {
			const searchTest = deepEqual(s.location.search, next.search, {
				partial: !(activeOptions == null ? void 0 : activeOptions.exact),
				ignoreUndefined: !(activeOptions == null ? void 0 : activeOptions.explicitUndefined)
			});
			if (!searchTest) return false;
		}
		if (activeOptions == null ? void 0 : activeOptions.includeHash) return s.location.hash === next.hash;
		return true;
	} });
	const doPreload = import_react$3.useCallback(() => {
		router$1.preloadRoute(options).catch((err) => {
			console.warn(err);
			console.warn(preloadWarning);
		});
	}, [options, router$1]);
	const preloadViewportIoCallback = import_react$3.useCallback((entry) => {
		if (entry == null ? void 0 : entry.isIntersecting) doPreload();
	}, [doPreload]);
	useIntersectionObserver(innerRef, preloadViewportIoCallback, { rootMargin: "100px" }, { disabled: !!disabled || !(preload === "viewport") });
	useLayoutEffect(() => {
		if (hasRenderFetched.current) return;
		if (!disabled && preload === "render") {
			doPreload();
			hasRenderFetched.current = true;
		}
	}, [
		disabled,
		doPreload,
		preload
	]);
	if (type === "external") return {
		...propsSafeToSpread,
		ref: innerRef,
		type,
		href: to,
		...children && { children },
		...target && { target },
		...disabled && { disabled },
		...style && { style },
		...className && { className },
		...onClick && { onClick },
		...onFocus && { onFocus },
		...onMouseEnter && { onMouseEnter },
		...onMouseLeave && { onMouseLeave },
		...onTouchStart && { onTouchStart }
	};
	const handleClick = (e) => {
		if (!disabled && !isCtrlEvent(e) && !e.defaultPrevented && (!target || target === "_self") && e.button === 0) {
			e.preventDefault();
			(0, import_react_dom.flushSync)(() => {
				setIsTransitioning(true);
			});
			const unsub = router$1.subscribe("onResolved", () => {
				unsub();
				setIsTransitioning(false);
			});
			return router$1.navigate({
				...options,
				replace,
				resetScroll,
				hashScrollIntoView,
				startTransition,
				viewTransition,
				ignoreBlocker
			});
		}
	};
	const handleFocus = (_) => {
		if (disabled) return;
		if (preload) doPreload();
	};
	const handleTouchStart = handleFocus;
	const handleEnter = (e) => {
		if (disabled) return;
		const eventTarget = e.target || {};
		if (preload) {
			if (eventTarget.preloadTimeout) return;
			eventTarget.preloadTimeout = setTimeout(() => {
				eventTarget.preloadTimeout = null;
				doPreload();
			}, preloadDelay);
		}
	};
	const handleLeave = (e) => {
		if (disabled) return;
		const eventTarget = e.target || {};
		if (eventTarget.preloadTimeout) {
			clearTimeout(eventTarget.preloadTimeout);
			eventTarget.preloadTimeout = null;
		}
	};
	const composeHandlers = (handlers) => (e) => {
		var _a;
		(_a = e.persist) == null ? void 0 : _a.call(e);
		handlers.filter(Boolean).forEach((handler) => {
			if (e.defaultPrevented) return;
			handler(e);
		});
	};
	const resolvedActiveProps = isActive ? functionalUpdate(activeProps, {}) ?? {} : {};
	const resolvedInactiveProps = isActive ? {} : functionalUpdate(inactiveProps, {});
	const resolvedClassName = [
		className,
		resolvedActiveProps.className,
		resolvedInactiveProps.className
	].filter(Boolean).join(" ");
	const resolvedStyle = {
		...style,
		...resolvedActiveProps.style,
		...resolvedInactiveProps.style
	};
	return {
		...propsSafeToSpread,
		...resolvedActiveProps,
		...resolvedInactiveProps,
		href: disabled ? void 0 : next.maskedLocation ? router$1.history.createHref(next.maskedLocation.href) : router$1.history.createHref(next.href),
		ref: innerRef,
		onClick: composeHandlers([onClick, handleClick]),
		onFocus: composeHandlers([onFocus, handleFocus]),
		onMouseEnter: composeHandlers([onMouseEnter, handleEnter]),
		onMouseLeave: composeHandlers([onMouseLeave, handleLeave]),
		onTouchStart: composeHandlers([onTouchStart, handleTouchStart]),
		disabled: !!disabled,
		target,
		...Object.keys(resolvedStyle).length && { style: resolvedStyle },
		...resolvedClassName && { className: resolvedClassName },
		...disabled && {
			role: "link",
			"aria-disabled": true
		},
		...isActive && {
			"data-status": "active",
			"aria-current": "page"
		},
		...isTransitioning && { "data-transitioning": "transitioning" }
	};
}
const Link = import_react$3.forwardRef((props, ref) => {
	const { _asChild,...rest } = props;
	const { type: _type, ref: innerRef,...linkProps } = useLinkProps(rest, ref);
	const children = typeof rest.children === "function" ? rest.children({ isActive: linkProps["data-status"] === "active" }) : rest.children;
	if (typeof _asChild === "undefined") delete linkProps.disabled;
	return import_react$3.createElement(_asChild ? _asChild : "a", {
		...linkProps,
		ref: innerRef
	}, children);
});
function isCtrlEvent(e) {
	return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}

//#endregion
//#region node_modules/@tanstack/react-router/dist/esm/Transitioner.js
var import_react$2 = __toESM(require_react(), 1);
function Transitioner() {
	const router$1 = useRouter();
	const mountLoadForRouter = import_react$2.useRef({
		router: router$1,
		mounted: false
	});
	const isLoading = useRouterState({ select: ({ isLoading: isLoading2 }) => isLoading2 });
	const [isTransitioning, setIsTransitioning] = import_react$2.useState(false);
	const hasPendingMatches = useRouterState({
		select: (s) => s.matches.some((d) => d.status === "pending"),
		structuralSharing: true
	});
	const previousIsLoading = usePrevious(isLoading);
	const isAnyPending = isLoading || isTransitioning || hasPendingMatches;
	const previousIsAnyPending = usePrevious(isAnyPending);
	const isPagePending = isLoading || hasPendingMatches;
	const previousIsPagePending = usePrevious(isPagePending);
	if (!router$1.isServer) router$1.startReactTransition = (fn) => {
		setIsTransitioning(true);
		import_react$2.startTransition(() => {
			fn();
			setIsTransitioning(false);
		});
	};
	import_react$2.useEffect(() => {
		const unsub = router$1.history.subscribe(router$1.load);
		const nextLocation = router$1.buildLocation({
			to: router$1.latestLocation.pathname,
			search: true,
			params: true,
			hash: true,
			state: true,
			_includeValidateSearch: true
		});
		if (trimPathRight(router$1.latestLocation.href) !== trimPathRight(nextLocation.href)) router$1.commitLocation({
			...nextLocation,
			replace: true
		});
		return () => {
			unsub();
		};
	}, [router$1, router$1.history]);
	useLayoutEffect(() => {
		var _a;
		if (typeof window !== "undefined" && ((_a = window.__TSR__) == null ? void 0 : _a.dehydrated) || mountLoadForRouter.current.router === router$1 && mountLoadForRouter.current.mounted) return;
		mountLoadForRouter.current = {
			router: router$1,
			mounted: true
		};
		const tryLoad = async () => {
			try {
				await router$1.load();
			} catch (err) {
				console.error(err);
			}
		};
		tryLoad();
	}, [router$1]);
	useLayoutEffect(() => {
		if (previousIsLoading && !isLoading) {
			const toLocation = router$1.state.location;
			const fromLocation = router$1.state.resolvedLocation;
			const pathChanged = fromLocation.pathname !== toLocation.pathname;
			const hrefChanged = fromLocation.href !== toLocation.href;
			router$1.emit({
				type: "onLoad",
				fromLocation,
				toLocation,
				pathChanged,
				hrefChanged
			});
		}
	}, [
		previousIsLoading,
		router$1,
		isLoading
	]);
	useLayoutEffect(() => {
		if (previousIsPagePending && !isPagePending) {
			const toLocation = router$1.state.location;
			const fromLocation = router$1.state.resolvedLocation;
			const pathChanged = fromLocation.pathname !== toLocation.pathname;
			const hrefChanged = fromLocation.href !== toLocation.href;
			router$1.emit({
				type: "onBeforeRouteMount",
				fromLocation,
				toLocation,
				pathChanged,
				hrefChanged
			});
		}
	}, [
		isPagePending,
		previousIsPagePending,
		router$1
	]);
	useLayoutEffect(() => {
		if (previousIsAnyPending && !isAnyPending) {
			const toLocation = router$1.state.location;
			const fromLocation = router$1.state.resolvedLocation;
			const pathChanged = fromLocation.pathname !== toLocation.pathname;
			const hrefChanged = fromLocation.href !== toLocation.href;
			router$1.emit({
				type: "onResolved",
				fromLocation,
				toLocation,
				pathChanged,
				hrefChanged
			});
			router$1.__store.setState((s) => ({
				...s,
				status: "idle",
				resolvedLocation: s.location
			}));
			if (typeof document !== "undefined" && document.querySelector) {
				const hashScrollIntoViewOptions = router$1.state.location.state.__hashScrollIntoViewOptions ?? true;
				if (hashScrollIntoViewOptions && router$1.state.location.hash !== "") {
					const el = document.getElementById(router$1.state.location.hash);
					if (el) el.scrollIntoView(hashScrollIntoViewOptions);
				}
			}
		}
	}, [
		isAnyPending,
		previousIsAnyPending,
		router$1
	]);
	return null;
}

//#endregion
//#region node_modules/@tanstack/react-router/dist/esm/Matches.js
var import_jsx_runtime$9 = __toESM(require_jsx_runtime(), 1);
var import_react$1 = __toESM(require_react(), 1);
function Matches() {
	const router$1 = useRouter();
	const pendingElement = router$1.options.defaultPendingComponent ? /* @__PURE__ */ (0, import_jsx_runtime$9.jsx)(router$1.options.defaultPendingComponent, {}) : null;
	const ResolvedSuspense = router$1.isServer || typeof document !== "undefined" && window.__TSR__ ? SafeFragment : import_react$1.Suspense;
	const inner = /* @__PURE__ */ (0, import_jsx_runtime$9.jsxs)(ResolvedSuspense, {
		fallback: pendingElement,
		children: [/* @__PURE__ */ (0, import_jsx_runtime$9.jsx)(Transitioner, {}), /* @__PURE__ */ (0, import_jsx_runtime$9.jsx)(MatchesInner, {})]
	});
	return router$1.options.InnerWrap ? /* @__PURE__ */ (0, import_jsx_runtime$9.jsx)(router$1.options.InnerWrap, { children: inner }) : inner;
}
function MatchesInner() {
	const matchId = useRouterState({ select: (s) => {
		var _a;
		return (_a = s.matches[0]) == null ? void 0 : _a.id;
	} });
	const resetKey = useRouterState({ select: (s) => s.loadedAt });
	return /* @__PURE__ */ (0, import_jsx_runtime$9.jsx)(matchContext.Provider, {
		value: matchId,
		children: /* @__PURE__ */ (0, import_jsx_runtime$9.jsx)(CatchBoundary, {
			getResetKey: () => resetKey,
			errorComponent: ErrorComponent,
			onCatch: (error) => {
				tiny_warning_esm_default(false, `The following error wasn't caught by any route! At the very least, consider setting an 'errorComponent' in your RootRoute!`);
				tiny_warning_esm_default(false, error.message || error.toString());
			},
			children: matchId ? /* @__PURE__ */ (0, import_jsx_runtime$9.jsx)(Match, { matchId }) : null
		})
	});
}

//#endregion
//#region node_modules/@tanstack/react-router/dist/esm/RouterProvider.js
var import_jsx_runtime$8 = __toESM(require_jsx_runtime(), 1);
function RouterContextProvider({ router: router$1, children,...rest }) {
	router$1.update({
		...router$1.options,
		...rest,
		context: {
			...router$1.options.context,
			...rest.context
		}
	});
	const routerContext$1 = getRouterContext();
	const provider = /* @__PURE__ */ (0, import_jsx_runtime$8.jsx)(routerContext$1.Provider, {
		value: router$1,
		children
	});
	if (router$1.options.Wrap) return /* @__PURE__ */ (0, import_jsx_runtime$8.jsx)(router$1.options.Wrap, { children: provider });
	return provider;
}
function RouterProvider({ router: router$1,...rest }) {
	return /* @__PURE__ */ (0, import_jsx_runtime$8.jsx)(RouterContextProvider, {
		router: router$1,
		...rest,
		children: /* @__PURE__ */ (0, import_jsx_runtime$8.jsx)(Matches, {})
	});
}

//#endregion
//#region client/routes/__root.tsx
var import_jsx_runtime$7 = __toESM(require_jsx_runtime(), 1);
const Route$6 = createRootRoute({ component: RootComponent });
function RootComponent() {
	return (0, import_jsx_runtime$7.jsxs)(import_jsx_runtime$7.Fragment, { children: [
		(0, import_jsx_runtime$7.jsxs)("div", {
			className: "p-2 flex gap-2 text-lg",
			children: [
				(0, import_jsx_runtime$7.jsx)(Link, {
					to: "/",
					activeProps: { className: "font-bold" },
					activeOptions: { exact: true },
					children: "Home"
				}),
				" ",
				(0, import_jsx_runtime$7.jsx)(Link, {
					to: "/about",
					activeProps: { className: "font-bold" },
					children: "About1"
				})
			]
		}),
		(0, import_jsx_runtime$7.jsx)("hr", {}),
		(0, import_jsx_runtime$7.jsx)(Outlet, {})
	] });
}

//#endregion
//#region client/routes/register.tsx
var import_jsx_runtime$6 = __toESM(require_jsx_runtime(), 1);
const Route$5 = createFileRoute("/register")({ component: RouteComponent$1 });
function RouteComponent$1() {
	const register = async (e) => {
		e.preventDefault();
		console.log("login");
		const formData = new FormData(e.target);
		const username = formData.get("username");
		const password = formData.get("password");
		(await client.users.register.$post({ form: {
			username,
			password
		} })).json().then((data) => {
			console.log(data);
		});
	};
	return (0, import_jsx_runtime$6.jsxs)("div", {
		className: "p-20 max-w-md mx-auto",
		children: [(0, import_jsx_runtime$6.jsx)("h3", { children: "Create User" }), (0, import_jsx_runtime$6.jsxs)("form", {
			onSubmit: register,
			className: "flex flex-col space-y-4",
			children: [
				(0, import_jsx_runtime$6.jsx)(Input, {
					name: "username",
					type: "text",
					placeholder: "Username"
				}),
				(0, import_jsx_runtime$6.jsx)(Input, {
					name: "password",
					type: "password",
					placeholder: "Password"
				}),
				(0, import_jsx_runtime$6.jsx)(Button, { children: "Register" })
			]
		})]
	});
}

//#endregion
//#region client/routes/login.tsx
var import_jsx_runtime$5 = __toESM(require_jsx_runtime(), 1);
const Route$4 = createFileRoute("/login")({ component: LoginComponent });
function LoginComponent() {
	const navigate = useNavigate();
	const login = async (e) => {
		e.preventDefault();
		console.log("login");
		const formData = new FormData(e.target);
		const username = formData.get("username");
		const password = formData.get("password");
		(await client.users.login.$post({ form: {
			username,
			password
		} }, { init: { credentials: "include" } })).json().then((data) => {
			console.log(data);
			if (data.username) navigate({
				to: `/stock-market/$userId/user`,
				params: { userId: data.username }
			});
		});
	};
	return (0, import_jsx_runtime$5.jsxs)("div", {
		className: "p-20 max-w-md mx-auto",
		children: [(0, import_jsx_runtime$5.jsx)("h3", { children: "Login User" }), (0, import_jsx_runtime$5.jsxs)("form", {
			onSubmit: login,
			className: "flex flex-col space-y-4",
			children: [
				(0, import_jsx_runtime$5.jsx)(Input, {
					name: "username",
					type: "text",
					placeholder: "Username"
				}),
				(0, import_jsx_runtime$5.jsx)(Input, {
					name: "password",
					type: "password",
					placeholder: "Password"
				}),
				(0, import_jsx_runtime$5.jsx)(Button, { children: "Login" })
			]
		})]
	});
}

//#endregion
//#region client/routes/about.tsx
var import_jsx_runtime$4 = __toESM(require_jsx_runtime(), 1);
const Route$3 = createFileRoute("/about")({
	component: AboutComponent,
	loader: async () => await (await client.stuff.$get()).json()
});
function AboutComponent() {
	const posts = Route$3.useLoaderData();
	return (0, import_jsx_runtime$4.jsxs)("div", {
		className: "p-20",
		children: [
			(0, import_jsx_runtime$4.jsx)("h3", { children: "About1" }),
			(0, import_jsx_runtime$4.jsx)(Button, { children: "Click me" }),
			(0, import_jsx_runtime$4.jsx)("p", { children: posts.message })
		]
	});
}

//#endregion
//#region client/routes/index.tsx
var import_jsx_runtime$3 = __toESM(require_jsx_runtime(), 1);
const Route$2 = createFileRoute("/")({ component: HomeComponent });
function HomeComponent() {
	return (0, import_jsx_runtime$3.jsxs)("div", {
		className: "p-20",
		children: [(0, import_jsx_runtime$3.jsx)("h3", { children: "Welcome Home!" }), (0, import_jsx_runtime$3.jsx)("ul", { children: "hi whats up" })]
	});
}

//#endregion
//#region client/routes/stock-market/$userId/_layout.tsx
var import_jsx_runtime$2 = __toESM(require_jsx_runtime(), 1);
const Route$1 = createFileRoute("/stock-market/$userId/_layout")({
	component: RouteComponent,
	beforeLoad: async () => {
		const data = await (await client.users.checklogin.$get(undefined, { init: { credentials: "include" } })).json();
		if (!data.user) return redirect({ to: "/login" });
		return {
			user: data.user,
			session: data.session
		};
	}
});
function RouteComponent() {
	return (0, import_jsx_runtime$2.jsx)(Outlet, {});
}

//#endregion
//#region client/routes/stock-market/$userId/_layout.user.tsx
var import_react = __toESM(require_react(), 1);
var import_jsx_runtime$1 = __toESM(require_jsx_runtime(), 1);
const Route = createFileRoute("/stock-market/$userId/_layout/user")({
	component: User,
	loader: ({ context }) => {
		return context;
	}
});
function User() {
	const data = Route.useLoaderData();
	const [userList, setUserList] = (0, import_react.useState)([]);
	return (0, import_jsx_runtime$1.jsxs)("div", {
		className: "p-20",
		children: [
			(0, import_jsx_runtime$1.jsxs)("h3", { children: ["About ", data.user.name] }),
			(0, import_jsx_runtime$1.jsx)(Button, { children: "Click me" }),
			(0, import_jsx_runtime$1.jsx)("ul", { children: userList.map((user) => (0, import_jsx_runtime$1.jsx)("li", { children: user.name }, user.id)) })
		]
	});
}

//#endregion
//#region client/routeTree.gen.ts
const StockMarketUserIdImport = createFileRoute("/stock-market/$userId")();
const RegisterRoute = Route$5.update({
	id: "/register",
	path: "/register",
	getParentRoute: () => Route$6
});
const LoginRoute = Route$4.update({
	id: "/login",
	path: "/login",
	getParentRoute: () => Route$6
});
const AboutRoute = Route$3.update({
	id: "/about",
	path: "/about",
	getParentRoute: () => Route$6
});
const IndexRoute = Route$2.update({
	id: "/",
	path: "/",
	getParentRoute: () => Route$6
});
const StockMarketUserIdRoute = StockMarketUserIdImport.update({
	id: "/stock-market/$userId",
	path: "/stock-market/$userId",
	getParentRoute: () => Route$6
});
const StockMarketUserIdLayoutRoute = Route$1.update({
	id: "/_layout",
	getParentRoute: () => StockMarketUserIdRoute
});
const StockMarketUserIdLayoutUserRoute = Route.update({
	id: "/user",
	path: "/user",
	getParentRoute: () => StockMarketUserIdLayoutRoute
});
const StockMarketUserIdLayoutRouteChildren = { StockMarketUserIdLayoutUserRoute };
const StockMarketUserIdLayoutRouteWithChildren = StockMarketUserIdLayoutRoute._addFileChildren(StockMarketUserIdLayoutRouteChildren);
const StockMarketUserIdRouteChildren = { StockMarketUserIdLayoutRoute: StockMarketUserIdLayoutRouteWithChildren };
const StockMarketUserIdRouteWithChildren = StockMarketUserIdRoute._addFileChildren(StockMarketUserIdRouteChildren);
const rootRouteChildren = {
	IndexRoute,
	AboutRoute,
	LoginRoute,
	RegisterRoute,
	StockMarketUserIdRoute: StockMarketUserIdRouteWithChildren
};
const routeTree = Route$6._addFileChildren(rootRouteChildren)._addFileTypes();

//#endregion
//#region client/main.tsx
var import_client = __toESM(require_client(), 1);
var import_jsx_runtime = __toESM(require_jsx_runtime(), 1);
const router = createRouter({
	routeTree,
	defaultPreload: "intent",
	defaultPendingMinMs: 0
});
const rootElement = document.getElementById("app");
if (!rootElement.innerHTML) {
	const root = import_client.default.createRoot(rootElement);
	root.render((0, import_jsx_runtime.jsx)(RouterProvider, { router }));
}

//#endregion