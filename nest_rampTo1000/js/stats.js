var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "45150",
        "ok": "43569",
        "ko": "1581"
    },
    "minResponseTime": {
        "total": "1",
        "ok": "1",
        "ko": "27"
    },
    "maxResponseTime": {
        "total": "1941",
        "ok": "1875",
        "ko": "1941"
    },
    "meanResponseTime": {
        "total": "42",
        "ok": "13",
        "ko": "867"
    },
    "standardDeviation": {
        "total": "188",
        "ok": "46",
        "ko": "500"
    },
    "percentiles1": {
        "total": "7",
        "ok": "7",
        "ko": "877"
    },
    "percentiles2": {
        "total": "11",
        "ok": "10",
        "ko": "1224"
    },
    "percentiles3": {
        "total": "119",
        "ok": "21",
        "ko": "1793"
    },
    "percentiles4": {
        "total": "1216",
        "ok": "180",
        "ko": "1853"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 43540,
    "percentage": 96
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 3,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 26,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 1581,
    "percentage": 4
},
    "meanNumberOfRequestsPerSecond": {
        "total": "728.226",
        "ok": "702.726",
        "ko": "25.5"
    }
},
contents: {
"req_nestjs-5328a": {
        type: "REQUEST",
        name: "NestJS",
path: "NestJS",
pathFormatted: "req_nestjs-5328a",
stats: {
    "name": "NestJS",
    "numberOfRequests": {
        "total": "45150",
        "ok": "43569",
        "ko": "1581"
    },
    "minResponseTime": {
        "total": "1",
        "ok": "1",
        "ko": "27"
    },
    "maxResponseTime": {
        "total": "1941",
        "ok": "1875",
        "ko": "1941"
    },
    "meanResponseTime": {
        "total": "42",
        "ok": "13",
        "ko": "867"
    },
    "standardDeviation": {
        "total": "188",
        "ok": "46",
        "ko": "500"
    },
    "percentiles1": {
        "total": "7",
        "ok": "7",
        "ko": "877"
    },
    "percentiles2": {
        "total": "11",
        "ok": "10",
        "ko": "1224"
    },
    "percentiles3": {
        "total": "119",
        "ok": "21",
        "ko": "1793"
    },
    "percentiles4": {
        "total": "1216",
        "ok": "180",
        "ko": "1853"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 43540,
    "percentage": 96
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 3,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 26,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 1581,
    "percentage": 4
},
    "meanNumberOfRequestsPerSecond": {
        "total": "728.226",
        "ok": "702.726",
        "ko": "25.5"
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
