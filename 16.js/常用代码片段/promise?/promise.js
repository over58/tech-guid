class Promise {
	constructor(executor) {
		this.state = 'pending'
		this.value = undefined
		this.season = undefined
		this.onFulfilled = []
		this.onRejected = []

		this._initBind()
		try {
			executor(this.resolve, this.reject)
		} catch (e) {
			this.reject(e)
		}
	}

	resolve(value) {
		if (this.state === 'pending') {
			this.state = 'fulfilled'
			this.value = value
			this.onFulfilled.forEach(fn => fn(value))
		}
	}

	reject(reason) {
		if (this.state === 'pending') {
			this.state = 'rejected'
			this.reason = reason
			this.onRejected.forEach(fn => fn(reason))
		}
	}

	_initBind() {
		this.resolve = this.resolve.bind(this)
		this.reject = this.reject.bind(this)
	}
}

Promise.prototype.then = function(onFulfilled, onRejected) {
	onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : value => value
	onRejected = typeof onRejected === 'function' ? onRejected : reason => {
		throw reason
	}

	let promise2 = new Promise((resove, reject) => {
		if (this.state === 'fulfilled') {
			setTimeout(() => {
				try {
					let x = onFulfilled(this.value)
					resolvePromise(promise2, x, resolve, reject)

				} catch (e) {
					//TODO handle the exception
					reject(e)
				}
			})
		}

		if (this.state === 'rejected') {
			setTimeout(() => {
				try {
					let x = onRejected(this.reason)
					resolvePromise(promise2, x, resolve, reject)
				} catch (e) {
					//TODO handle the exception
					reject(e)
				}
			})
		}

		if (this.state === 'pending') {
			this.onFulfilled.push(() => {
				setTimeout(() => {
					try {
						let x = onFulfilled(this.value)
						resolvePromise(promise2, x, resolve, reject)

					} catch (e) {
						//TODO handle the exception
						reject(e)
					}
				})
			})
			this.onRejected.push(() => {
				setTimeout(() => {
					try {
						let x = onRejected(this.reason)
						resolvePromise(promise2, x, resolve, reject)
					} catch (e) {
						//TODO handle the exception
						reject(e)
					}
				})
			})
		}
	})

	return promise2
}

function resolvePromise(promise2, x, resolve, reject) {
	if (promise2 === x) {
		reject(new TypeError('Chaining cycle'));
	}

	if (x !== null && (typeof x === 'object' || typeof x === 'function')) {
		//函数或对象
		let used
		try {
			let then = x.then
			if (typeof then === 'function') {
				then.call(x, (y) => {
					if (used) return;
					used = true
					resolvePromise(promise2, y, resolve, reject)
				}, (r) => {
					if (used) return;
					used = true
					reject(r)
				})
			} else {
				if (used) return;
				used = true
				resolve(x)
			}
		} catch (e) {
			//TODO handle the exception
			if (used) return
			used = true
			reject(e)
		}
	} else {
		//普通值
		resolve(x)
	}
}

module.exports = Promise
