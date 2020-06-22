export class Sort {
    /**
     * Сортировка пузырьком
     * @param {Array} arr массив значений
     * @returns {Object{newArr,caallback} 
     */
    buble(arr) {
        const props = {newArr: arr.map((item)=>{return item}), callback: []};
        for (let i = 0; i < props.newArr.length - 1; i++) {
            let flag = true;
            let j = 0;
            while (j < props.newArr.length - i - 1) {
                props.callback.push([j,j+1]);
                if (props.newArr[j] > props.newArr[j + 1]) {
                    props.callback[props.callback.length - 1].push(true);
                    let t = props.newArr[j];
                    props.newArr[j] = props.newArr[j + 1];
                    props.newArr[j + 1] = t;
                    flag = false;
                } else {
                    props.callback[props.callback.length - 1].push(false);
                }
                j++;
            }
            props.callback[props.callback.length - 1].push(j);
            if (flag) {
                break;
            }
        }
        return props;
    }
}