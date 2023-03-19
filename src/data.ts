export type Season = {
    title: string,
    episodes: Array<Episode>
}

export type Episode = {

    cover: any,
    lengthInMinutes: number,
    number: number,
    title: string,
    description: string,
}

import TestCover from "./assets/testImage.png"

const seasons: Array<Season> = [
    {
        title: "Staffel 1",
        episodes: [
            {
                cover: TestCover,
                lengthInMinutes: 30,
                number: 1,
                title: "Pilot",
                description: "ls ihm ein anspruchsvoller neuer Captain vorgesetzt wird, muss ein genialer, aber kindischer Polizist aus Brooklyn wohl oder übel Regeltreue und Teamfähigkeit lernen."
            }, {
                cover: TestCover,
                lengthInMinutes: 30,
                number: 1,
                title: "Pilot",
                description: "ls ihm ein anspruchsvoller neuer Captain vorgesetzt wird, muss ein genialer, aber kindischer Polizist aus Brooklyn wohl oder übel Regeltreue und Teamfähigkeit lernen."
            }, {
                cover: TestCover,
                lengthInMinutes: 30,
                number: 1,
                title: "Pilot",
                description: "ls ihm ein anspruchsvoller neuer Captain vorgesetzt wird, muss ein genialer, aber kindischer Polizist aus Brooklyn wohl oder übel Regeltreue und Teamfähigkeit lernen."
            }, {
                cover: TestCover,
                lengthInMinutes: 30,
                number: 1,
                title: "Pilot",
                description: "ls ihm ein anspruchsvoller neuer Captain vorgesetzt wird, muss ein genialer, aber kindischer Polizist aus Brooklyn wohl oder übel Regeltreue und Teamfähigkeit lernen."
            }, {
                cover: TestCover,
                lengthInMinutes: 30,
                number: 1,
                title: "Pilot",
                description: "ls ihm ein anspruchsvoller neuer Captain vorgesetzt wird, muss ein genialer, aber kindischer Polizist aus Brooklyn wohl oder übel Regeltreue und Teamfähigkeit lernen."
            }, {
                cover: TestCover,
                lengthInMinutes: 30,
                number: 1,
                title: "Pilot",
                description: "ls ihm ein anspruchsvoller neuer Captain vorgesetzt wird, muss ein genialer, aber kindischer Polizist aus Brooklyn wohl oder übel Regeltreue und Teamfähigkeit lernen."
            },
        ]
    },
    {
        title: "Staffel 2",
        episodes: [
            {
                cover: TestCover,
                lengthInMinutes: 30,
                number: 1,
                title: "Pilot",
                description: "ls ihm ein anspruchsvoller neuer Captain vorgesetzt wird, muss ein genialer, aber kindischer Polizist aus Brooklyn wohl oder übel Regeltreue und Teamfähigkeit lernen."
            }, {
                cover: TestCover,
                lengthInMinutes: 30,
                number: 1,
                title: "Pilot",
                description: "ls ihm ein anspruchsvoller neuer Captain vorgesetzt wird, muss ein genialer, aber kindischer Polizist aus Brooklyn wohl oder übel Regeltreue und Teamfähigkeit lernen."
            }, {
                cover: TestCover,
                lengthInMinutes: 30,
                number: 1,
                title: "Pilot",
                description: "ls ihm ein anspruchsvoller neuer Captain vorgesetzt wird, muss ein genialer, aber kindischer Polizist aus Brooklyn wohl oder übel Regeltreue und Teamfähigkeit lernen."
            }, {
                cover: TestCover,
                lengthInMinutes: 30,
                number: 1,
                title: "Pilot",
                description: "ls ihm ein anspruchsvoller neuer Captain vorgesetzt wird, muss ein genialer, aber kindischer Polizist aus Brooklyn wohl oder übel Regeltreue und Teamfähigkeit lernen."
            }, {
                cover: TestCover,
                lengthInMinutes: 30,
                number: 1,
                title: "Pilot",
                description: "ls ihm ein anspruchsvoller neuer Captain vorgesetzt wird, muss ein genialer, aber kindischer Polizist aus Brooklyn wohl oder übel Regeltreue und Teamfähigkeit lernen."
            },
        ]
    }
]

export default seasons