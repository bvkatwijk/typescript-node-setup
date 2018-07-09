import { App } from "./app";

test('get port', function() {
    expect(new App().getPort()).toBe(3000);
});