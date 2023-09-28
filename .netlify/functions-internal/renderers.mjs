import { i as server_default } from './chunks/astro.713e64d5.mjs';
import React, { createElement } from 'react';
import ReactDOM from 'react-dom/server';
import { __awaiter } from 'tslib';
import 'zone.js/bundles/zone-node.umd.js';
import { i as internalCreateApplication, P as PLATFORM_ID, a as PLATFORM_BROWSER_ID, b as PLATFORM_INITIALIZER, D as DOCUMENT, I as InjectionToken, c as INJECTOR_SCOPE, E as ErrorHandler, N as NgZone, R as RendererFactory2, X as XhrFactory, ɵ as ɵɵdefineInjectable, d as ɵɵinject, A as APP_ID, C as CSP_NONCE, s as setRootDomAdapter, p as parseCookieValue, e as RuntimeError, f as isPlatformServer, V as ViewEncapsulation$1, g as RendererStyleFlags2, h as getDOM, j as DomAdapter, k as setDocument, l as ANIMATION_MODULE_TYPE, m as ApplicationRef, n as IS_HYDRATION_DOM_REUSE_ENABLED, o as annotateForHydration, q as createPlatformFactory, r as makeEnvironmentProviders, S as SSR_CONTENT_INTEGRITY_MARKER, t as ENABLED_SSR_FEATURES, u as Renderer2, T as Testability, v as TESTABILITY, w as ViewportScroller, x as NullViewportScroller, y as platformCore, z as TransferState, B as Injector, F as PLATFORM_SERVER_ID, G as PlatformLocation, O as Optional, H as ALLOW_MULTIPLE_PLATFORMS, J as reflectComponentType } from './chunks/pages/housing.astro.3e968176.mjs';
import { Subject } from 'rxjs';
import * as url from 'url';
import { first } from 'rxjs/operators';
import 'cookie';
import 'kleur/colors';
import '@astrojs/internal-helpers/path';
import 'path-to-regexp';
import 'mime';
import 'string-width';
import 'html-escaper';
/* empty css                                   */import './chunks/pages/angularProject.md.53c16156.mjs';
import 'react/jsx-runtime';
/* empty css                                          *//* empty css                                          */
/**
 * Astro passes `children` as a string of HTML, so we need
 * a wrapper `div` to render that content as VNodes.
 *
 * As a bonus, we can signal to React that this subtree is
 * entirely static and will never change via `shouldComponentUpdate`.
 */
const StaticHtml = ({
  value,
  name,
  hydrate = true
}) => {
  if (!value) return null;
  const tagName = hydrate ? 'astro-slot' : 'astro-static-slot';
  return createElement(tagName, {
    name,
    suppressHydrationWarning: true,
    dangerouslySetInnerHTML: {
      __html: value
    }
  });
};

/**
 * This tells React to opt-out of re-rendering this subtree,
 * In addition to being a performance optimization,
 * this also allows other frameworks to attach to `children`.
 *
 * See https://preactjs.com/guide/v8/external-dom-mutations
 */
StaticHtml.shouldComponentUpdate = () => false;

const contexts = new WeakMap();
const ID_PREFIX = 'r';
function getContext(rendererContextResult) {
  if (contexts.has(rendererContextResult)) {
    return contexts.get(rendererContextResult);
  }
  const ctx = {
    currentIndex: 0,
    get id() {
      return ID_PREFIX + this.currentIndex.toString();
    }
  };
  contexts.set(rendererContextResult, ctx);
  return ctx;
}
function incrementId(rendererContextResult) {
  const ctx = getContext(rendererContextResult);
  const id = ctx.id;
  ctx.currentIndex++;
  return id;
}

const opts = {
						experimentalReactChildren: false
					};

const slotName = str => str.trim().replace(/[-_]([a-z])/g, (_, w) => w.toUpperCase());
const reactTypeof = Symbol.for('react.element');
function errorIsComingFromPreactComponent(err) {
  return err.message && (err.message.startsWith("Cannot read property '__H'") || err.message.includes("(reading '__H')"));
}
async function check$1(Component, props, children) {
  // Note: there are packages that do some unholy things to create "components".
  // Checking the $$typeof property catches most of these patterns.
  if (typeof Component === 'object') {
    return Component['$$typeof'].toString().slice('Symbol('.length).startsWith('react');
  }
  if (typeof Component !== 'function') return false;
  if (Component.prototype != null && typeof Component.prototype.render === 'function') {
    return React.Component.isPrototypeOf(Component) || React.PureComponent.isPrototypeOf(Component);
  }
  let error = null;
  let isReactComponent = false;
  function Tester(...args) {
    try {
      const vnode = Component(...args);
      if (vnode && vnode['$$typeof'] === reactTypeof) {
        isReactComponent = true;
      }
    } catch (err) {
      if (!errorIsComingFromPreactComponent(err)) {
        error = err;
      }
    }
    return React.createElement('div');
  }
  await renderToStaticMarkup$1(Tester, props, children, {});
  if (error) {
    throw error;
  }
  return isReactComponent;
}
async function getNodeWritable() {
  let nodeStreamBuiltinModuleName = 'stream';
  let {
    Writable
  } = await import( /* @vite-ignore */nodeStreamBuiltinModuleName);
  return Writable;
}
function needsHydration(metadata) {
  // Adjust how this is hydrated only when the version of Astro supports `astroStaticSlot`
  return metadata.astroStaticSlot ? !!metadata.hydrate : true;
}
async function renderToStaticMarkup$1(Component, props, {
  default: children,
  ...slotted
}, metadata) {
  let prefix;
  if (this && this.result) {
    prefix = incrementId(this.result);
  }
  const attrs = {
    prefix
  };
  delete props['class'];
  const slots = {};
  for (const [key, value] of Object.entries(slotted)) {
    const name = slotName(key);
    slots[name] = React.createElement(StaticHtml, {
      hydrate: needsHydration(metadata),
      value,
      name
    });
  }
  // Note: create newProps to avoid mutating `props` before they are serialized
  const newProps = {
    ...props,
    ...slots
  };
  const newChildren = children ?? props.children;
  if (children && opts.experimentalReactChildren) {
    const convert = await import('./chunks/vnode-children.cbdb2e55.mjs').then(mod => mod.default);
    newProps.children = convert(children);
  } else if (newChildren != null) {
    newProps.children = React.createElement(StaticHtml, {
      hydrate: needsHydration(metadata),
      value: newChildren
    });
  }
  const vnode = React.createElement(Component, newProps);
  const renderOptions = {
    identifierPrefix: prefix
  };
  let html;
  if (metadata?.hydrate) {
    if ('renderToReadableStream' in ReactDOM) {
      html = await renderToReadableStreamAsync(vnode, renderOptions);
    } else {
      html = await renderToPipeableStreamAsync(vnode, renderOptions);
    }
  } else {
    if ('renderToReadableStream' in ReactDOM) {
      html = await renderToReadableStreamAsync(vnode, renderOptions);
    } else {
      html = await renderToStaticNodeStreamAsync(vnode, renderOptions);
    }
  }
  return {
    html,
    attrs
  };
}
async function renderToPipeableStreamAsync(vnode, options) {
  const Writable = await getNodeWritable();
  let html = '';
  return new Promise((resolve, reject) => {
    let error = undefined;
    let stream = ReactDOM.renderToPipeableStream(vnode, {
      ...options,
      onError(err) {
        error = err;
        reject(error);
      },
      onAllReady() {
        stream.pipe(new Writable({
          write(chunk, _encoding, callback) {
            html += chunk.toString('utf-8');
            callback();
          },
          destroy() {
            resolve(html);
          }
        }));
      }
    });
  });
}
async function renderToStaticNodeStreamAsync(vnode, options) {
  const Writable = await getNodeWritable();
  let html = '';
  return new Promise((resolve, reject) => {
    let stream = ReactDOM.renderToStaticNodeStream(vnode, options);
    stream.on('error', err => {
      reject(err);
    });
    stream.pipe(new Writable({
      write(chunk, _encoding, callback) {
        html += chunk.toString('utf-8');
        callback();
      },
      destroy() {
        resolve(html);
      }
    }));
  });
}

/**
 * Use a while loop instead of "for await" due to cloudflare and Vercel Edge issues
 * See https://github.com/facebook/react/issues/24169
 */
async function readResult(stream) {
  const reader = stream.getReader();
  let result = '';
  const decoder = new TextDecoder('utf-8');
  while (true) {
    const {
      done,
      value
    } = await reader.read();
    if (done) {
      if (value) {
        result += decoder.decode(value);
      } else {
        // This closes the decoder
        decoder.decode(new Uint8Array());
      }
      return result;
    }
    result += decoder.decode(value, {
      stream: true
    });
  }
}
async function renderToReadableStreamAsync(vnode, options) {
  return await readResult(await ReactDOM.renderToReadableStream(vnode, options));
}
const _renderer1 = {
  check: check$1,
  renderToStaticMarkup: renderToStaticMarkup$1,
  supportsAstroStaticSlot: true
};

/**
 * @license Angular v16.2.2
 * (c) 2010-2022 Google LLC. https://angular.io/
 * License: MIT
 */


/**
 * Provides DOM operations in any browser environment.
 *
 * @security Tread carefully! Interacting with the DOM directly is dangerous and
 * can introduce XSS risks.
 */
class GenericBrowserDomAdapter extends DomAdapter {
  constructor() {
    super(...arguments);
    this.supportsDOMEvents = true;
  }
}

/**
 * A `DomAdapter` powered by full browser DOM APIs.
 *
 * @security Tread carefully! Interacting with the DOM directly is dangerous and
 * can introduce XSS risks.
 */
/* tslint:disable:requireParameterType no-console */
class BrowserDomAdapter extends GenericBrowserDomAdapter {
  static makeCurrent() {
    setRootDomAdapter(new BrowserDomAdapter());
  }
  onAndCancel(el, evt, listener) {
    el.addEventListener(evt, listener);
    return () => {
      el.removeEventListener(evt, listener);
    };
  }
  dispatchEvent(el, evt) {
    el.dispatchEvent(evt);
  }
  remove(node) {
    if (node.parentNode) {
      node.parentNode.removeChild(node);
    }
  }
  createElement(tagName, doc) {
    doc = doc || this.getDefaultDocument();
    return doc.createElement(tagName);
  }
  createHtmlDocument() {
    return document.implementation.createHTMLDocument('fakeTitle');
  }
  getDefaultDocument() {
    return document;
  }
  isElementNode(node) {
    return node.nodeType === Node.ELEMENT_NODE;
  }
  isShadowRoot(node) {
    return node instanceof DocumentFragment;
  }
  /** @deprecated No longer being used in Ivy code. To be removed in version 14. */
  getGlobalEventTarget(doc, target) {
    if (target === 'window') {
      return window;
    }
    if (target === 'document') {
      return doc;
    }
    if (target === 'body') {
      return doc.body;
    }
    return null;
  }
  getBaseHref(doc) {
    const href = getBaseElementHref();
    return href == null ? null : relativePath(href);
  }
  resetBaseElement() {
    baseElement = null;
  }
  getUserAgent() {
    return window.navigator.userAgent;
  }
  getCookie(name) {
    return parseCookieValue(document.cookie, name);
  }
}
let baseElement = null;
function getBaseElementHref() {
  baseElement = baseElement || document.querySelector('base');
  return baseElement ? baseElement.getAttribute('href') : null;
}
// based on urlUtils.js in AngularJS 1
let urlParsingNode;
function relativePath(url) {
  urlParsingNode = urlParsingNode || document.createElement('a');
  urlParsingNode.setAttribute('href', url);
  const pathName = urlParsingNode.pathname;
  return pathName.charAt(0) === '/' ? pathName : `/${pathName}`;
}

/**
 * A factory for `HttpXhrBackend` that uses the `XMLHttpRequest` browser API.
 */
let BrowserXhr = /*#__PURE__*/(() => {
  var _class;
  class BrowserXhr {
    build() {
      return new XMLHttpRequest();
    }
  }
  _class = BrowserXhr;
  _class.ɵfac = function _class_Factory(t) {
    return new (t || _class)();
  };
  _class.ɵprov = /* @__PURE__ */ɵɵdefineInjectable({
    token: _class,
    factory: _class.ɵfac
  });
  return BrowserXhr;
})();

/**
 * The injection token for the event-manager plug-in service.
 *
 * @publicApi
 */
const EVENT_MANAGER_PLUGINS = /*#__PURE__*/new InjectionToken('EventManagerPlugins');
/**
 * An injectable service that provides event management for Angular
 * through a browser plug-in.
 *
 * @publicApi
 */
let EventManager = /*#__PURE__*/(() => {
  var _class2;
  class EventManager {
    /**
     * Initializes an instance of the event-manager service.
     */
    constructor(plugins, _zone) {
      this._zone = _zone;
      this._eventNameToPlugin = new Map();
      plugins.forEach(plugin => {
        plugin.manager = this;
      });
      this._plugins = plugins.slice().reverse();
    }
    /**
     * Registers a handler for a specific element and event.
     *
     * @param element The HTML element to receive event notifications.
     * @param eventName The name of the event to listen for.
     * @param handler A function to call when the notification occurs. Receives the
     * event object as an argument.
     * @returns  A callback function that can be used to remove the handler.
     */
    addEventListener(element, eventName, handler) {
      const plugin = this._findPluginFor(eventName);
      return plugin.addEventListener(element, eventName, handler);
    }
    /**
     * Retrieves the compilation zone in which event listeners are registered.
     */
    getZone() {
      return this._zone;
    }
    /** @internal */
    _findPluginFor(eventName) {
      let plugin = this._eventNameToPlugin.get(eventName);
      if (plugin) {
        return plugin;
      }
      const plugins = this._plugins;
      plugin = plugins.find(plugin => plugin.supports(eventName));
      if (!plugin) {
        throw new RuntimeError(5101 /* RuntimeErrorCode.NO_PLUGIN_FOR_EVENT */, (typeof ngDevMode === 'undefined' || ngDevMode) && `No event manager plugin found for event ${eventName}`);
      }
      this._eventNameToPlugin.set(eventName, plugin);
      return plugin;
    }
  }
  _class2 = EventManager;
  _class2.ɵfac = function _class2_Factory(t) {
    return new (t || _class2)(ɵɵinject(EVENT_MANAGER_PLUGINS), ɵɵinject(NgZone));
  };
  _class2.ɵprov = /* @__PURE__ */ɵɵdefineInjectable({
    token: _class2,
    factory: _class2.ɵfac
  });
  return EventManager;
})();
class EventManagerPlugin {
  constructor(_doc) {
    this._doc = _doc;
  }
}

/** The style elements attribute name used to set value of `APP_ID` token. */
const APP_ID_ATTRIBUTE_NAME = 'ng-app-id';
let SharedStylesHost = /*#__PURE__*/(() => {
  var _class3;
  class SharedStylesHost {
    constructor(doc, appId, nonce, platformId = {}) {
      this.doc = doc;
      this.appId = appId;
      this.nonce = nonce;
      this.platformId = platformId;
      // Maps all registered host nodes to a list of style nodes that have been added to the host node.
      this.styleRef = new Map();
      this.hostNodes = new Set();
      this.styleNodesInDOM = this.collectServerRenderedStyles();
      this.platformIsServer = isPlatformServer(platformId);
      this.resetHostNodes();
    }
    addStyles(styles) {
      for (const style of styles) {
        const usageCount = this.changeUsageCount(style, 1);
        if (usageCount === 1) {
          this.onStyleAdded(style);
        }
      }
    }
    removeStyles(styles) {
      for (const style of styles) {
        const usageCount = this.changeUsageCount(style, -1);
        if (usageCount <= 0) {
          this.onStyleRemoved(style);
        }
      }
    }
    ngOnDestroy() {
      const styleNodesInDOM = this.styleNodesInDOM;
      if (styleNodesInDOM) {
        styleNodesInDOM.forEach(node => node.remove());
        styleNodesInDOM.clear();
      }
      for (const style of this.getAllStyles()) {
        this.onStyleRemoved(style);
      }
      this.resetHostNodes();
    }
    addHost(hostNode) {
      this.hostNodes.add(hostNode);
      for (const style of this.getAllStyles()) {
        this.addStyleToHost(hostNode, style);
      }
    }
    removeHost(hostNode) {
      this.hostNodes.delete(hostNode);
    }
    getAllStyles() {
      return this.styleRef.keys();
    }
    onStyleAdded(style) {
      for (const host of this.hostNodes) {
        this.addStyleToHost(host, style);
      }
    }
    onStyleRemoved(style) {
      const styleRef = this.styleRef;
      styleRef.get(style)?.elements?.forEach(node => node.remove());
      styleRef.delete(style);
    }
    collectServerRenderedStyles() {
      const styles = this.doc.head?.querySelectorAll(`style[${APP_ID_ATTRIBUTE_NAME}="${this.appId}"]`);
      if (styles?.length) {
        const styleMap = new Map();
        styles.forEach(style => {
          if (style.textContent != null) {
            styleMap.set(style.textContent, style);
          }
        });
        return styleMap;
      }
      return null;
    }
    changeUsageCount(style, delta) {
      const map = this.styleRef;
      if (map.has(style)) {
        const styleRefValue = map.get(style);
        styleRefValue.usage += delta;
        return styleRefValue.usage;
      }
      map.set(style, {
        usage: delta,
        elements: []
      });
      return delta;
    }
    getStyleElement(host, style) {
      const styleNodesInDOM = this.styleNodesInDOM;
      const styleEl = styleNodesInDOM?.get(style);
      if (styleEl?.parentNode === host) {
        // `styleNodesInDOM` cannot be undefined due to the above `styleNodesInDOM?.get`.
        styleNodesInDOM.delete(style);
        styleEl.removeAttribute(APP_ID_ATTRIBUTE_NAME);
        if (typeof ngDevMode === 'undefined' || ngDevMode) {
          // This attribute is solely used for debugging purposes.
          styleEl.setAttribute('ng-style-reused', '');
        }
        return styleEl;
      } else {
        const styleEl = this.doc.createElement('style');
        if (this.nonce) {
          styleEl.setAttribute('nonce', this.nonce);
        }
        styleEl.textContent = style;
        if (this.platformIsServer) {
          styleEl.setAttribute(APP_ID_ATTRIBUTE_NAME, this.appId);
        }
        return styleEl;
      }
    }
    addStyleToHost(host, style) {
      const styleEl = this.getStyleElement(host, style);
      host.appendChild(styleEl);
      const styleRef = this.styleRef;
      const styleElRef = styleRef.get(style)?.elements;
      if (styleElRef) {
        styleElRef.push(styleEl);
      } else {
        styleRef.set(style, {
          elements: [styleEl],
          usage: 1
        });
      }
    }
    resetHostNodes() {
      const hostNodes = this.hostNodes;
      hostNodes.clear();
      // Re-add the head element back since this is the default host.
      hostNodes.add(this.doc.head);
    }
  }
  _class3 = SharedStylesHost;
  _class3.ɵfac = function _class3_Factory(t) {
    return new (t || _class3)(ɵɵinject(DOCUMENT), ɵɵinject(APP_ID), ɵɵinject(CSP_NONCE, 8), ɵɵinject(PLATFORM_ID));
  };
  _class3.ɵprov = /* @__PURE__ */ɵɵdefineInjectable({
    token: _class3,
    factory: _class3.ɵfac
  });
  return SharedStylesHost;
})();
const NAMESPACE_URIS = {
  'svg': 'http://www.w3.org/2000/svg',
  'xhtml': 'http://www.w3.org/1999/xhtml',
  'xlink': 'http://www.w3.org/1999/xlink',
  'xml': 'http://www.w3.org/XML/1998/namespace',
  'xmlns': 'http://www.w3.org/2000/xmlns/',
  'math': 'http://www.w3.org/1998/MathML/'
};
const COMPONENT_REGEX = /%COMP%/g;
const COMPONENT_VARIABLE = '%COMP%';
const HOST_ATTR = `_nghost-${COMPONENT_VARIABLE}`;
const CONTENT_ATTR = `_ngcontent-${COMPONENT_VARIABLE}`;
/**
 * The default value for the `REMOVE_STYLES_ON_COMPONENT_DESTROY` DI token.
 */
const REMOVE_STYLES_ON_COMPONENT_DESTROY_DEFAULT = false;
/**
 * A [DI token](guide/glossary#di-token "DI token definition") that indicates whether styles
 * of destroyed components should be removed from DOM.
 *
 * By default, the value is set to `false`. This will be changed in the next major version.
 * @publicApi
 */
const REMOVE_STYLES_ON_COMPONENT_DESTROY = /*#__PURE__*/new InjectionToken('RemoveStylesOnCompDestroy', {
  providedIn: 'root',
  factory: () => REMOVE_STYLES_ON_COMPONENT_DESTROY_DEFAULT
});
function shimContentAttribute(componentShortId) {
  return CONTENT_ATTR.replace(COMPONENT_REGEX, componentShortId);
}
function shimHostAttribute(componentShortId) {
  return HOST_ATTR.replace(COMPONENT_REGEX, componentShortId);
}
function shimStylesContent(compId, styles) {
  return styles.map(s => s.replace(COMPONENT_REGEX, compId));
}
let DomRendererFactory2 = /*#__PURE__*/(() => {
  var _class4;
  class DomRendererFactory2 {
    constructor(eventManager, sharedStylesHost, appId, removeStylesOnCompDestroy, doc, platformId, ngZone, nonce = null) {
      this.eventManager = eventManager;
      this.sharedStylesHost = sharedStylesHost;
      this.appId = appId;
      this.removeStylesOnCompDestroy = removeStylesOnCompDestroy;
      this.doc = doc;
      this.platformId = platformId;
      this.ngZone = ngZone;
      this.nonce = nonce;
      this.rendererByCompId = new Map();
      this.platformIsServer = isPlatformServer(platformId);
      this.defaultRenderer = new DefaultDomRenderer2(eventManager, doc, ngZone, this.platformIsServer);
    }
    createRenderer(element, type) {
      if (!element || !type) {
        return this.defaultRenderer;
      }
      if (this.platformIsServer && type.encapsulation === ViewEncapsulation$1.ShadowDom) {
        // Domino does not support shadow DOM.
        type = {
          ...type,
          encapsulation: ViewEncapsulation$1.Emulated
        };
      }
      const renderer = this.getOrCreateRenderer(element, type);
      // Renderers have different logic due to different encapsulation behaviours.
      // Ex: for emulated, an attribute is added to the element.
      if (renderer instanceof EmulatedEncapsulationDomRenderer2) {
        renderer.applyToHost(element);
      } else if (renderer instanceof NoneEncapsulationDomRenderer) {
        renderer.applyStyles();
      }
      return renderer;
    }
    getOrCreateRenderer(element, type) {
      const rendererByCompId = this.rendererByCompId;
      let renderer = rendererByCompId.get(type.id);
      if (!renderer) {
        const doc = this.doc;
        const ngZone = this.ngZone;
        const eventManager = this.eventManager;
        const sharedStylesHost = this.sharedStylesHost;
        const removeStylesOnCompDestroy = this.removeStylesOnCompDestroy;
        const platformIsServer = this.platformIsServer;
        switch (type.encapsulation) {
          case ViewEncapsulation$1.Emulated:
            renderer = new EmulatedEncapsulationDomRenderer2(eventManager, sharedStylesHost, type, this.appId, removeStylesOnCompDestroy, doc, ngZone, platformIsServer);
            break;
          case ViewEncapsulation$1.ShadowDom:
            return new ShadowDomRenderer(eventManager, sharedStylesHost, element, type, doc, ngZone, this.nonce, platformIsServer);
          default:
            renderer = new NoneEncapsulationDomRenderer(eventManager, sharedStylesHost, type, removeStylesOnCompDestroy, doc, ngZone, platformIsServer);
            break;
        }
        rendererByCompId.set(type.id, renderer);
      }
      return renderer;
    }
    ngOnDestroy() {
      this.rendererByCompId.clear();
    }
  }
  _class4 = DomRendererFactory2;
  _class4.ɵfac = function _class4_Factory(t) {
    return new (t || _class4)(ɵɵinject(EventManager), ɵɵinject(SharedStylesHost), ɵɵinject(APP_ID), ɵɵinject(REMOVE_STYLES_ON_COMPONENT_DESTROY), ɵɵinject(DOCUMENT), ɵɵinject(PLATFORM_ID), ɵɵinject(NgZone), ɵɵinject(CSP_NONCE));
  };
  _class4.ɵprov = /* @__PURE__ */ɵɵdefineInjectable({
    token: _class4,
    factory: _class4.ɵfac
  });
  return DomRendererFactory2;
})();
class DefaultDomRenderer2 {
  constructor(eventManager, doc, ngZone, platformIsServer) {
    this.eventManager = eventManager;
    this.doc = doc;
    this.ngZone = ngZone;
    this.platformIsServer = platformIsServer;
    this.data = Object.create(null);
    this.destroyNode = null;
  }
  destroy() {}
  createElement(name, namespace) {
    if (namespace) {
      // TODO: `|| namespace` was added in
      // https://github.com/angular/angular/commit/2b9cc8503d48173492c29f5a271b61126104fbdb to
      // support how Ivy passed around the namespace URI rather than short name at the time. It did
      // not, however extend the support to other parts of the system (setAttribute, setAttribute,
      // and the ServerRenderer). We should decide what exactly the semantics for dealing with
      // namespaces should be and make it consistent.
      // Related issues:
      // https://github.com/angular/angular/issues/44028
      // https://github.com/angular/angular/issues/44883
      return this.doc.createElementNS(NAMESPACE_URIS[namespace] || namespace, name);
    }
    return this.doc.createElement(name);
  }
  createComment(value) {
    return this.doc.createComment(value);
  }
  createText(value) {
    return this.doc.createTextNode(value);
  }
  appendChild(parent, newChild) {
    const targetParent = isTemplateNode(parent) ? parent.content : parent;
    targetParent.appendChild(newChild);
  }
  insertBefore(parent, newChild, refChild) {
    if (parent) {
      const targetParent = isTemplateNode(parent) ? parent.content : parent;
      targetParent.insertBefore(newChild, refChild);
    }
  }
  removeChild(parent, oldChild) {
    if (parent) {
      parent.removeChild(oldChild);
    }
  }
  selectRootElement(selectorOrNode, preserveContent) {
    let el = typeof selectorOrNode === 'string' ? this.doc.querySelector(selectorOrNode) : selectorOrNode;
    if (!el) {
      throw new RuntimeError(-5104 /* RuntimeErrorCode.ROOT_NODE_NOT_FOUND */, (typeof ngDevMode === 'undefined' || ngDevMode) && `The selector "${selectorOrNode}" did not match any elements`);
    }
    if (!preserveContent) {
      el.textContent = '';
    }
    return el;
  }
  parentNode(node) {
    return node.parentNode;
  }
  nextSibling(node) {
    return node.nextSibling;
  }
  setAttribute(el, name, value, namespace) {
    if (namespace) {
      name = namespace + ':' + name;
      const namespaceUri = NAMESPACE_URIS[namespace];
      if (namespaceUri) {
        el.setAttributeNS(namespaceUri, name, value);
      } else {
        el.setAttribute(name, value);
      }
    } else {
      el.setAttribute(name, value);
    }
  }
  removeAttribute(el, name, namespace) {
    if (namespace) {
      const namespaceUri = NAMESPACE_URIS[namespace];
      if (namespaceUri) {
        el.removeAttributeNS(namespaceUri, name);
      } else {
        el.removeAttribute(`${namespace}:${name}`);
      }
    } else {
      el.removeAttribute(name);
    }
  }
  addClass(el, name) {
    el.classList.add(name);
  }
  removeClass(el, name) {
    el.classList.remove(name);
  }
  setStyle(el, style, value, flags) {
    if (flags & (RendererStyleFlags2.DashCase | RendererStyleFlags2.Important)) {
      el.style.setProperty(style, value, flags & RendererStyleFlags2.Important ? 'important' : '');
    } else {
      el.style[style] = value;
    }
  }
  removeStyle(el, style, flags) {
    if (flags & RendererStyleFlags2.DashCase) {
      // removeProperty has no effect when used on camelCased properties.
      el.style.removeProperty(style);
    } else {
      el.style[style] = '';
    }
  }
  setProperty(el, name, value) {
    (typeof ngDevMode === 'undefined' || ngDevMode) && checkNoSyntheticProp(name, 'property');
    el[name] = value;
  }
  setValue(node, value) {
    node.nodeValue = value;
  }
  listen(target, event, callback) {
    (typeof ngDevMode === 'undefined' || ngDevMode) && checkNoSyntheticProp(event, 'listener');
    if (typeof target === 'string') {
      target = getDOM().getGlobalEventTarget(this.doc, target);
      if (!target) {
        throw new Error(`Unsupported event target ${target} for event ${event}`);
      }
    }
    return this.eventManager.addEventListener(target, event, this.decoratePreventDefault(callback));
  }
  decoratePreventDefault(eventHandler) {
    // `DebugNode.triggerEventHandler` needs to know if the listener was created with
    // decoratePreventDefault or is a listener added outside the Angular context so it can handle
    // the two differently. In the first case, the special '__ngUnwrap__' token is passed to the
    // unwrap the listener (see below).
    return event => {
      // Ivy uses '__ngUnwrap__' as a special token that allows us to unwrap the function
      // so that it can be invoked programmatically by `DebugNode.triggerEventHandler`. The
      // debug_node can inspect the listener toString contents for the existence of this special
      // token. Because the token is a string literal, it is ensured to not be modified by compiled
      // code.
      if (event === '__ngUnwrap__') {
        return eventHandler;
      }
      // Run the event handler inside the ngZone because event handlers are not patched
      // by Zone on the server. This is required only for tests.
      const allowDefaultBehavior = this.platformIsServer ? this.ngZone.runGuarded(() => eventHandler(event)) : eventHandler(event);
      if (allowDefaultBehavior === false) {
        event.preventDefault();
      }
      return undefined;
    };
  }
}
const AT_CHARCODE = /*#__PURE__*/(() => '@'.charCodeAt(0))();
function checkNoSyntheticProp(name, nameKind) {
  if (name.charCodeAt(0) === AT_CHARCODE) {
    throw new RuntimeError(5105 /* RuntimeErrorCode.UNEXPECTED_SYNTHETIC_PROPERTY */, `Unexpected synthetic ${nameKind} ${name} found. Please make sure that:
  - Either \`BrowserAnimationsModule\` or \`NoopAnimationsModule\` are imported in your application.
  - There is corresponding configuration for the animation named \`${name}\` defined in the \`animations\` field of the \`@Component\` decorator (see https://angular.io/api/core/Component#animations).`);
  }
}
function isTemplateNode(node) {
  return node.tagName === 'TEMPLATE' && node.content !== undefined;
}
class ShadowDomRenderer extends DefaultDomRenderer2 {
  constructor(eventManager, sharedStylesHost, hostEl, component, doc, ngZone, nonce, platformIsServer) {
    super(eventManager, doc, ngZone, platformIsServer);
    this.sharedStylesHost = sharedStylesHost;
    this.hostEl = hostEl;
    this.shadowRoot = hostEl.attachShadow({
      mode: 'open'
    });
    this.sharedStylesHost.addHost(this.shadowRoot);
    const styles = shimStylesContent(component.id, component.styles);
    for (const style of styles) {
      const styleEl = document.createElement('style');
      if (nonce) {
        styleEl.setAttribute('nonce', nonce);
      }
      styleEl.textContent = style;
      this.shadowRoot.appendChild(styleEl);
    }
  }
  nodeOrShadowRoot(node) {
    return node === this.hostEl ? this.shadowRoot : node;
  }
  appendChild(parent, newChild) {
    return super.appendChild(this.nodeOrShadowRoot(parent), newChild);
  }
  insertBefore(parent, newChild, refChild) {
    return super.insertBefore(this.nodeOrShadowRoot(parent), newChild, refChild);
  }
  removeChild(parent, oldChild) {
    return super.removeChild(this.nodeOrShadowRoot(parent), oldChild);
  }
  parentNode(node) {
    return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(node)));
  }
  destroy() {
    this.sharedStylesHost.removeHost(this.shadowRoot);
  }
}
class NoneEncapsulationDomRenderer extends DefaultDomRenderer2 {
  constructor(eventManager, sharedStylesHost, component, removeStylesOnCompDestroy, doc, ngZone, platformIsServer, compId) {
    super(eventManager, doc, ngZone, platformIsServer);
    this.sharedStylesHost = sharedStylesHost;
    this.removeStylesOnCompDestroy = removeStylesOnCompDestroy;
    this.styles = compId ? shimStylesContent(compId, component.styles) : component.styles;
  }
  applyStyles() {
    this.sharedStylesHost.addStyles(this.styles);
  }
  destroy() {
    if (!this.removeStylesOnCompDestroy) {
      return;
    }
    this.sharedStylesHost.removeStyles(this.styles);
  }
}
class EmulatedEncapsulationDomRenderer2 extends NoneEncapsulationDomRenderer {
  constructor(eventManager, sharedStylesHost, component, appId, removeStylesOnCompDestroy, doc, ngZone, platformIsServer) {
    const compId = appId + '-' + component.id;
    super(eventManager, sharedStylesHost, component, removeStylesOnCompDestroy, doc, ngZone, platformIsServer, compId);
    this.contentAttr = shimContentAttribute(compId);
    this.hostAttr = shimHostAttribute(compId);
  }
  applyToHost(element) {
    this.applyStyles();
    this.setAttribute(element, this.hostAttr, '');
  }
  createElement(parent, name) {
    const el = super.createElement(parent, name);
    super.setAttribute(el, this.contentAttr, '');
    return el;
  }
}
let DomEventsPlugin = /*#__PURE__*/(() => {
  var _class5;
  class DomEventsPlugin extends EventManagerPlugin {
    constructor(doc) {
      super(doc);
    }
    // This plugin should come last in the list of plugins, because it accepts all
    // events.
    supports(eventName) {
      return true;
    }
    addEventListener(element, eventName, handler) {
      element.addEventListener(eventName, handler, false);
      return () => this.removeEventListener(element, eventName, handler);
    }
    removeEventListener(target, eventName, callback) {
      return target.removeEventListener(eventName, callback);
    }
  }
  _class5 = DomEventsPlugin;
  _class5.ɵfac = function _class5_Factory(t) {
    return new (t || _class5)(ɵɵinject(DOCUMENT));
  };
  _class5.ɵprov = /* @__PURE__ */ɵɵdefineInjectable({
    token: _class5,
    factory: _class5.ɵfac
  });
  return DomEventsPlugin;
})();

/**
 * Defines supported modifiers for key events.
 */
const MODIFIER_KEYS = ['alt', 'control', 'meta', 'shift'];
// The following values are here for cross-browser compatibility and to match the W3C standard
// cf https://www.w3.org/TR/DOM-Level-3-Events-key/
const _keyMap = {
  '\b': 'Backspace',
  '\t': 'Tab',
  '\x7F': 'Delete',
  '\x1B': 'Escape',
  'Del': 'Delete',
  'Esc': 'Escape',
  'Left': 'ArrowLeft',
  'Right': 'ArrowRight',
  'Up': 'ArrowUp',
  'Down': 'ArrowDown',
  'Menu': 'ContextMenu',
  'Scroll': 'ScrollLock',
  'Win': 'OS'
};
/**
 * Retrieves modifiers from key-event objects.
 */
const MODIFIER_KEY_GETTERS = {
  'alt': event => event.altKey,
  'control': event => event.ctrlKey,
  'meta': event => event.metaKey,
  'shift': event => event.shiftKey
};
/**
 * @publicApi
 * A browser plug-in that provides support for handling of key events in Angular.
 */
let KeyEventsPlugin = /*#__PURE__*/(() => {
  var _class6;
  class KeyEventsPlugin extends EventManagerPlugin {
    /**
     * Initializes an instance of the browser plug-in.
     * @param doc The document in which key events will be detected.
     */
    constructor(doc) {
      super(doc);
    }
    /**
     * Reports whether a named key event is supported.
     * @param eventName The event name to query.
     * @return True if the named key event is supported.
     */
    supports(eventName) {
      return KeyEventsPlugin.parseEventName(eventName) != null;
    }
    /**
     * Registers a handler for a specific element and key event.
     * @param element The HTML element to receive event notifications.
     * @param eventName The name of the key event to listen for.
     * @param handler A function to call when the notification occurs. Receives the
     * event object as an argument.
     * @returns The key event that was registered.
     */
    addEventListener(element, eventName, handler) {
      const parsedEvent = KeyEventsPlugin.parseEventName(eventName);
      const outsideHandler = KeyEventsPlugin.eventCallback(parsedEvent['fullKey'], handler, this.manager.getZone());
      return this.manager.getZone().runOutsideAngular(() => {
        return getDOM().onAndCancel(element, parsedEvent['domEventName'], outsideHandler);
      });
    }
    /**
     * Parses the user provided full keyboard event definition and normalizes it for
     * later internal use. It ensures the string is all lowercase, converts special
     * characters to a standard spelling, and orders all the values consistently.
     *
     * @param eventName The name of the key event to listen for.
     * @returns an object with the full, normalized string, and the dom event name
     * or null in the case when the event doesn't match a keyboard event.
     */
    static parseEventName(eventName) {
      const parts = eventName.toLowerCase().split('.');
      const domEventName = parts.shift();
      if (parts.length === 0 || !(domEventName === 'keydown' || domEventName === 'keyup')) {
        return null;
      }
      const key = KeyEventsPlugin._normalizeKey(parts.pop());
      let fullKey = '';
      let codeIX = parts.indexOf('code');
      if (codeIX > -1) {
        parts.splice(codeIX, 1);
        fullKey = 'code.';
      }
      MODIFIER_KEYS.forEach(modifierName => {
        const index = parts.indexOf(modifierName);
        if (index > -1) {
          parts.splice(index, 1);
          fullKey += modifierName + '.';
        }
      });
      fullKey += key;
      if (parts.length != 0 || key.length === 0) {
        // returning null instead of throwing to let another plugin process the event
        return null;
      }
      // NOTE: Please don't rewrite this as so, as it will break JSCompiler property renaming.
      //       The code must remain in the `result['domEventName']` form.
      // return {domEventName, fullKey};
      const result = {};
      result['domEventName'] = domEventName;
      result['fullKey'] = fullKey;
      return result;
    }
    /**
     * Determines whether the actual keys pressed match the configured key code string.
     * The `fullKeyCode` event is normalized in the `parseEventName` method when the
     * event is attached to the DOM during the `addEventListener` call. This is unseen
     * by the end user and is normalized for internal consistency and parsing.
     *
     * @param event The keyboard event.
     * @param fullKeyCode The normalized user defined expected key event string
     * @returns boolean.
     */
    static matchEventFullKeyCode(event, fullKeyCode) {
      let keycode = _keyMap[event.key] || event.key;
      let key = '';
      if (fullKeyCode.indexOf('code.') > -1) {
        keycode = event.code;
        key = 'code.';
      }
      // the keycode could be unidentified so we have to check here
      if (keycode == null || !keycode) return false;
      keycode = keycode.toLowerCase();
      if (keycode === ' ') {
        keycode = 'space'; // for readability
      } else if (keycode === '.') {
        keycode = 'dot'; // because '.' is used as a separator in event names
      }

      MODIFIER_KEYS.forEach(modifierName => {
        if (modifierName !== keycode) {
          const modifierGetter = MODIFIER_KEY_GETTERS[modifierName];
          if (modifierGetter(event)) {
            key += modifierName + '.';
          }
        }
      });
      key += keycode;
      return key === fullKeyCode;
    }
    /**
     * Configures a handler callback for a key event.
     * @param fullKey The event name that combines all simultaneous keystrokes.
     * @param handler The function that responds to the key event.
     * @param zone The zone in which the event occurred.
     * @returns A callback function.
     */
    static eventCallback(fullKey, handler, zone) {
      return event => {
        if (KeyEventsPlugin.matchEventFullKeyCode(event, fullKey)) {
          zone.runGuarded(() => handler(event));
        }
      };
    }
    /** @internal */
    static _normalizeKey(keyName) {
      // TODO: switch to a Map if the mapping grows too much
      switch (keyName) {
        case 'esc':
          return 'escape';
        default:
          return keyName;
      }
    }
  }
  _class6 = KeyEventsPlugin;
  _class6.ɵfac = function _class6_Factory(t) {
    return new (t || _class6)(ɵɵinject(DOCUMENT));
  };
  _class6.ɵprov = /* @__PURE__ */ɵɵdefineInjectable({
    token: _class6,
    factory: _class6.ɵfac
  });
  return KeyEventsPlugin;
})();

/**
 * Bootstraps an instance of an Angular application and renders a standalone component as the
 * application's root component. More information about standalone components can be found in [this
 * guide](guide/standalone-components).
 *
 * @usageNotes
 * The root component passed into this function *must* be a standalone one (should have the
 * `standalone: true` flag in the `@Component` decorator config).
 *
 * ```typescript
 * @Component({
 *   standalone: true,
 *   template: 'Hello world!'
 * })
 * class RootComponent {}
 *
 * const appRef: ApplicationRef = await bootstrapApplication(RootComponent);
 * ```
 *
 * You can add the list of providers that should be available in the application injector by
 * specifying the `providers` field in an object passed as the second argument:
 *
 * ```typescript
 * await bootstrapApplication(RootComponent, {
 *   providers: [
 *     {provide: BACKEND_URL, useValue: 'https://yourdomain.com/api'}
 *   ]
 * });
 * ```
 *
 * The `importProvidersFrom` helper method can be used to collect all providers from any
 * existing NgModule (and transitively from all NgModules that it imports):
 *
 * ```typescript
 * await bootstrapApplication(RootComponent, {
 *   providers: [
 *     importProvidersFrom(SomeNgModule)
 *   ]
 * });
 * ```
 *
 * Note: the `bootstrapApplication` method doesn't include [Testability](api/core/Testability) by
 * default. You can add [Testability](api/core/Testability) by getting the list of necessary
 * providers using `provideProtractorTestingSupport()` function and adding them into the `providers`
 * array, for example:
 *
 * ```typescript
 * import {provideProtractorTestingSupport} from '@angular/platform-browser';
 *
 * await bootstrapApplication(RootComponent, {providers: [provideProtractorTestingSupport()]});
 * ```
 *
 * @param rootComponent A reference to a standalone component that should be rendered.
 * @param options Extra configuration for the bootstrap operation, see `ApplicationConfig` for
 *     additional info.
 * @returns A promise that returns an `ApplicationRef` instance once resolved.
 *
 * @publicApi
 */
function bootstrapApplication(rootComponent, options) {
  return internalCreateApplication({
    rootComponent,
    ...createProvidersConfig(options)
  });
}
function createProvidersConfig(options) {
  return {
    appProviders: [...BROWSER_MODULE_PROVIDERS, ...(options?.providers ?? [])],
    platformProviders: INTERNAL_BROWSER_PLATFORM_PROVIDERS
  };
}
function initDomAdapter() {
  BrowserDomAdapter.makeCurrent();
}
function errorHandler() {
  return new ErrorHandler();
}
function _document$1() {
  // Tell ivy about the global document
  setDocument(document);
  return document;
}
const INTERNAL_BROWSER_PLATFORM_PROVIDERS = [{
  provide: PLATFORM_ID,
  useValue: PLATFORM_BROWSER_ID
}, {
  provide: PLATFORM_INITIALIZER,
  useValue: initDomAdapter,
  multi: true
}, {
  provide: DOCUMENT,
  useFactory: _document$1,
  deps: []
}];
/**
 * Internal marker to signal whether providers from the `BrowserModule` are already present in DI.
 * This is needed to avoid loading `BrowserModule` providers twice. We can't rely on the
 * `BrowserModule` presence itself, since the standalone-based bootstrap just imports
 * `BrowserModule` providers without referencing the module itself.
 */
const BROWSER_MODULE_PROVIDERS_MARKER = /*#__PURE__*/new InjectionToken(typeof ngDevMode === 'undefined' || ngDevMode ? 'BrowserModule Providers Marker' : '');
const BROWSER_MODULE_PROVIDERS = [{
  provide: INJECTOR_SCOPE,
  useValue: 'root'
}, {
  provide: ErrorHandler,
  useFactory: errorHandler,
  deps: []
}, {
  provide: EVENT_MANAGER_PLUGINS,
  useClass: DomEventsPlugin,
  multi: true,
  deps: [DOCUMENT, NgZone, PLATFORM_ID]
}, {
  provide: EVENT_MANAGER_PLUGINS,
  useClass: KeyEventsPlugin,
  multi: true,
  deps: [DOCUMENT]
}, DomRendererFactory2, SharedStylesHost, EventManager, {
  provide: RendererFactory2,
  useExisting: DomRendererFactory2
}, {
  provide: XhrFactory,
  useClass: BrowserXhr,
  deps: []
}, typeof ngDevMode === 'undefined' || ngDevMode ? {
  provide: BROWSER_MODULE_PROVIDERS_MARKER,
  useValue: true
} : []];

/**
 * @license Angular v16.2.2
 * (c) 2010-2022 Google LLC. https://angular.io/
 * License: MIT
 */

/**
 * An injectable service that produces an animation sequence programmatically within an
 * Angular component or directive.
 * Provided by the `BrowserAnimationsModule` or `NoopAnimationsModule`.
 *
 * @usageNotes
 *
 * To use this service, add it to your component or directive as a dependency.
 * The service is instantiated along with your component.
 *
 * Apps do not typically need to create their own animation players, but if you
 * do need to, follow these steps:
 *
 * 1. Use the <code>[AnimationBuilder.build](api/animations/AnimationBuilder#build)()</code> method
 * to create a programmatic animation. The method returns an `AnimationFactory` instance.
 *
 * 2. Use the factory object to create an `AnimationPlayer` and attach it to a DOM element.
 *
 * 3. Use the player object to control the animation programmatically.
 *
 * For example:
 *
 * ```ts
 * // import the service from BrowserAnimationsModule
 * import {AnimationBuilder} from '@angular/animations';
 * // require the service as a dependency
 * class MyCmp {
 *   constructor(private _builder: AnimationBuilder) {}
 *
 *   makeAnimation(element: any) {
 *     // first define a reusable animation
 *     const myAnimation = this._builder.build([
 *       style({ width: 0 }),
 *       animate(1000, style({ width: '100px' }))
 *     ]);
 *
 *     // use the returned factory object to create a player
 *     const player = myAnimation.create(element);
 *
 *     player.play();
 *   }
 * }
 * ```
 *
 * @publicApi
 */
class AnimationBuilder {}
/**
 * A factory object returned from the
 * <code>[AnimationBuilder.build](api/animations/AnimationBuilder#build)()</code>
 * method.
 *
 * @publicApi
 */
class AnimationFactory {}

/**
 * Specifies automatic styling.
 *
 * @publicApi
 */
const AUTO_STYLE = '*';
/**
 * Defines a list of animation steps to be run sequentially, one by one.
 *
 * @param steps An array of animation step objects.
 * - Steps defined by `style()` calls apply the styling data immediately.
 * - Steps defined by `animate()` calls apply the styling data over time
 *   as specified by the timing data.
 *
 * ```typescript
 * sequence([
 *   style({ opacity: 0 }),
 *   animate("1s", style({ opacity: 1 }))
 * ])
 * ```
 *
 * @param options An options object containing a delay and
 * developer-defined parameters that provide styling defaults and
 * can be overridden on invocation.
 *
 * @return An object that encapsulates the sequence data.
 *
 * @usageNotes
 * When you pass an array of steps to a
 * `transition()` call, the steps run sequentially by default.
 * Compare this to the `{@link animations/group group()}` call, which runs animation steps in
 *parallel.
 *
 * When a sequence is used within a `{@link animations/group group()}` or a `transition()` call,
 * execution continues to the next instruction only after each of the inner animation
 * steps have completed.
 *
 * @publicApi
 **/
function sequence(steps, options = null) {
  return {
    type: 2 /* AnimationMetadataType.Sequence */,
    steps,
    options
  };
}
/**
 * Declares a key/value object containing CSS properties/styles that
 * can then be used for an animation [`state`](api/animations/state), within an animation
 *`sequence`, or as styling data for calls to `animate()` and `keyframes()`.
 *
 * @param tokens A set of CSS styles or HTML styles associated with an animation state.
 * The value can be any of the following:
 * - A key-value style pair associating a CSS property with a value.
 * - An array of key-value style pairs.
 * - An asterisk (*), to use auto-styling, where styles are derived from the element
 * being animated and applied to the animation when it starts.
 *
 * Auto-styling can be used to define a state that depends on layout or other
 * environmental factors.
 *
 * @return An object that encapsulates the style data.
 *
 * @usageNotes
 * The following examples create animation styles that collect a set of
 * CSS property values:
 *
 * ```typescript
 * // string values for CSS properties
 * style({ background: "red", color: "blue" })
 *
 * // numerical pixel values
 * style({ width: 100, height: 0 })
 * ```
 *
 * The following example uses auto-styling to allow an element to animate from
 * a height of 0 up to its full height:
 *
 * ```
 * style({ height: 0 }),
 * animate("1s", style({ height: "*" }))
 * ```
 *
 * @publicApi
 **/
function style(tokens) {
  return {
    type: 6 /* AnimationMetadataType.Style */,
    styles: tokens,
    offset: null
  };
}

/**
 * An empty programmatic controller for reusable animations.
 * Used internally when animations are disabled, to avoid
 * checking for the null case when an animation player is expected.
 *
 * @see {@link animate}
 * @see {@link AnimationPlayer}
 * @see {@link ɵAnimationGroupPlayer AnimationGroupPlayer}
 *
 * @publicApi
 */
class NoopAnimationPlayer {
  constructor(duration = 0, delay = 0) {
    this._onDoneFns = [];
    this._onStartFns = [];
    this._onDestroyFns = [];
    this._originalOnDoneFns = [];
    this._originalOnStartFns = [];
    this._started = false;
    this._destroyed = false;
    this._finished = false;
    this._position = 0;
    this.parentPlayer = null;
    this.totalTime = duration + delay;
  }
  _onFinish() {
    if (!this._finished) {
      this._finished = true;
      this._onDoneFns.forEach(fn => fn());
      this._onDoneFns = [];
    }
  }
  onStart(fn) {
    this._originalOnStartFns.push(fn);
    this._onStartFns.push(fn);
  }
  onDone(fn) {
    this._originalOnDoneFns.push(fn);
    this._onDoneFns.push(fn);
  }
  onDestroy(fn) {
    this._onDestroyFns.push(fn);
  }
  hasStarted() {
    return this._started;
  }
  init() {}
  play() {
    if (!this.hasStarted()) {
      this._onStart();
      this.triggerMicrotask();
    }
    this._started = true;
  }
  /** @internal */
  triggerMicrotask() {
    queueMicrotask(() => this._onFinish());
  }
  _onStart() {
    this._onStartFns.forEach(fn => fn());
    this._onStartFns = [];
  }
  pause() {}
  restart() {}
  finish() {
    this._onFinish();
  }
  destroy() {
    if (!this._destroyed) {
      this._destroyed = true;
      if (!this.hasStarted()) {
        this._onStart();
      }
      this.finish();
      this._onDestroyFns.forEach(fn => fn());
      this._onDestroyFns = [];
    }
  }
  reset() {
    this._started = false;
    this._finished = false;
    this._onStartFns = this._originalOnStartFns;
    this._onDoneFns = this._originalOnDoneFns;
  }
  setPosition(position) {
    this._position = this.totalTime ? position * this.totalTime : 1;
  }
  getPosition() {
    return this.totalTime ? this._position / this.totalTime : 1;
  }
  /** @internal */
  triggerCallback(phaseName) {
    const methods = phaseName == 'start' ? this._onStartFns : this._onDoneFns;
    methods.forEach(fn => fn());
    methods.length = 0;
  }
}

/**
 * A programmatic controller for a group of reusable animations.
 * Used internally to control animations.
 *
 * @see {@link AnimationPlayer}
 * @see {@link animations/group group}
 *
 */
class AnimationGroupPlayer {
  constructor(_players) {
    this._onDoneFns = [];
    this._onStartFns = [];
    this._finished = false;
    this._started = false;
    this._destroyed = false;
    this._onDestroyFns = [];
    this.parentPlayer = null;
    this.totalTime = 0;
    this.players = _players;
    let doneCount = 0;
    let destroyCount = 0;
    let startCount = 0;
    const total = this.players.length;
    if (total == 0) {
      queueMicrotask(() => this._onFinish());
    } else {
      this.players.forEach(player => {
        player.onDone(() => {
          if (++doneCount == total) {
            this._onFinish();
          }
        });
        player.onDestroy(() => {
          if (++destroyCount == total) {
            this._onDestroy();
          }
        });
        player.onStart(() => {
          if (++startCount == total) {
            this._onStart();
          }
        });
      });
    }
    this.totalTime = this.players.reduce((time, player) => Math.max(time, player.totalTime), 0);
  }
  _onFinish() {
    if (!this._finished) {
      this._finished = true;
      this._onDoneFns.forEach(fn => fn());
      this._onDoneFns = [];
    }
  }
  init() {
    this.players.forEach(player => player.init());
  }
  onStart(fn) {
    this._onStartFns.push(fn);
  }
  _onStart() {
    if (!this.hasStarted()) {
      this._started = true;
      this._onStartFns.forEach(fn => fn());
      this._onStartFns = [];
    }
  }
  onDone(fn) {
    this._onDoneFns.push(fn);
  }
  onDestroy(fn) {
    this._onDestroyFns.push(fn);
  }
  hasStarted() {
    return this._started;
  }
  play() {
    if (!this.parentPlayer) {
      this.init();
    }
    this._onStart();
    this.players.forEach(player => player.play());
  }
  pause() {
    this.players.forEach(player => player.pause());
  }
  restart() {
    this.players.forEach(player => player.restart());
  }
  finish() {
    this._onFinish();
    this.players.forEach(player => player.finish());
  }
  destroy() {
    this._onDestroy();
  }
  _onDestroy() {
    if (!this._destroyed) {
      this._destroyed = true;
      this._onFinish();
      this.players.forEach(player => player.destroy());
      this._onDestroyFns.forEach(fn => fn());
      this._onDestroyFns = [];
    }
  }
  reset() {
    this.players.forEach(player => player.reset());
    this._destroyed = false;
    this._finished = false;
    this._started = false;
  }
  setPosition(p) {
    const timeAtPosition = p * this.totalTime;
    this.players.forEach(player => {
      const position = player.totalTime ? Math.min(1, timeAtPosition / player.totalTime) : 1;
      player.setPosition(position);
    });
  }
  getPosition() {
    const longestPlayer = this.players.reduce((longestSoFar, player) => {
      const newPlayerIsLongest = longestSoFar === null || player.totalTime > longestSoFar.totalTime;
      return newPlayerIsLongest ? player : longestSoFar;
    }, null);
    return longestPlayer != null ? longestPlayer.getPosition() : 0;
  }
  beforeDestroy() {
    this.players.forEach(player => {
      if (player.beforeDestroy) {
        player.beforeDestroy();
      }
    });
  }
  /** @internal */
  triggerCallback(phaseName) {
    const methods = phaseName == 'start' ? this._onStartFns : this._onDoneFns;
    methods.forEach(fn => fn());
    methods.length = 0;
  }
}
const ɵPRE_STYLE = '!';

/**
 * @license Angular v16.2.2
 * (c) 2010-2022 Google LLC. https://angular.io/
 * License: MIT
 */

const LINE_START = '\n - ';
function invalidTimingValue(exp) {
  return new RuntimeError(3000 /* RuntimeErrorCode.INVALID_TIMING_VALUE */, ngDevMode && `The provided timing value "${exp}" is invalid.`);
}
function negativeStepValue() {
  return new RuntimeError(3100 /* RuntimeErrorCode.NEGATIVE_STEP_VALUE */, ngDevMode && 'Duration values below 0 are not allowed for this animation step.');
}
function negativeDelayValue() {
  return new RuntimeError(3101 /* RuntimeErrorCode.NEGATIVE_DELAY_VALUE */, ngDevMode && 'Delay values below 0 are not allowed for this animation step.');
}
function invalidStyleParams(varName) {
  return new RuntimeError(3001 /* RuntimeErrorCode.INVALID_STYLE_PARAMS */, ngDevMode && `Unable to resolve the local animation param ${varName} in the given list of values`);
}
function invalidParamValue(varName) {
  return new RuntimeError(3003 /* RuntimeErrorCode.INVALID_PARAM_VALUE */, ngDevMode && `Please provide a value for the animation param ${varName}`);
}
function invalidNodeType(nodeType) {
  return new RuntimeError(3004 /* RuntimeErrorCode.INVALID_NODE_TYPE */, ngDevMode && `Unable to resolve animation metadata node #${nodeType}`);
}
function invalidCssUnitValue(userProvidedProperty, value) {
  return new RuntimeError(3005 /* RuntimeErrorCode.INVALID_CSS_UNIT_VALUE */, ngDevMode && `Please provide a CSS unit value for ${userProvidedProperty}:${value}`);
}
function invalidTrigger() {
  return new RuntimeError(3006 /* RuntimeErrorCode.INVALID_TRIGGER */, ngDevMode && 'animation triggers cannot be prefixed with an `@` sign (e.g. trigger(\'@foo\', [...]))');
}
function invalidDefinition() {
  return new RuntimeError(3007 /* RuntimeErrorCode.INVALID_DEFINITION */, ngDevMode && 'only state() and transition() definitions can sit inside of a trigger()');
}
function invalidState(metadataName, missingSubs) {
  return new RuntimeError(3008 /* RuntimeErrorCode.INVALID_STATE */, ngDevMode && `state("${metadataName}", ...) must define default values for all the following style substitutions: ${missingSubs.join(', ')}`);
}
function invalidStyleValue(value) {
  return new RuntimeError(3002 /* RuntimeErrorCode.INVALID_STYLE_VALUE */, ngDevMode && `The provided style string value ${value} is not allowed.`);
}
function invalidParallelAnimation(prop, firstStart, firstEnd, secondStart, secondEnd) {
  return new RuntimeError(3010 /* RuntimeErrorCode.INVALID_PARALLEL_ANIMATION */, ngDevMode && `The CSS property "${prop}" that exists between the times of "${firstStart}ms" and "${firstEnd}ms" is also being animated in a parallel animation between the times of "${secondStart}ms" and "${secondEnd}ms"`);
}
function invalidKeyframes() {
  return new RuntimeError(3011 /* RuntimeErrorCode.INVALID_KEYFRAMES */, ngDevMode && `keyframes() must be placed inside of a call to animate()`);
}
function invalidOffset() {
  return new RuntimeError(3012 /* RuntimeErrorCode.INVALID_OFFSET */, ngDevMode && `Please ensure that all keyframe offsets are between 0 and 1`);
}
function keyframeOffsetsOutOfOrder() {
  return new RuntimeError(3200 /* RuntimeErrorCode.KEYFRAME_OFFSETS_OUT_OF_ORDER */, ngDevMode && `Please ensure that all keyframe offsets are in order`);
}
function keyframesMissingOffsets() {
  return new RuntimeError(3202 /* RuntimeErrorCode.KEYFRAMES_MISSING_OFFSETS */, ngDevMode && `Not all style() steps within the declared keyframes() contain offsets`);
}
function invalidStagger() {
  return new RuntimeError(3013 /* RuntimeErrorCode.INVALID_STAGGER */, ngDevMode && `stagger() can only be used inside of query()`);
}
function invalidQuery(selector) {
  return new RuntimeError(3014 /* RuntimeErrorCode.INVALID_QUERY */, ngDevMode && `\`query("${selector}")\` returned zero elements. (Use \`query("${selector}", { optional: true })\` if you wish to allow this.)`);
}
function invalidExpression(expr) {
  return new RuntimeError(3015 /* RuntimeErrorCode.INVALID_EXPRESSION */, ngDevMode && `The provided transition expression "${expr}" is not supported`);
}
function invalidTransitionAlias(alias) {
  return new RuntimeError(3016 /* RuntimeErrorCode.INVALID_TRANSITION_ALIAS */, ngDevMode && `The transition alias value "${alias}" is not supported`);
}
function triggerBuildFailed(name, errors) {
  return new RuntimeError(3404 /* RuntimeErrorCode.TRIGGER_BUILD_FAILED */, ngDevMode && `The animation trigger "${name}" has failed to build due to the following errors:\n - ${errors.map(err => err.message).join('\n - ')}`);
}
function animationFailed(errors) {
  return new RuntimeError(3502 /* RuntimeErrorCode.ANIMATION_FAILED */, ngDevMode && `Unable to animate due to the following errors:${LINE_START}${errors.map(err => err.message).join(LINE_START)}`);
}
function registerFailed(errors) {
  return new RuntimeError(3503 /* RuntimeErrorCode.REGISTRATION_FAILED */, ngDevMode && `Unable to build the animation due to the following errors: ${errors.map(err => err.message).join('\n')}`);
}
function missingOrDestroyedAnimation() {
  return new RuntimeError(3300 /* RuntimeErrorCode.MISSING_OR_DESTROYED_ANIMATION */, ngDevMode && 'The requested animation doesn\'t exist or has already been destroyed');
}
function createAnimationFailed(errors) {
  return new RuntimeError(3504 /* RuntimeErrorCode.CREATE_ANIMATION_FAILED */, ngDevMode && `Unable to create the animation due to the following errors:${errors.map(err => err.message).join('\n')}`);
}
function missingPlayer(id) {
  return new RuntimeError(3301 /* RuntimeErrorCode.MISSING_PLAYER */, ngDevMode && `Unable to find the timeline player referenced by ${id}`);
}
function missingTrigger(phase, name) {
  return new RuntimeError(3302 /* RuntimeErrorCode.MISSING_TRIGGER */, ngDevMode && `Unable to listen on the animation trigger event "${phase}" because the animation trigger "${name}" doesn\'t exist!`);
}
function missingEvent(name) {
  return new RuntimeError(3303 /* RuntimeErrorCode.MISSING_EVENT */, ngDevMode && `Unable to listen on the animation trigger "${name}" because the provided event is undefined!`);
}
function unsupportedTriggerEvent(phase, name) {
  return new RuntimeError(3400 /* RuntimeErrorCode.UNSUPPORTED_TRIGGER_EVENT */, ngDevMode && `The provided animation trigger event "${phase}" for the animation trigger "${name}" is not supported!`);
}
function unregisteredTrigger(name) {
  return new RuntimeError(3401 /* RuntimeErrorCode.UNREGISTERED_TRIGGER */, ngDevMode && `The provided animation trigger "${name}" has not been registered!`);
}
function triggerTransitionsFailed(errors) {
  return new RuntimeError(3402 /* RuntimeErrorCode.TRIGGER_TRANSITIONS_FAILED */, ngDevMode && `Unable to process animations due to the following failed trigger transitions\n ${errors.map(err => err.message).join('\n')}`);
}
function transitionFailed(name, errors) {
  return new RuntimeError(3505 /* RuntimeErrorCode.TRANSITION_FAILED */, ngDevMode && `@${name} has failed due to:\n ${errors.map(err => err.message).join('\n- ')}`);
}
function optimizeGroupPlayer(players) {
  switch (players.length) {
    case 0:
      return new NoopAnimationPlayer();
    case 1:
      return players[0];
    default:
      return new AnimationGroupPlayer(players);
  }
}
function normalizeKeyframes$1(normalizer, keyframes, preStyles = new Map(), postStyles = new Map()) {
  const errors = [];
  const normalizedKeyframes = [];
  let previousOffset = -1;
  let previousKeyframe = null;
  keyframes.forEach(kf => {
    const offset = kf.get('offset');
    const isSameOffset = offset == previousOffset;
    const normalizedKeyframe = isSameOffset && previousKeyframe || new Map();
    kf.forEach((val, prop) => {
      let normalizedProp = prop;
      let normalizedValue = val;
      if (prop !== 'offset') {
        normalizedProp = normalizer.normalizePropertyName(normalizedProp, errors);
        switch (normalizedValue) {
          case ɵPRE_STYLE:
            normalizedValue = preStyles.get(prop);
            break;
          case AUTO_STYLE:
            normalizedValue = postStyles.get(prop);
            break;
          default:
            normalizedValue = normalizer.normalizeStyleValue(prop, normalizedProp, normalizedValue, errors);
            break;
        }
      }
      normalizedKeyframe.set(normalizedProp, normalizedValue);
    });
    if (!isSameOffset) {
      normalizedKeyframes.push(normalizedKeyframe);
    }
    previousKeyframe = normalizedKeyframe;
    previousOffset = offset;
  });
  if (errors.length) {
    throw animationFailed(errors);
  }
  return normalizedKeyframes;
}
function listenOnPlayer(player, eventName, event, callback) {
  switch (eventName) {
    case 'start':
      player.onStart(() => callback(event && copyAnimationEvent(event, 'start', player)));
      break;
    case 'done':
      player.onDone(() => callback(event && copyAnimationEvent(event, 'done', player)));
      break;
    case 'destroy':
      player.onDestroy(() => callback(event && copyAnimationEvent(event, 'destroy', player)));
      break;
  }
}
function copyAnimationEvent(e, phaseName, player) {
  const totalTime = player.totalTime;
  const disabled = player.disabled ? true : false;
  const event = makeAnimationEvent(e.element, e.triggerName, e.fromState, e.toState, phaseName || e.phaseName, totalTime == undefined ? e.totalTime : totalTime, disabled);
  const data = e['_data'];
  if (data != null) {
    event['_data'] = data;
  }
  return event;
}
function makeAnimationEvent(element, triggerName, fromState, toState, phaseName = '', totalTime = 0, disabled) {
  return {
    element,
    triggerName,
    fromState,
    toState,
    phaseName,
    totalTime,
    disabled: !!disabled
  };
}
function getOrSetDefaultValue(map, key, defaultValue) {
  let value = map.get(key);
  if (!value) {
    map.set(key, value = defaultValue);
  }
  return value;
}
function parseTimelineCommand(command) {
  const separatorPos = command.indexOf(':');
  const id = command.substring(1, separatorPos);
  const action = command.slice(separatorPos + 1);
  return [id, action];
}
const documentElement = /* @__PURE__ */(() => typeof document === 'undefined' ? null : document.documentElement)();
function getParentElement(element) {
  const parent = element.parentNode || element.host || null; // consider host to support shadow DOM
  if (parent === documentElement) {
    return null;
  }
  return parent;
}
function containsVendorPrefix(prop) {
  // Webkit is the only real popular vendor prefix nowadays
  // cc: http://shouldiprefix.com/
  return prop.substring(1, 6) == 'ebkit'; // webkit or Webkit
}

let _CACHED_BODY = null;
let _IS_WEBKIT = false;
function validateStyleProperty(prop) {
  if (!_CACHED_BODY) {
    _CACHED_BODY = getBodyNode() || {};
    _IS_WEBKIT = _CACHED_BODY.style ? 'WebkitAppearance' in _CACHED_BODY.style : false;
  }
  let result = true;
  if (_CACHED_BODY.style && !containsVendorPrefix(prop)) {
    result = prop in _CACHED_BODY.style;
    if (!result && _IS_WEBKIT) {
      const camelProp = 'Webkit' + prop.charAt(0).toUpperCase() + prop.slice(1);
      result = camelProp in _CACHED_BODY.style;
    }
  }
  return result;
}
function getBodyNode() {
  if (typeof document != 'undefined') {
    return document.body;
  }
  return null;
}
function containsElement(elm1, elm2) {
  while (elm2) {
    if (elm2 === elm1) {
      return true;
    }
    elm2 = getParentElement(elm2);
  }
  return false;
}
function invokeQuery(element, selector, multi) {
  if (multi) {
    return Array.from(element.querySelectorAll(selector));
  }
  const elem = element.querySelector(selector);
  return elem ? [elem] : [];
}

/**
 * @publicApi
 */
let NoopAnimationDriver = /*#__PURE__*/(() => {
  var _class;
  class NoopAnimationDriver {
    validateStyleProperty(prop) {
      return validateStyleProperty(prop);
    }
    matchesElement(_element, _selector) {
      // This method is deprecated and no longer in use so we return false.
      return false;
    }
    containsElement(elm1, elm2) {
      return containsElement(elm1, elm2);
    }
    getParentElement(element) {
      return getParentElement(element);
    }
    query(element, selector, multi) {
      return invokeQuery(element, selector, multi);
    }
    computeStyle(element, prop, defaultValue) {
      return defaultValue || '';
    }
    animate(element, keyframes, duration, delay, easing, previousPlayers = [], scrubberAccessRequested) {
      return new NoopAnimationPlayer(duration, delay);
    }
  }
  _class = NoopAnimationDriver;
  _class.ɵfac = function _class_Factory(t) {
    return new (t || _class)();
  };
  _class.ɵprov = /* @__PURE__ */ɵɵdefineInjectable({
    token: _class,
    factory: _class.ɵfac
  });
  return NoopAnimationDriver;
})();
/**
 * @publicApi
 */
let AnimationDriver = /*#__PURE__*/(() => {
  var _class2;
  class AnimationDriver {}
  _class2 = AnimationDriver;
  _class2.NOOP = /* @__PURE__ */new NoopAnimationDriver();
  return AnimationDriver;
})();
const ONE_SECOND = 1000;
const SUBSTITUTION_EXPR_START = '{{';
const SUBSTITUTION_EXPR_END = '}}';
const ENTER_CLASSNAME = 'ng-enter';
const LEAVE_CLASSNAME = 'ng-leave';
const NG_TRIGGER_CLASSNAME = 'ng-trigger';
const NG_TRIGGER_SELECTOR = '.ng-trigger';
const NG_ANIMATING_CLASSNAME = 'ng-animating';
const NG_ANIMATING_SELECTOR = '.ng-animating';
function resolveTimingValue(value) {
  if (typeof value == 'number') return value;
  const matches = value.match(/^(-?[\.\d]+)(m?s)/);
  if (!matches || matches.length < 2) return 0;
  return _convertTimeValueToMS(parseFloat(matches[1]), matches[2]);
}
function _convertTimeValueToMS(value, unit) {
  switch (unit) {
    case 's':
      return value * ONE_SECOND;
    default:
      // ms or something else
      return value;
  }
}
function resolveTiming(timings, errors, allowNegativeValues) {
  return timings.hasOwnProperty('duration') ? timings : parseTimeExpression(timings, errors, allowNegativeValues);
}
function parseTimeExpression(exp, errors, allowNegativeValues) {
  const regex = /^(-?[\.\d]+)(m?s)(?:\s+(-?[\.\d]+)(m?s))?(?:\s+([-a-z]+(?:\(.+?\))?))?$/i;
  let duration;
  let delay = 0;
  let easing = '';
  if (typeof exp === 'string') {
    const matches = exp.match(regex);
    if (matches === null) {
      errors.push(invalidTimingValue(exp));
      return {
        duration: 0,
        delay: 0,
        easing: ''
      };
    }
    duration = _convertTimeValueToMS(parseFloat(matches[1]), matches[2]);
    const delayMatch = matches[3];
    if (delayMatch != null) {
      delay = _convertTimeValueToMS(parseFloat(delayMatch), matches[4]);
    }
    const easingVal = matches[5];
    if (easingVal) {
      easing = easingVal;
    }
  } else {
    duration = exp;
  }
  if (!allowNegativeValues) {
    let containsErrors = false;
    let startIndex = errors.length;
    if (duration < 0) {
      errors.push(negativeStepValue());
      containsErrors = true;
    }
    if (delay < 0) {
      errors.push(negativeDelayValue());
      containsErrors = true;
    }
    if (containsErrors) {
      errors.splice(startIndex, 0, invalidTimingValue(exp));
    }
  }
  return {
    duration,
    delay,
    easing
  };
}
function copyObj(obj, destination = {}) {
  Object.keys(obj).forEach(prop => {
    destination[prop] = obj[prop];
  });
  return destination;
}
function convertToMap(obj) {
  const styleMap = new Map();
  Object.keys(obj).forEach(prop => {
    const val = obj[prop];
    styleMap.set(prop, val);
  });
  return styleMap;
}
function copyStyles(styles, destination = new Map(), backfill) {
  if (backfill) {
    for (let [prop, val] of backfill) {
      destination.set(prop, val);
    }
  }
  for (let [prop, val] of styles) {
    destination.set(prop, val);
  }
  return destination;
}
function setStyles(element, styles, formerStyles) {
  styles.forEach((val, prop) => {
    const camelProp = dashCaseToCamelCase(prop);
    if (formerStyles && !formerStyles.has(prop)) {
      formerStyles.set(prop, element.style[camelProp]);
    }
    element.style[camelProp] = val;
  });
}
function eraseStyles(element, styles) {
  styles.forEach((_, prop) => {
    const camelProp = dashCaseToCamelCase(prop);
    element.style[camelProp] = '';
  });
}
function normalizeAnimationEntry(steps) {
  if (Array.isArray(steps)) {
    if (steps.length == 1) return steps[0];
    return sequence(steps);
  }
  return steps;
}
function validateStyleParams(value, options, errors) {
  const params = options.params || {};
  const matches = extractStyleParams(value);
  if (matches.length) {
    matches.forEach(varName => {
      if (!params.hasOwnProperty(varName)) {
        errors.push(invalidStyleParams(varName));
      }
    });
  }
}
const PARAM_REGEX = /*#__PURE__*/new RegExp(`${SUBSTITUTION_EXPR_START}\\s*(.+?)\\s*${SUBSTITUTION_EXPR_END}`, 'g');
function extractStyleParams(value) {
  let params = [];
  if (typeof value === 'string') {
    let match;
    while (match = PARAM_REGEX.exec(value)) {
      params.push(match[1]);
    }
    PARAM_REGEX.lastIndex = 0;
  }
  return params;
}
function interpolateParams(value, params, errors) {
  const original = value.toString();
  const str = original.replace(PARAM_REGEX, (_, varName) => {
    let localVal = params[varName];
    // this means that the value was never overridden by the data passed in by the user
    if (localVal == null) {
      errors.push(invalidParamValue(varName));
      localVal = '';
    }
    return localVal.toString();
  });
  // we do this to assert that numeric values stay as they are
  return str == original ? value : str;
}
function iteratorToArray(iterator) {
  const arr = [];
  let item = iterator.next();
  while (!item.done) {
    arr.push(item.value);
    item = iterator.next();
  }
  return arr;
}
const DASH_CASE_REGEXP = /-+([a-z0-9])/g;
function dashCaseToCamelCase(input) {
  return input.replace(DASH_CASE_REGEXP, (...m) => m[1].toUpperCase());
}
function visitDslNode(visitor, node, context) {
  switch (node.type) {
    case 7 /* AnimationMetadataType.Trigger */:
      return visitor.visitTrigger(node, context);
    case 0 /* AnimationMetadataType.State */:
      return visitor.visitState(node, context);
    case 1 /* AnimationMetadataType.Transition */:
      return visitor.visitTransition(node, context);
    case 2 /* AnimationMetadataType.Sequence */:
      return visitor.visitSequence(node, context);
    case 3 /* AnimationMetadataType.Group */:
      return visitor.visitGroup(node, context);
    case 4 /* AnimationMetadataType.Animate */:
      return visitor.visitAnimate(node, context);
    case 5 /* AnimationMetadataType.Keyframes */:
      return visitor.visitKeyframes(node, context);
    case 6 /* AnimationMetadataType.Style */:
      return visitor.visitStyle(node, context);
    case 8 /* AnimationMetadataType.Reference */:
      return visitor.visitReference(node, context);
    case 9 /* AnimationMetadataType.AnimateChild */:
      return visitor.visitAnimateChild(node, context);
    case 10 /* AnimationMetadataType.AnimateRef */:
      return visitor.visitAnimateRef(node, context);
    case 11 /* AnimationMetadataType.Query */:
      return visitor.visitQuery(node, context);
    case 12 /* AnimationMetadataType.Stagger */:
      return visitor.visitStagger(node, context);
    default:
      throw invalidNodeType(node.type);
  }
}
function createListOfWarnings(warnings) {
  const LINE_START = '\n - ';
  return `${LINE_START}${warnings.filter(Boolean).map(warning => warning).join(LINE_START)}`;
}
function warnTriggerBuild(name, warnings) {
  (typeof ngDevMode === 'undefined' || ngDevMode) && console.warn(`The animation trigger "${name}" has built with the following warnings:${createListOfWarnings(warnings)}`);
}
function warnRegister(warnings) {
  (typeof ngDevMode === 'undefined' || ngDevMode) && console.warn(`Animation built with the following warnings:${createListOfWarnings(warnings)}`);
}
function pushUnrecognizedPropertiesWarning(warnings, props) {
  if (props.length) {
    warnings.push(`The following provided properties are not recognized: ${props.join(', ')}`);
  }
}
const ANY_STATE = '*';
function parseTransitionExpr(transitionValue, errors) {
  const expressions = [];
  if (typeof transitionValue == 'string') {
    transitionValue.split(/\s*,\s*/).forEach(str => parseInnerTransitionStr(str, expressions, errors));
  } else {
    expressions.push(transitionValue);
  }
  return expressions;
}
function parseInnerTransitionStr(eventStr, expressions, errors) {
  if (eventStr[0] == ':') {
    const result = parseAnimationAlias(eventStr, errors);
    if (typeof result == 'function') {
      expressions.push(result);
      return;
    }
    eventStr = result;
  }
  const match = eventStr.match(/^(\*|[-\w]+)\s*(<?[=-]>)\s*(\*|[-\w]+)$/);
  if (match == null || match.length < 4) {
    errors.push(invalidExpression(eventStr));
    return expressions;
  }
  const fromState = match[1];
  const separator = match[2];
  const toState = match[3];
  expressions.push(makeLambdaFromStates(fromState, toState));
  const isFullAnyStateExpr = fromState == ANY_STATE && toState == ANY_STATE;
  if (separator[0] == '<' && !isFullAnyStateExpr) {
    expressions.push(makeLambdaFromStates(toState, fromState));
  }
}
function parseAnimationAlias(alias, errors) {
  switch (alias) {
    case ':enter':
      return 'void => *';
    case ':leave':
      return '* => void';
    case ':increment':
      return (fromState, toState) => parseFloat(toState) > parseFloat(fromState);
    case ':decrement':
      return (fromState, toState) => parseFloat(toState) < parseFloat(fromState);
    default:
      errors.push(invalidTransitionAlias(alias));
      return '* => *';
  }
}
// DO NOT REFACTOR ... keep the follow set instantiations
// with the values intact (closure compiler for some reason
// removes follow-up lines that add the values outside of
// the constructor...
const TRUE_BOOLEAN_VALUES = /*#__PURE__*/new Set(['true', '1']);
const FALSE_BOOLEAN_VALUES = /*#__PURE__*/new Set(['false', '0']);
function makeLambdaFromStates(lhs, rhs) {
  const LHS_MATCH_BOOLEAN = TRUE_BOOLEAN_VALUES.has(lhs) || FALSE_BOOLEAN_VALUES.has(lhs);
  const RHS_MATCH_BOOLEAN = TRUE_BOOLEAN_VALUES.has(rhs) || FALSE_BOOLEAN_VALUES.has(rhs);
  return (fromState, toState) => {
    let lhsMatch = lhs == ANY_STATE || lhs == fromState;
    let rhsMatch = rhs == ANY_STATE || rhs == toState;
    if (!lhsMatch && LHS_MATCH_BOOLEAN && typeof fromState === 'boolean') {
      lhsMatch = fromState ? TRUE_BOOLEAN_VALUES.has(lhs) : FALSE_BOOLEAN_VALUES.has(lhs);
    }
    if (!rhsMatch && RHS_MATCH_BOOLEAN && typeof toState === 'boolean') {
      rhsMatch = toState ? TRUE_BOOLEAN_VALUES.has(rhs) : FALSE_BOOLEAN_VALUES.has(rhs);
    }
    return lhsMatch && rhsMatch;
  };
}
const SELF_TOKEN = ':self';
const SELF_TOKEN_REGEX = /*#__PURE__*/new RegExp(`\s*${SELF_TOKEN}\s*,?`, 'g');
/*
 * [Validation]
 * The visitor code below will traverse the animation AST generated by the animation verb functions
 * (the output is a tree of objects) and attempt to perform a series of validations on the data. The
 * following corner-cases will be validated:
 *
 * 1. Overlap of animations
 * Given that a CSS property cannot be animated in more than one place at the same time, it's
 * important that this behavior is detected and validated. The way in which this occurs is that
 * each time a style property is examined, a string-map containing the property will be updated with
 * the start and end times for when the property is used within an animation step.
 *
 * If there are two or more parallel animations that are currently running (these are invoked by the
 * group()) on the same element then the validator will throw an error. Since the start/end timing
 * values are collected for each property then if the current animation step is animating the same
 * property and its timing values fall anywhere into the window of time that the property is
 * currently being animated within then this is what causes an error.
 *
 * 2. Timing values
 * The validator will validate to see if a timing value of `duration delay easing` or
 * `durationNumber` is valid or not.
 *
 * (note that upon validation the code below will replace the timing data with an object containing
 * {duration,delay,easing}.
 *
 * 3. Offset Validation
 * Each of the style() calls are allowed to have an offset value when placed inside of keyframes().
 * Offsets within keyframes() are considered valid when:
 *
 *   - No offsets are used at all
 *   - Each style() entry contains an offset value
 *   - Each offset is between 0 and 1
 *   - Each offset is greater to or equal than the previous one
 *
 * Otherwise an error will be thrown.
 */
function buildAnimationAst(driver, metadata, errors, warnings) {
  return new AnimationAstBuilderVisitor(driver).build(metadata, errors, warnings);
}
const ROOT_SELECTOR = '';
class AnimationAstBuilderVisitor {
  constructor(_driver) {
    this._driver = _driver;
  }
  build(metadata, errors, warnings) {
    const context = new AnimationAstBuilderContext(errors);
    this._resetContextStyleTimingState(context);
    const ast = visitDslNode(this, normalizeAnimationEntry(metadata), context);
    if (typeof ngDevMode === 'undefined' || ngDevMode) {
      if (context.unsupportedCSSPropertiesFound.size) {
        pushUnrecognizedPropertiesWarning(warnings, [...context.unsupportedCSSPropertiesFound.keys()]);
      }
    }
    return ast;
  }
  _resetContextStyleTimingState(context) {
    context.currentQuerySelector = ROOT_SELECTOR;
    context.collectedStyles = new Map();
    context.collectedStyles.set(ROOT_SELECTOR, new Map());
    context.currentTime = 0;
  }
  visitTrigger(metadata, context) {
    let queryCount = context.queryCount = 0;
    let depCount = context.depCount = 0;
    const states = [];
    const transitions = [];
    if (metadata.name.charAt(0) == '@') {
      context.errors.push(invalidTrigger());
    }
    metadata.definitions.forEach(def => {
      this._resetContextStyleTimingState(context);
      if (def.type == 0 /* AnimationMetadataType.State */) {
        const stateDef = def;
        const name = stateDef.name;
        name.toString().split(/\s*,\s*/).forEach(n => {
          stateDef.name = n;
          states.push(this.visitState(stateDef, context));
        });
        stateDef.name = name;
      } else if (def.type == 1 /* AnimationMetadataType.Transition */) {
        const transition = this.visitTransition(def, context);
        queryCount += transition.queryCount;
        depCount += transition.depCount;
        transitions.push(transition);
      } else {
        context.errors.push(invalidDefinition());
      }
    });
    return {
      type: 7 /* AnimationMetadataType.Trigger */,
      name: metadata.name,
      states,
      transitions,
      queryCount,
      depCount,
      options: null
    };
  }
  visitState(metadata, context) {
    const styleAst = this.visitStyle(metadata.styles, context);
    const astParams = metadata.options && metadata.options.params || null;
    if (styleAst.containsDynamicStyles) {
      const missingSubs = new Set();
      const params = astParams || {};
      styleAst.styles.forEach(style => {
        if (style instanceof Map) {
          style.forEach(value => {
            extractStyleParams(value).forEach(sub => {
              if (!params.hasOwnProperty(sub)) {
                missingSubs.add(sub);
              }
            });
          });
        }
      });
      if (missingSubs.size) {
        const missingSubsArr = iteratorToArray(missingSubs.values());
        context.errors.push(invalidState(metadata.name, missingSubsArr));
      }
    }
    return {
      type: 0 /* AnimationMetadataType.State */,
      name: metadata.name,
      style: styleAst,
      options: astParams ? {
        params: astParams
      } : null
    };
  }
  visitTransition(metadata, context) {
    context.queryCount = 0;
    context.depCount = 0;
    const animation = visitDslNode(this, normalizeAnimationEntry(metadata.animation), context);
    const matchers = parseTransitionExpr(metadata.expr, context.errors);
    return {
      type: 1 /* AnimationMetadataType.Transition */,
      matchers,
      animation,
      queryCount: context.queryCount,
      depCount: context.depCount,
      options: normalizeAnimationOptions(metadata.options)
    };
  }
  visitSequence(metadata, context) {
    return {
      type: 2 /* AnimationMetadataType.Sequence */,
      steps: metadata.steps.map(s => visitDslNode(this, s, context)),
      options: normalizeAnimationOptions(metadata.options)
    };
  }
  visitGroup(metadata, context) {
    const currentTime = context.currentTime;
    let furthestTime = 0;
    const steps = metadata.steps.map(step => {
      context.currentTime = currentTime;
      const innerAst = visitDslNode(this, step, context);
      furthestTime = Math.max(furthestTime, context.currentTime);
      return innerAst;
    });
    context.currentTime = furthestTime;
    return {
      type: 3 /* AnimationMetadataType.Group */,
      steps,
      options: normalizeAnimationOptions(metadata.options)
    };
  }
  visitAnimate(metadata, context) {
    const timingAst = constructTimingAst(metadata.timings, context.errors);
    context.currentAnimateTimings = timingAst;
    let styleAst;
    let styleMetadata = metadata.styles ? metadata.styles : style({});
    if (styleMetadata.type == 5 /* AnimationMetadataType.Keyframes */) {
      styleAst = this.visitKeyframes(styleMetadata, context);
    } else {
      let styleMetadata = metadata.styles;
      let isEmpty = false;
      if (!styleMetadata) {
        isEmpty = true;
        const newStyleData = {};
        if (timingAst.easing) {
          newStyleData['easing'] = timingAst.easing;
        }
        styleMetadata = style(newStyleData);
      }
      context.currentTime += timingAst.duration + timingAst.delay;
      const _styleAst = this.visitStyle(styleMetadata, context);
      _styleAst.isEmptyStep = isEmpty;
      styleAst = _styleAst;
    }
    context.currentAnimateTimings = null;
    return {
      type: 4 /* AnimationMetadataType.Animate */,
      timings: timingAst,
      style: styleAst,
      options: null
    };
  }
  visitStyle(metadata, context) {
    const ast = this._makeStyleAst(metadata, context);
    this._validateStyleAst(ast, context);
    return ast;
  }
  _makeStyleAst(metadata, context) {
    const styles = [];
    const metadataStyles = Array.isArray(metadata.styles) ? metadata.styles : [metadata.styles];
    for (let styleTuple of metadataStyles) {
      if (typeof styleTuple === 'string') {
        if (styleTuple === AUTO_STYLE) {
          styles.push(styleTuple);
        } else {
          context.errors.push(invalidStyleValue(styleTuple));
        }
      } else {
        styles.push(convertToMap(styleTuple));
      }
    }
    let containsDynamicStyles = false;
    let collectedEasing = null;
    styles.forEach(styleData => {
      if (styleData instanceof Map) {
        if (styleData.has('easing')) {
          collectedEasing = styleData.get('easing');
          styleData.delete('easing');
        }
        if (!containsDynamicStyles) {
          for (let value of styleData.values()) {
            if (value.toString().indexOf(SUBSTITUTION_EXPR_START) >= 0) {
              containsDynamicStyles = true;
              break;
            }
          }
        }
      }
    });
    return {
      type: 6 /* AnimationMetadataType.Style */,
      styles,
      easing: collectedEasing,
      offset: metadata.offset,
      containsDynamicStyles,
      options: null
    };
  }
  _validateStyleAst(ast, context) {
    const timings = context.currentAnimateTimings;
    let endTime = context.currentTime;
    let startTime = context.currentTime;
    if (timings && startTime > 0) {
      startTime -= timings.duration + timings.delay;
    }
    ast.styles.forEach(tuple => {
      if (typeof tuple === 'string') return;
      tuple.forEach((value, prop) => {
        if (typeof ngDevMode === 'undefined' || ngDevMode) {
          if (!this._driver.validateStyleProperty(prop)) {
            tuple.delete(prop);
            context.unsupportedCSSPropertiesFound.add(prop);
            return;
          }
        }
        // This is guaranteed to have a defined Map at this querySelector location making it
        // safe to add the assertion here. It is set as a default empty map in prior methods.
        const collectedStyles = context.collectedStyles.get(context.currentQuerySelector);
        const collectedEntry = collectedStyles.get(prop);
        let updateCollectedStyle = true;
        if (collectedEntry) {
          if (startTime != endTime && startTime >= collectedEntry.startTime && endTime <= collectedEntry.endTime) {
            context.errors.push(invalidParallelAnimation(prop, collectedEntry.startTime, collectedEntry.endTime, startTime, endTime));
            updateCollectedStyle = false;
          }
          // we always choose the smaller start time value since we
          // want to have a record of the entire animation window where
          // the style property is being animated in between
          startTime = collectedEntry.startTime;
        }
        if (updateCollectedStyle) {
          collectedStyles.set(prop, {
            startTime,
            endTime
          });
        }
        if (context.options) {
          validateStyleParams(value, context.options, context.errors);
        }
      });
    });
  }
  visitKeyframes(metadata, context) {
    const ast = {
      type: 5 /* AnimationMetadataType.Keyframes */,
      styles: [],
      options: null
    };
    if (!context.currentAnimateTimings) {
      context.errors.push(invalidKeyframes());
      return ast;
    }
    const MAX_KEYFRAME_OFFSET = 1;
    let totalKeyframesWithOffsets = 0;
    const offsets = [];
    let offsetsOutOfOrder = false;
    let keyframesOutOfRange = false;
    let previousOffset = 0;
    const keyframes = metadata.steps.map(styles => {
      const style = this._makeStyleAst(styles, context);
      let offsetVal = style.offset != null ? style.offset : consumeOffset(style.styles);
      let offset = 0;
      if (offsetVal != null) {
        totalKeyframesWithOffsets++;
        offset = style.offset = offsetVal;
      }
      keyframesOutOfRange = keyframesOutOfRange || offset < 0 || offset > 1;
      offsetsOutOfOrder = offsetsOutOfOrder || offset < previousOffset;
      previousOffset = offset;
      offsets.push(offset);
      return style;
    });
    if (keyframesOutOfRange) {
      context.errors.push(invalidOffset());
    }
    if (offsetsOutOfOrder) {
      context.errors.push(keyframeOffsetsOutOfOrder());
    }
    const length = metadata.steps.length;
    let generatedOffset = 0;
    if (totalKeyframesWithOffsets > 0 && totalKeyframesWithOffsets < length) {
      context.errors.push(keyframesMissingOffsets());
    } else if (totalKeyframesWithOffsets == 0) {
      generatedOffset = MAX_KEYFRAME_OFFSET / (length - 1);
    }
    const limit = length - 1;
    const currentTime = context.currentTime;
    const currentAnimateTimings = context.currentAnimateTimings;
    const animateDuration = currentAnimateTimings.duration;
    keyframes.forEach((kf, i) => {
      const offset = generatedOffset > 0 ? i == limit ? 1 : generatedOffset * i : offsets[i];
      const durationUpToThisFrame = offset * animateDuration;
      context.currentTime = currentTime + currentAnimateTimings.delay + durationUpToThisFrame;
      currentAnimateTimings.duration = durationUpToThisFrame;
      this._validateStyleAst(kf, context);
      kf.offset = offset;
      ast.styles.push(kf);
    });
    return ast;
  }
  visitReference(metadata, context) {
    return {
      type: 8 /* AnimationMetadataType.Reference */,
      animation: visitDslNode(this, normalizeAnimationEntry(metadata.animation), context),
      options: normalizeAnimationOptions(metadata.options)
    };
  }
  visitAnimateChild(metadata, context) {
    context.depCount++;
    return {
      type: 9 /* AnimationMetadataType.AnimateChild */,
      options: normalizeAnimationOptions(metadata.options)
    };
  }
  visitAnimateRef(metadata, context) {
    return {
      type: 10 /* AnimationMetadataType.AnimateRef */,
      animation: this.visitReference(metadata.animation, context),
      options: normalizeAnimationOptions(metadata.options)
    };
  }
  visitQuery(metadata, context) {
    const parentSelector = context.currentQuerySelector;
    const options = metadata.options || {};
    context.queryCount++;
    context.currentQuery = metadata;
    const [selector, includeSelf] = normalizeSelector(metadata.selector);
    context.currentQuerySelector = parentSelector.length ? parentSelector + ' ' + selector : selector;
    getOrSetDefaultValue(context.collectedStyles, context.currentQuerySelector, new Map());
    const animation = visitDslNode(this, normalizeAnimationEntry(metadata.animation), context);
    context.currentQuery = null;
    context.currentQuerySelector = parentSelector;
    return {
      type: 11 /* AnimationMetadataType.Query */,
      selector,
      limit: options.limit || 0,
      optional: !!options.optional,
      includeSelf,
      animation,
      originalSelector: metadata.selector,
      options: normalizeAnimationOptions(metadata.options)
    };
  }
  visitStagger(metadata, context) {
    if (!context.currentQuery) {
      context.errors.push(invalidStagger());
    }
    const timings = metadata.timings === 'full' ? {
      duration: 0,
      delay: 0,
      easing: 'full'
    } : resolveTiming(metadata.timings, context.errors, true);
    return {
      type: 12 /* AnimationMetadataType.Stagger */,
      animation: visitDslNode(this, normalizeAnimationEntry(metadata.animation), context),
      timings,
      options: null
    };
  }
}
function normalizeSelector(selector) {
  const hasAmpersand = selector.split(/\s*,\s*/).find(token => token == SELF_TOKEN) ? true : false;
  if (hasAmpersand) {
    selector = selector.replace(SELF_TOKEN_REGEX, '');
  }
  // Note: the :enter and :leave aren't normalized here since those
  // selectors are filled in at runtime during timeline building
  selector = selector.replace(/@\*/g, NG_TRIGGER_SELECTOR).replace(/@\w+/g, match => NG_TRIGGER_SELECTOR + '-' + match.slice(1)).replace(/:animating/g, NG_ANIMATING_SELECTOR);
  return [selector, hasAmpersand];
}
function normalizeParams(obj) {
  return obj ? copyObj(obj) : null;
}
class AnimationAstBuilderContext {
  constructor(errors) {
    this.errors = errors;
    this.queryCount = 0;
    this.depCount = 0;
    this.currentTransition = null;
    this.currentQuery = null;
    this.currentQuerySelector = null;
    this.currentAnimateTimings = null;
    this.currentTime = 0;
    this.collectedStyles = new Map();
    this.options = null;
    this.unsupportedCSSPropertiesFound = new Set();
  }
}
function consumeOffset(styles) {
  if (typeof styles == 'string') return null;
  let offset = null;
  if (Array.isArray(styles)) {
    styles.forEach(styleTuple => {
      if (styleTuple instanceof Map && styleTuple.has('offset')) {
        const obj = styleTuple;
        offset = parseFloat(obj.get('offset'));
        obj.delete('offset');
      }
    });
  } else if (styles instanceof Map && styles.has('offset')) {
    const obj = styles;
    offset = parseFloat(obj.get('offset'));
    obj.delete('offset');
  }
  return offset;
}
function constructTimingAst(value, errors) {
  if (value.hasOwnProperty('duration')) {
    return value;
  }
  if (typeof value == 'number') {
    const duration = resolveTiming(value, errors).duration;
    return makeTimingAst(duration, 0, '');
  }
  const strValue = value;
  const isDynamic = strValue.split(/\s+/).some(v => v.charAt(0) == '{' && v.charAt(1) == '{');
  if (isDynamic) {
    const ast = makeTimingAst(0, 0, '');
    ast.dynamic = true;
    ast.strValue = strValue;
    return ast;
  }
  const timings = resolveTiming(strValue, errors);
  return makeTimingAst(timings.duration, timings.delay, timings.easing);
}
function normalizeAnimationOptions(options) {
  if (options) {
    options = copyObj(options);
    if (options['params']) {
      options['params'] = normalizeParams(options['params']);
    }
  } else {
    options = {};
  }
  return options;
}
function makeTimingAst(duration, delay, easing) {
  return {
    duration,
    delay,
    easing
  };
}
function createTimelineInstruction(element, keyframes, preStyleProps, postStyleProps, duration, delay, easing = null, subTimeline = false) {
  return {
    type: 1 /* AnimationTransitionInstructionType.TimelineAnimation */,
    element,
    keyframes,
    preStyleProps,
    postStyleProps,
    duration,
    delay,
    totalTime: duration + delay,
    easing,
    subTimeline
  };
}
class ElementInstructionMap {
  constructor() {
    this._map = new Map();
  }
  get(element) {
    return this._map.get(element) || [];
  }
  append(element, instructions) {
    let existingInstructions = this._map.get(element);
    if (!existingInstructions) {
      this._map.set(element, existingInstructions = []);
    }
    existingInstructions.push(...instructions);
  }
  has(element) {
    return this._map.has(element);
  }
  clear() {
    this._map.clear();
  }
}
const ONE_FRAME_IN_MILLISECONDS = 1;
const ENTER_TOKEN = ':enter';
const ENTER_TOKEN_REGEX = /*#__PURE__*/new RegExp(ENTER_TOKEN, 'g');
const LEAVE_TOKEN = ':leave';
const LEAVE_TOKEN_REGEX = /*#__PURE__*/new RegExp(LEAVE_TOKEN, 'g');
/*
 * The code within this file aims to generate web-animations-compatible keyframes from Angular's
 * animation DSL code.
 *
 * The code below will be converted from:
 *
 * ```
 * sequence([
 *   style({ opacity: 0 }),
 *   animate(1000, style({ opacity: 0 }))
 * ])
 * ```
 *
 * To:
 * ```
 * keyframes = [{ opacity: 0, offset: 0 }, { opacity: 1, offset: 1 }]
 * duration = 1000
 * delay = 0
 * easing = ''
 * ```
 *
 * For this operation to cover the combination of animation verbs (style, animate, group, etc...) a
 * combination of AST traversal and merge-sort-like algorithms are used.
 *
 * [AST Traversal]
 * Each of the animation verbs, when executed, will return an string-map object representing what
 * type of action it is (style, animate, group, etc...) and the data associated with it. This means
 * that when functional composition mix of these functions is evaluated (like in the example above)
 * then it will end up producing a tree of objects representing the animation itself.
 *
 * When this animation object tree is processed by the visitor code below it will visit each of the
 * verb statements within the visitor. And during each visit it will build the context of the
 * animation keyframes by interacting with the `TimelineBuilder`.
 *
 * [TimelineBuilder]
 * This class is responsible for tracking the styles and building a series of keyframe objects for a
 * timeline between a start and end time. The builder starts off with an initial timeline and each
 * time the AST comes across a `group()`, `keyframes()` or a combination of the two within a
 * `sequence()` then it will generate a sub timeline for each step as well as a new one after
 * they are complete.
 *
 * As the AST is traversed, the timing state on each of the timelines will be incremented. If a sub
 * timeline was created (based on one of the cases above) then the parent timeline will attempt to
 * merge the styles used within the sub timelines into itself (only with group() this will happen).
 * This happens with a merge operation (much like how the merge works in mergeSort) and it will only
 * copy the most recently used styles from the sub timelines into the parent timeline. This ensures
 * that if the styles are used later on in another phase of the animation then they will be the most
 * up-to-date values.
 *
 * [How Missing Styles Are Updated]
 * Each timeline has a `backFill` property which is responsible for filling in new styles into
 * already processed keyframes if a new style shows up later within the animation sequence.
 *
 * ```
 * sequence([
 *   style({ width: 0 }),
 *   animate(1000, style({ width: 100 })),
 *   animate(1000, style({ width: 200 })),
 *   animate(1000, style({ width: 300 }))
 *   animate(1000, style({ width: 400, height: 400 })) // notice how `height` doesn't exist anywhere
 * else
 * ])
 * ```
 *
 * What is happening here is that the `height` value is added later in the sequence, but is missing
 * from all previous animation steps. Therefore when a keyframe is created it would also be missing
 * from all previous keyframes up until where it is first used. For the timeline keyframe generation
 * to properly fill in the style it will place the previous value (the value from the parent
 * timeline) or a default value of `*` into the backFill map. The `copyStyles` method in util.ts
 * handles propagating that backfill map to the styles object.
 *
 * When a sub-timeline is created it will have its own backFill property. This is done so that
 * styles present within the sub-timeline do not accidentally seep into the previous/future timeline
 * keyframes
 *
 * [Validation]
 * The code in this file is not responsible for validation. That functionality happens with within
 * the `AnimationValidatorVisitor` code.
 */
function buildAnimationTimelines(driver, rootElement, ast, enterClassName, leaveClassName, startingStyles = new Map(), finalStyles = new Map(), options, subInstructions, errors = []) {
  return new AnimationTimelineBuilderVisitor().buildKeyframes(driver, rootElement, ast, enterClassName, leaveClassName, startingStyles, finalStyles, options, subInstructions, errors);
}
class AnimationTimelineBuilderVisitor {
  buildKeyframes(driver, rootElement, ast, enterClassName, leaveClassName, startingStyles, finalStyles, options, subInstructions, errors = []) {
    subInstructions = subInstructions || new ElementInstructionMap();
    const context = new AnimationTimelineContext(driver, rootElement, subInstructions, enterClassName, leaveClassName, errors, []);
    context.options = options;
    const delay = options.delay ? resolveTimingValue(options.delay) : 0;
    context.currentTimeline.delayNextStep(delay);
    context.currentTimeline.setStyles([startingStyles], null, context.errors, options);
    visitDslNode(this, ast, context);
    // this checks to see if an actual animation happened
    const timelines = context.timelines.filter(timeline => timeline.containsAnimation());
    // note: we just want to apply the final styles for the rootElement, so we do not
    //       just apply the styles to the last timeline but the last timeline which
    //       element is the root one (basically `*`-styles are replaced with the actual
    //       state style values only for the root element)
    if (timelines.length && finalStyles.size) {
      let lastRootTimeline;
      for (let i = timelines.length - 1; i >= 0; i--) {
        const timeline = timelines[i];
        if (timeline.element === rootElement) {
          lastRootTimeline = timeline;
          break;
        }
      }
      if (lastRootTimeline && !lastRootTimeline.allowOnlyTimelineStyles()) {
        lastRootTimeline.setStyles([finalStyles], null, context.errors, options);
      }
    }
    return timelines.length ? timelines.map(timeline => timeline.buildKeyframes()) : [createTimelineInstruction(rootElement, [], [], [], 0, delay, '', false)];
  }
  visitTrigger(ast, context) {
    // these values are not visited in this AST
  }
  visitState(ast, context) {
    // these values are not visited in this AST
  }
  visitTransition(ast, context) {
    // these values are not visited in this AST
  }
  visitAnimateChild(ast, context) {
    const elementInstructions = context.subInstructions.get(context.element);
    if (elementInstructions) {
      const innerContext = context.createSubContext(ast.options);
      const startTime = context.currentTimeline.currentTime;
      const endTime = this._visitSubInstructions(elementInstructions, innerContext, innerContext.options);
      if (startTime != endTime) {
        // we do this on the upper context because we created a sub context for
        // the sub child animations
        context.transformIntoNewTimeline(endTime);
      }
    }
    context.previousNode = ast;
  }
  visitAnimateRef(ast, context) {
    const innerContext = context.createSubContext(ast.options);
    innerContext.transformIntoNewTimeline();
    this._applyAnimationRefDelays([ast.options, ast.animation.options], context, innerContext);
    this.visitReference(ast.animation, innerContext);
    context.transformIntoNewTimeline(innerContext.currentTimeline.currentTime);
    context.previousNode = ast;
  }
  _applyAnimationRefDelays(animationsRefsOptions, context, innerContext) {
    for (const animationRefOptions of animationsRefsOptions) {
      const animationDelay = animationRefOptions?.delay;
      if (animationDelay) {
        const animationDelayValue = typeof animationDelay === 'number' ? animationDelay : resolveTimingValue(interpolateParams(animationDelay, animationRefOptions?.params ?? {}, context.errors));
        innerContext.delayNextStep(animationDelayValue);
      }
    }
  }
  _visitSubInstructions(instructions, context, options) {
    const startTime = context.currentTimeline.currentTime;
    let furthestTime = startTime;
    // this is a special-case for when a user wants to skip a sub
    // animation from being fired entirely.
    const duration = options.duration != null ? resolveTimingValue(options.duration) : null;
    const delay = options.delay != null ? resolveTimingValue(options.delay) : null;
    if (duration !== 0) {
      instructions.forEach(instruction => {
        const instructionTimings = context.appendInstructionToTimeline(instruction, duration, delay);
        furthestTime = Math.max(furthestTime, instructionTimings.duration + instructionTimings.delay);
      });
    }
    return furthestTime;
  }
  visitReference(ast, context) {
    context.updateOptions(ast.options, true);
    visitDslNode(this, ast.animation, context);
    context.previousNode = ast;
  }
  visitSequence(ast, context) {
    const subContextCount = context.subContextCount;
    let ctx = context;
    const options = ast.options;
    if (options && (options.params || options.delay)) {
      ctx = context.createSubContext(options);
      ctx.transformIntoNewTimeline();
      if (options.delay != null) {
        if (ctx.previousNode.type == 6 /* AnimationMetadataType.Style */) {
          ctx.currentTimeline.snapshotCurrentStyles();
          ctx.previousNode = DEFAULT_NOOP_PREVIOUS_NODE;
        }
        const delay = resolveTimingValue(options.delay);
        ctx.delayNextStep(delay);
      }
    }
    if (ast.steps.length) {
      ast.steps.forEach(s => visitDslNode(this, s, ctx));
      // this is here just in case the inner steps only contain or end with a style() call
      ctx.currentTimeline.applyStylesToKeyframe();
      // this means that some animation function within the sequence
      // ended up creating a sub timeline (which means the current
      // timeline cannot overlap with the contents of the sequence)
      if (ctx.subContextCount > subContextCount) {
        ctx.transformIntoNewTimeline();
      }
    }
    context.previousNode = ast;
  }
  visitGroup(ast, context) {
    const innerTimelines = [];
    let furthestTime = context.currentTimeline.currentTime;
    const delay = ast.options && ast.options.delay ? resolveTimingValue(ast.options.delay) : 0;
    ast.steps.forEach(s => {
      const innerContext = context.createSubContext(ast.options);
      if (delay) {
        innerContext.delayNextStep(delay);
      }
      visitDslNode(this, s, innerContext);
      furthestTime = Math.max(furthestTime, innerContext.currentTimeline.currentTime);
      innerTimelines.push(innerContext.currentTimeline);
    });
    // this operation is run after the AST loop because otherwise
    // if the parent timeline's collected styles were updated then
    // it would pass in invalid data into the new-to-be forked items
    innerTimelines.forEach(timeline => context.currentTimeline.mergeTimelineCollectedStyles(timeline));
    context.transformIntoNewTimeline(furthestTime);
    context.previousNode = ast;
  }
  _visitTiming(ast, context) {
    if (ast.dynamic) {
      const strValue = ast.strValue;
      const timingValue = context.params ? interpolateParams(strValue, context.params, context.errors) : strValue;
      return resolveTiming(timingValue, context.errors);
    } else {
      return {
        duration: ast.duration,
        delay: ast.delay,
        easing: ast.easing
      };
    }
  }
  visitAnimate(ast, context) {
    const timings = context.currentAnimateTimings = this._visitTiming(ast.timings, context);
    const timeline = context.currentTimeline;
    if (timings.delay) {
      context.incrementTime(timings.delay);
      timeline.snapshotCurrentStyles();
    }
    const style = ast.style;
    if (style.type == 5 /* AnimationMetadataType.Keyframes */) {
      this.visitKeyframes(style, context);
    } else {
      context.incrementTime(timings.duration);
      this.visitStyle(style, context);
      timeline.applyStylesToKeyframe();
    }
    context.currentAnimateTimings = null;
    context.previousNode = ast;
  }
  visitStyle(ast, context) {
    const timeline = context.currentTimeline;
    const timings = context.currentAnimateTimings;
    // this is a special case for when a style() call
    // directly follows  an animate() call (but not inside of an animate() call)
    if (!timings && timeline.hasCurrentStyleProperties()) {
      timeline.forwardFrame();
    }
    const easing = timings && timings.easing || ast.easing;
    if (ast.isEmptyStep) {
      timeline.applyEmptyStep(easing);
    } else {
      timeline.setStyles(ast.styles, easing, context.errors, context.options);
    }
    context.previousNode = ast;
  }
  visitKeyframes(ast, context) {
    const currentAnimateTimings = context.currentAnimateTimings;
    const startTime = context.currentTimeline.duration;
    const duration = currentAnimateTimings.duration;
    const innerContext = context.createSubContext();
    const innerTimeline = innerContext.currentTimeline;
    innerTimeline.easing = currentAnimateTimings.easing;
    ast.styles.forEach(step => {
      const offset = step.offset || 0;
      innerTimeline.forwardTime(offset * duration);
      innerTimeline.setStyles(step.styles, step.easing, context.errors, context.options);
      innerTimeline.applyStylesToKeyframe();
    });
    // this will ensure that the parent timeline gets all the styles from
    // the child even if the new timeline below is not used
    context.currentTimeline.mergeTimelineCollectedStyles(innerTimeline);
    // we do this because the window between this timeline and the sub timeline
    // should ensure that the styles within are exactly the same as they were before
    context.transformIntoNewTimeline(startTime + duration);
    context.previousNode = ast;
  }
  visitQuery(ast, context) {
    // in the event that the first step before this is a style step we need
    // to ensure the styles are applied before the children are animated
    const startTime = context.currentTimeline.currentTime;
    const options = ast.options || {};
    const delay = options.delay ? resolveTimingValue(options.delay) : 0;
    if (delay && (context.previousNode.type === 6 /* AnimationMetadataType.Style */ || startTime == 0 && context.currentTimeline.hasCurrentStyleProperties())) {
      context.currentTimeline.snapshotCurrentStyles();
      context.previousNode = DEFAULT_NOOP_PREVIOUS_NODE;
    }
    let furthestTime = startTime;
    const elms = context.invokeQuery(ast.selector, ast.originalSelector, ast.limit, ast.includeSelf, options.optional ? true : false, context.errors);
    context.currentQueryTotal = elms.length;
    let sameElementTimeline = null;
    elms.forEach((element, i) => {
      context.currentQueryIndex = i;
      const innerContext = context.createSubContext(ast.options, element);
      if (delay) {
        innerContext.delayNextStep(delay);
      }
      if (element === context.element) {
        sameElementTimeline = innerContext.currentTimeline;
      }
      visitDslNode(this, ast.animation, innerContext);
      // this is here just incase the inner steps only contain or end
      // with a style() call (which is here to signal that this is a preparatory
      // call to style an element before it is animated again)
      innerContext.currentTimeline.applyStylesToKeyframe();
      const endTime = innerContext.currentTimeline.currentTime;
      furthestTime = Math.max(furthestTime, endTime);
    });
    context.currentQueryIndex = 0;
    context.currentQueryTotal = 0;
    context.transformIntoNewTimeline(furthestTime);
    if (sameElementTimeline) {
      context.currentTimeline.mergeTimelineCollectedStyles(sameElementTimeline);
      context.currentTimeline.snapshotCurrentStyles();
    }
    context.previousNode = ast;
  }
  visitStagger(ast, context) {
    const parentContext = context.parentContext;
    const tl = context.currentTimeline;
    const timings = ast.timings;
    const duration = Math.abs(timings.duration);
    const maxTime = duration * (context.currentQueryTotal - 1);
    let delay = duration * context.currentQueryIndex;
    let staggerTransformer = timings.duration < 0 ? 'reverse' : timings.easing;
    switch (staggerTransformer) {
      case 'reverse':
        delay = maxTime - delay;
        break;
      case 'full':
        delay = parentContext.currentStaggerTime;
        break;
    }
    const timeline = context.currentTimeline;
    if (delay) {
      timeline.delayNextStep(delay);
    }
    const startingTime = timeline.currentTime;
    visitDslNode(this, ast.animation, context);
    context.previousNode = ast;
    // time = duration + delay
    // the reason why this computation is so complex is because
    // the inner timeline may either have a delay value or a stretched
    // keyframe depending on if a subtimeline is not used or is used.
    parentContext.currentStaggerTime = tl.currentTime - startingTime + (tl.startTime - parentContext.currentTimeline.startTime);
  }
}
const DEFAULT_NOOP_PREVIOUS_NODE = {};
class AnimationTimelineContext {
  constructor(_driver, element, subInstructions, _enterClassName, _leaveClassName, errors, timelines, initialTimeline) {
    this._driver = _driver;
    this.element = element;
    this.subInstructions = subInstructions;
    this._enterClassName = _enterClassName;
    this._leaveClassName = _leaveClassName;
    this.errors = errors;
    this.timelines = timelines;
    this.parentContext = null;
    this.currentAnimateTimings = null;
    this.previousNode = DEFAULT_NOOP_PREVIOUS_NODE;
    this.subContextCount = 0;
    this.options = {};
    this.currentQueryIndex = 0;
    this.currentQueryTotal = 0;
    this.currentStaggerTime = 0;
    this.currentTimeline = initialTimeline || new TimelineBuilder(this._driver, element, 0);
    timelines.push(this.currentTimeline);
  }
  get params() {
    return this.options.params;
  }
  updateOptions(options, skipIfExists) {
    if (!options) return;
    const newOptions = options;
    let optionsToUpdate = this.options;
    // NOTE: this will get patched up when other animation methods support duration overrides
    if (newOptions.duration != null) {
      optionsToUpdate.duration = resolveTimingValue(newOptions.duration);
    }
    if (newOptions.delay != null) {
      optionsToUpdate.delay = resolveTimingValue(newOptions.delay);
    }
    const newParams = newOptions.params;
    if (newParams) {
      let paramsToUpdate = optionsToUpdate.params;
      if (!paramsToUpdate) {
        paramsToUpdate = this.options.params = {};
      }
      Object.keys(newParams).forEach(name => {
        if (!skipIfExists || !paramsToUpdate.hasOwnProperty(name)) {
          paramsToUpdate[name] = interpolateParams(newParams[name], paramsToUpdate, this.errors);
        }
      });
    }
  }
  _copyOptions() {
    const options = {};
    if (this.options) {
      const oldParams = this.options.params;
      if (oldParams) {
        const params = options['params'] = {};
        Object.keys(oldParams).forEach(name => {
          params[name] = oldParams[name];
        });
      }
    }
    return options;
  }
  createSubContext(options = null, element, newTime) {
    const target = element || this.element;
    const context = new AnimationTimelineContext(this._driver, target, this.subInstructions, this._enterClassName, this._leaveClassName, this.errors, this.timelines, this.currentTimeline.fork(target, newTime || 0));
    context.previousNode = this.previousNode;
    context.currentAnimateTimings = this.currentAnimateTimings;
    context.options = this._copyOptions();
    context.updateOptions(options);
    context.currentQueryIndex = this.currentQueryIndex;
    context.currentQueryTotal = this.currentQueryTotal;
    context.parentContext = this;
    this.subContextCount++;
    return context;
  }
  transformIntoNewTimeline(newTime) {
    this.previousNode = DEFAULT_NOOP_PREVIOUS_NODE;
    this.currentTimeline = this.currentTimeline.fork(this.element, newTime);
    this.timelines.push(this.currentTimeline);
    return this.currentTimeline;
  }
  appendInstructionToTimeline(instruction, duration, delay) {
    const updatedTimings = {
      duration: duration != null ? duration : instruction.duration,
      delay: this.currentTimeline.currentTime + (delay != null ? delay : 0) + instruction.delay,
      easing: ''
    };
    const builder = new SubTimelineBuilder(this._driver, instruction.element, instruction.keyframes, instruction.preStyleProps, instruction.postStyleProps, updatedTimings, instruction.stretchStartingKeyframe);
    this.timelines.push(builder);
    return updatedTimings;
  }
  incrementTime(time) {
    this.currentTimeline.forwardTime(this.currentTimeline.duration + time);
  }
  delayNextStep(delay) {
    // negative delays are not yet supported
    if (delay > 0) {
      this.currentTimeline.delayNextStep(delay);
    }
  }
  invokeQuery(selector, originalSelector, limit, includeSelf, optional, errors) {
    let results = [];
    if (includeSelf) {
      results.push(this.element);
    }
    if (selector.length > 0) {
      // only if :self is used then the selector can be empty
      selector = selector.replace(ENTER_TOKEN_REGEX, '.' + this._enterClassName);
      selector = selector.replace(LEAVE_TOKEN_REGEX, '.' + this._leaveClassName);
      const multi = limit != 1;
      let elements = this._driver.query(this.element, selector, multi);
      if (limit !== 0) {
        elements = limit < 0 ? elements.slice(elements.length + limit, elements.length) : elements.slice(0, limit);
      }
      results.push(...elements);
    }
    if (!optional && results.length == 0) {
      errors.push(invalidQuery(originalSelector));
    }
    return results;
  }
}
class TimelineBuilder {
  constructor(_driver, element, startTime, _elementTimelineStylesLookup) {
    this._driver = _driver;
    this.element = element;
    this.startTime = startTime;
    this._elementTimelineStylesLookup = _elementTimelineStylesLookup;
    this.duration = 0;
    this.easing = null;
    this._previousKeyframe = new Map();
    this._currentKeyframe = new Map();
    this._keyframes = new Map();
    this._styleSummary = new Map();
    this._localTimelineStyles = new Map();
    this._pendingStyles = new Map();
    this._backFill = new Map();
    this._currentEmptyStepKeyframe = null;
    if (!this._elementTimelineStylesLookup) {
      this._elementTimelineStylesLookup = new Map();
    }
    this._globalTimelineStyles = this._elementTimelineStylesLookup.get(element);
    if (!this._globalTimelineStyles) {
      this._globalTimelineStyles = this._localTimelineStyles;
      this._elementTimelineStylesLookup.set(element, this._localTimelineStyles);
    }
    this._loadKeyframe();
  }
  containsAnimation() {
    switch (this._keyframes.size) {
      case 0:
        return false;
      case 1:
        return this.hasCurrentStyleProperties();
      default:
        return true;
    }
  }
  hasCurrentStyleProperties() {
    return this._currentKeyframe.size > 0;
  }
  get currentTime() {
    return this.startTime + this.duration;
  }
  delayNextStep(delay) {
    // in the event that a style() step is placed right before a stagger()
    // and that style() step is the very first style() value in the animation
    // then we need to make a copy of the keyframe [0, copy, 1] so that the delay
    // properly applies the style() values to work with the stagger...
    const hasPreStyleStep = this._keyframes.size === 1 && this._pendingStyles.size;
    if (this.duration || hasPreStyleStep) {
      this.forwardTime(this.currentTime + delay);
      if (hasPreStyleStep) {
        this.snapshotCurrentStyles();
      }
    } else {
      this.startTime += delay;
    }
  }
  fork(element, currentTime) {
    this.applyStylesToKeyframe();
    return new TimelineBuilder(this._driver, element, currentTime || this.currentTime, this._elementTimelineStylesLookup);
  }
  _loadKeyframe() {
    if (this._currentKeyframe) {
      this._previousKeyframe = this._currentKeyframe;
    }
    this._currentKeyframe = this._keyframes.get(this.duration);
    if (!this._currentKeyframe) {
      this._currentKeyframe = new Map();
      this._keyframes.set(this.duration, this._currentKeyframe);
    }
  }
  forwardFrame() {
    this.duration += ONE_FRAME_IN_MILLISECONDS;
    this._loadKeyframe();
  }
  forwardTime(time) {
    this.applyStylesToKeyframe();
    this.duration = time;
    this._loadKeyframe();
  }
  _updateStyle(prop, value) {
    this._localTimelineStyles.set(prop, value);
    this._globalTimelineStyles.set(prop, value);
    this._styleSummary.set(prop, {
      time: this.currentTime,
      value
    });
  }
  allowOnlyTimelineStyles() {
    return this._currentEmptyStepKeyframe !== this._currentKeyframe;
  }
  applyEmptyStep(easing) {
    if (easing) {
      this._previousKeyframe.set('easing', easing);
    }
    // special case for animate(duration):
    // all missing styles are filled with a `*` value then
    // if any destination styles are filled in later on the same
    // keyframe then they will override the overridden styles
    // We use `_globalTimelineStyles` here because there may be
    // styles in previous keyframes that are not present in this timeline
    for (let [prop, value] of this._globalTimelineStyles) {
      this._backFill.set(prop, value || AUTO_STYLE);
      this._currentKeyframe.set(prop, AUTO_STYLE);
    }
    this._currentEmptyStepKeyframe = this._currentKeyframe;
  }
  setStyles(input, easing, errors, options) {
    if (easing) {
      this._previousKeyframe.set('easing', easing);
    }
    const params = options && options.params || {};
    const styles = flattenStyles(input, this._globalTimelineStyles);
    for (let [prop, value] of styles) {
      const val = interpolateParams(value, params, errors);
      this._pendingStyles.set(prop, val);
      if (!this._localTimelineStyles.has(prop)) {
        this._backFill.set(prop, this._globalTimelineStyles.get(prop) ?? AUTO_STYLE);
      }
      this._updateStyle(prop, val);
    }
  }
  applyStylesToKeyframe() {
    if (this._pendingStyles.size == 0) return;
    this._pendingStyles.forEach((val, prop) => {
      this._currentKeyframe.set(prop, val);
    });
    this._pendingStyles.clear();
    this._localTimelineStyles.forEach((val, prop) => {
      if (!this._currentKeyframe.has(prop)) {
        this._currentKeyframe.set(prop, val);
      }
    });
  }
  snapshotCurrentStyles() {
    for (let [prop, val] of this._localTimelineStyles) {
      this._pendingStyles.set(prop, val);
      this._updateStyle(prop, val);
    }
  }
  getFinalKeyframe() {
    return this._keyframes.get(this.duration);
  }
  get properties() {
    const properties = [];
    for (let prop in this._currentKeyframe) {
      properties.push(prop);
    }
    return properties;
  }
  mergeTimelineCollectedStyles(timeline) {
    timeline._styleSummary.forEach((details1, prop) => {
      const details0 = this._styleSummary.get(prop);
      if (!details0 || details1.time > details0.time) {
        this._updateStyle(prop, details1.value);
      }
    });
  }
  buildKeyframes() {
    this.applyStylesToKeyframe();
    const preStyleProps = new Set();
    const postStyleProps = new Set();
    const isEmpty = this._keyframes.size === 1 && this.duration === 0;
    let finalKeyframes = [];
    this._keyframes.forEach((keyframe, time) => {
      const finalKeyframe = copyStyles(keyframe, new Map(), this._backFill);
      finalKeyframe.forEach((value, prop) => {
        if (value === ɵPRE_STYLE) {
          preStyleProps.add(prop);
        } else if (value === AUTO_STYLE) {
          postStyleProps.add(prop);
        }
      });
      if (!isEmpty) {
        finalKeyframe.set('offset', time / this.duration);
      }
      finalKeyframes.push(finalKeyframe);
    });
    const preProps = preStyleProps.size ? iteratorToArray(preStyleProps.values()) : [];
    const postProps = postStyleProps.size ? iteratorToArray(postStyleProps.values()) : [];
    // special case for a 0-second animation (which is designed just to place styles onscreen)
    if (isEmpty) {
      const kf0 = finalKeyframes[0];
      const kf1 = new Map(kf0);
      kf0.set('offset', 0);
      kf1.set('offset', 1);
      finalKeyframes = [kf0, kf1];
    }
    return createTimelineInstruction(this.element, finalKeyframes, preProps, postProps, this.duration, this.startTime, this.easing, false);
  }
}
class SubTimelineBuilder extends TimelineBuilder {
  constructor(driver, element, keyframes, preStyleProps, postStyleProps, timings, _stretchStartingKeyframe = false) {
    super(driver, element, timings.delay);
    this.keyframes = keyframes;
    this.preStyleProps = preStyleProps;
    this.postStyleProps = postStyleProps;
    this._stretchStartingKeyframe = _stretchStartingKeyframe;
    this.timings = {
      duration: timings.duration,
      delay: timings.delay,
      easing: timings.easing
    };
  }
  containsAnimation() {
    return this.keyframes.length > 1;
  }
  buildKeyframes() {
    let keyframes = this.keyframes;
    let {
      delay,
      duration,
      easing
    } = this.timings;
    if (this._stretchStartingKeyframe && delay) {
      const newKeyframes = [];
      const totalTime = duration + delay;
      const startingGap = delay / totalTime;
      // the original starting keyframe now starts once the delay is done
      const newFirstKeyframe = copyStyles(keyframes[0]);
      newFirstKeyframe.set('offset', 0);
      newKeyframes.push(newFirstKeyframe);
      const oldFirstKeyframe = copyStyles(keyframes[0]);
      oldFirstKeyframe.set('offset', roundOffset(startingGap));
      newKeyframes.push(oldFirstKeyframe);
      /*
        When the keyframe is stretched then it means that the delay before the animation
        starts is gone. Instead the first keyframe is placed at the start of the animation
        and it is then copied to where it starts when the original delay is over. This basically
        means nothing animates during that delay, but the styles are still rendered. For this
        to work the original offset values that exist in the original keyframes must be "warped"
        so that they can take the new keyframe + delay into account.
               delay=1000, duration=1000, keyframes = 0 .5 1
               turns into
               delay=0, duration=2000, keyframes = 0 .33 .66 1
       */
      // offsets between 1 ... n -1 are all warped by the keyframe stretch
      const limit = keyframes.length - 1;
      for (let i = 1; i <= limit; i++) {
        let kf = copyStyles(keyframes[i]);
        const oldOffset = kf.get('offset');
        const timeAtKeyframe = delay + oldOffset * duration;
        kf.set('offset', roundOffset(timeAtKeyframe / totalTime));
        newKeyframes.push(kf);
      }
      // the new starting keyframe should be added at the start
      duration = totalTime;
      delay = 0;
      easing = '';
      keyframes = newKeyframes;
    }
    return createTimelineInstruction(this.element, keyframes, this.preStyleProps, this.postStyleProps, duration, delay, easing, true);
  }
}
function roundOffset(offset, decimalPoints = 3) {
  const mult = Math.pow(10, decimalPoints - 1);
  return Math.round(offset * mult) / mult;
}
function flattenStyles(input, allStyles) {
  const styles = new Map();
  let allProperties;
  input.forEach(token => {
    if (token === '*') {
      allProperties = allProperties || allStyles.keys();
      for (let prop of allProperties) {
        styles.set(prop, AUTO_STYLE);
      }
    } else {
      copyStyles(token, styles);
    }
  });
  return styles;
}

/**
 * @publicApi
 */
class AnimationStyleNormalizer {}
const DIMENSIONAL_PROP_SET = /*#__PURE__*/new Set(['width', 'height', 'minWidth', 'minHeight', 'maxWidth', 'maxHeight', 'left', 'top', 'bottom', 'right', 'fontSize', 'outlineWidth', 'outlineOffset', 'paddingTop', 'paddingLeft', 'paddingBottom', 'paddingRight', 'marginTop', 'marginLeft', 'marginBottom', 'marginRight', 'borderRadius', 'borderWidth', 'borderTopWidth', 'borderLeftWidth', 'borderRightWidth', 'borderBottomWidth', 'textIndent', 'perspective']);
class WebAnimationsStyleNormalizer extends AnimationStyleNormalizer {
  normalizePropertyName(propertyName, errors) {
    return dashCaseToCamelCase(propertyName);
  }
  normalizeStyleValue(userProvidedProperty, normalizedProperty, value, errors) {
    let unit = '';
    const strVal = value.toString().trim();
    if (DIMENSIONAL_PROP_SET.has(normalizedProperty) && value !== 0 && value !== '0') {
      if (typeof value === 'number') {
        unit = 'px';
      } else {
        const valAndSuffixMatch = value.match(/^[+-]?[\d\.]+([a-z]*)$/);
        if (valAndSuffixMatch && valAndSuffixMatch[1].length == 0) {
          errors.push(invalidCssUnitValue(userProvidedProperty, value));
        }
      }
    }
    return strVal + unit;
  }
}
function createTransitionInstruction(element, triggerName, fromState, toState, isRemovalTransition, fromStyles, toStyles, timelines, queriedElements, preStyleProps, postStyleProps, totalTime, errors) {
  return {
    type: 0 /* AnimationTransitionInstructionType.TransitionAnimation */,
    element,
    triggerName,
    isRemovalTransition,
    fromState,
    fromStyles,
    toState,
    toStyles,
    timelines,
    queriedElements,
    preStyleProps,
    postStyleProps,
    totalTime,
    errors
  };
}
const EMPTY_OBJECT = {};
class AnimationTransitionFactory {
  constructor(_triggerName, ast, _stateStyles) {
    this._triggerName = _triggerName;
    this.ast = ast;
    this._stateStyles = _stateStyles;
  }
  match(currentState, nextState, element, params) {
    return oneOrMoreTransitionsMatch(this.ast.matchers, currentState, nextState, element, params);
  }
  buildStyles(stateName, params, errors) {
    let styler = this._stateStyles.get('*');
    if (stateName !== undefined) {
      styler = this._stateStyles.get(stateName?.toString()) || styler;
    }
    return styler ? styler.buildStyles(params, errors) : new Map();
  }
  build(driver, element, currentState, nextState, enterClassName, leaveClassName, currentOptions, nextOptions, subInstructions, skipAstBuild) {
    const errors = [];
    const transitionAnimationParams = this.ast.options && this.ast.options.params || EMPTY_OBJECT;
    const currentAnimationParams = currentOptions && currentOptions.params || EMPTY_OBJECT;
    const currentStateStyles = this.buildStyles(currentState, currentAnimationParams, errors);
    const nextAnimationParams = nextOptions && nextOptions.params || EMPTY_OBJECT;
    const nextStateStyles = this.buildStyles(nextState, nextAnimationParams, errors);
    const queriedElements = new Set();
    const preStyleMap = new Map();
    const postStyleMap = new Map();
    const isRemoval = nextState === 'void';
    const animationOptions = {
      params: applyParamDefaults(nextAnimationParams, transitionAnimationParams),
      delay: this.ast.options?.delay
    };
    const timelines = skipAstBuild ? [] : buildAnimationTimelines(driver, element, this.ast.animation, enterClassName, leaveClassName, currentStateStyles, nextStateStyles, animationOptions, subInstructions, errors);
    let totalTime = 0;
    timelines.forEach(tl => {
      totalTime = Math.max(tl.duration + tl.delay, totalTime);
    });
    if (errors.length) {
      return createTransitionInstruction(element, this._triggerName, currentState, nextState, isRemoval, currentStateStyles, nextStateStyles, [], [], preStyleMap, postStyleMap, totalTime, errors);
    }
    timelines.forEach(tl => {
      const elm = tl.element;
      const preProps = getOrSetDefaultValue(preStyleMap, elm, new Set());
      tl.preStyleProps.forEach(prop => preProps.add(prop));
      const postProps = getOrSetDefaultValue(postStyleMap, elm, new Set());
      tl.postStyleProps.forEach(prop => postProps.add(prop));
      if (elm !== element) {
        queriedElements.add(elm);
      }
    });
    if (typeof ngDevMode === 'undefined' || ngDevMode) {
      checkNonAnimatableInTimelines(timelines, this._triggerName, driver);
    }
    const queriedElementsList = iteratorToArray(queriedElements.values());
    return createTransitionInstruction(element, this._triggerName, currentState, nextState, isRemoval, currentStateStyles, nextStateStyles, timelines, queriedElementsList, preStyleMap, postStyleMap, totalTime);
  }
}
/**
 * Checks inside a set of timelines if they try to animate a css property which is not considered
 * animatable, in that case it prints a warning on the console.
 * Besides that the function doesn't have any other effect.
 *
 * Note: this check is done here after the timelines are built instead of doing on a lower level so
 * that we can make sure that the warning appears only once per instruction (we can aggregate here
 * all the issues instead of finding them separately).
 *
 * @param timelines The built timelines for the current instruction.
 * @param triggerName The name of the trigger for the current instruction.
 * @param driver Animation driver used to perform the check.
 *
 */
function checkNonAnimatableInTimelines(timelines, triggerName, driver) {
  if (!driver.validateAnimatableStyleProperty) {
    return;
  }
  const allowedNonAnimatableProps = new Set([
  // 'easing' is a utility/synthetic prop we use to represent
  // easing functions, it represents a property of the animation
  // which is not animatable but different values can be used
  // in different steps
  'easing']);
  const invalidNonAnimatableProps = new Set();
  timelines.forEach(({
    keyframes
  }) => {
    const nonAnimatablePropsInitialValues = new Map();
    keyframes.forEach(keyframe => {
      const entriesToCheck = Array.from(keyframe.entries()).filter(([prop]) => !allowedNonAnimatableProps.has(prop));
      for (const [prop, value] of entriesToCheck) {
        if (!driver.validateAnimatableStyleProperty(prop)) {
          if (nonAnimatablePropsInitialValues.has(prop) && !invalidNonAnimatableProps.has(prop)) {
            const propInitialValue = nonAnimatablePropsInitialValues.get(prop);
            if (propInitialValue !== value) {
              invalidNonAnimatableProps.add(prop);
            }
          } else {
            nonAnimatablePropsInitialValues.set(prop, value);
          }
        }
      }
    });
  });
  if (invalidNonAnimatableProps.size > 0) {
    console.warn(`Warning: The animation trigger "${triggerName}" is attempting to animate the following` + ' not animatable properties: ' + Array.from(invalidNonAnimatableProps).join(', ') + '\n' + '(to check the list of all animatable properties visit https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_animated_properties)');
  }
}
function oneOrMoreTransitionsMatch(matchFns, currentState, nextState, element, params) {
  return matchFns.some(fn => fn(currentState, nextState, element, params));
}
function applyParamDefaults(userParams, defaults) {
  const result = copyObj(defaults);
  for (const key in userParams) {
    if (userParams.hasOwnProperty(key) && userParams[key] != null) {
      result[key] = userParams[key];
    }
  }
  return result;
}
class AnimationStateStyles {
  constructor(styles, defaultParams, normalizer) {
    this.styles = styles;
    this.defaultParams = defaultParams;
    this.normalizer = normalizer;
  }
  buildStyles(params, errors) {
    const finalStyles = new Map();
    const combinedParams = copyObj(this.defaultParams);
    Object.keys(params).forEach(key => {
      const value = params[key];
      if (value !== null) {
        combinedParams[key] = value;
      }
    });
    this.styles.styles.forEach(value => {
      if (typeof value !== 'string') {
        value.forEach((val, prop) => {
          if (val) {
            val = interpolateParams(val, combinedParams, errors);
          }
          const normalizedProp = this.normalizer.normalizePropertyName(prop, errors);
          val = this.normalizer.normalizeStyleValue(prop, normalizedProp, val, errors);
          finalStyles.set(prop, val);
        });
      }
    });
    return finalStyles;
  }
}
function buildTrigger(name, ast, normalizer) {
  return new AnimationTrigger(name, ast, normalizer);
}
class AnimationTrigger {
  constructor(name, ast, _normalizer) {
    this.name = name;
    this.ast = ast;
    this._normalizer = _normalizer;
    this.transitionFactories = [];
    this.states = new Map();
    ast.states.forEach(ast => {
      const defaultParams = ast.options && ast.options.params || {};
      this.states.set(ast.name, new AnimationStateStyles(ast.style, defaultParams, _normalizer));
    });
    balanceProperties(this.states, 'true', '1');
    balanceProperties(this.states, 'false', '0');
    ast.transitions.forEach(ast => {
      this.transitionFactories.push(new AnimationTransitionFactory(name, ast, this.states));
    });
    this.fallbackTransition = createFallbackTransition(name, this.states, this._normalizer);
  }
  get containsQueries() {
    return this.ast.queryCount > 0;
  }
  matchTransition(currentState, nextState, element, params) {
    const entry = this.transitionFactories.find(f => f.match(currentState, nextState, element, params));
    return entry || null;
  }
  matchStyles(currentState, params, errors) {
    return this.fallbackTransition.buildStyles(currentState, params, errors);
  }
}
function createFallbackTransition(triggerName, states, normalizer) {
  const matchers = [(fromState, toState) => true];
  const animation = {
    type: 2 /* AnimationMetadataType.Sequence */,
    steps: [],
    options: null
  };
  const transition = {
    type: 1 /* AnimationMetadataType.Transition */,
    animation,
    matchers,
    options: null,
    queryCount: 0,
    depCount: 0
  };
  return new AnimationTransitionFactory(triggerName, transition, states);
}
function balanceProperties(stateMap, key1, key2) {
  if (stateMap.has(key1)) {
    if (!stateMap.has(key2)) {
      stateMap.set(key2, stateMap.get(key1));
    }
  } else if (stateMap.has(key2)) {
    stateMap.set(key1, stateMap.get(key2));
  }
}
const EMPTY_INSTRUCTION_MAP = /*#__PURE__*/new ElementInstructionMap();
class TimelineAnimationEngine {
  constructor(bodyNode, _driver, _normalizer) {
    this.bodyNode = bodyNode;
    this._driver = _driver;
    this._normalizer = _normalizer;
    this._animations = new Map();
    this._playersById = new Map();
    this.players = [];
  }
  register(id, metadata) {
    const errors = [];
    const warnings = [];
    const ast = buildAnimationAst(this._driver, metadata, errors, warnings);
    if (errors.length) {
      throw registerFailed(errors);
    } else {
      if (warnings.length) {
        warnRegister(warnings);
      }
      this._animations.set(id, ast);
    }
  }
  _buildPlayer(i, preStyles, postStyles) {
    const element = i.element;
    const keyframes = normalizeKeyframes$1(this._normalizer, i.keyframes, preStyles, postStyles);
    return this._driver.animate(element, keyframes, i.duration, i.delay, i.easing, [], true);
  }
  create(id, element, options = {}) {
    const errors = [];
    const ast = this._animations.get(id);
    let instructions;
    const autoStylesMap = new Map();
    if (ast) {
      instructions = buildAnimationTimelines(this._driver, element, ast, ENTER_CLASSNAME, LEAVE_CLASSNAME, new Map(), new Map(), options, EMPTY_INSTRUCTION_MAP, errors);
      instructions.forEach(inst => {
        const styles = getOrSetDefaultValue(autoStylesMap, inst.element, new Map());
        inst.postStyleProps.forEach(prop => styles.set(prop, null));
      });
    } else {
      errors.push(missingOrDestroyedAnimation());
      instructions = [];
    }
    if (errors.length) {
      throw createAnimationFailed(errors);
    }
    autoStylesMap.forEach((styles, element) => {
      styles.forEach((_, prop) => {
        styles.set(prop, this._driver.computeStyle(element, prop, AUTO_STYLE));
      });
    });
    const players = instructions.map(i => {
      const styles = autoStylesMap.get(i.element);
      return this._buildPlayer(i, new Map(), styles);
    });
    const player = optimizeGroupPlayer(players);
    this._playersById.set(id, player);
    player.onDestroy(() => this.destroy(id));
    this.players.push(player);
    return player;
  }
  destroy(id) {
    const player = this._getPlayer(id);
    player.destroy();
    this._playersById.delete(id);
    const index = this.players.indexOf(player);
    if (index >= 0) {
      this.players.splice(index, 1);
    }
  }
  _getPlayer(id) {
    const player = this._playersById.get(id);
    if (!player) {
      throw missingPlayer(id);
    }
    return player;
  }
  listen(id, element, eventName, callback) {
    // triggerName, fromState, toState are all ignored for timeline animations
    const baseEvent = makeAnimationEvent(element, '', '', '');
    listenOnPlayer(this._getPlayer(id), eventName, baseEvent, callback);
    return () => {};
  }
  command(id, element, command, args) {
    if (command == 'register') {
      this.register(id, args[0]);
      return;
    }
    if (command == 'create') {
      const options = args[0] || {};
      this.create(id, element, options);
      return;
    }
    const player = this._getPlayer(id);
    switch (command) {
      case 'play':
        player.play();
        break;
      case 'pause':
        player.pause();
        break;
      case 'reset':
        player.reset();
        break;
      case 'restart':
        player.restart();
        break;
      case 'finish':
        player.finish();
        break;
      case 'init':
        player.init();
        break;
      case 'setPosition':
        player.setPosition(parseFloat(args[0]));
        break;
      case 'destroy':
        this.destroy(id);
        break;
    }
  }
}
const QUEUED_CLASSNAME = 'ng-animate-queued';
const QUEUED_SELECTOR = '.ng-animate-queued';
const DISABLED_CLASSNAME = 'ng-animate-disabled';
const DISABLED_SELECTOR = '.ng-animate-disabled';
const STAR_CLASSNAME = 'ng-star-inserted';
const STAR_SELECTOR = '.ng-star-inserted';
const EMPTY_PLAYER_ARRAY = [];
const NULL_REMOVAL_STATE = {
  namespaceId: '',
  setForRemoval: false,
  setForMove: false,
  hasAnimation: false,
  removedBeforeQueried: false
};
const NULL_REMOVED_QUERIED_STATE = {
  namespaceId: '',
  setForMove: false,
  setForRemoval: false,
  hasAnimation: false,
  removedBeforeQueried: true
};
const REMOVAL_FLAG = '__ng_removed';
class StateValue {
  get params() {
    return this.options.params;
  }
  constructor(input, namespaceId = '') {
    this.namespaceId = namespaceId;
    const isObj = input && input.hasOwnProperty('value');
    const value = isObj ? input['value'] : input;
    this.value = normalizeTriggerValue(value);
    if (isObj) {
      const options = copyObj(input);
      delete options['value'];
      this.options = options;
    } else {
      this.options = {};
    }
    if (!this.options.params) {
      this.options.params = {};
    }
  }
  absorbOptions(options) {
    const newParams = options.params;
    if (newParams) {
      const oldParams = this.options.params;
      Object.keys(newParams).forEach(prop => {
        if (oldParams[prop] == null) {
          oldParams[prop] = newParams[prop];
        }
      });
    }
  }
}
const VOID_VALUE = 'void';
const DEFAULT_STATE_VALUE = /*#__PURE__*/new StateValue(VOID_VALUE);
class AnimationTransitionNamespace {
  constructor(id, hostElement, _engine) {
    this.id = id;
    this.hostElement = hostElement;
    this._engine = _engine;
    this.players = [];
    this._triggers = new Map();
    this._queue = [];
    this._elementListeners = new Map();
    this._hostClassName = 'ng-tns-' + id;
    addClass(hostElement, this._hostClassName);
  }
  listen(element, name, phase, callback) {
    if (!this._triggers.has(name)) {
      throw missingTrigger(phase, name);
    }
    if (phase == null || phase.length == 0) {
      throw missingEvent(name);
    }
    if (!isTriggerEventValid(phase)) {
      throw unsupportedTriggerEvent(phase, name);
    }
    const listeners = getOrSetDefaultValue(this._elementListeners, element, []);
    const data = {
      name,
      phase,
      callback
    };
    listeners.push(data);
    const triggersWithStates = getOrSetDefaultValue(this._engine.statesByElement, element, new Map());
    if (!triggersWithStates.has(name)) {
      addClass(element, NG_TRIGGER_CLASSNAME);
      addClass(element, NG_TRIGGER_CLASSNAME + '-' + name);
      triggersWithStates.set(name, DEFAULT_STATE_VALUE);
    }
    return () => {
      // the event listener is removed AFTER the flush has occurred such
      // that leave animations callbacks can fire (otherwise if the node
      // is removed in between then the listeners would be deregistered)
      this._engine.afterFlush(() => {
        const index = listeners.indexOf(data);
        if (index >= 0) {
          listeners.splice(index, 1);
        }
        if (!this._triggers.has(name)) {
          triggersWithStates.delete(name);
        }
      });
    };
  }
  register(name, ast) {
    if (this._triggers.has(name)) {
      // throw
      return false;
    } else {
      this._triggers.set(name, ast);
      return true;
    }
  }
  _getTrigger(name) {
    const trigger = this._triggers.get(name);
    if (!trigger) {
      throw unregisteredTrigger(name);
    }
    return trigger;
  }
  trigger(element, triggerName, value, defaultToFallback = true) {
    const trigger = this._getTrigger(triggerName);
    const player = new TransitionAnimationPlayer(this.id, triggerName, element);
    let triggersWithStates = this._engine.statesByElement.get(element);
    if (!triggersWithStates) {
      addClass(element, NG_TRIGGER_CLASSNAME);
      addClass(element, NG_TRIGGER_CLASSNAME + '-' + triggerName);
      this._engine.statesByElement.set(element, triggersWithStates = new Map());
    }
    let fromState = triggersWithStates.get(triggerName);
    const toState = new StateValue(value, this.id);
    const isObj = value && value.hasOwnProperty('value');
    if (!isObj && fromState) {
      toState.absorbOptions(fromState.options);
    }
    triggersWithStates.set(triggerName, toState);
    if (!fromState) {
      fromState = DEFAULT_STATE_VALUE;
    }
    const isRemoval = toState.value === VOID_VALUE;
    // normally this isn't reached by here, however, if an object expression
    // is passed in then it may be a new object each time. Comparing the value
    // is important since that will stay the same despite there being a new object.
    // The removal arc here is special cased because the same element is triggered
    // twice in the event that it contains animations on the outer/inner portions
    // of the host container
    if (!isRemoval && fromState.value === toState.value) {
      // this means that despite the value not changing, some inner params
      // have changed which means that the animation final styles need to be applied
      if (!objEquals(fromState.params, toState.params)) {
        const errors = [];
        const fromStyles = trigger.matchStyles(fromState.value, fromState.params, errors);
        const toStyles = trigger.matchStyles(toState.value, toState.params, errors);
        if (errors.length) {
          this._engine.reportError(errors);
        } else {
          this._engine.afterFlush(() => {
            eraseStyles(element, fromStyles);
            setStyles(element, toStyles);
          });
        }
      }
      return;
    }
    const playersOnElement = getOrSetDefaultValue(this._engine.playersByElement, element, []);
    playersOnElement.forEach(player => {
      // only remove the player if it is queued on the EXACT same trigger/namespace
      // we only also deal with queued players here because if the animation has
      // started then we want to keep the player alive until the flush happens
      // (which is where the previousPlayers are passed into the new player)
      if (player.namespaceId == this.id && player.triggerName == triggerName && player.queued) {
        player.destroy();
      }
    });
    let transition = trigger.matchTransition(fromState.value, toState.value, element, toState.params);
    let isFallbackTransition = false;
    if (!transition) {
      if (!defaultToFallback) return;
      transition = trigger.fallbackTransition;
      isFallbackTransition = true;
    }
    this._engine.totalQueuedPlayers++;
    this._queue.push({
      element,
      triggerName,
      transition,
      fromState,
      toState,
      player,
      isFallbackTransition
    });
    if (!isFallbackTransition) {
      addClass(element, QUEUED_CLASSNAME);
      player.onStart(() => {
        removeClass(element, QUEUED_CLASSNAME);
      });
    }
    player.onDone(() => {
      let index = this.players.indexOf(player);
      if (index >= 0) {
        this.players.splice(index, 1);
      }
      const players = this._engine.playersByElement.get(element);
      if (players) {
        let index = players.indexOf(player);
        if (index >= 0) {
          players.splice(index, 1);
        }
      }
    });
    this.players.push(player);
    playersOnElement.push(player);
    return player;
  }
  deregister(name) {
    this._triggers.delete(name);
    this._engine.statesByElement.forEach(stateMap => stateMap.delete(name));
    this._elementListeners.forEach((listeners, element) => {
      this._elementListeners.set(element, listeners.filter(entry => {
        return entry.name != name;
      }));
    });
  }
  clearElementCache(element) {
    this._engine.statesByElement.delete(element);
    this._elementListeners.delete(element);
    const elementPlayers = this._engine.playersByElement.get(element);
    if (elementPlayers) {
      elementPlayers.forEach(player => player.destroy());
      this._engine.playersByElement.delete(element);
    }
  }
  _signalRemovalForInnerTriggers(rootElement, context) {
    const elements = this._engine.driver.query(rootElement, NG_TRIGGER_SELECTOR, true);
    // emulate a leave animation for all inner nodes within this node.
    // If there are no animations found for any of the nodes then clear the cache
    // for the element.
    elements.forEach(elm => {
      // this means that an inner remove() operation has already kicked off
      // the animation on this element...
      if (elm[REMOVAL_FLAG]) return;
      const namespaces = this._engine.fetchNamespacesByElement(elm);
      if (namespaces.size) {
        namespaces.forEach(ns => ns.triggerLeaveAnimation(elm, context, false, true));
      } else {
        this.clearElementCache(elm);
      }
    });
    // If the child elements were removed along with the parent, their animations might not
    // have completed. Clear all the elements from the cache so we don't end up with a memory leak.
    this._engine.afterFlushAnimationsDone(() => elements.forEach(elm => this.clearElementCache(elm)));
  }
  triggerLeaveAnimation(element, context, destroyAfterComplete, defaultToFallback) {
    const triggerStates = this._engine.statesByElement.get(element);
    const previousTriggersValues = new Map();
    if (triggerStates) {
      const players = [];
      triggerStates.forEach((state, triggerName) => {
        previousTriggersValues.set(triggerName, state.value);
        // this check is here in the event that an element is removed
        // twice (both on the host level and the component level)
        if (this._triggers.has(triggerName)) {
          const player = this.trigger(element, triggerName, VOID_VALUE, defaultToFallback);
          if (player) {
            players.push(player);
          }
        }
      });
      if (players.length) {
        this._engine.markElementAsRemoved(this.id, element, true, context, previousTriggersValues);
        if (destroyAfterComplete) {
          optimizeGroupPlayer(players).onDone(() => this._engine.processLeaveNode(element));
        }
        return true;
      }
    }
    return false;
  }
  prepareLeaveAnimationListeners(element) {
    const listeners = this._elementListeners.get(element);
    const elementStates = this._engine.statesByElement.get(element);
    // if this statement fails then it means that the element was picked up
    // by an earlier flush (or there are no listeners at all to track the leave).
    if (listeners && elementStates) {
      const visitedTriggers = new Set();
      listeners.forEach(listener => {
        const triggerName = listener.name;
        if (visitedTriggers.has(triggerName)) return;
        visitedTriggers.add(triggerName);
        const trigger = this._triggers.get(triggerName);
        const transition = trigger.fallbackTransition;
        const fromState = elementStates.get(triggerName) || DEFAULT_STATE_VALUE;
        const toState = new StateValue(VOID_VALUE);
        const player = new TransitionAnimationPlayer(this.id, triggerName, element);
        this._engine.totalQueuedPlayers++;
        this._queue.push({
          element,
          triggerName,
          transition,
          fromState,
          toState,
          player,
          isFallbackTransition: true
        });
      });
    }
  }
  removeNode(element, context) {
    const engine = this._engine;
    if (element.childElementCount) {
      this._signalRemovalForInnerTriggers(element, context);
    }
    // this means that a * => VOID animation was detected and kicked off
    if (this.triggerLeaveAnimation(element, context, true)) return;
    // find the player that is animating and make sure that the
    // removal is delayed until that player has completed
    let containsPotentialParentTransition = false;
    if (engine.totalAnimations) {
      const currentPlayers = engine.players.length ? engine.playersByQueriedElement.get(element) : [];
      // when this `if statement` does not continue forward it means that
      // a previous animation query has selected the current element and
      // is animating it. In this situation want to continue forwards and
      // allow the element to be queued up for animation later.
      if (currentPlayers && currentPlayers.length) {
        containsPotentialParentTransition = true;
      } else {
        let parent = element;
        while (parent = parent.parentNode) {
          const triggers = engine.statesByElement.get(parent);
          if (triggers) {
            containsPotentialParentTransition = true;
            break;
          }
        }
      }
    }
    // at this stage we know that the element will either get removed
    // during flush or will be picked up by a parent query. Either way
    // we need to fire the listeners for this element when it DOES get
    // removed (once the query parent animation is done or after flush)
    this.prepareLeaveAnimationListeners(element);
    // whether or not a parent has an animation we need to delay the deferral of the leave
    // operation until we have more information (which we do after flush() has been called)
    if (containsPotentialParentTransition) {
      engine.markElementAsRemoved(this.id, element, false, context);
    } else {
      const removalFlag = element[REMOVAL_FLAG];
      if (!removalFlag || removalFlag === NULL_REMOVAL_STATE) {
        // we do this after the flush has occurred such
        // that the callbacks can be fired
        engine.afterFlush(() => this.clearElementCache(element));
        engine.destroyInnerAnimations(element);
        engine._onRemovalComplete(element, context);
      }
    }
  }
  insertNode(element, parent) {
    addClass(element, this._hostClassName);
  }
  drainQueuedTransitions(microtaskId) {
    const instructions = [];
    this._queue.forEach(entry => {
      const player = entry.player;
      if (player.destroyed) return;
      const element = entry.element;
      const listeners = this._elementListeners.get(element);
      if (listeners) {
        listeners.forEach(listener => {
          if (listener.name == entry.triggerName) {
            const baseEvent = makeAnimationEvent(element, entry.triggerName, entry.fromState.value, entry.toState.value);
            baseEvent['_data'] = microtaskId;
            listenOnPlayer(entry.player, listener.phase, baseEvent, listener.callback);
          }
        });
      }
      if (player.markedForDestroy) {
        this._engine.afterFlush(() => {
          // now we can destroy the element properly since the event listeners have
          // been bound to the player
          player.destroy();
        });
      } else {
        instructions.push(entry);
      }
    });
    this._queue = [];
    return instructions.sort((a, b) => {
      // if depCount == 0 them move to front
      // otherwise if a contains b then move back
      const d0 = a.transition.ast.depCount;
      const d1 = b.transition.ast.depCount;
      if (d0 == 0 || d1 == 0) {
        return d0 - d1;
      }
      return this._engine.driver.containsElement(a.element, b.element) ? 1 : -1;
    });
  }
  destroy(context) {
    this.players.forEach(p => p.destroy());
    this._signalRemovalForInnerTriggers(this.hostElement, context);
  }
}
class TransitionAnimationEngine {
  /** @internal */
  _onRemovalComplete(element, context) {
    this.onRemovalComplete(element, context);
  }
  constructor(bodyNode, driver, _normalizer) {
    this.bodyNode = bodyNode;
    this.driver = driver;
    this._normalizer = _normalizer;
    this.players = [];
    this.newHostElements = new Map();
    this.playersByElement = new Map();
    this.playersByQueriedElement = new Map();
    this.statesByElement = new Map();
    this.disabledNodes = new Set();
    this.totalAnimations = 0;
    this.totalQueuedPlayers = 0;
    this._namespaceLookup = {};
    this._namespaceList = [];
    this._flushFns = [];
    this._whenQuietFns = [];
    this.namespacesByHostElement = new Map();
    this.collectedEnterElements = [];
    this.collectedLeaveElements = [];
    // this method is designed to be overridden by the code that uses this engine
    this.onRemovalComplete = (element, context) => {};
  }
  get queuedPlayers() {
    const players = [];
    this._namespaceList.forEach(ns => {
      ns.players.forEach(player => {
        if (player.queued) {
          players.push(player);
        }
      });
    });
    return players;
  }
  createNamespace(namespaceId, hostElement) {
    const ns = new AnimationTransitionNamespace(namespaceId, hostElement, this);
    if (this.bodyNode && this.driver.containsElement(this.bodyNode, hostElement)) {
      this._balanceNamespaceList(ns, hostElement);
    } else {
      // defer this later until flush during when the host element has
      // been inserted so that we know exactly where to place it in
      // the namespace list
      this.newHostElements.set(hostElement, ns);
      // given that this host element is a part of the animation code, it
      // may or may not be inserted by a parent node that is of an
      // animation renderer type. If this happens then we can still have
      // access to this item when we query for :enter nodes. If the parent
      // is a renderer then the set data-structure will normalize the entry
      this.collectEnterElement(hostElement);
    }
    return this._namespaceLookup[namespaceId] = ns;
  }
  _balanceNamespaceList(ns, hostElement) {
    const namespaceList = this._namespaceList;
    const namespacesByHostElement = this.namespacesByHostElement;
    const limit = namespaceList.length - 1;
    if (limit >= 0) {
      let found = false;
      // Find the closest ancestor with an existing namespace so we can then insert `ns` after it,
      // establishing a top-down ordering of namespaces in `this._namespaceList`.
      let ancestor = this.driver.getParentElement(hostElement);
      while (ancestor) {
        const ancestorNs = namespacesByHostElement.get(ancestor);
        if (ancestorNs) {
          // An animation namespace has been registered for this ancestor, so we insert `ns`
          // right after it to establish top-down ordering of animation namespaces.
          const index = namespaceList.indexOf(ancestorNs);
          namespaceList.splice(index + 1, 0, ns);
          found = true;
          break;
        }
        ancestor = this.driver.getParentElement(ancestor);
      }
      if (!found) {
        // No namespace exists that is an ancestor of `ns`, so `ns` is inserted at the front to
        // ensure that any existing descendants are ordered after `ns`, retaining the desired
        // top-down ordering.
        namespaceList.unshift(ns);
      }
    } else {
      namespaceList.push(ns);
    }
    namespacesByHostElement.set(hostElement, ns);
    return ns;
  }
  register(namespaceId, hostElement) {
    let ns = this._namespaceLookup[namespaceId];
    if (!ns) {
      ns = this.createNamespace(namespaceId, hostElement);
    }
    return ns;
  }
  registerTrigger(namespaceId, name, trigger) {
    let ns = this._namespaceLookup[namespaceId];
    if (ns && ns.register(name, trigger)) {
      this.totalAnimations++;
    }
  }
  destroy(namespaceId, context) {
    if (!namespaceId) return;
    this.afterFlush(() => {});
    this.afterFlushAnimationsDone(() => {
      const ns = this._fetchNamespace(namespaceId);
      this.namespacesByHostElement.delete(ns.hostElement);
      const index = this._namespaceList.indexOf(ns);
      if (index >= 0) {
        this._namespaceList.splice(index, 1);
      }
      ns.destroy(context);
      delete this._namespaceLookup[namespaceId];
    });
  }
  _fetchNamespace(id) {
    return this._namespaceLookup[id];
  }
  fetchNamespacesByElement(element) {
    // normally there should only be one namespace per element, however
    // if @triggers are placed on both the component element and then
    // its host element (within the component code) then there will be
    // two namespaces returned. We use a set here to simply deduplicate
    // the namespaces in case (for the reason described above) there are multiple triggers
    const namespaces = new Set();
    const elementStates = this.statesByElement.get(element);
    if (elementStates) {
      for (let stateValue of elementStates.values()) {
        if (stateValue.namespaceId) {
          const ns = this._fetchNamespace(stateValue.namespaceId);
          if (ns) {
            namespaces.add(ns);
          }
        }
      }
    }
    return namespaces;
  }
  trigger(namespaceId, element, name, value) {
    if (isElementNode(element)) {
      const ns = this._fetchNamespace(namespaceId);
      if (ns) {
        ns.trigger(element, name, value);
        return true;
      }
    }
    return false;
  }
  insertNode(namespaceId, element, parent, insertBefore) {
    if (!isElementNode(element)) return;
    // special case for when an element is removed and reinserted (move operation)
    // when this occurs we do not want to use the element for deletion later
    const details = element[REMOVAL_FLAG];
    if (details && details.setForRemoval) {
      details.setForRemoval = false;
      details.setForMove = true;
      const index = this.collectedLeaveElements.indexOf(element);
      if (index >= 0) {
        this.collectedLeaveElements.splice(index, 1);
      }
    }
    // in the event that the namespaceId is blank then the caller
    // code does not contain any animation code in it, but it is
    // just being called so that the node is marked as being inserted
    if (namespaceId) {
      const ns = this._fetchNamespace(namespaceId);
      // This if-statement is a workaround for router issue #21947.
      // The router sometimes hits a race condition where while a route
      // is being instantiated a new navigation arrives, triggering leave
      // animation of DOM that has not been fully initialized, until this
      // is resolved, we need to handle the scenario when DOM is not in a
      // consistent state during the animation.
      if (ns) {
        ns.insertNode(element, parent);
      }
    }
    // only *directives and host elements are inserted before
    if (insertBefore) {
      this.collectEnterElement(element);
    }
  }
  collectEnterElement(element) {
    this.collectedEnterElements.push(element);
  }
  markElementAsDisabled(element, value) {
    if (value) {
      if (!this.disabledNodes.has(element)) {
        this.disabledNodes.add(element);
        addClass(element, DISABLED_CLASSNAME);
      }
    } else if (this.disabledNodes.has(element)) {
      this.disabledNodes.delete(element);
      removeClass(element, DISABLED_CLASSNAME);
    }
  }
  removeNode(namespaceId, element, context) {
    if (isElementNode(element)) {
      const ns = namespaceId ? this._fetchNamespace(namespaceId) : null;
      if (ns) {
        ns.removeNode(element, context);
      } else {
        this.markElementAsRemoved(namespaceId, element, false, context);
      }
      const hostNS = this.namespacesByHostElement.get(element);
      if (hostNS && hostNS.id !== namespaceId) {
        hostNS.removeNode(element, context);
      }
    } else {
      this._onRemovalComplete(element, context);
    }
  }
  markElementAsRemoved(namespaceId, element, hasAnimation, context, previousTriggersValues) {
    this.collectedLeaveElements.push(element);
    element[REMOVAL_FLAG] = {
      namespaceId,
      setForRemoval: context,
      hasAnimation,
      removedBeforeQueried: false,
      previousTriggersValues
    };
  }
  listen(namespaceId, element, name, phase, callback) {
    if (isElementNode(element)) {
      return this._fetchNamespace(namespaceId).listen(element, name, phase, callback);
    }
    return () => {};
  }
  _buildInstruction(entry, subTimelines, enterClassName, leaveClassName, skipBuildAst) {
    return entry.transition.build(this.driver, entry.element, entry.fromState.value, entry.toState.value, enterClassName, leaveClassName, entry.fromState.options, entry.toState.options, subTimelines, skipBuildAst);
  }
  destroyInnerAnimations(containerElement) {
    let elements = this.driver.query(containerElement, NG_TRIGGER_SELECTOR, true);
    elements.forEach(element => this.destroyActiveAnimationsForElement(element));
    if (this.playersByQueriedElement.size == 0) return;
    elements = this.driver.query(containerElement, NG_ANIMATING_SELECTOR, true);
    elements.forEach(element => this.finishActiveQueriedAnimationOnElement(element));
  }
  destroyActiveAnimationsForElement(element) {
    const players = this.playersByElement.get(element);
    if (players) {
      players.forEach(player => {
        // special case for when an element is set for destruction, but hasn't started.
        // in this situation we want to delay the destruction until the flush occurs
        // so that any event listeners attached to the player are triggered.
        if (player.queued) {
          player.markedForDestroy = true;
        } else {
          player.destroy();
        }
      });
    }
  }
  finishActiveQueriedAnimationOnElement(element) {
    const players = this.playersByQueriedElement.get(element);
    if (players) {
      players.forEach(player => player.finish());
    }
  }
  whenRenderingDone() {
    return new Promise(resolve => {
      if (this.players.length) {
        return optimizeGroupPlayer(this.players).onDone(() => resolve());
      } else {
        resolve();
      }
    });
  }
  processLeaveNode(element) {
    const details = element[REMOVAL_FLAG];
    if (details && details.setForRemoval) {
      // this will prevent it from removing it twice
      element[REMOVAL_FLAG] = NULL_REMOVAL_STATE;
      if (details.namespaceId) {
        this.destroyInnerAnimations(element);
        const ns = this._fetchNamespace(details.namespaceId);
        if (ns) {
          ns.clearElementCache(element);
        }
      }
      this._onRemovalComplete(element, details.setForRemoval);
    }
    if (element.classList?.contains(DISABLED_CLASSNAME)) {
      this.markElementAsDisabled(element, false);
    }
    this.driver.query(element, DISABLED_SELECTOR, true).forEach(node => {
      this.markElementAsDisabled(node, false);
    });
  }
  flush(microtaskId = -1) {
    let players = [];
    if (this.newHostElements.size) {
      this.newHostElements.forEach((ns, element) => this._balanceNamespaceList(ns, element));
      this.newHostElements.clear();
    }
    if (this.totalAnimations && this.collectedEnterElements.length) {
      for (let i = 0; i < this.collectedEnterElements.length; i++) {
        const elm = this.collectedEnterElements[i];
        addClass(elm, STAR_CLASSNAME);
      }
    }
    if (this._namespaceList.length && (this.totalQueuedPlayers || this.collectedLeaveElements.length)) {
      const cleanupFns = [];
      try {
        players = this._flushAnimations(cleanupFns, microtaskId);
      } finally {
        for (let i = 0; i < cleanupFns.length; i++) {
          cleanupFns[i]();
        }
      }
    } else {
      for (let i = 0; i < this.collectedLeaveElements.length; i++) {
        const element = this.collectedLeaveElements[i];
        this.processLeaveNode(element);
      }
    }
    this.totalQueuedPlayers = 0;
    this.collectedEnterElements.length = 0;
    this.collectedLeaveElements.length = 0;
    this._flushFns.forEach(fn => fn());
    this._flushFns = [];
    if (this._whenQuietFns.length) {
      // we move these over to a variable so that
      // if any new callbacks are registered in another
      // flush they do not populate the existing set
      const quietFns = this._whenQuietFns;
      this._whenQuietFns = [];
      if (players.length) {
        optimizeGroupPlayer(players).onDone(() => {
          quietFns.forEach(fn => fn());
        });
      } else {
        quietFns.forEach(fn => fn());
      }
    }
  }
  reportError(errors) {
    throw triggerTransitionsFailed(errors);
  }
  _flushAnimations(cleanupFns, microtaskId) {
    const subTimelines = new ElementInstructionMap();
    const skippedPlayers = [];
    const skippedPlayersMap = new Map();
    const queuedInstructions = [];
    const queriedElements = new Map();
    const allPreStyleElements = new Map();
    const allPostStyleElements = new Map();
    const disabledElementsSet = new Set();
    this.disabledNodes.forEach(node => {
      disabledElementsSet.add(node);
      const nodesThatAreDisabled = this.driver.query(node, QUEUED_SELECTOR, true);
      for (let i = 0; i < nodesThatAreDisabled.length; i++) {
        disabledElementsSet.add(nodesThatAreDisabled[i]);
      }
    });
    const bodyNode = this.bodyNode;
    const allTriggerElements = Array.from(this.statesByElement.keys());
    const enterNodeMap = buildRootMap(allTriggerElements, this.collectedEnterElements);
    // this must occur before the instructions are built below such that
    // the :enter queries match the elements (since the timeline queries
    // are fired during instruction building).
    const enterNodeMapIds = new Map();
    let i = 0;
    enterNodeMap.forEach((nodes, root) => {
      const className = ENTER_CLASSNAME + i++;
      enterNodeMapIds.set(root, className);
      nodes.forEach(node => addClass(node, className));
    });
    const allLeaveNodes = [];
    const mergedLeaveNodes = new Set();
    const leaveNodesWithoutAnimations = new Set();
    for (let i = 0; i < this.collectedLeaveElements.length; i++) {
      const element = this.collectedLeaveElements[i];
      const details = element[REMOVAL_FLAG];
      if (details && details.setForRemoval) {
        allLeaveNodes.push(element);
        mergedLeaveNodes.add(element);
        if (details.hasAnimation) {
          this.driver.query(element, STAR_SELECTOR, true).forEach(elm => mergedLeaveNodes.add(elm));
        } else {
          leaveNodesWithoutAnimations.add(element);
        }
      }
    }
    const leaveNodeMapIds = new Map();
    const leaveNodeMap = buildRootMap(allTriggerElements, Array.from(mergedLeaveNodes));
    leaveNodeMap.forEach((nodes, root) => {
      const className = LEAVE_CLASSNAME + i++;
      leaveNodeMapIds.set(root, className);
      nodes.forEach(node => addClass(node, className));
    });
    cleanupFns.push(() => {
      enterNodeMap.forEach((nodes, root) => {
        const className = enterNodeMapIds.get(root);
        nodes.forEach(node => removeClass(node, className));
      });
      leaveNodeMap.forEach((nodes, root) => {
        const className = leaveNodeMapIds.get(root);
        nodes.forEach(node => removeClass(node, className));
      });
      allLeaveNodes.forEach(element => {
        this.processLeaveNode(element);
      });
    });
    const allPlayers = [];
    const erroneousTransitions = [];
    for (let i = this._namespaceList.length - 1; i >= 0; i--) {
      const ns = this._namespaceList[i];
      ns.drainQueuedTransitions(microtaskId).forEach(entry => {
        const player = entry.player;
        const element = entry.element;
        allPlayers.push(player);
        if (this.collectedEnterElements.length) {
          const details = element[REMOVAL_FLAG];
          // animations for move operations (elements being removed and reinserted,
          // e.g. when the order of an *ngFor list changes) are currently not supported
          if (details && details.setForMove) {
            if (details.previousTriggersValues && details.previousTriggersValues.has(entry.triggerName)) {
              const previousValue = details.previousTriggersValues.get(entry.triggerName);
              // we need to restore the previous trigger value since the element has
              // only been moved and hasn't actually left the DOM
              const triggersWithStates = this.statesByElement.get(entry.element);
              if (triggersWithStates && triggersWithStates.has(entry.triggerName)) {
                const state = triggersWithStates.get(entry.triggerName);
                state.value = previousValue;
                triggersWithStates.set(entry.triggerName, state);
              }
            }
            player.destroy();
            return;
          }
        }
        const nodeIsOrphaned = !bodyNode || !this.driver.containsElement(bodyNode, element);
        const leaveClassName = leaveNodeMapIds.get(element);
        const enterClassName = enterNodeMapIds.get(element);
        const instruction = this._buildInstruction(entry, subTimelines, enterClassName, leaveClassName, nodeIsOrphaned);
        if (instruction.errors && instruction.errors.length) {
          erroneousTransitions.push(instruction);
          return;
        }
        // even though the element may not be in the DOM, it may still
        // be added at a later point (due to the mechanics of content
        // projection and/or dynamic component insertion) therefore it's
        // important to still style the element.
        if (nodeIsOrphaned) {
          player.onStart(() => eraseStyles(element, instruction.fromStyles));
          player.onDestroy(() => setStyles(element, instruction.toStyles));
          skippedPlayers.push(player);
          return;
        }
        // if an unmatched transition is queued and ready to go
        // then it SHOULD NOT render an animation and cancel the
        // previously running animations.
        if (entry.isFallbackTransition) {
          player.onStart(() => eraseStyles(element, instruction.fromStyles));
          player.onDestroy(() => setStyles(element, instruction.toStyles));
          skippedPlayers.push(player);
          return;
        }
        // this means that if a parent animation uses this animation as a sub-trigger
        // then it will instruct the timeline builder not to add a player delay, but
        // instead stretch the first keyframe gap until the animation starts. This is
        // important in order to prevent extra initialization styles from being
        // required by the user for the animation.
        const timelines = [];
        instruction.timelines.forEach(tl => {
          tl.stretchStartingKeyframe = true;
          if (!this.disabledNodes.has(tl.element)) {
            timelines.push(tl);
          }
        });
        instruction.timelines = timelines;
        subTimelines.append(element, instruction.timelines);
        const tuple = {
          instruction,
          player,
          element
        };
        queuedInstructions.push(tuple);
        instruction.queriedElements.forEach(element => getOrSetDefaultValue(queriedElements, element, []).push(player));
        instruction.preStyleProps.forEach((stringMap, element) => {
          if (stringMap.size) {
            let setVal = allPreStyleElements.get(element);
            if (!setVal) {
              allPreStyleElements.set(element, setVal = new Set());
            }
            stringMap.forEach((_, prop) => setVal.add(prop));
          }
        });
        instruction.postStyleProps.forEach((stringMap, element) => {
          let setVal = allPostStyleElements.get(element);
          if (!setVal) {
            allPostStyleElements.set(element, setVal = new Set());
          }
          stringMap.forEach((_, prop) => setVal.add(prop));
        });
      });
    }
    if (erroneousTransitions.length) {
      const errors = [];
      erroneousTransitions.forEach(instruction => {
        errors.push(transitionFailed(instruction.triggerName, instruction.errors));
      });
      allPlayers.forEach(player => player.destroy());
      this.reportError(errors);
    }
    const allPreviousPlayersMap = new Map();
    // this map tells us which element in the DOM tree is contained by
    // which animation. Further down this map will get populated once
    // the players are built and in doing so we can use it to efficiently
    // figure out if a sub player is skipped due to a parent player having priority.
    const animationElementMap = new Map();
    queuedInstructions.forEach(entry => {
      const element = entry.element;
      if (subTimelines.has(element)) {
        animationElementMap.set(element, element);
        this._beforeAnimationBuild(entry.player.namespaceId, entry.instruction, allPreviousPlayersMap);
      }
    });
    skippedPlayers.forEach(player => {
      const element = player.element;
      const previousPlayers = this._getPreviousPlayers(element, false, player.namespaceId, player.triggerName, null);
      previousPlayers.forEach(prevPlayer => {
        getOrSetDefaultValue(allPreviousPlayersMap, element, []).push(prevPlayer);
        prevPlayer.destroy();
      });
    });
    // this is a special case for nodes that will be removed either by
    // having their own leave animations or by being queried in a container
    // that will be removed once a parent animation is complete. The idea
    // here is that * styles must be identical to ! styles because of
    // backwards compatibility (* is also filled in by default in many places).
    // Otherwise * styles will return an empty value or "auto" since the element
    // passed to getComputedStyle will not be visible (since * === destination)
    const replaceNodes = allLeaveNodes.filter(node => {
      return replacePostStylesAsPre(node, allPreStyleElements, allPostStyleElements);
    });
    // POST STAGE: fill the * styles
    const postStylesMap = new Map();
    const allLeaveQueriedNodes = cloakAndComputeStyles(postStylesMap, this.driver, leaveNodesWithoutAnimations, allPostStyleElements, AUTO_STYLE);
    allLeaveQueriedNodes.forEach(node => {
      if (replacePostStylesAsPre(node, allPreStyleElements, allPostStyleElements)) {
        replaceNodes.push(node);
      }
    });
    // PRE STAGE: fill the ! styles
    const preStylesMap = new Map();
    enterNodeMap.forEach((nodes, root) => {
      cloakAndComputeStyles(preStylesMap, this.driver, new Set(nodes), allPreStyleElements, ɵPRE_STYLE);
    });
    replaceNodes.forEach(node => {
      const post = postStylesMap.get(node);
      const pre = preStylesMap.get(node);
      postStylesMap.set(node, new Map([...(post?.entries() ?? []), ...(pre?.entries() ?? [])]));
    });
    const rootPlayers = [];
    const subPlayers = [];
    const NO_PARENT_ANIMATION_ELEMENT_DETECTED = {};
    queuedInstructions.forEach(entry => {
      const {
        element,
        player,
        instruction
      } = entry;
      // this means that it was never consumed by a parent animation which
      // means that it is independent and therefore should be set for animation
      if (subTimelines.has(element)) {
        if (disabledElementsSet.has(element)) {
          player.onDestroy(() => setStyles(element, instruction.toStyles));
          player.disabled = true;
          player.overrideTotalTime(instruction.totalTime);
          skippedPlayers.push(player);
          return;
        }
        // this will flow up the DOM and query the map to figure out
        // if a parent animation has priority over it. In the situation
        // that a parent is detected then it will cancel the loop. If
        // nothing is detected, or it takes a few hops to find a parent,
        // then it will fill in the missing nodes and signal them as having
        // a detected parent (or a NO_PARENT value via a special constant).
        let parentWithAnimation = NO_PARENT_ANIMATION_ELEMENT_DETECTED;
        if (animationElementMap.size > 1) {
          let elm = element;
          const parentsToAdd = [];
          while (elm = elm.parentNode) {
            const detectedParent = animationElementMap.get(elm);
            if (detectedParent) {
              parentWithAnimation = detectedParent;
              break;
            }
            parentsToAdd.push(elm);
          }
          parentsToAdd.forEach(parent => animationElementMap.set(parent, parentWithAnimation));
        }
        const innerPlayer = this._buildAnimation(player.namespaceId, instruction, allPreviousPlayersMap, skippedPlayersMap, preStylesMap, postStylesMap);
        player.setRealPlayer(innerPlayer);
        if (parentWithAnimation === NO_PARENT_ANIMATION_ELEMENT_DETECTED) {
          rootPlayers.push(player);
        } else {
          const parentPlayers = this.playersByElement.get(parentWithAnimation);
          if (parentPlayers && parentPlayers.length) {
            player.parentPlayer = optimizeGroupPlayer(parentPlayers);
          }
          skippedPlayers.push(player);
        }
      } else {
        eraseStyles(element, instruction.fromStyles);
        player.onDestroy(() => setStyles(element, instruction.toStyles));
        // there still might be a ancestor player animating this
        // element therefore we will still add it as a sub player
        // even if its animation may be disabled
        subPlayers.push(player);
        if (disabledElementsSet.has(element)) {
          skippedPlayers.push(player);
        }
      }
    });
    // find all of the sub players' corresponding inner animation players
    subPlayers.forEach(player => {
      // even if no players are found for a sub animation it
      // will still complete itself after the next tick since it's Noop
      const playersForElement = skippedPlayersMap.get(player.element);
      if (playersForElement && playersForElement.length) {
        const innerPlayer = optimizeGroupPlayer(playersForElement);
        player.setRealPlayer(innerPlayer);
      }
    });
    // the reason why we don't actually play the animation is
    // because all that a skipped player is designed to do is to
    // fire the start/done transition callback events
    skippedPlayers.forEach(player => {
      if (player.parentPlayer) {
        player.syncPlayerEvents(player.parentPlayer);
      } else {
        player.destroy();
      }
    });
    // run through all of the queued removals and see if they
    // were picked up by a query. If not then perform the removal
    // operation right away unless a parent animation is ongoing.
    for (let i = 0; i < allLeaveNodes.length; i++) {
      const element = allLeaveNodes[i];
      const details = element[REMOVAL_FLAG];
      removeClass(element, LEAVE_CLASSNAME);
      // this means the element has a removal animation that is being
      // taken care of and therefore the inner elements will hang around
      // until that animation is over (or the parent queried animation)
      if (details && details.hasAnimation) continue;
      let players = [];
      // if this element is queried or if it contains queried children
      // then we want for the element not to be removed from the page
      // until the queried animations have finished
      if (queriedElements.size) {
        let queriedPlayerResults = queriedElements.get(element);
        if (queriedPlayerResults && queriedPlayerResults.length) {
          players.push(...queriedPlayerResults);
        }
        let queriedInnerElements = this.driver.query(element, NG_ANIMATING_SELECTOR, true);
        for (let j = 0; j < queriedInnerElements.length; j++) {
          let queriedPlayers = queriedElements.get(queriedInnerElements[j]);
          if (queriedPlayers && queriedPlayers.length) {
            players.push(...queriedPlayers);
          }
        }
      }
      const activePlayers = players.filter(p => !p.destroyed);
      if (activePlayers.length) {
        removeNodesAfterAnimationDone(this, element, activePlayers);
      } else {
        this.processLeaveNode(element);
      }
    }
    // this is required so the cleanup method doesn't remove them
    allLeaveNodes.length = 0;
    rootPlayers.forEach(player => {
      this.players.push(player);
      player.onDone(() => {
        player.destroy();
        const index = this.players.indexOf(player);
        this.players.splice(index, 1);
      });
      player.play();
    });
    return rootPlayers;
  }
  afterFlush(callback) {
    this._flushFns.push(callback);
  }
  afterFlushAnimationsDone(callback) {
    this._whenQuietFns.push(callback);
  }
  _getPreviousPlayers(element, isQueriedElement, namespaceId, triggerName, toStateValue) {
    let players = [];
    if (isQueriedElement) {
      const queriedElementPlayers = this.playersByQueriedElement.get(element);
      if (queriedElementPlayers) {
        players = queriedElementPlayers;
      }
    } else {
      const elementPlayers = this.playersByElement.get(element);
      if (elementPlayers) {
        const isRemovalAnimation = !toStateValue || toStateValue == VOID_VALUE;
        elementPlayers.forEach(player => {
          if (player.queued) return;
          if (!isRemovalAnimation && player.triggerName != triggerName) return;
          players.push(player);
        });
      }
    }
    if (namespaceId || triggerName) {
      players = players.filter(player => {
        if (namespaceId && namespaceId != player.namespaceId) return false;
        if (triggerName && triggerName != player.triggerName) return false;
        return true;
      });
    }
    return players;
  }
  _beforeAnimationBuild(namespaceId, instruction, allPreviousPlayersMap) {
    const triggerName = instruction.triggerName;
    const rootElement = instruction.element;
    // when a removal animation occurs, ALL previous players are collected
    // and destroyed (even if they are outside of the current namespace)
    const targetNameSpaceId = instruction.isRemovalTransition ? undefined : namespaceId;
    const targetTriggerName = instruction.isRemovalTransition ? undefined : triggerName;
    for (const timelineInstruction of instruction.timelines) {
      const element = timelineInstruction.element;
      const isQueriedElement = element !== rootElement;
      const players = getOrSetDefaultValue(allPreviousPlayersMap, element, []);
      const previousPlayers = this._getPreviousPlayers(element, isQueriedElement, targetNameSpaceId, targetTriggerName, instruction.toState);
      previousPlayers.forEach(player => {
        const realPlayer = player.getRealPlayer();
        if (realPlayer.beforeDestroy) {
          realPlayer.beforeDestroy();
        }
        player.destroy();
        players.push(player);
      });
    }
    // this needs to be done so that the PRE/POST styles can be
    // computed properly without interfering with the previous animation
    eraseStyles(rootElement, instruction.fromStyles);
  }
  _buildAnimation(namespaceId, instruction, allPreviousPlayersMap, skippedPlayersMap, preStylesMap, postStylesMap) {
    const triggerName = instruction.triggerName;
    const rootElement = instruction.element;
    // we first run this so that the previous animation player
    // data can be passed into the successive animation players
    const allQueriedPlayers = [];
    const allConsumedElements = new Set();
    const allSubElements = new Set();
    const allNewPlayers = instruction.timelines.map(timelineInstruction => {
      const element = timelineInstruction.element;
      allConsumedElements.add(element);
      // FIXME (matsko): make sure to-be-removed animations are removed properly
      const details = element[REMOVAL_FLAG];
      if (details && details.removedBeforeQueried) return new NoopAnimationPlayer(timelineInstruction.duration, timelineInstruction.delay);
      const isQueriedElement = element !== rootElement;
      const previousPlayers = flattenGroupPlayers((allPreviousPlayersMap.get(element) || EMPTY_PLAYER_ARRAY).map(p => p.getRealPlayer())).filter(p => {
        // the `element` is not apart of the AnimationPlayer definition, but
        // Mock/WebAnimations
        // use the element within their implementation. This will be added in Angular5 to
        // AnimationPlayer
        const pp = p;
        return pp.element ? pp.element === element : false;
      });
      const preStyles = preStylesMap.get(element);
      const postStyles = postStylesMap.get(element);
      const keyframes = normalizeKeyframes$1(this._normalizer, timelineInstruction.keyframes, preStyles, postStyles);
      const player = this._buildPlayer(timelineInstruction, keyframes, previousPlayers);
      // this means that this particular player belongs to a sub trigger. It is
      // important that we match this player up with the corresponding (@trigger.listener)
      if (timelineInstruction.subTimeline && skippedPlayersMap) {
        allSubElements.add(element);
      }
      if (isQueriedElement) {
        const wrappedPlayer = new TransitionAnimationPlayer(namespaceId, triggerName, element);
        wrappedPlayer.setRealPlayer(player);
        allQueriedPlayers.push(wrappedPlayer);
      }
      return player;
    });
    allQueriedPlayers.forEach(player => {
      getOrSetDefaultValue(this.playersByQueriedElement, player.element, []).push(player);
      player.onDone(() => deleteOrUnsetInMap(this.playersByQueriedElement, player.element, player));
    });
    allConsumedElements.forEach(element => addClass(element, NG_ANIMATING_CLASSNAME));
    const player = optimizeGroupPlayer(allNewPlayers);
    player.onDestroy(() => {
      allConsumedElements.forEach(element => removeClass(element, NG_ANIMATING_CLASSNAME));
      setStyles(rootElement, instruction.toStyles);
    });
    // this basically makes all of the callbacks for sub element animations
    // be dependent on the upper players for when they finish
    allSubElements.forEach(element => {
      getOrSetDefaultValue(skippedPlayersMap, element, []).push(player);
    });
    return player;
  }
  _buildPlayer(instruction, keyframes, previousPlayers) {
    if (keyframes.length > 0) {
      return this.driver.animate(instruction.element, keyframes, instruction.duration, instruction.delay, instruction.easing, previousPlayers);
    }
    // special case for when an empty transition|definition is provided
    // ... there is no point in rendering an empty animation
    return new NoopAnimationPlayer(instruction.duration, instruction.delay);
  }
}
class TransitionAnimationPlayer {
  constructor(namespaceId, triggerName, element) {
    this.namespaceId = namespaceId;
    this.triggerName = triggerName;
    this.element = element;
    this._player = new NoopAnimationPlayer();
    this._containsRealPlayer = false;
    this._queuedCallbacks = new Map();
    this.destroyed = false;
    this.parentPlayer = null;
    this.markedForDestroy = false;
    this.disabled = false;
    this.queued = true;
    this.totalTime = 0;
  }
  setRealPlayer(player) {
    if (this._containsRealPlayer) return;
    this._player = player;
    this._queuedCallbacks.forEach((callbacks, phase) => {
      callbacks.forEach(callback => listenOnPlayer(player, phase, undefined, callback));
    });
    this._queuedCallbacks.clear();
    this._containsRealPlayer = true;
    this.overrideTotalTime(player.totalTime);
    this.queued = false;
  }
  getRealPlayer() {
    return this._player;
  }
  overrideTotalTime(totalTime) {
    this.totalTime = totalTime;
  }
  syncPlayerEvents(player) {
    const p = this._player;
    if (p.triggerCallback) {
      player.onStart(() => p.triggerCallback('start'));
    }
    player.onDone(() => this.finish());
    player.onDestroy(() => this.destroy());
  }
  _queueEvent(name, callback) {
    getOrSetDefaultValue(this._queuedCallbacks, name, []).push(callback);
  }
  onDone(fn) {
    if (this.queued) {
      this._queueEvent('done', fn);
    }
    this._player.onDone(fn);
  }
  onStart(fn) {
    if (this.queued) {
      this._queueEvent('start', fn);
    }
    this._player.onStart(fn);
  }
  onDestroy(fn) {
    if (this.queued) {
      this._queueEvent('destroy', fn);
    }
    this._player.onDestroy(fn);
  }
  init() {
    this._player.init();
  }
  hasStarted() {
    return this.queued ? false : this._player.hasStarted();
  }
  play() {
    !this.queued && this._player.play();
  }
  pause() {
    !this.queued && this._player.pause();
  }
  restart() {
    !this.queued && this._player.restart();
  }
  finish() {
    this._player.finish();
  }
  destroy() {
    this.destroyed = true;
    this._player.destroy();
  }
  reset() {
    !this.queued && this._player.reset();
  }
  setPosition(p) {
    if (!this.queued) {
      this._player.setPosition(p);
    }
  }
  getPosition() {
    return this.queued ? 0 : this._player.getPosition();
  }
  /** @internal */
  triggerCallback(phaseName) {
    const p = this._player;
    if (p.triggerCallback) {
      p.triggerCallback(phaseName);
    }
  }
}
function deleteOrUnsetInMap(map, key, value) {
  let currentValues = map.get(key);
  if (currentValues) {
    if (currentValues.length) {
      const index = currentValues.indexOf(value);
      currentValues.splice(index, 1);
    }
    if (currentValues.length == 0) {
      map.delete(key);
    }
  }
  return currentValues;
}
function normalizeTriggerValue(value) {
  // we use `!= null` here because it's the most simple
  // way to test against a "falsy" value without mixing
  // in empty strings or a zero value. DO NOT OPTIMIZE.
  return value != null ? value : null;
}
function isElementNode(node) {
  return node && node['nodeType'] === 1;
}
function isTriggerEventValid(eventName) {
  return eventName == 'start' || eventName == 'done';
}
function cloakElement(element, value) {
  const oldValue = element.style.display;
  element.style.display = value != null ? value : 'none';
  return oldValue;
}
function cloakAndComputeStyles(valuesMap, driver, elements, elementPropsMap, defaultStyle) {
  const cloakVals = [];
  elements.forEach(element => cloakVals.push(cloakElement(element)));
  const failedElements = [];
  elementPropsMap.forEach((props, element) => {
    const styles = new Map();
    props.forEach(prop => {
      const value = driver.computeStyle(element, prop, defaultStyle);
      styles.set(prop, value);
      // there is no easy way to detect this because a sub element could be removed
      // by a parent animation element being detached.
      if (!value || value.length == 0) {
        element[REMOVAL_FLAG] = NULL_REMOVED_QUERIED_STATE;
        failedElements.push(element);
      }
    });
    valuesMap.set(element, styles);
  });
  // we use a index variable here since Set.forEach(a, i) does not return
  // an index value for the closure (but instead just the value)
  let i = 0;
  elements.forEach(element => cloakElement(element, cloakVals[i++]));
  return failedElements;
}
/*
Since the Angular renderer code will return a collection of inserted
nodes in all areas of a DOM tree, it's up to this algorithm to figure
out which nodes are roots for each animation @trigger.

By placing each inserted node into a Set and traversing upwards, it
is possible to find the @trigger elements and well any direct *star
insertion nodes, if a @trigger root is found then the enter element
is placed into the Map[@trigger] spot.
 */
function buildRootMap(roots, nodes) {
  const rootMap = new Map();
  roots.forEach(root => rootMap.set(root, []));
  if (nodes.length == 0) return rootMap;
  const NULL_NODE = 1;
  const nodeSet = new Set(nodes);
  const localRootMap = new Map();
  function getRoot(node) {
    if (!node) return NULL_NODE;
    let root = localRootMap.get(node);
    if (root) return root;
    const parent = node.parentNode;
    if (rootMap.has(parent)) {
      // ngIf inside @trigger
      root = parent;
    } else if (nodeSet.has(parent)) {
      // ngIf inside ngIf
      root = NULL_NODE;
    } else {
      // recurse upwards
      root = getRoot(parent);
    }
    localRootMap.set(node, root);
    return root;
  }
  nodes.forEach(node => {
    const root = getRoot(node);
    if (root !== NULL_NODE) {
      rootMap.get(root).push(node);
    }
  });
  return rootMap;
}
function addClass(element, className) {
  element.classList?.add(className);
}
function removeClass(element, className) {
  element.classList?.remove(className);
}
function removeNodesAfterAnimationDone(engine, element, players) {
  optimizeGroupPlayer(players).onDone(() => engine.processLeaveNode(element));
}
function flattenGroupPlayers(players) {
  const finalPlayers = [];
  _flattenGroupPlayersRecur(players, finalPlayers);
  return finalPlayers;
}
function _flattenGroupPlayersRecur(players, finalPlayers) {
  for (let i = 0; i < players.length; i++) {
    const player = players[i];
    if (player instanceof AnimationGroupPlayer) {
      _flattenGroupPlayersRecur(player.players, finalPlayers);
    } else {
      finalPlayers.push(player);
    }
  }
}
function objEquals(a, b) {
  const k1 = Object.keys(a);
  const k2 = Object.keys(b);
  if (k1.length != k2.length) return false;
  for (let i = 0; i < k1.length; i++) {
    const prop = k1[i];
    if (!b.hasOwnProperty(prop) || a[prop] !== b[prop]) return false;
  }
  return true;
}
function replacePostStylesAsPre(element, allPreStyleElements, allPostStyleElements) {
  const postEntry = allPostStyleElements.get(element);
  if (!postEntry) return false;
  let preEntry = allPreStyleElements.get(element);
  if (preEntry) {
    postEntry.forEach(data => preEntry.add(data));
  } else {
    allPreStyleElements.set(element, postEntry);
  }
  allPostStyleElements.delete(element);
  return true;
}
class AnimationEngine {
  constructor(bodyNode, _driver, _normalizer) {
    this.bodyNode = bodyNode;
    this._driver = _driver;
    this._normalizer = _normalizer;
    this._triggerCache = {};
    // this method is designed to be overridden by the code that uses this engine
    this.onRemovalComplete = (element, context) => {};
    this._transitionEngine = new TransitionAnimationEngine(bodyNode, _driver, _normalizer);
    this._timelineEngine = new TimelineAnimationEngine(bodyNode, _driver, _normalizer);
    this._transitionEngine.onRemovalComplete = (element, context) => this.onRemovalComplete(element, context);
  }
  registerTrigger(componentId, namespaceId, hostElement, name, metadata) {
    const cacheKey = componentId + '-' + name;
    let trigger = this._triggerCache[cacheKey];
    if (!trigger) {
      const errors = [];
      const warnings = [];
      const ast = buildAnimationAst(this._driver, metadata, errors, warnings);
      if (errors.length) {
        throw triggerBuildFailed(name, errors);
      }
      if (warnings.length) {
        warnTriggerBuild(name, warnings);
      }
      trigger = buildTrigger(name, ast, this._normalizer);
      this._triggerCache[cacheKey] = trigger;
    }
    this._transitionEngine.registerTrigger(namespaceId, name, trigger);
  }
  register(namespaceId, hostElement) {
    this._transitionEngine.register(namespaceId, hostElement);
  }
  destroy(namespaceId, context) {
    this._transitionEngine.destroy(namespaceId, context);
  }
  onInsert(namespaceId, element, parent, insertBefore) {
    this._transitionEngine.insertNode(namespaceId, element, parent, insertBefore);
  }
  onRemove(namespaceId, element, context) {
    this._transitionEngine.removeNode(namespaceId, element, context);
  }
  disableAnimations(element, disable) {
    this._transitionEngine.markElementAsDisabled(element, disable);
  }
  process(namespaceId, element, property, value) {
    if (property.charAt(0) == '@') {
      const [id, action] = parseTimelineCommand(property);
      const args = value;
      this._timelineEngine.command(id, element, action, args);
    } else {
      this._transitionEngine.trigger(namespaceId, element, property, value);
    }
  }
  listen(namespaceId, element, eventName, eventPhase, callback) {
    // @@listen
    if (eventName.charAt(0) == '@') {
      const [id, action] = parseTimelineCommand(eventName);
      return this._timelineEngine.listen(id, element, action, callback);
    }
    return this._transitionEngine.listen(namespaceId, element, eventName, eventPhase, callback);
  }
  flush(microtaskId = -1) {
    this._transitionEngine.flush(microtaskId);
  }
  get players() {
    return [...this._transitionEngine.players, ...this._timelineEngine.players];
  }
  whenRenderingDone() {
    return this._transitionEngine.whenRenderingDone();
  }
  afterFlushAnimationsDone(cb) {
    this._transitionEngine.afterFlushAnimationsDone(cb);
  }
}

/**
 * @license Angular v16.2.2
 * (c) 2010-2022 Google LLC. https://angular.io/
 * License: MIT
 */

let BrowserAnimationBuilder = /*#__PURE__*/(() => {
  var _class;
  class BrowserAnimationBuilder extends AnimationBuilder {
    constructor(rootRenderer, doc) {
      super();
      this._nextAnimationId = 0;
      const typeData = {
        id: '0',
        encapsulation: ViewEncapsulation$1.None,
        styles: [],
        data: {
          animation: []
        }
      };
      this._renderer = rootRenderer.createRenderer(doc.body, typeData);
    }
    build(animation) {
      const id = this._nextAnimationId.toString();
      this._nextAnimationId++;
      const entry = Array.isArray(animation) ? sequence(animation) : animation;
      issueAnimationCommand(this._renderer, null, id, 'register', [entry]);
      return new BrowserAnimationFactory(id, this._renderer);
    }
  }
  _class = BrowserAnimationBuilder;
  _class.ɵfac = function _class_Factory(t) {
    return new (t || _class)(ɵɵinject(RendererFactory2), ɵɵinject(DOCUMENT));
  };
  _class.ɵprov = /* @__PURE__ */ɵɵdefineInjectable({
    token: _class,
    factory: _class.ɵfac
  });
  return BrowserAnimationBuilder;
})();
class BrowserAnimationFactory extends AnimationFactory {
  constructor(_id, _renderer) {
    super();
    this._id = _id;
    this._renderer = _renderer;
  }
  create(element, options) {
    return new RendererAnimationPlayer(this._id, element, options || {}, this._renderer);
  }
}
class RendererAnimationPlayer {
  constructor(id, element, options, _renderer) {
    this.id = id;
    this.element = element;
    this._renderer = _renderer;
    this.parentPlayer = null;
    this._started = false;
    this.totalTime = 0;
    this._command('create', options);
  }
  _listen(eventName, callback) {
    return this._renderer.listen(this.element, `@@${this.id}:${eventName}`, callback);
  }
  _command(command, ...args) {
    return issueAnimationCommand(this._renderer, this.element, this.id, command, args);
  }
  onDone(fn) {
    this._listen('done', fn);
  }
  onStart(fn) {
    this._listen('start', fn);
  }
  onDestroy(fn) {
    this._listen('destroy', fn);
  }
  init() {
    this._command('init');
  }
  hasStarted() {
    return this._started;
  }
  play() {
    this._command('play');
    this._started = true;
  }
  pause() {
    this._command('pause');
  }
  restart() {
    this._command('restart');
  }
  finish() {
    this._command('finish');
  }
  destroy() {
    this._command('destroy');
  }
  reset() {
    this._command('reset');
    this._started = false;
  }
  setPosition(p) {
    this._command('setPosition', p);
  }
  getPosition() {
    return this._renderer.engine.players[+this.id]?.getPosition() ?? 0;
  }
}
function issueAnimationCommand(renderer, element, id, command, args) {
  return renderer.setProperty(element, `@@${id}:${command}`, args);
}
const ANIMATION_PREFIX = '@';
const DISABLE_ANIMATIONS_FLAG = '@.disabled';
let AnimationRendererFactory = /*#__PURE__*/(() => {
  var _class2;
  class AnimationRendererFactory {
    constructor(delegate, engine, _zone) {
      this.delegate = delegate;
      this.engine = engine;
      this._zone = _zone;
      this._currentId = 0;
      this._microtaskId = 1;
      this._animationCallbacksBuffer = [];
      this._rendererCache = new Map();
      this._cdRecurDepth = 0;
      engine.onRemovalComplete = (element, delegate) => {
        // Note: if a component element has a leave animation, and a host leave animation,
        // the view engine will call `removeChild` for the parent
        // component renderer as well as for the child component renderer.
        // Therefore, we need to check if we already removed the element.
        const parentNode = delegate?.parentNode(element);
        if (parentNode) {
          delegate.removeChild(parentNode, element);
        }
      };
    }
    createRenderer(hostElement, type) {
      const EMPTY_NAMESPACE_ID = '';
      // cache the delegates to find out which cached delegate can
      // be used by which cached renderer
      const delegate = this.delegate.createRenderer(hostElement, type);
      if (!hostElement || !type || !type.data || !type.data['animation']) {
        let renderer = this._rendererCache.get(delegate);
        if (!renderer) {
          // Ensure that the renderer is removed from the cache on destroy
          // since it may contain references to detached DOM nodes.
          const onRendererDestroy = () => this._rendererCache.delete(delegate);
          renderer = new BaseAnimationRenderer(EMPTY_NAMESPACE_ID, delegate, this.engine, onRendererDestroy);
          // only cache this result when the base renderer is used
          this._rendererCache.set(delegate, renderer);
        }
        return renderer;
      }
      const componentId = type.id;
      const namespaceId = type.id + '-' + this._currentId;
      this._currentId++;
      this.engine.register(namespaceId, hostElement);
      const registerTrigger = trigger => {
        if (Array.isArray(trigger)) {
          trigger.forEach(registerTrigger);
        } else {
          this.engine.registerTrigger(componentId, namespaceId, hostElement, trigger.name, trigger);
        }
      };
      const animationTriggers = type.data['animation'];
      animationTriggers.forEach(registerTrigger);
      return new AnimationRenderer(this, namespaceId, delegate, this.engine);
    }
    begin() {
      this._cdRecurDepth++;
      if (this.delegate.begin) {
        this.delegate.begin();
      }
    }
    _scheduleCountTask() {
      queueMicrotask(() => {
        this._microtaskId++;
      });
    }
    /** @internal */
    scheduleListenerCallback(count, fn, data) {
      if (count >= 0 && count < this._microtaskId) {
        this._zone.run(() => fn(data));
        return;
      }
      if (this._animationCallbacksBuffer.length == 0) {
        queueMicrotask(() => {
          this._zone.run(() => {
            this._animationCallbacksBuffer.forEach(tuple => {
              const [fn, data] = tuple;
              fn(data);
            });
            this._animationCallbacksBuffer = [];
          });
        });
      }
      this._animationCallbacksBuffer.push([fn, data]);
    }
    end() {
      this._cdRecurDepth--;
      // this is to prevent animations from running twice when an inner
      // component does CD when a parent component instead has inserted it
      if (this._cdRecurDepth == 0) {
        this._zone.runOutsideAngular(() => {
          this._scheduleCountTask();
          this.engine.flush(this._microtaskId);
        });
      }
      if (this.delegate.end) {
        this.delegate.end();
      }
    }
    whenRenderingDone() {
      return this.engine.whenRenderingDone();
    }
  }
  _class2 = AnimationRendererFactory;
  _class2.ɵfac = function _class2_Factory(t) {
    return new (t || _class2)(ɵɵinject(RendererFactory2), ɵɵinject(AnimationEngine), ɵɵinject(NgZone));
  };
  _class2.ɵprov = /* @__PURE__ */ɵɵdefineInjectable({
    token: _class2,
    factory: _class2.ɵfac
  });
  return AnimationRendererFactory;
})();
class BaseAnimationRenderer {
  constructor(namespaceId, delegate, engine, _onDestroy) {
    this.namespaceId = namespaceId;
    this.delegate = delegate;
    this.engine = engine;
    this._onDestroy = _onDestroy;
  }
  get data() {
    return this.delegate.data;
  }
  destroyNode(node) {
    this.delegate.destroyNode?.(node);
  }
  destroy() {
    this.engine.destroy(this.namespaceId, this.delegate);
    this.engine.afterFlushAnimationsDone(() => {
      // Call the renderer destroy method after the animations has finished as otherwise
      // styles will be removed too early which will cause an unstyled animation.
      queueMicrotask(() => {
        this.delegate.destroy();
      });
    });
    this._onDestroy?.();
  }
  createElement(name, namespace) {
    return this.delegate.createElement(name, namespace);
  }
  createComment(value) {
    return this.delegate.createComment(value);
  }
  createText(value) {
    return this.delegate.createText(value);
  }
  appendChild(parent, newChild) {
    this.delegate.appendChild(parent, newChild);
    this.engine.onInsert(this.namespaceId, newChild, parent, false);
  }
  insertBefore(parent, newChild, refChild, isMove = true) {
    this.delegate.insertBefore(parent, newChild, refChild);
    // If `isMove` true than we should animate this insert.
    this.engine.onInsert(this.namespaceId, newChild, parent, isMove);
  }
  removeChild(parent, oldChild, isHostElement) {
    this.engine.onRemove(this.namespaceId, oldChild, this.delegate);
  }
  selectRootElement(selectorOrNode, preserveContent) {
    return this.delegate.selectRootElement(selectorOrNode, preserveContent);
  }
  parentNode(node) {
    return this.delegate.parentNode(node);
  }
  nextSibling(node) {
    return this.delegate.nextSibling(node);
  }
  setAttribute(el, name, value, namespace) {
    this.delegate.setAttribute(el, name, value, namespace);
  }
  removeAttribute(el, name, namespace) {
    this.delegate.removeAttribute(el, name, namespace);
  }
  addClass(el, name) {
    this.delegate.addClass(el, name);
  }
  removeClass(el, name) {
    this.delegate.removeClass(el, name);
  }
  setStyle(el, style, value, flags) {
    this.delegate.setStyle(el, style, value, flags);
  }
  removeStyle(el, style, flags) {
    this.delegate.removeStyle(el, style, flags);
  }
  setProperty(el, name, value) {
    if (name.charAt(0) == ANIMATION_PREFIX && name == DISABLE_ANIMATIONS_FLAG) {
      this.disableAnimations(el, !!value);
    } else {
      this.delegate.setProperty(el, name, value);
    }
  }
  setValue(node, value) {
    this.delegate.setValue(node, value);
  }
  listen(target, eventName, callback) {
    return this.delegate.listen(target, eventName, callback);
  }
  disableAnimations(element, value) {
    this.engine.disableAnimations(element, value);
  }
}
class AnimationRenderer extends BaseAnimationRenderer {
  constructor(factory, namespaceId, delegate, engine, onDestroy) {
    super(namespaceId, delegate, engine, onDestroy);
    this.factory = factory;
    this.namespaceId = namespaceId;
  }
  setProperty(el, name, value) {
    if (name.charAt(0) == ANIMATION_PREFIX) {
      if (name.charAt(1) == '.' && name == DISABLE_ANIMATIONS_FLAG) {
        value = value === undefined ? true : !!value;
        this.disableAnimations(el, value);
      } else {
        this.engine.process(this.namespaceId, el, name.slice(1), value);
      }
    } else {
      this.delegate.setProperty(el, name, value);
    }
  }
  listen(target, eventName, callback) {
    if (eventName.charAt(0) == ANIMATION_PREFIX) {
      const element = resolveElementFromTarget(target);
      let name = eventName.slice(1);
      let phase = '';
      // @listener.phase is for trigger animation callbacks
      // @@listener is for animation builder callbacks
      if (name.charAt(0) != ANIMATION_PREFIX) {
        [name, phase] = parseTriggerCallbackName(name);
      }
      return this.engine.listen(this.namespaceId, element, name, phase, event => {
        const countId = event['_data'] || -1;
        this.factory.scheduleListenerCallback(countId, callback, event);
      });
    }
    return this.delegate.listen(target, eventName, callback);
  }
}
function resolveElementFromTarget(target) {
  switch (target) {
    case 'body':
      return document.body;
    case 'document':
      return document;
    case 'window':
      return window;
    default:
      return target;
  }
}
function parseTriggerCallbackName(triggerName) {
  const dotIndex = triggerName.indexOf('.');
  const trigger = triggerName.substring(0, dotIndex);
  const phase = triggerName.slice(dotIndex + 1);
  return [trigger, phase];
}
let InjectableAnimationEngine = /*#__PURE__*/(() => {
  var _class3;
  class InjectableAnimationEngine extends AnimationEngine {
    // The `ApplicationRef` is injected here explicitly to force the dependency ordering.
    // Since the `ApplicationRef` should be created earlier before the `AnimationEngine`, they
    // both have `ngOnDestroy` hooks and `flush()` must be called after all views are destroyed.
    constructor(doc, driver, normalizer, appRef) {
      super(doc.body, driver, normalizer);
    }
    ngOnDestroy() {
      this.flush();
    }
  }
  _class3 = InjectableAnimationEngine;
  _class3.ɵfac = function _class3_Factory(t) {
    return new (t || _class3)(ɵɵinject(DOCUMENT), ɵɵinject(AnimationDriver), ɵɵinject(AnimationStyleNormalizer), ɵɵinject(ApplicationRef));
  };
  _class3.ɵprov = /* @__PURE__ */ɵɵdefineInjectable({
    token: _class3,
    factory: _class3.ɵfac
  });
  return InjectableAnimationEngine;
})();
function instantiateDefaultStyleNormalizer() {
  return new WebAnimationsStyleNormalizer();
}
function instantiateRendererFactory(renderer, engine, zone) {
  return new AnimationRendererFactory(renderer, engine, zone);
}
const SHARED_ANIMATION_PROVIDERS = [{
  provide: AnimationBuilder,
  useClass: BrowserAnimationBuilder
}, {
  provide: AnimationStyleNormalizer,
  useFactory: instantiateDefaultStyleNormalizer
}, {
  provide: AnimationEngine,
  useClass: InjectableAnimationEngine
}, {
  provide: RendererFactory2,
  useFactory: instantiateRendererFactory,
  deps: [DomRendererFactory2, AnimationEngine, NgZone]
}];
/**
 * Separate providers from the actual module so that we can do a local modification in Google3 to
 * include them in the BrowserTestingModule.
 */
const BROWSER_NOOP_ANIMATIONS_PROVIDERS = [{
  provide: AnimationDriver,
  useClass: NoopAnimationDriver
}, {
  provide: ANIMATION_MODULE_TYPE,
  useValue: 'NoopAnimations'
}, ...SHARED_ANIMATION_PROVIDERS];
/**
 * Returns the set of [dependency-injection providers](guide/glossary#provider)
 * to disable animations in an application. See [animations guide](guide/animations)
 * to learn more about animations in Angular.
 *
 * @usageNotes
 *
 * The function is useful when you want to bootstrap an application using
 * the `bootstrapApplication` function, but you need to disable animations
 * (for example, when running tests).
 *
 * ```typescript
 * bootstrapApplication(RootComponent, {
 *   providers: [
 *     provideNoopAnimations()
 *   ]
 * });
 * ```
 *
 * @publicApi
 */
function provideNoopAnimations() {
  // Return a copy to prevent changes to the original array in case any in-place
  // alterations are performed to the `provideNoopAnimations` call results in app code.
  return [...BROWSER_NOOP_ANIMATIONS_PROVIDERS];
}

/**
 * @license Angular v16.2.2
 * (c) 2010-2022 Google LLC. https://angular.io/
 * License: MIT
 */

var __getOwnPropNames = Object.getOwnPropertyNames;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = {
    exports: {}
  }).exports, mod), mod.exports;
};

// external/npm/node_modules/domino/lib/Event.js
var require_Event = /*#__PURE__*/__commonJS({
  "external/npm/node_modules/domino/lib/Event.js"(exports, module) {

    module.exports = Event;
    Event.CAPTURING_PHASE = 1;
    Event.AT_TARGET = 2;
    Event.BUBBLING_PHASE = 3;
    function Event(type, dictionary) {
      this.type = "";
      this.target = null;
      this.currentTarget = null;
      this.eventPhase = Event.AT_TARGET;
      this.bubbles = false;
      this.cancelable = false;
      this.isTrusted = false;
      this.defaultPrevented = false;
      this.timeStamp = Date.now();
      this._propagationStopped = false;
      this._immediatePropagationStopped = false;
      this._initialized = true;
      this._dispatching = false;
      if (type) this.type = type;
      if (dictionary) {
        for (var p in dictionary) {
          this[p] = dictionary[p];
        }
      }
    }
    Event.prototype = Object.create(Object.prototype, {
      constructor: {
        value: Event
      },
      stopPropagation: {
        value: function stopPropagation() {
          this._propagationStopped = true;
        }
      },
      stopImmediatePropagation: {
        value: function stopImmediatePropagation() {
          this._propagationStopped = true;
          this._immediatePropagationStopped = true;
        }
      },
      preventDefault: {
        value: function preventDefault() {
          if (this.cancelable) this.defaultPrevented = true;
        }
      },
      initEvent: {
        value: function initEvent(type, bubbles, cancelable) {
          this._initialized = true;
          if (this._dispatching) return;
          this._propagationStopped = false;
          this._immediatePropagationStopped = false;
          this.defaultPrevented = false;
          this.isTrusted = false;
          this.target = null;
          this.type = type;
          this.bubbles = bubbles;
          this.cancelable = cancelable;
        }
      }
    });
  }
});

// external/npm/node_modules/domino/lib/UIEvent.js
var require_UIEvent = /*#__PURE__*/__commonJS({
  "external/npm/node_modules/domino/lib/UIEvent.js"(exports, module) {

    var Event = require_Event();
    module.exports = UIEvent;
    function UIEvent() {
      Event.call(this);
      this.view = null;
      this.detail = 0;
    }
    UIEvent.prototype = Object.create(Event.prototype, {
      constructor: {
        value: UIEvent
      },
      initUIEvent: {
        value: function (type, bubbles, cancelable, view, detail) {
          this.initEvent(type, bubbles, cancelable);
          this.view = view;
          this.detail = detail;
        }
      }
    });
  }
});

// external/npm/node_modules/domino/lib/MouseEvent.js
var require_MouseEvent = /*#__PURE__*/__commonJS({
  "external/npm/node_modules/domino/lib/MouseEvent.js"(exports, module) {

    var UIEvent = require_UIEvent();
    module.exports = MouseEvent;
    function MouseEvent() {
      UIEvent.call(this);
      this.screenX = this.screenY = this.clientX = this.clientY = 0;
      this.ctrlKey = this.altKey = this.shiftKey = this.metaKey = false;
      this.button = 0;
      this.buttons = 1;
      this.relatedTarget = null;
    }
    MouseEvent.prototype = Object.create(UIEvent.prototype, {
      constructor: {
        value: MouseEvent
      },
      initMouseEvent: {
        value: function (type, bubbles, cancelable, view, detail, screenX, screenY, clientX, clientY, ctrlKey, altKey, shiftKey, metaKey, button, relatedTarget) {
          this.initEvent(type, bubbles, cancelable, view, detail);
          this.screenX = screenX;
          this.screenY = screenY;
          this.clientX = clientX;
          this.clientY = clientY;
          this.ctrlKey = ctrlKey;
          this.altKey = altKey;
          this.shiftKey = shiftKey;
          this.metaKey = metaKey;
          this.button = button;
          switch (button) {
            case 0:
              this.buttons = 1;
              break;
            case 1:
              this.buttons = 4;
              break;
            case 2:
              this.buttons = 2;
              break;
            default:
              this.buttons = 0;
              break;
          }
          this.relatedTarget = relatedTarget;
        }
      },
      getModifierState: {
        value: function (key) {
          switch (key) {
            case "Alt":
              return this.altKey;
            case "Control":
              return this.ctrlKey;
            case "Shift":
              return this.shiftKey;
            case "Meta":
              return this.metaKey;
            default:
              return false;
          }
        }
      }
    });
  }
});

// external/npm/node_modules/domino/lib/DOMException.js
var require_DOMException = /*#__PURE__*/__commonJS({
  "external/npm/node_modules/domino/lib/DOMException.js"(exports, module) {

    module.exports = DOMException;
    var INDEX_SIZE_ERR = 1;
    var HIERARCHY_REQUEST_ERR = 3;
    var WRONG_DOCUMENT_ERR = 4;
    var INVALID_CHARACTER_ERR = 5;
    var NO_MODIFICATION_ALLOWED_ERR = 7;
    var NOT_FOUND_ERR = 8;
    var NOT_SUPPORTED_ERR = 9;
    var INVALID_STATE_ERR = 11;
    var SYNTAX_ERR = 12;
    var INVALID_MODIFICATION_ERR = 13;
    var NAMESPACE_ERR = 14;
    var INVALID_ACCESS_ERR = 15;
    var TYPE_MISMATCH_ERR = 17;
    var SECURITY_ERR = 18;
    var NETWORK_ERR = 19;
    var ABORT_ERR = 20;
    var URL_MISMATCH_ERR = 21;
    var QUOTA_EXCEEDED_ERR = 22;
    var TIMEOUT_ERR = 23;
    var INVALID_NODE_TYPE_ERR = 24;
    var DATA_CLONE_ERR = 25;
    var names = [null, "INDEX_SIZE_ERR", null, "HIERARCHY_REQUEST_ERR", "WRONG_DOCUMENT_ERR", "INVALID_CHARACTER_ERR", null, "NO_MODIFICATION_ALLOWED_ERR", "NOT_FOUND_ERR", "NOT_SUPPORTED_ERR", "INUSE_ATTRIBUTE_ERR", "INVALID_STATE_ERR", "SYNTAX_ERR", "INVALID_MODIFICATION_ERR", "NAMESPACE_ERR", "INVALID_ACCESS_ERR", null, "TYPE_MISMATCH_ERR", "SECURITY_ERR", "NETWORK_ERR", "ABORT_ERR", "URL_MISMATCH_ERR", "QUOTA_EXCEEDED_ERR", "TIMEOUT_ERR", "INVALID_NODE_TYPE_ERR", "DATA_CLONE_ERR"];
    var messages = [null, "INDEX_SIZE_ERR (1): the index is not in the allowed range", null, "HIERARCHY_REQUEST_ERR (3): the operation would yield an incorrect nodes model", "WRONG_DOCUMENT_ERR (4): the object is in the wrong Document, a call to importNode is required", "INVALID_CHARACTER_ERR (5): the string contains invalid characters", null, "NO_MODIFICATION_ALLOWED_ERR (7): the object can not be modified", "NOT_FOUND_ERR (8): the object can not be found here", "NOT_SUPPORTED_ERR (9): this operation is not supported", "INUSE_ATTRIBUTE_ERR (10): setAttributeNode called on owned Attribute", "INVALID_STATE_ERR (11): the object is in an invalid state", "SYNTAX_ERR (12): the string did not match the expected pattern", "INVALID_MODIFICATION_ERR (13): the object can not be modified in this way", "NAMESPACE_ERR (14): the operation is not allowed by Namespaces in XML", "INVALID_ACCESS_ERR (15): the object does not support the operation or argument", null, "TYPE_MISMATCH_ERR (17): the type of the object does not match the expected type", "SECURITY_ERR (18): the operation is insecure", "NETWORK_ERR (19): a network error occurred", "ABORT_ERR (20): the user aborted an operation", "URL_MISMATCH_ERR (21): the given URL does not match another URL", "QUOTA_EXCEEDED_ERR (22): the quota has been exceeded", "TIMEOUT_ERR (23): a timeout occurred", "INVALID_NODE_TYPE_ERR (24): the supplied node is invalid or has an invalid ancestor for this operation", "DATA_CLONE_ERR (25): the object can not be cloned."];
    var constants = {
      INDEX_SIZE_ERR,
      DOMSTRING_SIZE_ERR: 2,
      HIERARCHY_REQUEST_ERR,
      WRONG_DOCUMENT_ERR,
      INVALID_CHARACTER_ERR,
      NO_DATA_ALLOWED_ERR: 6,
      NO_MODIFICATION_ALLOWED_ERR,
      NOT_FOUND_ERR,
      NOT_SUPPORTED_ERR,
      INUSE_ATTRIBUTE_ERR: 10,
      INVALID_STATE_ERR,
      SYNTAX_ERR,
      INVALID_MODIFICATION_ERR,
      NAMESPACE_ERR,
      INVALID_ACCESS_ERR,
      VALIDATION_ERR: 16,
      TYPE_MISMATCH_ERR,
      SECURITY_ERR,
      NETWORK_ERR,
      ABORT_ERR,
      URL_MISMATCH_ERR,
      QUOTA_EXCEEDED_ERR,
      TIMEOUT_ERR,
      INVALID_NODE_TYPE_ERR,
      DATA_CLONE_ERR
    };
    function DOMException(code) {
      Error.call(this);
      Error.captureStackTrace(this, this.constructor);
      this.code = code;
      this.message = messages[code];
      this.name = names[code];
    }
    DOMException.prototype.__proto__ = Error.prototype;
    for (c in constants) {
      v = {
        value: constants[c]
      };
      Object.defineProperty(DOMException, c, v);
      Object.defineProperty(DOMException.prototype, c, v);
    }
    var v;
    var c;
  }
});

// external/npm/node_modules/domino/lib/config.js
var require_config = /*#__PURE__*/__commonJS({
  "external/npm/node_modules/domino/lib/config.js"(exports) {
    exports.isApiWritable = !globalThis.__domino_frozen__;
  }
});

// external/npm/node_modules/domino/lib/utils.js
var require_utils = /*#__PURE__*/__commonJS({
  "external/npm/node_modules/domino/lib/utils.js"(exports) {

    var DOMException = require_DOMException();
    var ERR = DOMException;
    var isApiWritable = require_config().isApiWritable;
    exports.NAMESPACE = {
      HTML: "http://www.w3.org/1999/xhtml",
      XML: "http://www.w3.org/XML/1998/namespace",
      XMLNS: "http://www.w3.org/2000/xmlns/",
      MATHML: "http://www.w3.org/1998/Math/MathML",
      SVG: "http://www.w3.org/2000/svg",
      XLINK: "http://www.w3.org/1999/xlink"
    };
    exports.IndexSizeError = function () {
      throw new DOMException(ERR.INDEX_SIZE_ERR);
    };
    exports.HierarchyRequestError = function () {
      throw new DOMException(ERR.HIERARCHY_REQUEST_ERR);
    };
    exports.WrongDocumentError = function () {
      throw new DOMException(ERR.WRONG_DOCUMENT_ERR);
    };
    exports.InvalidCharacterError = function () {
      throw new DOMException(ERR.INVALID_CHARACTER_ERR);
    };
    exports.NoModificationAllowedError = function () {
      throw new DOMException(ERR.NO_MODIFICATION_ALLOWED_ERR);
    };
    exports.NotFoundError = function () {
      throw new DOMException(ERR.NOT_FOUND_ERR);
    };
    exports.NotSupportedError = function () {
      throw new DOMException(ERR.NOT_SUPPORTED_ERR);
    };
    exports.InvalidStateError = function () {
      throw new DOMException(ERR.INVALID_STATE_ERR);
    };
    exports.SyntaxError = function () {
      throw new DOMException(ERR.SYNTAX_ERR);
    };
    exports.InvalidModificationError = function () {
      throw new DOMException(ERR.INVALID_MODIFICATION_ERR);
    };
    exports.NamespaceError = function () {
      throw new DOMException(ERR.NAMESPACE_ERR);
    };
    exports.InvalidAccessError = function () {
      throw new DOMException(ERR.INVALID_ACCESS_ERR);
    };
    exports.TypeMismatchError = function () {
      throw new DOMException(ERR.TYPE_MISMATCH_ERR);
    };
    exports.SecurityError = function () {
      throw new DOMException(ERR.SECURITY_ERR);
    };
    exports.NetworkError = function () {
      throw new DOMException(ERR.NETWORK_ERR);
    };
    exports.AbortError = function () {
      throw new DOMException(ERR.ABORT_ERR);
    };
    exports.UrlMismatchError = function () {
      throw new DOMException(ERR.URL_MISMATCH_ERR);
    };
    exports.QuotaExceededError = function () {
      throw new DOMException(ERR.QUOTA_EXCEEDED_ERR);
    };
    exports.TimeoutError = function () {
      throw new DOMException(ERR.TIMEOUT_ERR);
    };
    exports.InvalidNodeTypeError = function () {
      throw new DOMException(ERR.INVALID_NODE_TYPE_ERR);
    };
    exports.DataCloneError = function () {
      throw new DOMException(ERR.DATA_CLONE_ERR);
    };
    exports.nyi = function () {
      throw new Error("NotYetImplemented");
    };
    exports.shouldOverride = function () {
      throw new Error("Abstract function; should be overriding in subclass.");
    };
    exports.assert = function (expr, msg) {
      if (!expr) {
        throw new Error("Assertion failed: " + (msg || "") + "\n" + new Error().stack);
      }
    };
    exports.expose = function (src, c) {
      for (var n in src) {
        Object.defineProperty(c.prototype, n, {
          value: src[n],
          writable: isApiWritable
        });
      }
    };
    exports.merge = function (a, b) {
      for (var n in b) {
        a[n] = b[n];
      }
    };
    exports.documentOrder = function (n, m) {
      return 3 - (n.compareDocumentPosition(m) & 6);
    };
    exports.toASCIILowerCase = function (s) {
      return s.replace(/[A-Z]+/g, function (c) {
        return c.toLowerCase();
      });
    };
    exports.toASCIIUpperCase = function (s) {
      return s.replace(/[a-z]+/g, function (c) {
        return c.toUpperCase();
      });
    };
  }
});

// external/npm/node_modules/domino/lib/EventTarget.js
var require_EventTarget = /*#__PURE__*/__commonJS({
  "external/npm/node_modules/domino/lib/EventTarget.js"(exports, module) {

    var Event = require_Event();
    var MouseEvent = require_MouseEvent();
    var utils = require_utils();
    module.exports = EventTarget;
    function EventTarget() {}
    EventTarget.prototype = {
      addEventListener: function addEventListener(type, listener, capture) {
        if (!listener) return;
        if (capture === void 0) capture = false;
        if (!this._listeners) this._listeners = /* @__PURE__ */Object.create(null);
        if (!this._listeners[type]) this._listeners[type] = [];
        var list = this._listeners[type];
        for (var i = 0, n = list.length; i < n; i++) {
          var l = list[i];
          if (l.listener === listener && l.capture === capture) return;
        }
        var obj = {
          listener,
          capture
        };
        if (typeof listener === "function") obj.f = listener;
        list.push(obj);
      },
      removeEventListener: function removeEventListener(type, listener, capture) {
        if (capture === void 0) capture = false;
        if (this._listeners) {
          var list = this._listeners[type];
          if (list) {
            for (var i = 0, n = list.length; i < n; i++) {
              var l = list[i];
              if (l.listener === listener && l.capture === capture) {
                if (list.length === 1) {
                  this._listeners[type] = void 0;
                } else {
                  list.splice(i, 1);
                }
                return;
              }
            }
          }
        }
      },
      dispatchEvent: function dispatchEvent(event) {
        return this._dispatchEvent(event, false);
      },
      _dispatchEvent: function _dispatchEvent(event, trusted) {
        if (typeof trusted !== "boolean") trusted = false;
        function invoke(target, event2) {
          var type = event2.type,
            phase = event2.eventPhase;
          event2.currentTarget = target;
          if (phase !== Event.CAPTURING_PHASE && target._handlers && target._handlers[type]) {
            var handler = target._handlers[type];
            var rv;
            if (typeof handler === "function") {
              rv = handler.call(event2.currentTarget, event2);
            } else {
              var f = handler.handleEvent;
              if (typeof f !== "function") throw new TypeError("handleEvent property of event handler object isnot a function.");
              rv = f.call(handler, event2);
            }
            switch (event2.type) {
              case "mouseover":
                if (rv === true) event2.preventDefault();
                break;
              case "beforeunload":
              default:
                if (rv === false) event2.preventDefault();
                break;
            }
          }
          var list = target._listeners && target._listeners[type];
          if (!list) return;
          list = list.slice();
          for (var i2 = 0, n2 = list.length; i2 < n2; i2++) {
            if (event2._immediatePropagationStopped) return;
            var l = list[i2];
            if (phase === Event.CAPTURING_PHASE && !l.capture || phase === Event.BUBBLING_PHASE && l.capture) continue;
            if (l.f) {
              l.f.call(event2.currentTarget, event2);
            } else {
              var fn = l.listener.handleEvent;
              if (typeof fn !== "function") throw new TypeError("handleEvent property of event listener object is not a function.");
              fn.call(l.listener, event2);
            }
          }
        }
        if (!event._initialized || event._dispatching) utils.InvalidStateError();
        event.isTrusted = trusted;
        event._dispatching = true;
        event.target = this;
        var ancestors = [];
        for (var n = this.parentNode; n; n = n.parentNode) ancestors.push(n);
        event.eventPhase = Event.CAPTURING_PHASE;
        for (var i = ancestors.length - 1; i >= 0; i--) {
          invoke(ancestors[i], event);
          if (event._propagationStopped) break;
        }
        if (!event._propagationStopped) {
          event.eventPhase = Event.AT_TARGET;
          invoke(this, event);
        }
        if (event.bubbles && !event._propagationStopped) {
          event.eventPhase = Event.BUBBLING_PHASE;
          for (var ii = 0, nn = ancestors.length; ii < nn; ii++) {
            invoke(ancestors[ii], event);
            if (event._propagationStopped) break;
          }
        }
        event._dispatching = false;
        event.eventPhase = Event.AT_TARGET;
        event.currentTarget = null;
        if (trusted && !event.defaultPrevented && event instanceof MouseEvent) {
          switch (event.type) {
            case "mousedown":
              this._armed = {
                x: event.clientX,
                y: event.clientY,
                t: event.timeStamp
              };
              break;
            case "mouseout":
            case "mouseover":
              this._armed = null;
              break;
            case "mouseup":
              if (this._isClick(event)) this._doClick(event);
              this._armed = null;
              break;
          }
        }
        return !event.defaultPrevented;
      },
      _isClick: function (event) {
        return this._armed !== null && event.type === "mouseup" && event.isTrusted && event.button === 0 && event.timeStamp - this._armed.t < 1e3 && Math.abs(event.clientX - this._armed.x) < 10 && Math.abs(event.clientY - this._armed.Y) < 10;
      },
      _doClick: function (event) {
        if (this._click_in_progress) return;
        this._click_in_progress = true;
        var activated = this;
        while (activated && !activated._post_click_activation_steps) activated = activated.parentNode;
        if (activated && activated._pre_click_activation_steps) {
          activated._pre_click_activation_steps();
        }
        var click = this.ownerDocument.createEvent("MouseEvent");
        click.initMouseEvent("click", true, true, this.ownerDocument.defaultView, 1, event.screenX, event.screenY, event.clientX, event.clientY, event.ctrlKey, event.altKey, event.shiftKey, event.metaKey, event.button, null);
        var result = this._dispatchEvent(click, true);
        if (activated) {
          if (result) {
            if (activated._post_click_activation_steps) activated._post_click_activation_steps(click);
          } else {
            if (activated._cancelled_activation_steps) activated._cancelled_activation_steps();
          }
        }
      },
      _setEventHandler: function _setEventHandler(type, handler) {
        if (!this._handlers) this._handlers = /* @__PURE__ */Object.create(null);
        this._handlers[type] = handler;
      },
      _getEventHandler: function _getEventHandler(type) {
        return this._handlers && this._handlers[type] || null;
      }
    };
  }
});

// external/npm/node_modules/domino/lib/LinkedList.js
var require_LinkedList = /*#__PURE__*/__commonJS({
  "external/npm/node_modules/domino/lib/LinkedList.js"(exports, module) {

    var utils = require_utils();
    var LinkedList = module.exports = {
      valid: function (a) {
        utils.assert(a, "list falsy");
        utils.assert(a._previousSibling, "previous falsy");
        utils.assert(a._nextSibling, "next falsy");
        return true;
      },
      insertBefore: function (a, b) {
        utils.assert(LinkedList.valid(a) && LinkedList.valid(b));
        var a_first = a,
          a_last = a._previousSibling;
        var b_first = b,
          b_last = b._previousSibling;
        a_first._previousSibling = b_last;
        a_last._nextSibling = b_first;
        b_last._nextSibling = a_first;
        b_first._previousSibling = a_last;
        utils.assert(LinkedList.valid(a) && LinkedList.valid(b));
      },
      replace: function (a, b) {
        utils.assert(LinkedList.valid(a) && (b === null || LinkedList.valid(b)));
        if (b !== null) {
          LinkedList.insertBefore(b, a);
        }
        LinkedList.remove(a);
        utils.assert(LinkedList.valid(a) && (b === null || LinkedList.valid(b)));
      },
      remove: function (a) {
        utils.assert(LinkedList.valid(a));
        var prev = a._previousSibling;
        if (prev === a) {
          return;
        }
        var next = a._nextSibling;
        prev._nextSibling = next;
        next._previousSibling = prev;
        a._previousSibling = a._nextSibling = a;
        utils.assert(LinkedList.valid(a));
      }
    };
  }
});

// external/npm/node_modules/domino/lib/NodeUtils.js
var require_NodeUtils = /*#__PURE__*/__commonJS({
  "external/npm/node_modules/domino/lib/NodeUtils.js"(exports, module) {

    module.exports = {
      serializeOne
    };
    var utils = require_utils();
    var NAMESPACE = utils.NAMESPACE;
    var hasRawContent = {
      STYLE: true,
      SCRIPT: true,
      XMP: true,
      IFRAME: true,
      NOEMBED: true,
      NOFRAMES: true,
      PLAINTEXT: true
    };
    var emptyElements = {
      area: true,
      base: true,
      basefont: true,
      bgsound: true,
      br: true,
      col: true,
      embed: true,
      frame: true,
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
    var extraNewLine = {};
    function escape(s) {
      return s.replace(/[&<>\u00A0]/g, function (c) {
        switch (c) {
          case "&":
            return "&amp;";
          case "<":
            return "&lt;";
          case ">":
            return "&gt;";
          case "\xA0":
            return "&nbsp;";
        }
      });
    }
    function escapeAttr(s) {
      var toEscape = /[&"\u00A0]/g;
      if (!toEscape.test(s)) {
        return s;
      } else {
        return s.replace(toEscape, function (c) {
          switch (c) {
            case "&":
              return "&amp;";
            case '"':
              return "&quot;";
            case "\xA0":
              return "&nbsp;";
          }
        });
      }
    }
    function attrname(a) {
      var ns = a.namespaceURI;
      if (!ns) return a.localName;
      if (ns === NAMESPACE.XML) return "xml:" + a.localName;
      if (ns === NAMESPACE.XLINK) return "xlink:" + a.localName;
      if (ns === NAMESPACE.XMLNS) {
        if (a.localName === "xmlns") return "xmlns";else return "xmlns:" + a.localName;
      }
      return a.name;
    }
    function serializeOne(kid, parent) {
      var s = "";
      switch (kid.nodeType) {
        case 1:
          var ns = kid.namespaceURI;
          var html = ns === NAMESPACE.HTML;
          var tagname = html || ns === NAMESPACE.SVG || ns === NAMESPACE.MATHML ? kid.localName : kid.tagName;
          s += "<" + tagname;
          for (var j = 0, k = kid._numattrs; j < k; j++) {
            var a = kid._attr(j);
            s += " " + attrname(a);
            if (a.value !== void 0) s += '="' + escapeAttr(a.value) + '"';
          }
          s += ">";
          if (!(html && emptyElements[tagname])) {
            var ss = kid.serialize();
            if (html && extraNewLine[tagname] && ss.charAt(0) === "\n") s += "\n";
            s += ss;
            s += "</" + tagname + ">";
          }
          break;
        case 3:
        case 4:
          var parenttag;
          if (parent.nodeType === 1 && parent.namespaceURI === NAMESPACE.HTML) parenttag = parent.tagName;else parenttag = "";
          if (hasRawContent[parenttag] || parenttag === "NOSCRIPT" && parent.ownerDocument._scripting_enabled) {
            s += kid.data;
          } else {
            s += escape(kid.data);
          }
          break;
        case 8:
          s += "<!--" + kid.data + "-->";
          break;
        case 7:
          s += "<?" + kid.target + " " + kid.data + "?>";
          break;
        case 10:
          s += "<!DOCTYPE " + kid.name;
          s += ">";
          break;
        default:
          utils.InvalidStateError();
      }
      return s;
    }
  }
});

// external/npm/node_modules/domino/lib/Node.js
var require_Node = /*#__PURE__*/__commonJS({
  "external/npm/node_modules/domino/lib/Node.js"(exports, module) {

    module.exports = Node;
    var EventTarget = require_EventTarget();
    var LinkedList = require_LinkedList();
    var NodeUtils = require_NodeUtils();
    var utils = require_utils();
    function Node() {
      EventTarget.call(this);
      this.parentNode = null;
      this._nextSibling = this._previousSibling = this;
      this._index = void 0;
    }
    var ELEMENT_NODE = Node.ELEMENT_NODE = 1;
    var ATTRIBUTE_NODE = Node.ATTRIBUTE_NODE = 2;
    var TEXT_NODE = Node.TEXT_NODE = 3;
    var CDATA_SECTION_NODE = Node.CDATA_SECTION_NODE = 4;
    var ENTITY_REFERENCE_NODE = Node.ENTITY_REFERENCE_NODE = 5;
    var ENTITY_NODE = Node.ENTITY_NODE = 6;
    var PROCESSING_INSTRUCTION_NODE = Node.PROCESSING_INSTRUCTION_NODE = 7;
    var COMMENT_NODE = Node.COMMENT_NODE = 8;
    var DOCUMENT_NODE = Node.DOCUMENT_NODE = 9;
    var DOCUMENT_TYPE_NODE = Node.DOCUMENT_TYPE_NODE = 10;
    var DOCUMENT_FRAGMENT_NODE = Node.DOCUMENT_FRAGMENT_NODE = 11;
    var NOTATION_NODE = Node.NOTATION_NODE = 12;
    var DOCUMENT_POSITION_DISCONNECTED = Node.DOCUMENT_POSITION_DISCONNECTED = 1;
    var DOCUMENT_POSITION_PRECEDING = Node.DOCUMENT_POSITION_PRECEDING = 2;
    var DOCUMENT_POSITION_FOLLOWING = Node.DOCUMENT_POSITION_FOLLOWING = 4;
    var DOCUMENT_POSITION_CONTAINS = Node.DOCUMENT_POSITION_CONTAINS = 8;
    var DOCUMENT_POSITION_CONTAINED_BY = Node.DOCUMENT_POSITION_CONTAINED_BY = 16;
    var DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC = Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC = 32;
    Node.prototype = Object.create(EventTarget.prototype, {
      baseURI: {
        get: utils.nyi
      },
      parentElement: {
        get: function () {
          return this.parentNode && this.parentNode.nodeType === ELEMENT_NODE ? this.parentNode : null;
        }
      },
      hasChildNodes: {
        value: utils.shouldOverride
      },
      firstChild: {
        get: utils.shouldOverride
      },
      lastChild: {
        get: utils.shouldOverride
      },
      isConnected: {
        get: function () {
          let node = this;
          while (node != null) {
            if (node.nodeType === Node.DOCUMENT_NODE) {
              return true;
            }
            node = node.parentNode;
            if (node != null && node.nodeType === Node.DOCUMENT_FRAGMENT_NODE) {
              node = node.host;
            }
          }
          return false;
        }
      },
      previousSibling: {
        get: function () {
          var parent = this.parentNode;
          if (!parent) return null;
          if (this === parent.firstChild) return null;
          return this._previousSibling;
        }
      },
      nextSibling: {
        get: function () {
          var parent = this.parentNode,
            next = this._nextSibling;
          if (!parent) return null;
          if (next === parent.firstChild) return null;
          return next;
        }
      },
      textContent: {
        get: function () {
          return null;
        },
        set: function (v) {}
      },
      innerText: {
        get: function () {
          return null;
        },
        set: function (v) {}
      },
      _countChildrenOfType: {
        value: function (type) {
          var sum = 0;
          for (var kid = this.firstChild; kid !== null; kid = kid.nextSibling) {
            if (kid.nodeType === type) sum++;
          }
          return sum;
        }
      },
      _ensureInsertValid: {
        value: function _ensureInsertValid(node, child, isPreinsert) {
          var parent = this,
            i,
            kid;
          if (!node.nodeType) throw new TypeError("not a node");
          switch (parent.nodeType) {
            case DOCUMENT_NODE:
            case DOCUMENT_FRAGMENT_NODE:
            case ELEMENT_NODE:
              break;
            default:
              utils.HierarchyRequestError();
          }
          if (node.isAncestor(parent)) utils.HierarchyRequestError();
          if (child !== null || !isPreinsert) {
            if (child.parentNode !== parent) utils.NotFoundError();
          }
          switch (node.nodeType) {
            case DOCUMENT_FRAGMENT_NODE:
            case DOCUMENT_TYPE_NODE:
            case ELEMENT_NODE:
            case TEXT_NODE:
            case PROCESSING_INSTRUCTION_NODE:
            case COMMENT_NODE:
              break;
            default:
              utils.HierarchyRequestError();
          }
          if (parent.nodeType === DOCUMENT_NODE) {
            switch (node.nodeType) {
              case TEXT_NODE:
                utils.HierarchyRequestError();
                break;
              case DOCUMENT_FRAGMENT_NODE:
                if (node._countChildrenOfType(TEXT_NODE) > 0) utils.HierarchyRequestError();
                switch (node._countChildrenOfType(ELEMENT_NODE)) {
                  case 0:
                    break;
                  case 1:
                    if (child !== null) {
                      if (isPreinsert && child.nodeType === DOCUMENT_TYPE_NODE) utils.HierarchyRequestError();
                      for (kid = child.nextSibling; kid !== null; kid = kid.nextSibling) {
                        if (kid.nodeType === DOCUMENT_TYPE_NODE) utils.HierarchyRequestError();
                      }
                    }
                    i = parent._countChildrenOfType(ELEMENT_NODE);
                    if (isPreinsert) {
                      if (i > 0) utils.HierarchyRequestError();
                    } else {
                      if (i > 1 || i === 1 && child.nodeType !== ELEMENT_NODE) utils.HierarchyRequestError();
                    }
                    break;
                  default:
                    utils.HierarchyRequestError();
                }
                break;
              case ELEMENT_NODE:
                if (child !== null) {
                  if (isPreinsert && child.nodeType === DOCUMENT_TYPE_NODE) utils.HierarchyRequestError();
                  for (kid = child.nextSibling; kid !== null; kid = kid.nextSibling) {
                    if (kid.nodeType === DOCUMENT_TYPE_NODE) utils.HierarchyRequestError();
                  }
                }
                i = parent._countChildrenOfType(ELEMENT_NODE);
                if (isPreinsert) {
                  if (i > 0) utils.HierarchyRequestError();
                } else {
                  if (i > 1 || i === 1 && child.nodeType !== ELEMENT_NODE) utils.HierarchyRequestError();
                }
                break;
              case DOCUMENT_TYPE_NODE:
                if (child === null) {
                  if (parent._countChildrenOfType(ELEMENT_NODE)) utils.HierarchyRequestError();
                } else {
                  for (kid = parent.firstChild; kid !== null; kid = kid.nextSibling) {
                    if (kid === child) break;
                    if (kid.nodeType === ELEMENT_NODE) utils.HierarchyRequestError();
                  }
                }
                i = parent._countChildrenOfType(DOCUMENT_TYPE_NODE);
                if (isPreinsert) {
                  if (i > 0) utils.HierarchyRequestError();
                } else {
                  if (i > 1 || i === 1 && child.nodeType !== DOCUMENT_TYPE_NODE) utils.HierarchyRequestError();
                }
                break;
            }
          } else {
            if (node.nodeType === DOCUMENT_TYPE_NODE) utils.HierarchyRequestError();
          }
        }
      },
      insertBefore: {
        value: function insertBefore(node, child) {
          var parent = this;
          parent._ensureInsertValid(node, child, true);
          var refChild = child;
          if (refChild === node) {
            refChild = node.nextSibling;
          }
          parent.doc.adoptNode(node);
          node._insertOrReplace(parent, refChild, false);
          return node;
        }
      },
      appendChild: {
        value: function (child) {
          return this.insertBefore(child, null);
        }
      },
      _appendChild: {
        value: function (child) {
          child._insertOrReplace(this, null, false);
        }
      },
      removeChild: {
        value: function removeChild(child) {
          var parent = this;
          if (!child.nodeType) throw new TypeError("not a node");
          if (child.parentNode !== parent) utils.NotFoundError();
          child.remove();
          return child;
        }
      },
      replaceChild: {
        value: function replaceChild(node, child) {
          var parent = this;
          parent._ensureInsertValid(node, child, false);
          if (node.doc !== parent.doc) {
            parent.doc.adoptNode(node);
          }
          node._insertOrReplace(parent, child, true);
          return child;
        }
      },
      contains: {
        value: function contains(node) {
          if (node === null) {
            return false;
          }
          if (this === node) {
            return true;
          }
          return (this.compareDocumentPosition(node) & DOCUMENT_POSITION_CONTAINED_BY) !== 0;
        }
      },
      compareDocumentPosition: {
        value: function compareDocumentPosition(that) {
          if (this === that) return 0;
          if (this.doc !== that.doc || this.rooted !== that.rooted) return DOCUMENT_POSITION_DISCONNECTED + DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC;
          var these = [],
            those = [];
          for (var n = this; n !== null; n = n.parentNode) these.push(n);
          for (n = that; n !== null; n = n.parentNode) those.push(n);
          these.reverse();
          those.reverse();
          if (these[0] !== those[0]) return DOCUMENT_POSITION_DISCONNECTED + DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC;
          n = Math.min(these.length, those.length);
          for (var i = 1; i < n; i++) {
            if (these[i] !== those[i]) {
              if (these[i].index < those[i].index) return DOCUMENT_POSITION_FOLLOWING;else return DOCUMENT_POSITION_PRECEDING;
            }
          }
          if (these.length < those.length) return DOCUMENT_POSITION_FOLLOWING + DOCUMENT_POSITION_CONTAINED_BY;else return DOCUMENT_POSITION_PRECEDING + DOCUMENT_POSITION_CONTAINS;
        }
      },
      isSameNode: {
        value: function isSameNode(node) {
          return this === node;
        }
      },
      isEqualNode: {
        value: function isEqualNode(node) {
          if (!node) return false;
          if (node.nodeType !== this.nodeType) return false;
          if (!this.isEqual(node)) return false;
          for (var c1 = this.firstChild, c2 = node.firstChild; c1 && c2; c1 = c1.nextSibling, c2 = c2.nextSibling) {
            if (!c1.isEqualNode(c2)) return false;
          }
          return c1 === null && c2 === null;
        }
      },
      cloneNode: {
        value: function (deep) {
          var clone = this.clone();
          if (deep) {
            for (var kid = this.firstChild; kid !== null; kid = kid.nextSibling) {
              clone._appendChild(kid.cloneNode(true));
            }
          }
          return clone;
        }
      },
      lookupPrefix: {
        value: function lookupPrefix(ns) {
          var e;
          if (ns === "" || ns === null || ns === void 0) return null;
          switch (this.nodeType) {
            case ELEMENT_NODE:
              return this._lookupNamespacePrefix(ns, this);
            case DOCUMENT_NODE:
              e = this.documentElement;
              return e ? e.lookupPrefix(ns) : null;
            case ENTITY_NODE:
            case NOTATION_NODE:
            case DOCUMENT_FRAGMENT_NODE:
            case DOCUMENT_TYPE_NODE:
              return null;
            case ATTRIBUTE_NODE:
              e = this.ownerElement;
              return e ? e.lookupPrefix(ns) : null;
            default:
              e = this.parentElement;
              return e ? e.lookupPrefix(ns) : null;
          }
        }
      },
      lookupNamespaceURI: {
        value: function lookupNamespaceURI(prefix) {
          if (prefix === "" || prefix === void 0) {
            prefix = null;
          }
          var e;
          switch (this.nodeType) {
            case ELEMENT_NODE:
              return utils.shouldOverride();
            case DOCUMENT_NODE:
              e = this.documentElement;
              return e ? e.lookupNamespaceURI(prefix) : null;
            case ENTITY_NODE:
            case NOTATION_NODE:
            case DOCUMENT_TYPE_NODE:
            case DOCUMENT_FRAGMENT_NODE:
              return null;
            case ATTRIBUTE_NODE:
              e = this.ownerElement;
              return e ? e.lookupNamespaceURI(prefix) : null;
            default:
              e = this.parentElement;
              return e ? e.lookupNamespaceURI(prefix) : null;
          }
        }
      },
      isDefaultNamespace: {
        value: function isDefaultNamespace(ns) {
          if (ns === "" || ns === void 0) {
            ns = null;
          }
          var defaultNamespace = this.lookupNamespaceURI(null);
          return defaultNamespace === ns;
        }
      },
      index: {
        get: function () {
          var parent = this.parentNode;
          if (this === parent.firstChild) return 0;
          var kids = parent.childNodes;
          if (this._index === void 0 || kids[this._index] !== this) {
            for (var i = 0; i < kids.length; i++) {
              kids[i]._index = i;
            }
            utils.assert(kids[this._index] === this);
          }
          return this._index;
        }
      },
      isAncestor: {
        value: function (that) {
          if (this.doc !== that.doc) return false;
          if (this.rooted !== that.rooted) return false;
          for (var e = that; e; e = e.parentNode) {
            if (e === this) return true;
          }
          return false;
        }
      },
      ensureSameDoc: {
        value: function (that) {
          if (that.ownerDocument === null) {
            that.ownerDocument = this.doc;
          } else if (that.ownerDocument !== this.doc) {
            utils.WrongDocumentError();
          }
        }
      },
      removeChildren: {
        value: utils.shouldOverride
      },
      _insertOrReplace: {
        value: function _insertOrReplace(parent, before, isReplace) {
          var child = this,
            before_index,
            i;
          if (child.nodeType === DOCUMENT_FRAGMENT_NODE && child.rooted) {
            utils.HierarchyRequestError();
          }
          if (parent._childNodes) {
            before_index = before === null ? parent._childNodes.length : before.index;
            if (child.parentNode === parent) {
              var child_index = child.index;
              if (child_index < before_index) {
                before_index--;
              }
            }
          }
          if (isReplace) {
            if (before.rooted) before.doc.mutateRemove(before);
            before.parentNode = null;
          }
          var n = before;
          if (n === null) {
            n = parent.firstChild;
          }
          var bothRooted = child.rooted && parent.rooted;
          if (child.nodeType === DOCUMENT_FRAGMENT_NODE) {
            var spliceArgs = [0, isReplace ? 1 : 0],
              next;
            for (var kid = child.firstChild; kid !== null; kid = next) {
              next = kid.nextSibling;
              spliceArgs.push(kid);
              kid.parentNode = parent;
            }
            var len = spliceArgs.length;
            if (isReplace) {
              LinkedList.replace(n, len > 2 ? spliceArgs[2] : null);
            } else if (len > 2 && n !== null) {
              LinkedList.insertBefore(spliceArgs[2], n);
            }
            if (parent._childNodes) {
              spliceArgs[0] = before === null ? parent._childNodes.length : before._index;
              parent._childNodes.splice.apply(parent._childNodes, spliceArgs);
              for (i = 2; i < len; i++) {
                spliceArgs[i]._index = spliceArgs[0] + (i - 2);
              }
            } else if (parent._firstChild === before) {
              if (len > 2) {
                parent._firstChild = spliceArgs[2];
              } else if (isReplace) {
                parent._firstChild = null;
              }
            }
            if (child._childNodes) {
              child._childNodes.length = 0;
            } else {
              child._firstChild = null;
            }
            if (parent.rooted) {
              parent.modify();
              for (i = 2; i < len; i++) {
                parent.doc.mutateInsert(spliceArgs[i]);
              }
            }
          } else {
            if (before === child) {
              return;
            }
            if (bothRooted) {
              child._remove();
            } else if (child.parentNode) {
              child.remove();
            }
            child.parentNode = parent;
            if (isReplace) {
              LinkedList.replace(n, child);
              if (parent._childNodes) {
                child._index = before_index;
                parent._childNodes[before_index] = child;
              } else if (parent._firstChild === before) {
                parent._firstChild = child;
              }
            } else {
              if (n !== null) {
                LinkedList.insertBefore(child, n);
              }
              if (parent._childNodes) {
                child._index = before_index;
                parent._childNodes.splice(before_index, 0, child);
              } else if (parent._firstChild === before) {
                parent._firstChild = child;
              }
            }
            if (bothRooted) {
              parent.modify();
              parent.doc.mutateMove(child);
            } else if (parent.rooted) {
              parent.modify();
              parent.doc.mutateInsert(child);
            }
          }
        }
      },
      lastModTime: {
        get: function () {
          if (!this._lastModTime) {
            this._lastModTime = this.doc.modclock;
          }
          return this._lastModTime;
        }
      },
      modify: {
        value: function () {
          if (this.doc.modclock) {
            var time = ++this.doc.modclock;
            for (var n = this; n; n = n.parentElement) {
              if (n._lastModTime) {
                n._lastModTime = time;
              }
            }
          }
        }
      },
      doc: {
        get: function () {
          return this.ownerDocument || this;
        }
      },
      rooted: {
        get: function () {
          return !!this._nid;
        }
      },
      normalize: {
        value: function () {
          var next;
          for (var child = this.firstChild; child !== null; child = next) {
            next = child.nextSibling;
            if (child.normalize) {
              child.normalize();
            }
            if (child.nodeType !== Node.TEXT_NODE) {
              continue;
            }
            if (child.nodeValue === "") {
              this.removeChild(child);
              continue;
            }
            var prevChild = child.previousSibling;
            if (prevChild === null) {
              continue;
            } else if (prevChild.nodeType === Node.TEXT_NODE) {
              prevChild.appendData(child.nodeValue);
              this.removeChild(child);
            }
          }
        }
      },
      serialize: {
        value: function () {
          if (this._innerHTML) {
            return this._innerHTML;
          }
          var s = "";
          for (var kid = this.firstChild; kid !== null; kid = kid.nextSibling) {
            s += NodeUtils.serializeOne(kid, this);
          }
          return s;
        }
      },
      outerHTML: {
        get: function () {
          return NodeUtils.serializeOne(this, {
            nodeType: 0
          });
        },
        set: utils.nyi
      },
      ELEMENT_NODE: {
        value: ELEMENT_NODE
      },
      ATTRIBUTE_NODE: {
        value: ATTRIBUTE_NODE
      },
      TEXT_NODE: {
        value: TEXT_NODE
      },
      CDATA_SECTION_NODE: {
        value: CDATA_SECTION_NODE
      },
      ENTITY_REFERENCE_NODE: {
        value: ENTITY_REFERENCE_NODE
      },
      ENTITY_NODE: {
        value: ENTITY_NODE
      },
      PROCESSING_INSTRUCTION_NODE: {
        value: PROCESSING_INSTRUCTION_NODE
      },
      COMMENT_NODE: {
        value: COMMENT_NODE
      },
      DOCUMENT_NODE: {
        value: DOCUMENT_NODE
      },
      DOCUMENT_TYPE_NODE: {
        value: DOCUMENT_TYPE_NODE
      },
      DOCUMENT_FRAGMENT_NODE: {
        value: DOCUMENT_FRAGMENT_NODE
      },
      NOTATION_NODE: {
        value: NOTATION_NODE
      },
      DOCUMENT_POSITION_DISCONNECTED: {
        value: DOCUMENT_POSITION_DISCONNECTED
      },
      DOCUMENT_POSITION_PRECEDING: {
        value: DOCUMENT_POSITION_PRECEDING
      },
      DOCUMENT_POSITION_FOLLOWING: {
        value: DOCUMENT_POSITION_FOLLOWING
      },
      DOCUMENT_POSITION_CONTAINS: {
        value: DOCUMENT_POSITION_CONTAINS
      },
      DOCUMENT_POSITION_CONTAINED_BY: {
        value: DOCUMENT_POSITION_CONTAINED_BY
      },
      DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC: {
        value: DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC
      }
    });
  }
});

// external/npm/node_modules/domino/lib/NodeList.es6.js
var require_NodeList_es6 = /*#__PURE__*/__commonJS({
  "external/npm/node_modules/domino/lib/NodeList.es6.js"(exports, module) {

    module.exports = class NodeList extends Array {
      constructor(a) {
        super(a && a.length || 0);
        if (a) {
          for (var idx in a) {
            this[idx] = a[idx];
          }
        }
      }
      item(i) {
        return this[i] || null;
      }
    };
  }
});

// external/npm/node_modules/domino/lib/NodeList.es5.js
var require_NodeList_es5 = /*#__PURE__*/__commonJS({
  "external/npm/node_modules/domino/lib/NodeList.es5.js"(exports, module) {

    function item(i) {
      return this[i] || null;
    }
    function NodeList(a) {
      if (!a) a = [];
      a.item = item;
      return a;
    }
    module.exports = NodeList;
  }
});

// external/npm/node_modules/domino/lib/NodeList.js
var require_NodeList = /*#__PURE__*/__commonJS({
  "external/npm/node_modules/domino/lib/NodeList.js"(exports, module) {

    var NodeList;
    try {
      NodeList = require_NodeList_es6();
    } catch (e) {
      NodeList = require_NodeList_es5();
    }
    module.exports = NodeList;
  }
});

// external/npm/node_modules/domino/lib/ContainerNode.js
var require_ContainerNode = /*#__PURE__*/__commonJS({
  "external/npm/node_modules/domino/lib/ContainerNode.js"(exports, module) {

    module.exports = ContainerNode;
    var Node = require_Node();
    var NodeList = require_NodeList();
    function ContainerNode() {
      Node.call(this);
      this._firstChild = this._childNodes = null;
    }
    ContainerNode.prototype = Object.create(Node.prototype, {
      hasChildNodes: {
        value: function () {
          if (this._childNodes) {
            return this._childNodes.length > 0;
          }
          return this._firstChild !== null;
        }
      },
      childNodes: {
        get: function () {
          this._ensureChildNodes();
          return this._childNodes;
        }
      },
      firstChild: {
        get: function () {
          if (this._childNodes) {
            return this._childNodes.length === 0 ? null : this._childNodes[0];
          }
          return this._firstChild;
        }
      },
      lastChild: {
        get: function () {
          var kids = this._childNodes,
            first;
          if (kids) {
            return kids.length === 0 ? null : kids[kids.length - 1];
          }
          first = this._firstChild;
          if (first === null) {
            return null;
          }
          return first._previousSibling;
        }
      },
      _ensureChildNodes: {
        value: function () {
          if (this._childNodes) {
            return;
          }
          var first = this._firstChild,
            kid = first,
            childNodes = this._childNodes = new NodeList();
          if (first) do {
            childNodes.push(kid);
            kid = kid._nextSibling;
          } while (kid !== first);
          this._firstChild = null;
        }
      },
      removeChildren: {
        value: function removeChildren() {
          var root = this.rooted ? this.ownerDocument : null,
            next = this.firstChild,
            kid;
          while (next !== null) {
            kid = next;
            next = kid.nextSibling;
            if (root) root.mutateRemove(kid);
            kid.parentNode = null;
          }
          if (this._childNodes) {
            this._childNodes.length = 0;
          } else {
            this._firstChild = null;
          }
          this.modify();
        }
      }
    });
  }
});

// external/npm/node_modules/domino/lib/xmlnames.js
var require_xmlnames = /*#__PURE__*/__commonJS({
  "external/npm/node_modules/domino/lib/xmlnames.js"(exports) {

    exports.isValidName = isValidName;
    exports.isValidQName = isValidQName;
    var simplename = /^[_:A-Za-z][-.:\w]+$/;
    var simpleqname = /^([_A-Za-z][-.\w]+|[_A-Za-z][-.\w]+:[_A-Za-z][-.\w]+)$/;
    var ncnamestartchars = "_A-Za-z\xC0-\xD6\xD8-\xF6\xF8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD";
    var ncnamechars = "-._A-Za-z0-9\xB7\xC0-\xD6\xD8-\xF6\xF8-\u02FF\u0300-\u037D\u037F-\u1FFF\u200C\u200D\u203F\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD";
    var ncname = "[" + ncnamestartchars + "][" + ncnamechars + "]*";
    var namestartchars = ncnamestartchars + ":";
    var namechars = ncnamechars + ":";
    var name = new RegExp("^[" + namestartchars + "][" + namechars + "]*$");
    var qname = new RegExp("^(" + ncname + "|" + ncname + ":" + ncname + ")$");
    var hassurrogates = /[\uD800-\uDB7F\uDC00-\uDFFF]/;
    var surrogatechars = /[\uD800-\uDB7F\uDC00-\uDFFF]/g;
    var surrogatepairs = /[\uD800-\uDB7F][\uDC00-\uDFFF]/g;
    ncnamestartchars += "\uD800-\u{EFC00}-\uDFFF";
    ncnamechars += "\uD800-\u{EFC00}-\uDFFF";
    ncname = "[" + ncnamestartchars + "][" + ncnamechars + "]*";
    namestartchars = ncnamestartchars + ":";
    namechars = ncnamechars + ":";
    var surrogatename = new RegExp("^[" + namestartchars + "][" + namechars + "]*$");
    var surrogateqname = new RegExp("^(" + ncname + "|" + ncname + ":" + ncname + ")$");
    function isValidName(s) {
      if (simplename.test(s)) return true;
      if (name.test(s)) return true;
      if (!hassurrogates.test(s)) return false;
      if (!surrogatename.test(s)) return false;
      var chars = s.match(surrogatechars),
        pairs = s.match(surrogatepairs);
      return pairs !== null && 2 * pairs.length === chars.length;
    }
    function isValidQName(s) {
      if (simpleqname.test(s)) return true;
      if (qname.test(s)) return true;
      if (!hassurrogates.test(s)) return false;
      if (!surrogateqname.test(s)) return false;
      var chars = s.match(surrogatechars),
        pairs = s.match(surrogatepairs);
      return pairs !== null && 2 * pairs.length === chars.length;
    }
  }
});

// external/npm/node_modules/domino/lib/attributes.js
var require_attributes = /*#__PURE__*/__commonJS({
  "external/npm/node_modules/domino/lib/attributes.js"(exports) {

    var utils = require_utils();
    exports.property = function (attr) {
      if (Array.isArray(attr.type)) {
        var valid = /* @__PURE__ */Object.create(null);
        attr.type.forEach(function (val) {
          valid[val.value || val] = val.alias || val;
        });
        var missingValueDefault = attr.missing;
        if (missingValueDefault === void 0) {
          missingValueDefault = null;
        }
        var invalidValueDefault = attr.invalid;
        if (invalidValueDefault === void 0) {
          invalidValueDefault = missingValueDefault;
        }
        return {
          get: function () {
            var v = this._getattr(attr.name);
            if (v === null) return missingValueDefault;
            v = valid[v.toLowerCase()];
            if (v !== void 0) return v;
            if (invalidValueDefault !== null) return invalidValueDefault;
            return v;
          },
          set: function (v) {
            this._setattr(attr.name, v);
          }
        };
      } else if (attr.type === Boolean) {
        return {
          get: function () {
            return this.hasAttribute(attr.name);
          },
          set: function (v) {
            if (v) {
              this._setattr(attr.name, "");
            } else {
              this.removeAttribute(attr.name);
            }
          }
        };
      } else if (attr.type === Number || attr.type === "long" || attr.type === "unsigned long" || attr.type === "limited unsigned long with fallback") {
        return numberPropDesc(attr);
      } else if (!attr.type || attr.type === String) {
        return {
          get: function () {
            return this._getattr(attr.name) || "";
          },
          set: function (v) {
            if (attr.treatNullAsEmptyString && v === null) {
              v = "";
            }
            this._setattr(attr.name, v);
          }
        };
      } else if (typeof attr.type === "function") {
        return attr.type(attr.name, attr);
      }
      throw new Error("Invalid attribute definition");
    };
    function numberPropDesc(a) {
      var def;
      if (typeof a.default === "function") {
        def = a.default;
      } else if (typeof a.default === "number") {
        def = function () {
          return a.default;
        };
      } else {
        def = function () {
          utils.assert(false, typeof a.default);
        };
      }
      var unsigned_long = a.type === "unsigned long";
      var signed_long = a.type === "long";
      var unsigned_fallback = a.type === "limited unsigned long with fallback";
      var min = a.min,
        max = a.max,
        setmin = a.setmin;
      if (min === void 0) {
        if (unsigned_long) min = 0;
        if (signed_long) min = -2147483648;
        if (unsigned_fallback) min = 1;
      }
      if (max === void 0) {
        if (unsigned_long || signed_long || unsigned_fallback) max = 2147483647;
      }
      return {
        get: function () {
          var v = this._getattr(a.name);
          var n = a.float ? parseFloat(v) : parseInt(v, 10);
          if (v === null || !isFinite(n) || min !== void 0 && n < min || max !== void 0 && n > max) {
            return def.call(this);
          }
          if (unsigned_long || signed_long || unsigned_fallback) {
            if (!/^[ \t\n\f\r]*[-+]?[0-9]/.test(v)) {
              return def.call(this);
            }
            n = n | 0;
          }
          return n;
        },
        set: function (v) {
          if (!a.float) {
            v = Math.floor(v);
          }
          if (setmin !== void 0 && v < setmin) {
            utils.IndexSizeError(a.name + " set to " + v);
          }
          if (unsigned_long) {
            v = v < 0 || v > 2147483647 ? def.call(this) : v | 0;
          } else if (unsigned_fallback) {
            v = v < 1 || v > 2147483647 ? def.call(this) : v | 0;
          } else if (signed_long) {
            v = v < -2147483648 || v > 2147483647 ? def.call(this) : v | 0;
          }
          this._setattr(a.name, String(v));
        }
      };
    }
    exports.registerChangeHandler = function (c, name, handler) {
      var p = c.prototype;
      if (!Object.prototype.hasOwnProperty.call(p, "_attributeChangeHandlers")) {
        p._attributeChangeHandlers = Object.create(p._attributeChangeHandlers || null);
      }
      p._attributeChangeHandlers[name] = handler;
    };
  }
});

// external/npm/node_modules/domino/lib/FilteredElementList.js
var require_FilteredElementList = /*#__PURE__*/__commonJS({
  "external/npm/node_modules/domino/lib/FilteredElementList.js"(exports, module) {

    module.exports = FilteredElementList;
    var Node = require_Node();
    function FilteredElementList(root, filter) {
      this.root = root;
      this.filter = filter;
      this.lastModTime = root.lastModTime;
      this.done = false;
      this.cache = [];
      this.traverse();
    }
    FilteredElementList.prototype = Object.create(Object.prototype, {
      length: {
        get: function () {
          this.checkcache();
          if (!this.done) this.traverse();
          return this.cache.length;
        }
      },
      item: {
        value: function (n) {
          this.checkcache();
          if (!this.done && n >= this.cache.length) {
            this.traverse();
          }
          return this.cache[n];
        }
      },
      checkcache: {
        value: function () {
          if (this.lastModTime !== this.root.lastModTime) {
            for (var i = this.cache.length - 1; i >= 0; i--) {
              this[i] = void 0;
            }
            this.cache.length = 0;
            this.done = false;
            this.lastModTime = this.root.lastModTime;
          }
        }
      },
      traverse: {
        value: function (n) {
          if (n !== void 0) n++;
          var elt;
          while ((elt = this.next()) !== null) {
            this[this.cache.length] = elt;
            this.cache.push(elt);
            if (n && this.cache.length === n) return;
          }
          this.done = true;
        }
      },
      next: {
        value: function () {
          var start = this.cache.length === 0 ? this.root : this.cache[this.cache.length - 1];
          var elt;
          if (start.nodeType === Node.DOCUMENT_NODE) elt = start.documentElement;else elt = start.nextElement(this.root);
          while (elt) {
            if (this.filter(elt)) {
              return elt;
            }
            elt = elt.nextElement(this.root);
          }
          return null;
        }
      }
    });
  }
});

// external/npm/node_modules/domino/lib/DOMTokenList.js
var require_DOMTokenList = /*#__PURE__*/__commonJS({
  "external/npm/node_modules/domino/lib/DOMTokenList.js"(exports, module) {

    var utils = require_utils();
    module.exports = DOMTokenList;
    function DOMTokenList(getter, setter) {
      this._getString = getter;
      this._setString = setter;
      this._length = 0;
      this._lastStringValue = "";
      this._update();
    }
    Object.defineProperties(DOMTokenList.prototype, {
      length: {
        get: function () {
          return this._length;
        }
      },
      item: {
        value: function (index) {
          var list = getList(this);
          if (index < 0 || index >= list.length) {
            return null;
          }
          return list[index];
        }
      },
      contains: {
        value: function (token) {
          token = String(token);
          var list = getList(this);
          return list.indexOf(token) > -1;
        }
      },
      add: {
        value: function () {
          var list = getList(this);
          for (var i = 0, len = arguments.length; i < len; i++) {
            var token = handleErrors(arguments[i]);
            if (list.indexOf(token) < 0) {
              list.push(token);
            }
          }
          this._update(list);
        }
      },
      remove: {
        value: function () {
          var list = getList(this);
          for (var i = 0, len = arguments.length; i < len; i++) {
            var token = handleErrors(arguments[i]);
            var index = list.indexOf(token);
            if (index > -1) {
              list.splice(index, 1);
            }
          }
          this._update(list);
        }
      },
      toggle: {
        value: function toggle(token, force) {
          token = handleErrors(token);
          if (this.contains(token)) {
            if (force === void 0 || force === false) {
              this.remove(token);
              return false;
            }
            return true;
          } else {
            if (force === void 0 || force === true) {
              this.add(token);
              return true;
            }
            return false;
          }
        }
      },
      replace: {
        value: function replace(token, newToken) {
          if (String(newToken) === "") {
            utils.SyntaxError();
          }
          token = handleErrors(token);
          newToken = handleErrors(newToken);
          var list = getList(this);
          var idx = list.indexOf(token);
          if (idx < 0) {
            return false;
          }
          var idx2 = list.indexOf(newToken);
          if (idx2 < 0) {
            list[idx] = newToken;
          } else {
            if (idx < idx2) {
              list[idx] = newToken;
              list.splice(idx2, 1);
            } else {
              list.splice(idx, 1);
            }
          }
          this._update(list);
          return true;
        }
      },
      toString: {
        value: function () {
          return this._getString();
        }
      },
      value: {
        get: function () {
          return this._getString();
        },
        set: function (v) {
          this._setString(v);
          this._update();
        }
      },
      _update: {
        value: function (list) {
          if (list) {
            fixIndex(this, list);
            this._setString(list.join(" ").trim());
          } else {
            fixIndex(this, getList(this));
          }
          this._lastStringValue = this._getString();
        }
      }
    });
    function fixIndex(clist, list) {
      var oldLength = clist._length;
      var i;
      clist._length = list.length;
      for (i = 0; i < list.length; i++) {
        clist[i] = list[i];
      }
      for (; i < oldLength; i++) {
        clist[i] = void 0;
      }
    }
    function handleErrors(token) {
      token = String(token);
      if (token === "") {
        utils.SyntaxError();
      }
      if (/[ \t\r\n\f]/.test(token)) {
        utils.InvalidCharacterError();
      }
      return token;
    }
    function toArray(clist) {
      var length = clist._length;
      var arr = Array(length);
      for (var i = 0; i < length; i++) {
        arr[i] = clist[i];
      }
      return arr;
    }
    function getList(clist) {
      var strProp = clist._getString();
      if (strProp === clist._lastStringValue) {
        return toArray(clist);
      }
      var str = strProp.replace(/(^[ \t\r\n\f]+)|([ \t\r\n\f]+$)/g, "");
      if (str === "") {
        return [];
      } else {
        var seen = /* @__PURE__ */Object.create(null);
        return str.split(/[ \t\r\n\f]+/g).filter(function (n) {
          var key = "$" + n;
          if (seen[key]) {
            return false;
          }
          seen[key] = true;
          return true;
        });
      }
    }
  }
});

// external/npm/node_modules/domino/lib/select.js
var require_select = /*#__PURE__*/__commonJS({
  "external/npm/node_modules/domino/lib/select.js"(exports, module) {

    var window = Object.create(null, {
      location: {
        get: function () {
          throw new Error("window.location is not supported.");
        }
      }
    });
    var compareDocumentPosition = function (a, b) {
      return a.compareDocumentPosition(b);
    };
    var order = function (a, b) {
      return compareDocumentPosition(a, b) & 2 ? 1 : -1;
    };
    var next = function (el) {
      while ((el = el.nextSibling) && el.nodeType !== 1);
      return el;
    };
    var prev = function (el) {
      while ((el = el.previousSibling) && el.nodeType !== 1);
      return el;
    };
    var child = function (el) {
      if (el = el.firstChild) {
        while (el.nodeType !== 1 && (el = el.nextSibling));
      }
      return el;
    };
    var lastChild = function (el) {
      if (el = el.lastChild) {
        while (el.nodeType !== 1 && (el = el.previousSibling));
      }
      return el;
    };
    var parentIsElement = function (n) {
      if (!n.parentNode) {
        return false;
      }
      var nodeType = n.parentNode.nodeType;
      return nodeType === 1 || nodeType === 9;
    };
    var unquote = function (str) {
      if (!str) return str;
      var ch = str[0];
      if (ch === '"' || ch === "'") {
        if (str[str.length - 1] === ch) {
          str = str.slice(1, -1);
        } else {
          str = str.slice(1);
        }
        return str.replace(rules.str_escape, function (s) {
          var m = /^\\(?:([0-9A-Fa-f]+)|([\r\n\f]+))/.exec(s);
          if (!m) {
            return s.slice(1);
          }
          if (m[2]) {
            return "";
          }
          var cp = parseInt(m[1], 16);
          return String.fromCodePoint ? String.fromCodePoint(cp) : String.fromCharCode(cp);
        });
      } else if (rules.ident.test(str)) {
        return decodeid(str);
      } else {
        return str;
      }
    };
    var decodeid = function (str) {
      return str.replace(rules.escape, function (s) {
        var m = /^\\([0-9A-Fa-f]+)/.exec(s);
        if (!m) {
          return s[1];
        }
        var cp = parseInt(m[1], 16);
        return String.fromCodePoint ? String.fromCodePoint(cp) : String.fromCharCode(cp);
      });
    };
    var indexOf = function () {
      if (Array.prototype.indexOf) {
        return Array.prototype.indexOf;
      }
      return function (obj, item) {
        var i = this.length;
        while (i--) {
          if (this[i] === item) return i;
        }
        return -1;
      };
    }();
    var makeInside = function (start, end) {
      var regex = rules.inside.source.replace(/</g, start).replace(/>/g, end);
      return new RegExp(regex);
    };
    var replace = function (regex, name, val) {
      regex = regex.source;
      regex = regex.replace(name, val.source || val);
      return new RegExp(regex);
    };
    var truncateUrl = function (url, num) {
      return url.replace(/^(?:\w+:\/\/|\/+)/, "").replace(/(?:\/+|\/*#.*?)$/, "").split("/", num).join("/");
    };
    var parseNth = function (param_, test) {
      var param = param_.replace(/\s+/g, ""),
        cap;
      if (param === "even") {
        param = "2n+0";
      } else if (param === "odd") {
        param = "2n+1";
      } else if (param.indexOf("n") === -1) {
        param = "0n" + param;
      }
      cap = /^([+-])?(\d+)?n([+-])?(\d+)?$/.exec(param);
      return {
        group: cap[1] === "-" ? -(cap[2] || 1) : +(cap[2] || 1),
        offset: cap[4] ? cap[3] === "-" ? -cap[4] : +cap[4] : 0
      };
    };
    var nth = function (param_, test, last) {
      var param = parseNth(param_),
        group = param.group,
        offset = param.offset,
        find2 = !last ? child : lastChild,
        advance = !last ? next : prev;
      return function (el) {
        if (!parentIsElement(el)) return;
        var rel = find2(el.parentNode),
          pos = 0;
        while (rel) {
          if (test(rel, el)) pos++;
          if (rel === el) {
            pos -= offset;
            return group && pos ? pos % group === 0 && pos < 0 === group < 0 : !pos;
          }
          rel = advance(rel);
        }
      };
    };
    var selectors = {
      "*": function () {
        return function () {
          return true;
        };
      }(),
      "type": function (type) {
        type = type.toLowerCase();
        return function (el) {
          return el.nodeName.toLowerCase() === type;
        };
      },
      "attr": function (key, op, val, i) {
        op = operators[op];
        return function (el) {
          var attr;
          switch (key) {
            case "for":
              attr = el.htmlFor;
              break;
            case "class":
              attr = el.className;
              if (attr === "" && el.getAttribute("class") == null) {
                attr = null;
              }
              break;
            case "href":
            case "src":
              attr = el.getAttribute(key, 2);
              break;
            case "title":
              attr = el.getAttribute("title") || null;
              break;
            case "id":
            case "lang":
            case "dir":
            case "accessKey":
            case "hidden":
            case "tabIndex":
            case "style":
              if (el.getAttribute) {
                attr = el.getAttribute(key);
                break;
              }
            default:
              if (el.hasAttribute && !el.hasAttribute(key)) {
                break;
              }
              attr = el[key] != null ? el[key] : el.getAttribute && el.getAttribute(key);
              break;
          }
          if (attr == null) return;
          attr = attr + "";
          if (i) {
            attr = attr.toLowerCase();
            val = val.toLowerCase();
          }
          return op(attr, val);
        };
      },
      ":first-child": function (el) {
        return !prev(el) && parentIsElement(el);
      },
      ":last-child": function (el) {
        return !next(el) && parentIsElement(el);
      },
      ":only-child": function (el) {
        return !prev(el) && !next(el) && parentIsElement(el);
      },
      ":nth-child": function (param, last) {
        return nth(param, function () {
          return true;
        }, last);
      },
      ":nth-last-child": function (param) {
        return selectors[":nth-child"](param, true);
      },
      ":root": function (el) {
        return el.ownerDocument.documentElement === el;
      },
      ":empty": function (el) {
        return !el.firstChild;
      },
      ":not": function (sel) {
        var test = compileGroup(sel);
        return function (el) {
          return !test(el);
        };
      },
      ":first-of-type": function (el) {
        if (!parentIsElement(el)) return;
        var type = el.nodeName;
        while (el = prev(el)) {
          if (el.nodeName === type) return;
        }
        return true;
      },
      ":last-of-type": function (el) {
        if (!parentIsElement(el)) return;
        var type = el.nodeName;
        while (el = next(el)) {
          if (el.nodeName === type) return;
        }
        return true;
      },
      ":only-of-type": function (el) {
        return selectors[":first-of-type"](el) && selectors[":last-of-type"](el);
      },
      ":nth-of-type": function (param, last) {
        return nth(param, function (rel, el) {
          return rel.nodeName === el.nodeName;
        }, last);
      },
      ":nth-last-of-type": function (param) {
        return selectors[":nth-of-type"](param, true);
      },
      ":checked": function (el) {
        return !!(el.checked || el.selected);
      },
      ":indeterminate": function (el) {
        return !selectors[":checked"](el);
      },
      ":enabled": function (el) {
        return !el.disabled && el.type !== "hidden";
      },
      ":disabled": function (el) {
        return !!el.disabled;
      },
      ":target": function (el) {
        return el.id === window.location.hash.substring(1);
      },
      ":focus": function (el) {
        return el === el.ownerDocument.activeElement;
      },
      ":is": function (sel) {
        return compileGroup(sel);
      },
      ":matches": function (sel) {
        return selectors[":is"](sel);
      },
      ":nth-match": function (param, last) {
        var args = param.split(/\s*,\s*/),
          arg = args.shift(),
          test = compileGroup(args.join(","));
        return nth(arg, test, last);
      },
      ":nth-last-match": function (param) {
        return selectors[":nth-match"](param, true);
      },
      ":links-here": function (el) {
        return el + "" === window.location + "";
      },
      ":lang": function (param) {
        return function (el) {
          while (el) {
            if (el.lang) return el.lang.indexOf(param) === 0;
            el = el.parentNode;
          }
        };
      },
      ":dir": function (param) {
        return function (el) {
          while (el) {
            if (el.dir) return el.dir === param;
            el = el.parentNode;
          }
        };
      },
      ":scope": function (el, con) {
        var context = con || el.ownerDocument;
        if (context.nodeType === 9) {
          return el === context.documentElement;
        }
        return el === context;
      },
      ":any-link": function (el) {
        return typeof el.href === "string";
      },
      ":local-link": function (el) {
        if (el.nodeName) {
          return el.href && el.host === window.location.host;
        }
        var param = +el + 1;
        return function (el2) {
          if (!el2.href) return;
          var url = window.location + "",
            href = el2 + "";
          return truncateUrl(url, param) === truncateUrl(href, param);
        };
      },
      ":default": function (el) {
        return !!el.defaultSelected;
      },
      ":valid": function (el) {
        return el.willValidate || el.validity && el.validity.valid;
      },
      ":invalid": function (el) {
        return !selectors[":valid"](el);
      },
      ":in-range": function (el) {
        return el.value > el.min && el.value <= el.max;
      },
      ":out-of-range": function (el) {
        return !selectors[":in-range"](el);
      },
      ":required": function (el) {
        return !!el.required;
      },
      ":optional": function (el) {
        return !el.required;
      },
      ":read-only": function (el) {
        if (el.readOnly) return true;
        var attr = el.getAttribute("contenteditable"),
          prop = el.contentEditable,
          name = el.nodeName.toLowerCase();
        name = name !== "input" && name !== "textarea";
        return (name || el.disabled) && attr == null && prop !== "true";
      },
      ":read-write": function (el) {
        return !selectors[":read-only"](el);
      },
      ":hover": function () {
        throw new Error(":hover is not supported.");
      },
      ":active": function () {
        throw new Error(":active is not supported.");
      },
      ":link": function () {
        throw new Error(":link is not supported.");
      },
      ":visited": function () {
        throw new Error(":visited is not supported.");
      },
      ":column": function () {
        throw new Error(":column is not supported.");
      },
      ":nth-column": function () {
        throw new Error(":nth-column is not supported.");
      },
      ":nth-last-column": function () {
        throw new Error(":nth-last-column is not supported.");
      },
      ":current": function () {
        throw new Error(":current is not supported.");
      },
      ":past": function () {
        throw new Error(":past is not supported.");
      },
      ":future": function () {
        throw new Error(":future is not supported.");
      },
      ":contains": function (param) {
        return function (el) {
          var text = el.innerText || el.textContent || el.value || "";
          return text.indexOf(param) !== -1;
        };
      },
      ":has": function (param) {
        return function (el) {
          return find(param, el).length > 0;
        };
      }
    };
    var operators = {
      "-": function () {
        return true;
      },
      "=": function (attr, val) {
        return attr === val;
      },
      "*=": function (attr, val) {
        return attr.indexOf(val) !== -1;
      },
      "~=": function (attr, val) {
        var i, s, f, l;
        for (s = 0; true; s = i + 1) {
          i = attr.indexOf(val, s);
          if (i === -1) return false;
          f = attr[i - 1];
          l = attr[i + val.length];
          if ((!f || f === " ") && (!l || l === " ")) return true;
        }
      },
      "|=": function (attr, val) {
        var i = attr.indexOf(val),
          l;
        if (i !== 0) return;
        l = attr[i + val.length];
        return l === "-" || !l;
      },
      "^=": function (attr, val) {
        return attr.indexOf(val) === 0;
      },
      "$=": function (attr, val) {
        var i = attr.lastIndexOf(val);
        return i !== -1 && i + val.length === attr.length;
      },
      "!=": function (attr, val) {
        return attr !== val;
      }
    };
    var combinators = {
      " ": function (test) {
        return function (el) {
          while (el = el.parentNode) {
            if (test(el)) return el;
          }
        };
      },
      ">": function (test) {
        return function (el) {
          if (el = el.parentNode) {
            return test(el) && el;
          }
        };
      },
      "+": function (test) {
        return function (el) {
          if (el = prev(el)) {
            return test(el) && el;
          }
        };
      },
      "~": function (test) {
        return function (el) {
          while (el = prev(el)) {
            if (test(el)) return el;
          }
        };
      },
      "noop": function (test) {
        return function (el) {
          return test(el) && el;
        };
      },
      "ref": function (test, name) {
        var node;
        function ref(el) {
          var doc = el.ownerDocument,
            nodes = doc.getElementsByTagName("*"),
            i = nodes.length;
          while (i--) {
            node = nodes[i];
            if (ref.test(el)) {
              node = null;
              return true;
            }
          }
          node = null;
        }
        ref.combinator = function (el) {
          if (!node || !node.getAttribute) return;
          var attr = node.getAttribute(name) || "";
          if (attr[0] === "#") attr = attr.substring(1);
          if (attr === el.id && test(node)) {
            return node;
          }
        };
        return ref;
      }
    };
    var rules = {
      escape: /\\(?:[^0-9A-Fa-f\r\n]|[0-9A-Fa-f]{1,6}[\r\n\t ]?)/g,
      str_escape: /(escape)|\\(\n|\r\n?|\f)/g,
      nonascii: /[\u00A0-\uFFFF]/,
      cssid: /(?:(?!-?[0-9])(?:escape|nonascii|[-_a-zA-Z0-9])+)/,
      qname: /^ *(cssid|\*)/,
      simple: /^(?:([.#]cssid)|pseudo|attr)/,
      ref: /^ *\/(cssid)\/ */,
      combinator: /^(?: +([^ \w*.#\\]) +|( )+|([^ \w*.#\\]))(?! *$)/,
      attr: /^\[(cssid)(?:([^\w]?=)(inside))?\]/,
      pseudo: /^(:cssid)(?:\((inside)\))?/,
      inside: /(?:"(?:\\"|[^"])*"|'(?:\\'|[^'])*'|<[^"'>]*>|\\["'>]|[^"'>])*/,
      ident: /^(cssid)$/
    };
    rules.cssid = replace(rules.cssid, "nonascii", rules.nonascii);
    rules.cssid = replace(rules.cssid, "escape", rules.escape);
    rules.qname = replace(rules.qname, "cssid", rules.cssid);
    rules.simple = replace(rules.simple, "cssid", rules.cssid);
    rules.ref = replace(rules.ref, "cssid", rules.cssid);
    rules.attr = replace(rules.attr, "cssid", rules.cssid);
    rules.pseudo = replace(rules.pseudo, "cssid", rules.cssid);
    rules.inside = replace(rules.inside, `[^"'>]*`, rules.inside);
    rules.attr = replace(rules.attr, "inside", makeInside("\\[", "\\]"));
    rules.pseudo = replace(rules.pseudo, "inside", makeInside("\\(", "\\)"));
    rules.simple = replace(rules.simple, "pseudo", rules.pseudo);
    rules.simple = replace(rules.simple, "attr", rules.attr);
    rules.ident = replace(rules.ident, "cssid", rules.cssid);
    rules.str_escape = replace(rules.str_escape, "escape", rules.escape);
    var compile = function (sel_) {
      var sel = sel_.replace(/^\s+|\s+$/g, ""),
        test,
        filter = [],
        buff = [],
        subject,
        qname,
        cap,
        op,
        ref;
      while (sel) {
        if (cap = rules.qname.exec(sel)) {
          sel = sel.substring(cap[0].length);
          qname = decodeid(cap[1]);
          buff.push(tok(qname, true));
        } else if (cap = rules.simple.exec(sel)) {
          sel = sel.substring(cap[0].length);
          qname = "*";
          buff.push(tok(qname, true));
          buff.push(tok(cap));
        } else {
          throw new SyntaxError("Invalid selector.");
        }
        while (cap = rules.simple.exec(sel)) {
          sel = sel.substring(cap[0].length);
          buff.push(tok(cap));
        }
        if (sel[0] === "!") {
          sel = sel.substring(1);
          subject = makeSubject();
          subject.qname = qname;
          buff.push(subject.simple);
        }
        if (cap = rules.ref.exec(sel)) {
          sel = sel.substring(cap[0].length);
          ref = combinators.ref(makeSimple(buff), decodeid(cap[1]));
          filter.push(ref.combinator);
          buff = [];
          continue;
        }
        if (cap = rules.combinator.exec(sel)) {
          sel = sel.substring(cap[0].length);
          op = cap[1] || cap[2] || cap[3];
          if (op === ",") {
            filter.push(combinators.noop(makeSimple(buff)));
            break;
          }
        } else {
          op = "noop";
        }
        if (!combinators[op]) {
          throw new SyntaxError("Bad combinator.");
        }
        filter.push(combinators[op](makeSimple(buff)));
        buff = [];
      }
      test = makeTest(filter);
      test.qname = qname;
      test.sel = sel;
      if (subject) {
        subject.lname = test.qname;
        subject.test = test;
        subject.qname = subject.qname;
        subject.sel = test.sel;
        test = subject;
      }
      if (ref) {
        ref.test = test;
        ref.qname = test.qname;
        ref.sel = test.sel;
        test = ref;
      }
      return test;
    };
    var tok = function (cap, qname) {
      if (qname) {
        return cap === "*" ? selectors["*"] : selectors.type(cap);
      }
      if (cap[1]) {
        return cap[1][0] === "." ? selectors.attr("class", "~=", decodeid(cap[1].substring(1)), false) : selectors.attr("id", "=", decodeid(cap[1].substring(1)), false);
      }
      if (cap[2]) {
        return cap[3] ? selectors[decodeid(cap[2])](unquote(cap[3])) : selectors[decodeid(cap[2])];
      }
      if (cap[4]) {
        var value = cap[6];
        var i = /["'\s]\s*I$/i.test(value);
        if (i) {
          value = value.replace(/\s*I$/i, "");
        }
        return selectors.attr(decodeid(cap[4]), cap[5] || "-", unquote(value), i);
      }
      throw new SyntaxError("Unknown Selector.");
    };
    var makeSimple = function (func) {
      var l = func.length,
        i;
      if (l < 2) return func[0];
      return function (el) {
        if (!el) return;
        for (i = 0; i < l; i++) {
          if (!func[i](el)) return;
        }
        return true;
      };
    };
    var makeTest = function (func) {
      if (func.length < 2) {
        return function (el) {
          return !!func[0](el);
        };
      }
      return function (el) {
        var i = func.length;
        while (i--) {
          if (!(el = func[i](el))) return;
        }
        return true;
      };
    };
    var makeSubject = function () {
      var target;
      function subject(el) {
        var node = el.ownerDocument,
          scope = node.getElementsByTagName(subject.lname),
          i = scope.length;
        while (i--) {
          if (subject.test(scope[i]) && target === el) {
            target = null;
            return true;
          }
        }
        target = null;
      }
      subject.simple = function (el) {
        target = el;
        return true;
      };
      return subject;
    };
    var compileGroup = function (sel) {
      var test = compile(sel),
        tests = [test];
      while (test.sel) {
        test = compile(test.sel);
        tests.push(test);
      }
      if (tests.length < 2) return test;
      return function (el) {
        var l = tests.length,
          i = 0;
        for (; i < l; i++) {
          if (tests[i](el)) return true;
        }
      };
    };
    var find = function (sel, node) {
      var results = [],
        test = compile(sel),
        scope = node.getElementsByTagName(test.qname),
        i = 0,
        el;
      while (el = scope[i++]) {
        if (test(el)) results.push(el);
      }
      if (test.sel) {
        while (test.sel) {
          test = compile(test.sel);
          scope = node.getElementsByTagName(test.qname);
          i = 0;
          while (el = scope[i++]) {
            if (test(el) && indexOf.call(results, el) === -1) {
              results.push(el);
            }
          }
        }
        results.sort(order);
      }
      return results;
    };
    module.exports = exports = function (sel, context) {
      var id, r;
      if (context.nodeType !== 11 && sel.indexOf(" ") === -1) {
        if (sel[0] === "#" && context.rooted && /^#[A-Z_][-A-Z0-9_]*$/i.test(sel)) {
          if (context.doc._hasMultipleElementsWithId) {
            id = sel.substring(1);
            if (!context.doc._hasMultipleElementsWithId(id)) {
              r = context.doc.getElementById(id);
              return r ? [r] : [];
            }
          }
        }
        if (sel[0] === "." && /^\.\w+$/.test(sel)) {
          return context.getElementsByClassName(sel.substring(1));
        }
        if (/^\w+$/.test(sel)) {
          return context.getElementsByTagName(sel);
        }
      }
      return find(sel, context);
    };
    exports.selectors = selectors;
    exports.operators = operators;
    exports.combinators = combinators;
    exports.matches = function (el, sel) {
      var test = {
        sel
      };
      do {
        test = compile(test.sel);
        if (test(el)) {
          return true;
        }
      } while (test.sel);
      return false;
    };
  }
});

// external/npm/node_modules/domino/lib/ChildNode.js
var require_ChildNode = /*#__PURE__*/__commonJS({
  "external/npm/node_modules/domino/lib/ChildNode.js"(exports, module) {

    var Node = require_Node();
    var LinkedList = require_LinkedList();
    var createDocumentFragmentFromArguments = function (document, args) {
      var docFrag = document.createDocumentFragment();
      for (var i = 0; i < args.length; i++) {
        var argItem = args[i];
        var isNode = argItem instanceof Node;
        docFrag.appendChild(isNode ? argItem : document.createTextNode(String(argItem)));
      }
      return docFrag;
    };
    var ChildNode = {
      after: {
        value: function after() {
          var argArr = Array.prototype.slice.call(arguments);
          var parentNode = this.parentNode,
            nextSibling = this.nextSibling;
          if (parentNode === null) {
            return;
          }
          while (nextSibling && argArr.some(function (v) {
            return v === nextSibling;
          })) nextSibling = nextSibling.nextSibling;
          var docFrag = createDocumentFragmentFromArguments(this.doc, argArr);
          parentNode.insertBefore(docFrag, nextSibling);
        }
      },
      before: {
        value: function before() {
          var argArr = Array.prototype.slice.call(arguments);
          var parentNode = this.parentNode,
            prevSibling = this.previousSibling;
          if (parentNode === null) {
            return;
          }
          while (prevSibling && argArr.some(function (v) {
            return v === prevSibling;
          })) prevSibling = prevSibling.previousSibling;
          var docFrag = createDocumentFragmentFromArguments(this.doc, argArr);
          var nextSibling = prevSibling ? prevSibling.nextSibling : parentNode.firstChild;
          parentNode.insertBefore(docFrag, nextSibling);
        }
      },
      remove: {
        value: function remove() {
          if (this.parentNode === null) return;
          if (this.doc) {
            this.doc._preremoveNodeIterators(this);
            if (this.rooted) {
              this.doc.mutateRemove(this);
            }
          }
          this._remove();
          this.parentNode = null;
        }
      },
      _remove: {
        value: function _remove() {
          var parent = this.parentNode;
          if (parent === null) return;
          if (parent._childNodes) {
            parent._childNodes.splice(this.index, 1);
          } else if (parent._firstChild === this) {
            if (this._nextSibling === this) {
              parent._firstChild = null;
            } else {
              parent._firstChild = this._nextSibling;
            }
          }
          LinkedList.remove(this);
          parent.modify();
        }
      },
      replaceWith: {
        value: function replaceWith() {
          var argArr = Array.prototype.slice.call(arguments);
          var parentNode = this.parentNode,
            nextSibling = this.nextSibling;
          if (parentNode === null) {
            return;
          }
          while (nextSibling && argArr.some(function (v) {
            return v === nextSibling;
          })) nextSibling = nextSibling.nextSibling;
          var docFrag = createDocumentFragmentFromArguments(this.doc, argArr);
          if (this.parentNode === parentNode) {
            parentNode.replaceChild(docFrag, this);
          } else {
            parentNode.insertBefore(docFrag, nextSibling);
          }
        }
      }
    };
    module.exports = ChildNode;
  }
});

// external/npm/node_modules/domino/lib/NonDocumentTypeChildNode.js
var require_NonDocumentTypeChildNode = /*#__PURE__*/__commonJS({
  "external/npm/node_modules/domino/lib/NonDocumentTypeChildNode.js"(exports, module) {

    var Node = require_Node();
    var NonDocumentTypeChildNode = {
      nextElementSibling: {
        get: function () {
          if (this.parentNode) {
            for (var kid = this.nextSibling; kid !== null; kid = kid.nextSibling) {
              if (kid.nodeType === Node.ELEMENT_NODE) return kid;
            }
          }
          return null;
        }
      },
      previousElementSibling: {
        get: function () {
          if (this.parentNode) {
            for (var kid = this.previousSibling; kid !== null; kid = kid.previousSibling) {
              if (kid.nodeType === Node.ELEMENT_NODE) return kid;
            }
          }
          return null;
        }
      }
    };
    module.exports = NonDocumentTypeChildNode;
  }
});

// external/npm/node_modules/domino/lib/NamedNodeMap.js
var require_NamedNodeMap = /*#__PURE__*/__commonJS({
  "external/npm/node_modules/domino/lib/NamedNodeMap.js"(exports, module) {

    module.exports = NamedNodeMap;
    var utils = require_utils();
    function NamedNodeMap(element) {
      this.element = element;
    }
    Object.defineProperties(NamedNodeMap.prototype, {
      length: {
        get: utils.shouldOverride
      },
      item: {
        value: utils.shouldOverride
      },
      getNamedItem: {
        value: function getNamedItem(qualifiedName) {
          return this.element.getAttributeNode(qualifiedName);
        }
      },
      getNamedItemNS: {
        value: function getNamedItemNS(namespace, localName) {
          return this.element.getAttributeNodeNS(namespace, localName);
        }
      },
      setNamedItem: {
        value: utils.nyi
      },
      setNamedItemNS: {
        value: utils.nyi
      },
      removeNamedItem: {
        value: function removeNamedItem(qualifiedName) {
          var attr = this.element.getAttributeNode(qualifiedName);
          if (attr) {
            this.element.removeAttribute(qualifiedName);
            return attr;
          }
          utils.NotFoundError();
        }
      },
      removeNamedItemNS: {
        value: function removeNamedItemNS(ns, lname) {
          var attr = this.element.getAttributeNodeNS(ns, lname);
          if (attr) {
            this.element.removeAttributeNS(ns, lname);
            return attr;
          }
          utils.NotFoundError();
        }
      }
    });
  }
});

// external/npm/node_modules/domino/lib/Element.js
var require_Element = /*#__PURE__*/__commonJS({
  "external/npm/node_modules/domino/lib/Element.js"(exports, module) {

    module.exports = Element;
    var xml = require_xmlnames();
    var utils = require_utils();
    var NAMESPACE = utils.NAMESPACE;
    var attributes = require_attributes();
    var Node = require_Node();
    var NodeList = require_NodeList();
    var NodeUtils = require_NodeUtils();
    var FilteredElementList = require_FilteredElementList();
    var DOMException = require_DOMException();
    var DOMTokenList = require_DOMTokenList();
    var select = require_select();
    var ContainerNode = require_ContainerNode();
    var ChildNode = require_ChildNode();
    var NonDocumentTypeChildNode = require_NonDocumentTypeChildNode();
    var NamedNodeMap = require_NamedNodeMap();
    var uppercaseCache = /* @__PURE__ */Object.create(null);
    function Element(doc, localName, namespaceURI, prefix) {
      ContainerNode.call(this);
      this.nodeType = Node.ELEMENT_NODE;
      this.ownerDocument = doc;
      this.localName = localName;
      this.namespaceURI = namespaceURI;
      this.prefix = prefix;
      this._tagName = void 0;
      this._attrsByQName = /* @__PURE__ */Object.create(null);
      this._attrsByLName = /* @__PURE__ */Object.create(null);
      this._attrKeys = [];
    }
    function recursiveGetText(node, a) {
      if (node.nodeType === Node.TEXT_NODE) {
        a.push(node._data);
      } else {
        for (var i = 0, n = node.childNodes.length; i < n; i++) recursiveGetText(node.childNodes[i], a);
      }
    }
    Element.prototype = Object.create(ContainerNode.prototype, {
      isHTML: {
        get: function isHTML() {
          return this.namespaceURI === NAMESPACE.HTML && this.ownerDocument.isHTML;
        }
      },
      tagName: {
        get: function tagName() {
          if (this._tagName === void 0) {
            var tn;
            if (this.prefix === null) {
              tn = this.localName;
            } else {
              tn = this.prefix + ":" + this.localName;
            }
            if (this.isHTML) {
              var up = uppercaseCache[tn];
              if (!up) {
                uppercaseCache[tn] = up = utils.toASCIIUpperCase(tn);
              }
              tn = up;
            }
            this._tagName = tn;
          }
          return this._tagName;
        }
      },
      nodeName: {
        get: function () {
          return this.tagName;
        }
      },
      nodeValue: {
        get: function () {
          return null;
        },
        set: function () {}
      },
      textContent: {
        get: function () {
          var strings = [];
          recursiveGetText(this, strings);
          return strings.join("");
        },
        set: function (newtext) {
          this.removeChildren();
          if (newtext !== null && newtext !== void 0 && newtext !== "") {
            this._appendChild(this.ownerDocument.createTextNode(newtext));
          }
        }
      },
      innerText: {
        get: function () {
          var strings = [];
          recursiveGetText(this, strings);
          return strings.join("").replace(/[ \t\n\f\r]+/g, " ").trim();
        },
        set: function (newtext) {
          this.removeChildren();
          if (newtext !== null && newtext !== void 0 && newtext !== "") {
            this._appendChild(this.ownerDocument.createTextNode(newtext));
          }
        }
      },
      innerHTML: {
        get: function () {
          return this.serialize();
        },
        set: utils.nyi
      },
      outerHTML: {
        get: function () {
          return NodeUtils.serializeOne(this, {
            nodeType: 0
          });
        },
        set: function (v) {
          var document = this.ownerDocument;
          var parent = this.parentNode;
          if (parent === null) {
            return;
          }
          if (parent.nodeType === Node.DOCUMENT_NODE) {
            utils.NoModificationAllowedError();
          }
          if (parent.nodeType === Node.DOCUMENT_FRAGMENT_NODE) {
            parent = parent.ownerDocument.createElement("body");
          }
          var parser = document.implementation.mozHTMLParser(document._address, parent);
          parser.parse(v === null ? "" : String(v), true);
          this.replaceWith(parser._asDocumentFragment());
        }
      },
      _insertAdjacent: {
        value: function _insertAdjacent(position, node) {
          var first = false;
          switch (position) {
            case "beforebegin":
              first = true;
            case "afterend":
              var parent = this.parentNode;
              if (parent === null) {
                return null;
              }
              return parent.insertBefore(node, first ? this : this.nextSibling);
            case "afterbegin":
              first = true;
            case "beforeend":
              return this.insertBefore(node, first ? this.firstChild : null);
            default:
              return utils.SyntaxError();
          }
        }
      },
      insertAdjacentElement: {
        value: function insertAdjacentElement(position, element) {
          if (element.nodeType !== Node.ELEMENT_NODE) {
            throw new TypeError("not an element");
          }
          position = utils.toASCIILowerCase(String(position));
          return this._insertAdjacent(position, element);
        }
      },
      insertAdjacentText: {
        value: function insertAdjacentText(position, data) {
          var textNode = this.ownerDocument.createTextNode(data);
          position = utils.toASCIILowerCase(String(position));
          this._insertAdjacent(position, textNode);
        }
      },
      insertAdjacentHTML: {
        value: function insertAdjacentHTML(position, text) {
          position = utils.toASCIILowerCase(String(position));
          text = String(text);
          var context;
          switch (position) {
            case "beforebegin":
            case "afterend":
              context = this.parentNode;
              if (context === null || context.nodeType === Node.DOCUMENT_NODE) {
                utils.NoModificationAllowedError();
              }
              break;
            case "afterbegin":
            case "beforeend":
              context = this;
              break;
            default:
              utils.SyntaxError();
          }
          if (!(context instanceof Element) || context.ownerDocument.isHTML && context.localName === "html" && context.namespaceURI === NAMESPACE.HTML) {
            context = context.ownerDocument.createElementNS(NAMESPACE.HTML, "body");
          }
          var parser = this.ownerDocument.implementation.mozHTMLParser(this.ownerDocument._address, context);
          parser.parse(text, true);
          this._insertAdjacent(position, parser._asDocumentFragment());
        }
      },
      children: {
        get: function () {
          if (!this._children) {
            this._children = new ChildrenCollection(this);
          }
          return this._children;
        }
      },
      attributes: {
        get: function () {
          if (!this._attributes) {
            this._attributes = new AttributesArray(this);
          }
          return this._attributes;
        }
      },
      firstElementChild: {
        get: function () {
          for (var kid = this.firstChild; kid !== null; kid = kid.nextSibling) {
            if (kid.nodeType === Node.ELEMENT_NODE) return kid;
          }
          return null;
        }
      },
      lastElementChild: {
        get: function () {
          for (var kid = this.lastChild; kid !== null; kid = kid.previousSibling) {
            if (kid.nodeType === Node.ELEMENT_NODE) return kid;
          }
          return null;
        }
      },
      childElementCount: {
        get: function () {
          return this.children.length;
        }
      },
      nextElement: {
        value: function (root) {
          if (!root) root = this.ownerDocument.documentElement;
          var next = this.firstElementChild;
          if (!next) {
            if (this === root) return null;
            next = this.nextElementSibling;
          }
          if (next) return next;
          for (var parent = this.parentElement; parent && parent !== root; parent = parent.parentElement) {
            next = parent.nextElementSibling;
            if (next) return next;
          }
          return null;
        }
      },
      getElementsByTagName: {
        value: function getElementsByTagName(lname) {
          var filter;
          if (!lname) return new NodeList();
          if (lname === "*") filter = function () {
            return true;
          };else if (this.isHTML) filter = htmlLocalNameElementFilter(lname);else filter = localNameElementFilter(lname);
          return new FilteredElementList(this, filter);
        }
      },
      getElementsByTagNameNS: {
        value: function getElementsByTagNameNS(ns, lname) {
          var filter;
          if (ns === "*" && lname === "*") filter = function () {
            return true;
          };else if (ns === "*") filter = localNameElementFilter(lname);else if (lname === "*") filter = namespaceElementFilter(ns);else filter = namespaceLocalNameElementFilter(ns, lname);
          return new FilteredElementList(this, filter);
        }
      },
      getElementsByClassName: {
        value: function getElementsByClassName(names) {
          names = String(names).trim();
          if (names === "") {
            var result = new NodeList();
            return result;
          }
          names = names.split(/[ \t\r\n\f]+/);
          return new FilteredElementList(this, classNamesElementFilter(names));
        }
      },
      getElementsByName: {
        value: function getElementsByName(name) {
          return new FilteredElementList(this, elementNameFilter(String(name)));
        }
      },
      clone: {
        value: function clone() {
          var e;
          if (this.namespaceURI !== NAMESPACE.HTML || this.prefix || !this.ownerDocument.isHTML) {
            e = this.ownerDocument.createElementNS(this.namespaceURI, this.prefix !== null ? this.prefix + ":" + this.localName : this.localName);
          } else {
            e = this.ownerDocument.createElement(this.localName);
          }
          for (var i = 0, n = this._attrKeys.length; i < n; i++) {
            var lname = this._attrKeys[i];
            var a = this._attrsByLName[lname];
            var b = a.cloneNode();
            b._setOwnerElement(e);
            e._attrsByLName[lname] = b;
            e._addQName(b);
          }
          e._attrKeys = this._attrKeys.concat();
          return e;
        }
      },
      isEqual: {
        value: function isEqual(that) {
          if (this.localName !== that.localName || this.namespaceURI !== that.namespaceURI || this.prefix !== that.prefix || this._numattrs !== that._numattrs) return false;
          for (var i = 0, n = this._numattrs; i < n; i++) {
            var a = this._attr(i);
            if (!that.hasAttributeNS(a.namespaceURI, a.localName)) return false;
            if (that.getAttributeNS(a.namespaceURI, a.localName) !== a.value) return false;
          }
          return true;
        }
      },
      _lookupNamespacePrefix: {
        value: function _lookupNamespacePrefix(ns, originalElement) {
          if (this.namespaceURI && this.namespaceURI === ns && this.prefix !== null && originalElement.lookupNamespaceURI(this.prefix) === ns) {
            return this.prefix;
          }
          for (var i = 0, n = this._numattrs; i < n; i++) {
            var a = this._attr(i);
            if (a.prefix === "xmlns" && a.value === ns && originalElement.lookupNamespaceURI(a.localName) === ns) {
              return a.localName;
            }
          }
          var parent = this.parentElement;
          return parent ? parent._lookupNamespacePrefix(ns, originalElement) : null;
        }
      },
      lookupNamespaceURI: {
        value: function lookupNamespaceURI(prefix) {
          if (prefix === "" || prefix === void 0) {
            prefix = null;
          }
          if (this.namespaceURI !== null && this.prefix === prefix) return this.namespaceURI;
          for (var i = 0, n = this._numattrs; i < n; i++) {
            var a = this._attr(i);
            if (a.namespaceURI === NAMESPACE.XMLNS) {
              if (a.prefix === "xmlns" && a.localName === prefix || prefix === null && a.prefix === null && a.localName === "xmlns") {
                return a.value || null;
              }
            }
          }
          var parent = this.parentElement;
          return parent ? parent.lookupNamespaceURI(prefix) : null;
        }
      },
      getAttribute: {
        value: function getAttribute(qname) {
          var attr = this.getAttributeNode(qname);
          return attr ? attr.value : null;
        }
      },
      getAttributeNS: {
        value: function getAttributeNS(ns, lname) {
          var attr = this.getAttributeNodeNS(ns, lname);
          return attr ? attr.value : null;
        }
      },
      getAttributeNode: {
        value: function getAttributeNode(qname) {
          qname = String(qname);
          if (/[A-Z]/.test(qname) && this.isHTML) qname = utils.toASCIILowerCase(qname);
          var attr = this._attrsByQName[qname];
          if (!attr) return null;
          if (Array.isArray(attr)) attr = attr[0];
          return attr;
        }
      },
      getAttributeNodeNS: {
        value: function getAttributeNodeNS(ns, lname) {
          ns = ns === void 0 || ns === null ? "" : String(ns);
          lname = String(lname);
          var attr = this._attrsByLName[ns + "|" + lname];
          return attr ? attr : null;
        }
      },
      hasAttribute: {
        value: function hasAttribute(qname) {
          qname = String(qname);
          if (/[A-Z]/.test(qname) && this.isHTML) qname = utils.toASCIILowerCase(qname);
          return this._attrsByQName[qname] !== void 0;
        }
      },
      hasAttributeNS: {
        value: function hasAttributeNS(ns, lname) {
          ns = ns === void 0 || ns === null ? "" : String(ns);
          lname = String(lname);
          var key = ns + "|" + lname;
          return this._attrsByLName[key] !== void 0;
        }
      },
      hasAttributes: {
        value: function hasAttributes() {
          return this._numattrs > 0;
        }
      },
      toggleAttribute: {
        value: function toggleAttribute(qname, force) {
          qname = String(qname);
          if (!xml.isValidName(qname)) utils.InvalidCharacterError();
          if (/[A-Z]/.test(qname) && this.isHTML) qname = utils.toASCIILowerCase(qname);
          var a = this._attrsByQName[qname];
          if (a === void 0) {
            if (force === void 0 || force === true) {
              this._setAttribute(qname, "");
              return true;
            }
            return false;
          } else {
            if (force === void 0 || force === false) {
              this.removeAttribute(qname);
              return false;
            }
            return true;
          }
        }
      },
      _setAttribute: {
        value: function _setAttribute(qname, value) {
          var attr = this._attrsByQName[qname];
          var isnew;
          if (!attr) {
            attr = this._newattr(qname);
            isnew = true;
          } else {
            if (Array.isArray(attr)) attr = attr[0];
          }
          attr.value = value;
          if (this._attributes) this._attributes[qname] = attr;
          if (isnew && this._newattrhook) this._newattrhook(qname, value);
        }
      },
      setAttribute: {
        value: function setAttribute(qname, value) {
          qname = String(qname);
          if (!xml.isValidName(qname)) utils.InvalidCharacterError();
          if (/[A-Z]/.test(qname) && this.isHTML) qname = utils.toASCIILowerCase(qname);
          this._setAttribute(qname, String(value));
        }
      },
      _setAttributeNS: {
        value: function _setAttributeNS(ns, qname, value) {
          var pos = qname.indexOf(":"),
            prefix,
            lname;
          if (pos < 0) {
            prefix = null;
            lname = qname;
          } else {
            prefix = qname.substring(0, pos);
            lname = qname.substring(pos + 1);
          }
          if (ns === "" || ns === void 0) ns = null;
          var key = (ns === null ? "" : ns) + "|" + lname;
          var attr = this._attrsByLName[key];
          var isnew;
          if (!attr) {
            attr = new Attr(this, lname, prefix, ns);
            isnew = true;
            this._attrsByLName[key] = attr;
            if (this._attributes) {
              this._attributes[this._attrKeys.length] = attr;
            }
            this._attrKeys.push(key);
            this._addQName(attr);
          }
          attr.value = value;
          if (isnew && this._newattrhook) this._newattrhook(qname, value);
        }
      },
      setAttributeNS: {
        value: function setAttributeNS(ns, qname, value) {
          ns = ns === null || ns === void 0 || ns === "" ? null : String(ns);
          qname = String(qname);
          if (!xml.isValidQName(qname)) utils.InvalidCharacterError();
          var pos = qname.indexOf(":");
          var prefix = pos < 0 ? null : qname.substring(0, pos);
          if (prefix !== null && ns === null || prefix === "xml" && ns !== NAMESPACE.XML || (qname === "xmlns" || prefix === "xmlns") && ns !== NAMESPACE.XMLNS || ns === NAMESPACE.XMLNS && !(qname === "xmlns" || prefix === "xmlns")) utils.NamespaceError();
          this._setAttributeNS(ns, qname, String(value));
        }
      },
      setAttributeNode: {
        value: function setAttributeNode(attr) {
          if (attr.ownerElement !== null && attr.ownerElement !== this) {
            throw new DOMException(DOMException.INUSE_ATTRIBUTE_ERR);
          }
          var result = null;
          var oldAttrs = this._attrsByQName[attr.name];
          if (oldAttrs) {
            if (!Array.isArray(oldAttrs)) {
              oldAttrs = [oldAttrs];
            }
            if (oldAttrs.some(function (a) {
              return a === attr;
            })) {
              return attr;
            } else if (attr.ownerElement !== null) {
              throw new DOMException(DOMException.INUSE_ATTRIBUTE_ERR);
            }
            oldAttrs.forEach(function (a) {
              this.removeAttributeNode(a);
            }, this);
            result = oldAttrs[0];
          }
          this.setAttributeNodeNS(attr);
          return result;
        }
      },
      setAttributeNodeNS: {
        value: function setAttributeNodeNS(attr) {
          if (attr.ownerElement !== null) {
            throw new DOMException(DOMException.INUSE_ATTRIBUTE_ERR);
          }
          var ns = attr.namespaceURI;
          var key = (ns === null ? "" : ns) + "|" + attr.localName;
          var oldAttr = this._attrsByLName[key];
          if (oldAttr) {
            this.removeAttributeNode(oldAttr);
          }
          attr._setOwnerElement(this);
          this._attrsByLName[key] = attr;
          if (this._attributes) {
            this._attributes[this._attrKeys.length] = attr;
          }
          this._attrKeys.push(key);
          this._addQName(attr);
          if (this._newattrhook) this._newattrhook(attr.name, attr.value);
          return oldAttr || null;
        }
      },
      removeAttribute: {
        value: function removeAttribute(qname) {
          qname = String(qname);
          if (/[A-Z]/.test(qname) && this.isHTML) qname = utils.toASCIILowerCase(qname);
          var attr = this._attrsByQName[qname];
          if (!attr) return;
          if (Array.isArray(attr)) {
            if (attr.length > 2) {
              attr = attr.shift();
            } else {
              this._attrsByQName[qname] = attr[1];
              attr = attr[0];
            }
          } else {
            this._attrsByQName[qname] = void 0;
          }
          var ns = attr.namespaceURI;
          var key = (ns === null ? "" : ns) + "|" + attr.localName;
          this._attrsByLName[key] = void 0;
          var i = this._attrKeys.indexOf(key);
          if (this._attributes) {
            Array.prototype.splice.call(this._attributes, i, 1);
            this._attributes[qname] = void 0;
          }
          this._attrKeys.splice(i, 1);
          var onchange = attr.onchange;
          attr._setOwnerElement(null);
          if (onchange) {
            onchange.call(attr, this, attr.localName, attr.value, null);
          }
          if (this.rooted) this.ownerDocument.mutateRemoveAttr(attr);
        }
      },
      removeAttributeNS: {
        value: function removeAttributeNS(ns, lname) {
          ns = ns === void 0 || ns === null ? "" : String(ns);
          lname = String(lname);
          var key = ns + "|" + lname;
          var attr = this._attrsByLName[key];
          if (!attr) return;
          this._attrsByLName[key] = void 0;
          var i = this._attrKeys.indexOf(key);
          if (this._attributes) {
            Array.prototype.splice.call(this._attributes, i, 1);
          }
          this._attrKeys.splice(i, 1);
          this._removeQName(attr);
          var onchange = attr.onchange;
          attr._setOwnerElement(null);
          if (onchange) {
            onchange.call(attr, this, attr.localName, attr.value, null);
          }
          if (this.rooted) this.ownerDocument.mutateRemoveAttr(attr);
        }
      },
      removeAttributeNode: {
        value: function removeAttributeNode(attr) {
          var ns = attr.namespaceURI;
          var key = (ns === null ? "" : ns) + "|" + attr.localName;
          if (this._attrsByLName[key] !== attr) {
            utils.NotFoundError();
          }
          this.removeAttributeNS(ns, attr.localName);
          return attr;
        }
      },
      getAttributeNames: {
        value: function getAttributeNames() {
          var elt = this;
          return this._attrKeys.map(function (key) {
            return elt._attrsByLName[key].name;
          });
        }
      },
      _getattr: {
        value: function _getattr(qname) {
          var attr = this._attrsByQName[qname];
          return attr ? attr.value : null;
        }
      },
      _setattr: {
        value: function _setattr(qname, value) {
          var attr = this._attrsByQName[qname];
          var isnew;
          if (!attr) {
            attr = this._newattr(qname);
            isnew = true;
          }
          attr.value = String(value);
          if (this._attributes) this._attributes[qname] = attr;
          if (isnew && this._newattrhook) this._newattrhook(qname, value);
        }
      },
      _newattr: {
        value: function _newattr(qname) {
          var attr = new Attr(this, qname, null, null);
          var key = "|" + qname;
          this._attrsByQName[qname] = attr;
          this._attrsByLName[key] = attr;
          if (this._attributes) {
            this._attributes[this._attrKeys.length] = attr;
          }
          this._attrKeys.push(key);
          return attr;
        }
      },
      _addQName: {
        value: function (attr) {
          var qname = attr.name;
          var existing = this._attrsByQName[qname];
          if (!existing) {
            this._attrsByQName[qname] = attr;
          } else if (Array.isArray(existing)) {
            existing.push(attr);
          } else {
            this._attrsByQName[qname] = [existing, attr];
          }
          if (this._attributes) this._attributes[qname] = attr;
        }
      },
      _removeQName: {
        value: function (attr) {
          var qname = attr.name;
          var target = this._attrsByQName[qname];
          if (Array.isArray(target)) {
            var idx = target.indexOf(attr);
            utils.assert(idx !== -1);
            if (target.length === 2) {
              this._attrsByQName[qname] = target[1 - idx];
              if (this._attributes) {
                this._attributes[qname] = this._attrsByQName[qname];
              }
            } else {
              target.splice(idx, 1);
              if (this._attributes && this._attributes[qname] === attr) {
                this._attributes[qname] = target[0];
              }
            }
          } else {
            utils.assert(target === attr);
            this._attrsByQName[qname] = void 0;
            if (this._attributes) {
              this._attributes[qname] = void 0;
            }
          }
        }
      },
      _numattrs: {
        get: function () {
          return this._attrKeys.length;
        }
      },
      _attr: {
        value: function (n) {
          return this._attrsByLName[this._attrKeys[n]];
        }
      },
      id: attributes.property({
        name: "id"
      }),
      className: attributes.property({
        name: "class"
      }),
      classList: {
        get: function () {
          var self = this;
          if (this._classList) {
            return this._classList;
          }
          var dtlist = new DOMTokenList(function () {
            return self.className || "";
          }, function (v) {
            self.className = v;
          });
          this._classList = dtlist;
          return dtlist;
        },
        set: function (v) {
          this.className = v;
        }
      },
      matches: {
        value: function (selector) {
          return select.matches(this, selector);
        }
      },
      closest: {
        value: function (selector) {
          var el = this;
          do {
            if (el.matches && el.matches(selector)) {
              return el;
            }
            el = el.parentElement || el.parentNode;
          } while (el !== null && el.nodeType === Node.ELEMENT_NODE);
          return null;
        }
      },
      querySelector: {
        value: function (selector) {
          return select(selector, this)[0];
        }
      },
      querySelectorAll: {
        value: function (selector) {
          var nodes = select(selector, this);
          return nodes.item ? nodes : new NodeList(nodes);
        }
      }
    });
    Object.defineProperties(Element.prototype, ChildNode);
    Object.defineProperties(Element.prototype, NonDocumentTypeChildNode);
    attributes.registerChangeHandler(Element, "id", function (element, lname, oldval, newval) {
      if (element.rooted) {
        if (oldval) {
          element.ownerDocument.delId(oldval, element);
        }
        if (newval) {
          element.ownerDocument.addId(newval, element);
        }
      }
    });
    attributes.registerChangeHandler(Element, "class", function (element, lname, oldval, newval) {
      if (element._classList) {
        element._classList._update();
      }
    });
    function Attr(elt, lname, prefix, namespace, value) {
      this.localName = lname;
      this.prefix = prefix === null || prefix === "" ? null : "" + prefix;
      this.namespaceURI = namespace === null || namespace === "" ? null : "" + namespace;
      this.data = value;
      this._setOwnerElement(elt);
    }
    Attr.prototype = Object.create(Object.prototype, {
      ownerElement: {
        get: function () {
          return this._ownerElement;
        }
      },
      _setOwnerElement: {
        value: function _setOwnerElement(elt) {
          this._ownerElement = elt;
          if (this.prefix === null && this.namespaceURI === null && elt) {
            this.onchange = elt._attributeChangeHandlers[this.localName];
          } else {
            this.onchange = null;
          }
        }
      },
      name: {
        get: function () {
          return this.prefix ? this.prefix + ":" + this.localName : this.localName;
        }
      },
      specified: {
        get: function () {
          return true;
        }
      },
      value: {
        get: function () {
          return this.data;
        },
        set: function (value) {
          var oldval = this.data;
          value = value === void 0 ? "" : value + "";
          if (value === oldval) return;
          this.data = value;
          if (this.ownerElement) {
            if (this.onchange) this.onchange(this.ownerElement, this.localName, oldval, value);
            if (this.ownerElement.rooted) this.ownerElement.ownerDocument.mutateAttr(this, oldval);
          }
        }
      },
      cloneNode: {
        value: function cloneNode(deep) {
          return new Attr(null, this.localName, this.prefix, this.namespaceURI, this.data);
        }
      },
      nodeType: {
        get: function () {
          return Node.ATTRIBUTE_NODE;
        }
      },
      nodeName: {
        get: function () {
          return this.name;
        }
      },
      nodeValue: {
        get: function () {
          return this.value;
        },
        set: function (v) {
          this.value = v;
        }
      },
      textContent: {
        get: function () {
          return this.value;
        },
        set: function (v) {
          if (v === null || v === void 0) {
            v = "";
          }
          this.value = v;
        }
      },
      innerText: {
        get: function () {
          return this.value;
        },
        set: function (v) {
          if (v === null || v === void 0) {
            v = "";
          }
          this.value = v;
        }
      }
    });
    Element._Attr = Attr;
    function AttributesArray(elt) {
      NamedNodeMap.call(this, elt);
      for (var name in elt._attrsByQName) {
        this[name] = elt._attrsByQName[name];
      }
      for (var i = 0; i < elt._attrKeys.length; i++) {
        this[i] = elt._attrsByLName[elt._attrKeys[i]];
      }
    }
    AttributesArray.prototype = Object.create(NamedNodeMap.prototype, {
      length: {
        get: function () {
          return this.element._attrKeys.length;
        },
        set: function () {}
      },
      item: {
        value: function (n) {
          n = n >>> 0;
          if (n >= this.length) {
            return null;
          }
          return this.element._attrsByLName[this.element._attrKeys[n]];
        }
      }
    });
    if (globalThis.Symbol && globalThis.Symbol.iterator) {
      AttributesArray.prototype[globalThis.Symbol.iterator] = function () {
        var i = 0,
          n = this.length,
          self = this;
        return {
          next: function () {
            if (i < n) return {
              value: self.item(i++)
            };
            return {
              done: true
            };
          }
        };
      };
    }
    function ChildrenCollection(e) {
      this.element = e;
      this.updateCache();
    }
    ChildrenCollection.prototype = Object.create(Object.prototype, {
      length: {
        get: function () {
          this.updateCache();
          return this.childrenByNumber.length;
        }
      },
      item: {
        value: function item(n) {
          this.updateCache();
          return this.childrenByNumber[n] || null;
        }
      },
      namedItem: {
        value: function namedItem(name) {
          this.updateCache();
          return this.childrenByName[name] || null;
        }
      },
      namedItems: {
        get: function () {
          this.updateCache();
          return this.childrenByName;
        }
      },
      updateCache: {
        value: function updateCache() {
          var namedElts = /^(a|applet|area|embed|form|frame|frameset|iframe|img|object)$/;
          if (this.lastModTime !== this.element.lastModTime) {
            this.lastModTime = this.element.lastModTime;
            var n = this.childrenByNumber && this.childrenByNumber.length || 0;
            for (var i = 0; i < n; i++) {
              this[i] = void 0;
            }
            this.childrenByNumber = [];
            this.childrenByName = /* @__PURE__ */Object.create(null);
            for (var c = this.element.firstChild; c !== null; c = c.nextSibling) {
              if (c.nodeType === Node.ELEMENT_NODE) {
                this[this.childrenByNumber.length] = c;
                this.childrenByNumber.push(c);
                var id = c.getAttribute("id");
                if (id && !this.childrenByName[id]) this.childrenByName[id] = c;
                var name = c.getAttribute("name");
                if (name && this.element.namespaceURI === NAMESPACE.HTML && namedElts.test(this.element.localName) && !this.childrenByName[name]) this.childrenByName[id] = c;
              }
            }
          }
        }
      }
    });
    function localNameElementFilter(lname) {
      return function (e) {
        return e.localName === lname;
      };
    }
    function htmlLocalNameElementFilter(lname) {
      var lclname = utils.toASCIILowerCase(lname);
      if (lclname === lname) return localNameElementFilter(lname);
      return function (e) {
        return e.isHTML ? e.localName === lclname : e.localName === lname;
      };
    }
    function namespaceElementFilter(ns) {
      return function (e) {
        return e.namespaceURI === ns;
      };
    }
    function namespaceLocalNameElementFilter(ns, lname) {
      return function (e) {
        return e.namespaceURI === ns && e.localName === lname;
      };
    }
    function classNamesElementFilter(names) {
      return function (e) {
        return names.every(function (n) {
          return e.classList.contains(n);
        });
      };
    }
    function elementNameFilter(name) {
      return function (e) {
        if (e.namespaceURI !== NAMESPACE.HTML) {
          return false;
        }
        return e.getAttribute("name") === name;
      };
    }
  }
});

// external/npm/node_modules/domino/lib/Leaf.js
var require_Leaf = /*#__PURE__*/__commonJS({
  "external/npm/node_modules/domino/lib/Leaf.js"(exports, module) {

    module.exports = Leaf;
    var Node = require_Node();
    var NodeList = require_NodeList();
    var utils = require_utils();
    var HierarchyRequestError = utils.HierarchyRequestError;
    var NotFoundError = utils.NotFoundError;
    function Leaf() {
      Node.call(this);
    }
    Leaf.prototype = Object.create(Node.prototype, {
      hasChildNodes: {
        value: function () {
          return false;
        }
      },
      firstChild: {
        value: null
      },
      lastChild: {
        value: null
      },
      insertBefore: {
        value: function (node, child) {
          if (!node.nodeType) throw new TypeError("not a node");
          HierarchyRequestError();
        }
      },
      replaceChild: {
        value: function (node, child) {
          if (!node.nodeType) throw new TypeError("not a node");
          HierarchyRequestError();
        }
      },
      removeChild: {
        value: function (node) {
          if (!node.nodeType) throw new TypeError("not a node");
          NotFoundError();
        }
      },
      removeChildren: {
        value: function () {}
      },
      childNodes: {
        get: function () {
          if (!this._childNodes) this._childNodes = new NodeList();
          return this._childNodes;
        }
      }
    });
  }
});

// external/npm/node_modules/domino/lib/CharacterData.js
var require_CharacterData = /*#__PURE__*/__commonJS({
  "external/npm/node_modules/domino/lib/CharacterData.js"(exports, module) {

    module.exports = CharacterData;
    var Leaf = require_Leaf();
    var utils = require_utils();
    var ChildNode = require_ChildNode();
    var NonDocumentTypeChildNode = require_NonDocumentTypeChildNode();
    function CharacterData() {
      Leaf.call(this);
    }
    CharacterData.prototype = Object.create(Leaf.prototype, {
      substringData: {
        value: function substringData(offset, count) {
          if (arguments.length < 2) {
            throw new TypeError("Not enough arguments");
          }
          offset = offset >>> 0;
          count = count >>> 0;
          if (offset > this.data.length || offset < 0 || count < 0) {
            utils.IndexSizeError();
          }
          return this.data.substring(offset, offset + count);
        }
      },
      appendData: {
        value: function appendData(data) {
          if (arguments.length < 1) {
            throw new TypeError("Not enough arguments");
          }
          this.data += String(data);
        }
      },
      insertData: {
        value: function insertData(offset, data) {
          return this.replaceData(offset, 0, data);
        }
      },
      deleteData: {
        value: function deleteData(offset, count) {
          return this.replaceData(offset, count, "");
        }
      },
      replaceData: {
        value: function replaceData(offset, count, data) {
          var curtext = this.data,
            len = curtext.length;
          offset = offset >>> 0;
          count = count >>> 0;
          data = String(data);
          if (offset > len || offset < 0) utils.IndexSizeError();
          if (offset + count > len) count = len - offset;
          var prefix = curtext.substring(0, offset),
            suffix = curtext.substring(offset + count);
          this.data = prefix + data + suffix;
        }
      },
      isEqual: {
        value: function isEqual(n) {
          return this._data === n._data;
        }
      },
      length: {
        get: function () {
          return this.data.length;
        }
      }
    });
    Object.defineProperties(CharacterData.prototype, ChildNode);
    Object.defineProperties(CharacterData.prototype, NonDocumentTypeChildNode);
  }
});

// external/npm/node_modules/domino/lib/Text.js
var require_Text = /*#__PURE__*/__commonJS({
  "external/npm/node_modules/domino/lib/Text.js"(exports, module) {

    module.exports = Text;
    var utils = require_utils();
    var Node = require_Node();
    var CharacterData = require_CharacterData();
    function Text(doc, data) {
      CharacterData.call(this);
      this.nodeType = Node.TEXT_NODE;
      this.ownerDocument = doc;
      this._data = data;
      this._index = void 0;
    }
    var nodeValue = {
      get: function () {
        return this._data;
      },
      set: function (v) {
        if (v === null || v === void 0) {
          v = "";
        } else {
          v = String(v);
        }
        if (v === this._data) return;
        this._data = v;
        if (this.rooted) this.ownerDocument.mutateValue(this);
        if (this.parentNode && this.parentNode._textchangehook) this.parentNode._textchangehook(this);
      }
    };
    Text.prototype = Object.create(CharacterData.prototype, {
      nodeName: {
        value: "#text"
      },
      nodeValue,
      textContent: nodeValue,
      innerText: nodeValue,
      data: {
        get: nodeValue.get,
        set: function (v) {
          nodeValue.set.call(this, v === null ? "" : String(v));
        }
      },
      splitText: {
        value: function splitText(offset) {
          if (offset > this._data.length || offset < 0) utils.IndexSizeError();
          var newdata = this._data.substring(offset),
            newnode = this.ownerDocument.createTextNode(newdata);
          this.data = this.data.substring(0, offset);
          var parent = this.parentNode;
          if (parent !== null) parent.insertBefore(newnode, this.nextSibling);
          return newnode;
        }
      },
      wholeText: {
        get: function wholeText() {
          var result = this.textContent;
          for (var next = this.nextSibling; next; next = next.nextSibling) {
            if (next.nodeType !== Node.TEXT_NODE) {
              break;
            }
            result += next.textContent;
          }
          return result;
        }
      },
      replaceWholeText: {
        value: utils.nyi
      },
      clone: {
        value: function clone() {
          return new Text(this.ownerDocument, this._data);
        }
      }
    });
  }
});

// external/npm/node_modules/domino/lib/Comment.js
var require_Comment = /*#__PURE__*/__commonJS({
  "external/npm/node_modules/domino/lib/Comment.js"(exports, module) {

    module.exports = Comment;
    var Node = require_Node();
    var CharacterData = require_CharacterData();
    function Comment(doc, data) {
      CharacterData.call(this);
      this.nodeType = Node.COMMENT_NODE;
      this.ownerDocument = doc;
      this._data = data;
    }
    var nodeValue = {
      get: function () {
        return this._data;
      },
      set: function (v) {
        if (v === null || v === void 0) {
          v = "";
        } else {
          v = String(v);
        }
        this._data = v;
        if (this.rooted) this.ownerDocument.mutateValue(this);
      }
    };
    Comment.prototype = Object.create(CharacterData.prototype, {
      nodeName: {
        value: "#comment"
      },
      nodeValue,
      textContent: nodeValue,
      innerText: nodeValue,
      data: {
        get: nodeValue.get,
        set: function (v) {
          nodeValue.set.call(this, v === null ? "" : String(v));
        }
      },
      clone: {
        value: function clone() {
          return new Comment(this.ownerDocument, this._data);
        }
      }
    });
  }
});

// external/npm/node_modules/domino/lib/DocumentFragment.js
var require_DocumentFragment = /*#__PURE__*/__commonJS({
  "external/npm/node_modules/domino/lib/DocumentFragment.js"(exports, module) {

    module.exports = DocumentFragment;
    var Node = require_Node();
    var NodeList = require_NodeList();
    var ContainerNode = require_ContainerNode();
    var Element = require_Element();
    var select = require_select();
    var utils = require_utils();
    function DocumentFragment(doc) {
      ContainerNode.call(this);
      this.nodeType = Node.DOCUMENT_FRAGMENT_NODE;
      this.ownerDocument = doc;
    }
    DocumentFragment.prototype = Object.create(ContainerNode.prototype, {
      nodeName: {
        value: "#document-fragment"
      },
      nodeValue: {
        get: function () {
          return null;
        },
        set: function () {}
      },
      textContent: Object.getOwnPropertyDescriptor(Element.prototype, "textContent"),
      innerText: Object.getOwnPropertyDescriptor(Element.prototype, "innerText"),
      querySelector: {
        value: function (selector) {
          var nodes = this.querySelectorAll(selector);
          return nodes.length ? nodes[0] : null;
        }
      },
      querySelectorAll: {
        value: function (selector) {
          var context = Object.create(this);
          context.isHTML = true;
          context.getElementsByTagName = Element.prototype.getElementsByTagName;
          context.nextElement = Object.getOwnPropertyDescriptor(Element.prototype, "firstElementChild").get;
          var nodes = select(selector, context);
          return nodes.item ? nodes : new NodeList(nodes);
        }
      },
      clone: {
        value: function clone() {
          return new DocumentFragment(this.ownerDocument);
        }
      },
      isEqual: {
        value: function isEqual(n) {
          return true;
        }
      },
      innerHTML: {
        get: function () {
          return this.serialize();
        },
        set: utils.nyi
      },
      outerHTML: {
        get: function () {
          return this.serialize();
        },
        set: utils.nyi
      }
    });
  }
});

// external/npm/node_modules/domino/lib/ProcessingInstruction.js
var require_ProcessingInstruction = /*#__PURE__*/__commonJS({
  "external/npm/node_modules/domino/lib/ProcessingInstruction.js"(exports, module) {

    module.exports = ProcessingInstruction;
    var Node = require_Node();
    var CharacterData = require_CharacterData();
    function ProcessingInstruction(doc, target, data) {
      CharacterData.call(this);
      this.nodeType = Node.PROCESSING_INSTRUCTION_NODE;
      this.ownerDocument = doc;
      this.target = target;
      this._data = data;
    }
    var nodeValue = {
      get: function () {
        return this._data;
      },
      set: function (v) {
        if (v === null || v === void 0) {
          v = "";
        } else {
          v = String(v);
        }
        this._data = v;
        if (this.rooted) this.ownerDocument.mutateValue(this);
      }
    };
    ProcessingInstruction.prototype = Object.create(CharacterData.prototype, {
      nodeName: {
        get: function () {
          return this.target;
        }
      },
      nodeValue,
      textContent: nodeValue,
      innerText: nodeValue,
      data: {
        get: nodeValue.get,
        set: function (v) {
          nodeValue.set.call(this, v === null ? "" : String(v));
        }
      },
      clone: {
        value: function clone() {
          return new ProcessingInstruction(this.ownerDocument, this.target, this._data);
        }
      },
      isEqual: {
        value: function isEqual(n) {
          return this.target === n.target && this._data === n._data;
        }
      }
    });
  }
});

// external/npm/node_modules/domino/lib/NodeFilter.js
var require_NodeFilter = /*#__PURE__*/__commonJS({
  "external/npm/node_modules/domino/lib/NodeFilter.js"(exports, module) {

    var NodeFilter = {
      FILTER_ACCEPT: 1,
      FILTER_REJECT: 2,
      FILTER_SKIP: 3,
      SHOW_ALL: 4294967295,
      SHOW_ELEMENT: 1,
      SHOW_ATTRIBUTE: 2,
      SHOW_TEXT: 4,
      SHOW_CDATA_SECTION: 8,
      SHOW_ENTITY_REFERENCE: 16,
      SHOW_ENTITY: 32,
      SHOW_PROCESSING_INSTRUCTION: 64,
      SHOW_COMMENT: 128,
      SHOW_DOCUMENT: 256,
      SHOW_DOCUMENT_TYPE: 512,
      SHOW_DOCUMENT_FRAGMENT: 1024,
      SHOW_NOTATION: 2048
    };
    module.exports = NodeFilter.constructor = NodeFilter.prototype = NodeFilter;
  }
});

// external/npm/node_modules/domino/lib/NodeTraversal.js
var require_NodeTraversal = /*#__PURE__*/__commonJS({
  "external/npm/node_modules/domino/lib/NodeTraversal.js"(exports, module) {

    module.exports = {
      nextSkippingChildren,
      nextAncestorSibling,
      next,
      previous,
      deepLastChild
    };
    function nextSkippingChildren(node, stayWithin) {
      if (node === stayWithin) {
        return null;
      }
      if (node.nextSibling !== null) {
        return node.nextSibling;
      }
      return nextAncestorSibling(node, stayWithin);
    }
    function nextAncestorSibling(node, stayWithin) {
      for (node = node.parentNode; node !== null; node = node.parentNode) {
        if (node === stayWithin) {
          return null;
        }
        if (node.nextSibling !== null) {
          return node.nextSibling;
        }
      }
      return null;
    }
    function next(node, stayWithin) {
      var n;
      n = node.firstChild;
      if (n !== null) {
        return n;
      }
      if (node === stayWithin) {
        return null;
      }
      n = node.nextSibling;
      if (n !== null) {
        return n;
      }
      return nextAncestorSibling(node, stayWithin);
    }
    function deepLastChild(node) {
      while (node.lastChild) {
        node = node.lastChild;
      }
      return node;
    }
    function previous(node, stayWithin) {
      var p;
      p = node.previousSibling;
      if (p !== null) {
        return deepLastChild(p);
      }
      p = node.parentNode;
      if (p === stayWithin) {
        return null;
      }
      return p;
    }
  }
});

// external/npm/node_modules/domino/lib/TreeWalker.js
var require_TreeWalker = /*#__PURE__*/__commonJS({
  "external/npm/node_modules/domino/lib/TreeWalker.js"(exports, module) {

    module.exports = TreeWalker;
    var Node = require_Node();
    var NodeFilter = require_NodeFilter();
    var NodeTraversal = require_NodeTraversal();
    var utils = require_utils();
    var mapChild = {
      first: "firstChild",
      last: "lastChild",
      next: "firstChild",
      previous: "lastChild"
    };
    var mapSibling = {
      first: "nextSibling",
      last: "previousSibling",
      next: "nextSibling",
      previous: "previousSibling"
    };
    function traverseChildren(tw, type) {
      var child, node, parent, result, sibling;
      node = tw._currentNode[mapChild[type]];
      while (node !== null) {
        result = tw._internalFilter(node);
        if (result === NodeFilter.FILTER_ACCEPT) {
          tw._currentNode = node;
          return node;
        }
        if (result === NodeFilter.FILTER_SKIP) {
          child = node[mapChild[type]];
          if (child !== null) {
            node = child;
            continue;
          }
        }
        while (node !== null) {
          sibling = node[mapSibling[type]];
          if (sibling !== null) {
            node = sibling;
            break;
          }
          parent = node.parentNode;
          if (parent === null || parent === tw.root || parent === tw._currentNode) {
            return null;
          } else {
            node = parent;
          }
        }
      }
      return null;
    }
    function traverseSiblings(tw, type) {
      var node, result, sibling;
      node = tw._currentNode;
      if (node === tw.root) {
        return null;
      }
      while (true) {
        sibling = node[mapSibling[type]];
        while (sibling !== null) {
          node = sibling;
          result = tw._internalFilter(node);
          if (result === NodeFilter.FILTER_ACCEPT) {
            tw._currentNode = node;
            return node;
          }
          sibling = node[mapChild[type]];
          if (result === NodeFilter.FILTER_REJECT || sibling === null) {
            sibling = node[mapSibling[type]];
          }
        }
        node = node.parentNode;
        if (node === null || node === tw.root) {
          return null;
        }
        if (tw._internalFilter(node) === NodeFilter.FILTER_ACCEPT) {
          return null;
        }
      }
    }
    function TreeWalker(root, whatToShow, filter) {
      if (!root || !root.nodeType) {
        utils.NotSupportedError();
      }
      this._root = root;
      this._whatToShow = Number(whatToShow) || 0;
      this._filter = filter || null;
      this._active = false;
      this._currentNode = root;
    }
    Object.defineProperties(TreeWalker.prototype, {
      root: {
        get: function () {
          return this._root;
        }
      },
      whatToShow: {
        get: function () {
          return this._whatToShow;
        }
      },
      filter: {
        get: function () {
          return this._filter;
        }
      },
      currentNode: {
        get: function currentNode() {
          return this._currentNode;
        },
        set: function setCurrentNode(v) {
          if (!(v instanceof Node)) {
            throw new TypeError("Not a Node");
          }
          this._currentNode = v;
        }
      },
      _internalFilter: {
        value: function _internalFilter(node) {
          var result, filter;
          if (this._active) {
            utils.InvalidStateError();
          }
          if (!(1 << node.nodeType - 1 & this._whatToShow)) {
            return NodeFilter.FILTER_SKIP;
          }
          filter = this._filter;
          if (filter === null) {
            result = NodeFilter.FILTER_ACCEPT;
          } else {
            this._active = true;
            try {
              if (typeof filter === "function") {
                result = filter(node);
              } else {
                result = filter.acceptNode(node);
              }
            } finally {
              this._active = false;
            }
          }
          return +result;
        }
      },
      parentNode: {
        value: function parentNode() {
          var node = this._currentNode;
          while (node !== this.root) {
            node = node.parentNode;
            if (node === null) {
              return null;
            }
            if (this._internalFilter(node) === NodeFilter.FILTER_ACCEPT) {
              this._currentNode = node;
              return node;
            }
          }
          return null;
        }
      },
      firstChild: {
        value: function firstChild() {
          return traverseChildren(this, "first");
        }
      },
      lastChild: {
        value: function lastChild() {
          return traverseChildren(this, "last");
        }
      },
      previousSibling: {
        value: function previousSibling() {
          return traverseSiblings(this, "previous");
        }
      },
      nextSibling: {
        value: function nextSibling() {
          return traverseSiblings(this, "next");
        }
      },
      previousNode: {
        value: function previousNode() {
          var node, result, previousSibling, lastChild;
          node = this._currentNode;
          while (node !== this._root) {
            for (previousSibling = node.previousSibling; previousSibling; previousSibling = node.previousSibling) {
              node = previousSibling;
              result = this._internalFilter(node);
              if (result === NodeFilter.FILTER_REJECT) {
                continue;
              }
              for (lastChild = node.lastChild; lastChild; lastChild = node.lastChild) {
                node = lastChild;
                result = this._internalFilter(node);
                if (result === NodeFilter.FILTER_REJECT) {
                  break;
                }
              }
              if (result === NodeFilter.FILTER_ACCEPT) {
                this._currentNode = node;
                return node;
              }
            }
            if (node === this.root || node.parentNode === null) {
              return null;
            }
            node = node.parentNode;
            if (this._internalFilter(node) === NodeFilter.FILTER_ACCEPT) {
              this._currentNode = node;
              return node;
            }
          }
          return null;
        }
      },
      nextNode: {
        value: function nextNode() {
          var node, result, firstChild, nextSibling;
          node = this._currentNode;
          result = NodeFilter.FILTER_ACCEPT;
          CHILDREN: while (true) {
            for (firstChild = node.firstChild; firstChild; firstChild = node.firstChild) {
              node = firstChild;
              result = this._internalFilter(node);
              if (result === NodeFilter.FILTER_ACCEPT) {
                this._currentNode = node;
                return node;
              } else if (result === NodeFilter.FILTER_REJECT) {
                break;
              }
            }
            for (nextSibling = NodeTraversal.nextSkippingChildren(node, this.root); nextSibling; nextSibling = NodeTraversal.nextSkippingChildren(node, this.root)) {
              node = nextSibling;
              result = this._internalFilter(node);
              if (result === NodeFilter.FILTER_ACCEPT) {
                this._currentNode = node;
                return node;
              } else if (result === NodeFilter.FILTER_SKIP) {
                continue CHILDREN;
              }
            }
            return null;
          }
        }
      },
      toString: {
        value: function toString() {
          return "[object TreeWalker]";
        }
      }
    });
  }
});

// external/npm/node_modules/domino/lib/NodeIterator.js
var require_NodeIterator = /*#__PURE__*/__commonJS({
  "external/npm/node_modules/domino/lib/NodeIterator.js"(exports, module) {

    module.exports = NodeIterator;
    var NodeFilter = require_NodeFilter();
    var NodeTraversal = require_NodeTraversal();
    var utils = require_utils();
    function move(node, stayWithin, directionIsNext) {
      if (directionIsNext) {
        return NodeTraversal.next(node, stayWithin);
      } else {
        if (node === stayWithin) {
          return null;
        }
        return NodeTraversal.previous(node, null);
      }
    }
    function isInclusiveAncestor(node, possibleChild) {
      for (; possibleChild; possibleChild = possibleChild.parentNode) {
        if (node === possibleChild) {
          return true;
        }
      }
      return false;
    }
    function traverse(ni, directionIsNext) {
      var node, beforeNode;
      node = ni._referenceNode;
      beforeNode = ni._pointerBeforeReferenceNode;
      while (true) {
        if (beforeNode === directionIsNext) {
          beforeNode = !beforeNode;
        } else {
          node = move(node, ni._root, directionIsNext);
          if (node === null) {
            return null;
          }
        }
        var result = ni._internalFilter(node);
        if (result === NodeFilter.FILTER_ACCEPT) {
          break;
        }
      }
      ni._referenceNode = node;
      ni._pointerBeforeReferenceNode = beforeNode;
      return node;
    }
    function NodeIterator(root, whatToShow, filter) {
      if (!root || !root.nodeType) {
        utils.NotSupportedError();
      }
      this._root = root;
      this._referenceNode = root;
      this._pointerBeforeReferenceNode = true;
      this._whatToShow = Number(whatToShow) || 0;
      this._filter = filter || null;
      this._active = false;
      root.doc._attachNodeIterator(this);
    }
    Object.defineProperties(NodeIterator.prototype, {
      root: {
        get: function root() {
          return this._root;
        }
      },
      referenceNode: {
        get: function referenceNode() {
          return this._referenceNode;
        }
      },
      pointerBeforeReferenceNode: {
        get: function pointerBeforeReferenceNode() {
          return this._pointerBeforeReferenceNode;
        }
      },
      whatToShow: {
        get: function whatToShow() {
          return this._whatToShow;
        }
      },
      filter: {
        get: function filter() {
          return this._filter;
        }
      },
      _internalFilter: {
        value: function _internalFilter(node) {
          var result, filter;
          if (this._active) {
            utils.InvalidStateError();
          }
          if (!(1 << node.nodeType - 1 & this._whatToShow)) {
            return NodeFilter.FILTER_SKIP;
          }
          filter = this._filter;
          if (filter === null) {
            result = NodeFilter.FILTER_ACCEPT;
          } else {
            this._active = true;
            try {
              if (typeof filter === "function") {
                result = filter(node);
              } else {
                result = filter.acceptNode(node);
              }
            } finally {
              this._active = false;
            }
          }
          return +result;
        }
      },
      _preremove: {
        value: function _preremove(toBeRemovedNode) {
          if (isInclusiveAncestor(toBeRemovedNode, this._root)) {
            return;
          }
          if (!isInclusiveAncestor(toBeRemovedNode, this._referenceNode)) {
            return;
          }
          if (this._pointerBeforeReferenceNode) {
            var next = toBeRemovedNode;
            while (next.lastChild) {
              next = next.lastChild;
            }
            next = NodeTraversal.next(next, this.root);
            if (next) {
              this._referenceNode = next;
              return;
            }
            this._pointerBeforeReferenceNode = false;
          }
          if (toBeRemovedNode.previousSibling === null) {
            this._referenceNode = toBeRemovedNode.parentNode;
          } else {
            this._referenceNode = toBeRemovedNode.previousSibling;
            var lastChild;
            for (lastChild = this._referenceNode.lastChild; lastChild; lastChild = this._referenceNode.lastChild) {
              this._referenceNode = lastChild;
            }
          }
        }
      },
      nextNode: {
        value: function nextNode() {
          return traverse(this, true);
        }
      },
      previousNode: {
        value: function previousNode() {
          return traverse(this, false);
        }
      },
      detach: {
        value: function detach() {}
      },
      toString: {
        value: function toString() {
          return "[object NodeIterator]";
        }
      }
    });
  }
});

// external/npm/node_modules/domino/lib/URL.js
var require_URL = /*#__PURE__*/__commonJS({
  "external/npm/node_modules/domino/lib/URL.js"(exports, module) {

    module.exports = URL;
    function URL(url) {
      if (!url) return Object.create(URL.prototype);
      this.url = url.replace(/^[ \t\n\r\f]+|[ \t\n\r\f]+$/g, "");
      var match = URL.pattern.exec(this.url);
      if (match) {
        if (match[2]) this.scheme = match[2];
        if (match[4]) {
          var userinfo = match[4].match(URL.userinfoPattern);
          if (userinfo) {
            this.username = userinfo[1];
            this.password = userinfo[3];
            match[4] = match[4].substring(userinfo[0].length);
          }
          if (match[4].match(URL.portPattern)) {
            var pos = match[4].lastIndexOf(":");
            this.host = match[4].substring(0, pos);
            this.port = match[4].substring(pos + 1);
          } else {
            this.host = match[4];
          }
        }
        if (match[5]) this.path = match[5];
        if (match[6]) this.query = match[7];
        if (match[8]) this.fragment = match[9];
      }
    }
    URL.pattern = /^(([^:\/?#]+):)?(\/\/([^\/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?$/;
    URL.userinfoPattern = /^([^@:]*)(:([^@]*))?@/;
    URL.portPattern = /:\d+$/;
    URL.authorityPattern = /^[^:\/?#]+:\/\//;
    URL.hierarchyPattern = /^[^:\/?#]+:\//;
    URL.percentEncode = function percentEncode(s) {
      var c = s.charCodeAt(0);
      if (c < 256) return "%" + c.toString(16);else throw Error("can't percent-encode codepoints > 255 yet");
    };
    URL.prototype = {
      constructor: URL,
      isAbsolute: function () {
        return !!this.scheme;
      },
      isAuthorityBased: function () {
        return URL.authorityPattern.test(this.url);
      },
      isHierarchical: function () {
        return URL.hierarchyPattern.test(this.url);
      },
      toString: function () {
        var s = "";
        if (this.scheme !== void 0) s += this.scheme + ":";
        if (this.isAbsolute()) {
          s += "//";
          if (this.username || this.password) {
            s += this.username || "";
            if (this.password) {
              s += ":" + this.password;
            }
            s += "@";
          }
          if (this.host) {
            s += this.host;
          }
        }
        if (this.port !== void 0) s += ":" + this.port;
        if (this.path !== void 0) s += this.path;
        if (this.query !== void 0) s += "?" + this.query;
        if (this.fragment !== void 0) s += "#" + this.fragment;
        return s;
      },
      resolve: function (relative) {
        var base = this;
        var r = new URL(relative);
        var t = new URL();
        if (r.scheme !== void 0) {
          t.scheme = r.scheme;
          t.username = r.username;
          t.password = r.password;
          t.host = r.host;
          t.port = r.port;
          t.path = remove_dot_segments(r.path);
          t.query = r.query;
        } else {
          t.scheme = base.scheme;
          if (r.host !== void 0) {
            t.username = r.username;
            t.password = r.password;
            t.host = r.host;
            t.port = r.port;
            t.path = remove_dot_segments(r.path);
            t.query = r.query;
          } else {
            t.username = base.username;
            t.password = base.password;
            t.host = base.host;
            t.port = base.port;
            if (!r.path) {
              t.path = base.path;
              if (r.query !== void 0) t.query = r.query;else t.query = base.query;
            } else {
              if (r.path.charAt(0) === "/") {
                t.path = remove_dot_segments(r.path);
              } else {
                t.path = merge(base.path, r.path);
                t.path = remove_dot_segments(t.path);
              }
              t.query = r.query;
            }
          }
        }
        t.fragment = r.fragment;
        return t.toString();
        function merge(basepath, refpath) {
          if (base.host !== void 0 && !base.path) return "/" + refpath;
          var lastslash = basepath.lastIndexOf("/");
          if (lastslash === -1) return refpath;else return basepath.substring(0, lastslash + 1) + refpath;
        }
        function remove_dot_segments(path) {
          if (!path) return path;
          var output = "";
          while (path.length > 0) {
            if (path === "." || path === "..") {
              path = "";
              break;
            }
            var twochars = path.substring(0, 2);
            var threechars = path.substring(0, 3);
            var fourchars = path.substring(0, 4);
            if (threechars === "../") {
              path = path.substring(3);
            } else if (twochars === "./") {
              path = path.substring(2);
            } else if (threechars === "/./") {
              path = "/" + path.substring(3);
            } else if (twochars === "/." && path.length === 2) {
              path = "/";
            } else if (fourchars === "/../" || threechars === "/.." && path.length === 3) {
              path = "/" + path.substring(4);
              output = output.replace(/\/?[^\/]*$/, "");
            } else {
              var segment = path.match(/(\/?([^\/]*))/)[0];
              output += segment;
              path = path.substring(segment.length);
            }
          }
          return output;
        }
      }
    };
  }
});

// external/npm/node_modules/domino/lib/CustomEvent.js
var require_CustomEvent = /*#__PURE__*/__commonJS({
  "external/npm/node_modules/domino/lib/CustomEvent.js"(exports, module) {

    module.exports = CustomEvent;
    var Event = require_Event();
    function CustomEvent(type, dictionary) {
      Event.call(this, type, dictionary);
    }
    CustomEvent.prototype = Object.create(Event.prototype, {
      constructor: {
        value: CustomEvent
      }
    });
  }
});

// external/npm/node_modules/domino/lib/events.js
var require_events = /*#__PURE__*/__commonJS({
  "external/npm/node_modules/domino/lib/events.js"(exports, module) {

    module.exports = {
      Event: require_Event(),
      UIEvent: require_UIEvent(),
      MouseEvent: require_MouseEvent(),
      CustomEvent: require_CustomEvent()
    };
  }
});

// external/npm/node_modules/domino/lib/style_parser.js
var require_style_parser = /*#__PURE__*/__commonJS({
  "external/npm/node_modules/domino/lib/style_parser.js"(exports) {

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.hyphenate = exports.parse = void 0;
    function parse(value) {
      const styles = [];
      let i = 0;
      let parenDepth = 0;
      let quote = 0;
      let valueStart = 0;
      let propStart = 0;
      let currentProp = null;
      while (i < value.length) {
        const token = value.charCodeAt(i++);
        switch (token) {
          case 40:
            parenDepth++;
            break;
          case 41:
            parenDepth--;
            break;
          case 39:
            if (quote === 0) {
              quote = 39;
            } else if (quote === 39 && value.charCodeAt(i - 1) !== 92) {
              quote = 0;
            }
            break;
          case 34:
            if (quote === 0) {
              quote = 34;
            } else if (quote === 34 && value.charCodeAt(i - 1) !== 92) {
              quote = 0;
            }
            break;
          case 58:
            if (!currentProp && parenDepth === 0 && quote === 0) {
              currentProp = hyphenate(value.substring(propStart, i - 1).trim());
              valueStart = i;
            }
            break;
          case 59:
            if (currentProp && valueStart > 0 && parenDepth === 0 && quote === 0) {
              const styleVal = value.substring(valueStart, i - 1).trim();
              styles.push(currentProp, styleVal);
              propStart = i;
              valueStart = 0;
              currentProp = null;
            }
            break;
        }
      }
      if (currentProp && valueStart) {
        const styleVal = value.slice(valueStart).trim();
        styles.push(currentProp, styleVal);
      }
      return styles;
    }
    exports.parse = parse;
    function hyphenate(value) {
      return value.replace(/[a-z][A-Z]/g, v => {
        return v.charAt(0) + "-" + v.charAt(1);
      }).toLowerCase();
    }
    exports.hyphenate = hyphenate;
  }
});

// external/npm/node_modules/domino/lib/CSSStyleDeclaration.js
var require_CSSStyleDeclaration = /*#__PURE__*/__commonJS({
  "external/npm/node_modules/domino/lib/CSSStyleDeclaration.js"(exports, module) {

    var {
      parse
    } = require_style_parser();
    module.exports = function (elt) {
      const style = new CSSStyleDeclaration(elt);
      const handler = {
        get: function (target, property) {
          return property in target ? target[property] : target.getPropertyValue(dasherizeProperty(property));
        },
        has: function (target, key) {
          return true;
        },
        set: function (target, property, value) {
          if (property in target) {
            target[property] = value;
          } else {
            target.setProperty(dasherizeProperty(property), value != null ? value : void 0);
          }
          return true;
        }
      };
      return new Proxy(style, handler);
    };
    function dasherizeProperty(property) {
      return property.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
    }
    function CSSStyleDeclaration(elt) {
      this._element = elt;
    }
    var IMPORTANT_BANG = "!important";
    function parseStyles(value) {
      const result = {
        property: {},
        priority: {}
      };
      if (!value) {
        return result;
      }
      const styleValues = parse(value);
      if (styleValues.length < 2) {
        return result;
      }
      for (let i = 0; i < styleValues.length; i += 2) {
        const name = styleValues[i];
        let value2 = styleValues[i + 1];
        if (value2.endsWith(IMPORTANT_BANG)) {
          result.priority[name] = "important";
          value2 = value2.slice(0, -IMPORTANT_BANG.length).trim();
        }
        result.property[name] = value2;
      }
      return result;
    }
    var NO_CHANGE = {};
    CSSStyleDeclaration.prototype = Object.create(Object.prototype, {
      _parsed: {
        get: function () {
          if (!this._parsedStyles || this.cssText !== this._lastParsedText) {
            var text = this.cssText;
            this._parsedStyles = parseStyles(text);
            this._lastParsedText = text;
            delete this._names;
          }
          return this._parsedStyles;
        }
      },
      _serialize: {
        value: function () {
          var styles = this._parsed;
          var s = "";
          for (var name in styles.property) {
            if (s) s += " ";
            s += name + ": " + styles.property[name];
            if (styles.priority[name]) {
              s += " !" + styles.priority[name];
            }
            s += ";";
          }
          this.cssText = s;
          this._lastParsedText = s;
          delete this._names;
        }
      },
      cssText: {
        get: function () {
          return this._element.getAttribute("style");
        },
        set: function (value) {
          this._element.setAttribute("style", value);
        }
      },
      length: {
        get: function () {
          if (!this._names) this._names = Object.getOwnPropertyNames(this._parsed.property);
          return this._names.length;
        }
      },
      item: {
        value: function (n) {
          if (!this._names) this._names = Object.getOwnPropertyNames(this._parsed.property);
          return this._names[n];
        }
      },
      getPropertyValue: {
        value: function (property) {
          property = property.toLowerCase();
          return this._parsed.property[property] || "";
        }
      },
      getPropertyPriority: {
        value: function (property) {
          property = property.toLowerCase();
          return this._parsed.priority[property] || "";
        }
      },
      setProperty: {
        value: function (property, value, priority) {
          property = property.toLowerCase();
          if (value === null || value === void 0) {
            value = "";
          }
          if (priority === null || priority === void 0) {
            priority = "";
          }
          if (value !== NO_CHANGE) {
            value = "" + value;
          }
          value = value.trim();
          if (value === "") {
            this.removeProperty(property);
            return;
          }
          if (priority !== "" && priority !== NO_CHANGE && !/^important$/i.test(priority)) {
            return;
          }
          var styles = this._parsed;
          if (value === NO_CHANGE) {
            if (!styles.property[property]) {
              return;
            }
            if (priority !== "") {
              styles.priority[property] = "important";
            } else {
              delete styles.priority[property];
            }
          } else {
            if (value.indexOf(";") !== -1) return;
            var newprops = parseStyles(property + ":" + value);
            if (Object.getOwnPropertyNames(newprops.property).length === 0) {
              return;
            }
            if (Object.getOwnPropertyNames(newprops.priority).length !== 0) {
              return;
            }
            for (var p in newprops.property) {
              styles.property[p] = newprops.property[p];
              if (priority === NO_CHANGE) {
                continue;
              } else if (priority !== "") {
                styles.priority[p] = "important";
              } else if (styles.priority[p]) {
                delete styles.priority[p];
              }
            }
          }
          this._serialize();
        }
      },
      setPropertyValue: {
        value: function (property, value) {
          return this.setProperty(property, value, NO_CHANGE);
        }
      },
      setPropertyPriority: {
        value: function (property, priority) {
          return this.setProperty(property, NO_CHANGE, priority);
        }
      },
      removeProperty: {
        value: function (property) {
          property = property.toLowerCase();
          var styles = this._parsed;
          if (property in styles.property) {
            delete styles.property[property];
            delete styles.priority[property];
            this._serialize();
          }
        }
      }
    });
  }
});

// external/npm/node_modules/domino/lib/URLUtils.js
var require_URLUtils = /*#__PURE__*/__commonJS({
  "external/npm/node_modules/domino/lib/URLUtils.js"(exports, module) {

    var URL = require_URL();
    module.exports = URLUtils;
    function URLUtils() {}
    URLUtils.prototype = Object.create(Object.prototype, {
      _url: {
        get: function () {
          return new URL(this.href);
        }
      },
      protocol: {
        get: function () {
          var url = this._url;
          if (url && url.scheme) return url.scheme + ":";else return ":";
        },
        set: function (v) {
          var output = this.href;
          var url = new URL(output);
          if (url.isAbsolute()) {
            v = v.replace(/:+$/, "");
            v = v.replace(/[^-+\.a-zA-Z0-9]/g, URL.percentEncode);
            if (v.length > 0) {
              url.scheme = v;
              output = url.toString();
            }
          }
          this.href = output;
        }
      },
      host: {
        get: function () {
          var url = this._url;
          if (url.isAbsolute() && url.isAuthorityBased()) return url.host + (url.port ? ":" + url.port : "");else return "";
        },
        set: function (v) {
          var output = this.href;
          var url = new URL(output);
          if (url.isAbsolute() && url.isAuthorityBased()) {
            v = v.replace(/[^-+\._~!$&'()*,;:=a-zA-Z0-9]/g, URL.percentEncode);
            if (v.length > 0) {
              url.host = v;
              delete url.port;
              output = url.toString();
            }
          }
          this.href = output;
        }
      },
      hostname: {
        get: function () {
          var url = this._url;
          if (url.isAbsolute() && url.isAuthorityBased()) return url.host;else return "";
        },
        set: function (v) {
          var output = this.href;
          var url = new URL(output);
          if (url.isAbsolute() && url.isAuthorityBased()) {
            v = v.replace(/^\/+/, "");
            v = v.replace(/[^-+\._~!$&'()*,;:=a-zA-Z0-9]/g, URL.percentEncode);
            if (v.length > 0) {
              url.host = v;
              output = url.toString();
            }
          }
          this.href = output;
        }
      },
      port: {
        get: function () {
          var url = this._url;
          if (url.isAbsolute() && url.isAuthorityBased() && url.port !== void 0) return url.port;else return "";
        },
        set: function (v) {
          var output = this.href;
          var url = new URL(output);
          if (url.isAbsolute() && url.isAuthorityBased()) {
            v = "" + v;
            v = v.replace(/[^0-9].*$/, "");
            v = v.replace(/^0+/, "");
            if (v.length === 0) v = "0";
            if (parseInt(v, 10) <= 65535) {
              url.port = v;
              output = url.toString();
            }
          }
          this.href = output;
        }
      },
      pathname: {
        get: function () {
          var url = this._url;
          if (url.isAbsolute() && url.isHierarchical()) return url.path;else return "";
        },
        set: function (v) {
          var output = this.href;
          var url = new URL(output);
          if (url.isAbsolute() && url.isHierarchical()) {
            if (v.charAt(0) !== "/") v = "/" + v;
            v = v.replace(/[^-+\._~!$&'()*,;:=@\/a-zA-Z0-9]/g, URL.percentEncode);
            url.path = v;
            output = url.toString();
          }
          this.href = output;
        }
      },
      search: {
        get: function () {
          var url = this._url;
          if (url.isAbsolute() && url.isHierarchical() && url.query !== void 0) return "?" + url.query;else return "";
        },
        set: function (v) {
          var output = this.href;
          var url = new URL(output);
          if (url.isAbsolute() && url.isHierarchical()) {
            if (v.charAt(0) === "?") v = v.substring(1);
            v = v.replace(/[^-+\._~!$&'()*,;:=@\/?a-zA-Z0-9]/g, URL.percentEncode);
            url.query = v;
            output = url.toString();
          }
          this.href = output;
        }
      },
      hash: {
        get: function () {
          var url = this._url;
          if (url == null || url.fragment == null || url.fragment === "") {
            return "";
          } else {
            return "#" + url.fragment;
          }
        },
        set: function (v) {
          var output = this.href;
          var url = new URL(output);
          if (v.charAt(0) === "#") v = v.substring(1);
          v = v.replace(/[^-+\._~!$&'()*,;:=@\/?a-zA-Z0-9]/g, URL.percentEncode);
          url.fragment = v;
          output = url.toString();
          this.href = output;
        }
      },
      username: {
        get: function () {
          var url = this._url;
          return url.username || "";
        },
        set: function (v) {
          var output = this.href;
          var url = new URL(output);
          if (url.isAbsolute()) {
            v = v.replace(/[\x00-\x1F\x7F-\uFFFF "#<>?`\/@\\:]/g, URL.percentEncode);
            url.username = v;
            output = url.toString();
          }
          this.href = output;
        }
      },
      password: {
        get: function () {
          var url = this._url;
          return url.password || "";
        },
        set: function (v) {
          var output = this.href;
          var url = new URL(output);
          if (url.isAbsolute()) {
            if (v === "") {
              url.password = null;
            } else {
              v = v.replace(/[\x00-\x1F\x7F-\uFFFF "#<>?`\/@\\]/g, URL.percentEncode);
              url.password = v;
            }
            output = url.toString();
          }
          this.href = output;
        }
      },
      origin: {
        get: function () {
          var url = this._url;
          if (url == null) {
            return "";
          }
          var originForPort = function (defaultPort) {
            var origin = [url.scheme, url.host, +url.port || defaultPort];
            return origin[0] + "://" + origin[1] + (origin[2] === defaultPort ? "" : ":" + origin[2]);
          };
          switch (url.scheme) {
            case "ftp":
              return originForPort(21);
            case "gopher":
              return originForPort(70);
            case "http":
            case "ws":
              return originForPort(80);
            case "https":
            case "wss":
              return originForPort(443);
            default:
              return url.scheme + "://";
          }
        }
      }
    });
    URLUtils._inherit = function (proto) {
      Object.getOwnPropertyNames(URLUtils.prototype).forEach(function (p) {
        if (p === "constructor" || p === "href") {
          return;
        }
        var desc = Object.getOwnPropertyDescriptor(URLUtils.prototype, p);
        Object.defineProperty(proto, p, desc);
      });
    };
  }
});

// external/npm/node_modules/domino/lib/defineElement.js
var require_defineElement = /*#__PURE__*/__commonJS({
  "external/npm/node_modules/domino/lib/defineElement.js"(exports, module) {

    var attributes = require_attributes();
    var isApiWritable = require_config().isApiWritable;
    module.exports = function (spec, defaultConstructor, tagList, tagNameToImpl) {
      var c = spec.ctor;
      if (c) {
        var props = spec.props || {};
        if (spec.attributes) {
          for (var n in spec.attributes) {
            var attr = spec.attributes[n];
            if (typeof attr !== "object" || Array.isArray(attr)) attr = {
              type: attr
            };
            if (!attr.name) attr.name = n.toLowerCase();
            props[n] = attributes.property(attr);
          }
        }
        props.constructor = {
          value: c,
          writable: isApiWritable
        };
        c.prototype = Object.create((spec.superclass || defaultConstructor).prototype, props);
        if (spec.events) {
          addEventHandlers(c, spec.events);
        }
        tagList[spec.name] = c;
      } else {
        c = defaultConstructor;
      }
      (spec.tags || spec.tag && [spec.tag] || []).forEach(function (tag) {
        tagNameToImpl[tag] = c;
      });
      return c;
    };
    function EventHandlerBuilder(body, document, form, element) {
      this.body = body;
      this.document = document;
      this.form = form;
      this.element = element;
    }
    EventHandlerBuilder.prototype.build = function () {
      return () => {};
    };
    function EventHandlerChangeHandler(elt, name, oldval, newval) {
      var doc = elt.ownerDocument || /* @__PURE__ */Object.create(null);
      var form = elt.form || /* @__PURE__ */Object.create(null);
      elt[name] = new EventHandlerBuilder(newval, doc, form, elt).build();
    }
    function addEventHandlers(c, eventHandlerTypes) {
      var p = c.prototype;
      eventHandlerTypes.forEach(function (type) {
        Object.defineProperty(p, "on" + type, {
          get: function () {
            return this._getEventHandler(type);
          },
          set: function (v) {
            this._setEventHandler(type, v);
          }
        });
        attributes.registerChangeHandler(c, "on" + type, EventHandlerChangeHandler);
      });
    }
  }
});

// external/npm/node_modules/domino/lib/htmlelts.js
var require_htmlelts = /*#__PURE__*/__commonJS({
  "external/npm/node_modules/domino/lib/htmlelts.js"(exports) {

    var Node = require_Node();
    var Element = require_Element();
    var CSSStyleDeclaration = require_CSSStyleDeclaration();
    var utils = require_utils();
    var URLUtils = require_URLUtils();
    var defineElement = require_defineElement();
    var htmlElements = exports.elements = {};
    var htmlNameToImpl = /* @__PURE__ */Object.create(null);
    exports.createElement = function (doc, localName, prefix) {
      var impl = htmlNameToImpl[localName] || HTMLUnknownElement;
      return new impl(doc, localName, prefix);
    };
    function define(spec) {
      return defineElement(spec, HTMLElement, htmlElements, htmlNameToImpl);
    }
    function URL(attr) {
      return {
        get: function () {
          var v = this._getattr(attr);
          if (v === null) {
            return "";
          }
          var url = this.doc._resolve(v);
          return url === null ? v : url;
        },
        set: function (value) {
          this._setattr(attr, value);
        }
      };
    }
    function CORS(attr) {
      return {
        get: function () {
          var v = this._getattr(attr);
          if (v === null) {
            return null;
          }
          if (v.toLowerCase() === "use-credentials") {
            return "use-credentials";
          }
          return "anonymous";
        },
        set: function (value) {
          if (value === null || value === void 0) {
            this.removeAttribute(attr);
          } else {
            this._setattr(attr, value);
          }
        }
      };
    }
    var REFERRER = {
      type: ["", "no-referrer", "no-referrer-when-downgrade", "same-origin", "origin", "strict-origin", "origin-when-cross-origin", "strict-origin-when-cross-origin", "unsafe-url"],
      missing: ""
    };
    var focusableElements = {
      "A": true,
      "LINK": true,
      "BUTTON": true,
      "INPUT": true,
      "SELECT": true,
      "TEXTAREA": true,
      "COMMAND": true
    };
    var HTMLFormElement = function (doc, localName, prefix) {
      HTMLElement.call(this, doc, localName, prefix);
      this._form = null;
    };
    var HTMLElement = exports.HTMLElement = define({
      superclass: Element,
      name: "HTMLElement",
      ctor: function HTMLElement2(doc, localName, prefix) {
        Element.call(this, doc, localName, utils.NAMESPACE.HTML, prefix);
      },
      props: {
        dangerouslySetInnerHTML: {
          set: function (v) {
            this._innerHTML = v;
          }
        },
        innerHTML: {
          get: function () {
            return this.serialize();
          },
          set: function (v) {
            var parser = this.ownerDocument.implementation.mozHTMLParser(this.ownerDocument._address, this);
            parser.parse(v === null ? "" : String(v), true);
            var target = this instanceof htmlNameToImpl.template ? this.content : this;
            while (target.hasChildNodes()) target.removeChild(target.firstChild);
            target.appendChild(parser._asDocumentFragment());
          }
        },
        style: {
          get: function () {
            if (!this._style) this._style = new CSSStyleDeclaration(this);
            return this._style;
          },
          set: function (v) {
            if (v === null || v === void 0) {
              v = "";
            }
            this._setattr("style", String(v));
          }
        },
        blur: {
          value: function () {}
        },
        focus: {
          value: function () {}
        },
        forceSpellCheck: {
          value: function () {}
        },
        click: {
          value: function () {
            if (this._click_in_progress) return;
            this._click_in_progress = true;
            try {
              if (this._pre_click_activation_steps) this._pre_click_activation_steps();
              var event = this.ownerDocument.createEvent("MouseEvent");
              event.initMouseEvent("click", true, true, this.ownerDocument.defaultView, 1, 0, 0, 0, 0, false, false, false, false, 0, null);
              var success = this.dispatchEvent(event);
              if (success) {
                if (this._post_click_activation_steps) this._post_click_activation_steps(event);
              } else {
                if (this._cancelled_activation_steps) this._cancelled_activation_steps();
              }
            } finally {
              this._click_in_progress = false;
            }
          }
        },
        submit: {
          value: utils.nyi
        }
      },
      attributes: {
        title: String,
        lang: String,
        dir: {
          type: ["ltr", "rtl", "auto"],
          missing: ""
        },
        draggable: {
          type: ["true", "false"],
          treatNullAsEmptyString: true
        },
        spellcheck: {
          type: ["true", "false"],
          missing: ""
        },
        enterKeyHint: {
          type: ["enter", "done", "go", "next", "previous", "search", "send"],
          missing: ""
        },
        autoCapitalize: {
          type: ["off", "on", "none", "sentences", "words", "characters"],
          missing: ""
        },
        autoFocus: Boolean,
        accessKey: String,
        nonce: String,
        hidden: Boolean,
        translate: {
          type: ["no", "yes"],
          missing: ""
        },
        tabIndex: {
          type: "long",
          default: function () {
            if (this.tagName in focusableElements || this.contentEditable) return 0;else return -1;
          }
        }
      },
      events: ["abort", "canplay", "canplaythrough", "change", "click", "contextmenu", "cuechange", "dblclick", "drag", "dragend", "dragenter", "dragleave", "dragover", "dragstart", "drop", "durationchange", "emptied", "ended", "input", "invalid", "keydown", "keypress", "keyup", "loadeddata", "loadedmetadata", "loadstart", "mousedown", "mousemove", "mouseout", "mouseover", "mouseup", "mousewheel", "pause", "play", "playing", "progress", "ratechange", "readystatechange", "reset", "seeked", "seeking", "select", "show", "stalled", "submit", "suspend", "timeupdate", "volumechange", "waiting", "blur", "error", "focus", "load", "scroll"]
    });
    var HTMLUnknownElement = define({
      name: "HTMLUnknownElement",
      ctor: function HTMLUnknownElement2(doc, localName, prefix) {
        HTMLElement.call(this, doc, localName, prefix);
      }
    });
    var formAssociatedProps = {
      form: {
        get: function () {
          return this._form;
        }
      }
    };
    define({
      tag: "a",
      name: "HTMLAnchorElement",
      ctor: function HTMLAnchorElement(doc, localName, prefix) {
        HTMLElement.call(this, doc, localName, prefix);
      },
      props: {
        _post_click_activation_steps: {
          value: function (e) {
            if (this.href) {
              this.ownerDocument.defaultView.location = this.href;
            }
          }
        }
      },
      attributes: {
        href: URL,
        ping: String,
        download: String,
        target: String,
        rel: String,
        media: String,
        hreflang: String,
        type: String,
        referrerPolicy: REFERRER,
        coords: String,
        charset: String,
        name: String,
        rev: String,
        shape: String
      }
    });
    URLUtils._inherit(htmlNameToImpl.a.prototype);
    define({
      tag: "area",
      name: "HTMLAreaElement",
      ctor: function HTMLAreaElement(doc, localName, prefix) {
        HTMLElement.call(this, doc, localName, prefix);
      },
      attributes: {
        alt: String,
        target: String,
        download: String,
        rel: String,
        media: String,
        href: URL,
        hreflang: String,
        type: String,
        shape: String,
        coords: String,
        ping: String,
        referrerPolicy: REFERRER,
        noHref: Boolean
      }
    });
    URLUtils._inherit(htmlNameToImpl.area.prototype);
    define({
      tag: "br",
      name: "HTMLBRElement",
      ctor: function HTMLBRElement(doc, localName, prefix) {
        HTMLElement.call(this, doc, localName, prefix);
      },
      attributes: {
        clear: String
      }
    });
    define({
      tag: "base",
      name: "HTMLBaseElement",
      ctor: function HTMLBaseElement(doc, localName, prefix) {
        HTMLElement.call(this, doc, localName, prefix);
      },
      attributes: {
        "target": String
      }
    });
    define({
      tag: "body",
      name: "HTMLBodyElement",
      ctor: function HTMLBodyElement(doc, localName, prefix) {
        HTMLElement.call(this, doc, localName, prefix);
      },
      events: ["afterprint", "beforeprint", "beforeunload", "blur", "error", "focus", "hashchange", "load", "message", "offline", "online", "pagehide", "pageshow", "popstate", "resize", "scroll", "storage", "unload"],
      attributes: {
        text: {
          type: String,
          treatNullAsEmptyString: true
        },
        link: {
          type: String,
          treatNullAsEmptyString: true
        },
        vLink: {
          type: String,
          treatNullAsEmptyString: true
        },
        aLink: {
          type: String,
          treatNullAsEmptyString: true
        },
        bgColor: {
          type: String,
          treatNullAsEmptyString: true
        },
        background: String
      }
    });
    define({
      tag: "button",
      name: "HTMLButtonElement",
      ctor: function HTMLButtonElement(doc, localName, prefix) {
        HTMLFormElement.call(this, doc, localName, prefix);
      },
      props: formAssociatedProps,
      attributes: {
        name: String,
        value: String,
        disabled: Boolean,
        autofocus: Boolean,
        type: {
          type: ["submit", "reset", "button", "menu"],
          missing: "submit"
        },
        formTarget: String,
        formAction: URL,
        formNoValidate: Boolean,
        formMethod: {
          type: ["get", "post", "dialog"],
          invalid: "get",
          missing: ""
        },
        formEnctype: {
          type: ["application/x-www-form-urlencoded", "multipart/form-data", "text/plain"],
          invalid: "application/x-www-form-urlencoded",
          missing: ""
        }
      }
    });
    define({
      tag: "dl",
      name: "HTMLDListElement",
      ctor: function HTMLDListElement(doc, localName, prefix) {
        HTMLElement.call(this, doc, localName, prefix);
      },
      attributes: {
        compact: Boolean
      }
    });
    define({
      tag: "data",
      name: "HTMLDataElement",
      ctor: function HTMLDataElement(doc, localName, prefix) {
        HTMLElement.call(this, doc, localName, prefix);
      },
      attributes: {
        value: String
      }
    });
    define({
      tag: "datalist",
      name: "HTMLDataListElement",
      ctor: function HTMLDataListElement(doc, localName, prefix) {
        HTMLElement.call(this, doc, localName, prefix);
      }
    });
    define({
      tag: "details",
      name: "HTMLDetailsElement",
      ctor: function HTMLDetailsElement(doc, localName, prefix) {
        HTMLElement.call(this, doc, localName, prefix);
      },
      attributes: {
        "open": Boolean
      }
    });
    define({
      tag: "div",
      name: "HTMLDivElement",
      ctor: function HTMLDivElement(doc, localName, prefix) {
        HTMLElement.call(this, doc, localName, prefix);
      },
      attributes: {
        align: String
      }
    });
    define({
      tag: "embed",
      name: "HTMLEmbedElement",
      ctor: function HTMLEmbedElement(doc, localName, prefix) {
        HTMLElement.call(this, doc, localName, prefix);
      },
      attributes: {
        src: URL,
        type: String,
        width: String,
        height: String,
        align: String,
        name: String
      }
    });
    define({
      tag: "fieldset",
      name: "HTMLFieldSetElement",
      ctor: function HTMLFieldSetElement(doc, localName, prefix) {
        HTMLFormElement.call(this, doc, localName, prefix);
      },
      props: formAssociatedProps,
      attributes: {
        disabled: Boolean,
        name: String
      }
    });
    define({
      tag: "form",
      name: "HTMLFormElement",
      ctor: function HTMLFormElement2(doc, localName, prefix) {
        HTMLElement.call(this, doc, localName, prefix);
      },
      attributes: {
        action: String,
        autocomplete: {
          type: ["on", "off"],
          missing: "on"
        },
        name: String,
        acceptCharset: {
          name: "accept-charset"
        },
        target: String,
        noValidate: Boolean,
        method: {
          type: ["get", "post", "dialog"],
          invalid: "get",
          missing: "get"
        },
        enctype: {
          type: ["application/x-www-form-urlencoded", "multipart/form-data", "text/plain"],
          invalid: "application/x-www-form-urlencoded",
          missing: "application/x-www-form-urlencoded"
        },
        encoding: {
          name: "enctype",
          type: ["application/x-www-form-urlencoded", "multipart/form-data", "text/plain"],
          invalid: "application/x-www-form-urlencoded",
          missing: "application/x-www-form-urlencoded"
        }
      }
    });
    define({
      tag: "hr",
      name: "HTMLHRElement",
      ctor: function HTMLHRElement(doc, localName, prefix) {
        HTMLElement.call(this, doc, localName, prefix);
      },
      attributes: {
        align: String,
        color: String,
        noShade: Boolean,
        size: String,
        width: String
      }
    });
    define({
      tag: "head",
      name: "HTMLHeadElement",
      ctor: function HTMLHeadElement(doc, localName, prefix) {
        HTMLElement.call(this, doc, localName, prefix);
      }
    });
    define({
      tags: ["h1", "h2", "h3", "h4", "h5", "h6"],
      name: "HTMLHeadingElement",
      ctor: function HTMLHeadingElement(doc, localName, prefix) {
        HTMLElement.call(this, doc, localName, prefix);
      },
      attributes: {
        align: String
      }
    });
    define({
      tag: "html",
      name: "HTMLHtmlElement",
      ctor: function HTMLHtmlElement(doc, localName, prefix) {
        HTMLElement.call(this, doc, localName, prefix);
      },
      attributes: {
        xmlns: URL,
        version: String
      }
    });
    define({
      tag: "iframe",
      name: "HTMLIFrameElement",
      ctor: function HTMLIFrameElement(doc, localName, prefix) {
        HTMLElement.call(this, doc, localName, prefix);
      },
      attributes: {
        src: URL,
        srcdoc: String,
        name: String,
        width: String,
        height: String,
        seamless: Boolean,
        allow: Boolean,
        allowFullscreen: Boolean,
        allowUserMedia: Boolean,
        allowPaymentRequest: Boolean,
        referrerPolicy: REFERRER,
        loading: {
          type: ["eager", "lazy"],
          treatNullAsEmptyString: true
        },
        align: String,
        scrolling: String,
        frameBorder: String,
        longDesc: URL,
        marginHeight: {
          type: String,
          treatNullAsEmptyString: true
        },
        marginWidth: {
          type: String,
          treatNullAsEmptyString: true
        }
      }
    });
    define({
      tag: "img",
      name: "HTMLImageElement",
      ctor: function HTMLImageElement(doc, localName, prefix) {
        HTMLElement.call(this, doc, localName, prefix);
      },
      attributes: {
        alt: String,
        src: URL,
        srcset: String,
        crossOrigin: CORS,
        useMap: String,
        isMap: Boolean,
        sizes: String,
        height: {
          type: "unsigned long",
          default: 0
        },
        width: {
          type: "unsigned long",
          default: 0
        },
        referrerPolicy: REFERRER,
        loading: {
          type: ["eager", "lazy"],
          missing: ""
        },
        name: String,
        lowsrc: URL,
        align: String,
        hspace: {
          type: "unsigned long",
          default: 0
        },
        vspace: {
          type: "unsigned long",
          default: 0
        },
        longDesc: URL,
        border: {
          type: String,
          treatNullAsEmptyString: true
        }
      }
    });
    define({
      tag: "input",
      name: "HTMLInputElement",
      ctor: function HTMLInputElement(doc, localName, prefix) {
        HTMLFormElement.call(this, doc, localName, prefix);
      },
      props: {
        form: formAssociatedProps.form,
        _post_click_activation_steps: {
          value: function (e) {
            if (this.type === "checkbox") {
              this.checked = !this.checked;
            } else if (this.type === "radio") {
              var group = this.form.getElementsByName(this.name);
              for (var i = group.length - 1; i >= 0; i--) {
                var el = group[i];
                el.checked = el === this;
              }
            }
          }
        }
      },
      attributes: {
        name: String,
        disabled: Boolean,
        autofocus: Boolean,
        accept: String,
        alt: String,
        max: String,
        min: String,
        pattern: String,
        placeholder: String,
        step: String,
        dirName: String,
        defaultValue: {
          name: "value"
        },
        multiple: Boolean,
        required: Boolean,
        readOnly: Boolean,
        checked: Boolean,
        value: String,
        src: URL,
        defaultChecked: {
          name: "checked",
          type: Boolean
        },
        size: {
          type: "unsigned long",
          default: 20,
          min: 1,
          setmin: 1
        },
        width: {
          type: "unsigned long",
          min: 0,
          setmin: 0,
          default: 0
        },
        height: {
          type: "unsigned long",
          min: 0,
          setmin: 0,
          default: 0
        },
        minLength: {
          type: "unsigned long",
          min: 0,
          setmin: 0,
          default: -1
        },
        maxLength: {
          type: "unsigned long",
          min: 0,
          setmin: 0,
          default: -1
        },
        autocomplete: String,
        type: {
          type: ["text", "hidden", "search", "tel", "url", "email", "password", "datetime", "date", "month", "week", "time", "datetime-local", "number", "range", "color", "checkbox", "radio", "file", "submit", "image", "reset", "button"],
          missing: "text"
        },
        formTarget: String,
        formNoValidate: Boolean,
        formMethod: {
          type: ["get", "post"],
          invalid: "get",
          missing: ""
        },
        formEnctype: {
          type: ["application/x-www-form-urlencoded", "multipart/form-data", "text/plain"],
          invalid: "application/x-www-form-urlencoded",
          missing: ""
        },
        inputMode: {
          type: ["verbatim", "latin", "latin-name", "latin-prose", "full-width-latin", "kana", "kana-name", "katakana", "numeric", "tel", "email", "url"],
          missing: ""
        },
        align: String,
        useMap: String
      }
    });
    define({
      tag: "keygen",
      name: "HTMLKeygenElement",
      ctor: function HTMLKeygenElement(doc, localName, prefix) {
        HTMLFormElement.call(this, doc, localName, prefix);
      },
      props: formAssociatedProps,
      attributes: {
        name: String,
        disabled: Boolean,
        autofocus: Boolean,
        challenge: String,
        keytype: {
          type: ["rsa"],
          missing: ""
        }
      }
    });
    define({
      tag: "li",
      name: "HTMLLIElement",
      ctor: function HTMLLIElement(doc, localName, prefix) {
        HTMLElement.call(this, doc, localName, prefix);
      },
      attributes: {
        value: {
          type: "long",
          default: 0
        },
        type: String
      }
    });
    define({
      tag: "label",
      name: "HTMLLabelElement",
      ctor: function HTMLLabelElement(doc, localName, prefix) {
        HTMLFormElement.call(this, doc, localName, prefix);
      },
      props: formAssociatedProps,
      attributes: {
        htmlFor: {
          name: "for",
          type: String
        }
      }
    });
    define({
      tag: "legend",
      name: "HTMLLegendElement",
      ctor: function HTMLLegendElement(doc, localName, prefix) {
        HTMLElement.call(this, doc, localName, prefix);
      },
      attributes: {
        align: String
      }
    });
    define({
      tag: "link",
      name: "HTMLLinkElement",
      ctor: function HTMLLinkElement(doc, localName, prefix) {
        HTMLElement.call(this, doc, localName, prefix);
      },
      attributes: {
        href: URL,
        rel: String,
        media: String,
        hreflang: String,
        type: String,
        crossOrigin: CORS,
        nonce: String,
        integrity: String,
        referrerPolicy: REFERRER,
        imageSizes: String,
        imageSrcset: String,
        charset: String,
        rev: String,
        target: String
      }
    });
    define({
      tag: "map",
      name: "HTMLMapElement",
      ctor: function HTMLMapElement(doc, localName, prefix) {
        HTMLElement.call(this, doc, localName, prefix);
      },
      attributes: {
        name: String
      }
    });
    define({
      tag: "menu",
      name: "HTMLMenuElement",
      ctor: function HTMLMenuElement(doc, localName, prefix) {
        HTMLElement.call(this, doc, localName, prefix);
      },
      attributes: {
        type: {
          type: ["context", "popup", "toolbar"],
          missing: "toolbar"
        },
        label: String,
        compact: Boolean
      }
    });
    define({
      tag: "meta",
      name: "HTMLMetaElement",
      ctor: function HTMLMetaElement(doc, localName, prefix) {
        HTMLElement.call(this, doc, localName, prefix);
      },
      attributes: {
        name: String,
        content: String,
        httpEquiv: {
          name: "http-equiv",
          type: String
        },
        scheme: String
      }
    });
    define({
      tag: "meter",
      name: "HTMLMeterElement",
      ctor: function HTMLMeterElement(doc, localName, prefix) {
        HTMLFormElement.call(this, doc, localName, prefix);
      },
      props: formAssociatedProps
    });
    define({
      tags: ["ins", "del"],
      name: "HTMLModElement",
      ctor: function HTMLModElement(doc, localName, prefix) {
        HTMLElement.call(this, doc, localName, prefix);
      },
      attributes: {
        cite: URL,
        dateTime: String
      }
    });
    define({
      tag: "ol",
      name: "HTMLOListElement",
      ctor: function HTMLOListElement(doc, localName, prefix) {
        HTMLElement.call(this, doc, localName, prefix);
      },
      props: {
        _numitems: {
          get: function () {
            var items = 0;
            this.childNodes.forEach(function (n) {
              if (n.nodeType === Node.ELEMENT_NODE && n.tagName === "LI") items++;
            });
            return items;
          }
        }
      },
      attributes: {
        type: String,
        reversed: Boolean,
        start: {
          type: "long",
          default: function () {
            if (this.reversed) return this._numitems;else return 1;
          }
        },
        compact: Boolean
      }
    });
    define({
      tag: "object",
      name: "HTMLObjectElement",
      ctor: function HTMLObjectElement(doc, localName, prefix) {
        HTMLFormElement.call(this, doc, localName, prefix);
      },
      props: formAssociatedProps,
      attributes: {
        data: URL,
        type: String,
        name: String,
        useMap: String,
        typeMustMatch: Boolean,
        width: String,
        height: String,
        align: String,
        archive: String,
        code: String,
        declare: Boolean,
        hspace: {
          type: "unsigned long",
          default: 0
        },
        standby: String,
        vspace: {
          type: "unsigned long",
          default: 0
        },
        codeBase: URL,
        codeType: String,
        border: {
          type: String,
          treatNullAsEmptyString: true
        }
      }
    });
    define({
      tag: "optgroup",
      name: "HTMLOptGroupElement",
      ctor: function HTMLOptGroupElement(doc, localName, prefix) {
        HTMLElement.call(this, doc, localName, prefix);
      },
      attributes: {
        disabled: Boolean,
        label: String
      }
    });
    define({
      tag: "option",
      name: "HTMLOptionElement",
      ctor: function HTMLOptionElement(doc, localName, prefix) {
        HTMLElement.call(this, doc, localName, prefix);
      },
      props: {
        form: {
          get: function () {
            var p = this.parentNode;
            while (p && p.nodeType === Node.ELEMENT_NODE) {
              if (p.localName === "select") return p.form;
              p = p.parentNode;
            }
          }
        },
        value: {
          get: function () {
            return this._getattr("value") || this.text;
          },
          set: function (v) {
            this._setattr("value", v);
          }
        },
        text: {
          get: function () {
            return this.textContent.replace(/[ \t\n\f\r]+/g, " ").trim();
          },
          set: function (v) {
            this.textContent = v;
          }
        }
      },
      attributes: {
        disabled: Boolean,
        defaultSelected: {
          name: "selected",
          type: Boolean
        },
        label: String
      }
    });
    define({
      tag: "output",
      name: "HTMLOutputElement",
      ctor: function HTMLOutputElement(doc, localName, prefix) {
        HTMLFormElement.call(this, doc, localName, prefix);
      },
      props: formAssociatedProps,
      attributes: {
        name: String
      }
    });
    define({
      tag: "p",
      name: "HTMLParagraphElement",
      ctor: function HTMLParagraphElement(doc, localName, prefix) {
        HTMLElement.call(this, doc, localName, prefix);
      },
      attributes: {
        align: String
      }
    });
    define({
      tag: "param",
      name: "HTMLParamElement",
      ctor: function HTMLParamElement(doc, localName, prefix) {
        HTMLElement.call(this, doc, localName, prefix);
      },
      attributes: {
        name: String,
        value: String,
        type: String,
        valueType: String
      }
    });
    define({
      tags: ["pre", "listing", "xmp"],
      name: "HTMLPreElement",
      ctor: function HTMLPreElement(doc, localName, prefix) {
        HTMLElement.call(this, doc, localName, prefix);
      },
      attributes: {
        width: {
          type: "long",
          default: 0
        }
      }
    });
    define({
      tag: "progress",
      name: "HTMLProgressElement",
      ctor: function HTMLProgressElement(doc, localName, prefix) {
        HTMLFormElement.call(this, doc, localName, prefix);
      },
      props: formAssociatedProps,
      attributes: {
        max: {
          type: Number,
          float: true,
          default: 1,
          min: 0
        }
      }
    });
    define({
      tags: ["q", "blockquote"],
      name: "HTMLQuoteElement",
      ctor: function HTMLQuoteElement(doc, localName, prefix) {
        HTMLElement.call(this, doc, localName, prefix);
      },
      attributes: {
        cite: URL
      }
    });
    define({
      tag: "script",
      name: "HTMLScriptElement",
      ctor: function HTMLScriptElement(doc, localName, prefix) {
        HTMLElement.call(this, doc, localName, prefix);
      },
      props: {
        text: {
          get: function () {
            var s = "";
            for (var i = 0, n = this.childNodes.length; i < n; i++) {
              var child = this.childNodes[i];
              if (child.nodeType === Node.TEXT_NODE) s += child._data;
            }
            return s;
          },
          set: function (value) {
            this.removeChildren();
            if (value !== null && value !== "") {
              this.appendChild(this.ownerDocument.createTextNode(value));
            }
          }
        }
      },
      attributes: {
        src: URL,
        type: String,
        charset: String,
        referrerPolicy: REFERRER,
        defer: Boolean,
        async: Boolean,
        nomodule: Boolean,
        crossOrigin: CORS,
        nonce: String,
        integrity: String
      }
    });
    define({
      tag: "select",
      name: "HTMLSelectElement",
      ctor: function HTMLSelectElement(doc, localName, prefix) {
        HTMLFormElement.call(this, doc, localName, prefix);
      },
      props: {
        form: formAssociatedProps.form,
        options: {
          get: function () {
            return this.getElementsByTagName("option");
          }
        }
      },
      attributes: {
        autocomplete: String,
        name: String,
        disabled: Boolean,
        autofocus: Boolean,
        multiple: Boolean,
        required: Boolean,
        size: {
          type: "unsigned long",
          default: 0
        }
      }
    });
    define({
      tag: "span",
      name: "HTMLSpanElement",
      ctor: function HTMLSpanElement(doc, localName, prefix) {
        HTMLElement.call(this, doc, localName, prefix);
      }
    });
    define({
      tag: "style",
      name: "HTMLStyleElement",
      ctor: function HTMLStyleElement(doc, localName, prefix) {
        HTMLElement.call(this, doc, localName, prefix);
      },
      attributes: {
        media: String,
        type: String,
        scoped: Boolean
      }
    });
    define({
      tag: "caption",
      name: "HTMLTableCaptionElement",
      ctor: function HTMLTableCaptionElement(doc, localName, prefix) {
        HTMLElement.call(this, doc, localName, prefix);
      },
      attributes: {
        align: String
      }
    });
    define({
      name: "HTMLTableCellElement",
      ctor: function HTMLTableCellElement(doc, localName, prefix) {
        HTMLElement.call(this, doc, localName, prefix);
      },
      attributes: {
        colSpan: {
          type: "unsigned long",
          default: 1
        },
        rowSpan: {
          type: "unsigned long",
          default: 1
        },
        scope: {
          type: ["row", "col", "rowgroup", "colgroup"],
          missing: ""
        },
        abbr: String,
        align: String,
        axis: String,
        height: String,
        width: String,
        ch: {
          name: "char",
          type: String
        },
        chOff: {
          name: "charoff",
          type: String
        },
        noWrap: Boolean,
        vAlign: String,
        bgColor: {
          type: String,
          treatNullAsEmptyString: true
        }
      }
    });
    define({
      tags: ["col", "colgroup"],
      name: "HTMLTableColElement",
      ctor: function HTMLTableColElement(doc, localName, prefix) {
        HTMLElement.call(this, doc, localName, prefix);
      },
      attributes: {
        span: {
          type: "limited unsigned long with fallback",
          default: 1,
          min: 1
        },
        align: String,
        ch: {
          name: "char",
          type: String
        },
        chOff: {
          name: "charoff",
          type: String
        },
        vAlign: String,
        width: String
      }
    });
    define({
      tag: "table",
      name: "HTMLTableElement",
      ctor: function HTMLTableElement(doc, localName, prefix) {
        HTMLElement.call(this, doc, localName, prefix);
      },
      props: {
        rows: {
          get: function () {
            return this.getElementsByTagName("tr");
          }
        }
      },
      attributes: {
        align: String,
        border: String,
        frame: String,
        rules: String,
        summary: String,
        width: String,
        bgColor: {
          type: String,
          treatNullAsEmptyString: true
        },
        cellPadding: {
          type: String,
          treatNullAsEmptyString: true
        },
        cellSpacing: {
          type: String,
          treatNullAsEmptyString: true
        }
      }
    });
    define({
      tag: "template",
      name: "HTMLTemplateElement",
      ctor: function HTMLTemplateElement(doc, localName, prefix) {
        HTMLElement.call(this, doc, localName, prefix);
        this._contentFragment = doc._templateDoc.createDocumentFragment();
      },
      props: {
        content: {
          get: function () {
            return this._contentFragment;
          }
        },
        serialize: {
          value: function () {
            return this.content.serialize();
          }
        }
      }
    });
    define({
      tag: "tr",
      name: "HTMLTableRowElement",
      ctor: function HTMLTableRowElement(doc, localName, prefix) {
        HTMLElement.call(this, doc, localName, prefix);
      },
      props: {
        cells: {
          get: function () {
            return this.querySelectorAll("td,th");
          }
        }
      },
      attributes: {
        align: String,
        ch: {
          name: "char",
          type: String
        },
        chOff: {
          name: "charoff",
          type: String
        },
        vAlign: String,
        bgColor: {
          type: String,
          treatNullAsEmptyString: true
        }
      }
    });
    define({
      tags: ["thead", "tfoot", "tbody"],
      name: "HTMLTableSectionElement",
      ctor: function HTMLTableSectionElement(doc, localName, prefix) {
        HTMLElement.call(this, doc, localName, prefix);
      },
      props: {
        rows: {
          get: function () {
            return this.getElementsByTagName("tr");
          }
        }
      },
      attributes: {
        align: String,
        ch: {
          name: "char",
          type: String
        },
        chOff: {
          name: "charoff",
          type: String
        },
        vAlign: String
      }
    });
    define({
      tag: "textarea",
      name: "HTMLTextAreaElement",
      ctor: function HTMLTextAreaElement(doc, localName, prefix) {
        HTMLFormElement.call(this, doc, localName, prefix);
      },
      props: {
        form: formAssociatedProps.form,
        type: {
          get: function () {
            return "textarea";
          }
        },
        defaultValue: {
          get: function () {
            return this.textContent;
          },
          set: function (v) {
            this.textContent = v;
          }
        },
        value: {
          get: function () {
            return this.defaultValue;
          },
          set: function (v) {
            this.defaultValue = v;
          }
        },
        textLength: {
          get: function () {
            return this.value.length;
          }
        }
      },
      attributes: {
        autocomplete: String,
        name: String,
        disabled: Boolean,
        autofocus: Boolean,
        placeholder: String,
        wrap: String,
        dirName: String,
        required: Boolean,
        readOnly: Boolean,
        rows: {
          type: "limited unsigned long with fallback",
          default: 2
        },
        cols: {
          type: "limited unsigned long with fallback",
          default: 20
        },
        maxLength: {
          type: "unsigned long",
          min: 0,
          setmin: 0,
          default: -1
        },
        minLength: {
          type: "unsigned long",
          min: 0,
          setmin: 0,
          default: -1
        },
        inputMode: {
          type: ["verbatim", "latin", "latin-name", "latin-prose", "full-width-latin", "kana", "kana-name", "katakana", "numeric", "tel", "email", "url"],
          missing: ""
        }
      }
    });
    define({
      tag: "time",
      name: "HTMLTimeElement",
      ctor: function HTMLTimeElement(doc, localName, prefix) {
        HTMLElement.call(this, doc, localName, prefix);
      },
      attributes: {
        dateTime: String,
        pubDate: Boolean
      }
    });
    define({
      tag: "title",
      name: "HTMLTitleElement",
      ctor: function HTMLTitleElement(doc, localName, prefix) {
        HTMLElement.call(this, doc, localName, prefix);
      },
      props: {
        text: {
          get: function () {
            return this.textContent;
          }
        }
      }
    });
    define({
      tag: "ul",
      name: "HTMLUListElement",
      ctor: function HTMLUListElement(doc, localName, prefix) {
        HTMLElement.call(this, doc, localName, prefix);
      },
      attributes: {
        type: String,
        compact: Boolean
      }
    });
    define({
      name: "HTMLMediaElement",
      ctor: function HTMLMediaElement(doc, localName, prefix) {
        HTMLElement.call(this, doc, localName, prefix);
      },
      attributes: {
        src: URL,
        crossOrigin: CORS,
        preload: {
          type: ["metadata", "none", "auto", {
            value: "",
            alias: "auto"
          }],
          missing: "auto"
        },
        loop: Boolean,
        autoplay: Boolean,
        mediaGroup: String,
        controls: Boolean,
        defaultMuted: {
          name: "muted",
          type: Boolean
        }
      }
    });
    define({
      name: "HTMLAudioElement",
      tag: "audio",
      superclass: htmlElements.HTMLMediaElement,
      ctor: function HTMLAudioElement(doc, localName, prefix) {
        htmlElements.HTMLMediaElement.call(this, doc, localName, prefix);
      }
    });
    define({
      name: "HTMLVideoElement",
      tag: "video",
      superclass: htmlElements.HTMLMediaElement,
      ctor: function HTMLVideoElement(doc, localName, prefix) {
        htmlElements.HTMLMediaElement.call(this, doc, localName, prefix);
      },
      attributes: {
        poster: URL,
        width: {
          type: "unsigned long",
          min: 0,
          default: 0
        },
        height: {
          type: "unsigned long",
          min: 0,
          default: 0
        }
      }
    });
    define({
      tag: "td",
      name: "HTMLTableDataCellElement",
      superclass: htmlElements.HTMLTableCellElement,
      ctor: function HTMLTableDataCellElement(doc, localName, prefix) {
        htmlElements.HTMLTableCellElement.call(this, doc, localName, prefix);
      }
    });
    define({
      tag: "th",
      name: "HTMLTableHeaderCellElement",
      superclass: htmlElements.HTMLTableCellElement,
      ctor: function HTMLTableHeaderCellElement(doc, localName, prefix) {
        htmlElements.HTMLTableCellElement.call(this, doc, localName, prefix);
      }
    });
    define({
      tag: "frameset",
      name: "HTMLFrameSetElement",
      ctor: function HTMLFrameSetElement(doc, localName, prefix) {
        HTMLElement.call(this, doc, localName, prefix);
      }
    });
    define({
      tag: "frame",
      name: "HTMLFrameElement",
      ctor: function HTMLFrameElement(doc, localName, prefix) {
        HTMLElement.call(this, doc, localName, prefix);
      }
    });
    define({
      tag: "canvas",
      name: "HTMLCanvasElement",
      ctor: function HTMLCanvasElement(doc, localName, prefix) {
        HTMLElement.call(this, doc, localName, prefix);
      },
      props: {
        getContext: {
          value: utils.nyi
        },
        probablySupportsContext: {
          value: utils.nyi
        },
        setContext: {
          value: utils.nyi
        },
        transferControlToProxy: {
          value: utils.nyi
        },
        toDataURL: {
          value: utils.nyi
        },
        toBlob: {
          value: utils.nyi
        }
      },
      attributes: {
        width: {
          type: "unsigned long",
          default: 300
        },
        height: {
          type: "unsigned long",
          default: 150
        }
      }
    });
    define({
      tag: "dialog",
      name: "HTMLDialogElement",
      ctor: function HTMLDialogElement(doc, localName, prefix) {
        HTMLElement.call(this, doc, localName, prefix);
      },
      props: {
        show: {
          value: utils.nyi
        },
        showModal: {
          value: utils.nyi
        },
        close: {
          value: utils.nyi
        }
      },
      attributes: {
        open: Boolean,
        returnValue: String
      }
    });
    define({
      tag: "menuitem",
      name: "HTMLMenuItemElement",
      ctor: function HTMLMenuItemElement(doc, localName, prefix) {
        HTMLElement.call(this, doc, localName, prefix);
      },
      props: {
        _label: {
          get: function () {
            var val = this._getattr("label");
            if (val !== null && val !== "") {
              return val;
            }
            val = this.textContent;
            return val.replace(/[ \t\n\f\r]+/g, " ").trim();
          }
        },
        label: {
          get: function () {
            var val = this._getattr("label");
            if (val !== null) {
              return val;
            }
            return this._label;
          },
          set: function (v) {
            this._setattr("label", v);
          }
        }
      },
      attributes: {
        type: {
          type: ["command", "checkbox", "radio"],
          missing: "command"
        },
        icon: URL,
        disabled: Boolean,
        checked: Boolean,
        radiogroup: String,
        default: Boolean
      }
    });
    define({
      tag: "source",
      name: "HTMLSourceElement",
      ctor: function HTMLSourceElement(doc, localName, prefix) {
        HTMLElement.call(this, doc, localName, prefix);
      },
      attributes: {
        srcset: String,
        sizes: String,
        media: String,
        src: URL,
        type: String,
        width: String,
        height: String
      }
    });
    define({
      tag: "track",
      name: "HTMLTrackElement",
      ctor: function HTMLTrackElement(doc, localName, prefix) {
        HTMLElement.call(this, doc, localName, prefix);
      },
      attributes: {
        src: URL,
        srclang: String,
        label: String,
        default: Boolean,
        kind: {
          type: ["subtitles", "captions", "descriptions", "chapters", "metadata"],
          missing: "subtitles",
          invalid: "metadata"
        }
      },
      props: {
        NONE: {
          get: function () {
            return 0;
          }
        },
        LOADING: {
          get: function () {
            return 1;
          }
        },
        LOADED: {
          get: function () {
            return 2;
          }
        },
        ERROR: {
          get: function () {
            return 3;
          }
        },
        readyState: {
          get: utils.nyi
        },
        track: {
          get: utils.nyi
        }
      }
    });
    define({
      tag: "font",
      name: "HTMLFontElement",
      ctor: function HTMLFontElement(doc, localName, prefix) {
        HTMLElement.call(this, doc, localName, prefix);
      },
      attributes: {
        color: {
          type: String,
          treatNullAsEmptyString: true
        },
        face: {
          type: String
        },
        size: {
          type: String
        }
      }
    });
    define({
      tag: "dir",
      name: "HTMLDirectoryElement",
      ctor: function HTMLDirectoryElement(doc, localName, prefix) {
        HTMLElement.call(this, doc, localName, prefix);
      },
      attributes: {
        compact: Boolean
      }
    });
    define({
      tags: ["abbr", "address", "article", "aside", "b", "bdi", "bdo", "cite", "content", "code", "dd", "dfn", "dt", "em", "figcaption", "figure", "footer", "header", "hgroup", "i", "kbd", "main", "mark", "nav", "noscript", "rb", "rp", "rt", "rtc", "ruby", "s", "samp", "section", "small", "strong", "sub", "summary", "sup", "u", "var", "wbr", "acronym", "basefont", "big", "center", "nobr", "noembed", "noframes", "plaintext", "strike", "tt"]
    });
  }
});

// external/npm/node_modules/domino/lib/svg.js
var require_svg = /*#__PURE__*/__commonJS({
  "external/npm/node_modules/domino/lib/svg.js"(exports) {

    var Element = require_Element();
    var defineElement = require_defineElement();
    var utils = require_utils();
    var CSSStyleDeclaration = require_CSSStyleDeclaration();
    var svgElements = exports.elements = {};
    var svgNameToImpl = /* @__PURE__ */Object.create(null);
    exports.createElement = function (doc, localName, prefix) {
      var impl = svgNameToImpl[localName] || SVGElement;
      return new impl(doc, localName, prefix);
    };
    function define(spec) {
      return defineElement(spec, SVGElement, svgElements, svgNameToImpl);
    }
    var SVGElement = define({
      superclass: Element,
      name: "SVGElement",
      ctor: function SVGElement2(doc, localName, prefix) {
        Element.call(this, doc, localName, utils.NAMESPACE.SVG, prefix);
      },
      props: {
        style: {
          get: function () {
            if (!this._style) this._style = new CSSStyleDeclaration(this);
            return this._style;
          }
        }
      }
    });
    define({
      name: "SVGSVGElement",
      ctor: function SVGSVGElement(doc, localName, prefix) {
        SVGElement.call(this, doc, localName, prefix);
      },
      tag: "svg",
      props: {
        createSVGRect: {
          value: function () {
            return exports.createElement(this.ownerDocument, "rect", null);
          }
        }
      }
    });
    define({
      tags: ["a", "altGlyph", "altGlyphDef", "altGlyphItem", "animate", "animateColor", "animateMotion", "animateTransform", "circle", "clipPath", "color-profile", "cursor", "defs", "desc", "ellipse", "feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence", "filter", "font", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignObject", "g", "glyph", "glyphRef", "hkern", "image", "line", "linearGradient", "marker", "mask", "metadata", "missing-glyph", "mpath", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "script", "set", "stop", "style", "switch", "symbol", "text", "textPath", "title", "tref", "tspan", "use", "view", "vkern"]
    });
  }
});

// external/npm/node_modules/domino/lib/MutationConstants.js
var require_MutationConstants = /*#__PURE__*/__commonJS({
  "external/npm/node_modules/domino/lib/MutationConstants.js"(exports, module) {

    module.exports = {
      VALUE: 1,
      ATTR: 2,
      REMOVE_ATTR: 3,
      REMOVE: 4,
      MOVE: 5,
      INSERT: 6
    };
  }
});

// external/npm/node_modules/domino/lib/Document.js
var require_Document = /*#__PURE__*/__commonJS({
  "external/npm/node_modules/domino/lib/Document.js"(exports, module) {

    module.exports = Document;
    var Node = require_Node();
    var NodeList = require_NodeList();
    var ContainerNode = require_ContainerNode();
    var Element = require_Element();
    var Text = require_Text();
    var Comment = require_Comment();
    var Event = require_Event();
    var DocumentFragment = require_DocumentFragment();
    var ProcessingInstruction = require_ProcessingInstruction();
    var DOMImplementation = require_DOMImplementation();
    var TreeWalker = require_TreeWalker();
    var NodeIterator = require_NodeIterator();
    var NodeFilter = require_NodeFilter();
    var URL = require_URL();
    var select = require_select();
    var events = require_events();
    var xml = require_xmlnames();
    var html = require_htmlelts();
    var svg = require_svg();
    var utils = require_utils();
    var MUTATE = require_MutationConstants();
    var NAMESPACE = utils.NAMESPACE;
    var isApiWritable = require_config().isApiWritable;
    function Document(isHTML, address) {
      ContainerNode.call(this);
      this.nodeType = Node.DOCUMENT_NODE;
      this.isHTML = isHTML;
      this._address = address || "about:blank";
      this.readyState = "loading";
      this.implementation = new DOMImplementation(this);
      this.ownerDocument = null;
      this._contentType = isHTML ? "text/html" : "application/xml";
      this.doctype = null;
      this.documentElement = null;
      this._templateDocCache = null;
      this._nodeIterators = null;
      this._nid = 1;
      this._nextnid = 2;
      this._nodes = [null, this];
      this.byId = /* @__PURE__ */Object.create(null);
      this.modclock = 0;
    }
    var supportedEvents = {
      event: "Event",
      customevent: "CustomEvent",
      uievent: "UIEvent",
      mouseevent: "MouseEvent"
    };
    var replacementEvent = {
      events: "event",
      htmlevents: "event",
      mouseevents: "mouseevent",
      mutationevents: "mutationevent",
      uievents: "uievent"
    };
    var mirrorAttr = function (f, name, defaultValue) {
      return {
        get: function () {
          var o = f.call(this);
          if (o) {
            return o[name];
          }
          return defaultValue;
        },
        set: function (value) {
          var o = f.call(this);
          if (o) {
            o[name] = value;
          }
        }
      };
    };
    function validateAndExtract(namespace, qualifiedName) {
      var prefix, localName, pos;
      if (namespace === "") {
        namespace = null;
      }
      if (!xml.isValidQName(qualifiedName)) {
        utils.InvalidCharacterError();
      }
      prefix = null;
      localName = qualifiedName;
      pos = qualifiedName.indexOf(":");
      if (pos >= 0) {
        prefix = qualifiedName.substring(0, pos);
        localName = qualifiedName.substring(pos + 1);
      }
      if (prefix !== null && namespace === null) {
        utils.NamespaceError();
      }
      if (prefix === "xml" && namespace !== NAMESPACE.XML) {
        utils.NamespaceError();
      }
      if ((prefix === "xmlns" || qualifiedName === "xmlns") && namespace !== NAMESPACE.XMLNS) {
        utils.NamespaceError();
      }
      if (namespace === NAMESPACE.XMLNS && !(prefix === "xmlns" || qualifiedName === "xmlns")) {
        utils.NamespaceError();
      }
      return {
        namespace,
        prefix,
        localName
      };
    }
    Document.prototype = Object.create(ContainerNode.prototype, {
      _setMutationHandler: {
        value: function (handler) {
          this.mutationHandler = handler;
        }
      },
      _dispatchRendererEvent: {
        value: function (targetNid, type, details) {
          var target = this._nodes[targetNid];
          if (!target) return;
          target._dispatchEvent(new Event(type, details), true);
        }
      },
      nodeName: {
        value: "#document"
      },
      nodeValue: {
        get: function () {
          return null;
        },
        set: function () {}
      },
      documentURI: {
        get: function () {
          return this._address;
        },
        set: utils.nyi
      },
      compatMode: {
        get: function () {
          return this._quirks ? "BackCompat" : "CSS1Compat";
        }
      },
      createTextNode: {
        value: function (data) {
          return new Text(this, String(data));
        }
      },
      createComment: {
        value: function (data) {
          return new Comment(this, data);
        }
      },
      createDocumentFragment: {
        value: function () {
          return new DocumentFragment(this);
        }
      },
      createProcessingInstruction: {
        value: function (target, data) {
          if (!xml.isValidName(target) || data.indexOf("?>") !== -1) utils.InvalidCharacterError();
          return new ProcessingInstruction(this, target, data);
        }
      },
      createAttribute: {
        value: function (localName) {
          localName = String(localName);
          if (!xml.isValidName(localName)) utils.InvalidCharacterError();
          if (this.isHTML) {
            localName = utils.toASCIILowerCase(localName);
          }
          return new Element._Attr(null, localName, null, null, "");
        }
      },
      createAttributeNS: {
        value: function (namespace, qualifiedName) {
          namespace = namespace === null || namespace === void 0 || namespace === "" ? null : String(namespace);
          qualifiedName = String(qualifiedName);
          var ve = validateAndExtract(namespace, qualifiedName);
          return new Element._Attr(null, ve.localName, ve.prefix, ve.namespace, "");
        }
      },
      createElement: {
        value: function (localName) {
          localName = String(localName);
          if (!xml.isValidName(localName)) utils.InvalidCharacterError();
          if (this.isHTML) {
            if (/[A-Z]/.test(localName)) localName = utils.toASCIILowerCase(localName);
            return html.createElement(this, localName, null);
          } else if (this.contentType === "application/xhtml+xml") {
            return html.createElement(this, localName, null);
          } else {
            return new Element(this, localName, null, null);
          }
        },
        writable: isApiWritable
      },
      createElementNS: {
        value: function (namespace, qualifiedName) {
          namespace = namespace === null || namespace === void 0 || namespace === "" ? null : String(namespace);
          qualifiedName = String(qualifiedName);
          var ve = validateAndExtract(namespace, qualifiedName);
          return this._createElementNS(ve.localName, ve.namespace, ve.prefix);
        },
        writable: isApiWritable
      },
      _createElementNS: {
        value: function (localName, namespace, prefix) {
          if (namespace === NAMESPACE.HTML) {
            return html.createElement(this, localName, prefix);
          } else if (namespace === NAMESPACE.SVG) {
            return svg.createElement(this, localName, prefix);
          }
          return new Element(this, localName, namespace, prefix);
        }
      },
      createEvent: {
        value: function createEvent(interfaceName) {
          interfaceName = interfaceName.toLowerCase();
          var name = replacementEvent[interfaceName] || interfaceName;
          var constructor = events[supportedEvents[name]];
          if (constructor) {
            var e = new constructor();
            e._initialized = false;
            return e;
          } else {
            utils.NotSupportedError();
          }
        }
      },
      createTreeWalker: {
        value: function (root2, whatToShow, filter) {
          if (!root2) {
            throw new TypeError("root argument is required");
          }
          if (!(root2 instanceof Node)) {
            throw new TypeError("root not a node");
          }
          whatToShow = whatToShow === void 0 ? NodeFilter.SHOW_ALL : +whatToShow;
          filter = filter === void 0 ? null : filter;
          return new TreeWalker(root2, whatToShow, filter);
        }
      },
      createNodeIterator: {
        value: function (root2, whatToShow, filter) {
          if (!root2) {
            throw new TypeError("root argument is required");
          }
          if (!(root2 instanceof Node)) {
            throw new TypeError("root not a node");
          }
          whatToShow = whatToShow === void 0 ? NodeFilter.SHOW_ALL : +whatToShow;
          filter = filter === void 0 ? null : filter;
          return new NodeIterator(root2, whatToShow, filter);
        }
      },
      _attachNodeIterator: {
        value: function (ni) {
          if (!this._nodeIterators) {
            this._nodeIterators = [];
          }
          this._nodeIterators.push(ni);
        }
      },
      _detachNodeIterator: {
        value: function (ni) {
          var idx = this._nodeIterators.indexOf(ni);
          this._nodeIterators.splice(idx, 1);
        }
      },
      _preremoveNodeIterators: {
        value: function (toBeRemoved) {
          if (this._nodeIterators) {
            this._nodeIterators.forEach(function (ni) {
              ni._preremove(toBeRemoved);
            });
          }
        }
      },
      _updateDocTypeElement: {
        value: function _updateDocTypeElement() {
          this.doctype = this.documentElement = null;
          for (var kid = this.firstChild; kid !== null; kid = kid.nextSibling) {
            if (kid.nodeType === Node.DOCUMENT_TYPE_NODE) this.doctype = kid;else if (kid.nodeType === Node.ELEMENT_NODE) this.documentElement = kid;
          }
        }
      },
      insertBefore: {
        value: function insertBefore(child, refChild) {
          Node.prototype.insertBefore.call(this, child, refChild);
          this._updateDocTypeElement();
          return child;
        }
      },
      replaceChild: {
        value: function replaceChild(node, child) {
          Node.prototype.replaceChild.call(this, node, child);
          this._updateDocTypeElement();
          return child;
        }
      },
      removeChild: {
        value: function removeChild(child) {
          Node.prototype.removeChild.call(this, child);
          this._updateDocTypeElement();
          return child;
        }
      },
      getElementById: {
        value: function (id) {
          var n = this.byId[id];
          if (!n) return null;
          if (n instanceof MultiId) {
            return n.getFirst();
          }
          return n;
        }
      },
      _hasMultipleElementsWithId: {
        value: function (id) {
          return this.byId[id] instanceof MultiId;
        }
      },
      getElementsByName: {
        value: Element.prototype.getElementsByName
      },
      getElementsByTagName: {
        value: Element.prototype.getElementsByTagName
      },
      getElementsByTagNameNS: {
        value: Element.prototype.getElementsByTagNameNS
      },
      getElementsByClassName: {
        value: Element.prototype.getElementsByClassName
      },
      adoptNode: {
        value: function adoptNode(node) {
          if (node.nodeType === Node.DOCUMENT_NODE) utils.NotSupportedError();
          if (node.nodeType === Node.ATTRIBUTE_NODE) {
            return node;
          }
          if (node.parentNode) node.parentNode.removeChild(node);
          if (node.ownerDocument !== this) recursivelySetOwner(node, this);
          return node;
        }
      },
      importNode: {
        value: function importNode(node, deep) {
          return this.adoptNode(node.cloneNode(deep));
        },
        writable: isApiWritable
      },
      origin: {
        get: function origin() {
          return null;
        }
      },
      characterSet: {
        get: function characterSet() {
          return "UTF-8";
        }
      },
      contentType: {
        get: function contentType() {
          return this._contentType;
        }
      },
      URL: {
        get: function URL2() {
          return this._address;
        }
      },
      domain: {
        get: utils.nyi,
        set: utils.nyi
      },
      referrer: {
        get: utils.nyi
      },
      cookie: {
        get: utils.nyi,
        set: utils.nyi
      },
      lastModified: {
        get: utils.nyi
      },
      location: {
        get: function () {
          return this.defaultView ? this.defaultView.location : null;
        },
        set: utils.nyi
      },
      _titleElement: {
        get: function () {
          return this.getElementsByTagName("title").item(0) || null;
        }
      },
      title: {
        get: function () {
          var elt = this._titleElement;
          var value = elt ? elt.textContent : "";
          return value.replace(/[ \t\n\r\f]+/g, " ").replace(/(^ )|( $)/g, "");
        },
        set: function (value) {
          var elt = this._titleElement;
          var head = this.head;
          if (!elt && !head) {
            return;
          }
          if (!elt) {
            elt = this.createElement("title");
            head.appendChild(elt);
          }
          elt.textContent = value;
        }
      },
      dir: mirrorAttr(function () {
        var htmlElement = this.documentElement;
        if (htmlElement && htmlElement.tagName === "HTML") {
          return htmlElement;
        }
      }, "dir", ""),
      fgColor: mirrorAttr(function () {
        return this.body;
      }, "text", ""),
      linkColor: mirrorAttr(function () {
        return this.body;
      }, "link", ""),
      vlinkColor: mirrorAttr(function () {
        return this.body;
      }, "vLink", ""),
      alinkColor: mirrorAttr(function () {
        return this.body;
      }, "aLink", ""),
      bgColor: mirrorAttr(function () {
        return this.body;
      }, "bgColor", ""),
      charset: {
        get: function () {
          return this.characterSet;
        }
      },
      inputEncoding: {
        get: function () {
          return this.characterSet;
        }
      },
      scrollingElement: {
        get: function () {
          return this._quirks ? this.body : this.documentElement;
        }
      },
      body: {
        get: function () {
          return namedHTMLChild(this.documentElement, "body");
        },
        set: utils.nyi
      },
      head: {
        get: function () {
          return namedHTMLChild(this.documentElement, "head");
        }
      },
      images: {
        get: utils.nyi
      },
      embeds: {
        get: utils.nyi
      },
      plugins: {
        get: utils.nyi
      },
      links: {
        get: utils.nyi
      },
      forms: {
        get: utils.nyi
      },
      scripts: {
        get: utils.nyi
      },
      applets: {
        get: function () {
          return [];
        }
      },
      activeElement: {
        get: function () {
          return null;
        }
      },
      innerHTML: {
        get: function () {
          return this.serialize();
        },
        set: utils.nyi
      },
      outerHTML: {
        get: function () {
          return this.serialize();
        },
        set: utils.nyi
      },
      write: {
        value: function (args) {
          if (!this.isHTML) utils.InvalidStateError();
          if (!this._parser) return;
          if (!this._parser) ;
          var s = arguments.join("");
          this._parser.parse(s);
        }
      },
      writeln: {
        value: function writeln(args) {
          this.write(Array.prototype.join.call(arguments, "") + "\n");
        }
      },
      open: {
        value: function () {
          this.documentElement = null;
        }
      },
      close: {
        value: function () {
          this.readyState = "interactive";
          this._dispatchEvent(new Event("readystatechange"), true);
          this._dispatchEvent(new Event("DOMContentLoaded"), true);
          this.readyState = "complete";
          this._dispatchEvent(new Event("readystatechange"), true);
          if (this.defaultView) {
            this.defaultView._dispatchEvent(new Event("load"), true);
          }
        }
      },
      clone: {
        value: function clone() {
          var d = new Document(this.isHTML, this._address);
          d._quirks = this._quirks;
          d._contentType = this._contentType;
          return d;
        }
      },
      cloneNode: {
        value: function cloneNode(deep) {
          var clone = Node.prototype.cloneNode.call(this, false);
          if (deep) {
            for (var kid = this.firstChild; kid !== null; kid = kid.nextSibling) {
              clone._appendChild(clone.importNode(kid, true));
            }
          }
          clone._updateDocTypeElement();
          return clone;
        }
      },
      isEqual: {
        value: function isEqual(n) {
          return true;
        }
      },
      mutateValue: {
        value: function (node) {
          if (this.mutationHandler) {
            this.mutationHandler({
              type: MUTATE.VALUE,
              target: node,
              data: node.data
            });
          }
        }
      },
      mutateAttr: {
        value: function (attr, oldval) {
          if (this.mutationHandler) {
            this.mutationHandler({
              type: MUTATE.ATTR,
              target: attr.ownerElement,
              attr
            });
          }
        }
      },
      mutateRemoveAttr: {
        value: function (attr) {
          if (this.mutationHandler) {
            this.mutationHandler({
              type: MUTATE.REMOVE_ATTR,
              target: attr.ownerElement,
              attr
            });
          }
        }
      },
      mutateRemove: {
        value: function (node) {
          if (this.mutationHandler) {
            this.mutationHandler({
              type: MUTATE.REMOVE,
              target: node.parentNode,
              node
            });
          }
          recursivelyUproot(node);
        }
      },
      mutateInsert: {
        value: function (node) {
          recursivelyRoot(node);
          if (this.mutationHandler) {
            this.mutationHandler({
              type: MUTATE.INSERT,
              target: node.parentNode,
              node
            });
          }
        }
      },
      mutateMove: {
        value: function (node) {
          if (this.mutationHandler) {
            this.mutationHandler({
              type: MUTATE.MOVE,
              target: node
            });
          }
        }
      },
      addId: {
        value: function addId(id, n) {
          var val = this.byId[id];
          if (!val) {
            this.byId[id] = n;
          } else {
            if (!(val instanceof MultiId)) {
              val = new MultiId(val);
              this.byId[id] = val;
            }
            val.add(n);
          }
        }
      },
      delId: {
        value: function delId(id, n) {
          var val = this.byId[id];
          utils.assert(val);
          if (val instanceof MultiId) {
            val.del(n);
            if (val.length === 1) {
              this.byId[id] = val.downgrade();
            }
          } else {
            this.byId[id] = void 0;
          }
        }
      },
      _resolve: {
        value: function (href) {
          return new URL(this._documentBaseURL).resolve(href);
        }
      },
      _documentBaseURL: {
        get: function () {
          var url = this._address;
          if (url === "about:blank") url = "/";
          var base = this.querySelector("base[href]");
          if (base) {
            return new URL(url).resolve(base.getAttribute("href"));
          }
          return url;
        }
      },
      _templateDoc: {
        get: function () {
          if (!this._templateDocCache) {
            var newDoc = new Document(this.isHTML, this._address);
            this._templateDocCache = newDoc._templateDocCache = newDoc;
          }
          return this._templateDocCache;
        }
      },
      querySelector: {
        value: function (selector) {
          return select(selector, this)[0];
        }
      },
      querySelectorAll: {
        value: function (selector) {
          var nodes = select(selector, this);
          return nodes.item ? nodes : new NodeList(nodes);
        }
      }
    });
    var eventHandlerTypes = ["abort", "canplay", "canplaythrough", "change", "click", "contextmenu", "cuechange", "dblclick", "drag", "dragend", "dragenter", "dragleave", "dragover", "dragstart", "drop", "durationchange", "emptied", "ended", "input", "invalid", "keydown", "keypress", "keyup", "loadeddata", "loadedmetadata", "loadstart", "mousedown", "mousemove", "mouseout", "mouseover", "mouseup", "mousewheel", "pause", "play", "playing", "progress", "ratechange", "readystatechange", "reset", "seeked", "seeking", "select", "show", "stalled", "submit", "suspend", "timeupdate", "volumechange", "waiting", "blur", "error", "focus", "load", "scroll"];
    eventHandlerTypes.forEach(function (type) {
      Object.defineProperty(Document.prototype, "on" + type, {
        get: function () {
          return this._getEventHandler(type);
        },
        set: function (v) {
          this._setEventHandler(type, v);
        }
      });
    });
    function namedHTMLChild(parent, name) {
      if (parent && parent.isHTML) {
        for (var kid = parent.firstChild; kid !== null; kid = kid.nextSibling) {
          if (kid.nodeType === Node.ELEMENT_NODE && kid.localName === name && kid.namespaceURI === NAMESPACE.HTML) {
            return kid;
          }
        }
      }
      return null;
    }
    function root(n) {
      n._nid = n.ownerDocument._nextnid++;
      n.ownerDocument._nodes[n._nid] = n;
      if (n.nodeType === Node.ELEMENT_NODE) {
        var id = n.getAttribute("id");
        if (id) n.ownerDocument.addId(id, n);
        if (n._roothook) n._roothook();
      }
    }
    function uproot(n) {
      if (n.nodeType === Node.ELEMENT_NODE) {
        var id = n.getAttribute("id");
        if (id) n.ownerDocument.delId(id, n);
      }
      n.ownerDocument._nodes[n._nid] = void 0;
      n._nid = void 0;
    }
    function recursivelyRoot(node) {
      root(node);
      if (node.nodeType === Node.ELEMENT_NODE) {
        for (var kid = node.firstChild; kid !== null; kid = kid.nextSibling) recursivelyRoot(kid);
      }
    }
    function recursivelyUproot(node) {
      uproot(node);
      for (var kid = node.firstChild; kid !== null; kid = kid.nextSibling) recursivelyUproot(kid);
    }
    function recursivelySetOwner(node, owner) {
      node.ownerDocument = owner;
      node._lastModTime = void 0;
      if (Object.prototype.hasOwnProperty.call(node, "_tagName")) {
        node._tagName = void 0;
      }
      for (var kid = node.firstChild; kid !== null; kid = kid.nextSibling) recursivelySetOwner(kid, owner);
    }
    function MultiId(node) {
      this.nodes = /* @__PURE__ */Object.create(null);
      this.nodes[node._nid] = node;
      this.length = 1;
      this.firstNode = void 0;
    }
    MultiId.prototype.add = function (node) {
      if (!this.nodes[node._nid]) {
        this.nodes[node._nid] = node;
        this.length++;
        this.firstNode = void 0;
      }
    };
    MultiId.prototype.del = function (node) {
      if (this.nodes[node._nid]) {
        delete this.nodes[node._nid];
        this.length--;
        this.firstNode = void 0;
      }
    };
    MultiId.prototype.getFirst = function () {
      if (!this.firstNode) {
        var nid;
        for (nid in this.nodes) {
          if (this.firstNode === void 0 || this.firstNode.compareDocumentPosition(this.nodes[nid]) & Node.DOCUMENT_POSITION_PRECEDING) {
            this.firstNode = this.nodes[nid];
          }
        }
      }
      return this.firstNode;
    };
    MultiId.prototype.downgrade = function () {
      if (this.length === 1) {
        var nid;
        for (nid in this.nodes) {
          return this.nodes[nid];
        }
      }
      return this;
    };
  }
});

// external/npm/node_modules/domino/lib/DocumentType.js
var require_DocumentType = /*#__PURE__*/__commonJS({
  "external/npm/node_modules/domino/lib/DocumentType.js"(exports, module) {

    module.exports = DocumentType;
    var Node = require_Node();
    var Leaf = require_Leaf();
    var ChildNode = require_ChildNode();
    function DocumentType(ownerDocument, name, publicId, systemId) {
      Leaf.call(this);
      this.nodeType = Node.DOCUMENT_TYPE_NODE;
      this.ownerDocument = ownerDocument || null;
      this.name = name;
      this.publicId = publicId || "";
      this.systemId = systemId || "";
    }
    DocumentType.prototype = Object.create(Leaf.prototype, {
      nodeName: {
        get: function () {
          return this.name;
        }
      },
      nodeValue: {
        get: function () {
          return null;
        },
        set: function () {}
      },
      clone: {
        value: function clone() {
          return new DocumentType(this.ownerDocument, this.name, this.publicId, this.systemId);
        }
      },
      isEqual: {
        value: function isEqual(n) {
          return this.name === n.name && this.publicId === n.publicId && this.systemId === n.systemId;
        }
      }
    });
    Object.defineProperties(DocumentType.prototype, ChildNode);
  }
});

// external/npm/node_modules/domino/lib/HTMLParser.js
var require_HTMLParser = /*#__PURE__*/__commonJS({
  "external/npm/node_modules/domino/lib/HTMLParser.js"(exports, module) {

    module.exports = HTMLParser;
    var Document = require_Document();
    var DocumentType = require_DocumentType();
    var Node = require_Node();
    var NAMESPACE = require_utils().NAMESPACE;
    var html = require_htmlelts();
    var impl = html.elements;
    var pushAll = Function.prototype.apply.bind(Array.prototype.push);
    var EOF = -1;
    var TEXT = 1;
    var TAG = 2;
    var ENDTAG = 3;
    var COMMENT = 4;
    var DOCTYPE = 5;
    var NOATTRS = [];
    var quirkyPublicIds = /^HTML$|^-\/\/W3O\/\/DTD W3 HTML Strict 3\.0\/\/EN\/\/$|^-\/W3C\/DTD HTML 4\.0 Transitional\/EN$|^\+\/\/Silmaril\/\/dtd html Pro v0r11 19970101\/\/|^-\/\/AdvaSoft Ltd\/\/DTD HTML 3\.0 asWedit \+ extensions\/\/|^-\/\/AS\/\/DTD HTML 3\.0 asWedit \+ extensions\/\/|^-\/\/IETF\/\/DTD HTML 2\.0 Level 1\/\/|^-\/\/IETF\/\/DTD HTML 2\.0 Level 2\/\/|^-\/\/IETF\/\/DTD HTML 2\.0 Strict Level 1\/\/|^-\/\/IETF\/\/DTD HTML 2\.0 Strict Level 2\/\/|^-\/\/IETF\/\/DTD HTML 2\.0 Strict\/\/|^-\/\/IETF\/\/DTD HTML 2\.0\/\/|^-\/\/IETF\/\/DTD HTML 2\.1E\/\/|^-\/\/IETF\/\/DTD HTML 3\.0\/\/|^-\/\/IETF\/\/DTD HTML 3\.2 Final\/\/|^-\/\/IETF\/\/DTD HTML 3\.2\/\/|^-\/\/IETF\/\/DTD HTML 3\/\/|^-\/\/IETF\/\/DTD HTML Level 0\/\/|^-\/\/IETF\/\/DTD HTML Level 1\/\/|^-\/\/IETF\/\/DTD HTML Level 2\/\/|^-\/\/IETF\/\/DTD HTML Level 3\/\/|^-\/\/IETF\/\/DTD HTML Strict Level 0\/\/|^-\/\/IETF\/\/DTD HTML Strict Level 1\/\/|^-\/\/IETF\/\/DTD HTML Strict Level 2\/\/|^-\/\/IETF\/\/DTD HTML Strict Level 3\/\/|^-\/\/IETF\/\/DTD HTML Strict\/\/|^-\/\/IETF\/\/DTD HTML\/\/|^-\/\/Metrius\/\/DTD Metrius Presentational\/\/|^-\/\/Microsoft\/\/DTD Internet Explorer 2\.0 HTML Strict\/\/|^-\/\/Microsoft\/\/DTD Internet Explorer 2\.0 HTML\/\/|^-\/\/Microsoft\/\/DTD Internet Explorer 2\.0 Tables\/\/|^-\/\/Microsoft\/\/DTD Internet Explorer 3\.0 HTML Strict\/\/|^-\/\/Microsoft\/\/DTD Internet Explorer 3\.0 HTML\/\/|^-\/\/Microsoft\/\/DTD Internet Explorer 3\.0 Tables\/\/|^-\/\/Netscape Comm\. Corp\.\/\/DTD HTML\/\/|^-\/\/Netscape Comm\. Corp\.\/\/DTD Strict HTML\/\/|^-\/\/O'Reilly and Associates\/\/DTD HTML 2\.0\/\/|^-\/\/O'Reilly and Associates\/\/DTD HTML Extended 1\.0\/\/|^-\/\/O'Reilly and Associates\/\/DTD HTML Extended Relaxed 1\.0\/\/|^-\/\/SoftQuad Software\/\/DTD HoTMetaL PRO 6\.0::19990601::extensions to HTML 4\.0\/\/|^-\/\/SoftQuad\/\/DTD HoTMetaL PRO 4\.0::19971010::extensions to HTML 4\.0\/\/|^-\/\/Spyglass\/\/DTD HTML 2\.0 Extended\/\/|^-\/\/SQ\/\/DTD HTML 2\.0 HoTMetaL \+ extensions\/\/|^-\/\/Sun Microsystems Corp\.\/\/DTD HotJava HTML\/\/|^-\/\/Sun Microsystems Corp\.\/\/DTD HotJava Strict HTML\/\/|^-\/\/W3C\/\/DTD HTML 3 1995-03-24\/\/|^-\/\/W3C\/\/DTD HTML 3\.2 Draft\/\/|^-\/\/W3C\/\/DTD HTML 3\.2 Final\/\/|^-\/\/W3C\/\/DTD HTML 3\.2\/\/|^-\/\/W3C\/\/DTD HTML 3\.2S Draft\/\/|^-\/\/W3C\/\/DTD HTML 4\.0 Frameset\/\/|^-\/\/W3C\/\/DTD HTML 4\.0 Transitional\/\/|^-\/\/W3C\/\/DTD HTML Experimental 19960712\/\/|^-\/\/W3C\/\/DTD HTML Experimental 970421\/\/|^-\/\/W3C\/\/DTD W3 HTML\/\/|^-\/\/W3O\/\/DTD W3 HTML 3\.0\/\/|^-\/\/WebTechs\/\/DTD Mozilla HTML 2\.0\/\/|^-\/\/WebTechs\/\/DTD Mozilla HTML\/\//i;
    var quirkySystemId = "http://www.ibm.com/data/dtd/v11/ibmxhtml1-transitional.dtd";
    var conditionallyQuirkyPublicIds = /^-\/\/W3C\/\/DTD HTML 4\.01 Frameset\/\/|^-\/\/W3C\/\/DTD HTML 4\.01 Transitional\/\//i;
    var limitedQuirkyPublicIds = /^-\/\/W3C\/\/DTD XHTML 1\.0 Frameset\/\/|^-\/\/W3C\/\/DTD XHTML 1\.0 Transitional\/\//i;
    var specialSet = /* @__PURE__ */Object.create(null);
    specialSet[NAMESPACE.HTML] = {
      __proto__: null,
      "address": true,
      "applet": true,
      "area": true,
      "article": true,
      "aside": true,
      "base": true,
      "basefont": true,
      "bgsound": true,
      "blockquote": true,
      "body": true,
      "br": true,
      "button": true,
      "caption": true,
      "center": true,
      "col": true,
      "colgroup": true,
      "dd": true,
      "details": true,
      "dir": true,
      "div": true,
      "dl": true,
      "dt": true,
      "embed": true,
      "fieldset": true,
      "figcaption": true,
      "figure": true,
      "footer": true,
      "form": true,
      "frame": true,
      "frameset": true,
      "h1": true,
      "h2": true,
      "h3": true,
      "h4": true,
      "h5": true,
      "h6": true,
      "head": true,
      "header": true,
      "hgroup": true,
      "hr": true,
      "html": true,
      "iframe": true,
      "img": true,
      "input": true,
      "li": true,
      "link": true,
      "listing": true,
      "main": true,
      "marquee": true,
      "menu": true,
      "meta": true,
      "nav": true,
      "noembed": true,
      "noframes": true,
      "noscript": true,
      "object": true,
      "ol": true,
      "p": true,
      "param": true,
      "plaintext": true,
      "pre": true,
      "script": true,
      "section": true,
      "select": true,
      "source": true,
      "style": true,
      "summary": true,
      "table": true,
      "tbody": true,
      "td": true,
      "template": true,
      "textarea": true,
      "tfoot": true,
      "th": true,
      "thead": true,
      "title": true,
      "tr": true,
      "track": true,
      "ul": true,
      "wbr": true,
      "xmp": true
    };
    specialSet[NAMESPACE.SVG] = {
      __proto__: null,
      "foreignObject": true,
      "desc": true,
      "title": true
    };
    specialSet[NAMESPACE.MATHML] = {
      __proto__: null,
      "mi": true,
      "mo": true,
      "mn": true,
      "ms": true,
      "mtext": true,
      "annotation-xml": true
    };
    var addressdivpSet = /* @__PURE__ */Object.create(null);
    addressdivpSet[NAMESPACE.HTML] = {
      __proto__: null,
      "address": true,
      "div": true,
      "p": true
    };
    var dddtSet = /* @__PURE__ */Object.create(null);
    dddtSet[NAMESPACE.HTML] = {
      __proto__: null,
      "dd": true,
      "dt": true
    };
    var tablesectionrowSet = /* @__PURE__ */Object.create(null);
    tablesectionrowSet[NAMESPACE.HTML] = {
      __proto__: null,
      "table": true,
      "thead": true,
      "tbody": true,
      "tfoot": true,
      "tr": true
    };
    var impliedEndTagsSet = /* @__PURE__ */Object.create(null);
    impliedEndTagsSet[NAMESPACE.HTML] = {
      __proto__: null,
      "dd": true,
      "dt": true,
      "li": true,
      "menuitem": true,
      "optgroup": true,
      "option": true,
      "p": true,
      "rb": true,
      "rp": true,
      "rt": true,
      "rtc": true
    };
    var thoroughImpliedEndTagsSet = /* @__PURE__ */Object.create(null);
    thoroughImpliedEndTagsSet[NAMESPACE.HTML] = {
      __proto__: null,
      "caption": true,
      "colgroup": true,
      "dd": true,
      "dt": true,
      "li": true,
      "optgroup": true,
      "option": true,
      "p": true,
      "rb": true,
      "rp": true,
      "rt": true,
      "rtc": true,
      "tbody": true,
      "td": true,
      "tfoot": true,
      "th": true,
      "thead": true,
      "tr": true
    };
    var tableContextSet = /* @__PURE__ */Object.create(null);
    tableContextSet[NAMESPACE.HTML] = {
      __proto__: null,
      "table": true,
      "template": true,
      "html": true
    };
    var tableBodyContextSet = /* @__PURE__ */Object.create(null);
    tableBodyContextSet[NAMESPACE.HTML] = {
      __proto__: null,
      "tbody": true,
      "tfoot": true,
      "thead": true,
      "template": true,
      "html": true
    };
    var tableRowContextSet = /* @__PURE__ */Object.create(null);
    tableRowContextSet[NAMESPACE.HTML] = {
      __proto__: null,
      "tr": true,
      "template": true,
      "html": true
    };
    var formassociatedSet = /* @__PURE__ */Object.create(null);
    formassociatedSet[NAMESPACE.HTML] = {
      __proto__: null,
      "button": true,
      "fieldset": true,
      "input": true,
      "keygen": true,
      "object": true,
      "output": true,
      "select": true,
      "textarea": true,
      "img": true
    };
    var inScopeSet = /* @__PURE__ */Object.create(null);
    inScopeSet[NAMESPACE.HTML] = {
      __proto__: null,
      "applet": true,
      "caption": true,
      "html": true,
      "table": true,
      "td": true,
      "th": true,
      "marquee": true,
      "object": true,
      "template": true
    };
    inScopeSet[NAMESPACE.MATHML] = {
      __proto__: null,
      "mi": true,
      "mo": true,
      "mn": true,
      "ms": true,
      "mtext": true,
      "annotation-xml": true
    };
    inScopeSet[NAMESPACE.SVG] = {
      __proto__: null,
      "foreignObject": true,
      "desc": true,
      "title": true
    };
    var inListItemScopeSet = Object.create(inScopeSet);
    inListItemScopeSet[NAMESPACE.HTML] = Object.create(inScopeSet[NAMESPACE.HTML]);
    inListItemScopeSet[NAMESPACE.HTML].ol = true;
    inListItemScopeSet[NAMESPACE.HTML].ul = true;
    var inButtonScopeSet = Object.create(inScopeSet);
    inButtonScopeSet[NAMESPACE.HTML] = Object.create(inScopeSet[NAMESPACE.HTML]);
    inButtonScopeSet[NAMESPACE.HTML].button = true;
    var inTableScopeSet = /* @__PURE__ */Object.create(null);
    inTableScopeSet[NAMESPACE.HTML] = {
      __proto__: null,
      "html": true,
      "table": true,
      "template": true
    };
    var invertedSelectScopeSet = /* @__PURE__ */Object.create(null);
    invertedSelectScopeSet[NAMESPACE.HTML] = {
      __proto__: null,
      "optgroup": true,
      "option": true
    };
    var mathmlTextIntegrationPointSet = /* @__PURE__ */Object.create(null);
    mathmlTextIntegrationPointSet[NAMESPACE.MATHML] = {
      __proto__: null,
      mi: true,
      mo: true,
      mn: true,
      ms: true,
      mtext: true
    };
    var htmlIntegrationPointSet = /* @__PURE__ */Object.create(null);
    htmlIntegrationPointSet[NAMESPACE.SVG] = {
      __proto__: null,
      foreignObject: true,
      desc: true,
      title: true
    };
    var foreignAttributes = {
      __proto__: null,
      "xlink:actuate": NAMESPACE.XLINK,
      "xlink:arcrole": NAMESPACE.XLINK,
      "xlink:href": NAMESPACE.XLINK,
      "xlink:role": NAMESPACE.XLINK,
      "xlink:show": NAMESPACE.XLINK,
      "xlink:title": NAMESPACE.XLINK,
      "xlink:type": NAMESPACE.XLINK,
      "xml:base": NAMESPACE.XML,
      "xml:lang": NAMESPACE.XML,
      "xml:space": NAMESPACE.XML,
      "xmlns": NAMESPACE.XMLNS,
      "xmlns:xlink": NAMESPACE.XMLNS
    };
    var svgAttrAdjustments = {
      __proto__: null,
      attributename: "attributeName",
      attributetype: "attributeType",
      basefrequency: "baseFrequency",
      baseprofile: "baseProfile",
      calcmode: "calcMode",
      clippathunits: "clipPathUnits",
      diffuseconstant: "diffuseConstant",
      edgemode: "edgeMode",
      filterunits: "filterUnits",
      glyphref: "glyphRef",
      gradienttransform: "gradientTransform",
      gradientunits: "gradientUnits",
      kernelmatrix: "kernelMatrix",
      kernelunitlength: "kernelUnitLength",
      keypoints: "keyPoints",
      keysplines: "keySplines",
      keytimes: "keyTimes",
      lengthadjust: "lengthAdjust",
      limitingconeangle: "limitingConeAngle",
      markerheight: "markerHeight",
      markerunits: "markerUnits",
      markerwidth: "markerWidth",
      maskcontentunits: "maskContentUnits",
      maskunits: "maskUnits",
      numoctaves: "numOctaves",
      pathlength: "pathLength",
      patterncontentunits: "patternContentUnits",
      patterntransform: "patternTransform",
      patternunits: "patternUnits",
      pointsatx: "pointsAtX",
      pointsaty: "pointsAtY",
      pointsatz: "pointsAtZ",
      preservealpha: "preserveAlpha",
      preserveaspectratio: "preserveAspectRatio",
      primitiveunits: "primitiveUnits",
      refx: "refX",
      refy: "refY",
      repeatcount: "repeatCount",
      repeatdur: "repeatDur",
      requiredextensions: "requiredExtensions",
      requiredfeatures: "requiredFeatures",
      specularconstant: "specularConstant",
      specularexponent: "specularExponent",
      spreadmethod: "spreadMethod",
      startoffset: "startOffset",
      stddeviation: "stdDeviation",
      stitchtiles: "stitchTiles",
      surfacescale: "surfaceScale",
      systemlanguage: "systemLanguage",
      tablevalues: "tableValues",
      targetx: "targetX",
      targety: "targetY",
      textlength: "textLength",
      viewbox: "viewBox",
      viewtarget: "viewTarget",
      xchannelselector: "xChannelSelector",
      ychannelselector: "yChannelSelector",
      zoomandpan: "zoomAndPan"
    };
    var svgTagNameAdjustments = {
      __proto__: null,
      altglyph: "altGlyph",
      altglyphdef: "altGlyphDef",
      altglyphitem: "altGlyphItem",
      animatecolor: "animateColor",
      animatemotion: "animateMotion",
      animatetransform: "animateTransform",
      clippath: "clipPath",
      feblend: "feBlend",
      fecolormatrix: "feColorMatrix",
      fecomponenttransfer: "feComponentTransfer",
      fecomposite: "feComposite",
      feconvolvematrix: "feConvolveMatrix",
      fediffuselighting: "feDiffuseLighting",
      fedisplacementmap: "feDisplacementMap",
      fedistantlight: "feDistantLight",
      feflood: "feFlood",
      fefunca: "feFuncA",
      fefuncb: "feFuncB",
      fefuncg: "feFuncG",
      fefuncr: "feFuncR",
      fegaussianblur: "feGaussianBlur",
      feimage: "feImage",
      femerge: "feMerge",
      femergenode: "feMergeNode",
      femorphology: "feMorphology",
      feoffset: "feOffset",
      fepointlight: "fePointLight",
      fespecularlighting: "feSpecularLighting",
      fespotlight: "feSpotLight",
      fetile: "feTile",
      feturbulence: "feTurbulence",
      foreignobject: "foreignObject",
      glyphref: "glyphRef",
      lineargradient: "linearGradient",
      radialgradient: "radialGradient",
      textpath: "textPath"
    };
    var numericCharRefReplacements = {
      __proto__: null,
      0: 65533,
      128: 8364,
      130: 8218,
      131: 402,
      132: 8222,
      133: 8230,
      134: 8224,
      135: 8225,
      136: 710,
      137: 8240,
      138: 352,
      139: 8249,
      140: 338,
      142: 381,
      145: 8216,
      146: 8217,
      147: 8220,
      148: 8221,
      149: 8226,
      150: 8211,
      151: 8212,
      152: 732,
      153: 8482,
      154: 353,
      155: 8250,
      156: 339,
      158: 382,
      159: 376
    };
    var namedCharRefs = {
      __proto__: null,
      "AElig": 198,
      "AElig;": 198,
      "AMP": 38,
      "AMP;": 38,
      "Aacute": 193,
      "Aacute;": 193,
      "Abreve;": 258,
      "Acirc": 194,
      "Acirc;": 194,
      "Acy;": 1040,
      "Afr;": [55349, 56580],
      "Agrave": 192,
      "Agrave;": 192,
      "Alpha;": 913,
      "Amacr;": 256,
      "And;": 10835,
      "Aogon;": 260,
      "Aopf;": [55349, 56632],
      "ApplyFunction;": 8289,
      "Aring": 197,
      "Aring;": 197,
      "Ascr;": [55349, 56476],
      "Assign;": 8788,
      "Atilde": 195,
      "Atilde;": 195,
      "Auml": 196,
      "Auml;": 196,
      "Backslash;": 8726,
      "Barv;": 10983,
      "Barwed;": 8966,
      "Bcy;": 1041,
      "Because;": 8757,
      "Bernoullis;": 8492,
      "Beta;": 914,
      "Bfr;": [55349, 56581],
      "Bopf;": [55349, 56633],
      "Breve;": 728,
      "Bscr;": 8492,
      "Bumpeq;": 8782,
      "CHcy;": 1063,
      "COPY": 169,
      "COPY;": 169,
      "Cacute;": 262,
      "Cap;": 8914,
      "CapitalDifferentialD;": 8517,
      "Cayleys;": 8493,
      "Ccaron;": 268,
      "Ccedil": 199,
      "Ccedil;": 199,
      "Ccirc;": 264,
      "Cconint;": 8752,
      "Cdot;": 266,
      "Cedilla;": 184,
      "CenterDot;": 183,
      "Cfr;": 8493,
      "Chi;": 935,
      "CircleDot;": 8857,
      "CircleMinus;": 8854,
      "CirclePlus;": 8853,
      "CircleTimes;": 8855,
      "ClockwiseContourIntegral;": 8754,
      "CloseCurlyDoubleQuote;": 8221,
      "CloseCurlyQuote;": 8217,
      "Colon;": 8759,
      "Colone;": 10868,
      "Congruent;": 8801,
      "Conint;": 8751,
      "ContourIntegral;": 8750,
      "Copf;": 8450,
      "Coproduct;": 8720,
      "CounterClockwiseContourIntegral;": 8755,
      "Cross;": 10799,
      "Cscr;": [55349, 56478],
      "Cup;": 8915,
      "CupCap;": 8781,
      "DD;": 8517,
      "DDotrahd;": 10513,
      "DJcy;": 1026,
      "DScy;": 1029,
      "DZcy;": 1039,
      "Dagger;": 8225,
      "Darr;": 8609,
      "Dashv;": 10980,
      "Dcaron;": 270,
      "Dcy;": 1044,
      "Del;": 8711,
      "Delta;": 916,
      "Dfr;": [55349, 56583],
      "DiacriticalAcute;": 180,
      "DiacriticalDot;": 729,
      "DiacriticalDoubleAcute;": 733,
      "DiacriticalGrave;": 96,
      "DiacriticalTilde;": 732,
      "Diamond;": 8900,
      "DifferentialD;": 8518,
      "Dopf;": [55349, 56635],
      "Dot;": 168,
      "DotDot;": 8412,
      "DotEqual;": 8784,
      "DoubleContourIntegral;": 8751,
      "DoubleDot;": 168,
      "DoubleDownArrow;": 8659,
      "DoubleLeftArrow;": 8656,
      "DoubleLeftRightArrow;": 8660,
      "DoubleLeftTee;": 10980,
      "DoubleLongLeftArrow;": 10232,
      "DoubleLongLeftRightArrow;": 10234,
      "DoubleLongRightArrow;": 10233,
      "DoubleRightArrow;": 8658,
      "DoubleRightTee;": 8872,
      "DoubleUpArrow;": 8657,
      "DoubleUpDownArrow;": 8661,
      "DoubleVerticalBar;": 8741,
      "DownArrow;": 8595,
      "DownArrowBar;": 10515,
      "DownArrowUpArrow;": 8693,
      "DownBreve;": 785,
      "DownLeftRightVector;": 10576,
      "DownLeftTeeVector;": 10590,
      "DownLeftVector;": 8637,
      "DownLeftVectorBar;": 10582,
      "DownRightTeeVector;": 10591,
      "DownRightVector;": 8641,
      "DownRightVectorBar;": 10583,
      "DownTee;": 8868,
      "DownTeeArrow;": 8615,
      "Downarrow;": 8659,
      "Dscr;": [55349, 56479],
      "Dstrok;": 272,
      "ENG;": 330,
      "ETH": 208,
      "ETH;": 208,
      "Eacute": 201,
      "Eacute;": 201,
      "Ecaron;": 282,
      "Ecirc": 202,
      "Ecirc;": 202,
      "Ecy;": 1069,
      "Edot;": 278,
      "Efr;": [55349, 56584],
      "Egrave": 200,
      "Egrave;": 200,
      "Element;": 8712,
      "Emacr;": 274,
      "EmptySmallSquare;": 9723,
      "EmptyVerySmallSquare;": 9643,
      "Eogon;": 280,
      "Eopf;": [55349, 56636],
      "Epsilon;": 917,
      "Equal;": 10869,
      "EqualTilde;": 8770,
      "Equilibrium;": 8652,
      "Escr;": 8496,
      "Esim;": 10867,
      "Eta;": 919,
      "Euml": 203,
      "Euml;": 203,
      "Exists;": 8707,
      "ExponentialE;": 8519,
      "Fcy;": 1060,
      "Ffr;": [55349, 56585],
      "FilledSmallSquare;": 9724,
      "FilledVerySmallSquare;": 9642,
      "Fopf;": [55349, 56637],
      "ForAll;": 8704,
      "Fouriertrf;": 8497,
      "Fscr;": 8497,
      "GJcy;": 1027,
      "GT": 62,
      "GT;": 62,
      "Gamma;": 915,
      "Gammad;": 988,
      "Gbreve;": 286,
      "Gcedil;": 290,
      "Gcirc;": 284,
      "Gcy;": 1043,
      "Gdot;": 288,
      "Gfr;": [55349, 56586],
      "Gg;": 8921,
      "Gopf;": [55349, 56638],
      "GreaterEqual;": 8805,
      "GreaterEqualLess;": 8923,
      "GreaterFullEqual;": 8807,
      "GreaterGreater;": 10914,
      "GreaterLess;": 8823,
      "GreaterSlantEqual;": 10878,
      "GreaterTilde;": 8819,
      "Gscr;": [55349, 56482],
      "Gt;": 8811,
      "HARDcy;": 1066,
      "Hacek;": 711,
      "Hat;": 94,
      "Hcirc;": 292,
      "Hfr;": 8460,
      "HilbertSpace;": 8459,
      "Hopf;": 8461,
      "HorizontalLine;": 9472,
      "Hscr;": 8459,
      "Hstrok;": 294,
      "HumpDownHump;": 8782,
      "HumpEqual;": 8783,
      "IEcy;": 1045,
      "IJlig;": 306,
      "IOcy;": 1025,
      "Iacute": 205,
      "Iacute;": 205,
      "Icirc": 206,
      "Icirc;": 206,
      "Icy;": 1048,
      "Idot;": 304,
      "Ifr;": 8465,
      "Igrave": 204,
      "Igrave;": 204,
      "Im;": 8465,
      "Imacr;": 298,
      "ImaginaryI;": 8520,
      "Implies;": 8658,
      "Int;": 8748,
      "Integral;": 8747,
      "Intersection;": 8898,
      "InvisibleComma;": 8291,
      "InvisibleTimes;": 8290,
      "Iogon;": 302,
      "Iopf;": [55349, 56640],
      "Iota;": 921,
      "Iscr;": 8464,
      "Itilde;": 296,
      "Iukcy;": 1030,
      "Iuml": 207,
      "Iuml;": 207,
      "Jcirc;": 308,
      "Jcy;": 1049,
      "Jfr;": [55349, 56589],
      "Jopf;": [55349, 56641],
      "Jscr;": [55349, 56485],
      "Jsercy;": 1032,
      "Jukcy;": 1028,
      "KHcy;": 1061,
      "KJcy;": 1036,
      "Kappa;": 922,
      "Kcedil;": 310,
      "Kcy;": 1050,
      "Kfr;": [55349, 56590],
      "Kopf;": [55349, 56642],
      "Kscr;": [55349, 56486],
      "LJcy;": 1033,
      "LT": 60,
      "LT;": 60,
      "Lacute;": 313,
      "Lambda;": 923,
      "Lang;": 10218,
      "Laplacetrf;": 8466,
      "Larr;": 8606,
      "Lcaron;": 317,
      "Lcedil;": 315,
      "Lcy;": 1051,
      "LeftAngleBracket;": 10216,
      "LeftArrow;": 8592,
      "LeftArrowBar;": 8676,
      "LeftArrowRightArrow;": 8646,
      "LeftCeiling;": 8968,
      "LeftDoubleBracket;": 10214,
      "LeftDownTeeVector;": 10593,
      "LeftDownVector;": 8643,
      "LeftDownVectorBar;": 10585,
      "LeftFloor;": 8970,
      "LeftRightArrow;": 8596,
      "LeftRightVector;": 10574,
      "LeftTee;": 8867,
      "LeftTeeArrow;": 8612,
      "LeftTeeVector;": 10586,
      "LeftTriangle;": 8882,
      "LeftTriangleBar;": 10703,
      "LeftTriangleEqual;": 8884,
      "LeftUpDownVector;": 10577,
      "LeftUpTeeVector;": 10592,
      "LeftUpVector;": 8639,
      "LeftUpVectorBar;": 10584,
      "LeftVector;": 8636,
      "LeftVectorBar;": 10578,
      "Leftarrow;": 8656,
      "Leftrightarrow;": 8660,
      "LessEqualGreater;": 8922,
      "LessFullEqual;": 8806,
      "LessGreater;": 8822,
      "LessLess;": 10913,
      "LessSlantEqual;": 10877,
      "LessTilde;": 8818,
      "Lfr;": [55349, 56591],
      "Ll;": 8920,
      "Lleftarrow;": 8666,
      "Lmidot;": 319,
      "LongLeftArrow;": 10229,
      "LongLeftRightArrow;": 10231,
      "LongRightArrow;": 10230,
      "Longleftarrow;": 10232,
      "Longleftrightarrow;": 10234,
      "Longrightarrow;": 10233,
      "Lopf;": [55349, 56643],
      "LowerLeftArrow;": 8601,
      "LowerRightArrow;": 8600,
      "Lscr;": 8466,
      "Lsh;": 8624,
      "Lstrok;": 321,
      "Lt;": 8810,
      "Map;": 10501,
      "Mcy;": 1052,
      "MediumSpace;": 8287,
      "Mellintrf;": 8499,
      "Mfr;": [55349, 56592],
      "MinusPlus;": 8723,
      "Mopf;": [55349, 56644],
      "Mscr;": 8499,
      "Mu;": 924,
      "NJcy;": 1034,
      "Nacute;": 323,
      "Ncaron;": 327,
      "Ncedil;": 325,
      "Ncy;": 1053,
      "NegativeMediumSpace;": 8203,
      "NegativeThickSpace;": 8203,
      "NegativeThinSpace;": 8203,
      "NegativeVeryThinSpace;": 8203,
      "NestedGreaterGreater;": 8811,
      "NestedLessLess;": 8810,
      "NewLine;": 10,
      "Nfr;": [55349, 56593],
      "NoBreak;": 8288,
      "NonBreakingSpace;": 160,
      "Nopf;": 8469,
      "Not;": 10988,
      "NotCongruent;": 8802,
      "NotCupCap;": 8813,
      "NotDoubleVerticalBar;": 8742,
      "NotElement;": 8713,
      "NotEqual;": 8800,
      "NotEqualTilde;": [8770, 824],
      "NotExists;": 8708,
      "NotGreater;": 8815,
      "NotGreaterEqual;": 8817,
      "NotGreaterFullEqual;": [8807, 824],
      "NotGreaterGreater;": [8811, 824],
      "NotGreaterLess;": 8825,
      "NotGreaterSlantEqual;": [10878, 824],
      "NotGreaterTilde;": 8821,
      "NotHumpDownHump;": [8782, 824],
      "NotHumpEqual;": [8783, 824],
      "NotLeftTriangle;": 8938,
      "NotLeftTriangleBar;": [10703, 824],
      "NotLeftTriangleEqual;": 8940,
      "NotLess;": 8814,
      "NotLessEqual;": 8816,
      "NotLessGreater;": 8824,
      "NotLessLess;": [8810, 824],
      "NotLessSlantEqual;": [10877, 824],
      "NotLessTilde;": 8820,
      "NotNestedGreaterGreater;": [10914, 824],
      "NotNestedLessLess;": [10913, 824],
      "NotPrecedes;": 8832,
      "NotPrecedesEqual;": [10927, 824],
      "NotPrecedesSlantEqual;": 8928,
      "NotReverseElement;": 8716,
      "NotRightTriangle;": 8939,
      "NotRightTriangleBar;": [10704, 824],
      "NotRightTriangleEqual;": 8941,
      "NotSquareSubset;": [8847, 824],
      "NotSquareSubsetEqual;": 8930,
      "NotSquareSuperset;": [8848, 824],
      "NotSquareSupersetEqual;": 8931,
      "NotSubset;": [8834, 8402],
      "NotSubsetEqual;": 8840,
      "NotSucceeds;": 8833,
      "NotSucceedsEqual;": [10928, 824],
      "NotSucceedsSlantEqual;": 8929,
      "NotSucceedsTilde;": [8831, 824],
      "NotSuperset;": [8835, 8402],
      "NotSupersetEqual;": 8841,
      "NotTilde;": 8769,
      "NotTildeEqual;": 8772,
      "NotTildeFullEqual;": 8775,
      "NotTildeTilde;": 8777,
      "NotVerticalBar;": 8740,
      "Nscr;": [55349, 56489],
      "Ntilde": 209,
      "Ntilde;": 209,
      "Nu;": 925,
      "OElig;": 338,
      "Oacute": 211,
      "Oacute;": 211,
      "Ocirc": 212,
      "Ocirc;": 212,
      "Ocy;": 1054,
      "Odblac;": 336,
      "Ofr;": [55349, 56594],
      "Ograve": 210,
      "Ograve;": 210,
      "Omacr;": 332,
      "Omega;": 937,
      "Omicron;": 927,
      "Oopf;": [55349, 56646],
      "OpenCurlyDoubleQuote;": 8220,
      "OpenCurlyQuote;": 8216,
      "Or;": 10836,
      "Oscr;": [55349, 56490],
      "Oslash": 216,
      "Oslash;": 216,
      "Otilde": 213,
      "Otilde;": 213,
      "Otimes;": 10807,
      "Ouml": 214,
      "Ouml;": 214,
      "OverBar;": 8254,
      "OverBrace;": 9182,
      "OverBracket;": 9140,
      "OverParenthesis;": 9180,
      "PartialD;": 8706,
      "Pcy;": 1055,
      "Pfr;": [55349, 56595],
      "Phi;": 934,
      "Pi;": 928,
      "PlusMinus;": 177,
      "Poincareplane;": 8460,
      "Popf;": 8473,
      "Pr;": 10939,
      "Precedes;": 8826,
      "PrecedesEqual;": 10927,
      "PrecedesSlantEqual;": 8828,
      "PrecedesTilde;": 8830,
      "Prime;": 8243,
      "Product;": 8719,
      "Proportion;": 8759,
      "Proportional;": 8733,
      "Pscr;": [55349, 56491],
      "Psi;": 936,
      "QUOT": 34,
      "QUOT;": 34,
      "Qfr;": [55349, 56596],
      "Qopf;": 8474,
      "Qscr;": [55349, 56492],
      "RBarr;": 10512,
      "REG": 174,
      "REG;": 174,
      "Racute;": 340,
      "Rang;": 10219,
      "Rarr;": 8608,
      "Rarrtl;": 10518,
      "Rcaron;": 344,
      "Rcedil;": 342,
      "Rcy;": 1056,
      "Re;": 8476,
      "ReverseElement;": 8715,
      "ReverseEquilibrium;": 8651,
      "ReverseUpEquilibrium;": 10607,
      "Rfr;": 8476,
      "Rho;": 929,
      "RightAngleBracket;": 10217,
      "RightArrow;": 8594,
      "RightArrowBar;": 8677,
      "RightArrowLeftArrow;": 8644,
      "RightCeiling;": 8969,
      "RightDoubleBracket;": 10215,
      "RightDownTeeVector;": 10589,
      "RightDownVector;": 8642,
      "RightDownVectorBar;": 10581,
      "RightFloor;": 8971,
      "RightTee;": 8866,
      "RightTeeArrow;": 8614,
      "RightTeeVector;": 10587,
      "RightTriangle;": 8883,
      "RightTriangleBar;": 10704,
      "RightTriangleEqual;": 8885,
      "RightUpDownVector;": 10575,
      "RightUpTeeVector;": 10588,
      "RightUpVector;": 8638,
      "RightUpVectorBar;": 10580,
      "RightVector;": 8640,
      "RightVectorBar;": 10579,
      "Rightarrow;": 8658,
      "Ropf;": 8477,
      "RoundImplies;": 10608,
      "Rrightarrow;": 8667,
      "Rscr;": 8475,
      "Rsh;": 8625,
      "RuleDelayed;": 10740,
      "SHCHcy;": 1065,
      "SHcy;": 1064,
      "SOFTcy;": 1068,
      "Sacute;": 346,
      "Sc;": 10940,
      "Scaron;": 352,
      "Scedil;": 350,
      "Scirc;": 348,
      "Scy;": 1057,
      "Sfr;": [55349, 56598],
      "ShortDownArrow;": 8595,
      "ShortLeftArrow;": 8592,
      "ShortRightArrow;": 8594,
      "ShortUpArrow;": 8593,
      "Sigma;": 931,
      "SmallCircle;": 8728,
      "Sopf;": [55349, 56650],
      "Sqrt;": 8730,
      "Square;": 9633,
      "SquareIntersection;": 8851,
      "SquareSubset;": 8847,
      "SquareSubsetEqual;": 8849,
      "SquareSuperset;": 8848,
      "SquareSupersetEqual;": 8850,
      "SquareUnion;": 8852,
      "Sscr;": [55349, 56494],
      "Star;": 8902,
      "Sub;": 8912,
      "Subset;": 8912,
      "SubsetEqual;": 8838,
      "Succeeds;": 8827,
      "SucceedsEqual;": 10928,
      "SucceedsSlantEqual;": 8829,
      "SucceedsTilde;": 8831,
      "SuchThat;": 8715,
      "Sum;": 8721,
      "Sup;": 8913,
      "Superset;": 8835,
      "SupersetEqual;": 8839,
      "Supset;": 8913,
      "THORN": 222,
      "THORN;": 222,
      "TRADE;": 8482,
      "TSHcy;": 1035,
      "TScy;": 1062,
      "Tab;": 9,
      "Tau;": 932,
      "Tcaron;": 356,
      "Tcedil;": 354,
      "Tcy;": 1058,
      "Tfr;": [55349, 56599],
      "Therefore;": 8756,
      "Theta;": 920,
      "ThickSpace;": [8287, 8202],
      "ThinSpace;": 8201,
      "Tilde;": 8764,
      "TildeEqual;": 8771,
      "TildeFullEqual;": 8773,
      "TildeTilde;": 8776,
      "Topf;": [55349, 56651],
      "TripleDot;": 8411,
      "Tscr;": [55349, 56495],
      "Tstrok;": 358,
      "Uacute": 218,
      "Uacute;": 218,
      "Uarr;": 8607,
      "Uarrocir;": 10569,
      "Ubrcy;": 1038,
      "Ubreve;": 364,
      "Ucirc": 219,
      "Ucirc;": 219,
      "Ucy;": 1059,
      "Udblac;": 368,
      "Ufr;": [55349, 56600],
      "Ugrave": 217,
      "Ugrave;": 217,
      "Umacr;": 362,
      "UnderBar;": 95,
      "UnderBrace;": 9183,
      "UnderBracket;": 9141,
      "UnderParenthesis;": 9181,
      "Union;": 8899,
      "UnionPlus;": 8846,
      "Uogon;": 370,
      "Uopf;": [55349, 56652],
      "UpArrow;": 8593,
      "UpArrowBar;": 10514,
      "UpArrowDownArrow;": 8645,
      "UpDownArrow;": 8597,
      "UpEquilibrium;": 10606,
      "UpTee;": 8869,
      "UpTeeArrow;": 8613,
      "Uparrow;": 8657,
      "Updownarrow;": 8661,
      "UpperLeftArrow;": 8598,
      "UpperRightArrow;": 8599,
      "Upsi;": 978,
      "Upsilon;": 933,
      "Uring;": 366,
      "Uscr;": [55349, 56496],
      "Utilde;": 360,
      "Uuml": 220,
      "Uuml;": 220,
      "VDash;": 8875,
      "Vbar;": 10987,
      "Vcy;": 1042,
      "Vdash;": 8873,
      "Vdashl;": 10982,
      "Vee;": 8897,
      "Verbar;": 8214,
      "Vert;": 8214,
      "VerticalBar;": 8739,
      "VerticalLine;": 124,
      "VerticalSeparator;": 10072,
      "VerticalTilde;": 8768,
      "VeryThinSpace;": 8202,
      "Vfr;": [55349, 56601],
      "Vopf;": [55349, 56653],
      "Vscr;": [55349, 56497],
      "Vvdash;": 8874,
      "Wcirc;": 372,
      "Wedge;": 8896,
      "Wfr;": [55349, 56602],
      "Wopf;": [55349, 56654],
      "Wscr;": [55349, 56498],
      "Xfr;": [55349, 56603],
      "Xi;": 926,
      "Xopf;": [55349, 56655],
      "Xscr;": [55349, 56499],
      "YAcy;": 1071,
      "YIcy;": 1031,
      "YUcy;": 1070,
      "Yacute": 221,
      "Yacute;": 221,
      "Ycirc;": 374,
      "Ycy;": 1067,
      "Yfr;": [55349, 56604],
      "Yopf;": [55349, 56656],
      "Yscr;": [55349, 56500],
      "Yuml;": 376,
      "ZHcy;": 1046,
      "Zacute;": 377,
      "Zcaron;": 381,
      "Zcy;": 1047,
      "Zdot;": 379,
      "ZeroWidthSpace;": 8203,
      "Zeta;": 918,
      "Zfr;": 8488,
      "Zopf;": 8484,
      "Zscr;": [55349, 56501],
      "aacute": 225,
      "aacute;": 225,
      "abreve;": 259,
      "ac;": 8766,
      "acE;": [8766, 819],
      "acd;": 8767,
      "acirc": 226,
      "acirc;": 226,
      "acute": 180,
      "acute;": 180,
      "acy;": 1072,
      "aelig": 230,
      "aelig;": 230,
      "af;": 8289,
      "afr;": [55349, 56606],
      "agrave": 224,
      "agrave;": 224,
      "alefsym;": 8501,
      "aleph;": 8501,
      "alpha;": 945,
      "amacr;": 257,
      "amalg;": 10815,
      "amp": 38,
      "amp;": 38,
      "and;": 8743,
      "andand;": 10837,
      "andd;": 10844,
      "andslope;": 10840,
      "andv;": 10842,
      "ang;": 8736,
      "ange;": 10660,
      "angle;": 8736,
      "angmsd;": 8737,
      "angmsdaa;": 10664,
      "angmsdab;": 10665,
      "angmsdac;": 10666,
      "angmsdad;": 10667,
      "angmsdae;": 10668,
      "angmsdaf;": 10669,
      "angmsdag;": 10670,
      "angmsdah;": 10671,
      "angrt;": 8735,
      "angrtvb;": 8894,
      "angrtvbd;": 10653,
      "angsph;": 8738,
      "angst;": 197,
      "angzarr;": 9084,
      "aogon;": 261,
      "aopf;": [55349, 56658],
      "ap;": 8776,
      "apE;": 10864,
      "apacir;": 10863,
      "ape;": 8778,
      "apid;": 8779,
      "apos;": 39,
      "approx;": 8776,
      "approxeq;": 8778,
      "aring": 229,
      "aring;": 229,
      "ascr;": [55349, 56502],
      "ast;": 42,
      "asymp;": 8776,
      "asympeq;": 8781,
      "atilde": 227,
      "atilde;": 227,
      "auml": 228,
      "auml;": 228,
      "awconint;": 8755,
      "awint;": 10769,
      "bNot;": 10989,
      "backcong;": 8780,
      "backepsilon;": 1014,
      "backprime;": 8245,
      "backsim;": 8765,
      "backsimeq;": 8909,
      "barvee;": 8893,
      "barwed;": 8965,
      "barwedge;": 8965,
      "bbrk;": 9141,
      "bbrktbrk;": 9142,
      "bcong;": 8780,
      "bcy;": 1073,
      "bdquo;": 8222,
      "becaus;": 8757,
      "because;": 8757,
      "bemptyv;": 10672,
      "bepsi;": 1014,
      "bernou;": 8492,
      "beta;": 946,
      "beth;": 8502,
      "between;": 8812,
      "bfr;": [55349, 56607],
      "bigcap;": 8898,
      "bigcirc;": 9711,
      "bigcup;": 8899,
      "bigodot;": 10752,
      "bigoplus;": 10753,
      "bigotimes;": 10754,
      "bigsqcup;": 10758,
      "bigstar;": 9733,
      "bigtriangledown;": 9661,
      "bigtriangleup;": 9651,
      "biguplus;": 10756,
      "bigvee;": 8897,
      "bigwedge;": 8896,
      "bkarow;": 10509,
      "blacklozenge;": 10731,
      "blacksquare;": 9642,
      "blacktriangle;": 9652,
      "blacktriangledown;": 9662,
      "blacktriangleleft;": 9666,
      "blacktriangleright;": 9656,
      "blank;": 9251,
      "blk12;": 9618,
      "blk14;": 9617,
      "blk34;": 9619,
      "block;": 9608,
      "bne;": [61, 8421],
      "bnequiv;": [8801, 8421],
      "bnot;": 8976,
      "bopf;": [55349, 56659],
      "bot;": 8869,
      "bottom;": 8869,
      "bowtie;": 8904,
      "boxDL;": 9559,
      "boxDR;": 9556,
      "boxDl;": 9558,
      "boxDr;": 9555,
      "boxH;": 9552,
      "boxHD;": 9574,
      "boxHU;": 9577,
      "boxHd;": 9572,
      "boxHu;": 9575,
      "boxUL;": 9565,
      "boxUR;": 9562,
      "boxUl;": 9564,
      "boxUr;": 9561,
      "boxV;": 9553,
      "boxVH;": 9580,
      "boxVL;": 9571,
      "boxVR;": 9568,
      "boxVh;": 9579,
      "boxVl;": 9570,
      "boxVr;": 9567,
      "boxbox;": 10697,
      "boxdL;": 9557,
      "boxdR;": 9554,
      "boxdl;": 9488,
      "boxdr;": 9484,
      "boxh;": 9472,
      "boxhD;": 9573,
      "boxhU;": 9576,
      "boxhd;": 9516,
      "boxhu;": 9524,
      "boxminus;": 8863,
      "boxplus;": 8862,
      "boxtimes;": 8864,
      "boxuL;": 9563,
      "boxuR;": 9560,
      "boxul;": 9496,
      "boxur;": 9492,
      "boxv;": 9474,
      "boxvH;": 9578,
      "boxvL;": 9569,
      "boxvR;": 9566,
      "boxvh;": 9532,
      "boxvl;": 9508,
      "boxvr;": 9500,
      "bprime;": 8245,
      "breve;": 728,
      "brvbar": 166,
      "brvbar;": 166,
      "bscr;": [55349, 56503],
      "bsemi;": 8271,
      "bsim;": 8765,
      "bsime;": 8909,
      "bsol;": 92,
      "bsolb;": 10693,
      "bsolhsub;": 10184,
      "bull;": 8226,
      "bullet;": 8226,
      "bump;": 8782,
      "bumpE;": 10926,
      "bumpe;": 8783,
      "bumpeq;": 8783,
      "cacute;": 263,
      "cap;": 8745,
      "capand;": 10820,
      "capbrcup;": 10825,
      "capcap;": 10827,
      "capcup;": 10823,
      "capdot;": 10816,
      "caps;": [8745, 65024],
      "caret;": 8257,
      "caron;": 711,
      "ccaps;": 10829,
      "ccaron;": 269,
      "ccedil": 231,
      "ccedil;": 231,
      "ccirc;": 265,
      "ccups;": 10828,
      "ccupssm;": 10832,
      "cdot;": 267,
      "cedil": 184,
      "cedil;": 184,
      "cemptyv;": 10674,
      "cent": 162,
      "cent;": 162,
      "centerdot;": 183,
      "cfr;": [55349, 56608],
      "chcy;": 1095,
      "check;": 10003,
      "checkmark;": 10003,
      "chi;": 967,
      "cir;": 9675,
      "cirE;": 10691,
      "circ;": 710,
      "circeq;": 8791,
      "circlearrowleft;": 8634,
      "circlearrowright;": 8635,
      "circledR;": 174,
      "circledS;": 9416,
      "circledast;": 8859,
      "circledcirc;": 8858,
      "circleddash;": 8861,
      "cire;": 8791,
      "cirfnint;": 10768,
      "cirmid;": 10991,
      "cirscir;": 10690,
      "clubs;": 9827,
      "clubsuit;": 9827,
      "colon;": 58,
      "colone;": 8788,
      "coloneq;": 8788,
      "comma;": 44,
      "commat;": 64,
      "comp;": 8705,
      "compfn;": 8728,
      "complement;": 8705,
      "complexes;": 8450,
      "cong;": 8773,
      "congdot;": 10861,
      "conint;": 8750,
      "copf;": [55349, 56660],
      "coprod;": 8720,
      "copy": 169,
      "copy;": 169,
      "copysr;": 8471,
      "crarr;": 8629,
      "cross;": 10007,
      "cscr;": [55349, 56504],
      "csub;": 10959,
      "csube;": 10961,
      "csup;": 10960,
      "csupe;": 10962,
      "ctdot;": 8943,
      "cudarrl;": 10552,
      "cudarrr;": 10549,
      "cuepr;": 8926,
      "cuesc;": 8927,
      "cularr;": 8630,
      "cularrp;": 10557,
      "cup;": 8746,
      "cupbrcap;": 10824,
      "cupcap;": 10822,
      "cupcup;": 10826,
      "cupdot;": 8845,
      "cupor;": 10821,
      "cups;": [8746, 65024],
      "curarr;": 8631,
      "curarrm;": 10556,
      "curlyeqprec;": 8926,
      "curlyeqsucc;": 8927,
      "curlyvee;": 8910,
      "curlywedge;": 8911,
      "curren": 164,
      "curren;": 164,
      "curvearrowleft;": 8630,
      "curvearrowright;": 8631,
      "cuvee;": 8910,
      "cuwed;": 8911,
      "cwconint;": 8754,
      "cwint;": 8753,
      "cylcty;": 9005,
      "dArr;": 8659,
      "dHar;": 10597,
      "dagger;": 8224,
      "daleth;": 8504,
      "darr;": 8595,
      "dash;": 8208,
      "dashv;": 8867,
      "dbkarow;": 10511,
      "dblac;": 733,
      "dcaron;": 271,
      "dcy;": 1076,
      "dd;": 8518,
      "ddagger;": 8225,
      "ddarr;": 8650,
      "ddotseq;": 10871,
      "deg": 176,
      "deg;": 176,
      "delta;": 948,
      "demptyv;": 10673,
      "dfisht;": 10623,
      "dfr;": [55349, 56609],
      "dharl;": 8643,
      "dharr;": 8642,
      "diam;": 8900,
      "diamond;": 8900,
      "diamondsuit;": 9830,
      "diams;": 9830,
      "die;": 168,
      "digamma;": 989,
      "disin;": 8946,
      "div;": 247,
      "divide": 247,
      "divide;": 247,
      "divideontimes;": 8903,
      "divonx;": 8903,
      "djcy;": 1106,
      "dlcorn;": 8990,
      "dlcrop;": 8973,
      "dollar;": 36,
      "dopf;": [55349, 56661],
      "dot;": 729,
      "doteq;": 8784,
      "doteqdot;": 8785,
      "dotminus;": 8760,
      "dotplus;": 8724,
      "dotsquare;": 8865,
      "doublebarwedge;": 8966,
      "downarrow;": 8595,
      "downdownarrows;": 8650,
      "downharpoonleft;": 8643,
      "downharpoonright;": 8642,
      "drbkarow;": 10512,
      "drcorn;": 8991,
      "drcrop;": 8972,
      "dscr;": [55349, 56505],
      "dscy;": 1109,
      "dsol;": 10742,
      "dstrok;": 273,
      "dtdot;": 8945,
      "dtri;": 9663,
      "dtrif;": 9662,
      "duarr;": 8693,
      "duhar;": 10607,
      "dwangle;": 10662,
      "dzcy;": 1119,
      "dzigrarr;": 10239,
      "eDDot;": 10871,
      "eDot;": 8785,
      "eacute": 233,
      "eacute;": 233,
      "easter;": 10862,
      "ecaron;": 283,
      "ecir;": 8790,
      "ecirc": 234,
      "ecirc;": 234,
      "ecolon;": 8789,
      "ecy;": 1101,
      "edot;": 279,
      "ee;": 8519,
      "efDot;": 8786,
      "efr;": [55349, 56610],
      "eg;": 10906,
      "egrave": 232,
      "egrave;": 232,
      "egs;": 10902,
      "egsdot;": 10904,
      "el;": 10905,
      "elinters;": 9191,
      "ell;": 8467,
      "els;": 10901,
      "elsdot;": 10903,
      "emacr;": 275,
      "empty;": 8709,
      "emptyset;": 8709,
      "emptyv;": 8709,
      "emsp13;": 8196,
      "emsp14;": 8197,
      "emsp;": 8195,
      "eng;": 331,
      "ensp;": 8194,
      "eogon;": 281,
      "eopf;": [55349, 56662],
      "epar;": 8917,
      "eparsl;": 10723,
      "eplus;": 10865,
      "epsi;": 949,
      "epsilon;": 949,
      "epsiv;": 1013,
      "eqcirc;": 8790,
      "eqcolon;": 8789,
      "eqsim;": 8770,
      "eqslantgtr;": 10902,
      "eqslantless;": 10901,
      "equals;": 61,
      "equest;": 8799,
      "equiv;": 8801,
      "equivDD;": 10872,
      "eqvparsl;": 10725,
      "erDot;": 8787,
      "erarr;": 10609,
      "escr;": 8495,
      "esdot;": 8784,
      "esim;": 8770,
      "eta;": 951,
      "eth": 240,
      "eth;": 240,
      "euml": 235,
      "euml;": 235,
      "euro;": 8364,
      "excl;": 33,
      "exist;": 8707,
      "expectation;": 8496,
      "exponentiale;": 8519,
      "fallingdotseq;": 8786,
      "fcy;": 1092,
      "female;": 9792,
      "ffilig;": 64259,
      "fflig;": 64256,
      "ffllig;": 64260,
      "ffr;": [55349, 56611],
      "filig;": 64257,
      "fjlig;": [102, 106],
      "flat;": 9837,
      "fllig;": 64258,
      "fltns;": 9649,
      "fnof;": 402,
      "fopf;": [55349, 56663],
      "forall;": 8704,
      "fork;": 8916,
      "forkv;": 10969,
      "fpartint;": 10765,
      "frac12": 189,
      "frac12;": 189,
      "frac13;": 8531,
      "frac14": 188,
      "frac14;": 188,
      "frac15;": 8533,
      "frac16;": 8537,
      "frac18;": 8539,
      "frac23;": 8532,
      "frac25;": 8534,
      "frac34": 190,
      "frac34;": 190,
      "frac35;": 8535,
      "frac38;": 8540,
      "frac45;": 8536,
      "frac56;": 8538,
      "frac58;": 8541,
      "frac78;": 8542,
      "frasl;": 8260,
      "frown;": 8994,
      "fscr;": [55349, 56507],
      "gE;": 8807,
      "gEl;": 10892,
      "gacute;": 501,
      "gamma;": 947,
      "gammad;": 989,
      "gap;": 10886,
      "gbreve;": 287,
      "gcirc;": 285,
      "gcy;": 1075,
      "gdot;": 289,
      "ge;": 8805,
      "gel;": 8923,
      "geq;": 8805,
      "geqq;": 8807,
      "geqslant;": 10878,
      "ges;": 10878,
      "gescc;": 10921,
      "gesdot;": 10880,
      "gesdoto;": 10882,
      "gesdotol;": 10884,
      "gesl;": [8923, 65024],
      "gesles;": 10900,
      "gfr;": [55349, 56612],
      "gg;": 8811,
      "ggg;": 8921,
      "gimel;": 8503,
      "gjcy;": 1107,
      "gl;": 8823,
      "glE;": 10898,
      "gla;": 10917,
      "glj;": 10916,
      "gnE;": 8809,
      "gnap;": 10890,
      "gnapprox;": 10890,
      "gne;": 10888,
      "gneq;": 10888,
      "gneqq;": 8809,
      "gnsim;": 8935,
      "gopf;": [55349, 56664],
      "grave;": 96,
      "gscr;": 8458,
      "gsim;": 8819,
      "gsime;": 10894,
      "gsiml;": 10896,
      "gt": 62,
      "gt;": 62,
      "gtcc;": 10919,
      "gtcir;": 10874,
      "gtdot;": 8919,
      "gtlPar;": 10645,
      "gtquest;": 10876,
      "gtrapprox;": 10886,
      "gtrarr;": 10616,
      "gtrdot;": 8919,
      "gtreqless;": 8923,
      "gtreqqless;": 10892,
      "gtrless;": 8823,
      "gtrsim;": 8819,
      "gvertneqq;": [8809, 65024],
      "gvnE;": [8809, 65024],
      "hArr;": 8660,
      "hairsp;": 8202,
      "half;": 189,
      "hamilt;": 8459,
      "hardcy;": 1098,
      "harr;": 8596,
      "harrcir;": 10568,
      "harrw;": 8621,
      "hbar;": 8463,
      "hcirc;": 293,
      "hearts;": 9829,
      "heartsuit;": 9829,
      "hellip;": 8230,
      "hercon;": 8889,
      "hfr;": [55349, 56613],
      "hksearow;": 10533,
      "hkswarow;": 10534,
      "hoarr;": 8703,
      "homtht;": 8763,
      "hookleftarrow;": 8617,
      "hookrightarrow;": 8618,
      "hopf;": [55349, 56665],
      "horbar;": 8213,
      "hscr;": [55349, 56509],
      "hslash;": 8463,
      "hstrok;": 295,
      "hybull;": 8259,
      "hyphen;": 8208,
      "iacute": 237,
      "iacute;": 237,
      "ic;": 8291,
      "icirc": 238,
      "icirc;": 238,
      "icy;": 1080,
      "iecy;": 1077,
      "iexcl": 161,
      "iexcl;": 161,
      "iff;": 8660,
      "ifr;": [55349, 56614],
      "igrave": 236,
      "igrave;": 236,
      "ii;": 8520,
      "iiiint;": 10764,
      "iiint;": 8749,
      "iinfin;": 10716,
      "iiota;": 8489,
      "ijlig;": 307,
      "imacr;": 299,
      "image;": 8465,
      "imagline;": 8464,
      "imagpart;": 8465,
      "imath;": 305,
      "imof;": 8887,
      "imped;": 437,
      "in;": 8712,
      "incare;": 8453,
      "infin;": 8734,
      "infintie;": 10717,
      "inodot;": 305,
      "int;": 8747,
      "intcal;": 8890,
      "integers;": 8484,
      "intercal;": 8890,
      "intlarhk;": 10775,
      "intprod;": 10812,
      "iocy;": 1105,
      "iogon;": 303,
      "iopf;": [55349, 56666],
      "iota;": 953,
      "iprod;": 10812,
      "iquest": 191,
      "iquest;": 191,
      "iscr;": [55349, 56510],
      "isin;": 8712,
      "isinE;": 8953,
      "isindot;": 8949,
      "isins;": 8948,
      "isinsv;": 8947,
      "isinv;": 8712,
      "it;": 8290,
      "itilde;": 297,
      "iukcy;": 1110,
      "iuml": 239,
      "iuml;": 239,
      "jcirc;": 309,
      "jcy;": 1081,
      "jfr;": [55349, 56615],
      "jmath;": 567,
      "jopf;": [55349, 56667],
      "jscr;": [55349, 56511],
      "jsercy;": 1112,
      "jukcy;": 1108,
      "kappa;": 954,
      "kappav;": 1008,
      "kcedil;": 311,
      "kcy;": 1082,
      "kfr;": [55349, 56616],
      "kgreen;": 312,
      "khcy;": 1093,
      "kjcy;": 1116,
      "kopf;": [55349, 56668],
      "kscr;": [55349, 56512],
      "lAarr;": 8666,
      "lArr;": 8656,
      "lAtail;": 10523,
      "lBarr;": 10510,
      "lE;": 8806,
      "lEg;": 10891,
      "lHar;": 10594,
      "lacute;": 314,
      "laemptyv;": 10676,
      "lagran;": 8466,
      "lambda;": 955,
      "lang;": 10216,
      "langd;": 10641,
      "langle;": 10216,
      "lap;": 10885,
      "laquo": 171,
      "laquo;": 171,
      "larr;": 8592,
      "larrb;": 8676,
      "larrbfs;": 10527,
      "larrfs;": 10525,
      "larrhk;": 8617,
      "larrlp;": 8619,
      "larrpl;": 10553,
      "larrsim;": 10611,
      "larrtl;": 8610,
      "lat;": 10923,
      "latail;": 10521,
      "late;": 10925,
      "lates;": [10925, 65024],
      "lbarr;": 10508,
      "lbbrk;": 10098,
      "lbrace;": 123,
      "lbrack;": 91,
      "lbrke;": 10635,
      "lbrksld;": 10639,
      "lbrkslu;": 10637,
      "lcaron;": 318,
      "lcedil;": 316,
      "lceil;": 8968,
      "lcub;": 123,
      "lcy;": 1083,
      "ldca;": 10550,
      "ldquo;": 8220,
      "ldquor;": 8222,
      "ldrdhar;": 10599,
      "ldrushar;": 10571,
      "ldsh;": 8626,
      "le;": 8804,
      "leftarrow;": 8592,
      "leftarrowtail;": 8610,
      "leftharpoondown;": 8637,
      "leftharpoonup;": 8636,
      "leftleftarrows;": 8647,
      "leftrightarrow;": 8596,
      "leftrightarrows;": 8646,
      "leftrightharpoons;": 8651,
      "leftrightsquigarrow;": 8621,
      "leftthreetimes;": 8907,
      "leg;": 8922,
      "leq;": 8804,
      "leqq;": 8806,
      "leqslant;": 10877,
      "les;": 10877,
      "lescc;": 10920,
      "lesdot;": 10879,
      "lesdoto;": 10881,
      "lesdotor;": 10883,
      "lesg;": [8922, 65024],
      "lesges;": 10899,
      "lessapprox;": 10885,
      "lessdot;": 8918,
      "lesseqgtr;": 8922,
      "lesseqqgtr;": 10891,
      "lessgtr;": 8822,
      "lesssim;": 8818,
      "lfisht;": 10620,
      "lfloor;": 8970,
      "lfr;": [55349, 56617],
      "lg;": 8822,
      "lgE;": 10897,
      "lhard;": 8637,
      "lharu;": 8636,
      "lharul;": 10602,
      "lhblk;": 9604,
      "ljcy;": 1113,
      "ll;": 8810,
      "llarr;": 8647,
      "llcorner;": 8990,
      "llhard;": 10603,
      "lltri;": 9722,
      "lmidot;": 320,
      "lmoust;": 9136,
      "lmoustache;": 9136,
      "lnE;": 8808,
      "lnap;": 10889,
      "lnapprox;": 10889,
      "lne;": 10887,
      "lneq;": 10887,
      "lneqq;": 8808,
      "lnsim;": 8934,
      "loang;": 10220,
      "loarr;": 8701,
      "lobrk;": 10214,
      "longleftarrow;": 10229,
      "longleftrightarrow;": 10231,
      "longmapsto;": 10236,
      "longrightarrow;": 10230,
      "looparrowleft;": 8619,
      "looparrowright;": 8620,
      "lopar;": 10629,
      "lopf;": [55349, 56669],
      "loplus;": 10797,
      "lotimes;": 10804,
      "lowast;": 8727,
      "lowbar;": 95,
      "loz;": 9674,
      "lozenge;": 9674,
      "lozf;": 10731,
      "lpar;": 40,
      "lparlt;": 10643,
      "lrarr;": 8646,
      "lrcorner;": 8991,
      "lrhar;": 8651,
      "lrhard;": 10605,
      "lrm;": 8206,
      "lrtri;": 8895,
      "lsaquo;": 8249,
      "lscr;": [55349, 56513],
      "lsh;": 8624,
      "lsim;": 8818,
      "lsime;": 10893,
      "lsimg;": 10895,
      "lsqb;": 91,
      "lsquo;": 8216,
      "lsquor;": 8218,
      "lstrok;": 322,
      "lt": 60,
      "lt;": 60,
      "ltcc;": 10918,
      "ltcir;": 10873,
      "ltdot;": 8918,
      "lthree;": 8907,
      "ltimes;": 8905,
      "ltlarr;": 10614,
      "ltquest;": 10875,
      "ltrPar;": 10646,
      "ltri;": 9667,
      "ltrie;": 8884,
      "ltrif;": 9666,
      "lurdshar;": 10570,
      "luruhar;": 10598,
      "lvertneqq;": [8808, 65024],
      "lvnE;": [8808, 65024],
      "mDDot;": 8762,
      "macr": 175,
      "macr;": 175,
      "male;": 9794,
      "malt;": 10016,
      "maltese;": 10016,
      "map;": 8614,
      "mapsto;": 8614,
      "mapstodown;": 8615,
      "mapstoleft;": 8612,
      "mapstoup;": 8613,
      "marker;": 9646,
      "mcomma;": 10793,
      "mcy;": 1084,
      "mdash;": 8212,
      "measuredangle;": 8737,
      "mfr;": [55349, 56618],
      "mho;": 8487,
      "micro": 181,
      "micro;": 181,
      "mid;": 8739,
      "midast;": 42,
      "midcir;": 10992,
      "middot": 183,
      "middot;": 183,
      "minus;": 8722,
      "minusb;": 8863,
      "minusd;": 8760,
      "minusdu;": 10794,
      "mlcp;": 10971,
      "mldr;": 8230,
      "mnplus;": 8723,
      "models;": 8871,
      "mopf;": [55349, 56670],
      "mp;": 8723,
      "mscr;": [55349, 56514],
      "mstpos;": 8766,
      "mu;": 956,
      "multimap;": 8888,
      "mumap;": 8888,
      "nGg;": [8921, 824],
      "nGt;": [8811, 8402],
      "nGtv;": [8811, 824],
      "nLeftarrow;": 8653,
      "nLeftrightarrow;": 8654,
      "nLl;": [8920, 824],
      "nLt;": [8810, 8402],
      "nLtv;": [8810, 824],
      "nRightarrow;": 8655,
      "nVDash;": 8879,
      "nVdash;": 8878,
      "nabla;": 8711,
      "nacute;": 324,
      "nang;": [8736, 8402],
      "nap;": 8777,
      "napE;": [10864, 824],
      "napid;": [8779, 824],
      "napos;": 329,
      "napprox;": 8777,
      "natur;": 9838,
      "natural;": 9838,
      "naturals;": 8469,
      "nbsp": 160,
      "nbsp;": 160,
      "nbump;": [8782, 824],
      "nbumpe;": [8783, 824],
      "ncap;": 10819,
      "ncaron;": 328,
      "ncedil;": 326,
      "ncong;": 8775,
      "ncongdot;": [10861, 824],
      "ncup;": 10818,
      "ncy;": 1085,
      "ndash;": 8211,
      "ne;": 8800,
      "neArr;": 8663,
      "nearhk;": 10532,
      "nearr;": 8599,
      "nearrow;": 8599,
      "nedot;": [8784, 824],
      "nequiv;": 8802,
      "nesear;": 10536,
      "nesim;": [8770, 824],
      "nexist;": 8708,
      "nexists;": 8708,
      "nfr;": [55349, 56619],
      "ngE;": [8807, 824],
      "nge;": 8817,
      "ngeq;": 8817,
      "ngeqq;": [8807, 824],
      "ngeqslant;": [10878, 824],
      "nges;": [10878, 824],
      "ngsim;": 8821,
      "ngt;": 8815,
      "ngtr;": 8815,
      "nhArr;": 8654,
      "nharr;": 8622,
      "nhpar;": 10994,
      "ni;": 8715,
      "nis;": 8956,
      "nisd;": 8954,
      "niv;": 8715,
      "njcy;": 1114,
      "nlArr;": 8653,
      "nlE;": [8806, 824],
      "nlarr;": 8602,
      "nldr;": 8229,
      "nle;": 8816,
      "nleftarrow;": 8602,
      "nleftrightarrow;": 8622,
      "nleq;": 8816,
      "nleqq;": [8806, 824],
      "nleqslant;": [10877, 824],
      "nles;": [10877, 824],
      "nless;": 8814,
      "nlsim;": 8820,
      "nlt;": 8814,
      "nltri;": 8938,
      "nltrie;": 8940,
      "nmid;": 8740,
      "nopf;": [55349, 56671],
      "not": 172,
      "not;": 172,
      "notin;": 8713,
      "notinE;": [8953, 824],
      "notindot;": [8949, 824],
      "notinva;": 8713,
      "notinvb;": 8951,
      "notinvc;": 8950,
      "notni;": 8716,
      "notniva;": 8716,
      "notnivb;": 8958,
      "notnivc;": 8957,
      "npar;": 8742,
      "nparallel;": 8742,
      "nparsl;": [11005, 8421],
      "npart;": [8706, 824],
      "npolint;": 10772,
      "npr;": 8832,
      "nprcue;": 8928,
      "npre;": [10927, 824],
      "nprec;": 8832,
      "npreceq;": [10927, 824],
      "nrArr;": 8655,
      "nrarr;": 8603,
      "nrarrc;": [10547, 824],
      "nrarrw;": [8605, 824],
      "nrightarrow;": 8603,
      "nrtri;": 8939,
      "nrtrie;": 8941,
      "nsc;": 8833,
      "nsccue;": 8929,
      "nsce;": [10928, 824],
      "nscr;": [55349, 56515],
      "nshortmid;": 8740,
      "nshortparallel;": 8742,
      "nsim;": 8769,
      "nsime;": 8772,
      "nsimeq;": 8772,
      "nsmid;": 8740,
      "nspar;": 8742,
      "nsqsube;": 8930,
      "nsqsupe;": 8931,
      "nsub;": 8836,
      "nsubE;": [10949, 824],
      "nsube;": 8840,
      "nsubset;": [8834, 8402],
      "nsubseteq;": 8840,
      "nsubseteqq;": [10949, 824],
      "nsucc;": 8833,
      "nsucceq;": [10928, 824],
      "nsup;": 8837,
      "nsupE;": [10950, 824],
      "nsupe;": 8841,
      "nsupset;": [8835, 8402],
      "nsupseteq;": 8841,
      "nsupseteqq;": [10950, 824],
      "ntgl;": 8825,
      "ntilde": 241,
      "ntilde;": 241,
      "ntlg;": 8824,
      "ntriangleleft;": 8938,
      "ntrianglelefteq;": 8940,
      "ntriangleright;": 8939,
      "ntrianglerighteq;": 8941,
      "nu;": 957,
      "num;": 35,
      "numero;": 8470,
      "numsp;": 8199,
      "nvDash;": 8877,
      "nvHarr;": 10500,
      "nvap;": [8781, 8402],
      "nvdash;": 8876,
      "nvge;": [8805, 8402],
      "nvgt;": [62, 8402],
      "nvinfin;": 10718,
      "nvlArr;": 10498,
      "nvle;": [8804, 8402],
      "nvlt;": [60, 8402],
      "nvltrie;": [8884, 8402],
      "nvrArr;": 10499,
      "nvrtrie;": [8885, 8402],
      "nvsim;": [8764, 8402],
      "nwArr;": 8662,
      "nwarhk;": 10531,
      "nwarr;": 8598,
      "nwarrow;": 8598,
      "nwnear;": 10535,
      "oS;": 9416,
      "oacute": 243,
      "oacute;": 243,
      "oast;": 8859,
      "ocir;": 8858,
      "ocirc": 244,
      "ocirc;": 244,
      "ocy;": 1086,
      "odash;": 8861,
      "odblac;": 337,
      "odiv;": 10808,
      "odot;": 8857,
      "odsold;": 10684,
      "oelig;": 339,
      "ofcir;": 10687,
      "ofr;": [55349, 56620],
      "ogon;": 731,
      "ograve": 242,
      "ograve;": 242,
      "ogt;": 10689,
      "ohbar;": 10677,
      "ohm;": 937,
      "oint;": 8750,
      "olarr;": 8634,
      "olcir;": 10686,
      "olcross;": 10683,
      "oline;": 8254,
      "olt;": 10688,
      "omacr;": 333,
      "omega;": 969,
      "omicron;": 959,
      "omid;": 10678,
      "ominus;": 8854,
      "oopf;": [55349, 56672],
      "opar;": 10679,
      "operp;": 10681,
      "oplus;": 8853,
      "or;": 8744,
      "orarr;": 8635,
      "ord;": 10845,
      "order;": 8500,
      "orderof;": 8500,
      "ordf": 170,
      "ordf;": 170,
      "ordm": 186,
      "ordm;": 186,
      "origof;": 8886,
      "oror;": 10838,
      "orslope;": 10839,
      "orv;": 10843,
      "oscr;": 8500,
      "oslash": 248,
      "oslash;": 248,
      "osol;": 8856,
      "otilde": 245,
      "otilde;": 245,
      "otimes;": 8855,
      "otimesas;": 10806,
      "ouml": 246,
      "ouml;": 246,
      "ovbar;": 9021,
      "par;": 8741,
      "para": 182,
      "para;": 182,
      "parallel;": 8741,
      "parsim;": 10995,
      "parsl;": 11005,
      "part;": 8706,
      "pcy;": 1087,
      "percnt;": 37,
      "period;": 46,
      "permil;": 8240,
      "perp;": 8869,
      "pertenk;": 8241,
      "pfr;": [55349, 56621],
      "phi;": 966,
      "phiv;": 981,
      "phmmat;": 8499,
      "phone;": 9742,
      "pi;": 960,
      "pitchfork;": 8916,
      "piv;": 982,
      "planck;": 8463,
      "planckh;": 8462,
      "plankv;": 8463,
      "plus;": 43,
      "plusacir;": 10787,
      "plusb;": 8862,
      "pluscir;": 10786,
      "plusdo;": 8724,
      "plusdu;": 10789,
      "pluse;": 10866,
      "plusmn": 177,
      "plusmn;": 177,
      "plussim;": 10790,
      "plustwo;": 10791,
      "pm;": 177,
      "pointint;": 10773,
      "popf;": [55349, 56673],
      "pound": 163,
      "pound;": 163,
      "pr;": 8826,
      "prE;": 10931,
      "prap;": 10935,
      "prcue;": 8828,
      "pre;": 10927,
      "prec;": 8826,
      "precapprox;": 10935,
      "preccurlyeq;": 8828,
      "preceq;": 10927,
      "precnapprox;": 10937,
      "precneqq;": 10933,
      "precnsim;": 8936,
      "precsim;": 8830,
      "prime;": 8242,
      "primes;": 8473,
      "prnE;": 10933,
      "prnap;": 10937,
      "prnsim;": 8936,
      "prod;": 8719,
      "profalar;": 9006,
      "profline;": 8978,
      "profsurf;": 8979,
      "prop;": 8733,
      "propto;": 8733,
      "prsim;": 8830,
      "prurel;": 8880,
      "pscr;": [55349, 56517],
      "psi;": 968,
      "puncsp;": 8200,
      "qfr;": [55349, 56622],
      "qint;": 10764,
      "qopf;": [55349, 56674],
      "qprime;": 8279,
      "qscr;": [55349, 56518],
      "quaternions;": 8461,
      "quatint;": 10774,
      "quest;": 63,
      "questeq;": 8799,
      "quot": 34,
      "quot;": 34,
      "rAarr;": 8667,
      "rArr;": 8658,
      "rAtail;": 10524,
      "rBarr;": 10511,
      "rHar;": 10596,
      "race;": [8765, 817],
      "racute;": 341,
      "radic;": 8730,
      "raemptyv;": 10675,
      "rang;": 10217,
      "rangd;": 10642,
      "range;": 10661,
      "rangle;": 10217,
      "raquo": 187,
      "raquo;": 187,
      "rarr;": 8594,
      "rarrap;": 10613,
      "rarrb;": 8677,
      "rarrbfs;": 10528,
      "rarrc;": 10547,
      "rarrfs;": 10526,
      "rarrhk;": 8618,
      "rarrlp;": 8620,
      "rarrpl;": 10565,
      "rarrsim;": 10612,
      "rarrtl;": 8611,
      "rarrw;": 8605,
      "ratail;": 10522,
      "ratio;": 8758,
      "rationals;": 8474,
      "rbarr;": 10509,
      "rbbrk;": 10099,
      "rbrace;": 125,
      "rbrack;": 93,
      "rbrke;": 10636,
      "rbrksld;": 10638,
      "rbrkslu;": 10640,
      "rcaron;": 345,
      "rcedil;": 343,
      "rceil;": 8969,
      "rcub;": 125,
      "rcy;": 1088,
      "rdca;": 10551,
      "rdldhar;": 10601,
      "rdquo;": 8221,
      "rdquor;": 8221,
      "rdsh;": 8627,
      "real;": 8476,
      "realine;": 8475,
      "realpart;": 8476,
      "reals;": 8477,
      "rect;": 9645,
      "reg": 174,
      "reg;": 174,
      "rfisht;": 10621,
      "rfloor;": 8971,
      "rfr;": [55349, 56623],
      "rhard;": 8641,
      "rharu;": 8640,
      "rharul;": 10604,
      "rho;": 961,
      "rhov;": 1009,
      "rightarrow;": 8594,
      "rightarrowtail;": 8611,
      "rightharpoondown;": 8641,
      "rightharpoonup;": 8640,
      "rightleftarrows;": 8644,
      "rightleftharpoons;": 8652,
      "rightrightarrows;": 8649,
      "rightsquigarrow;": 8605,
      "rightthreetimes;": 8908,
      "ring;": 730,
      "risingdotseq;": 8787,
      "rlarr;": 8644,
      "rlhar;": 8652,
      "rlm;": 8207,
      "rmoust;": 9137,
      "rmoustache;": 9137,
      "rnmid;": 10990,
      "roang;": 10221,
      "roarr;": 8702,
      "robrk;": 10215,
      "ropar;": 10630,
      "ropf;": [55349, 56675],
      "roplus;": 10798,
      "rotimes;": 10805,
      "rpar;": 41,
      "rpargt;": 10644,
      "rppolint;": 10770,
      "rrarr;": 8649,
      "rsaquo;": 8250,
      "rscr;": [55349, 56519],
      "rsh;": 8625,
      "rsqb;": 93,
      "rsquo;": 8217,
      "rsquor;": 8217,
      "rthree;": 8908,
      "rtimes;": 8906,
      "rtri;": 9657,
      "rtrie;": 8885,
      "rtrif;": 9656,
      "rtriltri;": 10702,
      "ruluhar;": 10600,
      "rx;": 8478,
      "sacute;": 347,
      "sbquo;": 8218,
      "sc;": 8827,
      "scE;": 10932,
      "scap;": 10936,
      "scaron;": 353,
      "sccue;": 8829,
      "sce;": 10928,
      "scedil;": 351,
      "scirc;": 349,
      "scnE;": 10934,
      "scnap;": 10938,
      "scnsim;": 8937,
      "scpolint;": 10771,
      "scsim;": 8831,
      "scy;": 1089,
      "sdot;": 8901,
      "sdotb;": 8865,
      "sdote;": 10854,
      "seArr;": 8664,
      "searhk;": 10533,
      "searr;": 8600,
      "searrow;": 8600,
      "sect": 167,
      "sect;": 167,
      "semi;": 59,
      "seswar;": 10537,
      "setminus;": 8726,
      "setmn;": 8726,
      "sext;": 10038,
      "sfr;": [55349, 56624],
      "sfrown;": 8994,
      "sharp;": 9839,
      "shchcy;": 1097,
      "shcy;": 1096,
      "shortmid;": 8739,
      "shortparallel;": 8741,
      "shy": 173,
      "shy;": 173,
      "sigma;": 963,
      "sigmaf;": 962,
      "sigmav;": 962,
      "sim;": 8764,
      "simdot;": 10858,
      "sime;": 8771,
      "simeq;": 8771,
      "simg;": 10910,
      "simgE;": 10912,
      "siml;": 10909,
      "simlE;": 10911,
      "simne;": 8774,
      "simplus;": 10788,
      "simrarr;": 10610,
      "slarr;": 8592,
      "smallsetminus;": 8726,
      "smashp;": 10803,
      "smeparsl;": 10724,
      "smid;": 8739,
      "smile;": 8995,
      "smt;": 10922,
      "smte;": 10924,
      "smtes;": [10924, 65024],
      "softcy;": 1100,
      "sol;": 47,
      "solb;": 10692,
      "solbar;": 9023,
      "sopf;": [55349, 56676],
      "spades;": 9824,
      "spadesuit;": 9824,
      "spar;": 8741,
      "sqcap;": 8851,
      "sqcaps;": [8851, 65024],
      "sqcup;": 8852,
      "sqcups;": [8852, 65024],
      "sqsub;": 8847,
      "sqsube;": 8849,
      "sqsubset;": 8847,
      "sqsubseteq;": 8849,
      "sqsup;": 8848,
      "sqsupe;": 8850,
      "sqsupset;": 8848,
      "sqsupseteq;": 8850,
      "squ;": 9633,
      "square;": 9633,
      "squarf;": 9642,
      "squf;": 9642,
      "srarr;": 8594,
      "sscr;": [55349, 56520],
      "ssetmn;": 8726,
      "ssmile;": 8995,
      "sstarf;": 8902,
      "star;": 9734,
      "starf;": 9733,
      "straightepsilon;": 1013,
      "straightphi;": 981,
      "strns;": 175,
      "sub;": 8834,
      "subE;": 10949,
      "subdot;": 10941,
      "sube;": 8838,
      "subedot;": 10947,
      "submult;": 10945,
      "subnE;": 10955,
      "subne;": 8842,
      "subplus;": 10943,
      "subrarr;": 10617,
      "subset;": 8834,
      "subseteq;": 8838,
      "subseteqq;": 10949,
      "subsetneq;": 8842,
      "subsetneqq;": 10955,
      "subsim;": 10951,
      "subsub;": 10965,
      "subsup;": 10963,
      "succ;": 8827,
      "succapprox;": 10936,
      "succcurlyeq;": 8829,
      "succeq;": 10928,
      "succnapprox;": 10938,
      "succneqq;": 10934,
      "succnsim;": 8937,
      "succsim;": 8831,
      "sum;": 8721,
      "sung;": 9834,
      "sup1": 185,
      "sup1;": 185,
      "sup2": 178,
      "sup2;": 178,
      "sup3": 179,
      "sup3;": 179,
      "sup;": 8835,
      "supE;": 10950,
      "supdot;": 10942,
      "supdsub;": 10968,
      "supe;": 8839,
      "supedot;": 10948,
      "suphsol;": 10185,
      "suphsub;": 10967,
      "suplarr;": 10619,
      "supmult;": 10946,
      "supnE;": 10956,
      "supne;": 8843,
      "supplus;": 10944,
      "supset;": 8835,
      "supseteq;": 8839,
      "supseteqq;": 10950,
      "supsetneq;": 8843,
      "supsetneqq;": 10956,
      "supsim;": 10952,
      "supsub;": 10964,
      "supsup;": 10966,
      "swArr;": 8665,
      "swarhk;": 10534,
      "swarr;": 8601,
      "swarrow;": 8601,
      "swnwar;": 10538,
      "szlig": 223,
      "szlig;": 223,
      "target;": 8982,
      "tau;": 964,
      "tbrk;": 9140,
      "tcaron;": 357,
      "tcedil;": 355,
      "tcy;": 1090,
      "tdot;": 8411,
      "telrec;": 8981,
      "tfr;": [55349, 56625],
      "there4;": 8756,
      "therefore;": 8756,
      "theta;": 952,
      "thetasym;": 977,
      "thetav;": 977,
      "thickapprox;": 8776,
      "thicksim;": 8764,
      "thinsp;": 8201,
      "thkap;": 8776,
      "thksim;": 8764,
      "thorn": 254,
      "thorn;": 254,
      "tilde;": 732,
      "times": 215,
      "times;": 215,
      "timesb;": 8864,
      "timesbar;": 10801,
      "timesd;": 10800,
      "tint;": 8749,
      "toea;": 10536,
      "top;": 8868,
      "topbot;": 9014,
      "topcir;": 10993,
      "topf;": [55349, 56677],
      "topfork;": 10970,
      "tosa;": 10537,
      "tprime;": 8244,
      "trade;": 8482,
      "triangle;": 9653,
      "triangledown;": 9663,
      "triangleleft;": 9667,
      "trianglelefteq;": 8884,
      "triangleq;": 8796,
      "triangleright;": 9657,
      "trianglerighteq;": 8885,
      "tridot;": 9708,
      "trie;": 8796,
      "triminus;": 10810,
      "triplus;": 10809,
      "trisb;": 10701,
      "tritime;": 10811,
      "trpezium;": 9186,
      "tscr;": [55349, 56521],
      "tscy;": 1094,
      "tshcy;": 1115,
      "tstrok;": 359,
      "twixt;": 8812,
      "twoheadleftarrow;": 8606,
      "twoheadrightarrow;": 8608,
      "uArr;": 8657,
      "uHar;": 10595,
      "uacute": 250,
      "uacute;": 250,
      "uarr;": 8593,
      "ubrcy;": 1118,
      "ubreve;": 365,
      "ucirc": 251,
      "ucirc;": 251,
      "ucy;": 1091,
      "udarr;": 8645,
      "udblac;": 369,
      "udhar;": 10606,
      "ufisht;": 10622,
      "ufr;": [55349, 56626],
      "ugrave": 249,
      "ugrave;": 249,
      "uharl;": 8639,
      "uharr;": 8638,
      "uhblk;": 9600,
      "ulcorn;": 8988,
      "ulcorner;": 8988,
      "ulcrop;": 8975,
      "ultri;": 9720,
      "umacr;": 363,
      "uml": 168,
      "uml;": 168,
      "uogon;": 371,
      "uopf;": [55349, 56678],
      "uparrow;": 8593,
      "updownarrow;": 8597,
      "upharpoonleft;": 8639,
      "upharpoonright;": 8638,
      "uplus;": 8846,
      "upsi;": 965,
      "upsih;": 978,
      "upsilon;": 965,
      "upuparrows;": 8648,
      "urcorn;": 8989,
      "urcorner;": 8989,
      "urcrop;": 8974,
      "uring;": 367,
      "urtri;": 9721,
      "uscr;": [55349, 56522],
      "utdot;": 8944,
      "utilde;": 361,
      "utri;": 9653,
      "utrif;": 9652,
      "uuarr;": 8648,
      "uuml": 252,
      "uuml;": 252,
      "uwangle;": 10663,
      "vArr;": 8661,
      "vBar;": 10984,
      "vBarv;": 10985,
      "vDash;": 8872,
      "vangrt;": 10652,
      "varepsilon;": 1013,
      "varkappa;": 1008,
      "varnothing;": 8709,
      "varphi;": 981,
      "varpi;": 982,
      "varpropto;": 8733,
      "varr;": 8597,
      "varrho;": 1009,
      "varsigma;": 962,
      "varsubsetneq;": [8842, 65024],
      "varsubsetneqq;": [10955, 65024],
      "varsupsetneq;": [8843, 65024],
      "varsupsetneqq;": [10956, 65024],
      "vartheta;": 977,
      "vartriangleleft;": 8882,
      "vartriangleright;": 8883,
      "vcy;": 1074,
      "vdash;": 8866,
      "vee;": 8744,
      "veebar;": 8891,
      "veeeq;": 8794,
      "vellip;": 8942,
      "verbar;": 124,
      "vert;": 124,
      "vfr;": [55349, 56627],
      "vltri;": 8882,
      "vnsub;": [8834, 8402],
      "vnsup;": [8835, 8402],
      "vopf;": [55349, 56679],
      "vprop;": 8733,
      "vrtri;": 8883,
      "vscr;": [55349, 56523],
      "vsubnE;": [10955, 65024],
      "vsubne;": [8842, 65024],
      "vsupnE;": [10956, 65024],
      "vsupne;": [8843, 65024],
      "vzigzag;": 10650,
      "wcirc;": 373,
      "wedbar;": 10847,
      "wedge;": 8743,
      "wedgeq;": 8793,
      "weierp;": 8472,
      "wfr;": [55349, 56628],
      "wopf;": [55349, 56680],
      "wp;": 8472,
      "wr;": 8768,
      "wreath;": 8768,
      "wscr;": [55349, 56524],
      "xcap;": 8898,
      "xcirc;": 9711,
      "xcup;": 8899,
      "xdtri;": 9661,
      "xfr;": [55349, 56629],
      "xhArr;": 10234,
      "xharr;": 10231,
      "xi;": 958,
      "xlArr;": 10232,
      "xlarr;": 10229,
      "xmap;": 10236,
      "xnis;": 8955,
      "xodot;": 10752,
      "xopf;": [55349, 56681],
      "xoplus;": 10753,
      "xotime;": 10754,
      "xrArr;": 10233,
      "xrarr;": 10230,
      "xscr;": [55349, 56525],
      "xsqcup;": 10758,
      "xuplus;": 10756,
      "xutri;": 9651,
      "xvee;": 8897,
      "xwedge;": 8896,
      "yacute": 253,
      "yacute;": 253,
      "yacy;": 1103,
      "ycirc;": 375,
      "ycy;": 1099,
      "yen": 165,
      "yen;": 165,
      "yfr;": [55349, 56630],
      "yicy;": 1111,
      "yopf;": [55349, 56682],
      "yscr;": [55349, 56526],
      "yucy;": 1102,
      "yuml": 255,
      "yuml;": 255,
      "zacute;": 378,
      "zcaron;": 382,
      "zcy;": 1079,
      "zdot;": 380,
      "zeetrf;": 8488,
      "zeta;": 950,
      "zfr;": [55349, 56631],
      "zhcy;": 1078,
      "zigrarr;": 8669,
      "zopf;": [55349, 56683],
      "zscr;": [55349, 56527],
      "zwj;": 8205,
      "zwnj;": 8204
    };
    var NAMEDCHARREF = /(A(?:Elig;?|MP;?|acute;?|breve;|c(?:irc;?|y;)|fr;|grave;?|lpha;|macr;|nd;|o(?:gon;|pf;)|pplyFunction;|ring;?|s(?:cr;|sign;)|tilde;?|uml;?)|B(?:a(?:ckslash;|r(?:v;|wed;))|cy;|e(?:cause;|rnoullis;|ta;)|fr;|opf;|reve;|scr;|umpeq;)|C(?:Hcy;|OPY;?|a(?:cute;|p(?:;|italDifferentialD;)|yleys;)|c(?:aron;|edil;?|irc;|onint;)|dot;|e(?:dilla;|nterDot;)|fr;|hi;|ircle(?:Dot;|Minus;|Plus;|Times;)|lo(?:ckwiseContourIntegral;|seCurly(?:DoubleQuote;|Quote;))|o(?:lon(?:;|e;)|n(?:gruent;|int;|tourIntegral;)|p(?:f;|roduct;)|unterClockwiseContourIntegral;)|ross;|scr;|up(?:;|Cap;))|D(?:D(?:;|otrahd;)|Jcy;|Scy;|Zcy;|a(?:gger;|rr;|shv;)|c(?:aron;|y;)|el(?:;|ta;)|fr;|i(?:a(?:critical(?:Acute;|Do(?:t;|ubleAcute;)|Grave;|Tilde;)|mond;)|fferentialD;)|o(?:pf;|t(?:;|Dot;|Equal;)|uble(?:ContourIntegral;|Do(?:t;|wnArrow;)|L(?:eft(?:Arrow;|RightArrow;|Tee;)|ong(?:Left(?:Arrow;|RightArrow;)|RightArrow;))|Right(?:Arrow;|Tee;)|Up(?:Arrow;|DownArrow;)|VerticalBar;)|wn(?:Arrow(?:;|Bar;|UpArrow;)|Breve;|Left(?:RightVector;|TeeVector;|Vector(?:;|Bar;))|Right(?:TeeVector;|Vector(?:;|Bar;))|Tee(?:;|Arrow;)|arrow;))|s(?:cr;|trok;))|E(?:NG;|TH;?|acute;?|c(?:aron;|irc;?|y;)|dot;|fr;|grave;?|lement;|m(?:acr;|pty(?:SmallSquare;|VerySmallSquare;))|o(?:gon;|pf;)|psilon;|qu(?:al(?:;|Tilde;)|ilibrium;)|s(?:cr;|im;)|ta;|uml;?|x(?:ists;|ponentialE;))|F(?:cy;|fr;|illed(?:SmallSquare;|VerySmallSquare;)|o(?:pf;|rAll;|uriertrf;)|scr;)|G(?:Jcy;|T;?|amma(?:;|d;)|breve;|c(?:edil;|irc;|y;)|dot;|fr;|g;|opf;|reater(?:Equal(?:;|Less;)|FullEqual;|Greater;|Less;|SlantEqual;|Tilde;)|scr;|t;)|H(?:ARDcy;|a(?:cek;|t;)|circ;|fr;|ilbertSpace;|o(?:pf;|rizontalLine;)|s(?:cr;|trok;)|ump(?:DownHump;|Equal;))|I(?:Ecy;|Jlig;|Ocy;|acute;?|c(?:irc;?|y;)|dot;|fr;|grave;?|m(?:;|a(?:cr;|ginaryI;)|plies;)|n(?:t(?:;|e(?:gral;|rsection;))|visible(?:Comma;|Times;))|o(?:gon;|pf;|ta;)|scr;|tilde;|u(?:kcy;|ml;?))|J(?:c(?:irc;|y;)|fr;|opf;|s(?:cr;|ercy;)|ukcy;)|K(?:Hcy;|Jcy;|appa;|c(?:edil;|y;)|fr;|opf;|scr;)|L(?:Jcy;|T;?|a(?:cute;|mbda;|ng;|placetrf;|rr;)|c(?:aron;|edil;|y;)|e(?:ft(?:A(?:ngleBracket;|rrow(?:;|Bar;|RightArrow;))|Ceiling;|Do(?:ubleBracket;|wn(?:TeeVector;|Vector(?:;|Bar;)))|Floor;|Right(?:Arrow;|Vector;)|T(?:ee(?:;|Arrow;|Vector;)|riangle(?:;|Bar;|Equal;))|Up(?:DownVector;|TeeVector;|Vector(?:;|Bar;))|Vector(?:;|Bar;)|arrow;|rightarrow;)|ss(?:EqualGreater;|FullEqual;|Greater;|Less;|SlantEqual;|Tilde;))|fr;|l(?:;|eftarrow;)|midot;|o(?:ng(?:Left(?:Arrow;|RightArrow;)|RightArrow;|left(?:arrow;|rightarrow;)|rightarrow;)|pf;|wer(?:LeftArrow;|RightArrow;))|s(?:cr;|h;|trok;)|t;)|M(?:ap;|cy;|e(?:diumSpace;|llintrf;)|fr;|inusPlus;|opf;|scr;|u;)|N(?:Jcy;|acute;|c(?:aron;|edil;|y;)|e(?:gative(?:MediumSpace;|Thi(?:ckSpace;|nSpace;)|VeryThinSpace;)|sted(?:GreaterGreater;|LessLess;)|wLine;)|fr;|o(?:Break;|nBreakingSpace;|pf;|t(?:;|C(?:ongruent;|upCap;)|DoubleVerticalBar;|E(?:lement;|qual(?:;|Tilde;)|xists;)|Greater(?:;|Equal;|FullEqual;|Greater;|Less;|SlantEqual;|Tilde;)|Hump(?:DownHump;|Equal;)|Le(?:ftTriangle(?:;|Bar;|Equal;)|ss(?:;|Equal;|Greater;|Less;|SlantEqual;|Tilde;))|Nested(?:GreaterGreater;|LessLess;)|Precedes(?:;|Equal;|SlantEqual;)|R(?:everseElement;|ightTriangle(?:;|Bar;|Equal;))|S(?:quareSu(?:bset(?:;|Equal;)|perset(?:;|Equal;))|u(?:bset(?:;|Equal;)|cceeds(?:;|Equal;|SlantEqual;|Tilde;)|perset(?:;|Equal;)))|Tilde(?:;|Equal;|FullEqual;|Tilde;)|VerticalBar;))|scr;|tilde;?|u;)|O(?:Elig;|acute;?|c(?:irc;?|y;)|dblac;|fr;|grave;?|m(?:acr;|ega;|icron;)|opf;|penCurly(?:DoubleQuote;|Quote;)|r;|s(?:cr;|lash;?)|ti(?:lde;?|mes;)|uml;?|ver(?:B(?:ar;|rac(?:e;|ket;))|Parenthesis;))|P(?:artialD;|cy;|fr;|hi;|i;|lusMinus;|o(?:incareplane;|pf;)|r(?:;|ecedes(?:;|Equal;|SlantEqual;|Tilde;)|ime;|o(?:duct;|portion(?:;|al;)))|s(?:cr;|i;))|Q(?:UOT;?|fr;|opf;|scr;)|R(?:Barr;|EG;?|a(?:cute;|ng;|rr(?:;|tl;))|c(?:aron;|edil;|y;)|e(?:;|verse(?:E(?:lement;|quilibrium;)|UpEquilibrium;))|fr;|ho;|ight(?:A(?:ngleBracket;|rrow(?:;|Bar;|LeftArrow;))|Ceiling;|Do(?:ubleBracket;|wn(?:TeeVector;|Vector(?:;|Bar;)))|Floor;|T(?:ee(?:;|Arrow;|Vector;)|riangle(?:;|Bar;|Equal;))|Up(?:DownVector;|TeeVector;|Vector(?:;|Bar;))|Vector(?:;|Bar;)|arrow;)|o(?:pf;|undImplies;)|rightarrow;|s(?:cr;|h;)|uleDelayed;)|S(?:H(?:CHcy;|cy;)|OFTcy;|acute;|c(?:;|aron;|edil;|irc;|y;)|fr;|hort(?:DownArrow;|LeftArrow;|RightArrow;|UpArrow;)|igma;|mallCircle;|opf;|q(?:rt;|uare(?:;|Intersection;|Su(?:bset(?:;|Equal;)|perset(?:;|Equal;))|Union;))|scr;|tar;|u(?:b(?:;|set(?:;|Equal;))|c(?:ceeds(?:;|Equal;|SlantEqual;|Tilde;)|hThat;)|m;|p(?:;|erset(?:;|Equal;)|set;)))|T(?:HORN;?|RADE;|S(?:Hcy;|cy;)|a(?:b;|u;)|c(?:aron;|edil;|y;)|fr;|h(?:e(?:refore;|ta;)|i(?:ckSpace;|nSpace;))|ilde(?:;|Equal;|FullEqual;|Tilde;)|opf;|ripleDot;|s(?:cr;|trok;))|U(?:a(?:cute;?|rr(?:;|ocir;))|br(?:cy;|eve;)|c(?:irc;?|y;)|dblac;|fr;|grave;?|macr;|n(?:der(?:B(?:ar;|rac(?:e;|ket;))|Parenthesis;)|ion(?:;|Plus;))|o(?:gon;|pf;)|p(?:Arrow(?:;|Bar;|DownArrow;)|DownArrow;|Equilibrium;|Tee(?:;|Arrow;)|arrow;|downarrow;|per(?:LeftArrow;|RightArrow;)|si(?:;|lon;))|ring;|scr;|tilde;|uml;?)|V(?:Dash;|bar;|cy;|dash(?:;|l;)|e(?:e;|r(?:bar;|t(?:;|ical(?:Bar;|Line;|Separator;|Tilde;))|yThinSpace;))|fr;|opf;|scr;|vdash;)|W(?:circ;|edge;|fr;|opf;|scr;)|X(?:fr;|i;|opf;|scr;)|Y(?:Acy;|Icy;|Ucy;|acute;?|c(?:irc;|y;)|fr;|opf;|scr;|uml;)|Z(?:Hcy;|acute;|c(?:aron;|y;)|dot;|e(?:roWidthSpace;|ta;)|fr;|opf;|scr;)|a(?:acute;?|breve;|c(?:;|E;|d;|irc;?|ute;?|y;)|elig;?|f(?:;|r;)|grave;?|l(?:e(?:fsym;|ph;)|pha;)|m(?:a(?:cr;|lg;)|p;?)|n(?:d(?:;|and;|d;|slope;|v;)|g(?:;|e;|le;|msd(?:;|a(?:a;|b;|c;|d;|e;|f;|g;|h;))|rt(?:;|vb(?:;|d;))|s(?:ph;|t;)|zarr;))|o(?:gon;|pf;)|p(?:;|E;|acir;|e;|id;|os;|prox(?:;|eq;))|ring;?|s(?:cr;|t;|ymp(?:;|eq;))|tilde;?|uml;?|w(?:conint;|int;))|b(?:Not;|a(?:ck(?:cong;|epsilon;|prime;|sim(?:;|eq;))|r(?:vee;|wed(?:;|ge;)))|brk(?:;|tbrk;)|c(?:ong;|y;)|dquo;|e(?:caus(?:;|e;)|mptyv;|psi;|rnou;|t(?:a;|h;|ween;))|fr;|ig(?:c(?:ap;|irc;|up;)|o(?:dot;|plus;|times;)|s(?:qcup;|tar;)|triangle(?:down;|up;)|uplus;|vee;|wedge;)|karow;|l(?:a(?:ck(?:lozenge;|square;|triangle(?:;|down;|left;|right;))|nk;)|k(?:1(?:2;|4;)|34;)|ock;)|n(?:e(?:;|quiv;)|ot;)|o(?:pf;|t(?:;|tom;)|wtie;|x(?:D(?:L;|R;|l;|r;)|H(?:;|D;|U;|d;|u;)|U(?:L;|R;|l;|r;)|V(?:;|H;|L;|R;|h;|l;|r;)|box;|d(?:L;|R;|l;|r;)|h(?:;|D;|U;|d;|u;)|minus;|plus;|times;|u(?:L;|R;|l;|r;)|v(?:;|H;|L;|R;|h;|l;|r;)))|prime;|r(?:eve;|vbar;?)|s(?:cr;|emi;|im(?:;|e;)|ol(?:;|b;|hsub;))|u(?:ll(?:;|et;)|mp(?:;|E;|e(?:;|q;))))|c(?:a(?:cute;|p(?:;|and;|brcup;|c(?:ap;|up;)|dot;|s;)|r(?:et;|on;))|c(?:a(?:ps;|ron;)|edil;?|irc;|ups(?:;|sm;))|dot;|e(?:dil;?|mptyv;|nt(?:;|erdot;|))|fr;|h(?:cy;|eck(?:;|mark;)|i;)|ir(?:;|E;|c(?:;|eq;|le(?:arrow(?:left;|right;)|d(?:R;|S;|ast;|circ;|dash;)))|e;|fnint;|mid;|scir;)|lubs(?:;|uit;)|o(?:lon(?:;|e(?:;|q;))|m(?:ma(?:;|t;)|p(?:;|fn;|le(?:ment;|xes;)))|n(?:g(?:;|dot;)|int;)|p(?:f;|rod;|y(?:;|sr;|)))|r(?:arr;|oss;)|s(?:cr;|u(?:b(?:;|e;)|p(?:;|e;)))|tdot;|u(?:darr(?:l;|r;)|e(?:pr;|sc;)|larr(?:;|p;)|p(?:;|brcap;|c(?:ap;|up;)|dot;|or;|s;)|r(?:arr(?:;|m;)|ly(?:eq(?:prec;|succ;)|vee;|wedge;)|ren;?|vearrow(?:left;|right;))|vee;|wed;)|w(?:conint;|int;)|ylcty;)|d(?:Arr;|Har;|a(?:gger;|leth;|rr;|sh(?:;|v;))|b(?:karow;|lac;)|c(?:aron;|y;)|d(?:;|a(?:gger;|rr;)|otseq;)|e(?:g;?|lta;|mptyv;)|f(?:isht;|r;)|har(?:l;|r;)|i(?:am(?:;|ond(?:;|suit;)|s;)|e;|gamma;|sin;|v(?:;|ide(?:;|ontimes;|)|onx;))|jcy;|lc(?:orn;|rop;)|o(?:llar;|pf;|t(?:;|eq(?:;|dot;)|minus;|plus;|square;)|ublebarwedge;|wn(?:arrow;|downarrows;|harpoon(?:left;|right;)))|r(?:bkarow;|c(?:orn;|rop;))|s(?:c(?:r;|y;)|ol;|trok;)|t(?:dot;|ri(?:;|f;))|u(?:arr;|har;)|wangle;|z(?:cy;|igrarr;))|e(?:D(?:Dot;|ot;)|a(?:cute;?|ster;)|c(?:aron;|ir(?:;|c;?)|olon;|y;)|dot;|e;|f(?:Dot;|r;)|g(?:;|rave;?|s(?:;|dot;))|l(?:;|inters;|l;|s(?:;|dot;))|m(?:acr;|pty(?:;|set;|v;)|sp(?:1(?:3;|4;)|;))|n(?:g;|sp;)|o(?:gon;|pf;)|p(?:ar(?:;|sl;)|lus;|si(?:;|lon;|v;))|q(?:c(?:irc;|olon;)|s(?:im;|lant(?:gtr;|less;))|u(?:als;|est;|iv(?:;|DD;))|vparsl;)|r(?:Dot;|arr;)|s(?:cr;|dot;|im;)|t(?:a;|h;?)|u(?:ml;?|ro;)|x(?:cl;|ist;|p(?:ectation;|onentiale;)))|f(?:allingdotseq;|cy;|emale;|f(?:ilig;|l(?:ig;|lig;)|r;)|ilig;|jlig;|l(?:at;|lig;|tns;)|nof;|o(?:pf;|r(?:all;|k(?:;|v;)))|partint;|r(?:a(?:c(?:1(?:2;?|3;|4;?|5;|6;|8;)|2(?:3;|5;)|3(?:4;?|5;|8;)|45;|5(?:6;|8;)|78;)|sl;)|own;)|scr;)|g(?:E(?:;|l;)|a(?:cute;|mma(?:;|d;)|p;)|breve;|c(?:irc;|y;)|dot;|e(?:;|l;|q(?:;|q;|slant;)|s(?:;|cc;|dot(?:;|o(?:;|l;))|l(?:;|es;)))|fr;|g(?:;|g;)|imel;|jcy;|l(?:;|E;|a;|j;)|n(?:E;|ap(?:;|prox;)|e(?:;|q(?:;|q;))|sim;)|opf;|rave;|s(?:cr;|im(?:;|e;|l;))|t(?:;|c(?:c;|ir;)|dot;|lPar;|quest;|r(?:a(?:pprox;|rr;)|dot;|eq(?:less;|qless;)|less;|sim;)|)|v(?:ertneqq;|nE;))|h(?:Arr;|a(?:irsp;|lf;|milt;|r(?:dcy;|r(?:;|cir;|w;)))|bar;|circ;|e(?:arts(?:;|uit;)|llip;|rcon;)|fr;|ks(?:earow;|warow;)|o(?:arr;|mtht;|ok(?:leftarrow;|rightarrow;)|pf;|rbar;)|s(?:cr;|lash;|trok;)|y(?:bull;|phen;))|i(?:acute;?|c(?:;|irc;?|y;)|e(?:cy;|xcl;?)|f(?:f;|r;)|grave;?|i(?:;|i(?:int;|nt;)|nfin;|ota;)|jlig;|m(?:a(?:cr;|g(?:e;|line;|part;)|th;)|of;|ped;)|n(?:;|care;|fin(?:;|tie;)|odot;|t(?:;|cal;|e(?:gers;|rcal;)|larhk;|prod;))|o(?:cy;|gon;|pf;|ta;)|prod;|quest;?|s(?:cr;|in(?:;|E;|dot;|s(?:;|v;)|v;))|t(?:;|ilde;)|u(?:kcy;|ml;?))|j(?:c(?:irc;|y;)|fr;|math;|opf;|s(?:cr;|ercy;)|ukcy;)|k(?:appa(?:;|v;)|c(?:edil;|y;)|fr;|green;|hcy;|jcy;|opf;|scr;)|l(?:A(?:arr;|rr;|tail;)|Barr;|E(?:;|g;)|Har;|a(?:cute;|emptyv;|gran;|mbda;|ng(?:;|d;|le;)|p;|quo;?|rr(?:;|b(?:;|fs;)|fs;|hk;|lp;|pl;|sim;|tl;)|t(?:;|ail;|e(?:;|s;)))|b(?:arr;|brk;|r(?:ac(?:e;|k;)|k(?:e;|sl(?:d;|u;))))|c(?:aron;|e(?:dil;|il;)|ub;|y;)|d(?:ca;|quo(?:;|r;)|r(?:dhar;|ushar;)|sh;)|e(?:;|ft(?:arrow(?:;|tail;)|harpoon(?:down;|up;)|leftarrows;|right(?:arrow(?:;|s;)|harpoons;|squigarrow;)|threetimes;)|g;|q(?:;|q;|slant;)|s(?:;|cc;|dot(?:;|o(?:;|r;))|g(?:;|es;)|s(?:approx;|dot;|eq(?:gtr;|qgtr;)|gtr;|sim;)))|f(?:isht;|loor;|r;)|g(?:;|E;)|h(?:ar(?:d;|u(?:;|l;))|blk;)|jcy;|l(?:;|arr;|corner;|hard;|tri;)|m(?:idot;|oust(?:;|ache;))|n(?:E;|ap(?:;|prox;)|e(?:;|q(?:;|q;))|sim;)|o(?:a(?:ng;|rr;)|brk;|ng(?:left(?:arrow;|rightarrow;)|mapsto;|rightarrow;)|oparrow(?:left;|right;)|p(?:ar;|f;|lus;)|times;|w(?:ast;|bar;)|z(?:;|enge;|f;))|par(?:;|lt;)|r(?:arr;|corner;|har(?:;|d;)|m;|tri;)|s(?:aquo;|cr;|h;|im(?:;|e;|g;)|q(?:b;|uo(?:;|r;))|trok;)|t(?:;|c(?:c;|ir;)|dot;|hree;|imes;|larr;|quest;|r(?:Par;|i(?:;|e;|f;))|)|ur(?:dshar;|uhar;)|v(?:ertneqq;|nE;))|m(?:DDot;|a(?:cr;?|l(?:e;|t(?:;|ese;))|p(?:;|sto(?:;|down;|left;|up;))|rker;)|c(?:omma;|y;)|dash;|easuredangle;|fr;|ho;|i(?:cro;?|d(?:;|ast;|cir;|dot;?)|nus(?:;|b;|d(?:;|u;)))|l(?:cp;|dr;)|nplus;|o(?:dels;|pf;)|p;|s(?:cr;|tpos;)|u(?:;|ltimap;|map;))|n(?:G(?:g;|t(?:;|v;))|L(?:eft(?:arrow;|rightarrow;)|l;|t(?:;|v;))|Rightarrow;|V(?:Dash;|dash;)|a(?:bla;|cute;|ng;|p(?:;|E;|id;|os;|prox;)|tur(?:;|al(?:;|s;)))|b(?:sp;?|ump(?:;|e;))|c(?:a(?:p;|ron;)|edil;|ong(?:;|dot;)|up;|y;)|dash;|e(?:;|Arr;|ar(?:hk;|r(?:;|ow;))|dot;|quiv;|s(?:ear;|im;)|xist(?:;|s;))|fr;|g(?:E;|e(?:;|q(?:;|q;|slant;)|s;)|sim;|t(?:;|r;))|h(?:Arr;|arr;|par;)|i(?:;|s(?:;|d;)|v;)|jcy;|l(?:Arr;|E;|arr;|dr;|e(?:;|ft(?:arrow;|rightarrow;)|q(?:;|q;|slant;)|s(?:;|s;))|sim;|t(?:;|ri(?:;|e;)))|mid;|o(?:pf;|t(?:;|in(?:;|E;|dot;|v(?:a;|b;|c;))|ni(?:;|v(?:a;|b;|c;))|))|p(?:ar(?:;|allel;|sl;|t;)|olint;|r(?:;|cue;|e(?:;|c(?:;|eq;))))|r(?:Arr;|arr(?:;|c;|w;)|ightarrow;|tri(?:;|e;))|s(?:c(?:;|cue;|e;|r;)|hort(?:mid;|parallel;)|im(?:;|e(?:;|q;))|mid;|par;|qsu(?:be;|pe;)|u(?:b(?:;|E;|e;|set(?:;|eq(?:;|q;)))|cc(?:;|eq;)|p(?:;|E;|e;|set(?:;|eq(?:;|q;)))))|t(?:gl;|ilde;?|lg;|riangle(?:left(?:;|eq;)|right(?:;|eq;)))|u(?:;|m(?:;|ero;|sp;))|v(?:Dash;|Harr;|ap;|dash;|g(?:e;|t;)|infin;|l(?:Arr;|e;|t(?:;|rie;))|r(?:Arr;|trie;)|sim;)|w(?:Arr;|ar(?:hk;|r(?:;|ow;))|near;))|o(?:S;|a(?:cute;?|st;)|c(?:ir(?:;|c;?)|y;)|d(?:ash;|blac;|iv;|ot;|sold;)|elig;|f(?:cir;|r;)|g(?:on;|rave;?|t;)|h(?:bar;|m;)|int;|l(?:arr;|c(?:ir;|ross;)|ine;|t;)|m(?:acr;|ega;|i(?:cron;|d;|nus;))|opf;|p(?:ar;|erp;|lus;)|r(?:;|arr;|d(?:;|er(?:;|of;)|f;?|m;?)|igof;|or;|slope;|v;)|s(?:cr;|lash;?|ol;)|ti(?:lde;?|mes(?:;|as;))|uml;?|vbar;)|p(?:ar(?:;|a(?:;|llel;|)|s(?:im;|l;)|t;)|cy;|er(?:cnt;|iod;|mil;|p;|tenk;)|fr;|h(?:i(?:;|v;)|mmat;|one;)|i(?:;|tchfork;|v;)|l(?:an(?:ck(?:;|h;)|kv;)|us(?:;|acir;|b;|cir;|d(?:o;|u;)|e;|mn;?|sim;|two;))|m;|o(?:intint;|pf;|und;?)|r(?:;|E;|ap;|cue;|e(?:;|c(?:;|approx;|curlyeq;|eq;|n(?:approx;|eqq;|sim;)|sim;))|ime(?:;|s;)|n(?:E;|ap;|sim;)|o(?:d;|f(?:alar;|line;|surf;)|p(?:;|to;))|sim;|urel;)|s(?:cr;|i;)|uncsp;)|q(?:fr;|int;|opf;|prime;|scr;|u(?:at(?:ernions;|int;)|est(?:;|eq;)|ot;?))|r(?:A(?:arr;|rr;|tail;)|Barr;|Har;|a(?:c(?:e;|ute;)|dic;|emptyv;|ng(?:;|d;|e;|le;)|quo;?|rr(?:;|ap;|b(?:;|fs;)|c;|fs;|hk;|lp;|pl;|sim;|tl;|w;)|t(?:ail;|io(?:;|nals;)))|b(?:arr;|brk;|r(?:ac(?:e;|k;)|k(?:e;|sl(?:d;|u;))))|c(?:aron;|e(?:dil;|il;)|ub;|y;)|d(?:ca;|ldhar;|quo(?:;|r;)|sh;)|e(?:al(?:;|ine;|part;|s;)|ct;|g;?)|f(?:isht;|loor;|r;)|h(?:ar(?:d;|u(?:;|l;))|o(?:;|v;))|i(?:ght(?:arrow(?:;|tail;)|harpoon(?:down;|up;)|left(?:arrows;|harpoons;)|rightarrows;|squigarrow;|threetimes;)|ng;|singdotseq;)|l(?:arr;|har;|m;)|moust(?:;|ache;)|nmid;|o(?:a(?:ng;|rr;)|brk;|p(?:ar;|f;|lus;)|times;)|p(?:ar(?:;|gt;)|polint;)|rarr;|s(?:aquo;|cr;|h;|q(?:b;|uo(?:;|r;)))|t(?:hree;|imes;|ri(?:;|e;|f;|ltri;))|uluhar;|x;)|s(?:acute;|bquo;|c(?:;|E;|a(?:p;|ron;)|cue;|e(?:;|dil;)|irc;|n(?:E;|ap;|sim;)|polint;|sim;|y;)|dot(?:;|b;|e;)|e(?:Arr;|ar(?:hk;|r(?:;|ow;))|ct;?|mi;|swar;|tm(?:inus;|n;)|xt;)|fr(?:;|own;)|h(?:arp;|c(?:hcy;|y;)|ort(?:mid;|parallel;)|y;?)|i(?:gma(?:;|f;|v;)|m(?:;|dot;|e(?:;|q;)|g(?:;|E;)|l(?:;|E;)|ne;|plus;|rarr;))|larr;|m(?:a(?:llsetminus;|shp;)|eparsl;|i(?:d;|le;)|t(?:;|e(?:;|s;)))|o(?:ftcy;|l(?:;|b(?:;|ar;))|pf;)|pa(?:des(?:;|uit;)|r;)|q(?:c(?:ap(?:;|s;)|up(?:;|s;))|su(?:b(?:;|e;|set(?:;|eq;))|p(?:;|e;|set(?:;|eq;)))|u(?:;|ar(?:e;|f;)|f;))|rarr;|s(?:cr;|etmn;|mile;|tarf;)|t(?:ar(?:;|f;)|r(?:aight(?:epsilon;|phi;)|ns;))|u(?:b(?:;|E;|dot;|e(?:;|dot;)|mult;|n(?:E;|e;)|plus;|rarr;|s(?:et(?:;|eq(?:;|q;)|neq(?:;|q;))|im;|u(?:b;|p;)))|cc(?:;|approx;|curlyeq;|eq;|n(?:approx;|eqq;|sim;)|sim;)|m;|ng;|p(?:1;?|2;?|3;?|;|E;|d(?:ot;|sub;)|e(?:;|dot;)|hs(?:ol;|ub;)|larr;|mult;|n(?:E;|e;)|plus;|s(?:et(?:;|eq(?:;|q;)|neq(?:;|q;))|im;|u(?:b;|p;))))|w(?:Arr;|ar(?:hk;|r(?:;|ow;))|nwar;)|zlig;?)|t(?:a(?:rget;|u;)|brk;|c(?:aron;|edil;|y;)|dot;|elrec;|fr;|h(?:e(?:re(?:4;|fore;)|ta(?:;|sym;|v;))|i(?:ck(?:approx;|sim;)|nsp;)|k(?:ap;|sim;)|orn;?)|i(?:lde;|mes(?:;|b(?:;|ar;)|d;|)|nt;)|o(?:ea;|p(?:;|bot;|cir;|f(?:;|ork;))|sa;)|prime;|r(?:ade;|i(?:angle(?:;|down;|left(?:;|eq;)|q;|right(?:;|eq;))|dot;|e;|minus;|plus;|sb;|time;)|pezium;)|s(?:c(?:r;|y;)|hcy;|trok;)|w(?:ixt;|ohead(?:leftarrow;|rightarrow;)))|u(?:Arr;|Har;|a(?:cute;?|rr;)|br(?:cy;|eve;)|c(?:irc;?|y;)|d(?:arr;|blac;|har;)|f(?:isht;|r;)|grave;?|h(?:ar(?:l;|r;)|blk;)|l(?:c(?:orn(?:;|er;)|rop;)|tri;)|m(?:acr;|l;?)|o(?:gon;|pf;)|p(?:arrow;|downarrow;|harpoon(?:left;|right;)|lus;|si(?:;|h;|lon;)|uparrows;)|r(?:c(?:orn(?:;|er;)|rop;)|ing;|tri;)|scr;|t(?:dot;|ilde;|ri(?:;|f;))|u(?:arr;|ml;?)|wangle;)|v(?:Arr;|Bar(?:;|v;)|Dash;|a(?:ngrt;|r(?:epsilon;|kappa;|nothing;|p(?:hi;|i;|ropto;)|r(?:;|ho;)|s(?:igma;|u(?:bsetneq(?:;|q;)|psetneq(?:;|q;)))|t(?:heta;|riangle(?:left;|right;))))|cy;|dash;|e(?:e(?:;|bar;|eq;)|llip;|r(?:bar;|t;))|fr;|ltri;|nsu(?:b;|p;)|opf;|prop;|rtri;|s(?:cr;|u(?:bn(?:E;|e;)|pn(?:E;|e;)))|zigzag;)|w(?:circ;|e(?:d(?:bar;|ge(?:;|q;))|ierp;)|fr;|opf;|p;|r(?:;|eath;)|scr;)|x(?:c(?:ap;|irc;|up;)|dtri;|fr;|h(?:Arr;|arr;)|i;|l(?:Arr;|arr;)|map;|nis;|o(?:dot;|p(?:f;|lus;)|time;)|r(?:Arr;|arr;)|s(?:cr;|qcup;)|u(?:plus;|tri;)|vee;|wedge;)|y(?:ac(?:ute;?|y;)|c(?:irc;|y;)|en;?|fr;|icy;|opf;|scr;|u(?:cy;|ml;?))|z(?:acute;|c(?:aron;|y;)|dot;|e(?:etrf;|ta;)|fr;|hcy;|igrarr;|opf;|scr;|w(?:j;|nj;)))|[\s\S]/g;
    var NAMEDCHARREF_MAXLEN = 32;
    var DBLQUOTEATTRVAL = /[^\r"&\u0000]+/g;
    var SINGLEQUOTEATTRVAL = /[^\r'&\u0000]+/g;
    var UNQUOTEDATTRVAL = /[^\r\t\n\f &>\u0000]+/g;
    var TAGNAME = /[^\r\t\n\f \/>A-Z\u0000]+/g;
    var ATTRNAME = /[^\r\t\n\f \/=>A-Z\u0000]+/g;
    var CDATATEXT = /[^\]\r\u0000\uffff]*/g;
    var DATATEXT = /[^&<\r\u0000\uffff]*/g;
    var RAWTEXT = /[^<\r\u0000\uffff]*/g;
    var PLAINTEXT = /[^\r\u0000\uffff]*/g;
    var SIMPLETAG = /(?:(\/)?([a-z]+)>)|[\s\S]/g;
    var SIMPLEATTR = /(?:([-a-z]+)[ \t\n\f]*=[ \t\n\f]*('[^'&\r\u0000]*'|"[^"&\r\u0000]*"|[^\t\n\r\f "&'\u0000>][^&> \t\n\r\f\u0000]*[ \t\n\f]))|[\s\S]/g;
    var NONWS = /[^\x09\x0A\x0C\x0D\x20]/;
    var ALLNONWS = /[^\x09\x0A\x0C\x0D\x20]/g;
    var NONWSNONNUL = /[^\x00\x09\x0A\x0C\x0D\x20]/;
    var LEADINGWS = /^[\x09\x0A\x0C\x0D\x20]+/;
    var NULCHARS = /\x00/g;
    function buf2str(buf) {
      var CHUNKSIZE = 16384;
      if (buf.length < CHUNKSIZE) {
        return String.fromCharCode.apply(String, buf);
      }
      var result = "";
      for (var i = 0; i < buf.length; i += CHUNKSIZE) {
        result += String.fromCharCode.apply(String, buf.slice(i, i + CHUNKSIZE));
      }
      return result;
    }
    function str2buf(s) {
      var result = [];
      for (var i = 0; i < s.length; i++) {
        result[i] = s.charCodeAt(i);
      }
      return result;
    }
    function isA(elt, set) {
      if (typeof set === "string") {
        return elt.namespaceURI === NAMESPACE.HTML && elt.localName === set;
      }
      var tagnames = set[elt.namespaceURI];
      return tagnames && tagnames[elt.localName];
    }
    function isMathmlTextIntegrationPoint(n) {
      return isA(n, mathmlTextIntegrationPointSet);
    }
    function isHTMLIntegrationPoint(n) {
      if (isA(n, htmlIntegrationPointSet)) return true;
      if (n.namespaceURI === NAMESPACE.MATHML && n.localName === "annotation-xml") {
        var encoding = n.getAttribute("encoding");
        if (encoding) encoding = encoding.toLowerCase();
        if (encoding === "text/html" || encoding === "application/xhtml+xml") return true;
      }
      return false;
    }
    function adjustSVGTagName(name) {
      if (name in svgTagNameAdjustments) return svgTagNameAdjustments[name];else return name;
    }
    function adjustSVGAttributes(attrs) {
      for (var i = 0, n = attrs.length; i < n; i++) {
        if (attrs[i][0] in svgAttrAdjustments) {
          attrs[i][0] = svgAttrAdjustments[attrs[i][0]];
        }
      }
    }
    function adjustMathMLAttributes(attrs) {
      for (var i = 0, n = attrs.length; i < n; i++) {
        if (attrs[i][0] === "definitionurl") {
          attrs[i][0] = "definitionURL";
          break;
        }
      }
    }
    function adjustForeignAttributes(attrs) {
      for (var i = 0, n = attrs.length; i < n; i++) {
        if (attrs[i][0] in foreignAttributes) {
          attrs[i].push(foreignAttributes[attrs[i][0]]);
        }
      }
    }
    function transferAttributes(attrs, elt) {
      for (var i = 0, n = attrs.length; i < n; i++) {
        var name = attrs[i][0],
          value = attrs[i][1];
        if (elt.hasAttribute(name)) continue;
        elt._setAttribute(name, value);
      }
    }
    HTMLParser.ElementStack = function ElementStack() {
      this.elements = [];
      this.top = null;
    };
    HTMLParser.ElementStack.prototype.push = function (e) {
      this.elements.push(e);
      this.top = e;
    };
    HTMLParser.ElementStack.prototype.pop = function (e) {
      this.elements.pop();
      this.top = this.elements[this.elements.length - 1];
    };
    HTMLParser.ElementStack.prototype.popTag = function (tag) {
      for (var i = this.elements.length - 1; i > 0; i--) {
        var e = this.elements[i];
        if (isA(e, tag)) break;
      }
      this.elements.length = i;
      this.top = this.elements[i - 1];
    };
    HTMLParser.ElementStack.prototype.popElementType = function (type) {
      for (var i = this.elements.length - 1; i > 0; i--) {
        if (this.elements[i] instanceof type) break;
      }
      this.elements.length = i;
      this.top = this.elements[i - 1];
    };
    HTMLParser.ElementStack.prototype.popElement = function (e) {
      for (var i = this.elements.length - 1; i > 0; i--) {
        if (this.elements[i] === e) break;
      }
      this.elements.length = i;
      this.top = this.elements[i - 1];
    };
    HTMLParser.ElementStack.prototype.removeElement = function (e) {
      if (this.top === e) this.pop();else {
        var idx = this.elements.lastIndexOf(e);
        if (idx !== -1) this.elements.splice(idx, 1);
      }
    };
    HTMLParser.ElementStack.prototype.clearToContext = function (set) {
      for (var i = this.elements.length - 1; i > 0; i--) {
        if (isA(this.elements[i], set)) break;
      }
      this.elements.length = i + 1;
      this.top = this.elements[i];
    };
    HTMLParser.ElementStack.prototype.contains = function (tag) {
      return this.inSpecificScope(tag, /* @__PURE__ */Object.create(null));
    };
    HTMLParser.ElementStack.prototype.inSpecificScope = function (tag, set) {
      for (var i = this.elements.length - 1; i >= 0; i--) {
        var elt = this.elements[i];
        if (isA(elt, tag)) return true;
        if (isA(elt, set)) return false;
      }
      return false;
    };
    HTMLParser.ElementStack.prototype.elementInSpecificScope = function (target, set) {
      for (var i = this.elements.length - 1; i >= 0; i--) {
        var elt = this.elements[i];
        if (elt === target) return true;
        if (isA(elt, set)) return false;
      }
      return false;
    };
    HTMLParser.ElementStack.prototype.elementTypeInSpecificScope = function (target, set) {
      for (var i = this.elements.length - 1; i >= 0; i--) {
        var elt = this.elements[i];
        if (elt instanceof target) return true;
        if (isA(elt, set)) return false;
      }
      return false;
    };
    HTMLParser.ElementStack.prototype.inScope = function (tag) {
      return this.inSpecificScope(tag, inScopeSet);
    };
    HTMLParser.ElementStack.prototype.elementInScope = function (e) {
      return this.elementInSpecificScope(e, inScopeSet);
    };
    HTMLParser.ElementStack.prototype.elementTypeInScope = function (type) {
      return this.elementTypeInSpecificScope(type, inScopeSet);
    };
    HTMLParser.ElementStack.prototype.inButtonScope = function (tag) {
      return this.inSpecificScope(tag, inButtonScopeSet);
    };
    HTMLParser.ElementStack.prototype.inListItemScope = function (tag) {
      return this.inSpecificScope(tag, inListItemScopeSet);
    };
    HTMLParser.ElementStack.prototype.inTableScope = function (tag) {
      return this.inSpecificScope(tag, inTableScopeSet);
    };
    HTMLParser.ElementStack.prototype.inSelectScope = function (tag) {
      for (var i = this.elements.length - 1; i >= 0; i--) {
        var elt = this.elements[i];
        if (elt.namespaceURI !== NAMESPACE.HTML) return false;
        var localname = elt.localName;
        if (localname === tag) return true;
        if (localname !== "optgroup" && localname !== "option") return false;
      }
      return false;
    };
    HTMLParser.ElementStack.prototype.generateImpliedEndTags = function (butnot, thorough) {
      var endTagSet = thorough ? thoroughImpliedEndTagsSet : impliedEndTagsSet;
      for (var i = this.elements.length - 1; i >= 0; i--) {
        var e = this.elements[i];
        if (butnot && isA(e, butnot)) break;
        if (!isA(this.elements[i], endTagSet)) break;
      }
      this.elements.length = i + 1;
      this.top = this.elements[i];
    };
    HTMLParser.ActiveFormattingElements = function AFE() {
      this.list = [];
      this.attrs = [];
    };
    HTMLParser.ActiveFormattingElements.prototype.MARKER = {
      localName: "|"
    };
    HTMLParser.ActiveFormattingElements.prototype.insertMarker = function () {
      this.list.push(this.MARKER);
      this.attrs.push(this.MARKER);
    };
    HTMLParser.ActiveFormattingElements.prototype.push = function (elt, attrs) {
      var count = 0;
      for (var i = this.list.length - 1; i >= 0; i--) {
        if (this.list[i] === this.MARKER) break;
        if (equal(elt, this.list[i], this.attrs[i])) {
          count++;
          if (count === 3) {
            this.list.splice(i, 1);
            this.attrs.splice(i, 1);
            break;
          }
        }
      }
      this.list.push(elt);
      var attrcopy = [];
      for (var ii = 0; ii < attrs.length; ii++) {
        attrcopy[ii] = attrs[ii];
      }
      this.attrs.push(attrcopy);
      function equal(newelt, oldelt, oldattrs) {
        if (newelt.localName !== oldelt.localName) return false;
        if (newelt._numattrs !== oldattrs.length) return false;
        for (var i2 = 0, n = oldattrs.length; i2 < n; i2++) {
          var oldname = oldattrs[i2][0];
          var oldval = oldattrs[i2][1];
          if (!newelt.hasAttribute(oldname)) return false;
          if (newelt.getAttribute(oldname) !== oldval) return false;
        }
        return true;
      }
    };
    HTMLParser.ActiveFormattingElements.prototype.clearToMarker = function () {
      for (var i = this.list.length - 1; i >= 0; i--) {
        if (this.list[i] === this.MARKER) break;
      }
      if (i < 0) i = 0;
      this.list.length = i;
      this.attrs.length = i;
    };
    HTMLParser.ActiveFormattingElements.prototype.findElementByTag = function (tag) {
      for (var i = this.list.length - 1; i >= 0; i--) {
        var elt = this.list[i];
        if (elt === this.MARKER) break;
        if (elt.localName === tag) return elt;
      }
      return null;
    };
    HTMLParser.ActiveFormattingElements.prototype.indexOf = function (e) {
      return this.list.lastIndexOf(e);
    };
    HTMLParser.ActiveFormattingElements.prototype.remove = function (e) {
      var idx = this.list.lastIndexOf(e);
      if (idx !== -1) {
        this.list.splice(idx, 1);
        this.attrs.splice(idx, 1);
      }
    };
    HTMLParser.ActiveFormattingElements.prototype.replace = function (a, b, attrs) {
      var idx = this.list.lastIndexOf(a);
      if (idx !== -1) {
        this.list[idx] = b;
        this.attrs[idx] = attrs;
      }
    };
    HTMLParser.ActiveFormattingElements.prototype.insertAfter = function (a, b) {
      var idx = this.list.lastIndexOf(a);
      if (idx !== -1) {
        this.list.splice(idx, 0, b);
        this.attrs.splice(idx, 0, b);
      }
    };
    function HTMLParser(address, fragmentContext, options) {
      var chars = null;
      var numchars = 0;
      var nextchar = 0;
      var input_complete = false;
      var scanner_skip_newline = false;
      var reentrant_invocations = 0;
      var saved_scanner_state = [];
      var leftovers = "";
      var first_batch = true;
      var paused = 0;
      var tokenizer = data_state;
      var return_state;
      var character_reference_code;
      var tagnamebuf = "";
      var lasttagname = "";
      var tempbuf = [];
      var attrnamebuf = "";
      var attrvaluebuf = "";
      var commentbuf = [];
      var doctypenamebuf = [];
      var doctypepublicbuf = [];
      var doctypesystembuf = [];
      var attributes = [];
      var is_end_tag = false;
      var parser = initial_mode;
      var originalInsertionMode = null;
      var templateInsertionModes = [];
      var stack = new HTMLParser.ElementStack();
      var afe = new HTMLParser.ActiveFormattingElements();
      var fragment = fragmentContext !== void 0;
      var head_element_pointer = null;
      var form_element_pointer = null;
      var scripting_enabled = true;
      if (fragmentContext) {
        scripting_enabled = fragmentContext.ownerDocument._scripting_enabled;
      }
      if (options && options.scripting_enabled === false) scripting_enabled = false;
      var frameset_ok = true;
      var force_quirks = false;
      var pending_table_text;
      var text_integration_mode;
      var textrun = [];
      var textIncludesNUL = false;
      var ignore_linefeed = false;
      var htmlparser = {
        document: function () {
          return doc;
        },
        _asDocumentFragment: function () {
          var frag = doc.createDocumentFragment();
          var root2 = doc.firstChild;
          while (root2.hasChildNodes()) {
            frag.appendChild(root2.firstChild);
          }
          return frag;
        },
        pause: function () {
          paused++;
        },
        resume: function () {
          paused--;
          this.parse("");
        },
        parse: function (s, end, shouldPauseFunc) {
          var moreToDo;
          if (paused > 0) {
            leftovers += s;
            return true;
          }
          if (reentrant_invocations === 0) {
            if (leftovers) {
              s = leftovers + s;
              leftovers = "";
            }
            if (end) {
              s += "\uFFFF";
              input_complete = true;
            }
            chars = s;
            numchars = s.length;
            nextchar = 0;
            if (first_batch) {
              first_batch = false;
              if (chars.charCodeAt(0) === 65279) nextchar = 1;
            }
            reentrant_invocations++;
            moreToDo = scanChars(shouldPauseFunc);
            leftovers = chars.substring(nextchar, numchars);
            reentrant_invocations--;
          } else {
            reentrant_invocations++;
            saved_scanner_state.push(chars, numchars, nextchar);
            chars = s;
            numchars = s.length;
            nextchar = 0;
            scanChars();
            moreToDo = false;
            leftovers = chars.substring(nextchar, numchars);
            nextchar = saved_scanner_state.pop();
            numchars = saved_scanner_state.pop();
            chars = saved_scanner_state.pop();
            if (leftovers) {
              chars = leftovers + chars.substring(nextchar);
              numchars = chars.length;
              nextchar = 0;
              leftovers = "";
            }
            reentrant_invocations--;
          }
          return moreToDo;
        }
      };
      var doc = new Document(true, address);
      doc._parser = htmlparser;
      doc._scripting_enabled = scripting_enabled;
      if (fragmentContext) {
        if (fragmentContext.ownerDocument._quirks) doc._quirks = true;
        if (fragmentContext.ownerDocument._limitedQuirks) doc._limitedQuirks = true;
        if (fragmentContext.namespaceURI === NAMESPACE.HTML) {
          switch (fragmentContext.localName) {
            case "title":
            case "textarea":
              tokenizer = rcdata_state;
              break;
            case "style":
            case "xmp":
            case "iframe":
            case "noembed":
            case "noframes":
            case "script":
            case "plaintext":
              tokenizer = plaintext_state;
              break;
            case "noscript":
              if (scripting_enabled) tokenizer = plaintext_state;
          }
        }
        var root = doc.createElement("html");
        doc._appendChild(root);
        stack.push(root);
        if (fragmentContext instanceof impl.HTMLTemplateElement) {
          templateInsertionModes.push(in_template_mode);
        }
        resetInsertionMode();
        for (var e = fragmentContext; e !== null; e = e.parentElement) {
          if (e instanceof impl.HTMLFormElement) {
            form_element_pointer = e;
            break;
          }
        }
      }
      function scanChars(shouldPauseFunc) {
        var codepoint, s, pattern, eof;
        while (nextchar < numchars) {
          if (paused > 0 || shouldPauseFunc && shouldPauseFunc()) {
            return true;
          }
          switch (typeof tokenizer.lookahead) {
            case "undefined":
              codepoint = chars.charCodeAt(nextchar++);
              if (scanner_skip_newline) {
                scanner_skip_newline = false;
                if (codepoint === 10) {
                  nextchar++;
                  continue;
                }
              }
              switch (codepoint) {
                case 13:
                  if (nextchar < numchars) {
                    if (chars.charCodeAt(nextchar) === 10) nextchar++;
                  } else {
                    scanner_skip_newline = true;
                  }
                  tokenizer(10);
                  break;
                case 65535:
                  if (input_complete && nextchar === numchars) {
                    tokenizer(EOF);
                    break;
                  }
                default:
                  tokenizer(codepoint);
                  break;
              }
              break;
            case "number":
              codepoint = chars.charCodeAt(nextchar);
              var n = tokenizer.lookahead;
              var needsString = true;
              if (n < 0) {
                needsString = false;
                n = -n;
              }
              if (n < numchars - nextchar) {
                s = needsString ? chars.substring(nextchar, nextchar + n) : null;
                eof = false;
              } else {
                if (input_complete) {
                  s = needsString ? chars.substring(nextchar, numchars) : null;
                  eof = true;
                  if (codepoint === 65535 && nextchar === numchars - 1) codepoint = EOF;
                } else {
                  return true;
                }
              }
              tokenizer(codepoint, s, eof);
              break;
            case "string":
              codepoint = chars.charCodeAt(nextchar);
              pattern = tokenizer.lookahead;
              var pos = chars.indexOf(pattern, nextchar);
              if (pos !== -1) {
                s = chars.substring(nextchar, pos + pattern.length);
                eof = false;
              } else {
                if (!input_complete) return true;
                s = chars.substring(nextchar, numchars);
                if (codepoint === 65535 && nextchar === numchars - 1) codepoint = EOF;
                eof = true;
              }
              tokenizer(codepoint, s, eof);
              break;
          }
        }
        return false;
      }
      function addAttribute(name, value) {
        for (var i = 0; i < attributes.length; i++) {
          if (attributes[i][0] === name) return;
        }
        if (value !== void 0) {
          attributes.push([name, value]);
        } else {
          attributes.push([name]);
        }
      }
      function handleSimpleAttribute() {
        SIMPLEATTR.lastIndex = nextchar - 1;
        var matched = SIMPLEATTR.exec(chars);
        if (!matched) throw new Error("should never happen");
        var name = matched[1];
        if (!name) return false;
        var value = matched[2];
        var len = value.length;
        switch (value[0]) {
          case '"':
          case "'":
            value = value.substring(1, len - 1);
            nextchar += matched[0].length - 1;
            tokenizer = after_attribute_value_quoted_state;
            break;
          default:
            tokenizer = before_attribute_name_state;
            nextchar += matched[0].length - 1;
            value = value.substring(0, len - 1);
            break;
        }
        for (var i = 0; i < attributes.length; i++) {
          if (attributes[i][0] === name) return true;
        }
        attributes.push([name, value]);
        return true;
      }
      function beginTagName() {
        is_end_tag = false;
        tagnamebuf = "";
        attributes.length = 0;
      }
      function beginEndTagName() {
        is_end_tag = true;
        tagnamebuf = "";
        attributes.length = 0;
      }
      function beginTempBuf() {
        tempbuf.length = 0;
      }
      function beginAttrName() {
        attrnamebuf = "";
      }
      function beginAttrValue() {
        attrvaluebuf = "";
      }
      function beginComment() {
        commentbuf.length = 0;
      }
      function beginDoctype() {
        doctypenamebuf.length = 0;
        doctypepublicbuf = null;
        doctypesystembuf = null;
      }
      function beginDoctypePublicId() {
        doctypepublicbuf = [];
      }
      function beginDoctypeSystemId() {
        doctypesystembuf = [];
      }
      function forcequirks() {
        force_quirks = true;
      }
      function cdataAllowed() {
        return stack.top && stack.top.namespaceURI !== "http://www.w3.org/1999/xhtml";
      }
      function appropriateEndTag(buf) {
        return lasttagname === buf;
      }
      function flushText() {
        if (textrun.length > 0) {
          var s = buf2str(textrun);
          textrun.length = 0;
          if (ignore_linefeed) {
            ignore_linefeed = false;
            if (s[0] === "\n") s = s.substring(1);
            if (s.length === 0) return;
          }
          insertToken(TEXT, s);
          textIncludesNUL = false;
        }
        ignore_linefeed = false;
      }
      function getMatchingChars(pattern) {
        pattern.lastIndex = nextchar - 1;
        var match = pattern.exec(chars);
        if (match && match.index === nextchar - 1) {
          match = match[0];
          nextchar += match.length - 1;
          if (input_complete && nextchar === numchars) {
            match = match.slice(0, -1);
            nextchar--;
          }
          return match;
        } else {
          throw new Error("should never happen");
        }
      }
      function emitCharsWhile(pattern) {
        pattern.lastIndex = nextchar - 1;
        var match = pattern.exec(chars)[0];
        if (!match) return false;
        emitCharString(match);
        nextchar += match.length - 1;
        return true;
      }
      function emitCharString(s) {
        if (textrun.length > 0) flushText();
        if (ignore_linefeed) {
          ignore_linefeed = false;
          if (s[0] === "\n") s = s.substring(1);
          if (s.length === 0) return;
        }
        insertToken(TEXT, s);
      }
      function emitTag() {
        if (is_end_tag) insertToken(ENDTAG, tagnamebuf);else {
          var tagname = tagnamebuf;
          tagnamebuf = "";
          lasttagname = tagname;
          insertToken(TAG, tagname, attributes);
        }
      }
      function emitSimpleTag() {
        if (nextchar === numchars) {
          return false;
        }
        SIMPLETAG.lastIndex = nextchar;
        var matched = SIMPLETAG.exec(chars);
        if (!matched) throw new Error("should never happen");
        var tagname = matched[2];
        if (!tagname) return false;
        var endtag = matched[1];
        if (endtag) {
          nextchar += tagname.length + 2;
          insertToken(ENDTAG, tagname);
        } else {
          nextchar += tagname.length + 1;
          lasttagname = tagname;
          insertToken(TAG, tagname, NOATTRS);
        }
        return true;
      }
      function emitSelfClosingTag() {
        if (is_end_tag) insertToken(ENDTAG, tagnamebuf, null, true);else {
          insertToken(TAG, tagnamebuf, attributes, true);
        }
      }
      function emitDoctype() {
        insertToken(DOCTYPE, buf2str(doctypenamebuf), doctypepublicbuf ? buf2str(doctypepublicbuf) : void 0, doctypesystembuf ? buf2str(doctypesystembuf) : void 0);
      }
      function emitEOF() {
        flushText();
        parser(EOF);
        doc.modclock = 1;
      }
      var insertToken = htmlparser.insertToken = function insertToken2(t, value, arg3, arg4) {
        flushText();
        var current = stack.top;
        if (!current || current.namespaceURI === NAMESPACE.HTML) {
          parser(t, value, arg3, arg4);
        } else {
          if (t !== TAG && t !== TEXT) {
            insertForeignToken(t, value, arg3, arg4);
          } else {
            if (isMathmlTextIntegrationPoint(current) && (t === TEXT || t === TAG && value !== "mglyph" && value !== "malignmark") || t === TAG && value === "svg" && current.namespaceURI === NAMESPACE.MATHML && current.localName === "annotation-xml" || isHTMLIntegrationPoint(current)) {
              text_integration_mode = true;
              parser(t, value, arg3, arg4);
              text_integration_mode = false;
            } else {
              insertForeignToken(t, value, arg3, arg4);
            }
          }
        }
      };
      function insertComment(data) {
        var parent = stack.top;
        if (foster_parent_mode && isA(parent, tablesectionrowSet)) {
          fosterParent(function (doc2) {
            return doc2.createComment(data);
          });
        } else {
          if (parent instanceof impl.HTMLTemplateElement) {
            parent = parent.content;
          }
          parent._appendChild(parent.ownerDocument.createComment(data));
        }
      }
      function insertText(s) {
        var parent = stack.top;
        if (foster_parent_mode && isA(parent, tablesectionrowSet)) {
          fosterParent(function (doc2) {
            return doc2.createTextNode(s);
          });
        } else {
          if (parent instanceof impl.HTMLTemplateElement) {
            parent = parent.content;
          }
          var lastChild = parent.lastChild;
          if (lastChild && lastChild.nodeType === Node.TEXT_NODE) {
            lastChild.appendData(s);
          } else {
            parent._appendChild(parent.ownerDocument.createTextNode(s));
          }
        }
      }
      function createHTMLElt(doc2, name, attrs) {
        var elt = html.createElement(doc2, name, null);
        if (attrs) {
          for (var i = 0, n = attrs.length; i < n; i++) {
            elt._setAttribute(attrs[i][0], attrs[i][1]);
          }
        }
        return elt;
      }
      var foster_parent_mode = false;
      function insertHTMLElement(name, attrs) {
        var elt = insertElement(function (doc2) {
          return createHTMLElt(doc2, name, attrs);
        });
        if (isA(elt, formassociatedSet)) {
          elt._form = form_element_pointer;
        }
        return elt;
      }
      function insertElement(eltFunc) {
        var elt;
        if (foster_parent_mode && isA(stack.top, tablesectionrowSet)) {
          elt = fosterParent(eltFunc);
        } else if (stack.top instanceof impl.HTMLTemplateElement) {
          elt = eltFunc(stack.top.content.ownerDocument);
          stack.top.content._appendChild(elt);
        } else {
          elt = eltFunc(stack.top.ownerDocument);
          stack.top._appendChild(elt);
        }
        stack.push(elt);
        return elt;
      }
      function insertForeignElement(name, attrs, ns) {
        return insertElement(function (doc2) {
          var elt = doc2._createElementNS(name, ns, null);
          if (attrs) {
            for (var i = 0, n = attrs.length; i < n; i++) {
              var attr = attrs[i];
              if (attr.length === 2) elt._setAttribute(attr[0], attr[1]);else {
                elt._setAttributeNS(attr[2], attr[0], attr[1]);
              }
            }
          }
          return elt;
        });
      }
      function lastElementOfType(type) {
        for (var i = stack.elements.length - 1; i >= 0; i--) {
          if (stack.elements[i] instanceof type) {
            return i;
          }
        }
        return -1;
      }
      function fosterParent(eltFunc) {
        var parent,
          before,
          lastTable = -1,
          lastTemplate = -1,
          elt;
        lastTable = lastElementOfType(impl.HTMLTableElement);
        lastTemplate = lastElementOfType(impl.HTMLTemplateElement);
        if (lastTemplate >= 0 && (lastTable < 0 || lastTemplate > lastTable)) {
          parent = stack.elements[lastTemplate];
        } else if (lastTable >= 0) {
          parent = stack.elements[lastTable].parentNode;
          if (parent) {
            before = stack.elements[lastTable];
          } else {
            parent = stack.elements[lastTable - 1];
          }
        }
        if (!parent) parent = stack.elements[0];
        if (parent instanceof impl.HTMLTemplateElement) {
          parent = parent.content;
        }
        elt = eltFunc(parent.ownerDocument);
        if (elt.nodeType === Node.TEXT_NODE) {
          var prev;
          if (before) prev = before.previousSibling;else prev = parent.lastChild;
          if (prev && prev.nodeType === Node.TEXT_NODE) {
            prev.appendData(elt.data);
            return elt;
          }
        }
        if (before) parent.insertBefore(elt, before);else parent._appendChild(elt);
        return elt;
      }
      function resetInsertionMode() {
        var last = false;
        for (var i = stack.elements.length - 1; i >= 0; i--) {
          var node = stack.elements[i];
          if (i === 0) {
            last = true;
            if (fragment) {
              node = fragmentContext;
            }
          }
          if (node.namespaceURI === NAMESPACE.HTML) {
            var tag = node.localName;
            switch (tag) {
              case "select":
                for (var j = i; j > 0;) {
                  var ancestor = stack.elements[--j];
                  if (ancestor instanceof impl.HTMLTemplateElement) {
                    break;
                  } else if (ancestor instanceof impl.HTMLTableElement) {
                    parser = in_select_in_table_mode;
                    return;
                  }
                }
                parser = in_select_mode;
                return;
              case "tr":
                parser = in_row_mode;
                return;
              case "tbody":
              case "tfoot":
              case "thead":
                parser = in_table_body_mode;
                return;
              case "caption":
                parser = in_caption_mode;
                return;
              case "colgroup":
                parser = in_column_group_mode;
                return;
              case "table":
                parser = in_table_mode;
                return;
              case "template":
                parser = templateInsertionModes[templateInsertionModes.length - 1];
                return;
              case "body":
                parser = in_body_mode;
                return;
              case "frameset":
                parser = in_frameset_mode;
                return;
              case "html":
                if (head_element_pointer === null) {
                  parser = before_head_mode;
                } else {
                  parser = after_head_mode;
                }
                return;
              default:
                if (!last) {
                  if (tag === "head") {
                    parser = in_head_mode;
                    return;
                  }
                  if (tag === "td" || tag === "th") {
                    parser = in_cell_mode;
                    return;
                  }
                }
            }
          }
          if (last) {
            parser = in_body_mode;
            return;
          }
        }
      }
      function parseRawText(name, attrs) {
        insertHTMLElement(name, attrs);
        tokenizer = rawtext_state;
        originalInsertionMode = parser;
        parser = text_mode;
      }
      function parseRCDATA(name, attrs) {
        insertHTMLElement(name, attrs);
        tokenizer = rcdata_state;
        originalInsertionMode = parser;
        parser = text_mode;
      }
      function afeclone(doc2, i) {
        return {
          elt: createHTMLElt(doc2, afe.list[i].localName, afe.attrs[i]),
          attrs: afe.attrs[i]
        };
      }
      function afereconstruct() {
        if (afe.list.length === 0) return;
        var entry = afe.list[afe.list.length - 1];
        if (entry === afe.MARKER) return;
        if (stack.elements.lastIndexOf(entry) !== -1) return;
        for (var i = afe.list.length - 2; i >= 0; i--) {
          entry = afe.list[i];
          if (entry === afe.MARKER) break;
          if (stack.elements.lastIndexOf(entry) !== -1) break;
        }
        for (i = i + 1; i < afe.list.length; i++) {
          var newelt = insertElement(function (doc2) {
            return afeclone(doc2, i).elt;
          });
          afe.list[i] = newelt;
        }
      }
      var BOOKMARK = {
        localName: "BM"
      };
      function adoptionAgency(tag) {
        if (isA(stack.top, tag) && afe.indexOf(stack.top) === -1) {
          stack.pop();
          return true;
        }
        var outer = 0;
        while (outer < 8) {
          outer++;
          var fmtelt = afe.findElementByTag(tag);
          if (!fmtelt) {
            return false;
          }
          var index = stack.elements.lastIndexOf(fmtelt);
          if (index === -1) {
            afe.remove(fmtelt);
            return true;
          }
          if (!stack.elementInScope(fmtelt)) {
            return true;
          }
          var furthestblock = null,
            furthestblockindex;
          for (var i = index + 1; i < stack.elements.length; i++) {
            if (isA(stack.elements[i], specialSet)) {
              furthestblock = stack.elements[i];
              furthestblockindex = i;
              break;
            }
          }
          if (!furthestblock) {
            stack.popElement(fmtelt);
            afe.remove(fmtelt);
            return true;
          } else {
            var ancestor = stack.elements[index - 1];
            afe.insertAfter(fmtelt, BOOKMARK);
            var node = furthestblock;
            var lastnode = furthestblock;
            var nodeindex = furthestblockindex;
            var nodeafeindex;
            var inner = 0;
            while (true) {
              inner++;
              node = stack.elements[--nodeindex];
              if (node === fmtelt) break;
              nodeafeindex = afe.indexOf(node);
              if (inner > 3 && nodeafeindex !== -1) {
                afe.remove(node);
                nodeafeindex = -1;
              }
              if (nodeafeindex === -1) {
                stack.removeElement(node);
                continue;
              }
              var newelt = afeclone(ancestor.ownerDocument, nodeafeindex);
              afe.replace(node, newelt.elt, newelt.attrs);
              stack.elements[nodeindex] = newelt.elt;
              node = newelt.elt;
              if (lastnode === furthestblock) {
                afe.remove(BOOKMARK);
                afe.insertAfter(newelt.elt, BOOKMARK);
              }
              node._appendChild(lastnode);
              lastnode = node;
            }
            if (foster_parent_mode && isA(ancestor, tablesectionrowSet)) {
              fosterParent(function () {
                return lastnode;
              });
            } else if (ancestor instanceof impl.HTMLTemplateElement) {
              ancestor.content._appendChild(lastnode);
            } else {
              ancestor._appendChild(lastnode);
            }
            var newelt2 = afeclone(furthestblock.ownerDocument, afe.indexOf(fmtelt));
            while (furthestblock.hasChildNodes()) {
              newelt2.elt._appendChild(furthestblock.firstChild);
            }
            furthestblock._appendChild(newelt2.elt);
            afe.remove(fmtelt);
            afe.replace(BOOKMARK, newelt2.elt, newelt2.attrs);
            stack.removeElement(fmtelt);
            var pos = stack.elements.lastIndexOf(furthestblock);
            stack.elements.splice(pos + 1, 0, newelt2.elt);
          }
        }
        return true;
      }
      function handleScriptEnd() {
        stack.pop();
        parser = originalInsertionMode;
        return;
      }
      function stopParsing() {
        delete doc._parser;
        stack.elements.length = 0;
        if (doc.defaultView) {
          doc.defaultView.dispatchEvent(new impl.Event("load", {}));
        }
      }
      function reconsume(c, new_state) {
        tokenizer = new_state;
        nextchar--;
      }
      function data_state(c) {
        switch (c) {
          case 38:
            return_state = data_state;
            tokenizer = character_reference_state;
            break;
          case 60:
            if (emitSimpleTag()) break;
            tokenizer = tag_open_state;
            break;
          case 0:
            textrun.push(c);
            textIncludesNUL = true;
            break;
          case -1:
            emitEOF();
            break;
          default:
            emitCharsWhile(DATATEXT) || textrun.push(c);
            break;
        }
      }
      function rcdata_state(c) {
        switch (c) {
          case 38:
            return_state = rcdata_state;
            tokenizer = character_reference_state;
            break;
          case 60:
            tokenizer = rcdata_less_than_sign_state;
            break;
          case 0:
            textrun.push(65533);
            textIncludesNUL = true;
            break;
          case -1:
            emitEOF();
            break;
          default:
            textrun.push(c);
            break;
        }
      }
      function rawtext_state(c) {
        switch (c) {
          case 60:
            tokenizer = rawtext_less_than_sign_state;
            break;
          case 0:
            textrun.push(65533);
            break;
          case -1:
            emitEOF();
            break;
          default:
            emitCharsWhile(RAWTEXT) || textrun.push(c);
            break;
        }
      }
      function script_data_state(c) {
        switch (c) {
          case 60:
            tokenizer = script_data_less_than_sign_state;
            break;
          case 0:
            textrun.push(65533);
            break;
          case -1:
            emitEOF();
            break;
          default:
            emitCharsWhile(RAWTEXT) || textrun.push(c);
            break;
        }
      }
      function plaintext_state(c) {
        switch (c) {
          case 0:
            textrun.push(65533);
            break;
          case -1:
            emitEOF();
            break;
          default:
            emitCharsWhile(PLAINTEXT) || textrun.push(c);
            break;
        }
      }
      function tag_open_state(c) {
        switch (c) {
          case 33:
            tokenizer = markup_declaration_open_state;
            break;
          case 47:
            tokenizer = end_tag_open_state;
            break;
          case 65:
          case 66:
          case 67:
          case 68:
          case 69:
          case 70:
          case 71:
          case 72:
          case 73:
          case 74:
          case 75:
          case 76:
          case 77:
          case 78:
          case 79:
          case 80:
          case 81:
          case 82:
          case 83:
          case 84:
          case 85:
          case 86:
          case 87:
          case 88:
          case 89:
          case 90:
          case 97:
          case 98:
          case 99:
          case 100:
          case 101:
          case 102:
          case 103:
          case 104:
          case 105:
          case 106:
          case 107:
          case 108:
          case 109:
          case 110:
          case 111:
          case 112:
          case 113:
          case 114:
          case 115:
          case 116:
          case 117:
          case 118:
          case 119:
          case 120:
          case 121:
          case 122:
            beginTagName();
            reconsume(c, tag_name_state);
            break;
          case 63:
            reconsume(c, bogus_comment_state);
            break;
          default:
            textrun.push(60);
            reconsume(c, data_state);
            break;
        }
      }
      function end_tag_open_state(c) {
        switch (c) {
          case 65:
          case 66:
          case 67:
          case 68:
          case 69:
          case 70:
          case 71:
          case 72:
          case 73:
          case 74:
          case 75:
          case 76:
          case 77:
          case 78:
          case 79:
          case 80:
          case 81:
          case 82:
          case 83:
          case 84:
          case 85:
          case 86:
          case 87:
          case 88:
          case 89:
          case 90:
          case 97:
          case 98:
          case 99:
          case 100:
          case 101:
          case 102:
          case 103:
          case 104:
          case 105:
          case 106:
          case 107:
          case 108:
          case 109:
          case 110:
          case 111:
          case 112:
          case 113:
          case 114:
          case 115:
          case 116:
          case 117:
          case 118:
          case 119:
          case 120:
          case 121:
          case 122:
            beginEndTagName();
            reconsume(c, tag_name_state);
            break;
          case 62:
            tokenizer = data_state;
            break;
          case -1:
            textrun.push(60);
            textrun.push(47);
            emitEOF();
            break;
          default:
            reconsume(c, bogus_comment_state);
            break;
        }
      }
      function tag_name_state(c) {
        switch (c) {
          case 9:
          case 10:
          case 12:
          case 32:
            tokenizer = before_attribute_name_state;
            break;
          case 47:
            tokenizer = self_closing_start_tag_state;
            break;
          case 62:
            tokenizer = data_state;
            emitTag();
            break;
          case 65:
          case 66:
          case 67:
          case 68:
          case 69:
          case 70:
          case 71:
          case 72:
          case 73:
          case 74:
          case 75:
          case 76:
          case 77:
          case 78:
          case 79:
          case 80:
          case 81:
          case 82:
          case 83:
          case 84:
          case 85:
          case 86:
          case 87:
          case 88:
          case 89:
          case 90:
            tagnamebuf += String.fromCharCode(c + 32);
            break;
          case 0:
            tagnamebuf += String.fromCharCode(65533);
            break;
          case -1:
            emitEOF();
            break;
          default:
            tagnamebuf += getMatchingChars(TAGNAME);
            break;
        }
      }
      function rcdata_less_than_sign_state(c) {
        if (c === 47) {
          beginTempBuf();
          tokenizer = rcdata_end_tag_open_state;
        } else {
          textrun.push(60);
          reconsume(c, rcdata_state);
        }
      }
      function rcdata_end_tag_open_state(c) {
        switch (c) {
          case 65:
          case 66:
          case 67:
          case 68:
          case 69:
          case 70:
          case 71:
          case 72:
          case 73:
          case 74:
          case 75:
          case 76:
          case 77:
          case 78:
          case 79:
          case 80:
          case 81:
          case 82:
          case 83:
          case 84:
          case 85:
          case 86:
          case 87:
          case 88:
          case 89:
          case 90:
          case 97:
          case 98:
          case 99:
          case 100:
          case 101:
          case 102:
          case 103:
          case 104:
          case 105:
          case 106:
          case 107:
          case 108:
          case 109:
          case 110:
          case 111:
          case 112:
          case 113:
          case 114:
          case 115:
          case 116:
          case 117:
          case 118:
          case 119:
          case 120:
          case 121:
          case 122:
            beginEndTagName();
            reconsume(c, rcdata_end_tag_name_state);
            break;
          default:
            textrun.push(60);
            textrun.push(47);
            reconsume(c, rcdata_state);
            break;
        }
      }
      function rcdata_end_tag_name_state(c) {
        switch (c) {
          case 9:
          case 10:
          case 12:
          case 32:
            if (appropriateEndTag(tagnamebuf)) {
              tokenizer = before_attribute_name_state;
              return;
            }
            break;
          case 47:
            if (appropriateEndTag(tagnamebuf)) {
              tokenizer = self_closing_start_tag_state;
              return;
            }
            break;
          case 62:
            if (appropriateEndTag(tagnamebuf)) {
              tokenizer = data_state;
              emitTag();
              return;
            }
            break;
          case 65:
          case 66:
          case 67:
          case 68:
          case 69:
          case 70:
          case 71:
          case 72:
          case 73:
          case 74:
          case 75:
          case 76:
          case 77:
          case 78:
          case 79:
          case 80:
          case 81:
          case 82:
          case 83:
          case 84:
          case 85:
          case 86:
          case 87:
          case 88:
          case 89:
          case 90:
            tagnamebuf += String.fromCharCode(c + 32);
            tempbuf.push(c);
            return;
          case 97:
          case 98:
          case 99:
          case 100:
          case 101:
          case 102:
          case 103:
          case 104:
          case 105:
          case 106:
          case 107:
          case 108:
          case 109:
          case 110:
          case 111:
          case 112:
          case 113:
          case 114:
          case 115:
          case 116:
          case 117:
          case 118:
          case 119:
          case 120:
          case 121:
          case 122:
            tagnamebuf += String.fromCharCode(c);
            tempbuf.push(c);
            return;
        }
        textrun.push(60);
        textrun.push(47);
        pushAll(textrun, tempbuf);
        reconsume(c, rcdata_state);
      }
      function rawtext_less_than_sign_state(c) {
        if (c === 47) {
          beginTempBuf();
          tokenizer = rawtext_end_tag_open_state;
        } else {
          textrun.push(60);
          reconsume(c, rawtext_state);
        }
      }
      function rawtext_end_tag_open_state(c) {
        switch (c) {
          case 65:
          case 66:
          case 67:
          case 68:
          case 69:
          case 70:
          case 71:
          case 72:
          case 73:
          case 74:
          case 75:
          case 76:
          case 77:
          case 78:
          case 79:
          case 80:
          case 81:
          case 82:
          case 83:
          case 84:
          case 85:
          case 86:
          case 87:
          case 88:
          case 89:
          case 90:
          case 97:
          case 98:
          case 99:
          case 100:
          case 101:
          case 102:
          case 103:
          case 104:
          case 105:
          case 106:
          case 107:
          case 108:
          case 109:
          case 110:
          case 111:
          case 112:
          case 113:
          case 114:
          case 115:
          case 116:
          case 117:
          case 118:
          case 119:
          case 120:
          case 121:
          case 122:
            beginEndTagName();
            reconsume(c, rawtext_end_tag_name_state);
            break;
          default:
            textrun.push(60);
            textrun.push(47);
            reconsume(c, rawtext_state);
            break;
        }
      }
      function rawtext_end_tag_name_state(c) {
        switch (c) {
          case 9:
          case 10:
          case 12:
          case 32:
            if (appropriateEndTag(tagnamebuf)) {
              tokenizer = before_attribute_name_state;
              return;
            }
            break;
          case 47:
            if (appropriateEndTag(tagnamebuf)) {
              tokenizer = self_closing_start_tag_state;
              return;
            }
            break;
          case 62:
            if (appropriateEndTag(tagnamebuf)) {
              tokenizer = data_state;
              emitTag();
              return;
            }
            break;
          case 65:
          case 66:
          case 67:
          case 68:
          case 69:
          case 70:
          case 71:
          case 72:
          case 73:
          case 74:
          case 75:
          case 76:
          case 77:
          case 78:
          case 79:
          case 80:
          case 81:
          case 82:
          case 83:
          case 84:
          case 85:
          case 86:
          case 87:
          case 88:
          case 89:
          case 90:
            tagnamebuf += String.fromCharCode(c + 32);
            tempbuf.push(c);
            return;
          case 97:
          case 98:
          case 99:
          case 100:
          case 101:
          case 102:
          case 103:
          case 104:
          case 105:
          case 106:
          case 107:
          case 108:
          case 109:
          case 110:
          case 111:
          case 112:
          case 113:
          case 114:
          case 115:
          case 116:
          case 117:
          case 118:
          case 119:
          case 120:
          case 121:
          case 122:
            tagnamebuf += String.fromCharCode(c);
            tempbuf.push(c);
            return;
        }
        textrun.push(60);
        textrun.push(47);
        pushAll(textrun, tempbuf);
        reconsume(c, rawtext_state);
      }
      function script_data_less_than_sign_state(c) {
        switch (c) {
          case 47:
            beginTempBuf();
            tokenizer = script_data_end_tag_open_state;
            break;
          case 33:
            tokenizer = script_data_escape_start_state;
            textrun.push(60);
            textrun.push(33);
            break;
          default:
            textrun.push(60);
            reconsume(c, script_data_state);
            break;
        }
      }
      function script_data_end_tag_open_state(c) {
        switch (c) {
          case 65:
          case 66:
          case 67:
          case 68:
          case 69:
          case 70:
          case 71:
          case 72:
          case 73:
          case 74:
          case 75:
          case 76:
          case 77:
          case 78:
          case 79:
          case 80:
          case 81:
          case 82:
          case 83:
          case 84:
          case 85:
          case 86:
          case 87:
          case 88:
          case 89:
          case 90:
          case 97:
          case 98:
          case 99:
          case 100:
          case 101:
          case 102:
          case 103:
          case 104:
          case 105:
          case 106:
          case 107:
          case 108:
          case 109:
          case 110:
          case 111:
          case 112:
          case 113:
          case 114:
          case 115:
          case 116:
          case 117:
          case 118:
          case 119:
          case 120:
          case 121:
          case 122:
            beginEndTagName();
            reconsume(c, script_data_end_tag_name_state);
            break;
          default:
            textrun.push(60);
            textrun.push(47);
            reconsume(c, script_data_state);
            break;
        }
      }
      function script_data_end_tag_name_state(c) {
        switch (c) {
          case 9:
          case 10:
          case 12:
          case 32:
            if (appropriateEndTag(tagnamebuf)) {
              tokenizer = before_attribute_name_state;
              return;
            }
            break;
          case 47:
            if (appropriateEndTag(tagnamebuf)) {
              tokenizer = self_closing_start_tag_state;
              return;
            }
            break;
          case 62:
            if (appropriateEndTag(tagnamebuf)) {
              tokenizer = data_state;
              emitTag();
              return;
            }
            break;
          case 65:
          case 66:
          case 67:
          case 68:
          case 69:
          case 70:
          case 71:
          case 72:
          case 73:
          case 74:
          case 75:
          case 76:
          case 77:
          case 78:
          case 79:
          case 80:
          case 81:
          case 82:
          case 83:
          case 84:
          case 85:
          case 86:
          case 87:
          case 88:
          case 89:
          case 90:
            tagnamebuf += String.fromCharCode(c + 32);
            tempbuf.push(c);
            return;
          case 97:
          case 98:
          case 99:
          case 100:
          case 101:
          case 102:
          case 103:
          case 104:
          case 105:
          case 106:
          case 107:
          case 108:
          case 109:
          case 110:
          case 111:
          case 112:
          case 113:
          case 114:
          case 115:
          case 116:
          case 117:
          case 118:
          case 119:
          case 120:
          case 121:
          case 122:
            tagnamebuf += String.fromCharCode(c);
            tempbuf.push(c);
            return;
        }
        textrun.push(60);
        textrun.push(47);
        pushAll(textrun, tempbuf);
        reconsume(c, script_data_state);
      }
      function script_data_escape_start_state(c) {
        if (c === 45) {
          tokenizer = script_data_escape_start_dash_state;
          textrun.push(45);
        } else {
          reconsume(c, script_data_state);
        }
      }
      function script_data_escape_start_dash_state(c) {
        if (c === 45) {
          tokenizer = script_data_escaped_dash_dash_state;
          textrun.push(45);
        } else {
          reconsume(c, script_data_state);
        }
      }
      function script_data_escaped_state(c) {
        switch (c) {
          case 45:
            tokenizer = script_data_escaped_dash_state;
            textrun.push(45);
            break;
          case 60:
            tokenizer = script_data_escaped_less_than_sign_state;
            break;
          case 0:
            textrun.push(65533);
            break;
          case -1:
            emitEOF();
            break;
          default:
            textrun.push(c);
            break;
        }
      }
      function script_data_escaped_dash_state(c) {
        switch (c) {
          case 45:
            tokenizer = script_data_escaped_dash_dash_state;
            textrun.push(45);
            break;
          case 60:
            tokenizer = script_data_escaped_less_than_sign_state;
            break;
          case 0:
            tokenizer = script_data_escaped_state;
            textrun.push(65533);
            break;
          case -1:
            emitEOF();
            break;
          default:
            tokenizer = script_data_escaped_state;
            textrun.push(c);
            break;
        }
      }
      function script_data_escaped_dash_dash_state(c) {
        switch (c) {
          case 45:
            textrun.push(45);
            break;
          case 60:
            tokenizer = script_data_escaped_less_than_sign_state;
            break;
          case 62:
            tokenizer = script_data_state;
            textrun.push(62);
            break;
          case 0:
            tokenizer = script_data_escaped_state;
            textrun.push(65533);
            break;
          case -1:
            emitEOF();
            break;
          default:
            tokenizer = script_data_escaped_state;
            textrun.push(c);
            break;
        }
      }
      function script_data_escaped_less_than_sign_state(c) {
        switch (c) {
          case 47:
            beginTempBuf();
            tokenizer = script_data_escaped_end_tag_open_state;
            break;
          case 65:
          case 66:
          case 67:
          case 68:
          case 69:
          case 70:
          case 71:
          case 72:
          case 73:
          case 74:
          case 75:
          case 76:
          case 77:
          case 78:
          case 79:
          case 80:
          case 81:
          case 82:
          case 83:
          case 84:
          case 85:
          case 86:
          case 87:
          case 88:
          case 89:
          case 90:
          case 97:
          case 98:
          case 99:
          case 100:
          case 101:
          case 102:
          case 103:
          case 104:
          case 105:
          case 106:
          case 107:
          case 108:
          case 109:
          case 110:
          case 111:
          case 112:
          case 113:
          case 114:
          case 115:
          case 116:
          case 117:
          case 118:
          case 119:
          case 120:
          case 121:
          case 122:
            beginTempBuf();
            textrun.push(60);
            reconsume(c, script_data_double_escape_start_state);
            break;
          default:
            textrun.push(60);
            reconsume(c, script_data_escaped_state);
            break;
        }
      }
      function script_data_escaped_end_tag_open_state(c) {
        switch (c) {
          case 65:
          case 66:
          case 67:
          case 68:
          case 69:
          case 70:
          case 71:
          case 72:
          case 73:
          case 74:
          case 75:
          case 76:
          case 77:
          case 78:
          case 79:
          case 80:
          case 81:
          case 82:
          case 83:
          case 84:
          case 85:
          case 86:
          case 87:
          case 88:
          case 89:
          case 90:
          case 97:
          case 98:
          case 99:
          case 100:
          case 101:
          case 102:
          case 103:
          case 104:
          case 105:
          case 106:
          case 107:
          case 108:
          case 109:
          case 110:
          case 111:
          case 112:
          case 113:
          case 114:
          case 115:
          case 116:
          case 117:
          case 118:
          case 119:
          case 120:
          case 121:
          case 122:
            beginEndTagName();
            reconsume(c, script_data_escaped_end_tag_name_state);
            break;
          default:
            textrun.push(60);
            textrun.push(47);
            reconsume(c, script_data_escaped_state);
            break;
        }
      }
      function script_data_escaped_end_tag_name_state(c) {
        switch (c) {
          case 9:
          case 10:
          case 12:
          case 32:
            if (appropriateEndTag(tagnamebuf)) {
              tokenizer = before_attribute_name_state;
              return;
            }
            break;
          case 47:
            if (appropriateEndTag(tagnamebuf)) {
              tokenizer = self_closing_start_tag_state;
              return;
            }
            break;
          case 62:
            if (appropriateEndTag(tagnamebuf)) {
              tokenizer = data_state;
              emitTag();
              return;
            }
            break;
          case 65:
          case 66:
          case 67:
          case 68:
          case 69:
          case 70:
          case 71:
          case 72:
          case 73:
          case 74:
          case 75:
          case 76:
          case 77:
          case 78:
          case 79:
          case 80:
          case 81:
          case 82:
          case 83:
          case 84:
          case 85:
          case 86:
          case 87:
          case 88:
          case 89:
          case 90:
            tagnamebuf += String.fromCharCode(c + 32);
            tempbuf.push(c);
            return;
          case 97:
          case 98:
          case 99:
          case 100:
          case 101:
          case 102:
          case 103:
          case 104:
          case 105:
          case 106:
          case 107:
          case 108:
          case 109:
          case 110:
          case 111:
          case 112:
          case 113:
          case 114:
          case 115:
          case 116:
          case 117:
          case 118:
          case 119:
          case 120:
          case 121:
          case 122:
            tagnamebuf += String.fromCharCode(c);
            tempbuf.push(c);
            return;
        }
        textrun.push(60);
        textrun.push(47);
        pushAll(textrun, tempbuf);
        reconsume(c, script_data_escaped_state);
      }
      function script_data_double_escape_start_state(c) {
        switch (c) {
          case 9:
          case 10:
          case 12:
          case 32:
          case 47:
          case 62:
            if (buf2str(tempbuf) === "script") {
              tokenizer = script_data_double_escaped_state;
            } else {
              tokenizer = script_data_escaped_state;
            }
            textrun.push(c);
            break;
          case 65:
          case 66:
          case 67:
          case 68:
          case 69:
          case 70:
          case 71:
          case 72:
          case 73:
          case 74:
          case 75:
          case 76:
          case 77:
          case 78:
          case 79:
          case 80:
          case 81:
          case 82:
          case 83:
          case 84:
          case 85:
          case 86:
          case 87:
          case 88:
          case 89:
          case 90:
            tempbuf.push(c + 32);
            textrun.push(c);
            break;
          case 97:
          case 98:
          case 99:
          case 100:
          case 101:
          case 102:
          case 103:
          case 104:
          case 105:
          case 106:
          case 107:
          case 108:
          case 109:
          case 110:
          case 111:
          case 112:
          case 113:
          case 114:
          case 115:
          case 116:
          case 117:
          case 118:
          case 119:
          case 120:
          case 121:
          case 122:
            tempbuf.push(c);
            textrun.push(c);
            break;
          default:
            reconsume(c, script_data_escaped_state);
            break;
        }
      }
      function script_data_double_escaped_state(c) {
        switch (c) {
          case 45:
            tokenizer = script_data_double_escaped_dash_state;
            textrun.push(45);
            break;
          case 60:
            tokenizer = script_data_double_escaped_less_than_sign_state;
            textrun.push(60);
            break;
          case 0:
            textrun.push(65533);
            break;
          case -1:
            emitEOF();
            break;
          default:
            textrun.push(c);
            break;
        }
      }
      function script_data_double_escaped_dash_state(c) {
        switch (c) {
          case 45:
            tokenizer = script_data_double_escaped_dash_dash_state;
            textrun.push(45);
            break;
          case 60:
            tokenizer = script_data_double_escaped_less_than_sign_state;
            textrun.push(60);
            break;
          case 0:
            tokenizer = script_data_double_escaped_state;
            textrun.push(65533);
            break;
          case -1:
            emitEOF();
            break;
          default:
            tokenizer = script_data_double_escaped_state;
            textrun.push(c);
            break;
        }
      }
      function script_data_double_escaped_dash_dash_state(c) {
        switch (c) {
          case 45:
            textrun.push(45);
            break;
          case 60:
            tokenizer = script_data_double_escaped_less_than_sign_state;
            textrun.push(60);
            break;
          case 62:
            tokenizer = script_data_state;
            textrun.push(62);
            break;
          case 0:
            tokenizer = script_data_double_escaped_state;
            textrun.push(65533);
            break;
          case -1:
            emitEOF();
            break;
          default:
            tokenizer = script_data_double_escaped_state;
            textrun.push(c);
            break;
        }
      }
      function script_data_double_escaped_less_than_sign_state(c) {
        if (c === 47) {
          beginTempBuf();
          tokenizer = script_data_double_escape_end_state;
          textrun.push(47);
        } else {
          reconsume(c, script_data_double_escaped_state);
        }
      }
      function script_data_double_escape_end_state(c) {
        switch (c) {
          case 9:
          case 10:
          case 12:
          case 32:
          case 47:
          case 62:
            if (buf2str(tempbuf) === "script") {
              tokenizer = script_data_escaped_state;
            } else {
              tokenizer = script_data_double_escaped_state;
            }
            textrun.push(c);
            break;
          case 65:
          case 66:
          case 67:
          case 68:
          case 69:
          case 70:
          case 71:
          case 72:
          case 73:
          case 74:
          case 75:
          case 76:
          case 77:
          case 78:
          case 79:
          case 80:
          case 81:
          case 82:
          case 83:
          case 84:
          case 85:
          case 86:
          case 87:
          case 88:
          case 89:
          case 90:
            tempbuf.push(c + 32);
            textrun.push(c);
            break;
          case 97:
          case 98:
          case 99:
          case 100:
          case 101:
          case 102:
          case 103:
          case 104:
          case 105:
          case 106:
          case 107:
          case 108:
          case 109:
          case 110:
          case 111:
          case 112:
          case 113:
          case 114:
          case 115:
          case 116:
          case 117:
          case 118:
          case 119:
          case 120:
          case 121:
          case 122:
            tempbuf.push(c);
            textrun.push(c);
            break;
          default:
            reconsume(c, script_data_double_escaped_state);
            break;
        }
      }
      function before_attribute_name_state(c) {
        switch (c) {
          case 9:
          case 10:
          case 12:
          case 32:
            break;
          case 47:
            tokenizer = self_closing_start_tag_state;
            break;
          case 62:
            tokenizer = data_state;
            emitTag();
            break;
          case -1:
            emitEOF();
            break;
          case 61:
            beginAttrName();
            attrnamebuf += String.fromCharCode(c);
            tokenizer = attribute_name_state;
            break;
          default:
            if (handleSimpleAttribute()) break;
            beginAttrName();
            reconsume(c, attribute_name_state);
            break;
        }
      }
      function attribute_name_state(c) {
        switch (c) {
          case 9:
          case 10:
          case 12:
          case 32:
          case 47:
          case 62:
          case -1:
            reconsume(c, after_attribute_name_state);
            break;
          case 61:
            tokenizer = before_attribute_value_state;
            break;
          case 65:
          case 66:
          case 67:
          case 68:
          case 69:
          case 70:
          case 71:
          case 72:
          case 73:
          case 74:
          case 75:
          case 76:
          case 77:
          case 78:
          case 79:
          case 80:
          case 81:
          case 82:
          case 83:
          case 84:
          case 85:
          case 86:
          case 87:
          case 88:
          case 89:
          case 90:
            attrnamebuf += String.fromCharCode(c + 32);
            break;
          case 0:
            attrnamebuf += String.fromCharCode(65533);
            break;
          case 34:
          case 39:
          case 60:
          default:
            attrnamebuf += getMatchingChars(ATTRNAME);
            break;
        }
      }
      function after_attribute_name_state(c) {
        switch (c) {
          case 9:
          case 10:
          case 12:
          case 32:
            break;
          case 47:
            addAttribute(attrnamebuf);
            tokenizer = self_closing_start_tag_state;
            break;
          case 61:
            tokenizer = before_attribute_value_state;
            break;
          case 62:
            tokenizer = data_state;
            addAttribute(attrnamebuf);
            emitTag();
            break;
          case -1:
            addAttribute(attrnamebuf);
            emitEOF();
            break;
          default:
            addAttribute(attrnamebuf);
            beginAttrName();
            reconsume(c, attribute_name_state);
            break;
        }
      }
      function before_attribute_value_state(c) {
        switch (c) {
          case 9:
          case 10:
          case 12:
          case 32:
            break;
          case 34:
            beginAttrValue();
            tokenizer = attribute_value_double_quoted_state;
            break;
          case 39:
            beginAttrValue();
            tokenizer = attribute_value_single_quoted_state;
            break;
          case 62:
          default:
            beginAttrValue();
            reconsume(c, attribute_value_unquoted_state);
            break;
        }
      }
      function attribute_value_double_quoted_state(c) {
        switch (c) {
          case 34:
            addAttribute(attrnamebuf, attrvaluebuf);
            tokenizer = after_attribute_value_quoted_state;
            break;
          case 38:
            return_state = attribute_value_double_quoted_state;
            tokenizer = character_reference_state;
            break;
          case 0:
            attrvaluebuf += String.fromCharCode(65533);
            break;
          case -1:
            emitEOF();
            break;
          case 10:
            attrvaluebuf += String.fromCharCode(c);
            break;
          default:
            attrvaluebuf += getMatchingChars(DBLQUOTEATTRVAL);
            break;
        }
      }
      function attribute_value_single_quoted_state(c) {
        switch (c) {
          case 39:
            addAttribute(attrnamebuf, attrvaluebuf);
            tokenizer = after_attribute_value_quoted_state;
            break;
          case 38:
            return_state = attribute_value_single_quoted_state;
            tokenizer = character_reference_state;
            break;
          case 0:
            attrvaluebuf += String.fromCharCode(65533);
            break;
          case -1:
            emitEOF();
            break;
          case 10:
            attrvaluebuf += String.fromCharCode(c);
            break;
          default:
            attrvaluebuf += getMatchingChars(SINGLEQUOTEATTRVAL);
            break;
        }
      }
      function attribute_value_unquoted_state(c) {
        switch (c) {
          case 9:
          case 10:
          case 12:
          case 32:
            addAttribute(attrnamebuf, attrvaluebuf);
            tokenizer = before_attribute_name_state;
            break;
          case 38:
            return_state = attribute_value_unquoted_state;
            tokenizer = character_reference_state;
            break;
          case 62:
            addAttribute(attrnamebuf, attrvaluebuf);
            tokenizer = data_state;
            emitTag();
            break;
          case 0:
            attrvaluebuf += String.fromCharCode(65533);
            break;
          case -1:
            nextchar--;
            tokenizer = data_state;
            break;
          case 34:
          case 39:
          case 60:
          case 61:
          case 96:
          default:
            attrvaluebuf += getMatchingChars(UNQUOTEDATTRVAL);
            break;
        }
      }
      function after_attribute_value_quoted_state(c) {
        switch (c) {
          case 9:
          case 10:
          case 12:
          case 32:
            tokenizer = before_attribute_name_state;
            break;
          case 47:
            tokenizer = self_closing_start_tag_state;
            break;
          case 62:
            tokenizer = data_state;
            emitTag();
            break;
          case -1:
            emitEOF();
            break;
          default:
            reconsume(c, before_attribute_name_state);
            break;
        }
      }
      function self_closing_start_tag_state(c) {
        switch (c) {
          case 62:
            tokenizer = data_state;
            emitSelfClosingTag();
            break;
          case -1:
            emitEOF();
            break;
          default:
            reconsume(c, before_attribute_name_state);
            break;
        }
      }
      function bogus_comment_state(c, lookahead, eof) {
        var len = lookahead.length;
        if (eof) {
          nextchar += len - 1;
        } else {
          nextchar += len;
        }
        var comment = lookahead.substring(0, len - 1);
        comment = comment.replace(/\u0000/g, "\uFFFD");
        comment = comment.replace(/\u000D\u000A/g, "\n");
        comment = comment.replace(/\u000D/g, "\n");
        insertToken(COMMENT, comment);
        tokenizer = data_state;
      }
      bogus_comment_state.lookahead = ">";
      function markup_declaration_open_state(c, lookahead, eof) {
        if (lookahead[0] === "-" && lookahead[1] === "-") {
          nextchar += 2;
          beginComment();
          tokenizer = comment_start_state;
          return;
        }
        if (lookahead.toUpperCase() === "DOCTYPE") {
          nextchar += 7;
          tokenizer = doctype_state;
        } else if (lookahead === "[CDATA[" && cdataAllowed()) {
          nextchar += 7;
          tokenizer = cdata_section_state;
        } else {
          tokenizer = bogus_comment_state;
        }
      }
      markup_declaration_open_state.lookahead = 7;
      function comment_start_state(c) {
        beginComment();
        switch (c) {
          case 45:
            tokenizer = comment_start_dash_state;
            break;
          case 62:
            tokenizer = data_state;
            insertToken(COMMENT, buf2str(commentbuf));
            break;
          default:
            reconsume(c, comment_state);
            break;
        }
      }
      function comment_start_dash_state(c) {
        switch (c) {
          case 45:
            tokenizer = comment_end_state;
            break;
          case 62:
            tokenizer = data_state;
            insertToken(COMMENT, buf2str(commentbuf));
            break;
          case -1:
            insertToken(COMMENT, buf2str(commentbuf));
            emitEOF();
            break;
          default:
            commentbuf.push(45);
            reconsume(c, comment_state);
            break;
        }
      }
      function comment_state(c) {
        switch (c) {
          case 60:
            commentbuf.push(c);
            tokenizer = comment_less_than_sign_state;
            break;
          case 45:
            tokenizer = comment_end_dash_state;
            break;
          case 0:
            commentbuf.push(65533);
            break;
          case -1:
            insertToken(COMMENT, buf2str(commentbuf));
            emitEOF();
            break;
          default:
            commentbuf.push(c);
            break;
        }
      }
      function comment_less_than_sign_state(c) {
        switch (c) {
          case 33:
            commentbuf.push(c);
            tokenizer = comment_less_than_sign_bang_state;
            break;
          case 60:
            commentbuf.push(c);
            break;
          default:
            reconsume(c, comment_state);
            break;
        }
      }
      function comment_less_than_sign_bang_state(c) {
        switch (c) {
          case 45:
            tokenizer = comment_less_than_sign_bang_dash_state;
            break;
          default:
            reconsume(c, comment_state);
            break;
        }
      }
      function comment_less_than_sign_bang_dash_state(c) {
        switch (c) {
          case 45:
            tokenizer = comment_less_than_sign_bang_dash_dash_state;
            break;
          default:
            reconsume(c, comment_end_dash_state);
            break;
        }
      }
      function comment_less_than_sign_bang_dash_dash_state(c) {
        switch (c) {
          case 62:
          case -1:
            reconsume(c, comment_end_state);
            break;
          default:
            reconsume(c, comment_end_state);
            break;
        }
      }
      function comment_end_dash_state(c) {
        switch (c) {
          case 45:
            tokenizer = comment_end_state;
            break;
          case -1:
            insertToken(COMMENT, buf2str(commentbuf));
            emitEOF();
            break;
          default:
            commentbuf.push(45);
            reconsume(c, comment_state);
            break;
        }
      }
      function comment_end_state(c) {
        switch (c) {
          case 62:
            tokenizer = data_state;
            insertToken(COMMENT, buf2str(commentbuf));
            break;
          case 33:
            tokenizer = comment_end_bang_state;
            break;
          case 45:
            commentbuf.push(45);
            break;
          case -1:
            insertToken(COMMENT, buf2str(commentbuf));
            emitEOF();
            break;
          default:
            commentbuf.push(45);
            commentbuf.push(45);
            reconsume(c, comment_state);
            break;
        }
      }
      function comment_end_bang_state(c) {
        switch (c) {
          case 45:
            commentbuf.push(45);
            commentbuf.push(45);
            commentbuf.push(33);
            tokenizer = comment_end_dash_state;
            break;
          case 62:
            tokenizer = data_state;
            insertToken(COMMENT, buf2str(commentbuf));
            break;
          case -1:
            insertToken(COMMENT, buf2str(commentbuf));
            emitEOF();
            break;
          default:
            commentbuf.push(45);
            commentbuf.push(45);
            commentbuf.push(33);
            reconsume(c, comment_state);
            break;
        }
      }
      function doctype_state(c) {
        switch (c) {
          case 9:
          case 10:
          case 12:
          case 32:
            tokenizer = before_doctype_name_state;
            break;
          case -1:
            beginDoctype();
            forcequirks();
            emitDoctype();
            emitEOF();
            break;
          default:
            reconsume(c, before_doctype_name_state);
            break;
        }
      }
      function before_doctype_name_state(c) {
        switch (c) {
          case 9:
          case 10:
          case 12:
          case 32:
            break;
          case 65:
          case 66:
          case 67:
          case 68:
          case 69:
          case 70:
          case 71:
          case 72:
          case 73:
          case 74:
          case 75:
          case 76:
          case 77:
          case 78:
          case 79:
          case 80:
          case 81:
          case 82:
          case 83:
          case 84:
          case 85:
          case 86:
          case 87:
          case 88:
          case 89:
          case 90:
            beginDoctype();
            doctypenamebuf.push(c + 32);
            tokenizer = doctype_name_state;
            break;
          case 0:
            beginDoctype();
            doctypenamebuf.push(65533);
            tokenizer = doctype_name_state;
            break;
          case 62:
            beginDoctype();
            forcequirks();
            tokenizer = data_state;
            emitDoctype();
            break;
          case -1:
            beginDoctype();
            forcequirks();
            emitDoctype();
            emitEOF();
            break;
          default:
            beginDoctype();
            doctypenamebuf.push(c);
            tokenizer = doctype_name_state;
            break;
        }
      }
      function doctype_name_state(c) {
        switch (c) {
          case 9:
          case 10:
          case 12:
          case 32:
            tokenizer = after_doctype_name_state;
            break;
          case 62:
            tokenizer = data_state;
            emitDoctype();
            break;
          case 65:
          case 66:
          case 67:
          case 68:
          case 69:
          case 70:
          case 71:
          case 72:
          case 73:
          case 74:
          case 75:
          case 76:
          case 77:
          case 78:
          case 79:
          case 80:
          case 81:
          case 82:
          case 83:
          case 84:
          case 85:
          case 86:
          case 87:
          case 88:
          case 89:
          case 90:
            doctypenamebuf.push(c + 32);
            break;
          case 0:
            doctypenamebuf.push(65533);
            break;
          case -1:
            forcequirks();
            emitDoctype();
            emitEOF();
            break;
          default:
            doctypenamebuf.push(c);
            break;
        }
      }
      function after_doctype_name_state(c, lookahead, eof) {
        switch (c) {
          case 9:
          case 10:
          case 12:
          case 32:
            nextchar += 1;
            break;
          case 62:
            tokenizer = data_state;
            nextchar += 1;
            emitDoctype();
            break;
          case -1:
            forcequirks();
            emitDoctype();
            emitEOF();
            break;
          default:
            lookahead = lookahead.toUpperCase();
            if (lookahead === "PUBLIC") {
              nextchar += 6;
              tokenizer = after_doctype_public_keyword_state;
            } else if (lookahead === "SYSTEM") {
              nextchar += 6;
              tokenizer = after_doctype_system_keyword_state;
            } else {
              forcequirks();
              tokenizer = bogus_doctype_state;
            }
            break;
        }
      }
      after_doctype_name_state.lookahead = 6;
      function after_doctype_public_keyword_state(c) {
        switch (c) {
          case 9:
          case 10:
          case 12:
          case 32:
            tokenizer = before_doctype_public_identifier_state;
            break;
          case 34:
            beginDoctypePublicId();
            tokenizer = doctype_public_identifier_double_quoted_state;
            break;
          case 39:
            beginDoctypePublicId();
            tokenizer = doctype_public_identifier_single_quoted_state;
            break;
          case 62:
            forcequirks();
            tokenizer = data_state;
            emitDoctype();
            break;
          case -1:
            forcequirks();
            emitDoctype();
            emitEOF();
            break;
          default:
            forcequirks();
            tokenizer = bogus_doctype_state;
            break;
        }
      }
      function before_doctype_public_identifier_state(c) {
        switch (c) {
          case 9:
          case 10:
          case 12:
          case 32:
            break;
          case 34:
            beginDoctypePublicId();
            tokenizer = doctype_public_identifier_double_quoted_state;
            break;
          case 39:
            beginDoctypePublicId();
            tokenizer = doctype_public_identifier_single_quoted_state;
            break;
          case 62:
            forcequirks();
            tokenizer = data_state;
            emitDoctype();
            break;
          case -1:
            forcequirks();
            emitDoctype();
            emitEOF();
            break;
          default:
            forcequirks();
            tokenizer = bogus_doctype_state;
            break;
        }
      }
      function doctype_public_identifier_double_quoted_state(c) {
        switch (c) {
          case 34:
            tokenizer = after_doctype_public_identifier_state;
            break;
          case 0:
            doctypepublicbuf.push(65533);
            break;
          case 62:
            forcequirks();
            tokenizer = data_state;
            emitDoctype();
            break;
          case -1:
            forcequirks();
            emitDoctype();
            emitEOF();
            break;
          default:
            doctypepublicbuf.push(c);
            break;
        }
      }
      function doctype_public_identifier_single_quoted_state(c) {
        switch (c) {
          case 39:
            tokenizer = after_doctype_public_identifier_state;
            break;
          case 0:
            doctypepublicbuf.push(65533);
            break;
          case 62:
            forcequirks();
            tokenizer = data_state;
            emitDoctype();
            break;
          case -1:
            forcequirks();
            emitDoctype();
            emitEOF();
            break;
          default:
            doctypepublicbuf.push(c);
            break;
        }
      }
      function after_doctype_public_identifier_state(c) {
        switch (c) {
          case 9:
          case 10:
          case 12:
          case 32:
            tokenizer = between_doctype_public_and_system_identifiers_state;
            break;
          case 62:
            tokenizer = data_state;
            emitDoctype();
            break;
          case 34:
            beginDoctypeSystemId();
            tokenizer = doctype_system_identifier_double_quoted_state;
            break;
          case 39:
            beginDoctypeSystemId();
            tokenizer = doctype_system_identifier_single_quoted_state;
            break;
          case -1:
            forcequirks();
            emitDoctype();
            emitEOF();
            break;
          default:
            forcequirks();
            tokenizer = bogus_doctype_state;
            break;
        }
      }
      function between_doctype_public_and_system_identifiers_state(c) {
        switch (c) {
          case 9:
          case 10:
          case 12:
          case 32:
            break;
          case 62:
            tokenizer = data_state;
            emitDoctype();
            break;
          case 34:
            beginDoctypeSystemId();
            tokenizer = doctype_system_identifier_double_quoted_state;
            break;
          case 39:
            beginDoctypeSystemId();
            tokenizer = doctype_system_identifier_single_quoted_state;
            break;
          case -1:
            forcequirks();
            emitDoctype();
            emitEOF();
            break;
          default:
            forcequirks();
            tokenizer = bogus_doctype_state;
            break;
        }
      }
      function after_doctype_system_keyword_state(c) {
        switch (c) {
          case 9:
          case 10:
          case 12:
          case 32:
            tokenizer = before_doctype_system_identifier_state;
            break;
          case 34:
            beginDoctypeSystemId();
            tokenizer = doctype_system_identifier_double_quoted_state;
            break;
          case 39:
            beginDoctypeSystemId();
            tokenizer = doctype_system_identifier_single_quoted_state;
            break;
          case 62:
            forcequirks();
            tokenizer = data_state;
            emitDoctype();
            break;
          case -1:
            forcequirks();
            emitDoctype();
            emitEOF();
            break;
          default:
            forcequirks();
            tokenizer = bogus_doctype_state;
            break;
        }
      }
      function before_doctype_system_identifier_state(c) {
        switch (c) {
          case 9:
          case 10:
          case 12:
          case 32:
            break;
          case 34:
            beginDoctypeSystemId();
            tokenizer = doctype_system_identifier_double_quoted_state;
            break;
          case 39:
            beginDoctypeSystemId();
            tokenizer = doctype_system_identifier_single_quoted_state;
            break;
          case 62:
            forcequirks();
            tokenizer = data_state;
            emitDoctype();
            break;
          case -1:
            forcequirks();
            emitDoctype();
            emitEOF();
            break;
          default:
            forcequirks();
            tokenizer = bogus_doctype_state;
            break;
        }
      }
      function doctype_system_identifier_double_quoted_state(c) {
        switch (c) {
          case 34:
            tokenizer = after_doctype_system_identifier_state;
            break;
          case 0:
            doctypesystembuf.push(65533);
            break;
          case 62:
            forcequirks();
            tokenizer = data_state;
            emitDoctype();
            break;
          case -1:
            forcequirks();
            emitDoctype();
            emitEOF();
            break;
          default:
            doctypesystembuf.push(c);
            break;
        }
      }
      function doctype_system_identifier_single_quoted_state(c) {
        switch (c) {
          case 39:
            tokenizer = after_doctype_system_identifier_state;
            break;
          case 0:
            doctypesystembuf.push(65533);
            break;
          case 62:
            forcequirks();
            tokenizer = data_state;
            emitDoctype();
            break;
          case -1:
            forcequirks();
            emitDoctype();
            emitEOF();
            break;
          default:
            doctypesystembuf.push(c);
            break;
        }
      }
      function after_doctype_system_identifier_state(c) {
        switch (c) {
          case 9:
          case 10:
          case 12:
          case 32:
            break;
          case 62:
            tokenizer = data_state;
            emitDoctype();
            break;
          case -1:
            forcequirks();
            emitDoctype();
            emitEOF();
            break;
          default:
            tokenizer = bogus_doctype_state;
            break;
        }
      }
      function bogus_doctype_state(c) {
        switch (c) {
          case 62:
            tokenizer = data_state;
            emitDoctype();
            break;
          case -1:
            emitDoctype();
            emitEOF();
            break;
        }
      }
      function cdata_section_state(c) {
        switch (c) {
          case 93:
            tokenizer = cdata_section_bracket_state;
            break;
          case -1:
            emitEOF();
            break;
          case 0:
            textIncludesNUL = true;
          default:
            emitCharsWhile(CDATATEXT) || textrun.push(c);
            break;
        }
      }
      function cdata_section_bracket_state(c) {
        switch (c) {
          case 93:
            tokenizer = cdata_section_end_state;
            break;
          default:
            textrun.push(93);
            reconsume(c, cdata_section_state);
            break;
        }
      }
      function cdata_section_end_state(c) {
        switch (c) {
          case 93:
            textrun.push(93);
            break;
          case 62:
            flushText();
            tokenizer = data_state;
            break;
          default:
            textrun.push(93);
            textrun.push(93);
            reconsume(c, cdata_section_state);
            break;
        }
      }
      function character_reference_state(c) {
        beginTempBuf();
        tempbuf.push(38);
        switch (c) {
          case 9:
          case 10:
          case 12:
          case 32:
          case 60:
          case 38:
          case -1:
            reconsume(c, character_reference_end_state);
            break;
          case 35:
            tempbuf.push(c);
            tokenizer = numeric_character_reference_state;
            break;
          default:
            reconsume(c, named_character_reference_state);
            break;
        }
      }
      function named_character_reference_state(c) {
        NAMEDCHARREF.lastIndex = nextchar;
        var matched = NAMEDCHARREF.exec(chars);
        if (!matched) throw new Error("should never happen");
        var name = matched[1];
        if (!name) {
          tokenizer = character_reference_end_state;
          return;
        }
        nextchar += name.length;
        pushAll(tempbuf, str2buf(name));
        switch (return_state) {
          case attribute_value_double_quoted_state:
          case attribute_value_single_quoted_state:
          case attribute_value_unquoted_state:
            if (name[name.length - 1] !== ";") {
              if (/[=A-Za-z0-9]/.test(chars[nextchar])) {
                tokenizer = character_reference_end_state;
                return;
              }
            }
            break;
        }
        beginTempBuf();
        var rv = namedCharRefs[name];
        if (typeof rv === "number") {
          tempbuf.push(rv);
        } else {
          pushAll(tempbuf, rv);
        }
        tokenizer = character_reference_end_state;
      }
      named_character_reference_state.lookahead = -NAMEDCHARREF_MAXLEN;
      function numeric_character_reference_state(c) {
        character_reference_code = 0;
        switch (c) {
          case 120:
          case 88:
            tempbuf.push(c);
            tokenizer = hexadecimal_character_reference_start_state;
            break;
          default:
            reconsume(c, decimal_character_reference_start_state);
            break;
        }
      }
      function hexadecimal_character_reference_start_state(c) {
        switch (c) {
          case 48:
          case 49:
          case 50:
          case 51:
          case 52:
          case 53:
          case 54:
          case 55:
          case 56:
          case 57:
          case 65:
          case 66:
          case 67:
          case 68:
          case 69:
          case 70:
          case 97:
          case 98:
          case 99:
          case 100:
          case 101:
          case 102:
            reconsume(c, hexadecimal_character_reference_state);
            break;
          default:
            reconsume(c, character_reference_end_state);
            break;
        }
      }
      function decimal_character_reference_start_state(c) {
        switch (c) {
          case 48:
          case 49:
          case 50:
          case 51:
          case 52:
          case 53:
          case 54:
          case 55:
          case 56:
          case 57:
            reconsume(c, decimal_character_reference_state);
            break;
          default:
            reconsume(c, character_reference_end_state);
            break;
        }
      }
      function hexadecimal_character_reference_state(c) {
        switch (c) {
          case 65:
          case 66:
          case 67:
          case 68:
          case 69:
          case 70:
            character_reference_code *= 16;
            character_reference_code += c - 55;
            break;
          case 97:
          case 98:
          case 99:
          case 100:
          case 101:
          case 102:
            character_reference_code *= 16;
            character_reference_code += c - 87;
            break;
          case 48:
          case 49:
          case 50:
          case 51:
          case 52:
          case 53:
          case 54:
          case 55:
          case 56:
          case 57:
            character_reference_code *= 16;
            character_reference_code += c - 48;
            break;
          case 59:
            tokenizer = numeric_character_reference_end_state;
            break;
          default:
            reconsume(c, numeric_character_reference_end_state);
            break;
        }
      }
      function decimal_character_reference_state(c) {
        switch (c) {
          case 48:
          case 49:
          case 50:
          case 51:
          case 52:
          case 53:
          case 54:
          case 55:
          case 56:
          case 57:
            character_reference_code *= 10;
            character_reference_code += c - 48;
            break;
          case 59:
            tokenizer = numeric_character_reference_end_state;
            break;
          default:
            reconsume(c, numeric_character_reference_end_state);
            break;
        }
      }
      function numeric_character_reference_end_state(c) {
        if (character_reference_code in numericCharRefReplacements) {
          character_reference_code = numericCharRefReplacements[character_reference_code];
        } else if (character_reference_code > 1114111 || character_reference_code >= 55296 && character_reference_code < 57344) {
          character_reference_code = 65533;
        }
        beginTempBuf();
        if (character_reference_code <= 65535) {
          tempbuf.push(character_reference_code);
        } else {
          character_reference_code = character_reference_code - 65536;
          tempbuf.push(55296 + (character_reference_code >> 10));
          tempbuf.push(56320 + (character_reference_code & 1023));
        }
        reconsume(c, character_reference_end_state);
      }
      function character_reference_end_state(c) {
        switch (return_state) {
          case attribute_value_double_quoted_state:
          case attribute_value_single_quoted_state:
          case attribute_value_unquoted_state:
            attrvaluebuf += buf2str(tempbuf);
            break;
          default:
            pushAll(textrun, tempbuf);
            break;
        }
        reconsume(c, return_state);
      }
      function initial_mode(t, value, arg3, arg4) {
        switch (t) {
          case 1:
            value = value.replace(LEADINGWS, "");
            if (value.length === 0) return;
            break;
          case 4:
            doc._appendChild(doc.createComment(value));
            return;
          case 5:
            var name = value;
            var publicid = arg3;
            var systemid = arg4;
            doc.appendChild(new DocumentType(doc, name, publicid, systemid));
            if (force_quirks || name.toLowerCase() !== "html" || quirkyPublicIds.test(publicid) || systemid && systemid.toLowerCase() === quirkySystemId || systemid === void 0 && conditionallyQuirkyPublicIds.test(publicid)) doc._quirks = true;else if (limitedQuirkyPublicIds.test(publicid) || systemid !== void 0 && conditionallyQuirkyPublicIds.test(publicid)) doc._limitedQuirks = true;
            parser = before_html_mode;
            return;
        }
        doc._quirks = true;
        parser = before_html_mode;
        parser(t, value, arg3, arg4);
      }
      function before_html_mode(t, value, arg3, arg4) {
        var elt;
        switch (t) {
          case 1:
            value = value.replace(LEADINGWS, "");
            if (value.length === 0) return;
            break;
          case 5:
            return;
          case 4:
            doc._appendChild(doc.createComment(value));
            return;
          case 2:
            if (value === "html") {
              elt = createHTMLElt(doc, value, arg3);
              stack.push(elt);
              doc.appendChild(elt);
              parser = before_head_mode;
              return;
            }
            break;
          case 3:
            switch (value) {
              case "html":
              case "head":
              case "body":
              case "br":
                break;
              default:
                return;
            }
        }
        elt = createHTMLElt(doc, "html", null);
        stack.push(elt);
        doc.appendChild(elt);
        parser = before_head_mode;
        parser(t, value, arg3, arg4);
      }
      function before_head_mode(t, value, arg3, arg4) {
        switch (t) {
          case 1:
            value = value.replace(LEADINGWS, "");
            if (value.length === 0) return;
            break;
          case 5:
            return;
          case 4:
            insertComment(value);
            return;
          case 2:
            switch (value) {
              case "html":
                in_body_mode(t, value, arg3, arg4);
                return;
              case "head":
                var elt = insertHTMLElement(value, arg3);
                head_element_pointer = elt;
                parser = in_head_mode;
                return;
            }
            break;
          case 3:
            switch (value) {
              case "html":
              case "head":
              case "body":
              case "br":
                break;
              default:
                return;
            }
        }
        before_head_mode(TAG, "head", null);
        parser(t, value, arg3, arg4);
      }
      function in_head_mode(t, value, arg3, arg4) {
        switch (t) {
          case 1:
            var ws = value.match(LEADINGWS);
            if (ws) {
              insertText(ws[0]);
              value = value.substring(ws[0].length);
            }
            if (value.length === 0) return;
            break;
          case 4:
            insertComment(value);
            return;
          case 5:
            return;
          case 2:
            switch (value) {
              case "html":
                in_body_mode(t, value, arg3, arg4);
                return;
              case "meta":
              case "base":
              case "basefont":
              case "bgsound":
              case "link":
                insertHTMLElement(value, arg3);
                stack.pop();
                return;
              case "title":
                parseRCDATA(value, arg3);
                return;
              case "noscript":
                if (!scripting_enabled) {
                  insertHTMLElement(value, arg3);
                  parser = in_head_noscript_mode;
                  return;
                }
              case "noframes":
              case "style":
                parseRawText(value, arg3);
                return;
              case "script":
                insertElement(function (doc2) {
                  var elt = createHTMLElt(doc2, value, arg3);
                  elt._parser_inserted = true;
                  elt._force_async = false;
                  if (fragment) elt._already_started = true;
                  flushText();
                  return elt;
                });
                tokenizer = script_data_state;
                originalInsertionMode = parser;
                parser = text_mode;
                return;
              case "template":
                insertHTMLElement(value, arg3);
                afe.insertMarker();
                frameset_ok = false;
                parser = in_template_mode;
                templateInsertionModes.push(parser);
                return;
              case "head":
                return;
            }
            break;
          case 3:
            switch (value) {
              case "head":
                stack.pop();
                parser = after_head_mode;
                return;
              case "body":
              case "html":
              case "br":
                break;
              case "template":
                if (!stack.contains("template")) {
                  return;
                }
                stack.generateImpliedEndTags(null, "thorough");
                stack.popTag("template");
                afe.clearToMarker();
                templateInsertionModes.pop();
                resetInsertionMode();
                return;
              default:
                return;
            }
            break;
        }
        in_head_mode(ENDTAG, "head", null);
        parser(t, value, arg3, arg4);
      }
      function in_head_noscript_mode(t, value, arg3, arg4) {
        switch (t) {
          case 5:
            return;
          case 4:
            in_head_mode(t, value);
            return;
          case 1:
            var ws = value.match(LEADINGWS);
            if (ws) {
              in_head_mode(t, ws[0]);
              value = value.substring(ws[0].length);
            }
            if (value.length === 0) return;
            break;
          case 2:
            switch (value) {
              case "html":
                in_body_mode(t, value, arg3, arg4);
                return;
              case "basefont":
              case "bgsound":
              case "link":
              case "meta":
              case "noframes":
              case "style":
                in_head_mode(t, value, arg3);
                return;
              case "head":
              case "noscript":
                return;
            }
            break;
          case 3:
            switch (value) {
              case "noscript":
                stack.pop();
                parser = in_head_mode;
                return;
              case "br":
                break;
              default:
                return;
            }
            break;
        }
        in_head_noscript_mode(ENDTAG, "noscript", null);
        parser(t, value, arg3, arg4);
      }
      function after_head_mode(t, value, arg3, arg4) {
        switch (t) {
          case 1:
            var ws = value.match(LEADINGWS);
            if (ws) {
              insertText(ws[0]);
              value = value.substring(ws[0].length);
            }
            if (value.length === 0) return;
            break;
          case 4:
            insertComment(value);
            return;
          case 5:
            return;
          case 2:
            switch (value) {
              case "html":
                in_body_mode(t, value, arg3, arg4);
                return;
              case "body":
                insertHTMLElement(value, arg3);
                frameset_ok = false;
                parser = in_body_mode;
                return;
              case "frameset":
                insertHTMLElement(value, arg3);
                parser = in_frameset_mode;
                return;
              case "base":
              case "basefont":
              case "bgsound":
              case "link":
              case "meta":
              case "noframes":
              case "script":
              case "style":
              case "template":
              case "title":
                stack.push(head_element_pointer);
                in_head_mode(TAG, value, arg3);
                stack.removeElement(head_element_pointer);
                return;
              case "head":
                return;
            }
            break;
          case 3:
            switch (value) {
              case "template":
                return in_head_mode(t, value, arg3, arg4);
              case "body":
              case "html":
              case "br":
                break;
              default:
                return;
            }
            break;
        }
        after_head_mode(TAG, "body", null);
        frameset_ok = true;
        parser(t, value, arg3, arg4);
      }
      function in_body_mode(t, value, arg3, arg4) {
        var body, i, node, elt;
        switch (t) {
          case 1:
            if (textIncludesNUL) {
              value = value.replace(NULCHARS, "");
              if (value.length === 0) return;
            }
            if (frameset_ok && NONWS.test(value)) frameset_ok = false;
            afereconstruct();
            insertText(value);
            return;
          case 5:
            return;
          case 4:
            insertComment(value);
            return;
          case -1:
            if (templateInsertionModes.length) {
              return in_template_mode(t);
            }
            stopParsing();
            return;
          case 2:
            switch (value) {
              case "html":
                if (stack.contains("template")) {
                  return;
                }
                transferAttributes(arg3, stack.elements[0]);
                return;
              case "base":
              case "basefont":
              case "bgsound":
              case "link":
              case "meta":
              case "noframes":
              case "script":
              case "style":
              case "template":
              case "title":
                in_head_mode(TAG, value, arg3);
                return;
              case "body":
                body = stack.elements[1];
                if (!body || !(body instanceof impl.HTMLBodyElement) || stack.contains("template")) return;
                frameset_ok = false;
                transferAttributes(arg3, body);
                return;
              case "frameset":
                if (!frameset_ok) return;
                body = stack.elements[1];
                if (!body || !(body instanceof impl.HTMLBodyElement)) return;
                if (body.parentNode) body.parentNode.removeChild(body);
                while (!(stack.top instanceof impl.HTMLHtmlElement)) stack.pop();
                insertHTMLElement(value, arg3);
                parser = in_frameset_mode;
                return;
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
              case "nav":
              case "ol":
              case "p":
              case "section":
              case "summary":
              case "ul":
                if (stack.inButtonScope("p")) in_body_mode(ENDTAG, "p");
                insertHTMLElement(value, arg3);
                return;
              case "menu":
                if (stack.inButtonScope("p")) in_body_mode(ENDTAG, "p");
                if (isA(stack.top, "menuitem")) {
                  stack.pop();
                }
                insertHTMLElement(value, arg3);
                return;
              case "h1":
              case "h2":
              case "h3":
              case "h4":
              case "h5":
              case "h6":
                if (stack.inButtonScope("p")) in_body_mode(ENDTAG, "p");
                if (stack.top instanceof impl.HTMLHeadingElement) stack.pop();
                insertHTMLElement(value, arg3);
                return;
              case "pre":
              case "listing":
                if (stack.inButtonScope("p")) in_body_mode(ENDTAG, "p");
                insertHTMLElement(value, arg3);
                ignore_linefeed = true;
                frameset_ok = false;
                return;
              case "form":
                if (form_element_pointer && !stack.contains("template")) return;
                if (stack.inButtonScope("p")) in_body_mode(ENDTAG, "p");
                elt = insertHTMLElement(value, arg3);
                if (!stack.contains("template")) form_element_pointer = elt;
                return;
              case "li":
                frameset_ok = false;
                for (i = stack.elements.length - 1; i >= 0; i--) {
                  node = stack.elements[i];
                  if (node instanceof impl.HTMLLIElement) {
                    in_body_mode(ENDTAG, "li");
                    break;
                  }
                  if (isA(node, specialSet) && !isA(node, addressdivpSet)) break;
                }
                if (stack.inButtonScope("p")) in_body_mode(ENDTAG, "p");
                insertHTMLElement(value, arg3);
                return;
              case "dd":
              case "dt":
                frameset_ok = false;
                for (i = stack.elements.length - 1; i >= 0; i--) {
                  node = stack.elements[i];
                  if (isA(node, dddtSet)) {
                    in_body_mode(ENDTAG, node.localName);
                    break;
                  }
                  if (isA(node, specialSet) && !isA(node, addressdivpSet)) break;
                }
                if (stack.inButtonScope("p")) in_body_mode(ENDTAG, "p");
                insertHTMLElement(value, arg3);
                return;
              case "plaintext":
                if (stack.inButtonScope("p")) in_body_mode(ENDTAG, "p");
                insertHTMLElement(value, arg3);
                tokenizer = plaintext_state;
                return;
              case "button":
                if (stack.inScope("button")) {
                  in_body_mode(ENDTAG, "button");
                  parser(t, value, arg3, arg4);
                } else {
                  afereconstruct();
                  insertHTMLElement(value, arg3);
                  frameset_ok = false;
                }
                return;
              case "a":
                var activeElement = afe.findElementByTag("a");
                if (activeElement) {
                  in_body_mode(ENDTAG, value);
                  afe.remove(activeElement);
                  stack.removeElement(activeElement);
                }
              case "b":
              case "big":
              case "code":
              case "em":
              case "font":
              case "i":
              case "s":
              case "small":
              case "strike":
              case "strong":
              case "tt":
              case "u":
                afereconstruct();
                afe.push(insertHTMLElement(value, arg3), arg3);
                return;
              case "nobr":
                afereconstruct();
                if (stack.inScope(value)) {
                  in_body_mode(ENDTAG, value);
                  afereconstruct();
                }
                afe.push(insertHTMLElement(value, arg3), arg3);
                return;
              case "applet":
              case "marquee":
              case "object":
                afereconstruct();
                insertHTMLElement(value, arg3);
                afe.insertMarker();
                frameset_ok = false;
                return;
              case "table":
                if (!doc._quirks && stack.inButtonScope("p")) {
                  in_body_mode(ENDTAG, "p");
                }
                insertHTMLElement(value, arg3);
                frameset_ok = false;
                parser = in_table_mode;
                return;
              case "area":
              case "br":
              case "embed":
              case "img":
              case "keygen":
              case "wbr":
                afereconstruct();
                insertHTMLElement(value, arg3);
                stack.pop();
                frameset_ok = false;
                return;
              case "input":
                afereconstruct();
                elt = insertHTMLElement(value, arg3);
                stack.pop();
                var type = elt.getAttribute("type");
                if (!type || type.toLowerCase() !== "hidden") frameset_ok = false;
                return;
              case "param":
              case "source":
              case "track":
                insertHTMLElement(value, arg3);
                stack.pop();
                return;
              case "hr":
                if (stack.inButtonScope("p")) in_body_mode(ENDTAG, "p");
                if (isA(stack.top, "menuitem")) {
                  stack.pop();
                }
                insertHTMLElement(value, arg3);
                stack.pop();
                frameset_ok = false;
                return;
              case "image":
                in_body_mode(TAG, "img", arg3, arg4);
                return;
              case "textarea":
                insertHTMLElement(value, arg3);
                ignore_linefeed = true;
                frameset_ok = false;
                tokenizer = rcdata_state;
                originalInsertionMode = parser;
                parser = text_mode;
                return;
              case "xmp":
                if (stack.inButtonScope("p")) in_body_mode(ENDTAG, "p");
                afereconstruct();
                frameset_ok = false;
                parseRawText(value, arg3);
                return;
              case "iframe":
                frameset_ok = false;
                parseRawText(value, arg3);
                return;
              case "noembed":
                parseRawText(value, arg3);
                return;
              case "noscript":
                if (scripting_enabled) {
                  parseRawText(value, arg3);
                  return;
                }
                break;
              case "select":
                afereconstruct();
                insertHTMLElement(value, arg3);
                frameset_ok = false;
                if (parser === in_table_mode || parser === in_caption_mode || parser === in_table_body_mode || parser === in_row_mode || parser === in_cell_mode) parser = in_select_in_table_mode;else parser = in_select_mode;
                return;
              case "optgroup":
              case "option":
                if (stack.top instanceof impl.HTMLOptionElement) {
                  in_body_mode(ENDTAG, "option");
                }
                afereconstruct();
                insertHTMLElement(value, arg3);
                return;
              case "menuitem":
                if (isA(stack.top, "menuitem")) {
                  stack.pop();
                }
                afereconstruct();
                insertHTMLElement(value, arg3);
                return;
              case "rb":
              case "rtc":
                if (stack.inScope("ruby")) {
                  stack.generateImpliedEndTags();
                }
                insertHTMLElement(value, arg3);
                return;
              case "rp":
              case "rt":
                if (stack.inScope("ruby")) {
                  stack.generateImpliedEndTags("rtc");
                }
                insertHTMLElement(value, arg3);
                return;
              case "math":
                afereconstruct();
                adjustMathMLAttributes(arg3);
                adjustForeignAttributes(arg3);
                insertForeignElement(value, arg3, NAMESPACE.MATHML);
                if (arg4) stack.pop();
                return;
              case "svg":
                afereconstruct();
                adjustSVGAttributes(arg3);
                adjustForeignAttributes(arg3);
                insertForeignElement(value, arg3, NAMESPACE.SVG);
                if (arg4) stack.pop();
                return;
              case "caption":
              case "col":
              case "colgroup":
              case "frame":
              case "head":
              case "tbody":
              case "td":
              case "tfoot":
              case "th":
              case "thead":
              case "tr":
                return;
            }
            afereconstruct();
            insertHTMLElement(value, arg3);
            return;
          case 3:
            switch (value) {
              case "template":
                in_head_mode(ENDTAG, value, arg3);
                return;
              case "body":
                if (!stack.inScope("body")) return;
                parser = after_body_mode;
                return;
              case "html":
                if (!stack.inScope("body")) return;
                parser = after_body_mode;
                parser(t, value, arg3);
                return;
              case "address":
              case "article":
              case "aside":
              case "blockquote":
              case "button":
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
              case "listing":
              case "main":
              case "menu":
              case "nav":
              case "ol":
              case "pre":
              case "section":
              case "summary":
              case "ul":
                if (!stack.inScope(value)) return;
                stack.generateImpliedEndTags();
                stack.popTag(value);
                return;
              case "form":
                if (!stack.contains("template")) {
                  var openform = form_element_pointer;
                  form_element_pointer = null;
                  if (!openform || !stack.elementInScope(openform)) return;
                  stack.generateImpliedEndTags();
                  stack.removeElement(openform);
                } else {
                  if (!stack.inScope("form")) return;
                  stack.generateImpliedEndTags();
                  stack.popTag("form");
                }
                return;
              case "p":
                if (!stack.inButtonScope(value)) {
                  in_body_mode(TAG, value, null);
                  parser(t, value, arg3, arg4);
                } else {
                  stack.generateImpliedEndTags(value);
                  stack.popTag(value);
                }
                return;
              case "li":
                if (!stack.inListItemScope(value)) return;
                stack.generateImpliedEndTags(value);
                stack.popTag(value);
                return;
              case "dd":
              case "dt":
                if (!stack.inScope(value)) return;
                stack.generateImpliedEndTags(value);
                stack.popTag(value);
                return;
              case "h1":
              case "h2":
              case "h3":
              case "h4":
              case "h5":
              case "h6":
                if (!stack.elementTypeInScope(impl.HTMLHeadingElement)) return;
                stack.generateImpliedEndTags();
                stack.popElementType(impl.HTMLHeadingElement);
                return;
              case "sarcasm":
                break;
              case "a":
              case "b":
              case "big":
              case "code":
              case "em":
              case "font":
              case "i":
              case "nobr":
              case "s":
              case "small":
              case "strike":
              case "strong":
              case "tt":
              case "u":
                var result = adoptionAgency(value);
                if (result) return;
                break;
              case "applet":
              case "marquee":
              case "object":
                if (!stack.inScope(value)) return;
                stack.generateImpliedEndTags();
                stack.popTag(value);
                afe.clearToMarker();
                return;
              case "br":
                in_body_mode(TAG, value, null);
                return;
            }
            for (i = stack.elements.length - 1; i >= 0; i--) {
              node = stack.elements[i];
              if (isA(node, value)) {
                stack.generateImpliedEndTags(value);
                stack.popElement(node);
                break;
              } else if (isA(node, specialSet)) {
                return;
              }
            }
            return;
        }
      }
      function text_mode(t, value, arg3, arg4) {
        switch (t) {
          case 1:
            insertText(value);
            return;
          case -1:
            if (stack.top instanceof impl.HTMLScriptElement) stack.top._already_started = true;
            stack.pop();
            parser = originalInsertionMode;
            parser(t);
            return;
          case 3:
            if (value === "script") {
              handleScriptEnd();
            } else {
              stack.pop();
              parser = originalInsertionMode;
            }
            return;
          default:
            return;
        }
      }
      function in_table_mode(t, value, arg3, arg4) {
        function getTypeAttr(attrs) {
          for (var i = 0, n = attrs.length; i < n; i++) {
            if (attrs[i][0] === "type") return attrs[i][1].toLowerCase();
          }
          return null;
        }
        switch (t) {
          case 1:
            if (text_integration_mode) {
              in_body_mode(t, value, arg3, arg4);
              return;
            } else if (isA(stack.top, tablesectionrowSet)) {
              pending_table_text = [];
              originalInsertionMode = parser;
              parser = in_table_text_mode;
              parser(t, value, arg3, arg4);
              return;
            }
            break;
          case 4:
            insertComment(value);
            return;
          case 5:
            return;
          case 2:
            switch (value) {
              case "caption":
                stack.clearToContext(tableContextSet);
                afe.insertMarker();
                insertHTMLElement(value, arg3);
                parser = in_caption_mode;
                return;
              case "colgroup":
                stack.clearToContext(tableContextSet);
                insertHTMLElement(value, arg3);
                parser = in_column_group_mode;
                return;
              case "col":
                in_table_mode(TAG, "colgroup", null);
                parser(t, value, arg3, arg4);
                return;
              case "tbody":
              case "tfoot":
              case "thead":
                stack.clearToContext(tableContextSet);
                insertHTMLElement(value, arg3);
                parser = in_table_body_mode;
                return;
              case "td":
              case "th":
              case "tr":
                in_table_mode(TAG, "tbody", null);
                parser(t, value, arg3, arg4);
                return;
              case "table":
                if (!stack.inTableScope(value)) {
                  return;
                }
                in_table_mode(ENDTAG, value);
                parser(t, value, arg3, arg4);
                return;
              case "style":
              case "script":
              case "template":
                in_head_mode(t, value, arg3, arg4);
                return;
              case "input":
                var type = getTypeAttr(arg3);
                if (type !== "hidden") break;
                insertHTMLElement(value, arg3);
                stack.pop();
                return;
              case "form":
                if (form_element_pointer || stack.contains("template")) return;
                form_element_pointer = insertHTMLElement(value, arg3);
                stack.popElement(form_element_pointer);
                return;
            }
            break;
          case 3:
            switch (value) {
              case "table":
                if (!stack.inTableScope(value)) return;
                stack.popTag(value);
                resetInsertionMode();
                return;
              case "body":
              case "caption":
              case "col":
              case "colgroup":
              case "html":
              case "tbody":
              case "td":
              case "tfoot":
              case "th":
              case "thead":
              case "tr":
                return;
              case "template":
                in_head_mode(t, value, arg3, arg4);
                return;
            }
            break;
          case -1:
            in_body_mode(t, value, arg3, arg4);
            return;
        }
        foster_parent_mode = true;
        in_body_mode(t, value, arg3, arg4);
        foster_parent_mode = false;
      }
      function in_table_text_mode(t, value, arg3, arg4) {
        if (t === TEXT) {
          if (textIncludesNUL) {
            value = value.replace(NULCHARS, "");
            if (value.length === 0) return;
          }
          pending_table_text.push(value);
        } else {
          var s = pending_table_text.join("");
          pending_table_text.length = 0;
          if (NONWS.test(s)) {
            foster_parent_mode = true;
            in_body_mode(TEXT, s);
            foster_parent_mode = false;
          } else {
            insertText(s);
          }
          parser = originalInsertionMode;
          parser(t, value, arg3, arg4);
        }
      }
      function in_caption_mode(t, value, arg3, arg4) {
        function end_caption() {
          if (!stack.inTableScope("caption")) return false;
          stack.generateImpliedEndTags();
          stack.popTag("caption");
          afe.clearToMarker();
          parser = in_table_mode;
          return true;
        }
        switch (t) {
          case 2:
            switch (value) {
              case "caption":
              case "col":
              case "colgroup":
              case "tbody":
              case "td":
              case "tfoot":
              case "th":
              case "thead":
              case "tr":
                if (end_caption()) parser(t, value, arg3, arg4);
                return;
            }
            break;
          case 3:
            switch (value) {
              case "caption":
                end_caption();
                return;
              case "table":
                if (end_caption()) parser(t, value, arg3, arg4);
                return;
              case "body":
              case "col":
              case "colgroup":
              case "html":
              case "tbody":
              case "td":
              case "tfoot":
              case "th":
              case "thead":
              case "tr":
                return;
            }
            break;
        }
        in_body_mode(t, value, arg3, arg4);
      }
      function in_column_group_mode(t, value, arg3, arg4) {
        switch (t) {
          case 1:
            var ws = value.match(LEADINGWS);
            if (ws) {
              insertText(ws[0]);
              value = value.substring(ws[0].length);
            }
            if (value.length === 0) return;
            break;
          case 4:
            insertComment(value);
            return;
          case 5:
            return;
          case 2:
            switch (value) {
              case "html":
                in_body_mode(t, value, arg3, arg4);
                return;
              case "col":
                insertHTMLElement(value, arg3);
                stack.pop();
                return;
              case "template":
                in_head_mode(t, value, arg3, arg4);
                return;
            }
            break;
          case 3:
            switch (value) {
              case "colgroup":
                if (!isA(stack.top, "colgroup")) {
                  return;
                }
                stack.pop();
                parser = in_table_mode;
                return;
              case "col":
                return;
              case "template":
                in_head_mode(t, value, arg3, arg4);
                return;
            }
            break;
          case -1:
            in_body_mode(t, value, arg3, arg4);
            return;
        }
        if (!isA(stack.top, "colgroup")) {
          return;
        }
        in_column_group_mode(ENDTAG, "colgroup");
        parser(t, value, arg3, arg4);
      }
      function in_table_body_mode(t, value, arg3, arg4) {
        function endsect() {
          if (!stack.inTableScope("tbody") && !stack.inTableScope("thead") && !stack.inTableScope("tfoot")) return;
          stack.clearToContext(tableBodyContextSet);
          in_table_body_mode(ENDTAG, stack.top.localName, null);
          parser(t, value, arg3, arg4);
        }
        switch (t) {
          case 2:
            switch (value) {
              case "tr":
                stack.clearToContext(tableBodyContextSet);
                insertHTMLElement(value, arg3);
                parser = in_row_mode;
                return;
              case "th":
              case "td":
                in_table_body_mode(TAG, "tr", null);
                parser(t, value, arg3, arg4);
                return;
              case "caption":
              case "col":
              case "colgroup":
              case "tbody":
              case "tfoot":
              case "thead":
                endsect();
                return;
            }
            break;
          case 3:
            switch (value) {
              case "table":
                endsect();
                return;
              case "tbody":
              case "tfoot":
              case "thead":
                if (stack.inTableScope(value)) {
                  stack.clearToContext(tableBodyContextSet);
                  stack.pop();
                  parser = in_table_mode;
                }
                return;
              case "body":
              case "caption":
              case "col":
              case "colgroup":
              case "html":
              case "td":
              case "th":
              case "tr":
                return;
            }
            break;
        }
        in_table_mode(t, value, arg3, arg4);
      }
      function in_row_mode(t, value, arg3, arg4) {
        function endrow() {
          if (!stack.inTableScope("tr")) return false;
          stack.clearToContext(tableRowContextSet);
          stack.pop();
          parser = in_table_body_mode;
          return true;
        }
        switch (t) {
          case 2:
            switch (value) {
              case "th":
              case "td":
                stack.clearToContext(tableRowContextSet);
                insertHTMLElement(value, arg3);
                parser = in_cell_mode;
                afe.insertMarker();
                return;
              case "caption":
              case "col":
              case "colgroup":
              case "tbody":
              case "tfoot":
              case "thead":
              case "tr":
                if (endrow()) parser(t, value, arg3, arg4);
                return;
            }
            break;
          case 3:
            switch (value) {
              case "tr":
                endrow();
                return;
              case "table":
                if (endrow()) parser(t, value, arg3, arg4);
                return;
              case "tbody":
              case "tfoot":
              case "thead":
                if (stack.inTableScope(value)) {
                  if (endrow()) parser(t, value, arg3, arg4);
                }
                return;
              case "body":
              case "caption":
              case "col":
              case "colgroup":
              case "html":
              case "td":
              case "th":
                return;
            }
            break;
        }
        in_table_mode(t, value, arg3, arg4);
      }
      function in_cell_mode(t, value, arg3, arg4) {
        switch (t) {
          case 2:
            switch (value) {
              case "caption":
              case "col":
              case "colgroup":
              case "tbody":
              case "td":
              case "tfoot":
              case "th":
              case "thead":
              case "tr":
                if (stack.inTableScope("td")) {
                  in_cell_mode(ENDTAG, "td");
                  parser(t, value, arg3, arg4);
                } else if (stack.inTableScope("th")) {
                  in_cell_mode(ENDTAG, "th");
                  parser(t, value, arg3, arg4);
                }
                return;
            }
            break;
          case 3:
            switch (value) {
              case "td":
              case "th":
                if (!stack.inTableScope(value)) return;
                stack.generateImpliedEndTags();
                stack.popTag(value);
                afe.clearToMarker();
                parser = in_row_mode;
                return;
              case "body":
              case "caption":
              case "col":
              case "colgroup":
              case "html":
                return;
              case "table":
              case "tbody":
              case "tfoot":
              case "thead":
              case "tr":
                if (!stack.inTableScope(value)) return;
                in_cell_mode(ENDTAG, stack.inTableScope("td") ? "td" : "th");
                parser(t, value, arg3, arg4);
                return;
            }
            break;
        }
        in_body_mode(t, value, arg3, arg4);
      }
      function in_select_mode(t, value, arg3, arg4) {
        switch (t) {
          case 1:
            if (textIncludesNUL) {
              value = value.replace(NULCHARS, "");
              if (value.length === 0) return;
            }
            insertText(value);
            return;
          case 4:
            insertComment(value);
            return;
          case 5:
            return;
          case -1:
            in_body_mode(t, value, arg3, arg4);
            return;
          case 2:
            switch (value) {
              case "html":
                in_body_mode(t, value, arg3, arg4);
                return;
              case "option":
                if (stack.top instanceof impl.HTMLOptionElement) in_select_mode(ENDTAG, value);
                insertHTMLElement(value, arg3);
                return;
              case "optgroup":
                if (stack.top instanceof impl.HTMLOptionElement) in_select_mode(ENDTAG, "option");
                if (stack.top instanceof impl.HTMLOptGroupElement) in_select_mode(ENDTAG, value);
                insertHTMLElement(value, arg3);
                return;
              case "select":
                in_select_mode(ENDTAG, value);
                return;
              case "input":
              case "keygen":
              case "textarea":
                if (!stack.inSelectScope("select")) return;
                in_select_mode(ENDTAG, "select");
                parser(t, value, arg3, arg4);
                return;
              case "script":
              case "template":
                in_head_mode(t, value, arg3, arg4);
                return;
            }
            break;
          case 3:
            switch (value) {
              case "optgroup":
                if (stack.top instanceof impl.HTMLOptionElement && stack.elements[stack.elements.length - 2] instanceof impl.HTMLOptGroupElement) {
                  in_select_mode(ENDTAG, "option");
                }
                if (stack.top instanceof impl.HTMLOptGroupElement) stack.pop();
                return;
              case "option":
                if (stack.top instanceof impl.HTMLOptionElement) stack.pop();
                return;
              case "select":
                if (!stack.inSelectScope(value)) return;
                stack.popTag(value);
                resetInsertionMode();
                return;
              case "template":
                in_head_mode(t, value, arg3, arg4);
                return;
            }
            break;
        }
      }
      function in_select_in_table_mode(t, value, arg3, arg4) {
        switch (value) {
          case "caption":
          case "table":
          case "tbody":
          case "tfoot":
          case "thead":
          case "tr":
          case "td":
          case "th":
            switch (t) {
              case 2:
                in_select_in_table_mode(ENDTAG, "select");
                parser(t, value, arg3, arg4);
                return;
              case 3:
                if (stack.inTableScope(value)) {
                  in_select_in_table_mode(ENDTAG, "select");
                  parser(t, value, arg3, arg4);
                }
                return;
            }
        }
        in_select_mode(t, value, arg3, arg4);
      }
      function in_template_mode(t, value, arg3, arg4) {
        function switchModeAndReprocess(mode) {
          parser = mode;
          templateInsertionModes[templateInsertionModes.length - 1] = parser;
          parser(t, value, arg3, arg4);
        }
        switch (t) {
          case 1:
          case 4:
          case 5:
            in_body_mode(t, value, arg3, arg4);
            return;
          case -1:
            if (!stack.contains("template")) {
              stopParsing();
            } else {
              stack.popTag("template");
              afe.clearToMarker();
              templateInsertionModes.pop();
              resetInsertionMode();
              parser(t, value, arg3, arg4);
            }
            return;
          case 2:
            switch (value) {
              case "base":
              case "basefont":
              case "bgsound":
              case "link":
              case "meta":
              case "noframes":
              case "script":
              case "style":
              case "template":
              case "title":
                in_head_mode(t, value, arg3, arg4);
                return;
              case "caption":
              case "colgroup":
              case "tbody":
              case "tfoot":
              case "thead":
                switchModeAndReprocess(in_table_mode);
                return;
              case "col":
                switchModeAndReprocess(in_column_group_mode);
                return;
              case "tr":
                switchModeAndReprocess(in_table_body_mode);
                return;
              case "td":
              case "th":
                switchModeAndReprocess(in_row_mode);
                return;
            }
            switchModeAndReprocess(in_body_mode);
            return;
          case 3:
            switch (value) {
              case "template":
                in_head_mode(t, value, arg3, arg4);
                return;
              default:
                return;
            }
        }
      }
      function after_body_mode(t, value, arg3, arg4) {
        switch (t) {
          case 1:
            if (NONWS.test(value)) break;
            in_body_mode(t, value);
            return;
          case 4:
            stack.elements[0]._appendChild(doc.createComment(value));
            return;
          case 5:
            return;
          case -1:
            stopParsing();
            return;
          case 2:
            if (value === "html") {
              in_body_mode(t, value, arg3, arg4);
              return;
            }
            break;
          case 3:
            if (value === "html") {
              if (fragment) return;
              parser = after_after_body_mode;
              return;
            }
            break;
        }
        parser = in_body_mode;
        parser(t, value, arg3, arg4);
      }
      function in_frameset_mode(t, value, arg3, arg4) {
        switch (t) {
          case 1:
            value = value.replace(ALLNONWS, "");
            if (value.length > 0) insertText(value);
            return;
          case 4:
            insertComment(value);
            return;
          case 5:
            return;
          case -1:
            stopParsing();
            return;
          case 2:
            switch (value) {
              case "html":
                in_body_mode(t, value, arg3, arg4);
                return;
              case "frameset":
                insertHTMLElement(value, arg3);
                return;
              case "frame":
                insertHTMLElement(value, arg3);
                stack.pop();
                return;
              case "noframes":
                in_head_mode(t, value, arg3, arg4);
                return;
            }
            break;
          case 3:
            if (value === "frameset") {
              if (fragment && stack.top instanceof impl.HTMLHtmlElement) return;
              stack.pop();
              if (!fragment && !(stack.top instanceof impl.HTMLFrameSetElement)) parser = after_frameset_mode;
              return;
            }
            break;
        }
      }
      function after_frameset_mode(t, value, arg3, arg4) {
        switch (t) {
          case 1:
            value = value.replace(ALLNONWS, "");
            if (value.length > 0) insertText(value);
            return;
          case 4:
            insertComment(value);
            return;
          case 5:
            return;
          case -1:
            stopParsing();
            return;
          case 2:
            switch (value) {
              case "html":
                in_body_mode(t, value, arg3, arg4);
                return;
              case "noframes":
                in_head_mode(t, value, arg3, arg4);
                return;
            }
            break;
          case 3:
            if (value === "html") {
              parser = after_after_frameset_mode;
              return;
            }
            break;
        }
      }
      function after_after_body_mode(t, value, arg3, arg4) {
        switch (t) {
          case 1:
            if (NONWS.test(value)) break;
            in_body_mode(t, value, arg3, arg4);
            return;
          case 4:
            doc._appendChild(doc.createComment(value));
            return;
          case 5:
            in_body_mode(t, value, arg3, arg4);
            return;
          case -1:
            stopParsing();
            return;
          case 2:
            if (value === "html") {
              in_body_mode(t, value, arg3, arg4);
              return;
            }
            break;
        }
        parser = in_body_mode;
        parser(t, value, arg3, arg4);
      }
      function after_after_frameset_mode(t, value, arg3, arg4) {
        switch (t) {
          case 1:
            value = value.replace(ALLNONWS, "");
            if (value.length > 0) in_body_mode(t, value, arg3, arg4);
            return;
          case 4:
            doc._appendChild(doc.createComment(value));
            return;
          case 5:
            in_body_mode(t, value, arg3, arg4);
            return;
          case -1:
            stopParsing();
            return;
          case 2:
            switch (value) {
              case "html":
                in_body_mode(t, value, arg3, arg4);
                return;
              case "noframes":
                in_head_mode(t, value, arg3, arg4);
                return;
            }
            break;
        }
      }
      function insertForeignToken(t, value, arg3, arg4) {
        function isHTMLFont(attrs) {
          for (var i2 = 0, n = attrs.length; i2 < n; i2++) {
            switch (attrs[i2][0]) {
              case "color":
              case "face":
              case "size":
                return true;
            }
          }
          return false;
        }
        var current;
        switch (t) {
          case 1:
            if (frameset_ok && NONWSNONNUL.test(value)) frameset_ok = false;
            if (textIncludesNUL) {
              value = value.replace(NULCHARS, "\uFFFD");
            }
            insertText(value);
            return;
          case 4:
            insertComment(value);
            return;
          case 5:
            return;
          case 2:
            switch (value) {
              case "font":
                if (!isHTMLFont(arg3)) break;
              case "b":
              case "big":
              case "blockquote":
              case "body":
              case "br":
              case "center":
              case "code":
              case "dd":
              case "div":
              case "dl":
              case "dt":
              case "em":
              case "embed":
              case "h1":
              case "h2":
              case "h3":
              case "h4":
              case "h5":
              case "h6":
              case "head":
              case "hr":
              case "i":
              case "img":
              case "li":
              case "listing":
              case "menu":
              case "meta":
              case "nobr":
              case "ol":
              case "p":
              case "pre":
              case "ruby":
              case "s":
              case "small":
              case "span":
              case "strong":
              case "strike":
              case "sub":
              case "sup":
              case "table":
              case "tt":
              case "u":
              case "ul":
              case "var":
                if (fragment) {
                  break;
                }
                do {
                  stack.pop();
                  current = stack.top;
                } while (current.namespaceURI !== NAMESPACE.HTML && !isMathmlTextIntegrationPoint(current) && !isHTMLIntegrationPoint(current));
                insertToken(t, value, arg3, arg4);
                return;
            }
            current = stack.elements.length === 1 && fragment ? fragmentContext : stack.top;
            if (current.namespaceURI === NAMESPACE.MATHML) {
              adjustMathMLAttributes(arg3);
            } else if (current.namespaceURI === NAMESPACE.SVG) {
              value = adjustSVGTagName(value);
              adjustSVGAttributes(arg3);
            }
            adjustForeignAttributes(arg3);
            insertForeignElement(value, arg3, current.namespaceURI);
            if (arg4) {
              if (value === "script" && current.namespaceURI === NAMESPACE.SVG) ;
              stack.pop();
            }
            return;
          case 3:
            current = stack.top;
            if (value === "script" && current.namespaceURI === NAMESPACE.SVG && current.localName === "script") {
              stack.pop();
            } else {
              var i = stack.elements.length - 1;
              var node = stack.elements[i];
              for (;;) {
                if (node.localName.toLowerCase() === value) {
                  stack.popElement(node);
                  break;
                }
                node = stack.elements[--i];
                if (node.namespaceURI !== NAMESPACE.HTML) continue;
                parser(t, value, arg3, arg4);
                break;
              }
            }
            return;
        }
      }
      htmlparser.testTokenizer = function (input, initialState, lastStartTag, charbychar) {
        var tokens = [];
        switch (initialState) {
          case "PCDATA state":
            tokenizer = data_state;
            break;
          case "RCDATA state":
            tokenizer = rcdata_state;
            break;
          case "RAWTEXT state":
            tokenizer = rawtext_state;
            break;
          case "PLAINTEXT state":
            tokenizer = plaintext_state;
            break;
        }
        if (lastStartTag) {
          lasttagname = lastStartTag;
        }
        insertToken = function (t, value, arg3, arg4) {
          flushText();
          switch (t) {
            case 1:
              if (tokens.length > 0 && tokens[tokens.length - 1][0] === "Character") {
                tokens[tokens.length - 1][1] += value;
              } else tokens.push(["Character", value]);
              break;
            case 4:
              tokens.push(["Comment", value]);
              break;
            case 5:
              tokens.push(["DOCTYPE", value, arg3 === void 0 ? null : arg3, arg4 === void 0 ? null : arg4, !force_quirks]);
              break;
            case 2:
              var attrs = /* @__PURE__ */Object.create(null);
              for (var i2 = 0; i2 < arg3.length; i2++) {
                var a = arg3[i2];
                if (a.length === 1) {
                  attrs[a[0]] = "";
                } else {
                  attrs[a[0]] = a[1];
                }
              }
              var token = ["StartTag", value, attrs];
              if (arg4) token.push(true);
              tokens.push(token);
              break;
            case 3:
              tokens.push(["EndTag", value]);
              break;
          }
        };
        if (!charbychar) {
          this.parse(input, true);
        } else {
          for (var i = 0; i < input.length; i++) {
            this.parse(input[i]);
          }
          this.parse("", true);
        }
        return tokens;
      };
      return htmlparser;
    }
  }
});

// external/npm/node_modules/domino/lib/DOMImplementation.js
var require_DOMImplementation = /*#__PURE__*/__commonJS({
  "external/npm/node_modules/domino/lib/DOMImplementation.js"(exports, module) {

    module.exports = DOMImplementation;
    var Document = require_Document();
    var DocumentType = require_DocumentType();
    var HTMLParser = require_HTMLParser();
    var utils = require_utils();
    var xml = require_xmlnames();
    function DOMImplementation(contextObject) {
      this.contextObject = contextObject;
    }
    var supportedFeatures = {
      "xml": {
        "": true,
        "1.0": true,
        "2.0": true
      },
      "core": {
        "": true,
        "2.0": true
      },
      "html": {
        "": true,
        "1.0": true,
        "2.0": true
      },
      "xhtml": {
        "": true,
        "1.0": true,
        "2.0": true
      }
    };
    DOMImplementation.prototype = {
      hasFeature: function hasFeature(feature, version) {
        var f = supportedFeatures[(feature || "").toLowerCase()];
        return f && f[version || ""] || false;
      },
      createDocumentType: function createDocumentType(qualifiedName, publicId, systemId) {
        if (!xml.isValidQName(qualifiedName)) utils.InvalidCharacterError();
        return new DocumentType(this.contextObject, qualifiedName, publicId, systemId);
      },
      createDocument: function createDocument(namespace, qualifiedName, doctype) {
        var d = new Document(false, null);
        var e;
        if (qualifiedName) e = d.createElementNS(namespace, qualifiedName);else e = null;
        if (doctype) {
          d.appendChild(doctype);
        }
        if (e) d.appendChild(e);
        if (namespace === utils.NAMESPACE.HTML) {
          d._contentType = "application/xhtml+xml";
        } else if (namespace === utils.NAMESPACE.SVG) {
          d._contentType = "image/svg+xml";
        } else {
          d._contentType = "application/xml";
        }
        return d;
      },
      createHTMLDocument: function createHTMLDocument(titleText) {
        var d = new Document(true, null);
        d.appendChild(new DocumentType(d, "html"));
        var html = d.createElement("html");
        d.appendChild(html);
        var head = d.createElement("head");
        html.appendChild(head);
        if (titleText !== void 0) {
          var title = d.createElement("title");
          head.appendChild(title);
          title.appendChild(d.createTextNode(titleText));
        }
        html.appendChild(d.createElement("body"));
        d.modclock = 1;
        return d;
      },
      mozSetOutputMutationHandler: function (doc, handler) {
        doc.mutationHandler = handler;
      },
      mozGetInputMutationHandler: function (doc) {
        utils.nyi();
      },
      mozHTMLParser: HTMLParser
    };
  }
});

// external/npm/node_modules/domino/lib/Location.js
var require_Location = /*#__PURE__*/__commonJS({
  "external/npm/node_modules/domino/lib/Location.js"(exports, module) {

    var URL = require_URL();
    var URLUtils = require_URLUtils();
    module.exports = Location;
    function Location(window, href) {
      this._window = window;
      this._href = href;
    }
    Location.prototype = Object.create(URLUtils.prototype, {
      constructor: {
        value: Location
      },
      href: {
        get: function () {
          return this._href;
        },
        set: function (v) {
          this.assign(v);
        }
      },
      assign: {
        value: function (url) {
          var current = new URL(this._href);
          var newurl = current.resolve(url);
          this._href = newurl;
        }
      },
      replace: {
        value: function (url) {
          this.assign(url);
        }
      },
      reload: {
        value: function () {
          this.assign(this.href);
        }
      },
      toString: {
        value: function () {
          return this.href;
        }
      }
    });
  }
});

// external/npm/node_modules/domino/lib/NavigatorID.js
var require_NavigatorID = /*#__PURE__*/__commonJS({
  "external/npm/node_modules/domino/lib/NavigatorID.js"(exports, module) {

    var NavigatorID = Object.create(null, {
      appCodeName: {
        value: "Mozilla"
      },
      appName: {
        value: "Netscape"
      },
      appVersion: {
        value: "4.0"
      },
      platform: {
        value: ""
      },
      product: {
        value: "Gecko"
      },
      productSub: {
        value: "20100101"
      },
      userAgent: {
        value: ""
      },
      vendor: {
        value: ""
      },
      vendorSub: {
        value: ""
      },
      taintEnabled: {
        value: function () {
          return false;
        }
      }
    });
    module.exports = NavigatorID;
  }
});

// external/npm/node_modules/domino/lib/WindowTimers.js
var require_WindowTimers = /*#__PURE__*/__commonJS({
  "external/npm/node_modules/domino/lib/WindowTimers.js"(exports, module) {

    var WindowTimers = {
      setTimeout,
      clearTimeout,
      setInterval,
      clearInterval
    };
    module.exports = WindowTimers;
  }
});

// external/npm/node_modules/domino/lib/impl.js
var require_impl = /*#__PURE__*/__commonJS({
  "external/npm/node_modules/domino/lib/impl.js"(exports, module) {

    var utils = require_utils();
    exports = module.exports = {
      CSSStyleDeclaration: require_CSSStyleDeclaration(),
      CharacterData: require_CharacterData(),
      Comment: require_Comment(),
      DOMException: require_DOMException(),
      DOMImplementation: require_DOMImplementation(),
      DOMTokenList: require_DOMTokenList(),
      Document: require_Document(),
      DocumentFragment: require_DocumentFragment(),
      DocumentType: require_DocumentType(),
      Element: require_Element(),
      HTMLParser: require_HTMLParser(),
      NamedNodeMap: require_NamedNodeMap(),
      Node: require_Node(),
      NodeList: require_NodeList(),
      NodeFilter: require_NodeFilter(),
      ProcessingInstruction: require_ProcessingInstruction(),
      Text: require_Text(),
      Window: require_Window()
    };
    utils.merge(exports, require_events());
    utils.merge(exports, require_htmlelts().elements);
    utils.merge(exports, require_svg().elements);
  }
});

// external/npm/node_modules/domino/lib/Window.js
var require_Window = /*#__PURE__*/__commonJS({
  "external/npm/node_modules/domino/lib/Window.js"(exports, module) {

    var DOMImplementation = require_DOMImplementation();
    var EventTarget = require_EventTarget();
    var Location = require_Location();
    var utils = require_utils();
    module.exports = Window;
    function Window(document) {
      this.document = document || new DOMImplementation(null).createHTMLDocument("");
      this.document._scripting_enabled = true;
      this.document.defaultView = this;
      this.location = new Location(this, this.document._address || "about:blank");
    }
    Window.prototype = Object.create(EventTarget.prototype, {
      console: {
        value: console
      },
      history: {
        value: {
          back: utils.nyi,
          forward: utils.nyi,
          go: utils.nyi
        }
      },
      navigator: {
        value: require_NavigatorID()
      },
      window: {
        get: function () {
          return this;
        }
      },
      self: {
        get: function () {
          return this;
        }
      },
      frames: {
        get: function () {
          return this;
        }
      },
      parent: {
        get: function () {
          return this;
        }
      },
      top: {
        get: function () {
          return this;
        }
      },
      length: {
        value: 0
      },
      frameElement: {
        value: null
      },
      opener: {
        value: null
      },
      onload: {
        get: function () {
          return this._getEventHandler("load");
        },
        set: function (v) {
          this._setEventHandler("load", v);
        }
      },
      getComputedStyle: {
        value: function getComputedStyle(elt) {
          return elt.style;
        }
      }
    });
    utils.expose(require_WindowTimers(), Window);
    utils.expose(require_impl(), Window);
  }
});

// external/npm/node_modules/domino/lib/index.js
var require_lib = /*#__PURE__*/__commonJS({
  "external/npm/node_modules/domino/lib/index.js"(exports) {
    var DOMImplementation = require_DOMImplementation();
    var HTMLParser = require_HTMLParser();
    require_Window();
    var impl = require_impl();
    exports.createDOMImplementation = function () {
      return new DOMImplementation(null);
    };
    exports.createDocument = function (html, force) {
      if (html || force) {
        var parser = new HTMLParser();
        parser.parse(html || "", true);
        return parser.document();
      }
      return new DOMImplementation(null).createHTMLDocument("");
    };
    exports.createIncrementalHTMLParser = function () {
      var parser = new HTMLParser();
      return {
        write: function (s) {
          if (s.length > 0) {
            parser.parse(s, false, function () {
              return true;
            });
          }
        },
        end: function (s) {
          parser.parse(s || "", true, function () {
            return true;
          });
        },
        process: function (shouldPauseFunc) {
          return parser.parse("", false, shouldPauseFunc);
        },
        document: function () {
          return parser.document();
        }
      };
    };
    exports.createWindow = function (html, address) {
      var document = exports.createDocument(html);
      if (address !== void 0) {
        document._address = address;
      }
      return new impl.Window(document);
    };
    exports.impl = impl;
  }
});
var domino = /*#__PURE__*/require_lib();
function setDomTypes() {
  // Make all Domino types available in the global env.
  Object.assign(global, domino.impl);
  global['KeyboardEvent'] = domino.impl.Event;
}
/**
 * Parses a document string to a Document object.
 */
function parseDocument(html, url = '/') {
  let window = domino.createWindow(html, url);
  let doc = window.document;
  return doc;
}
/**
 * Serializes a document to string.
 */
function serializeDocument(doc) {
  return doc.serialize();
}
/**
 * DOM Adapter for the server platform based on https://github.com/fgnass/domino.
 */
class DominoAdapter extends BrowserDomAdapter {
  constructor() {
    super(...arguments);
    this.supportsDOMEvents = false;
  }
  static makeCurrent() {
    setDomTypes();
    setRootDomAdapter(new DominoAdapter());
  }
  createHtmlDocument() {
    return parseDocument('<html><head><title>fakeTitle</title></head><body></body></html>');
  }
  getDefaultDocument() {
    if (!DominoAdapter.defaultDoc) {
      DominoAdapter.defaultDoc = domino.createDocument();
    }
    return DominoAdapter.defaultDoc;
  }
  isElementNode(node) {
    return node ? node.nodeType === DominoAdapter.defaultDoc.ELEMENT_NODE : false;
  }
  isShadowRoot(node) {
    return node.shadowRoot == node;
  }
  /** @deprecated No longer being used in Ivy code. To be removed in version 14. */
  getGlobalEventTarget(doc, target) {
    if (target === 'window') {
      return doc.defaultView;
    }
    if (target === 'document') {
      return doc;
    }
    if (target === 'body') {
      return doc.body;
    }
    return null;
  }
  getBaseHref(doc) {
    // TODO(alxhub): Need relative path logic from BrowserDomAdapter here?
    return doc.documentElement.querySelector('base')?.getAttribute('href') || '';
  }
  dispatchEvent(el, evt) {
    el.dispatchEvent(evt);
    // Dispatch the event to the window also.
    const doc = el.ownerDocument || el;
    const win = doc.defaultView;
    if (win) {
      win.dispatchEvent(evt);
    }
  }
  getUserAgent() {
    return 'Fake user agent';
  }
  getCookie(name) {
    throw new Error('getCookie has not been implemented');
  }
}

/**
 * Representation of the current platform state.
 *
 * @publicApi
 */
let PlatformState = /*#__PURE__*/(() => {
  var _class;
  class PlatformState {
    constructor(_doc) {
      this._doc = _doc;
    }
    /**
     * Renders the current state of the platform to string.
     */
    renderToString() {
      return serializeDocument(this._doc);
    }
    /**
     * Returns the current DOM state.
     */
    getDocument() {
      return this._doc;
    }
  }
  _class = PlatformState;
  _class.ɵfac = function _class_Factory(t) {
    return new (t || _class)(ɵɵinject(DOCUMENT));
  };
  _class.ɵprov = /* @__PURE__ */ɵɵdefineInjectable({
    token: _class,
    factory: _class.ɵfac
  });
  return PlatformState;
})();
let ServerXhr = /*#__PURE__*/(() => {
  var _class2;
  class ServerXhr {
    // The `xhr2` dependency has a side-effect of accessing and modifying a
    // global scope. Loading `xhr2` dynamically allows us to delay the loading
    // and start the process once the global scope is established by the underlying
    // server platform (via shims, etc).
    async ɵloadImpl() {
      if (!this.xhrImpl) {
        const {
          default: xhr
        } = await import('xhr2');
        this.xhrImpl = xhr;
      }
    }
    build() {
      const impl = this.xhrImpl;
      if (!impl) {
        throw new Error('Unexpected state in ServerXhr: XHR implementation is not loaded.');
      }
      return new impl.XMLHttpRequest();
    }
  }
  _class2 = ServerXhr;
  _class2.ɵfac = function _class2_Factory(t) {
    return new (t || _class2)();
  };
  _class2.ɵprov = /* @__PURE__ */ɵɵdefineInjectable({
    token: _class2,
    factory: _class2.ɵfac
  });
  return ServerXhr;
})();
const SERVER_HTTP_PROVIDERS = [{
  provide: XhrFactory,
  useClass: ServerXhr
}];

/**
 * The DI token for setting the initial config for the platform.
 *
 * @publicApi
 */
const INITIAL_CONFIG = /*#__PURE__*/new InjectionToken('Server.INITIAL_CONFIG');
/**
 * A function that will be executed when calling `renderApplication` or
 * `renderModule` just before current platform state is rendered to string.
 *
 * @publicApi
 */
const BEFORE_APP_SERIALIZED = /*#__PURE__*/new InjectionToken('Server.RENDER_MODULE_HOOK');
function parseUrl(urlStr) {
  const parsedUrl = url.parse(urlStr);
  return {
    hostname: parsedUrl.hostname || '',
    protocol: parsedUrl.protocol || '',
    port: parsedUrl.port || '',
    pathname: parsedUrl.pathname || '',
    search: parsedUrl.search || '',
    hash: parsedUrl.hash || ''
  };
}
/**
 * Server-side implementation of URL state. Implements `pathname`, `search`, and `hash`
 * but not the state stack.
 */
let ServerPlatformLocation = /*#__PURE__*/(() => {
  var _class3;
  class ServerPlatformLocation {
    constructor(_doc, _config) {
      this._doc = _doc;
      this.href = '/';
      this.hostname = '/';
      this.protocol = '/';
      this.port = '/';
      this.pathname = '/';
      this.search = '';
      this.hash = '';
      this._hashUpdate = new Subject();
      const config = _config;
      if (!config) {
        return;
      }
      if (config.url) {
        const url = parseUrl(config.url);
        this.protocol = url.protocol;
        this.hostname = url.hostname;
        this.port = url.port;
        this.pathname = url.pathname;
        this.search = url.search;
        this.hash = url.hash;
        this.href = _doc.location.href;
      }
      if (config.useAbsoluteUrl) {
        if (!config.baseUrl) {
          throw new Error(`"PlatformConfig.baseUrl" must be set if "useAbsoluteUrl" is true`);
        }
        const url = parseUrl(config.baseUrl);
        this.protocol = url.protocol;
        this.hostname = url.hostname;
        this.port = url.port;
      }
    }
    getBaseHrefFromDOM() {
      return getDOM().getBaseHref(this._doc);
    }
    onPopState(fn) {
      // No-op: a state stack is not implemented, so
      // no events will ever come.
      return () => {};
    }
    onHashChange(fn) {
      const subscription = this._hashUpdate.subscribe(fn);
      return () => subscription.unsubscribe();
    }
    get url() {
      return `${this.pathname}${this.search}${this.hash}`;
    }
    setHash(value, oldUrl) {
      if (this.hash === value) {
        // Don't fire events if the hash has not changed.
        return;
      }
      this.hash = value;
      const newUrl = this.url;
      queueMicrotask(() => this._hashUpdate.next({
        type: 'hashchange',
        state: null,
        oldUrl,
        newUrl
      }));
    }
    replaceState(state, title, newUrl) {
      const oldUrl = this.url;
      const parsedUrl = parseUrl(newUrl);
      this.pathname = parsedUrl.pathname;
      this.search = parsedUrl.search;
      this.setHash(parsedUrl.hash, oldUrl);
    }
    pushState(state, title, newUrl) {
      this.replaceState(state, title, newUrl);
    }
    forward() {
      throw new Error('Not implemented');
    }
    back() {
      throw new Error('Not implemented');
    }
    // History API isn't available on server, therefore return undefined
    getState() {
      return undefined;
    }
  }
  _class3 = ServerPlatformLocation;
  _class3.ɵfac = function _class3_Factory(t) {
    return new (t || _class3)(ɵɵinject(DOCUMENT), ɵɵinject(INITIAL_CONFIG, 8));
  };
  _class3.ɵprov = /* @__PURE__ */ɵɵdefineInjectable({
    token: _class3,
    factory: _class3.ɵfac
  });
  return ServerPlatformLocation;
})();
let ServerEventManagerPlugin /* extends EventManagerPlugin which is private */ = /*#__PURE__*/(() => {
  var _class4;
  class ServerEventManagerPlugin /* extends EventManagerPlugin which is private */ {
    constructor(doc) {
      this.doc = doc;
    }
    // Handle all events on the server.
    supports(eventName) {
      return true;
    }
    addEventListener(element, eventName, handler) {
      return getDOM().onAndCancel(element, eventName, handler);
    }
  }
  _class4 = ServerEventManagerPlugin /* extends EventManagerPlugin which is private */;

  _class4.ɵfac = function _class4_Factory(t) {
    return new (t || _class4)(ɵɵinject(DOCUMENT));
  };
  _class4.ɵprov = /* @__PURE__ */ɵɵdefineInjectable({
    token: _class4,
    factory: _class4.ɵfac
  });
  return ServerEventManagerPlugin /* extends EventManagerPlugin which is private */;
})();
const TRANSFER_STATE_SERIALIZATION_PROVIDERS = [{
  provide: BEFORE_APP_SERIALIZED,
  useFactory: serializeTransferStateFactory,
  deps: [DOCUMENT, APP_ID, TransferState],
  multi: true
}];
function serializeTransferStateFactory(doc, appId, transferStore) {
  return () => {
    // The `.toJSON` here causes the `onSerialize` callbacks to be called.
    // These callbacks can be used to provide the value for a given key.
    const content = transferStore.toJson();
    if (transferStore.isEmpty) {
      // The state is empty, nothing to transfer,
      // avoid creating an extra `<script>` tag in this case.
      return;
    }
    const script = doc.createElement('script');
    script.id = appId + '-state';
    script.setAttribute('type', 'application/json');
    script.textContent = content;
    // It is intentional that we add the script at the very bottom. Angular CLI script tags for
    // bundles are always `type="module"`. These are deferred by default and cause the transfer
    // transfer data to be queried only after the browser has finished parsing the DOM.
    doc.body.appendChild(script);
  };
}
const INTERNAL_SERVER_PLATFORM_PROVIDERS = [{
  provide: DOCUMENT,
  useFactory: _document,
  deps: [Injector]
}, {
  provide: PLATFORM_ID,
  useValue: PLATFORM_SERVER_ID
}, {
  provide: PLATFORM_INITIALIZER,
  useFactory: initDominoAdapter,
  multi: true
}, {
  provide: PlatformLocation,
  useClass: ServerPlatformLocation,
  deps: [DOCUMENT, [Optional, INITIAL_CONFIG]]
}, {
  provide: PlatformState,
  deps: [DOCUMENT]
},
// Add special provider that allows multiple instances of platformServer* to be created.
{
  provide: ALLOW_MULTIPLE_PLATFORMS,
  useValue: true
}];
function initDominoAdapter() {
  return () => {
    DominoAdapter.makeCurrent();
  };
}
const SERVER_RENDER_PROVIDERS = [{
  provide: EVENT_MANAGER_PLUGINS,
  multi: true,
  useClass: ServerEventManagerPlugin
}];
const PLATFORM_SERVER_PROVIDERS = [TRANSFER_STATE_SERIALIZATION_PROVIDERS, SERVER_RENDER_PROVIDERS, SERVER_HTTP_PROVIDERS, {
  provide: Testability,
  useValue: null
}, {
  provide: TESTABILITY,
  useValue: null
}, {
  provide: ViewportScroller,
  useClass: NullViewportScroller
}];
function _document(injector) {
  const config = injector.get(INITIAL_CONFIG, null);
  let document;
  if (config && config.document) {
    document = typeof config.document === 'string' ? parseDocument(config.document, config.url) : config.document;
  } else {
    document = getDOM().createHtmlDocument();
  }
  // Tell ivy about the global document
  setDocument(document);
  return document;
}
/**
 * @publicApi
 */
const platformServer = /*#__PURE__*/createPlatformFactory(platformCore, 'server', INTERNAL_SERVER_PLATFORM_PROVIDERS);

/**
 * Sets up providers necessary to enable server rendering functionality for the application.
 *
 * @usageNotes
 *
 * Basic example of how you can add server support to your application:
 * ```ts
 * bootstrapApplication(AppComponent, {
 *   providers: [provideServerRendering()]
 * });
 * ```
 *
 * @publicApi
 * @returns A set of providers to setup the server.
 */
function provideServerRendering() {
  return makeEnvironmentProviders([provideNoopAnimations(), ...PLATFORM_SERVER_PROVIDERS]);
}

/**
 * Creates an instance of a server platform (with or without JIT compiler support
 * depending on the `ngJitMode` global const value), using provided options.
 */
function createServerPlatform(options) {
  const extraProviders = options.platformProviders ?? [];
  return platformServer([{
    provide: INITIAL_CONFIG,
    useValue: {
      document: options.document,
      url: options.url
    }
  }, extraProviders]);
}
/**
 * Creates a marker comment node and append it into the `<body>`.
 * Some CDNs have mechanisms to remove all comment node from HTML.
 * This behaviour breaks hydration, so we'll detect on the client side if this
 * marker comment is still available or else throw an error
 */
function appendSsrContentIntegrityMarker(doc) {
  // Adding a ng hydration marken comment
  const comment = doc.createComment(SSR_CONTENT_INTEGRITY_MARKER);
  doc.body.firstChild ? doc.body.insertBefore(comment, doc.body.firstChild) : doc.body.append(comment);
}
/**
 * Adds the `ng-server-context` attribute to host elements of all bootstrapped components
 * within a given application.
 */
function appendServerContextInfo(applicationRef) {
  const injector = applicationRef.injector;
  let serverContext = sanitizeServerContext(injector.get(SERVER_CONTEXT, DEFAULT_SERVER_CONTEXT));
  const features = injector.get(ENABLED_SSR_FEATURES);
  if (features.size > 0) {
    // Append features information into the server context value.
    serverContext += `|${Array.from(features).join(',')}`;
  }
  applicationRef.components.forEach(componentRef => {
    const renderer = componentRef.injector.get(Renderer2);
    const element = componentRef.location.nativeElement;
    if (element) {
      renderer.setAttribute(element, 'ng-server-context', serverContext);
    }
  });
}
async function _render(platformRef, applicationRef) {
  const environmentInjector = applicationRef.injector;
  // Block until application is stable.
  await applicationRef.isStable.pipe(first(isStable => isStable)).toPromise();
  const platformState = platformRef.injector.get(PlatformState);
  if (applicationRef.injector.get(IS_HYDRATION_DOM_REUSE_ENABLED, false)) {
    const doc = platformState.getDocument();
    appendSsrContentIntegrityMarker(doc);
    annotateForHydration(applicationRef, doc);
  }
  // Run any BEFORE_APP_SERIALIZED callbacks just before rendering to string.
  const callbacks = environmentInjector.get(BEFORE_APP_SERIALIZED, null);
  if (callbacks) {
    const asyncCallbacks = [];
    for (const callback of callbacks) {
      try {
        const callbackResult = callback();
        if (callbackResult) {
          asyncCallbacks.push(callbackResult);
        }
      } catch (e) {
        // Ignore exceptions.
        console.warn('Ignoring BEFORE_APP_SERIALIZED Exception: ', e);
      }
    }
    if (asyncCallbacks.length) {
      for (const result of await Promise.allSettled(asyncCallbacks)) {
        if (result.status === 'rejected') {
          console.warn('Ignoring BEFORE_APP_SERIALIZED Exception: ', result.reason);
        }
      }
    }
  }
  appendServerContextInfo(applicationRef);
  const output = platformState.renderToString();
  // Destroy the application in a macrotask, this allows pending promises to be settled and errors
  // to be surfaced to the users.
  await new Promise(resolve => {
    setTimeout(() => {
      platformRef.destroy();
      resolve();
    }, 0);
  });
  return output;
}
/**
 * Specifies the value that should be used if no server context value has been provided.
 */
const DEFAULT_SERVER_CONTEXT = 'other';
/**
 * An internal token that allows providing extra information about the server context
 * (e.g. whether SSR or SSG was used). The value is a string and characters other
 * than [a-zA-Z0-9\-] are removed. See the default value in `DEFAULT_SERVER_CONTEXT` const.
 */
const SERVER_CONTEXT = /*#__PURE__*/new InjectionToken('SERVER_CONTEXT');
/**
 * Sanitizes provided server context:
 * - removes all characters other than a-z, A-Z, 0-9 and `-`
 * - returns `other` if nothing is provided or the string is empty after sanitization
 */
function sanitizeServerContext(serverContext) {
  const context = serverContext.replace(/[^a-zA-Z0-9\-]/g, '');
  return context.length > 0 ? context : DEFAULT_SERVER_CONTEXT;
}
/**
 * Bootstraps an instance of an Angular application and renders it to a string.

 * ```typescript
 * const bootstrap = () => bootstrapApplication(RootComponent, appConfig);
 * const output: string = await renderApplication(bootstrap);
 * ```
 *
 * @param bootstrap A method that when invoked returns a promise that returns an `ApplicationRef`
 *     instance once resolved.
 * @param options Additional configuration for the render operation:
 *  - `document` - the document of the page to render, either as an HTML string or
 *                 as a reference to the `document` instance.
 *  - `url` - the URL for the current render request.
 *  - `platformProviders` - the platform level providers for the current render request.
 *
 * @returns A Promise, that returns serialized (to a string) rendered page, once resolved.
 *
 * @publicApi
 * @developerPreview
 */
async function renderApplication(bootstrap, options) {
  const platformRef = createServerPlatform(options);
  const applicationRef = await bootstrap();
  return _render(platformRef, applicationRef);
}

const ANALOG_ASTRO_STATIC_PROPS = new InjectionToken('@analogjs/astro-angular: Static Props w/ Mirror Provider', {
  factory() {
    return {
      props: {},
      mirror: {}
    };
  }
});
function check(Component, _props, _children) {
  return !!reflectComponentType(Component);
}
// Run beforeAppInitialized hook to set Input on the ComponentRef
// before the platform renders to string
const STATIC_PROPS_HOOK_PROVIDER = {
  provide: BEFORE_APP_SERIALIZED,
  useFactory: (appRef, {
    props,
    mirror
  }) => {
    return () => {
      const compRef = appRef.components[0];
      if (compRef && props && mirror) {
        for (const [key, value] of Object.entries(props)) {
          if (
          // we double-check inputs on ComponentMirror
          // because Astro might add additional props
          // that aren't actually Input defined on the Component
          mirror.inputs.some(({
            templateName,
            propName
          }) => templateName === key || propName === key)) {
            compRef.setInput(key, value);
          }
        }
        compRef.changeDetectorRef.detectChanges();
      }
    };
  },
  deps: [ApplicationRef, ANALOG_ASTRO_STATIC_PROPS],
  multi: true
};
function renderToStaticMarkup(Component, props, _children) {
  return __awaiter(this, void 0, void 0, function* () {
    const mirror = reflectComponentType(Component);
    const appId = (mirror === null || mirror === void 0 ? void 0 : mirror.selector) || Component.name.toString().toLowerCase();
    const document = `<${appId}></${appId}>`;
    const bootstrap = () => bootstrapApplication(Component, {
      providers: [{
        provide: ANALOG_ASTRO_STATIC_PROPS,
        useValue: {
          props,
          mirror
        }
      }, STATIC_PROPS_HOOK_PROVIDER, provideServerRendering(), {
        provide: SERVER_CONTEXT,
        useValue: 'analog'
      }, ...(Component.renderProviders || [])]
    });
    const html = yield renderApplication(bootstrap, {
      document
    });
    return {
      html
    };
  });
}
const _renderer3 = {
  check,
  renderToStaticMarkup
};

const renderers = [Object.assign({"name":"astro:jsx","serverEntrypoint":"astro/jsx/server.js","jsxImportSource":"astro"}, { ssr: server_default }),Object.assign({"name":"@astrojs/react","clientEntrypoint":"@astrojs/react/client.js","serverEntrypoint":"@astrojs/react/server.js","jsxImportSource":"react"}, { ssr: _renderer1 }),Object.assign({"name":"@analogjs/astro-angular","clientEntrypoint":"@analogjs/astro-angular/client.js","serverEntrypoint":"@analogjs/astro-angular/server.js"}, { ssr: _renderer3 }),Object.assign({"name":"@analogjs/astro-angular","clientEntrypoint":"@analogjs/astro-angular/client.js","serverEntrypoint":"@analogjs/astro-angular/server.js"}, { ssr: _renderer3 }),];

export { renderers };
