function makeArrayConsecutive2(statues) {
    var x = Math.min.apply(Math,statues);
    var y = Math.max.apply(Math,statues);
    var numOfmissing = y - x + 1;
    var arrLength = statues.length;
    var missing = numOfmissing - arrLength;
    return missing;
}
