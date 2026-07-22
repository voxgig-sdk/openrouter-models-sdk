package core

type OpenrouterModelsError struct {
	IsOpenrouterModelsError bool
	Sdk              string
	Code             string
	Msg              string
	Ctx              *Context
	Result           any
	Spec             any
}

func NewOpenrouterModelsError(code string, msg string, ctx *Context) *OpenrouterModelsError {
	return &OpenrouterModelsError{
		IsOpenrouterModelsError: true,
		Sdk:              "OpenrouterModels",
		Code:             code,
		Msg:              msg,
		Ctx:              ctx,
	}
}

func (e *OpenrouterModelsError) Error() string {
	return e.Msg
}
