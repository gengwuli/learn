import React, { Component } from 'react'
import ReactPlayer from 'react-player'
// audio source
const streamUrl = 'http://m128.xiami.net/541/2541/2102770149/1796004604_1498122104598.mp3?auth_key=1518145200-0-0-e1d7ff333bc20f20aa735ea75a17ef4c';

class App1 extends Component {
    onPlay = () => {
        console.log('onPlay')
        this.setState({ playing: true })
    }
    onPause = () => {
        console.log('onPause')
        this.setState({ playing: false })
    }
    onSeekMouseDown = e => {
        this.setState({ seeking: true })
    }
    onSeekChange = e => {
        this.setState({ played: parseFloat(e.target.value) })
    }
    onSeekMouseUp = e => {
        this.setState({ seeking: false })
        this.player.seekTo(parseFloat(e.target.value))
    }
    onProgress = state => {
        console.log('onProgress', state)
        // We only want to update time slider if we are not currently seeking
        if (!this.state.seeking) {
            this.setState(state)
        }
    }
    onEnded = () => {
        console.log('onEnded')
        this.setState({ playing: this.state.loop })
    }
    onDuration = (duration) => {
        console.log('onDuration', duration)
        this.setState({ duration })
    }
    playPause = () => {
        this.setState({ playing: !this.state.playing })
    }
    stop = () => {
        this.setState({ url: null, playing: false })
    }

    load = url => {
        this.setState({
            url,
            played: 0,
            loaded: 0
        })
    }
    state = {
        url: null,
        playing: true,
        volume: 0.8,
        muted: false,
        played: 0,
        loaded: 0,
        duration: 0,
        playbackRate: 1.0,
        loop: false
    }

    render () {
        const { url, playing, volume, muted, loop, played, loaded, duration, playbackRate } = this.state

        return <div>

        <ReactPlayer url={streamUrl} playing={playing}
                     onReady={() => console.log('onReady')}
                     onStart={() => console.log('onStart')}
                     onPlay={this.onPlay}
                     onPause={this.onPause}
                     onBuffer={() => console.log('onBuffer')}
                     onSeek={e => console.log('onSeek', e)}
                     onEnded={this.onEnded}
                     onError={e => console.log('onError', e)}
                     onProgress={this.onProgress}
                     onDuration={this.onDuration}
        />
        <button onClick={this.stop}>Stop</button>
        <button onClick={this.playPause}>{playing ? 'Pause' : 'Play'}</button>
        <button onClick={this.onClickFullscreen}>Fullscreen</button>
        <button onClick={this.setPlaybackRate} value={1}>1</button>
        <button onClick={this.setPlaybackRate} value={1.5}>1.5</button>
        <button onClick={this.setPlaybackRate} value={2}>2</button>
        </div>
    }
}
export default App1