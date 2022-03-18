class Loader {
  async load() {
    if (this._wasm) return;

    this._wasm = await import(
      "../node_modules/@emurgo/cardano-serialization-lib-browser/cardano_serialization_lib_bg"
    );

    this._wasm2 = null;
  }

  get Cardano() {
    return this._wasm;
  }
}

export default new Loader();