const random = (start: number, end: number) => {
    const p = Math.random();
    return Math.floor(start * (1 - p) + end * p);
}

async function main({ params }: Args): Promise<Output> {
    if (params.position == null) params.position = random(0, 3);
    if (params.shooting_hand == null) params.shooting_hand = random(0, 2);

    const style = params.style || '写实';
    const uniform_number:string = (params.uniform_number || 10).toString();
    const uniform_color = params.uniform_color || '红';
    const position = params.position  == 0 ? '守门员': (params.position == 1 ? '前锋': '后卫');
    const shooting_hand = params.shooting_hand == 0 ? '左手': '右手';
    const empty_hand = params.shooting_hand ? '左手': '右手';

    // 构建输出对象
    const ret = {
        style,
        uniform_number,
        uniform_color,
        position,
        shooting_hand,
    };

    return ret;
}