const computeLocation = (movements: string[]): { horizontal: number, depth: number } => {
    let horizontal = 0;
    let depth = 0;
    movements.forEach(movement => {
        const [direction, amount] = movement.split(' ');
        switch (direction) {
            case 'forward':
                horizontal += parseInt(amount, 10);
                break;
            case 'down':
                depth += parseInt(amount, 10);
                break;
            case 'up':
                depth -= parseInt(amount, 10);
                break;
        }
    });

    return { horizontal, depth };
}

export default computeLocation;