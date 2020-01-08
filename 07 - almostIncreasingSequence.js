function almostIncreasingSequence(sequence) {
    var errors = 0;
    
    for (i = 0; i < sequence.length; i++) {
        if (sequence[i] >= sequence[i+1] && sequence[i] >= sequence[i+2]) {
            sequence.splice(i,1);
            errors++;

            if (sequence[i] > sequence[i+1]) {
                //sequence.splice(i+1,1);
                errors++;

            }
        } continue;
    }
    
    for (i = 0; i < sequence.length; i++) {
        if (sequence[i+1] <= sequence[i]) {
            sequence.splice(i+1,1);
            errors++;
            
            if (sequence[i+1] <= sequence[i]) {
                //sequence.splice(i+1,1);
                errors++;
            }
        }
    } return errors <= 1;
}
