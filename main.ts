let button = ""
let Direction2 = false
let DirectionL = false
let DirectionR = false
input.onButtonPressed(Button.A, function () {
    aperta_botão("esquerdo")
})
input.onButtonPressed(Button.B, function () {
    aperta_botão("direito")
})
function aperta_botão (buttonDirection: string) {
    button = buttonDirection
    Direction2 = true
    if (buttonDirection.includes("esquerdo")) {
        DirectionL = true
        servos.P0.setAngle(90)
        basic.pause(1000)
        servos.P0.setAngle(0)
    } else {
        DirectionR = true
        servos.P1.setAngle(90)
        basic.pause(1000)
        servos.P1.setAngle(0)
    }
    return "" + Direction2 + " " + button
}
