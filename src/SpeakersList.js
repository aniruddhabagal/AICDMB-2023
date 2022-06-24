const SpeakersList = [
    {
        _id: "1",
        name: "John Doe",
        post: "Professor",
        desc: "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci sed quia non numquam modi tempora eius."
    }, {
        _id: "2",
        name: "John Rick",
        post: "Researcher",
        desc: "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci sed quia non numquam modi tempora eius."
    }, {
        _id: "3",
        name: "Christopher",
        post: "Scientist",
        desc: "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci sed quia non numquam modi tempora eius."
    },
    {
        _id: "4",
        name: "Anna Williams",
        post: "R & D",
        desc: "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci sed quia non numquam modi tempora eius."
    }
];

export function getSpeakers() {
    return SpeakersList;
}