function findTasks(tasks, Timeleft) {

    let choosing = [];
    let t_consumed = 0;
    let value_sum = 0;

    for (let i = 0; i < tasks.length; i++) {

        if (t_consumed + tasks[i].duration <= Timeleft) {
            choosing.push(tasks[i]);
            t_consumed += tasks[i].duration;
            value_sum += tasks[i].impact;
        }
    }

    return {
        choosing: choosing,
        Fullimpact: value_sum
    };
}

module.exports = findTasks;