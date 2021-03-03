// TODO: Create action creators as defined in tests
export const ADD_QUOTE = 'ADD_QUOTE'
export const REMOVE_QUOTE = 'REMOVE_QUOTE'
export const UPVOTE_QUOTE = 'UPVOTE_QUOTE'
export const DOWNVOTE_QUOTE = 'DOWNVOTE_QUOTE'
import uuid from 'uuid'

export const addQuote = (quote) => {
    let id = uuid();
    return{
        type: ADD_QUOTE, //type should always be a string
        quote: {
            id,
            ...quote,
            votes: 0
        }  //equivalent to quote: quote
    }
}

export const removeQuote = (quoteId) => {
    return{
        type: REMOVE_QUOTE, //type should always be a string
        quoteId  //equivalent to quoteId: quoteId
    }
}

export const upvoteQuote = (quoteId) => {
    return{
        type: UPVOTE_QUOTE, //type should always be a string
        quoteId  //equivalent to quoteId: quoteId
    }
}

export const downvoteQuote = (quoteId) => {
    return{
        type: DOWNVOTE_QUOTE, //type should always be a string
        quoteId  //equivalent to quoteId: quoteId
    }
}