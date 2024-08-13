type UserCardProps = {
    name?: string;
    age?: number
};

function UserCard({ name, age }: UserCardProps) {

    if (name == null && age == null){

        return (
            <div className="card">
                There is no content to be displayed
            </div>

        );
    }

    return (
        <div className="card">
                <div className="card-content">
                    <h3 className="card-title">{name}</h3>
                    <p className="card-description">
                        {age}
                    </p>
                </div>
        </div>

);
}

export default UserCard;
