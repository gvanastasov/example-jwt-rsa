const ANSI_COLORS = {
    GREEN: '\u001b[32m',
    RESET: '\u001b[0m'
}

function color(msg, color) {
    return `${color}${msg}${ANSI_COLORS.RESET}`
}

function green(msg) {
    return color(msg, ANSI_COLORS.GREEN)
}

exports.color = color
exports.green = green