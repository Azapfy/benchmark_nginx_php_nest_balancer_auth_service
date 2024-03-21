var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "9150",
        "ok": "8692",
        "ko": "458"
    },
    "minResponseTime": {
        "total": "20",
        "ok": "62",
        "ko": "20"
    },
    "maxResponseTime": {
        "total": "60010",
        "ok": "56583",
        "ko": "60010"
    },
    "meanResponseTime": {
        "total": "12680",
        "ok": "11245",
        "ko": "39913"
    },
    "standardDeviation": {
        "total": "15233",
        "ok": "12956",
        "ko": "25876"
    },
    "percentiles1": {
        "total": "6167",
        "ok": "6104",
        "ko": "60000"
    },
    "percentiles2": {
        "total": "14045",
        "ok": "12932",
        "ko": "60001"
    },
    "percentiles3": {
        "total": "40446",
        "ok": "37918",
        "ko": "60010"
    },
    "percentiles4": {
        "total": "60001",
        "ok": "53300",
        "ko": "60010"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 1532,
    "percentage": 17
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 131,
    "percentage": 1
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 7029,
    "percentage": 77
},
    "group4": {
    "name": "failed",
    "count": 458,
    "percentage": 5
},
    "meanNumberOfRequestsPerSecond": {
        "total": "89.706",
        "ok": "85.216",
        "ko": "4.49"
    }
},
contents: {
"req_php8-5dba3": {
        type: "REQUEST",
        name: "PHP8",
path: "PHP8",
pathFormatted: "req_php8-5dba3",
stats: {
    "name": "PHP8",
    "numberOfRequests": {
        "total": "9150",
        "ok": "8692",
        "ko": "458"
    },
    "minResponseTime": {
        "total": "20",
        "ok": "62",
        "ko": "20"
    },
    "maxResponseTime": {
        "total": "60010",
        "ok": "56583",
        "ko": "60010"
    },
    "meanResponseTime": {
        "total": "12680",
        "ok": "11245",
        "ko": "39913"
    },
    "standardDeviation": {
        "total": "15233",
        "ok": "12956",
        "ko": "25876"
    },
    "percentiles1": {
        "total": "6167",
        "ok": "6104",
        "ko": "60000"
    },
    "percentiles2": {
        "total": "14045",
        "ok": "12932",
        "ko": "60001"
    },
    "percentiles3": {
        "total": "40446",
        "ok": "37918",
        "ko": "60010"
    },
    "percentiles4": {
        "total": "60001",
        "ok": "53300",
        "ko": "60010"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 1532,
    "percentage": 17
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 131,
    "percentage": 1
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 7029,
    "percentage": 77
},
    "group4": {
    "name": "failed",
    "count": 458,
    "percentage": 5
},
    "meanNumberOfRequestsPerSecond": {
        "total": "89.706",
        "ok": "85.216",
        "ko": "4.49"
    }
}
    }
}

}

function fillStats(stat){
    $("#numberOfRequests").append(stat.numberOfRequests.total);
    $("#numberOfRequestsOK").append(stat.numberOfRequests.ok);
    $("#numberOfRequestsKO").append(stat.numberOfRequests.ko);

    $("#minResponseTime").append(stat.minResponseTime.total);
    $("#minResponseTimeOK").append(stat.minResponseTime.ok);
    $("#minResponseTimeKO").append(stat.minResponseTime.ko);

    $("#maxResponseTime").append(stat.maxResponseTime.total);
    $("#maxResponseTimeOK").append(stat.maxResponseTime.ok);
    $("#maxResponseTimeKO").append(stat.maxResponseTime.ko);

    $("#meanResponseTime").append(stat.meanResponseTime.total);
    $("#meanResponseTimeOK").append(stat.meanResponseTime.ok);
    $("#meanResponseTimeKO").append(stat.meanResponseTime.ko);

    $("#standardDeviation").append(stat.standardDeviation.total);
    $("#standardDeviationOK").append(stat.standardDeviation.ok);
    $("#standardDeviationKO").append(stat.standardDeviation.ko);

    $("#percentiles1").append(stat.percentiles1.total);
    $("#percentiles1OK").append(stat.percentiles1.ok);
    $("#percentiles1KO").append(stat.percentiles1.ko);

    $("#percentiles2").append(stat.percentiles2.total);
    $("#percentiles2OK").append(stat.percentiles2.ok);
    $("#percentiles2KO").append(stat.percentiles2.ko);

    $("#percentiles3").append(stat.percentiles3.total);
    $("#percentiles3OK").append(stat.percentiles3.ok);
    $("#percentiles3KO").append(stat.percentiles3.ko);

    $("#percentiles4").append(stat.percentiles4.total);
    $("#percentiles4OK").append(stat.percentiles4.ok);
    $("#percentiles4KO").append(stat.percentiles4.ko);

    $("#meanNumberOfRequestsPerSecond").append(stat.meanNumberOfRequestsPerSecond.total);
    $("#meanNumberOfRequestsPerSecondOK").append(stat.meanNumberOfRequestsPerSecond.ok);
    $("#meanNumberOfRequestsPerSecondKO").append(stat.meanNumberOfRequestsPerSecond.ko);
}
