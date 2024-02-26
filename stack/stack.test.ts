import Stack from "./stack";

test("stack", function () {
    const list = new Stack<number>()
    list.push(5)
    list.push(7)
    list.push(9)

    expect(list.pop()).toEqual(9)
    expect(list.length).toEqual(2)

    list.push(11); //[5,7,11]
    expect(list.pop()).toEqual(11);//[5,7]
    expect(list.pop()).toEqual(7);//[5]
    expect(list.peek()).toEqual(5); //[5]
    expect(list.pop()).toEqual(5);//[]
    expect(list.pop()).toEqual(undefined);
})
