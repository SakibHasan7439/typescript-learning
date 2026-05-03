interface Developers<T, X = null> {
    name: string;
    salary: number;

    device: {
        brand: string;
        model: string;
        releasedYear: number;
    }

    smartWatch: T,
    bike ?: X
}

const poorDeveloper : Developers<{
    heartRate: string;
    stopwatch: boolean;
}, 
{brand: 'Yamaha', engineCapacity: '200CC'}
> = {
    name: 'mir gorib',
    salary: 100,

    device: {
        brand: 'lenovo',
        model: 'A12',
        releasedYear: 2024
    },

    smartWatch: {
        heartRate: '99',
        stopwatch: true
    }
}


interface RichDevWatch {
    brand: string;
    heartRate: string;
    callSupport: boolean;
    AIFeature: boolean
}

const RichDeveloper : Developers<RichDevWatch> = {
    name: 'mir Rich',
    salary: 100,

    device: {
        brand: 'HP',
        model: 'A12',
        releasedYear: 2026
    },

    smartWatch: {
        brand: 'Apple',
        heartRate: '99',
        callSupport: true,
        AIFeature: true
    }
}