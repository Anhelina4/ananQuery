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
	//change html-content, can add html-tag
	html(htmlContent) {
		for (const item of this.set) {
			item.innerHTML = htmlContent;
		}
		return this;
	}
	//insert text of the elem, if there is no param, return first elem text
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
	//clear the html of the element
	empty() {
		for (const item of this.set) {
			item.innerHTML = "";
		}
		return this;
	}
	//delete the chosen object
	remove() {
		for (const item of this.set) {
			item.remove(item);
		}
		return this;
	}
	//let user to decide what event is called and whar it was called by)click, mouseover)
	on(event, handler) {
		for (const item of this.set) {
			item.addEventListener(event, (e) => handler(e));
		}
		return this;
	}
	//set an attribute with property or if there is no value get the Attribute
	attr(name, value) {
		if (value === undefined) {
			const item = Array.from(this.set)[0];
			const el = item.getAttribute(name);
		} else {
			for (const item of this.set) {
				item.setAttribute(name, value);
			}
		}
		return this;
	}
	//add class to the chosen element
	addClass(className) {
		for (const item of this.set) {
			item.classList.add(className);
		}
		return this;
	}
	//call a function for each element of set of choden elements
	each(callback) {
		const arr = Array.from(this.set);
		for (let i = 0; i < arr.length; i++) {
			callback.call(arr[i], i, arr[i]);
		}
		return this;
	}
	//set css property and value, if there is no value, return just ptopertyName
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
	//check if there are mathces between element and selector
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
	//carry out an event on click
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
	//return actual height of element(without offsets)
	height() {
		for (const item of this.set) {
			console.log("The height of the button is " + item.clientHeight + "px");
		}
		return this;
	}
	//return actual width of element(without offsets)
	width() {
		for (const item of this.set) {
			console.log("The width of the button is " + item.clientWidth + "px");
		}
		return this;
	}
	//return a collection with childNodes of given element
	children() {
		let elements = Array.from(this.set);
		for (const item of elements) {
			console.log(item.children);
		}
	}
	//carry out an event on mouse
	mouse(event, handler) {
		for (const item of this.set) {
			item.addEventListener(event, handler);
		}
		return this;
	}
	//display an amout of obj with chosen class/tag/id
	objectAmount() {
		let counter = 0;
		for (const item of this.set) {
			counter++;
		}
		console.log("Amout of object with entered class/tag/id: " + counter);
	}
	//checks wether the element has such class
	hasClass(className) {
		for (const item of this.set) {
			if (item.classList.contains(className)) {
				console.log("true");
			} else {
				console.log("false");
			}
		}
	}
	//hide an element
	hide(className) {
		for (const item of this.set) {
			item.style.display = "none";
		}
		return this;
	}
	//show an element
	show(className) {
		for (const item of this.set) {
			item.style.display = "block";
			item.style.display = "inline";
		}
		return this;
	}
	//remove class
	removeClass(className) {
		for (const item of this.set) {
			item.classList.remove(className);
		}
		return this;
	}
	//remove attr
	removeAttr(name) {
		for (const item of this.set) {
			item.removeAttribute(name);
		}
		return this;
	}
	//if the elem has such className, toggleClass delete it and vice versa
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
	//set offsets to the element
	offset(p, m) {
		for (const item of this.set) {
			item.style.padding = p;
			item.style.margin = m;
		}
	}
}
