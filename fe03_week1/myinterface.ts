interface User1 {
    readonly dbId: number
    email: string,
    userId: number,
    googleId?: string
    // startTrail: () => string
    startTrail(): string
    getCoupon(couponname: string, value: number): number
    githubToken: string
}

interface Admin1 extends User1 {
    role: "admin" | "ta" | "learner"
}

const Parthsaarthie: Admin1 = { dbId: 22, email: "parthsaarthiesharma1909@gmail.com", userId: 2211,
role: "admin",
githubToken: "github",
startTrail: () => {
    return "trail started"
},
getCoupon: (name: "Parth10", off: 10) => {
    return 10
}
}
Parthsaarthie.email = "parthsaarthiesharma1909@gmail.com"
// Parthsaarthie.dbId = 33