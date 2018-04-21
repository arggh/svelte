/* generated by Svelte vX.Y.Z */
import { Component, assign, noop } from "svelte/shared.js";

function create_main_fragment(component, state) {

	return {
		c: noop,

		m: noop,

		p: noop,

		u: noop,

		d: noop
	};
}

class SvelteComponent extends Component {
	constructor(options) {
		super(options);
		this._state = assign({}, options.data);

		this._fragment = create_main_fragment(this, this._state);

		if (options.target) {
			this._fragment.c();
			this._mount(options.target, options.anchor);
		}
	}

	foo() { return console.log('foo'); }

	bar(x) { return console.log(x); }

	baz(x) { return console.log(x); }

	qux() {
		return 42;
	}
}
export default SvelteComponent;