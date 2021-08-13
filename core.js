const $ = (cssSelector) => new ananquery(cssSelector);
const ananQuery = $;

class ananquery {
	constructor(selector) {
		this.set = new Set();
		if (typeof selector === "string") {
			const elements = document.querySelectorAll(selector);

			for (const item of elements) {
				this.set.add(item);
			}
		} else if (selector instanceof HTMLElement) {
			this.set.add(selector);
		}
	}
	html(htmlContent) {
		for (const item of this.set) {
			item.innerHTML = htmlContent;
		}
		return this;
	}
	text(textContent) {
		if (textContent === undefined) {
			let el = Array.from(this.set)[0];
			return el.textContent;
		}
		for (const item of this.set) {
			item.textContent = textContent;
		}
		return this;
	}
	empty() {
		for (const item of this.set) {
			item.innerHTML = "";
		}
		return this;
	}
	remove() {
		for (const item of this.set) {
			item.remove(item);
		}
		return this;
	}
	on(event, handler) {
		for (const item of this.set) {
			item.addEventListener(event, (e) => handler(e));
		}
		return this;
	}
	attr(name, value) {
		if (value === undefined) {
			const item = Array.from(this.set)[0];
			const el = item.getAttribute(name);
			console.log(el);
		} else {
			for (const item of this.set) {
				item.setAttribute(name, value);
			}
		}
		return this;
	}
	addClass(className) {
		for (const item of this.set) {
			item.classList.add(className);
		}
		return this;
	}
	each(callback) {
		const arr = Array.from(this.set);
		for (let i = 0; i < arr.length; i++) {
			callback.call(arr[i], i, arr[i]);
		}
		return this;
	}
	css(propertyName, value) {
		if (value === undefined) {
			const item = Array.from(this.set)[0];
			return item.style[propertyName];
		} else {
			for (const item of this.set) {
				item.style[propertyName] = value;
			}
		}
		return this;
	}
	is(cssSelector) {
		const elems = Array.from(document.querySelectorAll(cssSelector));
		const arr = Array.from(this.set);
		for (const item of arr) {
			if (!elems.includes(item)) {
				return false;
			}
		}
		return true;
	}
	click(handler) {
		if (handler === undefined) {
			for (const item of this.set) {
				item.click();
			}
		} else {
			for (const item of this.set) {
				item.addEventListener("click", handler);
			}
		}
		return this;
	}
	height() {
		for (const item of this.set) {
			console.log("The height of the button is " + item.clientHeight + "px");
		}
		return this;
	}
	width() {
		for (const item of this.set) {
			console.log("The width of the button is " + item.clientWidth + "px");
		}
		return this;
	}
	children() {
		let elements = Array.from(this.set);
		for (const item of elements) {
			console.log(item.children);
		}
	}
	mouse(event, handler) {
		for (const item of this.set) {
			item.addEventListener(event, handler);
		}
		return this;
	}
	objectAmount() {
		let counter = 0;
		for (const item of this.set) {
			counter++;
		}
		console.log("Amout of object with entered class/tag/id: " + counter);
	}
	hasClass(className) {
		for (const item of this.set) {
			if (item.classList.contains(className)) {
				console.log("true");
			} else {
				console.log("false");
			}
		}
	}
	hide(className) {
		for (const item of this.set) {
			item.style.display = "none";
		}
		return this;
	}
	show(className) {
		for (const item of this.set) {
			item.style.display = "block";
			item.style.display = "inline";
		}
		return this;
	}
	removeClass(className) {
		for (const item of this.set) {
			item.classList.remove(className);
		}
		return this;
	}
	removeAttr(name) {
		for (const item of this.set) {
			item.removeAttribute(name);
		}
		return this;
	}
	toggleClass(className) {
		for (const item of this.set) {
			if (item.classList.contains(className)) {
				item.classList.remove(className);
			} else {
				item.classList.add(className);
			}
		}
		return this;
	}
	offset(p, m) {
		for (const item of this.set) {
			item.style.padding = p;
			item.style.margin = m;
		}
	}
}
