import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
    margin: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
    register: {
        "&:hover": {
            cursor: "pointer",
        },
    },
    bgWhite: {
        backgroundColor: '#fff'
    }
}));