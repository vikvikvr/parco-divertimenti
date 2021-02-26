const Tag = require("./Tag.js")

describe("Constructor exceptions", () => {
   test("missing id", () => {
      expect(() => {
         const tag = new Tag(_, "3")
      }).toThrow()
   })
})

describe("Getters", () => {
   const tag = new Tag("A1S2D3F4", true)
   test("get id", () => {
      expect(tag.id).toEqual("A1S2D3F4")
   })
   test("get isReader", () => {
      expect(tag.isReader).toBeTruthy()
   })
})

describe("Methods", () => {
   const readerTag = new Tag("A1S2D3F4", true)
   const writerTag = new Tag("G4H5", false)
   test("onRead returns senderId", () => {
      expect(readerTag.onRead("SENDER_ID")).toEqual("SENDER_ID")
   })
   test("onRead is missing senderId", () => {
      expect(() => readerTag.onRead(undefined)).toThrow()
   })

   test("onRead called on a write-only Tag", () => {
      expect(() => writerTag.onRead("SENDER_ID")).toThrow()
   })
})
