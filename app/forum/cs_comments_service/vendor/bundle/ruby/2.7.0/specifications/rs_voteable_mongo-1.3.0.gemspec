# -*- encoding: utf-8 -*-
# stub: rs_voteable_mongo 1.3.0 ruby lib

Gem::Specification.new do |s|
  s.name = "rs_voteable_mongo".freeze
  s.version = "1.3.0"

  s.required_rubygems_version = Gem::Requirement.new(">= 0".freeze) if s.respond_to? :required_rubygems_version=
  s.require_paths = ["lib".freeze]
  s.authors = ["RocketScience".freeze, "Alex Nguyen".freeze]
  s.date = "2018-11-20"
  s.description = "Add up / down voting ability to Mongoid documents. Optimized for speed by using only ONE request to MongoDB to validate, update, and retrieve updated data.".freeze
  s.email = ["i@gleb.tv".freeze, "alex@vinova.sg".freeze]
  s.homepage = "https://github.com/rs-pro/voteable_mongo".freeze
  s.licenses = ["MIT".freeze]
  s.rubygems_version = "3.3.13".freeze
  s.summary = "Add up / down voting ability to Mongoid documents".freeze

  s.installed_by_version = "3.3.13" if s.respond_to? :installed_by_version

  if s.respond_to? :specification_version then
    s.specification_version = 4
  end

  if s.respond_to? :add_runtime_dependency then
    s.add_runtime_dependency(%q<mongoid>.freeze, ["~> 7.0"])
    s.add_development_dependency(%q<rspec>.freeze, ["~> 2.14.1"])
    s.add_development_dependency(%q<bundler>.freeze, [">= 0"])
    s.add_development_dependency(%q<rake>.freeze, ["< 11.0"])
  else
    s.add_dependency(%q<mongoid>.freeze, ["~> 7.0"])
    s.add_dependency(%q<rspec>.freeze, ["~> 2.14.1"])
    s.add_dependency(%q<bundler>.freeze, [">= 0"])
    s.add_dependency(%q<rake>.freeze, ["< 11.0"])
  end
end
