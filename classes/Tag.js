class Tag {
   #id
   #isReader = false
   constructor(id, isReader) {
      if (id === undefined) {
         throw "Must provide an id when creating a tag."
      }
      this.#id = id
      this.#isReader = isReader
   }

   get id() {
      return this.#id
   }

   get isReader() {
      return this.#isReader
   }

   onRead(senderId) {
      if (senderId === undefined) {
         throw "Tag did not receive senderId while reading."
      }
      if (this.#isReader == false) {
         throw "onRead should not be called on a write-only Tag."
      }
      return senderId
   }
}

module.exports = Tag
