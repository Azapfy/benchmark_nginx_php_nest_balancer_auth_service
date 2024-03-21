var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "9150",
        "ok": "9150",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "48",
        "ok": "48",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "52756",
        "ok": "52756",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "5748",
        "ok": "5748",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "7281",
        "ok": "7281",
        "ko": "-"
    },
    "percentiles1": {
        "total": "4310",
        "ok": "4310",
        "ko": "-"
    },
    "percentiles2": {
        "total": "5721",
        "ok": "5721",
        "ko": "-"
    },
    "percentiles3": {
        "total": "20308",
        "ok": "20308",
        "ko": "-"
    },
    "percentiles4": {
        "total": "32597",
        "ok": "32597",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 2398,
    "percentage": 26
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 203,
    "percentage": 2
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 6549,
    "percentage": 72
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "101.667",
        "ok": "101.667",
        "ko": "-"
    }
},
contents: {
"req_php7-16e77": {
        type: "REQUEST",
        name: "PHP7",
path: "PHP7",
pathFormatted: "req_php7-16e77",
stats: {
    "name": "PHP7",
    "numberOfRequests": {
        "total": "9150",
        "ok": "9150",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "48",
        "ok": "48",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "52756",
        "ok": "52756",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "5748",
        "ok": "5748",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "7281",
        "ok": "7281",
        "ko": "-"
    },
    "percentiles1": {
        "total": "4310",
        "ok": "4310",
        "ko": "-"
    },
    "percentiles2": {
        "total": "5721",
        "ok": "5721",
        "ko": "-"
    },
    "percentiles3": {
        "total": "20308",
        "ok": "20308",
        "ko": "-"
    },
    "percentiles4": {
        "total": "32597",
        "ok": "32597",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 2398,
    "percentage": 26
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 203,
    "percentage": 2
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 6549,
    "percentage": 72
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "101.667",
        "ok": "101.667",
        "ko": "-"
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
