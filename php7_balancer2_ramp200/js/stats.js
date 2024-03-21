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
        "total": "43",
        "ok": "43",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "39523",
        "ok": "39523",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "6305",
        "ok": "6305",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "11804",
        "ok": "11804",
        "ko": "-"
    },
    "percentiles1": {
        "total": "1389",
        "ok": "1389",
        "ko": "-"
    },
    "percentiles2": {
        "total": "1954",
        "ok": "1954",
        "ko": "-"
    },
    "percentiles3": {
        "total": "33795",
        "ok": "33795",
        "ko": "-"
    },
    "percentiles4": {
        "total": "34644",
        "ok": "34644",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 2876,
    "percentage": 31
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 989,
    "percentage": 11
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 5285,
    "percentage": 58
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
"req_nginx-auth-serv-d76ff": {
        type: "REQUEST",
        name: "Nginx_Auth Server",
path: "Nginx_Auth Server",
pathFormatted: "req_nginx-auth-serv-d76ff",
stats: {
    "name": "Nginx_Auth Server",
    "numberOfRequests": {
        "total": "9150",
        "ok": "9150",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "43",
        "ok": "43",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "39523",
        "ok": "39523",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "6305",
        "ok": "6305",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "11804",
        "ok": "11804",
        "ko": "-"
    },
    "percentiles1": {
        "total": "1389",
        "ok": "1389",
        "ko": "-"
    },
    "percentiles2": {
        "total": "1954",
        "ok": "1954",
        "ko": "-"
    },
    "percentiles3": {
        "total": "33795",
        "ok": "33795",
        "ko": "-"
    },
    "percentiles4": {
        "total": "34644",
        "ok": "34644",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 2876,
    "percentage": 31
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 989,
    "percentage": 11
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 5285,
    "percentage": 58
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
