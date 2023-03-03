import './chat.css'

export function MessageBoard(){
    return (
        <>
        <div class="chat">
            <div class="chatMessages">
                <div class="alert alert-primary" role="alert">
                    Message
                </div>

                <div class="alert alert-primary" role="alert">
                    Another Message
                </div>
            </div>
            <div class="chatInput">
                <div class="input-group input-group-sm mb-3">
                    <div class="input-group-prepend">
                    <span class="input-group-text" id="inputGroup-sizing-sm">Send</span>
                    </div>
                    <input type="text" class="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm"/>
                </div>
            </div>
        </div>
        </>
    )
}