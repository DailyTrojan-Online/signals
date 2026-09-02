const ANALYTICS_URL =
    "https://ancile.dailytrojandigitalmanaging.workers.dev/api/analytics/games";

interface AnalyticsPayload {
    url: string;
    game: "signals";
    event: string;
    error?: string;
    data?: Record<string, unknown>;
}

export function trackAnalytics(
    event: string,
    data?: Record<string, unknown>,
    error?: string,
) {
    const payload: AnalyticsPayload = {
        url: window.location.href,
        game: "signals",
        event,
    };
    if (data != null) payload.data = data;
    if (error != null) payload.error = error;

    fetch(ANALYTICS_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
    }).catch((err) => {
        console.error("Analytics tracking failed:", err);
    });
}
