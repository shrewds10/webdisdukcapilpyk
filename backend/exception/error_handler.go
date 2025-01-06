package exception

type NotFoundHandler struct {
	Error string
}

func NewNotFoundHandler(err string) NotFoundHandler {
	return NotFoundHandler{Error: err}
}
