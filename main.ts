let button = ""
let Direction2 = false
let DirectionL = false
let DirectionR = false
input.onButtonPressed(Button.A, function () {
    aperta_botão("esquerdo")
})
function aperta_botão (buttonDirection: string) {
    button = buttonDirection
    Direction2 = true
    if (buttonDirection.includes("esquerdo")) {
        DirectionL = true
        servos.P0.setAngle(90)
    } else {
        DirectionR = true
        servos.P1.setAngle(90)
    }
    return Direction2
}
