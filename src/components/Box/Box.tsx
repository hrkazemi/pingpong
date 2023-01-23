
export enum BOX_NAME{
    BACKGROUND,
    PLAYER,
    BALL,
}

/* style sheet */
const backgroundStyle = {
    height: "35px",
    width: "35px",
    borderStyle: "solid",
    justifyContent: "center",
    backgroundColor: "black",
    borderRadius: "2px",
}
const playerStyle = {
    height: "35px",
    width: "35px",
    borderStyle: "solid",
    justifyContent: "center",
    backgroundColor: "blue",
    color: "white"
}

const ballStyle = {
    height: "35px",
    width: "35px",
    display: "block",
    backgroundColor: "yellow",
    justifyContent: "center",
    borderRadius: "100%",
    color: "white",
    zIndex: "10",
    position: 'relative'
}

/* function to select style */
const getStyle = (val: BOX_NAME) => {
    if (val === BOX_NAME.BACKGROUND) {
        return {};
    } if (val === BOX_NAME.PLAYER) {
        return playerStyle;
    } else {
        return ballStyle;
    }
}

interface IBox {
    name: BOX_NAME; k: number;
}

const Box = ({name}: IBox) => <div style={backgroundStyle}>
    <div style={getStyle(name)} />
</div>

export default Box;