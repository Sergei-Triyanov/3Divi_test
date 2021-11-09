export enum SizeCanvas {
    SIZE_CANVAS_WIDTH = 600,
    SIZE_CANVAS_HEIGHT  = 320,
}

export enum BarCordinat {
    BAR_CORDINAT_X = 0,
    BAR_CORDINAT_Y = 0
}

export enum BarSize {
    BAR_SIZE_MAX_HEIGHT =  300,
    BAR_SIZE_WIDTH = 20,
}

export enum RowCordinat {
    ROW_CORDINAT_Y = - (SizeCanvas.SIZE_CANVAS_HEIGHT - SizeCanvas.SIZE_CANVAS_HEIGHT / 10),
    ROW_CORDINAT_X = (0 + SizeCanvas.SIZE_CANVAS_WIDTH/5),
}

export enum LabelFont {
    LABEL_FONT_SIZE = 24,
    LABEL_FONT_FAMILY = 'Roboto'
}

export enum Step {
    STEP_X = (SizeCanvas.SIZE_CANVAS_WIDTH*2 - SizeCanvas.SIZE_CANVAS_WIDTH / 10),
    STEP_Y = (SizeCanvas.SIZE_CANVAS_HEIGHT * 2 - SizeCanvas.SIZE_CANVAS_HEIGHT / 5)
}

export enum RowSize {
    ROW_WIDTH = 80,
    ROW_START_HEIGHT = 1,
    ROW_GAP = (Step.STEP_X - RowSize.ROW_WIDTH) / 7  
}

export enum LabelCordinat {
    LABEL_CORDINAT_Y = -320,
    LABEL_CORDINAT_X = RowCordinat.ROW_CORDINAT_X + Math.floor(RowSize.ROW_WIDTH / 2) - (LabelFont.LABEL_FONT_SIZE / 2)
}