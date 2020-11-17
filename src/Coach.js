import React from 'react';
import useEntries from "./hooks/useEntries";

function Coach() {
    const entries = useEntries('coach');
    console.log('fetched entries');
    console.log(entries);

    const introduction = entries.map((entry) => (
        <div className="entry" key={entry.sys.id}>
            <h4>{entry.fields.title}</h4>

            <p>{entry.fields.ivettsIntroduction.content[0].content[0].value}</p>

            {/*<p>Ivett Ördög is a lead developer and an experienced dev coach who has worked at*/}
            {/*    several*/}
            {/*    industry*/}
            {/*    leading companies. She combines her developer and leadership skills with a*/}
            {/*    mindful*/}
            {/*    and*/}
            {/*    critical*/}
            {/*    approach to people and is an active participant in meetups, conferences, and the*/}
            {/*    developer community*/}
            {/*    in general. She has taught university courses and is an occasional blog author.*/}
            {/*    She*/}
            {/*    is*/}
            {/*    also the*/}
            {/*    creator of the Morning Commute YouTube channel.</p>*/}
            {/*<p>During her tenure at Emarsys (acquired by SAP) the company has grown from having*/}
            {/*    a*/}
            {/*    dozen*/}
            {/*    developers*/}
            {/*    on staff into an engineering organization with over 200 people on payroll. Ivett*/}
            {/*    has*/}
            {/*    successfully*/}
            {/*    managed teams during this period. A significant part of the organisation was on*/}
            {/*    boarded*/}
            {/*    by her as*/}
            {/*    the leader of the company's bootcamp initiative. She also led the team that was*/}
            {/*    the*/}
            {/*    first to*/}
            {/*    implement a continuous delivery approach and she was a strong proponent of using*/}
            {/*    the*/}
            {/*    Saga pattern*/}
            {/*    that solved the resiliency issues that arose as the company moved from a*/}
            {/*    monolithic*/}
            {/*    architecture to*/}
            {/*    a microservice architecture.</p>*/}
            {/*<p>The unique combination of coaching, coding and leadership as well as her*/}
            {/*    experience*/}
            {/*    with*/}
            {/*    introducing*/}
            {/*    continuous delivery and microservice architectures makes her a great fit for*/}
            {/*    helping*/}
            {/*    you*/}
            {/*    get better*/}
            {/*    at delivering value early and often as the*/}
            {/*    <a href="https://agilemanifesto.org/principles.html" target="_blank"> first*/}
            {/*        principle </a>*/}
            {/*    of the*/}
            {/*    <a href="https://agilemanifesto.org/" target="_blank"> Agile manifesto </a>*/}
            {/*    demands. She is*/}
            {/*    the perfect opposite of the coach who teaches from the book and believes that a*/}
            {/*    company's*/}
            {/*    engineering culture is the key to its success: instead of following a so called*/}
            {/*    “agile*/}
            {/*    framework” or*/}
            {/*    hiring “devops” engineers and putting them in a separate silo building a culture*/}
            {/*    of*/}
            {/*    continuous*/}
            {/*    improvement, short and incremental iterations and rigorously following a*/}
            {/*    scientific*/}
            {/*    approach to*/}
            {/*    problem solving is what makes a successful engineering organization. She lives,*/}
            {/*    practices, and*/}
            {/*    teaches agile, lean, and continuous deployment and she's more than happy to*/}
            {/*    share*/}
            {/*    her*/}
            {/*    knowledge and*/}
            {/*    comments with you.</p>*/}
        </div>
    ))

    return introduction;
}

export default Coach;
