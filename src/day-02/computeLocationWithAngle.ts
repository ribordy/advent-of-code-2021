const computeLocationWithAngle = (movements: string[]): { horizontal: number, depth: number } => {
    let horizontal = 0;
    let depth = 0;
    let aim = 0;
    movements.forEach(movement => {
        const [direction, amountStr] = movement.split(' ');
        const amount = parseInt(amountStr, 10);
        switch (direction) {
            case 'forward':
                horizontal += amount;
                depth += amount * aim;
                break;
            case 'down':
                aim += amount;
                break;
            case 'up':
                aim -= amount;
                break;
        }
    });

    return { horizontal, depth };
}

export default computeLocationWithAngle;