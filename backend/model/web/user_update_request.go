package web

type UserUpdateRequest struct {
	Id        int
	Nama      string
	Username  string
	Email     string
	Password  string
	Role      string
	Create_at string
	Update_at string
}
