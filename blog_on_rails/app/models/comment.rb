class Comment < ApplicationRecord
  belongs_to :user
  belongs_to :post, optional: true

  validates :body,
          presence: true

end
