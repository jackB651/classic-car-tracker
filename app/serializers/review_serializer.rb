class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :username, :rating, :review
  has_one :car

  def username
     object.user.username
  end
end
