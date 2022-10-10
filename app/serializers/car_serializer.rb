class CarSerializer < ActiveModel::Serializer
  attributes :id, :make, :model, :year, :url
  has_many :reviews
end
