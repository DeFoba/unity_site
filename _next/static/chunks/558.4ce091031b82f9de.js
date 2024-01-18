"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [558], {
        1217: function(e, t, s) {
            s.d(t, {
                E: function() {
                    return n
                }
            });
            var r = s(2212);
            class n extends r.aNw {
                constructor(e) {
                    super(e), this.dracoLoader = null, this.ktx2Loader = null, this.meshoptDecoder = null, this.pluginCallbacks = [], this.register(function(e) {
                        return new u(e)
                    }), this.register(function(e) {
                        return new m(e)
                    }), this.register(function(e) {
                        return new f(e)
                    }), this.register(function(e) {
                        return new c(e)
                    }), this.register(function(e) {
                        return new h(e)
                    }), this.register(function(e) {
                        return new p(e)
                    }), this.register(function(e) {
                        return new d(e)
                    }), this.register(function(e) {
                        return new o(e)
                    }), this.register(function(e) {
                        return new g(e)
                    })
                }
                load(e, t, s, n) {
                    let a;
                    let i = this;
                    a = "" !== this.resourcePath ? this.resourcePath : "" !== this.path ? this.path : r.Zp0.extractUrlBase(e), this.manager.itemStart(e);
                    let o = function(t) {
                            n ? n(t) : console.error(t), i.manager.itemError(e), i.manager.itemEnd(e)
                        },
                        l = new r.hH6(this.manager);
                    l.setPath(this.path), l.setResponseType("arraybuffer"), l.setRequestHeader(this.requestHeader), l.setWithCredentials(this.withCredentials), l.load(e, function(s) {
                        try {
                            i.parse(s, a, function(s) {
                                t(s), i.manager.itemEnd(e)
                            }, o)
                        } catch (e) {
                            o(e)
                        }
                    }, s, o)
                }
                setDRACOLoader(e) {
                    return this.dracoLoader = e, this
                }
                setDDSLoader() {
                    throw Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')
                }
                setKTX2Loader(e) {
                    return this.ktx2Loader = e, this
                }
                setMeshoptDecoder(e) {
                    return this.meshoptDecoder = e, this
                }
                register(e) {
                    return -1 === this.pluginCallbacks.indexOf(e) && this.pluginCallbacks.push(e), this
                }
                unregister(e) {
                    return -1 !== this.pluginCallbacks.indexOf(e) && this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e), 1), this
                }
                parse(e, t, s, n) {
                    let a;
                    let o = {},
                        u = {};
                    if ("string" == typeof e) a = e;
                    else {
                        let t = r.Zp0.decodeText(new Uint8Array(e, 0, 4));
                        if (t === T) {
                            try {
                                o[i.KHR_BINARY_GLTF] = new R(e)
                            } catch (e) {
                                n && n(e);
                                return
                            }
                            a = o[i.KHR_BINARY_GLTF].content
                        } else a = r.Zp0.decodeText(new Uint8Array(e))
                    }
                    let c = JSON.parse(a);
                    if (void 0 === c.asset || c.asset.version[0] < 2) {
                        n && n(Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));
                        return
                    }
                    let h = new G(c, {
                        path: t || this.resourcePath || "",
                        crossOrigin: this.crossOrigin,
                        requestHeader: this.requestHeader,
                        manager: this.manager,
                        ktx2Loader: this.ktx2Loader,
                        meshoptDecoder: this.meshoptDecoder
                    });
                    h.fileLoader.setRequestHeader(this.requestHeader);
                    for (let e = 0; e < this.pluginCallbacks.length; e++) {
                        let t = this.pluginCallbacks[e](h);
                        u[t.name] = t, o[t.name] = !0
                    }
                    if (c.extensionsUsed)
                        for (let e = 0; e < c.extensionsUsed.length; ++e) {
                            let t = c.extensionsUsed[e],
                                s = c.extensionsRequired || [];
                            switch (t) {
                                case i.KHR_MATERIALS_UNLIT:
                                    o[t] = new l;
                                    break;
                                case i.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS:
                                    o[t] = new A;
                                    break;
                                case i.KHR_DRACO_MESH_COMPRESSION:
                                    o[t] = new E(c, this.dracoLoader);
                                    break;
                                case i.KHR_TEXTURE_TRANSFORM:
                                    o[t] = new v;
                                    break;
                                case i.KHR_MESH_QUANTIZATION:
                                    o[t] = new M;
                                    break;
                                default:
                                    s.indexOf(t) >= 0 && void 0 === u[t] && console.warn('THREE.GLTFLoader: Unknown extension "' + t + '".')
                            }
                        }
                    h.setExtensions(o), h.setPlugins(u), h.parse(s, n)
                }
            }

            function a() {
                let e = {};
                return {
                    get: function(t) {
                        return e[t]
                    },
                    add: function(t, s) {
                        e[t] = s
                    },
                    remove: function(t) {
                        delete e[t]
                    },
                    removeAll: function() {
                        e = {}
                    }
                }
            }
            let i = {
                KHR_BINARY_GLTF: "KHR_binary_glTF",
                KHR_DRACO_MESH_COMPRESSION: "KHR_draco_mesh_compression",
                KHR_LIGHTS_PUNCTUAL: "KHR_lights_punctual",
                KHR_MATERIALS_CLEARCOAT: "KHR_materials_clearcoat",
                KHR_MATERIALS_IOR: "KHR_materials_ior",
                KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS: "KHR_materials_pbrSpecularGlossiness",
                KHR_MATERIALS_SPECULAR: "KHR_materials_specular",
                KHR_MATERIALS_TRANSMISSION: "KHR_materials_transmission",
                KHR_MATERIALS_UNLIT: "KHR_materials_unlit",
                KHR_MATERIALS_VOLUME: "KHR_materials_volume",
                KHR_TEXTURE_BASISU: "KHR_texture_basisu",
                KHR_TEXTURE_TRANSFORM: "KHR_texture_transform",
                KHR_MESH_QUANTIZATION: "KHR_mesh_quantization",
                EXT_TEXTURE_WEBP: "EXT_texture_webp",
                EXT_MESHOPT_COMPRESSION: "EXT_meshopt_compression"
            };
            class o {
                constructor(e) {
                    this.parser = e, this.name = i.KHR_LIGHTS_PUNCTUAL, this.cache = {
                        refs: {},
                        uses: {}
                    }
                }
                _markDefs() {
                    let e = this.parser,
                        t = this.parser.json.nodes || [];
                    for (let s = 0, r = t.length; s < r; s++) {
                        let r = t[s];
                        r.extensions && r.extensions[this.name] && void 0 !== r.extensions[this.name].light && e._addNodeRef(this.cache, r.extensions[this.name].light)
                    }
                }
                _loadLight(e) {
                    let t;
                    let s = this.parser,
                        n = "light:" + e,
                        a = s.cache.get(n);
                    if (a) return a;
                    let i = s.json,
                        o = i.extensions && i.extensions[this.name] || {},
                        l = o.lights || [],
                        u = l[e],
                        c = new r.Ilk(16777215);
                    void 0 !== u.color && c.fromArray(u.color);
                    let h = void 0 !== u.range ? u.range : 0;
                    switch (u.type) {
                        case "directional":
                            (t = new r.Ox3(c)).target.position.set(0, 0, -1), t.add(t.target);
                            break;
                        case "point":
                            (t = new r.cek(c)).distance = h;
                            break;
                        case "spot":
                            (t = new r.PMe(c)).distance = h, u.spot = u.spot || {}, u.spot.innerConeAngle = void 0 !== u.spot.innerConeAngle ? u.spot.innerConeAngle : 0, u.spot.outerConeAngle = void 0 !== u.spot.outerConeAngle ? u.spot.outerConeAngle : Math.PI / 4, t.angle = u.spot.outerConeAngle, t.penumbra = 1 - u.spot.innerConeAngle / u.spot.outerConeAngle, t.target.position.set(0, 0, -1), t.add(t.target);
                            break;
                        default:
                            throw Error("THREE.GLTFLoader: Unexpected light type: " + u.type)
                    }
                    return t.position.set(0, 0, 0), t.decay = 2, void 0 !== u.intensity && (t.intensity = u.intensity), t.name = s.createUniqueName(u.name || "light_" + e), a = Promise.resolve(t), s.cache.add(n, a), a
                }
                createNodeAttachment(e) {
                    let t = this,
                        s = this.parser,
                        r = s.json,
                        n = r.nodes[e],
                        a = n.extensions && n.extensions[this.name] || {},
                        i = a.light;
                    return void 0 === i ? null : this._loadLight(i).then(function(e) {
                        return s._getNodeRef(t.cache, i, e)
                    })
                }
            }
            class l {
                constructor() {
                    this.name = i.KHR_MATERIALS_UNLIT
                }
                getMaterialType() {
                    return r.vBJ
                }
                extendParams(e, t, s) {
                    let n = [];
                    e.color = new r.Ilk(1, 1, 1), e.opacity = 1;
                    let a = t.pbrMetallicRoughness;
                    if (a) {
                        if (Array.isArray(a.baseColorFactor)) {
                            let t = a.baseColorFactor;
                            e.color.fromArray(t), e.opacity = t[3]
                        }
                        void 0 !== a.baseColorTexture && n.push(s.assignTexture(e, "map", a.baseColorTexture))
                    }
                    return Promise.all(n)
                }
            }
            class u {
                constructor(e) {
                    this.parser = e, this.name = i.KHR_MATERIALS_CLEARCOAT
                }
                getMaterialType(e) {
                    let t = this.parser,
                        s = t.json.materials[e];
                    return s.extensions && s.extensions[this.name] ? r.EJi : null
                }
                extendMaterialParams(e, t) {
                    let s = this.parser,
                        n = s.json.materials[e];
                    if (!n.extensions || !n.extensions[this.name]) return Promise.resolve();
                    let a = [],
                        i = n.extensions[this.name];
                    if (void 0 !== i.clearcoatFactor && (t.clearcoat = i.clearcoatFactor), void 0 !== i.clearcoatTexture && a.push(s.assignTexture(t, "clearcoatMap", i.clearcoatTexture)), void 0 !== i.clearcoatRoughnessFactor && (t.clearcoatRoughness = i.clearcoatRoughnessFactor), void 0 !== i.clearcoatRoughnessTexture && a.push(s.assignTexture(t, "clearcoatRoughnessMap", i.clearcoatRoughnessTexture)), void 0 !== i.clearcoatNormalTexture && (a.push(s.assignTexture(t, "clearcoatNormalMap", i.clearcoatNormalTexture)), void 0 !== i.clearcoatNormalTexture.scale)) {
                        let e = i.clearcoatNormalTexture.scale;
                        t.clearcoatNormalScale = new r.FM8(e, -e)
                    }
                    return Promise.all(a)
                }
            }
            class c {
                constructor(e) {
                    this.parser = e, this.name = i.KHR_MATERIALS_TRANSMISSION
                }
                getMaterialType(e) {
                    let t = this.parser,
                        s = t.json.materials[e];
                    return s.extensions && s.extensions[this.name] ? r.EJi : null
                }
                extendMaterialParams(e, t) {
                    let s = this.parser,
                        r = s.json.materials[e];
                    if (!r.extensions || !r.extensions[this.name]) return Promise.resolve();
                    let n = [],
                        a = r.extensions[this.name];
                    return void 0 !== a.transmissionFactor && (t.transmission = a.transmissionFactor), void 0 !== a.transmissionTexture && n.push(s.assignTexture(t, "transmissionMap", a.transmissionTexture)), Promise.all(n)
                }
            }
            class h {
                constructor(e) {
                    this.parser = e, this.name = i.KHR_MATERIALS_VOLUME
                }
                getMaterialType(e) {
                    let t = this.parser,
                        s = t.json.materials[e];
                    return s.extensions && s.extensions[this.name] ? r.EJi : null
                }
                extendMaterialParams(e, t) {
                    let s = this.parser,
                        n = s.json.materials[e];
                    if (!n.extensions || !n.extensions[this.name]) return Promise.resolve();
                    let a = [],
                        i = n.extensions[this.name];
                    t.thickness = void 0 !== i.thicknessFactor ? i.thicknessFactor : 0, void 0 !== i.thicknessTexture && a.push(s.assignTexture(t, "thicknessMap", i.thicknessTexture)), t.attenuationDistance = i.attenuationDistance || 0;
                    let o = i.attenuationColor || [1, 1, 1];
                    return t.attenuationTint = new r.Ilk(o[0], o[1], o[2]), Promise.all(a)
                }
            }
            class p {
                constructor(e) {
                    this.parser = e, this.name = i.KHR_MATERIALS_IOR
                }
                getMaterialType(e) {
                    let t = this.parser,
                        s = t.json.materials[e];
                    return s.extensions && s.extensions[this.name] ? r.EJi : null
                }
                extendMaterialParams(e, t) {
                    let s = this.parser,
                        r = s.json.materials[e];
                    if (!r.extensions || !r.extensions[this.name]) return Promise.resolve();
                    let n = r.extensions[this.name];
                    return t.ior = void 0 !== n.ior ? n.ior : 1.5, Promise.resolve()
                }
            }
            class d {
                constructor(e) {
                    this.parser = e, this.name = i.KHR_MATERIALS_SPECULAR
                }
                getMaterialType(e) {
                    let t = this.parser,
                        s = t.json.materials[e];
                    return s.extensions && s.extensions[this.name] ? r.EJi : null
                }
                extendMaterialParams(e, t) {
                    let s = this.parser,
                        n = s.json.materials[e];
                    if (!n.extensions || !n.extensions[this.name]) return Promise.resolve();
                    let a = [],
                        i = n.extensions[this.name];
                    t.specularIntensity = void 0 !== i.specularFactor ? i.specularFactor : 1, void 0 !== i.specularTexture && a.push(s.assignTexture(t, "specularIntensityMap", i.specularTexture));
                    let o = i.specularColorFactor || [1, 1, 1];
                    return t.specularTint = new r.Ilk(o[0], o[1], o[2]), void 0 !== i.specularColorTexture && a.push(s.assignTexture(t, "specularTintMap", i.specularColorTexture).then(function(e) {
                        e.encoding = r.knz
                    })), Promise.all(a)
                }
            }
            class m {
                constructor(e) {
                    this.parser = e, this.name = i.KHR_TEXTURE_BASISU
                }
                loadTexture(e) {
                    let t = this.parser,
                        s = t.json,
                        r = s.textures[e];
                    if (!r.extensions || !r.extensions[this.name]) return null;
                    let n = r.extensions[this.name],
                        a = s.images[n.source],
                        i = t.options.ktx2Loader;
                    if (!i) {
                        if (!(s.extensionsRequired && s.extensionsRequired.indexOf(this.name) >= 0)) return null;
                        throw Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures")
                    }
                    return t.loadTextureImage(e, a, i)
                }
            }
            class f {
                constructor(e) {
                    this.parser = e, this.name = i.EXT_TEXTURE_WEBP, this.isSupported = null
                }
                loadTexture(e) {
                    let t = this.name,
                        s = this.parser,
                        r = s.json,
                        n = r.textures[e];
                    if (!n.extensions || !n.extensions[t]) return null;
                    let a = n.extensions[t],
                        i = r.images[a.source],
                        o = s.textureLoader;
                    if (i.uri) {
                        let e = s.options.manager.getHandler(i.uri);
                        null !== e && (o = e)
                    }
                    return this.detectSupport().then(function(n) {
                        if (n) return s.loadTextureImage(e, i, o);
                        if (r.extensionsRequired && r.extensionsRequired.indexOf(t) >= 0) throw Error("THREE.GLTFLoader: WebP required by asset but unsupported.");
                        return s.loadTexture(e)
                    })
                }
                detectSupport() {
                    return this.isSupported || (this.isSupported = new Promise(function(e) {
                        let t = new Image;
                        t.src = "data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA", t.onload = t.onerror = function() {
                            e(1 === t.height)
                        }
                    })), this.isSupported
                }
            }
            class g {
                constructor(e) {
                    this.name = i.EXT_MESHOPT_COMPRESSION, this.parser = e
                }
                loadBufferView(e) {
                    let t = this.parser.json,
                        s = t.bufferViews[e];
                    if (!s.extensions || !s.extensions[this.name]) return null;
                    {
                        let e = s.extensions[this.name],
                            r = this.parser.getDependency("buffer", e.buffer),
                            n = this.parser.options.meshoptDecoder;
                        if (!n || !n.supported) {
                            if (!(t.extensionsRequired && t.extensionsRequired.indexOf(this.name) >= 0)) return null;
                            throw Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files")
                        }
                        return Promise.all([r, n.ready]).then(function(t) {
                            let s = e.byteOffset || 0,
                                r = e.byteLength || 0,
                                a = e.count,
                                i = e.byteStride,
                                o = new ArrayBuffer(a * i),
                                l = new Uint8Array(t[0], s, r);
                            return n.decodeGltfBuffer(new Uint8Array(o), a, i, l, e.mode, e.filter), o
                        })
                    }
                }
            }
            let T = "glTF",
                x = {
                    JSON: 1313821514,
                    BIN: 5130562
                };
            class R {
                constructor(e) {
                    this.name = i.KHR_BINARY_GLTF, this.content = null, this.body = null;
                    let t = new DataView(e, 0, 12);
                    if (this.header = {
                            magic: r.Zp0.decodeText(new Uint8Array(e.slice(0, 4))),
                            version: t.getUint32(4, !0),
                            length: t.getUint32(8, !0)
                        }, this.header.magic !== T) throw Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");
                    if (this.header.version < 2) throw Error("THREE.GLTFLoader: Legacy binary file detected.");
                    let s = this.header.length - 12,
                        n = new DataView(e, 12),
                        a = 0;
                    for (; a < s;) {
                        let t = n.getUint32(a, !0);
                        a += 4;
                        let s = n.getUint32(a, !0);
                        if (a += 4, s === x.JSON) {
                            let s = new Uint8Array(e, 12 + a, t);
                            this.content = r.Zp0.decodeText(s)
                        } else if (s === x.BIN) {
                            let s = 12 + a;
                            this.body = e.slice(s, s + t)
                        }
                        a += t
                    }
                    if (null === this.content) throw Error("THREE.GLTFLoader: JSON content not found.")
                }
            }
            class E {
                constructor(e, t) {
                    if (!t) throw Error("THREE.GLTFLoader: No DRACOLoader instance provided.");
                    this.name = i.KHR_DRACO_MESH_COMPRESSION, this.json = e, this.dracoLoader = t, this.dracoLoader.preload()
                }
                decodePrimitive(e, t) {
                    let s = this.json,
                        r = this.dracoLoader,
                        n = e.extensions[this.name].bufferView,
                        a = e.extensions[this.name].attributes,
                        i = {},
                        o = {},
                        l = {};
                    for (let e in a) {
                        let t = P[e] || e.toLowerCase();
                        i[t] = a[e]
                    }
                    for (let t in e.attributes) {
                        let r = P[t] || t.toLowerCase();
                        if (void 0 !== a[t]) {
                            let n = s.accessors[e.attributes[t]],
                                a = w[n.componentType];
                            l[r] = a, o[r] = !0 === n.normalized
                        }
                    }
                    return t.getDependency("bufferView", n).then(function(e) {
                        return new Promise(function(t) {
                            r.decodeDracoFile(e, function(e) {
                                for (let t in e.attributes) {
                                    let s = e.attributes[t],
                                        r = o[t];
                                    void 0 !== r && (s.normalized = r)
                                }
                                t(e)
                            }, i, l)
                        })
                    })
                }
            }
            class v {
                constructor() {
                    this.name = i.KHR_TEXTURE_TRANSFORM
                }
                extendTexture(e, t) {
                    return void 0 !== t.texCoord && console.warn('THREE.GLTFLoader: Custom UV sets in "' + this.name + '" extension not yet supported.'), void 0 === t.offset && void 0 === t.rotation && void 0 === t.scale || (e = e.clone(), void 0 !== t.offset && e.offset.fromArray(t.offset), void 0 !== t.rotation && (e.rotation = t.rotation), void 0 !== t.scale && e.repeat.fromArray(t.scale), e.needsUpdate = !0), e
                }
            }
            class y extends r.Wid {
                constructor(e) {
                    super(), this.isGLTFSpecularGlossinessMaterial = !0;
                    let t = {
                        specular: {
                            value: new r.Ilk().setHex(16777215)
                        },
                        glossiness: {
                            value: 1
                        },
                        specularMap: {
                            value: null
                        },
                        glossinessMap: {
                            value: null
                        }
                    };
                    this._extraUniforms = t, this.onBeforeCompile = function(e) {
                        for (let s in t) e.uniforms[s] = t[s];
                        e.fragmentShader = e.fragmentShader.replace("uniform float roughness;", "uniform vec3 specular;").replace("uniform float metalness;", "uniform float glossiness;").replace("#include <roughnessmap_pars_fragment>", "#ifdef USE_SPECULARMAP\n	uniform sampler2D specularMap;\n#endif").replace("#include <metalnessmap_pars_fragment>", "#ifdef USE_GLOSSINESSMAP\n	uniform sampler2D glossinessMap;\n#endif").replace("#include <roughnessmap_fragment>", "vec3 specularFactor = specular;\n#ifdef USE_SPECULARMAP\n	vec4 texelSpecular = texture2D( specularMap, vUv );\n	texelSpecular = sRGBToLinear( texelSpecular );\n	// reads channel RGB, compatible with a glTF Specular-Glossiness (RGBA) texture\n	specularFactor *= texelSpecular.rgb;\n#endif").replace("#include <metalnessmap_fragment>", "float glossinessFactor = glossiness;\n#ifdef USE_GLOSSINESSMAP\n	vec4 texelGlossiness = texture2D( glossinessMap, vUv );\n	// reads channel A, compatible with a glTF Specular-Glossiness (RGBA) texture\n	glossinessFactor *= texelGlossiness.a;\n#endif").replace("#include <lights_physical_fragment>", "PhysicalMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb * ( 1. - max( specularFactor.r, max( specularFactor.g, specularFactor.b ) ) );\nvec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );\nfloat geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );\nmaterial.specularRoughness = max( 1.0 - glossinessFactor, 0.0525 ); // 0.0525 corresponds to the base mip of a 256 cubemap.\nmaterial.specularRoughness += geometryRoughness;\nmaterial.specularRoughness = min( material.specularRoughness, 1.0 );\nmaterial.specularColor = specularFactor;")
                    }, Object.defineProperties(this, {
                        specular: {
                            get: function() {
                                return t.specular.value
                            },
                            set: function(e) {
                                t.specular.value = e
                            }
                        },
                        specularMap: {
                            get: function() {
                                return t.specularMap.value
                            },
                            set: function(e) {
                                t.specularMap.value = e, e ? this.defines.USE_SPECULARMAP = "" : delete this.defines.USE_SPECULARMAP
                            }
                        },
                        glossiness: {
                            get: function() {
                                return t.glossiness.value
                            },
                            set: function(e) {
                                t.glossiness.value = e
                            }
                        },
                        glossinessMap: {
                            get: function() {
                                return t.glossinessMap.value
                            },
                            set: function(e) {
                                t.glossinessMap.value = e, e ? (this.defines.USE_GLOSSINESSMAP = "", this.defines.USE_UV = "") : (delete this.defines.USE_GLOSSINESSMAP, delete this.defines.USE_UV)
                            }
                        }
                    }), delete this.metalness, delete this.roughness, delete this.metalnessMap, delete this.roughnessMap, this.setValues(e)
                }
                copy(e) {
                    return super.copy(e), this.specularMap = e.specularMap, this.specular.copy(e.specular), this.glossinessMap = e.glossinessMap, this.glossiness = e.glossiness, delete this.metalness, delete this.roughness, delete this.metalnessMap, delete this.roughnessMap, this
                }
            }
            class A {
                constructor() {
                    this.name = i.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS, this.specularGlossinessParams = ["color", "map", "lightMap", "lightMapIntensity", "aoMap", "aoMapIntensity", "emissive", "emissiveIntensity", "emissiveMap", "bumpMap", "bumpScale", "normalMap", "normalMapType", "displacementMap", "displacementScale", "displacementBias", "specularMap", "specular", "glossinessMap", "glossiness", "alphaMap", "envMap", "envMapIntensity", "refractionRatio"]
                }
                getMaterialType() {
                    return y
                }
                extendParams(e, t, s) {
                    let n = t.extensions[this.name];
                    e.color = new r.Ilk(1, 1, 1), e.opacity = 1;
                    let a = [];
                    if (Array.isArray(n.diffuseFactor)) {
                        let t = n.diffuseFactor;
                        e.color.fromArray(t), e.opacity = t[3]
                    }
                    if (void 0 !== n.diffuseTexture && a.push(s.assignTexture(e, "map", n.diffuseTexture)), e.emissive = new r.Ilk(0, 0, 0), e.glossiness = void 0 !== n.glossinessFactor ? n.glossinessFactor : 1, e.specular = new r.Ilk(1, 1, 1), Array.isArray(n.specularFactor) && e.specular.fromArray(n.specularFactor), void 0 !== n.specularGlossinessTexture) {
                        let t = n.specularGlossinessTexture;
                        a.push(s.assignTexture(e, "glossinessMap", t)), a.push(s.assignTexture(e, "specularMap", t))
                    }
                    return Promise.all(a)
                }
                createMaterial(e) {
                    let t = new y(e);
                    return t.fog = !0, t.color = e.color, t.map = void 0 === e.map ? null : e.map, t.lightMap = null, t.lightMapIntensity = 1, t.aoMap = void 0 === e.aoMap ? null : e.aoMap, t.aoMapIntensity = 1, t.emissive = e.emissive, t.emissiveIntensity = 1, t.emissiveMap = void 0 === e.emissiveMap ? null : e.emissiveMap, t.bumpMap = void 0 === e.bumpMap ? null : e.bumpMap, t.bumpScale = 1, t.normalMap = void 0 === e.normalMap ? null : e.normalMap, t.normalMapType = r.IOt, e.normalScale && (t.normalScale = e.normalScale), t.displacementMap = null, t.displacementScale = 1, t.displacementBias = 0, t.specularMap = void 0 === e.specularMap ? null : e.specularMap, t.specular = e.specular, t.glossinessMap = void 0 === e.glossinessMap ? null : e.glossinessMap, t.glossiness = e.glossiness, t.alphaMap = null, t.envMap = void 0 === e.envMap ? null : e.envMap, t.envMapIntensity = 1, t.refractionRatio = .98, t
                }
            }
            class M {
                constructor() {
                    this.name = i.KHR_MESH_QUANTIZATION
                }
            }
            class S extends r._C8 {
                constructor(e, t, s, r) {
                    super(e, t, s, r)
                }
                copySampleValue_(e) {
                    let t = this.resultBuffer,
                        s = this.sampleValues,
                        r = this.valueSize,
                        n = e * r * 3 + r;
                    for (let e = 0; e !== r; e++) t[e] = s[n + e];
                    return t
                }
            }
            S.prototype.beforeStart_ = S.prototype.copySampleValue_, S.prototype.afterEnd_ = S.prototype.copySampleValue_, S.prototype.interpolate_ = function(e, t, s, r) {
                let n = this.resultBuffer,
                    a = this.sampleValues,
                    i = this.valueSize,
                    o = 2 * i,
                    l = 3 * i,
                    u = r - t,
                    c = (s - t) / u,
                    h = c * c,
                    p = h * c,
                    d = e * l,
                    m = d - l,
                    f = -2 * p + 3 * h,
                    g = p - h,
                    T = 1 - f,
                    x = g - h + c;
                for (let e = 0; e !== i; e++) {
                    let t = a[m + e + i],
                        s = a[m + e + o] * u,
                        r = a[d + e + i],
                        l = a[d + e] * u;
                    n[e] = T * t + x * s + f * r + g * l
                }
                return n
            };
            let _ = {
                    POINTS: 0,
                    LINES: 1,
                    LINE_LOOP: 2,
                    LINE_STRIP: 3,
                    TRIANGLES: 4,
                    TRIANGLE_STRIP: 5,
                    TRIANGLE_FAN: 6
                },
                w = {
                    5120: Int8Array,
                    5121: Uint8Array,
                    5122: Int16Array,
                    5123: Uint16Array,
                    5125: Uint32Array,
                    5126: Float32Array
                },
                L = {
                    9728: r.TyD,
                    9729: r.wem,
                    9984: r.YLQ,
                    9985: r.qyh,
                    9986: r.aH4,
                    9987: r.D1R
                },
                b = {
                    33071: r.uWy,
                    33648: r.OoA,
                    10497: r.rpg
                },
                I = {
                    SCALAR: 1,
                    VEC2: 2,
                    VEC3: 3,
                    VEC4: 4,
                    MAT2: 4,
                    MAT3: 9,
                    MAT4: 16
                },
                P = {
                    POSITION: "position",
                    NORMAL: "normal",
                    TANGENT: "tangent",
                    TEXCOORD_0: "uv",
                    TEXCOORD_1: "uv2",
                    COLOR_0: "color",
                    WEIGHTS_0: "skinWeight",
                    JOINTS_0: "skinIndex"
                },
                N = {
                    scale: "scale",
                    translation: "position",
                    rotation: "quaternion",
                    weights: "morphTargetInfluences"
                },
                O = {
                    CUBICSPLINE: void 0,
                    LINEAR: r.NMF,
                    STEP: r.Syv
                },
                C = {
                    OPAQUE: "OPAQUE",
                    MASK: "MASK",
                    BLEND: "BLEND"
                };

            function U(e, t) {
                return "string" != typeof e || "" === e ? "" : (/^https?:\/\//i.test(t) && /^\//.test(e) && (t = t.replace(/(^https?:\/\/[^\/]+).*/i, "$1")), /^(https?:)?\/\//i.test(e) || /^data:.*,.*$/i.test(e) || /^blob:.*$/i.test(e)) ? e : t + e
            }

            function H(e, t, s) {
                for (let r in s.extensions) void 0 === e[r] && (t.userData.gltfExtensions = t.userData.gltfExtensions || {}, t.userData.gltfExtensions[r] = s.extensions[r])
            }

            function F(e, t) {
                void 0 !== t.extras && ("object" == typeof t.extras ? Object.assign(e.userData, t.extras) : console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, " + t.extras))
            }

            function k(e) {
                let t = "",
                    s = Object.keys(e).sort();
                for (let r = 0, n = s.length; r < n; r++) t += s[r] + ":" + e[s[r]] + ";";
                return t
            }

            function D(e) {
                switch (e) {
                    case Int8Array:
                        return 1 / 127;
                    case Uint8Array:
                        return 1 / 255;
                    case Int16Array:
                        return 1 / 32767;
                    case Uint16Array:
                        return 1 / 65535;
                    default:
                        throw Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")
                }
            }
            class G {
                constructor(e = {}, t = {}) {
                    this.json = e, this.extensions = {}, this.plugins = {}, this.options = t, this.cache = new a, this.associations = new Map, this.primitiveCache = {}, this.meshCache = {
                        refs: {},
                        uses: {}
                    }, this.cameraCache = {
                        refs: {},
                        uses: {}
                    }, this.lightCache = {
                        refs: {},
                        uses: {}
                    }, this.textureCache = {}, this.nodeNamesUsed = {}, "undefined" != typeof createImageBitmap && !1 === /Firefox/.test(navigator.userAgent) ? this.textureLoader = new r.QRU(this.options.manager) : this.textureLoader = new r.dpR(this.options.manager), this.textureLoader.setCrossOrigin(this.options.crossOrigin), this.textureLoader.setRequestHeader(this.options.requestHeader), this.fileLoader = new r.hH6(this.options.manager), this.fileLoader.setResponseType("arraybuffer"), "use-credentials" === this.options.crossOrigin && this.fileLoader.setWithCredentials(!0)
                }
                setExtensions(e) {
                    this.extensions = e
                }
                setPlugins(e) {
                    this.plugins = e
                }
                parse(e, t) {
                    let s = this,
                        r = this.json,
                        n = this.extensions;
                    this.cache.removeAll(), this._invokeAll(function(e) {
                        return e._markDefs && e._markDefs()
                    }), Promise.all(this._invokeAll(function(e) {
                        return e.beforeRoot && e.beforeRoot()
                    })).then(function() {
                        return Promise.all([s.getDependencies("scene"), s.getDependencies("animation"), s.getDependencies("camera")])
                    }).then(function(t) {
                        let a = {
                            scene: t[0][r.scene || 0],
                            scenes: t[0],
                            animations: t[1],
                            cameras: t[2],
                            asset: r.asset,
                            parser: s,
                            userData: {}
                        };
                        H(n, a, r), F(a, r), Promise.all(s._invokeAll(function(e) {
                            return e.afterRoot && e.afterRoot(a)
                        })).then(function() {
                            e(a)
                        })
                    }).catch(t)
                }
                _markDefs() {
                    let e = this.json.nodes || [],
                        t = this.json.skins || [],
                        s = this.json.meshes || [];
                    for (let s = 0, r = t.length; s < r; s++) {
                        let r = t[s].joints;
                        for (let t = 0, s = r.length; t < s; t++) e[r[t]].isBone = !0
                    }
                    for (let t = 0, r = e.length; t < r; t++) {
                        let r = e[t];
                        void 0 !== r.mesh && (this._addNodeRef(this.meshCache, r.mesh), void 0 !== r.skin && (s[r.mesh].isSkinnedMesh = !0)), void 0 !== r.camera && this._addNodeRef(this.cameraCache, r.camera)
                    }
                }
                _addNodeRef(e, t) {
                    void 0 !== t && (void 0 === e.refs[t] && (e.refs[t] = e.uses[t] = 0), e.refs[t]++)
                }
                _getNodeRef(e, t, s) {
                    if (e.refs[t] <= 1) return s;
                    let r = s.clone();
                    return r.name += "_instance_" + e.uses[t]++, r
                }
                _invokeOne(e) {
                    let t = Object.values(this.plugins);
                    t.push(this);
                    for (let s = 0; s < t.length; s++) {
                        let r = e(t[s]);
                        if (r) return r
                    }
                    return null
                }
                _invokeAll(e) {
                    let t = Object.values(this.plugins);
                    t.unshift(this);
                    let s = [];
                    for (let r = 0; r < t.length; r++) {
                        let n = e(t[r]);
                        n && s.push(n)
                    }
                    return s
                }
                getDependency(e, t) {
                    let s = e + ":" + t,
                        r = this.cache.get(s);
                    if (!r) {
                        switch (e) {
                            case "scene":
                                r = this.loadScene(t);
                                break;
                            case "node":
                                r = this.loadNode(t);
                                break;
                            case "mesh":
                                r = this._invokeOne(function(e) {
                                    return e.loadMesh && e.loadMesh(t)
                                });
                                break;
                            case "accessor":
                                r = this.loadAccessor(t);
                                break;
                            case "bufferView":
                                r = this._invokeOne(function(e) {
                                    return e.loadBufferView && e.loadBufferView(t)
                                });
                                break;
                            case "buffer":
                                r = this.loadBuffer(t);
                                break;
                            case "material":
                                r = this._invokeOne(function(e) {
                                    return e.loadMaterial && e.loadMaterial(t)
                                });
                                break;
                            case "texture":
                                r = this._invokeOne(function(e) {
                                    return e.loadTexture && e.loadTexture(t)
                                });
                                break;
                            case "skin":
                                r = this.loadSkin(t);
                                break;
                            case "animation":
                                r = this.loadAnimation(t);
                                break;
                            case "camera":
                                r = this.loadCamera(t);
                                break;
                            default:
                                throw Error("Unknown type: " + e)
                        }
                        this.cache.add(s, r)
                    }
                    return r
                }
                getDependencies(e) {
                    let t = this.cache.get(e);
                    if (!t) {
                        let s = this,
                            r = this.json[e + ("mesh" === e ? "es" : "s")] || [];
                        t = Promise.all(r.map(function(t, r) {
                            return s.getDependency(e, r)
                        })), this.cache.add(e, t)
                    }
                    return t
                }
                loadBuffer(e) {
                    let t = this.json.buffers[e],
                        s = this.fileLoader;
                    if (t.type && "arraybuffer" !== t.type) throw Error("THREE.GLTFLoader: " + t.type + " buffer type is not supported.");
                    if (void 0 === t.uri && 0 === e) return Promise.resolve(this.extensions[i.KHR_BINARY_GLTF].body);
                    let r = this.options;
                    return new Promise(function(e, n) {
                        s.load(U(t.uri, r.path), e, void 0, function() {
                            n(Error('THREE.GLTFLoader: Failed to load buffer "' + t.uri + '".'))
                        })
                    })
                }
                loadBufferView(e) {
                    let t = this.json.bufferViews[e];
                    return this.getDependency("buffer", t.buffer).then(function(e) {
                        let s = t.byteLength || 0,
                            r = t.byteOffset || 0;
                        return e.slice(r, r + s)
                    })
                }
                loadAccessor(e) {
                    let t = this,
                        s = this.json,
                        n = this.json.accessors[e];
                    if (void 0 === n.bufferView && void 0 === n.sparse) return Promise.resolve(null);
                    let a = [];
                    return void 0 !== n.bufferView ? a.push(this.getDependency("bufferView", n.bufferView)) : a.push(null), void 0 !== n.sparse && (a.push(this.getDependency("bufferView", n.sparse.indices.bufferView)), a.push(this.getDependency("bufferView", n.sparse.values.bufferView))), Promise.all(a).then(function(e) {
                        let a, i;
                        let o = e[0],
                            l = I[n.type],
                            u = w[n.componentType],
                            c = u.BYTES_PER_ELEMENT,
                            h = c * l,
                            p = n.byteOffset || 0,
                            d = void 0 !== n.bufferView ? s.bufferViews[n.bufferView].byteStride : void 0,
                            m = !0 === n.normalized;
                        if (d && d !== h) {
                            let e = Math.floor(p / d),
                                s = "InterleavedBuffer:" + n.bufferView + ":" + n.componentType + ":" + e + ":" + n.count,
                                h = t.cache.get(s);
                            h || (a = new u(o, e * d, n.count * d / c), h = new r.vpT(a, d / c), t.cache.add(s, h)), i = new r.kB5(h, l, p % d / c, m)
                        } else a = null === o ? new u(n.count * l) : new u(o, p, n.count * l), i = new r.TlE(a, l, m);
                        if (void 0 !== n.sparse) {
                            let t = I.SCALAR,
                                s = w[n.sparse.indices.componentType],
                                a = n.sparse.indices.byteOffset || 0,
                                c = n.sparse.values.byteOffset || 0,
                                h = new s(e[1], a, n.sparse.count * t),
                                p = new u(e[2], c, n.sparse.count * l);
                            null !== o && (i = new r.TlE(i.array.slice(), i.itemSize, i.normalized));
                            for (let e = 0, t = h.length; e < t; e++) {
                                let t = h[e];
                                if (i.setX(t, p[e * l]), l >= 2 && i.setY(t, p[e * l + 1]), l >= 3 && i.setZ(t, p[e * l + 2]), l >= 4 && i.setW(t, p[e * l + 3]), l >= 5) throw Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")
                            }
                        }
                        return i
                    })
                }
                loadTexture(e) {
                    let t = this.json,
                        s = this.options,
                        r = t.textures[e],
                        n = t.images[r.source],
                        a = this.textureLoader;
                    if (n.uri) {
                        let e = s.manager.getHandler(n.uri);
                        null !== e && (a = e)
                    }
                    return this.loadTextureImage(e, n, a)
                }
                loadTextureImage(e, t, s) {
                    let n = this,
                        a = this.json,
                        i = this.options,
                        o = a.textures[e],
                        l = (t.uri || t.bufferView) + ":" + o.sampler;
                    if (this.textureCache[l]) return this.textureCache[l];
                    let u = self.URL || self.webkitURL,
                        c = t.uri || "",
                        h = !1,
                        p = !0,
                        d = c.search(/\.jpe?g($|\?)/i) > 0 || 0 === c.search(/^data\:image\/jpeg/);
                    if (("image/jpeg" === t.mimeType || d) && (p = !1), void 0 !== t.bufferView) c = n.getDependency("bufferView", t.bufferView).then(function(e) {
                        if ("image/png" === t.mimeType) {
                            let t = new DataView(e, 25, 1).getUint8(0, !1);
                            p = 6 === t || 4 === t || 3 === t
                        }
                        h = !0;
                        let s = new Blob([e], {
                            type: t.mimeType
                        });
                        return c = u.createObjectURL(s)
                    });
                    else if (void 0 === t.uri) throw Error("THREE.GLTFLoader: Image " + e + " is missing URI and bufferView");
                    let m = Promise.resolve(c).then(function(e) {
                        return new Promise(function(t, n) {
                            let a = t;
                            !0 === s.isImageBitmapLoader && (a = function(e) {
                                let s = new r.xEZ(e);
                                s.needsUpdate = !0, t(s)
                            }), s.load(U(e, i.path), a, void 0, n)
                        })
                    }).then(function(t) {
                        !0 === h && u.revokeObjectURL(c), t.flipY = !1, o.name && (t.name = o.name), p || (t.format = r.UCm);
                        let s = a.samplers || {},
                            i = s[o.sampler] || {};
                        return t.magFilter = L[i.magFilter] || r.wem, t.minFilter = L[i.minFilter] || r.D1R, t.wrapS = b[i.wrapS] || r.rpg, t.wrapT = b[i.wrapT] || r.rpg, n.associations.set(t, {
                            type: "textures",
                            index: e
                        }), t
                    }).catch(function() {
                        return console.error("THREE.GLTFLoader: Couldn't load texture", c), null
                    });
                    return this.textureCache[l] = m, m
                }
                assignTexture(e, t, s) {
                    let r = this;
                    return this.getDependency("texture", s.index).then(function(n) {
                        if (void 0 === s.texCoord || 0 == s.texCoord || "aoMap" === t && 1 == s.texCoord || console.warn("THREE.GLTFLoader: Custom UV set " + s.texCoord + " for texture " + t + " not yet supported."), r.extensions[i.KHR_TEXTURE_TRANSFORM]) {
                            let e = void 0 !== s.extensions ? s.extensions[i.KHR_TEXTURE_TRANSFORM] : void 0;
                            if (e) {
                                let t = r.associations.get(n);
                                n = r.extensions[i.KHR_TEXTURE_TRANSFORM].extendTexture(n, e), r.associations.set(n, t)
                            }
                        }
                        return e[t] = n, n
                    })
                }
                assignFinalMaterial(e) {
                    let t = e.geometry,
                        s = e.material,
                        n = void 0 !== t.attributes.tangent,
                        a = void 0 !== t.attributes.color,
                        i = void 0 === t.attributes.normal;
                    if (e.isPoints) {
                        let e = "PointsMaterial:" + s.uuid,
                            t = this.cache.get(e);
                        t || (t = new r.UY4, r.F5T.prototype.copy.call(t, s), t.color.copy(s.color), t.map = s.map, t.sizeAttenuation = !1, this.cache.add(e, t)), s = t
                    } else if (e.isLine) {
                        let e = "LineBasicMaterial:" + s.uuid,
                            t = this.cache.get(e);
                        t || (t = new r.nls, r.F5T.prototype.copy.call(t, s), t.color.copy(s.color), this.cache.add(e, t)), s = t
                    }
                    if (n || a || i) {
                        let e = "ClonedMaterial:" + s.uuid + ":";
                        s.isGLTFSpecularGlossinessMaterial && (e += "specular-glossiness:"), n && (e += "vertex-tangents:"), a && (e += "vertex-colors:"), i && (e += "flat-shading:");
                        let t = this.cache.get(e);
                        t || (t = s.clone(), a && (t.vertexColors = !0), i && (t.flatShading = !0), n && (t.normalScale && (t.normalScale.y *= -1), t.clearcoatNormalScale && (t.clearcoatNormalScale.y *= -1)), this.cache.add(e, t), this.associations.set(t, this.associations.get(s))), s = t
                    }
                    s.aoMap && void 0 === t.attributes.uv2 && void 0 !== t.attributes.uv && t.setAttribute("uv2", t.attributes.uv), e.material = s
                }
                getMaterialType() {
                    return r.Wid
                }
                loadMaterial(e) {
                    let t;
                    let s = this,
                        n = this.json,
                        a = this.extensions,
                        o = n.materials[e],
                        l = {},
                        u = o.extensions || {},
                        c = [];
                    if (u[i.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS]) {
                        let e = a[i.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS];
                        t = e.getMaterialType(), c.push(e.extendParams(l, o, s))
                    } else if (u[i.KHR_MATERIALS_UNLIT]) {
                        let e = a[i.KHR_MATERIALS_UNLIT];
                        t = e.getMaterialType(), c.push(e.extendParams(l, o, s))
                    } else {
                        let n = o.pbrMetallicRoughness || {};
                        if (l.color = new r.Ilk(1, 1, 1), l.opacity = 1, Array.isArray(n.baseColorFactor)) {
                            let e = n.baseColorFactor;
                            l.color.fromArray(e), l.opacity = e[3]
                        }
                        void 0 !== n.baseColorTexture && c.push(s.assignTexture(l, "map", n.baseColorTexture)), l.metalness = void 0 !== n.metallicFactor ? n.metallicFactor : 1, l.roughness = void 0 !== n.roughnessFactor ? n.roughnessFactor : 1, void 0 !== n.metallicRoughnessTexture && (c.push(s.assignTexture(l, "metalnessMap", n.metallicRoughnessTexture)), c.push(s.assignTexture(l, "roughnessMap", n.metallicRoughnessTexture))), t = this._invokeOne(function(t) {
                            return t.getMaterialType && t.getMaterialType(e)
                        }), c.push(Promise.all(this._invokeAll(function(t) {
                            return t.extendMaterialParams && t.extendMaterialParams(e, l)
                        })))
                    }!0 === o.doubleSided && (l.side = r.ehD);
                    let h = o.alphaMode || C.OPAQUE;
                    return h === C.BLEND ? (l.transparent = !0, l.depthWrite = !1) : (l.transparent = !1, h === C.MASK && (l.alphaTest = void 0 !== o.alphaCutoff ? o.alphaCutoff : .5)), void 0 !== o.normalTexture && t !== r.vBJ && (c.push(s.assignTexture(l, "normalMap", o.normalTexture)), l.normalScale = new r.FM8(1, -1), void 0 !== o.normalTexture.scale && l.normalScale.set(o.normalTexture.scale, -o.normalTexture.scale)), void 0 !== o.occlusionTexture && t !== r.vBJ && (c.push(s.assignTexture(l, "aoMap", o.occlusionTexture)), void 0 !== o.occlusionTexture.strength && (l.aoMapIntensity = o.occlusionTexture.strength)), void 0 !== o.emissiveFactor && t !== r.vBJ && (l.emissive = new r.Ilk().fromArray(o.emissiveFactor)), void 0 !== o.emissiveTexture && t !== r.vBJ && c.push(s.assignTexture(l, "emissiveMap", o.emissiveTexture)), Promise.all(c).then(function() {
                        let n;
                        return n = t === y ? a[i.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS].createMaterial(l) : new t(l), o.name && (n.name = o.name), n.map && (n.map.encoding = r.knz), n.emissiveMap && (n.emissiveMap.encoding = r.knz), F(n, o), s.associations.set(n, {
                            type: "materials",
                            index: e
                        }), o.extensions && H(a, n, o), n
                    })
                }
                createUniqueName(e) {
                    let t = r.iUV.sanitizeNodeName(e || ""),
                        s = t;
                    for (let e = 1; this.nodeNamesUsed[s]; ++e) s = t + "_" + e;
                    return this.nodeNamesUsed[s] = !0, s
                }
                loadGeometries(e) {
                    let t = this,
                        s = this.extensions,
                        n = this.primitiveCache,
                        a = [];
                    for (let o = 0, l = e.length; o < l; o++) {
                        let l = e[o],
                            u = function(e) {
                                let t = e.extensions && e.extensions[i.KHR_DRACO_MESH_COMPRESSION];
                                return t ? "draco:" + t.bufferView + ":" + t.indices + ":" + k(t.attributes) : e.indices + ":" + k(e.attributes) + ":" + e.mode
                            }(l),
                            c = n[u];
                        if (c) a.push(c.promise);
                        else {
                            let e;
                            e = l.extensions && l.extensions[i.KHR_DRACO_MESH_COMPRESSION] ? function(e) {
                                return s[i.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(e, t).then(function(s) {
                                    return B(s, e, t)
                                })
                            }(l) : B(new r.u9r, l, t), n[u] = {
                                primitive: l,
                                promise: e
                            }, a.push(e)
                        }
                    }
                    return Promise.all(a)
                }
                loadMesh(e) {
                    let t = this,
                        s = this.json,
                        n = this.extensions,
                        a = s.meshes[e],
                        i = a.primitives,
                        o = [];
                    for (let e = 0, t = i.length; e < t; e++) {
                        var l;
                        let t = void 0 === i[e].material ? (void 0 === (l = this.cache).DefaultMaterial && (l.DefaultMaterial = new r.Wid({
                            color: 16777215,
                            emissive: 0,
                            metalness: 1,
                            roughness: 1,
                            transparent: !1,
                            depthTest: !0,
                            side: r.Wl3
                        })), l.DefaultMaterial) : this.getDependency("material", i[e].material);
                        o.push(t)
                    }
                    return o.push(t.loadGeometries(i)), Promise.all(o).then(function(s) {
                        let o = s.slice(0, s.length - 1),
                            l = s[s.length - 1],
                            u = [];
                        for (let s = 0, c = l.length; s < c; s++) {
                            let c;
                            let h = l[s],
                                p = i[s],
                                d = o[s];
                            if (p.mode === _.TRIANGLES || p.mode === _.TRIANGLE_STRIP || p.mode === _.TRIANGLE_FAN || void 0 === p.mode) !0 !== (c = !0 === a.isSkinnedMesh ? new r.TUv(h, d) : new r.Kj0(h, d)).isSkinnedMesh || c.geometry.attributes.skinWeight.normalized || c.normalizeSkinWeights(), p.mode === _.TRIANGLE_STRIP ? c.geometry = K(c.geometry, r.UlW) : p.mode === _.TRIANGLE_FAN && (c.geometry = K(c.geometry, r.z$h));
                            else if (p.mode === _.LINES) c = new r.ejS(h, d);
                            else if (p.mode === _.LINE_STRIP) c = new r.x12(h, d);
                            else if (p.mode === _.LINE_LOOP) c = new r.blk(h, d);
                            else if (p.mode === _.POINTS) c = new r.woe(h, d);
                            else throw Error("THREE.GLTFLoader: Primitive mode unsupported: " + p.mode);
                            Object.keys(c.geometry.morphAttributes).length > 0 && function(e, t) {
                                if (e.updateMorphTargets(), void 0 !== t.weights)
                                    for (let s = 0, r = t.weights.length; s < r; s++) e.morphTargetInfluences[s] = t.weights[s];
                                if (t.extras && Array.isArray(t.extras.targetNames)) {
                                    let s = t.extras.targetNames;
                                    if (e.morphTargetInfluences.length === s.length) {
                                        e.morphTargetDictionary = {};
                                        for (let t = 0, r = s.length; t < r; t++) e.morphTargetDictionary[s[t]] = t
                                    } else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")
                                }
                            }(c, a), c.name = t.createUniqueName(a.name || "mesh_" + e), F(c, a), p.extensions && H(n, c, p), t.assignFinalMaterial(c), u.push(c)
                        }
                        if (1 === u.length) return u[0];
                        let c = new r.ZAu;
                        for (let e = 0, t = u.length; e < t; e++) c.add(u[e]);
                        return c
                    })
                }
                loadCamera(e) {
                    let t;
                    let s = this.json.cameras[e],
                        n = s[s.type];
                    if (!n) {
                        console.warn("THREE.GLTFLoader: Missing camera parameters.");
                        return
                    }
                    return "perspective" === s.type ? t = new r.cPb(r.M8C.radToDeg(n.yfov), n.aspectRatio || 1, n.znear || 1, n.zfar || 2e6) : "orthographic" === s.type && (t = new r.iKG(-n.xmag, n.xmag, n.ymag, -n.ymag, n.znear, n.zfar)), s.name && (t.name = this.createUniqueName(s.name)), F(t, s), Promise.resolve(t)
                }
                loadSkin(e) {
                    let t = this.json.skins[e],
                        s = {
                            joints: t.joints
                        };
                    return void 0 === t.inverseBindMatrices ? Promise.resolve(s) : this.getDependency("accessor", t.inverseBindMatrices).then(function(e) {
                        return s.inverseBindMatrices = e, s
                    })
                }
                loadAnimation(e) {
                    let t = this.json,
                        s = t.animations[e],
                        n = [],
                        a = [],
                        i = [],
                        o = [],
                        l = [];
                    for (let e = 0, t = s.channels.length; e < t; e++) {
                        let t = s.channels[e],
                            r = s.samplers[t.sampler],
                            u = t.target,
                            c = void 0 !== u.node ? u.node : u.id,
                            h = void 0 !== s.parameters ? s.parameters[r.input] : r.input,
                            p = void 0 !== s.parameters ? s.parameters[r.output] : r.output;
                        n.push(this.getDependency("node", c)), a.push(this.getDependency("accessor", h)), i.push(this.getDependency("accessor", p)), o.push(r), l.push(u)
                    }
                    return Promise.all([Promise.all(n), Promise.all(a), Promise.all(i), Promise.all(o), Promise.all(l)]).then(function(t) {
                        let n = t[0],
                            a = t[1],
                            i = t[2],
                            o = t[3],
                            l = t[4],
                            u = [];
                        for (let e = 0, t = n.length; e < t; e++) {
                            let t;
                            let s = n[e],
                                c = a[e],
                                h = i[e],
                                p = o[e],
                                d = l[e];
                            if (void 0 === s) continue;
                            switch (s.updateMatrix(), s.matrixAutoUpdate = !0, N[d.path]) {
                                case N.weights:
                                    t = r.dUE;
                                    break;
                                case N.rotation:
                                    t = r.iLg;
                                    break;
                                case N.position:
                                case N.scale:
                                default:
                                    t = r.yC1
                            }
                            let m = s.name ? s.name : s.uuid,
                                f = void 0 !== p.interpolation ? O[p.interpolation] : r.NMF,
                                g = [];
                            N[d.path] === N.weights ? s.traverse(function(e) {
                                !0 === e.isMesh && e.morphTargetInfluences && g.push(e.name ? e.name : e.uuid)
                            }) : g.push(m);
                            let T = h.array;
                            if (h.normalized) {
                                let e = D(T.constructor),
                                    t = new Float32Array(T.length);
                                for (let s = 0, r = T.length; s < r; s++) t[s] = T[s] * e;
                                T = t
                            }
                            for (let e = 0, s = g.length; e < s; e++) {
                                let s = new t(g[e] + "." + N[d.path], c.array, T, f);
                                "CUBICSPLINE" === p.interpolation && (s.createInterpolant = function(e) {
                                    return new S(this.times, this.values, this.getValueSize() / 3, e)
                                }, s.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline = !0), u.push(s)
                            }
                        }
                        let c = s.name ? s.name : "animation_" + e;
                        return new r.m7l(c, void 0, u)
                    })
                }
                createNodeMesh(e) {
                    let t = this.json,
                        s = this,
                        r = t.nodes[e];
                    return void 0 === r.mesh ? null : s.getDependency("mesh", r.mesh).then(function(e) {
                        let t = s._getNodeRef(s.meshCache, r.mesh, e);
                        return void 0 !== r.weights && t.traverse(function(e) {
                            if (e.isMesh)
                                for (let t = 0, s = r.weights.length; t < s; t++) e.morphTargetInfluences[t] = r.weights[t]
                        }), t
                    })
                }
                loadNode(e) {
                    let t = this.json,
                        s = this.extensions,
                        n = this,
                        a = t.nodes[e],
                        i = a.name ? n.createUniqueName(a.name) : "";
                    return (function() {
                        let t = [],
                            s = n._invokeOne(function(t) {
                                return t.createNodeMesh && t.createNodeMesh(e)
                            });
                        return s && t.push(s), void 0 !== a.camera && t.push(n.getDependency("camera", a.camera).then(function(e) {
                            return n._getNodeRef(n.cameraCache, a.camera, e)
                        })), n._invokeAll(function(t) {
                            return t.createNodeAttachment && t.createNodeAttachment(e)
                        }).forEach(function(e) {
                            t.push(e)
                        }), Promise.all(t)
                    })().then(function(t) {
                        let o;
                        if ((o = !0 === a.isBone ? new r.N$j : t.length > 1 ? new r.ZAu : 1 === t.length ? t[0] : new r.Tme) !== t[0])
                            for (let e = 0, s = t.length; e < s; e++) o.add(t[e]);
                        if (a.name && (o.userData.name = a.name, o.name = i), F(o, a), a.extensions && H(s, o, a), void 0 !== a.matrix) {
                            let e = new r.yGw;
                            e.fromArray(a.matrix), o.applyMatrix4(e)
                        } else void 0 !== a.translation && o.position.fromArray(a.translation), void 0 !== a.rotation && o.quaternion.fromArray(a.rotation), void 0 !== a.scale && o.scale.fromArray(a.scale);
                        return n.associations.set(o, {
                            type: "nodes",
                            index: e
                        }), o
                    })
                }
                loadScene(e) {
                    let t = this.json,
                        s = this.extensions,
                        n = this.json.scenes[e],
                        a = new r.ZAu;
                    n.name && (a.name = this.createUniqueName(n.name)), F(a, n), n.extensions && H(s, a, n);
                    let i = n.nodes || [],
                        o = [];
                    for (let e = 0, s = i.length; e < s; e++) o.push(function e(t, s, n, a) {
                        let i = n.nodes[t];
                        return a.getDependency("node", t).then(function(e) {
                            let t;
                            return void 0 === i.skin ? e : a.getDependency("skin", i.skin).then(function(e) {
                                t = e;
                                let s = [];
                                for (let e = 0, r = t.joints.length; e < r; e++) s.push(a.getDependency("node", t.joints[e]));
                                return Promise.all(s)
                            }).then(function(s) {
                                return e.traverse(function(e) {
                                    if (!e.isMesh) return;
                                    let n = [],
                                        a = [];
                                    for (let e = 0, i = s.length; e < i; e++) {
                                        let i = s[e];
                                        if (i) {
                                            n.push(i);
                                            let s = new r.yGw;
                                            void 0 !== t.inverseBindMatrices && s.fromArray(t.inverseBindMatrices.array, 16 * e), a.push(s)
                                        } else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.', t.joints[e])
                                    }
                                    e.bind(new r.OdW(n, a), e.matrixWorld)
                                }), e
                            })
                        }).then(function(t) {
                            s.add(t);
                            let r = [];
                            if (i.children) {
                                let s = i.children;
                                for (let i = 0, o = s.length; i < o; i++) {
                                    let o = s[i];
                                    r.push(e(o, t, n, a))
                                }
                            }
                            return Promise.all(r)
                        })
                    }(i[e], a, t, this));
                    return Promise.all(o).then(function() {
                        return a
                    })
                }
            }

            function B(e, t, s) {
                let n = t.attributes,
                    a = [];
                for (let t in n) {
                    let r = P[t] || t.toLowerCase();
                    r in e.attributes || a.push(function(t, r) {
                        return s.getDependency("accessor", t).then(function(t) {
                            e.setAttribute(r, t)
                        })
                    }(n[t], r))
                }
                if (void 0 !== t.indices && !e.index) {
                    let r = s.getDependency("accessor", t.indices).then(function(t) {
                        e.setIndex(t)
                    });
                    a.push(r)
                }
                return F(e, t), ! function(e, t, s) {
                    let n = t.attributes,
                        a = new r.ZzF;
                    if (void 0 === n.POSITION) return;
                    {
                        let e = s.json.accessors[n.POSITION],
                            t = e.min,
                            i = e.max;
                        if (void 0 !== t && void 0 !== i) {
                            if (a.set(new r.Pa4(t[0], t[1], t[2]), new r.Pa4(i[0], i[1], i[2])), e.normalized) {
                                let t = D(w[e.componentType]);
                                a.min.multiplyScalar(t), a.max.multiplyScalar(t)
                            }
                        } else {
                            console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");
                            return
                        }
                    }
                    let i = t.targets;
                    if (void 0 !== i) {
                        let e = new r.Pa4,
                            t = new r.Pa4;
                        for (let r = 0, n = i.length; r < n; r++) {
                            let n = i[r];
                            if (void 0 !== n.POSITION) {
                                let r = s.json.accessors[n.POSITION],
                                    a = r.min,
                                    i = r.max;
                                if (void 0 !== a && void 0 !== i) {
                                    if (t.setX(Math.max(Math.abs(a[0]), Math.abs(i[0]))), t.setY(Math.max(Math.abs(a[1]), Math.abs(i[1]))), t.setZ(Math.max(Math.abs(a[2]), Math.abs(i[2]))), r.normalized) {
                                        let e = D(w[r.componentType]);
                                        t.multiplyScalar(e)
                                    }
                                    e.max(t)
                                } else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")
                            }
                        }
                        a.expandByVector(e)
                    }
                    e.boundingBox = a;
                    let o = new r.aLr;
                    a.getCenter(o.center), o.radius = a.min.distanceTo(a.max) / 2, e.boundingSphere = o
                }(e, t, s), Promise.all(a).then(function() {
                    return void 0 !== t.targets ? function(e, t, s) {
                        let r = !1,
                            n = !1;
                        for (let e = 0, s = t.length; e < s; e++) {
                            let s = t[e];
                            if (void 0 !== s.POSITION && (r = !0), void 0 !== s.NORMAL && (n = !0), r && n) break
                        }
                        if (!r && !n) return Promise.resolve(e);
                        let a = [],
                            i = [];
                        for (let o = 0, l = t.length; o < l; o++) {
                            let l = t[o];
                            if (r) {
                                let t = void 0 !== l.POSITION ? s.getDependency("accessor", l.POSITION) : e.attributes.position;
                                a.push(t)
                            }
                            if (n) {
                                let t = void 0 !== l.NORMAL ? s.getDependency("accessor", l.NORMAL) : e.attributes.normal;
                                i.push(t)
                            }
                        }
                        return Promise.all([Promise.all(a), Promise.all(i)]).then(function(t) {
                            let s = t[0],
                                a = t[1];
                            return r && (e.morphAttributes.position = s), n && (e.morphAttributes.normal = a), e.morphTargetsRelative = !0, e
                        })
                    }(e, t.targets, s) : e
                })
            }

            function K(e, t) {
                let s = e.getIndex();
                if (null === s) {
                    let t = [],
                        r = e.getAttribute("position");
                    if (void 0 === r) return console.error("THREE.GLTFLoader.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."), e;
                    for (let e = 0; e < r.count; e++) t.push(e);
                    e.setIndex(t), s = e.getIndex()
                }
                let n = s.count - 2,
                    a = [];
                if (t === r.z$h)
                    for (let e = 1; e <= n; e++) a.push(s.getX(0)), a.push(s.getX(e)), a.push(s.getX(e + 1));
                else
                    for (let e = 0; e < n; e++) e % 2 == 0 ? (a.push(s.getX(e)), a.push(s.getX(e + 1)), a.push(s.getX(e + 2))) : (a.push(s.getX(e + 2)), a.push(s.getX(e + 1)), a.push(s.getX(e)));
                a.length / 3 !== n && console.error("THREE.GLTFLoader.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");
                let i = e.clone();
                return i.setIndex(a), i
            }
        },
        2666: function(e, t, s) {
            s.d(t, {
                x: function() {
                    return n
                }
            });
            var r = s(2212);
            class n extends r.yxD {
                constructor(e) {
                    super(e), this.type = r.cLu
                }
                parse(e) {
                    let t = function(e, t) {
                            switch (e) {
                                case 1:
                                    console.error("THREE.RGBELoader Read Error: " + (t || ""));
                                    break;
                                case 2:
                                    console.error("THREE.RGBELoader Write Error: " + (t || ""));
                                    break;
                                case 3:
                                    console.error("THREE.RGBELoader Bad File Format: " + (t || ""));
                                    break;
                                default:
                                    console.error("THREE.RGBELoader: Error: " + (t || ""))
                            }
                            return -1
                        },
                        s = function(e, t, s) {
                            t = t || 1024;
                            let r = e.pos,
                                n = -1,
                                a = 0,
                                i = "",
                                o = String.fromCharCode.apply(null, new Uint16Array(e.subarray(r, r + 128)));
                            for (; 0 > (n = o.indexOf("\n")) && a < t && r < e.byteLength;) i += o, a += o.length, r += 128, o += String.fromCharCode.apply(null, new Uint16Array(e.subarray(r, r + 128)));
                            return -1 < n && (!1 !== s && (e.pos += a + n + 1), i + o.slice(0, n))
                        },
                        n = new Uint8Array(e);
                    n.pos = 0;
                    let a = function(e) {
                        let r, n;
                        let a = /^\s*GAMMA\s*=\s*(\d+(\.\d+)?)\s*$/,
                            i = /^\s*EXPOSURE\s*=\s*(\d+(\.\d+)?)\s*$/,
                            o = /^\s*FORMAT=(\S+)\s*$/,
                            l = /^\s*\-Y\s+(\d+)\s+\+X\s+(\d+)\s*$/,
                            u = {
                                valid: 0,
                                string: "",
                                comments: "",
                                programtype: "RGBE",
                                format: "",
                                gamma: 1,
                                exposure: 1,
                                width: 0,
                                height: 0
                            };
                        if (e.pos >= e.byteLength || !(r = s(e))) return t(1, "no header found");
                        if (!(n = r.match(/^#\?(\S+)/))) return t(3, "bad initial token");
                        for (u.valid |= 1, u.programtype = n[1], u.string += r + "\n"; !1 !== (r = s(e));) {
                            if (u.string += r + "\n", "#" === r.charAt(0)) {
                                u.comments += r + "\n";
                                continue
                            }
                            if ((n = r.match(a)) && (u.gamma = parseFloat(n[1], 10)), (n = r.match(i)) && (u.exposure = parseFloat(n[1], 10)), (n = r.match(o)) && (u.valid |= 2, u.format = n[1]), (n = r.match(l)) && (u.valid |= 4, u.height = parseInt(n[1], 10), u.width = parseInt(n[2], 10)), 2 & u.valid && 4 & u.valid) break
                        }
                        return 2 & u.valid ? 4 & u.valid ? u : t(3, "missing image size specifier") : t(3, "missing format specifier")
                    }(n);
                    if (-1 !== a) {
                        let e = a.width,
                            s = a.height,
                            i = function(e, s, r) {
                                if (s < 8 || s > 32767 || 2 !== e[0] || 2 !== e[1] || 128 & e[2]) return new Uint8Array(e);
                                if (s !== (e[2] << 8 | e[3])) return t(3, "wrong scanline width");
                                let n = new Uint8Array(4 * s * r);
                                if (!n.length) return t(4, "unable to allocate buffer space");
                                let a = 0,
                                    i = 0,
                                    o = 4 * s,
                                    l = new Uint8Array(4),
                                    u = new Uint8Array(o),
                                    c = r;
                                for (; c > 0 && i < e.byteLength;) {
                                    if (i + 4 > e.byteLength) return t(1);
                                    if (l[0] = e[i++], l[1] = e[i++], l[2] = e[i++], l[3] = e[i++], 2 != l[0] || 2 != l[1] || (l[2] << 8 | l[3]) != s) return t(3, "bad rgbe scanline format");
                                    let r = 0,
                                        h;
                                    for (; r < o && i < e.byteLength;) {
                                        h = e[i++];
                                        let s = h > 128;
                                        if (s && (h -= 128), 0 === h || r + h > o) return t(3, "bad scanline data");
                                        if (s) {
                                            let t = e[i++];
                                            for (let e = 0; e < h; e++) u[r++] = t
                                        } else u.set(e.subarray(i, i + h), r), r += h, i += h
                                    }
                                    for (let e = 0; e < s; e++) {
                                        let t = 0;
                                        n[a] = u[e + t], t += s, n[a + 1] = u[e + t], t += s, n[a + 2] = u[e + t], t += s, n[a + 3] = u[e + t], a += 4
                                    }
                                    c--
                                }
                                return n
                            }(n.subarray(n.pos), e, s);
                        if (-1 !== i) {
                            let t, n, o, l;
                            switch (this.type) {
                                case r.ywz:
                                    t = i, n = r.aoB, o = r.ywz;
                                    break;
                                case r.VzW:
                                    l = i.length / 4 * 3;
                                    let u = new Float32Array(l);
                                    for (let e = 0; e < l; e++) ! function(e, t, s, r) {
                                        let n = e[t + 3],
                                            a = Math.pow(2, n - 128) / 255;
                                        s[r + 0] = e[t + 0] * a, s[r + 1] = e[t + 1] * a, s[r + 2] = e[t + 2] * a
                                    }(i, 4 * e, u, 3 * e);
                                    t = u, n = r.UCm, o = r.VzW;
                                    break;
                                case r.cLu:
                                    l = i.length / 4 * 3;
                                    let c = new Uint16Array(l);
                                    for (let e = 0; e < l; e++) ! function(e, t, s, n) {
                                        let a = e[t + 3],
                                            i = Math.pow(2, a - 128) / 255;
                                        s[n + 0] = r.A5E.toHalfFloat(e[t + 0] * i), s[n + 1] = r.A5E.toHalfFloat(e[t + 1] * i), s[n + 2] = r.A5E.toHalfFloat(e[t + 2] * i)
                                    }(i, 4 * e, c, 3 * e);
                                    t = c, n = r.UCm, o = r.cLu;
                                    break;
                                default:
                                    console.error("THREE.RGBELoader: unsupported type: ", this.type)
                            }
                            return {
                                width: e,
                                height: s,
                                data: t,
                                header: a.string,
                                gamma: a.gamma,
                                exposure: a.exposure,
                                format: n,
                                type: o
                            }
                        }
                    }
                    return null
                }
                setDataType(e) {
                    return this.type = e, this
                }
                load(e, t, s, n) {
                    return super.load(e, function(e, s) {
                        switch (e.type) {
                            case r.ywz:
                                e.encoding = r.KC9, e.minFilter = r.TyD, e.magFilter = r.TyD, e.generateMipmaps = !1, e.flipY = !0;
                                break;
                            case r.VzW:
                            case r.cLu:
                                e.encoding = r.rnI, e.minFilter = r.wem, e.magFilter = r.wem, e.generateMipmaps = !1, e.flipY = !0
                        }
                        t && t(e, s)
                    }, s, n)
                }
            }
        }
    }
]);