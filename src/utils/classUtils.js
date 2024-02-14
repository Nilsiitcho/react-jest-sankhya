export function getCounterClass(value){
    if(value > 0){
        return 'positive';
    }

    if(value < 0){
        return 'negative';
    }

    return '';
}