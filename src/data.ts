export type Season = {
    title: string,
    episodes: Array<Episode>
}

export type Episode = {

    cover: any,
    lengthInMinutes?: number,
    number: number,
    title: string,
    description: string,
}


const seasons: Array<Season> = [
    {
        title: "Staffel 1",
        episodes: [
            {
                cover: "./assets/covers/1.png",
                number: 1,
                title: "Verwechslung, Verhaftung und Verrat",
                description: "Doreen wird auf dem Heimweg mit einer Demonstrantin verwechselt und von der Polizei verhaften, sie verliert ihren Job und muss warten bis sie zur nichtarbeitenden Bevölkerung zählt. Ihr Ehemann findet raus, dass einer seiner Nachbarn vorhat zu fliehen und meldet das seinem Kontakt bei der Stasi Andreas."
            },
            {
                cover: "./assets/covers/2.png",
                number: 2,
                title: "Die Verdächtigte",
                description: "Raik versucht über Andreas dafür zu sorgen, dass seine Ehefrau ihre Arbeit wiederbekommt und nicht mehr verdächtigt wird. Ohne Arbeit bleibt Doreen zu Hause und kümmert sich um Mandy, während sie in einen Brief an ihre Eltern in der BRD schreibt um von ihrer Lage berichtet."
            },
            {
                cover: "./assets/covers/3.png",
                number: 3,
                title: "Gefangennahme",
                description: "Andreas versichert Raik, dass niemand wirklich glaubt, dass seine Frau gegen die SED ist, sie ihre Arbeit aber nicht wiederhaben kann. Doreen beobachtet durch das Fenster, wie die Stasi die Nachbarn verhaftet und erzählt beim Abendessen Raik erschüttert davon."
            },
            {
                cover: "./assets/covers/4.png",
                number: 4,
                title: "Keine Privatsphäre",
                description: "Doreen unterhält sich mit ihrer Freundin Hanna, welche ihr offenbart, dass sie in die BRD fliehen will. Nachdem Raik und Doreen miteinander geschlafen haben, findet Raik ein Abhörgerät im Schlafzimmer. Als er der Stasi einen Bericht gibt kann er Andreas nicht in die Augen schauen."
            },
            {
                cover: "./assets/covers/5.png",
                number: 5,
                title: "Verräter",
                description: "Auf der Arbeit merkt Raik, dass sein Kollege ihm Fragen stellt, die er selbst nutz, um für das MfS jemanden zu überprüfen. Doreen trifft sich mit Hanna, wo sie einer Gruppe vorgestellt wird, mit der Hanna in die BRD über die Grenze fliehen will."
            },
            {
                cover: "./assets/covers/6.png",
                number: 6,
                title: "Ohne Vertrauen",
                description: "Bei einem Treffen von Raik und seinen Freunden fehlt Karl, da er in die BRD geflohen ist. Raik erfährt, dass Karl den Druck durch die ständige Überwachung nicht mehr ausgehalten hat. Die Gruppe lästert über die Stasi und insbesondere inoffizielle Mitarbeiter. Zu Hause fragt Raik sich, warum Karl ihm nicht vertraut hat und ob er ihn gemeldet hätte."
            },
            {
                cover: "./assets/covers/7.png",
                number: 7,
                title: "Misstraut ihnen",
                description: "Doreen geht zu einem Jobinterview. In der Zeit sucht Raik das Haus nach Wanzen ab. Am Abend bringt Raik Doreen in einen sicheren Raum und erzählt ihr von den Abhörgeräten. Beide überlegen, ob Mandy in einem Staat aufwachsen soll, indem sich Nachbarn gegenseitig überwachen und das MfS dafür sorgt, dass alle Opposition unterdrückt wird.",
            }
        ]
    },
    {
        title: "Staffel 2",
        episodes: [
            {
                cover: "./assets/covers/8.png",
                number: 8,
                title: "Unbemerkt",
                description: "Andreas befiehlt Raik Hanna über verdächtige Aktivitäten auszuhorchen. Währenddessen treffen sich Doreen und Hanna mit der Gruppe, um eine Republikflucht zu planen.",
            },
            {
                cover: "./assets/covers/9.png",
                number: 9,
                title: "Paranoia",
                description: "Raik fragt Doreen, wo sie am Nachmittag war, doch sie verheimlicht die Wahrheit. Doreen will Hanna besuchen, doch Raik rät ihr, sich von Hanna fernzuhalten. Er wird immer paranoider wegen der Stasi und probiert zu verhindern, dass seine Frau weiter verdächtigt wird. Doreen füllt sich unverstanden und eingeschränkt.",
            },
            {
                cover: "./assets/covers/10.png",
                number: 10,
                title: "Weg zum Widerstand",
                description: "Auf ihrer neuen Arbeit ist Doreen abgelenkt, da sie überlegt, wie sie ihren Mann auf die Flucht ansprechen soll. Beim Einkaufen erkennt Raik Hanna auf einer Demonstration, entscheidet sich aber dagegen, es seinem OibA zu verraten.",
            },
            {
                cover: "./assets/covers/11.png",
                number: 11,
                title: "Offenbarung",
                description: "Die Müllers zerstreiten sich den Tag über wegen der Aufforderung, sich von Hanna fernzuhalten. Nachdem Mandy anfängt zu weinen wird sie ins Bett gebracht und Raik erzählt Doreen, das er zu einen IM wurde, während sie schwanger war, um für deren Kind eine sichere Nachbarschaft zu schaffen.",
            },
            {
                cover: "./assets/covers/12.png",
                number: 12,
                title: "Stillschweigen",
                description: "Nachdem Streit reden Raik und Doreen nicht mehr miteinander, beide sind vom anderen enttäuscht. Doreen will niemanden erzählen, dass ihr Mann ein IM ist, redet aber mit Hanna über ihre Beziehungsprobleme.",
            },
            {
                cover: "./assets/covers/13.png",
                number: 13,
                title: "Versöhnung",
                description: "Raik gibt sich viel Mühe, sich mit Doreen wiederzuversöhnen. Sie vertragen sich wieder und planen das Essen für ihren Hochzeitstag. Hanna erzählt Doreen von einem großen Treffen, bei dem sich zwei Gruppen, die eine Flucht planen, treffen um zusammenzuarbeiten, Doreen sagt aber wegen dem Hochzeitstagsplänen ab.",
            },
            {
                cover: "./assets/covers/14.png",
                number: 14,
                title: "Liebe",
                description: "Am Hochzeitstag gehen die Müllers essen und probieren alle, Konflikte zu lösen. Doreen gesteht, dass sie in die BRD zu ihren Eltern möchte. Raik macht klar, dass er nur mit ihr und Mandy sein will. Nun schmieden beide Fluchtpläne zusammen und tauschen Informationen aus.",
            },
            {
                cover: "./assets/covers/15.png",
                number: 15,
                title: "Misstraut",
                description: "Auf dem Rückweg nach Hause laufen Raik und Doreen an Hannas Haus vorbei, wo ein Großeinsatz der Polizei stattfindet. Die Freundesgruppe von Raik und die Fluchtgruppe von Doreen werden unter der Aufsicht von Andreas abgeführt, Hanna schreit \"Verrat\".",
            }
        ]
    }
]

const descriptionLengths = seasons
    .map(season => season.episodes)
    .flat(1)
    .map(season => season.description.length);

const average = Math.round(descriptionLengths
    .reduce((a, b) => a + b, 0) / descriptionLengths.length || 0)

for (let season of seasons) {
    for (let episode of season.episodes) {
        episode.lengthInMinutes = Math.round((episode.description.length / average) * 30)
    }
}

export default seasons